#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1601;
vec4 _RESERVED_IDENTIFIER_FIXUP_1602;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _50 = hdOverride >= 0;
    bool _70;
    if (_50)
    {
        _70 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _70 = _50;
    }
    vec4 _71;
    if (_70)
    {
        _71 = vec4(float(hdOverride));
    }
    else
    {
        _71 = value;
    }
    return _71;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _88 = hdOverride >= 0;
    bool _98;
    if (_88)
    {
        _98 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _98 = _88;
    }
    vec4 _99;
    if (_98)
    {
        _99 = vec4(float(hdOverride));
    }
    else
    {
        _99 = value;
    }
    return _99;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _116 = hdOverride >= 0;
    bool _126;
    if (_116)
    {
        _126 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _126 = _116;
    }
    vec4 _127;
    if (_126)
    {
        _127 = vec4(float(hdOverride));
    }
    else
    {
        _127 = value;
    }
    return _127;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _144 = hdOverride >= 0;
    bool _153;
    if (_144)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _153 = _144;
    }
    vec4 _154;
    if (_153)
    {
        _154 = vec4(float(hdOverride));
    }
    else
    {
        _154 = value;
    }
    return _154;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_600 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_603 = _RESERVED_IDENTIFIER_FIXUP_600.xy;
    float _RESERVED_IDENTIFIER_FIXUP_605 = _RESERVED_IDENTIFIER_FIXUP_600.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_603;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_605;
    vec4 _RESERVED_IDENTIFIER_FIXUP_606 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1299;
    _RESERVED_IDENTIFIER_FIXUP_1299.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_614 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1301;
    _RESERVED_IDENTIFIER_FIXUP_1301.x = _RESERVED_IDENTIFIER_FIXUP_614.x;
    _RESERVED_IDENTIFIER_FIXUP_1301.y = _RESERVED_IDENTIFIER_FIXUP_614.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_624 = _RESERVED_IDENTIFIER_FIXUP_1301.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1305 = _RESERVED_IDENTIFIER_FIXUP_1299;
    _RESERVED_IDENTIFIER_FIXUP_1305.x = _RESERVED_IDENTIFIER_FIXUP_624.x;
    _RESERVED_IDENTIFIER_FIXUP_1305.y = _RESERVED_IDENTIFIER_FIXUP_624.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1305.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_606.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_647 = _RESERVED_IDENTIFIER_FIXUP_1301.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1317 = _RESERVED_IDENTIFIER_FIXUP_1299;
    _RESERVED_IDENTIFIER_FIXUP_1317.x = _RESERVED_IDENTIFIER_FIXUP_647.x;
    _RESERVED_IDENTIFIER_FIXUP_1317.y = _RESERVED_IDENTIFIER_FIXUP_647.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1317.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_606.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_666 = _RESERVED_IDENTIFIER_FIXUP_1301.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1325;
    _RESERVED_IDENTIFIER_FIXUP_1325.x = _RESERVED_IDENTIFIER_FIXUP_666.x;
    _RESERVED_IDENTIFIER_FIXUP_1325.y = _RESERVED_IDENTIFIER_FIXUP_666.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_676 = _RESERVED_IDENTIFIER_FIXUP_1301.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1329;
    _RESERVED_IDENTIFIER_FIXUP_1329.x = _RESERVED_IDENTIFIER_FIXUP_676.x;
    _RESERVED_IDENTIFIER_FIXUP_1329.y = _RESERVED_IDENTIFIER_FIXUP_676.y;
    _RESERVED_IDENTIFIER_FIXUP_1325.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1325.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_606.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1329.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_744 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_762 = hdTex2(param_8);
    vec2 _RESERVED_IDENTIFIER_FIXUP_772 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1377;
    _RESERVED_IDENTIFIER_FIXUP_1377.x = _RESERVED_IDENTIFIER_FIXUP_772.x;
    float _RESERVED_IDENTIFIER_FIXUP_776 = _RESERVED_IDENTIFIER_FIXUP_772.y;
    _RESERVED_IDENTIFIER_FIXUP_1377.y = _RESERVED_IDENTIFIER_FIXUP_776;
    vec3 _RESERVED_IDENTIFIER_FIXUP_778 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1601).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_781 = _RESERVED_IDENTIFIER_FIXUP_778 + _RESERVED_IDENTIFIER_FIXUP_778;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_762;
    _RESERVED_IDENTIFIER_FIXUP_1381.y = _RESERVED_IDENTIFIER_FIXUP_781.x;
    _RESERVED_IDENTIFIER_FIXUP_1381.z = _RESERVED_IDENTIFIER_FIXUP_781.y;
    _RESERVED_IDENTIFIER_FIXUP_1381.w = _RESERVED_IDENTIFIER_FIXUP_781.z;
    vec2 param_9 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_795 = hdTex0(param_9).xyz;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1329.xy;
    float param_11 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1603 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_744 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_606 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_10, param_11).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_762.w), _RESERVED_IDENTIFIER_FIXUP_1381.yzw * _RESERVED_IDENTIFIER_FIXUP_795);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_810 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1377.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_811 = mix(_RESERVED_IDENTIFIER_FIXUP_1603.yzw, _RESERVED_IDENTIFIER_FIXUP_795, _RESERVED_IDENTIFIER_FIXUP_810);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1393;
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_811.x;
    _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_811.y;
    _RESERVED_IDENTIFIER_FIXUP_1393.z = _RESERVED_IDENTIFIER_FIXUP_811.z;
    vec2 param_12 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = hdTex1(param_12).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_826 = _RESERVED_IDENTIFIER_FIXUP_1381.yzw * _RESERVED_IDENTIFIER_FIXUP_825;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1604 = vec4(_RESERVED_IDENTIFIER_FIXUP_826.x, _RESERVED_IDENTIFIER_FIXUP_776, _RESERVED_IDENTIFIER_FIXUP_826.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_841 = mix(_RESERVED_IDENTIFIER_FIXUP_1604.xzw, _RESERVED_IDENTIFIER_FIXUP_825, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1604.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1405;
    _RESERVED_IDENTIFIER_FIXUP_1405.x = _RESERVED_IDENTIFIER_FIXUP_841.x;
    _RESERVED_IDENTIFIER_FIXUP_1405.y = _RESERVED_IDENTIFIER_FIXUP_841.y;
    _RESERVED_IDENTIFIER_FIXUP_1405.z = _RESERVED_IDENTIFIER_FIXUP_841.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_852 = mix(_RESERVED_IDENTIFIER_FIXUP_1393, _RESERVED_IDENTIFIER_FIXUP_1405, _RESERVED_IDENTIFIER_FIXUP_1381.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1411;
    _RESERVED_IDENTIFIER_FIXUP_1411.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1411.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1411.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_868 = _RESERVED_IDENTIFIER_FIXUP_1603.xxx * _RESERVED_IDENTIFIER_FIXUP_1411.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1417;
    _RESERVED_IDENTIFIER_FIXUP_1417.x = _RESERVED_IDENTIFIER_FIXUP_868.x;
    _RESERVED_IDENTIFIER_FIXUP_1417.y = _RESERVED_IDENTIFIER_FIXUP_868.y;
    _RESERVED_IDENTIFIER_FIXUP_1417.z = _RESERVED_IDENTIFIER_FIXUP_868.z;
    _RESERVED_IDENTIFIER_FIXUP_852.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_894 = (_RESERVED_IDENTIFIER_FIXUP_852.xyz * _RESERVED_IDENTIFIER_FIXUP_852.www) + _RESERVED_IDENTIFIER_FIXUP_1417.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1428;
    _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_894.x;
    _RESERVED_IDENTIFIER_FIXUP_1428.y = _RESERVED_IDENTIFIER_FIXUP_894.y;
    _RESERVED_IDENTIFIER_FIXUP_1428.z = _RESERVED_IDENTIFIER_FIXUP_894.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_907 = _RESERVED_IDENTIFIER_FIXUP_1428.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1434;
    _RESERVED_IDENTIFIER_FIXUP_1434.x = _RESERVED_IDENTIFIER_FIXUP_907.x;
    _RESERVED_IDENTIFIER_FIXUP_1434.y = _RESERVED_IDENTIFIER_FIXUP_907.y;
    _RESERVED_IDENTIFIER_FIXUP_1434.z = _RESERVED_IDENTIFIER_FIXUP_907.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_922 = _RESERVED_IDENTIFIER_FIXUP_1434.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1440;
    _RESERVED_IDENTIFIER_FIXUP_1440.x = _RESERVED_IDENTIFIER_FIXUP_922.x;
    _RESERVED_IDENTIFIER_FIXUP_1440.y = _RESERVED_IDENTIFIER_FIXUP_922.y;
    _RESERVED_IDENTIFIER_FIXUP_1440.z = _RESERVED_IDENTIFIER_FIXUP_922.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_603;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_605;
    vec4 _RESERVED_IDENTIFIER_FIXUP_961 = hdLod5(param_13, param_14);
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1305.xy;
    float param_16 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_961.y = hdLod5(param_15, param_16).x;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1317.xy;
    float param_18 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_961.z = hdLod5(param_17, param_18).x;
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1325.xy;
    float param_20 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_961.w = hdLod5(param_19, param_20).x;
    vec2 param_21 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1117 = hdTex2(param_21);
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1329.xy;
    float param_23 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1122 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_744 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_961 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_22, param_23).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1117.w);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1136 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1533 = _RESERVED_IDENTIFIER_FIXUP_1117;
    _RESERVED_IDENTIFIER_FIXUP_1533.y = _RESERVED_IDENTIFIER_FIXUP_1136.x;
    _RESERVED_IDENTIFIER_FIXUP_1533.z = _RESERVED_IDENTIFIER_FIXUP_1136.y;
    _RESERVED_IDENTIFIER_FIXUP_1533.w = _RESERVED_IDENTIFIER_FIXUP_1136.z;
    vec2 param_24 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1146 = hdTex0(param_24);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1150 = _RESERVED_IDENTIFIER_FIXUP_1146.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1605 = vec4(_RESERVED_IDENTIFIER_FIXUP_1122, _RESERVED_IDENTIFIER_FIXUP_1533.yzw * _RESERVED_IDENTIFIER_FIXUP_1150);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1166 = mix(_RESERVED_IDENTIFIER_FIXUP_1605.yzw, _RESERVED_IDENTIFIER_FIXUP_1150, _RESERVED_IDENTIFIER_FIXUP_810);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1545 = _RESERVED_IDENTIFIER_FIXUP_1146;
    _RESERVED_IDENTIFIER_FIXUP_1545.x = _RESERVED_IDENTIFIER_FIXUP_1166.x;
    _RESERVED_IDENTIFIER_FIXUP_1545.y = _RESERVED_IDENTIFIER_FIXUP_1166.y;
    _RESERVED_IDENTIFIER_FIXUP_1545.z = _RESERVED_IDENTIFIER_FIXUP_1166.z;
    vec2 param_25 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1176 = hdTex1(param_25);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_1176.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_1533.yzw * _RESERVED_IDENTIFIER_FIXUP_1180;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1606 = vec4(_RESERVED_IDENTIFIER_FIXUP_1181.x, _RESERVED_IDENTIFIER_FIXUP_776, _RESERVED_IDENTIFIER_FIXUP_1181.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1196 = mix(_RESERVED_IDENTIFIER_FIXUP_1606.xzw, _RESERVED_IDENTIFIER_FIXUP_1180, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1606.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1557 = _RESERVED_IDENTIFIER_FIXUP_1176;
    _RESERVED_IDENTIFIER_FIXUP_1557.x = _RESERVED_IDENTIFIER_FIXUP_1196.x;
    _RESERVED_IDENTIFIER_FIXUP_1557.y = _RESERVED_IDENTIFIER_FIXUP_1196.y;
    _RESERVED_IDENTIFIER_FIXUP_1557.z = _RESERVED_IDENTIFIER_FIXUP_1196.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1207 = mix(_RESERVED_IDENTIFIER_FIXUP_1545, _RESERVED_IDENTIFIER_FIXUP_1557, _RESERVED_IDENTIFIER_FIXUP_1533.xxxx);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1212 = _RESERVED_IDENTIFIER_FIXUP_1207.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1563;
    _RESERVED_IDENTIFIER_FIXUP_1563.x = _RESERVED_IDENTIFIER_FIXUP_1212.x;
    _RESERVED_IDENTIFIER_FIXUP_1563.y = _RESERVED_IDENTIFIER_FIXUP_1212.y;
    _RESERVED_IDENTIFIER_FIXUP_1563.z = _RESERVED_IDENTIFIER_FIXUP_1212.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1223 = _RESERVED_IDENTIFIER_FIXUP_1605.xxx * _RESERVED_IDENTIFIER_FIXUP_1563.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1569;
    _RESERVED_IDENTIFIER_FIXUP_1569.x = _RESERVED_IDENTIFIER_FIXUP_1223.x;
    _RESERVED_IDENTIFIER_FIXUP_1569.y = _RESERVED_IDENTIFIER_FIXUP_1223.y;
    _RESERVED_IDENTIFIER_FIXUP_1569.z = _RESERVED_IDENTIFIER_FIXUP_1223.z;
    float _RESERVED_IDENTIFIER_FIXUP_1233 = (_RESERVED_IDENTIFIER_FIXUP_1122 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1207.w = _RESERVED_IDENTIFIER_FIXUP_1233;
    _RESERVED_IDENTIFIER_FIXUP_1207.w = _RESERVED_IDENTIFIER_FIXUP_1233;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1249 = (_RESERVED_IDENTIFIER_FIXUP_1207.xyz * _RESERVED_IDENTIFIER_FIXUP_1207.www) + _RESERVED_IDENTIFIER_FIXUP_1569.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1582;
    _RESERVED_IDENTIFIER_FIXUP_1582.x = _RESERVED_IDENTIFIER_FIXUP_1249.x;
    _RESERVED_IDENTIFIER_FIXUP_1582.y = _RESERVED_IDENTIFIER_FIXUP_1249.y;
    _RESERVED_IDENTIFIER_FIXUP_1582.z = _RESERVED_IDENTIFIER_FIXUP_1249.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_1582.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1588;
    _RESERVED_IDENTIFIER_FIXUP_1588.x = _RESERVED_IDENTIFIER_FIXUP_1262.x;
    _RESERVED_IDENTIFIER_FIXUP_1588.y = _RESERVED_IDENTIFIER_FIXUP_1262.y;
    _RESERVED_IDENTIFIER_FIXUP_1588.z = _RESERVED_IDENTIFIER_FIXUP_1262.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1588.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_468 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_477;
    if (_RESERVED_IDENTIFIER_FIXUP_468)
    {
        _RESERVED_IDENTIFIER_FIXUP_477 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_477 = _RESERVED_IDENTIFIER_FIXUP_468;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_477)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_514 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1440.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_540 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1288;
    if (_RESERVED_IDENTIFIER_FIXUP_514 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1288 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_514), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_540);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1288 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_540);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1288;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1233);
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
    r0 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB69 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB69.x;
    r2.y = hdB69.y;
    vec2 hdB92 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB92.x;
    r1.y = hdB92.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB116 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB116.x;
    r1.y = hdB116.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB136 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB136.x;
    r1.y = hdB136.y;
    vec4 hdB141 = r2;
    vec2 hdB147 = hdB141.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB147.x;
    r2.y = hdB147.y;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.w = r1.x;
    r0 += (-v4.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.y = r1.x + (-v4.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v3.wz;
    r1 = hdTex2(param_10);
    r2.x = min(r0.x, r1.w);
    vec2 hdB253 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r0.x = hdB253.x;
    r0.y = hdB253.y;
    vec3 hdB263 = v0.xyz + v0.xyz;
    r1.y = hdB263.x;
    r1.z = hdB263.y;
    r1.w = hdB263.z;
    vec2 param_11 = v2.xy;
    r3 = hdTex0(param_11);
    vec3 hdB279 = r1.yzw * r3.xyz;
    r2.y = hdB279.x;
    r2.z = hdB279.y;
    r2.w = hdB279.z;
    vec4 hdB288 = r3;
    vec3 hdB296 = mix(r2.yzw, hdB288.xyz, greaterThanEqual(-r0.xxx, vec3(0.0)));
    r3.x = hdB296.x;
    r3.y = hdB296.y;
    r3.z = hdB296.z;
    vec2 param_12 = v3.xy;
    r4 = hdTex1(param_12);
    vec3 hdB312 = r1.yzw * r4.xyz;
    r0.x = hdB312.x;
    r0.z = hdB312.y;
    r0.w = hdB312.z;
    vec4 hdB321 = r4;
    vec3 hdB327 = mix(r0.xzw, hdB321.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r4.x = hdB327.x;
    r4.y = hdB327.y;
    r4.z = hdB327.z;
    r0 = mix(r3, r4, r1.xxxx);
    vec3 hdB343 = r0.www * v1.xyz;
    r1.x = hdB343.x;
    r1.y = hdB343.y;
    r1.z = hdB343.z;
    vec4 hdB352 = r1;
    vec3 hdB354 = r2.xxx * hdB352.xyz;
    r1.x = hdB354.x;
    r1.y = hdB354.y;
    r1.z = hdB354.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB368 = r0;
    vec4 hdB370 = r0;
    vec3 hdB375 = (hdB368.xyz * hdB370.www) + r1.xyz;
    r0.x = hdB375.x;
    r0.y = hdB375.y;
    r0.z = hdB375.z;
    vec4 hdB382 = r0;
    vec3 hdB389 = hdB382.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB389.x;
    r0.y = hdB389.y;
    r0.z = hdB389.z;
    vec3 hdB404 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB404.x;
    oC0.y = hdB404.y;
    oC0.z = hdB404.z;
    oC0.w = 1.0;
    bool hdB416 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB424;
    if (hdB416)
    {
        hdB424 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB424 = hdB416;
    }
    if (hdB424)
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
    bool _1360 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1370;
    if (_1360)
    {
        _1370 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1370 = _1360;
    }
    if (_1370)
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
        bool _1395 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1410;
        if (!_1395)
        {
            _1410 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1410 = _1395;
        }
        if (_1410)
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
