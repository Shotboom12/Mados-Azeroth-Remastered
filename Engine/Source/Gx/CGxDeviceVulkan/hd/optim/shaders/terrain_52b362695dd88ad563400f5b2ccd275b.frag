#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 6) in vec4 texcoord4;
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
float _RESERVED_IDENTIFIER_FIXUP_1460;
vec4 _RESERVED_IDENTIFIER_FIXUP_1461;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _53 = hdOverride >= 0;
    bool _73;
    if (_53)
    {
        _73 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _73 = _53;
    }
    vec4 _74;
    if (_73)
    {
        _74 = vec4(float(hdOverride));
    }
    else
    {
        _74 = value;
    }
    return _74;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _91 = hdOverride >= 0;
    bool _100;
    if (_91)
    {
        _100 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _100 = _91;
    }
    vec4 _101;
    if (_100)
    {
        _101 = vec4(float(hdOverride));
    }
    else
    {
        _101 = value;
    }
    return _101;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _118 = hdOverride >= 0;
    bool _127;
    if (_118)
    {
        _127 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _127 = _118;
    }
    vec4 _128;
    if (_127)
    {
        _128 = vec4(float(hdOverride));
    }
    else
    {
        _128 = value;
    }
    return _128;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _145 = hdOverride >= 0;
    bool _155;
    if (_145)
    {
        _155 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _155 = _145;
    }
    vec4 _156;
    if (_155)
    {
        _156 = vec4(float(hdOverride));
    }
    else
    {
        _156 = value;
    }
    return _156;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _173 = hdOverride >= 0;
    bool _183;
    if (_173)
    {
        _183 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _183 = _173;
    }
    vec4 _184;
    if (_183)
    {
        _184 = vec4(float(hdOverride));
    }
    else
    {
        _184 = value;
    }
    return _184;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_578 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_581 = _RESERVED_IDENTIFIER_FIXUP_578.xy;
    float _RESERVED_IDENTIFIER_FIXUP_583 = _RESERVED_IDENTIFIER_FIXUP_578.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_581;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_583;
    vec4 _RESERVED_IDENTIFIER_FIXUP_584 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_587 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_591 = _RESERVED_IDENTIFIER_FIXUP_587.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1214.w = _RESERVED_IDENTIFIER_FIXUP_591;
    vec2 _RESERVED_IDENTIFIER_FIXUP_595 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_597 = _RESERVED_IDENTIFIER_FIXUP_595.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1216 = _RESERVED_IDENTIFIER_FIXUP_584;
    _RESERVED_IDENTIFIER_FIXUP_1216.y = _RESERVED_IDENTIFIER_FIXUP_597;
    float _RESERVED_IDENTIFIER_FIXUP_599 = _RESERVED_IDENTIFIER_FIXUP_595.y;
    _RESERVED_IDENTIFIER_FIXUP_1216.z = _RESERVED_IDENTIFIER_FIXUP_599;
    vec2 _RESERVED_IDENTIFIER_FIXUP_605 = _RESERVED_IDENTIFIER_FIXUP_1216.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1220 = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1220.x = _RESERVED_IDENTIFIER_FIXUP_605.x;
    _RESERVED_IDENTIFIER_FIXUP_1220.y = _RESERVED_IDENTIFIER_FIXUP_605.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1220.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_591;
    float _RESERVED_IDENTIFIER_FIXUP_620 = _RESERVED_IDENTIFIER_FIXUP_584.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1216.x = _RESERVED_IDENTIFIER_FIXUP_620;
    vec2 _RESERVED_IDENTIFIER_FIXUP_634 = _RESERVED_IDENTIFIER_FIXUP_1216.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1233 = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1233.x = _RESERVED_IDENTIFIER_FIXUP_634.x;
    _RESERVED_IDENTIFIER_FIXUP_1233.y = _RESERVED_IDENTIFIER_FIXUP_634.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1233.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_591;
    float _RESERVED_IDENTIFIER_FIXUP_649 = _RESERVED_IDENTIFIER_FIXUP_620 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1216.x = _RESERVED_IDENTIFIER_FIXUP_649;
    vec2 _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_1216.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1242;
    _RESERVED_IDENTIFIER_FIXUP_1242.x = _RESERVED_IDENTIFIER_FIXUP_656.x;
    _RESERVED_IDENTIFIER_FIXUP_1242.y = _RESERVED_IDENTIFIER_FIXUP_656.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_666 = _RESERVED_IDENTIFIER_FIXUP_1216.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1246;
    _RESERVED_IDENTIFIER_FIXUP_1246.x = _RESERVED_IDENTIFIER_FIXUP_666.x;
    _RESERVED_IDENTIFIER_FIXUP_1246.y = _RESERVED_IDENTIFIER_FIXUP_666.y;
    _RESERVED_IDENTIFIER_FIXUP_1242.w = _RESERVED_IDENTIFIER_FIXUP_591;
    _RESERVED_IDENTIFIER_FIXUP_1246.w = _RESERVED_IDENTIFIER_FIXUP_591;
    float _RESERVED_IDENTIFIER_FIXUP_720 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_738 = hdTex4(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1242.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_591;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1246.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_591;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1284;
    _RESERVED_IDENTIFIER_FIXUP_1284.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_720 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_649 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_738.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1289;
    _RESERVED_IDENTIFIER_FIXUP_1289.x = 1.0;
    vec2 param_11 = texcoord1.xy;
    vec2 param_12 = texcoord1.wz;
    vec2 param_13 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_792 = _RESERVED_IDENTIFIER_FIXUP_1289.xxx * mix(mix(mix(OptTex0( texcoord0.xyz), hdTex1(param_11), _RESERVED_IDENTIFIER_FIXUP_738.xxxx), hdTex2(param_12), _RESERVED_IDENTIFIER_FIXUP_738.yyyy), hdTex3(param_13), _RESERVED_IDENTIFIER_FIXUP_738.zzzz).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1291;
    _RESERVED_IDENTIFIER_FIXUP_1291.x = _RESERVED_IDENTIFIER_FIXUP_792.x;
    _RESERVED_IDENTIFIER_FIXUP_1291.y = _RESERVED_IDENTIFIER_FIXUP_792.y;
    _RESERVED_IDENTIFIER_FIXUP_1291.z = _RESERVED_IDENTIFIER_FIXUP_792.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1297;
    _RESERVED_IDENTIFIER_FIXUP_1297.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1297.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1297.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_814 = _RESERVED_IDENTIFIER_FIXUP_1291.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1460).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1303;
    _RESERVED_IDENTIFIER_FIXUP_1303.x = _RESERVED_IDENTIFIER_FIXUP_814.x;
    _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_814.y;
    _RESERVED_IDENTIFIER_FIXUP_1303.z = _RESERVED_IDENTIFIER_FIXUP_814.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = _RESERVED_IDENTIFIER_FIXUP_1303.xyz + _RESERVED_IDENTIFIER_FIXUP_1303.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1309;
    _RESERVED_IDENTIFIER_FIXUP_1309.x = _RESERVED_IDENTIFIER_FIXUP_825.x;
    _RESERVED_IDENTIFIER_FIXUP_1309.y = _RESERVED_IDENTIFIER_FIXUP_825.y;
    _RESERVED_IDENTIFIER_FIXUP_1309.z = _RESERVED_IDENTIFIER_FIXUP_825.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_839 = (_RESERVED_IDENTIFIER_FIXUP_1297.xyz * _RESERVED_IDENTIFIER_FIXUP_1284.xxx) + _RESERVED_IDENTIFIER_FIXUP_1309.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1315;
    _RESERVED_IDENTIFIER_FIXUP_1315.x = _RESERVED_IDENTIFIER_FIXUP_839.x;
    _RESERVED_IDENTIFIER_FIXUP_1315.y = _RESERVED_IDENTIFIER_FIXUP_839.y;
    _RESERVED_IDENTIFIER_FIXUP_1315.z = _RESERVED_IDENTIFIER_FIXUP_839.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_852 = _RESERVED_IDENTIFIER_FIXUP_1315.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1321;
    _RESERVED_IDENTIFIER_FIXUP_1321.x = _RESERVED_IDENTIFIER_FIXUP_852.x;
    _RESERVED_IDENTIFIER_FIXUP_1321.y = _RESERVED_IDENTIFIER_FIXUP_852.y;
    _RESERVED_IDENTIFIER_FIXUP_1321.z = _RESERVED_IDENTIFIER_FIXUP_852.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_867 = _RESERVED_IDENTIFIER_FIXUP_1321.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1327;
    _RESERVED_IDENTIFIER_FIXUP_1327.x = _RESERVED_IDENTIFIER_FIXUP_867.x;
    _RESERVED_IDENTIFIER_FIXUP_1327.y = _RESERVED_IDENTIFIER_FIXUP_867.y;
    _RESERVED_IDENTIFIER_FIXUP_1327.z = _RESERVED_IDENTIFIER_FIXUP_867.z;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_581;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_583;
    vec4 _RESERVED_IDENTIFIER_FIXUP_909 = hdLod5(param_14, param_15);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1340 = _RESERVED_IDENTIFIER_FIXUP_909;
    _RESERVED_IDENTIFIER_FIXUP_1340.y = _RESERVED_IDENTIFIER_FIXUP_597;
    _RESERVED_IDENTIFIER_FIXUP_1340.z = _RESERVED_IDENTIFIER_FIXUP_599;
    vec2 _RESERVED_IDENTIFIER_FIXUP_930 = _RESERVED_IDENTIFIER_FIXUP_1340.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_930.x;
    _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_930.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1344.xy;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_591;
    float _RESERVED_IDENTIFIER_FIXUP_945 = _RESERVED_IDENTIFIER_FIXUP_909.x + hdLod5(param_16, param_17).x;
    _RESERVED_IDENTIFIER_FIXUP_1340.x = _RESERVED_IDENTIFIER_FIXUP_945;
    vec2 _RESERVED_IDENTIFIER_FIXUP_959 = _RESERVED_IDENTIFIER_FIXUP_1340.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1357 = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1357.x = _RESERVED_IDENTIFIER_FIXUP_959.x;
    _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_959.y;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1357.xy;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_591;
    float _RESERVED_IDENTIFIER_FIXUP_974 = _RESERVED_IDENTIFIER_FIXUP_945 + hdLod5(param_18, param_19).x;
    _RESERVED_IDENTIFIER_FIXUP_1340.x = _RESERVED_IDENTIFIER_FIXUP_974;
    vec2 _RESERVED_IDENTIFIER_FIXUP_981 = _RESERVED_IDENTIFIER_FIXUP_1340.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1366;
    _RESERVED_IDENTIFIER_FIXUP_1366.x = _RESERVED_IDENTIFIER_FIXUP_981.x;
    _RESERVED_IDENTIFIER_FIXUP_1366.y = _RESERVED_IDENTIFIER_FIXUP_981.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_991 = _RESERVED_IDENTIFIER_FIXUP_1340.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1370;
    _RESERVED_IDENTIFIER_FIXUP_1370.x = _RESERVED_IDENTIFIER_FIXUP_991.x;
    _RESERVED_IDENTIFIER_FIXUP_1370.y = _RESERVED_IDENTIFIER_FIXUP_991.y;
    _RESERVED_IDENTIFIER_FIXUP_1366.w = _RESERVED_IDENTIFIER_FIXUP_591;
    _RESERVED_IDENTIFIER_FIXUP_1370.w = _RESERVED_IDENTIFIER_FIXUP_591;
    vec2 param_20 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1063 = hdTex4(param_20);
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1366.xy;
    float param_22 = _RESERVED_IDENTIFIER_FIXUP_591;
    vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1370.xy;
    float param_24 = _RESERVED_IDENTIFIER_FIXUP_591;
    float _RESERVED_IDENTIFIER_FIXUP_1068 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_720 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_974 + hdLod5(param_21, param_22).x) + hdLod5(param_23, param_24).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1063.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1408;
    _RESERVED_IDENTIFIER_FIXUP_1408.x = _RESERVED_IDENTIFIER_FIXUP_1068;
    float _RESERVED_IDENTIFIER_FIXUP_1073 = (_RESERVED_IDENTIFIER_FIXUP_1068 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1415;
    _RESERVED_IDENTIFIER_FIXUP_1415.x = _RESERVED_IDENTIFIER_FIXUP_1073;
    vec2 param_25 = texcoord1.xy;
    vec2 param_26 = texcoord1.wz;
    vec2 param_27 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1112 = mix(mix(mix(OptTex0( texcoord0.xyz), hdTex1(param_25), _RESERVED_IDENTIFIER_FIXUP_1063.xxxx), hdTex2(param_26), _RESERVED_IDENTIFIER_FIXUP_1063.yyyy), hdTex3(param_27), _RESERVED_IDENTIFIER_FIXUP_1063.zzzz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1415.xxx * _RESERVED_IDENTIFIER_FIXUP_1112.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1417;
    _RESERVED_IDENTIFIER_FIXUP_1417.x = _RESERVED_IDENTIFIER_FIXUP_1117.x;
    _RESERVED_IDENTIFIER_FIXUP_1417.y = _RESERVED_IDENTIFIER_FIXUP_1117.y;
    _RESERVED_IDENTIFIER_FIXUP_1417.z = _RESERVED_IDENTIFIER_FIXUP_1117.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1128 = _RESERVED_IDENTIFIER_FIXUP_1112.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1423;
    _RESERVED_IDENTIFIER_FIXUP_1423.x = _RESERVED_IDENTIFIER_FIXUP_1128.x;
    _RESERVED_IDENTIFIER_FIXUP_1423.y = _RESERVED_IDENTIFIER_FIXUP_1128.y;
    _RESERVED_IDENTIFIER_FIXUP_1423.z = _RESERVED_IDENTIFIER_FIXUP_1128.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1139 = _RESERVED_IDENTIFIER_FIXUP_1417.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1429;
    _RESERVED_IDENTIFIER_FIXUP_1429.x = _RESERVED_IDENTIFIER_FIXUP_1139.x;
    _RESERVED_IDENTIFIER_FIXUP_1429.y = _RESERVED_IDENTIFIER_FIXUP_1139.y;
    _RESERVED_IDENTIFIER_FIXUP_1429.z = _RESERVED_IDENTIFIER_FIXUP_1139.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1150 = _RESERVED_IDENTIFIER_FIXUP_1429.xyz + _RESERVED_IDENTIFIER_FIXUP_1429.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1435;
    _RESERVED_IDENTIFIER_FIXUP_1435.x = _RESERVED_IDENTIFIER_FIXUP_1150.x;
    _RESERVED_IDENTIFIER_FIXUP_1435.y = _RESERVED_IDENTIFIER_FIXUP_1150.y;
    _RESERVED_IDENTIFIER_FIXUP_1435.z = _RESERVED_IDENTIFIER_FIXUP_1150.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1164 = (_RESERVED_IDENTIFIER_FIXUP_1423.xyz * _RESERVED_IDENTIFIER_FIXUP_1408.xxx) + _RESERVED_IDENTIFIER_FIXUP_1435.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1441;
    _RESERVED_IDENTIFIER_FIXUP_1441.x = _RESERVED_IDENTIFIER_FIXUP_1164.x;
    _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_1164.y;
    _RESERVED_IDENTIFIER_FIXUP_1441.z = _RESERVED_IDENTIFIER_FIXUP_1164.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_1441.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1447;
    _RESERVED_IDENTIFIER_FIXUP_1447.x = _RESERVED_IDENTIFIER_FIXUP_1177.x;
    _RESERVED_IDENTIFIER_FIXUP_1447.y = _RESERVED_IDENTIFIER_FIXUP_1177.y;
    _RESERVED_IDENTIFIER_FIXUP_1447.z = _RESERVED_IDENTIFIER_FIXUP_1177.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1447.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_441 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_450;
    if (_RESERVED_IDENTIFIER_FIXUP_441)
    {
        _RESERVED_IDENTIFIER_FIXUP_450 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_450 = _RESERVED_IDENTIFIER_FIXUP_441;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_450)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_487 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1327.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_514 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1203;
    if (_RESERVED_IDENTIFIER_FIXUP_487 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1203 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_487), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_514);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1203 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_514);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1203;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1073);
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
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB68 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB68.x;
    r1.w = hdB68.y;
    vec2 hdB78 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB78.x;
    r0.z = hdB78.y;
    vec2 hdB100 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB100.x;
    r1.y = hdB100.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB120 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB120.x;
    r1.w = hdB120.y;
    vec2 hdB131 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB131.x;
    r1.y = hdB131.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB154 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB154.x;
    r1.y = hdB154.y;
    vec2 hdB165 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB165.x;
    r2.y = hdB165.y;
    vec2 hdB172 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB172.x;
    r1.w = hdB172.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB191 = vec2(1.0, 0.0) * v5.zx;
    r2.z = hdB191.x;
    r2.w = hdB191.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v5.x), abs(v5.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v4.wz;
    r1 = hdTex4(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r3 = OptTex0( v2.xyz);
    vec2 param_11 = v3.xy;
    r4 = hdTex1(param_11);
    r5 = mix(r3, r4, r1.xxxx);
    vec2 param_12 = v3.wz;
    r3 = hdTex2(param_12);
    r4 = mix(r5, r3, r1.yyyy);
    vec2 param_13 = v4.xy;
    r3 = hdTex3(param_13);
    r5 = mix(r4, r3, r1.zzzz);
    vec4 hdB295 = r0;
    vec3 hdB299 = hdB295.xxx * r5.xyz;
    r0.x = hdB299.x;
    r0.y = hdB299.y;
    r0.z = hdB299.z;
    vec3 hdB310 = r5.www * v1.xyz;
    r1.x = hdB310.x;
    r1.y = hdB310.y;
    r1.z = hdB310.z;
    vec4 hdB317 = r0;
    vec3 hdB321 = hdB317.xyz * v0.xyz;
    r0.x = hdB321.x;
    r0.y = hdB321.y;
    r0.z = hdB321.z;
    vec4 hdB328 = r0;
    vec4 hdB330 = r0;
    vec3 hdB332 = hdB328.xyz + hdB330.xyz;
    r0.x = hdB332.x;
    r0.y = hdB332.y;
    r0.z = hdB332.z;
    vec4 hdB344 = r0;
    vec3 hdB346 = (r1.xyz * r2.xxx) + hdB344.xyz;
    r0.x = hdB346.x;
    r0.y = hdB346.y;
    r0.z = hdB346.z;
    vec4 hdB353 = r0;
    vec3 hdB360 = hdB353.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB360.x;
    r0.y = hdB360.y;
    r0.z = hdB360.z;
    vec3 hdB375 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB375.x;
    oC0.y = hdB375.y;
    oC0.z = hdB375.z;
    oC0.w = 1.0;
    bool hdB389 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB397;
    if (hdB389)
    {
        hdB397 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB397 = hdB389;
    }
    if (hdB397)
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
    bool _1360 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1370;
    if (_1360)
    {
        _1370 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1370 = _1360;
    }
    if (_1370)
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
        bool _1395 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1410;
        if (!_1395)
        {
            _1410 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1410 = _1395;
        }
        if (_1410)
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
