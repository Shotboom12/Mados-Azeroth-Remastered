#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1468;
vec4 _RESERVED_IDENTIFIER_FIXUP_1469;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _46 = hdOverride >= 0;
    bool _66;
    if (_46)
    {
        _66 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _66 = _46;
    }
    vec4 _67;
    if (_66)
    {
        _67 = vec4(float(hdOverride));
    }
    else
    {
        _67 = value;
    }
    return _67;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _84 = hdOverride >= 0;
    bool _93;
    if (_84)
    {
        _93 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _93 = _84;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_562 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_566 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_573 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1193 = _RESERVED_IDENTIFIER_FIXUP_566;
    _RESERVED_IDENTIFIER_FIXUP_1193.x = _RESERVED_IDENTIFIER_FIXUP_573;
    float _RESERVED_IDENTIFIER_FIXUP_579 = clamp((_RESERVED_IDENTIFIER_FIXUP_573 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1193.x = _RESERVED_IDENTIFIER_FIXUP_579;
    float _RESERVED_IDENTIFIER_FIXUP_585 = ((-_RESERVED_IDENTIFIER_FIXUP_579) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1193.y = _RESERVED_IDENTIFIER_FIXUP_585;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1471;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1470;
    if (_RESERVED_IDENTIFIER_FIXUP_585 != (-_RESERVED_IDENTIFIER_FIXUP_585))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_597 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1206 = _RESERVED_IDENTIFIER_FIXUP_1193;
        _RESERVED_IDENTIFIER_FIXUP_1206.y = _RESERVED_IDENTIFIER_FIXUP_597.x;
        _RESERVED_IDENTIFIER_FIXUP_1206.z = _RESERVED_IDENTIFIER_FIXUP_597.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_607 = _RESERVED_IDENTIFIER_FIXUP_1206.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1210;
        _RESERVED_IDENTIFIER_FIXUP_1210.x = _RESERVED_IDENTIFIER_FIXUP_607.x;
        _RESERVED_IDENTIFIER_FIXUP_1210.y = _RESERVED_IDENTIFIER_FIXUP_607.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_617 = _RESERVED_IDENTIFIER_FIXUP_1206.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1214;
        _RESERVED_IDENTIFIER_FIXUP_1214.x = _RESERVED_IDENTIFIER_FIXUP_617.x;
        _RESERVED_IDENTIFIER_FIXUP_1214.y = _RESERVED_IDENTIFIER_FIXUP_617.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_627 = _RESERVED_IDENTIFIER_FIXUP_1206.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1218;
        _RESERVED_IDENTIFIER_FIXUP_1218.x = _RESERVED_IDENTIFIER_FIXUP_627.x;
        _RESERVED_IDENTIFIER_FIXUP_1218.y = _RESERVED_IDENTIFIER_FIXUP_627.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_637 = _RESERVED_IDENTIFIER_FIXUP_1206.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1222;
        _RESERVED_IDENTIFIER_FIXUP_1222.x = _RESERVED_IDENTIFIER_FIXUP_637.x;
        _RESERVED_IDENTIFIER_FIXUP_1222.y = _RESERVED_IDENTIFIER_FIXUP_637.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_645 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_645.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_645.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_651 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_1210.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1214.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1218.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1222.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1210.xy;
        float param_5 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_651.y = hdLod5(param_4, param_5).x;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1214.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_651.z = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1218.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_651.w = hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_708 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_651 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1222.xy;
        float param_11 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_714 = hdLod5(param_10, param_11).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1206.y = _RESERVED_IDENTIFIER_FIXUP_714;
        float _RESERVED_IDENTIFIER_FIXUP_719 = float(_RESERVED_IDENTIFIER_FIXUP_714 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1206.y = _RESERVED_IDENTIFIER_FIXUP_719;
        float _RESERVED_IDENTIFIER_FIXUP_722 = dot(_RESERVED_IDENTIFIER_FIXUP_708, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1206.z = _RESERVED_IDENTIFIER_FIXUP_722;
        float _RESERVED_IDENTIFIER_FIXUP_728 = _RESERVED_IDENTIFIER_FIXUP_719 + _RESERVED_IDENTIFIER_FIXUP_722;
        _RESERVED_IDENTIFIER_FIXUP_1206.y = _RESERVED_IDENTIFIER_FIXUP_728;
        float _RESERVED_IDENTIFIER_FIXUP_733 = (_RESERVED_IDENTIFIER_FIXUP_728 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1206.y = _RESERVED_IDENTIFIER_FIXUP_733;
        float _RESERVED_IDENTIFIER_FIXUP_740 = (_RESERVED_IDENTIFIER_FIXUP_579 * _RESERVED_IDENTIFIER_FIXUP_733) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1206.x = _RESERVED_IDENTIFIER_FIXUP_740;
        _RESERVED_IDENTIFIER_FIXUP_708.x = min(_RESERVED_IDENTIFIER_FIXUP_740, _RESERVED_IDENTIFIER_FIXUP_566.w);
        _RESERVED_IDENTIFIER_FIXUP_1471 = _RESERVED_IDENTIFIER_FIXUP_1206;
        _RESERVED_IDENTIFIER_FIXUP_1470 = _RESERVED_IDENTIFIER_FIXUP_708;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1204 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1204.x = _RESERVED_IDENTIFIER_FIXUP_566.w;
        _RESERVED_IDENTIFIER_FIXUP_1471 = _RESERVED_IDENTIFIER_FIXUP_1193;
        _RESERVED_IDENTIFIER_FIXUP_1470 = _RESERVED_IDENTIFIER_FIXUP_1204;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1283 = _RESERVED_IDENTIFIER_FIXUP_1471;
    _RESERVED_IDENTIFIER_FIXUP_1283.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_769 = _RESERVED_IDENTIFIER_FIXUP_562.xyz * _RESERVED_IDENTIFIER_FIXUP_1283.xxx;
    _RESERVED_IDENTIFIER_FIXUP_562.x = _RESERVED_IDENTIFIER_FIXUP_769.x;
    _RESERVED_IDENTIFIER_FIXUP_562.y = _RESERVED_IDENTIFIER_FIXUP_769.y;
    _RESERVED_IDENTIFIER_FIXUP_562.z = _RESERVED_IDENTIFIER_FIXUP_769.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_780 = _RESERVED_IDENTIFIER_FIXUP_562.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1468).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_562;
    _RESERVED_IDENTIFIER_FIXUP_1291.x = _RESERVED_IDENTIFIER_FIXUP_780.x;
    _RESERVED_IDENTIFIER_FIXUP_1291.y = _RESERVED_IDENTIFIER_FIXUP_780.y;
    _RESERVED_IDENTIFIER_FIXUP_1291.z = _RESERVED_IDENTIFIER_FIXUP_780.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_791 = _RESERVED_IDENTIFIER_FIXUP_1291.xyz + _RESERVED_IDENTIFIER_FIXUP_1291.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1297 = _RESERVED_IDENTIFIER_FIXUP_1291;
    _RESERVED_IDENTIFIER_FIXUP_1297.x = _RESERVED_IDENTIFIER_FIXUP_791.x;
    _RESERVED_IDENTIFIER_FIXUP_1297.y = _RESERVED_IDENTIFIER_FIXUP_791.y;
    _RESERVED_IDENTIFIER_FIXUP_1297.z = _RESERVED_IDENTIFIER_FIXUP_791.z;
    _RESERVED_IDENTIFIER_FIXUP_1283.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1283.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1283.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_816 = (_RESERVED_IDENTIFIER_FIXUP_1283.xyz * _RESERVED_IDENTIFIER_FIXUP_1470.xxx) + _RESERVED_IDENTIFIER_FIXUP_1297.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_1297;
    _RESERVED_IDENTIFIER_FIXUP_1309.x = _RESERVED_IDENTIFIER_FIXUP_816.x;
    _RESERVED_IDENTIFIER_FIXUP_1309.y = _RESERVED_IDENTIFIER_FIXUP_816.y;
    _RESERVED_IDENTIFIER_FIXUP_1309.z = _RESERVED_IDENTIFIER_FIXUP_816.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_829 = _RESERVED_IDENTIFIER_FIXUP_1309.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1315 = _RESERVED_IDENTIFIER_FIXUP_1309;
    _RESERVED_IDENTIFIER_FIXUP_1315.x = _RESERVED_IDENTIFIER_FIXUP_829.x;
    _RESERVED_IDENTIFIER_FIXUP_1315.y = _RESERVED_IDENTIFIER_FIXUP_829.y;
    _RESERVED_IDENTIFIER_FIXUP_1315.z = _RESERVED_IDENTIFIER_FIXUP_829.z;
    vec2 param_12 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_879 = hdTex0(param_12);
    vec2 param_13 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_883 = hdTex1(param_13);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1331 = _RESERVED_IDENTIFIER_FIXUP_883;
    _RESERVED_IDENTIFIER_FIXUP_1331.x = _RESERVED_IDENTIFIER_FIXUP_573;
    float _RESERVED_IDENTIFIER_FIXUP_896 = clamp((_RESERVED_IDENTIFIER_FIXUP_573 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1331.x = _RESERVED_IDENTIFIER_FIXUP_896;
    float _RESERVED_IDENTIFIER_FIXUP_902 = ((-_RESERVED_IDENTIFIER_FIXUP_896) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1331.y = _RESERVED_IDENTIFIER_FIXUP_902;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1475;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1474;
    if (_RESERVED_IDENTIFIER_FIXUP_902 != (-_RESERVED_IDENTIFIER_FIXUP_902))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_914 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_1331;
        _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_914.x;
        _RESERVED_IDENTIFIER_FIXUP_1344.z = _RESERVED_IDENTIFIER_FIXUP_914.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_924 = _RESERVED_IDENTIFIER_FIXUP_1344.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1348;
        _RESERVED_IDENTIFIER_FIXUP_1348.x = _RESERVED_IDENTIFIER_FIXUP_924.x;
        _RESERVED_IDENTIFIER_FIXUP_1348.y = _RESERVED_IDENTIFIER_FIXUP_924.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_934 = _RESERVED_IDENTIFIER_FIXUP_1344.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1352;
        _RESERVED_IDENTIFIER_FIXUP_1352.x = _RESERVED_IDENTIFIER_FIXUP_934.x;
        _RESERVED_IDENTIFIER_FIXUP_1352.y = _RESERVED_IDENTIFIER_FIXUP_934.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_944 = _RESERVED_IDENTIFIER_FIXUP_1344.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1356;
        _RESERVED_IDENTIFIER_FIXUP_1356.x = _RESERVED_IDENTIFIER_FIXUP_944.x;
        _RESERVED_IDENTIFIER_FIXUP_1356.y = _RESERVED_IDENTIFIER_FIXUP_944.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_954 = _RESERVED_IDENTIFIER_FIXUP_1344.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1360;
        _RESERVED_IDENTIFIER_FIXUP_1360.x = _RESERVED_IDENTIFIER_FIXUP_954.x;
        _RESERVED_IDENTIFIER_FIXUP_1360.y = _RESERVED_IDENTIFIER_FIXUP_954.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_962 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_962.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_962.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_968 = hdLod5(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_1348.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1352.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1356.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1360.w = 0.0;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1348.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_968.y = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1352.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_968.z = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1356.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_968.w = hdLod5(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1025 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_968 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1360.xy;
        float param_23 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1031 = hdLod5(param_22, param_23).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_1031;
        float _RESERVED_IDENTIFIER_FIXUP_1036 = float(_RESERVED_IDENTIFIER_FIXUP_1031 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_1036;
        float _RESERVED_IDENTIFIER_FIXUP_1039 = dot(_RESERVED_IDENTIFIER_FIXUP_1025, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1344.z = _RESERVED_IDENTIFIER_FIXUP_1039;
        float _RESERVED_IDENTIFIER_FIXUP_1045 = _RESERVED_IDENTIFIER_FIXUP_1036 + _RESERVED_IDENTIFIER_FIXUP_1039;
        _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_1045;
        float _RESERVED_IDENTIFIER_FIXUP_1050 = (_RESERVED_IDENTIFIER_FIXUP_1045 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_1050;
        float _RESERVED_IDENTIFIER_FIXUP_1057 = (_RESERVED_IDENTIFIER_FIXUP_896 * _RESERVED_IDENTIFIER_FIXUP_1050) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_1057;
        _RESERVED_IDENTIFIER_FIXUP_1025.x = min(_RESERVED_IDENTIFIER_FIXUP_1057, _RESERVED_IDENTIFIER_FIXUP_883.w);
        _RESERVED_IDENTIFIER_FIXUP_1475 = _RESERVED_IDENTIFIER_FIXUP_1344;
        _RESERVED_IDENTIFIER_FIXUP_1474 = _RESERVED_IDENTIFIER_FIXUP_1025;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1342 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1342.x = _RESERVED_IDENTIFIER_FIXUP_883.w;
        _RESERVED_IDENTIFIER_FIXUP_1475 = _RESERVED_IDENTIFIER_FIXUP_1331;
        _RESERVED_IDENTIFIER_FIXUP_1474 = _RESERVED_IDENTIFIER_FIXUP_1342;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1073 = (_RESERVED_IDENTIFIER_FIXUP_1474.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1419 = _RESERVED_IDENTIFIER_FIXUP_1475;
    _RESERVED_IDENTIFIER_FIXUP_1419.x = _RESERVED_IDENTIFIER_FIXUP_1073;
    _RESERVED_IDENTIFIER_FIXUP_1419.x = _RESERVED_IDENTIFIER_FIXUP_1073;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1086 = _RESERVED_IDENTIFIER_FIXUP_879.xyz * _RESERVED_IDENTIFIER_FIXUP_1419.xxx;
    _RESERVED_IDENTIFIER_FIXUP_879.x = _RESERVED_IDENTIFIER_FIXUP_1086.x;
    _RESERVED_IDENTIFIER_FIXUP_879.y = _RESERVED_IDENTIFIER_FIXUP_1086.y;
    _RESERVED_IDENTIFIER_FIXUP_879.z = _RESERVED_IDENTIFIER_FIXUP_1086.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1097 = _RESERVED_IDENTIFIER_FIXUP_879.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1431 = _RESERVED_IDENTIFIER_FIXUP_879;
    _RESERVED_IDENTIFIER_FIXUP_1431.x = _RESERVED_IDENTIFIER_FIXUP_1097.x;
    _RESERVED_IDENTIFIER_FIXUP_1431.y = _RESERVED_IDENTIFIER_FIXUP_1097.y;
    _RESERVED_IDENTIFIER_FIXUP_1431.z = _RESERVED_IDENTIFIER_FIXUP_1097.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1108 = _RESERVED_IDENTIFIER_FIXUP_1431.xyz + _RESERVED_IDENTIFIER_FIXUP_1431.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1437 = _RESERVED_IDENTIFIER_FIXUP_1431;
    _RESERVED_IDENTIFIER_FIXUP_1437.x = _RESERVED_IDENTIFIER_FIXUP_1108.x;
    _RESERVED_IDENTIFIER_FIXUP_1437.y = _RESERVED_IDENTIFIER_FIXUP_1108.y;
    _RESERVED_IDENTIFIER_FIXUP_1437.z = _RESERVED_IDENTIFIER_FIXUP_1108.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1119 = _RESERVED_IDENTIFIER_FIXUP_1437.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1419.x = _RESERVED_IDENTIFIER_FIXUP_1119.x;
    _RESERVED_IDENTIFIER_FIXUP_1419.y = _RESERVED_IDENTIFIER_FIXUP_1119.y;
    _RESERVED_IDENTIFIER_FIXUP_1419.z = _RESERVED_IDENTIFIER_FIXUP_1119.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1133 = (_RESERVED_IDENTIFIER_FIXUP_1419.xyz * _RESERVED_IDENTIFIER_FIXUP_1474.xxx) + _RESERVED_IDENTIFIER_FIXUP_1437.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_1437;
    _RESERVED_IDENTIFIER_FIXUP_1449.x = _RESERVED_IDENTIFIER_FIXUP_1133.x;
    _RESERVED_IDENTIFIER_FIXUP_1449.y = _RESERVED_IDENTIFIER_FIXUP_1133.y;
    _RESERVED_IDENTIFIER_FIXUP_1449.z = _RESERVED_IDENTIFIER_FIXUP_1133.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1146 = _RESERVED_IDENTIFIER_FIXUP_1449.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1455 = _RESERVED_IDENTIFIER_FIXUP_1449;
    _RESERVED_IDENTIFIER_FIXUP_1455.x = _RESERVED_IDENTIFIER_FIXUP_1146.x;
    _RESERVED_IDENTIFIER_FIXUP_1455.y = _RESERVED_IDENTIFIER_FIXUP_1146.y;
    _RESERVED_IDENTIFIER_FIXUP_1455.z = _RESERVED_IDENTIFIER_FIXUP_1146.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1455.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_427 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_436;
    if (_RESERVED_IDENTIFIER_FIXUP_427)
    {
        _RESERVED_IDENTIFIER_FIXUP_436 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_436 = _RESERVED_IDENTIFIER_FIXUP_427;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_436)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_473 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1315.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_500 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1183;
    if (_RESERVED_IDENTIFIER_FIXUP_473 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1183 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_473), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_500);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1183 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_500);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1183;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1073);
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
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB96 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB96.x;
        r1.z = hdB96.y;
        vec2 hdB118 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB118.x;
        r2.y = hdB118.y;
        vec2 hdB129 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB129.x;
        r3.y = hdB129.y;
        vec2 hdB140 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB140.x;
        r4.y = hdB140.y;
        vec2 hdB151 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB151.x;
        r5.y = hdB151.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r6.xy;
        float param_3 = r6.w;
        r6 = hdLod5(param_2, param_3);
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
        r2.x = min(r1.x, r1.w);
    }
    else
    {
        r2.x = r1.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB282 = r0;
    vec3 hdB286 = hdB282.xyz * r1.xxx;
    r0.x = hdB286.x;
    r0.y = hdB286.y;
    r0.z = hdB286.z;
    vec4 hdB293 = r0;
    vec3 hdB297 = hdB293.xyz * v0.xyz;
    r0.x = hdB297.x;
    r0.y = hdB297.y;
    r0.z = hdB297.z;
    vec4 hdB304 = r0;
    vec4 hdB306 = r0;
    vec3 hdB308 = hdB304.xyz + hdB306.xyz;
    r0.x = hdB308.x;
    r0.y = hdB308.y;
    r0.z = hdB308.z;
    vec3 hdB319 = r0.www * v1.xyz;
    r1.x = hdB319.x;
    r1.y = hdB319.y;
    r1.z = hdB319.z;
    vec4 hdB331 = r0;
    vec3 hdB333 = (r1.xyz * r2.xxx) + hdB331.xyz;
    r0.x = hdB333.x;
    r0.y = hdB333.y;
    r0.z = hdB333.z;
    vec4 hdB340 = r0;
    vec3 hdB347 = hdB340.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB347.x;
    r0.y = hdB347.y;
    r0.z = hdB347.z;
    vec3 hdB362 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB362.x;
    oC0.y = hdB362.y;
    oC0.z = hdB362.z;
    oC0.w = 1.0;
    bool hdB375 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB383;
    if (hdB375)
    {
        hdB383 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB383 = hdB375;
    }
    if (hdB383)
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
    bool _1326 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1336;
    if (_1326)
    {
        _1336 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1336 = _1326;
    }
    if (_1336)
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
        bool _1361 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1376;
        if (!_1361)
        {
            _1376 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1376 = _1361;
        }
        if (_1376)
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
