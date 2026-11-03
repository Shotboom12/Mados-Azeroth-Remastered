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
float _RESERVED_IDENTIFIER_FIXUP_3676;
vec4 _RESERVED_IDENTIFIER_FIXUP_3677;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1153 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1157 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1161 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1165 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1169 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1172 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1174 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3676).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_1174 + _RESERVED_IDENTIFIER_FIXUP_1174;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2933;
    _RESERVED_IDENTIFIER_FIXUP_2933.x = _RESERVED_IDENTIFIER_FIXUP_1177.x;
    _RESERVED_IDENTIFIER_FIXUP_2933.y = _RESERVED_IDENTIFIER_FIXUP_1177.y;
    _RESERVED_IDENTIFIER_FIXUP_2933.z = _RESERVED_IDENTIFIER_FIXUP_1177.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1185 = _RESERVED_IDENTIFIER_FIXUP_1153.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1188 = _RESERVED_IDENTIFIER_FIXUP_1185 * _RESERVED_IDENTIFIER_FIXUP_2933.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2939;
    _RESERVED_IDENTIFIER_FIXUP_2939.x = _RESERVED_IDENTIFIER_FIXUP_1188.x;
    _RESERVED_IDENTIFIER_FIXUP_2939.y = _RESERVED_IDENTIFIER_FIXUP_1188.y;
    _RESERVED_IDENTIFIER_FIXUP_2939.z = _RESERVED_IDENTIFIER_FIXUP_1188.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1202 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1172.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1203 = mix(_RESERVED_IDENTIFIER_FIXUP_2939.xyz, _RESERVED_IDENTIFIER_FIXUP_1185, _RESERVED_IDENTIFIER_FIXUP_1202);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2945 = _RESERVED_IDENTIFIER_FIXUP_1153;
    _RESERVED_IDENTIFIER_FIXUP_2945.x = _RESERVED_IDENTIFIER_FIXUP_1203.x;
    _RESERVED_IDENTIFIER_FIXUP_2945.y = _RESERVED_IDENTIFIER_FIXUP_1203.y;
    _RESERVED_IDENTIFIER_FIXUP_2945.z = _RESERVED_IDENTIFIER_FIXUP_1203.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1211 = _RESERVED_IDENTIFIER_FIXUP_1157.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1214 = _RESERVED_IDENTIFIER_FIXUP_1211 * _RESERVED_IDENTIFIER_FIXUP_2933.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2951;
    _RESERVED_IDENTIFIER_FIXUP_2951.x = _RESERVED_IDENTIFIER_FIXUP_1214.x;
    _RESERVED_IDENTIFIER_FIXUP_2951.y = _RESERVED_IDENTIFIER_FIXUP_1214.y;
    _RESERVED_IDENTIFIER_FIXUP_2951.z = _RESERVED_IDENTIFIER_FIXUP_1214.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1228 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1172.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1229 = mix(_RESERVED_IDENTIFIER_FIXUP_2951.xyz, _RESERVED_IDENTIFIER_FIXUP_1211, _RESERVED_IDENTIFIER_FIXUP_1228);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2957 = _RESERVED_IDENTIFIER_FIXUP_1157;
    _RESERVED_IDENTIFIER_FIXUP_2957.x = _RESERVED_IDENTIFIER_FIXUP_1229.x;
    _RESERVED_IDENTIFIER_FIXUP_2957.y = _RESERVED_IDENTIFIER_FIXUP_1229.y;
    _RESERVED_IDENTIFIER_FIXUP_2957.z = _RESERVED_IDENTIFIER_FIXUP_1229.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1237 = _RESERVED_IDENTIFIER_FIXUP_1161.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1240 = _RESERVED_IDENTIFIER_FIXUP_1237 * _RESERVED_IDENTIFIER_FIXUP_2933.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2963;
    _RESERVED_IDENTIFIER_FIXUP_2963.x = _RESERVED_IDENTIFIER_FIXUP_1240.x;
    _RESERVED_IDENTIFIER_FIXUP_2963.y = _RESERVED_IDENTIFIER_FIXUP_1240.y;
    _RESERVED_IDENTIFIER_FIXUP_2963.z = _RESERVED_IDENTIFIER_FIXUP_1240.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1254 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1172.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1255 = mix(_RESERVED_IDENTIFIER_FIXUP_2963.xyz, _RESERVED_IDENTIFIER_FIXUP_1237, _RESERVED_IDENTIFIER_FIXUP_1254);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2969 = _RESERVED_IDENTIFIER_FIXUP_1161;
    _RESERVED_IDENTIFIER_FIXUP_2969.x = _RESERVED_IDENTIFIER_FIXUP_1255.x;
    _RESERVED_IDENTIFIER_FIXUP_2969.y = _RESERVED_IDENTIFIER_FIXUP_1255.y;
    _RESERVED_IDENTIFIER_FIXUP_2969.z = _RESERVED_IDENTIFIER_FIXUP_1255.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1263 = _RESERVED_IDENTIFIER_FIXUP_1165.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1266 = _RESERVED_IDENTIFIER_FIXUP_1263 * _RESERVED_IDENTIFIER_FIXUP_2933.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2975 = _RESERVED_IDENTIFIER_FIXUP_1172;
    _RESERVED_IDENTIFIER_FIXUP_2975.x = _RESERVED_IDENTIFIER_FIXUP_1266.x;
    _RESERVED_IDENTIFIER_FIXUP_2975.y = _RESERVED_IDENTIFIER_FIXUP_1266.y;
    _RESERVED_IDENTIFIER_FIXUP_2975.z = _RESERVED_IDENTIFIER_FIXUP_1266.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1281 = mix(_RESERVED_IDENTIFIER_FIXUP_2975.xyz, _RESERVED_IDENTIFIER_FIXUP_1263, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2975.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2981 = _RESERVED_IDENTIFIER_FIXUP_1165;
    _RESERVED_IDENTIFIER_FIXUP_2981.x = _RESERVED_IDENTIFIER_FIXUP_1281.x;
    _RESERVED_IDENTIFIER_FIXUP_2981.y = _RESERVED_IDENTIFIER_FIXUP_1281.y;
    _RESERVED_IDENTIFIER_FIXUP_2981.z = _RESERVED_IDENTIFIER_FIXUP_1281.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1297 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2945, _RESERVED_IDENTIFIER_FIXUP_2957, _RESERVED_IDENTIFIER_FIXUP_1169.xxxx), _RESERVED_IDENTIFIER_FIXUP_2969, _RESERVED_IDENTIFIER_FIXUP_1169.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1309 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2989 = _RESERVED_IDENTIFIER_FIXUP_1297;
    _RESERVED_IDENTIFIER_FIXUP_2989.x = _RESERVED_IDENTIFIER_FIXUP_1309;
    float _RESERVED_IDENTIFIER_FIXUP_1315 = clamp((_RESERVED_IDENTIFIER_FIXUP_1309 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2989.x = _RESERVED_IDENTIFIER_FIXUP_1315;
    float _RESERVED_IDENTIFIER_FIXUP_1321 = ((-_RESERVED_IDENTIFIER_FIXUP_1315) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2989.y = _RESERVED_IDENTIFIER_FIXUP_1321;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3678;
    if (_RESERVED_IDENTIFIER_FIXUP_1321 != (-_RESERVED_IDENTIFIER_FIXUP_1321))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1333 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1343 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1345 = _RESERVED_IDENTIFIER_FIXUP_1343.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3002 = _RESERVED_IDENTIFIER_FIXUP_2989;
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1345;
        _RESERVED_IDENTIFIER_FIXUP_3002.z = _RESERVED_IDENTIFIER_FIXUP_1343.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1353 = _RESERVED_IDENTIFIER_FIXUP_3002.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3006;
        _RESERVED_IDENTIFIER_FIXUP_3006.x = _RESERVED_IDENTIFIER_FIXUP_1353.x;
        _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1353.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1360 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1364 = _RESERVED_IDENTIFIER_FIXUP_1360.y;
        _RESERVED_IDENTIFIER_FIXUP_3006.w = _RESERVED_IDENTIFIER_FIXUP_1364;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1333.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1333.w;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3006.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1364;
        float _RESERVED_IDENTIFIER_FIXUP_1375 = hdLod5(param_5, param_6).x + hdLod5(param_7, param_8).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3698 = vec4(_RESERVED_IDENTIFIER_FIXUP_1315, _RESERVED_IDENTIFIER_FIXUP_1345, _RESERVED_IDENTIFIER_FIXUP_1343.y, _RESERVED_IDENTIFIER_FIXUP_1375);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1382 = _RESERVED_IDENTIFIER_FIXUP_3698.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3019;
        _RESERVED_IDENTIFIER_FIXUP_3019.x = _RESERVED_IDENTIFIER_FIXUP_1382.x;
        _RESERVED_IDENTIFIER_FIXUP_3019.y = _RESERVED_IDENTIFIER_FIXUP_1382.y;
        _RESERVED_IDENTIFIER_FIXUP_3019.w = _RESERVED_IDENTIFIER_FIXUP_1364;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3019.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1364;
        float _RESERVED_IDENTIFIER_FIXUP_1404 = _RESERVED_IDENTIFIER_FIXUP_1375 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3698.w = _RESERVED_IDENTIFIER_FIXUP_1404;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1411 = _RESERVED_IDENTIFIER_FIXUP_3698.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3032;
        _RESERVED_IDENTIFIER_FIXUP_3032.x = _RESERVED_IDENTIFIER_FIXUP_1411.x;
        _RESERVED_IDENTIFIER_FIXUP_3032.y = _RESERVED_IDENTIFIER_FIXUP_1411.y;
        _RESERVED_IDENTIFIER_FIXUP_3032.w = _RESERVED_IDENTIFIER_FIXUP_1364;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3032.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1364;
        float _RESERVED_IDENTIFIER_FIXUP_1433 = _RESERVED_IDENTIFIER_FIXUP_1404 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3698.w = _RESERVED_IDENTIFIER_FIXUP_1433;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1440 = _RESERVED_IDENTIFIER_FIXUP_3698.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3045;
        _RESERVED_IDENTIFIER_FIXUP_3045.x = _RESERVED_IDENTIFIER_FIXUP_1440.x;
        _RESERVED_IDENTIFIER_FIXUP_3045.y = _RESERVED_IDENTIFIER_FIXUP_1440.y;
        _RESERVED_IDENTIFIER_FIXUP_3045.w = _RESERVED_IDENTIFIER_FIXUP_1364;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3045.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1364;
        float _RESERVED_IDENTIFIER_FIXUP_1462 = _RESERVED_IDENTIFIER_FIXUP_1433 + hdLod5(param_13, param_14).x;
        _RESERVED_IDENTIFIER_FIXUP_3698.y = _RESERVED_IDENTIFIER_FIXUP_1462;
        float _RESERVED_IDENTIFIER_FIXUP_1467 = (_RESERVED_IDENTIFIER_FIXUP_1462 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3698.y = _RESERVED_IDENTIFIER_FIXUP_1467;
        _RESERVED_IDENTIFIER_FIXUP_3698.x = (_RESERVED_IDENTIFIER_FIXUP_1315 * _RESERVED_IDENTIFIER_FIXUP_1467) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3678 = _RESERVED_IDENTIFIER_FIXUP_3698;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2999 = _RESERVED_IDENTIFIER_FIXUP_2989;
        _RESERVED_IDENTIFIER_FIXUP_2999.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3678 = _RESERVED_IDENTIFIER_FIXUP_2999;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1485 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3067 = _RESERVED_IDENTIFIER_FIXUP_3678;
    _RESERVED_IDENTIFIER_FIXUP_3067.y = _RESERVED_IDENTIFIER_FIXUP_1485;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3683;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3681;
    if (_RESERVED_IDENTIFIER_FIXUP_1485 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1494 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1504 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3207 = _RESERVED_IDENTIFIER_FIXUP_3067;
        _RESERVED_IDENTIFIER_FIXUP_3207.y = _RESERVED_IDENTIFIER_FIXUP_1504.x;
        _RESERVED_IDENTIFIER_FIXUP_3207.z = _RESERVED_IDENTIFIER_FIXUP_1504.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_3207.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3211;
        _RESERVED_IDENTIFIER_FIXUP_3211.x = _RESERVED_IDENTIFIER_FIXUP_1514.x;
        _RESERVED_IDENTIFIER_FIXUP_3211.y = _RESERVED_IDENTIFIER_FIXUP_1514.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1521 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1525 = _RESERVED_IDENTIFIER_FIXUP_1521.y;
        _RESERVED_IDENTIFIER_FIXUP_3211.w = _RESERVED_IDENTIFIER_FIXUP_1525;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1494.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1494.w;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3211.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1525;
        float _RESERVED_IDENTIFIER_FIXUP_1536 = hdLod6(param_15, param_16).x + hdLod6(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3207.w = _RESERVED_IDENTIFIER_FIXUP_1536;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_3207.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3224;
        _RESERVED_IDENTIFIER_FIXUP_3224.x = _RESERVED_IDENTIFIER_FIXUP_1543.x;
        _RESERVED_IDENTIFIER_FIXUP_3224.y = _RESERVED_IDENTIFIER_FIXUP_1543.y;
        _RESERVED_IDENTIFIER_FIXUP_3224.w = _RESERVED_IDENTIFIER_FIXUP_1525;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3224.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1525;
        float _RESERVED_IDENTIFIER_FIXUP_1565 = _RESERVED_IDENTIFIER_FIXUP_1536 + hdLod6(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_3207.w = _RESERVED_IDENTIFIER_FIXUP_1565;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1572 = _RESERVED_IDENTIFIER_FIXUP_3207.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3237;
        _RESERVED_IDENTIFIER_FIXUP_3237.x = _RESERVED_IDENTIFIER_FIXUP_1572.x;
        _RESERVED_IDENTIFIER_FIXUP_3237.y = _RESERVED_IDENTIFIER_FIXUP_1572.y;
        _RESERVED_IDENTIFIER_FIXUP_3237.w = _RESERVED_IDENTIFIER_FIXUP_1525;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3237.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1525;
        float _RESERVED_IDENTIFIER_FIXUP_1594 = _RESERVED_IDENTIFIER_FIXUP_1565 + hdLod6(param_21, param_22).x;
        _RESERVED_IDENTIFIER_FIXUP_3207.w = _RESERVED_IDENTIFIER_FIXUP_1594;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1601 = _RESERVED_IDENTIFIER_FIXUP_3207.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3250;
        _RESERVED_IDENTIFIER_FIXUP_3250.x = _RESERVED_IDENTIFIER_FIXUP_1601.x;
        _RESERVED_IDENTIFIER_FIXUP_3250.y = _RESERVED_IDENTIFIER_FIXUP_1601.y;
        _RESERVED_IDENTIFIER_FIXUP_3250.w = _RESERVED_IDENTIFIER_FIXUP_1525;
        vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3250.xy;
        float param_24 = _RESERVED_IDENTIFIER_FIXUP_1525;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1618 = hdLod6(param_23, param_24);
        float _RESERVED_IDENTIFIER_FIXUP_1623 = _RESERVED_IDENTIFIER_FIXUP_1594 + _RESERVED_IDENTIFIER_FIXUP_1618.x;
        _RESERVED_IDENTIFIER_FIXUP_3207.y = _RESERVED_IDENTIFIER_FIXUP_1623;
        _RESERVED_IDENTIFIER_FIXUP_3207.y = _RESERVED_IDENTIFIER_FIXUP_1623 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3683 = _RESERVED_IDENTIFIER_FIXUP_1618;
        _RESERVED_IDENTIFIER_FIXUP_3681 = _RESERVED_IDENTIFIER_FIXUP_3207;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1636 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3072 = _RESERVED_IDENTIFIER_FIXUP_3067;
        _RESERVED_IDENTIFIER_FIXUP_3072.z = _RESERVED_IDENTIFIER_FIXUP_1636;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3684;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3682;
        if (_RESERVED_IDENTIFIER_FIXUP_1636 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1645 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_1645.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1645.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1651 = hdLod7(param_25, param_26);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1655 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3147 = _RESERVED_IDENTIFIER_FIXUP_3072;
            _RESERVED_IDENTIFIER_FIXUP_3147.z = _RESERVED_IDENTIFIER_FIXUP_1655.x;
            _RESERVED_IDENTIFIER_FIXUP_3147.w = _RESERVED_IDENTIFIER_FIXUP_1655.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1665 = _RESERVED_IDENTIFIER_FIXUP_3147.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3151;
            _RESERVED_IDENTIFIER_FIXUP_3151.x = _RESERVED_IDENTIFIER_FIXUP_1665.x;
            _RESERVED_IDENTIFIER_FIXUP_3151.y = _RESERVED_IDENTIFIER_FIXUP_1665.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1672 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1676 = _RESERVED_IDENTIFIER_FIXUP_1672.y;
            _RESERVED_IDENTIFIER_FIXUP_3151.w = _RESERVED_IDENTIFIER_FIXUP_1676;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3151.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1676;
            float _RESERVED_IDENTIFIER_FIXUP_1687 = _RESERVED_IDENTIFIER_FIXUP_1651.x + hdLod7(param_27, param_28).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3162 = _RESERVED_IDENTIFIER_FIXUP_1651;
            _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1687;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1694 = _RESERVED_IDENTIFIER_FIXUP_3147.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3164;
            _RESERVED_IDENTIFIER_FIXUP_3164.x = _RESERVED_IDENTIFIER_FIXUP_1694.x;
            _RESERVED_IDENTIFIER_FIXUP_3164.y = _RESERVED_IDENTIFIER_FIXUP_1694.y;
            _RESERVED_IDENTIFIER_FIXUP_3164.w = _RESERVED_IDENTIFIER_FIXUP_1676;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3164.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1676;
            float _RESERVED_IDENTIFIER_FIXUP_1716 = _RESERVED_IDENTIFIER_FIXUP_1687 + hdLod7(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1716;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1723 = _RESERVED_IDENTIFIER_FIXUP_3147.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3177;
            _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1723.x;
            _RESERVED_IDENTIFIER_FIXUP_3177.y = _RESERVED_IDENTIFIER_FIXUP_1723.y;
            _RESERVED_IDENTIFIER_FIXUP_3177.w = _RESERVED_IDENTIFIER_FIXUP_1676;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3177.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1676;
            float _RESERVED_IDENTIFIER_FIXUP_1745 = _RESERVED_IDENTIFIER_FIXUP_1716 + hdLod7(param_31, param_32).x;
            _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_1745;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1752 = _RESERVED_IDENTIFIER_FIXUP_3147.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3190;
            _RESERVED_IDENTIFIER_FIXUP_3190.x = _RESERVED_IDENTIFIER_FIXUP_1752.x;
            _RESERVED_IDENTIFIER_FIXUP_3190.y = _RESERVED_IDENTIFIER_FIXUP_1752.y;
            _RESERVED_IDENTIFIER_FIXUP_3190.w = _RESERVED_IDENTIFIER_FIXUP_1676;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3190.xy;
            float param_34 = _RESERVED_IDENTIFIER_FIXUP_1676;
            float _RESERVED_IDENTIFIER_FIXUP_1774 = _RESERVED_IDENTIFIER_FIXUP_1745 + hdLod7(param_33, param_34).x;
            _RESERVED_IDENTIFIER_FIXUP_3147.z = _RESERVED_IDENTIFIER_FIXUP_1774;
            _RESERVED_IDENTIFIER_FIXUP_3147.y = _RESERVED_IDENTIFIER_FIXUP_1774 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3684 = _RESERVED_IDENTIFIER_FIXUP_3162;
            _RESERVED_IDENTIFIER_FIXUP_3682 = _RESERVED_IDENTIFIER_FIXUP_3147;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3076 = _RESERVED_IDENTIFIER_FIXUP_3072;
            _RESERVED_IDENTIFIER_FIXUP_3076.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3076.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1790 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1794 = _RESERVED_IDENTIFIER_FIXUP_1790.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3699 = vec4(_RESERVED_IDENTIFIER_FIXUP_1790.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1794);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1805 = _RESERVED_IDENTIFIER_FIXUP_3699.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3700 = vec4(_RESERVED_IDENTIFIER_FIXUP_1805 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1794);
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_1805;
            float param_36 = _RESERVED_IDENTIFIER_FIXUP_1794;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3700.xy;
            float param_38 = _RESERVED_IDENTIFIER_FIXUP_1794;
            float _RESERVED_IDENTIFIER_FIXUP_1835 = hdLod8(param_35, param_36).x + hdLod8(param_37, param_38).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3103 = _RESERVED_IDENTIFIER_FIXUP_3699;
            _RESERVED_IDENTIFIER_FIXUP_3103.z = _RESERVED_IDENTIFIER_FIXUP_1835;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1842 = _RESERVED_IDENTIFIER_FIXUP_3103.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3105 = _RESERVED_IDENTIFIER_FIXUP_3700;
            _RESERVED_IDENTIFIER_FIXUP_3105.x = _RESERVED_IDENTIFIER_FIXUP_1842.x;
            _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_1842.y;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3105.xy;
            float param_40 = _RESERVED_IDENTIFIER_FIXUP_1794;
            float _RESERVED_IDENTIFIER_FIXUP_1857 = _RESERVED_IDENTIFIER_FIXUP_1835 + hdLod8(param_39, param_40).x;
            _RESERVED_IDENTIFIER_FIXUP_3103.z = _RESERVED_IDENTIFIER_FIXUP_1857;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1864 = _RESERVED_IDENTIFIER_FIXUP_3103.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3114 = _RESERVED_IDENTIFIER_FIXUP_3105;
            _RESERVED_IDENTIFIER_FIXUP_3114.x = _RESERVED_IDENTIFIER_FIXUP_1864.x;
            _RESERVED_IDENTIFIER_FIXUP_3114.y = _RESERVED_IDENTIFIER_FIXUP_1864.y;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3114.xy;
            float param_42 = _RESERVED_IDENTIFIER_FIXUP_1794;
            float _RESERVED_IDENTIFIER_FIXUP_1879 = _RESERVED_IDENTIFIER_FIXUP_1857 + hdLod8(param_41, param_42).x;
            _RESERVED_IDENTIFIER_FIXUP_3103.z = _RESERVED_IDENTIFIER_FIXUP_1879;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1886 = _RESERVED_IDENTIFIER_FIXUP_3103.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3123 = _RESERVED_IDENTIFIER_FIXUP_3114;
            _RESERVED_IDENTIFIER_FIXUP_3123.x = _RESERVED_IDENTIFIER_FIXUP_1886.x;
            _RESERVED_IDENTIFIER_FIXUP_3123.y = _RESERVED_IDENTIFIER_FIXUP_1886.y;
            vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3123.xy;
            float param_44 = _RESERVED_IDENTIFIER_FIXUP_1794;
            float _RESERVED_IDENTIFIER_FIXUP_1901 = _RESERVED_IDENTIFIER_FIXUP_1879 + hdLod8(param_43, param_44).x;
            _RESERVED_IDENTIFIER_FIXUP_3103.x = _RESERVED_IDENTIFIER_FIXUP_1901;
            float _RESERVED_IDENTIFIER_FIXUP_1909 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3103.y = _RESERVED_IDENTIFIER_FIXUP_1909;
            float _RESERVED_IDENTIFIER_FIXUP_1915 = clamp((_RESERVED_IDENTIFIER_FIXUP_1909 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3076.z = _RESERVED_IDENTIFIER_FIXUP_1915;
            float _RESERVED_IDENTIFIER_FIXUP_1920 = (_RESERVED_IDENTIFIER_FIXUP_1901 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3076.w = _RESERVED_IDENTIFIER_FIXUP_1920;
            _RESERVED_IDENTIFIER_FIXUP_3076.y = (_RESERVED_IDENTIFIER_FIXUP_1915 * _RESERVED_IDENTIFIER_FIXUP_1920) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3684 = _RESERVED_IDENTIFIER_FIXUP_3103;
            _RESERVED_IDENTIFIER_FIXUP_3682 = _RESERVED_IDENTIFIER_FIXUP_3076;
        }
        _RESERVED_IDENTIFIER_FIXUP_3683 = _RESERVED_IDENTIFIER_FIXUP_3684;
        _RESERVED_IDENTIFIER_FIXUP_3681 = _RESERVED_IDENTIFIER_FIXUP_3682;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1935 = min(_RESERVED_IDENTIFIER_FIXUP_3681.y, _RESERVED_IDENTIFIER_FIXUP_3681.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3268 = _RESERVED_IDENTIFIER_FIXUP_3683;
    _RESERVED_IDENTIFIER_FIXUP_3268.x = _RESERVED_IDENTIFIER_FIXUP_1935;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3701 = vec4((_RESERVED_IDENTIFIER_FIXUP_1935 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1957 = _RESERVED_IDENTIFIER_FIXUP_3268.xxx * _RESERVED_IDENTIFIER_FIXUP_3701.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1959 = _RESERVED_IDENTIFIER_FIXUP_1957.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3279 = _RESERVED_IDENTIFIER_FIXUP_3701;
    _RESERVED_IDENTIFIER_FIXUP_3279.y = _RESERVED_IDENTIFIER_FIXUP_1959;
    _RESERVED_IDENTIFIER_FIXUP_3279.z = _RESERVED_IDENTIFIER_FIXUP_1957.y;
    _RESERVED_IDENTIFIER_FIXUP_3279.w = _RESERVED_IDENTIFIER_FIXUP_1957.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1971 = (mix(_RESERVED_IDENTIFIER_FIXUP_1297, _RESERVED_IDENTIFIER_FIXUP_2981, _RESERVED_IDENTIFIER_FIXUP_1169.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_3279.xxx) + _RESERVED_IDENTIFIER_FIXUP_3279.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3702 = vec4(_RESERVED_IDENTIFIER_FIXUP_1971.x, _RESERVED_IDENTIFIER_FIXUP_1959, _RESERVED_IDENTIFIER_FIXUP_1957.yz);
    _RESERVED_IDENTIFIER_FIXUP_3702.y = _RESERVED_IDENTIFIER_FIXUP_1971.y;
    _RESERVED_IDENTIFIER_FIXUP_3702.z = _RESERVED_IDENTIFIER_FIXUP_1971.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1984 = _RESERVED_IDENTIFIER_FIXUP_3702.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3291 = _RESERVED_IDENTIFIER_FIXUP_3702;
    _RESERVED_IDENTIFIER_FIXUP_3291.x = _RESERVED_IDENTIFIER_FIXUP_1984.x;
    _RESERVED_IDENTIFIER_FIXUP_3291.y = _RESERVED_IDENTIFIER_FIXUP_1984.y;
    _RESERVED_IDENTIFIER_FIXUP_3291.z = _RESERVED_IDENTIFIER_FIXUP_1984.z;
    vec2 param_45 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2041 = hdTex0(param_45);
    vec2 param_46 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2045 = hdTex1(param_46);
    vec2 param_47 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2049 = hdTex2(param_47);
    vec2 param_48 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2053 = hdTex3(param_48);
    vec2 param_49 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2057 = hdTex4(param_49);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2065 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3305;
    _RESERVED_IDENTIFIER_FIXUP_3305.x = _RESERVED_IDENTIFIER_FIXUP_2065.x;
    _RESERVED_IDENTIFIER_FIXUP_3305.y = _RESERVED_IDENTIFIER_FIXUP_2065.y;
    _RESERVED_IDENTIFIER_FIXUP_3305.z = _RESERVED_IDENTIFIER_FIXUP_2065.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2073 = _RESERVED_IDENTIFIER_FIXUP_2041.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2076 = _RESERVED_IDENTIFIER_FIXUP_2073 * _RESERVED_IDENTIFIER_FIXUP_3305.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3311;
    _RESERVED_IDENTIFIER_FIXUP_3311.x = _RESERVED_IDENTIFIER_FIXUP_2076.x;
    _RESERVED_IDENTIFIER_FIXUP_3311.y = _RESERVED_IDENTIFIER_FIXUP_2076.y;
    _RESERVED_IDENTIFIER_FIXUP_3311.z = _RESERVED_IDENTIFIER_FIXUP_2076.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2091 = mix(_RESERVED_IDENTIFIER_FIXUP_3311.xyz, _RESERVED_IDENTIFIER_FIXUP_2073, _RESERVED_IDENTIFIER_FIXUP_1202);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3317 = _RESERVED_IDENTIFIER_FIXUP_2041;
    _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_2091.x;
    _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_2091.y;
    _RESERVED_IDENTIFIER_FIXUP_3317.z = _RESERVED_IDENTIFIER_FIXUP_2091.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2099 = _RESERVED_IDENTIFIER_FIXUP_2045.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2102 = _RESERVED_IDENTIFIER_FIXUP_2099 * _RESERVED_IDENTIFIER_FIXUP_3305.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3323;
    _RESERVED_IDENTIFIER_FIXUP_3323.x = _RESERVED_IDENTIFIER_FIXUP_2102.x;
    _RESERVED_IDENTIFIER_FIXUP_3323.y = _RESERVED_IDENTIFIER_FIXUP_2102.y;
    _RESERVED_IDENTIFIER_FIXUP_3323.z = _RESERVED_IDENTIFIER_FIXUP_2102.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2117 = mix(_RESERVED_IDENTIFIER_FIXUP_3323.xyz, _RESERVED_IDENTIFIER_FIXUP_2099, _RESERVED_IDENTIFIER_FIXUP_1228);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3329 = _RESERVED_IDENTIFIER_FIXUP_2045;
    _RESERVED_IDENTIFIER_FIXUP_3329.x = _RESERVED_IDENTIFIER_FIXUP_2117.x;
    _RESERVED_IDENTIFIER_FIXUP_3329.y = _RESERVED_IDENTIFIER_FIXUP_2117.y;
    _RESERVED_IDENTIFIER_FIXUP_3329.z = _RESERVED_IDENTIFIER_FIXUP_2117.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2125 = _RESERVED_IDENTIFIER_FIXUP_2049.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2128 = _RESERVED_IDENTIFIER_FIXUP_2125 * _RESERVED_IDENTIFIER_FIXUP_3305.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3335;
    _RESERVED_IDENTIFIER_FIXUP_3335.x = _RESERVED_IDENTIFIER_FIXUP_2128.x;
    _RESERVED_IDENTIFIER_FIXUP_3335.y = _RESERVED_IDENTIFIER_FIXUP_2128.y;
    _RESERVED_IDENTIFIER_FIXUP_3335.z = _RESERVED_IDENTIFIER_FIXUP_2128.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2143 = mix(_RESERVED_IDENTIFIER_FIXUP_3335.xyz, _RESERVED_IDENTIFIER_FIXUP_2125, _RESERVED_IDENTIFIER_FIXUP_1254);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3341 = _RESERVED_IDENTIFIER_FIXUP_2049;
    _RESERVED_IDENTIFIER_FIXUP_3341.x = _RESERVED_IDENTIFIER_FIXUP_2143.x;
    _RESERVED_IDENTIFIER_FIXUP_3341.y = _RESERVED_IDENTIFIER_FIXUP_2143.y;
    _RESERVED_IDENTIFIER_FIXUP_3341.z = _RESERVED_IDENTIFIER_FIXUP_2143.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2151 = _RESERVED_IDENTIFIER_FIXUP_2053.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2154 = _RESERVED_IDENTIFIER_FIXUP_2151 * _RESERVED_IDENTIFIER_FIXUP_3305.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3347 = _RESERVED_IDENTIFIER_FIXUP_1172;
    _RESERVED_IDENTIFIER_FIXUP_3347.x = _RESERVED_IDENTIFIER_FIXUP_2154.x;
    _RESERVED_IDENTIFIER_FIXUP_3347.y = _RESERVED_IDENTIFIER_FIXUP_2154.y;
    _RESERVED_IDENTIFIER_FIXUP_3347.z = _RESERVED_IDENTIFIER_FIXUP_2154.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2169 = mix(_RESERVED_IDENTIFIER_FIXUP_3347.xyz, _RESERVED_IDENTIFIER_FIXUP_2151, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3347.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3353 = _RESERVED_IDENTIFIER_FIXUP_2053;
    _RESERVED_IDENTIFIER_FIXUP_3353.x = _RESERVED_IDENTIFIER_FIXUP_2169.x;
    _RESERVED_IDENTIFIER_FIXUP_3353.y = _RESERVED_IDENTIFIER_FIXUP_2169.y;
    _RESERVED_IDENTIFIER_FIXUP_3353.z = _RESERVED_IDENTIFIER_FIXUP_2169.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2185 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3317, _RESERVED_IDENTIFIER_FIXUP_3329, _RESERVED_IDENTIFIER_FIXUP_2057.xxxx), _RESERVED_IDENTIFIER_FIXUP_3341, _RESERVED_IDENTIFIER_FIXUP_2057.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2190 = mix(_RESERVED_IDENTIFIER_FIXUP_2185, _RESERVED_IDENTIFIER_FIXUP_3353, _RESERVED_IDENTIFIER_FIXUP_2057.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3361 = _RESERVED_IDENTIFIER_FIXUP_2185;
    _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_1309;
    float _RESERVED_IDENTIFIER_FIXUP_2203 = clamp((_RESERVED_IDENTIFIER_FIXUP_1309 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_2203;
    float _RESERVED_IDENTIFIER_FIXUP_2209 = ((-_RESERVED_IDENTIFIER_FIXUP_2203) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_2209;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3688;
    if (_RESERVED_IDENTIFIER_FIXUP_2209 != (-_RESERVED_IDENTIFIER_FIXUP_2209))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2221 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2231 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_2233 = _RESERVED_IDENTIFIER_FIXUP_2231.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3374 = _RESERVED_IDENTIFIER_FIXUP_3361;
        _RESERVED_IDENTIFIER_FIXUP_3374.y = _RESERVED_IDENTIFIER_FIXUP_2233;
        _RESERVED_IDENTIFIER_FIXUP_3374.z = _RESERVED_IDENTIFIER_FIXUP_2231.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2241 = _RESERVED_IDENTIFIER_FIXUP_3374.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3378;
        _RESERVED_IDENTIFIER_FIXUP_3378.x = _RESERVED_IDENTIFIER_FIXUP_2241.x;
        _RESERVED_IDENTIFIER_FIXUP_3378.y = _RESERVED_IDENTIFIER_FIXUP_2241.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2248 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2252 = _RESERVED_IDENTIFIER_FIXUP_2248.y;
        _RESERVED_IDENTIFIER_FIXUP_3378.w = _RESERVED_IDENTIFIER_FIXUP_2252;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2221.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2221.w;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3378.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2252;
        float _RESERVED_IDENTIFIER_FIXUP_2263 = hdLod5(param_50, param_51).x + hdLod5(param_52, param_53).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3704 = vec4(_RESERVED_IDENTIFIER_FIXUP_2203, _RESERVED_IDENTIFIER_FIXUP_2233, _RESERVED_IDENTIFIER_FIXUP_2231.y, _RESERVED_IDENTIFIER_FIXUP_2263);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2270 = _RESERVED_IDENTIFIER_FIXUP_3704.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3391;
        _RESERVED_IDENTIFIER_FIXUP_3391.x = _RESERVED_IDENTIFIER_FIXUP_2270.x;
        _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_2270.y;
        _RESERVED_IDENTIFIER_FIXUP_3391.w = _RESERVED_IDENTIFIER_FIXUP_2252;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3391.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2252;
        float _RESERVED_IDENTIFIER_FIXUP_2292 = _RESERVED_IDENTIFIER_FIXUP_2263 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3704.w = _RESERVED_IDENTIFIER_FIXUP_2292;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2299 = _RESERVED_IDENTIFIER_FIXUP_3704.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3404;
        _RESERVED_IDENTIFIER_FIXUP_3404.x = _RESERVED_IDENTIFIER_FIXUP_2299.x;
        _RESERVED_IDENTIFIER_FIXUP_3404.y = _RESERVED_IDENTIFIER_FIXUP_2299.y;
        _RESERVED_IDENTIFIER_FIXUP_3404.w = _RESERVED_IDENTIFIER_FIXUP_2252;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3404.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2252;
        float _RESERVED_IDENTIFIER_FIXUP_2321 = _RESERVED_IDENTIFIER_FIXUP_2292 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3704.w = _RESERVED_IDENTIFIER_FIXUP_2321;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2328 = _RESERVED_IDENTIFIER_FIXUP_3704.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3417;
        _RESERVED_IDENTIFIER_FIXUP_3417.x = _RESERVED_IDENTIFIER_FIXUP_2328.x;
        _RESERVED_IDENTIFIER_FIXUP_3417.y = _RESERVED_IDENTIFIER_FIXUP_2328.y;
        _RESERVED_IDENTIFIER_FIXUP_3417.w = _RESERVED_IDENTIFIER_FIXUP_2252;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3417.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2252;
        float _RESERVED_IDENTIFIER_FIXUP_2350 = _RESERVED_IDENTIFIER_FIXUP_2321 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3704.y = _RESERVED_IDENTIFIER_FIXUP_2350;
        float _RESERVED_IDENTIFIER_FIXUP_2355 = (_RESERVED_IDENTIFIER_FIXUP_2350 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3704.y = _RESERVED_IDENTIFIER_FIXUP_2355;
        _RESERVED_IDENTIFIER_FIXUP_3704.x = (_RESERVED_IDENTIFIER_FIXUP_2203 * _RESERVED_IDENTIFIER_FIXUP_2355) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3688 = _RESERVED_IDENTIFIER_FIXUP_3704;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3371 = _RESERVED_IDENTIFIER_FIXUP_3361;
        _RESERVED_IDENTIFIER_FIXUP_3371.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3688 = _RESERVED_IDENTIFIER_FIXUP_3371;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3439 = _RESERVED_IDENTIFIER_FIXUP_3688;
    _RESERVED_IDENTIFIER_FIXUP_3439.y = _RESERVED_IDENTIFIER_FIXUP_1485;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3693;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3691;
    if (_RESERVED_IDENTIFIER_FIXUP_1485 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2382 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2392 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3579 = _RESERVED_IDENTIFIER_FIXUP_3439;
        _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2392.x;
        _RESERVED_IDENTIFIER_FIXUP_3579.z = _RESERVED_IDENTIFIER_FIXUP_2392.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2402 = _RESERVED_IDENTIFIER_FIXUP_3579.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3583;
        _RESERVED_IDENTIFIER_FIXUP_3583.x = _RESERVED_IDENTIFIER_FIXUP_2402.x;
        _RESERVED_IDENTIFIER_FIXUP_3583.y = _RESERVED_IDENTIFIER_FIXUP_2402.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2409 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2413 = _RESERVED_IDENTIFIER_FIXUP_2409.y;
        _RESERVED_IDENTIFIER_FIXUP_3583.w = _RESERVED_IDENTIFIER_FIXUP_2413;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_2382.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2382.w;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3583.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2413;
        float _RESERVED_IDENTIFIER_FIXUP_2424 = hdLod6(param_60, param_61).x + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3579.w = _RESERVED_IDENTIFIER_FIXUP_2424;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2431 = _RESERVED_IDENTIFIER_FIXUP_3579.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3596;
        _RESERVED_IDENTIFIER_FIXUP_3596.x = _RESERVED_IDENTIFIER_FIXUP_2431.x;
        _RESERVED_IDENTIFIER_FIXUP_3596.y = _RESERVED_IDENTIFIER_FIXUP_2431.y;
        _RESERVED_IDENTIFIER_FIXUP_3596.w = _RESERVED_IDENTIFIER_FIXUP_2413;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3596.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2413;
        float _RESERVED_IDENTIFIER_FIXUP_2453 = _RESERVED_IDENTIFIER_FIXUP_2424 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3579.w = _RESERVED_IDENTIFIER_FIXUP_2453;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2460 = _RESERVED_IDENTIFIER_FIXUP_3579.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3609;
        _RESERVED_IDENTIFIER_FIXUP_3609.x = _RESERVED_IDENTIFIER_FIXUP_2460.x;
        _RESERVED_IDENTIFIER_FIXUP_3609.y = _RESERVED_IDENTIFIER_FIXUP_2460.y;
        _RESERVED_IDENTIFIER_FIXUP_3609.w = _RESERVED_IDENTIFIER_FIXUP_2413;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3609.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2413;
        float _RESERVED_IDENTIFIER_FIXUP_2482 = _RESERVED_IDENTIFIER_FIXUP_2453 + hdLod6(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3579.w = _RESERVED_IDENTIFIER_FIXUP_2482;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2489 = _RESERVED_IDENTIFIER_FIXUP_3579.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3622;
        _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2489.x;
        _RESERVED_IDENTIFIER_FIXUP_3622.y = _RESERVED_IDENTIFIER_FIXUP_2489.y;
        _RESERVED_IDENTIFIER_FIXUP_3622.w = _RESERVED_IDENTIFIER_FIXUP_2413;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3622.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2413;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2506 = hdLod6(param_68, param_69);
        float _RESERVED_IDENTIFIER_FIXUP_2511 = _RESERVED_IDENTIFIER_FIXUP_2482 + _RESERVED_IDENTIFIER_FIXUP_2506.x;
        _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2511;
        _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2511 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3693 = _RESERVED_IDENTIFIER_FIXUP_2506;
        _RESERVED_IDENTIFIER_FIXUP_3691 = _RESERVED_IDENTIFIER_FIXUP_3579;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2524 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3444 = _RESERVED_IDENTIFIER_FIXUP_3439;
        _RESERVED_IDENTIFIER_FIXUP_3444.z = _RESERVED_IDENTIFIER_FIXUP_2524;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3694;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3692;
        if (_RESERVED_IDENTIFIER_FIXUP_2524 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2533 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2533.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2533.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2539 = hdLod7(param_70, param_71);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2543 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3519 = _RESERVED_IDENTIFIER_FIXUP_3444;
            _RESERVED_IDENTIFIER_FIXUP_3519.z = _RESERVED_IDENTIFIER_FIXUP_2543.x;
            _RESERVED_IDENTIFIER_FIXUP_3519.w = _RESERVED_IDENTIFIER_FIXUP_2543.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2553 = _RESERVED_IDENTIFIER_FIXUP_3519.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3523;
            _RESERVED_IDENTIFIER_FIXUP_3523.x = _RESERVED_IDENTIFIER_FIXUP_2553.x;
            _RESERVED_IDENTIFIER_FIXUP_3523.y = _RESERVED_IDENTIFIER_FIXUP_2553.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2560 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2564 = _RESERVED_IDENTIFIER_FIXUP_2560.y;
            _RESERVED_IDENTIFIER_FIXUP_3523.w = _RESERVED_IDENTIFIER_FIXUP_2564;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3523.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2564;
            float _RESERVED_IDENTIFIER_FIXUP_2575 = _RESERVED_IDENTIFIER_FIXUP_2539.x + hdLod7(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3534 = _RESERVED_IDENTIFIER_FIXUP_2539;
            _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_2575;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2582 = _RESERVED_IDENTIFIER_FIXUP_3519.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3536;
            _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2582.x;
            _RESERVED_IDENTIFIER_FIXUP_3536.y = _RESERVED_IDENTIFIER_FIXUP_2582.y;
            _RESERVED_IDENTIFIER_FIXUP_3536.w = _RESERVED_IDENTIFIER_FIXUP_2564;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3536.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2564;
            float _RESERVED_IDENTIFIER_FIXUP_2604 = _RESERVED_IDENTIFIER_FIXUP_2575 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_2604;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2611 = _RESERVED_IDENTIFIER_FIXUP_3519.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3549;
            _RESERVED_IDENTIFIER_FIXUP_3549.x = _RESERVED_IDENTIFIER_FIXUP_2611.x;
            _RESERVED_IDENTIFIER_FIXUP_3549.y = _RESERVED_IDENTIFIER_FIXUP_2611.y;
            _RESERVED_IDENTIFIER_FIXUP_3549.w = _RESERVED_IDENTIFIER_FIXUP_2564;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3549.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2564;
            float _RESERVED_IDENTIFIER_FIXUP_2633 = _RESERVED_IDENTIFIER_FIXUP_2604 + hdLod7(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_2633;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2640 = _RESERVED_IDENTIFIER_FIXUP_3519.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3562;
            _RESERVED_IDENTIFIER_FIXUP_3562.x = _RESERVED_IDENTIFIER_FIXUP_2640.x;
            _RESERVED_IDENTIFIER_FIXUP_3562.y = _RESERVED_IDENTIFIER_FIXUP_2640.y;
            _RESERVED_IDENTIFIER_FIXUP_3562.w = _RESERVED_IDENTIFIER_FIXUP_2564;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3562.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2564;
            float _RESERVED_IDENTIFIER_FIXUP_2662 = _RESERVED_IDENTIFIER_FIXUP_2633 + hdLod7(param_78, param_79).x;
            _RESERVED_IDENTIFIER_FIXUP_3519.z = _RESERVED_IDENTIFIER_FIXUP_2662;
            _RESERVED_IDENTIFIER_FIXUP_3519.y = _RESERVED_IDENTIFIER_FIXUP_2662 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3694 = _RESERVED_IDENTIFIER_FIXUP_3534;
            _RESERVED_IDENTIFIER_FIXUP_3692 = _RESERVED_IDENTIFIER_FIXUP_3519;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3448 = _RESERVED_IDENTIFIER_FIXUP_3444;
            _RESERVED_IDENTIFIER_FIXUP_3448.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3448.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2678 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2682 = _RESERVED_IDENTIFIER_FIXUP_2678.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3705 = vec4(_RESERVED_IDENTIFIER_FIXUP_2678.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2682);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2693 = _RESERVED_IDENTIFIER_FIXUP_3705.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3706 = vec4(_RESERVED_IDENTIFIER_FIXUP_2693 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2682);
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2693;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2682;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3706.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2682;
            float _RESERVED_IDENTIFIER_FIXUP_2723 = hdLod8(param_80, param_81).x + hdLod8(param_82, param_83).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3475 = _RESERVED_IDENTIFIER_FIXUP_3705;
            _RESERVED_IDENTIFIER_FIXUP_3475.z = _RESERVED_IDENTIFIER_FIXUP_2723;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2730 = _RESERVED_IDENTIFIER_FIXUP_3475.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3477 = _RESERVED_IDENTIFIER_FIXUP_3706;
            _RESERVED_IDENTIFIER_FIXUP_3477.x = _RESERVED_IDENTIFIER_FIXUP_2730.x;
            _RESERVED_IDENTIFIER_FIXUP_3477.y = _RESERVED_IDENTIFIER_FIXUP_2730.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3477.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2682;
            float _RESERVED_IDENTIFIER_FIXUP_2745 = _RESERVED_IDENTIFIER_FIXUP_2723 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3475.z = _RESERVED_IDENTIFIER_FIXUP_2745;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2752 = _RESERVED_IDENTIFIER_FIXUP_3475.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3486 = _RESERVED_IDENTIFIER_FIXUP_3477;
            _RESERVED_IDENTIFIER_FIXUP_3486.x = _RESERVED_IDENTIFIER_FIXUP_2752.x;
            _RESERVED_IDENTIFIER_FIXUP_3486.y = _RESERVED_IDENTIFIER_FIXUP_2752.y;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3486.xy;
            float param_87 = _RESERVED_IDENTIFIER_FIXUP_2682;
            float _RESERVED_IDENTIFIER_FIXUP_2767 = _RESERVED_IDENTIFIER_FIXUP_2745 + hdLod8(param_86, param_87).x;
            _RESERVED_IDENTIFIER_FIXUP_3475.z = _RESERVED_IDENTIFIER_FIXUP_2767;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2774 = _RESERVED_IDENTIFIER_FIXUP_3475.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3495 = _RESERVED_IDENTIFIER_FIXUP_3486;
            _RESERVED_IDENTIFIER_FIXUP_3495.x = _RESERVED_IDENTIFIER_FIXUP_2774.x;
            _RESERVED_IDENTIFIER_FIXUP_3495.y = _RESERVED_IDENTIFIER_FIXUP_2774.y;
            vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3495.xy;
            float param_89 = _RESERVED_IDENTIFIER_FIXUP_2682;
            float _RESERVED_IDENTIFIER_FIXUP_2789 = _RESERVED_IDENTIFIER_FIXUP_2767 + hdLod8(param_88, param_89).x;
            _RESERVED_IDENTIFIER_FIXUP_3475.x = _RESERVED_IDENTIFIER_FIXUP_2789;
            float _RESERVED_IDENTIFIER_FIXUP_2797 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3475.y = _RESERVED_IDENTIFIER_FIXUP_2797;
            float _RESERVED_IDENTIFIER_FIXUP_2803 = clamp((_RESERVED_IDENTIFIER_FIXUP_2797 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3448.z = _RESERVED_IDENTIFIER_FIXUP_2803;
            float _RESERVED_IDENTIFIER_FIXUP_2808 = (_RESERVED_IDENTIFIER_FIXUP_2789 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3448.w = _RESERVED_IDENTIFIER_FIXUP_2808;
            _RESERVED_IDENTIFIER_FIXUP_3448.y = (_RESERVED_IDENTIFIER_FIXUP_2803 * _RESERVED_IDENTIFIER_FIXUP_2808) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3694 = _RESERVED_IDENTIFIER_FIXUP_3475;
            _RESERVED_IDENTIFIER_FIXUP_3692 = _RESERVED_IDENTIFIER_FIXUP_3448;
        }
        _RESERVED_IDENTIFIER_FIXUP_3693 = _RESERVED_IDENTIFIER_FIXUP_3694;
        _RESERVED_IDENTIFIER_FIXUP_3691 = _RESERVED_IDENTIFIER_FIXUP_3692;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2823 = min(_RESERVED_IDENTIFIER_FIXUP_3691.y, _RESERVED_IDENTIFIER_FIXUP_3691.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3640 = _RESERVED_IDENTIFIER_FIXUP_3693;
    _RESERVED_IDENTIFIER_FIXUP_3640.x = _RESERVED_IDENTIFIER_FIXUP_2823;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3707 = vec4((_RESERVED_IDENTIFIER_FIXUP_2823 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2190.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2845 = _RESERVED_IDENTIFIER_FIXUP_3640.xxx * _RESERVED_IDENTIFIER_FIXUP_3707.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2847 = _RESERVED_IDENTIFIER_FIXUP_2845.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3651 = _RESERVED_IDENTIFIER_FIXUP_3707;
    _RESERVED_IDENTIFIER_FIXUP_3651.y = _RESERVED_IDENTIFIER_FIXUP_2847;
    _RESERVED_IDENTIFIER_FIXUP_3651.z = _RESERVED_IDENTIFIER_FIXUP_2845.y;
    _RESERVED_IDENTIFIER_FIXUP_3651.w = _RESERVED_IDENTIFIER_FIXUP_2845.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2859 = (_RESERVED_IDENTIFIER_FIXUP_2190.xyz * _RESERVED_IDENTIFIER_FIXUP_3651.xxx) + _RESERVED_IDENTIFIER_FIXUP_3651.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3708 = vec4(_RESERVED_IDENTIFIER_FIXUP_2859.x, _RESERVED_IDENTIFIER_FIXUP_2847, _RESERVED_IDENTIFIER_FIXUP_2845.yz);
    _RESERVED_IDENTIFIER_FIXUP_3708.y = _RESERVED_IDENTIFIER_FIXUP_2859.y;
    _RESERVED_IDENTIFIER_FIXUP_3708.z = _RESERVED_IDENTIFIER_FIXUP_2859.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2872 = _RESERVED_IDENTIFIER_FIXUP_3708.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3663 = _RESERVED_IDENTIFIER_FIXUP_3708;
    _RESERVED_IDENTIFIER_FIXUP_3663.x = _RESERVED_IDENTIFIER_FIXUP_2872.x;
    _RESERVED_IDENTIFIER_FIXUP_3663.y = _RESERVED_IDENTIFIER_FIXUP_2872.y;
    _RESERVED_IDENTIFIER_FIXUP_3663.z = _RESERVED_IDENTIFIER_FIXUP_2872.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3663.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1011 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1020;
    if (_RESERVED_IDENTIFIER_FIXUP_1011)
    {
        _RESERVED_IDENTIFIER_FIXUP_1020 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1020 = _RESERVED_IDENTIFIER_FIXUP_1011;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1020)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1057 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3291.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1083 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2925;
    if (_RESERVED_IDENTIFIER_FIXUP_1057 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2925 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1057), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1083);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2925 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1083);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2925;
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
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        vec2 hdB283 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB283.x;
        r0.z = hdB283.y;
        vec2 hdB294 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB294.x;
        r3.y = hdB294.y;
        vec2 hdB302 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB302.x;
        r3.w = hdB302.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r0.w = r2.x + r3.x;
        vec2 hdB325 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB325.x;
        r2.y = hdB325.y;
        vec2 hdB332 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB332.x;
        r2.w = hdB332.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r0.w += r2.x;
        vec2 hdB355 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB355.x;
        r2.y = hdB355.y;
        vec2 hdB362 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB362.x;
        r2.w = hdB362.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r0.w += r2.x;
        vec2 hdB385 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB385.x;
        r2.y = hdB385.y;
        vec2 hdB392 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB392.x;
        r2.w = hdB392.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r0.y = r0.w + r2.x;
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
        r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod6(param_15, param_16);
        vec2 hdB452 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB452.x;
        r0.z = hdB452.y;
        vec2 hdB462 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB462.x;
        r3.y = hdB462.y;
        vec2 hdB469 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB469.x;
        r3.w = hdB469.y;
        vec2 param_17 = r3.xy;
        float param_18 = r3.w;
        r3 = hdLod6(param_17, param_18);
        r0.w = r2.x + r3.x;
        vec2 hdB491 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB491.x;
        r2.y = hdB491.y;
        vec2 hdB498 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB498.x;
        r2.w = hdB498.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod6(param_19, param_20);
        r0.w += r2.x;
        vec2 hdB520 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB520.x;
        r2.y = hdB520.y;
        vec2 hdB527 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB527.x;
        r2.w = hdB527.y;
        vec2 param_21 = r2.xy;
        float param_22 = r2.w;
        r2 = hdLod6(param_21, param_22);
        r0.w += r2.x;
        vec2 hdB549 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB549.x;
        r2.y = hdB549.y;
        vec2 hdB556 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB556.x;
        r2.w = hdB556.y;
        vec2 param_23 = r2.xy;
        float param_24 = r2.w;
        r2 = hdLod6(param_23, param_24);
        r0.y = r0.w + r2.x;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v7.x), abs(v7.y));
        if (r0.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod7(param_25, param_26);
            vec2 hdB605 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB605.x;
            r0.w = hdB605.y;
            vec2 hdB615 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB615.x;
            r3.y = hdB615.y;
            vec2 hdB622 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB622.x;
            r3.w = hdB622.y;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod7(param_27, param_28);
            r2.x += r3.x;
            vec2 hdB644 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB644.x;
            r3.y = hdB644.y;
            vec2 hdB651 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB651.x;
            r3.w = hdB651.y;
            vec2 param_29 = r3.xy;
            float param_30 = r3.w;
            r3 = hdLod7(param_29, param_30);
            r2.x += r3.x;
            vec2 hdB673 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB673.x;
            r3.y = hdB673.y;
            vec2 hdB680 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB680.x;
            r3.w = hdB680.y;
            vec2 param_31 = r3.xy;
            float param_32 = r3.w;
            r3 = hdLod7(param_31, param_32);
            r2.x += r3.x;
            vec2 hdB702 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB702.x;
            r3.y = hdB702.y;
            vec2 hdB709 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB709.x;
            r3.w = hdB709.y;
            vec2 param_33 = r3.xy;
            float param_34 = r3.w;
            r3 = hdLod7(param_33, param_34);
            r0.z = r2.x + r3.x;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r0.z = v5.w;
            r0.w = v6.w;
            vec2 hdB741 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB741.x;
            r2.w = hdB741.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_35 = r2.xy;
            float param_36 = r2.w;
            r3 = hdLod8(param_35, param_36);
            vec2 hdB766 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB766.x;
            r4.y = hdB766.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_37 = r4.xy;
            float param_38 = r4.w;
            r5 = hdLod8(param_37, param_38);
            r2.z = r3.x + r5.x;
            vec2 hdB794 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB794.x;
            r4.y = hdB794.y;
            vec2 param_39 = r4.xy;
            float param_40 = r4.w;
            r3 = hdLod8(param_39, param_40);
            r2.z += r3.x;
            vec2 hdB816 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB816.x;
            r4.y = hdB816.y;
            vec2 param_41 = r4.xy;
            float param_42 = r4.w;
            r3 = hdLod8(param_41, param_42);
            r2.z += r3.x;
            vec2 hdB838 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB838.x;
            r4.y = hdB838.y;
            vec2 param_43 = r4.xy;
            float param_44 = r4.w;
            r3 = hdLod8(param_43, param_44);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r0.z), abs(r0.w));
            r0.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.z * r0.w) + 1.0;
        }
    }
    r2.x = min(r0.y, r0.x);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB900 = r1.www * v1.xyz;
    r0.y = hdB900.x;
    r0.z = hdB900.y;
    r0.w = hdB900.z;
    vec4 hdB909 = r0;
    vec3 hdB911 = r2.xxx * hdB909.yzw;
    r0.y = hdB911.x;
    r0.z = hdB911.y;
    r0.w = hdB911.z;
    vec4 hdB920 = r0;
    vec4 hdB923 = r0;
    vec3 hdB925 = (r1.xyz * hdB920.xxx) + hdB923.yzw;
    r0.x = hdB925.x;
    r0.y = hdB925.y;
    r0.z = hdB925.z;
    vec4 hdB932 = r0;
    vec3 hdB939 = hdB932.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB939.x;
    r0.y = hdB939.y;
    r0.z = hdB939.z;
    vec3 hdB954 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB954.x;
    oC0.y = hdB954.y;
    oC0.z = hdB954.z;
    oC0.w = 1.0;
    bool hdB966 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB974;
    if (hdB966)
    {
        hdB974 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB974 = hdB966;
    }
    if (hdB974)
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
    bool _3610 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3620;
    if (_3610)
    {
        _3620 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3620 = _3610;
    }
    if (_3620)
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
        bool _3645 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3660;
        if (!_3645)
        {
            _3660 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3660 = _3645;
        }
        if (_3660)
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
