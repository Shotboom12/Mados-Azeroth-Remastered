#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3418;
vec4 _RESERVED_IDENTIFIER_FIXUP_3419;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
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
    bool _55 = hdOverride >= 0;
    bool _74;
    if (_55)
    {
        _74 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _74 = _55;
    }
    vec4 _75;
    if (_74)
    {
        _75 = vec4(float(hdOverride));
    }
    else
    {
        _75 = value;
    }
    return _75;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _93 = hdOverride >= 0;
    bool _103;
    if (_93)
    {
        _103 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _103 = _93;
    }
    vec4 _104;
    if (_103)
    {
        _104 = vec4(float(hdOverride));
    }
    else
    {
        _104 = value;
    }
    return _104;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _122 = hdOverride >= 0;
    bool _132;
    if (_122)
    {
        _132 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _132 = _122;
    }
    vec4 _133;
    if (_132)
    {
        _133 = vec4(float(hdOverride));
    }
    else
    {
        _133 = value;
    }
    return _133;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _151 = hdOverride >= 0;
    bool _161;
    if (_151)
    {
        _161 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _161 = _151;
    }
    vec4 _162;
    if (_161)
    {
        _162 = vec4(float(hdOverride));
    }
    else
    {
        _162 = value;
    }
    return _162;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _180 = hdOverride >= 0;
    bool _190;
    if (_180)
    {
        _190 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _190 = _180;
    }
    vec4 _191;
    if (_190)
    {
        _191 = vec4(float(hdOverride));
    }
    else
    {
        _191 = value;
    }
    return _191;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1064 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1068 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_1072 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1068.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2681 = _RESERVED_IDENTIFIER_FIXUP_1068;
    _RESERVED_IDENTIFIER_FIXUP_2681.x = _RESERVED_IDENTIFIER_FIXUP_1072;
    _RESERVED_IDENTIFIER_FIXUP_2681.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1072;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1082 = _RESERVED_IDENTIFIER_FIXUP_1064 * _RESERVED_IDENTIFIER_FIXUP_2681.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_1089 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2688 = _RESERVED_IDENTIFIER_FIXUP_2681;
    _RESERVED_IDENTIFIER_FIXUP_2688.x = _RESERVED_IDENTIFIER_FIXUP_1089;
    float _RESERVED_IDENTIFIER_FIXUP_1095 = clamp((_RESERVED_IDENTIFIER_FIXUP_1089 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2688.x = _RESERVED_IDENTIFIER_FIXUP_1095;
    float _RESERVED_IDENTIFIER_FIXUP_1101 = ((-_RESERVED_IDENTIFIER_FIXUP_1095) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2688.y = _RESERVED_IDENTIFIER_FIXUP_1101;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3421;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3420;
    if (_RESERVED_IDENTIFIER_FIXUP_1101 != (-_RESERVED_IDENTIFIER_FIXUP_1101))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1113 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2700 = _RESERVED_IDENTIFIER_FIXUP_2688;
        _RESERVED_IDENTIFIER_FIXUP_2700.y = _RESERVED_IDENTIFIER_FIXUP_1113.x;
        _RESERVED_IDENTIFIER_FIXUP_2700.z = _RESERVED_IDENTIFIER_FIXUP_1113.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1123 = _RESERVED_IDENTIFIER_FIXUP_2700.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2704;
        _RESERVED_IDENTIFIER_FIXUP_2704.x = _RESERVED_IDENTIFIER_FIXUP_1123.x;
        _RESERVED_IDENTIFIER_FIXUP_2704.y = _RESERVED_IDENTIFIER_FIXUP_1123.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1133 = _RESERVED_IDENTIFIER_FIXUP_2700.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2708;
        _RESERVED_IDENTIFIER_FIXUP_2708.x = _RESERVED_IDENTIFIER_FIXUP_1133.x;
        _RESERVED_IDENTIFIER_FIXUP_2708.y = _RESERVED_IDENTIFIER_FIXUP_1133.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1143 = _RESERVED_IDENTIFIER_FIXUP_2700.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2712;
        _RESERVED_IDENTIFIER_FIXUP_2712.x = _RESERVED_IDENTIFIER_FIXUP_1143.x;
        _RESERVED_IDENTIFIER_FIXUP_2712.y = _RESERVED_IDENTIFIER_FIXUP_1143.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1153 = _RESERVED_IDENTIFIER_FIXUP_2700.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2716;
        _RESERVED_IDENTIFIER_FIXUP_2716.x = _RESERVED_IDENTIFIER_FIXUP_1153.x;
        _RESERVED_IDENTIFIER_FIXUP_2716.y = _RESERVED_IDENTIFIER_FIXUP_1153.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1161 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_1161.xy;
        float param_2 = _RESERVED_IDENTIFIER_FIXUP_1161.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1167 = hdLod5(param_1, param_2);
        _RESERVED_IDENTIFIER_FIXUP_2704.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2708.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2712.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2716.w = 0.0;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_2704.xy;
        float param_4 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1167.y = hdLod5(param_3, param_4).x;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2708.xy;
        float param_6 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1167.z = hdLod5(param_5, param_6).x;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2712.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1167.w = hdLod5(param_7, param_8).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1224 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1167 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2716.xy;
        float param_10 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1230 = hdLod5(param_9, param_10).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_2700.y = _RESERVED_IDENTIFIER_FIXUP_1230;
        float _RESERVED_IDENTIFIER_FIXUP_1235 = float(_RESERVED_IDENTIFIER_FIXUP_1230 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2700.y = _RESERVED_IDENTIFIER_FIXUP_1235;
        float _RESERVED_IDENTIFIER_FIXUP_1238 = dot(_RESERVED_IDENTIFIER_FIXUP_1224, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2700.z = _RESERVED_IDENTIFIER_FIXUP_1238;
        float _RESERVED_IDENTIFIER_FIXUP_1244 = _RESERVED_IDENTIFIER_FIXUP_1235 + _RESERVED_IDENTIFIER_FIXUP_1238;
        _RESERVED_IDENTIFIER_FIXUP_2700.y = _RESERVED_IDENTIFIER_FIXUP_1244;
        float _RESERVED_IDENTIFIER_FIXUP_1249 = (_RESERVED_IDENTIFIER_FIXUP_1244 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_2700.y = _RESERVED_IDENTIFIER_FIXUP_1249;
        _RESERVED_IDENTIFIER_FIXUP_2700.x = (_RESERVED_IDENTIFIER_FIXUP_1095 * _RESERVED_IDENTIFIER_FIXUP_1249) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3421 = _RESERVED_IDENTIFIER_FIXUP_1224;
        _RESERVED_IDENTIFIER_FIXUP_3420 = _RESERVED_IDENTIFIER_FIXUP_2700;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2698 = _RESERVED_IDENTIFIER_FIXUP_2688;
        _RESERVED_IDENTIFIER_FIXUP_2698.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3421 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_3420 = _RESERVED_IDENTIFIER_FIXUP_2698;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1267 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2772 = _RESERVED_IDENTIFIER_FIXUP_3420;
    _RESERVED_IDENTIFIER_FIXUP_2772.y = _RESERVED_IDENTIFIER_FIXUP_1267;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3424;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3422;
    if (_RESERVED_IDENTIFIER_FIXUP_1267 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1276 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_2933 = _RESERVED_IDENTIFIER_FIXUP_2772;
        _RESERVED_IDENTIFIER_FIXUP_2933.y = _RESERVED_IDENTIFIER_FIXUP_1276.x;
        _RESERVED_IDENTIFIER_FIXUP_2933.z = _RESERVED_IDENTIFIER_FIXUP_1276.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_2933.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2937;
        _RESERVED_IDENTIFIER_FIXUP_2937.x = _RESERVED_IDENTIFIER_FIXUP_1286.x;
        _RESERVED_IDENTIFIER_FIXUP_2937.y = _RESERVED_IDENTIFIER_FIXUP_1286.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1296 = _RESERVED_IDENTIFIER_FIXUP_2933.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2941;
        _RESERVED_IDENTIFIER_FIXUP_2941.x = _RESERVED_IDENTIFIER_FIXUP_1296.x;
        _RESERVED_IDENTIFIER_FIXUP_2941.y = _RESERVED_IDENTIFIER_FIXUP_1296.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1306 = _RESERVED_IDENTIFIER_FIXUP_2933.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2945;
        _RESERVED_IDENTIFIER_FIXUP_2945.x = _RESERVED_IDENTIFIER_FIXUP_1306.x;
        _RESERVED_IDENTIFIER_FIXUP_2945.y = _RESERVED_IDENTIFIER_FIXUP_1306.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1316 = _RESERVED_IDENTIFIER_FIXUP_2933.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2949;
        _RESERVED_IDENTIFIER_FIXUP_2949.x = _RESERVED_IDENTIFIER_FIXUP_1316.x;
        _RESERVED_IDENTIFIER_FIXUP_2949.y = _RESERVED_IDENTIFIER_FIXUP_1316.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1324 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1324.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1324.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1330 = hdLod6(param_11, param_12);
        _RESERVED_IDENTIFIER_FIXUP_2937.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2941.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2945.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2949.w = 0.0;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_2937.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1330.y = hdLod6(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_2941.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1330.z = hdLod6(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_2945.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1330.w = hdLod6(param_17, param_18).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1387 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1330 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_2949.xy;
        float param_20 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1393 = hdLod6(param_19, param_20).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_2933.y = _RESERVED_IDENTIFIER_FIXUP_1393;
        float _RESERVED_IDENTIFIER_FIXUP_1398 = float(_RESERVED_IDENTIFIER_FIXUP_1393 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_2933.y = _RESERVED_IDENTIFIER_FIXUP_1398;
        float _RESERVED_IDENTIFIER_FIXUP_1401 = dot(_RESERVED_IDENTIFIER_FIXUP_1387, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_2933.z = _RESERVED_IDENTIFIER_FIXUP_1401;
        float _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_1398 + _RESERVED_IDENTIFIER_FIXUP_1401;
        _RESERVED_IDENTIFIER_FIXUP_2933.y = _RESERVED_IDENTIFIER_FIXUP_1407;
        _RESERVED_IDENTIFIER_FIXUP_2933.y = _RESERVED_IDENTIFIER_FIXUP_1407 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3424 = _RESERVED_IDENTIFIER_FIXUP_1387;
        _RESERVED_IDENTIFIER_FIXUP_3422 = _RESERVED_IDENTIFIER_FIXUP_2933;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1420 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2777 = _RESERVED_IDENTIFIER_FIXUP_2772;
        _RESERVED_IDENTIFIER_FIXUP_2777.z = _RESERVED_IDENTIFIER_FIXUP_1420;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3425;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3423;
        if (_RESERVED_IDENTIFIER_FIXUP_1420 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1429 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2867 = _RESERVED_IDENTIFIER_FIXUP_2777;
            _RESERVED_IDENTIFIER_FIXUP_2867.z = _RESERVED_IDENTIFIER_FIXUP_1429.x;
            _RESERVED_IDENTIFIER_FIXUP_2867.w = _RESERVED_IDENTIFIER_FIXUP_1429.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1439 = _RESERVED_IDENTIFIER_FIXUP_2867.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2871;
            _RESERVED_IDENTIFIER_FIXUP_2871.x = _RESERVED_IDENTIFIER_FIXUP_1439.x;
            _RESERVED_IDENTIFIER_FIXUP_2871.y = _RESERVED_IDENTIFIER_FIXUP_1439.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_2867.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2875;
            _RESERVED_IDENTIFIER_FIXUP_2875.x = _RESERVED_IDENTIFIER_FIXUP_1449.x;
            _RESERVED_IDENTIFIER_FIXUP_2875.y = _RESERVED_IDENTIFIER_FIXUP_1449.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1459 = _RESERVED_IDENTIFIER_FIXUP_2867.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2879;
            _RESERVED_IDENTIFIER_FIXUP_2879.x = _RESERVED_IDENTIFIER_FIXUP_1459.x;
            _RESERVED_IDENTIFIER_FIXUP_2879.y = _RESERVED_IDENTIFIER_FIXUP_1459.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1469 = _RESERVED_IDENTIFIER_FIXUP_2867.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2883;
            _RESERVED_IDENTIFIER_FIXUP_2883.x = _RESERVED_IDENTIFIER_FIXUP_1469.x;
            _RESERVED_IDENTIFIER_FIXUP_2883.y = _RESERVED_IDENTIFIER_FIXUP_1469.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1477 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1477.xy;
            float param_22 = _RESERVED_IDENTIFIER_FIXUP_1477.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1483 = hdLod7(param_21, param_22);
            _RESERVED_IDENTIFIER_FIXUP_2871.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2875.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2879.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2883.w = 0.0;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_2871.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1483.y = hdLod7(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_2875.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1483.z = hdLod7(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_2879.xy;
            float param_28 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1483.w = hdLod7(param_27, param_28).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1540 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1483 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_2883.xy;
            float param_30 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1546 = hdLod7(param_29, param_30).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2867.z = _RESERVED_IDENTIFIER_FIXUP_1546;
            float _RESERVED_IDENTIFIER_FIXUP_1551 = float(_RESERVED_IDENTIFIER_FIXUP_1546 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2867.z = _RESERVED_IDENTIFIER_FIXUP_1551;
            float _RESERVED_IDENTIFIER_FIXUP_1554 = dot(_RESERVED_IDENTIFIER_FIXUP_1540, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2867.w = _RESERVED_IDENTIFIER_FIXUP_1554;
            float _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_1551 + _RESERVED_IDENTIFIER_FIXUP_1554;
            _RESERVED_IDENTIFIER_FIXUP_2867.z = _RESERVED_IDENTIFIER_FIXUP_1560;
            _RESERVED_IDENTIFIER_FIXUP_2867.y = _RESERVED_IDENTIFIER_FIXUP_1560 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3425 = _RESERVED_IDENTIFIER_FIXUP_1540;
            _RESERVED_IDENTIFIER_FIXUP_3423 = _RESERVED_IDENTIFIER_FIXUP_2867;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2781 = _RESERVED_IDENTIFIER_FIXUP_3421;
            _RESERVED_IDENTIFIER_FIXUP_2781.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2781.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1576 = (_RESERVED_IDENTIFIER_FIXUP_2781.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2786;
            _RESERVED_IDENTIFIER_FIXUP_2786.x = _RESERVED_IDENTIFIER_FIXUP_1576.x;
            _RESERVED_IDENTIFIER_FIXUP_2786.y = _RESERVED_IDENTIFIER_FIXUP_1576.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1586 = _RESERVED_IDENTIFIER_FIXUP_2786.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2790;
            _RESERVED_IDENTIFIER_FIXUP_2790.x = _RESERVED_IDENTIFIER_FIXUP_1586.x;
            _RESERVED_IDENTIFIER_FIXUP_2790.y = _RESERVED_IDENTIFIER_FIXUP_1586.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1596 = _RESERVED_IDENTIFIER_FIXUP_2786.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2794;
            _RESERVED_IDENTIFIER_FIXUP_2794.x = _RESERVED_IDENTIFIER_FIXUP_1596.x;
            _RESERVED_IDENTIFIER_FIXUP_2794.y = _RESERVED_IDENTIFIER_FIXUP_1596.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1606 = _RESERVED_IDENTIFIER_FIXUP_2786.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2798;
            _RESERVED_IDENTIFIER_FIXUP_2798.x = _RESERVED_IDENTIFIER_FIXUP_1606.x;
            _RESERVED_IDENTIFIER_FIXUP_2798.y = _RESERVED_IDENTIFIER_FIXUP_1606.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1616 = _RESERVED_IDENTIFIER_FIXUP_2786.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2802;
            _RESERVED_IDENTIFIER_FIXUP_2802.x = _RESERVED_IDENTIFIER_FIXUP_1616.x;
            _RESERVED_IDENTIFIER_FIXUP_2802.y = _RESERVED_IDENTIFIER_FIXUP_1616.y;
            _RESERVED_IDENTIFIER_FIXUP_2786.w = 0.0;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_2786.xy;
            float param_32 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1630 = hdLod8(param_31, param_32);
            _RESERVED_IDENTIFIER_FIXUP_2790.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2794.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2798.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2802.w = 0.0;
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_2790.xy;
            float param_34 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1630.y = hdLod8(param_33, param_34).x;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_2794.xy;
            float param_36 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1630.z = hdLod8(param_35, param_36).x;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_2798.xy;
            float param_38 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1630.w = hdLod8(param_37, param_38).x;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_2802.xy;
            float param_40 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1693 = hdLod8(param_39, param_40).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2842 = _RESERVED_IDENTIFIER_FIXUP_2777;
            _RESERVED_IDENTIFIER_FIXUP_2842.z = _RESERVED_IDENTIFIER_FIXUP_1693;
            float _RESERVED_IDENTIFIER_FIXUP_1698 = float(_RESERVED_IDENTIFIER_FIXUP_1693 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2842.z = _RESERVED_IDENTIFIER_FIXUP_1698;
            float _RESERVED_IDENTIFIER_FIXUP_1701 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1630 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2842.w = _RESERVED_IDENTIFIER_FIXUP_1701;
            float _RESERVED_IDENTIFIER_FIXUP_1707 = _RESERVED_IDENTIFIER_FIXUP_1698 + _RESERVED_IDENTIFIER_FIXUP_1701;
            _RESERVED_IDENTIFIER_FIXUP_2842.z = _RESERVED_IDENTIFIER_FIXUP_1707;
            float _RESERVED_IDENTIFIER_FIXUP_1715 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2842.w = _RESERVED_IDENTIFIER_FIXUP_1715;
            float _RESERVED_IDENTIFIER_FIXUP_1721 = clamp((_RESERVED_IDENTIFIER_FIXUP_1715 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2842.w = _RESERVED_IDENTIFIER_FIXUP_1721;
            float _RESERVED_IDENTIFIER_FIXUP_1726 = (_RESERVED_IDENTIFIER_FIXUP_1707 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2842.z = _RESERVED_IDENTIFIER_FIXUP_1726;
            _RESERVED_IDENTIFIER_FIXUP_2842.y = (_RESERVED_IDENTIFIER_FIXUP_1721 * _RESERVED_IDENTIFIER_FIXUP_1726) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3425 = _RESERVED_IDENTIFIER_FIXUP_2781;
            _RESERVED_IDENTIFIER_FIXUP_3423 = _RESERVED_IDENTIFIER_FIXUP_2842;
        }
        _RESERVED_IDENTIFIER_FIXUP_3424 = _RESERVED_IDENTIFIER_FIXUP_3425;
        _RESERVED_IDENTIFIER_FIXUP_3422 = _RESERVED_IDENTIFIER_FIXUP_3423;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1741 = min(_RESERVED_IDENTIFIER_FIXUP_3422.y, _RESERVED_IDENTIFIER_FIXUP_3422.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3001 = _RESERVED_IDENTIFIER_FIXUP_3424;
    _RESERVED_IDENTIFIER_FIXUP_3001.x = _RESERVED_IDENTIFIER_FIXUP_1741;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3004 = _RESERVED_IDENTIFIER_FIXUP_3422;
    _RESERVED_IDENTIFIER_FIXUP_3004.x = (_RESERVED_IDENTIFIER_FIXUP_1741 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1752 = _RESERVED_IDENTIFIER_FIXUP_1082.xyz * _RESERVED_IDENTIFIER_FIXUP_3004.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3006 = _RESERVED_IDENTIFIER_FIXUP_1082;
    _RESERVED_IDENTIFIER_FIXUP_3006.x = _RESERVED_IDENTIFIER_FIXUP_1752.x;
    _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1752.y;
    _RESERVED_IDENTIFIER_FIXUP_3006.z = _RESERVED_IDENTIFIER_FIXUP_1752.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1763 = _RESERVED_IDENTIFIER_FIXUP_3006.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3418).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3012 = _RESERVED_IDENTIFIER_FIXUP_3006;
    _RESERVED_IDENTIFIER_FIXUP_3012.x = _RESERVED_IDENTIFIER_FIXUP_1763.x;
    _RESERVED_IDENTIFIER_FIXUP_3012.y = _RESERVED_IDENTIFIER_FIXUP_1763.y;
    _RESERVED_IDENTIFIER_FIXUP_3012.z = _RESERVED_IDENTIFIER_FIXUP_1763.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1774 = _RESERVED_IDENTIFIER_FIXUP_3012.xyz + _RESERVED_IDENTIFIER_FIXUP_3012.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3018 = _RESERVED_IDENTIFIER_FIXUP_3012;
    _RESERVED_IDENTIFIER_FIXUP_3018.x = _RESERVED_IDENTIFIER_FIXUP_1774.x;
    _RESERVED_IDENTIFIER_FIXUP_3018.y = _RESERVED_IDENTIFIER_FIXUP_1774.y;
    _RESERVED_IDENTIFIER_FIXUP_3018.z = _RESERVED_IDENTIFIER_FIXUP_1774.z;
    _RESERVED_IDENTIFIER_FIXUP_3004.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3004.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3004.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1799 = (_RESERVED_IDENTIFIER_FIXUP_3004.xyz * _RESERVED_IDENTIFIER_FIXUP_3001.xxx) + _RESERVED_IDENTIFIER_FIXUP_3018.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3030 = _RESERVED_IDENTIFIER_FIXUP_3018;
    _RESERVED_IDENTIFIER_FIXUP_3030.x = _RESERVED_IDENTIFIER_FIXUP_1799.x;
    _RESERVED_IDENTIFIER_FIXUP_3030.y = _RESERVED_IDENTIFIER_FIXUP_1799.y;
    _RESERVED_IDENTIFIER_FIXUP_3030.z = _RESERVED_IDENTIFIER_FIXUP_1799.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1812 = _RESERVED_IDENTIFIER_FIXUP_3030.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3036 = _RESERVED_IDENTIFIER_FIXUP_3030;
    _RESERVED_IDENTIFIER_FIXUP_3036.x = _RESERVED_IDENTIFIER_FIXUP_1812.x;
    _RESERVED_IDENTIFIER_FIXUP_3036.y = _RESERVED_IDENTIFIER_FIXUP_1812.y;
    _RESERVED_IDENTIFIER_FIXUP_3036.z = _RESERVED_IDENTIFIER_FIXUP_1812.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1867 = OptTex0( texcoord0.xyz);
    vec2 param_41 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1871 = hdTex1(param_41);
    float _RESERVED_IDENTIFIER_FIXUP_1875 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1871.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3050 = _RESERVED_IDENTIFIER_FIXUP_1871;
    _RESERVED_IDENTIFIER_FIXUP_3050.x = _RESERVED_IDENTIFIER_FIXUP_1875;
    _RESERVED_IDENTIFIER_FIXUP_3050.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1885 = _RESERVED_IDENTIFIER_FIXUP_1867 * _RESERVED_IDENTIFIER_FIXUP_3050.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3057 = _RESERVED_IDENTIFIER_FIXUP_3050;
    _RESERVED_IDENTIFIER_FIXUP_3057.x = _RESERVED_IDENTIFIER_FIXUP_1089;
    float _RESERVED_IDENTIFIER_FIXUP_1898 = clamp((_RESERVED_IDENTIFIER_FIXUP_1089 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3057.x = _RESERVED_IDENTIFIER_FIXUP_1898;
    float _RESERVED_IDENTIFIER_FIXUP_1904 = ((-_RESERVED_IDENTIFIER_FIXUP_1898) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3057.y = _RESERVED_IDENTIFIER_FIXUP_1904;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3433;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3432;
    if (_RESERVED_IDENTIFIER_FIXUP_1904 != (-_RESERVED_IDENTIFIER_FIXUP_1904))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1916 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3069 = _RESERVED_IDENTIFIER_FIXUP_3057;
        _RESERVED_IDENTIFIER_FIXUP_3069.y = _RESERVED_IDENTIFIER_FIXUP_1916.x;
        _RESERVED_IDENTIFIER_FIXUP_3069.z = _RESERVED_IDENTIFIER_FIXUP_1916.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1926 = _RESERVED_IDENTIFIER_FIXUP_3069.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3073;
        _RESERVED_IDENTIFIER_FIXUP_3073.x = _RESERVED_IDENTIFIER_FIXUP_1926.x;
        _RESERVED_IDENTIFIER_FIXUP_3073.y = _RESERVED_IDENTIFIER_FIXUP_1926.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1936 = _RESERVED_IDENTIFIER_FIXUP_3069.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3077;
        _RESERVED_IDENTIFIER_FIXUP_3077.x = _RESERVED_IDENTIFIER_FIXUP_1936.x;
        _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_1936.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1946 = _RESERVED_IDENTIFIER_FIXUP_3069.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3081;
        _RESERVED_IDENTIFIER_FIXUP_3081.x = _RESERVED_IDENTIFIER_FIXUP_1946.x;
        _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1946.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1956 = _RESERVED_IDENTIFIER_FIXUP_3069.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3085;
        _RESERVED_IDENTIFIER_FIXUP_3085.x = _RESERVED_IDENTIFIER_FIXUP_1956.x;
        _RESERVED_IDENTIFIER_FIXUP_3085.y = _RESERVED_IDENTIFIER_FIXUP_1956.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1964 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_1964.xy;
        float param_43 = _RESERVED_IDENTIFIER_FIXUP_1964.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1970 = hdLod5(param_42, param_43);
        _RESERVED_IDENTIFIER_FIXUP_3073.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3077.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3081.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3085.w = 0.0;
        vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3073.xy;
        float param_45 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1970.y = hdLod5(param_44, param_45).x;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3077.xy;
        float param_47 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1970.z = hdLod5(param_46, param_47).x;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3081.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1970.w = hdLod5(param_48, param_49).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2027 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1970 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3085.xy;
        float param_51 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2033 = hdLod5(param_50, param_51).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3069.y = _RESERVED_IDENTIFIER_FIXUP_2033;
        float _RESERVED_IDENTIFIER_FIXUP_2038 = float(_RESERVED_IDENTIFIER_FIXUP_2033 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3069.y = _RESERVED_IDENTIFIER_FIXUP_2038;
        float _RESERVED_IDENTIFIER_FIXUP_2041 = dot(_RESERVED_IDENTIFIER_FIXUP_2027, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3069.z = _RESERVED_IDENTIFIER_FIXUP_2041;
        float _RESERVED_IDENTIFIER_FIXUP_2047 = _RESERVED_IDENTIFIER_FIXUP_2038 + _RESERVED_IDENTIFIER_FIXUP_2041;
        _RESERVED_IDENTIFIER_FIXUP_3069.y = _RESERVED_IDENTIFIER_FIXUP_2047;
        float _RESERVED_IDENTIFIER_FIXUP_2052 = (_RESERVED_IDENTIFIER_FIXUP_2047 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3069.y = _RESERVED_IDENTIFIER_FIXUP_2052;
        _RESERVED_IDENTIFIER_FIXUP_3069.x = (_RESERVED_IDENTIFIER_FIXUP_1898 * _RESERVED_IDENTIFIER_FIXUP_2052) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3433 = _RESERVED_IDENTIFIER_FIXUP_2027;
        _RESERVED_IDENTIFIER_FIXUP_3432 = _RESERVED_IDENTIFIER_FIXUP_3069;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3067 = _RESERVED_IDENTIFIER_FIXUP_3057;
        _RESERVED_IDENTIFIER_FIXUP_3067.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3433 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_3432 = _RESERVED_IDENTIFIER_FIXUP_3067;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3141 = _RESERVED_IDENTIFIER_FIXUP_3432;
    _RESERVED_IDENTIFIER_FIXUP_3141.y = _RESERVED_IDENTIFIER_FIXUP_1267;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3436;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3434;
    if (_RESERVED_IDENTIFIER_FIXUP_1267 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2079 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3302 = _RESERVED_IDENTIFIER_FIXUP_3141;
        _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_2079.x;
        _RESERVED_IDENTIFIER_FIXUP_3302.z = _RESERVED_IDENTIFIER_FIXUP_2079.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2089 = _RESERVED_IDENTIFIER_FIXUP_3302.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3306;
        _RESERVED_IDENTIFIER_FIXUP_3306.x = _RESERVED_IDENTIFIER_FIXUP_2089.x;
        _RESERVED_IDENTIFIER_FIXUP_3306.y = _RESERVED_IDENTIFIER_FIXUP_2089.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2099 = _RESERVED_IDENTIFIER_FIXUP_3302.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3310;
        _RESERVED_IDENTIFIER_FIXUP_3310.x = _RESERVED_IDENTIFIER_FIXUP_2099.x;
        _RESERVED_IDENTIFIER_FIXUP_3310.y = _RESERVED_IDENTIFIER_FIXUP_2099.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2109 = _RESERVED_IDENTIFIER_FIXUP_3302.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3314;
        _RESERVED_IDENTIFIER_FIXUP_3314.x = _RESERVED_IDENTIFIER_FIXUP_2109.x;
        _RESERVED_IDENTIFIER_FIXUP_3314.y = _RESERVED_IDENTIFIER_FIXUP_2109.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2119 = _RESERVED_IDENTIFIER_FIXUP_3302.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3318;
        _RESERVED_IDENTIFIER_FIXUP_3318.x = _RESERVED_IDENTIFIER_FIXUP_2119.x;
        _RESERVED_IDENTIFIER_FIXUP_3318.y = _RESERVED_IDENTIFIER_FIXUP_2119.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2127 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2127.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2127.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2133 = hdLod6(param_52, param_53);
        _RESERVED_IDENTIFIER_FIXUP_3306.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3310.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3314.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3318.w = 0.0;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3306.xy;
        float param_55 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2133.y = hdLod6(param_54, param_55).x;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3310.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2133.z = hdLod6(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3314.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2133.w = hdLod6(param_58, param_59).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2190 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2133 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3318.xy;
        float param_61 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2196 = hdLod6(param_60, param_61).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_2196;
        float _RESERVED_IDENTIFIER_FIXUP_2201 = float(_RESERVED_IDENTIFIER_FIXUP_2196 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_2201;
        float _RESERVED_IDENTIFIER_FIXUP_2204 = dot(_RESERVED_IDENTIFIER_FIXUP_2190, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3302.z = _RESERVED_IDENTIFIER_FIXUP_2204;
        float _RESERVED_IDENTIFIER_FIXUP_2210 = _RESERVED_IDENTIFIER_FIXUP_2201 + _RESERVED_IDENTIFIER_FIXUP_2204;
        _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_2210;
        _RESERVED_IDENTIFIER_FIXUP_3302.y = _RESERVED_IDENTIFIER_FIXUP_2210 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3436 = _RESERVED_IDENTIFIER_FIXUP_2190;
        _RESERVED_IDENTIFIER_FIXUP_3434 = _RESERVED_IDENTIFIER_FIXUP_3302;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2223 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3146 = _RESERVED_IDENTIFIER_FIXUP_3141;
        _RESERVED_IDENTIFIER_FIXUP_3146.z = _RESERVED_IDENTIFIER_FIXUP_2223;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3437;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3435;
        if (_RESERVED_IDENTIFIER_FIXUP_2223 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2232 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3236 = _RESERVED_IDENTIFIER_FIXUP_3146;
            _RESERVED_IDENTIFIER_FIXUP_3236.z = _RESERVED_IDENTIFIER_FIXUP_2232.x;
            _RESERVED_IDENTIFIER_FIXUP_3236.w = _RESERVED_IDENTIFIER_FIXUP_2232.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2242 = _RESERVED_IDENTIFIER_FIXUP_3236.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3240;
            _RESERVED_IDENTIFIER_FIXUP_3240.x = _RESERVED_IDENTIFIER_FIXUP_2242.x;
            _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_2242.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2252 = _RESERVED_IDENTIFIER_FIXUP_3236.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3244;
            _RESERVED_IDENTIFIER_FIXUP_3244.x = _RESERVED_IDENTIFIER_FIXUP_2252.x;
            _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_2252.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2262 = _RESERVED_IDENTIFIER_FIXUP_3236.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3248;
            _RESERVED_IDENTIFIER_FIXUP_3248.x = _RESERVED_IDENTIFIER_FIXUP_2262.x;
            _RESERVED_IDENTIFIER_FIXUP_3248.y = _RESERVED_IDENTIFIER_FIXUP_2262.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2272 = _RESERVED_IDENTIFIER_FIXUP_3236.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3252;
            _RESERVED_IDENTIFIER_FIXUP_3252.x = _RESERVED_IDENTIFIER_FIXUP_2272.x;
            _RESERVED_IDENTIFIER_FIXUP_3252.y = _RESERVED_IDENTIFIER_FIXUP_2272.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2280 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_2280.xy;
            float param_63 = _RESERVED_IDENTIFIER_FIXUP_2280.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2286 = hdLod7(param_62, param_63);
            _RESERVED_IDENTIFIER_FIXUP_3240.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3244.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3248.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3252.w = 0.0;
            vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3240.xy;
            float param_65 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2286.y = hdLod7(param_64, param_65).x;
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3244.xy;
            float param_67 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2286.z = hdLod7(param_66, param_67).x;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3248.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2286.w = hdLod7(param_68, param_69).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2343 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2286 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3252.xy;
            float param_71 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2349 = hdLod7(param_70, param_71).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3236.z = _RESERVED_IDENTIFIER_FIXUP_2349;
            float _RESERVED_IDENTIFIER_FIXUP_2354 = float(_RESERVED_IDENTIFIER_FIXUP_2349 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3236.z = _RESERVED_IDENTIFIER_FIXUP_2354;
            float _RESERVED_IDENTIFIER_FIXUP_2357 = dot(_RESERVED_IDENTIFIER_FIXUP_2343, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3236.w = _RESERVED_IDENTIFIER_FIXUP_2357;
            float _RESERVED_IDENTIFIER_FIXUP_2363 = _RESERVED_IDENTIFIER_FIXUP_2354 + _RESERVED_IDENTIFIER_FIXUP_2357;
            _RESERVED_IDENTIFIER_FIXUP_3236.z = _RESERVED_IDENTIFIER_FIXUP_2363;
            _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_2363 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3437 = _RESERVED_IDENTIFIER_FIXUP_2343;
            _RESERVED_IDENTIFIER_FIXUP_3435 = _RESERVED_IDENTIFIER_FIXUP_3236;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3150 = _RESERVED_IDENTIFIER_FIXUP_3433;
            _RESERVED_IDENTIFIER_FIXUP_3150.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3150.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2379 = (_RESERVED_IDENTIFIER_FIXUP_3150.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3155;
            _RESERVED_IDENTIFIER_FIXUP_3155.x = _RESERVED_IDENTIFIER_FIXUP_2379.x;
            _RESERVED_IDENTIFIER_FIXUP_3155.y = _RESERVED_IDENTIFIER_FIXUP_2379.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2389 = _RESERVED_IDENTIFIER_FIXUP_3155.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3159;
            _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_2389.x;
            _RESERVED_IDENTIFIER_FIXUP_3159.y = _RESERVED_IDENTIFIER_FIXUP_2389.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2399 = _RESERVED_IDENTIFIER_FIXUP_3155.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3163;
            _RESERVED_IDENTIFIER_FIXUP_3163.x = _RESERVED_IDENTIFIER_FIXUP_2399.x;
            _RESERVED_IDENTIFIER_FIXUP_3163.y = _RESERVED_IDENTIFIER_FIXUP_2399.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2409 = _RESERVED_IDENTIFIER_FIXUP_3155.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3167;
            _RESERVED_IDENTIFIER_FIXUP_3167.x = _RESERVED_IDENTIFIER_FIXUP_2409.x;
            _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_2409.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2419 = _RESERVED_IDENTIFIER_FIXUP_3155.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3171;
            _RESERVED_IDENTIFIER_FIXUP_3171.x = _RESERVED_IDENTIFIER_FIXUP_2419.x;
            _RESERVED_IDENTIFIER_FIXUP_3171.y = _RESERVED_IDENTIFIER_FIXUP_2419.y;
            _RESERVED_IDENTIFIER_FIXUP_3155.w = 0.0;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3155.xy;
            float param_73 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2433 = hdLod8(param_72, param_73);
            _RESERVED_IDENTIFIER_FIXUP_3159.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3163.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3167.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3171.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3159.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2433.y = hdLod8(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3163.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2433.z = hdLod8(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3167.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2433.w = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3171.xy;
            float param_81 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2496 = hdLod8(param_80, param_81).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3211 = _RESERVED_IDENTIFIER_FIXUP_3146;
            _RESERVED_IDENTIFIER_FIXUP_3211.z = _RESERVED_IDENTIFIER_FIXUP_2496;
            float _RESERVED_IDENTIFIER_FIXUP_2501 = float(_RESERVED_IDENTIFIER_FIXUP_2496 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3211.z = _RESERVED_IDENTIFIER_FIXUP_2501;
            float _RESERVED_IDENTIFIER_FIXUP_2504 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2433 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3211.w = _RESERVED_IDENTIFIER_FIXUP_2504;
            float _RESERVED_IDENTIFIER_FIXUP_2510 = _RESERVED_IDENTIFIER_FIXUP_2501 + _RESERVED_IDENTIFIER_FIXUP_2504;
            _RESERVED_IDENTIFIER_FIXUP_3211.z = _RESERVED_IDENTIFIER_FIXUP_2510;
            float _RESERVED_IDENTIFIER_FIXUP_2518 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3211.w = _RESERVED_IDENTIFIER_FIXUP_2518;
            float _RESERVED_IDENTIFIER_FIXUP_2524 = clamp((_RESERVED_IDENTIFIER_FIXUP_2518 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3211.w = _RESERVED_IDENTIFIER_FIXUP_2524;
            float _RESERVED_IDENTIFIER_FIXUP_2529 = (_RESERVED_IDENTIFIER_FIXUP_2510 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3211.z = _RESERVED_IDENTIFIER_FIXUP_2529;
            _RESERVED_IDENTIFIER_FIXUP_3211.y = (_RESERVED_IDENTIFIER_FIXUP_2524 * _RESERVED_IDENTIFIER_FIXUP_2529) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3437 = _RESERVED_IDENTIFIER_FIXUP_3150;
            _RESERVED_IDENTIFIER_FIXUP_3435 = _RESERVED_IDENTIFIER_FIXUP_3211;
        }
        _RESERVED_IDENTIFIER_FIXUP_3436 = _RESERVED_IDENTIFIER_FIXUP_3437;
        _RESERVED_IDENTIFIER_FIXUP_3434 = _RESERVED_IDENTIFIER_FIXUP_3435;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2544 = min(_RESERVED_IDENTIFIER_FIXUP_3434.y, _RESERVED_IDENTIFIER_FIXUP_3434.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3370 = _RESERVED_IDENTIFIER_FIXUP_3436;
    _RESERVED_IDENTIFIER_FIXUP_3370.x = _RESERVED_IDENTIFIER_FIXUP_2544;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3373 = _RESERVED_IDENTIFIER_FIXUP_3434;
    _RESERVED_IDENTIFIER_FIXUP_3373.x = (_RESERVED_IDENTIFIER_FIXUP_2544 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2555 = _RESERVED_IDENTIFIER_FIXUP_1885.xyz * _RESERVED_IDENTIFIER_FIXUP_3373.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3375 = _RESERVED_IDENTIFIER_FIXUP_1885;
    _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_2555.x;
    _RESERVED_IDENTIFIER_FIXUP_3375.y = _RESERVED_IDENTIFIER_FIXUP_2555.y;
    _RESERVED_IDENTIFIER_FIXUP_3375.z = _RESERVED_IDENTIFIER_FIXUP_2555.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2566 = _RESERVED_IDENTIFIER_FIXUP_3375.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3381 = _RESERVED_IDENTIFIER_FIXUP_3375;
    _RESERVED_IDENTIFIER_FIXUP_3381.x = _RESERVED_IDENTIFIER_FIXUP_2566.x;
    _RESERVED_IDENTIFIER_FIXUP_3381.y = _RESERVED_IDENTIFIER_FIXUP_2566.y;
    _RESERVED_IDENTIFIER_FIXUP_3381.z = _RESERVED_IDENTIFIER_FIXUP_2566.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2577 = _RESERVED_IDENTIFIER_FIXUP_3381.xyz + _RESERVED_IDENTIFIER_FIXUP_3381.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3387 = _RESERVED_IDENTIFIER_FIXUP_3381;
    _RESERVED_IDENTIFIER_FIXUP_3387.x = _RESERVED_IDENTIFIER_FIXUP_2577.x;
    _RESERVED_IDENTIFIER_FIXUP_3387.y = _RESERVED_IDENTIFIER_FIXUP_2577.y;
    _RESERVED_IDENTIFIER_FIXUP_3387.z = _RESERVED_IDENTIFIER_FIXUP_2577.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2588 = _RESERVED_IDENTIFIER_FIXUP_3387.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3373.x = _RESERVED_IDENTIFIER_FIXUP_2588.x;
    _RESERVED_IDENTIFIER_FIXUP_3373.y = _RESERVED_IDENTIFIER_FIXUP_2588.y;
    _RESERVED_IDENTIFIER_FIXUP_3373.z = _RESERVED_IDENTIFIER_FIXUP_2588.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2602 = (_RESERVED_IDENTIFIER_FIXUP_3373.xyz * _RESERVED_IDENTIFIER_FIXUP_3370.xxx) + _RESERVED_IDENTIFIER_FIXUP_3387.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3399 = _RESERVED_IDENTIFIER_FIXUP_3387;
    _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_2602.x;
    _RESERVED_IDENTIFIER_FIXUP_3399.y = _RESERVED_IDENTIFIER_FIXUP_2602.y;
    _RESERVED_IDENTIFIER_FIXUP_3399.z = _RESERVED_IDENTIFIER_FIXUP_2602.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2615 = _RESERVED_IDENTIFIER_FIXUP_3399.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3405 = _RESERVED_IDENTIFIER_FIXUP_3399;
    _RESERVED_IDENTIFIER_FIXUP_3405.x = _RESERVED_IDENTIFIER_FIXUP_2615.x;
    _RESERVED_IDENTIFIER_FIXUP_3405.y = _RESERVED_IDENTIFIER_FIXUP_2615.y;
    _RESERVED_IDENTIFIER_FIXUP_3405.z = _RESERVED_IDENTIFIER_FIXUP_2615.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3405.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_924 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_933;
    if (_RESERVED_IDENTIFIER_FIXUP_924)
    {
        _RESERVED_IDENTIFIER_FIXUP_933 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_933 = _RESERVED_IDENTIFIER_FIXUP_924;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_933)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_970 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3036.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_997 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2674;
    if (_RESERVED_IDENTIFIER_FIXUP_970 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2674 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_970), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_997);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2674 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_997);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2674;
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
    vec4 v4 = texcoord4;
    vec4 v5 = texcoord5;
    vec4 v6 = texcoord6;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB122 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB122.x;
        r1.z = hdB122.y;
        vec2 hdB144 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB144.x;
        r2.y = hdB144.y;
        vec2 hdB155 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB155.x;
        r3.y = hdB155.y;
        vec2 hdB166 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB166.x;
        r4.y = hdB166.y;
        vec2 hdB177 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB177.x;
        r5.y = hdB177.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = r6.xy;
        float param_2 = r6.w;
        r6 = hdLod5(param_1, param_2);
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
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v4.z);
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
    r1.y = max(abs(v5.x), abs(v5.y));
    if (r1.y < 1.0)
    {
        vec2 hdB308 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB308.x;
        r1.z = hdB308.y;
        vec2 hdB318 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB318.x;
        r2.y = hdB318.y;
        vec2 hdB328 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB328.x;
        r3.y = hdB328.y;
        vec2 hdB338 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB338.x;
        r4.y = hdB338.y;
        vec2 hdB348 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB348.x;
        r5.y = hdB348.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_11 = r6.xy;
        float param_12 = r6.w;
        r6 = hdLod6(param_11, param_12);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod6(param_13, param_14);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_15 = r3.xy;
        float param_16 = r3.w;
        r3 = hdLod6(param_15, param_16);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_17 = r4.xy;
        float param_18 = r4.w;
        r4 = hdLod6(param_17, param_18);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_19 = r5.xy;
        float param_20 = r5.w;
        r5 = hdLod6(param_19, param_20);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v6.x), abs(v6.y));
        if (r1.z < 1.0)
        {
            vec2 hdB463 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB463.x;
            r1.w = hdB463.y;
            vec2 hdB473 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB473.x;
            r2.y = hdB473.y;
            vec2 hdB483 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB483.x;
            r3.y = hdB483.y;
            vec2 hdB493 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB493.x;
            r4.y = hdB493.y;
            vec2 hdB503 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB503.x;
            r5.y = hdB503.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_21 = r6.xy;
            float param_22 = r6.w;
            r6 = hdLod7(param_21, param_22);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod7(param_23, param_24);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod7(param_25, param_26);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_27 = r4.xy;
            float param_28 = r4.w;
            r4 = hdLod7(param_27, param_28);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_29 = r5.xy;
            float param_30 = r5.w;
            r5 = hdLod7(param_29, param_30);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.z = r5.x + (-v6.z);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r2, vec4(1.0));
            r1.z += r1.w;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v4.w;
            r2.y = v5.w;
            vec2 hdB611 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB611.x;
            r3.y = hdB611.y;
            vec2 hdB621 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB621.x;
            r4.y = hdB621.y;
            vec2 hdB631 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB631.x;
            r5.y = hdB631.y;
            vec2 hdB641 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB641.x;
            r6.y = hdB641.y;
            vec2 hdB651 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB651.x;
            r7.y = hdB651.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_31 = r3.xy;
            float param_32 = r3.w;
            r3 = hdLod8(param_31, param_32);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_33 = r4.xy;
            float param_34 = r4.w;
            r4 = hdLod8(param_33, param_34);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_35 = r5.xy;
            float param_36 = r5.w;
            r5 = hdLod8(param_35, param_36);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_37 = r6.xy;
            float param_38 = r6.w;
            r6 = hdLod8(param_37, param_38);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_39 = r7.xy;
            float param_40 = r7.w;
            r7 = hdLod8(param_39, param_40);
            r3.y = r4.x;
            r3.z = r5.x;
            r3.w = r6.x;
            r3 += (-v6.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.z = r7.x + (-v6.w);
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
    vec4 hdB786 = r0;
    vec3 hdB790 = hdB786.xyz * r1.xxx;
    r0.x = hdB790.x;
    r0.y = hdB790.y;
    r0.z = hdB790.z;
    vec4 hdB797 = r0;
    vec3 hdB801 = hdB797.xyz * v0.xyz;
    r0.x = hdB801.x;
    r0.y = hdB801.y;
    r0.z = hdB801.z;
    vec4 hdB808 = r0;
    vec4 hdB810 = r0;
    vec3 hdB812 = hdB808.xyz + hdB810.xyz;
    r0.x = hdB812.x;
    r0.y = hdB812.y;
    r0.z = hdB812.z;
    vec3 hdB823 = r0.www * v1.xyz;
    r1.x = hdB823.x;
    r1.y = hdB823.y;
    r1.z = hdB823.z;
    vec4 hdB835 = r0;
    vec3 hdB837 = (r1.xyz * r2.xxx) + hdB835.xyz;
    r0.x = hdB837.x;
    r0.y = hdB837.y;
    r0.z = hdB837.z;
    vec4 hdB844 = r0;
    vec3 hdB851 = hdB844.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB851.x;
    r0.y = hdB851.y;
    r0.z = hdB851.z;
    vec3 hdB866 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB866.x;
    oC0.y = hdB866.y;
    oC0.z = hdB866.z;
    oC0.w = 1.0;
    bool hdB879 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB887;
    if (hdB879)
    {
        hdB887 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB887 = hdB879;
    }
    if (hdB887)
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
    bool _2980 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _2990;
    if (_2980)
    {
        _2990 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 482u) != 0u;
    }
    else
    {
        _2990 = _2980;
    }
    if (_2990)
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
        bool _3015 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3030;
        if (!_3015)
        {
            _3030 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 482u) != 0u;
        }
        else
        {
            _3030 = _3015;
        }
        if (_3030)
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
