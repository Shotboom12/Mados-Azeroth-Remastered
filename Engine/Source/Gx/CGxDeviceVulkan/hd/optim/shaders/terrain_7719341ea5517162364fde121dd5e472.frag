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
float _RESERVED_IDENTIFIER_FIXUP_1665;
vec4 _RESERVED_IDENTIFIER_FIXUP_1666;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_619 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_623 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_627 = hdTex2(param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_631 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_633 = _RESERVED_IDENTIFIER_FIXUP_631.x;
    _RESERVED_IDENTIFIER_FIXUP_627.y = _RESERVED_IDENTIFIER_FIXUP_633;
    float _RESERVED_IDENTIFIER_FIXUP_635 = _RESERVED_IDENTIFIER_FIXUP_631.y;
    _RESERVED_IDENTIFIER_FIXUP_627.z = _RESERVED_IDENTIFIER_FIXUP_635;
    vec3 _RESERVED_IDENTIFIER_FIXUP_637 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1665).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_640 = _RESERVED_IDENTIFIER_FIXUP_637 + _RESERVED_IDENTIFIER_FIXUP_637;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1360;
    _RESERVED_IDENTIFIER_FIXUP_1360.x = _RESERVED_IDENTIFIER_FIXUP_640.x;
    _RESERVED_IDENTIFIER_FIXUP_1360.y = _RESERVED_IDENTIFIER_FIXUP_640.y;
    _RESERVED_IDENTIFIER_FIXUP_1360.z = _RESERVED_IDENTIFIER_FIXUP_640.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_648 = _RESERVED_IDENTIFIER_FIXUP_619.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_651 = _RESERVED_IDENTIFIER_FIXUP_648 * _RESERVED_IDENTIFIER_FIXUP_1360.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1366 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1366.x = _RESERVED_IDENTIFIER_FIXUP_651.x;
    _RESERVED_IDENTIFIER_FIXUP_1366.y = _RESERVED_IDENTIFIER_FIXUP_651.y;
    _RESERVED_IDENTIFIER_FIXUP_1366.z = _RESERVED_IDENTIFIER_FIXUP_651.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_666 = mix(_RESERVED_IDENTIFIER_FIXUP_1366.xyz, _RESERVED_IDENTIFIER_FIXUP_648, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_627.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1372 = _RESERVED_IDENTIFIER_FIXUP_619;
    _RESERVED_IDENTIFIER_FIXUP_1372.x = _RESERVED_IDENTIFIER_FIXUP_666.x;
    _RESERVED_IDENTIFIER_FIXUP_1372.y = _RESERVED_IDENTIFIER_FIXUP_666.y;
    _RESERVED_IDENTIFIER_FIXUP_1372.z = _RESERVED_IDENTIFIER_FIXUP_666.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_674 = _RESERVED_IDENTIFIER_FIXUP_623.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_677 = _RESERVED_IDENTIFIER_FIXUP_674 * _RESERVED_IDENTIFIER_FIXUP_1360.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1378;
    _RESERVED_IDENTIFIER_FIXUP_1378.x = _RESERVED_IDENTIFIER_FIXUP_677.x;
    _RESERVED_IDENTIFIER_FIXUP_1378.y = _RESERVED_IDENTIFIER_FIXUP_677.y;
    _RESERVED_IDENTIFIER_FIXUP_1378.z = _RESERVED_IDENTIFIER_FIXUP_677.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_692 = mix(_RESERVED_IDENTIFIER_FIXUP_1378.xyz, _RESERVED_IDENTIFIER_FIXUP_674, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_627.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1384 = _RESERVED_IDENTIFIER_FIXUP_623;
    _RESERVED_IDENTIFIER_FIXUP_1384.x = _RESERVED_IDENTIFIER_FIXUP_692.x;
    _RESERVED_IDENTIFIER_FIXUP_1384.y = _RESERVED_IDENTIFIER_FIXUP_692.y;
    _RESERVED_IDENTIFIER_FIXUP_1384.z = _RESERVED_IDENTIFIER_FIXUP_692.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_703 = mix(_RESERVED_IDENTIFIER_FIXUP_1372, _RESERVED_IDENTIFIER_FIXUP_1384, _RESERVED_IDENTIFIER_FIXUP_627.xxxx);
    float _RESERVED_IDENTIFIER_FIXUP_710 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1675 = vec4(_RESERVED_IDENTIFIER_FIXUP_703.x, 0.0, 0.0, 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1675.y = _RESERVED_IDENTIFIER_FIXUP_703.y;
    _RESERVED_IDENTIFIER_FIXUP_1675.z = _RESERVED_IDENTIFIER_FIXUP_703.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_942 = _RESERVED_IDENTIFIER_FIXUP_1675.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1496 = _RESERVED_IDENTIFIER_FIXUP_1675;
    _RESERVED_IDENTIFIER_FIXUP_1496.x = _RESERVED_IDENTIFIER_FIXUP_942.x;
    _RESERVED_IDENTIFIER_FIXUP_1496.y = _RESERVED_IDENTIFIER_FIXUP_942.y;
    _RESERVED_IDENTIFIER_FIXUP_1496.z = _RESERVED_IDENTIFIER_FIXUP_942.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_990 = OptTex0( texcoord0.xyz);
    vec2 param_2 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_994 = hdTex1(param_2);
    vec2 param_3 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_998 = hdTex2(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1510 = _RESERVED_IDENTIFIER_FIXUP_998;
    _RESERVED_IDENTIFIER_FIXUP_1510.y = _RESERVED_IDENTIFIER_FIXUP_633;
    _RESERVED_IDENTIFIER_FIXUP_1510.z = _RESERVED_IDENTIFIER_FIXUP_635;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1011 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1514;
    _RESERVED_IDENTIFIER_FIXUP_1514.x = _RESERVED_IDENTIFIER_FIXUP_1011.x;
    _RESERVED_IDENTIFIER_FIXUP_1514.y = _RESERVED_IDENTIFIER_FIXUP_1011.y;
    _RESERVED_IDENTIFIER_FIXUP_1514.z = _RESERVED_IDENTIFIER_FIXUP_1011.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1019 = _RESERVED_IDENTIFIER_FIXUP_990.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1022 = _RESERVED_IDENTIFIER_FIXUP_1019 * _RESERVED_IDENTIFIER_FIXUP_1514.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1520 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1520.x = _RESERVED_IDENTIFIER_FIXUP_1022.x;
    _RESERVED_IDENTIFIER_FIXUP_1520.y = _RESERVED_IDENTIFIER_FIXUP_1022.y;
    _RESERVED_IDENTIFIER_FIXUP_1520.z = _RESERVED_IDENTIFIER_FIXUP_1022.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1037 = mix(_RESERVED_IDENTIFIER_FIXUP_1520.xyz, _RESERVED_IDENTIFIER_FIXUP_1019, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1510.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_990;
    _RESERVED_IDENTIFIER_FIXUP_1526.x = _RESERVED_IDENTIFIER_FIXUP_1037.x;
    _RESERVED_IDENTIFIER_FIXUP_1526.y = _RESERVED_IDENTIFIER_FIXUP_1037.y;
    _RESERVED_IDENTIFIER_FIXUP_1526.z = _RESERVED_IDENTIFIER_FIXUP_1037.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1045 = _RESERVED_IDENTIFIER_FIXUP_994.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1048 = _RESERVED_IDENTIFIER_FIXUP_1045 * _RESERVED_IDENTIFIER_FIXUP_1514.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1532;
    _RESERVED_IDENTIFIER_FIXUP_1532.x = _RESERVED_IDENTIFIER_FIXUP_1048.x;
    _RESERVED_IDENTIFIER_FIXUP_1532.y = _RESERVED_IDENTIFIER_FIXUP_1048.y;
    _RESERVED_IDENTIFIER_FIXUP_1532.z = _RESERVED_IDENTIFIER_FIXUP_1048.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1063 = mix(_RESERVED_IDENTIFIER_FIXUP_1532.xyz, _RESERVED_IDENTIFIER_FIXUP_1045, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1510.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1538 = _RESERVED_IDENTIFIER_FIXUP_994;
    _RESERVED_IDENTIFIER_FIXUP_1538.x = _RESERVED_IDENTIFIER_FIXUP_1063.x;
    _RESERVED_IDENTIFIER_FIXUP_1538.y = _RESERVED_IDENTIFIER_FIXUP_1063.y;
    _RESERVED_IDENTIFIER_FIXUP_1538.z = _RESERVED_IDENTIFIER_FIXUP_1063.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1074 = mix(_RESERVED_IDENTIFIER_FIXUP_1526, _RESERVED_IDENTIFIER_FIXUP_1538, _RESERVED_IDENTIFIER_FIXUP_1510.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_1526;
    _RESERVED_IDENTIFIER_FIXUP_1546.x = _RESERVED_IDENTIFIER_FIXUP_710;
    float _RESERVED_IDENTIFIER_FIXUP_1087 = clamp((_RESERVED_IDENTIFIER_FIXUP_710 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1546.x = _RESERVED_IDENTIFIER_FIXUP_1087;
    float _RESERVED_IDENTIFIER_FIXUP_1093 = ((-_RESERVED_IDENTIFIER_FIXUP_1087) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1546.y = _RESERVED_IDENTIFIER_FIXUP_1093;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1670;
    if (_RESERVED_IDENTIFIER_FIXUP_1093 != (-_RESERVED_IDENTIFIER_FIXUP_1093))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1105 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1115 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1115.x;
        _RESERVED_IDENTIFIER_FIXUP_1546.y = _RESERVED_IDENTIFIER_FIXUP_1117;
        _RESERVED_IDENTIFIER_FIXUP_1546.z = _RESERVED_IDENTIFIER_FIXUP_1115.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1125 = _RESERVED_IDENTIFIER_FIXUP_1546.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1564;
        _RESERVED_IDENTIFIER_FIXUP_1564.x = _RESERVED_IDENTIFIER_FIXUP_1125.x;
        _RESERVED_IDENTIFIER_FIXUP_1564.y = _RESERVED_IDENTIFIER_FIXUP_1125.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1132 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1136 = _RESERVED_IDENTIFIER_FIXUP_1132.y;
        _RESERVED_IDENTIFIER_FIXUP_1564.w = _RESERVED_IDENTIFIER_FIXUP_1136;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1105.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1105.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1564.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1136;
        float _RESERVED_IDENTIFIER_FIXUP_1147 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1677 = vec4(_RESERVED_IDENTIFIER_FIXUP_1087, _RESERVED_IDENTIFIER_FIXUP_1117, _RESERVED_IDENTIFIER_FIXUP_1115.y, _RESERVED_IDENTIFIER_FIXUP_1147);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1154 = _RESERVED_IDENTIFIER_FIXUP_1677.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1577;
        _RESERVED_IDENTIFIER_FIXUP_1577.x = _RESERVED_IDENTIFIER_FIXUP_1154.x;
        _RESERVED_IDENTIFIER_FIXUP_1577.y = _RESERVED_IDENTIFIER_FIXUP_1154.y;
        _RESERVED_IDENTIFIER_FIXUP_1577.w = _RESERVED_IDENTIFIER_FIXUP_1136;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1577.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1136;
        float _RESERVED_IDENTIFIER_FIXUP_1176 = _RESERVED_IDENTIFIER_FIXUP_1147 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1677.w = _RESERVED_IDENTIFIER_FIXUP_1176;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1183 = _RESERVED_IDENTIFIER_FIXUP_1677.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1590;
        _RESERVED_IDENTIFIER_FIXUP_1590.x = _RESERVED_IDENTIFIER_FIXUP_1183.x;
        _RESERVED_IDENTIFIER_FIXUP_1590.y = _RESERVED_IDENTIFIER_FIXUP_1183.y;
        _RESERVED_IDENTIFIER_FIXUP_1590.w = _RESERVED_IDENTIFIER_FIXUP_1136;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1590.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1136;
        float _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_1176 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1677.w = _RESERVED_IDENTIFIER_FIXUP_1205;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1212 = _RESERVED_IDENTIFIER_FIXUP_1677.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1603;
        _RESERVED_IDENTIFIER_FIXUP_1603.x = _RESERVED_IDENTIFIER_FIXUP_1212.x;
        _RESERVED_IDENTIFIER_FIXUP_1603.y = _RESERVED_IDENTIFIER_FIXUP_1212.y;
        _RESERVED_IDENTIFIER_FIXUP_1603.w = _RESERVED_IDENTIFIER_FIXUP_1136;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1603.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1136;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1229 = hdLod5(param_12, param_13);
        _RESERVED_IDENTIFIER_FIXUP_1229.x = min((_RESERVED_IDENTIFIER_FIXUP_1087 * (((_RESERVED_IDENTIFIER_FIXUP_1205 + _RESERVED_IDENTIFIER_FIXUP_1229.x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_998.w);
        _RESERVED_IDENTIFIER_FIXUP_1670 = _RESERVED_IDENTIFIER_FIXUP_1229;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1557 = _RESERVED_IDENTIFIER_FIXUP_1538;
        _RESERVED_IDENTIFIER_FIXUP_1557.x = _RESERVED_IDENTIFIER_FIXUP_998.w;
        _RESERVED_IDENTIFIER_FIXUP_1670 = _RESERVED_IDENTIFIER_FIXUP_1557;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1262 = (_RESERVED_IDENTIFIER_FIXUP_1670.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1678 = vec4(_RESERVED_IDENTIFIER_FIXUP_1262, _RESERVED_IDENTIFIER_FIXUP_1074.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_1670.xxx * _RESERVED_IDENTIFIER_FIXUP_1678.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_1286.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1640 = _RESERVED_IDENTIFIER_FIXUP_1678;
    _RESERVED_IDENTIFIER_FIXUP_1640.y = _RESERVED_IDENTIFIER_FIXUP_1288;
    _RESERVED_IDENTIFIER_FIXUP_1640.z = _RESERVED_IDENTIFIER_FIXUP_1286.y;
    _RESERVED_IDENTIFIER_FIXUP_1640.w = _RESERVED_IDENTIFIER_FIXUP_1286.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1300 = (_RESERVED_IDENTIFIER_FIXUP_1074.xyz * _RESERVED_IDENTIFIER_FIXUP_1640.xxx) + _RESERVED_IDENTIFIER_FIXUP_1640.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1679 = vec4(_RESERVED_IDENTIFIER_FIXUP_1300.x, _RESERVED_IDENTIFIER_FIXUP_1288, _RESERVED_IDENTIFIER_FIXUP_1286.yz);
    _RESERVED_IDENTIFIER_FIXUP_1679.y = _RESERVED_IDENTIFIER_FIXUP_1300.y;
    _RESERVED_IDENTIFIER_FIXUP_1679.z = _RESERVED_IDENTIFIER_FIXUP_1300.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1313 = _RESERVED_IDENTIFIER_FIXUP_1679.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1652 = _RESERVED_IDENTIFIER_FIXUP_1679;
    _RESERVED_IDENTIFIER_FIXUP_1652.x = _RESERVED_IDENTIFIER_FIXUP_1313.x;
    _RESERVED_IDENTIFIER_FIXUP_1652.y = _RESERVED_IDENTIFIER_FIXUP_1313.y;
    _RESERVED_IDENTIFIER_FIXUP_1652.z = _RESERVED_IDENTIFIER_FIXUP_1313.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1652.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_486 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_495;
    if (_RESERVED_IDENTIFIER_FIXUP_486)
    {
        _RESERVED_IDENTIFIER_FIXUP_495 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_495 = _RESERVED_IDENTIFIER_FIXUP_486;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_495)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_532 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1496.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_558 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1348;
    if (_RESERVED_IDENTIFIER_FIXUP_532 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1348 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_532), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_558);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1348 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_558);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1348;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1262);
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
    vec2 hdB77 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = hdB77.x;
    r2.z = hdB77.y;
    vec3 hdB89 = v0.xyz + v0.xyz;
    r3.x = hdB89.x;
    r3.y = hdB89.y;
    r3.z = hdB89.z;
    vec3 hdB101 = r0.xyz * r3.xyz;
    r4.x = hdB101.x;
    r4.y = hdB101.y;
    r4.z = hdB101.z;
    vec4 hdB110 = r0;
    vec3 hdB119 = mix(r4.xyz, hdB110.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = hdB119.x;
    r0.y = hdB119.y;
    r0.z = hdB119.z;
    vec4 hdB128 = r3;
    vec3 hdB130 = r1.xyz * hdB128.xyz;
    r3.x = hdB130.x;
    r3.y = hdB130.y;
    r3.z = hdB130.z;
    vec4 hdB139 = r1;
    vec3 hdB145 = mix(r3.xyz, hdB139.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = hdB145.x;
    r1.y = hdB145.y;
    r1.z = hdB145.z;
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
        vec2 hdB207 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB207.x;
        r0.z = hdB207.y;
        vec2 hdB218 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB218.x;
        r4.y = hdB218.y;
        vec2 hdB226 = vec2(1.0, 0.0) * v4.zx;
        r4.z = hdB226.x;
        r4.w = hdB226.y;
        vec2 param_4 = r4.xy;
        float param_5 = r4.w;
        r4 = hdLod5(param_4, param_5);
        r0.w = r1.x + r4.x;
        vec2 hdB249 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = hdB249.x;
        r1.y = hdB249.y;
        vec2 hdB256 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB256.x;
        r1.w = hdB256.y;
        vec2 param_6 = r1.xy;
        float param_7 = r1.w;
        r1 = hdLod5(param_6, param_7);
        r0.w += r1.x;
        vec2 hdB279 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = hdB279.x;
        r1.y = hdB279.y;
        vec2 hdB286 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB286.x;
        r1.w = hdB286.y;
        vec2 param_8 = r1.xy;
        float param_9 = r1.w;
        r1 = hdLod5(param_8, param_9);
        r0.w += r1.x;
        vec2 hdB309 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = hdB309.x;
        r1.y = hdB309.y;
        vec2 hdB316 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB316.x;
        r1.w = hdB316.y;
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
    vec3 hdB368 = r3.www * v1.xyz;
    r0.y = hdB368.x;
    r0.z = hdB368.y;
    r0.w = hdB368.z;
    vec4 hdB377 = r0;
    vec3 hdB379 = r1.xxx * hdB377.yzw;
    r0.y = hdB379.x;
    r0.z = hdB379.y;
    r0.w = hdB379.z;
    vec4 hdB388 = r0;
    vec4 hdB391 = r0;
    vec3 hdB393 = (r3.xyz * hdB388.xxx) + hdB391.yzw;
    r0.x = hdB393.x;
    r0.y = hdB393.y;
    r0.z = hdB393.z;
    vec4 hdB400 = r0;
    vec3 hdB407 = hdB400.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB407.x;
    r0.y = hdB407.y;
    r0.z = hdB407.z;
    vec3 hdB422 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB422.x;
    oC0.y = hdB422.y;
    oC0.z = hdB422.z;
    oC0.w = 1.0;
    bool hdB434 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB442;
    if (hdB434)
    {
        hdB442 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB442 = hdB434;
    }
    if (hdB442)
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
    bool _1348 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1358;
    if (_1348)
    {
        _1358 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1358 = _1348;
    }
    if (_1358)
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
        bool _1383 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1398;
        if (!_1383)
        {
            _1398 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1398 = _1383;
        }
        if (_1398)
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
