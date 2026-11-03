#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform sampler2D s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1409;
vec4 _RESERVED_IDENTIFIER_FIXUP_1410;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _47 = hdOverride >= 0;
    bool _67;
    if (_47)
    {
        _67 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _67 = _47;
    }
    vec4 _68;
    if (_67)
    {
        _68 = vec4(float(hdOverride));
    }
    else
    {
        _68 = value;
    }
    return _68;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _85 = hdOverride >= 0;
    bool _94;
    if (_85)
    {
        _94 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _94 = _85;
    }
    vec4 _95;
    if (_94)
    {
        _95 = vec4(float(hdOverride));
    }
    else
    {
        _95 = value;
    }
    return _95;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _112 = hdOverride >= 0;
    bool _122;
    if (_112)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_549 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_552 = _RESERVED_IDENTIFIER_FIXUP_549.xy;
    float _RESERVED_IDENTIFIER_FIXUP_554 = _RESERVED_IDENTIFIER_FIXUP_549.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_552;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_554;
    vec4 _RESERVED_IDENTIFIER_FIXUP_555 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_558 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_562 = _RESERVED_IDENTIFIER_FIXUP_558.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1153;
    _RESERVED_IDENTIFIER_FIXUP_1153.w = _RESERVED_IDENTIFIER_FIXUP_562;
    vec2 _RESERVED_IDENTIFIER_FIXUP_566 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_568 = _RESERVED_IDENTIFIER_FIXUP_566.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1155 = _RESERVED_IDENTIFIER_FIXUP_555;
    _RESERVED_IDENTIFIER_FIXUP_1155.y = _RESERVED_IDENTIFIER_FIXUP_568;
    float _RESERVED_IDENTIFIER_FIXUP_570 = _RESERVED_IDENTIFIER_FIXUP_566.y;
    _RESERVED_IDENTIFIER_FIXUP_1155.z = _RESERVED_IDENTIFIER_FIXUP_570;
    vec2 _RESERVED_IDENTIFIER_FIXUP_576 = _RESERVED_IDENTIFIER_FIXUP_1155.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1159 = _RESERVED_IDENTIFIER_FIXUP_1153;
    _RESERVED_IDENTIFIER_FIXUP_1159.x = _RESERVED_IDENTIFIER_FIXUP_576.x;
    _RESERVED_IDENTIFIER_FIXUP_1159.y = _RESERVED_IDENTIFIER_FIXUP_576.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1159.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_562;
    float _RESERVED_IDENTIFIER_FIXUP_591 = _RESERVED_IDENTIFIER_FIXUP_555.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1155.x = _RESERVED_IDENTIFIER_FIXUP_591;
    vec2 _RESERVED_IDENTIFIER_FIXUP_605 = _RESERVED_IDENTIFIER_FIXUP_1155.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1172 = _RESERVED_IDENTIFIER_FIXUP_1153;
    _RESERVED_IDENTIFIER_FIXUP_1172.x = _RESERVED_IDENTIFIER_FIXUP_605.x;
    _RESERVED_IDENTIFIER_FIXUP_1172.y = _RESERVED_IDENTIFIER_FIXUP_605.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1172.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_562;
    float _RESERVED_IDENTIFIER_FIXUP_620 = _RESERVED_IDENTIFIER_FIXUP_591 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1155.x = _RESERVED_IDENTIFIER_FIXUP_620;
    vec2 _RESERVED_IDENTIFIER_FIXUP_627 = _RESERVED_IDENTIFIER_FIXUP_1155.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181;
    _RESERVED_IDENTIFIER_FIXUP_1181.x = _RESERVED_IDENTIFIER_FIXUP_627.x;
    _RESERVED_IDENTIFIER_FIXUP_1181.y = _RESERVED_IDENTIFIER_FIXUP_627.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_637 = _RESERVED_IDENTIFIER_FIXUP_1155.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1185;
    _RESERVED_IDENTIFIER_FIXUP_1185.x = _RESERVED_IDENTIFIER_FIXUP_637.x;
    _RESERVED_IDENTIFIER_FIXUP_1185.y = _RESERVED_IDENTIFIER_FIXUP_637.y;
    _RESERVED_IDENTIFIER_FIXUP_1181.w = _RESERVED_IDENTIFIER_FIXUP_562;
    _RESERVED_IDENTIFIER_FIXUP_1185.w = _RESERVED_IDENTIFIER_FIXUP_562;
    float _RESERVED_IDENTIFIER_FIXUP_691 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_709 = hdTex1(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1181.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_562;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1185.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_562;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1223;
    _RESERVED_IDENTIFIER_FIXUP_1223.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_691 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_620 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_709.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1228;
    _RESERVED_IDENTIFIER_FIXUP_1228.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_709.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1228.y = 1.0;
    vec2 param_11 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_750 = _RESERVED_IDENTIFIER_FIXUP_1228.yyy * (_RESERVED_IDENTIFIER_FIXUP_1228.xxxx * hdTex0(param_11)).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1235;
    _RESERVED_IDENTIFIER_FIXUP_1235.x = _RESERVED_IDENTIFIER_FIXUP_750.x;
    _RESERVED_IDENTIFIER_FIXUP_1235.y = _RESERVED_IDENTIFIER_FIXUP_750.y;
    _RESERVED_IDENTIFIER_FIXUP_1235.z = _RESERVED_IDENTIFIER_FIXUP_750.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1241;
    _RESERVED_IDENTIFIER_FIXUP_1241.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1241.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1241.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = _RESERVED_IDENTIFIER_FIXUP_1235.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1409).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1247;
    _RESERVED_IDENTIFIER_FIXUP_1247.x = _RESERVED_IDENTIFIER_FIXUP_772.x;
    _RESERVED_IDENTIFIER_FIXUP_1247.y = _RESERVED_IDENTIFIER_FIXUP_772.y;
    _RESERVED_IDENTIFIER_FIXUP_1247.z = _RESERVED_IDENTIFIER_FIXUP_772.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_783 = _RESERVED_IDENTIFIER_FIXUP_1247.xyz + _RESERVED_IDENTIFIER_FIXUP_1247.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1253;
    _RESERVED_IDENTIFIER_FIXUP_1253.x = _RESERVED_IDENTIFIER_FIXUP_783.x;
    _RESERVED_IDENTIFIER_FIXUP_1253.y = _RESERVED_IDENTIFIER_FIXUP_783.y;
    _RESERVED_IDENTIFIER_FIXUP_1253.z = _RESERVED_IDENTIFIER_FIXUP_783.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_797 = (_RESERVED_IDENTIFIER_FIXUP_1241.xyz * _RESERVED_IDENTIFIER_FIXUP_1223.xxx) + _RESERVED_IDENTIFIER_FIXUP_1253.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1259;
    _RESERVED_IDENTIFIER_FIXUP_1259.x = _RESERVED_IDENTIFIER_FIXUP_797.x;
    _RESERVED_IDENTIFIER_FIXUP_1259.y = _RESERVED_IDENTIFIER_FIXUP_797.y;
    _RESERVED_IDENTIFIER_FIXUP_1259.z = _RESERVED_IDENTIFIER_FIXUP_797.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_810 = _RESERVED_IDENTIFIER_FIXUP_1259.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1265;
    _RESERVED_IDENTIFIER_FIXUP_1265.x = _RESERVED_IDENTIFIER_FIXUP_810.x;
    _RESERVED_IDENTIFIER_FIXUP_1265.y = _RESERVED_IDENTIFIER_FIXUP_810.y;
    _RESERVED_IDENTIFIER_FIXUP_1265.z = _RESERVED_IDENTIFIER_FIXUP_810.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = _RESERVED_IDENTIFIER_FIXUP_1265.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1271;
    _RESERVED_IDENTIFIER_FIXUP_1271.x = _RESERVED_IDENTIFIER_FIXUP_825.x;
    _RESERVED_IDENTIFIER_FIXUP_1271.y = _RESERVED_IDENTIFIER_FIXUP_825.y;
    _RESERVED_IDENTIFIER_FIXUP_1271.z = _RESERVED_IDENTIFIER_FIXUP_825.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_552;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_554;
    vec4 _RESERVED_IDENTIFIER_FIXUP_862 = hdLod5(param_12, param_13);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1284 = _RESERVED_IDENTIFIER_FIXUP_862;
    _RESERVED_IDENTIFIER_FIXUP_1284.y = _RESERVED_IDENTIFIER_FIXUP_568;
    _RESERVED_IDENTIFIER_FIXUP_1284.z = _RESERVED_IDENTIFIER_FIXUP_570;
    vec2 _RESERVED_IDENTIFIER_FIXUP_883 = _RESERVED_IDENTIFIER_FIXUP_1284.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_1153;
    _RESERVED_IDENTIFIER_FIXUP_1288.x = _RESERVED_IDENTIFIER_FIXUP_883.x;
    _RESERVED_IDENTIFIER_FIXUP_1288.y = _RESERVED_IDENTIFIER_FIXUP_883.y;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1288.xy;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_562;
    float _RESERVED_IDENTIFIER_FIXUP_898 = _RESERVED_IDENTIFIER_FIXUP_862.x + hdLod5(param_14, param_15).x;
    _RESERVED_IDENTIFIER_FIXUP_1284.x = _RESERVED_IDENTIFIER_FIXUP_898;
    vec2 _RESERVED_IDENTIFIER_FIXUP_912 = _RESERVED_IDENTIFIER_FIXUP_1284.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1301 = _RESERVED_IDENTIFIER_FIXUP_1153;
    _RESERVED_IDENTIFIER_FIXUP_1301.x = _RESERVED_IDENTIFIER_FIXUP_912.x;
    _RESERVED_IDENTIFIER_FIXUP_1301.y = _RESERVED_IDENTIFIER_FIXUP_912.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1301.xy;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_562;
    float _RESERVED_IDENTIFIER_FIXUP_927 = _RESERVED_IDENTIFIER_FIXUP_898 + hdLod5(param_16, param_17).x;
    _RESERVED_IDENTIFIER_FIXUP_1284.x = _RESERVED_IDENTIFIER_FIXUP_927;
    vec2 _RESERVED_IDENTIFIER_FIXUP_934 = _RESERVED_IDENTIFIER_FIXUP_1284.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1310;
    _RESERVED_IDENTIFIER_FIXUP_1310.x = _RESERVED_IDENTIFIER_FIXUP_934.x;
    _RESERVED_IDENTIFIER_FIXUP_1310.y = _RESERVED_IDENTIFIER_FIXUP_934.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_944 = _RESERVED_IDENTIFIER_FIXUP_1284.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1314;
    _RESERVED_IDENTIFIER_FIXUP_1314.x = _RESERVED_IDENTIFIER_FIXUP_944.x;
    _RESERVED_IDENTIFIER_FIXUP_1314.y = _RESERVED_IDENTIFIER_FIXUP_944.y;
    _RESERVED_IDENTIFIER_FIXUP_1310.w = _RESERVED_IDENTIFIER_FIXUP_562;
    _RESERVED_IDENTIFIER_FIXUP_1314.w = _RESERVED_IDENTIFIER_FIXUP_562;
    vec2 param_18 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1016 = hdTex1(param_18);
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1310.xy;
    float param_20 = _RESERVED_IDENTIFIER_FIXUP_562;
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1314.xy;
    float param_22 = _RESERVED_IDENTIFIER_FIXUP_562;
    float _RESERVED_IDENTIFIER_FIXUP_1021 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_691 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_927 + hdLod5(param_19, param_20).x) + hdLod5(param_21, param_22).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1016.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1352;
    _RESERVED_IDENTIFIER_FIXUP_1352.x = _RESERVED_IDENTIFIER_FIXUP_1021;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1357;
    _RESERVED_IDENTIFIER_FIXUP_1357.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1016.xyz, vec3(1.0)), 0.0, 1.0);
    float _RESERVED_IDENTIFIER_FIXUP_1036 = (_RESERVED_IDENTIFIER_FIXUP_1021 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_1036;
    _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_1036;
    vec2 param_23 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1052 = _RESERVED_IDENTIFIER_FIXUP_1357.xxxx * hdTex0(param_23);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1057 = _RESERVED_IDENTIFIER_FIXUP_1357.yyy * _RESERVED_IDENTIFIER_FIXUP_1052.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1366;
    _RESERVED_IDENTIFIER_FIXUP_1366.x = _RESERVED_IDENTIFIER_FIXUP_1057.x;
    _RESERVED_IDENTIFIER_FIXUP_1366.y = _RESERVED_IDENTIFIER_FIXUP_1057.y;
    _RESERVED_IDENTIFIER_FIXUP_1366.z = _RESERVED_IDENTIFIER_FIXUP_1057.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1068 = _RESERVED_IDENTIFIER_FIXUP_1052.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1372;
    _RESERVED_IDENTIFIER_FIXUP_1372.x = _RESERVED_IDENTIFIER_FIXUP_1068.x;
    _RESERVED_IDENTIFIER_FIXUP_1372.y = _RESERVED_IDENTIFIER_FIXUP_1068.y;
    _RESERVED_IDENTIFIER_FIXUP_1372.z = _RESERVED_IDENTIFIER_FIXUP_1068.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1079 = _RESERVED_IDENTIFIER_FIXUP_1366.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1378;
    _RESERVED_IDENTIFIER_FIXUP_1378.x = _RESERVED_IDENTIFIER_FIXUP_1079.x;
    _RESERVED_IDENTIFIER_FIXUP_1378.y = _RESERVED_IDENTIFIER_FIXUP_1079.y;
    _RESERVED_IDENTIFIER_FIXUP_1378.z = _RESERVED_IDENTIFIER_FIXUP_1079.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1090 = _RESERVED_IDENTIFIER_FIXUP_1378.xyz + _RESERVED_IDENTIFIER_FIXUP_1378.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1384;
    _RESERVED_IDENTIFIER_FIXUP_1384.x = _RESERVED_IDENTIFIER_FIXUP_1090.x;
    _RESERVED_IDENTIFIER_FIXUP_1384.y = _RESERVED_IDENTIFIER_FIXUP_1090.y;
    _RESERVED_IDENTIFIER_FIXUP_1384.z = _RESERVED_IDENTIFIER_FIXUP_1090.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1104 = (_RESERVED_IDENTIFIER_FIXUP_1372.xyz * _RESERVED_IDENTIFIER_FIXUP_1352.xxx) + _RESERVED_IDENTIFIER_FIXUP_1384.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1390;
    _RESERVED_IDENTIFIER_FIXUP_1390.x = _RESERVED_IDENTIFIER_FIXUP_1104.x;
    _RESERVED_IDENTIFIER_FIXUP_1390.y = _RESERVED_IDENTIFIER_FIXUP_1104.y;
    _RESERVED_IDENTIFIER_FIXUP_1390.z = _RESERVED_IDENTIFIER_FIXUP_1104.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1390.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1396;
    _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_1117.x;
    _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_1117.y;
    _RESERVED_IDENTIFIER_FIXUP_1396.z = _RESERVED_IDENTIFIER_FIXUP_1117.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1396.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_417 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_426;
    if (_RESERVED_IDENTIFIER_FIXUP_417)
    {
        _RESERVED_IDENTIFIER_FIXUP_426 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_426 = _RESERVED_IDENTIFIER_FIXUP_417;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_426)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_463 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1271.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_490 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1143;
    if (_RESERVED_IDENTIFIER_FIXUP_463 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1143 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_463), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_490);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1143 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_490);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1143;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1036);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB62 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB62.x;
    r1.w = hdB62.y;
    vec2 hdB72 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB72.x;
    r0.z = hdB72.y;
    vec2 hdB94 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB94.x;
    r1.y = hdB94.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB114 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB114.x;
    r1.w = hdB114.y;
    vec2 hdB125 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB125.x;
    r1.y = hdB125.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB148 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB148.x;
    r1.y = hdB148.y;
    vec2 hdB159 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB159.x;
    r2.y = hdB159.y;
    vec2 hdB166 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB166.x;
    r1.w = hdB166.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB185 = vec2(1.0, 0.0) * v4.zx;
    r2.z = hdB185.x;
    r2.w = hdB185.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v3.xy;
    r1 = hdTex1(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    r0.y = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_11 = v2.xy;
    r1 = hdTex0(param_11);
    r1 = r0.xxxx * r1;
    vec4 hdB271 = r0;
    vec3 hdB275 = hdB271.yyy * r1.xyz;
    r0.x = hdB275.x;
    r0.y = hdB275.y;
    r0.z = hdB275.z;
    vec4 hdB282 = r1;
    vec3 hdB286 = hdB282.www * v1.xyz;
    r1.x = hdB286.x;
    r1.y = hdB286.y;
    r1.z = hdB286.z;
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
    vec4 hdB320 = r0;
    vec3 hdB322 = (r1.xyz * r2.xxx) + hdB320.xyz;
    r0.x = hdB322.x;
    r0.y = hdB322.y;
    r0.z = hdB322.z;
    vec4 hdB329 = r0;
    vec3 hdB336 = hdB329.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB336.x;
    r0.y = hdB336.y;
    r0.z = hdB336.z;
    vec3 hdB351 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB351.x;
    oC0.y = hdB351.y;
    oC0.z = hdB351.z;
    oC0.w = 1.0;
    bool hdB365 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB373;
    if (hdB365)
    {
        hdB373 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB373 = hdB365;
    }
    if (hdB373)
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
    bool _1256 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1266;
    if (_1256)
    {
        _1266 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1266 = _1256;
    }
    if (_1266)
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
        bool _1291 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1306;
        if (!_1291)
        {
            _1306 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1306 = _1291;
        }
        if (_1306)
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
