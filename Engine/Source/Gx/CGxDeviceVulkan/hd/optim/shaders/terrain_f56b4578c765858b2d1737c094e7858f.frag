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
float _RESERVED_IDENTIFIER_FIXUP_1527;
vec4 _RESERVED_IDENTIFIER_FIXUP_1528;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_582 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_586 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_590 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_594 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_590.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1252 = _RESERVED_IDENTIFIER_FIXUP_590;
    _RESERVED_IDENTIFIER_FIXUP_1252.y = _RESERVED_IDENTIFIER_FIXUP_594;
    _RESERVED_IDENTIFIER_FIXUP_1252.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_594;
    vec4 _RESERVED_IDENTIFIER_FIXUP_604 = _RESERVED_IDENTIFIER_FIXUP_586 * _RESERVED_IDENTIFIER_FIXUP_1252.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_610 = (_RESERVED_IDENTIFIER_FIXUP_582 * _RESERVED_IDENTIFIER_FIXUP_1252.yyyy) + _RESERVED_IDENTIFIER_FIXUP_604;
    float _RESERVED_IDENTIFIER_FIXUP_617 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1259 = _RESERVED_IDENTIFIER_FIXUP_604;
    _RESERVED_IDENTIFIER_FIXUP_1259.x = _RESERVED_IDENTIFIER_FIXUP_617;
    float _RESERVED_IDENTIFIER_FIXUP_623 = clamp((_RESERVED_IDENTIFIER_FIXUP_617 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1259.x = _RESERVED_IDENTIFIER_FIXUP_623;
    float _RESERVED_IDENTIFIER_FIXUP_629 = ((-_RESERVED_IDENTIFIER_FIXUP_623) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1259.y = _RESERVED_IDENTIFIER_FIXUP_629;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1530;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1529;
    if (_RESERVED_IDENTIFIER_FIXUP_629 != (-_RESERVED_IDENTIFIER_FIXUP_629))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_641 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_651 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_653 = _RESERVED_IDENTIFIER_FIXUP_651.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1273 = _RESERVED_IDENTIFIER_FIXUP_1259;
        _RESERVED_IDENTIFIER_FIXUP_1273.y = _RESERVED_IDENTIFIER_FIXUP_653;
        _RESERVED_IDENTIFIER_FIXUP_1273.z = _RESERVED_IDENTIFIER_FIXUP_651.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_661 = _RESERVED_IDENTIFIER_FIXUP_1273.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1277;
        _RESERVED_IDENTIFIER_FIXUP_1277.x = _RESERVED_IDENTIFIER_FIXUP_661.x;
        _RESERVED_IDENTIFIER_FIXUP_1277.y = _RESERVED_IDENTIFIER_FIXUP_661.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_668 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_672 = _RESERVED_IDENTIFIER_FIXUP_668.y;
        _RESERVED_IDENTIFIER_FIXUP_1277.w = _RESERVED_IDENTIFIER_FIXUP_672;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_641.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_641.w;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1277.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_672;
        float _RESERVED_IDENTIFIER_FIXUP_683 = hdLod5(param_3, param_4).x + hdLod5(param_5, param_6).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1537 = vec4(_RESERVED_IDENTIFIER_FIXUP_623, _RESERVED_IDENTIFIER_FIXUP_653, _RESERVED_IDENTIFIER_FIXUP_651.y, _RESERVED_IDENTIFIER_FIXUP_683);
        vec2 _RESERVED_IDENTIFIER_FIXUP_690 = _RESERVED_IDENTIFIER_FIXUP_1537.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1290;
        _RESERVED_IDENTIFIER_FIXUP_1290.x = _RESERVED_IDENTIFIER_FIXUP_690.x;
        _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_690.y;
        _RESERVED_IDENTIFIER_FIXUP_1290.w = _RESERVED_IDENTIFIER_FIXUP_672;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1290.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_672;
        float _RESERVED_IDENTIFIER_FIXUP_712 = _RESERVED_IDENTIFIER_FIXUP_683 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_1537.w = _RESERVED_IDENTIFIER_FIXUP_712;
        vec2 _RESERVED_IDENTIFIER_FIXUP_719 = _RESERVED_IDENTIFIER_FIXUP_1537.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1303;
        _RESERVED_IDENTIFIER_FIXUP_1303.x = _RESERVED_IDENTIFIER_FIXUP_719.x;
        _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_719.y;
        _RESERVED_IDENTIFIER_FIXUP_1303.w = _RESERVED_IDENTIFIER_FIXUP_672;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1303.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_672;
        float _RESERVED_IDENTIFIER_FIXUP_741 = _RESERVED_IDENTIFIER_FIXUP_712 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_1537.w = _RESERVED_IDENTIFIER_FIXUP_741;
        vec2 _RESERVED_IDENTIFIER_FIXUP_748 = _RESERVED_IDENTIFIER_FIXUP_1537.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1316;
        _RESERVED_IDENTIFIER_FIXUP_1316.x = _RESERVED_IDENTIFIER_FIXUP_748.x;
        _RESERVED_IDENTIFIER_FIXUP_1316.y = _RESERVED_IDENTIFIER_FIXUP_748.y;
        _RESERVED_IDENTIFIER_FIXUP_1316.w = _RESERVED_IDENTIFIER_FIXUP_672;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1316.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_672;
        vec4 _RESERVED_IDENTIFIER_FIXUP_765 = hdLod5(param_11, param_12);
        float _RESERVED_IDENTIFIER_FIXUP_770 = _RESERVED_IDENTIFIER_FIXUP_741 + _RESERVED_IDENTIFIER_FIXUP_765.x;
        _RESERVED_IDENTIFIER_FIXUP_1537.y = _RESERVED_IDENTIFIER_FIXUP_770;
        float _RESERVED_IDENTIFIER_FIXUP_775 = (_RESERVED_IDENTIFIER_FIXUP_770 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1537.y = _RESERVED_IDENTIFIER_FIXUP_775;
        float _RESERVED_IDENTIFIER_FIXUP_782 = (_RESERVED_IDENTIFIER_FIXUP_623 * _RESERVED_IDENTIFIER_FIXUP_775) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1537.x = _RESERVED_IDENTIFIER_FIXUP_782;
        _RESERVED_IDENTIFIER_FIXUP_765.x = min(_RESERVED_IDENTIFIER_FIXUP_782, _RESERVED_IDENTIFIER_FIXUP_590.w);
        _RESERVED_IDENTIFIER_FIXUP_1530 = _RESERVED_IDENTIFIER_FIXUP_1537;
        _RESERVED_IDENTIFIER_FIXUP_1529 = _RESERVED_IDENTIFIER_FIXUP_765;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1270 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1270.x = _RESERVED_IDENTIFIER_FIXUP_590.w;
        _RESERVED_IDENTIFIER_FIXUP_1530 = _RESERVED_IDENTIFIER_FIXUP_1259;
        _RESERVED_IDENTIFIER_FIXUP_1529 = _RESERVED_IDENTIFIER_FIXUP_1270;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1343 = _RESERVED_IDENTIFIER_FIXUP_1530;
    _RESERVED_IDENTIFIER_FIXUP_1343.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_811 = _RESERVED_IDENTIFIER_FIXUP_610.xyz * _RESERVED_IDENTIFIER_FIXUP_1343.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1345 = _RESERVED_IDENTIFIER_FIXUP_610;
    _RESERVED_IDENTIFIER_FIXUP_1345.x = _RESERVED_IDENTIFIER_FIXUP_811.x;
    _RESERVED_IDENTIFIER_FIXUP_1345.y = _RESERVED_IDENTIFIER_FIXUP_811.y;
    _RESERVED_IDENTIFIER_FIXUP_1345.z = _RESERVED_IDENTIFIER_FIXUP_811.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_822 = _RESERVED_IDENTIFIER_FIXUP_1345.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1527).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1351 = _RESERVED_IDENTIFIER_FIXUP_1345;
    _RESERVED_IDENTIFIER_FIXUP_1351.x = _RESERVED_IDENTIFIER_FIXUP_822.x;
    _RESERVED_IDENTIFIER_FIXUP_1351.y = _RESERVED_IDENTIFIER_FIXUP_822.y;
    _RESERVED_IDENTIFIER_FIXUP_1351.z = _RESERVED_IDENTIFIER_FIXUP_822.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_833 = _RESERVED_IDENTIFIER_FIXUP_1351.xyz + _RESERVED_IDENTIFIER_FIXUP_1351.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1357 = _RESERVED_IDENTIFIER_FIXUP_1351;
    _RESERVED_IDENTIFIER_FIXUP_1357.x = _RESERVED_IDENTIFIER_FIXUP_833.x;
    _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_833.y;
    _RESERVED_IDENTIFIER_FIXUP_1357.z = _RESERVED_IDENTIFIER_FIXUP_833.z;
    _RESERVED_IDENTIFIER_FIXUP_1343.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1343.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1343.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_858 = (_RESERVED_IDENTIFIER_FIXUP_1343.xyz * _RESERVED_IDENTIFIER_FIXUP_1529.xxx) + _RESERVED_IDENTIFIER_FIXUP_1357.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1369 = _RESERVED_IDENTIFIER_FIXUP_1357;
    _RESERVED_IDENTIFIER_FIXUP_1369.x = _RESERVED_IDENTIFIER_FIXUP_858.x;
    _RESERVED_IDENTIFIER_FIXUP_1369.y = _RESERVED_IDENTIFIER_FIXUP_858.y;
    _RESERVED_IDENTIFIER_FIXUP_1369.z = _RESERVED_IDENTIFIER_FIXUP_858.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_871 = _RESERVED_IDENTIFIER_FIXUP_1369.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1375 = _RESERVED_IDENTIFIER_FIXUP_1369;
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_871.x;
    _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_871.y;
    _RESERVED_IDENTIFIER_FIXUP_1375.z = _RESERVED_IDENTIFIER_FIXUP_871.z;
    vec2 param_13 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_919 = hdTex0(param_13);
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_923 = hdTex1(param_14);
    vec2 param_15 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_927 = hdTex2(param_15);
    float _RESERVED_IDENTIFIER_FIXUP_931 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_927.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1389 = _RESERVED_IDENTIFIER_FIXUP_927;
    _RESERVED_IDENTIFIER_FIXUP_1389.y = _RESERVED_IDENTIFIER_FIXUP_931;
    _RESERVED_IDENTIFIER_FIXUP_1389.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_931;
    vec4 _RESERVED_IDENTIFIER_FIXUP_941 = _RESERVED_IDENTIFIER_FIXUP_923 * _RESERVED_IDENTIFIER_FIXUP_1389.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_947 = (_RESERVED_IDENTIFIER_FIXUP_919 * _RESERVED_IDENTIFIER_FIXUP_1389.yyyy) + _RESERVED_IDENTIFIER_FIXUP_941;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1396 = _RESERVED_IDENTIFIER_FIXUP_941;
    _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_617;
    float _RESERVED_IDENTIFIER_FIXUP_960 = clamp((_RESERVED_IDENTIFIER_FIXUP_617 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_960;
    float _RESERVED_IDENTIFIER_FIXUP_966 = ((-_RESERVED_IDENTIFIER_FIXUP_960) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_966;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1534;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1533;
    if (_RESERVED_IDENTIFIER_FIXUP_966 != (-_RESERVED_IDENTIFIER_FIXUP_966))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_978 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_988 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_990 = _RESERVED_IDENTIFIER_FIXUP_988.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_1396;
        _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_990;
        _RESERVED_IDENTIFIER_FIXUP_1410.z = _RESERVED_IDENTIFIER_FIXUP_988.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_998 = _RESERVED_IDENTIFIER_FIXUP_1410.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1414;
        _RESERVED_IDENTIFIER_FIXUP_1414.x = _RESERVED_IDENTIFIER_FIXUP_998.x;
        _RESERVED_IDENTIFIER_FIXUP_1414.y = _RESERVED_IDENTIFIER_FIXUP_998.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1005 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1009 = _RESERVED_IDENTIFIER_FIXUP_1005.y;
        _RESERVED_IDENTIFIER_FIXUP_1414.w = _RESERVED_IDENTIFIER_FIXUP_1009;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_978.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_978.w;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1414.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1009;
        float _RESERVED_IDENTIFIER_FIXUP_1020 = hdLod5(param_16, param_17).x + hdLod5(param_18, param_19).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1539 = vec4(_RESERVED_IDENTIFIER_FIXUP_960, _RESERVED_IDENTIFIER_FIXUP_990, _RESERVED_IDENTIFIER_FIXUP_988.y, _RESERVED_IDENTIFIER_FIXUP_1020);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1027 = _RESERVED_IDENTIFIER_FIXUP_1539.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1427;
        _RESERVED_IDENTIFIER_FIXUP_1427.x = _RESERVED_IDENTIFIER_FIXUP_1027.x;
        _RESERVED_IDENTIFIER_FIXUP_1427.y = _RESERVED_IDENTIFIER_FIXUP_1027.y;
        _RESERVED_IDENTIFIER_FIXUP_1427.w = _RESERVED_IDENTIFIER_FIXUP_1009;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1427.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1009;
        float _RESERVED_IDENTIFIER_FIXUP_1049 = _RESERVED_IDENTIFIER_FIXUP_1020 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_1539.w = _RESERVED_IDENTIFIER_FIXUP_1049;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1056 = _RESERVED_IDENTIFIER_FIXUP_1539.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1440;
        _RESERVED_IDENTIFIER_FIXUP_1440.x = _RESERVED_IDENTIFIER_FIXUP_1056.x;
        _RESERVED_IDENTIFIER_FIXUP_1440.y = _RESERVED_IDENTIFIER_FIXUP_1056.y;
        _RESERVED_IDENTIFIER_FIXUP_1440.w = _RESERVED_IDENTIFIER_FIXUP_1009;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1440.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1009;
        float _RESERVED_IDENTIFIER_FIXUP_1078 = _RESERVED_IDENTIFIER_FIXUP_1049 + hdLod5(param_22, param_23).x;
        _RESERVED_IDENTIFIER_FIXUP_1539.w = _RESERVED_IDENTIFIER_FIXUP_1078;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1085 = _RESERVED_IDENTIFIER_FIXUP_1539.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1453;
        _RESERVED_IDENTIFIER_FIXUP_1453.x = _RESERVED_IDENTIFIER_FIXUP_1085.x;
        _RESERVED_IDENTIFIER_FIXUP_1453.y = _RESERVED_IDENTIFIER_FIXUP_1085.y;
        _RESERVED_IDENTIFIER_FIXUP_1453.w = _RESERVED_IDENTIFIER_FIXUP_1009;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1453.xy;
        float param_25 = _RESERVED_IDENTIFIER_FIXUP_1009;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1102 = hdLod5(param_24, param_25);
        float _RESERVED_IDENTIFIER_FIXUP_1107 = _RESERVED_IDENTIFIER_FIXUP_1078 + _RESERVED_IDENTIFIER_FIXUP_1102.x;
        _RESERVED_IDENTIFIER_FIXUP_1539.y = _RESERVED_IDENTIFIER_FIXUP_1107;
        float _RESERVED_IDENTIFIER_FIXUP_1112 = (_RESERVED_IDENTIFIER_FIXUP_1107 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1539.y = _RESERVED_IDENTIFIER_FIXUP_1112;
        float _RESERVED_IDENTIFIER_FIXUP_1119 = (_RESERVED_IDENTIFIER_FIXUP_960 * _RESERVED_IDENTIFIER_FIXUP_1112) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1539.x = _RESERVED_IDENTIFIER_FIXUP_1119;
        _RESERVED_IDENTIFIER_FIXUP_1102.x = min(_RESERVED_IDENTIFIER_FIXUP_1119, _RESERVED_IDENTIFIER_FIXUP_927.w);
        _RESERVED_IDENTIFIER_FIXUP_1534 = _RESERVED_IDENTIFIER_FIXUP_1539;
        _RESERVED_IDENTIFIER_FIXUP_1533 = _RESERVED_IDENTIFIER_FIXUP_1102;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1407 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1407.x = _RESERVED_IDENTIFIER_FIXUP_927.w;
        _RESERVED_IDENTIFIER_FIXUP_1534 = _RESERVED_IDENTIFIER_FIXUP_1396;
        _RESERVED_IDENTIFIER_FIXUP_1533 = _RESERVED_IDENTIFIER_FIXUP_1407;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1135 = (_RESERVED_IDENTIFIER_FIXUP_1533.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1478 = _RESERVED_IDENTIFIER_FIXUP_1534;
    _RESERVED_IDENTIFIER_FIXUP_1478.x = _RESERVED_IDENTIFIER_FIXUP_1135;
    _RESERVED_IDENTIFIER_FIXUP_1478.x = _RESERVED_IDENTIFIER_FIXUP_1135;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1148 = _RESERVED_IDENTIFIER_FIXUP_947.xyz * _RESERVED_IDENTIFIER_FIXUP_1478.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1484 = _RESERVED_IDENTIFIER_FIXUP_947;
    _RESERVED_IDENTIFIER_FIXUP_1484.x = _RESERVED_IDENTIFIER_FIXUP_1148.x;
    _RESERVED_IDENTIFIER_FIXUP_1484.y = _RESERVED_IDENTIFIER_FIXUP_1148.y;
    _RESERVED_IDENTIFIER_FIXUP_1484.z = _RESERVED_IDENTIFIER_FIXUP_1148.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1159 = _RESERVED_IDENTIFIER_FIXUP_1484.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1490 = _RESERVED_IDENTIFIER_FIXUP_1484;
    _RESERVED_IDENTIFIER_FIXUP_1490.x = _RESERVED_IDENTIFIER_FIXUP_1159.x;
    _RESERVED_IDENTIFIER_FIXUP_1490.y = _RESERVED_IDENTIFIER_FIXUP_1159.y;
    _RESERVED_IDENTIFIER_FIXUP_1490.z = _RESERVED_IDENTIFIER_FIXUP_1159.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1170 = _RESERVED_IDENTIFIER_FIXUP_1490.xyz + _RESERVED_IDENTIFIER_FIXUP_1490.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1496 = _RESERVED_IDENTIFIER_FIXUP_1490;
    _RESERVED_IDENTIFIER_FIXUP_1496.x = _RESERVED_IDENTIFIER_FIXUP_1170.x;
    _RESERVED_IDENTIFIER_FIXUP_1496.y = _RESERVED_IDENTIFIER_FIXUP_1170.y;
    _RESERVED_IDENTIFIER_FIXUP_1496.z = _RESERVED_IDENTIFIER_FIXUP_1170.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_1496.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1478.x = _RESERVED_IDENTIFIER_FIXUP_1181.x;
    _RESERVED_IDENTIFIER_FIXUP_1478.y = _RESERVED_IDENTIFIER_FIXUP_1181.y;
    _RESERVED_IDENTIFIER_FIXUP_1478.z = _RESERVED_IDENTIFIER_FIXUP_1181.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1195 = (_RESERVED_IDENTIFIER_FIXUP_1478.xyz * _RESERVED_IDENTIFIER_FIXUP_1533.xxx) + _RESERVED_IDENTIFIER_FIXUP_1496.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1508 = _RESERVED_IDENTIFIER_FIXUP_1496;
    _RESERVED_IDENTIFIER_FIXUP_1508.x = _RESERVED_IDENTIFIER_FIXUP_1195.x;
    _RESERVED_IDENTIFIER_FIXUP_1508.y = _RESERVED_IDENTIFIER_FIXUP_1195.y;
    _RESERVED_IDENTIFIER_FIXUP_1508.z = _RESERVED_IDENTIFIER_FIXUP_1195.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1208 = _RESERVED_IDENTIFIER_FIXUP_1508.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_1508;
    _RESERVED_IDENTIFIER_FIXUP_1514.x = _RESERVED_IDENTIFIER_FIXUP_1208.x;
    _RESERVED_IDENTIFIER_FIXUP_1514.y = _RESERVED_IDENTIFIER_FIXUP_1208.y;
    _RESERVED_IDENTIFIER_FIXUP_1514.z = _RESERVED_IDENTIFIER_FIXUP_1208.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1514.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_448 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_457;
    if (_RESERVED_IDENTIFIER_FIXUP_448)
    {
        _RESERVED_IDENTIFIER_FIXUP_457 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_457 = _RESERVED_IDENTIFIER_FIXUP_448;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_457)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_494 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1375.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_521 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1245;
    if (_RESERVED_IDENTIFIER_FIXUP_494 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1245 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_494), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_521);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1245 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_521);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1245;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1135);
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
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 *= r2.xxxx;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r3 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r3.xy;
        float param_4 = r3.w;
        r3 = hdLod5(param_3, param_4);
        vec2 hdB135 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB135.x;
        r1.z = hdB135.y;
        vec2 hdB157 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB157.x;
        r4.y = hdB157.y;
        vec2 hdB165 = vec2(1.0, 0.0) * v4.zx;
        r4.z = hdB165.x;
        r4.w = hdB165.y;
        vec2 param_5 = r4.xy;
        float param_6 = r4.w;
        r4 = hdLod5(param_5, param_6);
        r1.w = r3.x + r4.x;
        vec2 hdB188 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB188.x;
        r3.y = hdB188.y;
        vec2 hdB195 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB195.x;
        r3.w = hdB195.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r1.w += r3.x;
        vec2 hdB218 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB218.x;
        r3.y = hdB218.y;
        vec2 hdB225 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB225.x;
        r3.w = hdB225.y;
        vec2 param_9 = r3.xy;
        float param_10 = r3.w;
        r3 = hdLod5(param_9, param_10);
        r1.w += r3.x;
        vec2 hdB248 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB248.x;
        r3.y = hdB248.y;
        vec2 hdB255 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB255.x;
        r3.w = hdB255.y;
        vec2 param_11 = r3.xy;
        float param_12 = r3.w;
        r3 = hdLod5(param_11, param_12);
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
    vec4 hdB303 = r0;
    vec3 hdB307 = hdB303.xyz * r1.xxx;
    r0.x = hdB307.x;
    r0.y = hdB307.y;
    r0.z = hdB307.z;
    vec4 hdB314 = r0;
    vec3 hdB318 = hdB314.xyz * v0.xyz;
    r0.x = hdB318.x;
    r0.y = hdB318.y;
    r0.z = hdB318.z;
    vec4 hdB325 = r0;
    vec4 hdB327 = r0;
    vec3 hdB329 = hdB325.xyz + hdB327.xyz;
    r0.x = hdB329.x;
    r0.y = hdB329.y;
    r0.z = hdB329.z;
    vec3 hdB340 = r0.www * v1.xyz;
    r1.x = hdB340.x;
    r1.y = hdB340.y;
    r1.z = hdB340.z;
    vec4 hdB352 = r0;
    vec3 hdB354 = (r1.xyz * r3.xxx) + hdB352.xyz;
    r0.x = hdB354.x;
    r0.y = hdB354.y;
    r0.z = hdB354.z;
    vec4 hdB361 = r0;
    vec3 hdB368 = hdB361.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB368.x;
    r0.y = hdB368.y;
    r0.z = hdB368.z;
    vec3 hdB383 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB383.x;
    oC0.y = hdB383.y;
    oC0.z = hdB383.z;
    oC0.w = 1.0;
    bool hdB396 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB404;
    if (hdB396)
    {
        hdB404 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB404 = hdB396;
    }
    if (hdB404)
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
    bool _1480 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1490;
    if (_1480)
    {
        _1490 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1490 = _1480;
    }
    if (_1490)
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
        bool _1515 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1530;
        if (!_1515)
        {
            _1530 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1530 = _1515;
        }
        if (_1530)
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
