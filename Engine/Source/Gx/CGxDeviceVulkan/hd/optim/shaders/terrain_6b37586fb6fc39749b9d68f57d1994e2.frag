#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
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
    bool _55 = hdOverride >= 0;
    bool _75;
    if (_55)
    {
        _75 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _75 = _55;
    }
    vec4 _76;
    if (_75)
    {
        _76 = vec4(float(hdOverride));
    }
    else
    {
        _76 = value;
    }
    return _76;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _94 = hdOverride >= 0;
    bool _104;
    if (_94)
    {
        _104 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _104 = _94;
    }
    vec4 _105;
    if (_104)
    {
        _105 = vec4(float(hdOverride));
    }
    else
    {
        _105 = value;
    }
    return _105;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _123 = hdOverride >= 0;
    bool _133;
    if (_123)
    {
        _133 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _133 = _123;
    }
    vec4 _134;
    if (_133)
    {
        _134 = vec4(float(hdOverride));
    }
    else
    {
        _134 = value;
    }
    return _134;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _152 = hdOverride >= 0;
    bool _162;
    if (_152)
    {
        _162 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _162 = _152;
    }
    vec4 _163;
    if (_162)
    {
        _163 = vec4(float(hdOverride));
    }
    else
    {
        _163 = value;
    }
    return _163;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _181 = hdOverride >= 0;
    bool _191;
    if (_181)
    {
        _191 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _191 = _181;
    }
    vec4 _192;
    if (_191)
    {
        _192 = vec4(float(hdOverride));
    }
    else
    {
        _192 = value;
    }
    return _192;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1144 = hdTex0(param);
    float _RESERVED_IDENTIFIER_FIXUP_1151 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2924 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2924.x = _RESERVED_IDENTIFIER_FIXUP_1151;
    float _RESERVED_IDENTIFIER_FIXUP_1157 = clamp((_RESERVED_IDENTIFIER_FIXUP_1151 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2924.x = _RESERVED_IDENTIFIER_FIXUP_1157;
    float _RESERVED_IDENTIFIER_FIXUP_1163 = ((-_RESERVED_IDENTIFIER_FIXUP_1157) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2924.x = _RESERVED_IDENTIFIER_FIXUP_1163;
    bool _RESERVED_IDENTIFIER_FIXUP_1170 = _RESERVED_IDENTIFIER_FIXUP_1163 != (-_RESERVED_IDENTIFIER_FIXUP_1163);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3739;
    if (_RESERVED_IDENTIFIER_FIXUP_1170)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1175 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3163;
        _RESERVED_IDENTIFIER_FIXUP_3163.x = _RESERVED_IDENTIFIER_FIXUP_1175.x;
        _RESERVED_IDENTIFIER_FIXUP_3163.y = _RESERVED_IDENTIFIER_FIXUP_1175.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1185 = _RESERVED_IDENTIFIER_FIXUP_3163.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3167;
        _RESERVED_IDENTIFIER_FIXUP_3167.x = _RESERVED_IDENTIFIER_FIXUP_1185.x;
        _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1185.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1195 = _RESERVED_IDENTIFIER_FIXUP_3163.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3171;
        _RESERVED_IDENTIFIER_FIXUP_3171.x = _RESERVED_IDENTIFIER_FIXUP_1195.x;
        _RESERVED_IDENTIFIER_FIXUP_3171.y = _RESERVED_IDENTIFIER_FIXUP_1195.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_3163.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3175;
        _RESERVED_IDENTIFIER_FIXUP_3175.x = _RESERVED_IDENTIFIER_FIXUP_1205.x;
        _RESERVED_IDENTIFIER_FIXUP_3175.y = _RESERVED_IDENTIFIER_FIXUP_1205.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1215 = _RESERVED_IDENTIFIER_FIXUP_3163.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3179;
        _RESERVED_IDENTIFIER_FIXUP_3179.x = _RESERVED_IDENTIFIER_FIXUP_1215.x;
        _RESERVED_IDENTIFIER_FIXUP_3179.y = _RESERVED_IDENTIFIER_FIXUP_1215.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1225 = _RESERVED_IDENTIFIER_FIXUP_3163.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3183;
        _RESERVED_IDENTIFIER_FIXUP_3183.x = _RESERVED_IDENTIFIER_FIXUP_1225.x;
        _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_1225.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1235 = _RESERVED_IDENTIFIER_FIXUP_3163.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3187;
        _RESERVED_IDENTIFIER_FIXUP_3187.x = _RESERVED_IDENTIFIER_FIXUP_1235.x;
        _RESERVED_IDENTIFIER_FIXUP_3187.y = _RESERVED_IDENTIFIER_FIXUP_1235.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1245 = _RESERVED_IDENTIFIER_FIXUP_3163.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3191;
        _RESERVED_IDENTIFIER_FIXUP_3191.x = _RESERVED_IDENTIFIER_FIXUP_1245.x;
        _RESERVED_IDENTIFIER_FIXUP_3191.y = _RESERVED_IDENTIFIER_FIXUP_1245.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1255 = _RESERVED_IDENTIFIER_FIXUP_3163.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3195;
        _RESERVED_IDENTIFIER_FIXUP_3195.x = _RESERVED_IDENTIFIER_FIXUP_1255.x;
        _RESERVED_IDENTIFIER_FIXUP_3195.y = _RESERVED_IDENTIFIER_FIXUP_1255.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1263 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_1263.xy;
        float param_2 = _RESERVED_IDENTIFIER_FIXUP_1263.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1269 = hdLod5(param_1, param_2);
        _RESERVED_IDENTIFIER_FIXUP_3167.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3171.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3175.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3179.w = 0.0;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_3179.xy;
        float param_4 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1309 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3183.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3187.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3191.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3195.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3195.xy;
        float param_6 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1349 = hdLod5(param_5, param_6);
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3167.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1269.y = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3171.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1269.z = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3175.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1269.w = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3183.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1309.y = hdLod5(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3187.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1309.z = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3191.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1309.w = hdLod5(param_17, param_18).x;
        float _RESERVED_IDENTIFIER_FIXUP_1389 = _RESERVED_IDENTIFIER_FIXUP_1349.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3260 = _RESERVED_IDENTIFIER_FIXUP_1349;
        _RESERVED_IDENTIFIER_FIXUP_3260.x = _RESERVED_IDENTIFIER_FIXUP_1389;
        float _RESERVED_IDENTIFIER_FIXUP_1394 = float(_RESERVED_IDENTIFIER_FIXUP_1389 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3260.x = _RESERVED_IDENTIFIER_FIXUP_1394;
        float _RESERVED_IDENTIFIER_FIXUP_1397 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1269 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3260.y = _RESERVED_IDENTIFIER_FIXUP_1397;
        float _RESERVED_IDENTIFIER_FIXUP_1400 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1309 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3260.z = _RESERVED_IDENTIFIER_FIXUP_1400;
        float _RESERVED_IDENTIFIER_FIXUP_1406 = _RESERVED_IDENTIFIER_FIXUP_1397 + _RESERVED_IDENTIFIER_FIXUP_1400;
        _RESERVED_IDENTIFIER_FIXUP_3260.y = _RESERVED_IDENTIFIER_FIXUP_1406;
        float _RESERVED_IDENTIFIER_FIXUP_1412 = _RESERVED_IDENTIFIER_FIXUP_1394 + _RESERVED_IDENTIFIER_FIXUP_1406;
        _RESERVED_IDENTIFIER_FIXUP_3260.x = _RESERVED_IDENTIFIER_FIXUP_1412;
        _RESERVED_IDENTIFIER_FIXUP_3260.x = _RESERVED_IDENTIFIER_FIXUP_1412 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3739 = _RESERVED_IDENTIFIER_FIXUP_3260;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1425 = max(abs(texcoord5.x), abs(texcoord5.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2936 = _RESERVED_IDENTIFIER_FIXUP_2924;
        _RESERVED_IDENTIFIER_FIXUP_2936.y = _RESERVED_IDENTIFIER_FIXUP_1425;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3740;
        if (_RESERVED_IDENTIFIER_FIXUP_1425 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1434 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3097 = _RESERVED_IDENTIFIER_FIXUP_2936;
            _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1434.x;
            _RESERVED_IDENTIFIER_FIXUP_3097.z = _RESERVED_IDENTIFIER_FIXUP_1434.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1444 = _RESERVED_IDENTIFIER_FIXUP_3097.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3101;
            _RESERVED_IDENTIFIER_FIXUP_3101.x = _RESERVED_IDENTIFIER_FIXUP_1444.x;
            _RESERVED_IDENTIFIER_FIXUP_3101.y = _RESERVED_IDENTIFIER_FIXUP_1444.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1454 = _RESERVED_IDENTIFIER_FIXUP_3097.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3105;
            _RESERVED_IDENTIFIER_FIXUP_3105.x = _RESERVED_IDENTIFIER_FIXUP_1454.x;
            _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_1454.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1464 = _RESERVED_IDENTIFIER_FIXUP_3097.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3109;
            _RESERVED_IDENTIFIER_FIXUP_3109.x = _RESERVED_IDENTIFIER_FIXUP_1464.x;
            _RESERVED_IDENTIFIER_FIXUP_3109.y = _RESERVED_IDENTIFIER_FIXUP_1464.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1474 = _RESERVED_IDENTIFIER_FIXUP_3097.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3113;
            _RESERVED_IDENTIFIER_FIXUP_3113.x = _RESERVED_IDENTIFIER_FIXUP_1474.x;
            _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_1474.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1482 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1482.xy;
            float param_20 = _RESERVED_IDENTIFIER_FIXUP_1482.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1488 = hdLod6(param_19, param_20);
            _RESERVED_IDENTIFIER_FIXUP_3101.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3105.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3109.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3113.w = 0.0;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3101.xy;
            float param_22 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1488.y = hdLod6(param_21, param_22).x;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3105.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1488.z = hdLod6(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3109.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1488.w = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3113.xy;
            float param_28 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1551 = hdLod6(param_27, param_28).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1551;
            float _RESERVED_IDENTIFIER_FIXUP_1556 = float(_RESERVED_IDENTIFIER_FIXUP_1551 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1556;
            float _RESERVED_IDENTIFIER_FIXUP_1559 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1488 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3097.z = _RESERVED_IDENTIFIER_FIXUP_1559;
            float _RESERVED_IDENTIFIER_FIXUP_1565 = _RESERVED_IDENTIFIER_FIXUP_1556 + _RESERVED_IDENTIFIER_FIXUP_1559;
            _RESERVED_IDENTIFIER_FIXUP_3097.y = _RESERVED_IDENTIFIER_FIXUP_1565;
            _RESERVED_IDENTIFIER_FIXUP_3097.x = _RESERVED_IDENTIFIER_FIXUP_1565 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3740 = _RESERVED_IDENTIFIER_FIXUP_3097;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1578 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2941 = _RESERVED_IDENTIFIER_FIXUP_2936;
            _RESERVED_IDENTIFIER_FIXUP_2941.y = _RESERVED_IDENTIFIER_FIXUP_1578;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3741;
            if (_RESERVED_IDENTIFIER_FIXUP_1578 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1587 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3031 = _RESERVED_IDENTIFIER_FIXUP_2941;
                _RESERVED_IDENTIFIER_FIXUP_3031.y = _RESERVED_IDENTIFIER_FIXUP_1587.x;
                _RESERVED_IDENTIFIER_FIXUP_3031.z = _RESERVED_IDENTIFIER_FIXUP_1587.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1597 = _RESERVED_IDENTIFIER_FIXUP_3031.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3035;
                _RESERVED_IDENTIFIER_FIXUP_3035.x = _RESERVED_IDENTIFIER_FIXUP_1597.x;
                _RESERVED_IDENTIFIER_FIXUP_3035.y = _RESERVED_IDENTIFIER_FIXUP_1597.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1607 = _RESERVED_IDENTIFIER_FIXUP_3031.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3039;
                _RESERVED_IDENTIFIER_FIXUP_3039.x = _RESERVED_IDENTIFIER_FIXUP_1607.x;
                _RESERVED_IDENTIFIER_FIXUP_3039.y = _RESERVED_IDENTIFIER_FIXUP_1607.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1617 = _RESERVED_IDENTIFIER_FIXUP_3031.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3043;
                _RESERVED_IDENTIFIER_FIXUP_3043.x = _RESERVED_IDENTIFIER_FIXUP_1617.x;
                _RESERVED_IDENTIFIER_FIXUP_3043.y = _RESERVED_IDENTIFIER_FIXUP_1617.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1627 = _RESERVED_IDENTIFIER_FIXUP_3031.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3047;
                _RESERVED_IDENTIFIER_FIXUP_3047.x = _RESERVED_IDENTIFIER_FIXUP_1627.x;
                _RESERVED_IDENTIFIER_FIXUP_3047.y = _RESERVED_IDENTIFIER_FIXUP_1627.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1635 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_1635.xy;
                float param_30 = _RESERVED_IDENTIFIER_FIXUP_1635.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1641 = hdLod7(param_29, param_30);
                _RESERVED_IDENTIFIER_FIXUP_3035.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3039.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3043.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3047.w = 0.0;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3035.xy;
                float param_32 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1641.y = hdLod7(param_31, param_32).x;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3039.xy;
                float param_34 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1641.z = hdLod7(param_33, param_34).x;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3043.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1641.w = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3047.xy;
                float param_38 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1704 = hdLod7(param_37, param_38).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3031.y = _RESERVED_IDENTIFIER_FIXUP_1704;
                float _RESERVED_IDENTIFIER_FIXUP_1709 = float(_RESERVED_IDENTIFIER_FIXUP_1704 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3031.y = _RESERVED_IDENTIFIER_FIXUP_1709;
                float _RESERVED_IDENTIFIER_FIXUP_1712 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1641 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3031.z = _RESERVED_IDENTIFIER_FIXUP_1712;
                float _RESERVED_IDENTIFIER_FIXUP_1718 = _RESERVED_IDENTIFIER_FIXUP_1709 + _RESERVED_IDENTIFIER_FIXUP_1712;
                _RESERVED_IDENTIFIER_FIXUP_3031.y = _RESERVED_IDENTIFIER_FIXUP_1718;
                _RESERVED_IDENTIFIER_FIXUP_3031.x = _RESERVED_IDENTIFIER_FIXUP_1718 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3741 = _RESERVED_IDENTIFIER_FIXUP_3031;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2945 = vec4(0.0);
                _RESERVED_IDENTIFIER_FIXUP_2945.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_2945.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1734 = (_RESERVED_IDENTIFIER_FIXUP_2945.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_2950;
                _RESERVED_IDENTIFIER_FIXUP_2950.x = _RESERVED_IDENTIFIER_FIXUP_1734.x;
                _RESERVED_IDENTIFIER_FIXUP_2950.y = _RESERVED_IDENTIFIER_FIXUP_1734.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1744 = _RESERVED_IDENTIFIER_FIXUP_2950.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2954;
                _RESERVED_IDENTIFIER_FIXUP_2954.x = _RESERVED_IDENTIFIER_FIXUP_1744.x;
                _RESERVED_IDENTIFIER_FIXUP_2954.y = _RESERVED_IDENTIFIER_FIXUP_1744.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1754 = _RESERVED_IDENTIFIER_FIXUP_2950.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2958;
                _RESERVED_IDENTIFIER_FIXUP_2958.x = _RESERVED_IDENTIFIER_FIXUP_1754.x;
                _RESERVED_IDENTIFIER_FIXUP_2958.y = _RESERVED_IDENTIFIER_FIXUP_1754.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1764 = _RESERVED_IDENTIFIER_FIXUP_2950.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2962;
                _RESERVED_IDENTIFIER_FIXUP_2962.x = _RESERVED_IDENTIFIER_FIXUP_1764.x;
                _RESERVED_IDENTIFIER_FIXUP_2962.y = _RESERVED_IDENTIFIER_FIXUP_1764.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1774 = _RESERVED_IDENTIFIER_FIXUP_2950.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2966;
                _RESERVED_IDENTIFIER_FIXUP_2966.x = _RESERVED_IDENTIFIER_FIXUP_1774.x;
                _RESERVED_IDENTIFIER_FIXUP_2966.y = _RESERVED_IDENTIFIER_FIXUP_1774.y;
                _RESERVED_IDENTIFIER_FIXUP_2950.w = 0.0;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2950.xy;
                float param_40 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1788 = hdLod8(param_39, param_40);
                _RESERVED_IDENTIFIER_FIXUP_2954.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2958.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2962.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2966.w = 0.0;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_2954.xy;
                float param_42 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1788.y = hdLod8(param_41, param_42).x;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_2958.xy;
                float param_44 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1788.z = hdLod8(param_43, param_44).x;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_2962.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1788.w = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_2966.xy;
                float param_48 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1851 = hdLod8(param_47, param_48).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3006 = _RESERVED_IDENTIFIER_FIXUP_2941;
                _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1851;
                float _RESERVED_IDENTIFIER_FIXUP_1856 = float(_RESERVED_IDENTIFIER_FIXUP_1851 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1856;
                float _RESERVED_IDENTIFIER_FIXUP_1859 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1788 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3006.z = _RESERVED_IDENTIFIER_FIXUP_1859;
                float _RESERVED_IDENTIFIER_FIXUP_1865 = _RESERVED_IDENTIFIER_FIXUP_1856 + _RESERVED_IDENTIFIER_FIXUP_1859;
                _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1865;
                float _RESERVED_IDENTIFIER_FIXUP_1873 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3006.z = _RESERVED_IDENTIFIER_FIXUP_1873;
                float _RESERVED_IDENTIFIER_FIXUP_1879 = clamp((_RESERVED_IDENTIFIER_FIXUP_1873 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3006.z = _RESERVED_IDENTIFIER_FIXUP_1879;
                float _RESERVED_IDENTIFIER_FIXUP_1884 = (_RESERVED_IDENTIFIER_FIXUP_1865 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1884;
                _RESERVED_IDENTIFIER_FIXUP_3006.x = (_RESERVED_IDENTIFIER_FIXUP_1879 * _RESERVED_IDENTIFIER_FIXUP_1884) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3741 = _RESERVED_IDENTIFIER_FIXUP_3006;
            }
            _RESERVED_IDENTIFIER_FIXUP_3740 = _RESERVED_IDENTIFIER_FIXUP_3741;
        }
        _RESERVED_IDENTIFIER_FIXUP_3739 = _RESERVED_IDENTIFIER_FIXUP_3740;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3283 = _RESERVED_IDENTIFIER_FIXUP_3739;
    _RESERVED_IDENTIFIER_FIXUP_3283.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1912 = _RESERVED_IDENTIFIER_FIXUP_1144.xyz * _RESERVED_IDENTIFIER_FIXUP_3283.yyy;
    _RESERVED_IDENTIFIER_FIXUP_1144.x = _RESERVED_IDENTIFIER_FIXUP_1912.x;
    _RESERVED_IDENTIFIER_FIXUP_1144.y = _RESERVED_IDENTIFIER_FIXUP_1912.y;
    _RESERVED_IDENTIFIER_FIXUP_1144.z = _RESERVED_IDENTIFIER_FIXUP_1912.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1923 = _RESERVED_IDENTIFIER_FIXUP_1144.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3737).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3291 = _RESERVED_IDENTIFIER_FIXUP_1144;
    _RESERVED_IDENTIFIER_FIXUP_3291.x = _RESERVED_IDENTIFIER_FIXUP_1923.x;
    _RESERVED_IDENTIFIER_FIXUP_3291.y = _RESERVED_IDENTIFIER_FIXUP_1923.y;
    _RESERVED_IDENTIFIER_FIXUP_3291.z = _RESERVED_IDENTIFIER_FIXUP_1923.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1934 = _RESERVED_IDENTIFIER_FIXUP_3291.xyz + _RESERVED_IDENTIFIER_FIXUP_3291.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3297 = _RESERVED_IDENTIFIER_FIXUP_3291;
    _RESERVED_IDENTIFIER_FIXUP_3297.x = _RESERVED_IDENTIFIER_FIXUP_1934.x;
    _RESERVED_IDENTIFIER_FIXUP_3297.y = _RESERVED_IDENTIFIER_FIXUP_1934.y;
    _RESERVED_IDENTIFIER_FIXUP_3297.z = _RESERVED_IDENTIFIER_FIXUP_1934.z;
    _RESERVED_IDENTIFIER_FIXUP_3283.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3283.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3283.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1959 = (_RESERVED_IDENTIFIER_FIXUP_3283.yzw * _RESERVED_IDENTIFIER_FIXUP_3283.xxx) + _RESERVED_IDENTIFIER_FIXUP_3297.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3309 = _RESERVED_IDENTIFIER_FIXUP_3297;
    _RESERVED_IDENTIFIER_FIXUP_3309.x = _RESERVED_IDENTIFIER_FIXUP_1959.x;
    _RESERVED_IDENTIFIER_FIXUP_3309.y = _RESERVED_IDENTIFIER_FIXUP_1959.y;
    _RESERVED_IDENTIFIER_FIXUP_3309.z = _RESERVED_IDENTIFIER_FIXUP_1959.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1972 = _RESERVED_IDENTIFIER_FIXUP_3309.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3315 = _RESERVED_IDENTIFIER_FIXUP_3309;
    _RESERVED_IDENTIFIER_FIXUP_3315.x = _RESERVED_IDENTIFIER_FIXUP_1972.x;
    _RESERVED_IDENTIFIER_FIXUP_3315.y = _RESERVED_IDENTIFIER_FIXUP_1972.y;
    _RESERVED_IDENTIFIER_FIXUP_3315.z = _RESERVED_IDENTIFIER_FIXUP_1972.z;
    vec2 param_49 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2027 = hdTex0(param_49);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3748;
    if (_RESERVED_IDENTIFIER_FIXUP_1170)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2058 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3570;
        _RESERVED_IDENTIFIER_FIXUP_3570.x = _RESERVED_IDENTIFIER_FIXUP_2058.x;
        _RESERVED_IDENTIFIER_FIXUP_3570.y = _RESERVED_IDENTIFIER_FIXUP_2058.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2068 = _RESERVED_IDENTIFIER_FIXUP_3570.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3574;
        _RESERVED_IDENTIFIER_FIXUP_3574.x = _RESERVED_IDENTIFIER_FIXUP_2068.x;
        _RESERVED_IDENTIFIER_FIXUP_3574.y = _RESERVED_IDENTIFIER_FIXUP_2068.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2078 = _RESERVED_IDENTIFIER_FIXUP_3570.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3578;
        _RESERVED_IDENTIFIER_FIXUP_3578.x = _RESERVED_IDENTIFIER_FIXUP_2078.x;
        _RESERVED_IDENTIFIER_FIXUP_3578.y = _RESERVED_IDENTIFIER_FIXUP_2078.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2088 = _RESERVED_IDENTIFIER_FIXUP_3570.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3582;
        _RESERVED_IDENTIFIER_FIXUP_3582.x = _RESERVED_IDENTIFIER_FIXUP_2088.x;
        _RESERVED_IDENTIFIER_FIXUP_3582.y = _RESERVED_IDENTIFIER_FIXUP_2088.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2098 = _RESERVED_IDENTIFIER_FIXUP_3570.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3586;
        _RESERVED_IDENTIFIER_FIXUP_3586.x = _RESERVED_IDENTIFIER_FIXUP_2098.x;
        _RESERVED_IDENTIFIER_FIXUP_3586.y = _RESERVED_IDENTIFIER_FIXUP_2098.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2108 = _RESERVED_IDENTIFIER_FIXUP_3570.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3590;
        _RESERVED_IDENTIFIER_FIXUP_3590.x = _RESERVED_IDENTIFIER_FIXUP_2108.x;
        _RESERVED_IDENTIFIER_FIXUP_3590.y = _RESERVED_IDENTIFIER_FIXUP_2108.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2118 = _RESERVED_IDENTIFIER_FIXUP_3570.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3594;
        _RESERVED_IDENTIFIER_FIXUP_3594.x = _RESERVED_IDENTIFIER_FIXUP_2118.x;
        _RESERVED_IDENTIFIER_FIXUP_3594.y = _RESERVED_IDENTIFIER_FIXUP_2118.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2128 = _RESERVED_IDENTIFIER_FIXUP_3570.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3598;
        _RESERVED_IDENTIFIER_FIXUP_3598.x = _RESERVED_IDENTIFIER_FIXUP_2128.x;
        _RESERVED_IDENTIFIER_FIXUP_3598.y = _RESERVED_IDENTIFIER_FIXUP_2128.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2138 = _RESERVED_IDENTIFIER_FIXUP_3570.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3602;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2138.x;
        _RESERVED_IDENTIFIER_FIXUP_3602.y = _RESERVED_IDENTIFIER_FIXUP_2138.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2146 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2146.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2146.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2152 = hdLod5(param_50, param_51);
        _RESERVED_IDENTIFIER_FIXUP_3574.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3578.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3582.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3586.w = 0.0;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3586.xy;
        float param_53 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2192 = hdLod5(param_52, param_53);
        _RESERVED_IDENTIFIER_FIXUP_3590.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3594.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3598.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3602.w = 0.0;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3602.xy;
        float param_55 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2232 = hdLod5(param_54, param_55);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3574.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2152.y = hdLod5(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3578.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2152.z = hdLod5(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3582.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2152.w = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3590.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2192.y = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3594.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2192.z = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3598.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2192.w = hdLod5(param_66, param_67).x;
        float _RESERVED_IDENTIFIER_FIXUP_2272 = _RESERVED_IDENTIFIER_FIXUP_2232.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3667 = _RESERVED_IDENTIFIER_FIXUP_2232;
        _RESERVED_IDENTIFIER_FIXUP_3667.x = _RESERVED_IDENTIFIER_FIXUP_2272;
        float _RESERVED_IDENTIFIER_FIXUP_2277 = float(_RESERVED_IDENTIFIER_FIXUP_2272 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3667.x = _RESERVED_IDENTIFIER_FIXUP_2277;
        float _RESERVED_IDENTIFIER_FIXUP_2280 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2152 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3667.y = _RESERVED_IDENTIFIER_FIXUP_2280;
        float _RESERVED_IDENTIFIER_FIXUP_2283 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2192 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3667.z = _RESERVED_IDENTIFIER_FIXUP_2283;
        float _RESERVED_IDENTIFIER_FIXUP_2289 = _RESERVED_IDENTIFIER_FIXUP_2280 + _RESERVED_IDENTIFIER_FIXUP_2283;
        _RESERVED_IDENTIFIER_FIXUP_3667.y = _RESERVED_IDENTIFIER_FIXUP_2289;
        float _RESERVED_IDENTIFIER_FIXUP_2295 = _RESERVED_IDENTIFIER_FIXUP_2277 + _RESERVED_IDENTIFIER_FIXUP_2289;
        _RESERVED_IDENTIFIER_FIXUP_3667.x = _RESERVED_IDENTIFIER_FIXUP_2295;
        _RESERVED_IDENTIFIER_FIXUP_3667.x = _RESERVED_IDENTIFIER_FIXUP_2295 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3748 = _RESERVED_IDENTIFIER_FIXUP_3667;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2308 = max(abs(texcoord5.x), abs(texcoord5.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3343 = _RESERVED_IDENTIFIER_FIXUP_2924;
        _RESERVED_IDENTIFIER_FIXUP_3343.y = _RESERVED_IDENTIFIER_FIXUP_2308;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3749;
        if (_RESERVED_IDENTIFIER_FIXUP_2308 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2317 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3504 = _RESERVED_IDENTIFIER_FIXUP_3343;
            _RESERVED_IDENTIFIER_FIXUP_3504.y = _RESERVED_IDENTIFIER_FIXUP_2317.x;
            _RESERVED_IDENTIFIER_FIXUP_3504.z = _RESERVED_IDENTIFIER_FIXUP_2317.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2327 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3508;
            _RESERVED_IDENTIFIER_FIXUP_3508.x = _RESERVED_IDENTIFIER_FIXUP_2327.x;
            _RESERVED_IDENTIFIER_FIXUP_3508.y = _RESERVED_IDENTIFIER_FIXUP_2327.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2337 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3512;
            _RESERVED_IDENTIFIER_FIXUP_3512.x = _RESERVED_IDENTIFIER_FIXUP_2337.x;
            _RESERVED_IDENTIFIER_FIXUP_3512.y = _RESERVED_IDENTIFIER_FIXUP_2337.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2347 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3516;
            _RESERVED_IDENTIFIER_FIXUP_3516.x = _RESERVED_IDENTIFIER_FIXUP_2347.x;
            _RESERVED_IDENTIFIER_FIXUP_3516.y = _RESERVED_IDENTIFIER_FIXUP_2347.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2357 = _RESERVED_IDENTIFIER_FIXUP_3504.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3520;
            _RESERVED_IDENTIFIER_FIXUP_3520.x = _RESERVED_IDENTIFIER_FIXUP_2357.x;
            _RESERVED_IDENTIFIER_FIXUP_3520.y = _RESERVED_IDENTIFIER_FIXUP_2357.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2365 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2365.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2365.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2371 = hdLod6(param_68, param_69);
            _RESERVED_IDENTIFIER_FIXUP_3508.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3512.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3516.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3520.w = 0.0;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3508.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2371.y = hdLod6(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3512.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2371.z = hdLod6(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3516.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2371.w = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3520.xy;
            float param_77 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2434 = hdLod6(param_76, param_77).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3504.y = _RESERVED_IDENTIFIER_FIXUP_2434;
            float _RESERVED_IDENTIFIER_FIXUP_2439 = float(_RESERVED_IDENTIFIER_FIXUP_2434 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3504.y = _RESERVED_IDENTIFIER_FIXUP_2439;
            float _RESERVED_IDENTIFIER_FIXUP_2442 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2371 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3504.z = _RESERVED_IDENTIFIER_FIXUP_2442;
            float _RESERVED_IDENTIFIER_FIXUP_2448 = _RESERVED_IDENTIFIER_FIXUP_2439 + _RESERVED_IDENTIFIER_FIXUP_2442;
            _RESERVED_IDENTIFIER_FIXUP_3504.y = _RESERVED_IDENTIFIER_FIXUP_2448;
            _RESERVED_IDENTIFIER_FIXUP_3504.x = _RESERVED_IDENTIFIER_FIXUP_2448 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3749 = _RESERVED_IDENTIFIER_FIXUP_3504;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2461 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3348 = _RESERVED_IDENTIFIER_FIXUP_3343;
            _RESERVED_IDENTIFIER_FIXUP_3348.y = _RESERVED_IDENTIFIER_FIXUP_2461;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3750;
            if (_RESERVED_IDENTIFIER_FIXUP_2461 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2470 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3438 = _RESERVED_IDENTIFIER_FIXUP_3348;
                _RESERVED_IDENTIFIER_FIXUP_3438.y = _RESERVED_IDENTIFIER_FIXUP_2470.x;
                _RESERVED_IDENTIFIER_FIXUP_3438.z = _RESERVED_IDENTIFIER_FIXUP_2470.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2480 = _RESERVED_IDENTIFIER_FIXUP_3438.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3442;
                _RESERVED_IDENTIFIER_FIXUP_3442.x = _RESERVED_IDENTIFIER_FIXUP_2480.x;
                _RESERVED_IDENTIFIER_FIXUP_3442.y = _RESERVED_IDENTIFIER_FIXUP_2480.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2490 = _RESERVED_IDENTIFIER_FIXUP_3438.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3446;
                _RESERVED_IDENTIFIER_FIXUP_3446.x = _RESERVED_IDENTIFIER_FIXUP_2490.x;
                _RESERVED_IDENTIFIER_FIXUP_3446.y = _RESERVED_IDENTIFIER_FIXUP_2490.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2500 = _RESERVED_IDENTIFIER_FIXUP_3438.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3450;
                _RESERVED_IDENTIFIER_FIXUP_3450.x = _RESERVED_IDENTIFIER_FIXUP_2500.x;
                _RESERVED_IDENTIFIER_FIXUP_3450.y = _RESERVED_IDENTIFIER_FIXUP_2500.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2510 = _RESERVED_IDENTIFIER_FIXUP_3438.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3454;
                _RESERVED_IDENTIFIER_FIXUP_3454.x = _RESERVED_IDENTIFIER_FIXUP_2510.x;
                _RESERVED_IDENTIFIER_FIXUP_3454.y = _RESERVED_IDENTIFIER_FIXUP_2510.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2518 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2518.xy;
                float param_79 = _RESERVED_IDENTIFIER_FIXUP_2518.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2524 = hdLod7(param_78, param_79);
                _RESERVED_IDENTIFIER_FIXUP_3442.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3446.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3450.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3454.w = 0.0;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3442.xy;
                float param_81 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2524.y = hdLod7(param_80, param_81).x;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3446.xy;
                float param_83 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2524.z = hdLod7(param_82, param_83).x;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3450.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2524.w = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3454.xy;
                float param_87 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2587 = hdLod7(param_86, param_87).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3438.y = _RESERVED_IDENTIFIER_FIXUP_2587;
                float _RESERVED_IDENTIFIER_FIXUP_2592 = float(_RESERVED_IDENTIFIER_FIXUP_2587 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3438.y = _RESERVED_IDENTIFIER_FIXUP_2592;
                float _RESERVED_IDENTIFIER_FIXUP_2595 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2524 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3438.z = _RESERVED_IDENTIFIER_FIXUP_2595;
                float _RESERVED_IDENTIFIER_FIXUP_2601 = _RESERVED_IDENTIFIER_FIXUP_2592 + _RESERVED_IDENTIFIER_FIXUP_2595;
                _RESERVED_IDENTIFIER_FIXUP_3438.y = _RESERVED_IDENTIFIER_FIXUP_2601;
                _RESERVED_IDENTIFIER_FIXUP_3438.x = _RESERVED_IDENTIFIER_FIXUP_2601 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3750 = _RESERVED_IDENTIFIER_FIXUP_3438;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3352 = vec4(0.0);
                _RESERVED_IDENTIFIER_FIXUP_3352.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3352.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2617 = (_RESERVED_IDENTIFIER_FIXUP_3352.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3357;
                _RESERVED_IDENTIFIER_FIXUP_3357.x = _RESERVED_IDENTIFIER_FIXUP_2617.x;
                _RESERVED_IDENTIFIER_FIXUP_3357.y = _RESERVED_IDENTIFIER_FIXUP_2617.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2627 = _RESERVED_IDENTIFIER_FIXUP_3357.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3361;
                _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_2627.x;
                _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_2627.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2637 = _RESERVED_IDENTIFIER_FIXUP_3357.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3365;
                _RESERVED_IDENTIFIER_FIXUP_3365.x = _RESERVED_IDENTIFIER_FIXUP_2637.x;
                _RESERVED_IDENTIFIER_FIXUP_3365.y = _RESERVED_IDENTIFIER_FIXUP_2637.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2647 = _RESERVED_IDENTIFIER_FIXUP_3357.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3369;
                _RESERVED_IDENTIFIER_FIXUP_3369.x = _RESERVED_IDENTIFIER_FIXUP_2647.x;
                _RESERVED_IDENTIFIER_FIXUP_3369.y = _RESERVED_IDENTIFIER_FIXUP_2647.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2657 = _RESERVED_IDENTIFIER_FIXUP_3357.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3373;
                _RESERVED_IDENTIFIER_FIXUP_3373.x = _RESERVED_IDENTIFIER_FIXUP_2657.x;
                _RESERVED_IDENTIFIER_FIXUP_3373.y = _RESERVED_IDENTIFIER_FIXUP_2657.y;
                _RESERVED_IDENTIFIER_FIXUP_3357.w = 0.0;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3357.xy;
                float param_89 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2671 = hdLod8(param_88, param_89);
                _RESERVED_IDENTIFIER_FIXUP_3361.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3365.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3369.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3373.w = 0.0;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3361.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2671.y = hdLod8(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3365.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2671.z = hdLod8(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3369.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2671.w = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3373.xy;
                float param_97 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2734 = hdLod8(param_96, param_97).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3413 = _RESERVED_IDENTIFIER_FIXUP_3348;
                _RESERVED_IDENTIFIER_FIXUP_3413.y = _RESERVED_IDENTIFIER_FIXUP_2734;
                float _RESERVED_IDENTIFIER_FIXUP_2739 = float(_RESERVED_IDENTIFIER_FIXUP_2734 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3413.y = _RESERVED_IDENTIFIER_FIXUP_2739;
                float _RESERVED_IDENTIFIER_FIXUP_2742 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2671 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3413.z = _RESERVED_IDENTIFIER_FIXUP_2742;
                float _RESERVED_IDENTIFIER_FIXUP_2748 = _RESERVED_IDENTIFIER_FIXUP_2739 + _RESERVED_IDENTIFIER_FIXUP_2742;
                _RESERVED_IDENTIFIER_FIXUP_3413.y = _RESERVED_IDENTIFIER_FIXUP_2748;
                float _RESERVED_IDENTIFIER_FIXUP_2756 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3413.z = _RESERVED_IDENTIFIER_FIXUP_2756;
                float _RESERVED_IDENTIFIER_FIXUP_2762 = clamp((_RESERVED_IDENTIFIER_FIXUP_2756 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3413.z = _RESERVED_IDENTIFIER_FIXUP_2762;
                float _RESERVED_IDENTIFIER_FIXUP_2767 = (_RESERVED_IDENTIFIER_FIXUP_2748 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3413.y = _RESERVED_IDENTIFIER_FIXUP_2767;
                _RESERVED_IDENTIFIER_FIXUP_3413.x = (_RESERVED_IDENTIFIER_FIXUP_2762 * _RESERVED_IDENTIFIER_FIXUP_2767) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3750 = _RESERVED_IDENTIFIER_FIXUP_3413;
            }
            _RESERVED_IDENTIFIER_FIXUP_3749 = _RESERVED_IDENTIFIER_FIXUP_3750;
        }
        _RESERVED_IDENTIFIER_FIXUP_3748 = _RESERVED_IDENTIFIER_FIXUP_3749;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2782 = (_RESERVED_IDENTIFIER_FIXUP_3748.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3688 = _RESERVED_IDENTIFIER_FIXUP_3748;
    _RESERVED_IDENTIFIER_FIXUP_3688.y = _RESERVED_IDENTIFIER_FIXUP_2782;
    _RESERVED_IDENTIFIER_FIXUP_3688.y = _RESERVED_IDENTIFIER_FIXUP_2782;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2795 = _RESERVED_IDENTIFIER_FIXUP_2027.xyz * _RESERVED_IDENTIFIER_FIXUP_3688.yyy;
    _RESERVED_IDENTIFIER_FIXUP_2027.x = _RESERVED_IDENTIFIER_FIXUP_2795.x;
    _RESERVED_IDENTIFIER_FIXUP_2027.y = _RESERVED_IDENTIFIER_FIXUP_2795.y;
    _RESERVED_IDENTIFIER_FIXUP_2027.z = _RESERVED_IDENTIFIER_FIXUP_2795.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2806 = _RESERVED_IDENTIFIER_FIXUP_2027.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3700 = _RESERVED_IDENTIFIER_FIXUP_2027;
    _RESERVED_IDENTIFIER_FIXUP_3700.x = _RESERVED_IDENTIFIER_FIXUP_2806.x;
    _RESERVED_IDENTIFIER_FIXUP_3700.y = _RESERVED_IDENTIFIER_FIXUP_2806.y;
    _RESERVED_IDENTIFIER_FIXUP_3700.z = _RESERVED_IDENTIFIER_FIXUP_2806.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2817 = _RESERVED_IDENTIFIER_FIXUP_3700.xyz + _RESERVED_IDENTIFIER_FIXUP_3700.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3706 = _RESERVED_IDENTIFIER_FIXUP_3700;
    _RESERVED_IDENTIFIER_FIXUP_3706.x = _RESERVED_IDENTIFIER_FIXUP_2817.x;
    _RESERVED_IDENTIFIER_FIXUP_3706.y = _RESERVED_IDENTIFIER_FIXUP_2817.y;
    _RESERVED_IDENTIFIER_FIXUP_3706.z = _RESERVED_IDENTIFIER_FIXUP_2817.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2828 = _RESERVED_IDENTIFIER_FIXUP_3706.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3688.y = _RESERVED_IDENTIFIER_FIXUP_2828.x;
    _RESERVED_IDENTIFIER_FIXUP_3688.z = _RESERVED_IDENTIFIER_FIXUP_2828.y;
    _RESERVED_IDENTIFIER_FIXUP_3688.w = _RESERVED_IDENTIFIER_FIXUP_2828.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2842 = (_RESERVED_IDENTIFIER_FIXUP_3688.yzw * _RESERVED_IDENTIFIER_FIXUP_3688.xxx) + _RESERVED_IDENTIFIER_FIXUP_3706.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3718 = _RESERVED_IDENTIFIER_FIXUP_3706;
    _RESERVED_IDENTIFIER_FIXUP_3718.x = _RESERVED_IDENTIFIER_FIXUP_2842.x;
    _RESERVED_IDENTIFIER_FIXUP_3718.y = _RESERVED_IDENTIFIER_FIXUP_2842.y;
    _RESERVED_IDENTIFIER_FIXUP_3718.z = _RESERVED_IDENTIFIER_FIXUP_2842.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2855 = _RESERVED_IDENTIFIER_FIXUP_3718.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3724 = _RESERVED_IDENTIFIER_FIXUP_3718;
    _RESERVED_IDENTIFIER_FIXUP_3724.x = _RESERVED_IDENTIFIER_FIXUP_2855.x;
    _RESERVED_IDENTIFIER_FIXUP_3724.y = _RESERVED_IDENTIFIER_FIXUP_2855.y;
    _RESERVED_IDENTIFIER_FIXUP_3724.z = _RESERVED_IDENTIFIER_FIXUP_2855.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3724.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1003 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1012;
    if (_RESERVED_IDENTIFIER_FIXUP_1003)
    {
        _RESERVED_IDENTIFIER_FIXUP_1012 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1012 = _RESERVED_IDENTIFIER_FIXUP_1003;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1012)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1049 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3315.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1076 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2914;
    if (_RESERVED_IDENTIFIER_FIXUP_1049 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2914 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1049), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1076);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2914 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1076);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2914;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2782);
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
    vec4 v3 = texcoord4;
    vec4 v4 = texcoord5;
    vec4 v5 = texcoord6;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    r1.x = max(abs(v3.x), abs(v3.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB97 = (v3.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB97.x;
        r1.y = hdB97.y;
        vec2 hdB118 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB118.x;
        r2.y = hdB118.y;
        vec2 hdB129 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB129.x;
        r3.y = hdB129.y;
        vec2 hdB140 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB140.x;
        r4.y = hdB140.y;
        vec2 hdB151 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB151.x;
        r5.y = hdB151.y;
        vec2 hdB162 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB162.x;
        r6.y = hdB162.y;
        vec2 hdB173 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB173.x;
        r7.y = hdB173.y;
        vec2 hdB184 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB184.x;
        r8.y = hdB184.y;
        vec4 hdB189 = r1;
        vec2 hdB195 = hdB189.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB195.x;
        r1.y = hdB195.y;
        r9 = (v3.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = r9.xy;
        float param_2 = r9.w;
        r9 = hdLod5(param_1, param_2);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_7 = r4.xy;
        float param_8 = r4.w;
        r4 = hdLod5(param_7, param_8);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_9 = r5.xy;
        float param_10 = r5.w;
        r5 = hdLod5(param_9, param_10);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_11 = r6.xy;
        float param_12 = r6.w;
        r6 = hdLod5(param_11, param_12);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_13 = r7.xy;
        float param_14 = r7.w;
        r7 = hdLod5(param_13, param_14);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_15 = r8.xy;
        float param_16 = r8.w;
        r8 = hdLod5(param_15, param_16);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_17 = r1.xy;
        float param_18 = r1.w;
        r1 = hdLod5(param_17, param_18);
        r9.y = r2.x;
        r9.z = r3.x;
        r9.w = r4.x;
        r2 = r9 + (-v3.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r3 = r5 + (-v3.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.x += (-v3.z);
        r1.x = float(r1.x >= 0.0);
        r1.y = dot(r2, vec4(1.0));
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.x += r1.y;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v4.x), abs(v4.y));
        if (r1.y < 1.0)
        {
            vec2 hdB383 = (v4.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB383.x;
            r1.z = hdB383.y;
            vec2 hdB393 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB393.x;
            r2.y = hdB393.y;
            vec2 hdB403 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB403.x;
            r3.y = hdB403.y;
            vec2 hdB413 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB413.x;
            r4.y = hdB413.y;
            vec2 hdB423 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB423.x;
            r5.y = hdB423.y;
            r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_19 = r6.xy;
            float param_20 = r6.w;
            r6 = hdLod6(param_19, param_20);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_21 = r2.xy;
            float param_22 = r2.w;
            r2 = hdLod6(param_21, param_22);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_23 = r3.xy;
            float param_24 = r3.w;
            r3 = hdLod6(param_23, param_24);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_25 = r4.xy;
            float param_26 = r4.w;
            r4 = hdLod6(param_25, param_26);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_27 = r5.xy;
            float param_28 = r5.w;
            r5 = hdLod6(param_27, param_28);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v4.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.y = r5.x + (-v4.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.y += r1.z;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v5.x), abs(v5.y));
            if (r1.y < 1.0)
            {
                vec2 hdB539 = (v5.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB539.x;
                r1.z = hdB539.y;
                vec2 hdB549 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB549.x;
                r2.y = hdB549.y;
                vec2 hdB559 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB559.x;
                r3.y = hdB559.y;
                vec2 hdB569 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB569.x;
                r4.y = hdB569.y;
                vec2 hdB579 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB579.x;
                r5.y = hdB579.y;
                r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_29 = r6.xy;
                float param_30 = r6.w;
                r6 = hdLod7(param_29, param_30);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_31 = r2.xy;
                float param_32 = r2.w;
                r2 = hdLod7(param_31, param_32);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_33 = r3.xy;
                float param_34 = r3.w;
                r3 = hdLod7(param_33, param_34);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_35 = r4.xy;
                float param_36 = r4.w;
                r4 = hdLod7(param_35, param_36);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_37 = r5.xy;
                float param_38 = r5.w;
                r5 = hdLod7(param_37, param_38);
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
                r2.x = v3.w;
                r2.y = v4.w;
                vec2 hdB687 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB687.x;
                r3.y = hdB687.y;
                vec2 hdB697 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB697.x;
                r4.y = hdB697.y;
                vec2 hdB707 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB707.x;
                r5.y = hdB707.y;
                vec2 hdB717 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB717.x;
                r6.y = hdB717.y;
                vec2 hdB727 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB727.x;
                r7.y = hdB727.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_39 = r3.xy;
                float param_40 = r3.w;
                r3 = hdLod8(param_39, param_40);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_41 = r4.xy;
                float param_42 = r4.w;
                r4 = hdLod8(param_41, param_42);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_43 = r5.xy;
                float param_44 = r5.w;
                r5 = hdLod8(param_43, param_44);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_45 = r6.xy;
                float param_46 = r6.w;
                r6 = hdLod8(param_45, param_46);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_47 = r7.xy;
                float param_48 = r7.w;
                r7 = hdLod8(param_47, param_48);
                r3.y = r4.x;
                r3.z = r5.x;
                r3.w = r6.x;
                r3 += (-v5.wwww);
                r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
                r1.y = r7.x + (-v5.w);
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
    vec4 hdB858 = r0;
    vec3 hdB862 = hdB858.xyz * r1.yyy;
    r0.x = hdB862.x;
    r0.y = hdB862.y;
    r0.z = hdB862.z;
    vec4 hdB869 = r0;
    vec3 hdB873 = hdB869.xyz * v0.xyz;
    r0.x = hdB873.x;
    r0.y = hdB873.y;
    r0.z = hdB873.z;
    vec4 hdB880 = r0;
    vec4 hdB882 = r0;
    vec3 hdB884 = hdB880.xyz + hdB882.xyz;
    r0.x = hdB884.x;
    r0.y = hdB884.y;
    r0.z = hdB884.z;
    vec3 hdB895 = r0.www * v1.xyz;
    r1.y = hdB895.x;
    r1.z = hdB895.y;
    r1.w = hdB895.z;
    vec4 hdB907 = r0;
    vec3 hdB909 = (r1.yzw * r1.xxx) + hdB907.xyz;
    r0.x = hdB909.x;
    r0.y = hdB909.y;
    r0.z = hdB909.z;
    vec4 hdB916 = r0;
    vec3 hdB923 = hdB916.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB923.x;
    r0.y = hdB923.y;
    r0.z = hdB923.z;
    vec3 hdB938 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB938.x;
    oC0.y = hdB938.y;
    oC0.z = hdB938.z;
    oC0.w = 1.0;
    bool hdB951 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB959;
    if (hdB951)
    {
        hdB959 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB959 = hdB951;
    }
    if (hdB959)
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
    bool _3145 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3155;
    if (_3145)
    {
        _3155 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 481u) != 0u;
    }
    else
    {
        _3155 = _3145;
    }
    if (_3155)
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
        bool _3180 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3195;
        if (!_3180)
        {
            _3195 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 481u) != 0u;
        }
        else
        {
            _3195 = _3180;
        }
        if (_3195)
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
