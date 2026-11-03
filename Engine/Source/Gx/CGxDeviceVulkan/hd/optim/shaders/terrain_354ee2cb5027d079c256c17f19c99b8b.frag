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
float _RESERVED_IDENTIFIER_FIXUP_3823;
vec4 _RESERVED_IDENTIFIER_FIXUP_3824;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1182 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1186 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1190 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1194 = hdTex3(param_2);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1204 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1182, _RESERVED_IDENTIFIER_FIXUP_1186, _RESERVED_IDENTIFIER_FIXUP_1194.xxxx), _RESERVED_IDENTIFIER_FIXUP_1190, _RESERVED_IDENTIFIER_FIXUP_1194.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1211 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3010 = _RESERVED_IDENTIFIER_FIXUP_1186;
    _RESERVED_IDENTIFIER_FIXUP_3010.x = _RESERVED_IDENTIFIER_FIXUP_1211;
    float _RESERVED_IDENTIFIER_FIXUP_1217 = clamp((_RESERVED_IDENTIFIER_FIXUP_1211 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3010.x = _RESERVED_IDENTIFIER_FIXUP_1217;
    float _RESERVED_IDENTIFIER_FIXUP_1223 = ((-_RESERVED_IDENTIFIER_FIXUP_1217) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3010.x = _RESERVED_IDENTIFIER_FIXUP_1223;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3825;
    if (_RESERVED_IDENTIFIER_FIXUP_1223 != (-_RESERVED_IDENTIFIER_FIXUP_1223))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1235 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3249;
        _RESERVED_IDENTIFIER_FIXUP_3249.x = _RESERVED_IDENTIFIER_FIXUP_1235.x;
        _RESERVED_IDENTIFIER_FIXUP_3249.y = _RESERVED_IDENTIFIER_FIXUP_1235.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1245 = _RESERVED_IDENTIFIER_FIXUP_3249.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3253;
        _RESERVED_IDENTIFIER_FIXUP_3253.x = _RESERVED_IDENTIFIER_FIXUP_1245.x;
        _RESERVED_IDENTIFIER_FIXUP_3253.y = _RESERVED_IDENTIFIER_FIXUP_1245.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1255 = _RESERVED_IDENTIFIER_FIXUP_3249.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3257;
        _RESERVED_IDENTIFIER_FIXUP_3257.x = _RESERVED_IDENTIFIER_FIXUP_1255.x;
        _RESERVED_IDENTIFIER_FIXUP_3257.y = _RESERVED_IDENTIFIER_FIXUP_1255.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_3249.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3261;
        _RESERVED_IDENTIFIER_FIXUP_3261.x = _RESERVED_IDENTIFIER_FIXUP_1265.x;
        _RESERVED_IDENTIFIER_FIXUP_3261.y = _RESERVED_IDENTIFIER_FIXUP_1265.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1275 = _RESERVED_IDENTIFIER_FIXUP_3249.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3265;
        _RESERVED_IDENTIFIER_FIXUP_3265.x = _RESERVED_IDENTIFIER_FIXUP_1275.x;
        _RESERVED_IDENTIFIER_FIXUP_3265.y = _RESERVED_IDENTIFIER_FIXUP_1275.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1285 = _RESERVED_IDENTIFIER_FIXUP_3249.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3269;
        _RESERVED_IDENTIFIER_FIXUP_3269.x = _RESERVED_IDENTIFIER_FIXUP_1285.x;
        _RESERVED_IDENTIFIER_FIXUP_3269.y = _RESERVED_IDENTIFIER_FIXUP_1285.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1295 = _RESERVED_IDENTIFIER_FIXUP_3249.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3273;
        _RESERVED_IDENTIFIER_FIXUP_3273.x = _RESERVED_IDENTIFIER_FIXUP_1295.x;
        _RESERVED_IDENTIFIER_FIXUP_3273.y = _RESERVED_IDENTIFIER_FIXUP_1295.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1305 = _RESERVED_IDENTIFIER_FIXUP_3249.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3277;
        _RESERVED_IDENTIFIER_FIXUP_3277.x = _RESERVED_IDENTIFIER_FIXUP_1305.x;
        _RESERVED_IDENTIFIER_FIXUP_3277.y = _RESERVED_IDENTIFIER_FIXUP_1305.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1315 = _RESERVED_IDENTIFIER_FIXUP_3249.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3281;
        _RESERVED_IDENTIFIER_FIXUP_3281.x = _RESERVED_IDENTIFIER_FIXUP_1315.x;
        _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_1315.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1323 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1323.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1323.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1329 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3253.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3257.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3261.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3265.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3265.xy;
        float param_6 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1369 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3269.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3273.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3277.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3281.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3281.xy;
        float param_8 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1409 = hdLod5(param_7, param_8);
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3253.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1329.y = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3257.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1329.z = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3261.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1329.w = hdLod5(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3269.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1369.y = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3273.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1369.z = hdLod5(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3277.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1369.w = hdLod5(param_19, param_20).x;
        float _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_1409.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3346 = _RESERVED_IDENTIFIER_FIXUP_1409;
        _RESERVED_IDENTIFIER_FIXUP_3346.x = _RESERVED_IDENTIFIER_FIXUP_1449;
        float _RESERVED_IDENTIFIER_FIXUP_1454 = float(_RESERVED_IDENTIFIER_FIXUP_1449 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3346.x = _RESERVED_IDENTIFIER_FIXUP_1454;
        float _RESERVED_IDENTIFIER_FIXUP_1457 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1329 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3346.y = _RESERVED_IDENTIFIER_FIXUP_1457;
        float _RESERVED_IDENTIFIER_FIXUP_1460 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1369 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3346.z = _RESERVED_IDENTIFIER_FIXUP_1460;
        float _RESERVED_IDENTIFIER_FIXUP_1466 = _RESERVED_IDENTIFIER_FIXUP_1457 + _RESERVED_IDENTIFIER_FIXUP_1460;
        _RESERVED_IDENTIFIER_FIXUP_3346.y = _RESERVED_IDENTIFIER_FIXUP_1466;
        float _RESERVED_IDENTIFIER_FIXUP_1472 = _RESERVED_IDENTIFIER_FIXUP_1454 + _RESERVED_IDENTIFIER_FIXUP_1466;
        _RESERVED_IDENTIFIER_FIXUP_3346.x = _RESERVED_IDENTIFIER_FIXUP_1472;
        _RESERVED_IDENTIFIER_FIXUP_3346.x = _RESERVED_IDENTIFIER_FIXUP_1472 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3825 = _RESERVED_IDENTIFIER_FIXUP_3346;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1485 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3010.y = _RESERVED_IDENTIFIER_FIXUP_1485;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3826;
        if (_RESERVED_IDENTIFIER_FIXUP_1485 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1494 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3183 = _RESERVED_IDENTIFIER_FIXUP_3010;
            _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_1494.x;
            _RESERVED_IDENTIFIER_FIXUP_3183.z = _RESERVED_IDENTIFIER_FIXUP_1494.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1504 = _RESERVED_IDENTIFIER_FIXUP_3183.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3187;
            _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1504.x;
            _RESERVED_IDENTIFIER_FIXUP_3187.y = _RESERVED_IDENTIFIER_FIXUP_1504.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_3183.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3191;
            _RESERVED_IDENTIFIER_FIXUP_3191.x = _RESERVED_IDENTIFIER_FIXUP_1514.x;
            _RESERVED_IDENTIFIER_FIXUP_3191.y = _RESERVED_IDENTIFIER_FIXUP_1514.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1524 = _RESERVED_IDENTIFIER_FIXUP_3183.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3195;
            _RESERVED_IDENTIFIER_FIXUP_3195.x = _RESERVED_IDENTIFIER_FIXUP_1524.x;
            _RESERVED_IDENTIFIER_FIXUP_3195.y = _RESERVED_IDENTIFIER_FIXUP_1524.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1534 = _RESERVED_IDENTIFIER_FIXUP_3183.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3199;
            _RESERVED_IDENTIFIER_FIXUP_3199.x = _RESERVED_IDENTIFIER_FIXUP_1534.x;
            _RESERVED_IDENTIFIER_FIXUP_3199.y = _RESERVED_IDENTIFIER_FIXUP_1534.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1542 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1542.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1542.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1548 = hdLod6(param_21, param_22);
            _RESERVED_IDENTIFIER_FIXUP_3187.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3191.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3195.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3199.w = 0.0;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3187.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1548.y = hdLod6(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3191.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1548.z = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3195.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1548.w = hdLod6(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3199.xy;
            float param_30 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1611 = hdLod6(param_29, param_30).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_1611;
            float _RESERVED_IDENTIFIER_FIXUP_1616 = float(_RESERVED_IDENTIFIER_FIXUP_1611 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_1616;
            float _RESERVED_IDENTIFIER_FIXUP_1619 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1548 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3183.z = _RESERVED_IDENTIFIER_FIXUP_1619;
            float _RESERVED_IDENTIFIER_FIXUP_1625 = _RESERVED_IDENTIFIER_FIXUP_1616 + _RESERVED_IDENTIFIER_FIXUP_1619;
            _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_1625;
            _RESERVED_IDENTIFIER_FIXUP_3183.x = _RESERVED_IDENTIFIER_FIXUP_1625 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3826 = _RESERVED_IDENTIFIER_FIXUP_3183;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1638 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3027 = _RESERVED_IDENTIFIER_FIXUP_3010;
            _RESERVED_IDENTIFIER_FIXUP_3027.y = _RESERVED_IDENTIFIER_FIXUP_1638;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3827;
            if (_RESERVED_IDENTIFIER_FIXUP_1638 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1647 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3117 = _RESERVED_IDENTIFIER_FIXUP_3027;
                _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1647.x;
                _RESERVED_IDENTIFIER_FIXUP_3117.z = _RESERVED_IDENTIFIER_FIXUP_1647.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1657 = _RESERVED_IDENTIFIER_FIXUP_3117.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3121;
                _RESERVED_IDENTIFIER_FIXUP_3121.x = _RESERVED_IDENTIFIER_FIXUP_1657.x;
                _RESERVED_IDENTIFIER_FIXUP_3121.y = _RESERVED_IDENTIFIER_FIXUP_1657.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1667 = _RESERVED_IDENTIFIER_FIXUP_3117.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3125;
                _RESERVED_IDENTIFIER_FIXUP_3125.x = _RESERVED_IDENTIFIER_FIXUP_1667.x;
                _RESERVED_IDENTIFIER_FIXUP_3125.y = _RESERVED_IDENTIFIER_FIXUP_1667.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1677 = _RESERVED_IDENTIFIER_FIXUP_3117.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3129;
                _RESERVED_IDENTIFIER_FIXUP_3129.x = _RESERVED_IDENTIFIER_FIXUP_1677.x;
                _RESERVED_IDENTIFIER_FIXUP_3129.y = _RESERVED_IDENTIFIER_FIXUP_1677.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1687 = _RESERVED_IDENTIFIER_FIXUP_3117.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3133;
                _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1687.x;
                _RESERVED_IDENTIFIER_FIXUP_3133.y = _RESERVED_IDENTIFIER_FIXUP_1687.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1695 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1695.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1695.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1701 = hdLod7(param_31, param_32);
                _RESERVED_IDENTIFIER_FIXUP_3121.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3125.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3129.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3133.w = 0.0;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3121.xy;
                float param_34 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1701.y = hdLod7(param_33, param_34).x;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3125.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1701.z = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3129.xy;
                float param_38 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1701.w = hdLod7(param_37, param_38).x;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3133.xy;
                float param_40 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1764 = hdLod7(param_39, param_40).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1764;
                float _RESERVED_IDENTIFIER_FIXUP_1769 = float(_RESERVED_IDENTIFIER_FIXUP_1764 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1769;
                float _RESERVED_IDENTIFIER_FIXUP_1772 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1701 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3117.z = _RESERVED_IDENTIFIER_FIXUP_1772;
                float _RESERVED_IDENTIFIER_FIXUP_1778 = _RESERVED_IDENTIFIER_FIXUP_1769 + _RESERVED_IDENTIFIER_FIXUP_1772;
                _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1778;
                _RESERVED_IDENTIFIER_FIXUP_3117.x = _RESERVED_IDENTIFIER_FIXUP_1778 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3827 = _RESERVED_IDENTIFIER_FIXUP_3117;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_1190.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_1190.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1794 = (_RESERVED_IDENTIFIER_FIXUP_1190.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3036;
                _RESERVED_IDENTIFIER_FIXUP_3036.x = _RESERVED_IDENTIFIER_FIXUP_1794.x;
                _RESERVED_IDENTIFIER_FIXUP_3036.y = _RESERVED_IDENTIFIER_FIXUP_1794.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1804 = _RESERVED_IDENTIFIER_FIXUP_3036.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3040;
                _RESERVED_IDENTIFIER_FIXUP_3040.x = _RESERVED_IDENTIFIER_FIXUP_1804.x;
                _RESERVED_IDENTIFIER_FIXUP_3040.y = _RESERVED_IDENTIFIER_FIXUP_1804.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1814 = _RESERVED_IDENTIFIER_FIXUP_3036.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3044;
                _RESERVED_IDENTIFIER_FIXUP_3044.x = _RESERVED_IDENTIFIER_FIXUP_1814.x;
                _RESERVED_IDENTIFIER_FIXUP_3044.y = _RESERVED_IDENTIFIER_FIXUP_1814.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1824 = _RESERVED_IDENTIFIER_FIXUP_3036.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3048;
                _RESERVED_IDENTIFIER_FIXUP_3048.x = _RESERVED_IDENTIFIER_FIXUP_1824.x;
                _RESERVED_IDENTIFIER_FIXUP_3048.y = _RESERVED_IDENTIFIER_FIXUP_1824.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1834 = _RESERVED_IDENTIFIER_FIXUP_3036.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3052;
                _RESERVED_IDENTIFIER_FIXUP_3052.x = _RESERVED_IDENTIFIER_FIXUP_1834.x;
                _RESERVED_IDENTIFIER_FIXUP_3052.y = _RESERVED_IDENTIFIER_FIXUP_1834.y;
                _RESERVED_IDENTIFIER_FIXUP_3036.w = 0.0;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3036.xy;
                float param_42 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1848 = hdLod8(param_41, param_42);
                _RESERVED_IDENTIFIER_FIXUP_3040.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3044.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3048.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3052.w = 0.0;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3040.xy;
                float param_44 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1848.y = hdLod8(param_43, param_44).x;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3044.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1848.z = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3048.xy;
                float param_48 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1848.w = hdLod8(param_47, param_48).x;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3052.xy;
                float param_50 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1911 = hdLod8(param_49, param_50).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3092 = _RESERVED_IDENTIFIER_FIXUP_3027;
                _RESERVED_IDENTIFIER_FIXUP_3092.y = _RESERVED_IDENTIFIER_FIXUP_1911;
                float _RESERVED_IDENTIFIER_FIXUP_1916 = float(_RESERVED_IDENTIFIER_FIXUP_1911 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3092.y = _RESERVED_IDENTIFIER_FIXUP_1916;
                float _RESERVED_IDENTIFIER_FIXUP_1919 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1848 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3092.z = _RESERVED_IDENTIFIER_FIXUP_1919;
                float _RESERVED_IDENTIFIER_FIXUP_1925 = _RESERVED_IDENTIFIER_FIXUP_1916 + _RESERVED_IDENTIFIER_FIXUP_1919;
                _RESERVED_IDENTIFIER_FIXUP_3092.y = _RESERVED_IDENTIFIER_FIXUP_1925;
                float _RESERVED_IDENTIFIER_FIXUP_1933 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3092.z = _RESERVED_IDENTIFIER_FIXUP_1933;
                float _RESERVED_IDENTIFIER_FIXUP_1939 = clamp((_RESERVED_IDENTIFIER_FIXUP_1933 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3092.z = _RESERVED_IDENTIFIER_FIXUP_1939;
                float _RESERVED_IDENTIFIER_FIXUP_1944 = (_RESERVED_IDENTIFIER_FIXUP_1925 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3092.y = _RESERVED_IDENTIFIER_FIXUP_1944;
                _RESERVED_IDENTIFIER_FIXUP_3092.x = (_RESERVED_IDENTIFIER_FIXUP_1939 * _RESERVED_IDENTIFIER_FIXUP_1944) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3827 = _RESERVED_IDENTIFIER_FIXUP_3092;
            }
            _RESERVED_IDENTIFIER_FIXUP_3826 = _RESERVED_IDENTIFIER_FIXUP_3827;
        }
        _RESERVED_IDENTIFIER_FIXUP_3825 = _RESERVED_IDENTIFIER_FIXUP_3826;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3369 = _RESERVED_IDENTIFIER_FIXUP_3825;
    _RESERVED_IDENTIFIER_FIXUP_3369.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1972 = _RESERVED_IDENTIFIER_FIXUP_1204.xyz * _RESERVED_IDENTIFIER_FIXUP_3369.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3371 = _RESERVED_IDENTIFIER_FIXUP_1204;
    _RESERVED_IDENTIFIER_FIXUP_3371.x = _RESERVED_IDENTIFIER_FIXUP_1972.x;
    _RESERVED_IDENTIFIER_FIXUP_3371.y = _RESERVED_IDENTIFIER_FIXUP_1972.y;
    _RESERVED_IDENTIFIER_FIXUP_3371.z = _RESERVED_IDENTIFIER_FIXUP_1972.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1983 = _RESERVED_IDENTIFIER_FIXUP_3371.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3823).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3377 = _RESERVED_IDENTIFIER_FIXUP_3371;
    _RESERVED_IDENTIFIER_FIXUP_3377.x = _RESERVED_IDENTIFIER_FIXUP_1983.x;
    _RESERVED_IDENTIFIER_FIXUP_3377.y = _RESERVED_IDENTIFIER_FIXUP_1983.y;
    _RESERVED_IDENTIFIER_FIXUP_3377.z = _RESERVED_IDENTIFIER_FIXUP_1983.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1994 = _RESERVED_IDENTIFIER_FIXUP_3377.xyz + _RESERVED_IDENTIFIER_FIXUP_3377.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3383 = _RESERVED_IDENTIFIER_FIXUP_3377;
    _RESERVED_IDENTIFIER_FIXUP_3383.x = _RESERVED_IDENTIFIER_FIXUP_1994.x;
    _RESERVED_IDENTIFIER_FIXUP_3383.y = _RESERVED_IDENTIFIER_FIXUP_1994.y;
    _RESERVED_IDENTIFIER_FIXUP_3383.z = _RESERVED_IDENTIFIER_FIXUP_1994.z;
    _RESERVED_IDENTIFIER_FIXUP_3369.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3369.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3369.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2019 = (_RESERVED_IDENTIFIER_FIXUP_3369.yzw * _RESERVED_IDENTIFIER_FIXUP_3369.xxx) + _RESERVED_IDENTIFIER_FIXUP_3383.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3395 = _RESERVED_IDENTIFIER_FIXUP_3383;
    _RESERVED_IDENTIFIER_FIXUP_3395.x = _RESERVED_IDENTIFIER_FIXUP_2019.x;
    _RESERVED_IDENTIFIER_FIXUP_3395.y = _RESERVED_IDENTIFIER_FIXUP_2019.y;
    _RESERVED_IDENTIFIER_FIXUP_3395.z = _RESERVED_IDENTIFIER_FIXUP_2019.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2032 = _RESERVED_IDENTIFIER_FIXUP_3395.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3401 = _RESERVED_IDENTIFIER_FIXUP_3395;
    _RESERVED_IDENTIFIER_FIXUP_3401.x = _RESERVED_IDENTIFIER_FIXUP_2032.x;
    _RESERVED_IDENTIFIER_FIXUP_3401.y = _RESERVED_IDENTIFIER_FIXUP_2032.y;
    _RESERVED_IDENTIFIER_FIXUP_3401.z = _RESERVED_IDENTIFIER_FIXUP_2032.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2091 = OptTex0( texcoord0.xyz);
    vec2 param_51 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2095 = hdTex1(param_51);
    vec2 param_52 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2099 = hdTex2(param_52);
    vec2 param_53 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2103 = hdTex3(param_53);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2113 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2091, _RESERVED_IDENTIFIER_FIXUP_2095, _RESERVED_IDENTIFIER_FIXUP_2103.xxxx), _RESERVED_IDENTIFIER_FIXUP_2099, _RESERVED_IDENTIFIER_FIXUP_2103.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3417 = _RESERVED_IDENTIFIER_FIXUP_2095;
    _RESERVED_IDENTIFIER_FIXUP_3417.x = _RESERVED_IDENTIFIER_FIXUP_1211;
    float _RESERVED_IDENTIFIER_FIXUP_2126 = clamp((_RESERVED_IDENTIFIER_FIXUP_1211 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3417.x = _RESERVED_IDENTIFIER_FIXUP_2126;
    float _RESERVED_IDENTIFIER_FIXUP_2132 = ((-_RESERVED_IDENTIFIER_FIXUP_2126) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3417.x = _RESERVED_IDENTIFIER_FIXUP_2132;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3834;
    if (_RESERVED_IDENTIFIER_FIXUP_2132 != (-_RESERVED_IDENTIFIER_FIXUP_2132))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2144 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3656;
        _RESERVED_IDENTIFIER_FIXUP_3656.x = _RESERVED_IDENTIFIER_FIXUP_2144.x;
        _RESERVED_IDENTIFIER_FIXUP_3656.y = _RESERVED_IDENTIFIER_FIXUP_2144.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2154 = _RESERVED_IDENTIFIER_FIXUP_3656.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3660;
        _RESERVED_IDENTIFIER_FIXUP_3660.x = _RESERVED_IDENTIFIER_FIXUP_2154.x;
        _RESERVED_IDENTIFIER_FIXUP_3660.y = _RESERVED_IDENTIFIER_FIXUP_2154.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2164 = _RESERVED_IDENTIFIER_FIXUP_3656.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3664;
        _RESERVED_IDENTIFIER_FIXUP_3664.x = _RESERVED_IDENTIFIER_FIXUP_2164.x;
        _RESERVED_IDENTIFIER_FIXUP_3664.y = _RESERVED_IDENTIFIER_FIXUP_2164.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2174 = _RESERVED_IDENTIFIER_FIXUP_3656.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3668;
        _RESERVED_IDENTIFIER_FIXUP_3668.x = _RESERVED_IDENTIFIER_FIXUP_2174.x;
        _RESERVED_IDENTIFIER_FIXUP_3668.y = _RESERVED_IDENTIFIER_FIXUP_2174.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2184 = _RESERVED_IDENTIFIER_FIXUP_3656.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3672;
        _RESERVED_IDENTIFIER_FIXUP_3672.x = _RESERVED_IDENTIFIER_FIXUP_2184.x;
        _RESERVED_IDENTIFIER_FIXUP_3672.y = _RESERVED_IDENTIFIER_FIXUP_2184.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2194 = _RESERVED_IDENTIFIER_FIXUP_3656.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3676;
        _RESERVED_IDENTIFIER_FIXUP_3676.x = _RESERVED_IDENTIFIER_FIXUP_2194.x;
        _RESERVED_IDENTIFIER_FIXUP_3676.y = _RESERVED_IDENTIFIER_FIXUP_2194.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2204 = _RESERVED_IDENTIFIER_FIXUP_3656.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3680;
        _RESERVED_IDENTIFIER_FIXUP_3680.x = _RESERVED_IDENTIFIER_FIXUP_2204.x;
        _RESERVED_IDENTIFIER_FIXUP_3680.y = _RESERVED_IDENTIFIER_FIXUP_2204.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2214 = _RESERVED_IDENTIFIER_FIXUP_3656.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3684;
        _RESERVED_IDENTIFIER_FIXUP_3684.x = _RESERVED_IDENTIFIER_FIXUP_2214.x;
        _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_2214.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2224 = _RESERVED_IDENTIFIER_FIXUP_3656.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3688;
        _RESERVED_IDENTIFIER_FIXUP_3688.x = _RESERVED_IDENTIFIER_FIXUP_2224.x;
        _RESERVED_IDENTIFIER_FIXUP_3688.y = _RESERVED_IDENTIFIER_FIXUP_2224.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2232 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2232.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2232.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2238 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3660.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3664.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3668.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3672.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3672.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2278 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3676.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3680.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3684.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3688.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3688.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2318 = hdLod5(param_58, param_59);
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3660.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2238.y = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3664.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2238.z = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3668.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2238.w = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3676.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2278.y = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3680.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2278.z = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3684.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2278.w = hdLod5(param_70, param_71).x;
        float _RESERVED_IDENTIFIER_FIXUP_2358 = _RESERVED_IDENTIFIER_FIXUP_2318.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3753 = _RESERVED_IDENTIFIER_FIXUP_2318;
        _RESERVED_IDENTIFIER_FIXUP_3753.x = _RESERVED_IDENTIFIER_FIXUP_2358;
        float _RESERVED_IDENTIFIER_FIXUP_2363 = float(_RESERVED_IDENTIFIER_FIXUP_2358 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3753.x = _RESERVED_IDENTIFIER_FIXUP_2363;
        float _RESERVED_IDENTIFIER_FIXUP_2366 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2238 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3753.y = _RESERVED_IDENTIFIER_FIXUP_2366;
        float _RESERVED_IDENTIFIER_FIXUP_2369 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2278 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3753.z = _RESERVED_IDENTIFIER_FIXUP_2369;
        float _RESERVED_IDENTIFIER_FIXUP_2375 = _RESERVED_IDENTIFIER_FIXUP_2366 + _RESERVED_IDENTIFIER_FIXUP_2369;
        _RESERVED_IDENTIFIER_FIXUP_3753.y = _RESERVED_IDENTIFIER_FIXUP_2375;
        float _RESERVED_IDENTIFIER_FIXUP_2381 = _RESERVED_IDENTIFIER_FIXUP_2363 + _RESERVED_IDENTIFIER_FIXUP_2375;
        _RESERVED_IDENTIFIER_FIXUP_3753.x = _RESERVED_IDENTIFIER_FIXUP_2381;
        _RESERVED_IDENTIFIER_FIXUP_3753.x = _RESERVED_IDENTIFIER_FIXUP_2381 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3834 = _RESERVED_IDENTIFIER_FIXUP_3753;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2394 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3417.y = _RESERVED_IDENTIFIER_FIXUP_2394;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3835;
        if (_RESERVED_IDENTIFIER_FIXUP_2394 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2403 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3590 = _RESERVED_IDENTIFIER_FIXUP_3417;
            _RESERVED_IDENTIFIER_FIXUP_3590.y = _RESERVED_IDENTIFIER_FIXUP_2403.x;
            _RESERVED_IDENTIFIER_FIXUP_3590.z = _RESERVED_IDENTIFIER_FIXUP_2403.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2413 = _RESERVED_IDENTIFIER_FIXUP_3590.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3594;
            _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2413.x;
            _RESERVED_IDENTIFIER_FIXUP_3594.y = _RESERVED_IDENTIFIER_FIXUP_2413.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2423 = _RESERVED_IDENTIFIER_FIXUP_3590.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3598;
            _RESERVED_IDENTIFIER_FIXUP_3598.x = _RESERVED_IDENTIFIER_FIXUP_2423.x;
            _RESERVED_IDENTIFIER_FIXUP_3598.y = _RESERVED_IDENTIFIER_FIXUP_2423.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2433 = _RESERVED_IDENTIFIER_FIXUP_3590.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3602;
            _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2433.x;
            _RESERVED_IDENTIFIER_FIXUP_3602.y = _RESERVED_IDENTIFIER_FIXUP_2433.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2443 = _RESERVED_IDENTIFIER_FIXUP_3590.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3606;
            _RESERVED_IDENTIFIER_FIXUP_3606.x = _RESERVED_IDENTIFIER_FIXUP_2443.x;
            _RESERVED_IDENTIFIER_FIXUP_3606.y = _RESERVED_IDENTIFIER_FIXUP_2443.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2451 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2451.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2451.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2457 = hdLod6(param_72, param_73);
            _RESERVED_IDENTIFIER_FIXUP_3594.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3598.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3602.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3606.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3594.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2457.y = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3598.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2457.z = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3602.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2457.w = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3606.xy;
            float param_81 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2520 = hdLod6(param_80, param_81).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3590.y = _RESERVED_IDENTIFIER_FIXUP_2520;
            float _RESERVED_IDENTIFIER_FIXUP_2525 = float(_RESERVED_IDENTIFIER_FIXUP_2520 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3590.y = _RESERVED_IDENTIFIER_FIXUP_2525;
            float _RESERVED_IDENTIFIER_FIXUP_2528 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2457 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3590.z = _RESERVED_IDENTIFIER_FIXUP_2528;
            float _RESERVED_IDENTIFIER_FIXUP_2534 = _RESERVED_IDENTIFIER_FIXUP_2525 + _RESERVED_IDENTIFIER_FIXUP_2528;
            _RESERVED_IDENTIFIER_FIXUP_3590.y = _RESERVED_IDENTIFIER_FIXUP_2534;
            _RESERVED_IDENTIFIER_FIXUP_3590.x = _RESERVED_IDENTIFIER_FIXUP_2534 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3835 = _RESERVED_IDENTIFIER_FIXUP_3590;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2547 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3434 = _RESERVED_IDENTIFIER_FIXUP_3417;
            _RESERVED_IDENTIFIER_FIXUP_3434.y = _RESERVED_IDENTIFIER_FIXUP_2547;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3836;
            if (_RESERVED_IDENTIFIER_FIXUP_2547 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2556 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3524 = _RESERVED_IDENTIFIER_FIXUP_3434;
                _RESERVED_IDENTIFIER_FIXUP_3524.y = _RESERVED_IDENTIFIER_FIXUP_2556.x;
                _RESERVED_IDENTIFIER_FIXUP_3524.z = _RESERVED_IDENTIFIER_FIXUP_2556.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2566 = _RESERVED_IDENTIFIER_FIXUP_3524.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3528;
                _RESERVED_IDENTIFIER_FIXUP_3528.x = _RESERVED_IDENTIFIER_FIXUP_2566.x;
                _RESERVED_IDENTIFIER_FIXUP_3528.y = _RESERVED_IDENTIFIER_FIXUP_2566.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2576 = _RESERVED_IDENTIFIER_FIXUP_3524.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3532;
                _RESERVED_IDENTIFIER_FIXUP_3532.x = _RESERVED_IDENTIFIER_FIXUP_2576.x;
                _RESERVED_IDENTIFIER_FIXUP_3532.y = _RESERVED_IDENTIFIER_FIXUP_2576.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2586 = _RESERVED_IDENTIFIER_FIXUP_3524.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3536;
                _RESERVED_IDENTIFIER_FIXUP_3536.x = _RESERVED_IDENTIFIER_FIXUP_2586.x;
                _RESERVED_IDENTIFIER_FIXUP_3536.y = _RESERVED_IDENTIFIER_FIXUP_2586.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2596 = _RESERVED_IDENTIFIER_FIXUP_3524.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3540;
                _RESERVED_IDENTIFIER_FIXUP_3540.x = _RESERVED_IDENTIFIER_FIXUP_2596.x;
                _RESERVED_IDENTIFIER_FIXUP_3540.y = _RESERVED_IDENTIFIER_FIXUP_2596.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2604 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2604.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2604.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2610 = hdLod7(param_82, param_83);
                _RESERVED_IDENTIFIER_FIXUP_3528.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3532.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3536.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3540.w = 0.0;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3528.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2610.y = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3532.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2610.z = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3536.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2610.w = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3540.xy;
                float param_91 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2673 = hdLod7(param_90, param_91).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3524.y = _RESERVED_IDENTIFIER_FIXUP_2673;
                float _RESERVED_IDENTIFIER_FIXUP_2678 = float(_RESERVED_IDENTIFIER_FIXUP_2673 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3524.y = _RESERVED_IDENTIFIER_FIXUP_2678;
                float _RESERVED_IDENTIFIER_FIXUP_2681 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2610 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3524.z = _RESERVED_IDENTIFIER_FIXUP_2681;
                float _RESERVED_IDENTIFIER_FIXUP_2687 = _RESERVED_IDENTIFIER_FIXUP_2678 + _RESERVED_IDENTIFIER_FIXUP_2681;
                _RESERVED_IDENTIFIER_FIXUP_3524.y = _RESERVED_IDENTIFIER_FIXUP_2687;
                _RESERVED_IDENTIFIER_FIXUP_3524.x = _RESERVED_IDENTIFIER_FIXUP_2687 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3836 = _RESERVED_IDENTIFIER_FIXUP_3524;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_2099.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2099.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2703 = (_RESERVED_IDENTIFIER_FIXUP_2099.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3443;
                _RESERVED_IDENTIFIER_FIXUP_3443.x = _RESERVED_IDENTIFIER_FIXUP_2703.x;
                _RESERVED_IDENTIFIER_FIXUP_3443.y = _RESERVED_IDENTIFIER_FIXUP_2703.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2713 = _RESERVED_IDENTIFIER_FIXUP_3443.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3447;
                _RESERVED_IDENTIFIER_FIXUP_3447.x = _RESERVED_IDENTIFIER_FIXUP_2713.x;
                _RESERVED_IDENTIFIER_FIXUP_3447.y = _RESERVED_IDENTIFIER_FIXUP_2713.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2723 = _RESERVED_IDENTIFIER_FIXUP_3443.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3451;
                _RESERVED_IDENTIFIER_FIXUP_3451.x = _RESERVED_IDENTIFIER_FIXUP_2723.x;
                _RESERVED_IDENTIFIER_FIXUP_3451.y = _RESERVED_IDENTIFIER_FIXUP_2723.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2733 = _RESERVED_IDENTIFIER_FIXUP_3443.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3455;
                _RESERVED_IDENTIFIER_FIXUP_3455.x = _RESERVED_IDENTIFIER_FIXUP_2733.x;
                _RESERVED_IDENTIFIER_FIXUP_3455.y = _RESERVED_IDENTIFIER_FIXUP_2733.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2743 = _RESERVED_IDENTIFIER_FIXUP_3443.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3459;
                _RESERVED_IDENTIFIER_FIXUP_3459.x = _RESERVED_IDENTIFIER_FIXUP_2743.x;
                _RESERVED_IDENTIFIER_FIXUP_3459.y = _RESERVED_IDENTIFIER_FIXUP_2743.y;
                _RESERVED_IDENTIFIER_FIXUP_3443.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3443.xy;
                float param_93 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2757 = hdLod8(param_92, param_93);
                _RESERVED_IDENTIFIER_FIXUP_3447.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3451.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3455.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3459.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3447.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2757.y = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3451.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2757.z = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3455.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2757.w = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3459.xy;
                float param_101 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2820 = hdLod8(param_100, param_101).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3499 = _RESERVED_IDENTIFIER_FIXUP_3434;
                _RESERVED_IDENTIFIER_FIXUP_3499.y = _RESERVED_IDENTIFIER_FIXUP_2820;
                float _RESERVED_IDENTIFIER_FIXUP_2825 = float(_RESERVED_IDENTIFIER_FIXUP_2820 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3499.y = _RESERVED_IDENTIFIER_FIXUP_2825;
                float _RESERVED_IDENTIFIER_FIXUP_2828 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2757 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3499.z = _RESERVED_IDENTIFIER_FIXUP_2828;
                float _RESERVED_IDENTIFIER_FIXUP_2834 = _RESERVED_IDENTIFIER_FIXUP_2825 + _RESERVED_IDENTIFIER_FIXUP_2828;
                _RESERVED_IDENTIFIER_FIXUP_3499.y = _RESERVED_IDENTIFIER_FIXUP_2834;
                float _RESERVED_IDENTIFIER_FIXUP_2842 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3499.z = _RESERVED_IDENTIFIER_FIXUP_2842;
                float _RESERVED_IDENTIFIER_FIXUP_2848 = clamp((_RESERVED_IDENTIFIER_FIXUP_2842 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3499.z = _RESERVED_IDENTIFIER_FIXUP_2848;
                float _RESERVED_IDENTIFIER_FIXUP_2853 = (_RESERVED_IDENTIFIER_FIXUP_2834 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3499.y = _RESERVED_IDENTIFIER_FIXUP_2853;
                _RESERVED_IDENTIFIER_FIXUP_3499.x = (_RESERVED_IDENTIFIER_FIXUP_2848 * _RESERVED_IDENTIFIER_FIXUP_2853) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3836 = _RESERVED_IDENTIFIER_FIXUP_3499;
            }
            _RESERVED_IDENTIFIER_FIXUP_3835 = _RESERVED_IDENTIFIER_FIXUP_3836;
        }
        _RESERVED_IDENTIFIER_FIXUP_3834 = _RESERVED_IDENTIFIER_FIXUP_3835;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2868 = (_RESERVED_IDENTIFIER_FIXUP_3834.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3774 = _RESERVED_IDENTIFIER_FIXUP_3834;
    _RESERVED_IDENTIFIER_FIXUP_3774.y = _RESERVED_IDENTIFIER_FIXUP_2868;
    _RESERVED_IDENTIFIER_FIXUP_3774.y = _RESERVED_IDENTIFIER_FIXUP_2868;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2881 = _RESERVED_IDENTIFIER_FIXUP_2113.xyz * _RESERVED_IDENTIFIER_FIXUP_3774.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3780 = _RESERVED_IDENTIFIER_FIXUP_2113;
    _RESERVED_IDENTIFIER_FIXUP_3780.x = _RESERVED_IDENTIFIER_FIXUP_2881.x;
    _RESERVED_IDENTIFIER_FIXUP_3780.y = _RESERVED_IDENTIFIER_FIXUP_2881.y;
    _RESERVED_IDENTIFIER_FIXUP_3780.z = _RESERVED_IDENTIFIER_FIXUP_2881.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2892 = _RESERVED_IDENTIFIER_FIXUP_3780.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3786 = _RESERVED_IDENTIFIER_FIXUP_3780;
    _RESERVED_IDENTIFIER_FIXUP_3786.x = _RESERVED_IDENTIFIER_FIXUP_2892.x;
    _RESERVED_IDENTIFIER_FIXUP_3786.y = _RESERVED_IDENTIFIER_FIXUP_2892.y;
    _RESERVED_IDENTIFIER_FIXUP_3786.z = _RESERVED_IDENTIFIER_FIXUP_2892.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2903 = _RESERVED_IDENTIFIER_FIXUP_3786.xyz + _RESERVED_IDENTIFIER_FIXUP_3786.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3792 = _RESERVED_IDENTIFIER_FIXUP_3786;
    _RESERVED_IDENTIFIER_FIXUP_3792.x = _RESERVED_IDENTIFIER_FIXUP_2903.x;
    _RESERVED_IDENTIFIER_FIXUP_3792.y = _RESERVED_IDENTIFIER_FIXUP_2903.y;
    _RESERVED_IDENTIFIER_FIXUP_3792.z = _RESERVED_IDENTIFIER_FIXUP_2903.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2914 = _RESERVED_IDENTIFIER_FIXUP_3792.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3774.y = _RESERVED_IDENTIFIER_FIXUP_2914.x;
    _RESERVED_IDENTIFIER_FIXUP_3774.z = _RESERVED_IDENTIFIER_FIXUP_2914.y;
    _RESERVED_IDENTIFIER_FIXUP_3774.w = _RESERVED_IDENTIFIER_FIXUP_2914.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2928 = (_RESERVED_IDENTIFIER_FIXUP_3774.yzw * _RESERVED_IDENTIFIER_FIXUP_3774.xxx) + _RESERVED_IDENTIFIER_FIXUP_3792.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3804 = _RESERVED_IDENTIFIER_FIXUP_3792;
    _RESERVED_IDENTIFIER_FIXUP_3804.x = _RESERVED_IDENTIFIER_FIXUP_2928.x;
    _RESERVED_IDENTIFIER_FIXUP_3804.y = _RESERVED_IDENTIFIER_FIXUP_2928.y;
    _RESERVED_IDENTIFIER_FIXUP_3804.z = _RESERVED_IDENTIFIER_FIXUP_2928.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2941 = _RESERVED_IDENTIFIER_FIXUP_3804.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3810 = _RESERVED_IDENTIFIER_FIXUP_3804;
    _RESERVED_IDENTIFIER_FIXUP_3810.x = _RESERVED_IDENTIFIER_FIXUP_2941.x;
    _RESERVED_IDENTIFIER_FIXUP_3810.y = _RESERVED_IDENTIFIER_FIXUP_2941.y;
    _RESERVED_IDENTIFIER_FIXUP_3810.z = _RESERVED_IDENTIFIER_FIXUP_2941.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3810.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3401.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1110 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3000;
    if (_RESERVED_IDENTIFIER_FIXUP_1083 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3000 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1083), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1110);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3000 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1110);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3000;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2868);
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
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
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
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB132 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB132.x;
        r1.y = hdB132.y;
        vec2 hdB153 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB153.x;
        r2.y = hdB153.y;
        vec2 hdB164 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB164.x;
        r3.y = hdB164.y;
        vec2 hdB175 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB175.x;
        r4.y = hdB175.y;
        vec2 hdB186 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB186.x;
        r5.y = hdB186.y;
        vec2 hdB197 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB197.x;
        r6.y = hdB197.y;
        vec2 hdB208 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB208.x;
        r7.y = hdB208.y;
        vec2 hdB219 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB219.x;
        r8.y = hdB219.y;
        vec4 hdB224 = r1;
        vec2 hdB230 = hdB224.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB230.x;
        r1.y = hdB230.y;
        r9 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r9.xy;
        float param_4 = r9.w;
        r9 = hdLod5(param_3, param_4);
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
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod5(param_13, param_14);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_15 = r7.xy;
        float param_16 = r7.w;
        r7 = hdLod5(param_15, param_16);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_17 = r8.xy;
        float param_18 = r8.w;
        r8 = hdLod5(param_17, param_18);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_19 = r1.xy;
        float param_20 = r1.w;
        r1 = hdLod5(param_19, param_20);
        r9.y = r2.x;
        r9.z = r3.x;
        r9.w = r4.x;
        r2 = r9 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r3 = r5 + (-v5.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.x += (-v5.z);
        r1.x = float(r1.x >= 0.0);
        r1.y = dot(r2, vec4(1.0));
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.x += r1.y;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            vec2 hdB418 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB418.x;
            r1.z = hdB418.y;
            vec2 hdB428 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB428.x;
            r2.y = hdB428.y;
            vec2 hdB438 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB438.x;
            r3.y = hdB438.y;
            vec2 hdB448 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB448.x;
            r4.y = hdB448.y;
            vec2 hdB458 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB458.x;
            r5.y = hdB458.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r6.xy;
            float param_22 = r6.w;
            r6 = hdLod6(param_21, param_22);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod6(param_23, param_24);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod6(param_25, param_26);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_27 = r4.xy;
            float param_28 = r4.w;
            r4 = hdLod6(param_27, param_28);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_29 = r5.xy;
            float param_30 = r5.w;
            r5 = hdLod6(param_29, param_30);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.y = r5.x + (-v6.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.y += r1.z;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                vec2 hdB574 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB574.x;
                r1.z = hdB574.y;
                vec2 hdB584 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB584.x;
                r2.y = hdB584.y;
                vec2 hdB594 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB594.x;
                r3.y = hdB594.y;
                vec2 hdB604 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB604.x;
                r4.y = hdB604.y;
                vec2 hdB614 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB614.x;
                r5.y = hdB614.y;
                r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = r6.xy;
                float param_32 = r6.w;
                r6 = hdLod7(param_31, param_32);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_33 = r2.xy;
                float param_34 = r2.w;
                r2 = hdLod7(param_33, param_34);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_35 = r3.xy;
                float param_36 = r3.w;
                r3 = hdLod7(param_35, param_36);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_37 = r4.xy;
                float param_38 = r4.w;
                r4 = hdLod7(param_37, param_38);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_39 = r5.xy;
                float param_40 = r5.w;
                r5 = hdLod7(param_39, param_40);
                r6.y = r2.x;
                r6.z = r3.x;
                r6.w = r4.x;
                r2 = r6 + (-v7.zzzz);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r1.y = r5.x + (-v7.z);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r2, vec4(1.0));
                r1.y += r1.z;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r2.x = v5.w;
                r2.y = v6.w;
                vec2 hdB722 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB722.x;
                r3.y = hdB722.y;
                vec2 hdB732 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB732.x;
                r4.y = hdB732.y;
                vec2 hdB742 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB742.x;
                r5.y = hdB742.y;
                vec2 hdB752 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB752.x;
                r6.y = hdB752.y;
                vec2 hdB762 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB762.x;
                r7.y = hdB762.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_41 = r3.xy;
                float param_42 = r3.w;
                r3 = hdLod8(param_41, param_42);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_43 = r4.xy;
                float param_44 = r4.w;
                r4 = hdLod8(param_43, param_44);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_45 = r5.xy;
                float param_46 = r5.w;
                r5 = hdLod8(param_45, param_46);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_47 = r6.xy;
                float param_48 = r6.w;
                r6 = hdLod8(param_47, param_48);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_49 = r7.xy;
                float param_50 = r7.w;
                r7 = hdLod8(param_49, param_50);
                r3.y = r4.x;
                r3.z = r5.x;
                r3.w = r6.x;
                r3 += (-v7.wwww);
                r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
                r1.y = r7.x + (-v7.w);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r3, vec4(1.0));
                r1.y += r1.z;
                r1.z = max(abs(r2.x), abs(r2.y));
                r1.z = clamp((r1.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.z * r1.y) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB892 = r0;
    vec3 hdB896 = hdB892.xyz * r1.yyy;
    r0.x = hdB896.x;
    r0.y = hdB896.y;
    r0.z = hdB896.z;
    vec4 hdB903 = r0;
    vec3 hdB907 = hdB903.xyz * v0.xyz;
    r0.x = hdB907.x;
    r0.y = hdB907.y;
    r0.z = hdB907.z;
    vec4 hdB914 = r0;
    vec4 hdB916 = r0;
    vec3 hdB918 = hdB914.xyz + hdB916.xyz;
    r0.x = hdB918.x;
    r0.y = hdB918.y;
    r0.z = hdB918.z;
    vec3 hdB929 = r0.www * v1.xyz;
    r1.y = hdB929.x;
    r1.z = hdB929.y;
    r1.w = hdB929.z;
    vec4 hdB941 = r0;
    vec3 hdB943 = (r1.yzw * r1.xxx) + hdB941.xyz;
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
    bool hdB985 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB993;
    if (hdB985)
    {
        hdB993 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB993 = hdB985;
    }
    if (hdB993)
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
    bool _3307 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3317;
    if (_3307)
    {
        _3317 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3317 = _3307;
    }
    if (_3317)
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
        bool _3342 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3357;
        if (!_3342)
        {
            _3357 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3357 = _3342;
        }
        if (_3357)
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
