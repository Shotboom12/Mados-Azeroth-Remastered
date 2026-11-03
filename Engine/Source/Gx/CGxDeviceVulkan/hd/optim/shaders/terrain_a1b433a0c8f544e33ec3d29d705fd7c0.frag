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
float _RESERVED_IDENTIFIER_FIXUP_3805;
vec4 _RESERVED_IDENTIFIER_FIXUP_3806;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1164 = hdTex0(param);
    float _RESERVED_IDENTIFIER_FIXUP_1167 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1170 = _RESERVED_IDENTIFIER_FIXUP_1164.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3831 = vec4(_RESERVED_IDENTIFIER_FIXUP_1167, _RESERVED_IDENTIFIER_FIXUP_1170 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3805).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_3831.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1184 = _RESERVED_IDENTIFIER_FIXUP_1181 + _RESERVED_IDENTIFIER_FIXUP_1181;
    float _RESERVED_IDENTIFIER_FIXUP_1186 = _RESERVED_IDENTIFIER_FIXUP_1184.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2982 = _RESERVED_IDENTIFIER_FIXUP_3831;
    _RESERVED_IDENTIFIER_FIXUP_2982.y = _RESERVED_IDENTIFIER_FIXUP_1186;
    _RESERVED_IDENTIFIER_FIXUP_2982.z = _RESERVED_IDENTIFIER_FIXUP_1184.y;
    _RESERVED_IDENTIFIER_FIXUP_2982.w = _RESERVED_IDENTIFIER_FIXUP_1184.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1199 = mix(_RESERVED_IDENTIFIER_FIXUP_2982.yzw, _RESERVED_IDENTIFIER_FIXUP_1170, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2982.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2988 = _RESERVED_IDENTIFIER_FIXUP_1164;
    _RESERVED_IDENTIFIER_FIXUP_2988.x = _RESERVED_IDENTIFIER_FIXUP_1199.x;
    _RESERVED_IDENTIFIER_FIXUP_2988.y = _RESERVED_IDENTIFIER_FIXUP_1199.y;
    _RESERVED_IDENTIFIER_FIXUP_2988.z = _RESERVED_IDENTIFIER_FIXUP_1199.z;
    float _RESERVED_IDENTIFIER_FIXUP_1212 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3832 = vec4(_RESERVED_IDENTIFIER_FIXUP_1212, _RESERVED_IDENTIFIER_FIXUP_1186, _RESERVED_IDENTIFIER_FIXUP_1184.yz);
    float _RESERVED_IDENTIFIER_FIXUP_1218 = clamp((_RESERVED_IDENTIFIER_FIXUP_1212 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3832.x = _RESERVED_IDENTIFIER_FIXUP_1218;
    float _RESERVED_IDENTIFIER_FIXUP_1224 = ((-_RESERVED_IDENTIFIER_FIXUP_1218) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3832.x = _RESERVED_IDENTIFIER_FIXUP_1224;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3810;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3807;
    if (_RESERVED_IDENTIFIER_FIXUP_1224 != (-_RESERVED_IDENTIFIER_FIXUP_1224))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1236 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3235;
        _RESERVED_IDENTIFIER_FIXUP_3235.x = _RESERVED_IDENTIFIER_FIXUP_1236.x;
        _RESERVED_IDENTIFIER_FIXUP_3235.y = _RESERVED_IDENTIFIER_FIXUP_1236.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1246 = _RESERVED_IDENTIFIER_FIXUP_3235.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3239;
        _RESERVED_IDENTIFIER_FIXUP_3239.x = _RESERVED_IDENTIFIER_FIXUP_1246.x;
        _RESERVED_IDENTIFIER_FIXUP_3239.y = _RESERVED_IDENTIFIER_FIXUP_1246.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1256 = _RESERVED_IDENTIFIER_FIXUP_3235.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3243;
        _RESERVED_IDENTIFIER_FIXUP_3243.x = _RESERVED_IDENTIFIER_FIXUP_1256.x;
        _RESERVED_IDENTIFIER_FIXUP_3243.y = _RESERVED_IDENTIFIER_FIXUP_1256.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1266 = _RESERVED_IDENTIFIER_FIXUP_3235.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3247;
        _RESERVED_IDENTIFIER_FIXUP_3247.x = _RESERVED_IDENTIFIER_FIXUP_1266.x;
        _RESERVED_IDENTIFIER_FIXUP_3247.y = _RESERVED_IDENTIFIER_FIXUP_1266.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1276 = _RESERVED_IDENTIFIER_FIXUP_3235.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3251;
        _RESERVED_IDENTIFIER_FIXUP_3251.x = _RESERVED_IDENTIFIER_FIXUP_1276.x;
        _RESERVED_IDENTIFIER_FIXUP_3251.y = _RESERVED_IDENTIFIER_FIXUP_1276.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_3235.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3255;
        _RESERVED_IDENTIFIER_FIXUP_3255.x = _RESERVED_IDENTIFIER_FIXUP_1286.x;
        _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_1286.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1296 = _RESERVED_IDENTIFIER_FIXUP_3235.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3259;
        _RESERVED_IDENTIFIER_FIXUP_3259.x = _RESERVED_IDENTIFIER_FIXUP_1296.x;
        _RESERVED_IDENTIFIER_FIXUP_3259.y = _RESERVED_IDENTIFIER_FIXUP_1296.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1306 = _RESERVED_IDENTIFIER_FIXUP_3235.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3263;
        _RESERVED_IDENTIFIER_FIXUP_3263.x = _RESERVED_IDENTIFIER_FIXUP_1306.x;
        _RESERVED_IDENTIFIER_FIXUP_3263.y = _RESERVED_IDENTIFIER_FIXUP_1306.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1316 = _RESERVED_IDENTIFIER_FIXUP_3235.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3267;
        _RESERVED_IDENTIFIER_FIXUP_3267.x = _RESERVED_IDENTIFIER_FIXUP_1316.x;
        _RESERVED_IDENTIFIER_FIXUP_3267.y = _RESERVED_IDENTIFIER_FIXUP_1316.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1324 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_1324.xy;
        float param_2 = _RESERVED_IDENTIFIER_FIXUP_1324.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1330 = hdLod5(param_1, param_2);
        _RESERVED_IDENTIFIER_FIXUP_3239.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3243.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3247.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3251.w = 0.0;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_3251.xy;
        float param_4 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1370 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3255.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3259.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3263.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3267.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3267.xy;
        float param_6 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = hdLod5(param_5, param_6);
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3239.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1330.y = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3243.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1330.z = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3247.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1330.w = hdLod5(param_11, param_12).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1427 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1330 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3255.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1370.y = hdLod5(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3259.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1370.z = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3263.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1370.w = hdLod5(param_17, param_18).x;
        float _RESERVED_IDENTIFIER_FIXUP_1450 = _RESERVED_IDENTIFIER_FIXUP_1410.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3332 = _RESERVED_IDENTIFIER_FIXUP_1410;
        _RESERVED_IDENTIFIER_FIXUP_3332.x = _RESERVED_IDENTIFIER_FIXUP_1450;
        float _RESERVED_IDENTIFIER_FIXUP_1455 = float(_RESERVED_IDENTIFIER_FIXUP_1450 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3332.x = _RESERVED_IDENTIFIER_FIXUP_1455;
        float _RESERVED_IDENTIFIER_FIXUP_1458 = dot(_RESERVED_IDENTIFIER_FIXUP_1427, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3332.y = _RESERVED_IDENTIFIER_FIXUP_1458;
        float _RESERVED_IDENTIFIER_FIXUP_1461 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1370 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3332.z = _RESERVED_IDENTIFIER_FIXUP_1461;
        float _RESERVED_IDENTIFIER_FIXUP_1467 = _RESERVED_IDENTIFIER_FIXUP_1458 + _RESERVED_IDENTIFIER_FIXUP_1461;
        _RESERVED_IDENTIFIER_FIXUP_3332.y = _RESERVED_IDENTIFIER_FIXUP_1467;
        float _RESERVED_IDENTIFIER_FIXUP_1473 = _RESERVED_IDENTIFIER_FIXUP_1455 + _RESERVED_IDENTIFIER_FIXUP_1467;
        _RESERVED_IDENTIFIER_FIXUP_3332.x = _RESERVED_IDENTIFIER_FIXUP_1473;
        _RESERVED_IDENTIFIER_FIXUP_3332.x = _RESERVED_IDENTIFIER_FIXUP_1473 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3810 = _RESERVED_IDENTIFIER_FIXUP_1427;
        _RESERVED_IDENTIFIER_FIXUP_3807 = _RESERVED_IDENTIFIER_FIXUP_3332;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1486 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3832.y = _RESERVED_IDENTIFIER_FIXUP_1486;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3811;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3808;
        if (_RESERVED_IDENTIFIER_FIXUP_1486 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1495 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3169 = _RESERVED_IDENTIFIER_FIXUP_3832;
            _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_1495.x;
            _RESERVED_IDENTIFIER_FIXUP_3169.z = _RESERVED_IDENTIFIER_FIXUP_1495.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1505 = _RESERVED_IDENTIFIER_FIXUP_3169.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3173;
            _RESERVED_IDENTIFIER_FIXUP_3173.x = _RESERVED_IDENTIFIER_FIXUP_1505.x;
            _RESERVED_IDENTIFIER_FIXUP_3173.y = _RESERVED_IDENTIFIER_FIXUP_1505.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1515 = _RESERVED_IDENTIFIER_FIXUP_3169.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3177;
            _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1515.x;
            _RESERVED_IDENTIFIER_FIXUP_3177.y = _RESERVED_IDENTIFIER_FIXUP_1515.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1525 = _RESERVED_IDENTIFIER_FIXUP_3169.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3181;
            _RESERVED_IDENTIFIER_FIXUP_3181.x = _RESERVED_IDENTIFIER_FIXUP_1525.x;
            _RESERVED_IDENTIFIER_FIXUP_3181.y = _RESERVED_IDENTIFIER_FIXUP_1525.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1535 = _RESERVED_IDENTIFIER_FIXUP_3169.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3185;
            _RESERVED_IDENTIFIER_FIXUP_3185.x = _RESERVED_IDENTIFIER_FIXUP_1535.x;
            _RESERVED_IDENTIFIER_FIXUP_3185.y = _RESERVED_IDENTIFIER_FIXUP_1535.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1543 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1543.xy;
            float param_20 = _RESERVED_IDENTIFIER_FIXUP_1543.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1549 = hdLod6(param_19, param_20);
            _RESERVED_IDENTIFIER_FIXUP_3173.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3177.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3181.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3185.w = 0.0;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3173.xy;
            float param_22 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1549.y = hdLod6(param_21, param_22).x;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3177.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1549.z = hdLod6(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3181.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1549.w = hdLod6(param_25, param_26).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1606 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1549 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3185.xy;
            float param_28 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1612 = hdLod6(param_27, param_28).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_1612;
            float _RESERVED_IDENTIFIER_FIXUP_1617 = float(_RESERVED_IDENTIFIER_FIXUP_1612 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_1617;
            float _RESERVED_IDENTIFIER_FIXUP_1620 = dot(_RESERVED_IDENTIFIER_FIXUP_1606, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3169.z = _RESERVED_IDENTIFIER_FIXUP_1620;
            float _RESERVED_IDENTIFIER_FIXUP_1626 = _RESERVED_IDENTIFIER_FIXUP_1617 + _RESERVED_IDENTIFIER_FIXUP_1620;
            _RESERVED_IDENTIFIER_FIXUP_3169.y = _RESERVED_IDENTIFIER_FIXUP_1626;
            _RESERVED_IDENTIFIER_FIXUP_3169.x = _RESERVED_IDENTIFIER_FIXUP_1626 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3811 = _RESERVED_IDENTIFIER_FIXUP_1606;
            _RESERVED_IDENTIFIER_FIXUP_3808 = _RESERVED_IDENTIFIER_FIXUP_3169;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1639 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3013 = _RESERVED_IDENTIFIER_FIXUP_3832;
            _RESERVED_IDENTIFIER_FIXUP_3013.y = _RESERVED_IDENTIFIER_FIXUP_1639;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3812;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3809;
            if (_RESERVED_IDENTIFIER_FIXUP_1639 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1648 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3103 = _RESERVED_IDENTIFIER_FIXUP_3013;
                _RESERVED_IDENTIFIER_FIXUP_3103.y = _RESERVED_IDENTIFIER_FIXUP_1648.x;
                _RESERVED_IDENTIFIER_FIXUP_3103.z = _RESERVED_IDENTIFIER_FIXUP_1648.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1658 = _RESERVED_IDENTIFIER_FIXUP_3103.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3107;
                _RESERVED_IDENTIFIER_FIXUP_3107.x = _RESERVED_IDENTIFIER_FIXUP_1658.x;
                _RESERVED_IDENTIFIER_FIXUP_3107.y = _RESERVED_IDENTIFIER_FIXUP_1658.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1668 = _RESERVED_IDENTIFIER_FIXUP_3103.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3111;
                _RESERVED_IDENTIFIER_FIXUP_3111.x = _RESERVED_IDENTIFIER_FIXUP_1668.x;
                _RESERVED_IDENTIFIER_FIXUP_3111.y = _RESERVED_IDENTIFIER_FIXUP_1668.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1678 = _RESERVED_IDENTIFIER_FIXUP_3103.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3115;
                _RESERVED_IDENTIFIER_FIXUP_3115.x = _RESERVED_IDENTIFIER_FIXUP_1678.x;
                _RESERVED_IDENTIFIER_FIXUP_3115.y = _RESERVED_IDENTIFIER_FIXUP_1678.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1688 = _RESERVED_IDENTIFIER_FIXUP_3103.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3119;
                _RESERVED_IDENTIFIER_FIXUP_3119.x = _RESERVED_IDENTIFIER_FIXUP_1688.x;
                _RESERVED_IDENTIFIER_FIXUP_3119.y = _RESERVED_IDENTIFIER_FIXUP_1688.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1696 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_1696.xy;
                float param_30 = _RESERVED_IDENTIFIER_FIXUP_1696.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1702 = hdLod7(param_29, param_30);
                _RESERVED_IDENTIFIER_FIXUP_3107.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3111.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3115.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3119.w = 0.0;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3107.xy;
                float param_32 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1702.y = hdLod7(param_31, param_32).x;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3111.xy;
                float param_34 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1702.z = hdLod7(param_33, param_34).x;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3115.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1702.w = hdLod7(param_35, param_36).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1759 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1702 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3119.xy;
                float param_38 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1765 = hdLod7(param_37, param_38).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3103.y = _RESERVED_IDENTIFIER_FIXUP_1765;
                float _RESERVED_IDENTIFIER_FIXUP_1770 = float(_RESERVED_IDENTIFIER_FIXUP_1765 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3103.y = _RESERVED_IDENTIFIER_FIXUP_1770;
                float _RESERVED_IDENTIFIER_FIXUP_1773 = dot(_RESERVED_IDENTIFIER_FIXUP_1759, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3103.z = _RESERVED_IDENTIFIER_FIXUP_1773;
                float _RESERVED_IDENTIFIER_FIXUP_1779 = _RESERVED_IDENTIFIER_FIXUP_1770 + _RESERVED_IDENTIFIER_FIXUP_1773;
                _RESERVED_IDENTIFIER_FIXUP_3103.y = _RESERVED_IDENTIFIER_FIXUP_1779;
                _RESERVED_IDENTIFIER_FIXUP_3103.x = _RESERVED_IDENTIFIER_FIXUP_1779 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3812 = _RESERVED_IDENTIFIER_FIXUP_1759;
                _RESERVED_IDENTIFIER_FIXUP_3809 = _RESERVED_IDENTIFIER_FIXUP_3103;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3017 = vec4(0.0);
                _RESERVED_IDENTIFIER_FIXUP_3017.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3017.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1795 = (_RESERVED_IDENTIFIER_FIXUP_3017.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3022;
                _RESERVED_IDENTIFIER_FIXUP_3022.x = _RESERVED_IDENTIFIER_FIXUP_1795.x;
                _RESERVED_IDENTIFIER_FIXUP_3022.y = _RESERVED_IDENTIFIER_FIXUP_1795.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1805 = _RESERVED_IDENTIFIER_FIXUP_3022.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3026;
                _RESERVED_IDENTIFIER_FIXUP_3026.x = _RESERVED_IDENTIFIER_FIXUP_1805.x;
                _RESERVED_IDENTIFIER_FIXUP_3026.y = _RESERVED_IDENTIFIER_FIXUP_1805.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1815 = _RESERVED_IDENTIFIER_FIXUP_3022.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3030;
                _RESERVED_IDENTIFIER_FIXUP_3030.x = _RESERVED_IDENTIFIER_FIXUP_1815.x;
                _RESERVED_IDENTIFIER_FIXUP_3030.y = _RESERVED_IDENTIFIER_FIXUP_1815.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1825 = _RESERVED_IDENTIFIER_FIXUP_3022.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3034;
                _RESERVED_IDENTIFIER_FIXUP_3034.x = _RESERVED_IDENTIFIER_FIXUP_1825.x;
                _RESERVED_IDENTIFIER_FIXUP_3034.y = _RESERVED_IDENTIFIER_FIXUP_1825.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1835 = _RESERVED_IDENTIFIER_FIXUP_3022.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3038;
                _RESERVED_IDENTIFIER_FIXUP_3038.x = _RESERVED_IDENTIFIER_FIXUP_1835.x;
                _RESERVED_IDENTIFIER_FIXUP_3038.y = _RESERVED_IDENTIFIER_FIXUP_1835.y;
                _RESERVED_IDENTIFIER_FIXUP_3022.w = 0.0;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3022.xy;
                float param_40 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1849 = hdLod8(param_39, param_40);
                _RESERVED_IDENTIFIER_FIXUP_3026.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3030.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3034.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3038.w = 0.0;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3026.xy;
                float param_42 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1849.y = hdLod8(param_41, param_42).x;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3030.xy;
                float param_44 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1849.z = hdLod8(param_43, param_44).x;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3034.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1849.w = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3038.xy;
                float param_48 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1912 = hdLod8(param_47, param_48).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3078 = _RESERVED_IDENTIFIER_FIXUP_3013;
                _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1912;
                float _RESERVED_IDENTIFIER_FIXUP_1917 = float(_RESERVED_IDENTIFIER_FIXUP_1912 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1917;
                float _RESERVED_IDENTIFIER_FIXUP_1920 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1849 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3078.z = _RESERVED_IDENTIFIER_FIXUP_1920;
                float _RESERVED_IDENTIFIER_FIXUP_1926 = _RESERVED_IDENTIFIER_FIXUP_1917 + _RESERVED_IDENTIFIER_FIXUP_1920;
                _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1926;
                float _RESERVED_IDENTIFIER_FIXUP_1934 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3078.z = _RESERVED_IDENTIFIER_FIXUP_1934;
                float _RESERVED_IDENTIFIER_FIXUP_1940 = clamp((_RESERVED_IDENTIFIER_FIXUP_1934 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3078.z = _RESERVED_IDENTIFIER_FIXUP_1940;
                float _RESERVED_IDENTIFIER_FIXUP_1945 = (_RESERVED_IDENTIFIER_FIXUP_1926 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3078.y = _RESERVED_IDENTIFIER_FIXUP_1945;
                _RESERVED_IDENTIFIER_FIXUP_3078.x = (_RESERVED_IDENTIFIER_FIXUP_1940 * _RESERVED_IDENTIFIER_FIXUP_1945) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3812 = _RESERVED_IDENTIFIER_FIXUP_3017;
                _RESERVED_IDENTIFIER_FIXUP_3809 = _RESERVED_IDENTIFIER_FIXUP_3078;
            }
            _RESERVED_IDENTIFIER_FIXUP_3811 = _RESERVED_IDENTIFIER_FIXUP_3812;
            _RESERVED_IDENTIFIER_FIXUP_3808 = _RESERVED_IDENTIFIER_FIXUP_3809;
        }
        _RESERVED_IDENTIFIER_FIXUP_3810 = _RESERVED_IDENTIFIER_FIXUP_3811;
        _RESERVED_IDENTIFIER_FIXUP_3807 = _RESERVED_IDENTIFIER_FIXUP_3808;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3355 = _RESERVED_IDENTIFIER_FIXUP_3807;
    _RESERVED_IDENTIFIER_FIXUP_3355.y = 1.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3357 = _RESERVED_IDENTIFIER_FIXUP_3810;
    _RESERVED_IDENTIFIER_FIXUP_3357.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3357.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3357.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1984 = _RESERVED_IDENTIFIER_FIXUP_3355.xxx * _RESERVED_IDENTIFIER_FIXUP_3357.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3833 = vec4(_RESERVED_IDENTIFIER_FIXUP_1984.x, 1.0, _RESERVED_IDENTIFIER_FIXUP_1984.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1998 = (_RESERVED_IDENTIFIER_FIXUP_2988.xyz * _RESERVED_IDENTIFIER_FIXUP_3833.yyy) + _RESERVED_IDENTIFIER_FIXUP_3833.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3369 = _RESERVED_IDENTIFIER_FIXUP_2988;
    _RESERVED_IDENTIFIER_FIXUP_3369.x = _RESERVED_IDENTIFIER_FIXUP_1998.x;
    _RESERVED_IDENTIFIER_FIXUP_3369.y = _RESERVED_IDENTIFIER_FIXUP_1998.y;
    _RESERVED_IDENTIFIER_FIXUP_3369.z = _RESERVED_IDENTIFIER_FIXUP_1998.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2011 = _RESERVED_IDENTIFIER_FIXUP_3369.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3375 = _RESERVED_IDENTIFIER_FIXUP_3369;
    _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_2011.x;
    _RESERVED_IDENTIFIER_FIXUP_3375.y = _RESERVED_IDENTIFIER_FIXUP_2011.y;
    _RESERVED_IDENTIFIER_FIXUP_3375.z = _RESERVED_IDENTIFIER_FIXUP_2011.z;
    vec2 param_49 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2066 = hdTex0(param_49);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2072 = _RESERVED_IDENTIFIER_FIXUP_2066.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3835 = vec4(_RESERVED_IDENTIFIER_FIXUP_1167, _RESERVED_IDENTIFIER_FIXUP_2072 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2083 = _RESERVED_IDENTIFIER_FIXUP_3835.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2086 = _RESERVED_IDENTIFIER_FIXUP_2083 + _RESERVED_IDENTIFIER_FIXUP_2083;
    float _RESERVED_IDENTIFIER_FIXUP_2088 = _RESERVED_IDENTIFIER_FIXUP_2086.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3397 = _RESERVED_IDENTIFIER_FIXUP_3835;
    _RESERVED_IDENTIFIER_FIXUP_3397.y = _RESERVED_IDENTIFIER_FIXUP_2088;
    _RESERVED_IDENTIFIER_FIXUP_3397.z = _RESERVED_IDENTIFIER_FIXUP_2086.y;
    _RESERVED_IDENTIFIER_FIXUP_3397.w = _RESERVED_IDENTIFIER_FIXUP_2086.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2101 = mix(_RESERVED_IDENTIFIER_FIXUP_3397.yzw, _RESERVED_IDENTIFIER_FIXUP_2072, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3397.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3403 = _RESERVED_IDENTIFIER_FIXUP_2066;
    _RESERVED_IDENTIFIER_FIXUP_3403.x = _RESERVED_IDENTIFIER_FIXUP_2101.x;
    _RESERVED_IDENTIFIER_FIXUP_3403.y = _RESERVED_IDENTIFIER_FIXUP_2101.y;
    _RESERVED_IDENTIFIER_FIXUP_3403.z = _RESERVED_IDENTIFIER_FIXUP_2101.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3836 = vec4(_RESERVED_IDENTIFIER_FIXUP_1212, _RESERVED_IDENTIFIER_FIXUP_2088, _RESERVED_IDENTIFIER_FIXUP_2086.yz);
    float _RESERVED_IDENTIFIER_FIXUP_2120 = clamp((_RESERVED_IDENTIFIER_FIXUP_1212 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3836.x = _RESERVED_IDENTIFIER_FIXUP_2120;
    float _RESERVED_IDENTIFIER_FIXUP_2126 = ((-_RESERVED_IDENTIFIER_FIXUP_2120) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3836.x = _RESERVED_IDENTIFIER_FIXUP_2126;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3825;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3819;
    if (_RESERVED_IDENTIFIER_FIXUP_2126 != (-_RESERVED_IDENTIFIER_FIXUP_2126))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2138 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3650;
        _RESERVED_IDENTIFIER_FIXUP_3650.x = _RESERVED_IDENTIFIER_FIXUP_2138.x;
        _RESERVED_IDENTIFIER_FIXUP_3650.y = _RESERVED_IDENTIFIER_FIXUP_2138.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2148 = _RESERVED_IDENTIFIER_FIXUP_3650.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3654;
        _RESERVED_IDENTIFIER_FIXUP_3654.x = _RESERVED_IDENTIFIER_FIXUP_2148.x;
        _RESERVED_IDENTIFIER_FIXUP_3654.y = _RESERVED_IDENTIFIER_FIXUP_2148.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2158 = _RESERVED_IDENTIFIER_FIXUP_3650.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3658;
        _RESERVED_IDENTIFIER_FIXUP_3658.x = _RESERVED_IDENTIFIER_FIXUP_2158.x;
        _RESERVED_IDENTIFIER_FIXUP_3658.y = _RESERVED_IDENTIFIER_FIXUP_2158.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2168 = _RESERVED_IDENTIFIER_FIXUP_3650.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3662;
        _RESERVED_IDENTIFIER_FIXUP_3662.x = _RESERVED_IDENTIFIER_FIXUP_2168.x;
        _RESERVED_IDENTIFIER_FIXUP_3662.y = _RESERVED_IDENTIFIER_FIXUP_2168.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2178 = _RESERVED_IDENTIFIER_FIXUP_3650.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3666;
        _RESERVED_IDENTIFIER_FIXUP_3666.x = _RESERVED_IDENTIFIER_FIXUP_2178.x;
        _RESERVED_IDENTIFIER_FIXUP_3666.y = _RESERVED_IDENTIFIER_FIXUP_2178.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2188 = _RESERVED_IDENTIFIER_FIXUP_3650.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3670;
        _RESERVED_IDENTIFIER_FIXUP_3670.x = _RESERVED_IDENTIFIER_FIXUP_2188.x;
        _RESERVED_IDENTIFIER_FIXUP_3670.y = _RESERVED_IDENTIFIER_FIXUP_2188.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2198 = _RESERVED_IDENTIFIER_FIXUP_3650.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3674;
        _RESERVED_IDENTIFIER_FIXUP_3674.x = _RESERVED_IDENTIFIER_FIXUP_2198.x;
        _RESERVED_IDENTIFIER_FIXUP_3674.y = _RESERVED_IDENTIFIER_FIXUP_2198.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2208 = _RESERVED_IDENTIFIER_FIXUP_3650.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3678;
        _RESERVED_IDENTIFIER_FIXUP_3678.x = _RESERVED_IDENTIFIER_FIXUP_2208.x;
        _RESERVED_IDENTIFIER_FIXUP_3678.y = _RESERVED_IDENTIFIER_FIXUP_2208.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2218 = _RESERVED_IDENTIFIER_FIXUP_3650.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3682;
        _RESERVED_IDENTIFIER_FIXUP_3682.x = _RESERVED_IDENTIFIER_FIXUP_2218.x;
        _RESERVED_IDENTIFIER_FIXUP_3682.y = _RESERVED_IDENTIFIER_FIXUP_2218.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2226 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2226.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2226.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2232 = hdLod5(param_50, param_51);
        _RESERVED_IDENTIFIER_FIXUP_3654.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3658.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3662.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3666.w = 0.0;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3666.xy;
        float param_53 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2272 = hdLod5(param_52, param_53);
        _RESERVED_IDENTIFIER_FIXUP_3670.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3674.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3678.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3682.w = 0.0;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3682.xy;
        float param_55 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2312 = hdLod5(param_54, param_55);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3654.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2232.y = hdLod5(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3658.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2232.z = hdLod5(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3662.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2232.w = hdLod5(param_60, param_61).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2329 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2232 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3670.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2272.y = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3674.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2272.z = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3678.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2272.w = hdLod5(param_66, param_67).x;
        float _RESERVED_IDENTIFIER_FIXUP_2352 = _RESERVED_IDENTIFIER_FIXUP_2312.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3747 = _RESERVED_IDENTIFIER_FIXUP_2312;
        _RESERVED_IDENTIFIER_FIXUP_3747.x = _RESERVED_IDENTIFIER_FIXUP_2352;
        float _RESERVED_IDENTIFIER_FIXUP_2357 = float(_RESERVED_IDENTIFIER_FIXUP_2352 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3747.x = _RESERVED_IDENTIFIER_FIXUP_2357;
        float _RESERVED_IDENTIFIER_FIXUP_2360 = dot(_RESERVED_IDENTIFIER_FIXUP_2329, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3747.y = _RESERVED_IDENTIFIER_FIXUP_2360;
        float _RESERVED_IDENTIFIER_FIXUP_2363 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2272 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3747.z = _RESERVED_IDENTIFIER_FIXUP_2363;
        float _RESERVED_IDENTIFIER_FIXUP_2369 = _RESERVED_IDENTIFIER_FIXUP_2360 + _RESERVED_IDENTIFIER_FIXUP_2363;
        _RESERVED_IDENTIFIER_FIXUP_3747.y = _RESERVED_IDENTIFIER_FIXUP_2369;
        float _RESERVED_IDENTIFIER_FIXUP_2375 = _RESERVED_IDENTIFIER_FIXUP_2357 + _RESERVED_IDENTIFIER_FIXUP_2369;
        _RESERVED_IDENTIFIER_FIXUP_3747.x = _RESERVED_IDENTIFIER_FIXUP_2375;
        _RESERVED_IDENTIFIER_FIXUP_3747.x = _RESERVED_IDENTIFIER_FIXUP_2375 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3825 = _RESERVED_IDENTIFIER_FIXUP_2329;
        _RESERVED_IDENTIFIER_FIXUP_3819 = _RESERVED_IDENTIFIER_FIXUP_3747;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2388 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3836.y = _RESERVED_IDENTIFIER_FIXUP_2388;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3826;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3820;
        if (_RESERVED_IDENTIFIER_FIXUP_2388 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2397 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3584 = _RESERVED_IDENTIFIER_FIXUP_3836;
            _RESERVED_IDENTIFIER_FIXUP_3584.y = _RESERVED_IDENTIFIER_FIXUP_2397.x;
            _RESERVED_IDENTIFIER_FIXUP_3584.z = _RESERVED_IDENTIFIER_FIXUP_2397.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2407 = _RESERVED_IDENTIFIER_FIXUP_3584.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3588;
            _RESERVED_IDENTIFIER_FIXUP_3588.x = _RESERVED_IDENTIFIER_FIXUP_2407.x;
            _RESERVED_IDENTIFIER_FIXUP_3588.y = _RESERVED_IDENTIFIER_FIXUP_2407.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2417 = _RESERVED_IDENTIFIER_FIXUP_3584.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3592;
            _RESERVED_IDENTIFIER_FIXUP_3592.x = _RESERVED_IDENTIFIER_FIXUP_2417.x;
            _RESERVED_IDENTIFIER_FIXUP_3592.y = _RESERVED_IDENTIFIER_FIXUP_2417.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2427 = _RESERVED_IDENTIFIER_FIXUP_3584.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3596;
            _RESERVED_IDENTIFIER_FIXUP_3596.x = _RESERVED_IDENTIFIER_FIXUP_2427.x;
            _RESERVED_IDENTIFIER_FIXUP_3596.y = _RESERVED_IDENTIFIER_FIXUP_2427.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2437 = _RESERVED_IDENTIFIER_FIXUP_3584.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3600;
            _RESERVED_IDENTIFIER_FIXUP_3600.x = _RESERVED_IDENTIFIER_FIXUP_2437.x;
            _RESERVED_IDENTIFIER_FIXUP_3600.y = _RESERVED_IDENTIFIER_FIXUP_2437.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2445 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2445.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2445.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2451 = hdLod6(param_68, param_69);
            _RESERVED_IDENTIFIER_FIXUP_3588.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3592.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3596.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3600.w = 0.0;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3588.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2451.y = hdLod6(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3592.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2451.z = hdLod6(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3596.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2451.w = hdLod6(param_74, param_75).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2508 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2451 - texcoord5.zzzz, vec4(0.0)));
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3600.xy;
            float param_77 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2514 = hdLod6(param_76, param_77).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3584.y = _RESERVED_IDENTIFIER_FIXUP_2514;
            float _RESERVED_IDENTIFIER_FIXUP_2519 = float(_RESERVED_IDENTIFIER_FIXUP_2514 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3584.y = _RESERVED_IDENTIFIER_FIXUP_2519;
            float _RESERVED_IDENTIFIER_FIXUP_2522 = dot(_RESERVED_IDENTIFIER_FIXUP_2508, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3584.z = _RESERVED_IDENTIFIER_FIXUP_2522;
            float _RESERVED_IDENTIFIER_FIXUP_2528 = _RESERVED_IDENTIFIER_FIXUP_2519 + _RESERVED_IDENTIFIER_FIXUP_2522;
            _RESERVED_IDENTIFIER_FIXUP_3584.y = _RESERVED_IDENTIFIER_FIXUP_2528;
            _RESERVED_IDENTIFIER_FIXUP_3584.x = _RESERVED_IDENTIFIER_FIXUP_2528 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3826 = _RESERVED_IDENTIFIER_FIXUP_2508;
            _RESERVED_IDENTIFIER_FIXUP_3820 = _RESERVED_IDENTIFIER_FIXUP_3584;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2541 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3428 = _RESERVED_IDENTIFIER_FIXUP_3836;
            _RESERVED_IDENTIFIER_FIXUP_3428.y = _RESERVED_IDENTIFIER_FIXUP_2541;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3827;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3821;
            if (_RESERVED_IDENTIFIER_FIXUP_2541 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2550 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3518 = _RESERVED_IDENTIFIER_FIXUP_3428;
                _RESERVED_IDENTIFIER_FIXUP_3518.y = _RESERVED_IDENTIFIER_FIXUP_2550.x;
                _RESERVED_IDENTIFIER_FIXUP_3518.z = _RESERVED_IDENTIFIER_FIXUP_2550.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2560 = _RESERVED_IDENTIFIER_FIXUP_3518.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3522;
                _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2560.x;
                _RESERVED_IDENTIFIER_FIXUP_3522.y = _RESERVED_IDENTIFIER_FIXUP_2560.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2570 = _RESERVED_IDENTIFIER_FIXUP_3518.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3526;
                _RESERVED_IDENTIFIER_FIXUP_3526.x = _RESERVED_IDENTIFIER_FIXUP_2570.x;
                _RESERVED_IDENTIFIER_FIXUP_3526.y = _RESERVED_IDENTIFIER_FIXUP_2570.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2580 = _RESERVED_IDENTIFIER_FIXUP_3518.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3530;
                _RESERVED_IDENTIFIER_FIXUP_3530.x = _RESERVED_IDENTIFIER_FIXUP_2580.x;
                _RESERVED_IDENTIFIER_FIXUP_3530.y = _RESERVED_IDENTIFIER_FIXUP_2580.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2590 = _RESERVED_IDENTIFIER_FIXUP_3518.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3534;
                _RESERVED_IDENTIFIER_FIXUP_3534.x = _RESERVED_IDENTIFIER_FIXUP_2590.x;
                _RESERVED_IDENTIFIER_FIXUP_3534.y = _RESERVED_IDENTIFIER_FIXUP_2590.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2598 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2598.xy;
                float param_79 = _RESERVED_IDENTIFIER_FIXUP_2598.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2604 = hdLod7(param_78, param_79);
                _RESERVED_IDENTIFIER_FIXUP_3522.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3526.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3530.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3534.w = 0.0;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3522.xy;
                float param_81 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2604.y = hdLod7(param_80, param_81).x;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3526.xy;
                float param_83 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2604.z = hdLod7(param_82, param_83).x;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3530.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2604.w = hdLod7(param_84, param_85).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2661 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2604 - texcoord6.zzzz, vec4(0.0)));
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3534.xy;
                float param_87 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2667 = hdLod7(param_86, param_87).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3518.y = _RESERVED_IDENTIFIER_FIXUP_2667;
                float _RESERVED_IDENTIFIER_FIXUP_2672 = float(_RESERVED_IDENTIFIER_FIXUP_2667 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3518.y = _RESERVED_IDENTIFIER_FIXUP_2672;
                float _RESERVED_IDENTIFIER_FIXUP_2675 = dot(_RESERVED_IDENTIFIER_FIXUP_2661, vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3518.z = _RESERVED_IDENTIFIER_FIXUP_2675;
                float _RESERVED_IDENTIFIER_FIXUP_2681 = _RESERVED_IDENTIFIER_FIXUP_2672 + _RESERVED_IDENTIFIER_FIXUP_2675;
                _RESERVED_IDENTIFIER_FIXUP_3518.y = _RESERVED_IDENTIFIER_FIXUP_2681;
                _RESERVED_IDENTIFIER_FIXUP_3518.x = _RESERVED_IDENTIFIER_FIXUP_2681 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3827 = _RESERVED_IDENTIFIER_FIXUP_2661;
                _RESERVED_IDENTIFIER_FIXUP_3821 = _RESERVED_IDENTIFIER_FIXUP_3518;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3432 = vec4(0.0);
                _RESERVED_IDENTIFIER_FIXUP_3432.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3432.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2697 = (_RESERVED_IDENTIFIER_FIXUP_3432.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3437;
                _RESERVED_IDENTIFIER_FIXUP_3437.x = _RESERVED_IDENTIFIER_FIXUP_2697.x;
                _RESERVED_IDENTIFIER_FIXUP_3437.y = _RESERVED_IDENTIFIER_FIXUP_2697.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2707 = _RESERVED_IDENTIFIER_FIXUP_3437.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3441;
                _RESERVED_IDENTIFIER_FIXUP_3441.x = _RESERVED_IDENTIFIER_FIXUP_2707.x;
                _RESERVED_IDENTIFIER_FIXUP_3441.y = _RESERVED_IDENTIFIER_FIXUP_2707.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2717 = _RESERVED_IDENTIFIER_FIXUP_3437.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3445;
                _RESERVED_IDENTIFIER_FIXUP_3445.x = _RESERVED_IDENTIFIER_FIXUP_2717.x;
                _RESERVED_IDENTIFIER_FIXUP_3445.y = _RESERVED_IDENTIFIER_FIXUP_2717.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2727 = _RESERVED_IDENTIFIER_FIXUP_3437.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3449;
                _RESERVED_IDENTIFIER_FIXUP_3449.x = _RESERVED_IDENTIFIER_FIXUP_2727.x;
                _RESERVED_IDENTIFIER_FIXUP_3449.y = _RESERVED_IDENTIFIER_FIXUP_2727.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2737 = _RESERVED_IDENTIFIER_FIXUP_3437.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3453;
                _RESERVED_IDENTIFIER_FIXUP_3453.x = _RESERVED_IDENTIFIER_FIXUP_2737.x;
                _RESERVED_IDENTIFIER_FIXUP_3453.y = _RESERVED_IDENTIFIER_FIXUP_2737.y;
                _RESERVED_IDENTIFIER_FIXUP_3437.w = 0.0;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3437.xy;
                float param_89 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2751 = hdLod8(param_88, param_89);
                _RESERVED_IDENTIFIER_FIXUP_3441.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3445.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3449.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3453.w = 0.0;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3441.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2751.y = hdLod8(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3445.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2751.z = hdLod8(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3449.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2751.w = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3453.xy;
                float param_97 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2814 = hdLod8(param_96, param_97).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3493 = _RESERVED_IDENTIFIER_FIXUP_3428;
                _RESERVED_IDENTIFIER_FIXUP_3493.y = _RESERVED_IDENTIFIER_FIXUP_2814;
                float _RESERVED_IDENTIFIER_FIXUP_2819 = float(_RESERVED_IDENTIFIER_FIXUP_2814 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3493.y = _RESERVED_IDENTIFIER_FIXUP_2819;
                float _RESERVED_IDENTIFIER_FIXUP_2822 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2751 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3493.z = _RESERVED_IDENTIFIER_FIXUP_2822;
                float _RESERVED_IDENTIFIER_FIXUP_2828 = _RESERVED_IDENTIFIER_FIXUP_2819 + _RESERVED_IDENTIFIER_FIXUP_2822;
                _RESERVED_IDENTIFIER_FIXUP_3493.y = _RESERVED_IDENTIFIER_FIXUP_2828;
                float _RESERVED_IDENTIFIER_FIXUP_2836 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3493.z = _RESERVED_IDENTIFIER_FIXUP_2836;
                float _RESERVED_IDENTIFIER_FIXUP_2842 = clamp((_RESERVED_IDENTIFIER_FIXUP_2836 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3493.z = _RESERVED_IDENTIFIER_FIXUP_2842;
                float _RESERVED_IDENTIFIER_FIXUP_2847 = (_RESERVED_IDENTIFIER_FIXUP_2828 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3493.y = _RESERVED_IDENTIFIER_FIXUP_2847;
                _RESERVED_IDENTIFIER_FIXUP_3493.x = (_RESERVED_IDENTIFIER_FIXUP_2842 * _RESERVED_IDENTIFIER_FIXUP_2847) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3827 = _RESERVED_IDENTIFIER_FIXUP_3432;
                _RESERVED_IDENTIFIER_FIXUP_3821 = _RESERVED_IDENTIFIER_FIXUP_3493;
            }
            _RESERVED_IDENTIFIER_FIXUP_3826 = _RESERVED_IDENTIFIER_FIXUP_3827;
            _RESERVED_IDENTIFIER_FIXUP_3820 = _RESERVED_IDENTIFIER_FIXUP_3821;
        }
        _RESERVED_IDENTIFIER_FIXUP_3825 = _RESERVED_IDENTIFIER_FIXUP_3826;
        _RESERVED_IDENTIFIER_FIXUP_3819 = _RESERVED_IDENTIFIER_FIXUP_3820;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2862 = (_RESERVED_IDENTIFIER_FIXUP_3819.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3768 = _RESERVED_IDENTIFIER_FIXUP_3819;
    _RESERVED_IDENTIFIER_FIXUP_3768.y = _RESERVED_IDENTIFIER_FIXUP_2862;
    _RESERVED_IDENTIFIER_FIXUP_3768.y = _RESERVED_IDENTIFIER_FIXUP_2862;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2875 = _RESERVED_IDENTIFIER_FIXUP_3403.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3774 = _RESERVED_IDENTIFIER_FIXUP_3825;
    _RESERVED_IDENTIFIER_FIXUP_3774.x = _RESERVED_IDENTIFIER_FIXUP_2875.x;
    _RESERVED_IDENTIFIER_FIXUP_3774.y = _RESERVED_IDENTIFIER_FIXUP_2875.y;
    _RESERVED_IDENTIFIER_FIXUP_3774.z = _RESERVED_IDENTIFIER_FIXUP_2875.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2886 = _RESERVED_IDENTIFIER_FIXUP_3768.xxx * _RESERVED_IDENTIFIER_FIXUP_3774.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3837 = vec4(_RESERVED_IDENTIFIER_FIXUP_2886.x, _RESERVED_IDENTIFIER_FIXUP_2862, _RESERVED_IDENTIFIER_FIXUP_2886.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2900 = (_RESERVED_IDENTIFIER_FIXUP_3403.xyz * _RESERVED_IDENTIFIER_FIXUP_3837.yyy) + _RESERVED_IDENTIFIER_FIXUP_3837.xzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3786 = _RESERVED_IDENTIFIER_FIXUP_3403;
    _RESERVED_IDENTIFIER_FIXUP_3786.x = _RESERVED_IDENTIFIER_FIXUP_2900.x;
    _RESERVED_IDENTIFIER_FIXUP_3786.y = _RESERVED_IDENTIFIER_FIXUP_2900.y;
    _RESERVED_IDENTIFIER_FIXUP_3786.z = _RESERVED_IDENTIFIER_FIXUP_2900.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2913 = _RESERVED_IDENTIFIER_FIXUP_3786.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3792 = _RESERVED_IDENTIFIER_FIXUP_3786;
    _RESERVED_IDENTIFIER_FIXUP_3792.x = _RESERVED_IDENTIFIER_FIXUP_2913.x;
    _RESERVED_IDENTIFIER_FIXUP_3792.y = _RESERVED_IDENTIFIER_FIXUP_2913.y;
    _RESERVED_IDENTIFIER_FIXUP_3792.z = _RESERVED_IDENTIFIER_FIXUP_2913.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3792.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1024 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1033;
    if (_RESERVED_IDENTIFIER_FIXUP_1024)
    {
        _RESERVED_IDENTIFIER_FIXUP_1033 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1033 = _RESERVED_IDENTIFIER_FIXUP_1024;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1033)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1070 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3375.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1096 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2966;
    if (_RESERVED_IDENTIFIER_FIXUP_1070 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2966 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1070), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1096);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2966 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1096);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2966;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2862);
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
    r1.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 hdB79 = r0.xyz * v0.xyz;
    r1.y = hdB79.x;
    r1.z = hdB79.y;
    r1.w = hdB79.z;
    vec4 hdB89 = r1;
    vec4 hdB91 = r1;
    vec3 hdB93 = hdB89.yzw + hdB91.yzw;
    r1.y = hdB93.x;
    r1.z = hdB93.y;
    r1.w = hdB93.z;
    vec4 hdB102 = r0;
    vec3 hdB111 = mix(r1.yzw, hdB102.xyz, greaterThanEqual(-r1.xxx, vec3(0.0)));
    r0.x = hdB111.x;
    r0.y = hdB111.y;
    r0.z = hdB111.z;
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
            vec2 hdB429 = (v4.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB429.x;
            r1.z = hdB429.y;
            vec2 hdB439 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB439.x;
            r2.y = hdB439.y;
            vec2 hdB449 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB449.x;
            r3.y = hdB449.y;
            vec2 hdB459 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB459.x;
            r4.y = hdB459.y;
            vec2 hdB469 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB469.x;
            r5.y = hdB469.y;
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
                vec2 hdB585 = (v5.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB585.x;
                r1.z = hdB585.y;
                vec2 hdB595 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB595.x;
                r2.y = hdB595.y;
                vec2 hdB605 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB605.x;
                r3.y = hdB605.y;
                vec2 hdB615 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB615.x;
                r4.y = hdB615.y;
                vec2 hdB625 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB625.x;
                r5.y = hdB625.y;
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
                vec2 hdB733 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB733.x;
                r3.y = hdB733.y;
                vec2 hdB743 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB743.x;
                r4.y = hdB743.y;
                vec2 hdB753 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB753.x;
                r5.y = hdB753.y;
                vec2 hdB763 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB763.x;
                r6.y = hdB763.y;
                vec2 hdB773 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB773.x;
                r7.y = hdB773.y;
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
    vec3 hdB907 = r0.www * v1.xyz;
    r2.x = hdB907.x;
    r2.y = hdB907.y;
    r2.z = hdB907.z;
    vec4 hdB914 = r1;
    vec3 hdB918 = hdB914.xxx * r2.xyz;
    r1.x = hdB918.x;
    r1.z = hdB918.y;
    r1.w = hdB918.z;
    vec4 hdB925 = r0;
    vec3 hdB932 = (hdB925.xyz * r1.yyy) + r1.xzw;
    r0.x = hdB932.x;
    r0.y = hdB932.y;
    r0.z = hdB932.z;
    vec4 hdB939 = r0;
    vec3 hdB946 = hdB939.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB946.x;
    r0.y = hdB946.y;
    r0.z = hdB946.z;
    vec3 hdB961 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB961.x;
    oC0.y = hdB961.y;
    oC0.z = hdB961.z;
    oC0.w = 1.0;
    bool hdB972 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB980;
    if (hdB972)
    {
        hdB980 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB980 = hdB972;
    }
    if (hdB980)
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
    bool _3268 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3278;
    if (_3268)
    {
        _3278 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 481u) != 0u;
    }
    else
    {
        _3278 = _3268;
    }
    if (_3278)
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
        bool _3303 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3318;
        if (!_3303)
        {
            _3318 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 481u) != 0u;
        }
        else
        {
            _3318 = _3303;
        }
        if (_3318)
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
