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
float _RESERVED_IDENTIFIER_FIXUP_3737;
vec4 _RESERVED_IDENTIFIER_FIXUP_3738;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1171 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1175 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1179 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1183 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1187 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1190 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1192 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3737).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1195 = _RESERVED_IDENTIFIER_FIXUP_1192 + _RESERVED_IDENTIFIER_FIXUP_1192;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2984;
    _RESERVED_IDENTIFIER_FIXUP_2984.x = _RESERVED_IDENTIFIER_FIXUP_1195.x;
    _RESERVED_IDENTIFIER_FIXUP_2984.y = _RESERVED_IDENTIFIER_FIXUP_1195.y;
    _RESERVED_IDENTIFIER_FIXUP_2984.z = _RESERVED_IDENTIFIER_FIXUP_1195.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1203 = _RESERVED_IDENTIFIER_FIXUP_1171.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1206 = _RESERVED_IDENTIFIER_FIXUP_1203 * _RESERVED_IDENTIFIER_FIXUP_2984.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2990;
    _RESERVED_IDENTIFIER_FIXUP_2990.x = _RESERVED_IDENTIFIER_FIXUP_1206.x;
    _RESERVED_IDENTIFIER_FIXUP_2990.y = _RESERVED_IDENTIFIER_FIXUP_1206.y;
    _RESERVED_IDENTIFIER_FIXUP_2990.z = _RESERVED_IDENTIFIER_FIXUP_1206.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1220 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1190.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1221 = mix(_RESERVED_IDENTIFIER_FIXUP_2990.xyz, _RESERVED_IDENTIFIER_FIXUP_1203, _RESERVED_IDENTIFIER_FIXUP_1220);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2996 = _RESERVED_IDENTIFIER_FIXUP_1171;
    _RESERVED_IDENTIFIER_FIXUP_2996.x = _RESERVED_IDENTIFIER_FIXUP_1221.x;
    _RESERVED_IDENTIFIER_FIXUP_2996.y = _RESERVED_IDENTIFIER_FIXUP_1221.y;
    _RESERVED_IDENTIFIER_FIXUP_2996.z = _RESERVED_IDENTIFIER_FIXUP_1221.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1229 = _RESERVED_IDENTIFIER_FIXUP_1175.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1232 = _RESERVED_IDENTIFIER_FIXUP_1229 * _RESERVED_IDENTIFIER_FIXUP_2984.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3002;
    _RESERVED_IDENTIFIER_FIXUP_3002.x = _RESERVED_IDENTIFIER_FIXUP_1232.x;
    _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1232.y;
    _RESERVED_IDENTIFIER_FIXUP_3002.z = _RESERVED_IDENTIFIER_FIXUP_1232.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1246 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1190.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1247 = mix(_RESERVED_IDENTIFIER_FIXUP_3002.xyz, _RESERVED_IDENTIFIER_FIXUP_1229, _RESERVED_IDENTIFIER_FIXUP_1246);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3008 = _RESERVED_IDENTIFIER_FIXUP_1175;
    _RESERVED_IDENTIFIER_FIXUP_3008.x = _RESERVED_IDENTIFIER_FIXUP_1247.x;
    _RESERVED_IDENTIFIER_FIXUP_3008.y = _RESERVED_IDENTIFIER_FIXUP_1247.y;
    _RESERVED_IDENTIFIER_FIXUP_3008.z = _RESERVED_IDENTIFIER_FIXUP_1247.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1255 = _RESERVED_IDENTIFIER_FIXUP_1179.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_1255 * _RESERVED_IDENTIFIER_FIXUP_2984.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3014;
    _RESERVED_IDENTIFIER_FIXUP_3014.x = _RESERVED_IDENTIFIER_FIXUP_1258.x;
    _RESERVED_IDENTIFIER_FIXUP_3014.y = _RESERVED_IDENTIFIER_FIXUP_1258.y;
    _RESERVED_IDENTIFIER_FIXUP_3014.z = _RESERVED_IDENTIFIER_FIXUP_1258.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1272 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1190.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1273 = mix(_RESERVED_IDENTIFIER_FIXUP_3014.xyz, _RESERVED_IDENTIFIER_FIXUP_1255, _RESERVED_IDENTIFIER_FIXUP_1272);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3020 = _RESERVED_IDENTIFIER_FIXUP_1179;
    _RESERVED_IDENTIFIER_FIXUP_3020.x = _RESERVED_IDENTIFIER_FIXUP_1273.x;
    _RESERVED_IDENTIFIER_FIXUP_3020.y = _RESERVED_IDENTIFIER_FIXUP_1273.y;
    _RESERVED_IDENTIFIER_FIXUP_3020.z = _RESERVED_IDENTIFIER_FIXUP_1273.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1281 = _RESERVED_IDENTIFIER_FIXUP_1183.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1284 = _RESERVED_IDENTIFIER_FIXUP_1281 * _RESERVED_IDENTIFIER_FIXUP_2984.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3026 = _RESERVED_IDENTIFIER_FIXUP_1190;
    _RESERVED_IDENTIFIER_FIXUP_3026.x = _RESERVED_IDENTIFIER_FIXUP_1284.x;
    _RESERVED_IDENTIFIER_FIXUP_3026.y = _RESERVED_IDENTIFIER_FIXUP_1284.y;
    _RESERVED_IDENTIFIER_FIXUP_3026.z = _RESERVED_IDENTIFIER_FIXUP_1284.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1299 = mix(_RESERVED_IDENTIFIER_FIXUP_3026.xyz, _RESERVED_IDENTIFIER_FIXUP_1281, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3026.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3032 = _RESERVED_IDENTIFIER_FIXUP_1183;
    _RESERVED_IDENTIFIER_FIXUP_3032.x = _RESERVED_IDENTIFIER_FIXUP_1299.x;
    _RESERVED_IDENTIFIER_FIXUP_3032.y = _RESERVED_IDENTIFIER_FIXUP_1299.y;
    _RESERVED_IDENTIFIER_FIXUP_3032.z = _RESERVED_IDENTIFIER_FIXUP_1299.z;
    float _RESERVED_IDENTIFIER_FIXUP_1309 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1187.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3038 = _RESERVED_IDENTIFIER_FIXUP_1187;
    _RESERVED_IDENTIFIER_FIXUP_3038.w = _RESERVED_IDENTIFIER_FIXUP_1309;
    float _RESERVED_IDENTIFIER_FIXUP_1314 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1309;
    _RESERVED_IDENTIFIER_FIXUP_3038.w = _RESERVED_IDENTIFIER_FIXUP_1314;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1319 = _RESERVED_IDENTIFIER_FIXUP_3038.xxxx * _RESERVED_IDENTIFIER_FIXUP_3008;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1337 = (_RESERVED_IDENTIFIER_FIXUP_3032 * _RESERVED_IDENTIFIER_FIXUP_3038.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3020 * _RESERVED_IDENTIFIER_FIXUP_3038.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2996 * _RESERVED_IDENTIFIER_FIXUP_3038.wwww) + _RESERVED_IDENTIFIER_FIXUP_1319));
    float _RESERVED_IDENTIFIER_FIXUP_1344 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3045 = _RESERVED_IDENTIFIER_FIXUP_1319;
    _RESERVED_IDENTIFIER_FIXUP_3045.x = _RESERVED_IDENTIFIER_FIXUP_1344;
    float _RESERVED_IDENTIFIER_FIXUP_1350 = clamp((_RESERVED_IDENTIFIER_FIXUP_1344 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3045.x = _RESERVED_IDENTIFIER_FIXUP_1350;
    float _RESERVED_IDENTIFIER_FIXUP_1356 = ((-_RESERVED_IDENTIFIER_FIXUP_1350) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3045.y = _RESERVED_IDENTIFIER_FIXUP_1356;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3739;
    if (_RESERVED_IDENTIFIER_FIXUP_1356 != (-_RESERVED_IDENTIFIER_FIXUP_1356))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1368 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1378 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1380 = _RESERVED_IDENTIFIER_FIXUP_1378.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3058 = _RESERVED_IDENTIFIER_FIXUP_3045;
        _RESERVED_IDENTIFIER_FIXUP_3058.y = _RESERVED_IDENTIFIER_FIXUP_1380;
        _RESERVED_IDENTIFIER_FIXUP_3058.z = _RESERVED_IDENTIFIER_FIXUP_1378.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1388 = _RESERVED_IDENTIFIER_FIXUP_3058.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3062;
        _RESERVED_IDENTIFIER_FIXUP_3062.x = _RESERVED_IDENTIFIER_FIXUP_1388.x;
        _RESERVED_IDENTIFIER_FIXUP_3062.y = _RESERVED_IDENTIFIER_FIXUP_1388.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1395 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1399 = _RESERVED_IDENTIFIER_FIXUP_1395.y;
        _RESERVED_IDENTIFIER_FIXUP_3062.w = _RESERVED_IDENTIFIER_FIXUP_1399;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1368.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1368.w;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3062.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1399;
        float _RESERVED_IDENTIFIER_FIXUP_1410 = hdLod5(param_5, param_6).x + hdLod5(param_7, param_8).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3765 = vec4(_RESERVED_IDENTIFIER_FIXUP_1350, _RESERVED_IDENTIFIER_FIXUP_1380, _RESERVED_IDENTIFIER_FIXUP_1378.y, _RESERVED_IDENTIFIER_FIXUP_1410);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_3765.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3075;
        _RESERVED_IDENTIFIER_FIXUP_3075.x = _RESERVED_IDENTIFIER_FIXUP_1417.x;
        _RESERVED_IDENTIFIER_FIXUP_3075.y = _RESERVED_IDENTIFIER_FIXUP_1417.y;
        _RESERVED_IDENTIFIER_FIXUP_3075.w = _RESERVED_IDENTIFIER_FIXUP_1399;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3075.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1399;
        float _RESERVED_IDENTIFIER_FIXUP_1439 = _RESERVED_IDENTIFIER_FIXUP_1410 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3765.w = _RESERVED_IDENTIFIER_FIXUP_1439;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1446 = _RESERVED_IDENTIFIER_FIXUP_3765.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3088;
        _RESERVED_IDENTIFIER_FIXUP_3088.x = _RESERVED_IDENTIFIER_FIXUP_1446.x;
        _RESERVED_IDENTIFIER_FIXUP_3088.y = _RESERVED_IDENTIFIER_FIXUP_1446.y;
        _RESERVED_IDENTIFIER_FIXUP_3088.w = _RESERVED_IDENTIFIER_FIXUP_1399;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3088.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1399;
        float _RESERVED_IDENTIFIER_FIXUP_1468 = _RESERVED_IDENTIFIER_FIXUP_1439 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3765.w = _RESERVED_IDENTIFIER_FIXUP_1468;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1475 = _RESERVED_IDENTIFIER_FIXUP_3765.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3101;
        _RESERVED_IDENTIFIER_FIXUP_3101.x = _RESERVED_IDENTIFIER_FIXUP_1475.x;
        _RESERVED_IDENTIFIER_FIXUP_3101.y = _RESERVED_IDENTIFIER_FIXUP_1475.y;
        _RESERVED_IDENTIFIER_FIXUP_3101.w = _RESERVED_IDENTIFIER_FIXUP_1399;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3101.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1399;
        float _RESERVED_IDENTIFIER_FIXUP_1497 = _RESERVED_IDENTIFIER_FIXUP_1468 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3765.y = _RESERVED_IDENTIFIER_FIXUP_1497;
        float _RESERVED_IDENTIFIER_FIXUP_1502 = (_RESERVED_IDENTIFIER_FIXUP_1497 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3765.y = _RESERVED_IDENTIFIER_FIXUP_1502;
        _RESERVED_IDENTIFIER_FIXUP_3765.x = (_RESERVED_IDENTIFIER_FIXUP_1350 * _RESERVED_IDENTIFIER_FIXUP_1502) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3739 = _RESERVED_IDENTIFIER_FIXUP_3765;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3055 = _RESERVED_IDENTIFIER_FIXUP_3045;
        _RESERVED_IDENTIFIER_FIXUP_3055.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3739 = _RESERVED_IDENTIFIER_FIXUP_3055;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1520 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3123 = _RESERVED_IDENTIFIER_FIXUP_3739;
    _RESERVED_IDENTIFIER_FIXUP_3123.y = _RESERVED_IDENTIFIER_FIXUP_1520;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3744;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3742;
    if (_RESERVED_IDENTIFIER_FIXUP_1520 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1529 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1539 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3263 = _RESERVED_IDENTIFIER_FIXUP_3123;
        _RESERVED_IDENTIFIER_FIXUP_3263.y = _RESERVED_IDENTIFIER_FIXUP_1539.x;
        _RESERVED_IDENTIFIER_FIXUP_3263.z = _RESERVED_IDENTIFIER_FIXUP_1539.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_3263.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3267;
        _RESERVED_IDENTIFIER_FIXUP_3267.x = _RESERVED_IDENTIFIER_FIXUP_1549.x;
        _RESERVED_IDENTIFIER_FIXUP_3267.y = _RESERVED_IDENTIFIER_FIXUP_1549.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1556 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_1556.y;
        _RESERVED_IDENTIFIER_FIXUP_3267.w = _RESERVED_IDENTIFIER_FIXUP_1560;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1529.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1529.w;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3267.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1560;
        float _RESERVED_IDENTIFIER_FIXUP_1571 = hdLod6(param_15, param_16).x + hdLod6(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3263.w = _RESERVED_IDENTIFIER_FIXUP_1571;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_3263.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3280;
        _RESERVED_IDENTIFIER_FIXUP_3280.x = _RESERVED_IDENTIFIER_FIXUP_1578.x;
        _RESERVED_IDENTIFIER_FIXUP_3280.y = _RESERVED_IDENTIFIER_FIXUP_1578.y;
        _RESERVED_IDENTIFIER_FIXUP_3280.w = _RESERVED_IDENTIFIER_FIXUP_1560;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3280.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1560;
        float _RESERVED_IDENTIFIER_FIXUP_1600 = _RESERVED_IDENTIFIER_FIXUP_1571 + hdLod6(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_3263.w = _RESERVED_IDENTIFIER_FIXUP_1600;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1607 = _RESERVED_IDENTIFIER_FIXUP_3263.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3293;
        _RESERVED_IDENTIFIER_FIXUP_3293.x = _RESERVED_IDENTIFIER_FIXUP_1607.x;
        _RESERVED_IDENTIFIER_FIXUP_3293.y = _RESERVED_IDENTIFIER_FIXUP_1607.y;
        _RESERVED_IDENTIFIER_FIXUP_3293.w = _RESERVED_IDENTIFIER_FIXUP_1560;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3293.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1560;
        float _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_1600 + hdLod6(param_21, param_22).x;
        _RESERVED_IDENTIFIER_FIXUP_3263.w = _RESERVED_IDENTIFIER_FIXUP_1629;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1636 = _RESERVED_IDENTIFIER_FIXUP_3263.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3306;
        _RESERVED_IDENTIFIER_FIXUP_3306.x = _RESERVED_IDENTIFIER_FIXUP_1636.x;
        _RESERVED_IDENTIFIER_FIXUP_3306.y = _RESERVED_IDENTIFIER_FIXUP_1636.y;
        _RESERVED_IDENTIFIER_FIXUP_3306.w = _RESERVED_IDENTIFIER_FIXUP_1560;
        vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3306.xy;
        float param_24 = _RESERVED_IDENTIFIER_FIXUP_1560;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1653 = hdLod6(param_23, param_24);
        float _RESERVED_IDENTIFIER_FIXUP_1658 = _RESERVED_IDENTIFIER_FIXUP_1629 + _RESERVED_IDENTIFIER_FIXUP_1653.x;
        _RESERVED_IDENTIFIER_FIXUP_3263.y = _RESERVED_IDENTIFIER_FIXUP_1658;
        _RESERVED_IDENTIFIER_FIXUP_3263.y = _RESERVED_IDENTIFIER_FIXUP_1658 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3744 = _RESERVED_IDENTIFIER_FIXUP_1653;
        _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_3263;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1671 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3128 = _RESERVED_IDENTIFIER_FIXUP_3123;
        _RESERVED_IDENTIFIER_FIXUP_3128.z = _RESERVED_IDENTIFIER_FIXUP_1671;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3745;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3743;
        if (_RESERVED_IDENTIFIER_FIXUP_1671 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1680 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_1680.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1680.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1686 = hdLod7(param_25, param_26);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1690 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3203 = _RESERVED_IDENTIFIER_FIXUP_3128;
            _RESERVED_IDENTIFIER_FIXUP_3203.z = _RESERVED_IDENTIFIER_FIXUP_1690.x;
            _RESERVED_IDENTIFIER_FIXUP_3203.w = _RESERVED_IDENTIFIER_FIXUP_1690.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1700 = _RESERVED_IDENTIFIER_FIXUP_3203.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3207;
            _RESERVED_IDENTIFIER_FIXUP_3207.x = _RESERVED_IDENTIFIER_FIXUP_1700.x;
            _RESERVED_IDENTIFIER_FIXUP_3207.y = _RESERVED_IDENTIFIER_FIXUP_1700.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1707 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1711 = _RESERVED_IDENTIFIER_FIXUP_1707.y;
            _RESERVED_IDENTIFIER_FIXUP_3207.w = _RESERVED_IDENTIFIER_FIXUP_1711;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3207.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1711;
            float _RESERVED_IDENTIFIER_FIXUP_1722 = _RESERVED_IDENTIFIER_FIXUP_1686.x + hdLod7(param_27, param_28).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3218 = _RESERVED_IDENTIFIER_FIXUP_1686;
            _RESERVED_IDENTIFIER_FIXUP_3218.x = _RESERVED_IDENTIFIER_FIXUP_1722;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1729 = _RESERVED_IDENTIFIER_FIXUP_3203.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3220;
            _RESERVED_IDENTIFIER_FIXUP_3220.x = _RESERVED_IDENTIFIER_FIXUP_1729.x;
            _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_1729.y;
            _RESERVED_IDENTIFIER_FIXUP_3220.w = _RESERVED_IDENTIFIER_FIXUP_1711;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3220.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1711;
            float _RESERVED_IDENTIFIER_FIXUP_1751 = _RESERVED_IDENTIFIER_FIXUP_1722 + hdLod7(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_3218.x = _RESERVED_IDENTIFIER_FIXUP_1751;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1758 = _RESERVED_IDENTIFIER_FIXUP_3203.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3233;
            _RESERVED_IDENTIFIER_FIXUP_3233.x = _RESERVED_IDENTIFIER_FIXUP_1758.x;
            _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_1758.y;
            _RESERVED_IDENTIFIER_FIXUP_3233.w = _RESERVED_IDENTIFIER_FIXUP_1711;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3233.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1711;
            float _RESERVED_IDENTIFIER_FIXUP_1780 = _RESERVED_IDENTIFIER_FIXUP_1751 + hdLod7(param_31, param_32).x;
            _RESERVED_IDENTIFIER_FIXUP_3218.x = _RESERVED_IDENTIFIER_FIXUP_1780;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1787 = _RESERVED_IDENTIFIER_FIXUP_3203.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3246;
            _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1787.x;
            _RESERVED_IDENTIFIER_FIXUP_3246.y = _RESERVED_IDENTIFIER_FIXUP_1787.y;
            _RESERVED_IDENTIFIER_FIXUP_3246.w = _RESERVED_IDENTIFIER_FIXUP_1711;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3246.xy;
            float param_34 = _RESERVED_IDENTIFIER_FIXUP_1711;
            float _RESERVED_IDENTIFIER_FIXUP_1809 = _RESERVED_IDENTIFIER_FIXUP_1780 + hdLod7(param_33, param_34).x;
            _RESERVED_IDENTIFIER_FIXUP_3203.z = _RESERVED_IDENTIFIER_FIXUP_1809;
            _RESERVED_IDENTIFIER_FIXUP_3203.y = _RESERVED_IDENTIFIER_FIXUP_1809 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3745 = _RESERVED_IDENTIFIER_FIXUP_3218;
            _RESERVED_IDENTIFIER_FIXUP_3743 = _RESERVED_IDENTIFIER_FIXUP_3203;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3132 = _RESERVED_IDENTIFIER_FIXUP_3128;
            _RESERVED_IDENTIFIER_FIXUP_3132.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3132.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1825 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1829 = _RESERVED_IDENTIFIER_FIXUP_1825.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3766 = vec4(_RESERVED_IDENTIFIER_FIXUP_1825.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1829);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1840 = _RESERVED_IDENTIFIER_FIXUP_3766.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3767 = vec4(_RESERVED_IDENTIFIER_FIXUP_1840 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1314);
            _RESERVED_IDENTIFIER_FIXUP_3767.w = _RESERVED_IDENTIFIER_FIXUP_1829;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_1840;
            float param_36 = _RESERVED_IDENTIFIER_FIXUP_1829;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3767.xy;
            float param_38 = _RESERVED_IDENTIFIER_FIXUP_1829;
            float _RESERVED_IDENTIFIER_FIXUP_1870 = hdLod8(param_35, param_36).x + hdLod8(param_37, param_38).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3159 = _RESERVED_IDENTIFIER_FIXUP_3766;
            _RESERVED_IDENTIFIER_FIXUP_3159.z = _RESERVED_IDENTIFIER_FIXUP_1870;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1877 = _RESERVED_IDENTIFIER_FIXUP_3159.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3161 = _RESERVED_IDENTIFIER_FIXUP_3767;
            _RESERVED_IDENTIFIER_FIXUP_3161.x = _RESERVED_IDENTIFIER_FIXUP_1877.x;
            _RESERVED_IDENTIFIER_FIXUP_3161.y = _RESERVED_IDENTIFIER_FIXUP_1877.y;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3161.xy;
            float param_40 = _RESERVED_IDENTIFIER_FIXUP_1829;
            float _RESERVED_IDENTIFIER_FIXUP_1892 = _RESERVED_IDENTIFIER_FIXUP_1870 + hdLod8(param_39, param_40).x;
            _RESERVED_IDENTIFIER_FIXUP_3159.z = _RESERVED_IDENTIFIER_FIXUP_1892;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1899 = _RESERVED_IDENTIFIER_FIXUP_3159.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3170 = _RESERVED_IDENTIFIER_FIXUP_3161;
            _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_1899.x;
            _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_1899.y;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3170.xy;
            float param_42 = _RESERVED_IDENTIFIER_FIXUP_1829;
            float _RESERVED_IDENTIFIER_FIXUP_1914 = _RESERVED_IDENTIFIER_FIXUP_1892 + hdLod8(param_41, param_42).x;
            _RESERVED_IDENTIFIER_FIXUP_3159.z = _RESERVED_IDENTIFIER_FIXUP_1914;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1921 = _RESERVED_IDENTIFIER_FIXUP_3159.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3179 = _RESERVED_IDENTIFIER_FIXUP_3170;
            _RESERVED_IDENTIFIER_FIXUP_3179.x = _RESERVED_IDENTIFIER_FIXUP_1921.x;
            _RESERVED_IDENTIFIER_FIXUP_3179.y = _RESERVED_IDENTIFIER_FIXUP_1921.y;
            vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3179.xy;
            float param_44 = _RESERVED_IDENTIFIER_FIXUP_1829;
            float _RESERVED_IDENTIFIER_FIXUP_1936 = _RESERVED_IDENTIFIER_FIXUP_1914 + hdLod8(param_43, param_44).x;
            _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1936;
            float _RESERVED_IDENTIFIER_FIXUP_1944 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3159.y = _RESERVED_IDENTIFIER_FIXUP_1944;
            float _RESERVED_IDENTIFIER_FIXUP_1950 = clamp((_RESERVED_IDENTIFIER_FIXUP_1944 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3132.z = _RESERVED_IDENTIFIER_FIXUP_1950;
            float _RESERVED_IDENTIFIER_FIXUP_1955 = (_RESERVED_IDENTIFIER_FIXUP_1936 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3132.w = _RESERVED_IDENTIFIER_FIXUP_1955;
            _RESERVED_IDENTIFIER_FIXUP_3132.y = (_RESERVED_IDENTIFIER_FIXUP_1950 * _RESERVED_IDENTIFIER_FIXUP_1955) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3745 = _RESERVED_IDENTIFIER_FIXUP_3159;
            _RESERVED_IDENTIFIER_FIXUP_3743 = _RESERVED_IDENTIFIER_FIXUP_3132;
        }
        _RESERVED_IDENTIFIER_FIXUP_3744 = _RESERVED_IDENTIFIER_FIXUP_3745;
        _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_3743;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1970 = min(_RESERVED_IDENTIFIER_FIXUP_3742.y, _RESERVED_IDENTIFIER_FIXUP_3742.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3324 = _RESERVED_IDENTIFIER_FIXUP_3744;
    _RESERVED_IDENTIFIER_FIXUP_3324.x = _RESERVED_IDENTIFIER_FIXUP_1970;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3768 = vec4((_RESERVED_IDENTIFIER_FIXUP_1970 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1992 = _RESERVED_IDENTIFIER_FIXUP_3324.xxx * _RESERVED_IDENTIFIER_FIXUP_3768.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3335 = _RESERVED_IDENTIFIER_FIXUP_3768;
    _RESERVED_IDENTIFIER_FIXUP_3335.y = _RESERVED_IDENTIFIER_FIXUP_1992.x;
    _RESERVED_IDENTIFIER_FIXUP_3335.z = _RESERVED_IDENTIFIER_FIXUP_1992.y;
    _RESERVED_IDENTIFIER_FIXUP_3335.w = _RESERVED_IDENTIFIER_FIXUP_1992.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2006 = (_RESERVED_IDENTIFIER_FIXUP_1337.xyz * _RESERVED_IDENTIFIER_FIXUP_3335.xxx) + _RESERVED_IDENTIFIER_FIXUP_3335.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3341 = _RESERVED_IDENTIFIER_FIXUP_1337;
    _RESERVED_IDENTIFIER_FIXUP_3341.x = _RESERVED_IDENTIFIER_FIXUP_2006.x;
    _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2006.y;
    _RESERVED_IDENTIFIER_FIXUP_3341.z = _RESERVED_IDENTIFIER_FIXUP_2006.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2019 = _RESERVED_IDENTIFIER_FIXUP_3341.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3347 = _RESERVED_IDENTIFIER_FIXUP_3341;
    _RESERVED_IDENTIFIER_FIXUP_3347.x = _RESERVED_IDENTIFIER_FIXUP_2019.x;
    _RESERVED_IDENTIFIER_FIXUP_3347.y = _RESERVED_IDENTIFIER_FIXUP_2019.y;
    _RESERVED_IDENTIFIER_FIXUP_3347.z = _RESERVED_IDENTIFIER_FIXUP_2019.z;
    vec2 param_45 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2076 = hdTex0(param_45);
    vec2 param_46 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2080 = hdTex1(param_46);
    vec2 param_47 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2084 = hdTex2(param_47);
    vec2 param_48 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2088 = hdTex3(param_48);
    vec2 param_49 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2092 = hdTex4(param_49);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2100 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3361;
    _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_2100.x;
    _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_2100.y;
    _RESERVED_IDENTIFIER_FIXUP_3361.z = _RESERVED_IDENTIFIER_FIXUP_2100.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2108 = _RESERVED_IDENTIFIER_FIXUP_2076.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2111 = _RESERVED_IDENTIFIER_FIXUP_2108 * _RESERVED_IDENTIFIER_FIXUP_3361.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3367;
    _RESERVED_IDENTIFIER_FIXUP_3367.x = _RESERVED_IDENTIFIER_FIXUP_2111.x;
    _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_2111.y;
    _RESERVED_IDENTIFIER_FIXUP_3367.z = _RESERVED_IDENTIFIER_FIXUP_2111.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2126 = mix(_RESERVED_IDENTIFIER_FIXUP_3367.xyz, _RESERVED_IDENTIFIER_FIXUP_2108, _RESERVED_IDENTIFIER_FIXUP_1220);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3373 = _RESERVED_IDENTIFIER_FIXUP_2076;
    _RESERVED_IDENTIFIER_FIXUP_3373.x = _RESERVED_IDENTIFIER_FIXUP_2126.x;
    _RESERVED_IDENTIFIER_FIXUP_3373.y = _RESERVED_IDENTIFIER_FIXUP_2126.y;
    _RESERVED_IDENTIFIER_FIXUP_3373.z = _RESERVED_IDENTIFIER_FIXUP_2126.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2134 = _RESERVED_IDENTIFIER_FIXUP_2080.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2137 = _RESERVED_IDENTIFIER_FIXUP_2134 * _RESERVED_IDENTIFIER_FIXUP_3361.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3379;
    _RESERVED_IDENTIFIER_FIXUP_3379.x = _RESERVED_IDENTIFIER_FIXUP_2137.x;
    _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_2137.y;
    _RESERVED_IDENTIFIER_FIXUP_3379.z = _RESERVED_IDENTIFIER_FIXUP_2137.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2152 = mix(_RESERVED_IDENTIFIER_FIXUP_3379.xyz, _RESERVED_IDENTIFIER_FIXUP_2134, _RESERVED_IDENTIFIER_FIXUP_1246);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3385 = _RESERVED_IDENTIFIER_FIXUP_2080;
    _RESERVED_IDENTIFIER_FIXUP_3385.x = _RESERVED_IDENTIFIER_FIXUP_2152.x;
    _RESERVED_IDENTIFIER_FIXUP_3385.y = _RESERVED_IDENTIFIER_FIXUP_2152.y;
    _RESERVED_IDENTIFIER_FIXUP_3385.z = _RESERVED_IDENTIFIER_FIXUP_2152.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2160 = _RESERVED_IDENTIFIER_FIXUP_2084.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2163 = _RESERVED_IDENTIFIER_FIXUP_2160 * _RESERVED_IDENTIFIER_FIXUP_3361.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3391;
    _RESERVED_IDENTIFIER_FIXUP_3391.x = _RESERVED_IDENTIFIER_FIXUP_2163.x;
    _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_2163.y;
    _RESERVED_IDENTIFIER_FIXUP_3391.z = _RESERVED_IDENTIFIER_FIXUP_2163.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2178 = mix(_RESERVED_IDENTIFIER_FIXUP_3391.xyz, _RESERVED_IDENTIFIER_FIXUP_2160, _RESERVED_IDENTIFIER_FIXUP_1272);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3397 = _RESERVED_IDENTIFIER_FIXUP_2084;
    _RESERVED_IDENTIFIER_FIXUP_3397.x = _RESERVED_IDENTIFIER_FIXUP_2178.x;
    _RESERVED_IDENTIFIER_FIXUP_3397.y = _RESERVED_IDENTIFIER_FIXUP_2178.y;
    _RESERVED_IDENTIFIER_FIXUP_3397.z = _RESERVED_IDENTIFIER_FIXUP_2178.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2186 = _RESERVED_IDENTIFIER_FIXUP_2088.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2189 = _RESERVED_IDENTIFIER_FIXUP_2186 * _RESERVED_IDENTIFIER_FIXUP_3361.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3403 = _RESERVED_IDENTIFIER_FIXUP_1190;
    _RESERVED_IDENTIFIER_FIXUP_3403.x = _RESERVED_IDENTIFIER_FIXUP_2189.x;
    _RESERVED_IDENTIFIER_FIXUP_3403.y = _RESERVED_IDENTIFIER_FIXUP_2189.y;
    _RESERVED_IDENTIFIER_FIXUP_3403.z = _RESERVED_IDENTIFIER_FIXUP_2189.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2204 = mix(_RESERVED_IDENTIFIER_FIXUP_3403.xyz, _RESERVED_IDENTIFIER_FIXUP_2186, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3403.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3409 = _RESERVED_IDENTIFIER_FIXUP_2088;
    _RESERVED_IDENTIFIER_FIXUP_3409.x = _RESERVED_IDENTIFIER_FIXUP_2204.x;
    _RESERVED_IDENTIFIER_FIXUP_3409.y = _RESERVED_IDENTIFIER_FIXUP_2204.y;
    _RESERVED_IDENTIFIER_FIXUP_3409.z = _RESERVED_IDENTIFIER_FIXUP_2204.z;
    float _RESERVED_IDENTIFIER_FIXUP_2214 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2092.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3415 = _RESERVED_IDENTIFIER_FIXUP_2092;
    _RESERVED_IDENTIFIER_FIXUP_3415.w = _RESERVED_IDENTIFIER_FIXUP_2214;
    float _RESERVED_IDENTIFIER_FIXUP_2219 = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2214;
    _RESERVED_IDENTIFIER_FIXUP_3415.w = _RESERVED_IDENTIFIER_FIXUP_2219;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2224 = _RESERVED_IDENTIFIER_FIXUP_3415.xxxx * _RESERVED_IDENTIFIER_FIXUP_3385;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2242 = (_RESERVED_IDENTIFIER_FIXUP_3409 * _RESERVED_IDENTIFIER_FIXUP_3415.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_3397 * _RESERVED_IDENTIFIER_FIXUP_3415.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3373 * _RESERVED_IDENTIFIER_FIXUP_3415.wwww) + _RESERVED_IDENTIFIER_FIXUP_2224));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3422 = _RESERVED_IDENTIFIER_FIXUP_2224;
    _RESERVED_IDENTIFIER_FIXUP_3422.x = _RESERVED_IDENTIFIER_FIXUP_1344;
    float _RESERVED_IDENTIFIER_FIXUP_2255 = clamp((_RESERVED_IDENTIFIER_FIXUP_1344 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3422.x = _RESERVED_IDENTIFIER_FIXUP_2255;
    float _RESERVED_IDENTIFIER_FIXUP_2261 = ((-_RESERVED_IDENTIFIER_FIXUP_2255) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3422.y = _RESERVED_IDENTIFIER_FIXUP_2261;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3752;
    if (_RESERVED_IDENTIFIER_FIXUP_2261 != (-_RESERVED_IDENTIFIER_FIXUP_2261))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2273 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2283 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_2285 = _RESERVED_IDENTIFIER_FIXUP_2283.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3435 = _RESERVED_IDENTIFIER_FIXUP_3422;
        _RESERVED_IDENTIFIER_FIXUP_3435.y = _RESERVED_IDENTIFIER_FIXUP_2285;
        _RESERVED_IDENTIFIER_FIXUP_3435.z = _RESERVED_IDENTIFIER_FIXUP_2283.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2293 = _RESERVED_IDENTIFIER_FIXUP_3435.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3439;
        _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_2293.x;
        _RESERVED_IDENTIFIER_FIXUP_3439.y = _RESERVED_IDENTIFIER_FIXUP_2293.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2300 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2304 = _RESERVED_IDENTIFIER_FIXUP_2300.y;
        _RESERVED_IDENTIFIER_FIXUP_3439.w = _RESERVED_IDENTIFIER_FIXUP_2304;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2273.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2273.w;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3439.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2304;
        float _RESERVED_IDENTIFIER_FIXUP_2315 = hdLod5(param_50, param_51).x + hdLod5(param_52, param_53).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3770 = vec4(_RESERVED_IDENTIFIER_FIXUP_2255, _RESERVED_IDENTIFIER_FIXUP_2285, _RESERVED_IDENTIFIER_FIXUP_2283.y, _RESERVED_IDENTIFIER_FIXUP_2315);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2322 = _RESERVED_IDENTIFIER_FIXUP_3770.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3452;
        _RESERVED_IDENTIFIER_FIXUP_3452.x = _RESERVED_IDENTIFIER_FIXUP_2322.x;
        _RESERVED_IDENTIFIER_FIXUP_3452.y = _RESERVED_IDENTIFIER_FIXUP_2322.y;
        _RESERVED_IDENTIFIER_FIXUP_3452.w = _RESERVED_IDENTIFIER_FIXUP_2304;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3452.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2304;
        float _RESERVED_IDENTIFIER_FIXUP_2344 = _RESERVED_IDENTIFIER_FIXUP_2315 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3770.w = _RESERVED_IDENTIFIER_FIXUP_2344;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2351 = _RESERVED_IDENTIFIER_FIXUP_3770.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3465;
        _RESERVED_IDENTIFIER_FIXUP_3465.x = _RESERVED_IDENTIFIER_FIXUP_2351.x;
        _RESERVED_IDENTIFIER_FIXUP_3465.y = _RESERVED_IDENTIFIER_FIXUP_2351.y;
        _RESERVED_IDENTIFIER_FIXUP_3465.w = _RESERVED_IDENTIFIER_FIXUP_2304;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3465.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2304;
        float _RESERVED_IDENTIFIER_FIXUP_2373 = _RESERVED_IDENTIFIER_FIXUP_2344 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3770.w = _RESERVED_IDENTIFIER_FIXUP_2373;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2380 = _RESERVED_IDENTIFIER_FIXUP_3770.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3478;
        _RESERVED_IDENTIFIER_FIXUP_3478.x = _RESERVED_IDENTIFIER_FIXUP_2380.x;
        _RESERVED_IDENTIFIER_FIXUP_3478.y = _RESERVED_IDENTIFIER_FIXUP_2380.y;
        _RESERVED_IDENTIFIER_FIXUP_3478.w = _RESERVED_IDENTIFIER_FIXUP_2304;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3478.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2304;
        float _RESERVED_IDENTIFIER_FIXUP_2402 = _RESERVED_IDENTIFIER_FIXUP_2373 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3770.y = _RESERVED_IDENTIFIER_FIXUP_2402;
        float _RESERVED_IDENTIFIER_FIXUP_2407 = (_RESERVED_IDENTIFIER_FIXUP_2402 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3770.y = _RESERVED_IDENTIFIER_FIXUP_2407;
        _RESERVED_IDENTIFIER_FIXUP_3770.x = (_RESERVED_IDENTIFIER_FIXUP_2255 * _RESERVED_IDENTIFIER_FIXUP_2407) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3752 = _RESERVED_IDENTIFIER_FIXUP_3770;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3432 = _RESERVED_IDENTIFIER_FIXUP_3422;
        _RESERVED_IDENTIFIER_FIXUP_3432.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3752 = _RESERVED_IDENTIFIER_FIXUP_3432;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3500 = _RESERVED_IDENTIFIER_FIXUP_3752;
    _RESERVED_IDENTIFIER_FIXUP_3500.y = _RESERVED_IDENTIFIER_FIXUP_1520;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3757;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3755;
    if (_RESERVED_IDENTIFIER_FIXUP_1520 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2434 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2444 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3640 = _RESERVED_IDENTIFIER_FIXUP_3500;
        _RESERVED_IDENTIFIER_FIXUP_3640.y = _RESERVED_IDENTIFIER_FIXUP_2444.x;
        _RESERVED_IDENTIFIER_FIXUP_3640.z = _RESERVED_IDENTIFIER_FIXUP_2444.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2454 = _RESERVED_IDENTIFIER_FIXUP_3640.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3644;
        _RESERVED_IDENTIFIER_FIXUP_3644.x = _RESERVED_IDENTIFIER_FIXUP_2454.x;
        _RESERVED_IDENTIFIER_FIXUP_3644.y = _RESERVED_IDENTIFIER_FIXUP_2454.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2461 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2465 = _RESERVED_IDENTIFIER_FIXUP_2461.y;
        _RESERVED_IDENTIFIER_FIXUP_3644.w = _RESERVED_IDENTIFIER_FIXUP_2465;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_2434.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2434.w;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3644.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2465;
        float _RESERVED_IDENTIFIER_FIXUP_2476 = hdLod6(param_60, param_61).x + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3640.w = _RESERVED_IDENTIFIER_FIXUP_2476;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2483 = _RESERVED_IDENTIFIER_FIXUP_3640.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3657;
        _RESERVED_IDENTIFIER_FIXUP_3657.x = _RESERVED_IDENTIFIER_FIXUP_2483.x;
        _RESERVED_IDENTIFIER_FIXUP_3657.y = _RESERVED_IDENTIFIER_FIXUP_2483.y;
        _RESERVED_IDENTIFIER_FIXUP_3657.w = _RESERVED_IDENTIFIER_FIXUP_2465;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3657.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2465;
        float _RESERVED_IDENTIFIER_FIXUP_2505 = _RESERVED_IDENTIFIER_FIXUP_2476 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3640.w = _RESERVED_IDENTIFIER_FIXUP_2505;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2512 = _RESERVED_IDENTIFIER_FIXUP_3640.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3670;
        _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_2512.x;
        _RESERVED_IDENTIFIER_FIXUP_3670.y = _RESERVED_IDENTIFIER_FIXUP_2512.y;
        _RESERVED_IDENTIFIER_FIXUP_3670.w = _RESERVED_IDENTIFIER_FIXUP_2465;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3670.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2465;
        float _RESERVED_IDENTIFIER_FIXUP_2534 = _RESERVED_IDENTIFIER_FIXUP_2505 + hdLod6(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3640.w = _RESERVED_IDENTIFIER_FIXUP_2534;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2541 = _RESERVED_IDENTIFIER_FIXUP_3640.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3683;
        _RESERVED_IDENTIFIER_FIXUP_3683.x = _RESERVED_IDENTIFIER_FIXUP_2541.x;
        _RESERVED_IDENTIFIER_FIXUP_3683.y = _RESERVED_IDENTIFIER_FIXUP_2541.y;
        _RESERVED_IDENTIFIER_FIXUP_3683.w = _RESERVED_IDENTIFIER_FIXUP_2465;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3683.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2465;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2558 = hdLod6(param_68, param_69);
        float _RESERVED_IDENTIFIER_FIXUP_2563 = _RESERVED_IDENTIFIER_FIXUP_2534 + _RESERVED_IDENTIFIER_FIXUP_2558.x;
        _RESERVED_IDENTIFIER_FIXUP_3640.y = _RESERVED_IDENTIFIER_FIXUP_2563;
        _RESERVED_IDENTIFIER_FIXUP_3640.y = _RESERVED_IDENTIFIER_FIXUP_2563 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3757 = _RESERVED_IDENTIFIER_FIXUP_2558;
        _RESERVED_IDENTIFIER_FIXUP_3755 = _RESERVED_IDENTIFIER_FIXUP_3640;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2576 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3505 = _RESERVED_IDENTIFIER_FIXUP_3500;
        _RESERVED_IDENTIFIER_FIXUP_3505.z = _RESERVED_IDENTIFIER_FIXUP_2576;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3758;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3756;
        if (_RESERVED_IDENTIFIER_FIXUP_2576 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2585 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2585.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2585.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2591 = hdLod7(param_70, param_71);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2595 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3580 = _RESERVED_IDENTIFIER_FIXUP_3505;
            _RESERVED_IDENTIFIER_FIXUP_3580.z = _RESERVED_IDENTIFIER_FIXUP_2595.x;
            _RESERVED_IDENTIFIER_FIXUP_3580.w = _RESERVED_IDENTIFIER_FIXUP_2595.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2605 = _RESERVED_IDENTIFIER_FIXUP_3580.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3584;
            _RESERVED_IDENTIFIER_FIXUP_3584.x = _RESERVED_IDENTIFIER_FIXUP_2605.x;
            _RESERVED_IDENTIFIER_FIXUP_3584.y = _RESERVED_IDENTIFIER_FIXUP_2605.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2612 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2616 = _RESERVED_IDENTIFIER_FIXUP_2612.y;
            _RESERVED_IDENTIFIER_FIXUP_3584.w = _RESERVED_IDENTIFIER_FIXUP_2616;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3584.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2616;
            float _RESERVED_IDENTIFIER_FIXUP_2627 = _RESERVED_IDENTIFIER_FIXUP_2591.x + hdLod7(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3595 = _RESERVED_IDENTIFIER_FIXUP_2591;
            _RESERVED_IDENTIFIER_FIXUP_3595.x = _RESERVED_IDENTIFIER_FIXUP_2627;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2634 = _RESERVED_IDENTIFIER_FIXUP_3580.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3597;
            _RESERVED_IDENTIFIER_FIXUP_3597.x = _RESERVED_IDENTIFIER_FIXUP_2634.x;
            _RESERVED_IDENTIFIER_FIXUP_3597.y = _RESERVED_IDENTIFIER_FIXUP_2634.y;
            _RESERVED_IDENTIFIER_FIXUP_3597.w = _RESERVED_IDENTIFIER_FIXUP_2616;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3597.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2616;
            float _RESERVED_IDENTIFIER_FIXUP_2656 = _RESERVED_IDENTIFIER_FIXUP_2627 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3595.x = _RESERVED_IDENTIFIER_FIXUP_2656;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2663 = _RESERVED_IDENTIFIER_FIXUP_3580.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3610;
            _RESERVED_IDENTIFIER_FIXUP_3610.x = _RESERVED_IDENTIFIER_FIXUP_2663.x;
            _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2663.y;
            _RESERVED_IDENTIFIER_FIXUP_3610.w = _RESERVED_IDENTIFIER_FIXUP_2616;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3610.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2616;
            float _RESERVED_IDENTIFIER_FIXUP_2685 = _RESERVED_IDENTIFIER_FIXUP_2656 + hdLod7(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3595.x = _RESERVED_IDENTIFIER_FIXUP_2685;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2692 = _RESERVED_IDENTIFIER_FIXUP_3580.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3623;
            _RESERVED_IDENTIFIER_FIXUP_3623.x = _RESERVED_IDENTIFIER_FIXUP_2692.x;
            _RESERVED_IDENTIFIER_FIXUP_3623.y = _RESERVED_IDENTIFIER_FIXUP_2692.y;
            _RESERVED_IDENTIFIER_FIXUP_3623.w = _RESERVED_IDENTIFIER_FIXUP_2616;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3623.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2616;
            float _RESERVED_IDENTIFIER_FIXUP_2714 = _RESERVED_IDENTIFIER_FIXUP_2685 + hdLod7(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3580.z = _RESERVED_IDENTIFIER_FIXUP_2714;
            _RESERVED_IDENTIFIER_FIXUP_3580.y = _RESERVED_IDENTIFIER_FIXUP_2714 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3758 = _RESERVED_IDENTIFIER_FIXUP_3595;
            _RESERVED_IDENTIFIER_FIXUP_3756 = _RESERVED_IDENTIFIER_FIXUP_3580;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3509 = _RESERVED_IDENTIFIER_FIXUP_3505;
            _RESERVED_IDENTIFIER_FIXUP_3509.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3509.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2730 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2734 = _RESERVED_IDENTIFIER_FIXUP_2730.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3771 = vec4(_RESERVED_IDENTIFIER_FIXUP_2730.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2734);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2745 = _RESERVED_IDENTIFIER_FIXUP_3771.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3772 = vec4(_RESERVED_IDENTIFIER_FIXUP_2745 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2219);
            _RESERVED_IDENTIFIER_FIXUP_3772.w = _RESERVED_IDENTIFIER_FIXUP_2734;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2745;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2734;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3772.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2734;
            float _RESERVED_IDENTIFIER_FIXUP_2775 = hdLod8(param_80, param_81).x + hdLod8(param_82, param_83).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3536 = _RESERVED_IDENTIFIER_FIXUP_3771;
            _RESERVED_IDENTIFIER_FIXUP_3536.z = _RESERVED_IDENTIFIER_FIXUP_2775;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2782 = _RESERVED_IDENTIFIER_FIXUP_3536.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3538 = _RESERVED_IDENTIFIER_FIXUP_3772;
            _RESERVED_IDENTIFIER_FIXUP_3538.x = _RESERVED_IDENTIFIER_FIXUP_2782.x;
            _RESERVED_IDENTIFIER_FIXUP_3538.y = _RESERVED_IDENTIFIER_FIXUP_2782.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3538.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2734;
            float _RESERVED_IDENTIFIER_FIXUP_2797 = _RESERVED_IDENTIFIER_FIXUP_2775 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3536.z = _RESERVED_IDENTIFIER_FIXUP_2797;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2804 = _RESERVED_IDENTIFIER_FIXUP_3536.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3547 = _RESERVED_IDENTIFIER_FIXUP_3538;
            _RESERVED_IDENTIFIER_FIXUP_3547.x = _RESERVED_IDENTIFIER_FIXUP_2804.x;
            _RESERVED_IDENTIFIER_FIXUP_3547.y = _RESERVED_IDENTIFIER_FIXUP_2804.y;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3547.xy;
            float param_87 = _RESERVED_IDENTIFIER_FIXUP_2734;
            float _RESERVED_IDENTIFIER_FIXUP_2819 = _RESERVED_IDENTIFIER_FIXUP_2797 + hdLod8(param_86, param_87).x;
            _RESERVED_IDENTIFIER_FIXUP_3536.z = _RESERVED_IDENTIFIER_FIXUP_2819;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2826 = _RESERVED_IDENTIFIER_FIXUP_3536.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3556 = _RESERVED_IDENTIFIER_FIXUP_3547;
            _RESERVED_IDENTIFIER_FIXUP_3556.x = _RESERVED_IDENTIFIER_FIXUP_2826.x;
            _RESERVED_IDENTIFIER_FIXUP_3556.y = _RESERVED_IDENTIFIER_FIXUP_2826.y;
            vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3556.xy;
            float param_89 = _RESERVED_IDENTIFIER_FIXUP_2734;
            float _RESERVED_IDENTIFIER_FIXUP_2841 = _RESERVED_IDENTIFIER_FIXUP_2819 + hdLod8(param_88, param_89).x;
            _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2841;
            float _RESERVED_IDENTIFIER_FIXUP_2849 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3536.y = _RESERVED_IDENTIFIER_FIXUP_2849;
            float _RESERVED_IDENTIFIER_FIXUP_2855 = clamp((_RESERVED_IDENTIFIER_FIXUP_2849 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3509.z = _RESERVED_IDENTIFIER_FIXUP_2855;
            float _RESERVED_IDENTIFIER_FIXUP_2860 = (_RESERVED_IDENTIFIER_FIXUP_2841 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3509.w = _RESERVED_IDENTIFIER_FIXUP_2860;
            _RESERVED_IDENTIFIER_FIXUP_3509.y = (_RESERVED_IDENTIFIER_FIXUP_2855 * _RESERVED_IDENTIFIER_FIXUP_2860) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3758 = _RESERVED_IDENTIFIER_FIXUP_3536;
            _RESERVED_IDENTIFIER_FIXUP_3756 = _RESERVED_IDENTIFIER_FIXUP_3509;
        }
        _RESERVED_IDENTIFIER_FIXUP_3757 = _RESERVED_IDENTIFIER_FIXUP_3758;
        _RESERVED_IDENTIFIER_FIXUP_3755 = _RESERVED_IDENTIFIER_FIXUP_3756;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2875 = min(_RESERVED_IDENTIFIER_FIXUP_3755.y, _RESERVED_IDENTIFIER_FIXUP_3755.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3701 = _RESERVED_IDENTIFIER_FIXUP_3757;
    _RESERVED_IDENTIFIER_FIXUP_3701.x = _RESERVED_IDENTIFIER_FIXUP_2875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3773 = vec4((_RESERVED_IDENTIFIER_FIXUP_2875 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2242.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2897 = _RESERVED_IDENTIFIER_FIXUP_3701.xxx * _RESERVED_IDENTIFIER_FIXUP_3773.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3712 = _RESERVED_IDENTIFIER_FIXUP_3773;
    _RESERVED_IDENTIFIER_FIXUP_3712.y = _RESERVED_IDENTIFIER_FIXUP_2897.x;
    _RESERVED_IDENTIFIER_FIXUP_3712.z = _RESERVED_IDENTIFIER_FIXUP_2897.y;
    _RESERVED_IDENTIFIER_FIXUP_3712.w = _RESERVED_IDENTIFIER_FIXUP_2897.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2911 = (_RESERVED_IDENTIFIER_FIXUP_2242.xyz * _RESERVED_IDENTIFIER_FIXUP_3712.xxx) + _RESERVED_IDENTIFIER_FIXUP_3712.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3718 = _RESERVED_IDENTIFIER_FIXUP_2242;
    _RESERVED_IDENTIFIER_FIXUP_3718.x = _RESERVED_IDENTIFIER_FIXUP_2911.x;
    _RESERVED_IDENTIFIER_FIXUP_3718.y = _RESERVED_IDENTIFIER_FIXUP_2911.y;
    _RESERVED_IDENTIFIER_FIXUP_3718.z = _RESERVED_IDENTIFIER_FIXUP_2911.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2924 = _RESERVED_IDENTIFIER_FIXUP_3718.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3724 = _RESERVED_IDENTIFIER_FIXUP_3718;
    _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_2924.x;
    _RESERVED_IDENTIFIER_FIXUP_3724.y = _RESERVED_IDENTIFIER_FIXUP_2924.y;
    _RESERVED_IDENTIFIER_FIXUP_3724.z = _RESERVED_IDENTIFIER_FIXUP_2924.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3724.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1029 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1038;
    if (_RESERVED_IDENTIFIER_FIXUP_1029)
    {
        _RESERVED_IDENTIFIER_FIXUP_1038 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1038 = _RESERVED_IDENTIFIER_FIXUP_1029;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1038)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1075 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3347.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1101 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2977;
    if (_RESERVED_IDENTIFIER_FIXUP_1075 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2977 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1075), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1101);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2977 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1101);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2977;
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
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        vec2 hdB301 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB301.x;
        r1.z = hdB301.y;
        vec2 hdB312 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB312.x;
        r3.y = hdB312.y;
        vec2 hdB320 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB320.x;
        r3.w = hdB320.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r1.w = r2.x + r3.x;
        vec2 hdB343 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB343.x;
        r2.y = hdB343.y;
        vec2 hdB350 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB350.x;
        r2.w = hdB350.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.w += r2.x;
        vec2 hdB373 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB373.x;
        r2.y = hdB373.y;
        vec2 hdB380 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB380.x;
        r2.w = hdB380.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r1.w += r2.x;
        vec2 hdB403 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB403.x;
        r2.y = hdB403.y;
        vec2 hdB410 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB410.x;
        r2.w = hdB410.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
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
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod6(param_15, param_16);
        vec2 hdB470 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB470.x;
        r1.z = hdB470.y;
        vec2 hdB480 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB480.x;
        r3.y = hdB480.y;
        vec2 hdB487 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB487.x;
        r3.w = hdB487.y;
        vec2 param_17 = r3.xy;
        float param_18 = r3.w;
        r3 = hdLod6(param_17, param_18);
        r1.w = r2.x + r3.x;
        vec2 hdB509 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB509.x;
        r2.y = hdB509.y;
        vec2 hdB516 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB516.x;
        r2.w = hdB516.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod6(param_19, param_20);
        r1.w += r2.x;
        vec2 hdB538 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB538.x;
        r2.y = hdB538.y;
        vec2 hdB545 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB545.x;
        r2.w = hdB545.y;
        vec2 param_21 = r2.xy;
        float param_22 = r2.w;
        r2 = hdLod6(param_21, param_22);
        r1.w += r2.x;
        vec2 hdB567 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB567.x;
        r2.y = hdB567.y;
        vec2 hdB574 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB574.x;
        r2.w = hdB574.y;
        vec2 param_23 = r2.xy;
        float param_24 = r2.w;
        r2 = hdLod6(param_23, param_24);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod7(param_25, param_26);
            vec2 hdB623 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB623.x;
            r1.w = hdB623.y;
            vec2 hdB633 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB633.x;
            r3.y = hdB633.y;
            vec2 hdB640 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB640.x;
            r3.w = hdB640.y;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod7(param_27, param_28);
            r2.x += r3.x;
            vec2 hdB662 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB662.x;
            r3.y = hdB662.y;
            vec2 hdB669 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB669.x;
            r3.w = hdB669.y;
            vec2 param_29 = r3.xy;
            float param_30 = r3.w;
            r3 = hdLod7(param_29, param_30);
            r2.x += r3.x;
            vec2 hdB691 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB691.x;
            r3.y = hdB691.y;
            vec2 hdB698 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB698.x;
            r3.w = hdB698.y;
            vec2 param_31 = r3.xy;
            float param_32 = r3.w;
            r3 = hdLod7(param_31, param_32);
            r2.x += r3.x;
            vec2 hdB720 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB720.x;
            r3.y = hdB720.y;
            vec2 hdB727 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB727.x;
            r3.w = hdB727.y;
            vec2 param_33 = r3.xy;
            float param_34 = r3.w;
            r3 = hdLod7(param_33, param_34);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 hdB759 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB759.x;
            r2.w = hdB759.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_35 = r2.xy;
            float param_36 = r2.w;
            r3 = hdLod8(param_35, param_36);
            vec2 hdB784 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB784.x;
            r4.y = hdB784.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_37 = r4.xy;
            float param_38 = r4.w;
            r5 = hdLod8(param_37, param_38);
            r2.z = r3.x + r5.x;
            vec2 hdB812 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB812.x;
            r4.y = hdB812.y;
            vec2 param_39 = r4.xy;
            float param_40 = r4.w;
            r3 = hdLod8(param_39, param_40);
            r2.z += r3.x;
            vec2 hdB834 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB834.x;
            r4.y = hdB834.y;
            vec2 param_41 = r4.xy;
            float param_42 = r4.w;
            r3 = hdLod8(param_41, param_42);
            r2.z += r3.x;
            vec2 hdB856 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB856.x;
            r4.y = hdB856.y;
            vec2 param_43 = r4.xy;
            float param_44 = r4.w;
            r3 = hdLod8(param_43, param_44);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB918 = r0.www * v1.xyz;
    r1.y = hdB918.x;
    r1.z = hdB918.y;
    r1.w = hdB918.z;
    vec4 hdB927 = r1;
    vec3 hdB929 = r2.xxx * hdB927.yzw;
    r1.y = hdB929.x;
    r1.z = hdB929.y;
    r1.w = hdB929.z;
    vec4 hdB936 = r0;
    vec3 hdB943 = (hdB936.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB943.x;
    r0.y = hdB943.y;
    r0.z = hdB943.z;
    vec4 hdB950 = r0;
    vec3 hdB957 = hdB950.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB957.x;
    r0.y = hdB957.y;
    r0.z = hdB957.z;
    vec3 hdB972 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB972.x;
    oC0.y = hdB972.y;
    oC0.z = hdB972.z;
    oC0.w = 1.0;
    bool hdB984 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB992;
    if (hdB984)
    {
        hdB992 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB992 = hdB984;
    }
    if (hdB992)
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
    bool _3660 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3670;
    if (_3660)
    {
        _3670 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3670 = _3660;
    }
    if (_3670)
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
        bool _3695 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3710;
        if (!_3695)
        {
            _3710 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3710 = _3695;
        }
        if (_3710)
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
