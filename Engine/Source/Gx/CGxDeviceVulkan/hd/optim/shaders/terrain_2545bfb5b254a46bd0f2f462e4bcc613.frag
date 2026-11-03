#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_3808;
vec4 _RESERVED_IDENTIFIER_FIXUP_3809;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _52 = hdOverride >= 0;
    bool _72;
    if (_52)
    {
        _72 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _72 = _52;
    }
    vec4 _73;
    if (_72)
    {
        _73 = vec4(float(hdOverride));
    }
    else
    {
        _73 = value;
    }
    return _73;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _91 = hdOverride >= 0;
    bool _101;
    if (_91)
    {
        _101 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _101 = _91;
    }
    vec4 _102;
    if (_101)
    {
        _102 = vec4(float(hdOverride));
    }
    else
    {
        _102 = value;
    }
    return _102;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _120 = hdOverride >= 0;
    bool _130;
    if (_120)
    {
        _130 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _130 = _120;
    }
    vec4 _131;
    if (_130)
    {
        _131 = vec4(float(hdOverride));
    }
    else
    {
        _131 = value;
    }
    return _131;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _149 = hdOverride >= 0;
    bool _159;
    if (_149)
    {
        _159 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _159 = _149;
    }
    vec4 _160;
    if (_159)
    {
        _160 = vec4(float(hdOverride));
    }
    else
    {
        _160 = value;
    }
    return _160;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1167 = OptTex0( texcoord0.xyz);
    float _RESERVED_IDENTIFIER_FIXUP_1170 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1173 = _RESERVED_IDENTIFIER_FIXUP_1167.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3834 = vec4(_RESERVED_IDENTIFIER_FIXUP_1170, _RESERVED_IDENTIFIER_FIXUP_1173 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3808).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1184 = _RESERVED_IDENTIFIER_FIXUP_3834.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1187 = _RESERVED_IDENTIFIER_FIXUP_1184 + _RESERVED_IDENTIFIER_FIXUP_1184;
    float _RESERVED_IDENTIFIER_FIXUP_1189 = _RESERVED_IDENTIFIER_FIXUP_1187.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2985 = _RESERVED_IDENTIFIER_FIXUP_3834;
    _RESERVED_IDENTIFIER_FIXUP_2985.y = _RESERVED_IDENTIFIER_FIXUP_1189;
    _RESERVED_IDENTIFIER_FIXUP_2985.z = _RESERVED_IDENTIFIER_FIXUP_1187.y;
    _RESERVED_IDENTIFIER_FIXUP_2985.w = _RESERVED_IDENTIFIER_FIXUP_1187.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1202 = mix(_RESERVED_IDENTIFIER_FIXUP_2985.yzw, _RESERVED_IDENTIFIER_FIXUP_1173, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2985.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2991 = _RESERVED_IDENTIFIER_FIXUP_1167;
    _RESERVED_IDENTIFIER_FIXUP_2991.x = _RESERVED_IDENTIFIER_FIXUP_1202.x;
    _RESERVED_IDENTIFIER_FIXUP_2991.y = _RESERVED_IDENTIFIER_FIXUP_1202.y;
    _RESERVED_IDENTIFIER_FIXUP_2991.z = _RESERVED_IDENTIFIER_FIXUP_1202.z;
    float _RESERVED_IDENTIFIER_FIXUP_1215 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3835 = vec4(_RESERVED_IDENTIFIER_FIXUP_1215, _RESERVED_IDENTIFIER_FIXUP_1189, _RESERVED_IDENTIFIER_FIXUP_1187.yz);
    float _RESERVED_IDENTIFIER_FIXUP_1221 = clamp((_RESERVED_IDENTIFIER_FIXUP_1215 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3835.x = _RESERVED_IDENTIFIER_FIXUP_1221;
    float _RESERVED_IDENTIFIER_FIXUP_1227 = ((-_RESERVED_IDENTIFIER_FIXUP_1221) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3835.x = _RESERVED_IDENTIFIER_FIXUP_1227;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3813;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3810;
    if (_RESERVED_IDENTIFIER_FIXUP_1227 != (-_RESERVED_IDENTIFIER_FIXUP_1227))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1239 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3238;
        _RESERVED_IDENTIFIER_FIXUP_3238.x = _RESERVED_IDENTIFIER_FIXUP_1239.x;
        _RESERVED_IDENTIFIER_FIXUP_3238.y = _RESERVED_IDENTIFIER_FIXUP_1239.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1249 = _RESERVED_IDENTIFIER_FIXUP_3238.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3242;
        _RESERVED_IDENTIFIER_FIXUP_3242.x = _RESERVED_IDENTIFIER_FIXUP_1249.x;
        _RESERVED_IDENTIFIER_FIXUP_3242.y = _RESERVED_IDENTIFIER_FIXUP_1249.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1259 = _RESERVED_IDENTIFIER_FIXUP_3238.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3246;
        _RESERVED_IDENTIFIER_FIXUP_3246.x = _RESERVED_IDENTIFIER_FIXUP_1259.x;
        _RESERVED_IDENTIFIER_FIXUP_3246.y = _RESERVED_IDENTIFIER_FIXUP_1259.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1269 = _RESERVED_IDENTIFIER_FIXUP_3238.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3250;
        _RESERVED_IDENTIFIER_FIXUP_3250.x = _RESERVED_IDENTIFIER_FIXUP_1269.x;
        _RESERVED_IDENTIFIER_FIXUP_3250.y = _RESERVED_IDENTIFIER_FIXUP_1269.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1279 = _RESERVED_IDENTIFIER_FIXUP_3238.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3254;
        _RESERVED_IDENTIFIER_FIXUP_3254.x = _RESERVED_IDENTIFIER_FIXUP_1279.x;
        _RESERVED_IDENTIFIER_FIXUP_3254.y = _RESERVED_IDENTIFIER_FIXUP_1279.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1289 = _RESERVED_IDENTIFIER_FIXUP_3238.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3258;
        _RESERVED_IDENTIFIER_FIXUP_3258.x = _RESERVED_IDENTIFIER_FIXUP_1289.x;
        _RESERVED_IDENTIFIER_FIXUP_3258.y = _RESERVED_IDENTIFIER_FIXUP_1289.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_3238.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3262;
        _RESERVED_IDENTIFIER_FIXUP_3262.x = _RESERVED_IDENTIFIER_FIXUP_1299.x;
        _RESERVED_IDENTIFIER_FIXUP_3262.y = _RESERVED_IDENTIFIER_FIXUP_1299.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_3238.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3266;
        _RESERVED_IDENTIFIER_FIXUP_3266.x = _RESERVED_IDENTIFIER_FIXUP_1309.x;
        _RESERVED_IDENTIFIER_FIXUP_3266.y = _RESERVED_IDENTIFIER_FIXUP_1309.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1319 = _RESERVED_IDENTIFIER_FIXUP_3238.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3270;
        _RESERVED_IDENTIFIER_FIXUP_3270.x = _RESERVED_IDENTIFIER_FIXUP_1319.x;
        _RESERVED_IDENTIFIER_FIXUP_3270.y = _RESERVED_IDENTIFIER_FIXUP_1319.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1327 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param = _RESERVED_IDENTIFIER_FIXUP_1327.xy;
        float param_1 = _RESERVED_IDENTIFIER_FIXUP_1327.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1333 = hdLod5(param, param_1);
        _RESERVED_IDENTIFIER_FIXUP_3242.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3246.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3250.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3254.w = 0.0;
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_3254.xy;
        float param_3 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1373 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_3258.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3262.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3266.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3270.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3270.xy;
        float param_5 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = hdLod5(param_4, param_5);
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3242.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1333.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3246.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1333.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3250.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1333.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1430 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1333 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3258.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1373.y = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3262.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1373.z = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3266.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1373.w = hdLod5(param_16, param_17).x;
        float _RESERVED_IDENTIFIER_FIXUP_1453 = _RESERVED_IDENTIFIER_FIXUP_1413.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3335 = _RESERVED_IDENTIFIER_FIXUP_1413;
        _RESERVED_IDENTIFIER_FIXUP_3335.x = _RESERVED_IDENTIFIER_FIXUP_1453;
        float _RESERVED_IDENTIFIER_FIXUP_1458 = float(_RESERVED_IDENTIFIER_FIXUP_1453 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3335.x = _RESERVED_IDENTIFIER_FIXUP_1458;
        float _RESERVED_IDENTIFIER_FIXUP_1461 = dot(_RESERVED_IDENTIFIER_FIXUP_1430, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3335.y = _RESERVED_IDENTIFIER_FIXUP_1461;
        float _RESERVED_IDENTIFIER_FIXUP_1464 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1373 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3335.z = _RESERVED_IDENTIFIER_FIXUP_1464;
        float _RESERVED_IDENTIFIER_FIXUP_1470 = _RESERVED_IDENTIFIER_FIXUP_1461 + _RESERVED_IDENTIFIER_FIXUP_1464;
        _RESERVED_IDENTIFIER_FIXUP_3335.y = _RESERVED_IDENTIFIER_FIXUP_1470;
        float _RESERVED_IDENTIFIER_FIXUP_1476 = _RESERVED_IDENTIFIER_FIXUP_1458 + _RESERVED_IDENTIFIER_FIXUP_1470;
        _RESERVED_IDENTIFIER_FIXUP_3335.x = _RESERVED_IDENTIFIER_FIXUP_1476;
        _RESERVED_IDENTIFIER_FIXUP_3335.x = _RESERVED_IDENTIFIER_FIXUP_1476 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3813 = _RESERVED_IDENTIFIER_FIXUP_1430;
        _RESERVED_IDENTIFIER_FIXUP_3810 = _RESERVED_IDENTIFIER_FIXUP_3335;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1489 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3835.y = _RESERVED_IDENTIFIER_FIXUP_1489;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3814;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3811;
        if (_RESERVED_IDENTIFIER_FIXUP_1489 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1498 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3172 = _RESERVED_IDENTIFIER_FIXUP_3835;
            _RESERVED_IDENTIFIER_FIXUP_3172.y = _RESERVED_IDENTIFIER_FIXUP_1498.x;
            _RESERVED_IDENTIFIER_FIXUP_3172.z = _RESERVED_IDENTIFIER_FIXUP_1498.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1508 = _RESERVED_IDENTIFIER_FIXUP_3172.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3176;
            _RESERVED_IDENTIFIER_FIXUP_3176.x = _RESERVED_IDENTIFIER_FIXUP_1508.x;
            _RESERVED_IDENTIFIER_FIXUP_3176.y = _RESERVED_IDENTIFIER_FIXUP_1508.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1518 = _RESERVED_IDENTIFIER_FIXUP_3172.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3180;
            _RESERVED_IDENTIFIER_FIXUP_3180.x = _RESERVED_IDENTIFIER_FIXUP_1518.x;
            _RESERVED_IDENTIFIER_FIXUP_3180.y = _RESERVED_IDENTIFIER_FIXUP_1518.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1528 = _RESERVED_IDENTIFIER_FIXUP_3172.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3184;
            _RESERVED_IDENTIFIER_FIXUP_3184.x = _RESERVED_IDENTIFIER_FIXUP_1528.x;
            _RESERVED_IDENTIFIER_FIXUP_3184.y = _RESERVED_IDENTIFIER_FIXUP_1528.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1538 = _RESERVED_IDENTIFIER_FIXUP_3172.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3188;
            _RESERVED_IDENTIFIER_FIXUP_3188.x = _RESERVED_IDENTIFIER_FIXUP_1538.x;
            _RESERVED_IDENTIFIER_FIXUP_3188.y = _RESERVED_IDENTIFIER_FIXUP_1538.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1546 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1546.xy;
            float param_19 = _RESERVED_IDENTIFIER_FIXUP_1546.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1552 = hdLod6(param_18, param_19);
            _RESERVED_IDENTIFIER_FIXUP_3176.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3180.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3184.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3188.w = 0.0;
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3176.xy;
            float param_21 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1552.y = hdLod6(param_20, param_21).x;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3180.xy;
            float param_23 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1552.z = hdLod6(param_22, param_23).x;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3184.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1552.w = hdLod6(param_24, param_25).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1609 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1552 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3188.xy;
            float param_27 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1615 = hdLod6(param_26, param_27).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3172.y = _RESERVED_IDENTIFIER_FIXUP_1615;
            float _RESERVED_IDENTIFIER_FIXUP_1620 = float(_RESERVED_IDENTIFIER_FIXUP_1615 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3172.y = _RESERVED_IDENTIFIER_FIXUP_1620;
            float _RESERVED_IDENTIFIER_FIXUP_1623 = dot(_RESERVED_IDENTIFIER_FIXUP_1609, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3172.z = _RESERVED_IDENTIFIER_FIXUP_1623;
            float _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_1620 + _RESERVED_IDENTIFIER_FIXUP_1623;
            _RESERVED_IDENTIFIER_FIXUP_3172.y = _RESERVED_IDENTIFIER_FIXUP_1629;
            _RESERVED_IDENTIFIER_FIXUP_3172.x = _RESERVED_IDENTIFIER_FIXUP_1629 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3814 = _RESERVED_IDENTIFIER_FIXUP_1609;
            _RESERVED_IDENTIFIER_FIXUP_3811 = _RESERVED_IDENTIFIER_FIXUP_3172;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1642 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3016 = _RESERVED_IDENTIFIER_FIXUP_3835;
            _RESERVED_IDENTIFIER_FIXUP_3016.y = _RESERVED_IDENTIFIER_FIXUP_1642;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3815;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3812;
            if (_RESERVED_IDENTIFIER_FIXUP_1642 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1651 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3106 = _RESERVED_IDENTIFIER_FIXUP_3016;
                _RESERVED_IDENTIFIER_FIXUP_3106.y = _RESERVED_IDENTIFIER_FIXUP_1651.x;
                _RESERVED_IDENTIFIER_FIXUP_3106.z = _RESERVED_IDENTIFIER_FIXUP_1651.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1661 = _RESERVED_IDENTIFIER_FIXUP_3106.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3110;
                _RESERVED_IDENTIFIER_FIXUP_3110.x = _RESERVED_IDENTIFIER_FIXUP_1661.x;
                _RESERVED_IDENTIFIER_FIXUP_3110.y = _RESERVED_IDENTIFIER_FIXUP_1661.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1671 = _RESERVED_IDENTIFIER_FIXUP_3106.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3114;
                _RESERVED_IDENTIFIER_FIXUP_3114.x = _RESERVED_IDENTIFIER_FIXUP_1671.x;
                _RESERVED_IDENTIFIER_FIXUP_3114.y = _RESERVED_IDENTIFIER_FIXUP_1671.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1681 = _RESERVED_IDENTIFIER_FIXUP_3106.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3118;
                _RESERVED_IDENTIFIER_FIXUP_3118.x = _RESERVED_IDENTIFIER_FIXUP_1681.x;
                _RESERVED_IDENTIFIER_FIXUP_3118.y = _RESERVED_IDENTIFIER_FIXUP_1681.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1691 = _RESERVED_IDENTIFIER_FIXUP_3106.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3122;
                _RESERVED_IDENTIFIER_FIXUP_3122.x = _RESERVED_IDENTIFIER_FIXUP_1691.x;
                _RESERVED_IDENTIFIER_FIXUP_3122.y = _RESERVED_IDENTIFIER_FIXUP_1691.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1699 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_1699.xy;
                float param_29 = _RESERVED_IDENTIFIER_FIXUP_1699.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1705 = hdLod7(param_28, param_29);
                _RESERVED_IDENTIFIER_FIXUP_3110.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3114.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3118.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3122.w = 0.0;
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3110.xy;
                float param_31 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1705.y = hdLod7(param_30, param_31).x;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3114.xy;
                float param_33 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1705.z = hdLod7(param_32, param_33).x;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3118.xy;
                float param_35 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1705.w = hdLod7(param_34, param_35).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1762 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1705 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3122.xy;
                float param_37 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1768 = hdLod7(param_36, param_37).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3106.y = _RESERVED_IDENTIFIER_FIXUP_1768;
                float _RESERVED_IDENTIFIER_FIXUP_1773 = float(_RESERVED_IDENTIFIER_FIXUP_1768 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3106.y = _RESERVED_IDENTIFIER_FIXUP_1773;
                float _RESERVED_IDENTIFIER_FIXUP_1776 = dot(_RESERVED_IDENTIFIER_FIXUP_1762, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3106.z = _RESERVED_IDENTIFIER_FIXUP_1776;
                float _RESERVED_IDENTIFIER_FIXUP_1782 = _RESERVED_IDENTIFIER_FIXUP_1773 + _RESERVED_IDENTIFIER_FIXUP_1776;
                _RESERVED_IDENTIFIER_FIXUP_3106.y = _RESERVED_IDENTIFIER_FIXUP_1782;
                _RESERVED_IDENTIFIER_FIXUP_3106.x = _RESERVED_IDENTIFIER_FIXUP_1782 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3815 = _RESERVED_IDENTIFIER_FIXUP_1762;
                _RESERVED_IDENTIFIER_FIXUP_3812 = _RESERVED_IDENTIFIER_FIXUP_3106;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3020 = vec4(0.0);
                _RESERVED_IDENTIFIER_FIXUP_3020.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3020.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1798 = (_RESERVED_IDENTIFIER_FIXUP_3020.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3025;
                _RESERVED_IDENTIFIER_FIXUP_3025.x = _RESERVED_IDENTIFIER_FIXUP_1798.x;
                _RESERVED_IDENTIFIER_FIXUP_3025.y = _RESERVED_IDENTIFIER_FIXUP_1798.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1808 = _RESERVED_IDENTIFIER_FIXUP_3025.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3029;
                _RESERVED_IDENTIFIER_FIXUP_3029.x = _RESERVED_IDENTIFIER_FIXUP_1808.x;
                _RESERVED_IDENTIFIER_FIXUP_3029.y = _RESERVED_IDENTIFIER_FIXUP_1808.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1818 = _RESERVED_IDENTIFIER_FIXUP_3025.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3033;
                _RESERVED_IDENTIFIER_FIXUP_3033.x = _RESERVED_IDENTIFIER_FIXUP_1818.x;
                _RESERVED_IDENTIFIER_FIXUP_3033.y = _RESERVED_IDENTIFIER_FIXUP_1818.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1828 = _RESERVED_IDENTIFIER_FIXUP_3025.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3037;
                _RESERVED_IDENTIFIER_FIXUP_3037.x = _RESERVED_IDENTIFIER_FIXUP_1828.x;
                _RESERVED_IDENTIFIER_FIXUP_3037.y = _RESERVED_IDENTIFIER_FIXUP_1828.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1838 = _RESERVED_IDENTIFIER_FIXUP_3025.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3041;
                _RESERVED_IDENTIFIER_FIXUP_3041.x = _RESERVED_IDENTIFIER_FIXUP_1838.x;
                _RESERVED_IDENTIFIER_FIXUP_3041.y = _RESERVED_IDENTIFIER_FIXUP_1838.y;
                _RESERVED_IDENTIFIER_FIXUP_3025.w = 0.0;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3025.xy;
                float param_39 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1852 = hdLod8(param_38, param_39);
                _RESERVED_IDENTIFIER_FIXUP_3029.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3033.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3037.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3041.w = 0.0;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3029.xy;
                float param_41 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1852.y = hdLod8(param_40, param_41).x;
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3033.xy;
                float param_43 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1852.z = hdLod8(param_42, param_43).x;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3037.xy;
                float param_45 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1852.w = hdLod8(param_44, param_45).x;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3041.xy;
                float param_47 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1915 = hdLod8(param_46, param_47).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3081 = _RESERVED_IDENTIFIER_FIXUP_3016;
                _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1915;
                float _RESERVED_IDENTIFIER_FIXUP_1920 = float(_RESERVED_IDENTIFIER_FIXUP_1915 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1920;
                float _RESERVED_IDENTIFIER_FIXUP_1923 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1852 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3081.z = _RESERVED_IDENTIFIER_FIXUP_1923;
                float _RESERVED_IDENTIFIER_FIXUP_1929 = _RESERVED_IDENTIFIER_FIXUP_1920 + _RESERVED_IDENTIFIER_FIXUP_1923;
                _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1929;
                float _RESERVED_IDENTIFIER_FIXUP_1937 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3081.z = _RESERVED_IDENTIFIER_FIXUP_1937;
                float _RESERVED_IDENTIFIER_FIXUP_1943 = clamp((_RESERVED_IDENTIFIER_FIXUP_1937 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3081.z = _RESERVED_IDENTIFIER_FIXUP_1943;
                float _RESERVED_IDENTIFIER_FIXUP_1948 = (_RESERVED_IDENTIFIER_FIXUP_1929 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1948;
                _RESERVED_IDENTIFIER_FIXUP_3081.x = (_RESERVED_IDENTIFIER_FIXUP_1943 * _RESERVED_IDENTIFIER_FIXUP_1948) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3815 = _RESERVED_IDENTIFIER_FIXUP_3020;
                _RESERVED_IDENTIFIER_FIXUP_3812 = _RESERVED_IDENTIFIER_FIXUP_3081;
            }
            _RESERVED_IDENTIFIER_FIXUP_3814 = _RESERVED_IDENTIFIER_FIXUP_3815;
            _RESERVED_IDENTIFIER_FIXUP_3811 = _RESERVED_IDENTIFIER_FIXUP_3812;
        }
        _RESERVED_IDENTIFIER_FIXUP_3813 = _RESERVED_IDENTIFIER_FIXUP_3814;
        _RESERVED_IDENTIFIER_FIXUP_3810 = _RESERVED_IDENTIFIER_FIXUP_3811;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3358 = _RESERVED_IDENTIFIER_FIXUP_3810;
    _RESERVED_IDENTIFIER_FIXUP_3358.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3360 = _RESERVED_IDENTIFIER_FIXUP_3813;
    _RESERVED_IDENTIFIER_FIXUP_3360.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3360.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3360.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1987 = _RESERVED_IDENTIFIER_FIXUP_3358.xxx * _RESERVED_IDENTIFIER_FIXUP_3360.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3836 = vec4(_RESERVED_IDENTIFIER_FIXUP_1987.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_1987.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2001 = (_RESERVED_IDENTIFIER_FIXUP_2991.xyz * _RESERVED_IDENTIFIER_FIXUP_3836.yyy) + _RESERVED_IDENTIFIER_FIXUP_3836.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3372 = _RESERVED_IDENTIFIER_FIXUP_2991;
    _RESERVED_IDENTIFIER_FIXUP_3372.x = _RESERVED_IDENTIFIER_FIXUP_2001.x;
    _RESERVED_IDENTIFIER_FIXUP_3372.y = _RESERVED_IDENTIFIER_FIXUP_2001.y;
    _RESERVED_IDENTIFIER_FIXUP_3372.z = _RESERVED_IDENTIFIER_FIXUP_2001.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2014 = _RESERVED_IDENTIFIER_FIXUP_3372.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3378 = _RESERVED_IDENTIFIER_FIXUP_3372;
    _RESERVED_IDENTIFIER_FIXUP_3378.x = _RESERVED_IDENTIFIER_FIXUP_2014.x;
    _RESERVED_IDENTIFIER_FIXUP_3378.y = _RESERVED_IDENTIFIER_FIXUP_2014.y;
    _RESERVED_IDENTIFIER_FIXUP_3378.z = _RESERVED_IDENTIFIER_FIXUP_2014.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2069 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2075 = _RESERVED_IDENTIFIER_FIXUP_2069.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3838 = vec4(_RESERVED_IDENTIFIER_FIXUP_1170, _RESERVED_IDENTIFIER_FIXUP_2075 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2086 = _RESERVED_IDENTIFIER_FIXUP_3838.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2089 = _RESERVED_IDENTIFIER_FIXUP_2086 + _RESERVED_IDENTIFIER_FIXUP_2086;
    float _RESERVED_IDENTIFIER_FIXUP_2091 = _RESERVED_IDENTIFIER_FIXUP_2089.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3400 = _RESERVED_IDENTIFIER_FIXUP_3838;
    _RESERVED_IDENTIFIER_FIXUP_3400.y = _RESERVED_IDENTIFIER_FIXUP_2091;
    _RESERVED_IDENTIFIER_FIXUP_3400.z = _RESERVED_IDENTIFIER_FIXUP_2089.y;
    _RESERVED_IDENTIFIER_FIXUP_3400.w = _RESERVED_IDENTIFIER_FIXUP_2089.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2104 = mix(_RESERVED_IDENTIFIER_FIXUP_3400.yzw, _RESERVED_IDENTIFIER_FIXUP_2075, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3400.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3406 = _RESERVED_IDENTIFIER_FIXUP_2069;
    _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_2104.x;
    _RESERVED_IDENTIFIER_FIXUP_3406.y = _RESERVED_IDENTIFIER_FIXUP_2104.y;
    _RESERVED_IDENTIFIER_FIXUP_3406.z = _RESERVED_IDENTIFIER_FIXUP_2104.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3839 = vec4(_RESERVED_IDENTIFIER_FIXUP_1215, _RESERVED_IDENTIFIER_FIXUP_2091, _RESERVED_IDENTIFIER_FIXUP_2089.yz);
    float _RESERVED_IDENTIFIER_FIXUP_2123 = clamp((_RESERVED_IDENTIFIER_FIXUP_1215 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3839.x = _RESERVED_IDENTIFIER_FIXUP_2123;
    float _RESERVED_IDENTIFIER_FIXUP_2129 = ((-_RESERVED_IDENTIFIER_FIXUP_2123) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3839.x = _RESERVED_IDENTIFIER_FIXUP_2129;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3828;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3822;
    if (_RESERVED_IDENTIFIER_FIXUP_2129 != (-_RESERVED_IDENTIFIER_FIXUP_2129))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2141 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3653;
        _RESERVED_IDENTIFIER_FIXUP_3653.x = _RESERVED_IDENTIFIER_FIXUP_2141.x;
        _RESERVED_IDENTIFIER_FIXUP_3653.y = _RESERVED_IDENTIFIER_FIXUP_2141.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2151 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3657;
        _RESERVED_IDENTIFIER_FIXUP_3657.x = _RESERVED_IDENTIFIER_FIXUP_2151.x;
        _RESERVED_IDENTIFIER_FIXUP_3657.y = _RESERVED_IDENTIFIER_FIXUP_2151.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2161 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3661;
        _RESERVED_IDENTIFIER_FIXUP_3661.x = _RESERVED_IDENTIFIER_FIXUP_2161.x;
        _RESERVED_IDENTIFIER_FIXUP_3661.y = _RESERVED_IDENTIFIER_FIXUP_2161.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2171 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3665;
        _RESERVED_IDENTIFIER_FIXUP_3665.x = _RESERVED_IDENTIFIER_FIXUP_2171.x;
        _RESERVED_IDENTIFIER_FIXUP_3665.y = _RESERVED_IDENTIFIER_FIXUP_2171.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2181 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3669;
        _RESERVED_IDENTIFIER_FIXUP_3669.x = _RESERVED_IDENTIFIER_FIXUP_2181.x;
        _RESERVED_IDENTIFIER_FIXUP_3669.y = _RESERVED_IDENTIFIER_FIXUP_2181.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2191 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3673;
        _RESERVED_IDENTIFIER_FIXUP_3673.x = _RESERVED_IDENTIFIER_FIXUP_2191.x;
        _RESERVED_IDENTIFIER_FIXUP_3673.y = _RESERVED_IDENTIFIER_FIXUP_2191.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2201 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3677;
        _RESERVED_IDENTIFIER_FIXUP_3677.x = _RESERVED_IDENTIFIER_FIXUP_2201.x;
        _RESERVED_IDENTIFIER_FIXUP_3677.y = _RESERVED_IDENTIFIER_FIXUP_2201.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2211 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3681;
        _RESERVED_IDENTIFIER_FIXUP_3681.x = _RESERVED_IDENTIFIER_FIXUP_2211.x;
        _RESERVED_IDENTIFIER_FIXUP_3681.y = _RESERVED_IDENTIFIER_FIXUP_2211.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2221 = _RESERVED_IDENTIFIER_FIXUP_3653.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3685;
        _RESERVED_IDENTIFIER_FIXUP_3685.x = _RESERVED_IDENTIFIER_FIXUP_2221.x;
        _RESERVED_IDENTIFIER_FIXUP_3685.y = _RESERVED_IDENTIFIER_FIXUP_2221.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2229 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2229.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2229.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2235 = hdLod5(param_48, param_49);
        _RESERVED_IDENTIFIER_FIXUP_3657.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3661.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3665.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3669.w = 0.0;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3669.xy;
        float param_51 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2275 = hdLod5(param_50, param_51);
        _RESERVED_IDENTIFIER_FIXUP_3673.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3677.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3681.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3685.w = 0.0;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3685.xy;
        float param_53 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2315 = hdLod5(param_52, param_53);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3657.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2235.y = hdLod5(param_54, param_55).x;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3661.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2235.z = hdLod5(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3665.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2235.w = hdLod5(param_58, param_59).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2332 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2235 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3673.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2275.y = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3677.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2275.z = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3681.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2275.w = hdLod5(param_64, param_65).x;
        float _RESERVED_IDENTIFIER_FIXUP_2355 = _RESERVED_IDENTIFIER_FIXUP_2315.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3750 = _RESERVED_IDENTIFIER_FIXUP_2315;
        _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2355;
        float _RESERVED_IDENTIFIER_FIXUP_2360 = float(_RESERVED_IDENTIFIER_FIXUP_2355 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2360;
        float _RESERVED_IDENTIFIER_FIXUP_2363 = dot(_RESERVED_IDENTIFIER_FIXUP_2332, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_2363;
        float _RESERVED_IDENTIFIER_FIXUP_2366 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2275 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3750.z = _RESERVED_IDENTIFIER_FIXUP_2366;
        float _RESERVED_IDENTIFIER_FIXUP_2372 = _RESERVED_IDENTIFIER_FIXUP_2363 + _RESERVED_IDENTIFIER_FIXUP_2366;
        _RESERVED_IDENTIFIER_FIXUP_3750.y = _RESERVED_IDENTIFIER_FIXUP_2372;
        float _RESERVED_IDENTIFIER_FIXUP_2378 = _RESERVED_IDENTIFIER_FIXUP_2360 + _RESERVED_IDENTIFIER_FIXUP_2372;
        _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2378;
        _RESERVED_IDENTIFIER_FIXUP_3750.x = _RESERVED_IDENTIFIER_FIXUP_2378 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3828 = _RESERVED_IDENTIFIER_FIXUP_2332;
        _RESERVED_IDENTIFIER_FIXUP_3822 = _RESERVED_IDENTIFIER_FIXUP_3750;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2391 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3839.y = _RESERVED_IDENTIFIER_FIXUP_2391;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3829;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3823;
        if (_RESERVED_IDENTIFIER_FIXUP_2391 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2400 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3587 = _RESERVED_IDENTIFIER_FIXUP_3839;
            _RESERVED_IDENTIFIER_FIXUP_3587.y = _RESERVED_IDENTIFIER_FIXUP_2400.x;
            _RESERVED_IDENTIFIER_FIXUP_3587.z = _RESERVED_IDENTIFIER_FIXUP_2400.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2410 = _RESERVED_IDENTIFIER_FIXUP_3587.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3591;
            _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2410.x;
            _RESERVED_IDENTIFIER_FIXUP_3591.y = _RESERVED_IDENTIFIER_FIXUP_2410.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2420 = _RESERVED_IDENTIFIER_FIXUP_3587.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3595;
            _RESERVED_IDENTIFIER_FIXUP_3595.x = _RESERVED_IDENTIFIER_FIXUP_2420.x;
            _RESERVED_IDENTIFIER_FIXUP_3595.y = _RESERVED_IDENTIFIER_FIXUP_2420.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2430 = _RESERVED_IDENTIFIER_FIXUP_3587.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3599;
            _RESERVED_IDENTIFIER_FIXUP_3599.x = _RESERVED_IDENTIFIER_FIXUP_2430.x;
            _RESERVED_IDENTIFIER_FIXUP_3599.y = _RESERVED_IDENTIFIER_FIXUP_2430.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2440 = _RESERVED_IDENTIFIER_FIXUP_3587.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3603;
            _RESERVED_IDENTIFIER_FIXUP_3603.x = _RESERVED_IDENTIFIER_FIXUP_2440.x;
            _RESERVED_IDENTIFIER_FIXUP_3603.y = _RESERVED_IDENTIFIER_FIXUP_2440.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2448 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2448.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2448.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2454 = hdLod6(param_66, param_67);
            _RESERVED_IDENTIFIER_FIXUP_3591.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3595.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3599.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3603.w = 0.0;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3591.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2454.y = hdLod6(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3595.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2454.z = hdLod6(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3599.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2454.w = hdLod6(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2511 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2454 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3603.xy;
            float param_75 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2517 = hdLod6(param_74, param_75).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3587.y = _RESERVED_IDENTIFIER_FIXUP_2517;
            float _RESERVED_IDENTIFIER_FIXUP_2522 = float(_RESERVED_IDENTIFIER_FIXUP_2517 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3587.y = _RESERVED_IDENTIFIER_FIXUP_2522;
            float _RESERVED_IDENTIFIER_FIXUP_2525 = dot(_RESERVED_IDENTIFIER_FIXUP_2511, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3587.z = _RESERVED_IDENTIFIER_FIXUP_2525;
            float _RESERVED_IDENTIFIER_FIXUP_2531 = _RESERVED_IDENTIFIER_FIXUP_2522 + _RESERVED_IDENTIFIER_FIXUP_2525;
            _RESERVED_IDENTIFIER_FIXUP_3587.y = _RESERVED_IDENTIFIER_FIXUP_2531;
            _RESERVED_IDENTIFIER_FIXUP_3587.x = _RESERVED_IDENTIFIER_FIXUP_2531 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3829 = _RESERVED_IDENTIFIER_FIXUP_2511;
            _RESERVED_IDENTIFIER_FIXUP_3823 = _RESERVED_IDENTIFIER_FIXUP_3587;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2544 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3431 = _RESERVED_IDENTIFIER_FIXUP_3839;
            _RESERVED_IDENTIFIER_FIXUP_3431.y = _RESERVED_IDENTIFIER_FIXUP_2544;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3830;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3824;
            if (_RESERVED_IDENTIFIER_FIXUP_2544 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2553 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3521 = _RESERVED_IDENTIFIER_FIXUP_3431;
                _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2553.x;
                _RESERVED_IDENTIFIER_FIXUP_3521.z = _RESERVED_IDENTIFIER_FIXUP_2553.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2563 = _RESERVED_IDENTIFIER_FIXUP_3521.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3525;
                _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2563.x;
                _RESERVED_IDENTIFIER_FIXUP_3525.y = _RESERVED_IDENTIFIER_FIXUP_2563.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2573 = _RESERVED_IDENTIFIER_FIXUP_3521.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3529;
                _RESERVED_IDENTIFIER_FIXUP_3529.x = _RESERVED_IDENTIFIER_FIXUP_2573.x;
                _RESERVED_IDENTIFIER_FIXUP_3529.y = _RESERVED_IDENTIFIER_FIXUP_2573.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2583 = _RESERVED_IDENTIFIER_FIXUP_3521.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3533;
                _RESERVED_IDENTIFIER_FIXUP_3533.x = _RESERVED_IDENTIFIER_FIXUP_2583.x;
                _RESERVED_IDENTIFIER_FIXUP_3533.y = _RESERVED_IDENTIFIER_FIXUP_2583.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2593 = _RESERVED_IDENTIFIER_FIXUP_3521.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3537;
                _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_2593.x;
                _RESERVED_IDENTIFIER_FIXUP_3537.y = _RESERVED_IDENTIFIER_FIXUP_2593.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2601 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2601.xy;
                float param_77 = _RESERVED_IDENTIFIER_FIXUP_2601.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2607 = hdLod7(param_76, param_77);
                _RESERVED_IDENTIFIER_FIXUP_3525.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3529.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3533.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3537.w = 0.0;
                vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3525.xy;
                float param_79 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2607.y = hdLod7(param_78, param_79).x;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3529.xy;
                float param_81 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2607.z = hdLod7(param_80, param_81).x;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3533.xy;
                float param_83 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2607.w = hdLod7(param_82, param_83).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2664 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2607 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3537.xy;
                float param_85 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2670 = hdLod7(param_84, param_85).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2670;
                float _RESERVED_IDENTIFIER_FIXUP_2675 = float(_RESERVED_IDENTIFIER_FIXUP_2670 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2675;
                float _RESERVED_IDENTIFIER_FIXUP_2678 = dot(_RESERVED_IDENTIFIER_FIXUP_2664, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3521.z = _RESERVED_IDENTIFIER_FIXUP_2678;
                float _RESERVED_IDENTIFIER_FIXUP_2684 = _RESERVED_IDENTIFIER_FIXUP_2675 + _RESERVED_IDENTIFIER_FIXUP_2678;
                _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2684;
                _RESERVED_IDENTIFIER_FIXUP_3521.x = _RESERVED_IDENTIFIER_FIXUP_2684 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3830 = _RESERVED_IDENTIFIER_FIXUP_2664;
                _RESERVED_IDENTIFIER_FIXUP_3824 = _RESERVED_IDENTIFIER_FIXUP_3521;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3435 = vec4(0.0);
                _RESERVED_IDENTIFIER_FIXUP_3435.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3435.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2700 = (_RESERVED_IDENTIFIER_FIXUP_3435.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3440;
                _RESERVED_IDENTIFIER_FIXUP_3440.x = _RESERVED_IDENTIFIER_FIXUP_2700.x;
                _RESERVED_IDENTIFIER_FIXUP_3440.y = _RESERVED_IDENTIFIER_FIXUP_2700.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2710 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3444;
                _RESERVED_IDENTIFIER_FIXUP_3444.x = _RESERVED_IDENTIFIER_FIXUP_2710.x;
                _RESERVED_IDENTIFIER_FIXUP_3444.y = _RESERVED_IDENTIFIER_FIXUP_2710.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2720 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3448;
                _RESERVED_IDENTIFIER_FIXUP_3448.x = _RESERVED_IDENTIFIER_FIXUP_2720.x;
                _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_2720.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2730 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3452;
                _RESERVED_IDENTIFIER_FIXUP_3452.x = _RESERVED_IDENTIFIER_FIXUP_2730.x;
                _RESERVED_IDENTIFIER_FIXUP_3452.y = _RESERVED_IDENTIFIER_FIXUP_2730.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2740 = _RESERVED_IDENTIFIER_FIXUP_3440.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3456;
                _RESERVED_IDENTIFIER_FIXUP_3456.x = _RESERVED_IDENTIFIER_FIXUP_2740.x;
                _RESERVED_IDENTIFIER_FIXUP_3456.y = _RESERVED_IDENTIFIER_FIXUP_2740.y;
                _RESERVED_IDENTIFIER_FIXUP_3440.w = 0.0;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3440.xy;
                float param_87 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2754 = hdLod8(param_86, param_87);
                _RESERVED_IDENTIFIER_FIXUP_3444.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3448.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3452.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3456.w = 0.0;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3444.xy;
                float param_89 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2754.y = hdLod8(param_88, param_89).x;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3448.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2754.z = hdLod8(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3452.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2754.w = hdLod8(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3456.xy;
                float param_95 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2817 = hdLod8(param_94, param_95).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3496 = _RESERVED_IDENTIFIER_FIXUP_3431;
                _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2817;
                float _RESERVED_IDENTIFIER_FIXUP_2822 = float(_RESERVED_IDENTIFIER_FIXUP_2817 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2822;
                float _RESERVED_IDENTIFIER_FIXUP_2825 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2754 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3496.z = _RESERVED_IDENTIFIER_FIXUP_2825;
                float _RESERVED_IDENTIFIER_FIXUP_2831 = _RESERVED_IDENTIFIER_FIXUP_2822 + _RESERVED_IDENTIFIER_FIXUP_2825;
                _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2831;
                float _RESERVED_IDENTIFIER_FIXUP_2839 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3496.z = _RESERVED_IDENTIFIER_FIXUP_2839;
                float _RESERVED_IDENTIFIER_FIXUP_2845 = clamp((_RESERVED_IDENTIFIER_FIXUP_2839 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3496.z = _RESERVED_IDENTIFIER_FIXUP_2845;
                float _RESERVED_IDENTIFIER_FIXUP_2850 = (_RESERVED_IDENTIFIER_FIXUP_2831 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2850;
                _RESERVED_IDENTIFIER_FIXUP_3496.x = (_RESERVED_IDENTIFIER_FIXUP_2845 * _RESERVED_IDENTIFIER_FIXUP_2850) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3830 = _RESERVED_IDENTIFIER_FIXUP_3435;
                _RESERVED_IDENTIFIER_FIXUP_3824 = _RESERVED_IDENTIFIER_FIXUP_3496;
            }
            _RESERVED_IDENTIFIER_FIXUP_3829 = _RESERVED_IDENTIFIER_FIXUP_3830;
            _RESERVED_IDENTIFIER_FIXUP_3823 = _RESERVED_IDENTIFIER_FIXUP_3824;
        }
        _RESERVED_IDENTIFIER_FIXUP_3828 = _RESERVED_IDENTIFIER_FIXUP_3829;
        _RESERVED_IDENTIFIER_FIXUP_3822 = _RESERVED_IDENTIFIER_FIXUP_3823;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2865 = (_RESERVED_IDENTIFIER_FIXUP_3822.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3771 = _RESERVED_IDENTIFIER_FIXUP_3822;
    _RESERVED_IDENTIFIER_FIXUP_3771.y = _RESERVED_IDENTIFIER_FIXUP_2865;
    _RESERVED_IDENTIFIER_FIXUP_3771.y = _RESERVED_IDENTIFIER_FIXUP_2865;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2878 = _RESERVED_IDENTIFIER_FIXUP_3406.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3777 = _RESERVED_IDENTIFIER_FIXUP_3828;
    _RESERVED_IDENTIFIER_FIXUP_3777.x = _RESERVED_IDENTIFIER_FIXUP_2878.x;
    _RESERVED_IDENTIFIER_FIXUP_3777.y = _RESERVED_IDENTIFIER_FIXUP_2878.y;
    _RESERVED_IDENTIFIER_FIXUP_3777.z = _RESERVED_IDENTIFIER_FIXUP_2878.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2889 = _RESERVED_IDENTIFIER_FIXUP_3771.xxx * _RESERVED_IDENTIFIER_FIXUP_3777.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3840 = vec4(_RESERVED_IDENTIFIER_FIXUP_2889.x, _RESERVED_IDENTIFIER_FIXUP_2865, _RESERVED_IDENTIFIER_FIXUP_2889.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2903 = (_RESERVED_IDENTIFIER_FIXUP_3406.xyz * _RESERVED_IDENTIFIER_FIXUP_3840.yyy) + _RESERVED_IDENTIFIER_FIXUP_3840.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3789 = _RESERVED_IDENTIFIER_FIXUP_3406;
    _RESERVED_IDENTIFIER_FIXUP_3789.x = _RESERVED_IDENTIFIER_FIXUP_2903.x;
    _RESERVED_IDENTIFIER_FIXUP_3789.y = _RESERVED_IDENTIFIER_FIXUP_2903.y;
    _RESERVED_IDENTIFIER_FIXUP_3789.z = _RESERVED_IDENTIFIER_FIXUP_2903.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2916 = _RESERVED_IDENTIFIER_FIXUP_3789.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3795 = _RESERVED_IDENTIFIER_FIXUP_3789;
    _RESERVED_IDENTIFIER_FIXUP_3795.x = _RESERVED_IDENTIFIER_FIXUP_2916.x;
    _RESERVED_IDENTIFIER_FIXUP_3795.y = _RESERVED_IDENTIFIER_FIXUP_2916.y;
    _RESERVED_IDENTIFIER_FIXUP_3795.z = _RESERVED_IDENTIFIER_FIXUP_2916.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3795.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1027 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1036;
    if (_RESERVED_IDENTIFIER_FIXUP_1027)
    {
        _RESERVED_IDENTIFIER_FIXUP_1036 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1036 = _RESERVED_IDENTIFIER_FIXUP_1027;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1036)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1073 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3378.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1099 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2969;
    if (_RESERVED_IDENTIFIER_FIXUP_1073 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2969 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1073), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1099);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2969 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1099);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2969;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2865);
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
    r0 = OptTex0( v2.xyz);
    r1.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 hdB78 = r0.xyz * v0.xyz;
    r1.y = hdB78.x;
    r1.z = hdB78.y;
    r1.w = hdB78.z;
    vec4 hdB88 = r1;
    vec4 hdB90 = r1;
    vec3 hdB92 = hdB88.yzw + hdB90.yzw;
    r1.y = hdB92.x;
    r1.z = hdB92.y;
    r1.w = hdB92.z;
    vec4 hdB101 = r0;
    vec3 hdB110 = mix(r1.yzw, hdB101.xyz, greaterThanEqual(-r1.xxx, vec3(0.0)));
    r0.x = hdB110.x;
    r0.y = hdB110.y;
    r0.z = hdB110.z;
    r1.x = max(abs(v3.x), abs(v3.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB154 = (v3.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB154.x;
        r1.y = hdB154.y;
        vec2 hdB166 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB166.x;
        r2.y = hdB166.y;
        vec2 hdB177 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB177.x;
        r3.y = hdB177.y;
        vec2 hdB188 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB188.x;
        r4.y = hdB188.y;
        vec2 hdB199 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB199.x;
        r5.y = hdB199.y;
        vec2 hdB210 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB210.x;
        r6.y = hdB210.y;
        vec2 hdB221 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB221.x;
        r7.y = hdB221.y;
        vec2 hdB232 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB232.x;
        r8.y = hdB232.y;
        vec4 hdB237 = r1;
        vec2 hdB243 = hdB237.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB243.x;
        r1.y = hdB243.y;
        r9 = (v3.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param = r9.xy;
        float param_1 = r9.w;
        r9 = hdLod5(param, param_1);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_2 = r2.xy;
        float param_3 = r2.w;
        r2 = hdLod5(param_2, param_3);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_4 = r3.xy;
        float param_5 = r3.w;
        r3 = hdLod5(param_4, param_5);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_6 = r4.xy;
        float param_7 = r4.w;
        r4 = hdLod5(param_6, param_7);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_8 = r5.xy;
        float param_9 = r5.w;
        r5 = hdLod5(param_8, param_9);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_10 = r6.xy;
        float param_11 = r6.w;
        r6 = hdLod5(param_10, param_11);
        r7.z = 0.0;
        r7.w = 0.0;
        vec2 param_12 = r7.xy;
        float param_13 = r7.w;
        r7 = hdLod5(param_12, param_13);
        r8.z = 0.0;
        r8.w = 0.0;
        vec2 param_14 = r8.xy;
        float param_15 = r8.w;
        r8 = hdLod5(param_14, param_15);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_16 = r1.xy;
        float param_17 = r1.w;
        r1 = hdLod5(param_16, param_17);
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
            vec2 hdB432 = (v4.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB432.x;
            r1.z = hdB432.y;
            vec2 hdB442 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB442.x;
            r2.y = hdB442.y;
            vec2 hdB452 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB452.x;
            r3.y = hdB452.y;
            vec2 hdB462 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB462.x;
            r4.y = hdB462.y;
            vec2 hdB472 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB472.x;
            r5.y = hdB472.y;
            r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_18 = r6.xy;
            float param_19 = r6.w;
            r6 = hdLod6(param_18, param_19);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_20 = r2.xy;
            float param_21 = r2.w;
            r2 = hdLod6(param_20, param_21);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_22 = r3.xy;
            float param_23 = r3.w;
            r3 = hdLod6(param_22, param_23);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_24 = r4.xy;
            float param_25 = r4.w;
            r4 = hdLod6(param_24, param_25);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_26 = r5.xy;
            float param_27 = r5.w;
            r5 = hdLod6(param_26, param_27);
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
                vec2 hdB588 = (v5.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB588.x;
                r1.z = hdB588.y;
                vec2 hdB598 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB598.x;
                r2.y = hdB598.y;
                vec2 hdB608 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB608.x;
                r3.y = hdB608.y;
                vec2 hdB618 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB618.x;
                r4.y = hdB618.y;
                vec2 hdB628 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB628.x;
                r5.y = hdB628.y;
                r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_28 = r6.xy;
                float param_29 = r6.w;
                r6 = hdLod7(param_28, param_29);
                r2.z = 0.0;
                r2.w = 0.0;
                vec2 param_30 = r2.xy;
                float param_31 = r2.w;
                r2 = hdLod7(param_30, param_31);
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_32 = r3.xy;
                float param_33 = r3.w;
                r3 = hdLod7(param_32, param_33);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_34 = r4.xy;
                float param_35 = r4.w;
                r4 = hdLod7(param_34, param_35);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_36 = r5.xy;
                float param_37 = r5.w;
                r5 = hdLod7(param_36, param_37);
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
                vec2 hdB736 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB736.x;
                r3.y = hdB736.y;
                vec2 hdB746 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB746.x;
                r4.y = hdB746.y;
                vec2 hdB756 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB756.x;
                r5.y = hdB756.y;
                vec2 hdB766 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB766.x;
                r6.y = hdB766.y;
                vec2 hdB776 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB776.x;
                r7.y = hdB776.y;
                r3.z = 0.0;
                r3.w = 0.0;
                vec2 param_38 = r3.xy;
                float param_39 = r3.w;
                r3 = hdLod8(param_38, param_39);
                r4.z = 0.0;
                r4.w = 0.0;
                vec2 param_40 = r4.xy;
                float param_41 = r4.w;
                r4 = hdLod8(param_40, param_41);
                r5.z = 0.0;
                r5.w = 0.0;
                vec2 param_42 = r5.xy;
                float param_43 = r5.w;
                r5 = hdLod8(param_42, param_43);
                r6.z = 0.0;
                r6.w = 0.0;
                vec2 param_44 = r6.xy;
                float param_45 = r6.w;
                r6 = hdLod8(param_44, param_45);
                r7.z = 0.0;
                r7.w = 0.0;
                vec2 param_46 = r7.xy;
                float param_47 = r7.w;
                r7 = hdLod8(param_46, param_47);
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
    vec3 hdB910 = r0.www * v1.xyz;
    r2.x = hdB910.x;
    r2.y = hdB910.y;
    r2.z = hdB910.z;
    vec4 hdB917 = r1;
    vec3 hdB921 = hdB917.xxx * r2.xyz;
    r1.x = hdB921.x;
    r1.z = hdB921.y;
    r1.w = hdB921.z;
    vec4 hdB928 = r0;
    vec3 hdB935 = (hdB928.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB935.x;
    r0.y = hdB935.y;
    r0.z = hdB935.z;
    vec4 hdB942 = r0;
    vec3 hdB949 = hdB942.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB949.x;
    r0.y = hdB949.y;
    r0.z = hdB949.z;
    vec3 hdB964 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB964.x;
    oC0.y = hdB964.y;
    oC0.z = hdB964.z;
    oC0.w = 1.0;
    bool hdB975 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB983;
    if (hdB975)
    {
        hdB983 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB983 = hdB975;
    }
    if (hdB983)
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
    bool _3241 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3251;
    if (_3241)
    {
        _3251 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 480u) != 0u;
    }
    else
    {
        _3251 = _3241;
    }
    if (_3251)
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
        bool _3276 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3291;
        if (!_3276)
        {
            _3291 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 480u) != 0u;
        }
        else
        {
            _3291 = _3276;
        }
        if (_3291)
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
