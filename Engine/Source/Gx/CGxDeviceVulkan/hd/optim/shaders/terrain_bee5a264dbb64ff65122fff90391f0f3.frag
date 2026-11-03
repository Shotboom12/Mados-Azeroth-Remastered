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
float _RESERVED_IDENTIFIER_FIXUP_1692;
vec4 _RESERVED_IDENTIFIER_FIXUP_1693;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_627 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_631 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_635 = hdTex2(param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_639 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_639.x;
    _RESERVED_IDENTIFIER_FIXUP_635.y = _RESERVED_IDENTIFIER_FIXUP_641;
    float _RESERVED_IDENTIFIER_FIXUP_643 = _RESERVED_IDENTIFIER_FIXUP_639.y;
    _RESERVED_IDENTIFIER_FIXUP_635.z = _RESERVED_IDENTIFIER_FIXUP_643;
    vec3 _RESERVED_IDENTIFIER_FIXUP_645 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1692).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_648 = _RESERVED_IDENTIFIER_FIXUP_645 + _RESERVED_IDENTIFIER_FIXUP_645;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1375;
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_648.x;
    _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_648.y;
    _RESERVED_IDENTIFIER_FIXUP_1375.z = _RESERVED_IDENTIFIER_FIXUP_648.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_627.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_659 = _RESERVED_IDENTIFIER_FIXUP_656 * _RESERVED_IDENTIFIER_FIXUP_1375.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1381 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1381.x = _RESERVED_IDENTIFIER_FIXUP_659.x;
    _RESERVED_IDENTIFIER_FIXUP_1381.y = _RESERVED_IDENTIFIER_FIXUP_659.y;
    _RESERVED_IDENTIFIER_FIXUP_1381.z = _RESERVED_IDENTIFIER_FIXUP_659.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_674 = mix(_RESERVED_IDENTIFIER_FIXUP_1381.xyz, _RESERVED_IDENTIFIER_FIXUP_656, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_635.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1387 = _RESERVED_IDENTIFIER_FIXUP_627;
    _RESERVED_IDENTIFIER_FIXUP_1387.x = _RESERVED_IDENTIFIER_FIXUP_674.x;
    _RESERVED_IDENTIFIER_FIXUP_1387.y = _RESERVED_IDENTIFIER_FIXUP_674.y;
    _RESERVED_IDENTIFIER_FIXUP_1387.z = _RESERVED_IDENTIFIER_FIXUP_674.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_682 = _RESERVED_IDENTIFIER_FIXUP_631.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_685 = _RESERVED_IDENTIFIER_FIXUP_682 * _RESERVED_IDENTIFIER_FIXUP_1375.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1393;
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_685.x;
    _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_685.y;
    _RESERVED_IDENTIFIER_FIXUP_1393.z = _RESERVED_IDENTIFIER_FIXUP_685.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_700 = mix(_RESERVED_IDENTIFIER_FIXUP_1393.xyz, _RESERVED_IDENTIFIER_FIXUP_682, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_635.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1399 = _RESERVED_IDENTIFIER_FIXUP_631;
    _RESERVED_IDENTIFIER_FIXUP_1399.x = _RESERVED_IDENTIFIER_FIXUP_700.x;
    _RESERVED_IDENTIFIER_FIXUP_1399.y = _RESERVED_IDENTIFIER_FIXUP_700.y;
    _RESERVED_IDENTIFIER_FIXUP_1399.z = _RESERVED_IDENTIFIER_FIXUP_700.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_711 = mix(_RESERVED_IDENTIFIER_FIXUP_1387, _RESERVED_IDENTIFIER_FIXUP_1399, _RESERVED_IDENTIFIER_FIXUP_635.xxxx);
    float _RESERVED_IDENTIFIER_FIXUP_718 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1701 = vec4(_RESERVED_IDENTIFIER_FIXUP_711.x, 0.0, 0.0, 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1701.y = _RESERVED_IDENTIFIER_FIXUP_711.y;
    _RESERVED_IDENTIFIER_FIXUP_1701.z = _RESERVED_IDENTIFIER_FIXUP_711.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_952 = _RESERVED_IDENTIFIER_FIXUP_1701.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_1701;
    _RESERVED_IDENTIFIER_FIXUP_1517.x = _RESERVED_IDENTIFIER_FIXUP_952.x;
    _RESERVED_IDENTIFIER_FIXUP_1517.y = _RESERVED_IDENTIFIER_FIXUP_952.y;
    _RESERVED_IDENTIFIER_FIXUP_1517.z = _RESERVED_IDENTIFIER_FIXUP_952.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1003 = OptTex0( texcoord0.xyz);
    vec2 param_2 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1007 = hdTex1(param_2);
    vec2 param_3 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1011 = hdTex2(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1531 = _RESERVED_IDENTIFIER_FIXUP_1011;
    _RESERVED_IDENTIFIER_FIXUP_1531.y = _RESERVED_IDENTIFIER_FIXUP_641;
    _RESERVED_IDENTIFIER_FIXUP_1531.z = _RESERVED_IDENTIFIER_FIXUP_643;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1024 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1535;
    _RESERVED_IDENTIFIER_FIXUP_1535.x = _RESERVED_IDENTIFIER_FIXUP_1024.x;
    _RESERVED_IDENTIFIER_FIXUP_1535.y = _RESERVED_IDENTIFIER_FIXUP_1024.y;
    _RESERVED_IDENTIFIER_FIXUP_1535.z = _RESERVED_IDENTIFIER_FIXUP_1024.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1032 = _RESERVED_IDENTIFIER_FIXUP_1003.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1035 = _RESERVED_IDENTIFIER_FIXUP_1032 * _RESERVED_IDENTIFIER_FIXUP_1535.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1541 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1541.x = _RESERVED_IDENTIFIER_FIXUP_1035.x;
    _RESERVED_IDENTIFIER_FIXUP_1541.y = _RESERVED_IDENTIFIER_FIXUP_1035.y;
    _RESERVED_IDENTIFIER_FIXUP_1541.z = _RESERVED_IDENTIFIER_FIXUP_1035.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1050 = mix(_RESERVED_IDENTIFIER_FIXUP_1541.xyz, _RESERVED_IDENTIFIER_FIXUP_1032, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1531.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1547 = _RESERVED_IDENTIFIER_FIXUP_1003;
    _RESERVED_IDENTIFIER_FIXUP_1547.x = _RESERVED_IDENTIFIER_FIXUP_1050.x;
    _RESERVED_IDENTIFIER_FIXUP_1547.y = _RESERVED_IDENTIFIER_FIXUP_1050.y;
    _RESERVED_IDENTIFIER_FIXUP_1547.z = _RESERVED_IDENTIFIER_FIXUP_1050.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1058 = _RESERVED_IDENTIFIER_FIXUP_1007.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1061 = _RESERVED_IDENTIFIER_FIXUP_1058 * _RESERVED_IDENTIFIER_FIXUP_1535.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1553;
    _RESERVED_IDENTIFIER_FIXUP_1553.x = _RESERVED_IDENTIFIER_FIXUP_1061.x;
    _RESERVED_IDENTIFIER_FIXUP_1553.y = _RESERVED_IDENTIFIER_FIXUP_1061.y;
    _RESERVED_IDENTIFIER_FIXUP_1553.z = _RESERVED_IDENTIFIER_FIXUP_1061.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1076 = mix(_RESERVED_IDENTIFIER_FIXUP_1553.xyz, _RESERVED_IDENTIFIER_FIXUP_1058, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1531.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1559 = _RESERVED_IDENTIFIER_FIXUP_1007;
    _RESERVED_IDENTIFIER_FIXUP_1559.x = _RESERVED_IDENTIFIER_FIXUP_1076.x;
    _RESERVED_IDENTIFIER_FIXUP_1559.y = _RESERVED_IDENTIFIER_FIXUP_1076.y;
    _RESERVED_IDENTIFIER_FIXUP_1559.z = _RESERVED_IDENTIFIER_FIXUP_1076.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1087 = mix(_RESERVED_IDENTIFIER_FIXUP_1547, _RESERVED_IDENTIFIER_FIXUP_1559, _RESERVED_IDENTIFIER_FIXUP_1531.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1567 = _RESERVED_IDENTIFIER_FIXUP_1547;
    _RESERVED_IDENTIFIER_FIXUP_1567.x = _RESERVED_IDENTIFIER_FIXUP_718;
    float _RESERVED_IDENTIFIER_FIXUP_1100 = clamp((_RESERVED_IDENTIFIER_FIXUP_718 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1567.x = _RESERVED_IDENTIFIER_FIXUP_1100;
    float _RESERVED_IDENTIFIER_FIXUP_1106 = ((-_RESERVED_IDENTIFIER_FIXUP_1100) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1567.y = _RESERVED_IDENTIFIER_FIXUP_1106;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1697;
    if (_RESERVED_IDENTIFIER_FIXUP_1106 != (-_RESERVED_IDENTIFIER_FIXUP_1106))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1118 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1567.y = _RESERVED_IDENTIFIER_FIXUP_1118.x;
        _RESERVED_IDENTIFIER_FIXUP_1567.z = _RESERVED_IDENTIFIER_FIXUP_1118.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1128 = _RESERVED_IDENTIFIER_FIXUP_1567.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1584;
        _RESERVED_IDENTIFIER_FIXUP_1584.x = _RESERVED_IDENTIFIER_FIXUP_1128.x;
        _RESERVED_IDENTIFIER_FIXUP_1584.y = _RESERVED_IDENTIFIER_FIXUP_1128.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1138 = _RESERVED_IDENTIFIER_FIXUP_1567.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1588;
        _RESERVED_IDENTIFIER_FIXUP_1588.x = _RESERVED_IDENTIFIER_FIXUP_1138.x;
        _RESERVED_IDENTIFIER_FIXUP_1588.y = _RESERVED_IDENTIFIER_FIXUP_1138.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1148 = _RESERVED_IDENTIFIER_FIXUP_1567.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1592;
        _RESERVED_IDENTIFIER_FIXUP_1592.x = _RESERVED_IDENTIFIER_FIXUP_1148.x;
        _RESERVED_IDENTIFIER_FIXUP_1592.y = _RESERVED_IDENTIFIER_FIXUP_1148.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1158 = _RESERVED_IDENTIFIER_FIXUP_1567.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1596;
        _RESERVED_IDENTIFIER_FIXUP_1596.x = _RESERVED_IDENTIFIER_FIXUP_1158.x;
        _RESERVED_IDENTIFIER_FIXUP_1596.y = _RESERVED_IDENTIFIER_FIXUP_1158.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1166 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1166.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1166.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1172 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_1584.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1588.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1592.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1596.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1584.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1172.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1588.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1172.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1592.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1172.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1229 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1172 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1596.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1229.x = min((_RESERVED_IDENTIFIER_FIXUP_1100 * (((float((hdLod5(param_12, param_13).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1229, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1011.w);
        _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_1229;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1578 = _RESERVED_IDENTIFIER_FIXUP_1559;
        _RESERVED_IDENTIFIER_FIXUP_1578.x = _RESERVED_IDENTIFIER_FIXUP_1011.w;
        _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_1578;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1277 = (_RESERVED_IDENTIFIER_FIXUP_1697.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1703 = vec4(_RESERVED_IDENTIFIER_FIXUP_1277, _RESERVED_IDENTIFIER_FIXUP_1087.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1301 = _RESERVED_IDENTIFIER_FIXUP_1697.xxx * _RESERVED_IDENTIFIER_FIXUP_1703.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1303 = _RESERVED_IDENTIFIER_FIXUP_1301.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1667 = _RESERVED_IDENTIFIER_FIXUP_1703;
    _RESERVED_IDENTIFIER_FIXUP_1667.y = _RESERVED_IDENTIFIER_FIXUP_1303;
    _RESERVED_IDENTIFIER_FIXUP_1667.z = _RESERVED_IDENTIFIER_FIXUP_1301.y;
    _RESERVED_IDENTIFIER_FIXUP_1667.w = _RESERVED_IDENTIFIER_FIXUP_1301.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1315 = (_RESERVED_IDENTIFIER_FIXUP_1087.xyz * _RESERVED_IDENTIFIER_FIXUP_1667.xxx) + _RESERVED_IDENTIFIER_FIXUP_1667.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1704 = vec4(_RESERVED_IDENTIFIER_FIXUP_1315.x, _RESERVED_IDENTIFIER_FIXUP_1303, _RESERVED_IDENTIFIER_FIXUP_1301.yz);
    _RESERVED_IDENTIFIER_FIXUP_1704.y = _RESERVED_IDENTIFIER_FIXUP_1315.y;
    _RESERVED_IDENTIFIER_FIXUP_1704.z = _RESERVED_IDENTIFIER_FIXUP_1315.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1328 = _RESERVED_IDENTIFIER_FIXUP_1704.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1679 = _RESERVED_IDENTIFIER_FIXUP_1704;
    _RESERVED_IDENTIFIER_FIXUP_1679.x = _RESERVED_IDENTIFIER_FIXUP_1328.x;
    _RESERVED_IDENTIFIER_FIXUP_1679.y = _RESERVED_IDENTIFIER_FIXUP_1328.y;
    _RESERVED_IDENTIFIER_FIXUP_1679.z = _RESERVED_IDENTIFIER_FIXUP_1328.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1679.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_492 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_501;
    if (_RESERVED_IDENTIFIER_FIXUP_492)
    {
        _RESERVED_IDENTIFIER_FIXUP_501 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_501 = _RESERVED_IDENTIFIER_FIXUP_492;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_501)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_538 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1517.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_564 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1363;
    if (_RESERVED_IDENTIFIER_FIXUP_538 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1363 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_538), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_564);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1363 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_564);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1363;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1277);
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
    r2.y = hdB80.x;
    r2.z = hdB80.y;
    vec3 hdB92 = v0.xyz + v0.xyz;
    r3.x = hdB92.x;
    r3.y = hdB92.y;
    r3.z = hdB92.z;
    vec3 hdB104 = r0.xyz * r3.xyz;
    r4.x = hdB104.x;
    r4.y = hdB104.y;
    r4.z = hdB104.z;
    vec4 hdB113 = r0;
    vec3 hdB122 = mix(r4.xyz, hdB113.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = hdB122.x;
    r0.y = hdB122.y;
    r0.z = hdB122.z;
    vec4 hdB131 = r3;
    vec3 hdB133 = r1.xyz * hdB131.xyz;
    r3.x = hdB133.x;
    r3.y = hdB133.y;
    r3.z = hdB133.z;
    vec4 hdB142 = r1;
    vec3 hdB148 = mix(r3.xyz, hdB142.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = hdB148.x;
    r1.y = hdB148.y;
    r1.z = hdB148.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB196 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB196.x;
        r0.z = hdB196.y;
        vec2 hdB207 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB207.x;
        r1.y = hdB207.y;
        vec2 hdB218 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB218.x;
        r4.y = hdB218.y;
        vec2 hdB229 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB229.x;
        r5.y = hdB229.y;
        vec2 hdB240 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB240.x;
        r6.y = hdB240.y;
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
    vec3 hdB374 = r3.www * v1.xyz;
    r0.y = hdB374.x;
    r0.z = hdB374.y;
    r0.w = hdB374.z;
    vec4 hdB383 = r0;
    vec3 hdB385 = r1.xxx * hdB383.yzw;
    r0.y = hdB385.x;
    r0.z = hdB385.y;
    r0.w = hdB385.z;
    vec4 hdB394 = r0;
    vec4 hdB397 = r0;
    vec3 hdB399 = (r3.xyz * hdB394.xxx) + hdB397.yzw;
    r0.x = hdB399.x;
    r0.y = hdB399.y;
    r0.z = hdB399.z;
    vec4 hdB406 = r0;
    vec3 hdB413 = hdB406.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB413.x;
    r0.y = hdB413.y;
    r0.z = hdB413.z;
    vec3 hdB428 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB428.x;
    oC0.y = hdB428.y;
    oC0.z = hdB428.z;
    oC0.w = 1.0;
    bool hdB440 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB448;
    if (hdB440)
    {
        hdB448 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB448 = hdB440;
    }
    if (hdB448)
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
    bool _1311 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1321;
    if (_1311)
    {
        _1321 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1321 = _1311;
    }
    if (_1321)
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
        bool _1346 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1361;
        if (!_1346)
        {
            _1361 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1361 = _1346;
        }
        if (_1361)
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
