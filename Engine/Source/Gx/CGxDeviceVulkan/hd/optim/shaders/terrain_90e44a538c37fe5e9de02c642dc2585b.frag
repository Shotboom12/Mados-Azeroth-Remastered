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
float _RESERVED_IDENTIFIER_FIXUP_3785;
vec4 _RESERVED_IDENTIFIER_FIXUP_3786;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1169 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1173 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1177 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181 = hdTex3(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1185 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2976 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2976.x = _RESERVED_IDENTIFIER_FIXUP_1185.x;
    _RESERVED_IDENTIFIER_FIXUP_2976.y = _RESERVED_IDENTIFIER_FIXUP_1185.y;
    float _RESERVED_IDENTIFIER_FIXUP_1191 = _RESERVED_IDENTIFIER_FIXUP_1185.z;
    _RESERVED_IDENTIFIER_FIXUP_2976.z = _RESERVED_IDENTIFIER_FIXUP_1191;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1193 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3785).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1196 = _RESERVED_IDENTIFIER_FIXUP_1193 + _RESERVED_IDENTIFIER_FIXUP_1193;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2982 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2982.x = _RESERVED_IDENTIFIER_FIXUP_1196.x;
    _RESERVED_IDENTIFIER_FIXUP_2982.y = _RESERVED_IDENTIFIER_FIXUP_1196.y;
    _RESERVED_IDENTIFIER_FIXUP_2982.z = _RESERVED_IDENTIFIER_FIXUP_1196.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1204 = _RESERVED_IDENTIFIER_FIXUP_1169.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1207 = _RESERVED_IDENTIFIER_FIXUP_1204 * _RESERVED_IDENTIFIER_FIXUP_2982.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2988 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2988.x = _RESERVED_IDENTIFIER_FIXUP_1207.x;
    _RESERVED_IDENTIFIER_FIXUP_2988.y = _RESERVED_IDENTIFIER_FIXUP_1207.y;
    _RESERVED_IDENTIFIER_FIXUP_2988.z = _RESERVED_IDENTIFIER_FIXUP_1207.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1221 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2976.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1222 = mix(_RESERVED_IDENTIFIER_FIXUP_2988.xyz, _RESERVED_IDENTIFIER_FIXUP_1204, _RESERVED_IDENTIFIER_FIXUP_1221);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2994 = _RESERVED_IDENTIFIER_FIXUP_1169;
    _RESERVED_IDENTIFIER_FIXUP_2994.x = _RESERVED_IDENTIFIER_FIXUP_1222.x;
    _RESERVED_IDENTIFIER_FIXUP_2994.y = _RESERVED_IDENTIFIER_FIXUP_1222.y;
    _RESERVED_IDENTIFIER_FIXUP_2994.z = _RESERVED_IDENTIFIER_FIXUP_1222.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1230 = _RESERVED_IDENTIFIER_FIXUP_1173.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1233 = _RESERVED_IDENTIFIER_FIXUP_1230 * _RESERVED_IDENTIFIER_FIXUP_2982.xyz;
    _RESERVED_IDENTIFIER_FIXUP_2988.x = _RESERVED_IDENTIFIER_FIXUP_1233.x;
    _RESERVED_IDENTIFIER_FIXUP_2988.y = _RESERVED_IDENTIFIER_FIXUP_1233.y;
    _RESERVED_IDENTIFIER_FIXUP_2988.z = _RESERVED_IDENTIFIER_FIXUP_1233.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1247 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2976.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1248 = mix(_RESERVED_IDENTIFIER_FIXUP_2988.xyz, _RESERVED_IDENTIFIER_FIXUP_1230, _RESERVED_IDENTIFIER_FIXUP_1247);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3006 = _RESERVED_IDENTIFIER_FIXUP_1173;
    _RESERVED_IDENTIFIER_FIXUP_3006.x = _RESERVED_IDENTIFIER_FIXUP_1248.x;
    _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1248.y;
    _RESERVED_IDENTIFIER_FIXUP_3006.z = _RESERVED_IDENTIFIER_FIXUP_1248.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1256 = _RESERVED_IDENTIFIER_FIXUP_1177.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1259 = _RESERVED_IDENTIFIER_FIXUP_1256 * _RESERVED_IDENTIFIER_FIXUP_2982.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3811 = vec4(_RESERVED_IDENTIFIER_FIXUP_1259.xy, _RESERVED_IDENTIFIER_FIXUP_1191, _RESERVED_IDENTIFIER_FIXUP_1259.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1274 = mix(_RESERVED_IDENTIFIER_FIXUP_3811.xyw, _RESERVED_IDENTIFIER_FIXUP_1256, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3811.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3018 = _RESERVED_IDENTIFIER_FIXUP_1177;
    _RESERVED_IDENTIFIER_FIXUP_3018.x = _RESERVED_IDENTIFIER_FIXUP_1274.x;
    _RESERVED_IDENTIFIER_FIXUP_3018.y = _RESERVED_IDENTIFIER_FIXUP_1274.y;
    _RESERVED_IDENTIFIER_FIXUP_3018.z = _RESERVED_IDENTIFIER_FIXUP_1274.z;
    float _RESERVED_IDENTIFIER_FIXUP_1284 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1181.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3024 = _RESERVED_IDENTIFIER_FIXUP_1181;
    _RESERVED_IDENTIFIER_FIXUP_3024.z = _RESERVED_IDENTIFIER_FIXUP_1284;
    _RESERVED_IDENTIFIER_FIXUP_3024.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1284;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1294 = _RESERVED_IDENTIFIER_FIXUP_3024.xxxx * _RESERVED_IDENTIFIER_FIXUP_3006;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1306 = (_RESERVED_IDENTIFIER_FIXUP_3018 * _RESERVED_IDENTIFIER_FIXUP_3024.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2994 * _RESERVED_IDENTIFIER_FIXUP_3024.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1294);
    float _RESERVED_IDENTIFIER_FIXUP_1313 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3031 = _RESERVED_IDENTIFIER_FIXUP_1294;
    _RESERVED_IDENTIFIER_FIXUP_3031.x = _RESERVED_IDENTIFIER_FIXUP_1313;
    float _RESERVED_IDENTIFIER_FIXUP_1319 = clamp((_RESERVED_IDENTIFIER_FIXUP_1313 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3031.x = _RESERVED_IDENTIFIER_FIXUP_1319;
    float _RESERVED_IDENTIFIER_FIXUP_1325 = ((-_RESERVED_IDENTIFIER_FIXUP_1319) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3031.y = _RESERVED_IDENTIFIER_FIXUP_1325;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3788;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3787;
    if (_RESERVED_IDENTIFIER_FIXUP_1325 != (-_RESERVED_IDENTIFIER_FIXUP_1325))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1337 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3043 = _RESERVED_IDENTIFIER_FIXUP_3031;
        _RESERVED_IDENTIFIER_FIXUP_3043.y = _RESERVED_IDENTIFIER_FIXUP_1337.x;
        _RESERVED_IDENTIFIER_FIXUP_3043.z = _RESERVED_IDENTIFIER_FIXUP_1337.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_3043.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3047;
        _RESERVED_IDENTIFIER_FIXUP_3047.x = _RESERVED_IDENTIFIER_FIXUP_1347.x;
        _RESERVED_IDENTIFIER_FIXUP_3047.y = _RESERVED_IDENTIFIER_FIXUP_1347.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1357 = _RESERVED_IDENTIFIER_FIXUP_3043.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3051;
        _RESERVED_IDENTIFIER_FIXUP_3051.x = _RESERVED_IDENTIFIER_FIXUP_1357.x;
        _RESERVED_IDENTIFIER_FIXUP_3051.y = _RESERVED_IDENTIFIER_FIXUP_1357.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1367 = _RESERVED_IDENTIFIER_FIXUP_3043.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3055;
        _RESERVED_IDENTIFIER_FIXUP_3055.x = _RESERVED_IDENTIFIER_FIXUP_1367.x;
        _RESERVED_IDENTIFIER_FIXUP_3055.y = _RESERVED_IDENTIFIER_FIXUP_1367.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1377 = _RESERVED_IDENTIFIER_FIXUP_3043.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3059;
        _RESERVED_IDENTIFIER_FIXUP_3059.x = _RESERVED_IDENTIFIER_FIXUP_1377.x;
        _RESERVED_IDENTIFIER_FIXUP_3059.y = _RESERVED_IDENTIFIER_FIXUP_1377.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1385 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1385.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1385.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1391 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3047.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3051.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3055.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3059.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3047.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1391.y = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3051.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1391.z = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3055.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1391.w = hdLod5(param_9, param_10).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1448 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1391 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3059.xy;
        float param_12 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1454 = hdLod5(param_11, param_12).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3043.y = _RESERVED_IDENTIFIER_FIXUP_1454;
        float _RESERVED_IDENTIFIER_FIXUP_1459 = float(_RESERVED_IDENTIFIER_FIXUP_1454 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3043.y = _RESERVED_IDENTIFIER_FIXUP_1459;
        float _RESERVED_IDENTIFIER_FIXUP_1462 = dot(_RESERVED_IDENTIFIER_FIXUP_1448, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3043.z = _RESERVED_IDENTIFIER_FIXUP_1462;
        float _RESERVED_IDENTIFIER_FIXUP_1468 = _RESERVED_IDENTIFIER_FIXUP_1459 + _RESERVED_IDENTIFIER_FIXUP_1462;
        _RESERVED_IDENTIFIER_FIXUP_3043.y = _RESERVED_IDENTIFIER_FIXUP_1468;
        float _RESERVED_IDENTIFIER_FIXUP_1473 = (_RESERVED_IDENTIFIER_FIXUP_1468 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3043.y = _RESERVED_IDENTIFIER_FIXUP_1473;
        _RESERVED_IDENTIFIER_FIXUP_3043.x = (_RESERVED_IDENTIFIER_FIXUP_1319 * _RESERVED_IDENTIFIER_FIXUP_1473) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3788 = _RESERVED_IDENTIFIER_FIXUP_1448;
        _RESERVED_IDENTIFIER_FIXUP_3787 = _RESERVED_IDENTIFIER_FIXUP_3043;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3041 = _RESERVED_IDENTIFIER_FIXUP_3031;
        _RESERVED_IDENTIFIER_FIXUP_3041.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3788 = _RESERVED_IDENTIFIER_FIXUP_3018;
        _RESERVED_IDENTIFIER_FIXUP_3787 = _RESERVED_IDENTIFIER_FIXUP_3041;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1491 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3115 = _RESERVED_IDENTIFIER_FIXUP_3787;
    _RESERVED_IDENTIFIER_FIXUP_3115.y = _RESERVED_IDENTIFIER_FIXUP_1491;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3791;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3789;
    if (_RESERVED_IDENTIFIER_FIXUP_1491 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1500 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3276 = _RESERVED_IDENTIFIER_FIXUP_3115;
        _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1500.x;
        _RESERVED_IDENTIFIER_FIXUP_3276.z = _RESERVED_IDENTIFIER_FIXUP_1500.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_3276.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3280;
        _RESERVED_IDENTIFIER_FIXUP_3280.x = _RESERVED_IDENTIFIER_FIXUP_1510.x;
        _RESERVED_IDENTIFIER_FIXUP_3280.y = _RESERVED_IDENTIFIER_FIXUP_1510.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1520 = _RESERVED_IDENTIFIER_FIXUP_3276.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3284;
        _RESERVED_IDENTIFIER_FIXUP_3284.x = _RESERVED_IDENTIFIER_FIXUP_1520.x;
        _RESERVED_IDENTIFIER_FIXUP_3284.y = _RESERVED_IDENTIFIER_FIXUP_1520.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1530 = _RESERVED_IDENTIFIER_FIXUP_3276.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3288;
        _RESERVED_IDENTIFIER_FIXUP_3288.x = _RESERVED_IDENTIFIER_FIXUP_1530.x;
        _RESERVED_IDENTIFIER_FIXUP_3288.y = _RESERVED_IDENTIFIER_FIXUP_1530.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_3276.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3292;
        _RESERVED_IDENTIFIER_FIXUP_3292.x = _RESERVED_IDENTIFIER_FIXUP_1540.x;
        _RESERVED_IDENTIFIER_FIXUP_3292.y = _RESERVED_IDENTIFIER_FIXUP_1540.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1548 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1548.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1548.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1554 = hdLod6(param_13, param_14);
        _RESERVED_IDENTIFIER_FIXUP_3280.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3284.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3288.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3292.w = 0.0;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3280.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1554.y = hdLod6(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3284.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1554.z = hdLod6(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3288.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1554.w = hdLod6(param_19, param_20).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1611 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1554 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3292.xy;
        float param_22 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1617 = hdLod6(param_21, param_22).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1617;
        float _RESERVED_IDENTIFIER_FIXUP_1622 = float(_RESERVED_IDENTIFIER_FIXUP_1617 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1622;
        float _RESERVED_IDENTIFIER_FIXUP_1625 = dot(_RESERVED_IDENTIFIER_FIXUP_1611, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3276.z = _RESERVED_IDENTIFIER_FIXUP_1625;
        float _RESERVED_IDENTIFIER_FIXUP_1631 = _RESERVED_IDENTIFIER_FIXUP_1622 + _RESERVED_IDENTIFIER_FIXUP_1625;
        _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1631;
        _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1631 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3791 = _RESERVED_IDENTIFIER_FIXUP_1611;
        _RESERVED_IDENTIFIER_FIXUP_3789 = _RESERVED_IDENTIFIER_FIXUP_3276;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1644 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3120 = _RESERVED_IDENTIFIER_FIXUP_3115;
        _RESERVED_IDENTIFIER_FIXUP_3120.z = _RESERVED_IDENTIFIER_FIXUP_1644;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3792;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3790;
        if (_RESERVED_IDENTIFIER_FIXUP_1644 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1653 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3210 = _RESERVED_IDENTIFIER_FIXUP_3120;
            _RESERVED_IDENTIFIER_FIXUP_3210.z = _RESERVED_IDENTIFIER_FIXUP_1653.x;
            _RESERVED_IDENTIFIER_FIXUP_3210.w = _RESERVED_IDENTIFIER_FIXUP_1653.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1663 = _RESERVED_IDENTIFIER_FIXUP_3210.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3214;
            _RESERVED_IDENTIFIER_FIXUP_3214.x = _RESERVED_IDENTIFIER_FIXUP_1663.x;
            _RESERVED_IDENTIFIER_FIXUP_3214.y = _RESERVED_IDENTIFIER_FIXUP_1663.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1673 = _RESERVED_IDENTIFIER_FIXUP_3210.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3218;
            _RESERVED_IDENTIFIER_FIXUP_3218.x = _RESERVED_IDENTIFIER_FIXUP_1673.x;
            _RESERVED_IDENTIFIER_FIXUP_3218.y = _RESERVED_IDENTIFIER_FIXUP_1673.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1683 = _RESERVED_IDENTIFIER_FIXUP_3210.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3222;
            _RESERVED_IDENTIFIER_FIXUP_3222.x = _RESERVED_IDENTIFIER_FIXUP_1683.x;
            _RESERVED_IDENTIFIER_FIXUP_3222.y = _RESERVED_IDENTIFIER_FIXUP_1683.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1693 = _RESERVED_IDENTIFIER_FIXUP_3210.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3226;
            _RESERVED_IDENTIFIER_FIXUP_3226.x = _RESERVED_IDENTIFIER_FIXUP_1693.x;
            _RESERVED_IDENTIFIER_FIXUP_3226.y = _RESERVED_IDENTIFIER_FIXUP_1693.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1701 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1701.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1701.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1707 = hdLod7(param_23, param_24);
            _RESERVED_IDENTIFIER_FIXUP_3214.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3218.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3222.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3226.w = 0.0;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3214.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1707.y = hdLod7(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3218.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1707.z = hdLod7(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3222.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1707.w = hdLod7(param_29, param_30).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1764 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1707 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3226.xy;
            float param_32 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1770 = hdLod7(param_31, param_32).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3210.z = _RESERVED_IDENTIFIER_FIXUP_1770;
            float _RESERVED_IDENTIFIER_FIXUP_1775 = float(_RESERVED_IDENTIFIER_FIXUP_1770 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3210.z = _RESERVED_IDENTIFIER_FIXUP_1775;
            float _RESERVED_IDENTIFIER_FIXUP_1778 = dot(_RESERVED_IDENTIFIER_FIXUP_1764, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3210.w = _RESERVED_IDENTIFIER_FIXUP_1778;
            float _RESERVED_IDENTIFIER_FIXUP_1784 = _RESERVED_IDENTIFIER_FIXUP_1775 + _RESERVED_IDENTIFIER_FIXUP_1778;
            _RESERVED_IDENTIFIER_FIXUP_3210.z = _RESERVED_IDENTIFIER_FIXUP_1784;
            _RESERVED_IDENTIFIER_FIXUP_3210.y = _RESERVED_IDENTIFIER_FIXUP_1784 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3792 = _RESERVED_IDENTIFIER_FIXUP_1764;
            _RESERVED_IDENTIFIER_FIXUP_3790 = _RESERVED_IDENTIFIER_FIXUP_3210;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3124 = _RESERVED_IDENTIFIER_FIXUP_3788;
            _RESERVED_IDENTIFIER_FIXUP_3124.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3124.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1800 = (_RESERVED_IDENTIFIER_FIXUP_3124.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3129;
            _RESERVED_IDENTIFIER_FIXUP_3129.x = _RESERVED_IDENTIFIER_FIXUP_1800.x;
            _RESERVED_IDENTIFIER_FIXUP_3129.y = _RESERVED_IDENTIFIER_FIXUP_1800.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1810 = _RESERVED_IDENTIFIER_FIXUP_3129.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3133;
            _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1810.x;
            _RESERVED_IDENTIFIER_FIXUP_3133.y = _RESERVED_IDENTIFIER_FIXUP_1810.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1820 = _RESERVED_IDENTIFIER_FIXUP_3129.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3137;
            _RESERVED_IDENTIFIER_FIXUP_3137.x = _RESERVED_IDENTIFIER_FIXUP_1820.x;
            _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1820.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1830 = _RESERVED_IDENTIFIER_FIXUP_3129.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3141;
            _RESERVED_IDENTIFIER_FIXUP_3141.x = _RESERVED_IDENTIFIER_FIXUP_1830.x;
            _RESERVED_IDENTIFIER_FIXUP_3141.y = _RESERVED_IDENTIFIER_FIXUP_1830.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1840 = _RESERVED_IDENTIFIER_FIXUP_3129.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3145;
            _RESERVED_IDENTIFIER_FIXUP_3145.x = _RESERVED_IDENTIFIER_FIXUP_1840.x;
            _RESERVED_IDENTIFIER_FIXUP_3145.y = _RESERVED_IDENTIFIER_FIXUP_1840.y;
            _RESERVED_IDENTIFIER_FIXUP_3129.w = 0.0;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3129.xy;
            float param_34 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1854 = hdLod8(param_33, param_34);
            _RESERVED_IDENTIFIER_FIXUP_3133.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3137.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3141.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3145.w = 0.0;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3133.xy;
            float param_36 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1854.y = hdLod8(param_35, param_36).x;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3137.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1854.z = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3141.xy;
            float param_40 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1854.w = hdLod8(param_39, param_40).x;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3145.xy;
            float param_42 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1917 = hdLod8(param_41, param_42).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3185 = _RESERVED_IDENTIFIER_FIXUP_3120;
            _RESERVED_IDENTIFIER_FIXUP_3185.z = _RESERVED_IDENTIFIER_FIXUP_1917;
            float _RESERVED_IDENTIFIER_FIXUP_1922 = float(_RESERVED_IDENTIFIER_FIXUP_1917 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3185.z = _RESERVED_IDENTIFIER_FIXUP_1922;
            float _RESERVED_IDENTIFIER_FIXUP_1925 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1854 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3185.w = _RESERVED_IDENTIFIER_FIXUP_1925;
            float _RESERVED_IDENTIFIER_FIXUP_1931 = _RESERVED_IDENTIFIER_FIXUP_1922 + _RESERVED_IDENTIFIER_FIXUP_1925;
            _RESERVED_IDENTIFIER_FIXUP_3185.z = _RESERVED_IDENTIFIER_FIXUP_1931;
            float _RESERVED_IDENTIFIER_FIXUP_1939 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3185.w = _RESERVED_IDENTIFIER_FIXUP_1939;
            float _RESERVED_IDENTIFIER_FIXUP_1945 = clamp((_RESERVED_IDENTIFIER_FIXUP_1939 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3185.w = _RESERVED_IDENTIFIER_FIXUP_1945;
            float _RESERVED_IDENTIFIER_FIXUP_1950 = (_RESERVED_IDENTIFIER_FIXUP_1931 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3185.z = _RESERVED_IDENTIFIER_FIXUP_1950;
            _RESERVED_IDENTIFIER_FIXUP_3185.y = (_RESERVED_IDENTIFIER_FIXUP_1945 * _RESERVED_IDENTIFIER_FIXUP_1950) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3792 = _RESERVED_IDENTIFIER_FIXUP_3124;
            _RESERVED_IDENTIFIER_FIXUP_3790 = _RESERVED_IDENTIFIER_FIXUP_3185;
        }
        _RESERVED_IDENTIFIER_FIXUP_3791 = _RESERVED_IDENTIFIER_FIXUP_3792;
        _RESERVED_IDENTIFIER_FIXUP_3789 = _RESERVED_IDENTIFIER_FIXUP_3790;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1965 = min(_RESERVED_IDENTIFIER_FIXUP_3789.y, _RESERVED_IDENTIFIER_FIXUP_3789.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3344 = _RESERVED_IDENTIFIER_FIXUP_3791;
    _RESERVED_IDENTIFIER_FIXUP_3344.x = _RESERVED_IDENTIFIER_FIXUP_1965;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3812 = vec4((_RESERVED_IDENTIFIER_FIXUP_1965 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1987 = _RESERVED_IDENTIFIER_FIXUP_3344.xxx * _RESERVED_IDENTIFIER_FIXUP_3812.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3355 = _RESERVED_IDENTIFIER_FIXUP_3812;
    _RESERVED_IDENTIFIER_FIXUP_3355.y = _RESERVED_IDENTIFIER_FIXUP_1987.x;
    _RESERVED_IDENTIFIER_FIXUP_3355.z = _RESERVED_IDENTIFIER_FIXUP_1987.y;
    _RESERVED_IDENTIFIER_FIXUP_3355.w = _RESERVED_IDENTIFIER_FIXUP_1987.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2001 = (_RESERVED_IDENTIFIER_FIXUP_1306.xyz * _RESERVED_IDENTIFIER_FIXUP_3355.xxx) + _RESERVED_IDENTIFIER_FIXUP_3355.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3361 = _RESERVED_IDENTIFIER_FIXUP_1306;
    _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_2001.x;
    _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_2001.y;
    _RESERVED_IDENTIFIER_FIXUP_3361.z = _RESERVED_IDENTIFIER_FIXUP_2001.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2014 = _RESERVED_IDENTIFIER_FIXUP_3361.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3367 = _RESERVED_IDENTIFIER_FIXUP_3361;
    _RESERVED_IDENTIFIER_FIXUP_3367.x = _RESERVED_IDENTIFIER_FIXUP_2014.x;
    _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_2014.y;
    _RESERVED_IDENTIFIER_FIXUP_3367.z = _RESERVED_IDENTIFIER_FIXUP_2014.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2071 = OptTex0( texcoord0.xyz);
    vec2 param_43 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2075 = hdTex1(param_43);
    vec2 param_44 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2079 = hdTex2(param_44);
    vec2 param_45 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2083 = hdTex3(param_45);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2098 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3387 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3387.x = _RESERVED_IDENTIFIER_FIXUP_2098.x;
    _RESERVED_IDENTIFIER_FIXUP_3387.y = _RESERVED_IDENTIFIER_FIXUP_2098.y;
    _RESERVED_IDENTIFIER_FIXUP_3387.z = _RESERVED_IDENTIFIER_FIXUP_2098.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2106 = _RESERVED_IDENTIFIER_FIXUP_2071.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2109 = _RESERVED_IDENTIFIER_FIXUP_2106 * _RESERVED_IDENTIFIER_FIXUP_3387.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3393 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3393.x = _RESERVED_IDENTIFIER_FIXUP_2109.x;
    _RESERVED_IDENTIFIER_FIXUP_3393.y = _RESERVED_IDENTIFIER_FIXUP_2109.y;
    _RESERVED_IDENTIFIER_FIXUP_3393.z = _RESERVED_IDENTIFIER_FIXUP_2109.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2124 = mix(_RESERVED_IDENTIFIER_FIXUP_3393.xyz, _RESERVED_IDENTIFIER_FIXUP_2106, _RESERVED_IDENTIFIER_FIXUP_1221);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3399 = _RESERVED_IDENTIFIER_FIXUP_2071;
    _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_2124.x;
    _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2124.y;
    _RESERVED_IDENTIFIER_FIXUP_3399.z = _RESERVED_IDENTIFIER_FIXUP_2124.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2132 = _RESERVED_IDENTIFIER_FIXUP_2075.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2135 = _RESERVED_IDENTIFIER_FIXUP_2132 * _RESERVED_IDENTIFIER_FIXUP_3387.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3393.x = _RESERVED_IDENTIFIER_FIXUP_2135.x;
    _RESERVED_IDENTIFIER_FIXUP_3393.y = _RESERVED_IDENTIFIER_FIXUP_2135.y;
    _RESERVED_IDENTIFIER_FIXUP_3393.z = _RESERVED_IDENTIFIER_FIXUP_2135.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2150 = mix(_RESERVED_IDENTIFIER_FIXUP_3393.xyz, _RESERVED_IDENTIFIER_FIXUP_2132, _RESERVED_IDENTIFIER_FIXUP_1247);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3411 = _RESERVED_IDENTIFIER_FIXUP_2075;
    _RESERVED_IDENTIFIER_FIXUP_3411.x = _RESERVED_IDENTIFIER_FIXUP_2150.x;
    _RESERVED_IDENTIFIER_FIXUP_3411.y = _RESERVED_IDENTIFIER_FIXUP_2150.y;
    _RESERVED_IDENTIFIER_FIXUP_3411.z = _RESERVED_IDENTIFIER_FIXUP_2150.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2158 = _RESERVED_IDENTIFIER_FIXUP_2079.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2161 = _RESERVED_IDENTIFIER_FIXUP_2158 * _RESERVED_IDENTIFIER_FIXUP_3387.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3814 = vec4(_RESERVED_IDENTIFIER_FIXUP_2161.xy, _RESERVED_IDENTIFIER_FIXUP_1191, _RESERVED_IDENTIFIER_FIXUP_2161.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2176 = mix(_RESERVED_IDENTIFIER_FIXUP_3814.xyw, _RESERVED_IDENTIFIER_FIXUP_2158, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3814.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3423 = _RESERVED_IDENTIFIER_FIXUP_2079;
    _RESERVED_IDENTIFIER_FIXUP_3423.x = _RESERVED_IDENTIFIER_FIXUP_2176.x;
    _RESERVED_IDENTIFIER_FIXUP_3423.y = _RESERVED_IDENTIFIER_FIXUP_2176.y;
    _RESERVED_IDENTIFIER_FIXUP_3423.z = _RESERVED_IDENTIFIER_FIXUP_2176.z;
    float _RESERVED_IDENTIFIER_FIXUP_2186 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2083.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3429 = _RESERVED_IDENTIFIER_FIXUP_2083;
    _RESERVED_IDENTIFIER_FIXUP_3429.z = _RESERVED_IDENTIFIER_FIXUP_2186;
    _RESERVED_IDENTIFIER_FIXUP_3429.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2186;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2196 = _RESERVED_IDENTIFIER_FIXUP_3429.xxxx * _RESERVED_IDENTIFIER_FIXUP_3411;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2208 = (_RESERVED_IDENTIFIER_FIXUP_3423 * _RESERVED_IDENTIFIER_FIXUP_3429.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_3399 * _RESERVED_IDENTIFIER_FIXUP_3429.zzzz) + _RESERVED_IDENTIFIER_FIXUP_2196);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3436 = _RESERVED_IDENTIFIER_FIXUP_2196;
    _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_1313;
    float _RESERVED_IDENTIFIER_FIXUP_2221 = clamp((_RESERVED_IDENTIFIER_FIXUP_1313 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_2221;
    float _RESERVED_IDENTIFIER_FIXUP_2227 = ((-_RESERVED_IDENTIFIER_FIXUP_2221) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3436.y = _RESERVED_IDENTIFIER_FIXUP_2227;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3800;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3799;
    if (_RESERVED_IDENTIFIER_FIXUP_2227 != (-_RESERVED_IDENTIFIER_FIXUP_2227))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2239 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3448 = _RESERVED_IDENTIFIER_FIXUP_3436;
        _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_2239.x;
        _RESERVED_IDENTIFIER_FIXUP_3448.z = _RESERVED_IDENTIFIER_FIXUP_2239.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2249 = _RESERVED_IDENTIFIER_FIXUP_3448.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3452;
        _RESERVED_IDENTIFIER_FIXUP_3452.x = _RESERVED_IDENTIFIER_FIXUP_2249.x;
        _RESERVED_IDENTIFIER_FIXUP_3452.y = _RESERVED_IDENTIFIER_FIXUP_2249.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2259 = _RESERVED_IDENTIFIER_FIXUP_3448.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3456;
        _RESERVED_IDENTIFIER_FIXUP_3456.x = _RESERVED_IDENTIFIER_FIXUP_2259.x;
        _RESERVED_IDENTIFIER_FIXUP_3456.y = _RESERVED_IDENTIFIER_FIXUP_2259.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2269 = _RESERVED_IDENTIFIER_FIXUP_3448.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3460;
        _RESERVED_IDENTIFIER_FIXUP_3460.x = _RESERVED_IDENTIFIER_FIXUP_2269.x;
        _RESERVED_IDENTIFIER_FIXUP_3460.y = _RESERVED_IDENTIFIER_FIXUP_2269.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2279 = _RESERVED_IDENTIFIER_FIXUP_3448.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3464;
        _RESERVED_IDENTIFIER_FIXUP_3464.x = _RESERVED_IDENTIFIER_FIXUP_2279.x;
        _RESERVED_IDENTIFIER_FIXUP_3464.y = _RESERVED_IDENTIFIER_FIXUP_2279.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2287 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_2287.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_2287.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2293 = hdLod5(param_46, param_47);
        _RESERVED_IDENTIFIER_FIXUP_3452.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3456.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3460.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3464.w = 0.0;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3452.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2293.y = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3456.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2293.z = hdLod5(param_50, param_51).x;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3460.xy;
        float param_53 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2293.w = hdLod5(param_52, param_53).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2350 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2293 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3464.xy;
        float param_55 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2356 = hdLod5(param_54, param_55).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_2356;
        float _RESERVED_IDENTIFIER_FIXUP_2361 = float(_RESERVED_IDENTIFIER_FIXUP_2356 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_2361;
        float _RESERVED_IDENTIFIER_FIXUP_2364 = dot(_RESERVED_IDENTIFIER_FIXUP_2350, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3448.z = _RESERVED_IDENTIFIER_FIXUP_2364;
        float _RESERVED_IDENTIFIER_FIXUP_2370 = _RESERVED_IDENTIFIER_FIXUP_2361 + _RESERVED_IDENTIFIER_FIXUP_2364;
        _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_2370;
        float _RESERVED_IDENTIFIER_FIXUP_2375 = (_RESERVED_IDENTIFIER_FIXUP_2370 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_2375;
        _RESERVED_IDENTIFIER_FIXUP_3448.x = (_RESERVED_IDENTIFIER_FIXUP_2221 * _RESERVED_IDENTIFIER_FIXUP_2375) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3800 = _RESERVED_IDENTIFIER_FIXUP_2350;
        _RESERVED_IDENTIFIER_FIXUP_3799 = _RESERVED_IDENTIFIER_FIXUP_3448;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3446 = _RESERVED_IDENTIFIER_FIXUP_3436;
        _RESERVED_IDENTIFIER_FIXUP_3446.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3800 = _RESERVED_IDENTIFIER_FIXUP_3423;
        _RESERVED_IDENTIFIER_FIXUP_3799 = _RESERVED_IDENTIFIER_FIXUP_3446;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3520 = _RESERVED_IDENTIFIER_FIXUP_3799;
    _RESERVED_IDENTIFIER_FIXUP_3520.y = _RESERVED_IDENTIFIER_FIXUP_1491;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3803;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3801;
    if (_RESERVED_IDENTIFIER_FIXUP_1491 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2402 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3681 = _RESERVED_IDENTIFIER_FIXUP_3520;
        _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_2402.x;
        _RESERVED_IDENTIFIER_FIXUP_3681.z = _RESERVED_IDENTIFIER_FIXUP_2402.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2412 = _RESERVED_IDENTIFIER_FIXUP_3681.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3685;
        _RESERVED_IDENTIFIER_FIXUP_3685.x = _RESERVED_IDENTIFIER_FIXUP_2412.x;
        _RESERVED_IDENTIFIER_FIXUP_3685.y = _RESERVED_IDENTIFIER_FIXUP_2412.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2422 = _RESERVED_IDENTIFIER_FIXUP_3681.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3689;
        _RESERVED_IDENTIFIER_FIXUP_3689.x = _RESERVED_IDENTIFIER_FIXUP_2422.x;
        _RESERVED_IDENTIFIER_FIXUP_3689.y = _RESERVED_IDENTIFIER_FIXUP_2422.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2432 = _RESERVED_IDENTIFIER_FIXUP_3681.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3693;
        _RESERVED_IDENTIFIER_FIXUP_3693.x = _RESERVED_IDENTIFIER_FIXUP_2432.x;
        _RESERVED_IDENTIFIER_FIXUP_3693.y = _RESERVED_IDENTIFIER_FIXUP_2432.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2442 = _RESERVED_IDENTIFIER_FIXUP_3681.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3697;
        _RESERVED_IDENTIFIER_FIXUP_3697.x = _RESERVED_IDENTIFIER_FIXUP_2442.x;
        _RESERVED_IDENTIFIER_FIXUP_3697.y = _RESERVED_IDENTIFIER_FIXUP_2442.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2450 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2450.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2450.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2456 = hdLod6(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3685.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3689.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3693.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3697.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3685.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2456.y = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3689.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2456.z = hdLod6(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3693.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2456.w = hdLod6(param_62, param_63).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2513 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2456 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3697.xy;
        float param_65 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2519 = hdLod6(param_64, param_65).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_2519;
        float _RESERVED_IDENTIFIER_FIXUP_2524 = float(_RESERVED_IDENTIFIER_FIXUP_2519 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_2524;
        float _RESERVED_IDENTIFIER_FIXUP_2527 = dot(_RESERVED_IDENTIFIER_FIXUP_2513, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3681.z = _RESERVED_IDENTIFIER_FIXUP_2527;
        float _RESERVED_IDENTIFIER_FIXUP_2533 = _RESERVED_IDENTIFIER_FIXUP_2524 + _RESERVED_IDENTIFIER_FIXUP_2527;
        _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_2533;
        _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_2533 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3803 = _RESERVED_IDENTIFIER_FIXUP_2513;
        _RESERVED_IDENTIFIER_FIXUP_3801 = _RESERVED_IDENTIFIER_FIXUP_3681;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2546 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3525 = _RESERVED_IDENTIFIER_FIXUP_3520;
        _RESERVED_IDENTIFIER_FIXUP_3525.z = _RESERVED_IDENTIFIER_FIXUP_2546;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3804;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3802;
        if (_RESERVED_IDENTIFIER_FIXUP_2546 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2555 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3615 = _RESERVED_IDENTIFIER_FIXUP_3525;
            _RESERVED_IDENTIFIER_FIXUP_3615.z = _RESERVED_IDENTIFIER_FIXUP_2555.x;
            _RESERVED_IDENTIFIER_FIXUP_3615.w = _RESERVED_IDENTIFIER_FIXUP_2555.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2565 = _RESERVED_IDENTIFIER_FIXUP_3615.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3619;
            _RESERVED_IDENTIFIER_FIXUP_3619.x = _RESERVED_IDENTIFIER_FIXUP_2565.x;
            _RESERVED_IDENTIFIER_FIXUP_3619.y = _RESERVED_IDENTIFIER_FIXUP_2565.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2575 = _RESERVED_IDENTIFIER_FIXUP_3615.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3623;
            _RESERVED_IDENTIFIER_FIXUP_3623.x = _RESERVED_IDENTIFIER_FIXUP_2575.x;
            _RESERVED_IDENTIFIER_FIXUP_3623.y = _RESERVED_IDENTIFIER_FIXUP_2575.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2585 = _RESERVED_IDENTIFIER_FIXUP_3615.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3627;
            _RESERVED_IDENTIFIER_FIXUP_3627.x = _RESERVED_IDENTIFIER_FIXUP_2585.x;
            _RESERVED_IDENTIFIER_FIXUP_3627.y = _RESERVED_IDENTIFIER_FIXUP_2585.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2595 = _RESERVED_IDENTIFIER_FIXUP_3615.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3631;
            _RESERVED_IDENTIFIER_FIXUP_3631.x = _RESERVED_IDENTIFIER_FIXUP_2595.x;
            _RESERVED_IDENTIFIER_FIXUP_3631.y = _RESERVED_IDENTIFIER_FIXUP_2595.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2603 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2603.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2603.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2609 = hdLod7(param_66, param_67);
            _RESERVED_IDENTIFIER_FIXUP_3619.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3623.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3627.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3631.w = 0.0;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3619.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2609.y = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3623.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2609.z = hdLod7(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3627.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2609.w = hdLod7(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2666 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2609 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3631.xy;
            float param_75 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2672 = hdLod7(param_74, param_75).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3615.z = _RESERVED_IDENTIFIER_FIXUP_2672;
            float _RESERVED_IDENTIFIER_FIXUP_2677 = float(_RESERVED_IDENTIFIER_FIXUP_2672 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3615.z = _RESERVED_IDENTIFIER_FIXUP_2677;
            float _RESERVED_IDENTIFIER_FIXUP_2680 = dot(_RESERVED_IDENTIFIER_FIXUP_2666, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3615.w = _RESERVED_IDENTIFIER_FIXUP_2680;
            float _RESERVED_IDENTIFIER_FIXUP_2686 = _RESERVED_IDENTIFIER_FIXUP_2677 + _RESERVED_IDENTIFIER_FIXUP_2680;
            _RESERVED_IDENTIFIER_FIXUP_3615.z = _RESERVED_IDENTIFIER_FIXUP_2686;
            _RESERVED_IDENTIFIER_FIXUP_3615.y = _RESERVED_IDENTIFIER_FIXUP_2686 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3804 = _RESERVED_IDENTIFIER_FIXUP_2666;
            _RESERVED_IDENTIFIER_FIXUP_3802 = _RESERVED_IDENTIFIER_FIXUP_3615;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3529 = _RESERVED_IDENTIFIER_FIXUP_3800;
            _RESERVED_IDENTIFIER_FIXUP_3529.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3529.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2702 = (_RESERVED_IDENTIFIER_FIXUP_3529.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3534;
            _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_2702.x;
            _RESERVED_IDENTIFIER_FIXUP_3534.y = _RESERVED_IDENTIFIER_FIXUP_2702.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2712 = _RESERVED_IDENTIFIER_FIXUP_3534.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3538;
            _RESERVED_IDENTIFIER_FIXUP_3538.x = _RESERVED_IDENTIFIER_FIXUP_2712.x;
            _RESERVED_IDENTIFIER_FIXUP_3538.y = _RESERVED_IDENTIFIER_FIXUP_2712.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2722 = _RESERVED_IDENTIFIER_FIXUP_3534.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3542;
            _RESERVED_IDENTIFIER_FIXUP_3542.x = _RESERVED_IDENTIFIER_FIXUP_2722.x;
            _RESERVED_IDENTIFIER_FIXUP_3542.y = _RESERVED_IDENTIFIER_FIXUP_2722.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2732 = _RESERVED_IDENTIFIER_FIXUP_3534.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3546;
            _RESERVED_IDENTIFIER_FIXUP_3546.x = _RESERVED_IDENTIFIER_FIXUP_2732.x;
            _RESERVED_IDENTIFIER_FIXUP_3546.y = _RESERVED_IDENTIFIER_FIXUP_2732.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2742 = _RESERVED_IDENTIFIER_FIXUP_3534.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3550;
            _RESERVED_IDENTIFIER_FIXUP_3550.x = _RESERVED_IDENTIFIER_FIXUP_2742.x;
            _RESERVED_IDENTIFIER_FIXUP_3550.y = _RESERVED_IDENTIFIER_FIXUP_2742.y;
            _RESERVED_IDENTIFIER_FIXUP_3534.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3534.xy;
            float param_77 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2756 = hdLod8(param_76, param_77);
            _RESERVED_IDENTIFIER_FIXUP_3538.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3542.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3546.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3550.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3538.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2756.y = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3542.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2756.z = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3546.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2756.w = hdLod8(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3550.xy;
            float param_85 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2819 = hdLod8(param_84, param_85).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3590 = _RESERVED_IDENTIFIER_FIXUP_3525;
            _RESERVED_IDENTIFIER_FIXUP_3590.z = _RESERVED_IDENTIFIER_FIXUP_2819;
            float _RESERVED_IDENTIFIER_FIXUP_2824 = float(_RESERVED_IDENTIFIER_FIXUP_2819 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3590.z = _RESERVED_IDENTIFIER_FIXUP_2824;
            float _RESERVED_IDENTIFIER_FIXUP_2827 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2756 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3590.w = _RESERVED_IDENTIFIER_FIXUP_2827;
            float _RESERVED_IDENTIFIER_FIXUP_2833 = _RESERVED_IDENTIFIER_FIXUP_2824 + _RESERVED_IDENTIFIER_FIXUP_2827;
            _RESERVED_IDENTIFIER_FIXUP_3590.z = _RESERVED_IDENTIFIER_FIXUP_2833;
            float _RESERVED_IDENTIFIER_FIXUP_2841 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3590.w = _RESERVED_IDENTIFIER_FIXUP_2841;
            float _RESERVED_IDENTIFIER_FIXUP_2847 = clamp((_RESERVED_IDENTIFIER_FIXUP_2841 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3590.w = _RESERVED_IDENTIFIER_FIXUP_2847;
            float _RESERVED_IDENTIFIER_FIXUP_2852 = (_RESERVED_IDENTIFIER_FIXUP_2833 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3590.z = _RESERVED_IDENTIFIER_FIXUP_2852;
            _RESERVED_IDENTIFIER_FIXUP_3590.y = (_RESERVED_IDENTIFIER_FIXUP_2847 * _RESERVED_IDENTIFIER_FIXUP_2852) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3804 = _RESERVED_IDENTIFIER_FIXUP_3529;
            _RESERVED_IDENTIFIER_FIXUP_3802 = _RESERVED_IDENTIFIER_FIXUP_3590;
        }
        _RESERVED_IDENTIFIER_FIXUP_3803 = _RESERVED_IDENTIFIER_FIXUP_3804;
        _RESERVED_IDENTIFIER_FIXUP_3801 = _RESERVED_IDENTIFIER_FIXUP_3802;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2867 = min(_RESERVED_IDENTIFIER_FIXUP_3801.y, _RESERVED_IDENTIFIER_FIXUP_3801.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3749 = _RESERVED_IDENTIFIER_FIXUP_3803;
    _RESERVED_IDENTIFIER_FIXUP_3749.x = _RESERVED_IDENTIFIER_FIXUP_2867;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3815 = vec4((_RESERVED_IDENTIFIER_FIXUP_2867 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2208.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2889 = _RESERVED_IDENTIFIER_FIXUP_3749.xxx * _RESERVED_IDENTIFIER_FIXUP_3815.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3760 = _RESERVED_IDENTIFIER_FIXUP_3815;
    _RESERVED_IDENTIFIER_FIXUP_3760.y = _RESERVED_IDENTIFIER_FIXUP_2889.x;
    _RESERVED_IDENTIFIER_FIXUP_3760.z = _RESERVED_IDENTIFIER_FIXUP_2889.y;
    _RESERVED_IDENTIFIER_FIXUP_3760.w = _RESERVED_IDENTIFIER_FIXUP_2889.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2903 = (_RESERVED_IDENTIFIER_FIXUP_2208.xyz * _RESERVED_IDENTIFIER_FIXUP_3760.xxx) + _RESERVED_IDENTIFIER_FIXUP_3760.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3766 = _RESERVED_IDENTIFIER_FIXUP_2208;
    _RESERVED_IDENTIFIER_FIXUP_3766.x = _RESERVED_IDENTIFIER_FIXUP_2903.x;
    _RESERVED_IDENTIFIER_FIXUP_3766.y = _RESERVED_IDENTIFIER_FIXUP_2903.y;
    _RESERVED_IDENTIFIER_FIXUP_3766.z = _RESERVED_IDENTIFIER_FIXUP_2903.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2916 = _RESERVED_IDENTIFIER_FIXUP_3766.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3772 = _RESERVED_IDENTIFIER_FIXUP_3766;
    _RESERVED_IDENTIFIER_FIXUP_3772.x = _RESERVED_IDENTIFIER_FIXUP_2916.x;
    _RESERVED_IDENTIFIER_FIXUP_3772.y = _RESERVED_IDENTIFIER_FIXUP_2916.y;
    _RESERVED_IDENTIFIER_FIXUP_3772.z = _RESERVED_IDENTIFIER_FIXUP_2916.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3772.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1028 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1037;
    if (_RESERVED_IDENTIFIER_FIXUP_1028)
    {
        _RESERVED_IDENTIFIER_FIXUP_1037 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1037 = _RESERVED_IDENTIFIER_FIXUP_1028;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1037)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1074 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3367.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1100 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2969;
    if (_RESERVED_IDENTIFIER_FIXUP_1074 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2969 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1074), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1100);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2969 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1100);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2969;
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
    vec3 hdB94 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB94.x;
    r4.y = hdB94.y;
    r4.z = hdB94.z;
    vec3 hdB109 = v0.xyz + v0.xyz;
    r5.x = hdB109.x;
    r5.y = hdB109.y;
    r5.z = hdB109.z;
    vec3 hdB120 = r0.xyz * r5.xyz;
    r6.x = hdB120.x;
    r6.y = hdB120.y;
    r6.z = hdB120.z;
    vec4 hdB129 = r0;
    vec3 hdB138 = mix(r6.xyz, hdB129.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB138.x;
    r0.y = hdB138.y;
    r0.z = hdB138.z;
    vec3 hdB149 = r1.xyz * r5.xyz;
    r6.x = hdB149.x;
    r6.y = hdB149.y;
    r6.z = hdB149.z;
    vec4 hdB158 = r1;
    vec3 hdB164 = mix(r6.xyz, hdB158.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB164.x;
    r1.y = hdB164.y;
    r1.z = hdB164.z;
    vec3 hdB175 = r2.xyz * r5.xyz;
    r4.x = hdB175.x;
    r4.y = hdB175.y;
    r4.w = hdB175.z;
    vec4 hdB185 = r2;
    vec3 hdB191 = mix(r4.xyw, hdB185.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB191.x;
    r2.y = hdB191.y;
    r2.z = hdB191.z;
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
        vec2 hdB261 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB261.x;
        r1.z = hdB261.y;
        vec2 hdB272 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB272.x;
        r2.y = hdB272.y;
        vec2 hdB283 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB283.x;
        r3.y = hdB283.y;
        vec2 hdB294 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB294.x;
        r4.y = hdB294.y;
        vec2 hdB305 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB305.x;
        r5.y = hdB305.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r6.xy;
        float param_4 = r6.w;
        r6 = hdLod5(param_3, param_4);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_9 = r4.xy;
        float param_10 = r4.w;
        r4 = hdLod5(param_9, param_10);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_11 = r5.xy;
        float param_12 = r5.w;
        r5 = hdLod5(param_11, param_12);
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
        vec2 hdB435 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB435.x;
        r1.z = hdB435.y;
        vec2 hdB445 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB445.x;
        r2.y = hdB445.y;
        vec2 hdB455 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB455.x;
        r3.y = hdB455.y;
        vec2 hdB465 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB465.x;
        r4.y = hdB465.y;
        vec2 hdB475 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB475.x;
        r5.y = hdB475.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod6(param_13, param_14);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_15 = r2.xy;
        float param_16 = r2.w;
        r2 = hdLod6(param_15, param_16);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_17 = r3.xy;
        float param_18 = r3.w;
        r3 = hdLod6(param_17, param_18);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_19 = r4.xy;
        float param_20 = r4.w;
        r4 = hdLod6(param_19, param_20);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_21 = r5.xy;
        float param_22 = r5.w;
        r5 = hdLod6(param_21, param_22);
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
            vec2 hdB590 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB590.x;
            r1.w = hdB590.y;
            vec2 hdB600 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB600.x;
            r2.y = hdB600.y;
            vec2 hdB610 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB610.x;
            r3.y = hdB610.y;
            vec2 hdB620 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB620.x;
            r4.y = hdB620.y;
            vec2 hdB630 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB630.x;
            r5.y = hdB630.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r6.xy;
            float param_24 = r6.w;
            r6 = hdLod7(param_23, param_24);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod7(param_25, param_26);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod7(param_27, param_28);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_29 = r4.xy;
            float param_30 = r4.w;
            r4 = hdLod7(param_29, param_30);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_31 = r5.xy;
            float param_32 = r5.w;
            r5 = hdLod7(param_31, param_32);
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
            vec2 hdB738 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB738.x;
            r3.y = hdB738.y;
            vec2 hdB748 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB748.x;
            r4.y = hdB748.y;
            vec2 hdB758 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB758.x;
            r5.y = hdB758.y;
            vec2 hdB768 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB768.x;
            r6.y = hdB768.y;
            vec2 hdB778 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB778.x;
            r7.y = hdB778.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_33 = r3.xy;
            float param_34 = r3.w;
            r3 = hdLod8(param_33, param_34);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_35 = r4.xy;
            float param_36 = r4.w;
            r4 = hdLod8(param_35, param_36);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_37 = r5.xy;
            float param_38 = r5.w;
            r5 = hdLod8(param_37, param_38);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_39 = r6.xy;
            float param_40 = r6.w;
            r6 = hdLod8(param_39, param_40);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_41 = r7.xy;
            float param_42 = r7.w;
            r7 = hdLod8(param_41, param_42);
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
    vec3 hdB917 = r0.www * v1.xyz;
    r1.y = hdB917.x;
    r1.z = hdB917.y;
    r1.w = hdB917.z;
    vec4 hdB926 = r1;
    vec3 hdB928 = r2.xxx * hdB926.yzw;
    r1.y = hdB928.x;
    r1.z = hdB928.y;
    r1.w = hdB928.z;
    vec4 hdB935 = r0;
    vec3 hdB942 = (hdB935.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB942.x;
    r0.y = hdB942.y;
    r0.z = hdB942.z;
    vec4 hdB949 = r0;
    vec3 hdB956 = hdB949.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB956.x;
    r0.y = hdB956.y;
    r0.z = hdB956.z;
    vec3 hdB971 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB971.x;
    oC0.y = hdB971.y;
    oC0.z = hdB971.z;
    oC0.w = 1.0;
    bool hdB983 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB991;
    if (hdB983)
    {
        hdB991 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB991 = hdB983;
    }
    if (hdB991)
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
    bool _3406 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3416;
    if (_3406)
    {
        _3416 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3416 = _3406;
    }
    if (_3416)
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
        bool _3441 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3456;
        if (!_3441)
        {
            _3456 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3456 = _3441;
        }
        if (_3456)
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
