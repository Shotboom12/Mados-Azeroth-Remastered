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
float _RESERVED_IDENTIFIER_FIXUP_3812;
vec4 _RESERVED_IDENTIFIER_FIXUP_3813;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1172 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1176 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_1180 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1176.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2987 = _RESERVED_IDENTIFIER_FIXUP_1176;
    _RESERVED_IDENTIFIER_FIXUP_2987.x = _RESERVED_IDENTIFIER_FIXUP_1180;
    _RESERVED_IDENTIFIER_FIXUP_2987.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1180;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1190 = _RESERVED_IDENTIFIER_FIXUP_1172 * _RESERVED_IDENTIFIER_FIXUP_2987.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_1197 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2994 = _RESERVED_IDENTIFIER_FIXUP_2987;
    _RESERVED_IDENTIFIER_FIXUP_2994.x = _RESERVED_IDENTIFIER_FIXUP_1197;
    float _RESERVED_IDENTIFIER_FIXUP_1203 = clamp((_RESERVED_IDENTIFIER_FIXUP_1197 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2994.x = _RESERVED_IDENTIFIER_FIXUP_1203;
    float _RESERVED_IDENTIFIER_FIXUP_1209 = ((-_RESERVED_IDENTIFIER_FIXUP_1203) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2994.x = _RESERVED_IDENTIFIER_FIXUP_1209;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3814;
    if (_RESERVED_IDENTIFIER_FIXUP_1209 != (-_RESERVED_IDENTIFIER_FIXUP_1209))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1221 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3233;
        _RESERVED_IDENTIFIER_FIXUP_3233.x = _RESERVED_IDENTIFIER_FIXUP_1221.x;
        _RESERVED_IDENTIFIER_FIXUP_3233.y = _RESERVED_IDENTIFIER_FIXUP_1221.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_3233.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3237;
        _RESERVED_IDENTIFIER_FIXUP_3237.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
        _RESERVED_IDENTIFIER_FIXUP_3237.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1241 = _RESERVED_IDENTIFIER_FIXUP_3233.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3241;
        _RESERVED_IDENTIFIER_FIXUP_3241.x = _RESERVED_IDENTIFIER_FIXUP_1241.x;
        _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_1241.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1251 = _RESERVED_IDENTIFIER_FIXUP_3233.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3245;
        _RESERVED_IDENTIFIER_FIXUP_3245.x = _RESERVED_IDENTIFIER_FIXUP_1251.x;
        _RESERVED_IDENTIFIER_FIXUP_3245.y = _RESERVED_IDENTIFIER_FIXUP_1251.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_3233.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3249;
        _RESERVED_IDENTIFIER_FIXUP_3249.x = _RESERVED_IDENTIFIER_FIXUP_1261.x;
        _RESERVED_IDENTIFIER_FIXUP_3249.y = _RESERVED_IDENTIFIER_FIXUP_1261.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1271 = _RESERVED_IDENTIFIER_FIXUP_3233.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3253;
        _RESERVED_IDENTIFIER_FIXUP_3253.x = _RESERVED_IDENTIFIER_FIXUP_1271.x;
        _RESERVED_IDENTIFIER_FIXUP_3253.y = _RESERVED_IDENTIFIER_FIXUP_1271.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1281 = _RESERVED_IDENTIFIER_FIXUP_3233.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3257;
        _RESERVED_IDENTIFIER_FIXUP_3257.x = _RESERVED_IDENTIFIER_FIXUP_1281.x;
        _RESERVED_IDENTIFIER_FIXUP_3257.y = _RESERVED_IDENTIFIER_FIXUP_1281.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_3233.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3261;
        _RESERVED_IDENTIFIER_FIXUP_3261.x = _RESERVED_IDENTIFIER_FIXUP_1291.x;
        _RESERVED_IDENTIFIER_FIXUP_3261.y = _RESERVED_IDENTIFIER_FIXUP_1291.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1301 = _RESERVED_IDENTIFIER_FIXUP_3233.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3265;
        _RESERVED_IDENTIFIER_FIXUP_3265.x = _RESERVED_IDENTIFIER_FIXUP_1301.x;
        _RESERVED_IDENTIFIER_FIXUP_3265.y = _RESERVED_IDENTIFIER_FIXUP_1301.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1309 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_1309.xy;
        float param_2 = _RESERVED_IDENTIFIER_FIXUP_1309.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1315 = hdLod5(param_1, param_2);
        _RESERVED_IDENTIFIER_FIXUP_3237.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3241.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3245.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3249.w = 0.0;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_3249.xy;
        float param_4 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1355 = hdLod5(param_3, param_4);
        _RESERVED_IDENTIFIER_FIXUP_3253.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3257.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3261.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3265.w = 0.0;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_3265.xy;
        float param_6 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1395 = hdLod5(param_5, param_6);
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_3237.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1315.y = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_3241.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1315.z = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_3245.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1315.w = hdLod5(param_11, param_12).x;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_3253.xy;
        float param_14 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1355.y = hdLod5(param_13, param_14).x;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3257.xy;
        float param_16 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1355.z = hdLod5(param_15, param_16).x;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3261.xy;
        float param_18 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1355.w = hdLod5(param_17, param_18).x;
        float _RESERVED_IDENTIFIER_FIXUP_1435 = _RESERVED_IDENTIFIER_FIXUP_1395.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3330 = _RESERVED_IDENTIFIER_FIXUP_1395;
        _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_1435;
        float _RESERVED_IDENTIFIER_FIXUP_1440 = float(_RESERVED_IDENTIFIER_FIXUP_1435 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_1440;
        float _RESERVED_IDENTIFIER_FIXUP_1443 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1315 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_1443;
        float _RESERVED_IDENTIFIER_FIXUP_1446 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1355 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3330.z = _RESERVED_IDENTIFIER_FIXUP_1446;
        float _RESERVED_IDENTIFIER_FIXUP_1452 = _RESERVED_IDENTIFIER_FIXUP_1443 + _RESERVED_IDENTIFIER_FIXUP_1446;
        _RESERVED_IDENTIFIER_FIXUP_3330.y = _RESERVED_IDENTIFIER_FIXUP_1452;
        float _RESERVED_IDENTIFIER_FIXUP_1458 = _RESERVED_IDENTIFIER_FIXUP_1440 + _RESERVED_IDENTIFIER_FIXUP_1452;
        _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_1458;
        _RESERVED_IDENTIFIER_FIXUP_3330.x = _RESERVED_IDENTIFIER_FIXUP_1458 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3814 = _RESERVED_IDENTIFIER_FIXUP_3330;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1471 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2994.y = _RESERVED_IDENTIFIER_FIXUP_1471;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3815;
        if (_RESERVED_IDENTIFIER_FIXUP_1471 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1480 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3167 = _RESERVED_IDENTIFIER_FIXUP_2994;
            _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1480.x;
            _RESERVED_IDENTIFIER_FIXUP_3167.z = _RESERVED_IDENTIFIER_FIXUP_1480.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1490 = _RESERVED_IDENTIFIER_FIXUP_3167.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3171;
            _RESERVED_IDENTIFIER_FIXUP_3171.x = _RESERVED_IDENTIFIER_FIXUP_1490.x;
            _RESERVED_IDENTIFIER_FIXUP_3171.y = _RESERVED_IDENTIFIER_FIXUP_1490.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1500 = _RESERVED_IDENTIFIER_FIXUP_3167.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3175;
            _RESERVED_IDENTIFIER_FIXUP_3175.x = _RESERVED_IDENTIFIER_FIXUP_1500.x;
            _RESERVED_IDENTIFIER_FIXUP_3175.y = _RESERVED_IDENTIFIER_FIXUP_1500.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_3167.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3179;
            _RESERVED_IDENTIFIER_FIXUP_3179.x = _RESERVED_IDENTIFIER_FIXUP_1510.x;
            _RESERVED_IDENTIFIER_FIXUP_3179.y = _RESERVED_IDENTIFIER_FIXUP_1510.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1520 = _RESERVED_IDENTIFIER_FIXUP_3167.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3183;
            _RESERVED_IDENTIFIER_FIXUP_3183.x = _RESERVED_IDENTIFIER_FIXUP_1520.x;
            _RESERVED_IDENTIFIER_FIXUP_3183.y = _RESERVED_IDENTIFIER_FIXUP_1520.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1528 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1528.xy;
            float param_20 = _RESERVED_IDENTIFIER_FIXUP_1528.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1534 = hdLod6(param_19, param_20);
            _RESERVED_IDENTIFIER_FIXUP_3171.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3175.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3179.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3183.w = 0.0;
            vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3171.xy;
            float param_22 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1534.y = hdLod6(param_21, param_22).x;
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_3175.xy;
            float param_24 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1534.z = hdLod6(param_23, param_24).x;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3179.xy;
            float param_26 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1534.w = hdLod6(param_25, param_26).x;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3183.xy;
            float param_28 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1597 = hdLod6(param_27, param_28).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1597;
            float _RESERVED_IDENTIFIER_FIXUP_1602 = float(_RESERVED_IDENTIFIER_FIXUP_1597 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1602;
            float _RESERVED_IDENTIFIER_FIXUP_1605 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1534 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3167.z = _RESERVED_IDENTIFIER_FIXUP_1605;
            float _RESERVED_IDENTIFIER_FIXUP_1611 = _RESERVED_IDENTIFIER_FIXUP_1602 + _RESERVED_IDENTIFIER_FIXUP_1605;
            _RESERVED_IDENTIFIER_FIXUP_3167.y = _RESERVED_IDENTIFIER_FIXUP_1611;
            _RESERVED_IDENTIFIER_FIXUP_3167.x = _RESERVED_IDENTIFIER_FIXUP_1611 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3815 = _RESERVED_IDENTIFIER_FIXUP_3167;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1624 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3011 = _RESERVED_IDENTIFIER_FIXUP_2994;
            _RESERVED_IDENTIFIER_FIXUP_3011.y = _RESERVED_IDENTIFIER_FIXUP_1624;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3816;
            if (_RESERVED_IDENTIFIER_FIXUP_1624 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1633 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3101 = _RESERVED_IDENTIFIER_FIXUP_3011;
                _RESERVED_IDENTIFIER_FIXUP_3101.y = _RESERVED_IDENTIFIER_FIXUP_1633.x;
                _RESERVED_IDENTIFIER_FIXUP_3101.z = _RESERVED_IDENTIFIER_FIXUP_1633.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1643 = _RESERVED_IDENTIFIER_FIXUP_3101.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3105;
                _RESERVED_IDENTIFIER_FIXUP_3105.x = _RESERVED_IDENTIFIER_FIXUP_1643.x;
                _RESERVED_IDENTIFIER_FIXUP_3105.y = _RESERVED_IDENTIFIER_FIXUP_1643.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1653 = _RESERVED_IDENTIFIER_FIXUP_3101.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3109;
                _RESERVED_IDENTIFIER_FIXUP_3109.x = _RESERVED_IDENTIFIER_FIXUP_1653.x;
                _RESERVED_IDENTIFIER_FIXUP_3109.y = _RESERVED_IDENTIFIER_FIXUP_1653.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1663 = _RESERVED_IDENTIFIER_FIXUP_3101.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3113;
                _RESERVED_IDENTIFIER_FIXUP_3113.x = _RESERVED_IDENTIFIER_FIXUP_1663.x;
                _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_1663.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1673 = _RESERVED_IDENTIFIER_FIXUP_3101.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3117;
                _RESERVED_IDENTIFIER_FIXUP_3117.x = _RESERVED_IDENTIFIER_FIXUP_1673.x;
                _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1673.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1681 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_1681.xy;
                float param_30 = _RESERVED_IDENTIFIER_FIXUP_1681.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1687 = hdLod7(param_29, param_30);
                _RESERVED_IDENTIFIER_FIXUP_3105.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3109.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3113.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3117.w = 0.0;
                vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3105.xy;
                float param_32 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1687.y = hdLod7(param_31, param_32).x;
                vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_3109.xy;
                float param_34 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1687.z = hdLod7(param_33, param_34).x;
                vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3113.xy;
                float param_36 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1687.w = hdLod7(param_35, param_36).x;
                vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3117.xy;
                float param_38 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1750 = hdLod7(param_37, param_38).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3101.y = _RESERVED_IDENTIFIER_FIXUP_1750;
                float _RESERVED_IDENTIFIER_FIXUP_1755 = float(_RESERVED_IDENTIFIER_FIXUP_1750 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3101.y = _RESERVED_IDENTIFIER_FIXUP_1755;
                float _RESERVED_IDENTIFIER_FIXUP_1758 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1687 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3101.z = _RESERVED_IDENTIFIER_FIXUP_1758;
                float _RESERVED_IDENTIFIER_FIXUP_1764 = _RESERVED_IDENTIFIER_FIXUP_1755 + _RESERVED_IDENTIFIER_FIXUP_1758;
                _RESERVED_IDENTIFIER_FIXUP_3101.y = _RESERVED_IDENTIFIER_FIXUP_1764;
                _RESERVED_IDENTIFIER_FIXUP_3101.x = _RESERVED_IDENTIFIER_FIXUP_1764 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3816 = _RESERVED_IDENTIFIER_FIXUP_3101;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3015 = vec4(0.0);
                _RESERVED_IDENTIFIER_FIXUP_3015.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3015.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1780 = (_RESERVED_IDENTIFIER_FIXUP_3015.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3020;
                _RESERVED_IDENTIFIER_FIXUP_3020.x = _RESERVED_IDENTIFIER_FIXUP_1780.x;
                _RESERVED_IDENTIFIER_FIXUP_3020.y = _RESERVED_IDENTIFIER_FIXUP_1780.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1790 = _RESERVED_IDENTIFIER_FIXUP_3020.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3024;
                _RESERVED_IDENTIFIER_FIXUP_3024.x = _RESERVED_IDENTIFIER_FIXUP_1790.x;
                _RESERVED_IDENTIFIER_FIXUP_3024.y = _RESERVED_IDENTIFIER_FIXUP_1790.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1800 = _RESERVED_IDENTIFIER_FIXUP_3020.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3028;
                _RESERVED_IDENTIFIER_FIXUP_3028.x = _RESERVED_IDENTIFIER_FIXUP_1800.x;
                _RESERVED_IDENTIFIER_FIXUP_3028.y = _RESERVED_IDENTIFIER_FIXUP_1800.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1810 = _RESERVED_IDENTIFIER_FIXUP_3020.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3032;
                _RESERVED_IDENTIFIER_FIXUP_3032.x = _RESERVED_IDENTIFIER_FIXUP_1810.x;
                _RESERVED_IDENTIFIER_FIXUP_3032.y = _RESERVED_IDENTIFIER_FIXUP_1810.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1820 = _RESERVED_IDENTIFIER_FIXUP_3020.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3036;
                _RESERVED_IDENTIFIER_FIXUP_3036.x = _RESERVED_IDENTIFIER_FIXUP_1820.x;
                _RESERVED_IDENTIFIER_FIXUP_3036.y = _RESERVED_IDENTIFIER_FIXUP_1820.y;
                _RESERVED_IDENTIFIER_FIXUP_3020.w = 0.0;
                vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3020.xy;
                float param_40 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1834 = hdLod8(param_39, param_40);
                _RESERVED_IDENTIFIER_FIXUP_3024.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3028.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3032.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3036.w = 0.0;
                vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3024.xy;
                float param_42 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1834.y = hdLod8(param_41, param_42).x;
                vec2 param_43 = _RESERVED_IDENTIFIER_FIXUP_3028.xy;
                float param_44 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1834.z = hdLod8(param_43, param_44).x;
                vec2 param_45 = _RESERVED_IDENTIFIER_FIXUP_3032.xy;
                float param_46 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_1834.w = hdLod8(param_45, param_46).x;
                vec2 param_47 = _RESERVED_IDENTIFIER_FIXUP_3036.xy;
                float param_48 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_1897 = hdLod8(param_47, param_48).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3076 = _RESERVED_IDENTIFIER_FIXUP_3011;
                _RESERVED_IDENTIFIER_FIXUP_3076.y = _RESERVED_IDENTIFIER_FIXUP_1897;
                float _RESERVED_IDENTIFIER_FIXUP_1902 = float(_RESERVED_IDENTIFIER_FIXUP_1897 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3076.y = _RESERVED_IDENTIFIER_FIXUP_1902;
                float _RESERVED_IDENTIFIER_FIXUP_1905 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1834 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3076.z = _RESERVED_IDENTIFIER_FIXUP_1905;
                float _RESERVED_IDENTIFIER_FIXUP_1911 = _RESERVED_IDENTIFIER_FIXUP_1902 + _RESERVED_IDENTIFIER_FIXUP_1905;
                _RESERVED_IDENTIFIER_FIXUP_3076.y = _RESERVED_IDENTIFIER_FIXUP_1911;
                float _RESERVED_IDENTIFIER_FIXUP_1919 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3076.z = _RESERVED_IDENTIFIER_FIXUP_1919;
                float _RESERVED_IDENTIFIER_FIXUP_1925 = clamp((_RESERVED_IDENTIFIER_FIXUP_1919 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3076.z = _RESERVED_IDENTIFIER_FIXUP_1925;
                float _RESERVED_IDENTIFIER_FIXUP_1930 = (_RESERVED_IDENTIFIER_FIXUP_1911 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3076.y = _RESERVED_IDENTIFIER_FIXUP_1930;
                _RESERVED_IDENTIFIER_FIXUP_3076.x = (_RESERVED_IDENTIFIER_FIXUP_1925 * _RESERVED_IDENTIFIER_FIXUP_1930) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3816 = _RESERVED_IDENTIFIER_FIXUP_3076;
            }
            _RESERVED_IDENTIFIER_FIXUP_3815 = _RESERVED_IDENTIFIER_FIXUP_3816;
        }
        _RESERVED_IDENTIFIER_FIXUP_3814 = _RESERVED_IDENTIFIER_FIXUP_3815;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3353 = _RESERVED_IDENTIFIER_FIXUP_3814;
    _RESERVED_IDENTIFIER_FIXUP_3353.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1958 = _RESERVED_IDENTIFIER_FIXUP_1190.xyz * _RESERVED_IDENTIFIER_FIXUP_3353.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3355 = _RESERVED_IDENTIFIER_FIXUP_1190;
    _RESERVED_IDENTIFIER_FIXUP_3355.x = _RESERVED_IDENTIFIER_FIXUP_1958.x;
    _RESERVED_IDENTIFIER_FIXUP_3355.y = _RESERVED_IDENTIFIER_FIXUP_1958.y;
    _RESERVED_IDENTIFIER_FIXUP_3355.z = _RESERVED_IDENTIFIER_FIXUP_1958.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1969 = _RESERVED_IDENTIFIER_FIXUP_3355.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3812).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3361 = _RESERVED_IDENTIFIER_FIXUP_3355;
    _RESERVED_IDENTIFIER_FIXUP_3361.x = _RESERVED_IDENTIFIER_FIXUP_1969.x;
    _RESERVED_IDENTIFIER_FIXUP_3361.y = _RESERVED_IDENTIFIER_FIXUP_1969.y;
    _RESERVED_IDENTIFIER_FIXUP_3361.z = _RESERVED_IDENTIFIER_FIXUP_1969.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1980 = _RESERVED_IDENTIFIER_FIXUP_3361.xyz + _RESERVED_IDENTIFIER_FIXUP_3361.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3367 = _RESERVED_IDENTIFIER_FIXUP_3361;
    _RESERVED_IDENTIFIER_FIXUP_3367.x = _RESERVED_IDENTIFIER_FIXUP_1980.x;
    _RESERVED_IDENTIFIER_FIXUP_3367.y = _RESERVED_IDENTIFIER_FIXUP_1980.y;
    _RESERVED_IDENTIFIER_FIXUP_3367.z = _RESERVED_IDENTIFIER_FIXUP_1980.z;
    _RESERVED_IDENTIFIER_FIXUP_3353.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3353.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3353.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2005 = (_RESERVED_IDENTIFIER_FIXUP_3353.yzw * _RESERVED_IDENTIFIER_FIXUP_3353.xxx) + _RESERVED_IDENTIFIER_FIXUP_3367.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3379 = _RESERVED_IDENTIFIER_FIXUP_3367;
    _RESERVED_IDENTIFIER_FIXUP_3379.x = _RESERVED_IDENTIFIER_FIXUP_2005.x;
    _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_2005.y;
    _RESERVED_IDENTIFIER_FIXUP_3379.z = _RESERVED_IDENTIFIER_FIXUP_2005.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2018 = _RESERVED_IDENTIFIER_FIXUP_3379.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3385 = _RESERVED_IDENTIFIER_FIXUP_3379;
    _RESERVED_IDENTIFIER_FIXUP_3385.x = _RESERVED_IDENTIFIER_FIXUP_2018.x;
    _RESERVED_IDENTIFIER_FIXUP_3385.y = _RESERVED_IDENTIFIER_FIXUP_2018.y;
    _RESERVED_IDENTIFIER_FIXUP_3385.z = _RESERVED_IDENTIFIER_FIXUP_2018.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2075 = OptTex0( texcoord0.xyz);
    vec2 param_49 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2079 = hdTex1(param_49);
    float _RESERVED_IDENTIFIER_FIXUP_2083 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_2079.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3399 = _RESERVED_IDENTIFIER_FIXUP_2079;
    _RESERVED_IDENTIFIER_FIXUP_3399.x = _RESERVED_IDENTIFIER_FIXUP_2083;
    _RESERVED_IDENTIFIER_FIXUP_3399.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_2083;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2093 = _RESERVED_IDENTIFIER_FIXUP_2075 * _RESERVED_IDENTIFIER_FIXUP_3399.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3406 = _RESERVED_IDENTIFIER_FIXUP_3399;
    _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_1197;
    float _RESERVED_IDENTIFIER_FIXUP_2106 = clamp((_RESERVED_IDENTIFIER_FIXUP_1197 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_2106;
    float _RESERVED_IDENTIFIER_FIXUP_2112 = ((-_RESERVED_IDENTIFIER_FIXUP_2106) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3406.x = _RESERVED_IDENTIFIER_FIXUP_2112;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3823;
    if (_RESERVED_IDENTIFIER_FIXUP_2112 != (-_RESERVED_IDENTIFIER_FIXUP_2112))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2124 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3645;
        _RESERVED_IDENTIFIER_FIXUP_3645.x = _RESERVED_IDENTIFIER_FIXUP_2124.x;
        _RESERVED_IDENTIFIER_FIXUP_3645.y = _RESERVED_IDENTIFIER_FIXUP_2124.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2134 = _RESERVED_IDENTIFIER_FIXUP_3645.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3649;
        _RESERVED_IDENTIFIER_FIXUP_3649.x = _RESERVED_IDENTIFIER_FIXUP_2134.x;
        _RESERVED_IDENTIFIER_FIXUP_3649.y = _RESERVED_IDENTIFIER_FIXUP_2134.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2144 = _RESERVED_IDENTIFIER_FIXUP_3645.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3653;
        _RESERVED_IDENTIFIER_FIXUP_3653.x = _RESERVED_IDENTIFIER_FIXUP_2144.x;
        _RESERVED_IDENTIFIER_FIXUP_3653.y = _RESERVED_IDENTIFIER_FIXUP_2144.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2154 = _RESERVED_IDENTIFIER_FIXUP_3645.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3657;
        _RESERVED_IDENTIFIER_FIXUP_3657.x = _RESERVED_IDENTIFIER_FIXUP_2154.x;
        _RESERVED_IDENTIFIER_FIXUP_3657.y = _RESERVED_IDENTIFIER_FIXUP_2154.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2164 = _RESERVED_IDENTIFIER_FIXUP_3645.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3661;
        _RESERVED_IDENTIFIER_FIXUP_3661.x = _RESERVED_IDENTIFIER_FIXUP_2164.x;
        _RESERVED_IDENTIFIER_FIXUP_3661.y = _RESERVED_IDENTIFIER_FIXUP_2164.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2174 = _RESERVED_IDENTIFIER_FIXUP_3645.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3665;
        _RESERVED_IDENTIFIER_FIXUP_3665.x = _RESERVED_IDENTIFIER_FIXUP_2174.x;
        _RESERVED_IDENTIFIER_FIXUP_3665.y = _RESERVED_IDENTIFIER_FIXUP_2174.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2184 = _RESERVED_IDENTIFIER_FIXUP_3645.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3669;
        _RESERVED_IDENTIFIER_FIXUP_3669.x = _RESERVED_IDENTIFIER_FIXUP_2184.x;
        _RESERVED_IDENTIFIER_FIXUP_3669.y = _RESERVED_IDENTIFIER_FIXUP_2184.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2194 = _RESERVED_IDENTIFIER_FIXUP_3645.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3673;
        _RESERVED_IDENTIFIER_FIXUP_3673.x = _RESERVED_IDENTIFIER_FIXUP_2194.x;
        _RESERVED_IDENTIFIER_FIXUP_3673.y = _RESERVED_IDENTIFIER_FIXUP_2194.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2204 = _RESERVED_IDENTIFIER_FIXUP_3645.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3677;
        _RESERVED_IDENTIFIER_FIXUP_3677.x = _RESERVED_IDENTIFIER_FIXUP_2204.x;
        _RESERVED_IDENTIFIER_FIXUP_3677.y = _RESERVED_IDENTIFIER_FIXUP_2204.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2212 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_2212.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2212.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2218 = hdLod5(param_50, param_51);
        _RESERVED_IDENTIFIER_FIXUP_3649.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3653.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3657.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3661.w = 0.0;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3661.xy;
        float param_53 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2258 = hdLod5(param_52, param_53);
        _RESERVED_IDENTIFIER_FIXUP_3665.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3669.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3673.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3677.w = 0.0;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3677.xy;
        float param_55 = 0.0;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2298 = hdLod5(param_54, param_55);
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3649.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2218.y = hdLod5(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3653.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2218.z = hdLod5(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3657.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2218.w = hdLod5(param_60, param_61).x;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3665.xy;
        float param_63 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2258.y = hdLod5(param_62, param_63).x;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3669.xy;
        float param_65 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2258.z = hdLod5(param_64, param_65).x;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3673.xy;
        float param_67 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2258.w = hdLod5(param_66, param_67).x;
        float _RESERVED_IDENTIFIER_FIXUP_2338 = _RESERVED_IDENTIFIER_FIXUP_2298.x - texcoord4.z;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3742 = _RESERVED_IDENTIFIER_FIXUP_2298;
        _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_2338;
        float _RESERVED_IDENTIFIER_FIXUP_2343 = float(_RESERVED_IDENTIFIER_FIXUP_2338 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_2343;
        float _RESERVED_IDENTIFIER_FIXUP_2346 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2218 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2346;
        float _RESERVED_IDENTIFIER_FIXUP_2349 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2258 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3742.z = _RESERVED_IDENTIFIER_FIXUP_2349;
        float _RESERVED_IDENTIFIER_FIXUP_2355 = _RESERVED_IDENTIFIER_FIXUP_2346 + _RESERVED_IDENTIFIER_FIXUP_2349;
        _RESERVED_IDENTIFIER_FIXUP_3742.y = _RESERVED_IDENTIFIER_FIXUP_2355;
        float _RESERVED_IDENTIFIER_FIXUP_2361 = _RESERVED_IDENTIFIER_FIXUP_2343 + _RESERVED_IDENTIFIER_FIXUP_2355;
        _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_2361;
        _RESERVED_IDENTIFIER_FIXUP_3742.x = _RESERVED_IDENTIFIER_FIXUP_2361 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3823 = _RESERVED_IDENTIFIER_FIXUP_3742;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2374 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3406.y = _RESERVED_IDENTIFIER_FIXUP_2374;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3824;
        if (_RESERVED_IDENTIFIER_FIXUP_2374 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2383 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3579 = _RESERVED_IDENTIFIER_FIXUP_3406;
            _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2383.x;
            _RESERVED_IDENTIFIER_FIXUP_3579.z = _RESERVED_IDENTIFIER_FIXUP_2383.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2393 = _RESERVED_IDENTIFIER_FIXUP_3579.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3583;
            _RESERVED_IDENTIFIER_FIXUP_3583.x = _RESERVED_IDENTIFIER_FIXUP_2393.x;
            _RESERVED_IDENTIFIER_FIXUP_3583.y = _RESERVED_IDENTIFIER_FIXUP_2393.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2403 = _RESERVED_IDENTIFIER_FIXUP_3579.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3587;
            _RESERVED_IDENTIFIER_FIXUP_3587.x = _RESERVED_IDENTIFIER_FIXUP_2403.x;
            _RESERVED_IDENTIFIER_FIXUP_3587.y = _RESERVED_IDENTIFIER_FIXUP_2403.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2413 = _RESERVED_IDENTIFIER_FIXUP_3579.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3591;
            _RESERVED_IDENTIFIER_FIXUP_3591.x = _RESERVED_IDENTIFIER_FIXUP_2413.x;
            _RESERVED_IDENTIFIER_FIXUP_3591.y = _RESERVED_IDENTIFIER_FIXUP_2413.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2423 = _RESERVED_IDENTIFIER_FIXUP_3579.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3595;
            _RESERVED_IDENTIFIER_FIXUP_3595.x = _RESERVED_IDENTIFIER_FIXUP_2423.x;
            _RESERVED_IDENTIFIER_FIXUP_3595.y = _RESERVED_IDENTIFIER_FIXUP_2423.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2431 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2431.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2431.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2437 = hdLod6(param_68, param_69);
            _RESERVED_IDENTIFIER_FIXUP_3583.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3587.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3591.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3595.w = 0.0;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3583.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2437.y = hdLod6(param_70, param_71).x;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3587.xy;
            float param_73 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2437.z = hdLod6(param_72, param_73).x;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3591.xy;
            float param_75 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2437.w = hdLod6(param_74, param_75).x;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3595.xy;
            float param_77 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2500 = hdLod6(param_76, param_77).x - texcoord5.z;
            _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2500;
            float _RESERVED_IDENTIFIER_FIXUP_2505 = float(_RESERVED_IDENTIFIER_FIXUP_2500 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2505;
            float _RESERVED_IDENTIFIER_FIXUP_2508 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2437 - texcoord5.zzzz, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3579.z = _RESERVED_IDENTIFIER_FIXUP_2508;
            float _RESERVED_IDENTIFIER_FIXUP_2514 = _RESERVED_IDENTIFIER_FIXUP_2505 + _RESERVED_IDENTIFIER_FIXUP_2508;
            _RESERVED_IDENTIFIER_FIXUP_3579.y = _RESERVED_IDENTIFIER_FIXUP_2514;
            _RESERVED_IDENTIFIER_FIXUP_3579.x = _RESERVED_IDENTIFIER_FIXUP_2514 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3824 = _RESERVED_IDENTIFIER_FIXUP_3579;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2527 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3423 = _RESERVED_IDENTIFIER_FIXUP_3406;
            _RESERVED_IDENTIFIER_FIXUP_3423.y = _RESERVED_IDENTIFIER_FIXUP_2527;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3825;
            if (_RESERVED_IDENTIFIER_FIXUP_2527 < 1.0)
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2536 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3513 = _RESERVED_IDENTIFIER_FIXUP_3423;
                _RESERVED_IDENTIFIER_FIXUP_3513.y = _RESERVED_IDENTIFIER_FIXUP_2536.x;
                _RESERVED_IDENTIFIER_FIXUP_3513.z = _RESERVED_IDENTIFIER_FIXUP_2536.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2546 = _RESERVED_IDENTIFIER_FIXUP_3513.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3517;
                _RESERVED_IDENTIFIER_FIXUP_3517.x = _RESERVED_IDENTIFIER_FIXUP_2546.x;
                _RESERVED_IDENTIFIER_FIXUP_3517.y = _RESERVED_IDENTIFIER_FIXUP_2546.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2556 = _RESERVED_IDENTIFIER_FIXUP_3513.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3521;
                _RESERVED_IDENTIFIER_FIXUP_3521.x = _RESERVED_IDENTIFIER_FIXUP_2556.x;
                _RESERVED_IDENTIFIER_FIXUP_3521.y = _RESERVED_IDENTIFIER_FIXUP_2556.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2566 = _RESERVED_IDENTIFIER_FIXUP_3513.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3525;
                _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2566.x;
                _RESERVED_IDENTIFIER_FIXUP_3525.y = _RESERVED_IDENTIFIER_FIXUP_2566.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2576 = _RESERVED_IDENTIFIER_FIXUP_3513.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3529;
                _RESERVED_IDENTIFIER_FIXUP_3529.x = _RESERVED_IDENTIFIER_FIXUP_2576.x;
                _RESERVED_IDENTIFIER_FIXUP_3529.y = _RESERVED_IDENTIFIER_FIXUP_2576.y;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2584 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2584.xy;
                float param_79 = _RESERVED_IDENTIFIER_FIXUP_2584.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2590 = hdLod7(param_78, param_79);
                _RESERVED_IDENTIFIER_FIXUP_3517.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3521.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3525.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3529.w = 0.0;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3517.xy;
                float param_81 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2590.y = hdLod7(param_80, param_81).x;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3521.xy;
                float param_83 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2590.z = hdLod7(param_82, param_83).x;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3525.xy;
                float param_85 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2590.w = hdLod7(param_84, param_85).x;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3529.xy;
                float param_87 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2653 = hdLod7(param_86, param_87).x - texcoord6.z;
                _RESERVED_IDENTIFIER_FIXUP_3513.y = _RESERVED_IDENTIFIER_FIXUP_2653;
                float _RESERVED_IDENTIFIER_FIXUP_2658 = float(_RESERVED_IDENTIFIER_FIXUP_2653 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3513.y = _RESERVED_IDENTIFIER_FIXUP_2658;
                float _RESERVED_IDENTIFIER_FIXUP_2661 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2590 - texcoord6.zzzz, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3513.z = _RESERVED_IDENTIFIER_FIXUP_2661;
                float _RESERVED_IDENTIFIER_FIXUP_2667 = _RESERVED_IDENTIFIER_FIXUP_2658 + _RESERVED_IDENTIFIER_FIXUP_2661;
                _RESERVED_IDENTIFIER_FIXUP_3513.y = _RESERVED_IDENTIFIER_FIXUP_2667;
                _RESERVED_IDENTIFIER_FIXUP_3513.x = _RESERVED_IDENTIFIER_FIXUP_2667 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3825 = _RESERVED_IDENTIFIER_FIXUP_3513;
            }
            else
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_3427 = vec4(0.0);
                _RESERVED_IDENTIFIER_FIXUP_3427.x = texcoord4.w;
                _RESERVED_IDENTIFIER_FIXUP_3427.y = texcoord5.w;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2683 = (_RESERVED_IDENTIFIER_FIXUP_3427.xy * vec2(0.5)) + vec2(0.5);
                vec4 _RESERVED_IDENTIFIER_FIXUP_3432;
                _RESERVED_IDENTIFIER_FIXUP_3432.x = _RESERVED_IDENTIFIER_FIXUP_2683.x;
                _RESERVED_IDENTIFIER_FIXUP_3432.y = _RESERVED_IDENTIFIER_FIXUP_2683.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2693 = _RESERVED_IDENTIFIER_FIXUP_3432.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3436;
                _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_2693.x;
                _RESERVED_IDENTIFIER_FIXUP_3436.y = _RESERVED_IDENTIFIER_FIXUP_2693.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2703 = _RESERVED_IDENTIFIER_FIXUP_3432.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3440;
                _RESERVED_IDENTIFIER_FIXUP_3440.x = _RESERVED_IDENTIFIER_FIXUP_2703.x;
                _RESERVED_IDENTIFIER_FIXUP_3440.y = _RESERVED_IDENTIFIER_FIXUP_2703.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2713 = _RESERVED_IDENTIFIER_FIXUP_3432.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3444;
                _RESERVED_IDENTIFIER_FIXUP_3444.x = _RESERVED_IDENTIFIER_FIXUP_2713.x;
                _RESERVED_IDENTIFIER_FIXUP_3444.y = _RESERVED_IDENTIFIER_FIXUP_2713.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2723 = _RESERVED_IDENTIFIER_FIXUP_3432.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3448;
                _RESERVED_IDENTIFIER_FIXUP_3448.x = _RESERVED_IDENTIFIER_FIXUP_2723.x;
                _RESERVED_IDENTIFIER_FIXUP_3448.y = _RESERVED_IDENTIFIER_FIXUP_2723.y;
                _RESERVED_IDENTIFIER_FIXUP_3432.w = 0.0;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3432.xy;
                float param_89 = 0.0;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2737 = hdLod8(param_88, param_89);
                _RESERVED_IDENTIFIER_FIXUP_3436.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3440.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3444.w = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_3448.w = 0.0;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3436.xy;
                float param_91 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2737.y = hdLod8(param_90, param_91).x;
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_3440.xy;
                float param_93 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2737.z = hdLod8(param_92, param_93).x;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3444.xy;
                float param_95 = 0.0;
                _RESERVED_IDENTIFIER_FIXUP_2737.w = hdLod8(param_94, param_95).x;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3448.xy;
                float param_97 = 0.0;
                float _RESERVED_IDENTIFIER_FIXUP_2800 = hdLod8(param_96, param_97).x - texcoord6.w;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3488 = _RESERVED_IDENTIFIER_FIXUP_3423;
                _RESERVED_IDENTIFIER_FIXUP_3488.y = _RESERVED_IDENTIFIER_FIXUP_2800;
                float _RESERVED_IDENTIFIER_FIXUP_2805 = float(_RESERVED_IDENTIFIER_FIXUP_2800 >= 0.0);
                _RESERVED_IDENTIFIER_FIXUP_3488.y = _RESERVED_IDENTIFIER_FIXUP_2805;
                float _RESERVED_IDENTIFIER_FIXUP_2808 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2737 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
                _RESERVED_IDENTIFIER_FIXUP_3488.z = _RESERVED_IDENTIFIER_FIXUP_2808;
                float _RESERVED_IDENTIFIER_FIXUP_2814 = _RESERVED_IDENTIFIER_FIXUP_2805 + _RESERVED_IDENTIFIER_FIXUP_2808;
                _RESERVED_IDENTIFIER_FIXUP_3488.y = _RESERVED_IDENTIFIER_FIXUP_2814;
                float _RESERVED_IDENTIFIER_FIXUP_2822 = max(abs(texcoord4.w), abs(texcoord5.w));
                _RESERVED_IDENTIFIER_FIXUP_3488.z = _RESERVED_IDENTIFIER_FIXUP_2822;
                float _RESERVED_IDENTIFIER_FIXUP_2828 = clamp((_RESERVED_IDENTIFIER_FIXUP_2822 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                _RESERVED_IDENTIFIER_FIXUP_3488.z = _RESERVED_IDENTIFIER_FIXUP_2828;
                float _RESERVED_IDENTIFIER_FIXUP_2833 = (_RESERVED_IDENTIFIER_FIXUP_2814 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3488.y = _RESERVED_IDENTIFIER_FIXUP_2833;
                _RESERVED_IDENTIFIER_FIXUP_3488.x = (_RESERVED_IDENTIFIER_FIXUP_2828 * _RESERVED_IDENTIFIER_FIXUP_2833) + 1.0;
                _RESERVED_IDENTIFIER_FIXUP_3825 = _RESERVED_IDENTIFIER_FIXUP_3488;
            }
            _RESERVED_IDENTIFIER_FIXUP_3824 = _RESERVED_IDENTIFIER_FIXUP_3825;
        }
        _RESERVED_IDENTIFIER_FIXUP_3823 = _RESERVED_IDENTIFIER_FIXUP_3824;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2848 = (_RESERVED_IDENTIFIER_FIXUP_3823.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3763 = _RESERVED_IDENTIFIER_FIXUP_3823;
    _RESERVED_IDENTIFIER_FIXUP_3763.y = _RESERVED_IDENTIFIER_FIXUP_2848;
    _RESERVED_IDENTIFIER_FIXUP_3763.y = _RESERVED_IDENTIFIER_FIXUP_2848;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2861 = _RESERVED_IDENTIFIER_FIXUP_2093.xyz * _RESERVED_IDENTIFIER_FIXUP_3763.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3769 = _RESERVED_IDENTIFIER_FIXUP_2093;
    _RESERVED_IDENTIFIER_FIXUP_3769.x = _RESERVED_IDENTIFIER_FIXUP_2861.x;
    _RESERVED_IDENTIFIER_FIXUP_3769.y = _RESERVED_IDENTIFIER_FIXUP_2861.y;
    _RESERVED_IDENTIFIER_FIXUP_3769.z = _RESERVED_IDENTIFIER_FIXUP_2861.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2872 = _RESERVED_IDENTIFIER_FIXUP_3769.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3775 = _RESERVED_IDENTIFIER_FIXUP_3769;
    _RESERVED_IDENTIFIER_FIXUP_3775.x = _RESERVED_IDENTIFIER_FIXUP_2872.x;
    _RESERVED_IDENTIFIER_FIXUP_3775.y = _RESERVED_IDENTIFIER_FIXUP_2872.y;
    _RESERVED_IDENTIFIER_FIXUP_3775.z = _RESERVED_IDENTIFIER_FIXUP_2872.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2883 = _RESERVED_IDENTIFIER_FIXUP_3775.xyz + _RESERVED_IDENTIFIER_FIXUP_3775.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3781 = _RESERVED_IDENTIFIER_FIXUP_3775;
    _RESERVED_IDENTIFIER_FIXUP_3781.x = _RESERVED_IDENTIFIER_FIXUP_2883.x;
    _RESERVED_IDENTIFIER_FIXUP_3781.y = _RESERVED_IDENTIFIER_FIXUP_2883.y;
    _RESERVED_IDENTIFIER_FIXUP_3781.z = _RESERVED_IDENTIFIER_FIXUP_2883.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2894 = _RESERVED_IDENTIFIER_FIXUP_3781.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_3763.y = _RESERVED_IDENTIFIER_FIXUP_2894.x;
    _RESERVED_IDENTIFIER_FIXUP_3763.z = _RESERVED_IDENTIFIER_FIXUP_2894.y;
    _RESERVED_IDENTIFIER_FIXUP_3763.w = _RESERVED_IDENTIFIER_FIXUP_2894.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2908 = (_RESERVED_IDENTIFIER_FIXUP_3763.yzw * _RESERVED_IDENTIFIER_FIXUP_3763.xxx) + _RESERVED_IDENTIFIER_FIXUP_3781.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3793 = _RESERVED_IDENTIFIER_FIXUP_3781;
    _RESERVED_IDENTIFIER_FIXUP_3793.x = _RESERVED_IDENTIFIER_FIXUP_2908.x;
    _RESERVED_IDENTIFIER_FIXUP_3793.y = _RESERVED_IDENTIFIER_FIXUP_2908.y;
    _RESERVED_IDENTIFIER_FIXUP_3793.z = _RESERVED_IDENTIFIER_FIXUP_2908.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2921 = _RESERVED_IDENTIFIER_FIXUP_3793.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3799 = _RESERVED_IDENTIFIER_FIXUP_3793;
    _RESERVED_IDENTIFIER_FIXUP_3799.x = _RESERVED_IDENTIFIER_FIXUP_2921.x;
    _RESERVED_IDENTIFIER_FIXUP_3799.y = _RESERVED_IDENTIFIER_FIXUP_2921.y;
    _RESERVED_IDENTIFIER_FIXUP_3799.z = _RESERVED_IDENTIFIER_FIXUP_2921.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3799.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1029 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1038;
    if (_RESERVED_IDENTIFIER_FIXUP_1029)
    {
        _RESERVED_IDENTIFIER_FIXUP_1038 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1038 = _RESERVED_IDENTIFIER_FIXUP_1029;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1038)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1075 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3385.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1102 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2980;
    if (_RESERVED_IDENTIFIER_FIXUP_1075 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2980 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1075), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1102);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2980 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1102);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2980;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2848);
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
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 hdB124 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB124.x;
        r1.y = hdB124.y;
        vec2 hdB145 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB145.x;
        r2.y = hdB145.y;
        vec2 hdB156 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = hdB156.x;
        r3.y = hdB156.y;
        vec2 hdB167 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB167.x;
        r4.y = hdB167.y;
        vec2 hdB178 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = hdB178.x;
        r5.y = hdB178.y;
        vec2 hdB189 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = hdB189.x;
        r6.y = hdB189.y;
        vec2 hdB200 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = hdB200.x;
        r7.y = hdB200.y;
        vec2 hdB211 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = hdB211.x;
        r8.y = hdB211.y;
        vec4 hdB216 = r1;
        vec2 hdB222 = hdB216.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB222.x;
        r1.y = hdB222.y;
        r9 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
            vec2 hdB410 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB410.x;
            r1.z = hdB410.y;
            vec2 hdB420 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB420.x;
            r2.y = hdB420.y;
            vec2 hdB430 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB430.x;
            r3.y = hdB430.y;
            vec2 hdB440 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB440.x;
            r4.y = hdB440.y;
            vec2 hdB450 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB450.x;
            r5.y = hdB450.y;
            r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
                vec2 hdB566 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = hdB566.x;
                r1.z = hdB566.y;
                vec2 hdB576 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB576.x;
                r2.y = hdB576.y;
                vec2 hdB586 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = hdB586.x;
                r3.y = hdB586.y;
                vec2 hdB596 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB596.x;
                r4.y = hdB596.y;
                vec2 hdB606 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = hdB606.x;
                r5.y = hdB606.y;
                r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
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
                vec2 hdB714 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = hdB714.x;
                r3.y = hdB714.y;
                vec2 hdB724 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB724.x;
                r4.y = hdB724.y;
                vec2 hdB734 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = hdB734.x;
                r5.y = hdB734.y;
                vec2 hdB744 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = hdB744.x;
                r6.y = hdB744.y;
                vec2 hdB754 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = hdB754.x;
                r7.y = hdB754.y;
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
    vec4 hdB884 = r0;
    vec3 hdB888 = hdB884.xyz * r1.yyy;
    r0.x = hdB888.x;
    r0.y = hdB888.y;
    r0.z = hdB888.z;
    vec4 hdB895 = r0;
    vec3 hdB899 = hdB895.xyz * v0.xyz;
    r0.x = hdB899.x;
    r0.y = hdB899.y;
    r0.z = hdB899.z;
    vec4 hdB906 = r0;
    vec4 hdB908 = r0;
    vec3 hdB910 = hdB906.xyz + hdB908.xyz;
    r0.x = hdB910.x;
    r0.y = hdB910.y;
    r0.z = hdB910.z;
    vec3 hdB921 = r0.www * v1.xyz;
    r1.y = hdB921.x;
    r1.z = hdB921.y;
    r1.w = hdB921.z;
    vec4 hdB933 = r0;
    vec3 hdB935 = (r1.yzw * r1.xxx) + hdB933.xyz;
    r0.x = hdB935.x;
    r0.y = hdB935.y;
    r0.z = hdB935.z;
    vec4 hdB942 = r0;
    vec3 hdB949 = hdB942.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB949.x;
    r0.y = hdB949.y;
    r0.z = hdB949.z;
    vec3 hdB964 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB964.x;
    oC0.y = hdB964.y;
    oC0.z = hdB964.z;
    oC0.w = 1.0;
    bool hdB977 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB985;
    if (hdB977)
    {
        hdB985 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB985 = hdB977;
    }
    if (hdB985)
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
    bool _3235 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3245;
    if (_3235)
    {
        _3245 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 482u) != 0u;
    }
    else
    {
        _3245 = _3235;
    }
    if (_3245)
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
        bool _3270 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3285;
        if (!_3270)
        {
            _3285 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 482u) != 0u;
        }
        else
        {
            _3285 = _3270;
        }
        if (_3285)
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
