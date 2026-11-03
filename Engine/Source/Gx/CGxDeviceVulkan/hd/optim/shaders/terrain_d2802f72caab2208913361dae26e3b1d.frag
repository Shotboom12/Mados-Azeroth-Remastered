#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
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
float _RESERVED_IDENTIFIER_FIXUP_1897;
vec4 _RESERVED_IDENTIFIER_FIXUP_1898;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
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
    bool _49 = hdOverride >= 0;
    bool _68;
    if (_49)
    {
        _68 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _68 = _49;
    }
    vec4 _69;
    if (_68)
    {
        _69 = vec4(float(hdOverride));
    }
    else
    {
        _69 = value;
    }
    return _69;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _86 = hdOverride >= 0;
    bool _96;
    if (_86)
    {
        _96 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _96 = _86;
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _114 = hdOverride >= 0;
    bool _124;
    if (_114)
    {
        _124 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_687 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_691 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_695 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_699 = hdTex3(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_703 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1538 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1538.x = _RESERVED_IDENTIFIER_FIXUP_703.x;
    _RESERVED_IDENTIFIER_FIXUP_1538.y = _RESERVED_IDENTIFIER_FIXUP_703.y;
    float _RESERVED_IDENTIFIER_FIXUP_709 = _RESERVED_IDENTIFIER_FIXUP_703.z;
    _RESERVED_IDENTIFIER_FIXUP_1538.z = _RESERVED_IDENTIFIER_FIXUP_709;
    vec3 _RESERVED_IDENTIFIER_FIXUP_711 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1897).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_714 = _RESERVED_IDENTIFIER_FIXUP_711 + _RESERVED_IDENTIFIER_FIXUP_711;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1544 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1544.x = _RESERVED_IDENTIFIER_FIXUP_714.x;
    _RESERVED_IDENTIFIER_FIXUP_1544.y = _RESERVED_IDENTIFIER_FIXUP_714.y;
    _RESERVED_IDENTIFIER_FIXUP_1544.z = _RESERVED_IDENTIFIER_FIXUP_714.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_722 = _RESERVED_IDENTIFIER_FIXUP_687.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_725 = _RESERVED_IDENTIFIER_FIXUP_722 * _RESERVED_IDENTIFIER_FIXUP_1544.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1550 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1550.x = _RESERVED_IDENTIFIER_FIXUP_725.x;
    _RESERVED_IDENTIFIER_FIXUP_1550.y = _RESERVED_IDENTIFIER_FIXUP_725.y;
    _RESERVED_IDENTIFIER_FIXUP_1550.z = _RESERVED_IDENTIFIER_FIXUP_725.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_739 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1538.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_740 = mix(_RESERVED_IDENTIFIER_FIXUP_1550.xyz, _RESERVED_IDENTIFIER_FIXUP_722, _RESERVED_IDENTIFIER_FIXUP_739);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1556 = _RESERVED_IDENTIFIER_FIXUP_687;
    _RESERVED_IDENTIFIER_FIXUP_1556.x = _RESERVED_IDENTIFIER_FIXUP_740.x;
    _RESERVED_IDENTIFIER_FIXUP_1556.y = _RESERVED_IDENTIFIER_FIXUP_740.y;
    _RESERVED_IDENTIFIER_FIXUP_1556.z = _RESERVED_IDENTIFIER_FIXUP_740.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_748 = _RESERVED_IDENTIFIER_FIXUP_691.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_751 = _RESERVED_IDENTIFIER_FIXUP_748 * _RESERVED_IDENTIFIER_FIXUP_1544.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1550.x = _RESERVED_IDENTIFIER_FIXUP_751.x;
    _RESERVED_IDENTIFIER_FIXUP_1550.y = _RESERVED_IDENTIFIER_FIXUP_751.y;
    _RESERVED_IDENTIFIER_FIXUP_1550.z = _RESERVED_IDENTIFIER_FIXUP_751.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_765 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1538.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_766 = mix(_RESERVED_IDENTIFIER_FIXUP_1550.xyz, _RESERVED_IDENTIFIER_FIXUP_748, _RESERVED_IDENTIFIER_FIXUP_765);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_691;
    _RESERVED_IDENTIFIER_FIXUP_1568.x = _RESERVED_IDENTIFIER_FIXUP_766.x;
    _RESERVED_IDENTIFIER_FIXUP_1568.y = _RESERVED_IDENTIFIER_FIXUP_766.y;
    _RESERVED_IDENTIFIER_FIXUP_1568.z = _RESERVED_IDENTIFIER_FIXUP_766.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_774 = _RESERVED_IDENTIFIER_FIXUP_695.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_777 = _RESERVED_IDENTIFIER_FIXUP_774 * _RESERVED_IDENTIFIER_FIXUP_1544.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1907 = vec4(_RESERVED_IDENTIFIER_FIXUP_777.xy, _RESERVED_IDENTIFIER_FIXUP_709, _RESERVED_IDENTIFIER_FIXUP_777.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_792 = mix(_RESERVED_IDENTIFIER_FIXUP_1907.xyw, _RESERVED_IDENTIFIER_FIXUP_774, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1907.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1580 = _RESERVED_IDENTIFIER_FIXUP_695;
    _RESERVED_IDENTIFIER_FIXUP_1580.x = _RESERVED_IDENTIFIER_FIXUP_792.x;
    _RESERVED_IDENTIFIER_FIXUP_1580.y = _RESERVED_IDENTIFIER_FIXUP_792.y;
    _RESERVED_IDENTIFIER_FIXUP_1580.z = _RESERVED_IDENTIFIER_FIXUP_792.z;
    float _RESERVED_IDENTIFIER_FIXUP_802 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_699.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1586 = _RESERVED_IDENTIFIER_FIXUP_699;
    _RESERVED_IDENTIFIER_FIXUP_1586.z = _RESERVED_IDENTIFIER_FIXUP_802;
    _RESERVED_IDENTIFIER_FIXUP_1586.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_802;
    vec4 _RESERVED_IDENTIFIER_FIXUP_824 = (_RESERVED_IDENTIFIER_FIXUP_1580 * _RESERVED_IDENTIFIER_FIXUP_1586.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1556 * _RESERVED_IDENTIFIER_FIXUP_1586.zzzz) + (_RESERVED_IDENTIFIER_FIXUP_1586.xxxx * _RESERVED_IDENTIFIER_FIXUP_1568));
    float _RESERVED_IDENTIFIER_FIXUP_831 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1697 = _RESERVED_IDENTIFIER_FIXUP_824;
    _RESERVED_IDENTIFIER_FIXUP_1697.x = _RESERVED_IDENTIFIER_FIXUP_824.x;
    _RESERVED_IDENTIFIER_FIXUP_1697.y = _RESERVED_IDENTIFIER_FIXUP_824.y;
    _RESERVED_IDENTIFIER_FIXUP_1697.z = _RESERVED_IDENTIFIER_FIXUP_824.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1065 = _RESERVED_IDENTIFIER_FIXUP_1697.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1703 = _RESERVED_IDENTIFIER_FIXUP_1697;
    _RESERVED_IDENTIFIER_FIXUP_1703.x = _RESERVED_IDENTIFIER_FIXUP_1065.x;
    _RESERVED_IDENTIFIER_FIXUP_1703.y = _RESERVED_IDENTIFIER_FIXUP_1065.y;
    _RESERVED_IDENTIFIER_FIXUP_1703.z = _RESERVED_IDENTIFIER_FIXUP_1065.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1118 = OptTex0( texcoord0.xyz);
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1122 = hdTex1(param_3);
    vec2 param_4 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1126 = hdTex2(param_4);
    vec2 param_5 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1130 = hdTex3(param_5);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1145 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1723 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1723.x = _RESERVED_IDENTIFIER_FIXUP_1145.x;
    _RESERVED_IDENTIFIER_FIXUP_1723.y = _RESERVED_IDENTIFIER_FIXUP_1145.y;
    _RESERVED_IDENTIFIER_FIXUP_1723.z = _RESERVED_IDENTIFIER_FIXUP_1145.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1153 = _RESERVED_IDENTIFIER_FIXUP_1118.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1156 = _RESERVED_IDENTIFIER_FIXUP_1153 * _RESERVED_IDENTIFIER_FIXUP_1723.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1729 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1729.x = _RESERVED_IDENTIFIER_FIXUP_1156.x;
    _RESERVED_IDENTIFIER_FIXUP_1729.y = _RESERVED_IDENTIFIER_FIXUP_1156.y;
    _RESERVED_IDENTIFIER_FIXUP_1729.z = _RESERVED_IDENTIFIER_FIXUP_1156.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1171 = mix(_RESERVED_IDENTIFIER_FIXUP_1729.xyz, _RESERVED_IDENTIFIER_FIXUP_1153, _RESERVED_IDENTIFIER_FIXUP_739);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1735 = _RESERVED_IDENTIFIER_FIXUP_1118;
    _RESERVED_IDENTIFIER_FIXUP_1735.x = _RESERVED_IDENTIFIER_FIXUP_1171.x;
    _RESERVED_IDENTIFIER_FIXUP_1735.y = _RESERVED_IDENTIFIER_FIXUP_1171.y;
    _RESERVED_IDENTIFIER_FIXUP_1735.z = _RESERVED_IDENTIFIER_FIXUP_1171.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1179 = _RESERVED_IDENTIFIER_FIXUP_1122.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1182 = _RESERVED_IDENTIFIER_FIXUP_1179 * _RESERVED_IDENTIFIER_FIXUP_1723.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1729.x = _RESERVED_IDENTIFIER_FIXUP_1182.x;
    _RESERVED_IDENTIFIER_FIXUP_1729.y = _RESERVED_IDENTIFIER_FIXUP_1182.y;
    _RESERVED_IDENTIFIER_FIXUP_1729.z = _RESERVED_IDENTIFIER_FIXUP_1182.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1197 = mix(_RESERVED_IDENTIFIER_FIXUP_1729.xyz, _RESERVED_IDENTIFIER_FIXUP_1179, _RESERVED_IDENTIFIER_FIXUP_765);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1747 = _RESERVED_IDENTIFIER_FIXUP_1122;
    _RESERVED_IDENTIFIER_FIXUP_1747.x = _RESERVED_IDENTIFIER_FIXUP_1197.x;
    _RESERVED_IDENTIFIER_FIXUP_1747.y = _RESERVED_IDENTIFIER_FIXUP_1197.y;
    _RESERVED_IDENTIFIER_FIXUP_1747.z = _RESERVED_IDENTIFIER_FIXUP_1197.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_1126.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1208 = _RESERVED_IDENTIFIER_FIXUP_1205 * _RESERVED_IDENTIFIER_FIXUP_1723.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1910 = vec4(_RESERVED_IDENTIFIER_FIXUP_1208.xy, _RESERVED_IDENTIFIER_FIXUP_709, _RESERVED_IDENTIFIER_FIXUP_1208.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1223 = mix(_RESERVED_IDENTIFIER_FIXUP_1910.xyw, _RESERVED_IDENTIFIER_FIXUP_1205, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1910.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1759 = _RESERVED_IDENTIFIER_FIXUP_1126;
    _RESERVED_IDENTIFIER_FIXUP_1759.x = _RESERVED_IDENTIFIER_FIXUP_1223.x;
    _RESERVED_IDENTIFIER_FIXUP_1759.y = _RESERVED_IDENTIFIER_FIXUP_1223.y;
    _RESERVED_IDENTIFIER_FIXUP_1759.z = _RESERVED_IDENTIFIER_FIXUP_1223.z;
    float _RESERVED_IDENTIFIER_FIXUP_1233 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1130.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1765 = _RESERVED_IDENTIFIER_FIXUP_1130;
    _RESERVED_IDENTIFIER_FIXUP_1765.z = _RESERVED_IDENTIFIER_FIXUP_1233;
    _RESERVED_IDENTIFIER_FIXUP_1765.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1233;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1243 = _RESERVED_IDENTIFIER_FIXUP_1765.xxxx * _RESERVED_IDENTIFIER_FIXUP_1747;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1255 = (_RESERVED_IDENTIFIER_FIXUP_1759 * _RESERVED_IDENTIFIER_FIXUP_1765.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1735 * _RESERVED_IDENTIFIER_FIXUP_1765.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1243);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1772 = _RESERVED_IDENTIFIER_FIXUP_1243;
    _RESERVED_IDENTIFIER_FIXUP_1772.x = _RESERVED_IDENTIFIER_FIXUP_831;
    float _RESERVED_IDENTIFIER_FIXUP_1268 = clamp((_RESERVED_IDENTIFIER_FIXUP_831 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1772.x = _RESERVED_IDENTIFIER_FIXUP_1268;
    float _RESERVED_IDENTIFIER_FIXUP_1274 = ((-_RESERVED_IDENTIFIER_FIXUP_1268) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1772.y = _RESERVED_IDENTIFIER_FIXUP_1274;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1903;
    if (_RESERVED_IDENTIFIER_FIXUP_1274 != (-_RESERVED_IDENTIFIER_FIXUP_1274))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1286 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1772.y = _RESERVED_IDENTIFIER_FIXUP_1286.x;
        _RESERVED_IDENTIFIER_FIXUP_1772.z = _RESERVED_IDENTIFIER_FIXUP_1286.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1296 = _RESERVED_IDENTIFIER_FIXUP_1772.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1789;
        _RESERVED_IDENTIFIER_FIXUP_1789.x = _RESERVED_IDENTIFIER_FIXUP_1296.x;
        _RESERVED_IDENTIFIER_FIXUP_1789.y = _RESERVED_IDENTIFIER_FIXUP_1296.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1306 = _RESERVED_IDENTIFIER_FIXUP_1772.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1793;
        _RESERVED_IDENTIFIER_FIXUP_1793.x = _RESERVED_IDENTIFIER_FIXUP_1306.x;
        _RESERVED_IDENTIFIER_FIXUP_1793.y = _RESERVED_IDENTIFIER_FIXUP_1306.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1316 = _RESERVED_IDENTIFIER_FIXUP_1772.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1797;
        _RESERVED_IDENTIFIER_FIXUP_1797.x = _RESERVED_IDENTIFIER_FIXUP_1316.x;
        _RESERVED_IDENTIFIER_FIXUP_1797.y = _RESERVED_IDENTIFIER_FIXUP_1316.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1326 = _RESERVED_IDENTIFIER_FIXUP_1772.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1801;
        _RESERVED_IDENTIFIER_FIXUP_1801.x = _RESERVED_IDENTIFIER_FIXUP_1326.x;
        _RESERVED_IDENTIFIER_FIXUP_1801.y = _RESERVED_IDENTIFIER_FIXUP_1326.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1334 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1334.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1334.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1340 = hdLod5(param_6, param_7);
        _RESERVED_IDENTIFIER_FIXUP_1789.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1793.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1797.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1801.w = 0.0;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1789.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1340.y = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1793.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1340.z = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1797.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1340.w = hdLod5(param_12, param_13).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1397 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1340 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1801.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1397.x = min((_RESERVED_IDENTIFIER_FIXUP_1268 * (((float((hdLod5(param_14, param_15).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1397, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1130.w);
        _RESERVED_IDENTIFIER_FIXUP_1903 = _RESERVED_IDENTIFIER_FIXUP_1397;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1783 = _RESERVED_IDENTIFIER_FIXUP_1759;
        _RESERVED_IDENTIFIER_FIXUP_1783.x = _RESERVED_IDENTIFIER_FIXUP_1130.w;
        _RESERVED_IDENTIFIER_FIXUP_1903 = _RESERVED_IDENTIFIER_FIXUP_1783;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1445 = (_RESERVED_IDENTIFIER_FIXUP_1903.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1911 = vec4(_RESERVED_IDENTIFIER_FIXUP_1445, _RESERVED_IDENTIFIER_FIXUP_1255.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1469 = _RESERVED_IDENTIFIER_FIXUP_1903.xxx * _RESERVED_IDENTIFIER_FIXUP_1911.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1872 = _RESERVED_IDENTIFIER_FIXUP_1911;
    _RESERVED_IDENTIFIER_FIXUP_1872.y = _RESERVED_IDENTIFIER_FIXUP_1469.x;
    _RESERVED_IDENTIFIER_FIXUP_1872.z = _RESERVED_IDENTIFIER_FIXUP_1469.y;
    _RESERVED_IDENTIFIER_FIXUP_1872.w = _RESERVED_IDENTIFIER_FIXUP_1469.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1483 = (_RESERVED_IDENTIFIER_FIXUP_1255.xyz * _RESERVED_IDENTIFIER_FIXUP_1872.xxx) + _RESERVED_IDENTIFIER_FIXUP_1872.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1878 = _RESERVED_IDENTIFIER_FIXUP_1255;
    _RESERVED_IDENTIFIER_FIXUP_1878.x = _RESERVED_IDENTIFIER_FIXUP_1483.x;
    _RESERVED_IDENTIFIER_FIXUP_1878.y = _RESERVED_IDENTIFIER_FIXUP_1483.y;
    _RESERVED_IDENTIFIER_FIXUP_1878.z = _RESERVED_IDENTIFIER_FIXUP_1483.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1496 = _RESERVED_IDENTIFIER_FIXUP_1878.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1884 = _RESERVED_IDENTIFIER_FIXUP_1878;
    _RESERVED_IDENTIFIER_FIXUP_1884.x = _RESERVED_IDENTIFIER_FIXUP_1496.x;
    _RESERVED_IDENTIFIER_FIXUP_1884.y = _RESERVED_IDENTIFIER_FIXUP_1496.y;
    _RESERVED_IDENTIFIER_FIXUP_1884.z = _RESERVED_IDENTIFIER_FIXUP_1496.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1884.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_550 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_559;
    if (_RESERVED_IDENTIFIER_FIXUP_550)
    {
        _RESERVED_IDENTIFIER_FIXUP_559 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_559 = _RESERVED_IDENTIFIER_FIXUP_550;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_559)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_596 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1703.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_622 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1531;
    if (_RESERVED_IDENTIFIER_FIXUP_596 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1531 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_596), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_622);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1531 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_622);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1531;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1445);
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 param_2 = v4.xy;
    r3 = hdTex3(param_2);
    vec3 hdB88 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB88.x;
    r4.y = hdB88.y;
    r4.z = hdB88.z;
    vec3 hdB103 = v0.xyz + v0.xyz;
    r5.x = hdB103.x;
    r5.y = hdB103.y;
    r5.z = hdB103.z;
    vec3 hdB114 = r0.xyz * r5.xyz;
    r6.x = hdB114.x;
    r6.y = hdB114.y;
    r6.z = hdB114.z;
    vec4 hdB123 = r0;
    vec3 hdB132 = mix(r6.xyz, hdB123.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB132.x;
    r0.y = hdB132.y;
    r0.z = hdB132.z;
    vec3 hdB143 = r1.xyz * r5.xyz;
    r6.x = hdB143.x;
    r6.y = hdB143.y;
    r6.z = hdB143.z;
    vec4 hdB152 = r1;
    vec3 hdB158 = mix(r6.xyz, hdB152.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB158.x;
    r1.y = hdB158.y;
    r1.z = hdB158.z;
    vec3 hdB169 = r2.xyz * r5.xyz;
    r4.x = hdB169.x;
    r4.y = hdB169.y;
    r4.w = hdB169.z;
    vec4 hdB179 = r2;
    vec3 hdB185 = mix(r4.xyw, hdB179.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB185.x;
    r2.y = hdB185.y;
    r2.z = hdB185.z;
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 = r3.xxxx * r1;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB255 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB255.x;
        r1.z = hdB255.y;
        vec2 hdB266 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB266.x;
        r2.y = hdB266.y;
        vec2 hdB277 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB277.x;
        r4.y = hdB277.y;
        vec2 hdB288 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB288.x;
        r5.y = hdB288.y;
        vec2 hdB299 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB299.x;
        r6.y = hdB299.y;
        r7 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r7.xy;
        float param_4 = r7.w;
        r7 = hdLod5(param_3, param_4);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_7 = r4.xy;
        float param_8 = r4.w;
        r4 = hdLod5(param_7, param_8);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_9 = r5.xy;
        float param_10 = r5.w;
        r5 = hdLod5(param_9, param_10);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_11 = r6.xy;
        float param_12 = r6.w;
        r6 = hdLod5(param_11, param_12);
        r7.y = r2.x;
        r7.z = r4.x;
        r7.w = r5.x;
        r2 = r7 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r6.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r3.w);
    }
    else
    {
        r2.x = r3.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB432 = r0.www * v1.xyz;
    r1.y = hdB432.x;
    r1.z = hdB432.y;
    r1.w = hdB432.z;
    vec4 hdB441 = r1;
    vec3 hdB443 = r2.xxx * hdB441.yzw;
    r1.y = hdB443.x;
    r1.z = hdB443.y;
    r1.w = hdB443.z;
    vec4 hdB450 = r0;
    vec3 hdB457 = (hdB450.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB457.x;
    r0.y = hdB457.y;
    r0.z = hdB457.z;
    vec4 hdB464 = r0;
    vec3 hdB471 = hdB464.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB471.x;
    r0.y = hdB471.y;
    r0.z = hdB471.z;
    vec3 hdB486 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB486.x;
    oC0.y = hdB486.y;
    oC0.z = hdB486.z;
    oC0.w = 1.0;
    bool hdB498 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB506;
    if (hdB498)
    {
        hdB506 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB506 = hdB498;
    }
    if (hdB506)
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
    bool _1522 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1532;
    if (_1522)
    {
        _1532 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1532 = _1522;
    }
    if (_1532)
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
        bool _1557 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1572;
        if (!_1557)
        {
            _1572 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1572 = _1557;
        }
        if (_1572)
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
