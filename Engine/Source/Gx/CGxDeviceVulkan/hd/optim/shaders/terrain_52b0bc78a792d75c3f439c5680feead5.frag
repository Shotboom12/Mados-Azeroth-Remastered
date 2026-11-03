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
float _RESERVED_IDENTIFIER_FIXUP_1504;
vec4 _RESERVED_IDENTIFIER_FIXUP_1505;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_577 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_581 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_585 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_597 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1229 = _RESERVED_IDENTIFIER_FIXUP_577;
    _RESERVED_IDENTIFIER_FIXUP_1229.x = _RESERVED_IDENTIFIER_FIXUP_597;
    float _RESERVED_IDENTIFIER_FIXUP_603 = clamp((_RESERVED_IDENTIFIER_FIXUP_597 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1229.x = _RESERVED_IDENTIFIER_FIXUP_603;
    float _RESERVED_IDENTIFIER_FIXUP_609 = ((-_RESERVED_IDENTIFIER_FIXUP_603) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1229.y = _RESERVED_IDENTIFIER_FIXUP_609;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1507;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1506;
    if (_RESERVED_IDENTIFIER_FIXUP_609 != (-_RESERVED_IDENTIFIER_FIXUP_609))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_621 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1242 = _RESERVED_IDENTIFIER_FIXUP_1229;
        _RESERVED_IDENTIFIER_FIXUP_1242.y = _RESERVED_IDENTIFIER_FIXUP_621.x;
        _RESERVED_IDENTIFIER_FIXUP_1242.z = _RESERVED_IDENTIFIER_FIXUP_621.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_631 = _RESERVED_IDENTIFIER_FIXUP_1242.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1246;
        _RESERVED_IDENTIFIER_FIXUP_1246.x = _RESERVED_IDENTIFIER_FIXUP_631.x;
        _RESERVED_IDENTIFIER_FIXUP_1246.y = _RESERVED_IDENTIFIER_FIXUP_631.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_1242.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1250;
        _RESERVED_IDENTIFIER_FIXUP_1250.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
        _RESERVED_IDENTIFIER_FIXUP_1250.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_651 = _RESERVED_IDENTIFIER_FIXUP_1242.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1254;
        _RESERVED_IDENTIFIER_FIXUP_1254.x = _RESERVED_IDENTIFIER_FIXUP_651.x;
        _RESERVED_IDENTIFIER_FIXUP_1254.y = _RESERVED_IDENTIFIER_FIXUP_651.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_661 = _RESERVED_IDENTIFIER_FIXUP_1242.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1258;
        _RESERVED_IDENTIFIER_FIXUP_1258.x = _RESERVED_IDENTIFIER_FIXUP_661.x;
        _RESERVED_IDENTIFIER_FIXUP_1258.y = _RESERVED_IDENTIFIER_FIXUP_661.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_669 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_669.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_669.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_675 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_1246.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1250.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1254.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1258.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1246.xy;
        float param_5 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_675.y = hdLod5(param_4, param_5).x;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1250.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_675.z = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1254.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_675.w = hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_732 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_675 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1258.xy;
        float param_11 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_738 = hdLod5(param_10, param_11).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1242.y = _RESERVED_IDENTIFIER_FIXUP_738;
        float _RESERVED_IDENTIFIER_FIXUP_743 = float(_RESERVED_IDENTIFIER_FIXUP_738 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1242.y = _RESERVED_IDENTIFIER_FIXUP_743;
        float _RESERVED_IDENTIFIER_FIXUP_746 = dot(_RESERVED_IDENTIFIER_FIXUP_732, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1242.z = _RESERVED_IDENTIFIER_FIXUP_746;
        float _RESERVED_IDENTIFIER_FIXUP_752 = _RESERVED_IDENTIFIER_FIXUP_743 + _RESERVED_IDENTIFIER_FIXUP_746;
        _RESERVED_IDENTIFIER_FIXUP_1242.y = _RESERVED_IDENTIFIER_FIXUP_752;
        float _RESERVED_IDENTIFIER_FIXUP_757 = (_RESERVED_IDENTIFIER_FIXUP_752 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1242.y = _RESERVED_IDENTIFIER_FIXUP_757;
        float _RESERVED_IDENTIFIER_FIXUP_764 = (_RESERVED_IDENTIFIER_FIXUP_603 * _RESERVED_IDENTIFIER_FIXUP_757) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1242.x = _RESERVED_IDENTIFIER_FIXUP_764;
        _RESERVED_IDENTIFIER_FIXUP_732.x = min(_RESERVED_IDENTIFIER_FIXUP_764, _RESERVED_IDENTIFIER_FIXUP_585.w);
        _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_1242;
        _RESERVED_IDENTIFIER_FIXUP_1506 = _RESERVED_IDENTIFIER_FIXUP_732;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1240 = _RESERVED_IDENTIFIER_FIXUP_581;
        _RESERVED_IDENTIFIER_FIXUP_1240.x = _RESERVED_IDENTIFIER_FIXUP_585.w;
        _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_1229;
        _RESERVED_IDENTIFIER_FIXUP_1506 = _RESERVED_IDENTIFIER_FIXUP_1240;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1319 = _RESERVED_IDENTIFIER_FIXUP_1507;
    _RESERVED_IDENTIFIER_FIXUP_1319.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_793 = mix(_RESERVED_IDENTIFIER_FIXUP_577, _RESERVED_IDENTIFIER_FIXUP_581, _RESERVED_IDENTIFIER_FIXUP_585.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_1319.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1321 = _RESERVED_IDENTIFIER_FIXUP_1319;
    _RESERVED_IDENTIFIER_FIXUP_1321.x = _RESERVED_IDENTIFIER_FIXUP_793.x;
    _RESERVED_IDENTIFIER_FIXUP_1321.y = _RESERVED_IDENTIFIER_FIXUP_793.y;
    _RESERVED_IDENTIFIER_FIXUP_1321.z = _RESERVED_IDENTIFIER_FIXUP_793.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_804 = _RESERVED_IDENTIFIER_FIXUP_1321.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1504).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_1321;
    _RESERVED_IDENTIFIER_FIXUP_1327.x = _RESERVED_IDENTIFIER_FIXUP_804.x;
    _RESERVED_IDENTIFIER_FIXUP_1327.y = _RESERVED_IDENTIFIER_FIXUP_804.y;
    _RESERVED_IDENTIFIER_FIXUP_1327.z = _RESERVED_IDENTIFIER_FIXUP_804.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_815 = _RESERVED_IDENTIFIER_FIXUP_1327.xyz + _RESERVED_IDENTIFIER_FIXUP_1327.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1333 = _RESERVED_IDENTIFIER_FIXUP_1327;
    _RESERVED_IDENTIFIER_FIXUP_1333.x = _RESERVED_IDENTIFIER_FIXUP_815.x;
    _RESERVED_IDENTIFIER_FIXUP_1333.y = _RESERVED_IDENTIFIER_FIXUP_815.y;
    _RESERVED_IDENTIFIER_FIXUP_1333.z = _RESERVED_IDENTIFIER_FIXUP_815.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_1506;
    _RESERVED_IDENTIFIER_FIXUP_1339.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1339.z = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1339.w = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_840 = (_RESERVED_IDENTIFIER_FIXUP_1339.yzw * _RESERVED_IDENTIFIER_FIXUP_1339.xxx) + _RESERVED_IDENTIFIER_FIXUP_1333.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1345 = _RESERVED_IDENTIFIER_FIXUP_1333;
    _RESERVED_IDENTIFIER_FIXUP_1345.x = _RESERVED_IDENTIFIER_FIXUP_840.x;
    _RESERVED_IDENTIFIER_FIXUP_1345.y = _RESERVED_IDENTIFIER_FIXUP_840.y;
    _RESERVED_IDENTIFIER_FIXUP_1345.z = _RESERVED_IDENTIFIER_FIXUP_840.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_853 = _RESERVED_IDENTIFIER_FIXUP_1345.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1351 = _RESERVED_IDENTIFIER_FIXUP_1345;
    _RESERVED_IDENTIFIER_FIXUP_1351.x = _RESERVED_IDENTIFIER_FIXUP_853.x;
    _RESERVED_IDENTIFIER_FIXUP_1351.y = _RESERVED_IDENTIFIER_FIXUP_853.y;
    _RESERVED_IDENTIFIER_FIXUP_1351.z = _RESERVED_IDENTIFIER_FIXUP_853.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_904 = OptTex0( texcoord0.xyz);
    vec2 param_12 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_908 = hdTex1(param_12);
    vec2 param_13 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_912 = hdTex2(param_13);
    vec4 _RESERVED_IDENTIFIER_FIXUP_917 = mix(_RESERVED_IDENTIFIER_FIXUP_904, _RESERVED_IDENTIFIER_FIXUP_908, _RESERVED_IDENTIFIER_FIXUP_912.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1367 = _RESERVED_IDENTIFIER_FIXUP_904;
    _RESERVED_IDENTIFIER_FIXUP_1367.x = _RESERVED_IDENTIFIER_FIXUP_597;
    float _RESERVED_IDENTIFIER_FIXUP_930 = clamp((_RESERVED_IDENTIFIER_FIXUP_597 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1367.x = _RESERVED_IDENTIFIER_FIXUP_930;
    float _RESERVED_IDENTIFIER_FIXUP_936 = ((-_RESERVED_IDENTIFIER_FIXUP_930) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1367.y = _RESERVED_IDENTIFIER_FIXUP_936;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1510;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1509;
    if (_RESERVED_IDENTIFIER_FIXUP_936 != (-_RESERVED_IDENTIFIER_FIXUP_936))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_948 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1380 = _RESERVED_IDENTIFIER_FIXUP_1367;
        _RESERVED_IDENTIFIER_FIXUP_1380.y = _RESERVED_IDENTIFIER_FIXUP_948.x;
        _RESERVED_IDENTIFIER_FIXUP_1380.z = _RESERVED_IDENTIFIER_FIXUP_948.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_958 = _RESERVED_IDENTIFIER_FIXUP_1380.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1384;
        _RESERVED_IDENTIFIER_FIXUP_1384.x = _RESERVED_IDENTIFIER_FIXUP_958.x;
        _RESERVED_IDENTIFIER_FIXUP_1384.y = _RESERVED_IDENTIFIER_FIXUP_958.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_968 = _RESERVED_IDENTIFIER_FIXUP_1380.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1388;
        _RESERVED_IDENTIFIER_FIXUP_1388.x = _RESERVED_IDENTIFIER_FIXUP_968.x;
        _RESERVED_IDENTIFIER_FIXUP_1388.y = _RESERVED_IDENTIFIER_FIXUP_968.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_978 = _RESERVED_IDENTIFIER_FIXUP_1380.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1392;
        _RESERVED_IDENTIFIER_FIXUP_1392.x = _RESERVED_IDENTIFIER_FIXUP_978.x;
        _RESERVED_IDENTIFIER_FIXUP_1392.y = _RESERVED_IDENTIFIER_FIXUP_978.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_988 = _RESERVED_IDENTIFIER_FIXUP_1380.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1396;
        _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_988.x;
        _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_988.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_996 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_996.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_996.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1002 = hdLod5(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_1384.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1388.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1392.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1396.w = 0.0;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1384.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1002.y = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1388.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1002.z = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1392.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1002.w = hdLod5(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1059 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1002 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1396.xy;
        float param_23 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1065 = hdLod5(param_22, param_23).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1380.y = _RESERVED_IDENTIFIER_FIXUP_1065;
        float _RESERVED_IDENTIFIER_FIXUP_1070 = float(_RESERVED_IDENTIFIER_FIXUP_1065 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1380.y = _RESERVED_IDENTIFIER_FIXUP_1070;
        float _RESERVED_IDENTIFIER_FIXUP_1073 = dot(_RESERVED_IDENTIFIER_FIXUP_1059, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1380.z = _RESERVED_IDENTIFIER_FIXUP_1073;
        float _RESERVED_IDENTIFIER_FIXUP_1079 = _RESERVED_IDENTIFIER_FIXUP_1070 + _RESERVED_IDENTIFIER_FIXUP_1073;
        _RESERVED_IDENTIFIER_FIXUP_1380.y = _RESERVED_IDENTIFIER_FIXUP_1079;
        float _RESERVED_IDENTIFIER_FIXUP_1084 = (_RESERVED_IDENTIFIER_FIXUP_1079 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1380.y = _RESERVED_IDENTIFIER_FIXUP_1084;
        float _RESERVED_IDENTIFIER_FIXUP_1091 = (_RESERVED_IDENTIFIER_FIXUP_930 * _RESERVED_IDENTIFIER_FIXUP_1084) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1380.x = _RESERVED_IDENTIFIER_FIXUP_1091;
        _RESERVED_IDENTIFIER_FIXUP_1059.x = min(_RESERVED_IDENTIFIER_FIXUP_1091, _RESERVED_IDENTIFIER_FIXUP_912.w);
        _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_1380;
        _RESERVED_IDENTIFIER_FIXUP_1509 = _RESERVED_IDENTIFIER_FIXUP_1059;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_908.x = _RESERVED_IDENTIFIER_FIXUP_912.w;
        _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_1367;
        _RESERVED_IDENTIFIER_FIXUP_1509 = _RESERVED_IDENTIFIER_FIXUP_908;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1107 = (_RESERVED_IDENTIFIER_FIXUP_1509.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1455 = _RESERVED_IDENTIFIER_FIXUP_1510;
    _RESERVED_IDENTIFIER_FIXUP_1455.x = _RESERVED_IDENTIFIER_FIXUP_1107;
    _RESERVED_IDENTIFIER_FIXUP_1455.x = _RESERVED_IDENTIFIER_FIXUP_1107;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_917.xyz * _RESERVED_IDENTIFIER_FIXUP_1455.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1461 = _RESERVED_IDENTIFIER_FIXUP_1455;
    _RESERVED_IDENTIFIER_FIXUP_1461.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
    _RESERVED_IDENTIFIER_FIXUP_1461.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
    _RESERVED_IDENTIFIER_FIXUP_1461.z = _RESERVED_IDENTIFIER_FIXUP_1120.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1131 = _RESERVED_IDENTIFIER_FIXUP_1461.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1467 = _RESERVED_IDENTIFIER_FIXUP_1461;
    _RESERVED_IDENTIFIER_FIXUP_1467.x = _RESERVED_IDENTIFIER_FIXUP_1131.x;
    _RESERVED_IDENTIFIER_FIXUP_1467.y = _RESERVED_IDENTIFIER_FIXUP_1131.y;
    _RESERVED_IDENTIFIER_FIXUP_1467.z = _RESERVED_IDENTIFIER_FIXUP_1131.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1142 = _RESERVED_IDENTIFIER_FIXUP_1467.xyz + _RESERVED_IDENTIFIER_FIXUP_1467.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1473 = _RESERVED_IDENTIFIER_FIXUP_1467;
    _RESERVED_IDENTIFIER_FIXUP_1473.x = _RESERVED_IDENTIFIER_FIXUP_1142.x;
    _RESERVED_IDENTIFIER_FIXUP_1473.y = _RESERVED_IDENTIFIER_FIXUP_1142.y;
    _RESERVED_IDENTIFIER_FIXUP_1473.z = _RESERVED_IDENTIFIER_FIXUP_1142.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1153 = _RESERVED_IDENTIFIER_FIXUP_917.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1479 = _RESERVED_IDENTIFIER_FIXUP_1509;
    _RESERVED_IDENTIFIER_FIXUP_1479.y = _RESERVED_IDENTIFIER_FIXUP_1153.x;
    _RESERVED_IDENTIFIER_FIXUP_1479.z = _RESERVED_IDENTIFIER_FIXUP_1153.y;
    _RESERVED_IDENTIFIER_FIXUP_1479.w = _RESERVED_IDENTIFIER_FIXUP_1153.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1167 = (_RESERVED_IDENTIFIER_FIXUP_1479.yzw * _RESERVED_IDENTIFIER_FIXUP_1479.xxx) + _RESERVED_IDENTIFIER_FIXUP_1473.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1485 = _RESERVED_IDENTIFIER_FIXUP_1473;
    _RESERVED_IDENTIFIER_FIXUP_1485.x = _RESERVED_IDENTIFIER_FIXUP_1167.x;
    _RESERVED_IDENTIFIER_FIXUP_1485.y = _RESERVED_IDENTIFIER_FIXUP_1167.y;
    _RESERVED_IDENTIFIER_FIXUP_1485.z = _RESERVED_IDENTIFIER_FIXUP_1167.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_1485.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1491 = _RESERVED_IDENTIFIER_FIXUP_1485;
    _RESERVED_IDENTIFIER_FIXUP_1491.x = _RESERVED_IDENTIFIER_FIXUP_1180.x;
    _RESERVED_IDENTIFIER_FIXUP_1491.y = _RESERVED_IDENTIFIER_FIXUP_1180.y;
    _RESERVED_IDENTIFIER_FIXUP_1491.z = _RESERVED_IDENTIFIER_FIXUP_1180.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1491.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_441 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_450;
    if (_RESERVED_IDENTIFIER_FIXUP_441)
    {
        _RESERVED_IDENTIFIER_FIXUP_450 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_450 = _RESERVED_IDENTIFIER_FIXUP_441;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_450)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_487 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1351.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_514 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1219;
    if (_RESERVED_IDENTIFIER_FIXUP_487 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1219 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_487), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_514);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1219 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_514);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1219;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1107);
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
        vec2 hdB111 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB111.x;
        r0.z = hdB111.y;
        vec2 hdB133 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB133.x;
        r1.y = hdB133.y;
        vec2 hdB144 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB144.x;
        r4.y = hdB144.y;
        vec2 hdB155 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB155.x;
        r5.y = hdB155.y;
        vec2 hdB166 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB166.x;
        r6.y = hdB166.y;
        r7 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r7.xy;
        float param_3 = r7.w;
        r7 = hdLod5(param_2, param_3);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_4 = r1.xy;
        float param_5 = r1.w;
        r1 = hdLod5(param_4, param_5);
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
        r7.y = r1.x;
        r7.z = r4.x;
        r7.w = r5.x;
        r1 = r7 + (-v4.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r0.y = r6.x + (-v4.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r1, vec4(1.0));
        r0.y += r0.z;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r1.x = min(r0.x, r2.w);
    }
    else
    {
        r1.x = r2.w;
    }
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB298 = r0;
    vec3 hdB300 = r3.xyz * hdB298.xxx;
    r0.x = hdB300.x;
    r0.y = hdB300.y;
    r0.z = hdB300.z;
    vec4 hdB307 = r0;
    vec3 hdB311 = hdB307.xyz * v0.xyz;
    r0.x = hdB311.x;
    r0.y = hdB311.y;
    r0.z = hdB311.z;
    vec4 hdB318 = r0;
    vec4 hdB320 = r0;
    vec3 hdB322 = hdB318.xyz + hdB320.xyz;
    r0.x = hdB322.x;
    r0.y = hdB322.y;
    r0.z = hdB322.z;
    vec3 hdB333 = r3.www * v1.xyz;
    r1.y = hdB333.x;
    r1.z = hdB333.y;
    r1.w = hdB333.z;
    vec4 hdB345 = r0;
    vec3 hdB347 = (r1.yzw * r1.xxx) + hdB345.xyz;
    r0.x = hdB347.x;
    r0.y = hdB347.y;
    r0.z = hdB347.z;
    vec4 hdB354 = r0;
    vec3 hdB361 = hdB354.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB361.x;
    r0.y = hdB361.y;
    r0.z = hdB361.z;
    vec3 hdB376 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB376.x;
    oC0.y = hdB376.y;
    oC0.z = hdB376.z;
    oC0.w = 1.0;
    bool hdB389 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB397;
    if (hdB389)
    {
        hdB397 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB397 = hdB389;
    }
    if (hdB397)
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
    bool _1369 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1379;
    if (_1369)
    {
        _1379 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1379 = _1369;
    }
    if (_1379)
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
        bool _1404 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1419;
        if (!_1404)
        {
            _1419 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1419 = _1404;
        }
        if (_1419)
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
