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
float _RESERVED_IDENTIFIER_FIXUP_1723;
vec4 _RESERVED_IDENTIFIER_FIXUP_1724;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_637 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_641 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_645 = hdTex2(param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_649 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1404 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1404.x = _RESERVED_IDENTIFIER_FIXUP_649.x;
    float _RESERVED_IDENTIFIER_FIXUP_653 = _RESERVED_IDENTIFIER_FIXUP_649.y;
    _RESERVED_IDENTIFIER_FIXUP_1404.y = _RESERVED_IDENTIFIER_FIXUP_653;
    vec3 _RESERVED_IDENTIFIER_FIXUP_655 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1723).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_658 = _RESERVED_IDENTIFIER_FIXUP_655 + _RESERVED_IDENTIFIER_FIXUP_655;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1408 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1408.x = _RESERVED_IDENTIFIER_FIXUP_658.x;
    _RESERVED_IDENTIFIER_FIXUP_1408.y = _RESERVED_IDENTIFIER_FIXUP_658.y;
    _RESERVED_IDENTIFIER_FIXUP_1408.z = _RESERVED_IDENTIFIER_FIXUP_658.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_666 = _RESERVED_IDENTIFIER_FIXUP_637.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_669 = _RESERVED_IDENTIFIER_FIXUP_666 * _RESERVED_IDENTIFIER_FIXUP_1408.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1414;
    _RESERVED_IDENTIFIER_FIXUP_1414.x = _RESERVED_IDENTIFIER_FIXUP_669.x;
    _RESERVED_IDENTIFIER_FIXUP_1414.y = _RESERVED_IDENTIFIER_FIXUP_669.y;
    _RESERVED_IDENTIFIER_FIXUP_1414.z = _RESERVED_IDENTIFIER_FIXUP_669.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_683 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1404.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_684 = mix(_RESERVED_IDENTIFIER_FIXUP_1414.xyz, _RESERVED_IDENTIFIER_FIXUP_666, _RESERVED_IDENTIFIER_FIXUP_683);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_637;
    _RESERVED_IDENTIFIER_FIXUP_1420.x = _RESERVED_IDENTIFIER_FIXUP_684.x;
    _RESERVED_IDENTIFIER_FIXUP_1420.y = _RESERVED_IDENTIFIER_FIXUP_684.y;
    _RESERVED_IDENTIFIER_FIXUP_1420.z = _RESERVED_IDENTIFIER_FIXUP_684.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_692 = _RESERVED_IDENTIFIER_FIXUP_641.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_695 = _RESERVED_IDENTIFIER_FIXUP_692 * _RESERVED_IDENTIFIER_FIXUP_1408.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1733 = vec4(_RESERVED_IDENTIFIER_FIXUP_695.x, _RESERVED_IDENTIFIER_FIXUP_653, _RESERVED_IDENTIFIER_FIXUP_695.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_710 = mix(_RESERVED_IDENTIFIER_FIXUP_1733.xzw, _RESERVED_IDENTIFIER_FIXUP_692, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1733.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1432 = _RESERVED_IDENTIFIER_FIXUP_641;
    _RESERVED_IDENTIFIER_FIXUP_1432.x = _RESERVED_IDENTIFIER_FIXUP_710.x;
    _RESERVED_IDENTIFIER_FIXUP_1432.y = _RESERVED_IDENTIFIER_FIXUP_710.y;
    _RESERVED_IDENTIFIER_FIXUP_1432.z = _RESERVED_IDENTIFIER_FIXUP_710.z;
    float _RESERVED_IDENTIFIER_FIXUP_720 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_645.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1438 = _RESERVED_IDENTIFIER_FIXUP_645;
    _RESERVED_IDENTIFIER_FIXUP_1438.y = _RESERVED_IDENTIFIER_FIXUP_720;
    _RESERVED_IDENTIFIER_FIXUP_1438.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_720;
    vec4 _RESERVED_IDENTIFIER_FIXUP_736 = (_RESERVED_IDENTIFIER_FIXUP_1420 * _RESERVED_IDENTIFIER_FIXUP_1438.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_1438.xxxx * _RESERVED_IDENTIFIER_FIXUP_1432);
    float _RESERVED_IDENTIFIER_FIXUP_743 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_736;
    _RESERVED_IDENTIFIER_FIXUP_1543.x = _RESERVED_IDENTIFIER_FIXUP_736.x;
    _RESERVED_IDENTIFIER_FIXUP_1543.y = _RESERVED_IDENTIFIER_FIXUP_736.y;
    _RESERVED_IDENTIFIER_FIXUP_1543.z = _RESERVED_IDENTIFIER_FIXUP_736.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_975 = _RESERVED_IDENTIFIER_FIXUP_1543.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_1543;
    _RESERVED_IDENTIFIER_FIXUP_1549.x = _RESERVED_IDENTIFIER_FIXUP_975.x;
    _RESERVED_IDENTIFIER_FIXUP_1549.y = _RESERVED_IDENTIFIER_FIXUP_975.y;
    _RESERVED_IDENTIFIER_FIXUP_1549.z = _RESERVED_IDENTIFIER_FIXUP_975.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1024 = OptTex0( texcoord0.xyz);
    vec2 param_2 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1028 = hdTex1(param_2);
    vec2 param_3 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1032 = hdTex2(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1045 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1567 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1567.x = _RESERVED_IDENTIFIER_FIXUP_1045.x;
    _RESERVED_IDENTIFIER_FIXUP_1567.y = _RESERVED_IDENTIFIER_FIXUP_1045.y;
    _RESERVED_IDENTIFIER_FIXUP_1567.z = _RESERVED_IDENTIFIER_FIXUP_1045.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1053 = _RESERVED_IDENTIFIER_FIXUP_1024.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1056 = _RESERVED_IDENTIFIER_FIXUP_1053 * _RESERVED_IDENTIFIER_FIXUP_1567.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1573;
    _RESERVED_IDENTIFIER_FIXUP_1573.x = _RESERVED_IDENTIFIER_FIXUP_1056.x;
    _RESERVED_IDENTIFIER_FIXUP_1573.y = _RESERVED_IDENTIFIER_FIXUP_1056.y;
    _RESERVED_IDENTIFIER_FIXUP_1573.z = _RESERVED_IDENTIFIER_FIXUP_1056.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1071 = mix(_RESERVED_IDENTIFIER_FIXUP_1573.xyz, _RESERVED_IDENTIFIER_FIXUP_1053, _RESERVED_IDENTIFIER_FIXUP_683);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1579 = _RESERVED_IDENTIFIER_FIXUP_1024;
    _RESERVED_IDENTIFIER_FIXUP_1579.x = _RESERVED_IDENTIFIER_FIXUP_1071.x;
    _RESERVED_IDENTIFIER_FIXUP_1579.y = _RESERVED_IDENTIFIER_FIXUP_1071.y;
    _RESERVED_IDENTIFIER_FIXUP_1579.z = _RESERVED_IDENTIFIER_FIXUP_1071.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1079 = _RESERVED_IDENTIFIER_FIXUP_1028.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1082 = _RESERVED_IDENTIFIER_FIXUP_1079 * _RESERVED_IDENTIFIER_FIXUP_1567.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1737 = vec4(_RESERVED_IDENTIFIER_FIXUP_1082.x, _RESERVED_IDENTIFIER_FIXUP_653, _RESERVED_IDENTIFIER_FIXUP_1082.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1097 = mix(_RESERVED_IDENTIFIER_FIXUP_1737.xzw, _RESERVED_IDENTIFIER_FIXUP_1079, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1737.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1591 = _RESERVED_IDENTIFIER_FIXUP_1028;
    _RESERVED_IDENTIFIER_FIXUP_1591.x = _RESERVED_IDENTIFIER_FIXUP_1097.x;
    _RESERVED_IDENTIFIER_FIXUP_1591.y = _RESERVED_IDENTIFIER_FIXUP_1097.y;
    _RESERVED_IDENTIFIER_FIXUP_1591.z = _RESERVED_IDENTIFIER_FIXUP_1097.z;
    float _RESERVED_IDENTIFIER_FIXUP_1107 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1032.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1597 = _RESERVED_IDENTIFIER_FIXUP_1032;
    _RESERVED_IDENTIFIER_FIXUP_1597.y = _RESERVED_IDENTIFIER_FIXUP_1107;
    _RESERVED_IDENTIFIER_FIXUP_1597.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1107;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1597.xxxx * _RESERVED_IDENTIFIER_FIXUP_1591;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1123 = (_RESERVED_IDENTIFIER_FIXUP_1579 * _RESERVED_IDENTIFIER_FIXUP_1597.yyyy) + _RESERVED_IDENTIFIER_FIXUP_1117;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1604 = _RESERVED_IDENTIFIER_FIXUP_1117;
    _RESERVED_IDENTIFIER_FIXUP_1604.x = _RESERVED_IDENTIFIER_FIXUP_743;
    float _RESERVED_IDENTIFIER_FIXUP_1136 = clamp((_RESERVED_IDENTIFIER_FIXUP_743 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1604.x = _RESERVED_IDENTIFIER_FIXUP_1136;
    float _RESERVED_IDENTIFIER_FIXUP_1142 = ((-_RESERVED_IDENTIFIER_FIXUP_1136) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1604.y = _RESERVED_IDENTIFIER_FIXUP_1142;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1729;
    if (_RESERVED_IDENTIFIER_FIXUP_1142 != (-_RESERVED_IDENTIFIER_FIXUP_1142))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1154 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1164 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1166 = _RESERVED_IDENTIFIER_FIXUP_1164.x;
        _RESERVED_IDENTIFIER_FIXUP_1604.y = _RESERVED_IDENTIFIER_FIXUP_1166;
        _RESERVED_IDENTIFIER_FIXUP_1604.z = _RESERVED_IDENTIFIER_FIXUP_1164.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1604.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1622;
        _RESERVED_IDENTIFIER_FIXUP_1622.x = _RESERVED_IDENTIFIER_FIXUP_1174.x;
        _RESERVED_IDENTIFIER_FIXUP_1622.y = _RESERVED_IDENTIFIER_FIXUP_1174.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1181 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1185 = _RESERVED_IDENTIFIER_FIXUP_1181.y;
        _RESERVED_IDENTIFIER_FIXUP_1622.w = _RESERVED_IDENTIFIER_FIXUP_1185;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1154.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1154.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1622.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1185;
        float _RESERVED_IDENTIFIER_FIXUP_1196 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1738 = vec4(_RESERVED_IDENTIFIER_FIXUP_1136, _RESERVED_IDENTIFIER_FIXUP_1166, _RESERVED_IDENTIFIER_FIXUP_1164.y, _RESERVED_IDENTIFIER_FIXUP_1196);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1203 = _RESERVED_IDENTIFIER_FIXUP_1738.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1635;
        _RESERVED_IDENTIFIER_FIXUP_1635.x = _RESERVED_IDENTIFIER_FIXUP_1203.x;
        _RESERVED_IDENTIFIER_FIXUP_1635.y = _RESERVED_IDENTIFIER_FIXUP_1203.y;
        _RESERVED_IDENTIFIER_FIXUP_1635.w = _RESERVED_IDENTIFIER_FIXUP_1185;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1635.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1185;
        float _RESERVED_IDENTIFIER_FIXUP_1225 = _RESERVED_IDENTIFIER_FIXUP_1196 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1738.w = _RESERVED_IDENTIFIER_FIXUP_1225;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1232 = _RESERVED_IDENTIFIER_FIXUP_1738.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1648;
        _RESERVED_IDENTIFIER_FIXUP_1648.x = _RESERVED_IDENTIFIER_FIXUP_1232.x;
        _RESERVED_IDENTIFIER_FIXUP_1648.y = _RESERVED_IDENTIFIER_FIXUP_1232.y;
        _RESERVED_IDENTIFIER_FIXUP_1648.w = _RESERVED_IDENTIFIER_FIXUP_1185;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1648.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1185;
        float _RESERVED_IDENTIFIER_FIXUP_1254 = _RESERVED_IDENTIFIER_FIXUP_1225 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1738.w = _RESERVED_IDENTIFIER_FIXUP_1254;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_1738.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1661;
        _RESERVED_IDENTIFIER_FIXUP_1661.x = _RESERVED_IDENTIFIER_FIXUP_1261.x;
        _RESERVED_IDENTIFIER_FIXUP_1661.y = _RESERVED_IDENTIFIER_FIXUP_1261.y;
        _RESERVED_IDENTIFIER_FIXUP_1661.w = _RESERVED_IDENTIFIER_FIXUP_1185;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1661.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1185;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1278 = hdLod5(param_12, param_13);
        _RESERVED_IDENTIFIER_FIXUP_1278.x = min((_RESERVED_IDENTIFIER_FIXUP_1136 * (((_RESERVED_IDENTIFIER_FIXUP_1254 + _RESERVED_IDENTIFIER_FIXUP_1278.x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1032.w);
        _RESERVED_IDENTIFIER_FIXUP_1729 = _RESERVED_IDENTIFIER_FIXUP_1278;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1737.x = _RESERVED_IDENTIFIER_FIXUP_1032.w;
        _RESERVED_IDENTIFIER_FIXUP_1729 = _RESERVED_IDENTIFIER_FIXUP_1737;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1311 = (_RESERVED_IDENTIFIER_FIXUP_1729.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1739 = vec4(_RESERVED_IDENTIFIER_FIXUP_1311, _RESERVED_IDENTIFIER_FIXUP_1123.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1335 = _RESERVED_IDENTIFIER_FIXUP_1729.xxx * _RESERVED_IDENTIFIER_FIXUP_1739.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1698 = _RESERVED_IDENTIFIER_FIXUP_1739;
    _RESERVED_IDENTIFIER_FIXUP_1698.y = _RESERVED_IDENTIFIER_FIXUP_1335.x;
    _RESERVED_IDENTIFIER_FIXUP_1698.z = _RESERVED_IDENTIFIER_FIXUP_1335.y;
    _RESERVED_IDENTIFIER_FIXUP_1698.w = _RESERVED_IDENTIFIER_FIXUP_1335.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1349 = (_RESERVED_IDENTIFIER_FIXUP_1123.xyz * _RESERVED_IDENTIFIER_FIXUP_1698.xxx) + _RESERVED_IDENTIFIER_FIXUP_1698.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1704 = _RESERVED_IDENTIFIER_FIXUP_1123;
    _RESERVED_IDENTIFIER_FIXUP_1704.x = _RESERVED_IDENTIFIER_FIXUP_1349.x;
    _RESERVED_IDENTIFIER_FIXUP_1704.y = _RESERVED_IDENTIFIER_FIXUP_1349.y;
    _RESERVED_IDENTIFIER_FIXUP_1704.z = _RESERVED_IDENTIFIER_FIXUP_1349.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1362 = _RESERVED_IDENTIFIER_FIXUP_1704.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1710 = _RESERVED_IDENTIFIER_FIXUP_1704;
    _RESERVED_IDENTIFIER_FIXUP_1710.x = _RESERVED_IDENTIFIER_FIXUP_1362.x;
    _RESERVED_IDENTIFIER_FIXUP_1710.y = _RESERVED_IDENTIFIER_FIXUP_1362.y;
    _RESERVED_IDENTIFIER_FIXUP_1710.z = _RESERVED_IDENTIFIER_FIXUP_1362.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1710.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_503 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_512;
    if (_RESERVED_IDENTIFIER_FIXUP_503)
    {
        _RESERVED_IDENTIFIER_FIXUP_512 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_512 = _RESERVED_IDENTIFIER_FIXUP_503;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_512)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_549 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1549.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_575 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1397;
    if (_RESERVED_IDENTIFIER_FIXUP_549 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1397 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_549), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_575);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1397 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_575);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1397;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1311);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
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
    vec2 hdB78 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r3.x = hdB78.x;
    r3.y = hdB78.y;
    vec3 hdB90 = v0.xyz + v0.xyz;
    r4.x = hdB90.x;
    r4.y = hdB90.y;
    r4.z = hdB90.z;
    vec3 hdB102 = r0.xyz * r4.xyz;
    r5.x = hdB102.x;
    r5.y = hdB102.y;
    r5.z = hdB102.z;
    vec4 hdB111 = r0;
    vec3 hdB120 = mix(r5.xyz, hdB111.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB120.x;
    r0.y = hdB120.y;
    r0.z = hdB120.z;
    vec3 hdB131 = r1.xyz * r4.xyz;
    r3.x = hdB131.x;
    r3.z = hdB131.y;
    r3.w = hdB131.z;
    vec4 hdB141 = r1;
    vec3 hdB147 = mix(r3.xzw, hdB141.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = hdB147.x;
    r1.y = hdB147.y;
    r1.z = hdB147.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r3 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r3.xy;
        float param_3 = r3.w;
        r3 = hdLod5(param_2, param_3);
        vec2 hdB224 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB224.x;
        r1.z = hdB224.y;
        vec2 hdB235 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB235.x;
        r4.y = hdB235.y;
        vec2 hdB243 = vec2(1.0, 0.0) * v4.zx;
        r4.z = hdB243.x;
        r4.w = hdB243.y;
        vec2 param_4 = r4.xy;
        float param_5 = r4.w;
        r4 = hdLod5(param_4, param_5);
        r1.w = r3.x + r4.x;
        vec2 hdB266 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB266.x;
        r3.y = hdB266.y;
        vec2 hdB273 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB273.x;
        r3.w = hdB273.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r1.w += r3.x;
        vec2 hdB296 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB296.x;
        r3.y = hdB296.y;
        vec2 hdB303 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB303.x;
        r3.w = hdB303.y;
        vec2 param_8 = r3.xy;
        float param_9 = r3.w;
        r3 = hdLod5(param_8, param_9);
        r1.w += r3.x;
        vec2 hdB326 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB326.x;
        r3.y = hdB326.y;
        vec2 hdB333 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB333.x;
        r3.w = hdB333.y;
        vec2 param_10 = r3.xy;
        float param_11 = r3.w;
        r3 = hdLod5(param_10, param_11);
        r1.y = r1.w + r3.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r3.x = min(r1.x, r2.w);
    }
    else
    {
        r3.x = r2.w;
    }
    r1.x = (r3.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB385 = r0.www * v1.xyz;
    r1.y = hdB385.x;
    r1.z = hdB385.y;
    r1.w = hdB385.z;
    vec4 hdB394 = r1;
    vec3 hdB396 = r3.xxx * hdB394.yzw;
    r1.y = hdB396.x;
    r1.z = hdB396.y;
    r1.w = hdB396.z;
    vec4 hdB403 = r0;
    vec3 hdB410 = (hdB403.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB410.x;
    r0.y = hdB410.y;
    r0.z = hdB410.z;
    vec4 hdB417 = r0;
    vec3 hdB424 = hdB417.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB424.x;
    r0.y = hdB424.y;
    r0.z = hdB424.z;
    vec3 hdB439 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB439.x;
    oC0.y = hdB439.y;
    oC0.z = hdB439.z;
    oC0.w = 1.0;
    bool hdB451 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB459;
    if (hdB451)
    {
        hdB459 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB459 = hdB451;
    }
    if (hdB459)
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
    bool _1379 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1389;
    if (_1379)
    {
        _1389 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1389 = _1379;
    }
    if (_1389)
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
        bool _1414 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1429;
        if (!_1414)
        {
            _1429 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1429 = _1414;
        }
        if (_1429)
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
