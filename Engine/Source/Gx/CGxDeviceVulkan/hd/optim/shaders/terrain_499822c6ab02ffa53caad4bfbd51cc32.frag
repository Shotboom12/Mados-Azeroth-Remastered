#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

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
float _RESERVED_IDENTIFIER_FIXUP_3791;
vec4 _RESERVED_IDENTIFIER_FIXUP_3792;


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
    bool _61 = hdOverride >= 0;
    bool _81;
    if (_61)
    {
        _81 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _81 = _61;
    }
    vec4 _82;
    if (_81)
    {
        _82 = vec4(float(hdOverride));
    }
    else
    {
        _82 = value;
    }
    return _82;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _99 = hdOverride >= 0;
    bool _108;
    if (_99)
    {
        _108 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _108 = _99;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _126 = hdOverride >= 0;
    bool _136;
    if (_126)
    {
        _136 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1164 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1168 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1172 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_1184 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2978 = _RESERVED_IDENTIFIER_FIXUP_1164;
    _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1184;
    float _RESERVED_IDENTIFIER_FIXUP_1190 = clamp((_RESERVED_IDENTIFIER_FIXUP_1184 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1190;
    float _RESERVED_IDENTIFIER_FIXUP_1196 = ((-_RESERVED_IDENTIFIER_FIXUP_1190) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2978.x = _RESERVED_IDENTIFIER_FIXUP_1196;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3796;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3793;
    if (_RESERVED_IDENTIFIER_FIXUP_1196 != (-_RESERVED_IDENTIFIER_FIXUP_1196))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1208 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3217;
        _RESERVED_IDENTIFIER_FIXUP_3217.x = _RESERVED_IDENTIFIER_FIXUP_1208.x;
        _RESERVED_IDENTIFIER_FIXUP_3217.y = _RESERVED_IDENTIFIER_FIXUP_1208.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1218 = _RESERVED_IDENTIFIER_FIXUP_3217.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3221;
        _RESERVED_IDENTIFIER_FIXUP_3221.x = _RESERVED_IDENTIFIER_FIXUP_1218.x;
        _RESERVED_IDENTIFIER_FIXUP_3221.y = _RESERVED_IDENTIFIER_FIXUP_1218.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_3217.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3225;
        _RESERVED_IDENTIFIER_FIXUP_3225.x = _RESERVED_IDENTIFIER_FIXUP_1228.x;
        _RESERVED_IDENTIFIER_FIXUP_3225.y = _RESERVED_IDENTIFIER_FIXUP_1228.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1238 = _RESERVED_IDENTIFIER_FIXUP_3217.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3229;
        _RESERVED_IDENTIFIER_FIXUP_3229.x = _RESERVED_IDENTIFIER_FIXUP_1238.x;
        _RESERVED_IDENTIFIER_FIXUP_3229.y = _RESERVED_IDENTIFIER_FIXUP_1238.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1248 = _RESERVED_IDENTIFIER_FIXUP_3217.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3233;
        _RESERVED_IDENTIFIER_FIXUP_3233.x = _RESERVED_IDENTIFIER_FIXUP_1248.x;
        _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_1248.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_3217.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3237;
        _RESERVED_IDENTIFIER_FIXUP_3237.x = _RESERVED_IDENTIFIER_FIXUP_1258.x;
        _RESERVED_IDENTIFIER_FIXUP_3237.y = _RESERVED_IDENTIFIER_FIXUP_1258.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1268 = _RESERVED_IDENTIFIER_FIXUP_3217.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3241;
        _RESERVED_IDENTIFIER_FIXUP_3241.x = _RESERVED_IDENTIFIER_FIXUP_1268.x;
        _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_1268.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1278 = _RESERVED_IDENTIFIER_FIXUP_3217.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3245;
        _RESERVED_IDENTIFIER_FIXUP_3245.x = _RESERVED_IDENTIFIER_FIXUP_1278.x;
        _RESERVED_IDENTIFIER_FIXUP_3245.y = _RESERVED_IDENTIFIER_FIXUP_1278.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_3217.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3249;
        _RESERVED_IDENTIFIER_FIXUP_3249.x = _RESERVED_IDENTIFIER_FIXUP_1288.x;
        _RESERVED_IDENTIFIER_FIXUP_3249.y = _RESERVED_IDENTIFIER_FIXUP_1288.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1296 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1296.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1296.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1302 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3221.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3225.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3229.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3233.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3233.xy;
        float param_6 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1342 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_3237.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3241.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3245.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3249.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3249.xy;
        float param_8 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1382 = hdLod5(param_7, param_8);
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3221.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1302.y = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3225.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1302.z = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3229.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1302.w = hdLod5(param_13, param_14).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1399 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1302 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3237.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1342.y = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3241.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1342.z = hdLod5(param_17, param_18).x;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3245.xy;
        float param_20 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1342.w = hdLod5(param_19, param_20).x;
        float _RESERVED_IDENTIFIER_FIXUP_1422 = _RESERVED_IDENTIFIER_FIXUP_1382.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3314 = _RESERVED_IDENTIFIER_FIXUP_1382;
        _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_1422;
        float _RESERVED_IDENTIFIER_FIXUP_1427 = float(_RESERVED_IDENTIFIER_FIXUP_1422 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_1427;
        float _RESERVED_IDENTIFIER_FIXUP_1430 = dot(_RESERVED_IDENTIFIER_FIXUP_1399, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_1430;
        float _RESERVED_IDENTIFIER_FIXUP_1433 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1342 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3314.z = _RESERVED_IDENTIFIER_FIXUP_1433;
        float _RESERVED_IDENTIFIER_FIXUP_1439 = _RESERVED_IDENTIFIER_FIXUP_1430 + _RESERVED_IDENTIFIER_FIXUP_1433;
        _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_1439;
        float _RESERVED_IDENTIFIER_FIXUP_1445 = _RESERVED_IDENTIFIER_FIXUP_1427 + _RESERVED_IDENTIFIER_FIXUP_1439;
        _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_1445;
        _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_1445 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3796 = _RESERVED_IDENTIFIER_FIXUP_1399;
        _RESERVED_IDENTIFIER_FIXUP_3793 = _RESERVED_IDENTIFIER_FIXUP_3314;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1458 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2978.y = _RESERVED_IDENTIFIER_FIXUP_1458;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3797;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3794;
        if (_RESERVED_IDENTIFIER_FIXUP_1458 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1467 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3151 = _RESERVED_IDENTIFIER_FIXUP_2978;
            _RESERVED_IDENTIFIER_FIXUP_3151.y = _RESERVED_IDENTIFIER_FIXUP_1467.x;
            _RESERVED_IDENTIFIER_FIXUP_3151.z = _RESERVED_IDENTIFIER_FIXUP_1467.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1477 = _RESERVED_IDENTIFIER_FIXUP_3151.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3155;
            _RESERVED_IDENTIFIER_FIXUP_3155.x = _RESERVED_IDENTIFIER_FIXUP_1477.x;
            _RESERVED_IDENTIFIER_FIXUP_3155.y = _RESERVED_IDENTIFIER_FIXUP_1477.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1487 = _RESERVED_IDENTIFIER_FIXUP_3151.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3159;
            _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1487.x;
            _RESERVED_IDENTIFIER_FIXUP_3159.y = _RESERVED_IDENTIFIER_FIXUP_1487.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1497 = _RESERVED_IDENTIFIER_FIXUP_3151.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3163;
            _RESERVED_IDENTIFIER_FIXUP_3163.x = _RESERVED_IDENTIFIER_FIXUP_1497.x;
            _RESERVED_IDENTIFIER_FIXUP_3163.y = _RESERVED_IDENTIFIER_FIXUP_1497.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_3151.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3167;
            _RESERVED_IDENTIFIER_FIXUP_3167.x = _RESERVED_IDENTIFIER_FIXUP_1507.x;
            _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1507.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1515 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1515.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1515.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1521 = hdLod6(param_21, param_22);
            _RESERVED_IDENTIFIER_FIXUP_3155.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3159.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3163.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3167.w = 0.0;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3155.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1521.y = hdLod6(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3159.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1521.z = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3163.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1521.w = hdLod6(param_27, param_28).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1578 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1521 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3167.xy;
            float param_30 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1584 = hdLod6(param_29, param_30).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3151.y = _RESERVED_IDENTIFIER_FIXUP_1584;
            float _RESERVED_IDENTIFIER_FIXUP_1589 = float(_RESERVED_IDENTIFIER_FIXUP_1584 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3151.y = _RESERVED_IDENTIFIER_FIXUP_1589;
            float _RESERVED_IDENTIFIER_FIXUP_1592 = dot(_RESERVED_IDENTIFIER_FIXUP_1578, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3151.z = _RESERVED_IDENTIFIER_FIXUP_1592;
            float _RESERVED_IDENTIFIER_FIXUP_1598 = _RESERVED_IDENTIFIER_FIXUP_1589 + _RESERVED_IDENTIFIER_FIXUP_1592;
            _RESERVED_IDENTIFIER_FIXUP_3151.y = _RESERVED_IDENTIFIER_FIXUP_1598;
            _RESERVED_IDENTIFIER_FIXUP_3151.x = _RESERVED_IDENTIFIER_FIXUP_1598 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3797 = _RESERVED_IDENTIFIER_FIXUP_1578;
            _RESERVED_IDENTIFIER_FIXUP_3794 = _RESERVED_IDENTIFIER_FIXUP_3151;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1611 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2995 = _RESERVED_IDENTIFIER_FIXUP_2978;
            _RESERVED_IDENTIFIER_FIXUP_2995.y = _RESERVED_IDENTIFIER_FIXUP_1611;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3798;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3795;
            if (_RESERVED_IDENTIFIER_FIXUP_1611 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1620 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3085 = _RESERVED_IDENTIFIER_FIXUP_2995;
                _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_1620.x;
                _RESERVED_IDENTIFIER_FIXUP_3085.z = _RESERVED_IDENTIFIER_FIXUP_1620.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1630 = _RESERVED_IDENTIFIER_FIXUP_3085.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3089;
                _RESERVED_IDENTIFIER_FIXUP_3089.x = _RESERVED_IDENTIFIER_FIXUP_1630.x;
                _RESERVED_IDENTIFIER_FIXUP_3089.y = _RESERVED_IDENTIFIER_FIXUP_1630.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1640 = _RESERVED_IDENTIFIER_FIXUP_3085.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3093;
                _RESERVED_IDENTIFIER_FIXUP_3093.x = _RESERVED_IDENTIFIER_FIXUP_1640.x;
                _RESERVED_IDENTIFIER_FIXUP_3093.y = _RESERVED_IDENTIFIER_FIXUP_1640.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1650 = _RESERVED_IDENTIFIER_FIXUP_3085.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3097;
                _RESERVED_IDENTIFIER_FIXUP_3097.x = _RESERVED_IDENTIFIER_FIXUP_1650.x;
                _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1650.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1660 = _RESERVED_IDENTIFIER_FIXUP_3085.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3101;
                _RESERVED_IDENTIFIER_FIXUP_3101.x = _RESERVED_IDENTIFIER_FIXUP_1660.x;
                _RESERVED_IDENTIFIER_FIXUP_3101.y = _RESERVED_IDENTIFIER_FIXUP_1660.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1668 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_1668.xy;
                float param_32 = _RESERVED_IDENTIFIER_FIXUP_1668.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1674 = hdLod7(param_31, param_32);
                _RESERVED_IDENTIFIER_FIXUP_3089.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3093.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3097.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3101.w = 0.0;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3089.xy;
                float param_34 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1674.y = hdLod7(param_33, param_34).x;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3093.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1674.z = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3097.xy;
                float param_38 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1674.w = hdLod7(param_37, param_38).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1731 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1674 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3101.xy;
                float param_40 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1737 = hdLod7(param_39, param_40).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_1737;
                float _RESERVED_IDENTIFIER_FIXUP_1742 = float(_RESERVED_IDENTIFIER_FIXUP_1737 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_1742;
                float _RESERVED_IDENTIFIER_FIXUP_1745 = dot(_RESERVED_IDENTIFIER_FIXUP_1731, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3085.z = _RESERVED_IDENTIFIER_FIXUP_1745;
                float _RESERVED_IDENTIFIER_FIXUP_1751 = _RESERVED_IDENTIFIER_FIXUP_1742 + _RESERVED_IDENTIFIER_FIXUP_1745;
                _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_1751;
                _RESERVED_IDENTIFIER_FIXUP_3085.x = _RESERVED_IDENTIFIER_FIXUP_1751 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3798 = _RESERVED_IDENTIFIER_FIXUP_1731;
                _RESERVED_IDENTIFIER_FIXUP_3795 = _RESERVED_IDENTIFIER_FIXUP_3085;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2999 = _RESERVED_IDENTIFIER_FIXUP_1168;
                _RESERVED_IDENTIFIER_FIXUP_2999.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2999.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1767 = (_RESERVED_IDENTIFIER_FIXUP_2999.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3004;
                _RESERVED_IDENTIFIER_FIXUP_3004.x = _RESERVED_IDENTIFIER_FIXUP_1767.x;
                _RESERVED_IDENTIFIER_FIXUP_3004.y = _RESERVED_IDENTIFIER_FIXUP_1767.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1777 = _RESERVED_IDENTIFIER_FIXUP_3004.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3008;
                _RESERVED_IDENTIFIER_FIXUP_3008.x = _RESERVED_IDENTIFIER_FIXUP_1777.x;
                _RESERVED_IDENTIFIER_FIXUP_3008.y = _RESERVED_IDENTIFIER_FIXUP_1777.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1787 = _RESERVED_IDENTIFIER_FIXUP_3004.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3012;
                _RESERVED_IDENTIFIER_FIXUP_3012.x = _RESERVED_IDENTIFIER_FIXUP_1787.x;
                _RESERVED_IDENTIFIER_FIXUP_3012.y = _RESERVED_IDENTIFIER_FIXUP_1787.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1797 = _RESERVED_IDENTIFIER_FIXUP_3004.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3016;
                _RESERVED_IDENTIFIER_FIXUP_3016.x = _RESERVED_IDENTIFIER_FIXUP_1797.x;
                _RESERVED_IDENTIFIER_FIXUP_3016.y = _RESERVED_IDENTIFIER_FIXUP_1797.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1807 = _RESERVED_IDENTIFIER_FIXUP_3004.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3020;
                _RESERVED_IDENTIFIER_FIXUP_3020.x = _RESERVED_IDENTIFIER_FIXUP_1807.x;
                _RESERVED_IDENTIFIER_FIXUP_3020.y = _RESERVED_IDENTIFIER_FIXUP_1807.y;
                _RESERVED_IDENTIFIER_FIXUP_3004.w = 0.0;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3004.xy;
                float param_42 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1821 = hdLod8(param_41, param_42);
                _RESERVED_IDENTIFIER_FIXUP_3008.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3012.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3016.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3020.w = 0.0;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3008.xy;
                float param_44 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1821.y = hdLod8(param_43, param_44).x;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3012.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1821.z = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3016.xy;
                float param_48 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1821.w = hdLod8(param_47, param_48).x;
                vec2 param_49 = _RESERVED_IDENTIFIER_FIXUP_3020.xy;
                float param_50 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1884 = hdLod8(param_49, param_50).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3060 = _RESERVED_IDENTIFIER_FIXUP_2995;
                _RESERVED_IDENTIFIER_FIXUP_3060.y = _RESERVED_IDENTIFIER_FIXUP_1884;
                float _RESERVED_IDENTIFIER_FIXUP_1889 = float(_RESERVED_IDENTIFIER_FIXUP_1884 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3060.y = _RESERVED_IDENTIFIER_FIXUP_1889;
                float _RESERVED_IDENTIFIER_FIXUP_1892 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1821 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3060.z = _RESERVED_IDENTIFIER_FIXUP_1892;
                float _RESERVED_IDENTIFIER_FIXUP_1898 = _RESERVED_IDENTIFIER_FIXUP_1889 + _RESERVED_IDENTIFIER_FIXUP_1892;
                _RESERVED_IDENTIFIER_FIXUP_3060.y = _RESERVED_IDENTIFIER_FIXUP_1898;
                float _RESERVED_IDENTIFIER_FIXUP_1906 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3060.z = _RESERVED_IDENTIFIER_FIXUP_1906;
                float _RESERVED_IDENTIFIER_FIXUP_1912 = clamp((_RESERVED_IDENTIFIER_FIXUP_1906 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3060.z = _RESERVED_IDENTIFIER_FIXUP_1912;
                float _RESERVED_IDENTIFIER_FIXUP_1917 = (_RESERVED_IDENTIFIER_FIXUP_1898 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3060.y = _RESERVED_IDENTIFIER_FIXUP_1917;
                _RESERVED_IDENTIFIER_FIXUP_3060.x = (_RESERVED_IDENTIFIER_FIXUP_1912 * _RESERVED_IDENTIFIER_FIXUP_1917) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3798 = _RESERVED_IDENTIFIER_FIXUP_2999;
                _RESERVED_IDENTIFIER_FIXUP_3795 = _RESERVED_IDENTIFIER_FIXUP_3060;
            }
            _RESERVED_IDENTIFIER_FIXUP_3797 = _RESERVED_IDENTIFIER_FIXUP_3798;
            _RESERVED_IDENTIFIER_FIXUP_3794 = _RESERVED_IDENTIFIER_FIXUP_3795;
        }
        _RESERVED_IDENTIFIER_FIXUP_3796 = _RESERVED_IDENTIFIER_FIXUP_3797;
        _RESERVED_IDENTIFIER_FIXUP_3793 = _RESERVED_IDENTIFIER_FIXUP_3794;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3337 = _RESERVED_IDENTIFIER_FIXUP_3793;
    _RESERVED_IDENTIFIER_FIXUP_3337.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1945 = mix(_RESERVED_IDENTIFIER_FIXUP_1164, _RESERVED_IDENTIFIER_FIXUP_1168, _RESERVED_IDENTIFIER_FIXUP_1172.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_3337.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3339 = _RESERVED_IDENTIFIER_FIXUP_3337;
    _RESERVED_IDENTIFIER_FIXUP_3339.y = _RESERVED_IDENTIFIER_FIXUP_1945.x;
    _RESERVED_IDENTIFIER_FIXUP_3339.z = _RESERVED_IDENTIFIER_FIXUP_1945.y;
    _RESERVED_IDENTIFIER_FIXUP_3339.w = _RESERVED_IDENTIFIER_FIXUP_1945.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1956 = _RESERVED_IDENTIFIER_FIXUP_3339.yzw * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3791).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3345 = _RESERVED_IDENTIFIER_FIXUP_3339;
    _RESERVED_IDENTIFIER_FIXUP_3345.y = _RESERVED_IDENTIFIER_FIXUP_1956.x;
    _RESERVED_IDENTIFIER_FIXUP_3345.z = _RESERVED_IDENTIFIER_FIXUP_1956.y;
    _RESERVED_IDENTIFIER_FIXUP_3345.w = _RESERVED_IDENTIFIER_FIXUP_1956.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1967 = _RESERVED_IDENTIFIER_FIXUP_3345.yzw + _RESERVED_IDENTIFIER_FIXUP_3345.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1969 = _RESERVED_IDENTIFIER_FIXUP_1967.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3351 = _RESERVED_IDENTIFIER_FIXUP_3345;
    _RESERVED_IDENTIFIER_FIXUP_3351.y = _RESERVED_IDENTIFIER_FIXUP_1969;
    _RESERVED_IDENTIFIER_FIXUP_3351.z = _RESERVED_IDENTIFIER_FIXUP_1967.y;
    _RESERVED_IDENTIFIER_FIXUP_3351.w = _RESERVED_IDENTIFIER_FIXUP_1967.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3357 = _RESERVED_IDENTIFIER_FIXUP_3796;
    _RESERVED_IDENTIFIER_FIXUP_3357.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3357.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3357.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1992 = (_RESERVED_IDENTIFIER_FIXUP_3357.xyz * _RESERVED_IDENTIFIER_FIXUP_3351.xxx) + _RESERVED_IDENTIFIER_FIXUP_3351.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3811 = vec4(_RESERVED_IDENTIFIER_FIXUP_1992.x, _RESERVED_IDENTIFIER_FIXUP_1969, _RESERVED_IDENTIFIER_FIXUP_1967.yz);
    _RESERVED_IDENTIFIER_FIXUP_3811.y = _RESERVED_IDENTIFIER_FIXUP_1992.y;
    _RESERVED_IDENTIFIER_FIXUP_3811.z = _RESERVED_IDENTIFIER_FIXUP_1992.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2005 = _RESERVED_IDENTIFIER_FIXUP_3811.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3369 = _RESERVED_IDENTIFIER_FIXUP_3811;
    _RESERVED_IDENTIFIER_FIXUP_3369.x = _RESERVED_IDENTIFIER_FIXUP_2005.x;
    _RESERVED_IDENTIFIER_FIXUP_3369.y = _RESERVED_IDENTIFIER_FIXUP_2005.y;
    _RESERVED_IDENTIFIER_FIXUP_3369.z = _RESERVED_IDENTIFIER_FIXUP_2005.z;
    vec2 param_51 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2062 = hdTex0(param_51);
    vec2 param_52 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2066 = hdTex1(param_52);
    vec2 param_53 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2070 = hdTex2(param_53);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2075 = mix(_RESERVED_IDENTIFIER_FIXUP_2062, _RESERVED_IDENTIFIER_FIXUP_2066, _RESERVED_IDENTIFIER_FIXUP_2070.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3385 = _RESERVED_IDENTIFIER_FIXUP_2062;
    _RESERVED_IDENTIFIER_FIXUP_3385.x = _RESERVED_IDENTIFIER_FIXUP_1184;
    float _RESERVED_IDENTIFIER_FIXUP_2088 = clamp((_RESERVED_IDENTIFIER_FIXUP_1184 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3385.x = _RESERVED_IDENTIFIER_FIXUP_2088;
    float _RESERVED_IDENTIFIER_FIXUP_2094 = ((-_RESERVED_IDENTIFIER_FIXUP_2088) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3385.x = _RESERVED_IDENTIFIER_FIXUP_2094;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3805;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3802;
    if (_RESERVED_IDENTIFIER_FIXUP_2094 != (-_RESERVED_IDENTIFIER_FIXUP_2094))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2106 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3624;
        _RESERVED_IDENTIFIER_FIXUP_3624.x = _RESERVED_IDENTIFIER_FIXUP_2106.x;
        _RESERVED_IDENTIFIER_FIXUP_3624.y = _RESERVED_IDENTIFIER_FIXUP_2106.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2116 = _RESERVED_IDENTIFIER_FIXUP_3624.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3628;
        _RESERVED_IDENTIFIER_FIXUP_3628.x = _RESERVED_IDENTIFIER_FIXUP_2116.x;
        _RESERVED_IDENTIFIER_FIXUP_3628.y = _RESERVED_IDENTIFIER_FIXUP_2116.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2126 = _RESERVED_IDENTIFIER_FIXUP_3624.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3632;
        _RESERVED_IDENTIFIER_FIXUP_3632.x = _RESERVED_IDENTIFIER_FIXUP_2126.x;
        _RESERVED_IDENTIFIER_FIXUP_3632.y = _RESERVED_IDENTIFIER_FIXUP_2126.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2136 = _RESERVED_IDENTIFIER_FIXUP_3624.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3636;
        _RESERVED_IDENTIFIER_FIXUP_3636.x = _RESERVED_IDENTIFIER_FIXUP_2136.x;
        _RESERVED_IDENTIFIER_FIXUP_3636.y = _RESERVED_IDENTIFIER_FIXUP_2136.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2146 = _RESERVED_IDENTIFIER_FIXUP_3624.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3640;
        _RESERVED_IDENTIFIER_FIXUP_3640.x = _RESERVED_IDENTIFIER_FIXUP_2146.x;
        _RESERVED_IDENTIFIER_FIXUP_3640.y = _RESERVED_IDENTIFIER_FIXUP_2146.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2156 = _RESERVED_IDENTIFIER_FIXUP_3624.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3644;
        _RESERVED_IDENTIFIER_FIXUP_3644.x = _RESERVED_IDENTIFIER_FIXUP_2156.x;
        _RESERVED_IDENTIFIER_FIXUP_3644.y = _RESERVED_IDENTIFIER_FIXUP_2156.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2166 = _RESERVED_IDENTIFIER_FIXUP_3624.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3648;
        _RESERVED_IDENTIFIER_FIXUP_3648.x = _RESERVED_IDENTIFIER_FIXUP_2166.x;
        _RESERVED_IDENTIFIER_FIXUP_3648.y = _RESERVED_IDENTIFIER_FIXUP_2166.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2176 = _RESERVED_IDENTIFIER_FIXUP_3624.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3652;
        _RESERVED_IDENTIFIER_FIXUP_3652.x = _RESERVED_IDENTIFIER_FIXUP_2176.x;
        _RESERVED_IDENTIFIER_FIXUP_3652.y = _RESERVED_IDENTIFIER_FIXUP_2176.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2186 = _RESERVED_IDENTIFIER_FIXUP_3624.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3656;
        _RESERVED_IDENTIFIER_FIXUP_3656.x = _RESERVED_IDENTIFIER_FIXUP_2186.x;
        _RESERVED_IDENTIFIER_FIXUP_3656.y = _RESERVED_IDENTIFIER_FIXUP_2186.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2194 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2194.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2194.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2200 = hdLod5(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3628.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3632.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3636.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3640.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3640.xy;
        float param_57 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2240 = hdLod5(param_56, param_57);
        _RESERVED_IDENTIFIER_FIXUP_3644.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3648.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3652.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3656.w = 0.0;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3656.xy;
        float param_59 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2280 = hdLod5(param_58, param_59);
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3628.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2200.y = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3632.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2200.z = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3636.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2200.w = hdLod5(param_64, param_65).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2297 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2200 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3644.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2240.y = hdLod5(param_66, param_67).x;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3648.xy;
        float param_69 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2240.z = hdLod5(param_68, param_69).x;
        vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3652.xy;
        float param_71 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2240.w = hdLod5(param_70, param_71).x;
        float _RESERVED_IDENTIFIER_FIXUP_2320 = _RESERVED_IDENTIFIER_FIXUP_2280.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3721 = _RESERVED_IDENTIFIER_FIXUP_2280;
        _RESERVED_IDENTIFIER_FIXUP_3721.x = _RESERVED_IDENTIFIER_FIXUP_2320;
        float _RESERVED_IDENTIFIER_FIXUP_2325 = float(_RESERVED_IDENTIFIER_FIXUP_2320 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3721.x = _RESERVED_IDENTIFIER_FIXUP_2325;
        float _RESERVED_IDENTIFIER_FIXUP_2328 = dot(_RESERVED_IDENTIFIER_FIXUP_2297, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3721.y = _RESERVED_IDENTIFIER_FIXUP_2328;
        float _RESERVED_IDENTIFIER_FIXUP_2331 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2240 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3721.z = _RESERVED_IDENTIFIER_FIXUP_2331;
        float _RESERVED_IDENTIFIER_FIXUP_2337 = _RESERVED_IDENTIFIER_FIXUP_2328 + _RESERVED_IDENTIFIER_FIXUP_2331;
        _RESERVED_IDENTIFIER_FIXUP_3721.y = _RESERVED_IDENTIFIER_FIXUP_2337;
        float _RESERVED_IDENTIFIER_FIXUP_2343 = _RESERVED_IDENTIFIER_FIXUP_2325 + _RESERVED_IDENTIFIER_FIXUP_2337;
        _RESERVED_IDENTIFIER_FIXUP_3721.x = _RESERVED_IDENTIFIER_FIXUP_2343;
        _RESERVED_IDENTIFIER_FIXUP_3721.x = _RESERVED_IDENTIFIER_FIXUP_2343 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3805 = _RESERVED_IDENTIFIER_FIXUP_2297;
        _RESERVED_IDENTIFIER_FIXUP_3802 = _RESERVED_IDENTIFIER_FIXUP_3721;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2356 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3385.y = _RESERVED_IDENTIFIER_FIXUP_2356;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3806;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3803;
        if (_RESERVED_IDENTIFIER_FIXUP_2356 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2365 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3558 = _RESERVED_IDENTIFIER_FIXUP_3385;
            _RESERVED_IDENTIFIER_FIXUP_3558.y = _RESERVED_IDENTIFIER_FIXUP_2365.x;
            _RESERVED_IDENTIFIER_FIXUP_3558.z = _RESERVED_IDENTIFIER_FIXUP_2365.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2375 = _RESERVED_IDENTIFIER_FIXUP_3558.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3562;
            _RESERVED_IDENTIFIER_FIXUP_3562.x = _RESERVED_IDENTIFIER_FIXUP_2375.x;
            _RESERVED_IDENTIFIER_FIXUP_3562.y = _RESERVED_IDENTIFIER_FIXUP_2375.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2385 = _RESERVED_IDENTIFIER_FIXUP_3558.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3566;
            _RESERVED_IDENTIFIER_FIXUP_3566.x = _RESERVED_IDENTIFIER_FIXUP_2385.x;
            _RESERVED_IDENTIFIER_FIXUP_3566.y = _RESERVED_IDENTIFIER_FIXUP_2385.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2395 = _RESERVED_IDENTIFIER_FIXUP_3558.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3570;
            _RESERVED_IDENTIFIER_FIXUP_3570.x = _RESERVED_IDENTIFIER_FIXUP_2395.x;
            _RESERVED_IDENTIFIER_FIXUP_3570.y = _RESERVED_IDENTIFIER_FIXUP_2395.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2405 = _RESERVED_IDENTIFIER_FIXUP_3558.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3574;
            _RESERVED_IDENTIFIER_FIXUP_3574.x = _RESERVED_IDENTIFIER_FIXUP_2405.x;
            _RESERVED_IDENTIFIER_FIXUP_3574.y = _RESERVED_IDENTIFIER_FIXUP_2405.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2413 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_2413.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2413.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2419 = hdLod6(param_72, param_73);
            _RESERVED_IDENTIFIER_FIXUP_3562.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3566.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3570.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3574.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3562.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2419.y = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3566.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2419.z = hdLod6(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3570.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2419.w = hdLod6(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2476 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2419 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3574.xy;
            float param_81 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2482 = hdLod6(param_80, param_81).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3558.y = _RESERVED_IDENTIFIER_FIXUP_2482;
            float _RESERVED_IDENTIFIER_FIXUP_2487 = float(_RESERVED_IDENTIFIER_FIXUP_2482 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3558.y = _RESERVED_IDENTIFIER_FIXUP_2487;
            float _RESERVED_IDENTIFIER_FIXUP_2490 = dot(_RESERVED_IDENTIFIER_FIXUP_2476, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3558.z = _RESERVED_IDENTIFIER_FIXUP_2490;
            float _RESERVED_IDENTIFIER_FIXUP_2496 = _RESERVED_IDENTIFIER_FIXUP_2487 + _RESERVED_IDENTIFIER_FIXUP_2490;
            _RESERVED_IDENTIFIER_FIXUP_3558.y = _RESERVED_IDENTIFIER_FIXUP_2496;
            _RESERVED_IDENTIFIER_FIXUP_3558.x = _RESERVED_IDENTIFIER_FIXUP_2496 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3806 = _RESERVED_IDENTIFIER_FIXUP_2476;
            _RESERVED_IDENTIFIER_FIXUP_3803 = _RESERVED_IDENTIFIER_FIXUP_3558;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2509 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3402 = _RESERVED_IDENTIFIER_FIXUP_3385;
            _RESERVED_IDENTIFIER_FIXUP_3402.y = _RESERVED_IDENTIFIER_FIXUP_2509;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3807;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3804;
            if (_RESERVED_IDENTIFIER_FIXUP_2509 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2518 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3492 = _RESERVED_IDENTIFIER_FIXUP_3402;
                _RESERVED_IDENTIFIER_FIXUP_3492.y = _RESERVED_IDENTIFIER_FIXUP_2518.x;
                _RESERVED_IDENTIFIER_FIXUP_3492.z = _RESERVED_IDENTIFIER_FIXUP_2518.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2528 = _RESERVED_IDENTIFIER_FIXUP_3492.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3496;
                _RESERVED_IDENTIFIER_FIXUP_3496.x = _RESERVED_IDENTIFIER_FIXUP_2528.x;
                _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2528.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2538 = _RESERVED_IDENTIFIER_FIXUP_3492.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3500;
                _RESERVED_IDENTIFIER_FIXUP_3500.x = _RESERVED_IDENTIFIER_FIXUP_2538.x;
                _RESERVED_IDENTIFIER_FIXUP_3500.y = _RESERVED_IDENTIFIER_FIXUP_2538.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2548 = _RESERVED_IDENTIFIER_FIXUP_3492.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3504;
                _RESERVED_IDENTIFIER_FIXUP_3504.x = _RESERVED_IDENTIFIER_FIXUP_2548.x;
                _RESERVED_IDENTIFIER_FIXUP_3504.y = _RESERVED_IDENTIFIER_FIXUP_2548.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2558 = _RESERVED_IDENTIFIER_FIXUP_3492.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3508;
                _RESERVED_IDENTIFIER_FIXUP_3508.x = _RESERVED_IDENTIFIER_FIXUP_2558.x;
                _RESERVED_IDENTIFIER_FIXUP_3508.y = _RESERVED_IDENTIFIER_FIXUP_2558.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2566 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_2566.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2566.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2572 = hdLod7(param_82, param_83);
                _RESERVED_IDENTIFIER_FIXUP_3496.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3500.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3504.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3508.w = 0.0;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3496.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2572.y = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3500.xy;
                float param_87 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2572.z = hdLod7(param_86, param_87).x;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3504.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2572.w = hdLod7(param_88, param_89).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2629 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2572 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3508.xy;
                float param_91 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2635 = hdLod7(param_90, param_91).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3492.y = _RESERVED_IDENTIFIER_FIXUP_2635;
                float _RESERVED_IDENTIFIER_FIXUP_2640 = float(_RESERVED_IDENTIFIER_FIXUP_2635 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3492.y = _RESERVED_IDENTIFIER_FIXUP_2640;
                float _RESERVED_IDENTIFIER_FIXUP_2643 = dot(_RESERVED_IDENTIFIER_FIXUP_2629, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3492.z = _RESERVED_IDENTIFIER_FIXUP_2643;
                float _RESERVED_IDENTIFIER_FIXUP_2649 = _RESERVED_IDENTIFIER_FIXUP_2640 + _RESERVED_IDENTIFIER_FIXUP_2643;
                _RESERVED_IDENTIFIER_FIXUP_3492.y = _RESERVED_IDENTIFIER_FIXUP_2649;
                _RESERVED_IDENTIFIER_FIXUP_3492.x = _RESERVED_IDENTIFIER_FIXUP_2649 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3807 = _RESERVED_IDENTIFIER_FIXUP_2629;
                _RESERVED_IDENTIFIER_FIXUP_3804 = _RESERVED_IDENTIFIER_FIXUP_3492;
            }
            else
            {
                _RESERVED_IDENTIFIER_FIXUP_2066.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2066.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2665 = (_RESERVED_IDENTIFIER_FIXUP_2066.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3411;
                _RESERVED_IDENTIFIER_FIXUP_3411.x = _RESERVED_IDENTIFIER_FIXUP_2665.x;
                _RESERVED_IDENTIFIER_FIXUP_3411.y = _RESERVED_IDENTIFIER_FIXUP_2665.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2675 = _RESERVED_IDENTIFIER_FIXUP_3411.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3415;
                _RESERVED_IDENTIFIER_FIXUP_3415.x = _RESERVED_IDENTIFIER_FIXUP_2675.x;
                _RESERVED_IDENTIFIER_FIXUP_3415.y = _RESERVED_IDENTIFIER_FIXUP_2675.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2685 = _RESERVED_IDENTIFIER_FIXUP_3411.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3419;
                _RESERVED_IDENTIFIER_FIXUP_3419.x = _RESERVED_IDENTIFIER_FIXUP_2685.x;
                _RESERVED_IDENTIFIER_FIXUP_3419.y = _RESERVED_IDENTIFIER_FIXUP_2685.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2695 = _RESERVED_IDENTIFIER_FIXUP_3411.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3423;
                _RESERVED_IDENTIFIER_FIXUP_3423.x = _RESERVED_IDENTIFIER_FIXUP_2695.x;
                _RESERVED_IDENTIFIER_FIXUP_3423.y = _RESERVED_IDENTIFIER_FIXUP_2695.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2705 = _RESERVED_IDENTIFIER_FIXUP_3411.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3427;
                _RESERVED_IDENTIFIER_FIXUP_3427.x = _RESERVED_IDENTIFIER_FIXUP_2705.x;
                _RESERVED_IDENTIFIER_FIXUP_3427.y = _RESERVED_IDENTIFIER_FIXUP_2705.y;
                _RESERVED_IDENTIFIER_FIXUP_3411.w = 0.0;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3411.xy;
                float param_93 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2719 = hdLod8(param_92, param_93);
                _RESERVED_IDENTIFIER_FIXUP_3415.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3419.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3423.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3427.w = 0.0;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3415.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2719.y = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3419.xy;
                float param_97 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2719.z = hdLod8(param_96, param_97).x;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3423.xy;
                float param_99 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2719.w = hdLod8(param_98, param_99).x;
                vec2 param_100 = _RESERVED_IDENTIFIER_FIXUP_3427.xy;
                float param_101 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2782 = hdLod8(param_100, param_101).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3467 = _RESERVED_IDENTIFIER_FIXUP_3402;
                _RESERVED_IDENTIFIER_FIXUP_3467.y = _RESERVED_IDENTIFIER_FIXUP_2782;
                float _RESERVED_IDENTIFIER_FIXUP_2787 = float(_RESERVED_IDENTIFIER_FIXUP_2782 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3467.y = _RESERVED_IDENTIFIER_FIXUP_2787;
                float _RESERVED_IDENTIFIER_FIXUP_2790 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2719 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3467.z = _RESERVED_IDENTIFIER_FIXUP_2790;
                float _RESERVED_IDENTIFIER_FIXUP_2796 = _RESERVED_IDENTIFIER_FIXUP_2787 + _RESERVED_IDENTIFIER_FIXUP_2790;
                _RESERVED_IDENTIFIER_FIXUP_3467.y = _RESERVED_IDENTIFIER_FIXUP_2796;
                float _RESERVED_IDENTIFIER_FIXUP_2804 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3467.z = _RESERVED_IDENTIFIER_FIXUP_2804;
                float _RESERVED_IDENTIFIER_FIXUP_2810 = clamp((_RESERVED_IDENTIFIER_FIXUP_2804 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3467.z = _RESERVED_IDENTIFIER_FIXUP_2810;
                float _RESERVED_IDENTIFIER_FIXUP_2815 = (_RESERVED_IDENTIFIER_FIXUP_2796 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3467.y = _RESERVED_IDENTIFIER_FIXUP_2815;
                _RESERVED_IDENTIFIER_FIXUP_3467.x = (_RESERVED_IDENTIFIER_FIXUP_2810 * _RESERVED_IDENTIFIER_FIXUP_2815) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3807 = _RESERVED_IDENTIFIER_FIXUP_2066;
                _RESERVED_IDENTIFIER_FIXUP_3804 = _RESERVED_IDENTIFIER_FIXUP_3467;
            }
            _RESERVED_IDENTIFIER_FIXUP_3806 = _RESERVED_IDENTIFIER_FIXUP_3807;
            _RESERVED_IDENTIFIER_FIXUP_3803 = _RESERVED_IDENTIFIER_FIXUP_3804;
        }
        _RESERVED_IDENTIFIER_FIXUP_3805 = _RESERVED_IDENTIFIER_FIXUP_3806;
        _RESERVED_IDENTIFIER_FIXUP_3802 = _RESERVED_IDENTIFIER_FIXUP_3803;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2830 = (_RESERVED_IDENTIFIER_FIXUP_3802.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_3802;
    _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2830;
    _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2830;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2843 = _RESERVED_IDENTIFIER_FIXUP_2075.xyz * _RESERVED_IDENTIFIER_FIXUP_3742.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3748 = _RESERVED_IDENTIFIER_FIXUP_3742;
    _RESERVED_IDENTIFIER_FIXUP_3748.y = _RESERVED_IDENTIFIER_FIXUP_2843.x;
    _RESERVED_IDENTIFIER_FIXUP_3748.z = _RESERVED_IDENTIFIER_FIXUP_2843.y;
    _RESERVED_IDENTIFIER_FIXUP_3748.w = _RESERVED_IDENTIFIER_FIXUP_2843.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2854 = _RESERVED_IDENTIFIER_FIXUP_3748.yzw * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3754 = _RESERVED_IDENTIFIER_FIXUP_3748;
    _RESERVED_IDENTIFIER_FIXUP_3754.y = _RESERVED_IDENTIFIER_FIXUP_2854.x;
    _RESERVED_IDENTIFIER_FIXUP_3754.z = _RESERVED_IDENTIFIER_FIXUP_2854.y;
    _RESERVED_IDENTIFIER_FIXUP_3754.w = _RESERVED_IDENTIFIER_FIXUP_2854.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2865 = _RESERVED_IDENTIFIER_FIXUP_3754.yzw + _RESERVED_IDENTIFIER_FIXUP_3754.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2867 = _RESERVED_IDENTIFIER_FIXUP_2865.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3760 = _RESERVED_IDENTIFIER_FIXUP_3754;
    _RESERVED_IDENTIFIER_FIXUP_3760.y = _RESERVED_IDENTIFIER_FIXUP_2867;
    _RESERVED_IDENTIFIER_FIXUP_3760.z = _RESERVED_IDENTIFIER_FIXUP_2865.y;
    _RESERVED_IDENTIFIER_FIXUP_3760.w = _RESERVED_IDENTIFIER_FIXUP_2865.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2876 = _RESERVED_IDENTIFIER_FIXUP_2075.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3766 = _RESERVED_IDENTIFIER_FIXUP_3805;
    _RESERVED_IDENTIFIER_FIXUP_3766.x = _RESERVED_IDENTIFIER_FIXUP_2876.x;
    _RESERVED_IDENTIFIER_FIXUP_3766.y = _RESERVED_IDENTIFIER_FIXUP_2876.y;
    _RESERVED_IDENTIFIER_FIXUP_3766.z = _RESERVED_IDENTIFIER_FIXUP_2876.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2890 = (_RESERVED_IDENTIFIER_FIXUP_3766.xyz * _RESERVED_IDENTIFIER_FIXUP_3760.xxx) + _RESERVED_IDENTIFIER_FIXUP_3760.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3813 = vec4(_RESERVED_IDENTIFIER_FIXUP_2890.x, _RESERVED_IDENTIFIER_FIXUP_2867, _RESERVED_IDENTIFIER_FIXUP_2865.yz);
    _RESERVED_IDENTIFIER_FIXUP_3813.y = _RESERVED_IDENTIFIER_FIXUP_2890.y;
    _RESERVED_IDENTIFIER_FIXUP_3813.z = _RESERVED_IDENTIFIER_FIXUP_2890.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2903 = _RESERVED_IDENTIFIER_FIXUP_3813.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3778 = _RESERVED_IDENTIFIER_FIXUP_3813;
    _RESERVED_IDENTIFIER_FIXUP_3778.x = _RESERVED_IDENTIFIER_FIXUP_2903.x;
    _RESERVED_IDENTIFIER_FIXUP_3778.y = _RESERVED_IDENTIFIER_FIXUP_2903.y;
    _RESERVED_IDENTIFIER_FIXUP_3778.z = _RESERVED_IDENTIFIER_FIXUP_2903.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3778.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1021 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1030;
    if (_RESERVED_IDENTIFIER_FIXUP_1021)
    {
        _RESERVED_IDENTIFIER_FIXUP_1030 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1030 = _RESERVED_IDENTIFIER_FIXUP_1021;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1030)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1067 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3369.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1094 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2968;
    if (_RESERVED_IDENTIFIER_FIXUP_1067 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2968 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1067), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1094);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2968 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1094);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2968;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2830);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        vec2 hdB115 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.x = hdB115.x;
        r0.y = hdB115.y;
        vec2 hdB136 = r0.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB136.x;
        r1.y = hdB136.y;
        vec2 hdB147 = r0.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = hdB147.x;
        r2.y = hdB147.y;
        vec2 hdB158 = r0.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB158.x;
        r4.y = hdB158.y;
        vec2 hdB169 = r0.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB169.x;
        r5.y = hdB169.y;
        vec2 hdB180 = r0.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB180.x;
        r6.y = hdB180.y;
        vec2 hdB191 = r0.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB191.x;
        r7.y = hdB191.y;
        vec2 hdB202 = r0.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB202.x;
        r8.y = hdB202.y;
        vec4 hdB207 = r0;
        vec2 hdB213 = hdB207.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r0.x = hdB213.x;
        r0.y = hdB213.y;
        r9 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r9.xy;
        float param_4 = r9.w;
        r9 = hdLod5(param_3, param_4);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_5 = r1.xy;
        float param_6 = r1.w;
        r1 = hdLod5(param_5, param_6);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
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
        r0.z = 0.0;
        r0.w = 0.0;
        vec2 param_19 = r0.xy;
        float param_20 = r0.w;
        r0 = hdLod5(param_19, param_20);
        r9.y = r1.x;
        r9.z = r2.x;
        r9.w = r4.x;
        r1 = r9 + (-v4.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r2 = r5 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r0.x += (-v4.z);
        r0.x = float(r0.x >= 0.0);
        r0.y = dot(r1, vec4(1.0));
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.x += r0.y;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v5.x), abs(v5.y));
        if (r0.y < 1.0)
        {
            vec2 hdB401 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB401.x;
            r0.z = hdB401.y;
            vec2 hdB411 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r1.x = hdB411.x;
            r1.y = hdB411.y;
            vec2 hdB421 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB421.x;
            r2.y = hdB421.y;
            vec2 hdB431 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB431.x;
            r4.y = hdB431.y;
            vec2 hdB441 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB441.x;
            r5.y = hdB441.y;
            r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r6.xy;
            float param_22 = r6.w;
            r6 = hdLod6(param_21, param_22);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_23 = r1.xy;
            float param_24 = r1.w;
            r1 = hdLod6(param_23, param_24);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_25 = r2.xy;
            float param_26 = r2.w;
            r2 = hdLod6(param_25, param_26);
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
            r6.y = r1.x;
            r6.z = r2.x;
            r6.w = r4.x;
            r1 = r6 + (-v5.zzzz);
            r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
            r0.y = r5.x + (-v5.z);
            r0.y = float(r0.y >= 0.0);
            r0.z = dot(r1, vec4(1.0));
            r0.y += r0.z;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v6.x), abs(v6.y));
            if (r0.y < 1.0)
            {
                vec2 hdB557 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB557.x;
                r0.z = hdB557.y;
                vec2 hdB567 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r1.x = hdB567.x;
                r1.y = hdB567.y;
                vec2 hdB577 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = hdB577.x;
                r2.y = hdB577.y;
                vec2 hdB587 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB587.x;
                r4.y = hdB587.y;
                vec2 hdB597 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB597.x;
                r5.y = hdB597.y;
                r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_31 = r6.xy;
                float param_32 = r6.w;
                r6 = hdLod7(param_31, param_32);
                r1.z = 0.0;
                r1.w = 0.0;
                vec2 param_33 = r1.xy;
                float param_34 = r1.w;
                r1 = hdLod7(param_33, param_34);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_35 = r2.xy;
                float param_36 = r2.w;
                r2 = hdLod7(param_35, param_36);
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
                r6.y = r1.x;
                r6.z = r2.x;
                r6.w = r4.x;
                r1 = r6 + (-v6.zzzz);
                r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
                r0.y = r5.x + (-v6.z);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r1, vec4(1.0));
                r0.y += r0.z;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.x = v4.w;
                r1.y = v5.w;
                vec2 hdB705 = (r1.xy * vec2(0.5)) + vec2(0.5);
                r2.x = hdB705.x;
                r2.y = hdB705.y;
                vec2 hdB715 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB715.x;
                r4.y = hdB715.y;
                vec2 hdB725 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB725.x;
                r5.y = hdB725.y;
                vec2 hdB735 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB735.x;
                r6.y = hdB735.y;
                vec2 hdB745 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB745.x;
                r7.y = hdB745.y;
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_41 = r2.xy;
                float param_42 = r2.w;
                r2 = hdLod8(param_41, param_42);
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
                r2.y = r4.x;
                r2.z = r5.x;
                r2.w = r6.x;
                r2 += (-v6.wwww);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r0.y = r7.x + (-v6.w);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r2, vec4(1.0));
                r0.y += r0.z;
                r0.z = max(abs(r1.x), abs(r1.y));
                r0.z = clamp((r0.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.z * r0.y) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB878 = r0;
    vec3 hdB880 = r3.xyz * hdB878.yyy;
    r0.y = hdB880.x;
    r0.z = hdB880.y;
    r0.w = hdB880.z;
    vec4 hdB887 = r0;
    vec3 hdB891 = hdB887.yzw * v0.xyz;
    r0.y = hdB891.x;
    r0.z = hdB891.y;
    r0.w = hdB891.z;
    vec4 hdB898 = r0;
    vec4 hdB900 = r0;
    vec3 hdB902 = hdB898.yzw + hdB900.yzw;
    r0.y = hdB902.x;
    r0.z = hdB902.y;
    r0.w = hdB902.z;
    vec3 hdB913 = r3.www * v1.xyz;
    r1.x = hdB913.x;
    r1.y = hdB913.y;
    r1.z = hdB913.z;
    vec4 hdB922 = r0;
    vec4 hdB925 = r0;
    vec3 hdB927 = (r1.xyz * hdB922.xxx) + hdB925.yzw;
    r0.x = hdB927.x;
    r0.y = hdB927.y;
    r0.z = hdB927.z;
    vec4 hdB934 = r0;
    vec3 hdB941 = hdB934.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB941.x;
    r0.y = hdB941.y;
    r0.z = hdB941.z;
    vec3 hdB956 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB956.x;
    oC0.y = hdB956.y;
    oC0.z = hdB956.z;
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
    bool _3320 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3330;
    if (_3320)
    {
        _3330 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 487u) != 0u;
    }
    else
    {
        _3330 = _3320;
    }
    if (_3330)
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
        bool _3355 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3370;
        if (!_3355)
        {
            _3370 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 487u) != 0u;
        }
        else
        {
            _3370 = _3355;
        }
        if (_3370)
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
