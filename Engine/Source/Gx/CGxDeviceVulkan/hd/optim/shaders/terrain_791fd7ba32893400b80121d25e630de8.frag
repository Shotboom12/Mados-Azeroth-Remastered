#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3679;
vec4 _RESERVED_IDENTIFIER_FIXUP_3680;


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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _64 = hdOverride >= 0;
    bool _83;
    if (_64)
    {
        _83 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _83 = _64;
    }
    vec4 _84;
    if (_83)
    {
        _84 = vec4(float(hdOverride));
    }
    else
    {
        _84 = value;
    }
    return _84;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _101 = hdOverride >= 0;
    bool _111;
    if (_101)
    {
        _111 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _111 = _101;
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _129 = hdOverride >= 0;
    bool _139;
    if (_129)
    {
        _139 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _157 = hdOverride >= 0;
    bool _166;
    if (_157)
    {
        _166 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _166 = _157;
    }
    vec4 _167;
    if (_166)
    {
        _167 = vec4(float(hdOverride));
    }
    else
    {
        _167 = value;
    }
    return _167;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _185 = hdOverride >= 0;
    bool _195;
    if (_185)
    {
        _195 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _195 = _185;
    }
    vec4 _196;
    if (_195)
    {
        _196 = vec4(float(hdOverride));
    }
    else
    {
        _196 = value;
    }
    return _196;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _214 = hdOverride >= 0;
    bool _224;
    if (_214)
    {
        _224 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _224 = _214;
    }
    vec4 _225;
    if (_224)
    {
        _225 = vec4(float(hdOverride));
    }
    else
    {
        _225 = value;
    }
    return _225;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _243 = hdOverride >= 0;
    bool _253;
    if (_243)
    {
        _253 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _253 = _243;
    }
    vec4 _254;
    if (_253)
    {
        _254 = vec4(float(hdOverride));
    }
    else
    {
        _254 = value;
    }
    return _254;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _272 = hdOverride >= 0;
    bool _282;
    if (_272)
    {
        _282 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _282 = _272;
    }
    vec4 _283;
    if (_282)
    {
        _283 = vec4(float(hdOverride));
    }
    else
    {
        _283 = value;
    }
    return _283;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1156 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1160 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1164 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1168 = hdTex3(param_2);
    vec2 param_3 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1172 = hdTex4(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1175 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3679).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_1177 + _RESERVED_IDENTIFIER_FIXUP_1177;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2936;
    _RESERVED_IDENTIFIER_FIXUP_2936.x = _RESERVED_IDENTIFIER_FIXUP_1180.x;
    _RESERVED_IDENTIFIER_FIXUP_2936.y = _RESERVED_IDENTIFIER_FIXUP_1180.y;
    _RESERVED_IDENTIFIER_FIXUP_2936.z = _RESERVED_IDENTIFIER_FIXUP_1180.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1188 = _RESERVED_IDENTIFIER_FIXUP_1156.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1191 = _RESERVED_IDENTIFIER_FIXUP_1188 * _RESERVED_IDENTIFIER_FIXUP_2936.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2942;
    _RESERVED_IDENTIFIER_FIXUP_2942.x = _RESERVED_IDENTIFIER_FIXUP_1191.x;
    _RESERVED_IDENTIFIER_FIXUP_2942.y = _RESERVED_IDENTIFIER_FIXUP_1191.y;
    _RESERVED_IDENTIFIER_FIXUP_2942.z = _RESERVED_IDENTIFIER_FIXUP_1191.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1205 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1175.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1206 = mix(_RESERVED_IDENTIFIER_FIXUP_2942.xyz, _RESERVED_IDENTIFIER_FIXUP_1188, _RESERVED_IDENTIFIER_FIXUP_1205);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2948 = _RESERVED_IDENTIFIER_FIXUP_1156;
    _RESERVED_IDENTIFIER_FIXUP_2948.x = _RESERVED_IDENTIFIER_FIXUP_1206.x;
    _RESERVED_IDENTIFIER_FIXUP_2948.y = _RESERVED_IDENTIFIER_FIXUP_1206.y;
    _RESERVED_IDENTIFIER_FIXUP_2948.z = _RESERVED_IDENTIFIER_FIXUP_1206.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1214 = _RESERVED_IDENTIFIER_FIXUP_1160.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1217 = _RESERVED_IDENTIFIER_FIXUP_1214 * _RESERVED_IDENTIFIER_FIXUP_2936.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2954;
    _RESERVED_IDENTIFIER_FIXUP_2954.x = _RESERVED_IDENTIFIER_FIXUP_1217.x;
    _RESERVED_IDENTIFIER_FIXUP_2954.y = _RESERVED_IDENTIFIER_FIXUP_1217.y;
    _RESERVED_IDENTIFIER_FIXUP_2954.z = _RESERVED_IDENTIFIER_FIXUP_1217.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1231 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1175.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1232 = mix(_RESERVED_IDENTIFIER_FIXUP_2954.xyz, _RESERVED_IDENTIFIER_FIXUP_1214, _RESERVED_IDENTIFIER_FIXUP_1231);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2960 = _RESERVED_IDENTIFIER_FIXUP_1160;
    _RESERVED_IDENTIFIER_FIXUP_2960.x = _RESERVED_IDENTIFIER_FIXUP_1232.x;
    _RESERVED_IDENTIFIER_FIXUP_2960.y = _RESERVED_IDENTIFIER_FIXUP_1232.y;
    _RESERVED_IDENTIFIER_FIXUP_2960.z = _RESERVED_IDENTIFIER_FIXUP_1232.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1240 = _RESERVED_IDENTIFIER_FIXUP_1164.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1243 = _RESERVED_IDENTIFIER_FIXUP_1240 * _RESERVED_IDENTIFIER_FIXUP_2936.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2966;
    _RESERVED_IDENTIFIER_FIXUP_2966.x = _RESERVED_IDENTIFIER_FIXUP_1243.x;
    _RESERVED_IDENTIFIER_FIXUP_2966.y = _RESERVED_IDENTIFIER_FIXUP_1243.y;
    _RESERVED_IDENTIFIER_FIXUP_2966.z = _RESERVED_IDENTIFIER_FIXUP_1243.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1257 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1175.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1258 = mix(_RESERVED_IDENTIFIER_FIXUP_2966.xyz, _RESERVED_IDENTIFIER_FIXUP_1240, _RESERVED_IDENTIFIER_FIXUP_1257);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2972 = _RESERVED_IDENTIFIER_FIXUP_1164;
    _RESERVED_IDENTIFIER_FIXUP_2972.x = _RESERVED_IDENTIFIER_FIXUP_1258.x;
    _RESERVED_IDENTIFIER_FIXUP_2972.y = _RESERVED_IDENTIFIER_FIXUP_1258.y;
    _RESERVED_IDENTIFIER_FIXUP_2972.z = _RESERVED_IDENTIFIER_FIXUP_1258.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1266 = _RESERVED_IDENTIFIER_FIXUP_1168.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1269 = _RESERVED_IDENTIFIER_FIXUP_1266 * _RESERVED_IDENTIFIER_FIXUP_2936.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2978 = _RESERVED_IDENTIFIER_FIXUP_1175;
    _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1269.x;
    _RESERVED_IDENTIFIER_FIXUP_2978.y = _RESERVED_IDENTIFIER_FIXUP_1269.y;
    _RESERVED_IDENTIFIER_FIXUP_2978.z = _RESERVED_IDENTIFIER_FIXUP_1269.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1284 = mix(_RESERVED_IDENTIFIER_FIXUP_2978.xyz, _RESERVED_IDENTIFIER_FIXUP_1266, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2978.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2984 = _RESERVED_IDENTIFIER_FIXUP_1168;
    _RESERVED_IDENTIFIER_FIXUP_2984.x = _RESERVED_IDENTIFIER_FIXUP_1284.x;
    _RESERVED_IDENTIFIER_FIXUP_2984.y = _RESERVED_IDENTIFIER_FIXUP_1284.y;
    _RESERVED_IDENTIFIER_FIXUP_2984.z = _RESERVED_IDENTIFIER_FIXUP_1284.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1300 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2948, _RESERVED_IDENTIFIER_FIXUP_2960, _RESERVED_IDENTIFIER_FIXUP_1172.xxxx), _RESERVED_IDENTIFIER_FIXUP_2972, _RESERVED_IDENTIFIER_FIXUP_1172.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1312 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2992 = _RESERVED_IDENTIFIER_FIXUP_1300;
    _RESERVED_IDENTIFIER_FIXUP_2992.x = _RESERVED_IDENTIFIER_FIXUP_1312;
    float _RESERVED_IDENTIFIER_FIXUP_1318 = clamp((_RESERVED_IDENTIFIER_FIXUP_1312 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2992.x = _RESERVED_IDENTIFIER_FIXUP_1318;
    float _RESERVED_IDENTIFIER_FIXUP_1324 = ((-_RESERVED_IDENTIFIER_FIXUP_1318) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2992.y = _RESERVED_IDENTIFIER_FIXUP_1324;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3681;
    if (_RESERVED_IDENTIFIER_FIXUP_1324 != (-_RESERVED_IDENTIFIER_FIXUP_1324))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1336 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1346 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1348 = _RESERVED_IDENTIFIER_FIXUP_1346.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3005 = _RESERVED_IDENTIFIER_FIXUP_2992;
        _RESERVED_IDENTIFIER_FIXUP_3005.y = _RESERVED_IDENTIFIER_FIXUP_1348;
        _RESERVED_IDENTIFIER_FIXUP_3005.z = _RESERVED_IDENTIFIER_FIXUP_1346.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1356 = _RESERVED_IDENTIFIER_FIXUP_3005.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3009;
        _RESERVED_IDENTIFIER_FIXUP_3009.x = _RESERVED_IDENTIFIER_FIXUP_1356.x;
        _RESERVED_IDENTIFIER_FIXUP_3009.y = _RESERVED_IDENTIFIER_FIXUP_1356.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1363 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1367 = _RESERVED_IDENTIFIER_FIXUP_1363.y;
        _RESERVED_IDENTIFIER_FIXUP_3009.w = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1336.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1336.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3009.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1367;
        float _RESERVED_IDENTIFIER_FIXUP_1378 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3701 = vec4(_RESERVED_IDENTIFIER_FIXUP_1318, _RESERVED_IDENTIFIER_FIXUP_1348, _RESERVED_IDENTIFIER_FIXUP_1346.y, _RESERVED_IDENTIFIER_FIXUP_1378);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1385 = _RESERVED_IDENTIFIER_FIXUP_3701.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3022;
        _RESERVED_IDENTIFIER_FIXUP_3022.x = _RESERVED_IDENTIFIER_FIXUP_1385.x;
        _RESERVED_IDENTIFIER_FIXUP_3022.y = _RESERVED_IDENTIFIER_FIXUP_1385.y;
        _RESERVED_IDENTIFIER_FIXUP_3022.w = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3022.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1367;
        float _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_1378 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3701.w = _RESERVED_IDENTIFIER_FIXUP_1407;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1414 = _RESERVED_IDENTIFIER_FIXUP_3701.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3035;
        _RESERVED_IDENTIFIER_FIXUP_3035.x = _RESERVED_IDENTIFIER_FIXUP_1414.x;
        _RESERVED_IDENTIFIER_FIXUP_3035.y = _RESERVED_IDENTIFIER_FIXUP_1414.y;
        _RESERVED_IDENTIFIER_FIXUP_3035.w = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3035.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1367;
        float _RESERVED_IDENTIFIER_FIXUP_1436 = _RESERVED_IDENTIFIER_FIXUP_1407 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3701.w = _RESERVED_IDENTIFIER_FIXUP_1436;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1443 = _RESERVED_IDENTIFIER_FIXUP_3701.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3048;
        _RESERVED_IDENTIFIER_FIXUP_3048.x = _RESERVED_IDENTIFIER_FIXUP_1443.x;
        _RESERVED_IDENTIFIER_FIXUP_3048.y = _RESERVED_IDENTIFIER_FIXUP_1443.y;
        _RESERVED_IDENTIFIER_FIXUP_3048.w = _RESERVED_IDENTIFIER_FIXUP_1367;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3048.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1367;
        float _RESERVED_IDENTIFIER_FIXUP_1465 = _RESERVED_IDENTIFIER_FIXUP_1436 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3701.y = _RESERVED_IDENTIFIER_FIXUP_1465;
        float _RESERVED_IDENTIFIER_FIXUP_1470 = (_RESERVED_IDENTIFIER_FIXUP_1465 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3701.y = _RESERVED_IDENTIFIER_FIXUP_1470;
        _RESERVED_IDENTIFIER_FIXUP_3701.x = (_RESERVED_IDENTIFIER_FIXUP_1318 * _RESERVED_IDENTIFIER_FIXUP_1470) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3681 = _RESERVED_IDENTIFIER_FIXUP_3701;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3002 = _RESERVED_IDENTIFIER_FIXUP_2992;
        _RESERVED_IDENTIFIER_FIXUP_3002.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3681 = _RESERVED_IDENTIFIER_FIXUP_3002;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1488 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3070 = _RESERVED_IDENTIFIER_FIXUP_3681;
    _RESERVED_IDENTIFIER_FIXUP_3070.y = _RESERVED_IDENTIFIER_FIXUP_1488;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3686;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3684;
    if (_RESERVED_IDENTIFIER_FIXUP_1488 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1497 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1507 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3210 = _RESERVED_IDENTIFIER_FIXUP_3070;
        _RESERVED_IDENTIFIER_FIXUP_3210.y = _RESERVED_IDENTIFIER_FIXUP_1507.x;
        _RESERVED_IDENTIFIER_FIXUP_3210.z = _RESERVED_IDENTIFIER_FIXUP_1507.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_3210.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3214;
        _RESERVED_IDENTIFIER_FIXUP_3214.x = _RESERVED_IDENTIFIER_FIXUP_1517.x;
        _RESERVED_IDENTIFIER_FIXUP_3214.y = _RESERVED_IDENTIFIER_FIXUP_1517.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1524 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1528 = _RESERVED_IDENTIFIER_FIXUP_1524.y;
        _RESERVED_IDENTIFIER_FIXUP_3214.w = _RESERVED_IDENTIFIER_FIXUP_1528;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1497.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1497.w;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3214.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1528;
        float _RESERVED_IDENTIFIER_FIXUP_1539 = hdLod6(param_14, param_15).x + hdLod6(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3210.w = _RESERVED_IDENTIFIER_FIXUP_1539;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_3210.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3227;
        _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_1546.x;
        _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_1546.y;
        _RESERVED_IDENTIFIER_FIXUP_3227.w = _RESERVED_IDENTIFIER_FIXUP_1528;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3227.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1528;
        float _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_1539 + hdLod6(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3210.w = _RESERVED_IDENTIFIER_FIXUP_1568;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1575 = _RESERVED_IDENTIFIER_FIXUP_3210.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3240;
        _RESERVED_IDENTIFIER_FIXUP_3240.x = _RESERVED_IDENTIFIER_FIXUP_1575.x;
        _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_1575.y;
        _RESERVED_IDENTIFIER_FIXUP_3240.w = _RESERVED_IDENTIFIER_FIXUP_1528;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3240.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1528;
        float _RESERVED_IDENTIFIER_FIXUP_1597 = _RESERVED_IDENTIFIER_FIXUP_1568 + hdLod6(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_3210.w = _RESERVED_IDENTIFIER_FIXUP_1597;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1604 = _RESERVED_IDENTIFIER_FIXUP_3210.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3253;
        _RESERVED_IDENTIFIER_FIXUP_3253.x = _RESERVED_IDENTIFIER_FIXUP_1604.x;
        _RESERVED_IDENTIFIER_FIXUP_3253.y = _RESERVED_IDENTIFIER_FIXUP_1604.y;
        _RESERVED_IDENTIFIER_FIXUP_3253.w = _RESERVED_IDENTIFIER_FIXUP_1528;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3253.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1528;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1621 = hdLod6(param_22, param_23);
        float _RESERVED_IDENTIFIER_FIXUP_1626 = _RESERVED_IDENTIFIER_FIXUP_1597 + _RESERVED_IDENTIFIER_FIXUP_1621.x;
        _RESERVED_IDENTIFIER_FIXUP_3210.y = _RESERVED_IDENTIFIER_FIXUP_1626;
        _RESERVED_IDENTIFIER_FIXUP_3210.y = _RESERVED_IDENTIFIER_FIXUP_1626 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3686 = _RESERVED_IDENTIFIER_FIXUP_1621;
        _RESERVED_IDENTIFIER_FIXUP_3684 = _RESERVED_IDENTIFIER_FIXUP_3210;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1639 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3075 = _RESERVED_IDENTIFIER_FIXUP_3070;
        _RESERVED_IDENTIFIER_FIXUP_3075.z = _RESERVED_IDENTIFIER_FIXUP_1639;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3687;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3685;
        if (_RESERVED_IDENTIFIER_FIXUP_1639 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1648 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1648.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1648.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1654 = hdLod7(param_24, param_25);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1658 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3150 = _RESERVED_IDENTIFIER_FIXUP_3075;
            _RESERVED_IDENTIFIER_FIXUP_3150.z = _RESERVED_IDENTIFIER_FIXUP_1658.x;
            _RESERVED_IDENTIFIER_FIXUP_3150.w = _RESERVED_IDENTIFIER_FIXUP_1658.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1668 = _RESERVED_IDENTIFIER_FIXUP_3150.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3154;
            _RESERVED_IDENTIFIER_FIXUP_3154.x = _RESERVED_IDENTIFIER_FIXUP_1668.x;
            _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_1668.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1675 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1679 = _RESERVED_IDENTIFIER_FIXUP_1675.y;
            _RESERVED_IDENTIFIER_FIXUP_3154.w = _RESERVED_IDENTIFIER_FIXUP_1679;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3154.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1679;
            float _RESERVED_IDENTIFIER_FIXUP_1690 = _RESERVED_IDENTIFIER_FIXUP_1654.x + hdLod7(param_26, param_27).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3165 = _RESERVED_IDENTIFIER_FIXUP_1654;
            _RESERVED_IDENTIFIER_FIXUP_3165.x = _RESERVED_IDENTIFIER_FIXUP_1690;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_3150.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3167;
            _RESERVED_IDENTIFIER_FIXUP_3167.x = _RESERVED_IDENTIFIER_FIXUP_1697.x;
            _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1697.y;
            _RESERVED_IDENTIFIER_FIXUP_3167.w = _RESERVED_IDENTIFIER_FIXUP_1679;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3167.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1679;
            float _RESERVED_IDENTIFIER_FIXUP_1719 = _RESERVED_IDENTIFIER_FIXUP_1690 + hdLod7(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_3165.x = _RESERVED_IDENTIFIER_FIXUP_1719;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1726 = _RESERVED_IDENTIFIER_FIXUP_3150.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3180;
            _RESERVED_IDENTIFIER_FIXUP_3180.x = _RESERVED_IDENTIFIER_FIXUP_1726.x;
            _RESERVED_IDENTIFIER_FIXUP_3180.y = _RESERVED_IDENTIFIER_FIXUP_1726.y;
            _RESERVED_IDENTIFIER_FIXUP_3180.w = _RESERVED_IDENTIFIER_FIXUP_1679;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3180.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1679;
            float _RESERVED_IDENTIFIER_FIXUP_1748 = _RESERVED_IDENTIFIER_FIXUP_1719 + hdLod7(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_3165.x = _RESERVED_IDENTIFIER_FIXUP_1748;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1755 = _RESERVED_IDENTIFIER_FIXUP_3150.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3193;
            _RESERVED_IDENTIFIER_FIXUP_3193.x = _RESERVED_IDENTIFIER_FIXUP_1755.x;
            _RESERVED_IDENTIFIER_FIXUP_3193.y = _RESERVED_IDENTIFIER_FIXUP_1755.y;
            _RESERVED_IDENTIFIER_FIXUP_3193.w = _RESERVED_IDENTIFIER_FIXUP_1679;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3193.xy;
            float param_33 = _RESERVED_IDENTIFIER_FIXUP_1679;
            float _RESERVED_IDENTIFIER_FIXUP_1777 = _RESERVED_IDENTIFIER_FIXUP_1748 + hdLod7(param_32, param_33).x;
            _RESERVED_IDENTIFIER_FIXUP_3150.z = _RESERVED_IDENTIFIER_FIXUP_1777;
            _RESERVED_IDENTIFIER_FIXUP_3150.y = _RESERVED_IDENTIFIER_FIXUP_1777 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3687 = _RESERVED_IDENTIFIER_FIXUP_3165;
            _RESERVED_IDENTIFIER_FIXUP_3685 = _RESERVED_IDENTIFIER_FIXUP_3150;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3079 = _RESERVED_IDENTIFIER_FIXUP_3075;
            _RESERVED_IDENTIFIER_FIXUP_3079.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3079.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1793 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1797 = _RESERVED_IDENTIFIER_FIXUP_1793.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3702 = vec4(_RESERVED_IDENTIFIER_FIXUP_1793.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1797);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1808 = _RESERVED_IDENTIFIER_FIXUP_3702.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3703 = vec4(_RESERVED_IDENTIFIER_FIXUP_1808 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1797);
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_1808;
            float param_35 = _RESERVED_IDENTIFIER_FIXUP_1797;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3703.xy;
            float param_37 = _RESERVED_IDENTIFIER_FIXUP_1797;
            float _RESERVED_IDENTIFIER_FIXUP_1838 = hdLod8(param_34, param_35).x + hdLod8(param_36, param_37).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3106 = _RESERVED_IDENTIFIER_FIXUP_3702;
            _RESERVED_IDENTIFIER_FIXUP_3106.z = _RESERVED_IDENTIFIER_FIXUP_1838;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1845 = _RESERVED_IDENTIFIER_FIXUP_3106.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3108 = _RESERVED_IDENTIFIER_FIXUP_3703;
            _RESERVED_IDENTIFIER_FIXUP_3108.x = _RESERVED_IDENTIFIER_FIXUP_1845.x;
            _RESERVED_IDENTIFIER_FIXUP_3108.y = _RESERVED_IDENTIFIER_FIXUP_1845.y;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3108.xy;
            float param_39 = _RESERVED_IDENTIFIER_FIXUP_1797;
            float _RESERVED_IDENTIFIER_FIXUP_1860 = _RESERVED_IDENTIFIER_FIXUP_1838 + hdLod8(param_38, param_39).x;
            _RESERVED_IDENTIFIER_FIXUP_3106.z = _RESERVED_IDENTIFIER_FIXUP_1860;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1867 = _RESERVED_IDENTIFIER_FIXUP_3106.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3117 = _RESERVED_IDENTIFIER_FIXUP_3108;
            _RESERVED_IDENTIFIER_FIXUP_3117.x = _RESERVED_IDENTIFIER_FIXUP_1867.x;
            _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1867.y;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3117.xy;
            float param_41 = _RESERVED_IDENTIFIER_FIXUP_1797;
            float _RESERVED_IDENTIFIER_FIXUP_1882 = _RESERVED_IDENTIFIER_FIXUP_1860 + hdLod8(param_40, param_41).x;
            _RESERVED_IDENTIFIER_FIXUP_3106.z = _RESERVED_IDENTIFIER_FIXUP_1882;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1889 = _RESERVED_IDENTIFIER_FIXUP_3106.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3126 = _RESERVED_IDENTIFIER_FIXUP_3117;
            _RESERVED_IDENTIFIER_FIXUP_3126.x = _RESERVED_IDENTIFIER_FIXUP_1889.x;
            _RESERVED_IDENTIFIER_FIXUP_3126.y = _RESERVED_IDENTIFIER_FIXUP_1889.y;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3126.xy;
            float param_43 = _RESERVED_IDENTIFIER_FIXUP_1797;
            float _RESERVED_IDENTIFIER_FIXUP_1904 = _RESERVED_IDENTIFIER_FIXUP_1882 + hdLod8(param_42, param_43).x;
            _RESERVED_IDENTIFIER_FIXUP_3106.x = _RESERVED_IDENTIFIER_FIXUP_1904;
            float _RESERVED_IDENTIFIER_FIXUP_1912 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3106.y = _RESERVED_IDENTIFIER_FIXUP_1912;
            float _RESERVED_IDENTIFIER_FIXUP_1918 = clamp((_RESERVED_IDENTIFIER_FIXUP_1912 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3079.z = _RESERVED_IDENTIFIER_FIXUP_1918;
            float _RESERVED_IDENTIFIER_FIXUP_1923 = (_RESERVED_IDENTIFIER_FIXUP_1904 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3079.w = _RESERVED_IDENTIFIER_FIXUP_1923;
            _RESERVED_IDENTIFIER_FIXUP_3079.y = (_RESERVED_IDENTIFIER_FIXUP_1918 * _RESERVED_IDENTIFIER_FIXUP_1923) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3687 = _RESERVED_IDENTIFIER_FIXUP_3106;
            _RESERVED_IDENTIFIER_FIXUP_3685 = _RESERVED_IDENTIFIER_FIXUP_3079;
        }
        _RESERVED_IDENTIFIER_FIXUP_3686 = _RESERVED_IDENTIFIER_FIXUP_3687;
        _RESERVED_IDENTIFIER_FIXUP_3684 = _RESERVED_IDENTIFIER_FIXUP_3685;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1938 = min(_RESERVED_IDENTIFIER_FIXUP_3684.y, _RESERVED_IDENTIFIER_FIXUP_3684.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3271 = _RESERVED_IDENTIFIER_FIXUP_3686;
    _RESERVED_IDENTIFIER_FIXUP_3271.x = _RESERVED_IDENTIFIER_FIXUP_1938;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3704 = vec4((_RESERVED_IDENTIFIER_FIXUP_1938 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1960 = _RESERVED_IDENTIFIER_FIXUP_3271.xxx * _RESERVED_IDENTIFIER_FIXUP_3704.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1962 = _RESERVED_IDENTIFIER_FIXUP_1960.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3282 = _RESERVED_IDENTIFIER_FIXUP_3704;
    _RESERVED_IDENTIFIER_FIXUP_3282.y = _RESERVED_IDENTIFIER_FIXUP_1962;
    _RESERVED_IDENTIFIER_FIXUP_3282.z = _RESERVED_IDENTIFIER_FIXUP_1960.y;
    _RESERVED_IDENTIFIER_FIXUP_3282.w = _RESERVED_IDENTIFIER_FIXUP_1960.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1974 = (mix(_RESERVED_IDENTIFIER_FIXUP_1300, _RESERVED_IDENTIFIER_FIXUP_2984, _RESERVED_IDENTIFIER_FIXUP_1172.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_3282.xxx) + _RESERVED_IDENTIFIER_FIXUP_3282.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3705 = vec4(_RESERVED_IDENTIFIER_FIXUP_1974.x, _RESERVED_IDENTIFIER_FIXUP_1962, _RESERVED_IDENTIFIER_FIXUP_1960.yz);
    _RESERVED_IDENTIFIER_FIXUP_3705.y = _RESERVED_IDENTIFIER_FIXUP_1974.y;
    _RESERVED_IDENTIFIER_FIXUP_3705.z = _RESERVED_IDENTIFIER_FIXUP_1974.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1987 = _RESERVED_IDENTIFIER_FIXUP_3705.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3294 = _RESERVED_IDENTIFIER_FIXUP_3705;
    _RESERVED_IDENTIFIER_FIXUP_3294.x = _RESERVED_IDENTIFIER_FIXUP_1987.x;
    _RESERVED_IDENTIFIER_FIXUP_3294.y = _RESERVED_IDENTIFIER_FIXUP_1987.y;
    _RESERVED_IDENTIFIER_FIXUP_3294.z = _RESERVED_IDENTIFIER_FIXUP_1987.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2044 = OptTex0( texcoord0.xyz);
    vec2 param_44 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2048 = hdTex1(param_44);
    vec2 param_45 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2052 = hdTex2(param_45);
    vec2 param_46 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2056 = hdTex3(param_46);
    vec2 param_47 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2060 = hdTex4(param_47);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2068 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3308;
    _RESERVED_IDENTIFIER_FIXUP_3308.x = _RESERVED_IDENTIFIER_FIXUP_2068.x;
    _RESERVED_IDENTIFIER_FIXUP_3308.y = _RESERVED_IDENTIFIER_FIXUP_2068.y;
    _RESERVED_IDENTIFIER_FIXUP_3308.z = _RESERVED_IDENTIFIER_FIXUP_2068.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2076 = _RESERVED_IDENTIFIER_FIXUP_2044.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2079 = _RESERVED_IDENTIFIER_FIXUP_2076 * _RESERVED_IDENTIFIER_FIXUP_3308.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3314;
    _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_2079.x;
    _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_2079.y;
    _RESERVED_IDENTIFIER_FIXUP_3314.z = _RESERVED_IDENTIFIER_FIXUP_2079.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2094 = mix(_RESERVED_IDENTIFIER_FIXUP_3314.xyz, _RESERVED_IDENTIFIER_FIXUP_2076, _RESERVED_IDENTIFIER_FIXUP_1205);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3320 = _RESERVED_IDENTIFIER_FIXUP_2044;
    _RESERVED_IDENTIFIER_FIXUP_3320.x = _RESERVED_IDENTIFIER_FIXUP_2094.x;
    _RESERVED_IDENTIFIER_FIXUP_3320.y = _RESERVED_IDENTIFIER_FIXUP_2094.y;
    _RESERVED_IDENTIFIER_FIXUP_3320.z = _RESERVED_IDENTIFIER_FIXUP_2094.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2102 = _RESERVED_IDENTIFIER_FIXUP_2048.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2105 = _RESERVED_IDENTIFIER_FIXUP_2102 * _RESERVED_IDENTIFIER_FIXUP_3308.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3326;
    _RESERVED_IDENTIFIER_FIXUP_3326.x = _RESERVED_IDENTIFIER_FIXUP_2105.x;
    _RESERVED_IDENTIFIER_FIXUP_3326.y = _RESERVED_IDENTIFIER_FIXUP_2105.y;
    _RESERVED_IDENTIFIER_FIXUP_3326.z = _RESERVED_IDENTIFIER_FIXUP_2105.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2120 = mix(_RESERVED_IDENTIFIER_FIXUP_3326.xyz, _RESERVED_IDENTIFIER_FIXUP_2102, _RESERVED_IDENTIFIER_FIXUP_1231);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3332 = _RESERVED_IDENTIFIER_FIXUP_2048;
    _RESERVED_IDENTIFIER_FIXUP_3332.x = _RESERVED_IDENTIFIER_FIXUP_2120.x;
    _RESERVED_IDENTIFIER_FIXUP_3332.y = _RESERVED_IDENTIFIER_FIXUP_2120.y;
    _RESERVED_IDENTIFIER_FIXUP_3332.z = _RESERVED_IDENTIFIER_FIXUP_2120.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2128 = _RESERVED_IDENTIFIER_FIXUP_2052.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2131 = _RESERVED_IDENTIFIER_FIXUP_2128 * _RESERVED_IDENTIFIER_FIXUP_3308.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3338;
    _RESERVED_IDENTIFIER_FIXUP_3338.x = _RESERVED_IDENTIFIER_FIXUP_2131.x;
    _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_2131.y;
    _RESERVED_IDENTIFIER_FIXUP_3338.z = _RESERVED_IDENTIFIER_FIXUP_2131.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2146 = mix(_RESERVED_IDENTIFIER_FIXUP_3338.xyz, _RESERVED_IDENTIFIER_FIXUP_2128, _RESERVED_IDENTIFIER_FIXUP_1257);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3344 = _RESERVED_IDENTIFIER_FIXUP_2052;
    _RESERVED_IDENTIFIER_FIXUP_3344.x = _RESERVED_IDENTIFIER_FIXUP_2146.x;
    _RESERVED_IDENTIFIER_FIXUP_3344.y = _RESERVED_IDENTIFIER_FIXUP_2146.y;
    _RESERVED_IDENTIFIER_FIXUP_3344.z = _RESERVED_IDENTIFIER_FIXUP_2146.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2154 = _RESERVED_IDENTIFIER_FIXUP_2056.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2157 = _RESERVED_IDENTIFIER_FIXUP_2154 * _RESERVED_IDENTIFIER_FIXUP_3308.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3350 = _RESERVED_IDENTIFIER_FIXUP_1175;
    _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_2157.x;
    _RESERVED_IDENTIFIER_FIXUP_3350.y = _RESERVED_IDENTIFIER_FIXUP_2157.y;
    _RESERVED_IDENTIFIER_FIXUP_3350.z = _RESERVED_IDENTIFIER_FIXUP_2157.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2172 = mix(_RESERVED_IDENTIFIER_FIXUP_3350.xyz, _RESERVED_IDENTIFIER_FIXUP_2154, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3350.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3356 = _RESERVED_IDENTIFIER_FIXUP_2056;
    _RESERVED_IDENTIFIER_FIXUP_3356.x = _RESERVED_IDENTIFIER_FIXUP_2172.x;
    _RESERVED_IDENTIFIER_FIXUP_3356.y = _RESERVED_IDENTIFIER_FIXUP_2172.y;
    _RESERVED_IDENTIFIER_FIXUP_3356.z = _RESERVED_IDENTIFIER_FIXUP_2172.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2188 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3320, _RESERVED_IDENTIFIER_FIXUP_3332, _RESERVED_IDENTIFIER_FIXUP_2060.xxxx), _RESERVED_IDENTIFIER_FIXUP_3344, _RESERVED_IDENTIFIER_FIXUP_2060.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2193 = mix(_RESERVED_IDENTIFIER_FIXUP_2188, _RESERVED_IDENTIFIER_FIXUP_3356, _RESERVED_IDENTIFIER_FIXUP_2060.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3364 = _RESERVED_IDENTIFIER_FIXUP_2188;
    _RESERVED_IDENTIFIER_FIXUP_3364.x = _RESERVED_IDENTIFIER_FIXUP_1312;
    float _RESERVED_IDENTIFIER_FIXUP_2206 = clamp((_RESERVED_IDENTIFIER_FIXUP_1312 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3364.x = _RESERVED_IDENTIFIER_FIXUP_2206;
    float _RESERVED_IDENTIFIER_FIXUP_2212 = ((-_RESERVED_IDENTIFIER_FIXUP_2206) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3364.y = _RESERVED_IDENTIFIER_FIXUP_2212;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3691;
    if (_RESERVED_IDENTIFIER_FIXUP_2212 != (-_RESERVED_IDENTIFIER_FIXUP_2212))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2224 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2234 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_2236 = _RESERVED_IDENTIFIER_FIXUP_2234.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3377 = _RESERVED_IDENTIFIER_FIXUP_3364;
        _RESERVED_IDENTIFIER_FIXUP_3377.y = _RESERVED_IDENTIFIER_FIXUP_2236;
        _RESERVED_IDENTIFIER_FIXUP_3377.z = _RESERVED_IDENTIFIER_FIXUP_2234.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2244 = _RESERVED_IDENTIFIER_FIXUP_3377.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3381;
        _RESERVED_IDENTIFIER_FIXUP_3381.x = _RESERVED_IDENTIFIER_FIXUP_2244.x;
        _RESERVED_IDENTIFIER_FIXUP_3381.y = _RESERVED_IDENTIFIER_FIXUP_2244.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2251 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2255 = _RESERVED_IDENTIFIER_FIXUP_2251.y;
        _RESERVED_IDENTIFIER_FIXUP_3381.w = _RESERVED_IDENTIFIER_FIXUP_2255;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2224.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2224.w;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3381.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2255;
        float _RESERVED_IDENTIFIER_FIXUP_2266 = hdLod5(param_48, param_49).x + hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3707 = vec4(_RESERVED_IDENTIFIER_FIXUP_2206, _RESERVED_IDENTIFIER_FIXUP_2236, _RESERVED_IDENTIFIER_FIXUP_2234.y, _RESERVED_IDENTIFIER_FIXUP_2266);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2273 = _RESERVED_IDENTIFIER_FIXUP_3707.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3394;
        _RESERVED_IDENTIFIER_FIXUP_3394.x = _RESERVED_IDENTIFIER_FIXUP_2273.x;
        _RESERVED_IDENTIFIER_FIXUP_3394.y = _RESERVED_IDENTIFIER_FIXUP_2273.y;
        _RESERVED_IDENTIFIER_FIXUP_3394.w = _RESERVED_IDENTIFIER_FIXUP_2255;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3394.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2255;
        float _RESERVED_IDENTIFIER_FIXUP_2295 = _RESERVED_IDENTIFIER_FIXUP_2266 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3707.w = _RESERVED_IDENTIFIER_FIXUP_2295;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2302 = _RESERVED_IDENTIFIER_FIXUP_3707.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3407;
        _RESERVED_IDENTIFIER_FIXUP_3407.x = _RESERVED_IDENTIFIER_FIXUP_2302.x;
        _RESERVED_IDENTIFIER_FIXUP_3407.y = _RESERVED_IDENTIFIER_FIXUP_2302.y;
        _RESERVED_IDENTIFIER_FIXUP_3407.w = _RESERVED_IDENTIFIER_FIXUP_2255;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3407.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2255;
        float _RESERVED_IDENTIFIER_FIXUP_2324 = _RESERVED_IDENTIFIER_FIXUP_2295 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3707.w = _RESERVED_IDENTIFIER_FIXUP_2324;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2331 = _RESERVED_IDENTIFIER_FIXUP_3707.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3420;
        _RESERVED_IDENTIFIER_FIXUP_3420.x = _RESERVED_IDENTIFIER_FIXUP_2331.x;
        _RESERVED_IDENTIFIER_FIXUP_3420.y = _RESERVED_IDENTIFIER_FIXUP_2331.y;
        _RESERVED_IDENTIFIER_FIXUP_3420.w = _RESERVED_IDENTIFIER_FIXUP_2255;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3420.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2255;
        float _RESERVED_IDENTIFIER_FIXUP_2353 = _RESERVED_IDENTIFIER_FIXUP_2324 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3707.y = _RESERVED_IDENTIFIER_FIXUP_2353;
        float _RESERVED_IDENTIFIER_FIXUP_2358 = (_RESERVED_IDENTIFIER_FIXUP_2353 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3707.y = _RESERVED_IDENTIFIER_FIXUP_2358;
        _RESERVED_IDENTIFIER_FIXUP_3707.x = (_RESERVED_IDENTIFIER_FIXUP_2206 * _RESERVED_IDENTIFIER_FIXUP_2358) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3691 = _RESERVED_IDENTIFIER_FIXUP_3707;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3374 = _RESERVED_IDENTIFIER_FIXUP_3364;
        _RESERVED_IDENTIFIER_FIXUP_3374.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3691 = _RESERVED_IDENTIFIER_FIXUP_3374;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3442 = _RESERVED_IDENTIFIER_FIXUP_3691;
    _RESERVED_IDENTIFIER_FIXUP_3442.y = _RESERVED_IDENTIFIER_FIXUP_1488;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3696;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3694;
    if (_RESERVED_IDENTIFIER_FIXUP_1488 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2385 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2395 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3582 = _RESERVED_IDENTIFIER_FIXUP_3442;
        _RESERVED_IDENTIFIER_FIXUP_3582.y = _RESERVED_IDENTIFIER_FIXUP_2395.x;
        _RESERVED_IDENTIFIER_FIXUP_3582.z = _RESERVED_IDENTIFIER_FIXUP_2395.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2405 = _RESERVED_IDENTIFIER_FIXUP_3582.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3586;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_2405.x;
        _RESERVED_IDENTIFIER_FIXUP_3586.y = _RESERVED_IDENTIFIER_FIXUP_2405.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2412 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2416 = _RESERVED_IDENTIFIER_FIXUP_2412.y;
        _RESERVED_IDENTIFIER_FIXUP_3586.w = _RESERVED_IDENTIFIER_FIXUP_2416;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2385.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2385.w;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3586.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2416;
        float _RESERVED_IDENTIFIER_FIXUP_2427 = hdLod6(param_58, param_59).x + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3582.w = _RESERVED_IDENTIFIER_FIXUP_2427;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2434 = _RESERVED_IDENTIFIER_FIXUP_3582.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3599;
        _RESERVED_IDENTIFIER_FIXUP_3599.x = _RESERVED_IDENTIFIER_FIXUP_2434.x;
        _RESERVED_IDENTIFIER_FIXUP_3599.y = _RESERVED_IDENTIFIER_FIXUP_2434.y;
        _RESERVED_IDENTIFIER_FIXUP_3599.w = _RESERVED_IDENTIFIER_FIXUP_2416;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3599.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2416;
        float _RESERVED_IDENTIFIER_FIXUP_2456 = _RESERVED_IDENTIFIER_FIXUP_2427 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3582.w = _RESERVED_IDENTIFIER_FIXUP_2456;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2463 = _RESERVED_IDENTIFIER_FIXUP_3582.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3612;
        _RESERVED_IDENTIFIER_FIXUP_3612.x = _RESERVED_IDENTIFIER_FIXUP_2463.x;
        _RESERVED_IDENTIFIER_FIXUP_3612.y = _RESERVED_IDENTIFIER_FIXUP_2463.y;
        _RESERVED_IDENTIFIER_FIXUP_3612.w = _RESERVED_IDENTIFIER_FIXUP_2416;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3612.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2416;
        float _RESERVED_IDENTIFIER_FIXUP_2485 = _RESERVED_IDENTIFIER_FIXUP_2456 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3582.w = _RESERVED_IDENTIFIER_FIXUP_2485;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2492 = _RESERVED_IDENTIFIER_FIXUP_3582.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3625;
        _RESERVED_IDENTIFIER_FIXUP_3625.x = _RESERVED_IDENTIFIER_FIXUP_2492.x;
        _RESERVED_IDENTIFIER_FIXUP_3625.y = _RESERVED_IDENTIFIER_FIXUP_2492.y;
        _RESERVED_IDENTIFIER_FIXUP_3625.w = _RESERVED_IDENTIFIER_FIXUP_2416;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3625.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2416;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2509 = hdLod6(param_66, param_67);
        float _RESERVED_IDENTIFIER_FIXUP_2514 = _RESERVED_IDENTIFIER_FIXUP_2485 + _RESERVED_IDENTIFIER_FIXUP_2509.x;
        _RESERVED_IDENTIFIER_FIXUP_3582.y = _RESERVED_IDENTIFIER_FIXUP_2514;
        _RESERVED_IDENTIFIER_FIXUP_3582.y = _RESERVED_IDENTIFIER_FIXUP_2514 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3696 = _RESERVED_IDENTIFIER_FIXUP_2509;
        _RESERVED_IDENTIFIER_FIXUP_3694 = _RESERVED_IDENTIFIER_FIXUP_3582;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2527 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3447 = _RESERVED_IDENTIFIER_FIXUP_3442;
        _RESERVED_IDENTIFIER_FIXUP_3447.z = _RESERVED_IDENTIFIER_FIXUP_2527;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3697;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3695;
        if (_RESERVED_IDENTIFIER_FIXUP_2527 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2536 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2536.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2536.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2542 = hdLod7(param_68, param_69);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2546 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3522 = _RESERVED_IDENTIFIER_FIXUP_3447;
            _RESERVED_IDENTIFIER_FIXUP_3522.z = _RESERVED_IDENTIFIER_FIXUP_2546.x;
            _RESERVED_IDENTIFIER_FIXUP_3522.w = _RESERVED_IDENTIFIER_FIXUP_2546.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2556 = _RESERVED_IDENTIFIER_FIXUP_3522.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3526;
            _RESERVED_IDENTIFIER_FIXUP_3526.x = _RESERVED_IDENTIFIER_FIXUP_2556.x;
            _RESERVED_IDENTIFIER_FIXUP_3526.y = _RESERVED_IDENTIFIER_FIXUP_2556.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2563 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2567 = _RESERVED_IDENTIFIER_FIXUP_2563.y;
            _RESERVED_IDENTIFIER_FIXUP_3526.w = _RESERVED_IDENTIFIER_FIXUP_2567;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3526.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2567;
            float _RESERVED_IDENTIFIER_FIXUP_2578 = _RESERVED_IDENTIFIER_FIXUP_2542.x + hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3537 = _RESERVED_IDENTIFIER_FIXUP_2542;
            _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_2578;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2585 = _RESERVED_IDENTIFIER_FIXUP_3522.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3539;
            _RESERVED_IDENTIFIER_FIXUP_3539.x = _RESERVED_IDENTIFIER_FIXUP_2585.x;
            _RESERVED_IDENTIFIER_FIXUP_3539.y = _RESERVED_IDENTIFIER_FIXUP_2585.y;
            _RESERVED_IDENTIFIER_FIXUP_3539.w = _RESERVED_IDENTIFIER_FIXUP_2567;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3539.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2567;
            float _RESERVED_IDENTIFIER_FIXUP_2607 = _RESERVED_IDENTIFIER_FIXUP_2578 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_2607;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2614 = _RESERVED_IDENTIFIER_FIXUP_3522.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3552;
            _RESERVED_IDENTIFIER_FIXUP_3552.x = _RESERVED_IDENTIFIER_FIXUP_2614.x;
            _RESERVED_IDENTIFIER_FIXUP_3552.y = _RESERVED_IDENTIFIER_FIXUP_2614.y;
            _RESERVED_IDENTIFIER_FIXUP_3552.w = _RESERVED_IDENTIFIER_FIXUP_2567;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3552.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2567;
            float _RESERVED_IDENTIFIER_FIXUP_2636 = _RESERVED_IDENTIFIER_FIXUP_2607 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_2636;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2643 = _RESERVED_IDENTIFIER_FIXUP_3522.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3565;
            _RESERVED_IDENTIFIER_FIXUP_3565.x = _RESERVED_IDENTIFIER_FIXUP_2643.x;
            _RESERVED_IDENTIFIER_FIXUP_3565.y = _RESERVED_IDENTIFIER_FIXUP_2643.y;
            _RESERVED_IDENTIFIER_FIXUP_3565.w = _RESERVED_IDENTIFIER_FIXUP_2567;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3565.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2567;
            float _RESERVED_IDENTIFIER_FIXUP_2665 = _RESERVED_IDENTIFIER_FIXUP_2636 + hdLod7(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3522.z = _RESERVED_IDENTIFIER_FIXUP_2665;
            _RESERVED_IDENTIFIER_FIXUP_3522.y = _RESERVED_IDENTIFIER_FIXUP_2665 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3697 = _RESERVED_IDENTIFIER_FIXUP_3537;
            _RESERVED_IDENTIFIER_FIXUP_3695 = _RESERVED_IDENTIFIER_FIXUP_3522;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3451 = _RESERVED_IDENTIFIER_FIXUP_3447;
            _RESERVED_IDENTIFIER_FIXUP_3451.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3451.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2681 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2685 = _RESERVED_IDENTIFIER_FIXUP_2681.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3708 = vec4(_RESERVED_IDENTIFIER_FIXUP_2681.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2685);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2696 = _RESERVED_IDENTIFIER_FIXUP_3708.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3709 = vec4(_RESERVED_IDENTIFIER_FIXUP_2696 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2685);
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2696;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2685;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3709.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2685;
            float _RESERVED_IDENTIFIER_FIXUP_2726 = hdLod8(param_78, param_79).x + hdLod8(param_80, param_81).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3478 = _RESERVED_IDENTIFIER_FIXUP_3708;
            _RESERVED_IDENTIFIER_FIXUP_3478.z = _RESERVED_IDENTIFIER_FIXUP_2726;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2733 = _RESERVED_IDENTIFIER_FIXUP_3478.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3480 = _RESERVED_IDENTIFIER_FIXUP_3709;
            _RESERVED_IDENTIFIER_FIXUP_3480.x = _RESERVED_IDENTIFIER_FIXUP_2733.x;
            _RESERVED_IDENTIFIER_FIXUP_3480.y = _RESERVED_IDENTIFIER_FIXUP_2733.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3480.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2685;
            float _RESERVED_IDENTIFIER_FIXUP_2748 = _RESERVED_IDENTIFIER_FIXUP_2726 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3478.z = _RESERVED_IDENTIFIER_FIXUP_2748;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2755 = _RESERVED_IDENTIFIER_FIXUP_3478.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3489 = _RESERVED_IDENTIFIER_FIXUP_3480;
            _RESERVED_IDENTIFIER_FIXUP_3489.x = _RESERVED_IDENTIFIER_FIXUP_2755.x;
            _RESERVED_IDENTIFIER_FIXUP_3489.y = _RESERVED_IDENTIFIER_FIXUP_2755.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3489.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2685;
            float _RESERVED_IDENTIFIER_FIXUP_2770 = _RESERVED_IDENTIFIER_FIXUP_2748 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3478.z = _RESERVED_IDENTIFIER_FIXUP_2770;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2777 = _RESERVED_IDENTIFIER_FIXUP_3478.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3498 = _RESERVED_IDENTIFIER_FIXUP_3489;
            _RESERVED_IDENTIFIER_FIXUP_3498.x = _RESERVED_IDENTIFIER_FIXUP_2777.x;
            _RESERVED_IDENTIFIER_FIXUP_3498.y = _RESERVED_IDENTIFIER_FIXUP_2777.y;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3498.xy;
            float param_87 = _RESERVED_IDENTIFIER_FIXUP_2685;
            float _RESERVED_IDENTIFIER_FIXUP_2792 = _RESERVED_IDENTIFIER_FIXUP_2770 + hdLod8(param_86, param_87).x;
            _RESERVED_IDENTIFIER_FIXUP_3478.x = _RESERVED_IDENTIFIER_FIXUP_2792;
            float _RESERVED_IDENTIFIER_FIXUP_2800 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3478.y = _RESERVED_IDENTIFIER_FIXUP_2800;
            float _RESERVED_IDENTIFIER_FIXUP_2806 = clamp((_RESERVED_IDENTIFIER_FIXUP_2800 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3451.z = _RESERVED_IDENTIFIER_FIXUP_2806;
            float _RESERVED_IDENTIFIER_FIXUP_2811 = (_RESERVED_IDENTIFIER_FIXUP_2792 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3451.w = _RESERVED_IDENTIFIER_FIXUP_2811;
            _RESERVED_IDENTIFIER_FIXUP_3451.y = (_RESERVED_IDENTIFIER_FIXUP_2806 * _RESERVED_IDENTIFIER_FIXUP_2811) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3697 = _RESERVED_IDENTIFIER_FIXUP_3478;
            _RESERVED_IDENTIFIER_FIXUP_3695 = _RESERVED_IDENTIFIER_FIXUP_3451;
        }
        _RESERVED_IDENTIFIER_FIXUP_3696 = _RESERVED_IDENTIFIER_FIXUP_3697;
        _RESERVED_IDENTIFIER_FIXUP_3694 = _RESERVED_IDENTIFIER_FIXUP_3695;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2826 = min(_RESERVED_IDENTIFIER_FIXUP_3694.y, _RESERVED_IDENTIFIER_FIXUP_3694.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3643 = _RESERVED_IDENTIFIER_FIXUP_3696;
    _RESERVED_IDENTIFIER_FIXUP_3643.x = _RESERVED_IDENTIFIER_FIXUP_2826;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3710 = vec4((_RESERVED_IDENTIFIER_FIXUP_2826 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2193.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2848 = _RESERVED_IDENTIFIER_FIXUP_3643.xxx * _RESERVED_IDENTIFIER_FIXUP_3710.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2850 = _RESERVED_IDENTIFIER_FIXUP_2848.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3654 = _RESERVED_IDENTIFIER_FIXUP_3710;
    _RESERVED_IDENTIFIER_FIXUP_3654.y = _RESERVED_IDENTIFIER_FIXUP_2850;
    _RESERVED_IDENTIFIER_FIXUP_3654.z = _RESERVED_IDENTIFIER_FIXUP_2848.y;
    _RESERVED_IDENTIFIER_FIXUP_3654.w = _RESERVED_IDENTIFIER_FIXUP_2848.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2862 = (_RESERVED_IDENTIFIER_FIXUP_2193.xyz * _RESERVED_IDENTIFIER_FIXUP_3654.xxx) + _RESERVED_IDENTIFIER_FIXUP_3654.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3711 = vec4(_RESERVED_IDENTIFIER_FIXUP_2862.x, _RESERVED_IDENTIFIER_FIXUP_2850, _RESERVED_IDENTIFIER_FIXUP_2848.yz);
    _RESERVED_IDENTIFIER_FIXUP_3711.y = _RESERVED_IDENTIFIER_FIXUP_2862.y;
    _RESERVED_IDENTIFIER_FIXUP_3711.z = _RESERVED_IDENTIFIER_FIXUP_2862.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2875 = _RESERVED_IDENTIFIER_FIXUP_3711.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3666 = _RESERVED_IDENTIFIER_FIXUP_3711;
    _RESERVED_IDENTIFIER_FIXUP_3666.x = _RESERVED_IDENTIFIER_FIXUP_2875.x;
    _RESERVED_IDENTIFIER_FIXUP_3666.y = _RESERVED_IDENTIFIER_FIXUP_2875.y;
    _RESERVED_IDENTIFIER_FIXUP_3666.z = _RESERVED_IDENTIFIER_FIXUP_2875.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3666.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1014 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1023;
    if (_RESERVED_IDENTIFIER_FIXUP_1014)
    {
        _RESERVED_IDENTIFIER_FIXUP_1023 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1023 = _RESERVED_IDENTIFIER_FIXUP_1014;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1023)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1060 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3294.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1086 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2928;
    if (_RESERVED_IDENTIFIER_FIXUP_1060 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2928 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1060), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1086);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2928 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1086);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2928;
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 param_2 = v4.xy;
    r3 = hdTex3(param_2);
    vec2 param_3 = v4.wz;
    r4 = hdTex4(param_3);
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 hdB103 = v0.xyz + v0.xyz;
    r6.x = hdB103.x;
    r6.y = hdB103.y;
    r6.z = hdB103.z;
    vec3 hdB118 = r0.xyz * r6.xyz;
    r7.x = hdB118.x;
    r7.y = hdB118.y;
    r7.z = hdB118.z;
    vec4 hdB127 = r0;
    vec3 hdB136 = mix(r7.xyz, hdB127.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = hdB136.x;
    r0.y = hdB136.y;
    r0.z = hdB136.z;
    vec3 hdB147 = r1.xyz * r6.xyz;
    r7.x = hdB147.x;
    r7.y = hdB147.y;
    r7.z = hdB147.z;
    vec4 hdB156 = r1;
    vec3 hdB162 = mix(r7.xyz, hdB156.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = hdB162.x;
    r1.y = hdB162.y;
    r1.z = hdB162.z;
    vec3 hdB173 = r2.xyz * r6.xyz;
    r7.x = hdB173.x;
    r7.y = hdB173.y;
    r7.z = hdB173.z;
    vec4 hdB182 = r2;
    vec3 hdB188 = mix(r7.xyz, hdB182.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = hdB188.x;
    r2.y = hdB188.y;
    r2.z = hdB188.z;
    vec3 hdB199 = r3.xyz * r6.xyz;
    r5.x = hdB199.x;
    r5.y = hdB199.y;
    r5.z = hdB199.z;
    vec4 hdB208 = r3;
    vec3 hdB214 = mix(r5.xyz, hdB208.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = hdB214.x;
    r3.y = hdB214.y;
    r3.z = hdB214.z;
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB286 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB286.x;
        r0.z = hdB286.y;
        vec2 hdB297 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB297.x;
        r3.y = hdB297.y;
        vec2 hdB305 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB305.x;
        r3.w = hdB305.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r0.w = r2.x + r3.x;
        vec2 hdB328 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB328.x;
        r2.y = hdB328.y;
        vec2 hdB335 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB335.x;
        r2.w = hdB335.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r0.w += r2.x;
        vec2 hdB358 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB358.x;
        r2.y = hdB358.y;
        vec2 hdB365 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB365.x;
        r2.w = hdB365.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r0.w += r2.x;
        vec2 hdB388 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB388.x;
        r2.y = hdB388.y;
        vec2 hdB395 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB395.x;
        r2.w = hdB395.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
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
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod6(param_14, param_15);
        vec2 hdB455 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB455.x;
        r0.z = hdB455.y;
        vec2 hdB465 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB465.x;
        r3.y = hdB465.y;
        vec2 hdB472 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB472.x;
        r3.w = hdB472.y;
        vec2 param_16 = r3.xy;
        float param_17 = r3.w;
        r3 = hdLod6(param_16, param_17);
        r0.w = r2.x + r3.x;
        vec2 hdB494 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB494.x;
        r2.y = hdB494.y;
        vec2 hdB501 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB501.x;
        r2.w = hdB501.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod6(param_18, param_19);
        r0.w += r2.x;
        vec2 hdB523 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB523.x;
        r2.y = hdB523.y;
        vec2 hdB530 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB530.x;
        r2.w = hdB530.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod6(param_20, param_21);
        r0.w += r2.x;
        vec2 hdB552 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB552.x;
        r2.y = hdB552.y;
        vec2 hdB559 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB559.x;
        r2.w = hdB559.y;
        vec2 param_22 = r2.xy;
        float param_23 = r2.w;
        r2 = hdLod6(param_22, param_23);
        r0.y = r0.w + r2.x;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v7.x), abs(v7.y));
        if (r0.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod7(param_24, param_25);
            vec2 hdB608 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r0.z = hdB608.x;
            r0.w = hdB608.y;
            vec2 hdB618 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB618.x;
            r3.y = hdB618.y;
            vec2 hdB625 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB625.x;
            r3.w = hdB625.y;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r2.x += r3.x;
            vec2 hdB647 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB647.x;
            r3.y = hdB647.y;
            vec2 hdB654 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB654.x;
            r3.w = hdB654.y;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r2.x += r3.x;
            vec2 hdB676 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB676.x;
            r3.y = hdB676.y;
            vec2 hdB683 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB683.x;
            r3.w = hdB683.y;
            vec2 param_30 = r3.xy;
            float param_31 = r3.w;
            r3 = hdLod7(param_30, param_31);
            r2.x += r3.x;
            vec2 hdB705 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB705.x;
            r3.y = hdB705.y;
            vec2 hdB712 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB712.x;
            r3.w = hdB712.y;
            vec2 param_32 = r3.xy;
            float param_33 = r3.w;
            r3 = hdLod7(param_32, param_33);
            r0.z = r2.x + r3.x;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r0.z = v5.w;
            r0.w = v6.w;
            vec2 hdB744 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB744.x;
            r2.w = hdB744.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_34 = r2.xy;
            float param_35 = r2.w;
            r3 = hdLod8(param_34, param_35);
            vec2 hdB769 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB769.x;
            r4.y = hdB769.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r5 = hdLod8(param_36, param_37);
            r2.z = r3.x + r5.x;
            vec2 hdB797 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB797.x;
            r4.y = hdB797.y;
            vec2 param_38 = r4.xy;
            float param_39 = r4.w;
            r3 = hdLod8(param_38, param_39);
            r2.z += r3.x;
            vec2 hdB819 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB819.x;
            r4.y = hdB819.y;
            vec2 param_40 = r4.xy;
            float param_41 = r4.w;
            r3 = hdLod8(param_40, param_41);
            r2.z += r3.x;
            vec2 hdB841 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB841.x;
            r4.y = hdB841.y;
            vec2 param_42 = r4.xy;
            float param_43 = r4.w;
            r3 = hdLod8(param_42, param_43);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r0.z), abs(r0.w));
            r0.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.z * r0.w) + 1.0;
        }
    }
    r2.x = min(r0.y, r0.x);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB903 = r1.www * v1.xyz;
    r0.y = hdB903.x;
    r0.z = hdB903.y;
    r0.w = hdB903.z;
    vec4 hdB912 = r0;
    vec3 hdB914 = r2.xxx * hdB912.yzw;
    r0.y = hdB914.x;
    r0.z = hdB914.y;
    r0.w = hdB914.z;
    vec4 hdB923 = r0;
    vec4 hdB926 = r0;
    vec3 hdB928 = (r1.xyz * hdB923.xxx) + hdB926.yzw;
    r0.x = hdB928.x;
    r0.y = hdB928.y;
    r0.z = hdB928.z;
    vec4 hdB935 = r0;
    vec3 hdB942 = hdB935.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB942.x;
    r0.y = hdB942.y;
    r0.z = hdB942.z;
    vec3 hdB957 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB957.x;
    oC0.y = hdB957.y;
    oC0.z = hdB957.z;
    oC0.w = 1.0;
    bool hdB969 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB977;
    if (hdB969)
    {
        hdB977 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB977 = hdB969;
    }
    if (hdB977)
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
    bool _3584 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3594;
    if (_3584)
    {
        _3594 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 510u) != 0u;
    }
    else
    {
        _3594 = _3584;
    }
    if (_3594)
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
        bool _3619 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3634;
        if (!_3619)
        {
            _3634 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 510u) != 0u;
        }
        else
        {
            _3634 = _3619;
        }
        if (_3634)
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
