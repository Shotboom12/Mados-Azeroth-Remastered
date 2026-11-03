#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_4029;
vec4 _RESERVED_IDENTIFIER_FIXUP_4030;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
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
    bool _58 = hdOverride >= 0;
    bool _77;
    if (_58)
    {
        _77 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _77 = _58;
    }
    vec4 _78;
    if (_77)
    {
        _78 = vec4(float(hdOverride));
    }
    else
    {
        _78 = value;
    }
    return _78;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _95 = hdOverride >= 0;
    bool _105;
    if (_95)
    {
        _105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _105 = _95;
    }
    vec4 _106;
    if (_105)
    {
        _106 = vec4(float(hdOverride));
    }
    else
    {
        _106 = value;
    }
    return _106;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _124 = hdOverride >= 0;
    bool _134;
    if (_124)
    {
        _134 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _134 = _124;
    }
    vec4 _135;
    if (_134)
    {
        _135 = vec4(float(hdOverride));
    }
    else
    {
        _135 = value;
    }
    return _135;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _153 = hdOverride >= 0;
    bool _163;
    if (_153)
    {
        _163 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _163 = _153;
    }
    vec4 _164;
    if (_163)
    {
        _164 = vec4(float(hdOverride));
    }
    else
    {
        _164 = value;
    }
    return _164;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _182 = hdOverride >= 0;
    bool _192;
    if (_182)
    {
        _192 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _192 = _182;
    }
    vec4 _193;
    if (_192)
    {
        _193 = vec4(float(hdOverride));
    }
    else
    {
        _193 = value;
    }
    return _193;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _211 = hdOverride >= 0;
    bool _221;
    if (_211)
    {
        _221 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _221 = _211;
    }
    vec4 _222;
    if (_221)
    {
        _222 = vec4(float(hdOverride));
    }
    else
    {
        _222 = value;
    }
    return _222;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1233 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1237 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1241 = hdTex2(param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1245 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3160 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3160.x = _RESERVED_IDENTIFIER_FIXUP_1245.x;
    float _RESERVED_IDENTIFIER_FIXUP_1249 = _RESERVED_IDENTIFIER_FIXUP_1245.y;
    _RESERVED_IDENTIFIER_FIXUP_3160.y = _RESERVED_IDENTIFIER_FIXUP_1249;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1251 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_4029).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1254 = _RESERVED_IDENTIFIER_FIXUP_1251 + _RESERVED_IDENTIFIER_FIXUP_1251;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3164 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3164.x = _RESERVED_IDENTIFIER_FIXUP_1254.x;
    _RESERVED_IDENTIFIER_FIXUP_3164.y = _RESERVED_IDENTIFIER_FIXUP_1254.y;
    _RESERVED_IDENTIFIER_FIXUP_3164.z = _RESERVED_IDENTIFIER_FIXUP_1254.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_1233.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_1262 * _RESERVED_IDENTIFIER_FIXUP_3164.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3170 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3170.x = _RESERVED_IDENTIFIER_FIXUP_1265.x;
    _RESERVED_IDENTIFIER_FIXUP_3170.y = _RESERVED_IDENTIFIER_FIXUP_1265.y;
    _RESERVED_IDENTIFIER_FIXUP_3170.z = _RESERVED_IDENTIFIER_FIXUP_1265.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1279 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3160.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1280 = mix(_RESERVED_IDENTIFIER_FIXUP_3170.xyz, _RESERVED_IDENTIFIER_FIXUP_1262, _RESERVED_IDENTIFIER_FIXUP_1279);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3176 = _RESERVED_IDENTIFIER_FIXUP_1233;
    _RESERVED_IDENTIFIER_FIXUP_3176.x = _RESERVED_IDENTIFIER_FIXUP_1280.x;
    _RESERVED_IDENTIFIER_FIXUP_3176.y = _RESERVED_IDENTIFIER_FIXUP_1280.y;
    _RESERVED_IDENTIFIER_FIXUP_3176.z = _RESERVED_IDENTIFIER_FIXUP_1280.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_1237.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_1288 * _RESERVED_IDENTIFIER_FIXUP_3164.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4055 = vec4(_RESERVED_IDENTIFIER_FIXUP_1291.x, _RESERVED_IDENTIFIER_FIXUP_1249, _RESERVED_IDENTIFIER_FIXUP_1291.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1306 = mix(_RESERVED_IDENTIFIER_FIXUP_4055.xzw, _RESERVED_IDENTIFIER_FIXUP_1288, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4055.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3188 = _RESERVED_IDENTIFIER_FIXUP_1237;
    _RESERVED_IDENTIFIER_FIXUP_3188.x = _RESERVED_IDENTIFIER_FIXUP_1306.x;
    _RESERVED_IDENTIFIER_FIXUP_3188.y = _RESERVED_IDENTIFIER_FIXUP_1306.y;
    _RESERVED_IDENTIFIER_FIXUP_3188.z = _RESERVED_IDENTIFIER_FIXUP_1306.z;
    float _RESERVED_IDENTIFIER_FIXUP_1316 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1241.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3194 = _RESERVED_IDENTIFIER_FIXUP_1241;
    _RESERVED_IDENTIFIER_FIXUP_3194.y = _RESERVED_IDENTIFIER_FIXUP_1316;
    _RESERVED_IDENTIFIER_FIXUP_3194.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1316;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1326 = _RESERVED_IDENTIFIER_FIXUP_3194.xxxx * _RESERVED_IDENTIFIER_FIXUP_3188;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1332 = (_RESERVED_IDENTIFIER_FIXUP_3176 * _RESERVED_IDENTIFIER_FIXUP_3194.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1326;
    float _RESERVED_IDENTIFIER_FIXUP_1339 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3201 = _RESERVED_IDENTIFIER_FIXUP_1326;
    _RESERVED_IDENTIFIER_FIXUP_3201.x = _RESERVED_IDENTIFIER_FIXUP_1339;
    float _RESERVED_IDENTIFIER_FIXUP_1345 = clamp((_RESERVED_IDENTIFIER_FIXUP_1339 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3201.x = _RESERVED_IDENTIFIER_FIXUP_1345;
    float _RESERVED_IDENTIFIER_FIXUP_1351 = ((-_RESERVED_IDENTIFIER_FIXUP_1345) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3201.x = _RESERVED_IDENTIFIER_FIXUP_1351;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4034;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4031;
    if (_RESERVED_IDENTIFIER_FIXUP_1351 != (-_RESERVED_IDENTIFIER_FIXUP_1351))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1363 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3440;
        _RESERVED_IDENTIFIER_FIXUP_3440.x = _RESERVED_IDENTIFIER_FIXUP_1363.x;
        _RESERVED_IDENTIFIER_FIXUP_3440.y = _RESERVED_IDENTIFIER_FIXUP_1363.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1373 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3444;
        _RESERVED_IDENTIFIER_FIXUP_3444.x = _RESERVED_IDENTIFIER_FIXUP_1373.x;
        _RESERVED_IDENTIFIER_FIXUP_3444.y = _RESERVED_IDENTIFIER_FIXUP_1373.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1383 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3448;
        _RESERVED_IDENTIFIER_FIXUP_3448.x = _RESERVED_IDENTIFIER_FIXUP_1383.x;
        _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_1383.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1393 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3452;
        _RESERVED_IDENTIFIER_FIXUP_3452.x = _RESERVED_IDENTIFIER_FIXUP_1393.x;
        _RESERVED_IDENTIFIER_FIXUP_3452.y = _RESERVED_IDENTIFIER_FIXUP_1393.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1403 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3456;
        _RESERVED_IDENTIFIER_FIXUP_3456.x = _RESERVED_IDENTIFIER_FIXUP_1403.x;
        _RESERVED_IDENTIFIER_FIXUP_3456.y = _RESERVED_IDENTIFIER_FIXUP_1403.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1413 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3460;
        _RESERVED_IDENTIFIER_FIXUP_3460.x = _RESERVED_IDENTIFIER_FIXUP_1413.x;
        _RESERVED_IDENTIFIER_FIXUP_3460.y = _RESERVED_IDENTIFIER_FIXUP_1413.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1423 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3464;
        _RESERVED_IDENTIFIER_FIXUP_3464.x = _RESERVED_IDENTIFIER_FIXUP_1423.x;
        _RESERVED_IDENTIFIER_FIXUP_3464.y = _RESERVED_IDENTIFIER_FIXUP_1423.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1433 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3468;
        _RESERVED_IDENTIFIER_FIXUP_3468.x = _RESERVED_IDENTIFIER_FIXUP_1433.x;
        _RESERVED_IDENTIFIER_FIXUP_3468.y = _RESERVED_IDENTIFIER_FIXUP_1433.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1443 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3472;
        _RESERVED_IDENTIFIER_FIXUP_3472.x = _RESERVED_IDENTIFIER_FIXUP_1443.x;
        _RESERVED_IDENTIFIER_FIXUP_3472.y = _RESERVED_IDENTIFIER_FIXUP_1443.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1451 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1451.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1451.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1457 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_3444.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3448.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3452.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3456.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3456.xy;
        float param_5 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1497 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_3460.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3464.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3468.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3472.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3472.xy;
        float param_7 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1537 = hdLod5(param_6, param_7);
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3444.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1457.y = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3448.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1457.z = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3452.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1457.w = hdLod5(param_12, param_13).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1554 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1457 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3460.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1497.y = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3464.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1497.z = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3468.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1497.w = hdLod5(param_18, param_19).x;
        float _RESERVED_IDENTIFIER_FIXUP_1577 = _RESERVED_IDENTIFIER_FIXUP_1537.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3537 = _RESERVED_IDENTIFIER_FIXUP_1537;
        _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_1577;
        float _RESERVED_IDENTIFIER_FIXUP_1582 = float(_RESERVED_IDENTIFIER_FIXUP_1577 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_1582;
        float _RESERVED_IDENTIFIER_FIXUP_1585 = dot(_RESERVED_IDENTIFIER_FIXUP_1554, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3537.y = _RESERVED_IDENTIFIER_FIXUP_1585;
        float _RESERVED_IDENTIFIER_FIXUP_1588 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1497 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3537.z = _RESERVED_IDENTIFIER_FIXUP_1588;
        float _RESERVED_IDENTIFIER_FIXUP_1594 = _RESERVED_IDENTIFIER_FIXUP_1585 + _RESERVED_IDENTIFIER_FIXUP_1588;
        _RESERVED_IDENTIFIER_FIXUP_3537.y = _RESERVED_IDENTIFIER_FIXUP_1594;
        float _RESERVED_IDENTIFIER_FIXUP_1600 = _RESERVED_IDENTIFIER_FIXUP_1582 + _RESERVED_IDENTIFIER_FIXUP_1594;
        _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_1600;
        _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_1600 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4034 = _RESERVED_IDENTIFIER_FIXUP_1554;
        _RESERVED_IDENTIFIER_FIXUP_4031 = _RESERVED_IDENTIFIER_FIXUP_3537;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1613 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3201.y = _RESERVED_IDENTIFIER_FIXUP_1613;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4035;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4032;
        if (_RESERVED_IDENTIFIER_FIXUP_1613 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1622 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3374 = _RESERVED_IDENTIFIER_FIXUP_3201;
            _RESERVED_IDENTIFIER_FIXUP_3374.y = _RESERVED_IDENTIFIER_FIXUP_1622.x;
            _RESERVED_IDENTIFIER_FIXUP_3374.z = _RESERVED_IDENTIFIER_FIXUP_1622.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1632 = _RESERVED_IDENTIFIER_FIXUP_3374.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3378;
            _RESERVED_IDENTIFIER_FIXUP_3378.x = _RESERVED_IDENTIFIER_FIXUP_1632.x;
            _RESERVED_IDENTIFIER_FIXUP_3378.y = _RESERVED_IDENTIFIER_FIXUP_1632.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1642 = _RESERVED_IDENTIFIER_FIXUP_3374.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3382;
            _RESERVED_IDENTIFIER_FIXUP_3382.x = _RESERVED_IDENTIFIER_FIXUP_1642.x;
            _RESERVED_IDENTIFIER_FIXUP_3382.y = _RESERVED_IDENTIFIER_FIXUP_1642.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1652 = _RESERVED_IDENTIFIER_FIXUP_3374.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3386;
            _RESERVED_IDENTIFIER_FIXUP_3386.x = _RESERVED_IDENTIFIER_FIXUP_1652.x;
            _RESERVED_IDENTIFIER_FIXUP_3386.y = _RESERVED_IDENTIFIER_FIXUP_1652.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1662 = _RESERVED_IDENTIFIER_FIXUP_3374.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3390;
            _RESERVED_IDENTIFIER_FIXUP_3390.x = _RESERVED_IDENTIFIER_FIXUP_1662.x;
            _RESERVED_IDENTIFIER_FIXUP_3390.y = _RESERVED_IDENTIFIER_FIXUP_1662.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1670 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1670.xy;
            float param_21 = _RESERVED_IDENTIFIER_FIXUP_1670.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1676 = hdLod6(param_20, param_21);
            _RESERVED_IDENTIFIER_FIXUP_3378.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3382.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3386.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3390.w = 0.0;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3378.xy;
            float param_23 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1676.y = hdLod6(param_22, param_23).x;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3382.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1676.z = hdLod6(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3386.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1676.w = hdLod6(param_26, param_27).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1733 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1676 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3390.xy;
            float param_29 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1739 = hdLod6(param_28, param_29).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3374.y = _RESERVED_IDENTIFIER_FIXUP_1739;
            float _RESERVED_IDENTIFIER_FIXUP_1744 = float(_RESERVED_IDENTIFIER_FIXUP_1739 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3374.y = _RESERVED_IDENTIFIER_FIXUP_1744;
            float _RESERVED_IDENTIFIER_FIXUP_1747 = dot(_RESERVED_IDENTIFIER_FIXUP_1733, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3374.z = _RESERVED_IDENTIFIER_FIXUP_1747;
            float _RESERVED_IDENTIFIER_FIXUP_1753 = _RESERVED_IDENTIFIER_FIXUP_1744 + _RESERVED_IDENTIFIER_FIXUP_1747;
            _RESERVED_IDENTIFIER_FIXUP_3374.y = _RESERVED_IDENTIFIER_FIXUP_1753;
            _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_1753 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4035 = _RESERVED_IDENTIFIER_FIXUP_1733;
            _RESERVED_IDENTIFIER_FIXUP_4032 = _RESERVED_IDENTIFIER_FIXUP_3374;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1766 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3218 = _RESERVED_IDENTIFIER_FIXUP_3201;
            _RESERVED_IDENTIFIER_FIXUP_3218.y = _RESERVED_IDENTIFIER_FIXUP_1766;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4036;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4033;
            if (_RESERVED_IDENTIFIER_FIXUP_1766 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1775 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3308 = _RESERVED_IDENTIFIER_FIXUP_3218;
                _RESERVED_IDENTIFIER_FIXUP_3308.y = _RESERVED_IDENTIFIER_FIXUP_1775.x;
                _RESERVED_IDENTIFIER_FIXUP_3308.z = _RESERVED_IDENTIFIER_FIXUP_1775.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1785 = _RESERVED_IDENTIFIER_FIXUP_3308.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3312;
                _RESERVED_IDENTIFIER_FIXUP_3312.x = _RESERVED_IDENTIFIER_FIXUP_1785.x;
                _RESERVED_IDENTIFIER_FIXUP_3312.y = _RESERVED_IDENTIFIER_FIXUP_1785.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1795 = _RESERVED_IDENTIFIER_FIXUP_3308.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3316;
                _RESERVED_IDENTIFIER_FIXUP_3316.x = _RESERVED_IDENTIFIER_FIXUP_1795.x;
                _RESERVED_IDENTIFIER_FIXUP_3316.y = _RESERVED_IDENTIFIER_FIXUP_1795.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1805 = _RESERVED_IDENTIFIER_FIXUP_3308.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3320;
                _RESERVED_IDENTIFIER_FIXUP_3320.x = _RESERVED_IDENTIFIER_FIXUP_1805.x;
                _RESERVED_IDENTIFIER_FIXUP_3320.y = _RESERVED_IDENTIFIER_FIXUP_1805.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1815 = _RESERVED_IDENTIFIER_FIXUP_3308.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3324;
                _RESERVED_IDENTIFIER_FIXUP_3324.x = _RESERVED_IDENTIFIER_FIXUP_1815.x;
                _RESERVED_IDENTIFIER_FIXUP_3324.y = _RESERVED_IDENTIFIER_FIXUP_1815.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1823 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_1823.xy;
                float param_31 = _RESERVED_IDENTIFIER_FIXUP_1823.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1829 = hdLod7(param_30, param_31);
                _RESERVED_IDENTIFIER_FIXUP_3312.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3316.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3320.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3324.w = 0.0;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3312.xy;
                float param_33 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1829.y = hdLod7(param_32, param_33).x;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3316.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1829.z = hdLod7(param_34, param_35).x;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3320.xy;
                float param_37 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1829.w = hdLod7(param_36, param_37).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1886 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1829 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3324.xy;
                float param_39 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1892 = hdLod7(param_38, param_39).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3308.y = _RESERVED_IDENTIFIER_FIXUP_1892;
                float _RESERVED_IDENTIFIER_FIXUP_1897 = float(_RESERVED_IDENTIFIER_FIXUP_1892 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3308.y = _RESERVED_IDENTIFIER_FIXUP_1897;
                float _RESERVED_IDENTIFIER_FIXUP_1900 = dot(_RESERVED_IDENTIFIER_FIXUP_1886, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3308.z = _RESERVED_IDENTIFIER_FIXUP_1900;
                float _RESERVED_IDENTIFIER_FIXUP_1906 = _RESERVED_IDENTIFIER_FIXUP_1897 + _RESERVED_IDENTIFIER_FIXUP_1900;
                _RESERVED_IDENTIFIER_FIXUP_3308.y = _RESERVED_IDENTIFIER_FIXUP_1906;
                _RESERVED_IDENTIFIER_FIXUP_3308.x = _RESERVED_IDENTIFIER_FIXUP_1906 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4036 = _RESERVED_IDENTIFIER_FIXUP_1886;
                _RESERVED_IDENTIFIER_FIXUP_4033 = _RESERVED_IDENTIFIER_FIXUP_3308;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3222 = _RESERVED_IDENTIFIER_FIXUP_3194;
                _RESERVED_IDENTIFIER_FIXUP_3222.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3222.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1922 = (_RESERVED_IDENTIFIER_FIXUP_3222.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3227;
                _RESERVED_IDENTIFIER_FIXUP_3227.x = _RESERVED_IDENTIFIER_FIXUP_1922.x;
                _RESERVED_IDENTIFIER_FIXUP_3227.y = _RESERVED_IDENTIFIER_FIXUP_1922.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1932 = _RESERVED_IDENTIFIER_FIXUP_3227.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3231;
                _RESERVED_IDENTIFIER_FIXUP_3231.x = _RESERVED_IDENTIFIER_FIXUP_1932.x;
                _RESERVED_IDENTIFIER_FIXUP_3231.y = _RESERVED_IDENTIFIER_FIXUP_1932.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1942 = _RESERVED_IDENTIFIER_FIXUP_3227.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3235;
                _RESERVED_IDENTIFIER_FIXUP_3235.x = _RESERVED_IDENTIFIER_FIXUP_1942.x;
                _RESERVED_IDENTIFIER_FIXUP_3235.y = _RESERVED_IDENTIFIER_FIXUP_1942.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1952 = _RESERVED_IDENTIFIER_FIXUP_3227.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3239;
                _RESERVED_IDENTIFIER_FIXUP_3239.x = _RESERVED_IDENTIFIER_FIXUP_1952.x;
                _RESERVED_IDENTIFIER_FIXUP_3239.y = _RESERVED_IDENTIFIER_FIXUP_1952.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1962 = _RESERVED_IDENTIFIER_FIXUP_3227.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3243;
                _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1962.x;
                _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_1962.y;
                _RESERVED_IDENTIFIER_FIXUP_3227.w = 0.0;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3227.xy;
                float param_41 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1976 = hdLod8(param_40, param_41);
                _RESERVED_IDENTIFIER_FIXUP_3231.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3235.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3239.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3243.w = 0.0;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3231.xy;
                float param_43 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1976.y = hdLod8(param_42, param_43).x;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3235.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1976.z = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3239.xy;
                float param_47 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1976.w = hdLod8(param_46, param_47).x;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3243.xy;
                float param_49 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2039 = hdLod8(param_48, param_49).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3283 = _RESERVED_IDENTIFIER_FIXUP_3218;
                _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_2039;
                float _RESERVED_IDENTIFIER_FIXUP_2044 = float(_RESERVED_IDENTIFIER_FIXUP_2039 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_2044;
                float _RESERVED_IDENTIFIER_FIXUP_2047 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1976 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3283.z = _RESERVED_IDENTIFIER_FIXUP_2047;
                float _RESERVED_IDENTIFIER_FIXUP_2053 = _RESERVED_IDENTIFIER_FIXUP_2044 + _RESERVED_IDENTIFIER_FIXUP_2047;
                _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_2053;
                float _RESERVED_IDENTIFIER_FIXUP_2061 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3283.z = _RESERVED_IDENTIFIER_FIXUP_2061;
                float _RESERVED_IDENTIFIER_FIXUP_2067 = clamp((_RESERVED_IDENTIFIER_FIXUP_2061 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3283.z = _RESERVED_IDENTIFIER_FIXUP_2067;
                float _RESERVED_IDENTIFIER_FIXUP_2072 = (_RESERVED_IDENTIFIER_FIXUP_2053 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3283.y = _RESERVED_IDENTIFIER_FIXUP_2072;
                _RESERVED_IDENTIFIER_FIXUP_3283.x = (_RESERVED_IDENTIFIER_FIXUP_2067 * _RESERVED_IDENTIFIER_FIXUP_2072) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4036 = _RESERVED_IDENTIFIER_FIXUP_3222;
                _RESERVED_IDENTIFIER_FIXUP_4033 = _RESERVED_IDENTIFIER_FIXUP_3283;
            }
            _RESERVED_IDENTIFIER_FIXUP_4035 = _RESERVED_IDENTIFIER_FIXUP_4036;
            _RESERVED_IDENTIFIER_FIXUP_4032 = _RESERVED_IDENTIFIER_FIXUP_4033;
        }
        _RESERVED_IDENTIFIER_FIXUP_4034 = _RESERVED_IDENTIFIER_FIXUP_4035;
        _RESERVED_IDENTIFIER_FIXUP_4031 = _RESERVED_IDENTIFIER_FIXUP_4032;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3560 = _RESERVED_IDENTIFIER_FIXUP_4031;
    _RESERVED_IDENTIFIER_FIXUP_3560.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3562 = _RESERVED_IDENTIFIER_FIXUP_4034;
    _RESERVED_IDENTIFIER_FIXUP_3562.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3562.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3562.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2111 = _RESERVED_IDENTIFIER_FIXUP_3560.xxx * _RESERVED_IDENTIFIER_FIXUP_3562.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4056 = vec4(_RESERVED_IDENTIFIER_FIXUP_2111.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_2111.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2125 = (_RESERVED_IDENTIFIER_FIXUP_1332.xyz * _RESERVED_IDENTIFIER_FIXUP_4056.yyy) + _RESERVED_IDENTIFIER_FIXUP_4056.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3574 = _RESERVED_IDENTIFIER_FIXUP_1332;
    _RESERVED_IDENTIFIER_FIXUP_3574.x = _RESERVED_IDENTIFIER_FIXUP_2125.x;
    _RESERVED_IDENTIFIER_FIXUP_3574.y = _RESERVED_IDENTIFIER_FIXUP_2125.y;
    _RESERVED_IDENTIFIER_FIXUP_3574.z = _RESERVED_IDENTIFIER_FIXUP_2125.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2138 = _RESERVED_IDENTIFIER_FIXUP_3574.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3580 = _RESERVED_IDENTIFIER_FIXUP_3574;
    _RESERVED_IDENTIFIER_FIXUP_3580.x = _RESERVED_IDENTIFIER_FIXUP_2138.x;
    _RESERVED_IDENTIFIER_FIXUP_3580.y = _RESERVED_IDENTIFIER_FIXUP_2138.y;
    _RESERVED_IDENTIFIER_FIXUP_3580.z = _RESERVED_IDENTIFIER_FIXUP_2138.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2195 = OptTex0( texcoord0.xyz);
    vec2 param_50 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2199 = hdTex1(param_50);
    vec2 param_51 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2203 = hdTex2(param_51);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2216 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3598 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3598.x = _RESERVED_IDENTIFIER_FIXUP_2216.x;
    _RESERVED_IDENTIFIER_FIXUP_3598.y = _RESERVED_IDENTIFIER_FIXUP_2216.y;
    _RESERVED_IDENTIFIER_FIXUP_3598.z = _RESERVED_IDENTIFIER_FIXUP_2216.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2224 = _RESERVED_IDENTIFIER_FIXUP_2195.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2227 = _RESERVED_IDENTIFIER_FIXUP_2224 * _RESERVED_IDENTIFIER_FIXUP_3598.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3604 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3604.x = _RESERVED_IDENTIFIER_FIXUP_2227.x;
    _RESERVED_IDENTIFIER_FIXUP_3604.y = _RESERVED_IDENTIFIER_FIXUP_2227.y;
    _RESERVED_IDENTIFIER_FIXUP_3604.z = _RESERVED_IDENTIFIER_FIXUP_2227.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2242 = mix(_RESERVED_IDENTIFIER_FIXUP_3604.xyz, _RESERVED_IDENTIFIER_FIXUP_2224, _RESERVED_IDENTIFIER_FIXUP_1279);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3610 = _RESERVED_IDENTIFIER_FIXUP_2195;
    _RESERVED_IDENTIFIER_FIXUP_3610.x = _RESERVED_IDENTIFIER_FIXUP_2242.x;
    _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2242.y;
    _RESERVED_IDENTIFIER_FIXUP_3610.z = _RESERVED_IDENTIFIER_FIXUP_2242.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2250 = _RESERVED_IDENTIFIER_FIXUP_2199.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2253 = _RESERVED_IDENTIFIER_FIXUP_2250 * _RESERVED_IDENTIFIER_FIXUP_3598.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4058 = vec4(_RESERVED_IDENTIFIER_FIXUP_2253.x, _RESERVED_IDENTIFIER_FIXUP_1249, _RESERVED_IDENTIFIER_FIXUP_2253.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2268 = mix(_RESERVED_IDENTIFIER_FIXUP_4058.xzw, _RESERVED_IDENTIFIER_FIXUP_2250, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_4058.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3622 = _RESERVED_IDENTIFIER_FIXUP_2199;
    _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2268.x;
    _RESERVED_IDENTIFIER_FIXUP_3622.y = _RESERVED_IDENTIFIER_FIXUP_2268.y;
    _RESERVED_IDENTIFIER_FIXUP_3622.z = _RESERVED_IDENTIFIER_FIXUP_2268.z;
    float _RESERVED_IDENTIFIER_FIXUP_2278 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2203.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3628 = _RESERVED_IDENTIFIER_FIXUP_2203;
    _RESERVED_IDENTIFIER_FIXUP_3628.y = _RESERVED_IDENTIFIER_FIXUP_2278;
    _RESERVED_IDENTIFIER_FIXUP_3628.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2278;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2288 = _RESERVED_IDENTIFIER_FIXUP_3628.xxxx * _RESERVED_IDENTIFIER_FIXUP_3622;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2294 = (_RESERVED_IDENTIFIER_FIXUP_3610 * _RESERVED_IDENTIFIER_FIXUP_3628.yyyy) + _RESERVED_IDENTIFIER_FIXUP_2288;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3635 = _RESERVED_IDENTIFIER_FIXUP_2288;
    _RESERVED_IDENTIFIER_FIXUP_3635.x = _RESERVED_IDENTIFIER_FIXUP_1339;
    float _RESERVED_IDENTIFIER_FIXUP_2307 = clamp((_RESERVED_IDENTIFIER_FIXUP_1339 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3635.x = _RESERVED_IDENTIFIER_FIXUP_2307;
    float _RESERVED_IDENTIFIER_FIXUP_2313 = ((-_RESERVED_IDENTIFIER_FIXUP_2307) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3635.x = _RESERVED_IDENTIFIER_FIXUP_2313;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4049;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4043;
    if (_RESERVED_IDENTIFIER_FIXUP_2313 != (-_RESERVED_IDENTIFIER_FIXUP_2313))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2325 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3874;
        _RESERVED_IDENTIFIER_FIXUP_3874.x = _RESERVED_IDENTIFIER_FIXUP_2325.x;
        _RESERVED_IDENTIFIER_FIXUP_3874.y = _RESERVED_IDENTIFIER_FIXUP_2325.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2335 = _RESERVED_IDENTIFIER_FIXUP_3874.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3878;
        _RESERVED_IDENTIFIER_FIXUP_3878.x = _RESERVED_IDENTIFIER_FIXUP_2335.x;
        _RESERVED_IDENTIFIER_FIXUP_3878.y = _RESERVED_IDENTIFIER_FIXUP_2335.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2345 = _RESERVED_IDENTIFIER_FIXUP_3874.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3882;
        _RESERVED_IDENTIFIER_FIXUP_3882.x = _RESERVED_IDENTIFIER_FIXUP_2345.x;
        _RESERVED_IDENTIFIER_FIXUP_3882.y = _RESERVED_IDENTIFIER_FIXUP_2345.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2355 = _RESERVED_IDENTIFIER_FIXUP_3874.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3886;
        _RESERVED_IDENTIFIER_FIXUP_3886.x = _RESERVED_IDENTIFIER_FIXUP_2355.x;
        _RESERVED_IDENTIFIER_FIXUP_3886.y = _RESERVED_IDENTIFIER_FIXUP_2355.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2365 = _RESERVED_IDENTIFIER_FIXUP_3874.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3890;
        _RESERVED_IDENTIFIER_FIXUP_3890.x = _RESERVED_IDENTIFIER_FIXUP_2365.x;
        _RESERVED_IDENTIFIER_FIXUP_3890.y = _RESERVED_IDENTIFIER_FIXUP_2365.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2375 = _RESERVED_IDENTIFIER_FIXUP_3874.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3894;
        _RESERVED_IDENTIFIER_FIXUP_3894.x = _RESERVED_IDENTIFIER_FIXUP_2375.x;
        _RESERVED_IDENTIFIER_FIXUP_3894.y = _RESERVED_IDENTIFIER_FIXUP_2375.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2385 = _RESERVED_IDENTIFIER_FIXUP_3874.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3898;
        _RESERVED_IDENTIFIER_FIXUP_3898.x = _RESERVED_IDENTIFIER_FIXUP_2385.x;
        _RESERVED_IDENTIFIER_FIXUP_3898.y = _RESERVED_IDENTIFIER_FIXUP_2385.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2395 = _RESERVED_IDENTIFIER_FIXUP_3874.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3902;
        _RESERVED_IDENTIFIER_FIXUP_3902.x = _RESERVED_IDENTIFIER_FIXUP_2395.x;
        _RESERVED_IDENTIFIER_FIXUP_3902.y = _RESERVED_IDENTIFIER_FIXUP_2395.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2405 = _RESERVED_IDENTIFIER_FIXUP_3874.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3906;
        _RESERVED_IDENTIFIER_FIXUP_3906.x = _RESERVED_IDENTIFIER_FIXUP_2405.x;
        _RESERVED_IDENTIFIER_FIXUP_3906.y = _RESERVED_IDENTIFIER_FIXUP_2405.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2413 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2413.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2413.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2419 = hdLod5(param_52, param_53);
        _RESERVED_IDENTIFIER_FIXUP_3878.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3882.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3886.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3890.w = 0.0;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3890.xy;
        float param_55 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2459 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3894.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3898.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3902.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3906.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3906.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2499 = hdLod5(param_56, param_57);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3878.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2419.y = hdLod5(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3882.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2419.z = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3886.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2419.w = hdLod5(param_62, param_63).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2516 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2419 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3894.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2459.y = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3898.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2459.z = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3902.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2459.w = hdLod5(param_68, param_69).x;
        float _RESERVED_IDENTIFIER_FIXUP_2539 = _RESERVED_IDENTIFIER_FIXUP_2499.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3971 = _RESERVED_IDENTIFIER_FIXUP_2499;
        _RESERVED_IDENTIFIER_FIXUP_3971.x = _RESERVED_IDENTIFIER_FIXUP_2539;
        float _RESERVED_IDENTIFIER_FIXUP_2544 = float(_RESERVED_IDENTIFIER_FIXUP_2539 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3971.x = _RESERVED_IDENTIFIER_FIXUP_2544;
        float _RESERVED_IDENTIFIER_FIXUP_2547 = dot(_RESERVED_IDENTIFIER_FIXUP_2516, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3971.y = _RESERVED_IDENTIFIER_FIXUP_2547;
        float _RESERVED_IDENTIFIER_FIXUP_2550 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2459 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3971.z = _RESERVED_IDENTIFIER_FIXUP_2550;
        float _RESERVED_IDENTIFIER_FIXUP_2556 = _RESERVED_IDENTIFIER_FIXUP_2547 + _RESERVED_IDENTIFIER_FIXUP_2550;
        _RESERVED_IDENTIFIER_FIXUP_3971.y = _RESERVED_IDENTIFIER_FIXUP_2556;
        float _RESERVED_IDENTIFIER_FIXUP_2562 = _RESERVED_IDENTIFIER_FIXUP_2544 + _RESERVED_IDENTIFIER_FIXUP_2556;
        _RESERVED_IDENTIFIER_FIXUP_3971.x = _RESERVED_IDENTIFIER_FIXUP_2562;
        _RESERVED_IDENTIFIER_FIXUP_3971.x = _RESERVED_IDENTIFIER_FIXUP_2562 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_4049 = _RESERVED_IDENTIFIER_FIXUP_2516;
        _RESERVED_IDENTIFIER_FIXUP_4043 = _RESERVED_IDENTIFIER_FIXUP_3971;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2575 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3635.y = _RESERVED_IDENTIFIER_FIXUP_2575;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4050;
        vec4 _RESERVED_IDENTIFIER_FIXUP_4044;
        if (_RESERVED_IDENTIFIER_FIXUP_2575 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2584 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3808 = _RESERVED_IDENTIFIER_FIXUP_3635;
            _RESERVED_IDENTIFIER_FIXUP_3808.y = _RESERVED_IDENTIFIER_FIXUP_2584.x;
            _RESERVED_IDENTIFIER_FIXUP_3808.z = _RESERVED_IDENTIFIER_FIXUP_2584.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2594 = _RESERVED_IDENTIFIER_FIXUP_3808.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3812;
            _RESERVED_IDENTIFIER_FIXUP_3812.x = _RESERVED_IDENTIFIER_FIXUP_2594.x;
            _RESERVED_IDENTIFIER_FIXUP_3812.y = _RESERVED_IDENTIFIER_FIXUP_2594.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2604 = _RESERVED_IDENTIFIER_FIXUP_3808.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3816;
            _RESERVED_IDENTIFIER_FIXUP_3816.x = _RESERVED_IDENTIFIER_FIXUP_2604.x;
            _RESERVED_IDENTIFIER_FIXUP_3816.y = _RESERVED_IDENTIFIER_FIXUP_2604.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2614 = _RESERVED_IDENTIFIER_FIXUP_3808.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3820;
            _RESERVED_IDENTIFIER_FIXUP_3820.x = _RESERVED_IDENTIFIER_FIXUP_2614.x;
            _RESERVED_IDENTIFIER_FIXUP_3820.y = _RESERVED_IDENTIFIER_FIXUP_2614.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2624 = _RESERVED_IDENTIFIER_FIXUP_3808.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3824;
            _RESERVED_IDENTIFIER_FIXUP_3824.x = _RESERVED_IDENTIFIER_FIXUP_2624.x;
            _RESERVED_IDENTIFIER_FIXUP_3824.y = _RESERVED_IDENTIFIER_FIXUP_2624.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2632 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2632.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2632.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2638 = hdLod6(param_70, param_71);
            _RESERVED_IDENTIFIER_FIXUP_3812.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3816.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3820.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3824.w = 0.0;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3812.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2638.y = hdLod6(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3816.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2638.z = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3820.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2638.w = hdLod6(param_76, param_77).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2695 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2638 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3824.xy;
            float param_79 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2701 = hdLod6(param_78, param_79).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3808.y = _RESERVED_IDENTIFIER_FIXUP_2701;
            float _RESERVED_IDENTIFIER_FIXUP_2706 = float(_RESERVED_IDENTIFIER_FIXUP_2701 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3808.y = _RESERVED_IDENTIFIER_FIXUP_2706;
            float _RESERVED_IDENTIFIER_FIXUP_2709 = dot(_RESERVED_IDENTIFIER_FIXUP_2695, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3808.z = _RESERVED_IDENTIFIER_FIXUP_2709;
            float _RESERVED_IDENTIFIER_FIXUP_2715 = _RESERVED_IDENTIFIER_FIXUP_2706 + _RESERVED_IDENTIFIER_FIXUP_2709;
            _RESERVED_IDENTIFIER_FIXUP_3808.y = _RESERVED_IDENTIFIER_FIXUP_2715;
            _RESERVED_IDENTIFIER_FIXUP_3808.x = _RESERVED_IDENTIFIER_FIXUP_2715 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_4050 = _RESERVED_IDENTIFIER_FIXUP_2695;
            _RESERVED_IDENTIFIER_FIXUP_4044 = _RESERVED_IDENTIFIER_FIXUP_3808;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2728 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3652 = _RESERVED_IDENTIFIER_FIXUP_3635;
            _RESERVED_IDENTIFIER_FIXUP_3652.y = _RESERVED_IDENTIFIER_FIXUP_2728;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4051;
            vec4 _RESERVED_IDENTIFIER_FIXUP_4045;
            if (_RESERVED_IDENTIFIER_FIXUP_2728 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2737 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_3652;
                _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2737.x;
                _RESERVED_IDENTIFIER_FIXUP_3742.z = _RESERVED_IDENTIFIER_FIXUP_2737.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2747 = _RESERVED_IDENTIFIER_FIXUP_3742.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3746;
                _RESERVED_IDENTIFIER_FIXUP_3746.x = _RESERVED_IDENTIFIER_FIXUP_2747.x;
                _RESERVED_IDENTIFIER_FIXUP_3746.y = _RESERVED_IDENTIFIER_FIXUP_2747.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2757 = _RESERVED_IDENTIFIER_FIXUP_3742.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3750;
                _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2757.x;
                _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_2757.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2767 = _RESERVED_IDENTIFIER_FIXUP_3742.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3754;
                _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2767.x;
                _RESERVED_IDENTIFIER_FIXUP_3754.y = _RESERVED_IDENTIFIER_FIXUP_2767.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2777 = _RESERVED_IDENTIFIER_FIXUP_3742.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3758;
                _RESERVED_IDENTIFIER_FIXUP_3758.x = _RESERVED_IDENTIFIER_FIXUP_2777.x;
                _RESERVED_IDENTIFIER_FIXUP_3758.y = _RESERVED_IDENTIFIER_FIXUP_2777.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2785 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2785.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2785.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2791 = hdLod7(param_80, param_81);
                _RESERVED_IDENTIFIER_FIXUP_3746.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3750.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3754.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3758.w = 0.0;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3746.xy;
                float param_83 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2791.y = hdLod7(param_82, param_83).x;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3750.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2791.z = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3754.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2791.w = hdLod7(param_86, param_87).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2848 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2791 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3758.xy;
                float param_89 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2854 = hdLod7(param_88, param_89).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2854;
                float _RESERVED_IDENTIFIER_FIXUP_2859 = float(_RESERVED_IDENTIFIER_FIXUP_2854 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2859;
                float _RESERVED_IDENTIFIER_FIXUP_2862 = dot(_RESERVED_IDENTIFIER_FIXUP_2848, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3742.z = _RESERVED_IDENTIFIER_FIXUP_2862;
                float _RESERVED_IDENTIFIER_FIXUP_2868 = _RESERVED_IDENTIFIER_FIXUP_2859 + _RESERVED_IDENTIFIER_FIXUP_2862;
                _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2868;
                _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_2868 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_4051 = _RESERVED_IDENTIFIER_FIXUP_2848;
                _RESERVED_IDENTIFIER_FIXUP_4045 = _RESERVED_IDENTIFIER_FIXUP_3742;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3656 = _RESERVED_IDENTIFIER_FIXUP_3628;
                _RESERVED_IDENTIFIER_FIXUP_3656.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3656.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2884 = (_RESERVED_IDENTIFIER_FIXUP_3656.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3661;
                _RESERVED_IDENTIFIER_FIXUP_3661.x = _RESERVED_IDENTIFIER_FIXUP_2884.x;
                _RESERVED_IDENTIFIER_FIXUP_3661.y = _RESERVED_IDENTIFIER_FIXUP_2884.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2894 = _RESERVED_IDENTIFIER_FIXUP_3661.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3665;
                _RESERVED_IDENTIFIER_FIXUP_3665.x = _RESERVED_IDENTIFIER_FIXUP_2894.x;
                _RESERVED_IDENTIFIER_FIXUP_3665.y = _RESERVED_IDENTIFIER_FIXUP_2894.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2904 = _RESERVED_IDENTIFIER_FIXUP_3661.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3669;
                _RESERVED_IDENTIFIER_FIXUP_3669.x = _RESERVED_IDENTIFIER_FIXUP_2904.x;
                _RESERVED_IDENTIFIER_FIXUP_3669.y = _RESERVED_IDENTIFIER_FIXUP_2904.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2914 = _RESERVED_IDENTIFIER_FIXUP_3661.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3673;
                _RESERVED_IDENTIFIER_FIXUP_3673.x = _RESERVED_IDENTIFIER_FIXUP_2914.x;
                _RESERVED_IDENTIFIER_FIXUP_3673.y = _RESERVED_IDENTIFIER_FIXUP_2914.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2924 = _RESERVED_IDENTIFIER_FIXUP_3661.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3677;
                _RESERVED_IDENTIFIER_FIXUP_3677.x = _RESERVED_IDENTIFIER_FIXUP_2924.x;
                _RESERVED_IDENTIFIER_FIXUP_3677.y = _RESERVED_IDENTIFIER_FIXUP_2924.y;
                _RESERVED_IDENTIFIER_FIXUP_3661.w = 0.0;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3661.xy;
                float param_91 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2938 = hdLod8(param_90, param_91);
                _RESERVED_IDENTIFIER_FIXUP_3665.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3669.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3673.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3677.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3665.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2938.y = hdLod8(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3669.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2938.z = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3673.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2938.w = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3677.xy;
                float param_99 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_3001 = hdLod8(param_98, param_99).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3717 = _RESERVED_IDENTIFIER_FIXUP_3652;
                _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_3001;
                float _RESERVED_IDENTIFIER_FIXUP_3006 = float(_RESERVED_IDENTIFIER_FIXUP_3001 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_3006;
                float _RESERVED_IDENTIFIER_FIXUP_3009 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2938 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3717.z = _RESERVED_IDENTIFIER_FIXUP_3009;
                float _RESERVED_IDENTIFIER_FIXUP_3015 = _RESERVED_IDENTIFIER_FIXUP_3006 + _RESERVED_IDENTIFIER_FIXUP_3009;
                _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_3015;
                float _RESERVED_IDENTIFIER_FIXUP_3023 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3717.z = _RESERVED_IDENTIFIER_FIXUP_3023;
                float _RESERVED_IDENTIFIER_FIXUP_3029 = clamp((_RESERVED_IDENTIFIER_FIXUP_3023 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3717.z = _RESERVED_IDENTIFIER_FIXUP_3029;
                float _RESERVED_IDENTIFIER_FIXUP_3034 = (_RESERVED_IDENTIFIER_FIXUP_3015 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3717.y = _RESERVED_IDENTIFIER_FIXUP_3034;
                _RESERVED_IDENTIFIER_FIXUP_3717.x = (_RESERVED_IDENTIFIER_FIXUP_3029 * _RESERVED_IDENTIFIER_FIXUP_3034) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_4051 = _RESERVED_IDENTIFIER_FIXUP_3656;
                _RESERVED_IDENTIFIER_FIXUP_4045 = _RESERVED_IDENTIFIER_FIXUP_3717;
            }
            _RESERVED_IDENTIFIER_FIXUP_4050 = _RESERVED_IDENTIFIER_FIXUP_4051;
            _RESERVED_IDENTIFIER_FIXUP_4044 = _RESERVED_IDENTIFIER_FIXUP_4045;
        }
        _RESERVED_IDENTIFIER_FIXUP_4049 = _RESERVED_IDENTIFIER_FIXUP_4050;
        _RESERVED_IDENTIFIER_FIXUP_4043 = _RESERVED_IDENTIFIER_FIXUP_4044;
    }
    float _RESERVED_IDENTIFIER_FIXUP_3049 = (_RESERVED_IDENTIFIER_FIXUP_4043.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3992 = _RESERVED_IDENTIFIER_FIXUP_4043;
    _RESERVED_IDENTIFIER_FIXUP_3992.y = _RESERVED_IDENTIFIER_FIXUP_3049;
    _RESERVED_IDENTIFIER_FIXUP_3992.y = _RESERVED_IDENTIFIER_FIXUP_3049;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3062 = _RESERVED_IDENTIFIER_FIXUP_2294.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3998 = _RESERVED_IDENTIFIER_FIXUP_4049;
    _RESERVED_IDENTIFIER_FIXUP_3998.x = _RESERVED_IDENTIFIER_FIXUP_3062.x;
    _RESERVED_IDENTIFIER_FIXUP_3998.y = _RESERVED_IDENTIFIER_FIXUP_3062.y;
    _RESERVED_IDENTIFIER_FIXUP_3998.z = _RESERVED_IDENTIFIER_FIXUP_3062.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3073 = _RESERVED_IDENTIFIER_FIXUP_3992.xxx * _RESERVED_IDENTIFIER_FIXUP_3998.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4059 = vec4(_RESERVED_IDENTIFIER_FIXUP_3073.x, _RESERVED_IDENTIFIER_FIXUP_3049, _RESERVED_IDENTIFIER_FIXUP_3073.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_3087 = (_RESERVED_IDENTIFIER_FIXUP_2294.xyz * _RESERVED_IDENTIFIER_FIXUP_4059.yyy) + _RESERVED_IDENTIFIER_FIXUP_4059.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4010 = _RESERVED_IDENTIFIER_FIXUP_2294;
    _RESERVED_IDENTIFIER_FIXUP_4010.x = _RESERVED_IDENTIFIER_FIXUP_3087.x;
    _RESERVED_IDENTIFIER_FIXUP_4010.y = _RESERVED_IDENTIFIER_FIXUP_3087.y;
    _RESERVED_IDENTIFIER_FIXUP_4010.z = _RESERVED_IDENTIFIER_FIXUP_3087.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3100 = _RESERVED_IDENTIFIER_FIXUP_4010.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_4016 = _RESERVED_IDENTIFIER_FIXUP_4010;
    _RESERVED_IDENTIFIER_FIXUP_4016.x = _RESERVED_IDENTIFIER_FIXUP_3100.x;
    _RESERVED_IDENTIFIER_FIXUP_4016.y = _RESERVED_IDENTIFIER_FIXUP_3100.y;
    _RESERVED_IDENTIFIER_FIXUP_4016.z = _RESERVED_IDENTIFIER_FIXUP_3100.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_4016.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1091 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1100;
    if (_RESERVED_IDENTIFIER_FIXUP_1091)
    {
        _RESERVED_IDENTIFIER_FIXUP_1100 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1100 = _RESERVED_IDENTIFIER_FIXUP_1091;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1100)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1137 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3580.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1163 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3153;
    if (_RESERVED_IDENTIFIER_FIXUP_1137 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3153 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1137), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1163);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3153 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1163);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3153;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_3049);
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
    vec4 v4 = texcoord4;
    vec4 v5 = texcoord5;
    vec4 v6 = texcoord6;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 hdB88 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r3.x = hdB88.x;
    r3.y = hdB88.y;
    vec3 hdB100 = v0.xyz + v0.xyz;
    r4.x = hdB100.x;
    r4.y = hdB100.y;
    r4.z = hdB100.z;
    vec3 hdB112 = r0.xyz * r4.xyz;
    r5.x = hdB112.x;
    r5.y = hdB112.y;
    r5.z = hdB112.z;
    vec4 hdB121 = r0;
    vec3 hdB130 = mix(r5.xyz, hdB121.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB130.x;
    r0.y = hdB130.y;
    r0.z = hdB130.z;
    vec3 hdB141 = r1.xyz * r4.xyz;
    r3.x = hdB141.x;
    r3.z = hdB141.y;
    r3.w = hdB141.z;
    vec4 hdB151 = r1;
    vec3 hdB157 = mix(r3.xzw, hdB151.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = hdB157.x;
    r1.y = hdB157.y;
    r1.z = hdB157.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB221 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB221.x;
        r1.y = hdB221.y;
        vec2 hdB232 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB232.x;
        r2.y = hdB232.y;
        vec2 hdB243 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB243.x;
        r3.y = hdB243.y;
        vec2 hdB254 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB254.x;
        r4.y = hdB254.y;
        vec2 hdB265 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB265.x;
        r5.y = hdB265.y;
        vec2 hdB276 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB276.x;
        r6.y = hdB276.y;
        vec2 hdB287 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB287.x;
        r7.y = hdB287.y;
        vec2 hdB298 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB298.x;
        r8.y = hdB298.y;
        vec4 hdB303 = r1;
        vec2 hdB309 = hdB303.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB309.x;
        r1.y = hdB309.y;
        r9 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r9.xy;
        float param_3 = r9.w;
        r9 = hdLod5(param_2, param_3);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_8 = r4.xy;
        float param_9 = r4.w;
        r4 = hdLod5(param_8, param_9);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_10 = r5.xy;
        float param_11 = r5.w;
        r5 = hdLod5(param_10, param_11);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_12 = r6.xy;
        float param_13 = r6.w;
        r6 = hdLod5(param_12, param_13);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_14 = r7.xy;
        float param_15 = r7.w;
        r7 = hdLod5(param_14, param_15);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_16 = r8.xy;
        float param_17 = r8.w;
        r8 = hdLod5(param_16, param_17);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_18 = r1.xy;
        float param_19 = r1.w;
        r1 = hdLod5(param_18, param_19);
        r9.y = r2.x;
        r9.z = r3.x;
        r9.w = r4.x;
        r2 = r9 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r3 = r5 + (-v4.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.x += (-v4.z);
        r1.x = float(r1.x >= 0.0);
        r1.y = dot(r2, vec4(1.0));
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.x += r1.y;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v5.x), abs(v5.y));
        if (r1.y < 1.0)
        {
            vec2 hdB495 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB495.x;
            r1.z = hdB495.y;
            vec2 hdB505 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB505.x;
            r2.y = hdB505.y;
            vec2 hdB515 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB515.x;
            r3.y = hdB515.y;
            vec2 hdB525 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB525.x;
            r4.y = hdB525.y;
            vec2 hdB535 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB535.x;
            r5.y = hdB535.y;
            r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_20 = r6.xy;
            float param_21 = r6.w;
            r6 = hdLod6(param_20, param_21);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_22 = r2.xy;
            float param_23 = r2.w;
            r2 = hdLod6(param_22, param_23);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_24 = r3.xy;
            float param_25 = r3.w;
            r3 = hdLod6(param_24, param_25);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_26 = r4.xy;
            float param_27 = r4.w;
            r4 = hdLod6(param_26, param_27);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_28 = r5.xy;
            float param_29 = r5.w;
            r5 = hdLod6(param_28, param_29);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.y = r5.x + (-v5.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.y += r1.z;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v6.x), abs(v6.y));
            if (r1.y < 1.0)
            {
                vec2 hdB651 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB651.x;
                r1.z = hdB651.y;
                vec2 hdB661 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB661.x;
                r2.y = hdB661.y;
                vec2 hdB671 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB671.x;
                r3.y = hdB671.y;
                vec2 hdB681 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB681.x;
                r4.y = hdB681.y;
                vec2 hdB691 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB691.x;
                r5.y = hdB691.y;
                r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_30 = r6.xy;
                float param_31 = r6.w;
                r6 = hdLod7(param_30, param_31);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_32 = r2.xy;
                float param_33 = r2.w;
                r2 = hdLod7(param_32, param_33);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_34 = r3.xy;
                float param_35 = r3.w;
                r3 = hdLod7(param_34, param_35);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_36 = r4.xy;
                float param_37 = r4.w;
                r4 = hdLod7(param_36, param_37);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_38 = r5.xy;
                float param_39 = r5.w;
                r5 = hdLod7(param_38, param_39);
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
                r2.x = v4.w;
                r2.y = v5.w;
                vec2 hdB799 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB799.x;
                r3.y = hdB799.y;
                vec2 hdB809 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB809.x;
                r4.y = hdB809.y;
                vec2 hdB819 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB819.x;
                r5.y = hdB819.y;
                vec2 hdB829 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB829.x;
                r6.y = hdB829.y;
                vec2 hdB839 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB839.x;
                r7.y = hdB839.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_40 = r3.xy;
                float param_41 = r3.w;
                r3 = hdLod8(param_40, param_41);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_42 = r4.xy;
                float param_43 = r4.w;
                r4 = hdLod8(param_42, param_43);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_44 = r5.xy;
                float param_45 = r5.w;
                r5 = hdLod8(param_44, param_45);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_46 = r6.xy;
                float param_47 = r6.w;
                r6 = hdLod8(param_46, param_47);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_48 = r7.xy;
                float param_49 = r7.w;
                r7 = hdLod8(param_48, param_49);
                r3.y = r4.x;
                r3.z = r5.x;
                r3.w = r6.x;
                r3 += (-v6.wwww);
                r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
                r1.y = r7.x + (-v6.w);
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
    vec3 hdB973 = r0.www * v1.xyz;
    r2.x = hdB973.x;
    r2.y = hdB973.y;
    r2.z = hdB973.z;
    vec4 hdB980 = r1;
    vec3 hdB984 = hdB980.xxx * r2.xyz;
    r1.x = hdB984.x;
    r1.z = hdB984.y;
    r1.w = hdB984.z;
    vec4 hdB991 = r0;
    vec3 hdB998 = (hdB991.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB998.x;
    r0.y = hdB998.y;
    r0.z = hdB998.z;
    vec4 hdB1005 = r0;
    vec3 hdB1012 = hdB1005.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1012.x;
    r0.y = hdB1012.y;
    r0.z = hdB1012.z;
    vec3 hdB1027 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1027.x;
    oC0.y = hdB1027.y;
    oC0.z = hdB1027.z;
    oC0.w = 1.0;
    bool hdB1039 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1047;
    if (hdB1039)
    {
        hdB1047 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1047 = hdB1039;
    }
    if (hdB1047)
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
    bool _3523 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3533;
    if (_3523)
    {
        _3533 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _3533 = _3523;
    }
    if (_3533)
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
        bool _3558 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3573;
        if (!_3558)
        {
            _3573 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3573 = _3558;
        }
        if (_3573)
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
