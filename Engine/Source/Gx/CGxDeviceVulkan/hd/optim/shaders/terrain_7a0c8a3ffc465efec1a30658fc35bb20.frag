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
float _RESERVED_IDENTIFIER_FIXUP_1747;
vec4 _RESERVED_IDENTIFIER_FIXUP_1748;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_643 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_647 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_651 = hdTex2(param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_655 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1416 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1416.x = _RESERVED_IDENTIFIER_FIXUP_655.x;
    float _RESERVED_IDENTIFIER_FIXUP_659 = _RESERVED_IDENTIFIER_FIXUP_655.y;
    _RESERVED_IDENTIFIER_FIXUP_1416.y = _RESERVED_IDENTIFIER_FIXUP_659;
    vec3 _RESERVED_IDENTIFIER_FIXUP_661 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1747).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_664 = _RESERVED_IDENTIFIER_FIXUP_661 + _RESERVED_IDENTIFIER_FIXUP_661;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1420 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1420.x = _RESERVED_IDENTIFIER_FIXUP_664.x;
    _RESERVED_IDENTIFIER_FIXUP_1420.y = _RESERVED_IDENTIFIER_FIXUP_664.y;
    _RESERVED_IDENTIFIER_FIXUP_1420.z = _RESERVED_IDENTIFIER_FIXUP_664.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_672 = _RESERVED_IDENTIFIER_FIXUP_643.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_675 = _RESERVED_IDENTIFIER_FIXUP_672 * _RESERVED_IDENTIFIER_FIXUP_1420.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1426 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1426.x = _RESERVED_IDENTIFIER_FIXUP_675.x;
    _RESERVED_IDENTIFIER_FIXUP_1426.y = _RESERVED_IDENTIFIER_FIXUP_675.y;
    _RESERVED_IDENTIFIER_FIXUP_1426.z = _RESERVED_IDENTIFIER_FIXUP_675.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_689 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1416.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_690 = mix(_RESERVED_IDENTIFIER_FIXUP_1426.xyz, _RESERVED_IDENTIFIER_FIXUP_672, _RESERVED_IDENTIFIER_FIXUP_689);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1432 = _RESERVED_IDENTIFIER_FIXUP_643;
    _RESERVED_IDENTIFIER_FIXUP_1432.x = _RESERVED_IDENTIFIER_FIXUP_690.x;
    _RESERVED_IDENTIFIER_FIXUP_1432.y = _RESERVED_IDENTIFIER_FIXUP_690.y;
    _RESERVED_IDENTIFIER_FIXUP_1432.z = _RESERVED_IDENTIFIER_FIXUP_690.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_698 = _RESERVED_IDENTIFIER_FIXUP_647.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_701 = _RESERVED_IDENTIFIER_FIXUP_698 * _RESERVED_IDENTIFIER_FIXUP_1420.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1757 = vec4(_RESERVED_IDENTIFIER_FIXUP_701.x, _RESERVED_IDENTIFIER_FIXUP_659, _RESERVED_IDENTIFIER_FIXUP_701.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_716 = mix(_RESERVED_IDENTIFIER_FIXUP_1757.xzw, _RESERVED_IDENTIFIER_FIXUP_698, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1757.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1444 = _RESERVED_IDENTIFIER_FIXUP_647;
    _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_716.x;
    _RESERVED_IDENTIFIER_FIXUP_1444.y = _RESERVED_IDENTIFIER_FIXUP_716.y;
    _RESERVED_IDENTIFIER_FIXUP_1444.z = _RESERVED_IDENTIFIER_FIXUP_716.z;
    float _RESERVED_IDENTIFIER_FIXUP_726 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_651.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1450 = _RESERVED_IDENTIFIER_FIXUP_651;
    _RESERVED_IDENTIFIER_FIXUP_1450.y = _RESERVED_IDENTIFIER_FIXUP_726;
    _RESERVED_IDENTIFIER_FIXUP_1450.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_726;
    vec4 _RESERVED_IDENTIFIER_FIXUP_742 = (_RESERVED_IDENTIFIER_FIXUP_1432 * _RESERVED_IDENTIFIER_FIXUP_1450.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1450.xxxx * _RESERVED_IDENTIFIER_FIXUP_1444);
    float _RESERVED_IDENTIFIER_FIXUP_749 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1561 = _RESERVED_IDENTIFIER_FIXUP_742;
    _RESERVED_IDENTIFIER_FIXUP_1561.x = _RESERVED_IDENTIFIER_FIXUP_742.x;
    _RESERVED_IDENTIFIER_FIXUP_1561.y = _RESERVED_IDENTIFIER_FIXUP_742.y;
    _RESERVED_IDENTIFIER_FIXUP_1561.z = _RESERVED_IDENTIFIER_FIXUP_742.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_983 = _RESERVED_IDENTIFIER_FIXUP_1561.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1567 = _RESERVED_IDENTIFIER_FIXUP_1561;
    _RESERVED_IDENTIFIER_FIXUP_1567.x = _RESERVED_IDENTIFIER_FIXUP_983.x;
    _RESERVED_IDENTIFIER_FIXUP_1567.y = _RESERVED_IDENTIFIER_FIXUP_983.y;
    _RESERVED_IDENTIFIER_FIXUP_1567.z = _RESERVED_IDENTIFIER_FIXUP_983.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1034 = OptTex0( texcoord0.xyz);
    vec2 param_2 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1038 = hdTex1(param_2);
    vec2 param_3 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1042 = hdTex2(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1055 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1585 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1585.x = _RESERVED_IDENTIFIER_FIXUP_1055.x;
    _RESERVED_IDENTIFIER_FIXUP_1585.y = _RESERVED_IDENTIFIER_FIXUP_1055.y;
    _RESERVED_IDENTIFIER_FIXUP_1585.z = _RESERVED_IDENTIFIER_FIXUP_1055.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1063 = _RESERVED_IDENTIFIER_FIXUP_1034.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1066 = _RESERVED_IDENTIFIER_FIXUP_1063 * _RESERVED_IDENTIFIER_FIXUP_1585.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1591 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1591.x = _RESERVED_IDENTIFIER_FIXUP_1066.x;
    _RESERVED_IDENTIFIER_FIXUP_1591.y = _RESERVED_IDENTIFIER_FIXUP_1066.y;
    _RESERVED_IDENTIFIER_FIXUP_1591.z = _RESERVED_IDENTIFIER_FIXUP_1066.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1081 = mix(_RESERVED_IDENTIFIER_FIXUP_1591.xyz, _RESERVED_IDENTIFIER_FIXUP_1063, _RESERVED_IDENTIFIER_FIXUP_689);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1597 = _RESERVED_IDENTIFIER_FIXUP_1034;
    _RESERVED_IDENTIFIER_FIXUP_1597.x = _RESERVED_IDENTIFIER_FIXUP_1081.x;
    _RESERVED_IDENTIFIER_FIXUP_1597.y = _RESERVED_IDENTIFIER_FIXUP_1081.y;
    _RESERVED_IDENTIFIER_FIXUP_1597.z = _RESERVED_IDENTIFIER_FIXUP_1081.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1089 = _RESERVED_IDENTIFIER_FIXUP_1038.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1092 = _RESERVED_IDENTIFIER_FIXUP_1089 * _RESERVED_IDENTIFIER_FIXUP_1585.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1760 = vec4(_RESERVED_IDENTIFIER_FIXUP_1092.x, _RESERVED_IDENTIFIER_FIXUP_659, _RESERVED_IDENTIFIER_FIXUP_1092.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1107 = mix(_RESERVED_IDENTIFIER_FIXUP_1760.xzw, _RESERVED_IDENTIFIER_FIXUP_1089, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1760.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1609 = _RESERVED_IDENTIFIER_FIXUP_1038;
    _RESERVED_IDENTIFIER_FIXUP_1609.x = _RESERVED_IDENTIFIER_FIXUP_1107.x;
    _RESERVED_IDENTIFIER_FIXUP_1609.y = _RESERVED_IDENTIFIER_FIXUP_1107.y;
    _RESERVED_IDENTIFIER_FIXUP_1609.z = _RESERVED_IDENTIFIER_FIXUP_1107.z;
    float _RESERVED_IDENTIFIER_FIXUP_1117 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1042.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1615 = _RESERVED_IDENTIFIER_FIXUP_1042;
    _RESERVED_IDENTIFIER_FIXUP_1615.y = _RESERVED_IDENTIFIER_FIXUP_1117;
    _RESERVED_IDENTIFIER_FIXUP_1615.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1117;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1127 = _RESERVED_IDENTIFIER_FIXUP_1615.xxxx * _RESERVED_IDENTIFIER_FIXUP_1609;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1133 = (_RESERVED_IDENTIFIER_FIXUP_1597 * _RESERVED_IDENTIFIER_FIXUP_1615.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1127;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1622 = _RESERVED_IDENTIFIER_FIXUP_1127;
    _RESERVED_IDENTIFIER_FIXUP_1622.x = _RESERVED_IDENTIFIER_FIXUP_749;
    float _RESERVED_IDENTIFIER_FIXUP_1146 = clamp((_RESERVED_IDENTIFIER_FIXUP_749 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1622.x = _RESERVED_IDENTIFIER_FIXUP_1146;
    float _RESERVED_IDENTIFIER_FIXUP_1152 = ((-_RESERVED_IDENTIFIER_FIXUP_1146) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1622.y = _RESERVED_IDENTIFIER_FIXUP_1152;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1753;
    if (_RESERVED_IDENTIFIER_FIXUP_1152 != (-_RESERVED_IDENTIFIER_FIXUP_1152))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1164 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1622.y = _RESERVED_IDENTIFIER_FIXUP_1164.x;
        _RESERVED_IDENTIFIER_FIXUP_1622.z = _RESERVED_IDENTIFIER_FIXUP_1164.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1622.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1639;
        _RESERVED_IDENTIFIER_FIXUP_1639.x = _RESERVED_IDENTIFIER_FIXUP_1174.x;
        _RESERVED_IDENTIFIER_FIXUP_1639.y = _RESERVED_IDENTIFIER_FIXUP_1174.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1184 = _RESERVED_IDENTIFIER_FIXUP_1622.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1643;
        _RESERVED_IDENTIFIER_FIXUP_1643.x = _RESERVED_IDENTIFIER_FIXUP_1184.x;
        _RESERVED_IDENTIFIER_FIXUP_1643.y = _RESERVED_IDENTIFIER_FIXUP_1184.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1194 = _RESERVED_IDENTIFIER_FIXUP_1622.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1647;
        _RESERVED_IDENTIFIER_FIXUP_1647.x = _RESERVED_IDENTIFIER_FIXUP_1194.x;
        _RESERVED_IDENTIFIER_FIXUP_1647.y = _RESERVED_IDENTIFIER_FIXUP_1194.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1204 = _RESERVED_IDENTIFIER_FIXUP_1622.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1651;
        _RESERVED_IDENTIFIER_FIXUP_1651.x = _RESERVED_IDENTIFIER_FIXUP_1204.x;
        _RESERVED_IDENTIFIER_FIXUP_1651.y = _RESERVED_IDENTIFIER_FIXUP_1204.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1212 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1212.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1212.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1218 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_1639.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1643.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1647.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1651.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1639.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1218.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1643.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1218.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1647.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1218.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1275 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1218 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1651.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1275.x = min((_RESERVED_IDENTIFIER_FIXUP_1146 * (((float((hdLod5(param_12, param_13).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1275, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1042.w);
        _RESERVED_IDENTIFIER_FIXUP_1753 = _RESERVED_IDENTIFIER_FIXUP_1275;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1760.x = _RESERVED_IDENTIFIER_FIXUP_1042.w;
        _RESERVED_IDENTIFIER_FIXUP_1753 = _RESERVED_IDENTIFIER_FIXUP_1760;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1323 = (_RESERVED_IDENTIFIER_FIXUP_1753.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1761 = vec4(_RESERVED_IDENTIFIER_FIXUP_1323, _RESERVED_IDENTIFIER_FIXUP_1133.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_1753.xxx * _RESERVED_IDENTIFIER_FIXUP_1761.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1722 = _RESERVED_IDENTIFIER_FIXUP_1761;
    _RESERVED_IDENTIFIER_FIXUP_1722.y = _RESERVED_IDENTIFIER_FIXUP_1347.x;
    _RESERVED_IDENTIFIER_FIXUP_1722.z = _RESERVED_IDENTIFIER_FIXUP_1347.y;
    _RESERVED_IDENTIFIER_FIXUP_1722.w = _RESERVED_IDENTIFIER_FIXUP_1347.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1361 = (_RESERVED_IDENTIFIER_FIXUP_1133.xyz * _RESERVED_IDENTIFIER_FIXUP_1722.xxx) + _RESERVED_IDENTIFIER_FIXUP_1722.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1728 = _RESERVED_IDENTIFIER_FIXUP_1133;
    _RESERVED_IDENTIFIER_FIXUP_1728.x = _RESERVED_IDENTIFIER_FIXUP_1361.x;
    _RESERVED_IDENTIFIER_FIXUP_1728.y = _RESERVED_IDENTIFIER_FIXUP_1361.y;
    _RESERVED_IDENTIFIER_FIXUP_1728.z = _RESERVED_IDENTIFIER_FIXUP_1361.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1374 = _RESERVED_IDENTIFIER_FIXUP_1728.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1734 = _RESERVED_IDENTIFIER_FIXUP_1728;
    _RESERVED_IDENTIFIER_FIXUP_1734.x = _RESERVED_IDENTIFIER_FIXUP_1374.x;
    _RESERVED_IDENTIFIER_FIXUP_1734.y = _RESERVED_IDENTIFIER_FIXUP_1374.y;
    _RESERVED_IDENTIFIER_FIXUP_1734.z = _RESERVED_IDENTIFIER_FIXUP_1374.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1734.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_508 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_517;
    if (_RESERVED_IDENTIFIER_FIXUP_508)
    {
        _RESERVED_IDENTIFIER_FIXUP_517 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_517 = _RESERVED_IDENTIFIER_FIXUP_508;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_517)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_554 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1567.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_580 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1409;
    if (_RESERVED_IDENTIFIER_FIXUP_554 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1409 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_554), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_580);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1409 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_580);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1409;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1323);
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
    vec2 hdB80 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r3.x = hdB80.x;
    r3.y = hdB80.y;
    vec3 hdB92 = v0.xyz + v0.xyz;
    r4.x = hdB92.x;
    r4.y = hdB92.y;
    r4.z = hdB92.z;
    vec3 hdB104 = r0.xyz * r4.xyz;
    r5.x = hdB104.x;
    r5.y = hdB104.y;
    r5.z = hdB104.z;
    vec4 hdB113 = r0;
    vec3 hdB122 = mix(r5.xyz, hdB113.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB122.x;
    r0.y = hdB122.y;
    r0.z = hdB122.z;
    vec3 hdB133 = r1.xyz * r4.xyz;
    r3.x = hdB133.x;
    r3.z = hdB133.y;
    r3.w = hdB133.z;
    vec4 hdB143 = r1;
    vec3 hdB149 = mix(r3.xzw, hdB143.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = hdB149.x;
    r1.y = hdB149.y;
    r1.z = hdB149.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB213 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB213.x;
        r1.z = hdB213.y;
        vec2 hdB224 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB224.x;
        r3.y = hdB224.y;
        vec2 hdB235 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB235.x;
        r4.y = hdB235.y;
        vec2 hdB246 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB246.x;
        r5.y = hdB246.y;
        vec2 hdB257 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB257.x;
        r6.y = hdB257.y;
        r7 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r7.xy;
        float param_3 = r7.w;
        r7 = hdLod5(param_2, param_3);
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
        r7.y = r3.x;
        r7.z = r4.x;
        r7.w = r5.x;
        r3 = r7 + (-v4.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.y = r6.x + (-v4.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r3.x = min(r1.x, r2.w);
    }
    else
    {
        r3.x = r2.w;
    }
    r1.x = (r3.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB390 = r0.www * v1.xyz;
    r1.y = hdB390.x;
    r1.z = hdB390.y;
    r1.w = hdB390.z;
    vec4 hdB399 = r1;
    vec3 hdB401 = r3.xxx * hdB399.yzw;
    r1.y = hdB401.x;
    r1.z = hdB401.y;
    r1.w = hdB401.z;
    vec4 hdB408 = r0;
    vec3 hdB415 = (hdB408.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB415.x;
    r0.y = hdB415.y;
    r0.z = hdB415.z;
    vec4 hdB422 = r0;
    vec3 hdB429 = hdB422.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB429.x;
    r0.y = hdB429.y;
    r0.z = hdB429.z;
    vec3 hdB444 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB444.x;
    oC0.y = hdB444.y;
    oC0.z = hdB444.z;
    oC0.w = 1.0;
    bool hdB456 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB464;
    if (hdB456)
    {
        hdB464 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB464 = hdB456;
    }
    if (hdB464)
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
    bool _1341 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1351;
    if (_1341)
    {
        _1351 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1351 = _1341;
    }
    if (_1351)
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
        bool _1376 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1391;
        if (!_1376)
        {
            _1391 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1391 = _1376;
        }
        if (_1391)
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
