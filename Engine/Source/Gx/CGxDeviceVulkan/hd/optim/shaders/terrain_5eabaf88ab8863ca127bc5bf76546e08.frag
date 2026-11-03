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
float _RESERVED_IDENTIFIER_FIXUP_1483;
vec4 _RESERVED_IDENTIFIER_FIXUP_1484;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_569 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_572 = _RESERVED_IDENTIFIER_FIXUP_569.xy;
    float _RESERVED_IDENTIFIER_FIXUP_574 = _RESERVED_IDENTIFIER_FIXUP_569.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_572;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_574;
    vec4 _RESERVED_IDENTIFIER_FIXUP_575 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_578 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_582 = _RESERVED_IDENTIFIER_FIXUP_578.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1211.w = _RESERVED_IDENTIFIER_FIXUP_582;
    vec2 _RESERVED_IDENTIFIER_FIXUP_586 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_588 = _RESERVED_IDENTIFIER_FIXUP_586.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1213 = _RESERVED_IDENTIFIER_FIXUP_575;
    _RESERVED_IDENTIFIER_FIXUP_1213.y = _RESERVED_IDENTIFIER_FIXUP_588;
    float _RESERVED_IDENTIFIER_FIXUP_590 = _RESERVED_IDENTIFIER_FIXUP_586.y;
    _RESERVED_IDENTIFIER_FIXUP_1213.z = _RESERVED_IDENTIFIER_FIXUP_590;
    vec2 _RESERVED_IDENTIFIER_FIXUP_596 = _RESERVED_IDENTIFIER_FIXUP_1213.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1217 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1217.x = _RESERVED_IDENTIFIER_FIXUP_596.x;
    _RESERVED_IDENTIFIER_FIXUP_1217.y = _RESERVED_IDENTIFIER_FIXUP_596.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1217.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_582;
    float _RESERVED_IDENTIFIER_FIXUP_611 = _RESERVED_IDENTIFIER_FIXUP_575.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1213.x = _RESERVED_IDENTIFIER_FIXUP_611;
    vec2 _RESERVED_IDENTIFIER_FIXUP_625 = _RESERVED_IDENTIFIER_FIXUP_1213.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1230 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1230.x = _RESERVED_IDENTIFIER_FIXUP_625.x;
    _RESERVED_IDENTIFIER_FIXUP_1230.y = _RESERVED_IDENTIFIER_FIXUP_625.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1230.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_582;
    float _RESERVED_IDENTIFIER_FIXUP_640 = _RESERVED_IDENTIFIER_FIXUP_611 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1213.x = _RESERVED_IDENTIFIER_FIXUP_640;
    vec2 _RESERVED_IDENTIFIER_FIXUP_647 = _RESERVED_IDENTIFIER_FIXUP_1213.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1239;
    _RESERVED_IDENTIFIER_FIXUP_1239.x = _RESERVED_IDENTIFIER_FIXUP_647.x;
    _RESERVED_IDENTIFIER_FIXUP_1239.y = _RESERVED_IDENTIFIER_FIXUP_647.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_657 = _RESERVED_IDENTIFIER_FIXUP_1213.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1243;
    _RESERVED_IDENTIFIER_FIXUP_1243.x = _RESERVED_IDENTIFIER_FIXUP_657.x;
    _RESERVED_IDENTIFIER_FIXUP_1243.y = _RESERVED_IDENTIFIER_FIXUP_657.y;
    _RESERVED_IDENTIFIER_FIXUP_1239.w = _RESERVED_IDENTIFIER_FIXUP_582;
    _RESERVED_IDENTIFIER_FIXUP_1243.w = _RESERVED_IDENTIFIER_FIXUP_582;
    float _RESERVED_IDENTIFIER_FIXUP_711 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_729 = hdTex1(param_6);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1286;
    _RESERVED_IDENTIFIER_FIXUP_1286.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_729.xyz, vec3(1.0)), 0.0, 1.0);
    float _RESERVED_IDENTIFIER_FIXUP_748 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_1286.y = _RESERVED_IDENTIFIER_FIXUP_748;
    vec2 param_7 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_755 = hdTex0(param_7).xyz;
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1239.xy;
    float param_9 = _RESERVED_IDENTIFIER_FIXUP_582;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1243.xy;
    float param_11 = _RESERVED_IDENTIFIER_FIXUP_582;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1485 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_711 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_640 + hdLod5(param_8, param_9).x) + hdLod5(param_10, param_11).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_729.w), _RESERVED_IDENTIFIER_FIXUP_755 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1483).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_766 = _RESERVED_IDENTIFIER_FIXUP_1485.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_769 = _RESERVED_IDENTIFIER_FIXUP_766 + _RESERVED_IDENTIFIER_FIXUP_766;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1296 = _RESERVED_IDENTIFIER_FIXUP_1485;
    _RESERVED_IDENTIFIER_FIXUP_1296.y = _RESERVED_IDENTIFIER_FIXUP_769.x;
    _RESERVED_IDENTIFIER_FIXUP_1296.z = _RESERVED_IDENTIFIER_FIXUP_769.y;
    _RESERVED_IDENTIFIER_FIXUP_1296.w = _RESERVED_IDENTIFIER_FIXUP_769.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_784 = mix(_RESERVED_IDENTIFIER_FIXUP_1296.yzw, _RESERVED_IDENTIFIER_FIXUP_755, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1286.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1302;
    _RESERVED_IDENTIFIER_FIXUP_1302.x = _RESERVED_IDENTIFIER_FIXUP_784.x;
    _RESERVED_IDENTIFIER_FIXUP_1302.y = _RESERVED_IDENTIFIER_FIXUP_784.y;
    _RESERVED_IDENTIFIER_FIXUP_1302.z = _RESERVED_IDENTIFIER_FIXUP_784.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_794 = _RESERVED_IDENTIFIER_FIXUP_1286.xxxx * _RESERVED_IDENTIFIER_FIXUP_1302;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1308;
    _RESERVED_IDENTIFIER_FIXUP_1308.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1308.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1308.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_810 = _RESERVED_IDENTIFIER_FIXUP_1296.xxx * _RESERVED_IDENTIFIER_FIXUP_1308.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1314;
    _RESERVED_IDENTIFIER_FIXUP_1314.x = _RESERVED_IDENTIFIER_FIXUP_810.x;
    _RESERVED_IDENTIFIER_FIXUP_1314.y = _RESERVED_IDENTIFIER_FIXUP_810.y;
    _RESERVED_IDENTIFIER_FIXUP_1314.z = _RESERVED_IDENTIFIER_FIXUP_810.z;
    _RESERVED_IDENTIFIER_FIXUP_794.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_836 = (_RESERVED_IDENTIFIER_FIXUP_794.xyz * _RESERVED_IDENTIFIER_FIXUP_794.www) + _RESERVED_IDENTIFIER_FIXUP_1314.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1325;
    _RESERVED_IDENTIFIER_FIXUP_1325.x = _RESERVED_IDENTIFIER_FIXUP_836.x;
    _RESERVED_IDENTIFIER_FIXUP_1325.y = _RESERVED_IDENTIFIER_FIXUP_836.y;
    _RESERVED_IDENTIFIER_FIXUP_1325.z = _RESERVED_IDENTIFIER_FIXUP_836.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_849 = _RESERVED_IDENTIFIER_FIXUP_1325.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1331;
    _RESERVED_IDENTIFIER_FIXUP_1331.x = _RESERVED_IDENTIFIER_FIXUP_849.x;
    _RESERVED_IDENTIFIER_FIXUP_1331.y = _RESERVED_IDENTIFIER_FIXUP_849.y;
    _RESERVED_IDENTIFIER_FIXUP_1331.z = _RESERVED_IDENTIFIER_FIXUP_849.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_864 = _RESERVED_IDENTIFIER_FIXUP_1331.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1337;
    _RESERVED_IDENTIFIER_FIXUP_1337.x = _RESERVED_IDENTIFIER_FIXUP_864.x;
    _RESERVED_IDENTIFIER_FIXUP_1337.y = _RESERVED_IDENTIFIER_FIXUP_864.y;
    _RESERVED_IDENTIFIER_FIXUP_1337.z = _RESERVED_IDENTIFIER_FIXUP_864.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_572;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_574;
    vec4 _RESERVED_IDENTIFIER_FIXUP_901 = hdLod5(param_12, param_13);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1350 = _RESERVED_IDENTIFIER_FIXUP_901;
    _RESERVED_IDENTIFIER_FIXUP_1350.y = _RESERVED_IDENTIFIER_FIXUP_588;
    _RESERVED_IDENTIFIER_FIXUP_1350.z = _RESERVED_IDENTIFIER_FIXUP_590;
    vec2 _RESERVED_IDENTIFIER_FIXUP_922 = _RESERVED_IDENTIFIER_FIXUP_1350.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1354.x = _RESERVED_IDENTIFIER_FIXUP_922.x;
    _RESERVED_IDENTIFIER_FIXUP_1354.y = _RESERVED_IDENTIFIER_FIXUP_922.y;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1354.xy;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_582;
    float _RESERVED_IDENTIFIER_FIXUP_937 = _RESERVED_IDENTIFIER_FIXUP_901.x + hdLod5(param_14, param_15).x;
    _RESERVED_IDENTIFIER_FIXUP_1350.x = _RESERVED_IDENTIFIER_FIXUP_937;
    vec2 _RESERVED_IDENTIFIER_FIXUP_951 = _RESERVED_IDENTIFIER_FIXUP_1350.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1367 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1367.x = _RESERVED_IDENTIFIER_FIXUP_951.x;
    _RESERVED_IDENTIFIER_FIXUP_1367.y = _RESERVED_IDENTIFIER_FIXUP_951.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1367.xy;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_582;
    float _RESERVED_IDENTIFIER_FIXUP_966 = _RESERVED_IDENTIFIER_FIXUP_937 + hdLod5(param_16, param_17).x;
    _RESERVED_IDENTIFIER_FIXUP_1350.x = _RESERVED_IDENTIFIER_FIXUP_966;
    vec2 _RESERVED_IDENTIFIER_FIXUP_973 = _RESERVED_IDENTIFIER_FIXUP_1350.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1376;
    _RESERVED_IDENTIFIER_FIXUP_1376.x = _RESERVED_IDENTIFIER_FIXUP_973.x;
    _RESERVED_IDENTIFIER_FIXUP_1376.y = _RESERVED_IDENTIFIER_FIXUP_973.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_983 = _RESERVED_IDENTIFIER_FIXUP_1350.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1380;
    _RESERVED_IDENTIFIER_FIXUP_1380.x = _RESERVED_IDENTIFIER_FIXUP_983.x;
    _RESERVED_IDENTIFIER_FIXUP_1380.y = _RESERVED_IDENTIFIER_FIXUP_983.y;
    _RESERVED_IDENTIFIER_FIXUP_1376.w = _RESERVED_IDENTIFIER_FIXUP_582;
    _RESERVED_IDENTIFIER_FIXUP_1380.w = _RESERVED_IDENTIFIER_FIXUP_582;
    vec2 param_18 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1055 = hdTex1(param_18);
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1376.xy;
    float param_20 = _RESERVED_IDENTIFIER_FIXUP_582;
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1380.xy;
    float param_22 = _RESERVED_IDENTIFIER_FIXUP_582;
    float _RESERVED_IDENTIFIER_FIXUP_1060 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_711 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_966 + hdLod5(param_19, param_20).x) + hdLod5(param_21, param_22).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1055.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1423;
    _RESERVED_IDENTIFIER_FIXUP_1423.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1055.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1423.y = _RESERVED_IDENTIFIER_FIXUP_748;
    vec2 param_23 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1079 = hdTex0(param_23);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1081 = _RESERVED_IDENTIFIER_FIXUP_1079.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1486 = vec4(_RESERVED_IDENTIFIER_FIXUP_1060, _RESERVED_IDENTIFIER_FIXUP_1081 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1092 = _RESERVED_IDENTIFIER_FIXUP_1486.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1095 = _RESERVED_IDENTIFIER_FIXUP_1092 + _RESERVED_IDENTIFIER_FIXUP_1092;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1433 = _RESERVED_IDENTIFIER_FIXUP_1486;
    _RESERVED_IDENTIFIER_FIXUP_1433.y = _RESERVED_IDENTIFIER_FIXUP_1095.x;
    _RESERVED_IDENTIFIER_FIXUP_1433.z = _RESERVED_IDENTIFIER_FIXUP_1095.y;
    _RESERVED_IDENTIFIER_FIXUP_1433.w = _RESERVED_IDENTIFIER_FIXUP_1095.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1110 = mix(_RESERVED_IDENTIFIER_FIXUP_1433.yzw, _RESERVED_IDENTIFIER_FIXUP_1081, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1423.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1439 = _RESERVED_IDENTIFIER_FIXUP_1079;
    _RESERVED_IDENTIFIER_FIXUP_1439.x = _RESERVED_IDENTIFIER_FIXUP_1110.x;
    _RESERVED_IDENTIFIER_FIXUP_1439.y = _RESERVED_IDENTIFIER_FIXUP_1110.y;
    _RESERVED_IDENTIFIER_FIXUP_1439.z = _RESERVED_IDENTIFIER_FIXUP_1110.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_1423.xxxx * _RESERVED_IDENTIFIER_FIXUP_1439;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1125 = _RESERVED_IDENTIFIER_FIXUP_1120.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1445;
    _RESERVED_IDENTIFIER_FIXUP_1445.x = _RESERVED_IDENTIFIER_FIXUP_1125.x;
    _RESERVED_IDENTIFIER_FIXUP_1445.y = _RESERVED_IDENTIFIER_FIXUP_1125.y;
    _RESERVED_IDENTIFIER_FIXUP_1445.z = _RESERVED_IDENTIFIER_FIXUP_1125.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1136 = _RESERVED_IDENTIFIER_FIXUP_1433.xxx * _RESERVED_IDENTIFIER_FIXUP_1445.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1451;
    _RESERVED_IDENTIFIER_FIXUP_1451.x = _RESERVED_IDENTIFIER_FIXUP_1136.x;
    _RESERVED_IDENTIFIER_FIXUP_1451.y = _RESERVED_IDENTIFIER_FIXUP_1136.y;
    _RESERVED_IDENTIFIER_FIXUP_1451.z = _RESERVED_IDENTIFIER_FIXUP_1136.z;
    float _RESERVED_IDENTIFIER_FIXUP_1146 = (_RESERVED_IDENTIFIER_FIXUP_1060 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1120.w = _RESERVED_IDENTIFIER_FIXUP_1146;
    _RESERVED_IDENTIFIER_FIXUP_1120.w = _RESERVED_IDENTIFIER_FIXUP_1146;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1162 = (_RESERVED_IDENTIFIER_FIXUP_1120.xyz * _RESERVED_IDENTIFIER_FIXUP_1120.www) + _RESERVED_IDENTIFIER_FIXUP_1451.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1464;
    _RESERVED_IDENTIFIER_FIXUP_1464.x = _RESERVED_IDENTIFIER_FIXUP_1162.x;
    _RESERVED_IDENTIFIER_FIXUP_1464.y = _RESERVED_IDENTIFIER_FIXUP_1162.y;
    _RESERVED_IDENTIFIER_FIXUP_1464.z = _RESERVED_IDENTIFIER_FIXUP_1162.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1175 = _RESERVED_IDENTIFIER_FIXUP_1464.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1470;
    _RESERVED_IDENTIFIER_FIXUP_1470.x = _RESERVED_IDENTIFIER_FIXUP_1175.x;
    _RESERVED_IDENTIFIER_FIXUP_1470.y = _RESERVED_IDENTIFIER_FIXUP_1175.y;
    _RESERVED_IDENTIFIER_FIXUP_1470.z = _RESERVED_IDENTIFIER_FIXUP_1175.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1470.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_438 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_447;
    if (_RESERVED_IDENTIFIER_FIXUP_438)
    {
        _RESERVED_IDENTIFIER_FIXUP_447 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_447 = _RESERVED_IDENTIFIER_FIXUP_438;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_447)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_484 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1337.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_510 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1201;
    if (_RESERVED_IDENTIFIER_FIXUP_484 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1201 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_484), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_510);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1201 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_510);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1201;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1146);
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
    r0.y = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec2 param_11 = v2.xy;
    r1 = hdTex0(param_11);
    vec3 hdB270 = r1.xyz * v0.xyz;
    r2.y = hdB270.x;
    r2.z = hdB270.y;
    r2.w = hdB270.z;
    vec4 hdB277 = r2;
    vec4 hdB279 = r2;
    vec3 hdB281 = hdB277.yzw + hdB279.yzw;
    r2.y = hdB281.x;
    r2.z = hdB281.y;
    r2.w = hdB281.z;
    vec4 hdB290 = r1;
    vec3 hdB299 = mix(r2.yzw, hdB290.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r1.x = hdB299.x;
    r1.y = hdB299.y;
    r1.z = hdB299.z;
    r0 = r0.xxxx * r1;
    vec3 hdB314 = r0.www * v1.xyz;
    r1.x = hdB314.x;
    r1.y = hdB314.y;
    r1.z = hdB314.z;
    vec4 hdB323 = r1;
    vec3 hdB325 = r2.xxx * hdB323.xyz;
    r1.x = hdB325.x;
    r1.y = hdB325.y;
    r1.z = hdB325.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB339 = r0;
    vec4 hdB341 = r0;
    vec3 hdB346 = (hdB339.xyz * hdB341.www) + r1.xyz;
    r0.x = hdB346.x;
    r0.y = hdB346.y;
    r0.z = hdB346.z;
    vec4 hdB353 = r0;
    vec3 hdB360 = hdB353.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB360.x;
    r0.y = hdB360.y;
    r0.z = hdB360.z;
    vec3 hdB375 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB375.x;
    oC0.y = hdB375.y;
    oC0.z = hdB375.z;
    oC0.w = 1.0;
    bool hdB386 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB394;
    if (hdB386)
    {
        hdB394 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB394 = hdB386;
    }
    if (hdB394)
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
    bool _1323 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1333;
    if (_1323)
    {
        _1333 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1333 = _1323;
    }
    if (_1333)
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
        bool _1358 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1373;
        if (!_1358)
        {
            _1373 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1373 = _1358;
        }
        if (_1373)
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
