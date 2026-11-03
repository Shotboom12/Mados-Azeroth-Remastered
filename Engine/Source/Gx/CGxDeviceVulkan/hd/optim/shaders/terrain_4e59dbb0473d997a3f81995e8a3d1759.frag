#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1754;
vec4 _RESERVED_IDENTIFIER_FIXUP_1755;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _88 = hdOverride >= 0;
    bool _98;
    if (_88)
    {
        _98 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _116 = hdOverride >= 0;
    bool _125;
    if (_116)
    {
        _125 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _125 = _116;
    }
    vec4 _126;
    if (_125)
    {
        _126 = vec4(float(hdOverride));
    }
    else
    {
        _126 = value;
    }
    return _126;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _143 = hdOverride >= 0;
    bool _153;
    if (_143)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_648 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_651 = _RESERVED_IDENTIFIER_FIXUP_648.xy;
    float _RESERVED_IDENTIFIER_FIXUP_653 = _RESERVED_IDENTIFIER_FIXUP_648.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_651;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_653;
    vec4 _RESERVED_IDENTIFIER_FIXUP_654 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1424;
    _RESERVED_IDENTIFIER_FIXUP_1424.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_662 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1426;
    _RESERVED_IDENTIFIER_FIXUP_1426.x = _RESERVED_IDENTIFIER_FIXUP_662.x;
    _RESERVED_IDENTIFIER_FIXUP_1426.y = _RESERVED_IDENTIFIER_FIXUP_662.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_672 = _RESERVED_IDENTIFIER_FIXUP_1426.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1430 = _RESERVED_IDENTIFIER_FIXUP_1424;
    _RESERVED_IDENTIFIER_FIXUP_1430.x = _RESERVED_IDENTIFIER_FIXUP_672.x;
    _RESERVED_IDENTIFIER_FIXUP_1430.y = _RESERVED_IDENTIFIER_FIXUP_672.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1430.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_654.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_695 = _RESERVED_IDENTIFIER_FIXUP_1426.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1442 = _RESERVED_IDENTIFIER_FIXUP_1424;
    _RESERVED_IDENTIFIER_FIXUP_1442.x = _RESERVED_IDENTIFIER_FIXUP_695.x;
    _RESERVED_IDENTIFIER_FIXUP_1442.y = _RESERVED_IDENTIFIER_FIXUP_695.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1442.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_654.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_714 = _RESERVED_IDENTIFIER_FIXUP_1426.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1450;
    _RESERVED_IDENTIFIER_FIXUP_1450.x = _RESERVED_IDENTIFIER_FIXUP_714.x;
    _RESERVED_IDENTIFIER_FIXUP_1450.y = _RESERVED_IDENTIFIER_FIXUP_714.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_724 = _RESERVED_IDENTIFIER_FIXUP_1426.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1454;
    _RESERVED_IDENTIFIER_FIXUP_1454.x = _RESERVED_IDENTIFIER_FIXUP_724.x;
    _RESERVED_IDENTIFIER_FIXUP_1454.y = _RESERVED_IDENTIFIER_FIXUP_724.y;
    _RESERVED_IDENTIFIER_FIXUP_1450.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1450.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_654.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1454.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_792 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_810 = hdTex3(param_8);
    vec3 _RESERVED_IDENTIFIER_FIXUP_822 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1754).xyz;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1454.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1756 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_792 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_654 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_810.w), _RESERVED_IDENTIFIER_FIXUP_822 + _RESERVED_IDENTIFIER_FIXUP_822);
    vec3 _RESERVED_IDENTIFIER_FIXUP_833 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_835 = _RESERVED_IDENTIFIER_FIXUP_1756.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_836 = _RESERVED_IDENTIFIER_FIXUP_833 * _RESERVED_IDENTIFIER_FIXUP_835;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1508;
    _RESERVED_IDENTIFIER_FIXUP_1508.x = _RESERVED_IDENTIFIER_FIXUP_836.x;
    _RESERVED_IDENTIFIER_FIXUP_1508.y = _RESERVED_IDENTIFIER_FIXUP_836.y;
    _RESERVED_IDENTIFIER_FIXUP_1508.z = _RESERVED_IDENTIFIER_FIXUP_836.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_846 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1514;
    _RESERVED_IDENTIFIER_FIXUP_1514.x = _RESERVED_IDENTIFIER_FIXUP_846.x;
    _RESERVED_IDENTIFIER_FIXUP_1514.y = _RESERVED_IDENTIFIER_FIXUP_846.y;
    _RESERVED_IDENTIFIER_FIXUP_1514.z = _RESERVED_IDENTIFIER_FIXUP_846.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_860 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1514.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_861 = mix(_RESERVED_IDENTIFIER_FIXUP_1508.xyz, _RESERVED_IDENTIFIER_FIXUP_833, _RESERVED_IDENTIFIER_FIXUP_860);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1520;
    _RESERVED_IDENTIFIER_FIXUP_1520.x = _RESERVED_IDENTIFIER_FIXUP_861.x;
    _RESERVED_IDENTIFIER_FIXUP_1520.y = _RESERVED_IDENTIFIER_FIXUP_861.y;
    _RESERVED_IDENTIFIER_FIXUP_1520.z = _RESERVED_IDENTIFIER_FIXUP_861.z;
    vec2 param_11 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_875 = hdTex1(param_11).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_876 = _RESERVED_IDENTIFIER_FIXUP_835 * _RESERVED_IDENTIFIER_FIXUP_875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1526;
    _RESERVED_IDENTIFIER_FIXUP_1526.x = _RESERVED_IDENTIFIER_FIXUP_876.x;
    _RESERVED_IDENTIFIER_FIXUP_1526.y = _RESERVED_IDENTIFIER_FIXUP_876.y;
    _RESERVED_IDENTIFIER_FIXUP_1526.z = _RESERVED_IDENTIFIER_FIXUP_876.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_890 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1514.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_891 = mix(_RESERVED_IDENTIFIER_FIXUP_1526.xyz, _RESERVED_IDENTIFIER_FIXUP_875, _RESERVED_IDENTIFIER_FIXUP_890);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1532;
    _RESERVED_IDENTIFIER_FIXUP_1532.x = _RESERVED_IDENTIFIER_FIXUP_891.x;
    _RESERVED_IDENTIFIER_FIXUP_1532.y = _RESERVED_IDENTIFIER_FIXUP_891.y;
    _RESERVED_IDENTIFIER_FIXUP_1532.z = _RESERVED_IDENTIFIER_FIXUP_891.z;
    vec2 param_12 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_910 = hdTex2(param_12).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_911 = _RESERVED_IDENTIFIER_FIXUP_835 * _RESERVED_IDENTIFIER_FIXUP_910;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1538 = _RESERVED_IDENTIFIER_FIXUP_810;
    _RESERVED_IDENTIFIER_FIXUP_1538.x = _RESERVED_IDENTIFIER_FIXUP_911.x;
    _RESERVED_IDENTIFIER_FIXUP_1538.z = _RESERVED_IDENTIFIER_FIXUP_911.y;
    _RESERVED_IDENTIFIER_FIXUP_1538.w = _RESERVED_IDENTIFIER_FIXUP_911.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_925 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1514.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_926 = mix(_RESERVED_IDENTIFIER_FIXUP_1538.xzw, _RESERVED_IDENTIFIER_FIXUP_910, _RESERVED_IDENTIFIER_FIXUP_925);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1544;
    _RESERVED_IDENTIFIER_FIXUP_1544.x = _RESERVED_IDENTIFIER_FIXUP_926.x;
    _RESERVED_IDENTIFIER_FIXUP_1544.y = _RESERVED_IDENTIFIER_FIXUP_926.y;
    _RESERVED_IDENTIFIER_FIXUP_1544.z = _RESERVED_IDENTIFIER_FIXUP_926.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1550;
    _RESERVED_IDENTIFIER_FIXUP_1550.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1550.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1550.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1757 = vec4(_RESERVED_IDENTIFIER_FIXUP_1756.xxx * _RESERVED_IDENTIFIER_FIXUP_1550.xyz, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_979 = (mix(mix(_RESERVED_IDENTIFIER_FIXUP_1520, _RESERVED_IDENTIFIER_FIXUP_1532, _RESERVED_IDENTIFIER_FIXUP_810.xxxx), _RESERVED_IDENTIFIER_FIXUP_1544, _RESERVED_IDENTIFIER_FIXUP_1538.yyyy).xyz * _RESERVED_IDENTIFIER_FIXUP_1757.www) + _RESERVED_IDENTIFIER_FIXUP_1757.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1567;
    _RESERVED_IDENTIFIER_FIXUP_1567.x = _RESERVED_IDENTIFIER_FIXUP_979.x;
    _RESERVED_IDENTIFIER_FIXUP_1567.y = _RESERVED_IDENTIFIER_FIXUP_979.y;
    _RESERVED_IDENTIFIER_FIXUP_1567.z = _RESERVED_IDENTIFIER_FIXUP_979.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_992 = _RESERVED_IDENTIFIER_FIXUP_1567.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1573;
    _RESERVED_IDENTIFIER_FIXUP_1573.x = _RESERVED_IDENTIFIER_FIXUP_992.x;
    _RESERVED_IDENTIFIER_FIXUP_1573.y = _RESERVED_IDENTIFIER_FIXUP_992.y;
    _RESERVED_IDENTIFIER_FIXUP_1573.z = _RESERVED_IDENTIFIER_FIXUP_992.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1007 = _RESERVED_IDENTIFIER_FIXUP_1573.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1579;
    _RESERVED_IDENTIFIER_FIXUP_1579.x = _RESERVED_IDENTIFIER_FIXUP_1007.x;
    _RESERVED_IDENTIFIER_FIXUP_1579.y = _RESERVED_IDENTIFIER_FIXUP_1007.y;
    _RESERVED_IDENTIFIER_FIXUP_1579.z = _RESERVED_IDENTIFIER_FIXUP_1007.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_651;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_653;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1049 = hdLod5(param_13, param_14);
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1430.xy;
    float param_16 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1049.y = hdLod5(param_15, param_16).x;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1442.xy;
    float param_18 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1049.z = hdLod5(param_17, param_18).x;
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1450.xy;
    float param_20 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1049.w = hdLod5(param_19, param_20).x;
    vec2 param_21 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1205 = hdTex3(param_21);
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1454.xy;
    float param_23 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1210 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_792 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1049 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_22, param_23).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1205.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215 = OptTex0( texcoord0.xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1758 = vec4(_RESERVED_IDENTIFIER_FIXUP_1210, color0.xyz + color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_1215.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1230 = _RESERVED_IDENTIFIER_FIXUP_1758.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1231 = _RESERVED_IDENTIFIER_FIXUP_1228 * _RESERVED_IDENTIFIER_FIXUP_1230;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1674;
    _RESERVED_IDENTIFIER_FIXUP_1674.x = _RESERVED_IDENTIFIER_FIXUP_1231.x;
    _RESERVED_IDENTIFIER_FIXUP_1674.y = _RESERVED_IDENTIFIER_FIXUP_1231.y;
    _RESERVED_IDENTIFIER_FIXUP_1674.z = _RESERVED_IDENTIFIER_FIXUP_1231.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1256 = mix(_RESERVED_IDENTIFIER_FIXUP_1674.xyz, _RESERVED_IDENTIFIER_FIXUP_1228, _RESERVED_IDENTIFIER_FIXUP_860);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1686 = _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_1686.x = _RESERVED_IDENTIFIER_FIXUP_1256.x;
    _RESERVED_IDENTIFIER_FIXUP_1686.y = _RESERVED_IDENTIFIER_FIXUP_1256.y;
    _RESERVED_IDENTIFIER_FIXUP_1686.z = _RESERVED_IDENTIFIER_FIXUP_1256.z;
    vec2 param_24 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1266 = hdTex1(param_24);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1270 = _RESERVED_IDENTIFIER_FIXUP_1266.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1271 = _RESERVED_IDENTIFIER_FIXUP_1230 * _RESERVED_IDENTIFIER_FIXUP_1270;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1692;
    _RESERVED_IDENTIFIER_FIXUP_1692.x = _RESERVED_IDENTIFIER_FIXUP_1271.x;
    _RESERVED_IDENTIFIER_FIXUP_1692.y = _RESERVED_IDENTIFIER_FIXUP_1271.y;
    _RESERVED_IDENTIFIER_FIXUP_1692.z = _RESERVED_IDENTIFIER_FIXUP_1271.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1286 = mix(_RESERVED_IDENTIFIER_FIXUP_1692.xyz, _RESERVED_IDENTIFIER_FIXUP_1270, _RESERVED_IDENTIFIER_FIXUP_890);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1698 = _RESERVED_IDENTIFIER_FIXUP_1266;
    _RESERVED_IDENTIFIER_FIXUP_1698.x = _RESERVED_IDENTIFIER_FIXUP_1286.x;
    _RESERVED_IDENTIFIER_FIXUP_1698.y = _RESERVED_IDENTIFIER_FIXUP_1286.y;
    _RESERVED_IDENTIFIER_FIXUP_1698.z = _RESERVED_IDENTIFIER_FIXUP_1286.z;
    vec2 param_25 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1301 = hdTex2(param_25);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1305 = _RESERVED_IDENTIFIER_FIXUP_1301.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1306 = _RESERVED_IDENTIFIER_FIXUP_1230 * _RESERVED_IDENTIFIER_FIXUP_1305;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1704 = _RESERVED_IDENTIFIER_FIXUP_1205;
    _RESERVED_IDENTIFIER_FIXUP_1704.x = _RESERVED_IDENTIFIER_FIXUP_1306.x;
    _RESERVED_IDENTIFIER_FIXUP_1704.z = _RESERVED_IDENTIFIER_FIXUP_1306.y;
    _RESERVED_IDENTIFIER_FIXUP_1704.w = _RESERVED_IDENTIFIER_FIXUP_1306.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1321 = mix(_RESERVED_IDENTIFIER_FIXUP_1704.xzw, _RESERVED_IDENTIFIER_FIXUP_1305, _RESERVED_IDENTIFIER_FIXUP_925);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1710 = _RESERVED_IDENTIFIER_FIXUP_1301;
    _RESERVED_IDENTIFIER_FIXUP_1710.x = _RESERVED_IDENTIFIER_FIXUP_1321.x;
    _RESERVED_IDENTIFIER_FIXUP_1710.y = _RESERVED_IDENTIFIER_FIXUP_1321.y;
    _RESERVED_IDENTIFIER_FIXUP_1710.z = _RESERVED_IDENTIFIER_FIXUP_1321.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1332 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1686, _RESERVED_IDENTIFIER_FIXUP_1698, _RESERVED_IDENTIFIER_FIXUP_1205.xxxx), _RESERVED_IDENTIFIER_FIXUP_1710, _RESERVED_IDENTIFIER_FIXUP_1704.yyyy);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1337 = _RESERVED_IDENTIFIER_FIXUP_1332.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1716;
    _RESERVED_IDENTIFIER_FIXUP_1716.x = _RESERVED_IDENTIFIER_FIXUP_1337.x;
    _RESERVED_IDENTIFIER_FIXUP_1716.y = _RESERVED_IDENTIFIER_FIXUP_1337.y;
    _RESERVED_IDENTIFIER_FIXUP_1716.z = _RESERVED_IDENTIFIER_FIXUP_1337.z;
    float _RESERVED_IDENTIFIER_FIXUP_1358 = (_RESERVED_IDENTIFIER_FIXUP_1210 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1759 = vec4(_RESERVED_IDENTIFIER_FIXUP_1758.xxx * _RESERVED_IDENTIFIER_FIXUP_1716.xyz, _RESERVED_IDENTIFIER_FIXUP_1358);
    _RESERVED_IDENTIFIER_FIXUP_1759.w = _RESERVED_IDENTIFIER_FIXUP_1358;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1374 = (_RESERVED_IDENTIFIER_FIXUP_1332.xyz * _RESERVED_IDENTIFIER_FIXUP_1759.www) + _RESERVED_IDENTIFIER_FIXUP_1759.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1735;
    _RESERVED_IDENTIFIER_FIXUP_1735.x = _RESERVED_IDENTIFIER_FIXUP_1374.x;
    _RESERVED_IDENTIFIER_FIXUP_1735.y = _RESERVED_IDENTIFIER_FIXUP_1374.y;
    _RESERVED_IDENTIFIER_FIXUP_1735.z = _RESERVED_IDENTIFIER_FIXUP_1374.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1387 = _RESERVED_IDENTIFIER_FIXUP_1735.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1741;
    _RESERVED_IDENTIFIER_FIXUP_1741.x = _RESERVED_IDENTIFIER_FIXUP_1387.x;
    _RESERVED_IDENTIFIER_FIXUP_1741.y = _RESERVED_IDENTIFIER_FIXUP_1387.y;
    _RESERVED_IDENTIFIER_FIXUP_1741.z = _RESERVED_IDENTIFIER_FIXUP_1387.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1741.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_513 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_522;
    if (_RESERVED_IDENTIFIER_FIXUP_513)
    {
        _RESERVED_IDENTIFIER_FIXUP_522 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_522 = _RESERVED_IDENTIFIER_FIXUP_513;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_522)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_559 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1579.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_585 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1413;
    if (_RESERVED_IDENTIFIER_FIXUP_559 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1413 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_559), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_585);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1413 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_585);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1413;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1358);
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB73 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB73.x;
    r2.y = hdB73.y;
    vec2 hdB96 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB96.x;
    r1.y = hdB96.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB120 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB120.x;
    r1.y = hdB120.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB140 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB140.x;
    r1.y = hdB140.y;
    vec4 hdB145 = r2;
    vec2 hdB151 = hdB145.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB151.x;
    r2.y = hdB151.y;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.w = r1.x;
    r0 += (-v5.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.y = r1.x + (-v5.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v5.x), abs(v5.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v4.xy;
    r1 = hdTex3(param_10);
    r2.x = min(r0.x, r1.w);
    r0 = OptTex0( v2.xyz);
    vec3 hdB266 = v0.xyz + v0.xyz;
    r2.y = hdB266.x;
    r2.z = hdB266.y;
    r2.w = hdB266.z;
    vec3 hdB277 = r0.xyz * r2.yzw;
    r3.x = hdB277.x;
    r3.y = hdB277.y;
    r3.z = hdB277.z;
    vec3 hdB288 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB288.x;
    r4.y = hdB288.y;
    r4.z = hdB288.z;
    vec4 hdB297 = r0;
    vec3 hdB305 = mix(r3.xyz, hdB297.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB305.x;
    r0.y = hdB305.y;
    r0.z = hdB305.z;
    vec2 param_11 = v3.xy;
    r3 = hdTex1(param_11);
    vec3 hdB321 = r2.yzw * r3.xyz;
    r5.x = hdB321.x;
    r5.y = hdB321.y;
    r5.z = hdB321.z;
    vec4 hdB330 = r3;
    vec3 hdB336 = mix(r5.xyz, hdB330.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r3.x = hdB336.x;
    r3.y = hdB336.y;
    r3.z = hdB336.z;
    r5 = mix(r0, r3, r1.xxxx);
    vec2 param_12 = v3.wz;
    r0 = hdTex2(param_12);
    vec3 hdB357 = r2.yzw * r0.xyz;
    r1.x = hdB357.x;
    r1.z = hdB357.y;
    r1.w = hdB357.z;
    vec4 hdB366 = r0;
    vec3 hdB372 = mix(r1.xzw, hdB366.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = hdB372.x;
    r0.y = hdB372.y;
    r0.z = hdB372.z;
    r3 = mix(r5, r0, r1.yyyy);
    vec3 hdB388 = r3.www * v1.xyz;
    r0.x = hdB388.x;
    r0.y = hdB388.y;
    r0.z = hdB388.z;
    vec4 hdB397 = r0;
    vec3 hdB399 = r2.xxx * hdB397.xyz;
    r0.x = hdB399.x;
    r0.y = hdB399.y;
    r0.z = hdB399.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB415 = r0;
    vec4 hdB418 = r0;
    vec3 hdB420 = (r3.xyz * hdB415.www) + hdB418.xyz;
    r0.x = hdB420.x;
    r0.y = hdB420.y;
    r0.z = hdB420.z;
    vec4 hdB427 = r0;
    vec3 hdB434 = hdB427.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB434.x;
    r0.y = hdB434.y;
    r0.z = hdB434.z;
    vec3 hdB449 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB449.x;
    oC0.y = hdB449.y;
    oC0.z = hdB449.z;
    oC0.w = 1.0;
    bool hdB461 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB469;
    if (hdB461)
    {
        hdB469 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB469 = hdB461;
    }
    if (hdB469)
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
    bool _1493 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1503;
    if (_1493)
    {
        _1503 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1503 = _1493;
    }
    if (_1503)
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
        bool _1528 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1543;
        if (!_1528)
        {
            _1543 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1543 = _1528;
        }
        if (_1543)
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
