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
float _RESERVED_IDENTIFIER_FIXUP_3821;
vec4 _RESERVED_IDENTIFIER_FIXUP_3822;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1178 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1182 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1186 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1190 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1194 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1197 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1199 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3821).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_1199 + _RESERVED_IDENTIFIER_FIXUP_1199;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3010 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3010.x = _RESERVED_IDENTIFIER_FIXUP_1202.x;
    _RESERVED_IDENTIFIER_FIXUP_3010.y = _RESERVED_IDENTIFIER_FIXUP_1202.y;
    _RESERVED_IDENTIFIER_FIXUP_3010.z = _RESERVED_IDENTIFIER_FIXUP_1202.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1210 = _RESERVED_IDENTIFIER_FIXUP_1178.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1213 = _RESERVED_IDENTIFIER_FIXUP_1210 * _RESERVED_IDENTIFIER_FIXUP_3010.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3016 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3016.x = _RESERVED_IDENTIFIER_FIXUP_1213.x;
    _RESERVED_IDENTIFIER_FIXUP_3016.y = _RESERVED_IDENTIFIER_FIXUP_1213.y;
    _RESERVED_IDENTIFIER_FIXUP_3016.z = _RESERVED_IDENTIFIER_FIXUP_1213.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1227 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1197.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1228 = mix(_RESERVED_IDENTIFIER_FIXUP_3016.xyz, _RESERVED_IDENTIFIER_FIXUP_1210, _RESERVED_IDENTIFIER_FIXUP_1227);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3022 = _RESERVED_IDENTIFIER_FIXUP_1178;
    _RESERVED_IDENTIFIER_FIXUP_3022.x = _RESERVED_IDENTIFIER_FIXUP_1228.x;
    _RESERVED_IDENTIFIER_FIXUP_3022.y = _RESERVED_IDENTIFIER_FIXUP_1228.y;
    _RESERVED_IDENTIFIER_FIXUP_3022.z = _RESERVED_IDENTIFIER_FIXUP_1228.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1236 = _RESERVED_IDENTIFIER_FIXUP_1182.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1239 = _RESERVED_IDENTIFIER_FIXUP_1236 * _RESERVED_IDENTIFIER_FIXUP_3010.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3016.x = _RESERVED_IDENTIFIER_FIXUP_1239.x;
    _RESERVED_IDENTIFIER_FIXUP_3016.y = _RESERVED_IDENTIFIER_FIXUP_1239.y;
    _RESERVED_IDENTIFIER_FIXUP_3016.z = _RESERVED_IDENTIFIER_FIXUP_1239.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1253 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1197.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1254 = mix(_RESERVED_IDENTIFIER_FIXUP_3016.xyz, _RESERVED_IDENTIFIER_FIXUP_1236, _RESERVED_IDENTIFIER_FIXUP_1253);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3034 = _RESERVED_IDENTIFIER_FIXUP_1182;
    _RESERVED_IDENTIFIER_FIXUP_3034.x = _RESERVED_IDENTIFIER_FIXUP_1254.x;
    _RESERVED_IDENTIFIER_FIXUP_3034.y = _RESERVED_IDENTIFIER_FIXUP_1254.y;
    _RESERVED_IDENTIFIER_FIXUP_3034.z = _RESERVED_IDENTIFIER_FIXUP_1254.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_1186.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_1262 * _RESERVED_IDENTIFIER_FIXUP_3010.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3016.x = _RESERVED_IDENTIFIER_FIXUP_1265.x;
    _RESERVED_IDENTIFIER_FIXUP_3016.y = _RESERVED_IDENTIFIER_FIXUP_1265.y;
    _RESERVED_IDENTIFIER_FIXUP_3016.z = _RESERVED_IDENTIFIER_FIXUP_1265.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1279 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1197.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1280 = mix(_RESERVED_IDENTIFIER_FIXUP_3016.xyz, _RESERVED_IDENTIFIER_FIXUP_1262, _RESERVED_IDENTIFIER_FIXUP_1279);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3046 = _RESERVED_IDENTIFIER_FIXUP_1186;
    _RESERVED_IDENTIFIER_FIXUP_3046.x = _RESERVED_IDENTIFIER_FIXUP_1280.x;
    _RESERVED_IDENTIFIER_FIXUP_3046.y = _RESERVED_IDENTIFIER_FIXUP_1280.y;
    _RESERVED_IDENTIFIER_FIXUP_3046.z = _RESERVED_IDENTIFIER_FIXUP_1280.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_1190.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_1288 * _RESERVED_IDENTIFIER_FIXUP_3010.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3052 = _RESERVED_IDENTIFIER_FIXUP_1197;
    _RESERVED_IDENTIFIER_FIXUP_3052.x = _RESERVED_IDENTIFIER_FIXUP_1291.x;
    _RESERVED_IDENTIFIER_FIXUP_3052.y = _RESERVED_IDENTIFIER_FIXUP_1291.y;
    _RESERVED_IDENTIFIER_FIXUP_3052.z = _RESERVED_IDENTIFIER_FIXUP_1291.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1306 = mix(_RESERVED_IDENTIFIER_FIXUP_3052.xyz, _RESERVED_IDENTIFIER_FIXUP_1288, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3052.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3058 = _RESERVED_IDENTIFIER_FIXUP_1190;
    _RESERVED_IDENTIFIER_FIXUP_3058.x = _RESERVED_IDENTIFIER_FIXUP_1306.x;
    _RESERVED_IDENTIFIER_FIXUP_3058.y = _RESERVED_IDENTIFIER_FIXUP_1306.y;
    _RESERVED_IDENTIFIER_FIXUP_3058.z = _RESERVED_IDENTIFIER_FIXUP_1306.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1322 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3022, _RESERVED_IDENTIFIER_FIXUP_3034, _RESERVED_IDENTIFIER_FIXUP_1194.xxxx), _RESERVED_IDENTIFIER_FIXUP_3046, _RESERVED_IDENTIFIER_FIXUP_1194.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1334 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3066 = _RESERVED_IDENTIFIER_FIXUP_1322;
    _RESERVED_IDENTIFIER_FIXUP_3066.x = _RESERVED_IDENTIFIER_FIXUP_1334;
    float _RESERVED_IDENTIFIER_FIXUP_1340 = clamp((_RESERVED_IDENTIFIER_FIXUP_1334 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3066.x = _RESERVED_IDENTIFIER_FIXUP_1340;
    float _RESERVED_IDENTIFIER_FIXUP_1346 = ((-_RESERVED_IDENTIFIER_FIXUP_1340) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3066.y = _RESERVED_IDENTIFIER_FIXUP_1346;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3824;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3823;
    if (_RESERVED_IDENTIFIER_FIXUP_1346 != (-_RESERVED_IDENTIFIER_FIXUP_1346))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1358 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3078 = _RESERVED_IDENTIFIER_FIXUP_3066;
        _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1358.x;
        _RESERVED_IDENTIFIER_FIXUP_3078.z = _RESERVED_IDENTIFIER_FIXUP_1358.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1368 = _RESERVED_IDENTIFIER_FIXUP_3078.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3082;
        _RESERVED_IDENTIFIER_FIXUP_3082.x = _RESERVED_IDENTIFIER_FIXUP_1368.x;
        _RESERVED_IDENTIFIER_FIXUP_3082.y = _RESERVED_IDENTIFIER_FIXUP_1368.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1378 = _RESERVED_IDENTIFIER_FIXUP_3078.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3086;
        _RESERVED_IDENTIFIER_FIXUP_3086.x = _RESERVED_IDENTIFIER_FIXUP_1378.x;
        _RESERVED_IDENTIFIER_FIXUP_3086.y = _RESERVED_IDENTIFIER_FIXUP_1378.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1388 = _RESERVED_IDENTIFIER_FIXUP_3078.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3090;
        _RESERVED_IDENTIFIER_FIXUP_3090.x = _RESERVED_IDENTIFIER_FIXUP_1388.x;
        _RESERVED_IDENTIFIER_FIXUP_3090.y = _RESERVED_IDENTIFIER_FIXUP_1388.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1398 = _RESERVED_IDENTIFIER_FIXUP_3078.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3094;
        _RESERVED_IDENTIFIER_FIXUP_3094.x = _RESERVED_IDENTIFIER_FIXUP_1398.x;
        _RESERVED_IDENTIFIER_FIXUP_3094.y = _RESERVED_IDENTIFIER_FIXUP_1398.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1406 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1406.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1406.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1412 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3082.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3086.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3090.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3094.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3082.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1412.y = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3086.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1412.z = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3090.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1412.w = hdLod5(param_11, param_12).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1469 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1412 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3094.xy;
        float param_14 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1475 = hdLod5(param_13, param_14).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1475;
        float _RESERVED_IDENTIFIER_FIXUP_1480 = float(_RESERVED_IDENTIFIER_FIXUP_1475 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1480;
        float _RESERVED_IDENTIFIER_FIXUP_1483 = dot(_RESERVED_IDENTIFIER_FIXUP_1469, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3078.z = _RESERVED_IDENTIFIER_FIXUP_1483;
        float _RESERVED_IDENTIFIER_FIXUP_1489 = _RESERVED_IDENTIFIER_FIXUP_1480 + _RESERVED_IDENTIFIER_FIXUP_1483;
        _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1489;
        float _RESERVED_IDENTIFIER_FIXUP_1494 = (_RESERVED_IDENTIFIER_FIXUP_1489 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1494;
        _RESERVED_IDENTIFIER_FIXUP_3078.x = (_RESERVED_IDENTIFIER_FIXUP_1340 * _RESERVED_IDENTIFIER_FIXUP_1494) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3824 = _RESERVED_IDENTIFIER_FIXUP_1469;
        _RESERVED_IDENTIFIER_FIXUP_3823 = _RESERVED_IDENTIFIER_FIXUP_3078;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3076 = _RESERVED_IDENTIFIER_FIXUP_3066;
        _RESERVED_IDENTIFIER_FIXUP_3076.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3824 = _RESERVED_IDENTIFIER_FIXUP_3046;
        _RESERVED_IDENTIFIER_FIXUP_3823 = _RESERVED_IDENTIFIER_FIXUP_3076;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1512 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3150 = _RESERVED_IDENTIFIER_FIXUP_3823;
    _RESERVED_IDENTIFIER_FIXUP_3150.y = _RESERVED_IDENTIFIER_FIXUP_1512;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3827;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3825;
    if (_RESERVED_IDENTIFIER_FIXUP_1512 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1521 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3311 = _RESERVED_IDENTIFIER_FIXUP_3150;
        _RESERVED_IDENTIFIER_FIXUP_3311.y = _RESERVED_IDENTIFIER_FIXUP_1521.x;
        _RESERVED_IDENTIFIER_FIXUP_3311.z = _RESERVED_IDENTIFIER_FIXUP_1521.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1531 = _RESERVED_IDENTIFIER_FIXUP_3311.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3315;
        _RESERVED_IDENTIFIER_FIXUP_3315.x = _RESERVED_IDENTIFIER_FIXUP_1531.x;
        _RESERVED_IDENTIFIER_FIXUP_3315.y = _RESERVED_IDENTIFIER_FIXUP_1531.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1541 = _RESERVED_IDENTIFIER_FIXUP_3311.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3319;
        _RESERVED_IDENTIFIER_FIXUP_3319.x = _RESERVED_IDENTIFIER_FIXUP_1541.x;
        _RESERVED_IDENTIFIER_FIXUP_3319.y = _RESERVED_IDENTIFIER_FIXUP_1541.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1551 = _RESERVED_IDENTIFIER_FIXUP_3311.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3323;
        _RESERVED_IDENTIFIER_FIXUP_3323.x = _RESERVED_IDENTIFIER_FIXUP_1551.x;
        _RESERVED_IDENTIFIER_FIXUP_3323.y = _RESERVED_IDENTIFIER_FIXUP_1551.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1561 = _RESERVED_IDENTIFIER_FIXUP_3311.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3327;
        _RESERVED_IDENTIFIER_FIXUP_3327.x = _RESERVED_IDENTIFIER_FIXUP_1561.x;
        _RESERVED_IDENTIFIER_FIXUP_3327.y = _RESERVED_IDENTIFIER_FIXUP_1561.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1569 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1569.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1569.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1575 = hdLod6(param_15, param_16);
        _RESERVED_IDENTIFIER_FIXUP_3315.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3319.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3323.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3327.w = 0.0;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3315.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1575.y = hdLod6(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3319.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1575.z = hdLod6(param_19, param_20).x;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3323.xy;
        float param_22 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1575.w = hdLod6(param_21, param_22).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1632 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1575 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3327.xy;
        float param_24 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1638 = hdLod6(param_23, param_24).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3311.y = _RESERVED_IDENTIFIER_FIXUP_1638;
        float _RESERVED_IDENTIFIER_FIXUP_1643 = float(_RESERVED_IDENTIFIER_FIXUP_1638 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3311.y = _RESERVED_IDENTIFIER_FIXUP_1643;
        float _RESERVED_IDENTIFIER_FIXUP_1646 = dot(_RESERVED_IDENTIFIER_FIXUP_1632, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3311.z = _RESERVED_IDENTIFIER_FIXUP_1646;
        float _RESERVED_IDENTIFIER_FIXUP_1652 = _RESERVED_IDENTIFIER_FIXUP_1643 + _RESERVED_IDENTIFIER_FIXUP_1646;
        _RESERVED_IDENTIFIER_FIXUP_3311.y = _RESERVED_IDENTIFIER_FIXUP_1652;
        _RESERVED_IDENTIFIER_FIXUP_3311.y = _RESERVED_IDENTIFIER_FIXUP_1652 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3827 = _RESERVED_IDENTIFIER_FIXUP_1632;
        _RESERVED_IDENTIFIER_FIXUP_3825 = _RESERVED_IDENTIFIER_FIXUP_3311;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1665 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3155 = _RESERVED_IDENTIFIER_FIXUP_3150;
        _RESERVED_IDENTIFIER_FIXUP_3155.z = _RESERVED_IDENTIFIER_FIXUP_1665;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3828;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3826;
        if (_RESERVED_IDENTIFIER_FIXUP_1665 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1674 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3245 = _RESERVED_IDENTIFIER_FIXUP_3155;
            _RESERVED_IDENTIFIER_FIXUP_3245.z = _RESERVED_IDENTIFIER_FIXUP_1674.x;
            _RESERVED_IDENTIFIER_FIXUP_3245.w = _RESERVED_IDENTIFIER_FIXUP_1674.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1684 = _RESERVED_IDENTIFIER_FIXUP_3245.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3249;
            _RESERVED_IDENTIFIER_FIXUP_3249.x = _RESERVED_IDENTIFIER_FIXUP_1684.x;
            _RESERVED_IDENTIFIER_FIXUP_3249.y = _RESERVED_IDENTIFIER_FIXUP_1684.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1694 = _RESERVED_IDENTIFIER_FIXUP_3245.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3253;
            _RESERVED_IDENTIFIER_FIXUP_3253.x = _RESERVED_IDENTIFIER_FIXUP_1694.x;
            _RESERVED_IDENTIFIER_FIXUP_3253.y = _RESERVED_IDENTIFIER_FIXUP_1694.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1704 = _RESERVED_IDENTIFIER_FIXUP_3245.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3257;
            _RESERVED_IDENTIFIER_FIXUP_3257.x = _RESERVED_IDENTIFIER_FIXUP_1704.x;
            _RESERVED_IDENTIFIER_FIXUP_3257.y = _RESERVED_IDENTIFIER_FIXUP_1704.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1714 = _RESERVED_IDENTIFIER_FIXUP_3245.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3261;
            _RESERVED_IDENTIFIER_FIXUP_3261.x = _RESERVED_IDENTIFIER_FIXUP_1714.x;
            _RESERVED_IDENTIFIER_FIXUP_3261.y = _RESERVED_IDENTIFIER_FIXUP_1714.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1722 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_1722.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1722.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1728 = hdLod7(param_25, param_26);
            _RESERVED_IDENTIFIER_FIXUP_3249.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3253.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3257.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3261.w = 0.0;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3249.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1728.y = hdLod7(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3253.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1728.z = hdLod7(param_29, param_30).x;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3257.xy;
            float param_32 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1728.w = hdLod7(param_31, param_32).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1785 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1728 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3261.xy;
            float param_34 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1791 = hdLod7(param_33, param_34).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3245.z = _RESERVED_IDENTIFIER_FIXUP_1791;
            float _RESERVED_IDENTIFIER_FIXUP_1796 = float(_RESERVED_IDENTIFIER_FIXUP_1791 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3245.z = _RESERVED_IDENTIFIER_FIXUP_1796;
            float _RESERVED_IDENTIFIER_FIXUP_1799 = dot(_RESERVED_IDENTIFIER_FIXUP_1785, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3245.w = _RESERVED_IDENTIFIER_FIXUP_1799;
            float _RESERVED_IDENTIFIER_FIXUP_1805 = _RESERVED_IDENTIFIER_FIXUP_1796 + _RESERVED_IDENTIFIER_FIXUP_1799;
            _RESERVED_IDENTIFIER_FIXUP_3245.z = _RESERVED_IDENTIFIER_FIXUP_1805;
            _RESERVED_IDENTIFIER_FIXUP_3245.y = _RESERVED_IDENTIFIER_FIXUP_1805 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3828 = _RESERVED_IDENTIFIER_FIXUP_1785;
            _RESERVED_IDENTIFIER_FIXUP_3826 = _RESERVED_IDENTIFIER_FIXUP_3245;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3159 = _RESERVED_IDENTIFIER_FIXUP_3824;
            _RESERVED_IDENTIFIER_FIXUP_3159.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3159.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1821 = (_RESERVED_IDENTIFIER_FIXUP_3159.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3164;
            _RESERVED_IDENTIFIER_FIXUP_3164.x = _RESERVED_IDENTIFIER_FIXUP_1821.x;
            _RESERVED_IDENTIFIER_FIXUP_3164.y = _RESERVED_IDENTIFIER_FIXUP_1821.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1831 = _RESERVED_IDENTIFIER_FIXUP_3164.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3168;
            _RESERVED_IDENTIFIER_FIXUP_3168.x = _RESERVED_IDENTIFIER_FIXUP_1831.x;
            _RESERVED_IDENTIFIER_FIXUP_3168.y = _RESERVED_IDENTIFIER_FIXUP_1831.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1841 = _RESERVED_IDENTIFIER_FIXUP_3164.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3172;
            _RESERVED_IDENTIFIER_FIXUP_3172.x = _RESERVED_IDENTIFIER_FIXUP_1841.x;
            _RESERVED_IDENTIFIER_FIXUP_3172.y = _RESERVED_IDENTIFIER_FIXUP_1841.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1851 = _RESERVED_IDENTIFIER_FIXUP_3164.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3176;
            _RESERVED_IDENTIFIER_FIXUP_3176.x = _RESERVED_IDENTIFIER_FIXUP_1851.x;
            _RESERVED_IDENTIFIER_FIXUP_3176.y = _RESERVED_IDENTIFIER_FIXUP_1851.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1861 = _RESERVED_IDENTIFIER_FIXUP_3164.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3180;
            _RESERVED_IDENTIFIER_FIXUP_3180.x = _RESERVED_IDENTIFIER_FIXUP_1861.x;
            _RESERVED_IDENTIFIER_FIXUP_3180.y = _RESERVED_IDENTIFIER_FIXUP_1861.y;
            _RESERVED_IDENTIFIER_FIXUP_3164.w = 0.0;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3164.xy;
            float param_36 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1875 = hdLod8(param_35, param_36);
            _RESERVED_IDENTIFIER_FIXUP_3168.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3172.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3176.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3180.w = 0.0;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3168.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1875.y = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3172.xy;
            float param_40 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1875.z = hdLod8(param_39, param_40).x;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3176.xy;
            float param_42 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1875.w = hdLod8(param_41, param_42).x;
            vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3180.xy;
            float param_44 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1938 = hdLod8(param_43, param_44).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3220 = _RESERVED_IDENTIFIER_FIXUP_3155;
            _RESERVED_IDENTIFIER_FIXUP_3220.z = _RESERVED_IDENTIFIER_FIXUP_1938;
            float _RESERVED_IDENTIFIER_FIXUP_1943 = float(_RESERVED_IDENTIFIER_FIXUP_1938 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3220.z = _RESERVED_IDENTIFIER_FIXUP_1943;
            float _RESERVED_IDENTIFIER_FIXUP_1946 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1875 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3220.w = _RESERVED_IDENTIFIER_FIXUP_1946;
            float _RESERVED_IDENTIFIER_FIXUP_1952 = _RESERVED_IDENTIFIER_FIXUP_1943 + _RESERVED_IDENTIFIER_FIXUP_1946;
            _RESERVED_IDENTIFIER_FIXUP_3220.z = _RESERVED_IDENTIFIER_FIXUP_1952;
            float _RESERVED_IDENTIFIER_FIXUP_1960 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3220.w = _RESERVED_IDENTIFIER_FIXUP_1960;
            float _RESERVED_IDENTIFIER_FIXUP_1966 = clamp((_RESERVED_IDENTIFIER_FIXUP_1960 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3220.w = _RESERVED_IDENTIFIER_FIXUP_1966;
            float _RESERVED_IDENTIFIER_FIXUP_1971 = (_RESERVED_IDENTIFIER_FIXUP_1952 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3220.z = _RESERVED_IDENTIFIER_FIXUP_1971;
            _RESERVED_IDENTIFIER_FIXUP_3220.y = (_RESERVED_IDENTIFIER_FIXUP_1966 * _RESERVED_IDENTIFIER_FIXUP_1971) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3828 = _RESERVED_IDENTIFIER_FIXUP_3159;
            _RESERVED_IDENTIFIER_FIXUP_3826 = _RESERVED_IDENTIFIER_FIXUP_3220;
        }
        _RESERVED_IDENTIFIER_FIXUP_3827 = _RESERVED_IDENTIFIER_FIXUP_3828;
        _RESERVED_IDENTIFIER_FIXUP_3825 = _RESERVED_IDENTIFIER_FIXUP_3826;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1986 = min(_RESERVED_IDENTIFIER_FIXUP_3825.y, _RESERVED_IDENTIFIER_FIXUP_3825.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3379 = _RESERVED_IDENTIFIER_FIXUP_3827;
    _RESERVED_IDENTIFIER_FIXUP_3379.x = _RESERVED_IDENTIFIER_FIXUP_1986;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3841 = vec4((_RESERVED_IDENTIFIER_FIXUP_1986 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2008 = _RESERVED_IDENTIFIER_FIXUP_3379.xxx * _RESERVED_IDENTIFIER_FIXUP_3841.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2010 = _RESERVED_IDENTIFIER_FIXUP_2008.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3390 = _RESERVED_IDENTIFIER_FIXUP_3841;
    _RESERVED_IDENTIFIER_FIXUP_3390.y = _RESERVED_IDENTIFIER_FIXUP_2010;
    _RESERVED_IDENTIFIER_FIXUP_3390.z = _RESERVED_IDENTIFIER_FIXUP_2008.y;
    _RESERVED_IDENTIFIER_FIXUP_3390.w = _RESERVED_IDENTIFIER_FIXUP_2008.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2022 = (mix(_RESERVED_IDENTIFIER_FIXUP_1322, _RESERVED_IDENTIFIER_FIXUP_3058, _RESERVED_IDENTIFIER_FIXUP_1194.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_3390.xxx) + _RESERVED_IDENTIFIER_FIXUP_3390.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3842 = vec4(_RESERVED_IDENTIFIER_FIXUP_2022.x, _RESERVED_IDENTIFIER_FIXUP_2010, _RESERVED_IDENTIFIER_FIXUP_2008.yz);
    _RESERVED_IDENTIFIER_FIXUP_3842.y = _RESERVED_IDENTIFIER_FIXUP_2022.y;
    _RESERVED_IDENTIFIER_FIXUP_3842.z = _RESERVED_IDENTIFIER_FIXUP_2022.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2035 = _RESERVED_IDENTIFIER_FIXUP_3842.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3402 = _RESERVED_IDENTIFIER_FIXUP_3842;
    _RESERVED_IDENTIFIER_FIXUP_3402.x = _RESERVED_IDENTIFIER_FIXUP_2035.x;
    _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_2035.y;
    _RESERVED_IDENTIFIER_FIXUP_3402.z = _RESERVED_IDENTIFIER_FIXUP_2035.z;
    vec2 param_45 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2092 = hdTex0(param_45);
    vec2 param_46 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2096 = hdTex1(param_46);
    vec2 param_47 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2100 = hdTex2(param_47);
    vec2 param_48 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2104 = hdTex3(param_48);
    vec2 param_49 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2108 = hdTex4(param_49);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2116 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3416 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3416.x = _RESERVED_IDENTIFIER_FIXUP_2116.x;
    _RESERVED_IDENTIFIER_FIXUP_3416.y = _RESERVED_IDENTIFIER_FIXUP_2116.y;
    _RESERVED_IDENTIFIER_FIXUP_3416.z = _RESERVED_IDENTIFIER_FIXUP_2116.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2124 = _RESERVED_IDENTIFIER_FIXUP_2092.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2127 = _RESERVED_IDENTIFIER_FIXUP_2124 * _RESERVED_IDENTIFIER_FIXUP_3416.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3422 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3422.x = _RESERVED_IDENTIFIER_FIXUP_2127.x;
    _RESERVED_IDENTIFIER_FIXUP_3422.y = _RESERVED_IDENTIFIER_FIXUP_2127.y;
    _RESERVED_IDENTIFIER_FIXUP_3422.z = _RESERVED_IDENTIFIER_FIXUP_2127.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2142 = mix(_RESERVED_IDENTIFIER_FIXUP_3422.xyz, _RESERVED_IDENTIFIER_FIXUP_2124, _RESERVED_IDENTIFIER_FIXUP_1227);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3428 = _RESERVED_IDENTIFIER_FIXUP_2092;
    _RESERVED_IDENTIFIER_FIXUP_3428.x = _RESERVED_IDENTIFIER_FIXUP_2142.x;
    _RESERVED_IDENTIFIER_FIXUP_3428.y = _RESERVED_IDENTIFIER_FIXUP_2142.y;
    _RESERVED_IDENTIFIER_FIXUP_3428.z = _RESERVED_IDENTIFIER_FIXUP_2142.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2150 = _RESERVED_IDENTIFIER_FIXUP_2096.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2153 = _RESERVED_IDENTIFIER_FIXUP_2150 * _RESERVED_IDENTIFIER_FIXUP_3416.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3422.x = _RESERVED_IDENTIFIER_FIXUP_2153.x;
    _RESERVED_IDENTIFIER_FIXUP_3422.y = _RESERVED_IDENTIFIER_FIXUP_2153.y;
    _RESERVED_IDENTIFIER_FIXUP_3422.z = _RESERVED_IDENTIFIER_FIXUP_2153.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2168 = mix(_RESERVED_IDENTIFIER_FIXUP_3422.xyz, _RESERVED_IDENTIFIER_FIXUP_2150, _RESERVED_IDENTIFIER_FIXUP_1253);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3440 = _RESERVED_IDENTIFIER_FIXUP_2096;
    _RESERVED_IDENTIFIER_FIXUP_3440.x = _RESERVED_IDENTIFIER_FIXUP_2168.x;
    _RESERVED_IDENTIFIER_FIXUP_3440.y = _RESERVED_IDENTIFIER_FIXUP_2168.y;
    _RESERVED_IDENTIFIER_FIXUP_3440.z = _RESERVED_IDENTIFIER_FIXUP_2168.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2176 = _RESERVED_IDENTIFIER_FIXUP_2100.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2179 = _RESERVED_IDENTIFIER_FIXUP_2176 * _RESERVED_IDENTIFIER_FIXUP_3416.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3422.x = _RESERVED_IDENTIFIER_FIXUP_2179.x;
    _RESERVED_IDENTIFIER_FIXUP_3422.y = _RESERVED_IDENTIFIER_FIXUP_2179.y;
    _RESERVED_IDENTIFIER_FIXUP_3422.z = _RESERVED_IDENTIFIER_FIXUP_2179.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2194 = mix(_RESERVED_IDENTIFIER_FIXUP_3422.xyz, _RESERVED_IDENTIFIER_FIXUP_2176, _RESERVED_IDENTIFIER_FIXUP_1279);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3452 = _RESERVED_IDENTIFIER_FIXUP_2100;
    _RESERVED_IDENTIFIER_FIXUP_3452.x = _RESERVED_IDENTIFIER_FIXUP_2194.x;
    _RESERVED_IDENTIFIER_FIXUP_3452.y = _RESERVED_IDENTIFIER_FIXUP_2194.y;
    _RESERVED_IDENTIFIER_FIXUP_3452.z = _RESERVED_IDENTIFIER_FIXUP_2194.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2202 = _RESERVED_IDENTIFIER_FIXUP_2104.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2205 = _RESERVED_IDENTIFIER_FIXUP_2202 * _RESERVED_IDENTIFIER_FIXUP_3416.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3458 = _RESERVED_IDENTIFIER_FIXUP_1197;
    _RESERVED_IDENTIFIER_FIXUP_3458.x = _RESERVED_IDENTIFIER_FIXUP_2205.x;
    _RESERVED_IDENTIFIER_FIXUP_3458.y = _RESERVED_IDENTIFIER_FIXUP_2205.y;
    _RESERVED_IDENTIFIER_FIXUP_3458.z = _RESERVED_IDENTIFIER_FIXUP_2205.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2220 = mix(_RESERVED_IDENTIFIER_FIXUP_3458.xyz, _RESERVED_IDENTIFIER_FIXUP_2202, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3458.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_2104;
    _RESERVED_IDENTIFIER_FIXUP_3464.x = _RESERVED_IDENTIFIER_FIXUP_2220.x;
    _RESERVED_IDENTIFIER_FIXUP_3464.y = _RESERVED_IDENTIFIER_FIXUP_2220.y;
    _RESERVED_IDENTIFIER_FIXUP_3464.z = _RESERVED_IDENTIFIER_FIXUP_2220.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2236 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3428, _RESERVED_IDENTIFIER_FIXUP_3440, _RESERVED_IDENTIFIER_FIXUP_2108.xxxx), _RESERVED_IDENTIFIER_FIXUP_3452, _RESERVED_IDENTIFIER_FIXUP_2108.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2241 = mix(_RESERVED_IDENTIFIER_FIXUP_2236, _RESERVED_IDENTIFIER_FIXUP_3464, _RESERVED_IDENTIFIER_FIXUP_2108.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3472 = _RESERVED_IDENTIFIER_FIXUP_2236;
    _RESERVED_IDENTIFIER_FIXUP_3472.x = _RESERVED_IDENTIFIER_FIXUP_1334;
    float _RESERVED_IDENTIFIER_FIXUP_2254 = clamp((_RESERVED_IDENTIFIER_FIXUP_1334 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3472.x = _RESERVED_IDENTIFIER_FIXUP_2254;
    float _RESERVED_IDENTIFIER_FIXUP_2260 = ((-_RESERVED_IDENTIFIER_FIXUP_2254) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3472.y = _RESERVED_IDENTIFIER_FIXUP_2260;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3833;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3832;
    if (_RESERVED_IDENTIFIER_FIXUP_2260 != (-_RESERVED_IDENTIFIER_FIXUP_2260))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2272 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3484 = _RESERVED_IDENTIFIER_FIXUP_3472;
        _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2272.x;
        _RESERVED_IDENTIFIER_FIXUP_3484.z = _RESERVED_IDENTIFIER_FIXUP_2272.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2282 = _RESERVED_IDENTIFIER_FIXUP_3484.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3488;
        _RESERVED_IDENTIFIER_FIXUP_3488.x = _RESERVED_IDENTIFIER_FIXUP_2282.x;
        _RESERVED_IDENTIFIER_FIXUP_3488.y = _RESERVED_IDENTIFIER_FIXUP_2282.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2292 = _RESERVED_IDENTIFIER_FIXUP_3484.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3492;
        _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_2292.x;
        _RESERVED_IDENTIFIER_FIXUP_3492.y = _RESERVED_IDENTIFIER_FIXUP_2292.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2302 = _RESERVED_IDENTIFIER_FIXUP_3484.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3496;
        _RESERVED_IDENTIFIER_FIXUP_3496.x = _RESERVED_IDENTIFIER_FIXUP_2302.x;
        _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2302.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2312 = _RESERVED_IDENTIFIER_FIXUP_3484.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3500;
        _RESERVED_IDENTIFIER_FIXUP_3500.x = _RESERVED_IDENTIFIER_FIXUP_2312.x;
        _RESERVED_IDENTIFIER_FIXUP_3500.y = _RESERVED_IDENTIFIER_FIXUP_2312.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2320 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2320.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2320.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2326 = hdLod5(param_50, param_51);
        _RESERVED_IDENTIFIER_FIXUP_3488.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3492.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3496.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3500.w = 0.0;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3488.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2326.y = hdLod5(param_52, param_53).x;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3492.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2326.z = hdLod5(param_54, param_55).x;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3496.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2326.w = hdLod5(param_56, param_57).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2383 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2326 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3500.xy;
        float param_59 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2389 = hdLod5(param_58, param_59).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2389;
        float _RESERVED_IDENTIFIER_FIXUP_2394 = float(_RESERVED_IDENTIFIER_FIXUP_2389 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2394;
        float _RESERVED_IDENTIFIER_FIXUP_2397 = dot(_RESERVED_IDENTIFIER_FIXUP_2383, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3484.z = _RESERVED_IDENTIFIER_FIXUP_2397;
        float _RESERVED_IDENTIFIER_FIXUP_2403 = _RESERVED_IDENTIFIER_FIXUP_2394 + _RESERVED_IDENTIFIER_FIXUP_2397;
        _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2403;
        float _RESERVED_IDENTIFIER_FIXUP_2408 = (_RESERVED_IDENTIFIER_FIXUP_2403 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3484.y = _RESERVED_IDENTIFIER_FIXUP_2408;
        _RESERVED_IDENTIFIER_FIXUP_3484.x = (_RESERVED_IDENTIFIER_FIXUP_2254 * _RESERVED_IDENTIFIER_FIXUP_2408) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3833 = _RESERVED_IDENTIFIER_FIXUP_2383;
        _RESERVED_IDENTIFIER_FIXUP_3832 = _RESERVED_IDENTIFIER_FIXUP_3484;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3482 = _RESERVED_IDENTIFIER_FIXUP_3472;
        _RESERVED_IDENTIFIER_FIXUP_3482.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3833 = _RESERVED_IDENTIFIER_FIXUP_3452;
        _RESERVED_IDENTIFIER_FIXUP_3832 = _RESERVED_IDENTIFIER_FIXUP_3482;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3556 = _RESERVED_IDENTIFIER_FIXUP_3832;
    _RESERVED_IDENTIFIER_FIXUP_3556.y = _RESERVED_IDENTIFIER_FIXUP_1512;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3836;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3834;
    if (_RESERVED_IDENTIFIER_FIXUP_1512 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2435 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3717 = _RESERVED_IDENTIFIER_FIXUP_3556;
        _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_2435.x;
        _RESERVED_IDENTIFIER_FIXUP_3717.z = _RESERVED_IDENTIFIER_FIXUP_2435.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2445 = _RESERVED_IDENTIFIER_FIXUP_3717.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3721;
        _RESERVED_IDENTIFIER_FIXUP_3721.x = _RESERVED_IDENTIFIER_FIXUP_2445.x;
        _RESERVED_IDENTIFIER_FIXUP_3721.y = _RESERVED_IDENTIFIER_FIXUP_2445.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2455 = _RESERVED_IDENTIFIER_FIXUP_3717.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3725;
        _RESERVED_IDENTIFIER_FIXUP_3725.x = _RESERVED_IDENTIFIER_FIXUP_2455.x;
        _RESERVED_IDENTIFIER_FIXUP_3725.y = _RESERVED_IDENTIFIER_FIXUP_2455.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2465 = _RESERVED_IDENTIFIER_FIXUP_3717.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3729;
        _RESERVED_IDENTIFIER_FIXUP_3729.x = _RESERVED_IDENTIFIER_FIXUP_2465.x;
        _RESERVED_IDENTIFIER_FIXUP_3729.y = _RESERVED_IDENTIFIER_FIXUP_2465.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2475 = _RESERVED_IDENTIFIER_FIXUP_3717.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3733;
        _RESERVED_IDENTIFIER_FIXUP_3733.x = _RESERVED_IDENTIFIER_FIXUP_2475.x;
        _RESERVED_IDENTIFIER_FIXUP_3733.y = _RESERVED_IDENTIFIER_FIXUP_2475.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2483 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_2483.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2483.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2489 = hdLod6(param_60, param_61);
        _RESERVED_IDENTIFIER_FIXUP_3721.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3725.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3729.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3733.w = 0.0;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3721.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2489.y = hdLod6(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3725.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2489.z = hdLod6(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3729.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2489.w = hdLod6(param_66, param_67).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2546 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2489 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3733.xy;
        float param_69 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2552 = hdLod6(param_68, param_69).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_2552;
        float _RESERVED_IDENTIFIER_FIXUP_2557 = float(_RESERVED_IDENTIFIER_FIXUP_2552 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_2557;
        float _RESERVED_IDENTIFIER_FIXUP_2560 = dot(_RESERVED_IDENTIFIER_FIXUP_2546, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3717.z = _RESERVED_IDENTIFIER_FIXUP_2560;
        float _RESERVED_IDENTIFIER_FIXUP_2566 = _RESERVED_IDENTIFIER_FIXUP_2557 + _RESERVED_IDENTIFIER_FIXUP_2560;
        _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_2566;
        _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_2566 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3836 = _RESERVED_IDENTIFIER_FIXUP_2546;
        _RESERVED_IDENTIFIER_FIXUP_3834 = _RESERVED_IDENTIFIER_FIXUP_3717;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2579 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3561 = _RESERVED_IDENTIFIER_FIXUP_3556;
        _RESERVED_IDENTIFIER_FIXUP_3561.z = _RESERVED_IDENTIFIER_FIXUP_2579;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3837;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3835;
        if (_RESERVED_IDENTIFIER_FIXUP_2579 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2588 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3651 = _RESERVED_IDENTIFIER_FIXUP_3561;
            _RESERVED_IDENTIFIER_FIXUP_3651.z = _RESERVED_IDENTIFIER_FIXUP_2588.x;
            _RESERVED_IDENTIFIER_FIXUP_3651.w = _RESERVED_IDENTIFIER_FIXUP_2588.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2598 = _RESERVED_IDENTIFIER_FIXUP_3651.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3655;
            _RESERVED_IDENTIFIER_FIXUP_3655.x = _RESERVED_IDENTIFIER_FIXUP_2598.x;
            _RESERVED_IDENTIFIER_FIXUP_3655.y = _RESERVED_IDENTIFIER_FIXUP_2598.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2608 = _RESERVED_IDENTIFIER_FIXUP_3651.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3659;
            _RESERVED_IDENTIFIER_FIXUP_3659.x = _RESERVED_IDENTIFIER_FIXUP_2608.x;
            _RESERVED_IDENTIFIER_FIXUP_3659.y = _RESERVED_IDENTIFIER_FIXUP_2608.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2618 = _RESERVED_IDENTIFIER_FIXUP_3651.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3663;
            _RESERVED_IDENTIFIER_FIXUP_3663.x = _RESERVED_IDENTIFIER_FIXUP_2618.x;
            _RESERVED_IDENTIFIER_FIXUP_3663.y = _RESERVED_IDENTIFIER_FIXUP_2618.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2628 = _RESERVED_IDENTIFIER_FIXUP_3651.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3667;
            _RESERVED_IDENTIFIER_FIXUP_3667.x = _RESERVED_IDENTIFIER_FIXUP_2628.x;
            _RESERVED_IDENTIFIER_FIXUP_3667.y = _RESERVED_IDENTIFIER_FIXUP_2628.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2636 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2636.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2636.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2642 = hdLod7(param_70, param_71);
            _RESERVED_IDENTIFIER_FIXUP_3655.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3659.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3663.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3667.w = 0.0;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3655.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2642.y = hdLod7(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3659.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2642.z = hdLod7(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3663.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2642.w = hdLod7(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2699 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2642 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3667.xy;
            float param_79 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2705 = hdLod7(param_78, param_79).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3651.z = _RESERVED_IDENTIFIER_FIXUP_2705;
            float _RESERVED_IDENTIFIER_FIXUP_2710 = float(_RESERVED_IDENTIFIER_FIXUP_2705 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3651.z = _RESERVED_IDENTIFIER_FIXUP_2710;
            float _RESERVED_IDENTIFIER_FIXUP_2713 = dot(_RESERVED_IDENTIFIER_FIXUP_2699, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3651.w = _RESERVED_IDENTIFIER_FIXUP_2713;
            float _RESERVED_IDENTIFIER_FIXUP_2719 = _RESERVED_IDENTIFIER_FIXUP_2710 + _RESERVED_IDENTIFIER_FIXUP_2713;
            _RESERVED_IDENTIFIER_FIXUP_3651.z = _RESERVED_IDENTIFIER_FIXUP_2719;
            _RESERVED_IDENTIFIER_FIXUP_3651.y = _RESERVED_IDENTIFIER_FIXUP_2719 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3837 = _RESERVED_IDENTIFIER_FIXUP_2699;
            _RESERVED_IDENTIFIER_FIXUP_3835 = _RESERVED_IDENTIFIER_FIXUP_3651;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3565 = _RESERVED_IDENTIFIER_FIXUP_3833;
            _RESERVED_IDENTIFIER_FIXUP_3565.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3565.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2735 = (_RESERVED_IDENTIFIER_FIXUP_3565.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3570;
            _RESERVED_IDENTIFIER_FIXUP_3570.x = _RESERVED_IDENTIFIER_FIXUP_2735.x;
            _RESERVED_IDENTIFIER_FIXUP_3570.y = _RESERVED_IDENTIFIER_FIXUP_2735.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2745 = _RESERVED_IDENTIFIER_FIXUP_3570.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3574;
            _RESERVED_IDENTIFIER_FIXUP_3574.x = _RESERVED_IDENTIFIER_FIXUP_2745.x;
            _RESERVED_IDENTIFIER_FIXUP_3574.y = _RESERVED_IDENTIFIER_FIXUP_2745.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2755 = _RESERVED_IDENTIFIER_FIXUP_3570.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3578;
            _RESERVED_IDENTIFIER_FIXUP_3578.x = _RESERVED_IDENTIFIER_FIXUP_2755.x;
            _RESERVED_IDENTIFIER_FIXUP_3578.y = _RESERVED_IDENTIFIER_FIXUP_2755.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2765 = _RESERVED_IDENTIFIER_FIXUP_3570.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3582;
            _RESERVED_IDENTIFIER_FIXUP_3582.x = _RESERVED_IDENTIFIER_FIXUP_2765.x;
            _RESERVED_IDENTIFIER_FIXUP_3582.y = _RESERVED_IDENTIFIER_FIXUP_2765.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2775 = _RESERVED_IDENTIFIER_FIXUP_3570.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3586;
            _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_2775.x;
            _RESERVED_IDENTIFIER_FIXUP_3586.y = _RESERVED_IDENTIFIER_FIXUP_2775.y;
            _RESERVED_IDENTIFIER_FIXUP_3570.w = 0.0;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3570.xy;
            float param_81 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2789 = hdLod8(param_80, param_81);
            _RESERVED_IDENTIFIER_FIXUP_3574.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3578.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3582.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3586.w = 0.0;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3574.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2789.y = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3578.xy;
            float param_85 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2789.z = hdLod8(param_84, param_85).x;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3582.xy;
            float param_87 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2789.w = hdLod8(param_86, param_87).x;
            vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3586.xy;
            float param_89 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2852 = hdLod8(param_88, param_89).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3626 = _RESERVED_IDENTIFIER_FIXUP_3561;
            _RESERVED_IDENTIFIER_FIXUP_3626.z = _RESERVED_IDENTIFIER_FIXUP_2852;
            float _RESERVED_IDENTIFIER_FIXUP_2857 = float(_RESERVED_IDENTIFIER_FIXUP_2852 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3626.z = _RESERVED_IDENTIFIER_FIXUP_2857;
            float _RESERVED_IDENTIFIER_FIXUP_2860 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2789 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3626.w = _RESERVED_IDENTIFIER_FIXUP_2860;
            float _RESERVED_IDENTIFIER_FIXUP_2866 = _RESERVED_IDENTIFIER_FIXUP_2857 + _RESERVED_IDENTIFIER_FIXUP_2860;
            _RESERVED_IDENTIFIER_FIXUP_3626.z = _RESERVED_IDENTIFIER_FIXUP_2866;
            float _RESERVED_IDENTIFIER_FIXUP_2874 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3626.w = _RESERVED_IDENTIFIER_FIXUP_2874;
            float _RESERVED_IDENTIFIER_FIXUP_2880 = clamp((_RESERVED_IDENTIFIER_FIXUP_2874 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3626.w = _RESERVED_IDENTIFIER_FIXUP_2880;
            float _RESERVED_IDENTIFIER_FIXUP_2885 = (_RESERVED_IDENTIFIER_FIXUP_2866 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3626.z = _RESERVED_IDENTIFIER_FIXUP_2885;
            _RESERVED_IDENTIFIER_FIXUP_3626.y = (_RESERVED_IDENTIFIER_FIXUP_2880 * _RESERVED_IDENTIFIER_FIXUP_2885) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3837 = _RESERVED_IDENTIFIER_FIXUP_3565;
            _RESERVED_IDENTIFIER_FIXUP_3835 = _RESERVED_IDENTIFIER_FIXUP_3626;
        }
        _RESERVED_IDENTIFIER_FIXUP_3836 = _RESERVED_IDENTIFIER_FIXUP_3837;
        _RESERVED_IDENTIFIER_FIXUP_3834 = _RESERVED_IDENTIFIER_FIXUP_3835;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2900 = min(_RESERVED_IDENTIFIER_FIXUP_3834.y, _RESERVED_IDENTIFIER_FIXUP_3834.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3785 = _RESERVED_IDENTIFIER_FIXUP_3836;
    _RESERVED_IDENTIFIER_FIXUP_3785.x = _RESERVED_IDENTIFIER_FIXUP_2900;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3844 = vec4((_RESERVED_IDENTIFIER_FIXUP_2900 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2241.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2922 = _RESERVED_IDENTIFIER_FIXUP_3785.xxx * _RESERVED_IDENTIFIER_FIXUP_3844.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2924 = _RESERVED_IDENTIFIER_FIXUP_2922.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3796 = _RESERVED_IDENTIFIER_FIXUP_3844;
    _RESERVED_IDENTIFIER_FIXUP_3796.y = _RESERVED_IDENTIFIER_FIXUP_2924;
    _RESERVED_IDENTIFIER_FIXUP_3796.z = _RESERVED_IDENTIFIER_FIXUP_2922.y;
    _RESERVED_IDENTIFIER_FIXUP_3796.w = _RESERVED_IDENTIFIER_FIXUP_2922.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2936 = (_RESERVED_IDENTIFIER_FIXUP_2241.xyz * _RESERVED_IDENTIFIER_FIXUP_3796.xxx) + _RESERVED_IDENTIFIER_FIXUP_3796.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3845 = vec4(_RESERVED_IDENTIFIER_FIXUP_2936.x, _RESERVED_IDENTIFIER_FIXUP_2924, _RESERVED_IDENTIFIER_FIXUP_2922.yz);
    _RESERVED_IDENTIFIER_FIXUP_3845.y = _RESERVED_IDENTIFIER_FIXUP_2936.y;
    _RESERVED_IDENTIFIER_FIXUP_3845.z = _RESERVED_IDENTIFIER_FIXUP_2936.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2949 = _RESERVED_IDENTIFIER_FIXUP_3845.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3808 = _RESERVED_IDENTIFIER_FIXUP_3845;
    _RESERVED_IDENTIFIER_FIXUP_3808.x = _RESERVED_IDENTIFIER_FIXUP_2949.x;
    _RESERVED_IDENTIFIER_FIXUP_3808.y = _RESERVED_IDENTIFIER_FIXUP_2949.y;
    _RESERVED_IDENTIFIER_FIXUP_3808.z = _RESERVED_IDENTIFIER_FIXUP_2949.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3808.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1037 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1046;
    if (_RESERVED_IDENTIFIER_FIXUP_1037)
    {
        _RESERVED_IDENTIFIER_FIXUP_1046 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1046 = _RESERVED_IDENTIFIER_FIXUP_1037;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1046)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1083 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3402.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1109 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3002;
    if (_RESERVED_IDENTIFIER_FIXUP_1083 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3002 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1083), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1109);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3002 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1109);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3002;
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
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB269 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB269.x;
        r0.z = hdB269.y;
        vec2 hdB280 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB280.x;
        r2.y = hdB280.y;
        vec2 hdB291 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB291.x;
        r3.y = hdB291.y;
        vec2 hdB302 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB302.x;
        r4.y = hdB302.y;
        vec2 hdB313 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB313.x;
        r5.y = hdB313.y;
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
        r0.y = r5.x + (-v5.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
    }
    else
    {
        r0.x = 1.0;
    }
    r0.y = max(abs(v6.x), abs(v6.y));
    if (r0.y < 1.0)
    {
        vec2 hdB444 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB444.x;
        r0.z = hdB444.y;
        vec2 hdB454 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB454.x;
        r2.y = hdB454.y;
        vec2 hdB464 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB464.x;
        r3.y = hdB464.y;
        vec2 hdB474 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB474.x;
        r4.y = hdB474.y;
        vec2 hdB484 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB484.x;
        r5.y = hdB484.y;
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
        r0.y = r5.x + (-v6.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v7.x), abs(v7.y));
        if (r0.z < 1.0)
        {
            vec2 hdB599 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB599.x;
            r0.w = hdB599.y;
            vec2 hdB609 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB609.x;
            r2.y = hdB609.y;
            vec2 hdB619 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB619.x;
            r3.y = hdB619.y;
            vec2 hdB629 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB629.x;
            r4.y = hdB629.y;
            vec2 hdB639 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB639.x;
            r5.y = hdB639.y;
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
            r0.z = r5.x + (-v7.z);
            r0.z = float(r0.z >= 0.0);
            r0.w = dot(r2, vec4(1.0));
            r0.z += r0.w;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v5.w;
            r2.y = v6.w;
            vec2 hdB747 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB747.x;
            r3.y = hdB747.y;
            vec2 hdB757 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB757.x;
            r4.y = hdB757.y;
            vec2 hdB767 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB767.x;
            r5.y = hdB767.y;
            vec2 hdB777 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB777.x;
            r6.y = hdB777.y;
            vec2 hdB787 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB787.x;
            r7.y = hdB787.y;
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
            r0.z = r7.x + (-v7.w);
            r0.z = float(r0.z >= 0.0);
            r0.w = dot(r3, vec4(1.0));
            r0.z += r0.w;
            r0.w = max(abs(r2.x), abs(r2.y));
            r0.w = clamp((r0.w * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.z = (r0.z * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.w * r0.z) + 1.0;
        }
    }
    r2.x = min(r0.y, r0.x);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB926 = r1.www * v1.xyz;
    r0.y = hdB926.x;
    r0.z = hdB926.y;
    r0.w = hdB926.z;
    vec4 hdB935 = r0;
    vec3 hdB937 = r2.xxx * hdB935.yzw;
    r0.y = hdB937.x;
    r0.z = hdB937.y;
    r0.w = hdB937.z;
    vec4 hdB946 = r0;
    vec4 hdB949 = r0;
    vec3 hdB951 = (r1.xyz * hdB946.xxx) + hdB949.yzw;
    r0.x = hdB951.x;
    r0.y = hdB951.y;
    r0.z = hdB951.z;
    vec4 hdB958 = r0;
    vec3 hdB965 = hdB958.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB965.x;
    r0.y = hdB965.y;
    r0.z = hdB965.z;
    vec3 hdB980 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB980.x;
    oC0.y = hdB980.y;
    oC0.z = hdB980.z;
    oC0.w = 1.0;
    bool hdB992 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1000;
    if (hdB992)
    {
        hdB1000 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1000 = hdB992;
    }
    if (hdB1000)
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
    bool _3539 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3549;
    if (_3539)
    {
        _3549 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3549 = _3539;
    }
    if (_3549)
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
        bool _3574 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3589;
        if (!_3574)
        {
            _3589 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3589 = _3574;
        }
        if (_3589)
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
