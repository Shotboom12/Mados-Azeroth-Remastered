#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1662;
vec4 _RESERVED_IDENTIFIER_FIXUP_1663;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _49 = hdOverride >= 0;
    bool _69;
    if (_49)
    {
        _69 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _69 = _49;
    }
    vec4 _70;
    if (_69)
    {
        _70 = vec4(float(hdOverride));
    }
    else
    {
        _70 = value;
    }
    return _70;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _87 = hdOverride >= 0;
    bool _96;
    if (_87)
    {
        _96 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _96 = _87;
    }
    vec4 _97;
    if (_96)
    {
        _97 = vec4(float(hdOverride));
    }
    else
    {
        _97 = value;
    }
    return _97;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _114 = hdOverride >= 0;
    bool _124;
    if (_114)
    {
        _124 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _124 = _114;
    }
    vec4 _125;
    if (_124)
    {
        _125 = vec4(float(hdOverride));
    }
    else
    {
        _125 = value;
    }
    return _125;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _143 = hdOverride >= 0;
    bool _153;
    if (_143)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _153 = _143;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_616 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_620 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_624 = hdTex2(param_2);
    vec2 _RESERVED_IDENTIFIER_FIXUP_628 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    float _RESERVED_IDENTIFIER_FIXUP_630 = _RESERVED_IDENTIFIER_FIXUP_628.x;
    _RESERVED_IDENTIFIER_FIXUP_624.y = _RESERVED_IDENTIFIER_FIXUP_630;
    float _RESERVED_IDENTIFIER_FIXUP_632 = _RESERVED_IDENTIFIER_FIXUP_628.y;
    _RESERVED_IDENTIFIER_FIXUP_624.z = _RESERVED_IDENTIFIER_FIXUP_632;
    vec3 _RESERVED_IDENTIFIER_FIXUP_634 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1662).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_637 = _RESERVED_IDENTIFIER_FIXUP_634 + _RESERVED_IDENTIFIER_FIXUP_634;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1357;
    _RESERVED_IDENTIFIER_FIXUP_1357.x = _RESERVED_IDENTIFIER_FIXUP_637.x;
    _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_637.y;
    _RESERVED_IDENTIFIER_FIXUP_1357.z = _RESERVED_IDENTIFIER_FIXUP_637.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_645 = _RESERVED_IDENTIFIER_FIXUP_616.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_648 = _RESERVED_IDENTIFIER_FIXUP_645 * _RESERVED_IDENTIFIER_FIXUP_1357.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1363 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1363.x = _RESERVED_IDENTIFIER_FIXUP_648.x;
    _RESERVED_IDENTIFIER_FIXUP_1363.y = _RESERVED_IDENTIFIER_FIXUP_648.y;
    _RESERVED_IDENTIFIER_FIXUP_1363.z = _RESERVED_IDENTIFIER_FIXUP_648.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_663 = mix(_RESERVED_IDENTIFIER_FIXUP_1363.xyz, _RESERVED_IDENTIFIER_FIXUP_645, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_624.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1369 = _RESERVED_IDENTIFIER_FIXUP_616;
    _RESERVED_IDENTIFIER_FIXUP_1369.x = _RESERVED_IDENTIFIER_FIXUP_663.x;
    _RESERVED_IDENTIFIER_FIXUP_1369.y = _RESERVED_IDENTIFIER_FIXUP_663.y;
    _RESERVED_IDENTIFIER_FIXUP_1369.z = _RESERVED_IDENTIFIER_FIXUP_663.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_671 = _RESERVED_IDENTIFIER_FIXUP_620.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_674 = _RESERVED_IDENTIFIER_FIXUP_671 * _RESERVED_IDENTIFIER_FIXUP_1357.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1375;
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_674.x;
    _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_674.y;
    _RESERVED_IDENTIFIER_FIXUP_1375.z = _RESERVED_IDENTIFIER_FIXUP_674.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_689 = mix(_RESERVED_IDENTIFIER_FIXUP_1375.xyz, _RESERVED_IDENTIFIER_FIXUP_671, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_624.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_620;
    _RESERVED_IDENTIFIER_FIXUP_1381.x = _RESERVED_IDENTIFIER_FIXUP_689.x;
    _RESERVED_IDENTIFIER_FIXUP_1381.y = _RESERVED_IDENTIFIER_FIXUP_689.y;
    _RESERVED_IDENTIFIER_FIXUP_1381.z = _RESERVED_IDENTIFIER_FIXUP_689.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_700 = mix(_RESERVED_IDENTIFIER_FIXUP_1369, _RESERVED_IDENTIFIER_FIXUP_1381, _RESERVED_IDENTIFIER_FIXUP_624.xxxx);
    float _RESERVED_IDENTIFIER_FIXUP_707 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1672 = vec4(_RESERVED_IDENTIFIER_FIXUP_700.x, 0.0, 0.0, 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1672.y = _RESERVED_IDENTIFIER_FIXUP_700.y;
    _RESERVED_IDENTIFIER_FIXUP_1672.z = _RESERVED_IDENTIFIER_FIXUP_700.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_939 = _RESERVED_IDENTIFIER_FIXUP_1672.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1493 = _RESERVED_IDENTIFIER_FIXUP_1672;
    _RESERVED_IDENTIFIER_FIXUP_1493.x = _RESERVED_IDENTIFIER_FIXUP_939.x;
    _RESERVED_IDENTIFIER_FIXUP_1493.y = _RESERVED_IDENTIFIER_FIXUP_939.y;
    _RESERVED_IDENTIFIER_FIXUP_1493.z = _RESERVED_IDENTIFIER_FIXUP_939.z;
    vec2 param_3 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_987 = hdTex0(param_3);
    vec2 param_4 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_991 = hdTex1(param_4);
    vec2 param_5 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_995 = hdTex2(param_5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_995;
    _RESERVED_IDENTIFIER_FIXUP_1507.y = _RESERVED_IDENTIFIER_FIXUP_630;
    _RESERVED_IDENTIFIER_FIXUP_1507.z = _RESERVED_IDENTIFIER_FIXUP_632;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1008 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1511;
    _RESERVED_IDENTIFIER_FIXUP_1511.x = _RESERVED_IDENTIFIER_FIXUP_1008.x;
    _RESERVED_IDENTIFIER_FIXUP_1511.y = _RESERVED_IDENTIFIER_FIXUP_1008.y;
    _RESERVED_IDENTIFIER_FIXUP_1511.z = _RESERVED_IDENTIFIER_FIXUP_1008.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1016 = _RESERVED_IDENTIFIER_FIXUP_987.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1019 = _RESERVED_IDENTIFIER_FIXUP_1016 * _RESERVED_IDENTIFIER_FIXUP_1511.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1517 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1517.x = _RESERVED_IDENTIFIER_FIXUP_1019.x;
    _RESERVED_IDENTIFIER_FIXUP_1517.y = _RESERVED_IDENTIFIER_FIXUP_1019.y;
    _RESERVED_IDENTIFIER_FIXUP_1517.z = _RESERVED_IDENTIFIER_FIXUP_1019.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1034 = mix(_RESERVED_IDENTIFIER_FIXUP_1517.xyz, _RESERVED_IDENTIFIER_FIXUP_1016, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1507.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_987;
    _RESERVED_IDENTIFIER_FIXUP_1523.x = _RESERVED_IDENTIFIER_FIXUP_1034.x;
    _RESERVED_IDENTIFIER_FIXUP_1523.y = _RESERVED_IDENTIFIER_FIXUP_1034.y;
    _RESERVED_IDENTIFIER_FIXUP_1523.z = _RESERVED_IDENTIFIER_FIXUP_1034.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1042 = _RESERVED_IDENTIFIER_FIXUP_991.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1045 = _RESERVED_IDENTIFIER_FIXUP_1042 * _RESERVED_IDENTIFIER_FIXUP_1511.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1529;
    _RESERVED_IDENTIFIER_FIXUP_1529.x = _RESERVED_IDENTIFIER_FIXUP_1045.x;
    _RESERVED_IDENTIFIER_FIXUP_1529.y = _RESERVED_IDENTIFIER_FIXUP_1045.y;
    _RESERVED_IDENTIFIER_FIXUP_1529.z = _RESERVED_IDENTIFIER_FIXUP_1045.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1060 = mix(_RESERVED_IDENTIFIER_FIXUP_1529.xyz, _RESERVED_IDENTIFIER_FIXUP_1042, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1507.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1535 = _RESERVED_IDENTIFIER_FIXUP_991;
    _RESERVED_IDENTIFIER_FIXUP_1535.x = _RESERVED_IDENTIFIER_FIXUP_1060.x;
    _RESERVED_IDENTIFIER_FIXUP_1535.y = _RESERVED_IDENTIFIER_FIXUP_1060.y;
    _RESERVED_IDENTIFIER_FIXUP_1535.z = _RESERVED_IDENTIFIER_FIXUP_1060.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1071 = mix(_RESERVED_IDENTIFIER_FIXUP_1523, _RESERVED_IDENTIFIER_FIXUP_1535, _RESERVED_IDENTIFIER_FIXUP_1507.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_1523;
    _RESERVED_IDENTIFIER_FIXUP_1543.x = _RESERVED_IDENTIFIER_FIXUP_707;
    float _RESERVED_IDENTIFIER_FIXUP_1084 = clamp((_RESERVED_IDENTIFIER_FIXUP_707 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1543.x = _RESERVED_IDENTIFIER_FIXUP_1084;
    float _RESERVED_IDENTIFIER_FIXUP_1090 = ((-_RESERVED_IDENTIFIER_FIXUP_1084) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1543.y = _RESERVED_IDENTIFIER_FIXUP_1090;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1667;
    if (_RESERVED_IDENTIFIER_FIXUP_1090 != (-_RESERVED_IDENTIFIER_FIXUP_1090))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1102 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1112 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1114 = _RESERVED_IDENTIFIER_FIXUP_1112.x;
        _RESERVED_IDENTIFIER_FIXUP_1543.y = _RESERVED_IDENTIFIER_FIXUP_1114;
        _RESERVED_IDENTIFIER_FIXUP_1543.z = _RESERVED_IDENTIFIER_FIXUP_1112.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1122 = _RESERVED_IDENTIFIER_FIXUP_1543.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1561;
        _RESERVED_IDENTIFIER_FIXUP_1561.x = _RESERVED_IDENTIFIER_FIXUP_1122.x;
        _RESERVED_IDENTIFIER_FIXUP_1561.y = _RESERVED_IDENTIFIER_FIXUP_1122.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1129 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1133 = _RESERVED_IDENTIFIER_FIXUP_1129.y;
        _RESERVED_IDENTIFIER_FIXUP_1561.w = _RESERVED_IDENTIFIER_FIXUP_1133;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1102.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1102.w;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1561.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1133;
        float _RESERVED_IDENTIFIER_FIXUP_1144 = hdLod5(param_6, param_7).x + hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1674 = vec4(_RESERVED_IDENTIFIER_FIXUP_1084, _RESERVED_IDENTIFIER_FIXUP_1114, _RESERVED_IDENTIFIER_FIXUP_1112.y, _RESERVED_IDENTIFIER_FIXUP_1144);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1151 = _RESERVED_IDENTIFIER_FIXUP_1674.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1574;
        _RESERVED_IDENTIFIER_FIXUP_1574.x = _RESERVED_IDENTIFIER_FIXUP_1151.x;
        _RESERVED_IDENTIFIER_FIXUP_1574.y = _RESERVED_IDENTIFIER_FIXUP_1151.y;
        _RESERVED_IDENTIFIER_FIXUP_1574.w = _RESERVED_IDENTIFIER_FIXUP_1133;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1574.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1133;
        float _RESERVED_IDENTIFIER_FIXUP_1173 = _RESERVED_IDENTIFIER_FIXUP_1144 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1674.w = _RESERVED_IDENTIFIER_FIXUP_1173;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_1674.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1587;
        _RESERVED_IDENTIFIER_FIXUP_1587.x = _RESERVED_IDENTIFIER_FIXUP_1180.x;
        _RESERVED_IDENTIFIER_FIXUP_1587.y = _RESERVED_IDENTIFIER_FIXUP_1180.y;
        _RESERVED_IDENTIFIER_FIXUP_1587.w = _RESERVED_IDENTIFIER_FIXUP_1133;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1587.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1133;
        float _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_1173 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_1674.w = _RESERVED_IDENTIFIER_FIXUP_1202;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1209 = _RESERVED_IDENTIFIER_FIXUP_1674.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1600;
        _RESERVED_IDENTIFIER_FIXUP_1600.x = _RESERVED_IDENTIFIER_FIXUP_1209.x;
        _RESERVED_IDENTIFIER_FIXUP_1600.y = _RESERVED_IDENTIFIER_FIXUP_1209.y;
        _RESERVED_IDENTIFIER_FIXUP_1600.w = _RESERVED_IDENTIFIER_FIXUP_1133;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1600.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1133;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1226 = hdLod5(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_1226.x = min((_RESERVED_IDENTIFIER_FIXUP_1084 * (((_RESERVED_IDENTIFIER_FIXUP_1202 + _RESERVED_IDENTIFIER_FIXUP_1226.x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_995.w);
        _RESERVED_IDENTIFIER_FIXUP_1667 = _RESERVED_IDENTIFIER_FIXUP_1226;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1554 = _RESERVED_IDENTIFIER_FIXUP_1535;
        _RESERVED_IDENTIFIER_FIXUP_1554.x = _RESERVED_IDENTIFIER_FIXUP_995.w;
        _RESERVED_IDENTIFIER_FIXUP_1667 = _RESERVED_IDENTIFIER_FIXUP_1554;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1259 = (_RESERVED_IDENTIFIER_FIXUP_1667.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1675 = vec4(_RESERVED_IDENTIFIER_FIXUP_1259, _RESERVED_IDENTIFIER_FIXUP_1071.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1283 = _RESERVED_IDENTIFIER_FIXUP_1667.xxx * _RESERVED_IDENTIFIER_FIXUP_1675.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1285 = _RESERVED_IDENTIFIER_FIXUP_1283.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1637 = _RESERVED_IDENTIFIER_FIXUP_1675;
    _RESERVED_IDENTIFIER_FIXUP_1637.y = _RESERVED_IDENTIFIER_FIXUP_1285;
    _RESERVED_IDENTIFIER_FIXUP_1637.z = _RESERVED_IDENTIFIER_FIXUP_1283.y;
    _RESERVED_IDENTIFIER_FIXUP_1637.w = _RESERVED_IDENTIFIER_FIXUP_1283.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1297 = (_RESERVED_IDENTIFIER_FIXUP_1071.xyz * _RESERVED_IDENTIFIER_FIXUP_1637.xxx) + _RESERVED_IDENTIFIER_FIXUP_1637.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1676 = vec4(_RESERVED_IDENTIFIER_FIXUP_1297.x, _RESERVED_IDENTIFIER_FIXUP_1285, _RESERVED_IDENTIFIER_FIXUP_1283.yz);
    _RESERVED_IDENTIFIER_FIXUP_1676.y = _RESERVED_IDENTIFIER_FIXUP_1297.y;
    _RESERVED_IDENTIFIER_FIXUP_1676.z = _RESERVED_IDENTIFIER_FIXUP_1297.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1310 = _RESERVED_IDENTIFIER_FIXUP_1676.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1649 = _RESERVED_IDENTIFIER_FIXUP_1676;
    _RESERVED_IDENTIFIER_FIXUP_1649.x = _RESERVED_IDENTIFIER_FIXUP_1310.x;
    _RESERVED_IDENTIFIER_FIXUP_1649.y = _RESERVED_IDENTIFIER_FIXUP_1310.y;
    _RESERVED_IDENTIFIER_FIXUP_1649.z = _RESERVED_IDENTIFIER_FIXUP_1310.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1649.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_483 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_492;
    if (_RESERVED_IDENTIFIER_FIXUP_483)
    {
        _RESERVED_IDENTIFIER_FIXUP_492 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_492 = _RESERVED_IDENTIFIER_FIXUP_483;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_492)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_529 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1493.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_555 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1345;
    if (_RESERVED_IDENTIFIER_FIXUP_529 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1345 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_529), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_555);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1345 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_555);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1345;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1259);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 hdB73 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = hdB73.x;
    r2.z = hdB73.y;
    vec3 hdB86 = v0.xyz + v0.xyz;
    r3.x = hdB86.x;
    r3.y = hdB86.y;
    r3.z = hdB86.z;
    vec3 hdB98 = r0.xyz * r3.xyz;
    r4.x = hdB98.x;
    r4.y = hdB98.y;
    r4.z = hdB98.z;
    vec4 hdB107 = r0;
    vec3 hdB116 = mix(r4.xyz, hdB107.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = hdB116.x;
    r0.y = hdB116.y;
    r0.z = hdB116.z;
    vec4 hdB125 = r3;
    vec3 hdB127 = r1.xyz * hdB125.xyz;
    r3.x = hdB127.x;
    r3.y = hdB127.y;
    r3.z = hdB127.z;
    vec4 hdB136 = r1;
    vec3 hdB142 = mix(r3.xyz, hdB136.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = hdB142.x;
    r1.y = hdB142.y;
    r1.z = hdB142.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r1.xy;
        float param_4 = r1.w;
        r1 = hdLod5(param_3, param_4);
        vec2 hdB204 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB204.x;
        r0.z = hdB204.y;
        vec2 hdB215 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB215.x;
        r4.y = hdB215.y;
        vec2 hdB223 = vec2(1.0, 0.0) * v4.zx;
        r4.z = hdB223.x;
        r4.w = hdB223.y;
        vec2 param_5 = r4.xy;
        float param_6 = r4.w;
        r4 = hdLod5(param_5, param_6);
        r0.w = r1.x + r4.x;
        vec2 hdB246 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = hdB246.x;
        r1.y = hdB246.y;
        vec2 hdB253 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB253.x;
        r1.w = hdB253.y;
        vec2 param_7 = r1.xy;
        float param_8 = r1.w;
        r1 = hdLod5(param_7, param_8);
        r0.w += r1.x;
        vec2 hdB276 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = hdB276.x;
        r1.y = hdB276.y;
        vec2 hdB283 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB283.x;
        r1.w = hdB283.y;
        vec2 param_9 = r1.xy;
        float param_10 = r1.w;
        r1 = hdLod5(param_9, param_10);
        r0.w += r1.x;
        vec2 hdB306 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = hdB306.x;
        r1.y = hdB306.y;
        vec2 hdB313 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB313.x;
        r1.w = hdB313.y;
        vec2 param_11 = r1.xy;
        float param_12 = r1.w;
        r1 = hdLod5(param_11, param_12);
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
    vec3 hdB365 = r3.www * v1.xyz;
    r0.y = hdB365.x;
    r0.z = hdB365.y;
    r0.w = hdB365.z;
    vec4 hdB374 = r0;
    vec3 hdB376 = r1.xxx * hdB374.yzw;
    r0.y = hdB376.x;
    r0.z = hdB376.y;
    r0.w = hdB376.z;
    vec4 hdB385 = r0;
    vec4 hdB388 = r0;
    vec3 hdB390 = (r3.xyz * hdB385.xxx) + hdB388.yzw;
    r0.x = hdB390.x;
    r0.y = hdB390.y;
    r0.z = hdB390.z;
    vec4 hdB397 = r0;
    vec3 hdB404 = hdB397.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB404.x;
    r0.y = hdB404.y;
    r0.z = hdB404.z;
    vec3 hdB419 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB419.x;
    oC0.y = hdB419.y;
    oC0.z = hdB419.z;
    oC0.w = 1.0;
    bool hdB431 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB439;
    if (hdB431)
    {
        hdB439 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB439 = hdB431;
    }
    if (hdB439)
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
    bool _1374 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1384;
    if (_1374)
    {
        _1384 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1384 = _1374;
    }
    if (_1384)
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
        bool _1409 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1424;
        if (!_1409)
        {
            _1424 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1424 = _1409;
        }
        if (_1424)
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
