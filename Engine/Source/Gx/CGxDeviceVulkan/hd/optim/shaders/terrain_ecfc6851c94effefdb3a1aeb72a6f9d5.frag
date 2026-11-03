#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 6) in vec4 texcoord4;
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
float _RESERVED_IDENTIFIER_FIXUP_1477;
vec4 _RESERVED_IDENTIFIER_FIXUP_1478;


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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _46 = hdOverride >= 0;
    bool _65;
    if (_46)
    {
        _65 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _65 = _46;
    }
    vec4 _66;
    if (_65)
    {
        _66 = vec4(float(hdOverride));
    }
    else
    {
        _66 = value;
    }
    return _66;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _83 = hdOverride >= 0;
    bool _93;
    if (_83)
    {
        _93 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _93 = _83;
    }
    vec4 _94;
    if (_93)
    {
        _94 = vec4(float(hdOverride));
    }
    else
    {
        _94 = value;
    }
    return _94;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _112 = hdOverride >= 0;
    bool _122;
    if (_112)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _122 = _112;
    }
    vec4 _123;
    if (_122)
    {
        _123 = vec4(float(hdOverride));
    }
    else
    {
        _123 = value;
    }
    return _123;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_569 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_573 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_577 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_589 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1214 = _RESERVED_IDENTIFIER_FIXUP_569;
    _RESERVED_IDENTIFIER_FIXUP_1214.x = _RESERVED_IDENTIFIER_FIXUP_589;
    float _RESERVED_IDENTIFIER_FIXUP_595 = clamp((_RESERVED_IDENTIFIER_FIXUP_589 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1214.x = _RESERVED_IDENTIFIER_FIXUP_595;
    float _RESERVED_IDENTIFIER_FIXUP_601 = ((-_RESERVED_IDENTIFIER_FIXUP_595) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1214.y = _RESERVED_IDENTIFIER_FIXUP_601;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1480;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1479;
    if (_RESERVED_IDENTIFIER_FIXUP_601 != (-_RESERVED_IDENTIFIER_FIXUP_601))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_613 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_623 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_625 = _RESERVED_IDENTIFIER_FIXUP_623.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_1214;
        _RESERVED_IDENTIFIER_FIXUP_1228.y = _RESERVED_IDENTIFIER_FIXUP_625;
        _RESERVED_IDENTIFIER_FIXUP_1228.z = _RESERVED_IDENTIFIER_FIXUP_623.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_633 = _RESERVED_IDENTIFIER_FIXUP_1228.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1232;
        _RESERVED_IDENTIFIER_FIXUP_1232.x = _RESERVED_IDENTIFIER_FIXUP_633.x;
        _RESERVED_IDENTIFIER_FIXUP_1232.y = _RESERVED_IDENTIFIER_FIXUP_633.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_640 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_644 = _RESERVED_IDENTIFIER_FIXUP_640.y;
        _RESERVED_IDENTIFIER_FIXUP_1232.w = _RESERVED_IDENTIFIER_FIXUP_644;
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_613.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_613.w;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1232.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_644;
        float _RESERVED_IDENTIFIER_FIXUP_655 = hdLod5(param_2, param_3).x + hdLod5(param_4, param_5).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1485 = vec4(_RESERVED_IDENTIFIER_FIXUP_595, _RESERVED_IDENTIFIER_FIXUP_625, _RESERVED_IDENTIFIER_FIXUP_623.y, _RESERVED_IDENTIFIER_FIXUP_655);
        vec2 _RESERVED_IDENTIFIER_FIXUP_662 = _RESERVED_IDENTIFIER_FIXUP_1485.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1245;
        _RESERVED_IDENTIFIER_FIXUP_1245.x = _RESERVED_IDENTIFIER_FIXUP_662.x;
        _RESERVED_IDENTIFIER_FIXUP_1245.y = _RESERVED_IDENTIFIER_FIXUP_662.y;
        _RESERVED_IDENTIFIER_FIXUP_1245.w = _RESERVED_IDENTIFIER_FIXUP_644;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1245.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_644;
        float _RESERVED_IDENTIFIER_FIXUP_684 = _RESERVED_IDENTIFIER_FIXUP_655 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_1485.w = _RESERVED_IDENTIFIER_FIXUP_684;
        vec2 _RESERVED_IDENTIFIER_FIXUP_691 = _RESERVED_IDENTIFIER_FIXUP_1485.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1258;
        _RESERVED_IDENTIFIER_FIXUP_1258.x = _RESERVED_IDENTIFIER_FIXUP_691.x;
        _RESERVED_IDENTIFIER_FIXUP_1258.y = _RESERVED_IDENTIFIER_FIXUP_691.y;
        _RESERVED_IDENTIFIER_FIXUP_1258.w = _RESERVED_IDENTIFIER_FIXUP_644;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1258.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_644;
        float _RESERVED_IDENTIFIER_FIXUP_713 = _RESERVED_IDENTIFIER_FIXUP_684 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1485.w = _RESERVED_IDENTIFIER_FIXUP_713;
        vec2 _RESERVED_IDENTIFIER_FIXUP_720 = _RESERVED_IDENTIFIER_FIXUP_1485.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1271;
        _RESERVED_IDENTIFIER_FIXUP_1271.x = _RESERVED_IDENTIFIER_FIXUP_720.x;
        _RESERVED_IDENTIFIER_FIXUP_1271.y = _RESERVED_IDENTIFIER_FIXUP_720.y;
        _RESERVED_IDENTIFIER_FIXUP_1271.w = _RESERVED_IDENTIFIER_FIXUP_644;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1271.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_644;
        vec4 _RESERVED_IDENTIFIER_FIXUP_737 = hdLod5(param_10, param_11);
        float _RESERVED_IDENTIFIER_FIXUP_742 = _RESERVED_IDENTIFIER_FIXUP_713 + _RESERVED_IDENTIFIER_FIXUP_737.x;
        _RESERVED_IDENTIFIER_FIXUP_1485.y = _RESERVED_IDENTIFIER_FIXUP_742;
        float _RESERVED_IDENTIFIER_FIXUP_747 = (_RESERVED_IDENTIFIER_FIXUP_742 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1485.y = _RESERVED_IDENTIFIER_FIXUP_747;
        float _RESERVED_IDENTIFIER_FIXUP_754 = (_RESERVED_IDENTIFIER_FIXUP_595 * _RESERVED_IDENTIFIER_FIXUP_747) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1485.x = _RESERVED_IDENTIFIER_FIXUP_754;
        _RESERVED_IDENTIFIER_FIXUP_737.x = min(_RESERVED_IDENTIFIER_FIXUP_754, _RESERVED_IDENTIFIER_FIXUP_577.w);
        _RESERVED_IDENTIFIER_FIXUP_1480 = _RESERVED_IDENTIFIER_FIXUP_1485;
        _RESERVED_IDENTIFIER_FIXUP_1479 = _RESERVED_IDENTIFIER_FIXUP_737;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1225 = _RESERVED_IDENTIFIER_FIXUP_573;
        _RESERVED_IDENTIFIER_FIXUP_1225.x = _RESERVED_IDENTIFIER_FIXUP_577.w;
        _RESERVED_IDENTIFIER_FIXUP_1480 = _RESERVED_IDENTIFIER_FIXUP_1214;
        _RESERVED_IDENTIFIER_FIXUP_1479 = _RESERVED_IDENTIFIER_FIXUP_1225;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1298 = _RESERVED_IDENTIFIER_FIXUP_1480;
    _RESERVED_IDENTIFIER_FIXUP_1298.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_783 = mix(_RESERVED_IDENTIFIER_FIXUP_569, _RESERVED_IDENTIFIER_FIXUP_573, _RESERVED_IDENTIFIER_FIXUP_577.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_1298.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1300 = _RESERVED_IDENTIFIER_FIXUP_1298;
    _RESERVED_IDENTIFIER_FIXUP_1300.x = _RESERVED_IDENTIFIER_FIXUP_783.x;
    _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_783.y;
    _RESERVED_IDENTIFIER_FIXUP_1300.z = _RESERVED_IDENTIFIER_FIXUP_783.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_794 = _RESERVED_IDENTIFIER_FIXUP_1300.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1477).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1306 = _RESERVED_IDENTIFIER_FIXUP_1300;
    _RESERVED_IDENTIFIER_FIXUP_1306.x = _RESERVED_IDENTIFIER_FIXUP_794.x;
    _RESERVED_IDENTIFIER_FIXUP_1306.y = _RESERVED_IDENTIFIER_FIXUP_794.y;
    _RESERVED_IDENTIFIER_FIXUP_1306.z = _RESERVED_IDENTIFIER_FIXUP_794.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_805 = _RESERVED_IDENTIFIER_FIXUP_1306.xyz + _RESERVED_IDENTIFIER_FIXUP_1306.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_1306;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_805.x;
    _RESERVED_IDENTIFIER_FIXUP_1312.y = _RESERVED_IDENTIFIER_FIXUP_805.y;
    _RESERVED_IDENTIFIER_FIXUP_1312.z = _RESERVED_IDENTIFIER_FIXUP_805.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1318 = _RESERVED_IDENTIFIER_FIXUP_1479;
    _RESERVED_IDENTIFIER_FIXUP_1318.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1318.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1318.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_830 = (_RESERVED_IDENTIFIER_FIXUP_1318.yzw * _RESERVED_IDENTIFIER_FIXUP_1318.xxx) + _RESERVED_IDENTIFIER_FIXUP_1312.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1324 = _RESERVED_IDENTIFIER_FIXUP_1312;
    _RESERVED_IDENTIFIER_FIXUP_1324.x = _RESERVED_IDENTIFIER_FIXUP_830.x;
    _RESERVED_IDENTIFIER_FIXUP_1324.y = _RESERVED_IDENTIFIER_FIXUP_830.y;
    _RESERVED_IDENTIFIER_FIXUP_1324.z = _RESERVED_IDENTIFIER_FIXUP_830.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_843 = _RESERVED_IDENTIFIER_FIXUP_1324.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_1324;
    _RESERVED_IDENTIFIER_FIXUP_1330.x = _RESERVED_IDENTIFIER_FIXUP_843.x;
    _RESERVED_IDENTIFIER_FIXUP_1330.y = _RESERVED_IDENTIFIER_FIXUP_843.y;
    _RESERVED_IDENTIFIER_FIXUP_1330.z = _RESERVED_IDENTIFIER_FIXUP_843.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_891 = OptTex0( texcoord0.xyz);
    vec2 param_12 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_895 = hdTex1(param_12);
    vec2 param_13 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_899 = hdTex2(param_13);
    vec4 _RESERVED_IDENTIFIER_FIXUP_904 = mix(_RESERVED_IDENTIFIER_FIXUP_891, _RESERVED_IDENTIFIER_FIXUP_895, _RESERVED_IDENTIFIER_FIXUP_899.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1346 = _RESERVED_IDENTIFIER_FIXUP_891;
    _RESERVED_IDENTIFIER_FIXUP_1346.x = _RESERVED_IDENTIFIER_FIXUP_589;
    float _RESERVED_IDENTIFIER_FIXUP_917 = clamp((_RESERVED_IDENTIFIER_FIXUP_589 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1346.x = _RESERVED_IDENTIFIER_FIXUP_917;
    float _RESERVED_IDENTIFIER_FIXUP_923 = ((-_RESERVED_IDENTIFIER_FIXUP_917) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1346.y = _RESERVED_IDENTIFIER_FIXUP_923;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1483;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1482;
    if (_RESERVED_IDENTIFIER_FIXUP_923 != (-_RESERVED_IDENTIFIER_FIXUP_923))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_935 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_945 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_947 = _RESERVED_IDENTIFIER_FIXUP_945.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1360 = _RESERVED_IDENTIFIER_FIXUP_1346;
        _RESERVED_IDENTIFIER_FIXUP_1360.y = _RESERVED_IDENTIFIER_FIXUP_947;
        _RESERVED_IDENTIFIER_FIXUP_1360.z = _RESERVED_IDENTIFIER_FIXUP_945.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_955 = _RESERVED_IDENTIFIER_FIXUP_1360.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1364;
        _RESERVED_IDENTIFIER_FIXUP_1364.x = _RESERVED_IDENTIFIER_FIXUP_955.x;
        _RESERVED_IDENTIFIER_FIXUP_1364.y = _RESERVED_IDENTIFIER_FIXUP_955.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_962 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_966 = _RESERVED_IDENTIFIER_FIXUP_962.y;
        _RESERVED_IDENTIFIER_FIXUP_1364.w = _RESERVED_IDENTIFIER_FIXUP_966;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_935.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_935.w;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1364.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_966;
        float _RESERVED_IDENTIFIER_FIXUP_977 = hdLod5(param_14, param_15).x + hdLod5(param_16, param_17).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1487 = vec4(_RESERVED_IDENTIFIER_FIXUP_917, _RESERVED_IDENTIFIER_FIXUP_947, _RESERVED_IDENTIFIER_FIXUP_945.y, _RESERVED_IDENTIFIER_FIXUP_977);
        vec2 _RESERVED_IDENTIFIER_FIXUP_984 = _RESERVED_IDENTIFIER_FIXUP_1487.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1377;
        _RESERVED_IDENTIFIER_FIXUP_1377.x = _RESERVED_IDENTIFIER_FIXUP_984.x;
        _RESERVED_IDENTIFIER_FIXUP_1377.y = _RESERVED_IDENTIFIER_FIXUP_984.y;
        _RESERVED_IDENTIFIER_FIXUP_1377.w = _RESERVED_IDENTIFIER_FIXUP_966;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1377.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_966;
        float _RESERVED_IDENTIFIER_FIXUP_1006 = _RESERVED_IDENTIFIER_FIXUP_977 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_1487.w = _RESERVED_IDENTIFIER_FIXUP_1006;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1013 = _RESERVED_IDENTIFIER_FIXUP_1487.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1390;
        _RESERVED_IDENTIFIER_FIXUP_1390.x = _RESERVED_IDENTIFIER_FIXUP_1013.x;
        _RESERVED_IDENTIFIER_FIXUP_1390.y = _RESERVED_IDENTIFIER_FIXUP_1013.y;
        _RESERVED_IDENTIFIER_FIXUP_1390.w = _RESERVED_IDENTIFIER_FIXUP_966;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1390.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_966;
        float _RESERVED_IDENTIFIER_FIXUP_1035 = _RESERVED_IDENTIFIER_FIXUP_1006 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_1487.w = _RESERVED_IDENTIFIER_FIXUP_1035;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1042 = _RESERVED_IDENTIFIER_FIXUP_1487.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1403;
        _RESERVED_IDENTIFIER_FIXUP_1403.x = _RESERVED_IDENTIFIER_FIXUP_1042.x;
        _RESERVED_IDENTIFIER_FIXUP_1403.y = _RESERVED_IDENTIFIER_FIXUP_1042.y;
        _RESERVED_IDENTIFIER_FIXUP_1403.w = _RESERVED_IDENTIFIER_FIXUP_966;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1403.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_966;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1059 = hdLod5(param_22, param_23);
        float _RESERVED_IDENTIFIER_FIXUP_1064 = _RESERVED_IDENTIFIER_FIXUP_1035 + _RESERVED_IDENTIFIER_FIXUP_1059.x;
        _RESERVED_IDENTIFIER_FIXUP_1487.y = _RESERVED_IDENTIFIER_FIXUP_1064;
        float _RESERVED_IDENTIFIER_FIXUP_1069 = (_RESERVED_IDENTIFIER_FIXUP_1064 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1487.y = _RESERVED_IDENTIFIER_FIXUP_1069;
        float _RESERVED_IDENTIFIER_FIXUP_1076 = (_RESERVED_IDENTIFIER_FIXUP_917 * _RESERVED_IDENTIFIER_FIXUP_1069) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1487.x = _RESERVED_IDENTIFIER_FIXUP_1076;
        _RESERVED_IDENTIFIER_FIXUP_1059.x = min(_RESERVED_IDENTIFIER_FIXUP_1076, _RESERVED_IDENTIFIER_FIXUP_899.w);
        _RESERVED_IDENTIFIER_FIXUP_1483 = _RESERVED_IDENTIFIER_FIXUP_1487;
        _RESERVED_IDENTIFIER_FIXUP_1482 = _RESERVED_IDENTIFIER_FIXUP_1059;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_895.x = _RESERVED_IDENTIFIER_FIXUP_899.w;
        _RESERVED_IDENTIFIER_FIXUP_1483 = _RESERVED_IDENTIFIER_FIXUP_1346;
        _RESERVED_IDENTIFIER_FIXUP_1482 = _RESERVED_IDENTIFIER_FIXUP_895;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1092 = (_RESERVED_IDENTIFIER_FIXUP_1482.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1428 = _RESERVED_IDENTIFIER_FIXUP_1483;
    _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_1092;
    _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_1092;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1105 = _RESERVED_IDENTIFIER_FIXUP_904.xyz * _RESERVED_IDENTIFIER_FIXUP_1428.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1434 = _RESERVED_IDENTIFIER_FIXUP_1428;
    _RESERVED_IDENTIFIER_FIXUP_1434.x = _RESERVED_IDENTIFIER_FIXUP_1105.x;
    _RESERVED_IDENTIFIER_FIXUP_1434.y = _RESERVED_IDENTIFIER_FIXUP_1105.y;
    _RESERVED_IDENTIFIER_FIXUP_1434.z = _RESERVED_IDENTIFIER_FIXUP_1105.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1116 = _RESERVED_IDENTIFIER_FIXUP_1434.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1440 = _RESERVED_IDENTIFIER_FIXUP_1434;
    _RESERVED_IDENTIFIER_FIXUP_1440.x = _RESERVED_IDENTIFIER_FIXUP_1116.x;
    _RESERVED_IDENTIFIER_FIXUP_1440.y = _RESERVED_IDENTIFIER_FIXUP_1116.y;
    _RESERVED_IDENTIFIER_FIXUP_1440.z = _RESERVED_IDENTIFIER_FIXUP_1116.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1127 = _RESERVED_IDENTIFIER_FIXUP_1440.xyz + _RESERVED_IDENTIFIER_FIXUP_1440.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1446 = _RESERVED_IDENTIFIER_FIXUP_1440;
    _RESERVED_IDENTIFIER_FIXUP_1446.x = _RESERVED_IDENTIFIER_FIXUP_1127.x;
    _RESERVED_IDENTIFIER_FIXUP_1446.y = _RESERVED_IDENTIFIER_FIXUP_1127.y;
    _RESERVED_IDENTIFIER_FIXUP_1446.z = _RESERVED_IDENTIFIER_FIXUP_1127.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1138 = _RESERVED_IDENTIFIER_FIXUP_904.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1452 = _RESERVED_IDENTIFIER_FIXUP_1482;
    _RESERVED_IDENTIFIER_FIXUP_1452.y = _RESERVED_IDENTIFIER_FIXUP_1138.x;
    _RESERVED_IDENTIFIER_FIXUP_1452.z = _RESERVED_IDENTIFIER_FIXUP_1138.y;
    _RESERVED_IDENTIFIER_FIXUP_1452.w = _RESERVED_IDENTIFIER_FIXUP_1138.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1152 = (_RESERVED_IDENTIFIER_FIXUP_1452.yzw * _RESERVED_IDENTIFIER_FIXUP_1452.xxx) + _RESERVED_IDENTIFIER_FIXUP_1446.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1458 = _RESERVED_IDENTIFIER_FIXUP_1446;
    _RESERVED_IDENTIFIER_FIXUP_1458.x = _RESERVED_IDENTIFIER_FIXUP_1152.x;
    _RESERVED_IDENTIFIER_FIXUP_1458.y = _RESERVED_IDENTIFIER_FIXUP_1152.y;
    _RESERVED_IDENTIFIER_FIXUP_1458.z = _RESERVED_IDENTIFIER_FIXUP_1152.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1165 = _RESERVED_IDENTIFIER_FIXUP_1458.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1464 = _RESERVED_IDENTIFIER_FIXUP_1458;
    _RESERVED_IDENTIFIER_FIXUP_1464.x = _RESERVED_IDENTIFIER_FIXUP_1165.x;
    _RESERVED_IDENTIFIER_FIXUP_1464.y = _RESERVED_IDENTIFIER_FIXUP_1165.y;
    _RESERVED_IDENTIFIER_FIXUP_1464.z = _RESERVED_IDENTIFIER_FIXUP_1165.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1464.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_435 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_444;
    if (_RESERVED_IDENTIFIER_FIXUP_435)
    {
        _RESERVED_IDENTIFIER_FIXUP_444 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_444 = _RESERVED_IDENTIFIER_FIXUP_435;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_444)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_481 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1330.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_508 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1204;
    if (_RESERVED_IDENTIFIER_FIXUP_481 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1204 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_481), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_508);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1204 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_508);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1204;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1092);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r1.xy;
        float param_3 = r1.w;
        r1 = hdLod5(param_2, param_3);
        vec2 hdB122 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB122.x;
        r0.z = hdB122.y;
        vec2 hdB144 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB144.x;
        r4.y = hdB144.y;
        vec2 hdB152 = vec2(1.0, 0.0) * v4.zx;
        r4.z = hdB152.x;
        r4.w = hdB152.y;
        vec2 param_4 = r4.xy;
        float param_5 = r4.w;
        r4 = hdLod5(param_4, param_5);
        r0.w = r1.x + r4.x;
        vec2 hdB175 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = hdB175.x;
        r1.y = hdB175.y;
        vec2 hdB182 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB182.x;
        r1.w = hdB182.y;
        vec2 param_6 = r1.xy;
        float param_7 = r1.w;
        r1 = hdLod5(param_6, param_7);
        r0.w += r1.x;
        vec2 hdB205 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = hdB205.x;
        r1.y = hdB205.y;
        vec2 hdB212 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB212.x;
        r1.w = hdB212.y;
        vec2 param_8 = r1.xy;
        float param_9 = r1.w;
        r1 = hdLod5(param_8, param_9);
        r0.w += r1.x;
        vec2 hdB235 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = hdB235.x;
        r1.y = hdB235.y;
        vec2 hdB242 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB242.x;
        r1.w = hdB242.y;
        vec2 param_10 = r1.xy;
        float param_11 = r1.w;
        r1 = hdLod5(param_10, param_11);
        r0.y = r0.w + r1.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r1.x = min(r0.x, r2.w);
    }
    else
    {
        r1.x = r2.w;
    }
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB292 = r0;
    vec3 hdB294 = r3.xyz * hdB292.xxx;
    r0.x = hdB294.x;
    r0.y = hdB294.y;
    r0.z = hdB294.z;
    vec4 hdB301 = r0;
    vec3 hdB305 = hdB301.xyz * v0.xyz;
    r0.x = hdB305.x;
    r0.y = hdB305.y;
    r0.z = hdB305.z;
    vec4 hdB312 = r0;
    vec4 hdB314 = r0;
    vec3 hdB316 = hdB312.xyz + hdB314.xyz;
    r0.x = hdB316.x;
    r0.y = hdB316.y;
    r0.z = hdB316.z;
    vec3 hdB327 = r3.www * v1.xyz;
    r1.y = hdB327.x;
    r1.z = hdB327.y;
    r1.w = hdB327.z;
    vec4 hdB339 = r0;
    vec3 hdB341 = (r1.yzw * r1.xxx) + hdB339.xyz;
    r0.x = hdB341.x;
    r0.y = hdB341.y;
    r0.z = hdB341.z;
    vec4 hdB348 = r0;
    vec3 hdB355 = hdB348.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB355.x;
    r0.y = hdB355.y;
    r0.z = hdB355.z;
    vec3 hdB370 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB370.x;
    oC0.y = hdB370.y;
    oC0.z = hdB370.z;
    oC0.w = 1.0;
    bool hdB383 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB391;
    if (hdB383)
    {
        hdB391 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB391 = hdB383;
    }
    if (hdB391)
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
    bool _1404 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1414;
    if (_1404)
    {
        _1414 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1414 = _1404;
    }
    if (_1414)
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
        bool _1439 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1454;
        if (!_1439)
        {
            _1454 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1454 = _1439;
        }
        if (_1454)
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
