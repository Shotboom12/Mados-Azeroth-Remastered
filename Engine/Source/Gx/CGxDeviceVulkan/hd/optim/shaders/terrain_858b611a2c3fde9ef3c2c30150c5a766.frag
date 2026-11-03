#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3882;
vec4 _RESERVED_IDENTIFIER_FIXUP_3883;


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
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
    bool _67 = hdOverride >= 0;
    bool _87;
    if (_67)
    {
        _87 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _87 = _67;
    }
    vec4 _88;
    if (_87)
    {
        _88 = vec4(float(hdOverride));
    }
    else
    {
        _88 = value;
    }
    return _88;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _105 = hdOverride >= 0;
    bool _114;
    if (_105)
    {
        _114 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _114 = _105;
    }
    vec4 _115;
    if (_114)
    {
        _115 = vec4(float(hdOverride));
    }
    else
    {
        _115 = value;
    }
    return _115;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _132 = hdOverride >= 0;
    bool _142;
    if (_132)
    {
        _142 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _142 = _132;
    }
    vec4 _143;
    if (_142)
    {
        _143 = vec4(float(hdOverride));
    }
    else
    {
        _143 = value;
    }
    return _143;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _160 = hdOverride >= 0;
    bool _170;
    if (_160)
    {
        _170 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _170 = _160;
    }
    vec4 _171;
    if (_170)
    {
        _171 = vec4(float(hdOverride));
    }
    else
    {
        _171 = value;
    }
    return _171;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _188 = hdOverride >= 0;
    bool _197;
    if (_188)
    {
        _197 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _197 = _188;
    }
    vec4 _198;
    if (_197)
    {
        _198 = vec4(float(hdOverride));
    }
    else
    {
        _198 = value;
    }
    return _198;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _216 = hdOverride >= 0;
    bool _226;
    if (_216)
    {
        _226 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _226 = _216;
    }
    vec4 _227;
    if (_226)
    {
        _227 = vec4(float(hdOverride));
    }
    else
    {
        _227 = value;
    }
    return _227;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _245 = hdOverride >= 0;
    bool _255;
    if (_245)
    {
        _255 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _255 = _245;
    }
    vec4 _256;
    if (_255)
    {
        _256 = vec4(float(hdOverride));
    }
    else
    {
        _256 = value;
    }
    return _256;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _274 = hdOverride >= 0;
    bool _284;
    if (_274)
    {
        _284 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _284 = _274;
    }
    vec4 _285;
    if (_284)
    {
        _285 = vec4(float(hdOverride));
    }
    else
    {
        _285 = value;
    }
    return _285;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _303 = hdOverride >= 0;
    bool _313;
    if (_303)
    {
        _313 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _313 = _303;
    }
    vec4 _314;
    if (_313)
    {
        _314 = vec4(float(hdOverride));
    }
    else
    {
        _314 = value;
    }
    return _314;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1196 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1200 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1204 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1208 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1212 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1217 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3882).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1220 = _RESERVED_IDENTIFIER_FIXUP_1217 + _RESERVED_IDENTIFIER_FIXUP_1217;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3061 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3061.x = _RESERVED_IDENTIFIER_FIXUP_1220.x;
    _RESERVED_IDENTIFIER_FIXUP_3061.y = _RESERVED_IDENTIFIER_FIXUP_1220.y;
    _RESERVED_IDENTIFIER_FIXUP_3061.z = _RESERVED_IDENTIFIER_FIXUP_1220.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_1196.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_1228 * _RESERVED_IDENTIFIER_FIXUP_3061.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3067 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3067.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
    _RESERVED_IDENTIFIER_FIXUP_3067.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
    _RESERVED_IDENTIFIER_FIXUP_3067.z = _RESERVED_IDENTIFIER_FIXUP_1231.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1245 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1215.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1246 = mix(_RESERVED_IDENTIFIER_FIXUP_3067.xyz, _RESERVED_IDENTIFIER_FIXUP_1228, _RESERVED_IDENTIFIER_FIXUP_1245);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3073 = _RESERVED_IDENTIFIER_FIXUP_1196;
    _RESERVED_IDENTIFIER_FIXUP_3073.x = _RESERVED_IDENTIFIER_FIXUP_1246.x;
    _RESERVED_IDENTIFIER_FIXUP_3073.y = _RESERVED_IDENTIFIER_FIXUP_1246.y;
    _RESERVED_IDENTIFIER_FIXUP_3073.z = _RESERVED_IDENTIFIER_FIXUP_1246.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1254 = _RESERVED_IDENTIFIER_FIXUP_1200.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1257 = _RESERVED_IDENTIFIER_FIXUP_1254 * _RESERVED_IDENTIFIER_FIXUP_3061.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3067.x = _RESERVED_IDENTIFIER_FIXUP_1257.x;
    _RESERVED_IDENTIFIER_FIXUP_3067.y = _RESERVED_IDENTIFIER_FIXUP_1257.y;
    _RESERVED_IDENTIFIER_FIXUP_3067.z = _RESERVED_IDENTIFIER_FIXUP_1257.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1271 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1215.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1272 = mix(_RESERVED_IDENTIFIER_FIXUP_3067.xyz, _RESERVED_IDENTIFIER_FIXUP_1254, _RESERVED_IDENTIFIER_FIXUP_1271);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3085 = _RESERVED_IDENTIFIER_FIXUP_1200;
    _RESERVED_IDENTIFIER_FIXUP_3085.x = _RESERVED_IDENTIFIER_FIXUP_1272.x;
    _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_1272.y;
    _RESERVED_IDENTIFIER_FIXUP_3085.z = _RESERVED_IDENTIFIER_FIXUP_1272.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1280 = _RESERVED_IDENTIFIER_FIXUP_1204.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1283 = _RESERVED_IDENTIFIER_FIXUP_1280 * _RESERVED_IDENTIFIER_FIXUP_3061.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3067.x = _RESERVED_IDENTIFIER_FIXUP_1283.x;
    _RESERVED_IDENTIFIER_FIXUP_3067.y = _RESERVED_IDENTIFIER_FIXUP_1283.y;
    _RESERVED_IDENTIFIER_FIXUP_3067.z = _RESERVED_IDENTIFIER_FIXUP_1283.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1297 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1215.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1298 = mix(_RESERVED_IDENTIFIER_FIXUP_3067.xyz, _RESERVED_IDENTIFIER_FIXUP_1280, _RESERVED_IDENTIFIER_FIXUP_1297);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3097 = _RESERVED_IDENTIFIER_FIXUP_1204;
    _RESERVED_IDENTIFIER_FIXUP_3097.x = _RESERVED_IDENTIFIER_FIXUP_1298.x;
    _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1298.y;
    _RESERVED_IDENTIFIER_FIXUP_3097.z = _RESERVED_IDENTIFIER_FIXUP_1298.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1306 = _RESERVED_IDENTIFIER_FIXUP_1208.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_1306 * _RESERVED_IDENTIFIER_FIXUP_3061.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3103 = _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_3103.x = _RESERVED_IDENTIFIER_FIXUP_1309.x;
    _RESERVED_IDENTIFIER_FIXUP_3103.y = _RESERVED_IDENTIFIER_FIXUP_1309.y;
    _RESERVED_IDENTIFIER_FIXUP_3103.z = _RESERVED_IDENTIFIER_FIXUP_1309.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1324 = mix(_RESERVED_IDENTIFIER_FIXUP_3103.xyz, _RESERVED_IDENTIFIER_FIXUP_1306, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3103.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3109 = _RESERVED_IDENTIFIER_FIXUP_1208;
    _RESERVED_IDENTIFIER_FIXUP_3109.x = _RESERVED_IDENTIFIER_FIXUP_1324.x;
    _RESERVED_IDENTIFIER_FIXUP_3109.y = _RESERVED_IDENTIFIER_FIXUP_1324.y;
    _RESERVED_IDENTIFIER_FIXUP_3109.z = _RESERVED_IDENTIFIER_FIXUP_1324.z;
    float _RESERVED_IDENTIFIER_FIXUP_1334 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1212.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3115 = _RESERVED_IDENTIFIER_FIXUP_1212;
    _RESERVED_IDENTIFIER_FIXUP_3115.w = _RESERVED_IDENTIFIER_FIXUP_1334;
    _RESERVED_IDENTIFIER_FIXUP_3115.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1334;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_3115.xxxx * _RESERVED_IDENTIFIER_FIXUP_3085;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1362 = (_RESERVED_IDENTIFIER_FIXUP_3109 * _RESERVED_IDENTIFIER_FIXUP_3115.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3097 * _RESERVED_IDENTIFIER_FIXUP_3115.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3073 * _RESERVED_IDENTIFIER_FIXUP_3115.wwww) + _RESERVED_IDENTIFIER_FIXUP_1344));
    float _RESERVED_IDENTIFIER_FIXUP_1369 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3122 = _RESERVED_IDENTIFIER_FIXUP_1344;
    _RESERVED_IDENTIFIER_FIXUP_3122.x = _RESERVED_IDENTIFIER_FIXUP_1369;
    float _RESERVED_IDENTIFIER_FIXUP_1375 = clamp((_RESERVED_IDENTIFIER_FIXUP_1369 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3122.x = _RESERVED_IDENTIFIER_FIXUP_1375;
    float _RESERVED_IDENTIFIER_FIXUP_1381 = ((-_RESERVED_IDENTIFIER_FIXUP_1375) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3122.y = _RESERVED_IDENTIFIER_FIXUP_1381;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3885;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3884;
    if (_RESERVED_IDENTIFIER_FIXUP_1381 != (-_RESERVED_IDENTIFIER_FIXUP_1381))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1393 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3134 = _RESERVED_IDENTIFIER_FIXUP_3122;
        _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_1393.x;
        _RESERVED_IDENTIFIER_FIXUP_3134.z = _RESERVED_IDENTIFIER_FIXUP_1393.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1403 = _RESERVED_IDENTIFIER_FIXUP_3134.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3138;
        _RESERVED_IDENTIFIER_FIXUP_3138.x = _RESERVED_IDENTIFIER_FIXUP_1403.x;
        _RESERVED_IDENTIFIER_FIXUP_3138.y = _RESERVED_IDENTIFIER_FIXUP_1403.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1413 = _RESERVED_IDENTIFIER_FIXUP_3134.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3142;
        _RESERVED_IDENTIFIER_FIXUP_3142.x = _RESERVED_IDENTIFIER_FIXUP_1413.x;
        _RESERVED_IDENTIFIER_FIXUP_3142.y = _RESERVED_IDENTIFIER_FIXUP_1413.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1423 = _RESERVED_IDENTIFIER_FIXUP_3134.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3146;
        _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_1423.x;
        _RESERVED_IDENTIFIER_FIXUP_3146.y = _RESERVED_IDENTIFIER_FIXUP_1423.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1433 = _RESERVED_IDENTIFIER_FIXUP_3134.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3150;
        _RESERVED_IDENTIFIER_FIXUP_3150.x = _RESERVED_IDENTIFIER_FIXUP_1433.x;
        _RESERVED_IDENTIFIER_FIXUP_3150.y = _RESERVED_IDENTIFIER_FIXUP_1433.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1441 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1441.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1441.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1447 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3138.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3142.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3146.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3150.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3138.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1447.y = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3142.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1447.z = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3146.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1447.w = hdLod5(param_11, param_12).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1504 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1447 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3150.xy;
        float param_14 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1510 = hdLod5(param_13, param_14).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_1510;
        float _RESERVED_IDENTIFIER_FIXUP_1515 = float(_RESERVED_IDENTIFIER_FIXUP_1510 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_1515;
        float _RESERVED_IDENTIFIER_FIXUP_1518 = dot(_RESERVED_IDENTIFIER_FIXUP_1504, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3134.z = _RESERVED_IDENTIFIER_FIXUP_1518;
        float _RESERVED_IDENTIFIER_FIXUP_1524 = _RESERVED_IDENTIFIER_FIXUP_1515 + _RESERVED_IDENTIFIER_FIXUP_1518;
        _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_1524;
        float _RESERVED_IDENTIFIER_FIXUP_1529 = (_RESERVED_IDENTIFIER_FIXUP_1524 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_1529;
        _RESERVED_IDENTIFIER_FIXUP_3134.x = (_RESERVED_IDENTIFIER_FIXUP_1375 * _RESERVED_IDENTIFIER_FIXUP_1529) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3885 = _RESERVED_IDENTIFIER_FIXUP_1504;
        _RESERVED_IDENTIFIER_FIXUP_3884 = _RESERVED_IDENTIFIER_FIXUP_3134;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3132 = _RESERVED_IDENTIFIER_FIXUP_3122;
        _RESERVED_IDENTIFIER_FIXUP_3132.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3885 = _RESERVED_IDENTIFIER_FIXUP_3097;
        _RESERVED_IDENTIFIER_FIXUP_3884 = _RESERVED_IDENTIFIER_FIXUP_3132;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1547 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3206 = _RESERVED_IDENTIFIER_FIXUP_3884;
    _RESERVED_IDENTIFIER_FIXUP_3206.y = _RESERVED_IDENTIFIER_FIXUP_1547;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3888;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3886;
    if (_RESERVED_IDENTIFIER_FIXUP_1547 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1556 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3367 = _RESERVED_IDENTIFIER_FIXUP_3206;
        _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_1556.x;
        _RESERVED_IDENTIFIER_FIXUP_3367.z = _RESERVED_IDENTIFIER_FIXUP_1556.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1566 = _RESERVED_IDENTIFIER_FIXUP_3367.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3371;
        _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_1566.x;
        _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_1566.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1576 = _RESERVED_IDENTIFIER_FIXUP_3367.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3375;
        _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_1576.x;
        _RESERVED_IDENTIFIER_FIXUP_3375.y = _RESERVED_IDENTIFIER_FIXUP_1576.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1586 = _RESERVED_IDENTIFIER_FIXUP_3367.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3379;
        _RESERVED_IDENTIFIER_FIXUP_3379.x = _RESERVED_IDENTIFIER_FIXUP_1586.x;
        _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_1586.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1596 = _RESERVED_IDENTIFIER_FIXUP_3367.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3383;
        _RESERVED_IDENTIFIER_FIXUP_3383.x = _RESERVED_IDENTIFIER_FIXUP_1596.x;
        _RESERVED_IDENTIFIER_FIXUP_3383.y = _RESERVED_IDENTIFIER_FIXUP_1596.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1604 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1604.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1604.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1610 = hdLod6(param_15, param_16);
        _RESERVED_IDENTIFIER_FIXUP_3371.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3375.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3379.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3383.w = 0.0;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3371.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1610.y = hdLod6(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3375.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1610.z = hdLod6(param_19, param_20).x;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3379.xy;
        float param_22 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1610.w = hdLod6(param_21, param_22).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1667 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1610 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3383.xy;
        float param_24 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1673 = hdLod6(param_23, param_24).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_1673;
        float _RESERVED_IDENTIFIER_FIXUP_1678 = float(_RESERVED_IDENTIFIER_FIXUP_1673 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_1678;
        float _RESERVED_IDENTIFIER_FIXUP_1681 = dot(_RESERVED_IDENTIFIER_FIXUP_1667, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3367.z = _RESERVED_IDENTIFIER_FIXUP_1681;
        float _RESERVED_IDENTIFIER_FIXUP_1687 = _RESERVED_IDENTIFIER_FIXUP_1678 + _RESERVED_IDENTIFIER_FIXUP_1681;
        _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_1687;
        _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_1687 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3888 = _RESERVED_IDENTIFIER_FIXUP_1667;
        _RESERVED_IDENTIFIER_FIXUP_3886 = _RESERVED_IDENTIFIER_FIXUP_3367;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1700 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3211 = _RESERVED_IDENTIFIER_FIXUP_3206;
        _RESERVED_IDENTIFIER_FIXUP_3211.z = _RESERVED_IDENTIFIER_FIXUP_1700;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3889;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3887;
        if (_RESERVED_IDENTIFIER_FIXUP_1700 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1709 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3301 = _RESERVED_IDENTIFIER_FIXUP_3211;
            _RESERVED_IDENTIFIER_FIXUP_3301.z = _RESERVED_IDENTIFIER_FIXUP_1709.x;
            _RESERVED_IDENTIFIER_FIXUP_3301.w = _RESERVED_IDENTIFIER_FIXUP_1709.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1719 = _RESERVED_IDENTIFIER_FIXUP_3301.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3305;
            _RESERVED_IDENTIFIER_FIXUP_3305.x = _RESERVED_IDENTIFIER_FIXUP_1719.x;
            _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_1719.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1729 = _RESERVED_IDENTIFIER_FIXUP_3301.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3309;
            _RESERVED_IDENTIFIER_FIXUP_3309.x = _RESERVED_IDENTIFIER_FIXUP_1729.x;
            _RESERVED_IDENTIFIER_FIXUP_3309.y = _RESERVED_IDENTIFIER_FIXUP_1729.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1739 = _RESERVED_IDENTIFIER_FIXUP_3301.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3313;
            _RESERVED_IDENTIFIER_FIXUP_3313.x = _RESERVED_IDENTIFIER_FIXUP_1739.x;
            _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_1739.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1749 = _RESERVED_IDENTIFIER_FIXUP_3301.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3317;
            _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_1749.x;
            _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_1749.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1757 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_1757.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1757.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1763 = hdLod7(param_25, param_26);
            _RESERVED_IDENTIFIER_FIXUP_3305.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3309.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3313.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3317.w = 0.0;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3305.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1763.y = hdLod7(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3309.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1763.z = hdLod7(param_29, param_30).x;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3313.xy;
            float param_32 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1763.w = hdLod7(param_31, param_32).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1820 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1763 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3317.xy;
            float param_34 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1826 = hdLod7(param_33, param_34).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3301.z = _RESERVED_IDENTIFIER_FIXUP_1826;
            float _RESERVED_IDENTIFIER_FIXUP_1831 = float(_RESERVED_IDENTIFIER_FIXUP_1826 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3301.z = _RESERVED_IDENTIFIER_FIXUP_1831;
            float _RESERVED_IDENTIFIER_FIXUP_1834 = dot(_RESERVED_IDENTIFIER_FIXUP_1820, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3301.w = _RESERVED_IDENTIFIER_FIXUP_1834;
            float _RESERVED_IDENTIFIER_FIXUP_1840 = _RESERVED_IDENTIFIER_FIXUP_1831 + _RESERVED_IDENTIFIER_FIXUP_1834;
            _RESERVED_IDENTIFIER_FIXUP_3301.z = _RESERVED_IDENTIFIER_FIXUP_1840;
            _RESERVED_IDENTIFIER_FIXUP_3301.y = _RESERVED_IDENTIFIER_FIXUP_1840 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3889 = _RESERVED_IDENTIFIER_FIXUP_1820;
            _RESERVED_IDENTIFIER_FIXUP_3887 = _RESERVED_IDENTIFIER_FIXUP_3301;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3215 = _RESERVED_IDENTIFIER_FIXUP_3885;
            _RESERVED_IDENTIFIER_FIXUP_3215.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3215.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1856 = (_RESERVED_IDENTIFIER_FIXUP_3215.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3220;
            _RESERVED_IDENTIFIER_FIXUP_3220.x = _RESERVED_IDENTIFIER_FIXUP_1856.x;
            _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_1856.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1866 = _RESERVED_IDENTIFIER_FIXUP_3220.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3224;
            _RESERVED_IDENTIFIER_FIXUP_3224.x = _RESERVED_IDENTIFIER_FIXUP_1866.x;
            _RESERVED_IDENTIFIER_FIXUP_3224.y = _RESERVED_IDENTIFIER_FIXUP_1866.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1876 = _RESERVED_IDENTIFIER_FIXUP_3220.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3228;
            _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_1876.x;
            _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_1876.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1886 = _RESERVED_IDENTIFIER_FIXUP_3220.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3232;
            _RESERVED_IDENTIFIER_FIXUP_3232.x = _RESERVED_IDENTIFIER_FIXUP_1886.x;
            _RESERVED_IDENTIFIER_FIXUP_3232.y = _RESERVED_IDENTIFIER_FIXUP_1886.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1896 = _RESERVED_IDENTIFIER_FIXUP_3220.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3236;
            _RESERVED_IDENTIFIER_FIXUP_3236.x = _RESERVED_IDENTIFIER_FIXUP_1896.x;
            _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_1896.y;
            _RESERVED_IDENTIFIER_FIXUP_3220.w = 0.0;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3220.xy;
            float param_36 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1910 = hdLod8(param_35, param_36);
            _RESERVED_IDENTIFIER_FIXUP_3224.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3228.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3232.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3236.w = 0.0;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3224.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1910.y = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3228.xy;
            float param_40 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1910.z = hdLod8(param_39, param_40).x;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3232.xy;
            float param_42 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1910.w = hdLod8(param_41, param_42).x;
            vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3236.xy;
            float param_44 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1973 = hdLod8(param_43, param_44).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3276 = _RESERVED_IDENTIFIER_FIXUP_3211;
            _RESERVED_IDENTIFIER_FIXUP_3276.z = _RESERVED_IDENTIFIER_FIXUP_1973;
            float _RESERVED_IDENTIFIER_FIXUP_1978 = float(_RESERVED_IDENTIFIER_FIXUP_1973 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3276.z = _RESERVED_IDENTIFIER_FIXUP_1978;
            float _RESERVED_IDENTIFIER_FIXUP_1981 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1910 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3276.w = _RESERVED_IDENTIFIER_FIXUP_1981;
            float _RESERVED_IDENTIFIER_FIXUP_1987 = _RESERVED_IDENTIFIER_FIXUP_1978 + _RESERVED_IDENTIFIER_FIXUP_1981;
            _RESERVED_IDENTIFIER_FIXUP_3276.z = _RESERVED_IDENTIFIER_FIXUP_1987;
            float _RESERVED_IDENTIFIER_FIXUP_1995 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3276.w = _RESERVED_IDENTIFIER_FIXUP_1995;
            float _RESERVED_IDENTIFIER_FIXUP_2001 = clamp((_RESERVED_IDENTIFIER_FIXUP_1995 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3276.w = _RESERVED_IDENTIFIER_FIXUP_2001;
            float _RESERVED_IDENTIFIER_FIXUP_2006 = (_RESERVED_IDENTIFIER_FIXUP_1987 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3276.z = _RESERVED_IDENTIFIER_FIXUP_2006;
            _RESERVED_IDENTIFIER_FIXUP_3276.y = (_RESERVED_IDENTIFIER_FIXUP_2001 * _RESERVED_IDENTIFIER_FIXUP_2006) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3889 = _RESERVED_IDENTIFIER_FIXUP_3215;
            _RESERVED_IDENTIFIER_FIXUP_3887 = _RESERVED_IDENTIFIER_FIXUP_3276;
        }
        _RESERVED_IDENTIFIER_FIXUP_3888 = _RESERVED_IDENTIFIER_FIXUP_3889;
        _RESERVED_IDENTIFIER_FIXUP_3886 = _RESERVED_IDENTIFIER_FIXUP_3887;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2021 = min(_RESERVED_IDENTIFIER_FIXUP_3886.y, _RESERVED_IDENTIFIER_FIXUP_3886.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3435 = _RESERVED_IDENTIFIER_FIXUP_3888;
    _RESERVED_IDENTIFIER_FIXUP_3435.x = _RESERVED_IDENTIFIER_FIXUP_2021;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3908 = vec4((_RESERVED_IDENTIFIER_FIXUP_2021 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2043 = _RESERVED_IDENTIFIER_FIXUP_3435.xxx * _RESERVED_IDENTIFIER_FIXUP_3908.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3446 = _RESERVED_IDENTIFIER_FIXUP_3908;
    _RESERVED_IDENTIFIER_FIXUP_3446.y = _RESERVED_IDENTIFIER_FIXUP_2043.x;
    _RESERVED_IDENTIFIER_FIXUP_3446.z = _RESERVED_IDENTIFIER_FIXUP_2043.y;
    _RESERVED_IDENTIFIER_FIXUP_3446.w = _RESERVED_IDENTIFIER_FIXUP_2043.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2057 = (_RESERVED_IDENTIFIER_FIXUP_1362.xyz * _RESERVED_IDENTIFIER_FIXUP_3446.xxx) + _RESERVED_IDENTIFIER_FIXUP_3446.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3452 = _RESERVED_IDENTIFIER_FIXUP_1362;
    _RESERVED_IDENTIFIER_FIXUP_3452.x = _RESERVED_IDENTIFIER_FIXUP_2057.x;
    _RESERVED_IDENTIFIER_FIXUP_3452.y = _RESERVED_IDENTIFIER_FIXUP_2057.y;
    _RESERVED_IDENTIFIER_FIXUP_3452.z = _RESERVED_IDENTIFIER_FIXUP_2057.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2070 = _RESERVED_IDENTIFIER_FIXUP_3452.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3458 = _RESERVED_IDENTIFIER_FIXUP_3452;
    _RESERVED_IDENTIFIER_FIXUP_3458.x = _RESERVED_IDENTIFIER_FIXUP_2070.x;
    _RESERVED_IDENTIFIER_FIXUP_3458.y = _RESERVED_IDENTIFIER_FIXUP_2070.y;
    _RESERVED_IDENTIFIER_FIXUP_3458.z = _RESERVED_IDENTIFIER_FIXUP_2070.z;
    vec2 param_45 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2127 = hdTex0(param_45);
    vec2 param_46 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2131 = hdTex1(param_46);
    vec2 param_47 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2135 = hdTex2(param_47);
    vec2 param_48 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2139 = hdTex3(param_48);
    vec2 param_49 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2143 = hdTex4(param_49);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2151 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3472 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3472.x = _RESERVED_IDENTIFIER_FIXUP_2151.x;
    _RESERVED_IDENTIFIER_FIXUP_3472.y = _RESERVED_IDENTIFIER_FIXUP_2151.y;
    _RESERVED_IDENTIFIER_FIXUP_3472.z = _RESERVED_IDENTIFIER_FIXUP_2151.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2159 = _RESERVED_IDENTIFIER_FIXUP_2127.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2162 = _RESERVED_IDENTIFIER_FIXUP_2159 * _RESERVED_IDENTIFIER_FIXUP_3472.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3478 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3478.x = _RESERVED_IDENTIFIER_FIXUP_2162.x;
    _RESERVED_IDENTIFIER_FIXUP_3478.y = _RESERVED_IDENTIFIER_FIXUP_2162.y;
    _RESERVED_IDENTIFIER_FIXUP_3478.z = _RESERVED_IDENTIFIER_FIXUP_2162.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2177 = mix(_RESERVED_IDENTIFIER_FIXUP_3478.xyz, _RESERVED_IDENTIFIER_FIXUP_2159, _RESERVED_IDENTIFIER_FIXUP_1245);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3484 = _RESERVED_IDENTIFIER_FIXUP_2127;
    _RESERVED_IDENTIFIER_FIXUP_3484.x = _RESERVED_IDENTIFIER_FIXUP_2177.x;
    _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2177.y;
    _RESERVED_IDENTIFIER_FIXUP_3484.z = _RESERVED_IDENTIFIER_FIXUP_2177.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2185 = _RESERVED_IDENTIFIER_FIXUP_2131.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2188 = _RESERVED_IDENTIFIER_FIXUP_2185 * _RESERVED_IDENTIFIER_FIXUP_3472.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3478.x = _RESERVED_IDENTIFIER_FIXUP_2188.x;
    _RESERVED_IDENTIFIER_FIXUP_3478.y = _RESERVED_IDENTIFIER_FIXUP_2188.y;
    _RESERVED_IDENTIFIER_FIXUP_3478.z = _RESERVED_IDENTIFIER_FIXUP_2188.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2203 = mix(_RESERVED_IDENTIFIER_FIXUP_3478.xyz, _RESERVED_IDENTIFIER_FIXUP_2185, _RESERVED_IDENTIFIER_FIXUP_1271);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3496 = _RESERVED_IDENTIFIER_FIXUP_2131;
    _RESERVED_IDENTIFIER_FIXUP_3496.x = _RESERVED_IDENTIFIER_FIXUP_2203.x;
    _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2203.y;
    _RESERVED_IDENTIFIER_FIXUP_3496.z = _RESERVED_IDENTIFIER_FIXUP_2203.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2211 = _RESERVED_IDENTIFIER_FIXUP_2135.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2214 = _RESERVED_IDENTIFIER_FIXUP_2211 * _RESERVED_IDENTIFIER_FIXUP_3472.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3478.x = _RESERVED_IDENTIFIER_FIXUP_2214.x;
    _RESERVED_IDENTIFIER_FIXUP_3478.y = _RESERVED_IDENTIFIER_FIXUP_2214.y;
    _RESERVED_IDENTIFIER_FIXUP_3478.z = _RESERVED_IDENTIFIER_FIXUP_2214.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2229 = mix(_RESERVED_IDENTIFIER_FIXUP_3478.xyz, _RESERVED_IDENTIFIER_FIXUP_2211, _RESERVED_IDENTIFIER_FIXUP_1297);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3508 = _RESERVED_IDENTIFIER_FIXUP_2135;
    _RESERVED_IDENTIFIER_FIXUP_3508.x = _RESERVED_IDENTIFIER_FIXUP_2229.x;
    _RESERVED_IDENTIFIER_FIXUP_3508.y = _RESERVED_IDENTIFIER_FIXUP_2229.y;
    _RESERVED_IDENTIFIER_FIXUP_3508.z = _RESERVED_IDENTIFIER_FIXUP_2229.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2237 = _RESERVED_IDENTIFIER_FIXUP_2139.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2240 = _RESERVED_IDENTIFIER_FIXUP_2237 * _RESERVED_IDENTIFIER_FIXUP_3472.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3514 = _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_3514.x = _RESERVED_IDENTIFIER_FIXUP_2240.x;
    _RESERVED_IDENTIFIER_FIXUP_3514.y = _RESERVED_IDENTIFIER_FIXUP_2240.y;
    _RESERVED_IDENTIFIER_FIXUP_3514.z = _RESERVED_IDENTIFIER_FIXUP_2240.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2255 = mix(_RESERVED_IDENTIFIER_FIXUP_3514.xyz, _RESERVED_IDENTIFIER_FIXUP_2237, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3514.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3520 = _RESERVED_IDENTIFIER_FIXUP_2139;
    _RESERVED_IDENTIFIER_FIXUP_3520.x = _RESERVED_IDENTIFIER_FIXUP_2255.x;
    _RESERVED_IDENTIFIER_FIXUP_3520.y = _RESERVED_IDENTIFIER_FIXUP_2255.y;
    _RESERVED_IDENTIFIER_FIXUP_3520.z = _RESERVED_IDENTIFIER_FIXUP_2255.z;
    float _RESERVED_IDENTIFIER_FIXUP_2265 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2143.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3526 = _RESERVED_IDENTIFIER_FIXUP_2143;
    _RESERVED_IDENTIFIER_FIXUP_3526.w = _RESERVED_IDENTIFIER_FIXUP_2265;
    _RESERVED_IDENTIFIER_FIXUP_3526.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2265;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2275 = _RESERVED_IDENTIFIER_FIXUP_3526.xxxx * _RESERVED_IDENTIFIER_FIXUP_3496;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2293 = (_RESERVED_IDENTIFIER_FIXUP_3520 * _RESERVED_IDENTIFIER_FIXUP_3526.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3508 * _RESERVED_IDENTIFIER_FIXUP_3526.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3484 * _RESERVED_IDENTIFIER_FIXUP_3526.wwww) + _RESERVED_IDENTIFIER_FIXUP_2275));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3533 = _RESERVED_IDENTIFIER_FIXUP_2275;
    _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_1369;
    float _RESERVED_IDENTIFIER_FIXUP_2306 = clamp((_RESERVED_IDENTIFIER_FIXUP_1369 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2306;
    float _RESERVED_IDENTIFIER_FIXUP_2312 = ((-_RESERVED_IDENTIFIER_FIXUP_2306) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3533.y = _RESERVED_IDENTIFIER_FIXUP_2312;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3897;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3896;
    if (_RESERVED_IDENTIFIER_FIXUP_2312 != (-_RESERVED_IDENTIFIER_FIXUP_2312))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2324 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3545 = _RESERVED_IDENTIFIER_FIXUP_3533;
        _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_2324.x;
        _RESERVED_IDENTIFIER_FIXUP_3545.z = _RESERVED_IDENTIFIER_FIXUP_2324.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2334 = _RESERVED_IDENTIFIER_FIXUP_3545.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3549;
        _RESERVED_IDENTIFIER_FIXUP_3549.x = _RESERVED_IDENTIFIER_FIXUP_2334.x;
        _RESERVED_IDENTIFIER_FIXUP_3549.y = _RESERVED_IDENTIFIER_FIXUP_2334.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2344 = _RESERVED_IDENTIFIER_FIXUP_3545.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3553;
        _RESERVED_IDENTIFIER_FIXUP_3553.x = _RESERVED_IDENTIFIER_FIXUP_2344.x;
        _RESERVED_IDENTIFIER_FIXUP_3553.y = _RESERVED_IDENTIFIER_FIXUP_2344.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2354 = _RESERVED_IDENTIFIER_FIXUP_3545.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3557;
        _RESERVED_IDENTIFIER_FIXUP_3557.x = _RESERVED_IDENTIFIER_FIXUP_2354.x;
        _RESERVED_IDENTIFIER_FIXUP_3557.y = _RESERVED_IDENTIFIER_FIXUP_2354.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2364 = _RESERVED_IDENTIFIER_FIXUP_3545.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3561;
        _RESERVED_IDENTIFIER_FIXUP_3561.x = _RESERVED_IDENTIFIER_FIXUP_2364.x;
        _RESERVED_IDENTIFIER_FIXUP_3561.y = _RESERVED_IDENTIFIER_FIXUP_2364.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2372 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2372.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2372.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2378 = hdLod5(param_50, param_51);
        _RESERVED_IDENTIFIER_FIXUP_3549.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3553.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3557.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3561.w = 0.0;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3549.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2378.y = hdLod5(param_52, param_53).x;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3553.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2378.z = hdLod5(param_54, param_55).x;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3557.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2378.w = hdLod5(param_56, param_57).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2435 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2378 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3561.xy;
        float param_59 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2441 = hdLod5(param_58, param_59).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_2441;
        float _RESERVED_IDENTIFIER_FIXUP_2446 = float(_RESERVED_IDENTIFIER_FIXUP_2441 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_2446;
        float _RESERVED_IDENTIFIER_FIXUP_2449 = dot(_RESERVED_IDENTIFIER_FIXUP_2435, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3545.z = _RESERVED_IDENTIFIER_FIXUP_2449;
        float _RESERVED_IDENTIFIER_FIXUP_2455 = _RESERVED_IDENTIFIER_FIXUP_2446 + _RESERVED_IDENTIFIER_FIXUP_2449;
        _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_2455;
        float _RESERVED_IDENTIFIER_FIXUP_2460 = (_RESERVED_IDENTIFIER_FIXUP_2455 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_2460;
        _RESERVED_IDENTIFIER_FIXUP_3545.x = (_RESERVED_IDENTIFIER_FIXUP_2306 * _RESERVED_IDENTIFIER_FIXUP_2460) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3897 = _RESERVED_IDENTIFIER_FIXUP_2435;
        _RESERVED_IDENTIFIER_FIXUP_3896 = _RESERVED_IDENTIFIER_FIXUP_3545;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3543 = _RESERVED_IDENTIFIER_FIXUP_3533;
        _RESERVED_IDENTIFIER_FIXUP_3543.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3897 = _RESERVED_IDENTIFIER_FIXUP_3508;
        _RESERVED_IDENTIFIER_FIXUP_3896 = _RESERVED_IDENTIFIER_FIXUP_3543;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3617 = _RESERVED_IDENTIFIER_FIXUP_3896;
    _RESERVED_IDENTIFIER_FIXUP_3617.y = _RESERVED_IDENTIFIER_FIXUP_1547;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3900;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3898;
    if (_RESERVED_IDENTIFIER_FIXUP_1547 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2487 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3778 = _RESERVED_IDENTIFIER_FIXUP_3617;
        _RESERVED_IDENTIFIER_FIXUP_3778.y = _RESERVED_IDENTIFIER_FIXUP_2487.x;
        _RESERVED_IDENTIFIER_FIXUP_3778.z = _RESERVED_IDENTIFIER_FIXUP_2487.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2497 = _RESERVED_IDENTIFIER_FIXUP_3778.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3782;
        _RESERVED_IDENTIFIER_FIXUP_3782.x = _RESERVED_IDENTIFIER_FIXUP_2497.x;
        _RESERVED_IDENTIFIER_FIXUP_3782.y = _RESERVED_IDENTIFIER_FIXUP_2497.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2507 = _RESERVED_IDENTIFIER_FIXUP_3778.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3786;
        _RESERVED_IDENTIFIER_FIXUP_3786.x = _RESERVED_IDENTIFIER_FIXUP_2507.x;
        _RESERVED_IDENTIFIER_FIXUP_3786.y = _RESERVED_IDENTIFIER_FIXUP_2507.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2517 = _RESERVED_IDENTIFIER_FIXUP_3778.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3790;
        _RESERVED_IDENTIFIER_FIXUP_3790.x = _RESERVED_IDENTIFIER_FIXUP_2517.x;
        _RESERVED_IDENTIFIER_FIXUP_3790.y = _RESERVED_IDENTIFIER_FIXUP_2517.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2527 = _RESERVED_IDENTIFIER_FIXUP_3778.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3794;
        _RESERVED_IDENTIFIER_FIXUP_3794.x = _RESERVED_IDENTIFIER_FIXUP_2527.x;
        _RESERVED_IDENTIFIER_FIXUP_3794.y = _RESERVED_IDENTIFIER_FIXUP_2527.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2535 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_2535.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2535.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2541 = hdLod6(param_60, param_61);
        _RESERVED_IDENTIFIER_FIXUP_3782.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3786.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3790.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3794.w = 0.0;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3782.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2541.y = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3786.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2541.z = hdLod6(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3790.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2541.w = hdLod6(param_66, param_67).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2598 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2541 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3794.xy;
        float param_69 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2604 = hdLod6(param_68, param_69).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3778.y = _RESERVED_IDENTIFIER_FIXUP_2604;
        float _RESERVED_IDENTIFIER_FIXUP_2609 = float(_RESERVED_IDENTIFIER_FIXUP_2604 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3778.y = _RESERVED_IDENTIFIER_FIXUP_2609;
        float _RESERVED_IDENTIFIER_FIXUP_2612 = dot(_RESERVED_IDENTIFIER_FIXUP_2598, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3778.z = _RESERVED_IDENTIFIER_FIXUP_2612;
        float _RESERVED_IDENTIFIER_FIXUP_2618 = _RESERVED_IDENTIFIER_FIXUP_2609 + _RESERVED_IDENTIFIER_FIXUP_2612;
        _RESERVED_IDENTIFIER_FIXUP_3778.y = _RESERVED_IDENTIFIER_FIXUP_2618;
        _RESERVED_IDENTIFIER_FIXUP_3778.y = _RESERVED_IDENTIFIER_FIXUP_2618 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3900 = _RESERVED_IDENTIFIER_FIXUP_2598;
        _RESERVED_IDENTIFIER_FIXUP_3898 = _RESERVED_IDENTIFIER_FIXUP_3778;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2631 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3622 = _RESERVED_IDENTIFIER_FIXUP_3617;
        _RESERVED_IDENTIFIER_FIXUP_3622.z = _RESERVED_IDENTIFIER_FIXUP_2631;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3901;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3899;
        if (_RESERVED_IDENTIFIER_FIXUP_2631 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2640 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3712 = _RESERVED_IDENTIFIER_FIXUP_3622;
            _RESERVED_IDENTIFIER_FIXUP_3712.z = _RESERVED_IDENTIFIER_FIXUP_2640.x;
            _RESERVED_IDENTIFIER_FIXUP_3712.w = _RESERVED_IDENTIFIER_FIXUP_2640.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2650 = _RESERVED_IDENTIFIER_FIXUP_3712.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3716;
            _RESERVED_IDENTIFIER_FIXUP_3716.x = _RESERVED_IDENTIFIER_FIXUP_2650.x;
            _RESERVED_IDENTIFIER_FIXUP_3716.y = _RESERVED_IDENTIFIER_FIXUP_2650.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2660 = _RESERVED_IDENTIFIER_FIXUP_3712.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3720;
            _RESERVED_IDENTIFIER_FIXUP_3720.x = _RESERVED_IDENTIFIER_FIXUP_2660.x;
            _RESERVED_IDENTIFIER_FIXUP_3720.y = _RESERVED_IDENTIFIER_FIXUP_2660.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2670 = _RESERVED_IDENTIFIER_FIXUP_3712.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3724;
            _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_2670.x;
            _RESERVED_IDENTIFIER_FIXUP_3724.y = _RESERVED_IDENTIFIER_FIXUP_2670.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2680 = _RESERVED_IDENTIFIER_FIXUP_3712.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3728;
            _RESERVED_IDENTIFIER_FIXUP_3728.x = _RESERVED_IDENTIFIER_FIXUP_2680.x;
            _RESERVED_IDENTIFIER_FIXUP_3728.y = _RESERVED_IDENTIFIER_FIXUP_2680.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2688 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2688.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2688.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2694 = hdLod7(param_70, param_71);
            _RESERVED_IDENTIFIER_FIXUP_3716.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3720.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3724.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3728.w = 0.0;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3716.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2694.y = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3720.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2694.z = hdLod7(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3724.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2694.w = hdLod7(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2751 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2694 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3728.xy;
            float param_79 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2757 = hdLod7(param_78, param_79).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3712.z = _RESERVED_IDENTIFIER_FIXUP_2757;
            float _RESERVED_IDENTIFIER_FIXUP_2762 = float(_RESERVED_IDENTIFIER_FIXUP_2757 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3712.z = _RESERVED_IDENTIFIER_FIXUP_2762;
            float _RESERVED_IDENTIFIER_FIXUP_2765 = dot(_RESERVED_IDENTIFIER_FIXUP_2751, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3712.w = _RESERVED_IDENTIFIER_FIXUP_2765;
            float _RESERVED_IDENTIFIER_FIXUP_2771 = _RESERVED_IDENTIFIER_FIXUP_2762 + _RESERVED_IDENTIFIER_FIXUP_2765;
            _RESERVED_IDENTIFIER_FIXUP_3712.z = _RESERVED_IDENTIFIER_FIXUP_2771;
            _RESERVED_IDENTIFIER_FIXUP_3712.y = _RESERVED_IDENTIFIER_FIXUP_2771 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3901 = _RESERVED_IDENTIFIER_FIXUP_2751;
            _RESERVED_IDENTIFIER_FIXUP_3899 = _RESERVED_IDENTIFIER_FIXUP_3712;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3626 = _RESERVED_IDENTIFIER_FIXUP_3897;
            _RESERVED_IDENTIFIER_FIXUP_3626.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3626.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2787 = (_RESERVED_IDENTIFIER_FIXUP_3626.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3631;
            _RESERVED_IDENTIFIER_FIXUP_3631.x = _RESERVED_IDENTIFIER_FIXUP_2787.x;
            _RESERVED_IDENTIFIER_FIXUP_3631.y = _RESERVED_IDENTIFIER_FIXUP_2787.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2797 = _RESERVED_IDENTIFIER_FIXUP_3631.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3635;
            _RESERVED_IDENTIFIER_FIXUP_3635.x = _RESERVED_IDENTIFIER_FIXUP_2797.x;
            _RESERVED_IDENTIFIER_FIXUP_3635.y = _RESERVED_IDENTIFIER_FIXUP_2797.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2807 = _RESERVED_IDENTIFIER_FIXUP_3631.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3639;
            _RESERVED_IDENTIFIER_FIXUP_3639.x = _RESERVED_IDENTIFIER_FIXUP_2807.x;
            _RESERVED_IDENTIFIER_FIXUP_3639.y = _RESERVED_IDENTIFIER_FIXUP_2807.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2817 = _RESERVED_IDENTIFIER_FIXUP_3631.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3643;
            _RESERVED_IDENTIFIER_FIXUP_3643.x = _RESERVED_IDENTIFIER_FIXUP_2817.x;
            _RESERVED_IDENTIFIER_FIXUP_3643.y = _RESERVED_IDENTIFIER_FIXUP_2817.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2827 = _RESERVED_IDENTIFIER_FIXUP_3631.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3647;
            _RESERVED_IDENTIFIER_FIXUP_3647.x = _RESERVED_IDENTIFIER_FIXUP_2827.x;
            _RESERVED_IDENTIFIER_FIXUP_3647.y = _RESERVED_IDENTIFIER_FIXUP_2827.y;
            _RESERVED_IDENTIFIER_FIXUP_3631.w = 0.0;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3631.xy;
            float param_81 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2841 = hdLod8(param_80, param_81);
            _RESERVED_IDENTIFIER_FIXUP_3635.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3639.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3643.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3647.w = 0.0;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3635.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2841.y = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3639.xy;
            float param_85 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2841.z = hdLod8(param_84, param_85).x;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3643.xy;
            float param_87 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2841.w = hdLod8(param_86, param_87).x;
            vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3647.xy;
            float param_89 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2904 = hdLod8(param_88, param_89).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3687 = _RESERVED_IDENTIFIER_FIXUP_3622;
            _RESERVED_IDENTIFIER_FIXUP_3687.z = _RESERVED_IDENTIFIER_FIXUP_2904;
            float _RESERVED_IDENTIFIER_FIXUP_2909 = float(_RESERVED_IDENTIFIER_FIXUP_2904 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3687.z = _RESERVED_IDENTIFIER_FIXUP_2909;
            float _RESERVED_IDENTIFIER_FIXUP_2912 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2841 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3687.w = _RESERVED_IDENTIFIER_FIXUP_2912;
            float _RESERVED_IDENTIFIER_FIXUP_2918 = _RESERVED_IDENTIFIER_FIXUP_2909 + _RESERVED_IDENTIFIER_FIXUP_2912;
            _RESERVED_IDENTIFIER_FIXUP_3687.z = _RESERVED_IDENTIFIER_FIXUP_2918;
            float _RESERVED_IDENTIFIER_FIXUP_2926 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3687.w = _RESERVED_IDENTIFIER_FIXUP_2926;
            float _RESERVED_IDENTIFIER_FIXUP_2932 = clamp((_RESERVED_IDENTIFIER_FIXUP_2926 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3687.w = _RESERVED_IDENTIFIER_FIXUP_2932;
            float _RESERVED_IDENTIFIER_FIXUP_2937 = (_RESERVED_IDENTIFIER_FIXUP_2918 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3687.z = _RESERVED_IDENTIFIER_FIXUP_2937;
            _RESERVED_IDENTIFIER_FIXUP_3687.y = (_RESERVED_IDENTIFIER_FIXUP_2932 * _RESERVED_IDENTIFIER_FIXUP_2937) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3901 = _RESERVED_IDENTIFIER_FIXUP_3626;
            _RESERVED_IDENTIFIER_FIXUP_3899 = _RESERVED_IDENTIFIER_FIXUP_3687;
        }
        _RESERVED_IDENTIFIER_FIXUP_3900 = _RESERVED_IDENTIFIER_FIXUP_3901;
        _RESERVED_IDENTIFIER_FIXUP_3898 = _RESERVED_IDENTIFIER_FIXUP_3899;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2952 = min(_RESERVED_IDENTIFIER_FIXUP_3898.y, _RESERVED_IDENTIFIER_FIXUP_3898.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3846 = _RESERVED_IDENTIFIER_FIXUP_3900;
    _RESERVED_IDENTIFIER_FIXUP_3846.x = _RESERVED_IDENTIFIER_FIXUP_2952;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3910 = vec4((_RESERVED_IDENTIFIER_FIXUP_2952 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2293.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2974 = _RESERVED_IDENTIFIER_FIXUP_3846.xxx * _RESERVED_IDENTIFIER_FIXUP_3910.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3857 = _RESERVED_IDENTIFIER_FIXUP_3910;
    _RESERVED_IDENTIFIER_FIXUP_3857.y = _RESERVED_IDENTIFIER_FIXUP_2974.x;
    _RESERVED_IDENTIFIER_FIXUP_3857.z = _RESERVED_IDENTIFIER_FIXUP_2974.y;
    _RESERVED_IDENTIFIER_FIXUP_3857.w = _RESERVED_IDENTIFIER_FIXUP_2974.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2988 = (_RESERVED_IDENTIFIER_FIXUP_2293.xyz * _RESERVED_IDENTIFIER_FIXUP_3857.xxx) + _RESERVED_IDENTIFIER_FIXUP_3857.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3863 = _RESERVED_IDENTIFIER_FIXUP_2293;
    _RESERVED_IDENTIFIER_FIXUP_3863.x = _RESERVED_IDENTIFIER_FIXUP_2988.x;
    _RESERVED_IDENTIFIER_FIXUP_3863.y = _RESERVED_IDENTIFIER_FIXUP_2988.y;
    _RESERVED_IDENTIFIER_FIXUP_3863.z = _RESERVED_IDENTIFIER_FIXUP_2988.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3001 = _RESERVED_IDENTIFIER_FIXUP_3863.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3869 = _RESERVED_IDENTIFIER_FIXUP_3863;
    _RESERVED_IDENTIFIER_FIXUP_3869.x = _RESERVED_IDENTIFIER_FIXUP_3001.x;
    _RESERVED_IDENTIFIER_FIXUP_3869.y = _RESERVED_IDENTIFIER_FIXUP_3001.y;
    _RESERVED_IDENTIFIER_FIXUP_3869.z = _RESERVED_IDENTIFIER_FIXUP_3001.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3869.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1055 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1064;
    if (_RESERVED_IDENTIFIER_FIXUP_1055)
    {
        _RESERVED_IDENTIFIER_FIXUP_1064 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1064 = _RESERVED_IDENTIFIER_FIXUP_1055;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1064)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1101 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3458.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1127 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3054;
    if (_RESERVED_IDENTIFIER_FIXUP_1101 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3054 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1101), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1127);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3054 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1127);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3054;
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
    vec2 param_4 = v4.wz;
    r4 = hdTex4(param_4);
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 hdB100 = v0.xyz + v0.xyz;
    r6.x = hdB100.x;
    r6.y = hdB100.y;
    r6.z = hdB100.z;
    vec3 hdB115 = r0.xyz * r6.xyz;
    r7.x = hdB115.x;
    r7.y = hdB115.y;
    r7.z = hdB115.z;
    vec4 hdB124 = r0;
    vec3 hdB133 = mix(r7.xyz, hdB124.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = hdB133.x;
    r0.y = hdB133.y;
    r0.z = hdB133.z;
    vec3 hdB144 = r1.xyz * r6.xyz;
    r7.x = hdB144.x;
    r7.y = hdB144.y;
    r7.z = hdB144.z;
    vec4 hdB153 = r1;
    vec3 hdB159 = mix(r7.xyz, hdB153.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = hdB159.x;
    r1.y = hdB159.y;
    r1.z = hdB159.z;
    vec3 hdB170 = r2.xyz * r6.xyz;
    r7.x = hdB170.x;
    r7.y = hdB170.y;
    r7.z = hdB170.z;
    vec4 hdB179 = r2;
    vec3 hdB185 = mix(r7.xyz, hdB179.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = hdB185.x;
    r2.y = hdB185.y;
    r2.z = hdB185.z;
    vec3 hdB196 = r3.xyz * r6.xyz;
    r5.x = hdB196.x;
    r5.y = hdB196.y;
    r5.z = hdB196.z;
    vec4 hdB205 = r3;
    vec3 hdB211 = mix(r5.xyz, hdB205.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = hdB211.x;
    r3.y = hdB211.y;
    r3.z = hdB211.z;
    r4.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r4.w = (-r4.w) + 1.0;
    r1 = r4.xxxx * r1;
    r0 = (r0 * r4.wwww) + r1;
    r0 = (r2 * r4.yyyy) + r0;
    r0 = (r3 * r4.zzzz) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB288 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB288.x;
        r1.z = hdB288.y;
        vec2 hdB299 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB299.x;
        r2.y = hdB299.y;
        vec2 hdB310 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB310.x;
        r3.y = hdB310.y;
        vec2 hdB321 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB321.x;
        r4.y = hdB321.y;
        vec2 hdB332 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB332.x;
        r5.y = hdB332.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r6.xy;
        float param_6 = r6.w;
        r6 = hdLod5(param_5, param_6);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_9 = r3.xy;
        float param_10 = r3.w;
        r3 = hdLod5(param_9, param_10);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_11 = r4.xy;
        float param_12 = r4.w;
        r4 = hdLod5(param_11, param_12);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_13 = r5.xy;
        float param_14 = r5.w;
        r5 = hdLod5(param_13, param_14);
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
        vec2 hdB462 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB462.x;
        r1.z = hdB462.y;
        vec2 hdB472 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB472.x;
        r2.y = hdB472.y;
        vec2 hdB482 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB482.x;
        r3.y = hdB482.y;
        vec2 hdB492 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB492.x;
        r4.y = hdB492.y;
        vec2 hdB502 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB502.x;
        r5.y = hdB502.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_15 = r6.xy;
        float param_16 = r6.w;
        r6 = hdLod6(param_15, param_16);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod6(param_17, param_18);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_19 = r3.xy;
        float param_20 = r3.w;
        r3 = hdLod6(param_19, param_20);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_21 = r4.xy;
        float param_22 = r4.w;
        r4 = hdLod6(param_21, param_22);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_23 = r5.xy;
        float param_24 = r5.w;
        r5 = hdLod6(param_23, param_24);
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
            vec2 hdB617 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB617.x;
            r1.w = hdB617.y;
            vec2 hdB627 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB627.x;
            r2.y = hdB627.y;
            vec2 hdB637 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB637.x;
            r3.y = hdB637.y;
            vec2 hdB647 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB647.x;
            r4.y = hdB647.y;
            vec2 hdB657 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB657.x;
            r5.y = hdB657.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = r6.xy;
            float param_26 = r6.w;
            r6 = hdLod7(param_25, param_26);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_27 = r2.xy;
            float param_28 = r2.w;
            r2 = hdLod7(param_27, param_28);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_29 = r3.xy;
            float param_30 = r3.w;
            r3 = hdLod7(param_29, param_30);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_31 = r4.xy;
            float param_32 = r4.w;
            r4 = hdLod7(param_31, param_32);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_33 = r5.xy;
            float param_34 = r5.w;
            r5 = hdLod7(param_33, param_34);
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
            vec2 hdB765 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB765.x;
            r3.y = hdB765.y;
            vec2 hdB775 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB775.x;
            r4.y = hdB775.y;
            vec2 hdB785 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB785.x;
            r5.y = hdB785.y;
            vec2 hdB795 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB795.x;
            r6.y = hdB795.y;
            vec2 hdB805 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB805.x;
            r7.y = hdB805.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_35 = r3.xy;
            float param_36 = r3.w;
            r3 = hdLod8(param_35, param_36);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_37 = r4.xy;
            float param_38 = r4.w;
            r4 = hdLod8(param_37, param_38);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_39 = r5.xy;
            float param_40 = r5.w;
            r5 = hdLod8(param_39, param_40);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_41 = r6.xy;
            float param_42 = r6.w;
            r6 = hdLod8(param_41, param_42);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_43 = r7.xy;
            float param_44 = r7.w;
            r7 = hdLod8(param_43, param_44);
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
    vec3 hdB944 = r0.www * v1.xyz;
    r1.y = hdB944.x;
    r1.z = hdB944.y;
    r1.w = hdB944.z;
    vec4 hdB953 = r1;
    vec3 hdB955 = r2.xxx * hdB953.yzw;
    r1.y = hdB955.x;
    r1.z = hdB955.y;
    r1.w = hdB955.z;
    vec4 hdB962 = r0;
    vec3 hdB969 = (hdB962.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB969.x;
    r0.y = hdB969.y;
    r0.z = hdB969.z;
    vec4 hdB976 = r0;
    vec3 hdB983 = hdB976.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB983.x;
    r0.y = hdB983.y;
    r0.z = hdB983.z;
    vec3 hdB998 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB998.x;
    oC0.y = hdB998.y;
    oC0.z = hdB998.z;
    oC0.w = 1.0;
    bool hdB1010 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1018;
    if (hdB1010)
    {
        hdB1018 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1018 = hdB1010;
    }
    if (hdB1018)
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
    bool _3581 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3591;
    if (_3581)
    {
        _3591 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3591 = _3581;
    }
    if (_3591)
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
        bool _3616 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3631;
        if (!_3616)
        {
            _3631 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3631 = _3616;
        }
        if (_3631)
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
