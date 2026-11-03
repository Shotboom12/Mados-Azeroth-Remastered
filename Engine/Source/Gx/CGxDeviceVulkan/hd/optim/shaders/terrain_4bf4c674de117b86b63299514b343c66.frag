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
float _RESERVED_IDENTIFIER_FIXUP_3909;
vec4 _RESERVED_IDENTIFIER_FIXUP_3910;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1207 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1211 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1219 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1223 = hdTex4(param_4);
    float _RESERVED_IDENTIFIER_FIXUP_1227 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1223.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3084 = _RESERVED_IDENTIFIER_FIXUP_1223;
    _RESERVED_IDENTIFIER_FIXUP_3084.w = _RESERVED_IDENTIFIER_FIXUP_1227;
    _RESERVED_IDENTIFIER_FIXUP_3084.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1227;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1237 = _RESERVED_IDENTIFIER_FIXUP_1211 * _RESERVED_IDENTIFIER_FIXUP_3084.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1255 = (_RESERVED_IDENTIFIER_FIXUP_1219 * _RESERVED_IDENTIFIER_FIXUP_3084.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1215 * _RESERVED_IDENTIFIER_FIXUP_3084.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1207 * _RESERVED_IDENTIFIER_FIXUP_3084.wwww) + _RESERVED_IDENTIFIER_FIXUP_1237));
    float _RESERVED_IDENTIFIER_FIXUP_1262 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3091 = _RESERVED_IDENTIFIER_FIXUP_1237;
    _RESERVED_IDENTIFIER_FIXUP_3091.x = _RESERVED_IDENTIFIER_FIXUP_1262;
    float _RESERVED_IDENTIFIER_FIXUP_1268 = clamp((_RESERVED_IDENTIFIER_FIXUP_1262 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3091.x = _RESERVED_IDENTIFIER_FIXUP_1268;
    float _RESERVED_IDENTIFIER_FIXUP_1274 = ((-_RESERVED_IDENTIFIER_FIXUP_1268) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3091.x = _RESERVED_IDENTIFIER_FIXUP_1274;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3911;
    if (_RESERVED_IDENTIFIER_FIXUP_1274 != (-_RESERVED_IDENTIFIER_FIXUP_1274))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1286 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3330;
        _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_1286.x;
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_1286.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1296 = _RESERVED_IDENTIFIER_FIXUP_3330.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3334;
        _RESERVED_IDENTIFIER_FIXUP_3334.x = _RESERVED_IDENTIFIER_FIXUP_1296.x;
        _RESERVED_IDENTIFIER_FIXUP_3334.y = _RESERVED_IDENTIFIER_FIXUP_1296.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1306 = _RESERVED_IDENTIFIER_FIXUP_3330.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3338;
        _RESERVED_IDENTIFIER_FIXUP_3338.x = _RESERVED_IDENTIFIER_FIXUP_1306.x;
        _RESERVED_IDENTIFIER_FIXUP_3338.y = _RESERVED_IDENTIFIER_FIXUP_1306.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1316 = _RESERVED_IDENTIFIER_FIXUP_3330.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3342;
        _RESERVED_IDENTIFIER_FIXUP_3342.x = _RESERVED_IDENTIFIER_FIXUP_1316.x;
        _RESERVED_IDENTIFIER_FIXUP_3342.y = _RESERVED_IDENTIFIER_FIXUP_1316.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1326 = _RESERVED_IDENTIFIER_FIXUP_3330.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3346;
        _RESERVED_IDENTIFIER_FIXUP_3346.x = _RESERVED_IDENTIFIER_FIXUP_1326.x;
        _RESERVED_IDENTIFIER_FIXUP_3346.y = _RESERVED_IDENTIFIER_FIXUP_1326.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1336 = _RESERVED_IDENTIFIER_FIXUP_3330.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3350;
        _RESERVED_IDENTIFIER_FIXUP_3350.x = _RESERVED_IDENTIFIER_FIXUP_1336.x;
        _RESERVED_IDENTIFIER_FIXUP_3350.y = _RESERVED_IDENTIFIER_FIXUP_1336.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1346 = _RESERVED_IDENTIFIER_FIXUP_3330.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3354;
        _RESERVED_IDENTIFIER_FIXUP_3354.x = _RESERVED_IDENTIFIER_FIXUP_1346.x;
        _RESERVED_IDENTIFIER_FIXUP_3354.y = _RESERVED_IDENTIFIER_FIXUP_1346.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1356 = _RESERVED_IDENTIFIER_FIXUP_3330.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3358;
        _RESERVED_IDENTIFIER_FIXUP_3358.x = _RESERVED_IDENTIFIER_FIXUP_1356.x;
        _RESERVED_IDENTIFIER_FIXUP_3358.y = _RESERVED_IDENTIFIER_FIXUP_1356.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1366 = _RESERVED_IDENTIFIER_FIXUP_3330.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3362;
        _RESERVED_IDENTIFIER_FIXUP_3362.x = _RESERVED_IDENTIFIER_FIXUP_1366.x;
        _RESERVED_IDENTIFIER_FIXUP_3362.y = _RESERVED_IDENTIFIER_FIXUP_1366.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1374 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1374.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1374.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1380 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3334.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3338.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3342.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3346.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3346.xy;
        float param_8 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1420 = hdLod5(param_7, param_8);
        _RESERVED_IDENTIFIER_FIXUP_3350.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3354.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3358.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3362.w = 0.0;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3362.xy;
        float param_10 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1460 = hdLod5(param_9, param_10);
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3334.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1380.y = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3338.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1380.z = hdLod5(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3342.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1380.w = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3350.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1420.y = hdLod5(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3354.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1420.z = hdLod5(param_19, param_20).x;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3358.xy;
        float param_22 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1420.w = hdLod5(param_21, param_22).x;
        float _RESERVED_IDENTIFIER_FIXUP_1500 = _RESERVED_IDENTIFIER_FIXUP_1460.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3427 = _RESERVED_IDENTIFIER_FIXUP_1460;
        _RESERVED_IDENTIFIER_FIXUP_3427.x = _RESERVED_IDENTIFIER_FIXUP_1500;
        float _RESERVED_IDENTIFIER_FIXUP_1505 = float(_RESERVED_IDENTIFIER_FIXUP_1500 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3427.x = _RESERVED_IDENTIFIER_FIXUP_1505;
        float _RESERVED_IDENTIFIER_FIXUP_1508 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1380 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3427.y = _RESERVED_IDENTIFIER_FIXUP_1508;
        float _RESERVED_IDENTIFIER_FIXUP_1511 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1420 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3427.z = _RESERVED_IDENTIFIER_FIXUP_1511;
        float _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_1508 + _RESERVED_IDENTIFIER_FIXUP_1511;
        _RESERVED_IDENTIFIER_FIXUP_3427.y = _RESERVED_IDENTIFIER_FIXUP_1517;
        float _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_1505 + _RESERVED_IDENTIFIER_FIXUP_1517;
        _RESERVED_IDENTIFIER_FIXUP_3427.x = _RESERVED_IDENTIFIER_FIXUP_1523;
        _RESERVED_IDENTIFIER_FIXUP_3427.x = _RESERVED_IDENTIFIER_FIXUP_1523 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3911 = _RESERVED_IDENTIFIER_FIXUP_3427;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1536 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3091.y = _RESERVED_IDENTIFIER_FIXUP_1536;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3912;
        if (_RESERVED_IDENTIFIER_FIXUP_1536 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1545 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3264 = _RESERVED_IDENTIFIER_FIXUP_3091;
            _RESERVED_IDENTIFIER_FIXUP_3264.y = _RESERVED_IDENTIFIER_FIXUP_1545.x;
            _RESERVED_IDENTIFIER_FIXUP_3264.z = _RESERVED_IDENTIFIER_FIXUP_1545.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1555 = _RESERVED_IDENTIFIER_FIXUP_3264.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3268;
            _RESERVED_IDENTIFIER_FIXUP_3268.x = _RESERVED_IDENTIFIER_FIXUP_1555.x;
            _RESERVED_IDENTIFIER_FIXUP_3268.y = _RESERVED_IDENTIFIER_FIXUP_1555.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1565 = _RESERVED_IDENTIFIER_FIXUP_3264.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3272;
            _RESERVED_IDENTIFIER_FIXUP_3272.x = _RESERVED_IDENTIFIER_FIXUP_1565.x;
            _RESERVED_IDENTIFIER_FIXUP_3272.y = _RESERVED_IDENTIFIER_FIXUP_1565.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1575 = _RESERVED_IDENTIFIER_FIXUP_3264.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3276;
            _RESERVED_IDENTIFIER_FIXUP_3276.x = _RESERVED_IDENTIFIER_FIXUP_1575.x;
            _RESERVED_IDENTIFIER_FIXUP_3276.y = _RESERVED_IDENTIFIER_FIXUP_1575.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1585 = _RESERVED_IDENTIFIER_FIXUP_3264.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3280;
            _RESERVED_IDENTIFIER_FIXUP_3280.x = _RESERVED_IDENTIFIER_FIXUP_1585.x;
            _RESERVED_IDENTIFIER_FIXUP_3280.y = _RESERVED_IDENTIFIER_FIXUP_1585.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1593 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1593.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1593.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1599 = hdLod6(param_23, param_24);
            _RESERVED_IDENTIFIER_FIXUP_3268.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3272.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3276.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3280.w = 0.0;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3268.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1599.y = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3272.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1599.z = hdLod6(param_27, param_28).x;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3276.xy;
            float param_30 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1599.w = hdLod6(param_29, param_30).x;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3280.xy;
            float param_32 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1662 = hdLod6(param_31, param_32).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3264.y = _RESERVED_IDENTIFIER_FIXUP_1662;
            float _RESERVED_IDENTIFIER_FIXUP_1667 = float(_RESERVED_IDENTIFIER_FIXUP_1662 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3264.y = _RESERVED_IDENTIFIER_FIXUP_1667;
            float _RESERVED_IDENTIFIER_FIXUP_1670 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1599 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3264.z = _RESERVED_IDENTIFIER_FIXUP_1670;
            float _RESERVED_IDENTIFIER_FIXUP_1676 = _RESERVED_IDENTIFIER_FIXUP_1667 + _RESERVED_IDENTIFIER_FIXUP_1670;
            _RESERVED_IDENTIFIER_FIXUP_3264.y = _RESERVED_IDENTIFIER_FIXUP_1676;
            _RESERVED_IDENTIFIER_FIXUP_3264.x = _RESERVED_IDENTIFIER_FIXUP_1676 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3912 = _RESERVED_IDENTIFIER_FIXUP_3264;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1689 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3108 = _RESERVED_IDENTIFIER_FIXUP_3091;
            _RESERVED_IDENTIFIER_FIXUP_3108.y = _RESERVED_IDENTIFIER_FIXUP_1689;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3913;
            if (_RESERVED_IDENTIFIER_FIXUP_1689 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1698 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3198 = _RESERVED_IDENTIFIER_FIXUP_3108;
                _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1698.x;
                _RESERVED_IDENTIFIER_FIXUP_3198.z = _RESERVED_IDENTIFIER_FIXUP_1698.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1708 = _RESERVED_IDENTIFIER_FIXUP_3198.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3202;
                _RESERVED_IDENTIFIER_FIXUP_3202.x = _RESERVED_IDENTIFIER_FIXUP_1708.x;
                _RESERVED_IDENTIFIER_FIXUP_3202.y = _RESERVED_IDENTIFIER_FIXUP_1708.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1718 = _RESERVED_IDENTIFIER_FIXUP_3198.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3206;
                _RESERVED_IDENTIFIER_FIXUP_3206.x = _RESERVED_IDENTIFIER_FIXUP_1718.x;
                _RESERVED_IDENTIFIER_FIXUP_3206.y = _RESERVED_IDENTIFIER_FIXUP_1718.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1728 = _RESERVED_IDENTIFIER_FIXUP_3198.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3210;
                _RESERVED_IDENTIFIER_FIXUP_3210.x = _RESERVED_IDENTIFIER_FIXUP_1728.x;
                _RESERVED_IDENTIFIER_FIXUP_3210.y = _RESERVED_IDENTIFIER_FIXUP_1728.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1738 = _RESERVED_IDENTIFIER_FIXUP_3198.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3214;
                _RESERVED_IDENTIFIER_FIXUP_3214.x = _RESERVED_IDENTIFIER_FIXUP_1738.x;
                _RESERVED_IDENTIFIER_FIXUP_3214.y = _RESERVED_IDENTIFIER_FIXUP_1738.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1746 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1746.xy;
                float param_34 = _RESERVED_IDENTIFIER_FIXUP_1746.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1752 = hdLod7(param_33, param_34);
                _RESERVED_IDENTIFIER_FIXUP_3202.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3206.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3210.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3214.w = 0.0;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3202.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1752.y = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3206.xy;
                float param_38 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1752.z = hdLod7(param_37, param_38).x;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3210.xy;
                float param_40 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1752.w = hdLod7(param_39, param_40).x;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3214.xy;
                float param_42 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1815 = hdLod7(param_41, param_42).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1815;
                float _RESERVED_IDENTIFIER_FIXUP_1820 = float(_RESERVED_IDENTIFIER_FIXUP_1815 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1820;
                float _RESERVED_IDENTIFIER_FIXUP_1823 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1752 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3198.z = _RESERVED_IDENTIFIER_FIXUP_1823;
                float _RESERVED_IDENTIFIER_FIXUP_1829 = _RESERVED_IDENTIFIER_FIXUP_1820 + _RESERVED_IDENTIFIER_FIXUP_1823;
                _RESERVED_IDENTIFIER_FIXUP_3198.y = _RESERVED_IDENTIFIER_FIXUP_1829;
                _RESERVED_IDENTIFIER_FIXUP_3198.x = _RESERVED_IDENTIFIER_FIXUP_1829 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3913 = _RESERVED_IDENTIFIER_FIXUP_3198;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_1215.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_1215.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1845 = (_RESERVED_IDENTIFIER_FIXUP_1215.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3117;
                _RESERVED_IDENTIFIER_FIXUP_3117.x = _RESERVED_IDENTIFIER_FIXUP_1845.x;
                _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1845.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1855 = _RESERVED_IDENTIFIER_FIXUP_3117.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3121;
                _RESERVED_IDENTIFIER_FIXUP_3121.x = _RESERVED_IDENTIFIER_FIXUP_1855.x;
                _RESERVED_IDENTIFIER_FIXUP_3121.y = _RESERVED_IDENTIFIER_FIXUP_1855.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1865 = _RESERVED_IDENTIFIER_FIXUP_3117.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3125;
                _RESERVED_IDENTIFIER_FIXUP_3125.x = _RESERVED_IDENTIFIER_FIXUP_1865.x;
                _RESERVED_IDENTIFIER_FIXUP_3125.y = _RESERVED_IDENTIFIER_FIXUP_1865.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1875 = _RESERVED_IDENTIFIER_FIXUP_3117.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3129;
                _RESERVED_IDENTIFIER_FIXUP_3129.x = _RESERVED_IDENTIFIER_FIXUP_1875.x;
                _RESERVED_IDENTIFIER_FIXUP_3129.y = _RESERVED_IDENTIFIER_FIXUP_1875.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1885 = _RESERVED_IDENTIFIER_FIXUP_3117.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3133;
                _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1885.x;
                _RESERVED_IDENTIFIER_FIXUP_3133.y = _RESERVED_IDENTIFIER_FIXUP_1885.y;
                _RESERVED_IDENTIFIER_FIXUP_3117.w = 0.0;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3117.xy;
                float param_44 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1899 = hdLod8(param_43, param_44);
                _RESERVED_IDENTIFIER_FIXUP_3121.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3125.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3129.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3133.w = 0.0;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3121.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1899.y = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3125.xy;
                float param_48 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1899.z = hdLod8(param_47, param_48).x;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3129.xy;
                float param_50 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1899.w = hdLod8(param_49, param_50).x;
                vec2 param_51 = _RESERVED_IDENTIFIER_FIXUP_3133.xy;
                float param_52 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1962 = hdLod8(param_51, param_52).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3173 = _RESERVED_IDENTIFIER_FIXUP_3108;
                _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_1962;
                float _RESERVED_IDENTIFIER_FIXUP_1967 = float(_RESERVED_IDENTIFIER_FIXUP_1962 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_1967;
                float _RESERVED_IDENTIFIER_FIXUP_1970 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1899 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3173.z = _RESERVED_IDENTIFIER_FIXUP_1970;
                float _RESERVED_IDENTIFIER_FIXUP_1976 = _RESERVED_IDENTIFIER_FIXUP_1967 + _RESERVED_IDENTIFIER_FIXUP_1970;
                _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_1976;
                float _RESERVED_IDENTIFIER_FIXUP_1984 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3173.z = _RESERVED_IDENTIFIER_FIXUP_1984;
                float _RESERVED_IDENTIFIER_FIXUP_1990 = clamp((_RESERVED_IDENTIFIER_FIXUP_1984 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3173.z = _RESERVED_IDENTIFIER_FIXUP_1990;
                float _RESERVED_IDENTIFIER_FIXUP_1995 = (_RESERVED_IDENTIFIER_FIXUP_1976 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_1995;
                _RESERVED_IDENTIFIER_FIXUP_3173.x = (_RESERVED_IDENTIFIER_FIXUP_1990 * _RESERVED_IDENTIFIER_FIXUP_1995) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3913 = _RESERVED_IDENTIFIER_FIXUP_3173;
            }
            _RESERVED_IDENTIFIER_FIXUP_3912 = _RESERVED_IDENTIFIER_FIXUP_3913;
        }
        _RESERVED_IDENTIFIER_FIXUP_3911 = _RESERVED_IDENTIFIER_FIXUP_3912;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3450 = _RESERVED_IDENTIFIER_FIXUP_3911;
    _RESERVED_IDENTIFIER_FIXUP_3450.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2023 = _RESERVED_IDENTIFIER_FIXUP_1255.xyz * _RESERVED_IDENTIFIER_FIXUP_3450.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3452 = _RESERVED_IDENTIFIER_FIXUP_1255;
    _RESERVED_IDENTIFIER_FIXUP_3452.x = _RESERVED_IDENTIFIER_FIXUP_2023.x;
    _RESERVED_IDENTIFIER_FIXUP_3452.y = _RESERVED_IDENTIFIER_FIXUP_2023.y;
    _RESERVED_IDENTIFIER_FIXUP_3452.z = _RESERVED_IDENTIFIER_FIXUP_2023.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2034 = _RESERVED_IDENTIFIER_FIXUP_3452.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3909).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3458 = _RESERVED_IDENTIFIER_FIXUP_3452;
    _RESERVED_IDENTIFIER_FIXUP_3458.x = _RESERVED_IDENTIFIER_FIXUP_2034.x;
    _RESERVED_IDENTIFIER_FIXUP_3458.y = _RESERVED_IDENTIFIER_FIXUP_2034.y;
    _RESERVED_IDENTIFIER_FIXUP_3458.z = _RESERVED_IDENTIFIER_FIXUP_2034.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2045 = _RESERVED_IDENTIFIER_FIXUP_3458.xyz + _RESERVED_IDENTIFIER_FIXUP_3458.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_3458;
    _RESERVED_IDENTIFIER_FIXUP_3464.x = _RESERVED_IDENTIFIER_FIXUP_2045.x;
    _RESERVED_IDENTIFIER_FIXUP_3464.y = _RESERVED_IDENTIFIER_FIXUP_2045.y;
    _RESERVED_IDENTIFIER_FIXUP_3464.z = _RESERVED_IDENTIFIER_FIXUP_2045.z;
    _RESERVED_IDENTIFIER_FIXUP_3450.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3450.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3450.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2070 = (_RESERVED_IDENTIFIER_FIXUP_3450.yzw * _RESERVED_IDENTIFIER_FIXUP_3450.xxx) + _RESERVED_IDENTIFIER_FIXUP_3464.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3476 = _RESERVED_IDENTIFIER_FIXUP_3464;
    _RESERVED_IDENTIFIER_FIXUP_3476.x = _RESERVED_IDENTIFIER_FIXUP_2070.x;
    _RESERVED_IDENTIFIER_FIXUP_3476.y = _RESERVED_IDENTIFIER_FIXUP_2070.y;
    _RESERVED_IDENTIFIER_FIXUP_3476.z = _RESERVED_IDENTIFIER_FIXUP_2070.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2083 = _RESERVED_IDENTIFIER_FIXUP_3476.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3482 = _RESERVED_IDENTIFIER_FIXUP_3476;
    _RESERVED_IDENTIFIER_FIXUP_3482.x = _RESERVED_IDENTIFIER_FIXUP_2083.x;
    _RESERVED_IDENTIFIER_FIXUP_3482.y = _RESERVED_IDENTIFIER_FIXUP_2083.y;
    _RESERVED_IDENTIFIER_FIXUP_3482.z = _RESERVED_IDENTIFIER_FIXUP_2083.z;
    vec2 param_53 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2142 = hdTex0(param_53);
    vec2 param_54 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2146 = hdTex1(param_54);
    vec2 param_55 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2150 = hdTex2(param_55);
    vec2 param_56 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2154 = hdTex3(param_56);
    vec2 param_57 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2158 = hdTex4(param_57);
    float _RESERVED_IDENTIFIER_FIXUP_2162 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2158.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3496 = _RESERVED_IDENTIFIER_FIXUP_2158;
    _RESERVED_IDENTIFIER_FIXUP_3496.w = _RESERVED_IDENTIFIER_FIXUP_2162;
    _RESERVED_IDENTIFIER_FIXUP_3496.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2162;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2172 = _RESERVED_IDENTIFIER_FIXUP_2146 * _RESERVED_IDENTIFIER_FIXUP_3496.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2190 = (_RESERVED_IDENTIFIER_FIXUP_2154 * _RESERVED_IDENTIFIER_FIXUP_3496.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_2150 * _RESERVED_IDENTIFIER_FIXUP_3496.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_2142 * _RESERVED_IDENTIFIER_FIXUP_3496.wwww) + _RESERVED_IDENTIFIER_FIXUP_2172));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3503 = _RESERVED_IDENTIFIER_FIXUP_2172;
    _RESERVED_IDENTIFIER_FIXUP_3503.x = _RESERVED_IDENTIFIER_FIXUP_1262;
    float _RESERVED_IDENTIFIER_FIXUP_2203 = clamp((_RESERVED_IDENTIFIER_FIXUP_1262 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3503.x = _RESERVED_IDENTIFIER_FIXUP_2203;
    float _RESERVED_IDENTIFIER_FIXUP_2209 = ((-_RESERVED_IDENTIFIER_FIXUP_2203) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3503.x = _RESERVED_IDENTIFIER_FIXUP_2209;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3920;
    if (_RESERVED_IDENTIFIER_FIXUP_2209 != (-_RESERVED_IDENTIFIER_FIXUP_2209))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2221 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3742;
        _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_2221.x;
        _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2221.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2231 = _RESERVED_IDENTIFIER_FIXUP_3742.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3746;
        _RESERVED_IDENTIFIER_FIXUP_3746.x = _RESERVED_IDENTIFIER_FIXUP_2231.x;
        _RESERVED_IDENTIFIER_FIXUP_3746.y = _RESERVED_IDENTIFIER_FIXUP_2231.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2241 = _RESERVED_IDENTIFIER_FIXUP_3742.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3750;
        _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2241.x;
        _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_2241.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2251 = _RESERVED_IDENTIFIER_FIXUP_3742.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3754;
        _RESERVED_IDENTIFIER_FIXUP_3754.x = _RESERVED_IDENTIFIER_FIXUP_2251.x;
        _RESERVED_IDENTIFIER_FIXUP_3754.y = _RESERVED_IDENTIFIER_FIXUP_2251.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2261 = _RESERVED_IDENTIFIER_FIXUP_3742.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3758;
        _RESERVED_IDENTIFIER_FIXUP_3758.x = _RESERVED_IDENTIFIER_FIXUP_2261.x;
        _RESERVED_IDENTIFIER_FIXUP_3758.y = _RESERVED_IDENTIFIER_FIXUP_2261.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2271 = _RESERVED_IDENTIFIER_FIXUP_3742.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3762;
        _RESERVED_IDENTIFIER_FIXUP_3762.x = _RESERVED_IDENTIFIER_FIXUP_2271.x;
        _RESERVED_IDENTIFIER_FIXUP_3762.y = _RESERVED_IDENTIFIER_FIXUP_2271.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2281 = _RESERVED_IDENTIFIER_FIXUP_3742.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3766;
        _RESERVED_IDENTIFIER_FIXUP_3766.x = _RESERVED_IDENTIFIER_FIXUP_2281.x;
        _RESERVED_IDENTIFIER_FIXUP_3766.y = _RESERVED_IDENTIFIER_FIXUP_2281.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2291 = _RESERVED_IDENTIFIER_FIXUP_3742.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3770;
        _RESERVED_IDENTIFIER_FIXUP_3770.x = _RESERVED_IDENTIFIER_FIXUP_2291.x;
        _RESERVED_IDENTIFIER_FIXUP_3770.y = _RESERVED_IDENTIFIER_FIXUP_2291.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2301 = _RESERVED_IDENTIFIER_FIXUP_3742.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3774;
        _RESERVED_IDENTIFIER_FIXUP_3774.x = _RESERVED_IDENTIFIER_FIXUP_2301.x;
        _RESERVED_IDENTIFIER_FIXUP_3774.y = _RESERVED_IDENTIFIER_FIXUP_2301.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2309 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2309.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2309.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2315 = hdLod5(param_58, param_59);
        _RESERVED_IDENTIFIER_FIXUP_3746.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3750.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3754.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3758.w = 0.0;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3758.xy;
        float param_61 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2355 = hdLod5(param_60, param_61);
        _RESERVED_IDENTIFIER_FIXUP_3762.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3766.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3770.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3774.w = 0.0;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3774.xy;
        float param_63 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2395 = hdLod5(param_62, param_63);
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3746.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2315.y = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3750.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2315.z = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3754.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2315.w = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3762.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2355.y = hdLod5(param_70, param_71).x;
        vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3766.xy;
        float param_73 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2355.z = hdLod5(param_72, param_73).x;
        vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3770.xy;
        float param_75 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2355.w = hdLod5(param_74, param_75).x;
        float _RESERVED_IDENTIFIER_FIXUP_2435 = _RESERVED_IDENTIFIER_FIXUP_2395.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3839 = _RESERVED_IDENTIFIER_FIXUP_2395;
        _RESERVED_IDENTIFIER_FIXUP_3839.x = _RESERVED_IDENTIFIER_FIXUP_2435;
        float _RESERVED_IDENTIFIER_FIXUP_2440 = float(_RESERVED_IDENTIFIER_FIXUP_2435 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3839.x = _RESERVED_IDENTIFIER_FIXUP_2440;
        float _RESERVED_IDENTIFIER_FIXUP_2443 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2315 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3839.y = _RESERVED_IDENTIFIER_FIXUP_2443;
        float _RESERVED_IDENTIFIER_FIXUP_2446 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2355 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3839.z = _RESERVED_IDENTIFIER_FIXUP_2446;
        float _RESERVED_IDENTIFIER_FIXUP_2452 = _RESERVED_IDENTIFIER_FIXUP_2443 + _RESERVED_IDENTIFIER_FIXUP_2446;
        _RESERVED_IDENTIFIER_FIXUP_3839.y = _RESERVED_IDENTIFIER_FIXUP_2452;
        float _RESERVED_IDENTIFIER_FIXUP_2458 = _RESERVED_IDENTIFIER_FIXUP_2440 + _RESERVED_IDENTIFIER_FIXUP_2452;
        _RESERVED_IDENTIFIER_FIXUP_3839.x = _RESERVED_IDENTIFIER_FIXUP_2458;
        _RESERVED_IDENTIFIER_FIXUP_3839.x = _RESERVED_IDENTIFIER_FIXUP_2458 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3920 = _RESERVED_IDENTIFIER_FIXUP_3839;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2471 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3503.y = _RESERVED_IDENTIFIER_FIXUP_2471;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3921;
        if (_RESERVED_IDENTIFIER_FIXUP_2471 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2480 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3676 = _RESERVED_IDENTIFIER_FIXUP_3503;
            _RESERVED_IDENTIFIER_FIXUP_3676.y = _RESERVED_IDENTIFIER_FIXUP_2480.x;
            _RESERVED_IDENTIFIER_FIXUP_3676.z = _RESERVED_IDENTIFIER_FIXUP_2480.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2490 = _RESERVED_IDENTIFIER_FIXUP_3676.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3680;
            _RESERVED_IDENTIFIER_FIXUP_3680.x = _RESERVED_IDENTIFIER_FIXUP_2490.x;
            _RESERVED_IDENTIFIER_FIXUP_3680.y = _RESERVED_IDENTIFIER_FIXUP_2490.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2500 = _RESERVED_IDENTIFIER_FIXUP_3676.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3684;
            _RESERVED_IDENTIFIER_FIXUP_3684.x = _RESERVED_IDENTIFIER_FIXUP_2500.x;
            _RESERVED_IDENTIFIER_FIXUP_3684.y = _RESERVED_IDENTIFIER_FIXUP_2500.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2510 = _RESERVED_IDENTIFIER_FIXUP_3676.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3688;
            _RESERVED_IDENTIFIER_FIXUP_3688.x = _RESERVED_IDENTIFIER_FIXUP_2510.x;
            _RESERVED_IDENTIFIER_FIXUP_3688.y = _RESERVED_IDENTIFIER_FIXUP_2510.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2520 = _RESERVED_IDENTIFIER_FIXUP_3676.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3692;
            _RESERVED_IDENTIFIER_FIXUP_3692.x = _RESERVED_IDENTIFIER_FIXUP_2520.x;
            _RESERVED_IDENTIFIER_FIXUP_3692.y = _RESERVED_IDENTIFIER_FIXUP_2520.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2528 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2528.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2528.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2534 = hdLod6(param_76, param_77);
            _RESERVED_IDENTIFIER_FIXUP_3680.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3684.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3688.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3692.w = 0.0;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3680.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2534.y = hdLod6(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3684.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2534.z = hdLod6(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3688.xy;
            float param_83 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2534.w = hdLod6(param_82, param_83).x;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3692.xy;
            float param_85 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2597 = hdLod6(param_84, param_85).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3676.y = _RESERVED_IDENTIFIER_FIXUP_2597;
            float _RESERVED_IDENTIFIER_FIXUP_2602 = float(_RESERVED_IDENTIFIER_FIXUP_2597 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3676.y = _RESERVED_IDENTIFIER_FIXUP_2602;
            float _RESERVED_IDENTIFIER_FIXUP_2605 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2534 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3676.z = _RESERVED_IDENTIFIER_FIXUP_2605;
            float _RESERVED_IDENTIFIER_FIXUP_2611 = _RESERVED_IDENTIFIER_FIXUP_2602 + _RESERVED_IDENTIFIER_FIXUP_2605;
            _RESERVED_IDENTIFIER_FIXUP_3676.y = _RESERVED_IDENTIFIER_FIXUP_2611;
            _RESERVED_IDENTIFIER_FIXUP_3676.x = _RESERVED_IDENTIFIER_FIXUP_2611 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3921 = _RESERVED_IDENTIFIER_FIXUP_3676;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2624 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3520 = _RESERVED_IDENTIFIER_FIXUP_3503;
            _RESERVED_IDENTIFIER_FIXUP_3520.y = _RESERVED_IDENTIFIER_FIXUP_2624;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3922;
            if (_RESERVED_IDENTIFIER_FIXUP_2624 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2633 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3610 = _RESERVED_IDENTIFIER_FIXUP_3520;
                _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2633.x;
                _RESERVED_IDENTIFIER_FIXUP_3610.z = _RESERVED_IDENTIFIER_FIXUP_2633.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2643 = _RESERVED_IDENTIFIER_FIXUP_3610.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3614;
                _RESERVED_IDENTIFIER_FIXUP_3614.x = _RESERVED_IDENTIFIER_FIXUP_2643.x;
                _RESERVED_IDENTIFIER_FIXUP_3614.y = _RESERVED_IDENTIFIER_FIXUP_2643.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2653 = _RESERVED_IDENTIFIER_FIXUP_3610.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3618;
                _RESERVED_IDENTIFIER_FIXUP_3618.x = _RESERVED_IDENTIFIER_FIXUP_2653.x;
                _RESERVED_IDENTIFIER_FIXUP_3618.y = _RESERVED_IDENTIFIER_FIXUP_2653.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2663 = _RESERVED_IDENTIFIER_FIXUP_3610.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3622;
                _RESERVED_IDENTIFIER_FIXUP_3622.x = _RESERVED_IDENTIFIER_FIXUP_2663.x;
                _RESERVED_IDENTIFIER_FIXUP_3622.y = _RESERVED_IDENTIFIER_FIXUP_2663.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2673 = _RESERVED_IDENTIFIER_FIXUP_3610.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3626;
                _RESERVED_IDENTIFIER_FIXUP_3626.x = _RESERVED_IDENTIFIER_FIXUP_2673.x;
                _RESERVED_IDENTIFIER_FIXUP_3626.y = _RESERVED_IDENTIFIER_FIXUP_2673.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2681 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_2681.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2681.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2687 = hdLod7(param_86, param_87);
                _RESERVED_IDENTIFIER_FIXUP_3614.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3618.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3622.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3626.w = 0.0;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3614.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2687.y = hdLod7(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3618.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2687.z = hdLod7(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3622.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2687.w = hdLod7(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3626.xy;
                float param_95 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2750 = hdLod7(param_94, param_95).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2750;
                float _RESERVED_IDENTIFIER_FIXUP_2755 = float(_RESERVED_IDENTIFIER_FIXUP_2750 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2755;
                float _RESERVED_IDENTIFIER_FIXUP_2758 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2687 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3610.z = _RESERVED_IDENTIFIER_FIXUP_2758;
                float _RESERVED_IDENTIFIER_FIXUP_2764 = _RESERVED_IDENTIFIER_FIXUP_2755 + _RESERVED_IDENTIFIER_FIXUP_2758;
                _RESERVED_IDENTIFIER_FIXUP_3610.y = _RESERVED_IDENTIFIER_FIXUP_2764;
                _RESERVED_IDENTIFIER_FIXUP_3610.x = _RESERVED_IDENTIFIER_FIXUP_2764 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3922 = _RESERVED_IDENTIFIER_FIXUP_3610;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_2150.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2150.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2780 = (_RESERVED_IDENTIFIER_FIXUP_2150.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3529;
                _RESERVED_IDENTIFIER_FIXUP_3529.x = _RESERVED_IDENTIFIER_FIXUP_2780.x;
                _RESERVED_IDENTIFIER_FIXUP_3529.y = _RESERVED_IDENTIFIER_FIXUP_2780.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2790 = _RESERVED_IDENTIFIER_FIXUP_3529.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3533;
                _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2790.x;
                _RESERVED_IDENTIFIER_FIXUP_3533.y = _RESERVED_IDENTIFIER_FIXUP_2790.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2800 = _RESERVED_IDENTIFIER_FIXUP_3529.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3537;
                _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_2800.x;
                _RESERVED_IDENTIFIER_FIXUP_3537.y = _RESERVED_IDENTIFIER_FIXUP_2800.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2810 = _RESERVED_IDENTIFIER_FIXUP_3529.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3541;
                _RESERVED_IDENTIFIER_FIXUP_3541.x = _RESERVED_IDENTIFIER_FIXUP_2810.x;
                _RESERVED_IDENTIFIER_FIXUP_3541.y = _RESERVED_IDENTIFIER_FIXUP_2810.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2820 = _RESERVED_IDENTIFIER_FIXUP_3529.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3545;
                _RESERVED_IDENTIFIER_FIXUP_3545.x = _RESERVED_IDENTIFIER_FIXUP_2820.x;
                _RESERVED_IDENTIFIER_FIXUP_3545.y = _RESERVED_IDENTIFIER_FIXUP_2820.y;
                _RESERVED_IDENTIFIER_FIXUP_3529.w = 0.0;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3529.xy;
                float param_97 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2834 = hdLod8(param_96, param_97);
                _RESERVED_IDENTIFIER_FIXUP_3533.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3537.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3541.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3545.w = 0.0;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3533.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2834.y = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3537.xy;
                float param_101 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2834.z = hdLod8(param_100, param_101).x;
                vec2 param_102 = _RESERVED_IDENTIFIER_FIXUP_3541.xy;
                float param_103 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2834.w = hdLod8(param_102, param_103).x;
                vec2 param_104 = _RESERVED_IDENTIFIER_FIXUP_3545.xy;
                float param_105 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2897 = hdLod8(param_104, param_105).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3585 = _RESERVED_IDENTIFIER_FIXUP_3520;
                _RESERVED_IDENTIFIER_FIXUP_3585.y = _RESERVED_IDENTIFIER_FIXUP_2897;
                float _RESERVED_IDENTIFIER_FIXUP_2902 = float(_RESERVED_IDENTIFIER_FIXUP_2897 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3585.y = _RESERVED_IDENTIFIER_FIXUP_2902;
                float _RESERVED_IDENTIFIER_FIXUP_2905 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2834 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3585.z = _RESERVED_IDENTIFIER_FIXUP_2905;
                float _RESERVED_IDENTIFIER_FIXUP_2911 = _RESERVED_IDENTIFIER_FIXUP_2902 + _RESERVED_IDENTIFIER_FIXUP_2905;
                _RESERVED_IDENTIFIER_FIXUP_3585.y = _RESERVED_IDENTIFIER_FIXUP_2911;
                float _RESERVED_IDENTIFIER_FIXUP_2919 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3585.z = _RESERVED_IDENTIFIER_FIXUP_2919;
                float _RESERVED_IDENTIFIER_FIXUP_2925 = clamp((_RESERVED_IDENTIFIER_FIXUP_2919 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3585.z = _RESERVED_IDENTIFIER_FIXUP_2925;
                float _RESERVED_IDENTIFIER_FIXUP_2930 = (_RESERVED_IDENTIFIER_FIXUP_2911 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3585.y = _RESERVED_IDENTIFIER_FIXUP_2930;
                _RESERVED_IDENTIFIER_FIXUP_3585.x = (_RESERVED_IDENTIFIER_FIXUP_2925 * _RESERVED_IDENTIFIER_FIXUP_2930) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3922 = _RESERVED_IDENTIFIER_FIXUP_3585;
            }
            _RESERVED_IDENTIFIER_FIXUP_3921 = _RESERVED_IDENTIFIER_FIXUP_3922;
        }
        _RESERVED_IDENTIFIER_FIXUP_3920 = _RESERVED_IDENTIFIER_FIXUP_3921;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2945 = (_RESERVED_IDENTIFIER_FIXUP_3920.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3860 = _RESERVED_IDENTIFIER_FIXUP_3920;
    _RESERVED_IDENTIFIER_FIXUP_3860.y = _RESERVED_IDENTIFIER_FIXUP_2945;
    _RESERVED_IDENTIFIER_FIXUP_3860.y = _RESERVED_IDENTIFIER_FIXUP_2945;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2958 = _RESERVED_IDENTIFIER_FIXUP_2190.xyz * _RESERVED_IDENTIFIER_FIXUP_3860.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3866 = _RESERVED_IDENTIFIER_FIXUP_2190;
    _RESERVED_IDENTIFIER_FIXUP_3866.x = _RESERVED_IDENTIFIER_FIXUP_2958.x;
    _RESERVED_IDENTIFIER_FIXUP_3866.y = _RESERVED_IDENTIFIER_FIXUP_2958.y;
    _RESERVED_IDENTIFIER_FIXUP_3866.z = _RESERVED_IDENTIFIER_FIXUP_2958.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2969 = _RESERVED_IDENTIFIER_FIXUP_3866.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3872 = _RESERVED_IDENTIFIER_FIXUP_3866;
    _RESERVED_IDENTIFIER_FIXUP_3872.x = _RESERVED_IDENTIFIER_FIXUP_2969.x;
    _RESERVED_IDENTIFIER_FIXUP_3872.y = _RESERVED_IDENTIFIER_FIXUP_2969.y;
    _RESERVED_IDENTIFIER_FIXUP_3872.z = _RESERVED_IDENTIFIER_FIXUP_2969.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2980 = _RESERVED_IDENTIFIER_FIXUP_3872.xyz + _RESERVED_IDENTIFIER_FIXUP_3872.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3878 = _RESERVED_IDENTIFIER_FIXUP_3872;
    _RESERVED_IDENTIFIER_FIXUP_3878.x = _RESERVED_IDENTIFIER_FIXUP_2980.x;
    _RESERVED_IDENTIFIER_FIXUP_3878.y = _RESERVED_IDENTIFIER_FIXUP_2980.y;
    _RESERVED_IDENTIFIER_FIXUP_3878.z = _RESERVED_IDENTIFIER_FIXUP_2980.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2991 = _RESERVED_IDENTIFIER_FIXUP_3878.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3860.y = _RESERVED_IDENTIFIER_FIXUP_2991.x;
    _RESERVED_IDENTIFIER_FIXUP_3860.z = _RESERVED_IDENTIFIER_FIXUP_2991.y;
    _RESERVED_IDENTIFIER_FIXUP_3860.w = _RESERVED_IDENTIFIER_FIXUP_2991.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3005 = (_RESERVED_IDENTIFIER_FIXUP_3860.yzw * _RESERVED_IDENTIFIER_FIXUP_3860.xxx) + _RESERVED_IDENTIFIER_FIXUP_3878.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3890 = _RESERVED_IDENTIFIER_FIXUP_3878;
    _RESERVED_IDENTIFIER_FIXUP_3890.x = _RESERVED_IDENTIFIER_FIXUP_3005.x;
    _RESERVED_IDENTIFIER_FIXUP_3890.y = _RESERVED_IDENTIFIER_FIXUP_3005.y;
    _RESERVED_IDENTIFIER_FIXUP_3890.z = _RESERVED_IDENTIFIER_FIXUP_3005.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_3018 = _RESERVED_IDENTIFIER_FIXUP_3890.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3896 = _RESERVED_IDENTIFIER_FIXUP_3890;
    _RESERVED_IDENTIFIER_FIXUP_3896.x = _RESERVED_IDENTIFIER_FIXUP_3018.x;
    _RESERVED_IDENTIFIER_FIXUP_3896.y = _RESERVED_IDENTIFIER_FIXUP_3018.y;
    _RESERVED_IDENTIFIER_FIXUP_3896.z = _RESERVED_IDENTIFIER_FIXUP_3018.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3896.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1062 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1071;
    if (_RESERVED_IDENTIFIER_FIXUP_1062)
    {
        _RESERVED_IDENTIFIER_FIXUP_1071 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1071 = _RESERVED_IDENTIFIER_FIXUP_1062;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1071)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1108 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3482.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1135 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3077;
    if (_RESERVED_IDENTIFIER_FIXUP_1108 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_3077 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1108), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1135);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3077 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1135);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_3077;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2945);
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
    r4.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r4.w = (-r4.w) + 1.0;
    r1 *= r4.xxxx;
    r0 = (r0 * r4.wwww) + r1;
    r0 = (r2 * r4.yyyy) + r0;
    r0 = (r3 * r4.zzzz) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB158 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB158.x;
        r1.y = hdB158.y;
        vec2 hdB179 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB179.x;
        r2.y = hdB179.y;
        vec2 hdB190 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB190.x;
        r3.y = hdB190.y;
        vec2 hdB201 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB201.x;
        r4.y = hdB201.y;
        vec2 hdB212 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB212.x;
        r5.y = hdB212.y;
        vec2 hdB223 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB223.x;
        r6.y = hdB223.y;
        vec2 hdB234 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB234.x;
        r7.y = hdB234.y;
        vec2 hdB245 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB245.x;
        r8.y = hdB245.y;
        vec4 hdB250 = r1;
        vec2 hdB256 = hdB250.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB256.x;
        r1.y = hdB256.y;
        r9 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r9.xy;
        float param_6 = r9.w;
        r9 = hdLod5(param_5, param_6);
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
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_15 = r6.xy;
        float param_16 = r6.w;
        r6 = hdLod5(param_15, param_16);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_17 = r7.xy;
        float param_18 = r7.w;
        r7 = hdLod5(param_17, param_18);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_19 = r8.xy;
        float param_20 = r8.w;
        r8 = hdLod5(param_19, param_20);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_21 = r1.xy;
        float param_22 = r1.w;
        r1 = hdLod5(param_21, param_22);
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
            vec2 hdB443 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB443.x;
            r1.z = hdB443.y;
            vec2 hdB453 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB453.x;
            r2.y = hdB453.y;
            vec2 hdB463 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB463.x;
            r3.y = hdB463.y;
            vec2 hdB473 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB473.x;
            r4.y = hdB473.y;
            vec2 hdB483 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB483.x;
            r5.y = hdB483.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r6.xy;
            float param_24 = r6.w;
            r6 = hdLod6(param_23, param_24);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod6(param_25, param_26);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod6(param_27, param_28);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_29 = r4.xy;
            float param_30 = r4.w;
            r4 = hdLod6(param_29, param_30);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_31 = r5.xy;
            float param_32 = r5.w;
            r5 = hdLod6(param_31, param_32);
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
                vec2 hdB599 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB599.x;
                r1.z = hdB599.y;
                vec2 hdB609 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB609.x;
                r2.y = hdB609.y;
                vec2 hdB619 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB619.x;
                r3.y = hdB619.y;
                vec2 hdB629 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB629.x;
                r4.y = hdB629.y;
                vec2 hdB639 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB639.x;
                r5.y = hdB639.y;
                r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_33 = r6.xy;
                float param_34 = r6.w;
                r6 = hdLod7(param_33, param_34);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_35 = r2.xy;
                float param_36 = r2.w;
                r2 = hdLod7(param_35, param_36);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_37 = r3.xy;
                float param_38 = r3.w;
                r3 = hdLod7(param_37, param_38);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_39 = r4.xy;
                float param_40 = r4.w;
                r4 = hdLod7(param_39, param_40);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_41 = r5.xy;
                float param_42 = r5.w;
                r5 = hdLod7(param_41, param_42);
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
                vec2 param_43 = r3.xy;
                float param_44 = r3.w;
                r3 = hdLod8(param_43, param_44);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_45 = r4.xy;
                float param_46 = r4.w;
                r4 = hdLod8(param_45, param_46);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_47 = r5.xy;
                float param_48 = r5.w;
                r5 = hdLod8(param_47, param_48);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_49 = r6.xy;
                float param_50 = r6.w;
                r6 = hdLod8(param_49, param_50);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_51 = r7.xy;
                float param_52 = r7.w;
                r7 = hdLod8(param_51, param_52);
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
    vec4 hdB917 = r0;
    vec3 hdB921 = hdB917.xyz * r1.yyy;
    r0.x = hdB921.x;
    r0.y = hdB921.y;
    r0.z = hdB921.z;
    vec4 hdB928 = r0;
    vec3 hdB932 = hdB928.xyz * v0.xyz;
    r0.x = hdB932.x;
    r0.y = hdB932.y;
    r0.z = hdB932.z;
    vec4 hdB939 = r0;
    vec4 hdB941 = r0;
    vec3 hdB943 = hdB939.xyz + hdB941.xyz;
    r0.x = hdB943.x;
    r0.y = hdB943.y;
    r0.z = hdB943.z;
    vec3 hdB954 = r0.www * v1.xyz;
    r1.y = hdB954.x;
    r1.z = hdB954.y;
    r1.w = hdB954.z;
    vec4 hdB966 = r0;
    vec3 hdB968 = (r1.yzw * r1.xxx) + hdB966.xyz;
    r0.x = hdB968.x;
    r0.y = hdB968.y;
    r0.z = hdB968.z;
    vec4 hdB975 = r0;
    vec3 hdB982 = hdB975.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB982.x;
    r0.y = hdB982.y;
    r0.z = hdB982.z;
    vec3 hdB997 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB997.x;
    oC0.y = hdB997.y;
    oC0.z = hdB997.z;
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
    bool _3448 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3458;
    if (_3448)
    {
        _3458 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 511u) != 0u;
    }
    else
    {
        _3458 = _3448;
    }
    if (_3458)
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
        bool _3483 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3498;
        if (!_3483)
        {
            _3498 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 511u) != 0u;
        }
        else
        {
            _3498 = _3483;
        }
        if (_3498)
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
