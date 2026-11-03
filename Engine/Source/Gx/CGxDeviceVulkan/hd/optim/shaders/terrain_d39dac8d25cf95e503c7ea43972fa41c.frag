#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1791;
vec4 _RESERVED_IDENTIFIER_FIXUP_1792;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _52 = hdOverride >= 0;
    bool _71;
    if (_52)
    {
        _71 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _71 = _52;
    }
    vec4 _72;
    if (_71)
    {
        _72 = vec4(float(hdOverride));
    }
    else
    {
        _72 = value;
    }
    return _72;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _89 = hdOverride >= 0;
    bool _99;
    if (_89)
    {
        _99 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _99 = _89;
    }
    vec4 _100;
    if (_99)
    {
        _100 = vec4(float(hdOverride));
    }
    else
    {
        _100 = value;
    }
    return _100;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _117 = hdOverride >= 0;
    bool _127;
    if (_117)
    {
        _127 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _127 = _117;
    }
    vec4 _128;
    if (_127)
    {
        _128 = vec4(float(hdOverride));
    }
    else
    {
        _128 = value;
    }
    return _128;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _145 = hdOverride >= 0;
    bool _155;
    if (_145)
    {
        _155 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _155 = _145;
    }
    vec4 _156;
    if (_155)
    {
        _156 = vec4(float(hdOverride));
    }
    else
    {
        _156 = value;
    }
    return _156;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _174 = hdOverride >= 0;
    bool _184;
    if (_174)
    {
        _184 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _184 = _174;
    }
    vec4 _185;
    if (_184)
    {
        _185 = vec4(float(hdOverride));
    }
    else
    {
        _185 = value;
    }
    return _185;
}

void HDActual()
{
    vec3 _RESERVED_IDENTIFIER_FIXUP_662 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1791).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_665 = _RESERVED_IDENTIFIER_FIXUP_662 + _RESERVED_IDENTIFIER_FIXUP_662;
    float _RESERVED_IDENTIFIER_FIXUP_667 = _RESERVED_IDENTIFIER_FIXUP_665.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1460;
    _RESERVED_IDENTIFIER_FIXUP_1460.x = _RESERVED_IDENTIFIER_FIXUP_667;
    _RESERVED_IDENTIFIER_FIXUP_1460.y = _RESERVED_IDENTIFIER_FIXUP_665.y;
    _RESERVED_IDENTIFIER_FIXUP_1460.z = _RESERVED_IDENTIFIER_FIXUP_665.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_673 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_676 = _RESERVED_IDENTIFIER_FIXUP_673 * _RESERVED_IDENTIFIER_FIXUP_1460.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1466;
    _RESERVED_IDENTIFIER_FIXUP_1466.x = _RESERVED_IDENTIFIER_FIXUP_676.x;
    _RESERVED_IDENTIFIER_FIXUP_1466.y = _RESERVED_IDENTIFIER_FIXUP_676.y;
    _RESERVED_IDENTIFIER_FIXUP_1466.z = _RESERVED_IDENTIFIER_FIXUP_676.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_686 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1472;
    _RESERVED_IDENTIFIER_FIXUP_1472.x = _RESERVED_IDENTIFIER_FIXUP_686.x;
    _RESERVED_IDENTIFIER_FIXUP_1472.y = _RESERVED_IDENTIFIER_FIXUP_686.y;
    _RESERVED_IDENTIFIER_FIXUP_1472.z = _RESERVED_IDENTIFIER_FIXUP_686.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_700 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1472.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_701 = mix(_RESERVED_IDENTIFIER_FIXUP_1466.xyz, _RESERVED_IDENTIFIER_FIXUP_673, _RESERVED_IDENTIFIER_FIXUP_700);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1478;
    _RESERVED_IDENTIFIER_FIXUP_1478.x = _RESERVED_IDENTIFIER_FIXUP_701.x;
    _RESERVED_IDENTIFIER_FIXUP_1478.y = _RESERVED_IDENTIFIER_FIXUP_701.y;
    _RESERVED_IDENTIFIER_FIXUP_1478.z = _RESERVED_IDENTIFIER_FIXUP_701.z;
    vec2 param_1 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_711 = hdTex3(param_1);
    vec2 param_2 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_723 = hdTex0(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_724 = _RESERVED_IDENTIFIER_FIXUP_1460.xyz * _RESERVED_IDENTIFIER_FIXUP_723;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1484;
    _RESERVED_IDENTIFIER_FIXUP_1484.x = _RESERVED_IDENTIFIER_FIXUP_724.x;
    _RESERVED_IDENTIFIER_FIXUP_1484.y = _RESERVED_IDENTIFIER_FIXUP_724.y;
    _RESERVED_IDENTIFIER_FIXUP_1484.z = _RESERVED_IDENTIFIER_FIXUP_724.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_738 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1472.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_739 = mix(_RESERVED_IDENTIFIER_FIXUP_1484.xyz, _RESERVED_IDENTIFIER_FIXUP_723, _RESERVED_IDENTIFIER_FIXUP_738);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1490;
    _RESERVED_IDENTIFIER_FIXUP_1490.x = _RESERVED_IDENTIFIER_FIXUP_739.x;
    _RESERVED_IDENTIFIER_FIXUP_1490.y = _RESERVED_IDENTIFIER_FIXUP_739.y;
    _RESERVED_IDENTIFIER_FIXUP_1490.z = _RESERVED_IDENTIFIER_FIXUP_739.z;
    float _RESERVED_IDENTIFIER_FIXUP_749 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_711.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1793 = vec4(_RESERVED_IDENTIFIER_FIXUP_667, _RESERVED_IDENTIFIER_FIXUP_665.yz, _RESERVED_IDENTIFIER_FIXUP_749);
    _RESERVED_IDENTIFIER_FIXUP_1793.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_749;
    vec2 param_3 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_769 = hdTex2(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_770 = _RESERVED_IDENTIFIER_FIXUP_1793.xyz * _RESERVED_IDENTIFIER_FIXUP_769;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1501;
    _RESERVED_IDENTIFIER_FIXUP_1501.x = _RESERVED_IDENTIFIER_FIXUP_770.x;
    _RESERVED_IDENTIFIER_FIXUP_1501.y = _RESERVED_IDENTIFIER_FIXUP_770.y;
    _RESERVED_IDENTIFIER_FIXUP_1501.z = _RESERVED_IDENTIFIER_FIXUP_770.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_784 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1472.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_785 = mix(_RESERVED_IDENTIFIER_FIXUP_1501.xyz, _RESERVED_IDENTIFIER_FIXUP_769, _RESERVED_IDENTIFIER_FIXUP_784);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1507;
    _RESERVED_IDENTIFIER_FIXUP_1507.x = _RESERVED_IDENTIFIER_FIXUP_785.x;
    _RESERVED_IDENTIFIER_FIXUP_1507.y = _RESERVED_IDENTIFIER_FIXUP_785.y;
    _RESERVED_IDENTIFIER_FIXUP_1507.z = _RESERVED_IDENTIFIER_FIXUP_785.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_797 = (_RESERVED_IDENTIFIER_FIXUP_1507 * _RESERVED_IDENTIFIER_FIXUP_711.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1490 * _RESERVED_IDENTIFIER_FIXUP_1793.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1478 * _RESERVED_IDENTIFIER_FIXUP_711.xxxx));
    vec4 _RESERVED_IDENTIFIER_FIXUP_812 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_815 = _RESERVED_IDENTIFIER_FIXUP_812.xy;
    float _RESERVED_IDENTIFIER_FIXUP_817 = _RESERVED_IDENTIFIER_FIXUP_812.w;
    vec2 _RESERVED_IDENTIFIER_FIXUP_821 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_825 = _RESERVED_IDENTIFIER_FIXUP_821.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1522;
    _RESERVED_IDENTIFIER_FIXUP_1522.w = _RESERVED_IDENTIFIER_FIXUP_825;
    vec2 _RESERVED_IDENTIFIER_FIXUP_829 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_831 = _RESERVED_IDENTIFIER_FIXUP_829.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1524 = _RESERVED_IDENTIFIER_FIXUP_711;
    _RESERVED_IDENTIFIER_FIXUP_1524.x = _RESERVED_IDENTIFIER_FIXUP_831;
    float _RESERVED_IDENTIFIER_FIXUP_833 = _RESERVED_IDENTIFIER_FIXUP_829.y;
    _RESERVED_IDENTIFIER_FIXUP_1524.y = _RESERVED_IDENTIFIER_FIXUP_833;
    vec2 _RESERVED_IDENTIFIER_FIXUP_839 = _RESERVED_IDENTIFIER_FIXUP_1524.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1528 = _RESERVED_IDENTIFIER_FIXUP_1522;
    _RESERVED_IDENTIFIER_FIXUP_1528.x = _RESERVED_IDENTIFIER_FIXUP_839.x;
    _RESERVED_IDENTIFIER_FIXUP_1528.y = _RESERVED_IDENTIFIER_FIXUP_839.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_815;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_817;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1528.xy;
    float param_7 = _RESERVED_IDENTIFIER_FIXUP_825;
    float _RESERVED_IDENTIFIER_FIXUP_854 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_797.w = _RESERVED_IDENTIFIER_FIXUP_854;
    vec2 _RESERVED_IDENTIFIER_FIXUP_868 = _RESERVED_IDENTIFIER_FIXUP_1524.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1541 = _RESERVED_IDENTIFIER_FIXUP_1522;
    _RESERVED_IDENTIFIER_FIXUP_1541.x = _RESERVED_IDENTIFIER_FIXUP_868.x;
    _RESERVED_IDENTIFIER_FIXUP_1541.y = _RESERVED_IDENTIFIER_FIXUP_868.y;
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1541.xy;
    float param_9 = _RESERVED_IDENTIFIER_FIXUP_825;
    float _RESERVED_IDENTIFIER_FIXUP_883 = _RESERVED_IDENTIFIER_FIXUP_854 + hdLod5(param_8, param_9).x;
    _RESERVED_IDENTIFIER_FIXUP_797.w = _RESERVED_IDENTIFIER_FIXUP_883;
    vec2 _RESERVED_IDENTIFIER_FIXUP_890 = _RESERVED_IDENTIFIER_FIXUP_1524.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1550;
    _RESERVED_IDENTIFIER_FIXUP_1550.x = _RESERVED_IDENTIFIER_FIXUP_890.x;
    _RESERVED_IDENTIFIER_FIXUP_1550.y = _RESERVED_IDENTIFIER_FIXUP_890.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_900 = _RESERVED_IDENTIFIER_FIXUP_1524.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1554;
    _RESERVED_IDENTIFIER_FIXUP_1554.x = _RESERVED_IDENTIFIER_FIXUP_900.x;
    _RESERVED_IDENTIFIER_FIXUP_1554.y = _RESERVED_IDENTIFIER_FIXUP_900.y;
    _RESERVED_IDENTIFIER_FIXUP_1550.w = _RESERVED_IDENTIFIER_FIXUP_825;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1550.xy;
    float param_11 = _RESERVED_IDENTIFIER_FIXUP_825;
    float _RESERVED_IDENTIFIER_FIXUP_922 = _RESERVED_IDENTIFIER_FIXUP_883 + hdLod5(param_10, param_11).x;
    _RESERVED_IDENTIFIER_FIXUP_797.w = _RESERVED_IDENTIFIER_FIXUP_922;
    _RESERVED_IDENTIFIER_FIXUP_1554.w = _RESERVED_IDENTIFIER_FIXUP_825;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1554.xy;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_825;
    float _RESERVED_IDENTIFIER_FIXUP_941 = _RESERVED_IDENTIFIER_FIXUP_922 + hdLod5(param_12, param_13).x;
    _RESERVED_IDENTIFIER_FIXUP_797.w = _RESERVED_IDENTIFIER_FIXUP_941;
    float _RESERVED_IDENTIFIER_FIXUP_946 = (_RESERVED_IDENTIFIER_FIXUP_941 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_797.w = _RESERVED_IDENTIFIER_FIXUP_946;
    float _RESERVED_IDENTIFIER_FIXUP_954 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1794 = vec4(0.0, 0.0, 0.0, _RESERVED_IDENTIFIER_FIXUP_954);
    float _RESERVED_IDENTIFIER_FIXUP_960 = clamp((_RESERVED_IDENTIFIER_FIXUP_954 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1794.w = _RESERVED_IDENTIFIER_FIXUP_960;
    float _RESERVED_IDENTIFIER_FIXUP_967 = (_RESERVED_IDENTIFIER_FIXUP_960 * _RESERVED_IDENTIFIER_FIXUP_946) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_797.w = _RESERVED_IDENTIFIER_FIXUP_967;
    _RESERVED_IDENTIFIER_FIXUP_1794.w = min(_RESERVED_IDENTIFIER_FIXUP_967, _RESERVED_IDENTIFIER_FIXUP_711.w);
    vec3 _RESERVED_IDENTIFIER_FIXUP_979 = _RESERVED_IDENTIFIER_FIXUP_1794.xyz * _RESERVED_IDENTIFIER_FIXUP_1794.www;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1594;
    _RESERVED_IDENTIFIER_FIXUP_1594.x = _RESERVED_IDENTIFIER_FIXUP_979.x;
    _RESERVED_IDENTIFIER_FIXUP_1594.y = _RESERVED_IDENTIFIER_FIXUP_979.y;
    _RESERVED_IDENTIFIER_FIXUP_1594.z = _RESERVED_IDENTIFIER_FIXUP_979.z;
    _RESERVED_IDENTIFIER_FIXUP_797.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1005 = (_RESERVED_IDENTIFIER_FIXUP_797.xyz * _RESERVED_IDENTIFIER_FIXUP_797.www) + _RESERVED_IDENTIFIER_FIXUP_1594.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1605;
    _RESERVED_IDENTIFIER_FIXUP_1605.x = _RESERVED_IDENTIFIER_FIXUP_1005.x;
    _RESERVED_IDENTIFIER_FIXUP_1605.y = _RESERVED_IDENTIFIER_FIXUP_1005.y;
    _RESERVED_IDENTIFIER_FIXUP_1605.z = _RESERVED_IDENTIFIER_FIXUP_1005.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1018 = _RESERVED_IDENTIFIER_FIXUP_1605.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1611;
    _RESERVED_IDENTIFIER_FIXUP_1611.x = _RESERVED_IDENTIFIER_FIXUP_1018.x;
    _RESERVED_IDENTIFIER_FIXUP_1611.y = _RESERVED_IDENTIFIER_FIXUP_1018.y;
    _RESERVED_IDENTIFIER_FIXUP_1611.z = _RESERVED_IDENTIFIER_FIXUP_1018.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1033 = _RESERVED_IDENTIFIER_FIXUP_1611.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1617;
    _RESERVED_IDENTIFIER_FIXUP_1617.x = _RESERVED_IDENTIFIER_FIXUP_1033.x;
    _RESERVED_IDENTIFIER_FIXUP_1617.y = _RESERVED_IDENTIFIER_FIXUP_1033.y;
    _RESERVED_IDENTIFIER_FIXUP_1617.z = _RESERVED_IDENTIFIER_FIXUP_1033.z;
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1069 = hdTex1(param_14);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1074 = color0.xyz + color0.xyz;
    float _RESERVED_IDENTIFIER_FIXUP_1076 = _RESERVED_IDENTIFIER_FIXUP_1074.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1625;
    _RESERVED_IDENTIFIER_FIXUP_1625.x = _RESERVED_IDENTIFIER_FIXUP_1076;
    _RESERVED_IDENTIFIER_FIXUP_1625.y = _RESERVED_IDENTIFIER_FIXUP_1074.y;
    _RESERVED_IDENTIFIER_FIXUP_1625.z = _RESERVED_IDENTIFIER_FIXUP_1074.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1082 = _RESERVED_IDENTIFIER_FIXUP_1069.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1085 = _RESERVED_IDENTIFIER_FIXUP_1082 * _RESERVED_IDENTIFIER_FIXUP_1625.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1631;
    _RESERVED_IDENTIFIER_FIXUP_1631.x = _RESERVED_IDENTIFIER_FIXUP_1085.x;
    _RESERVED_IDENTIFIER_FIXUP_1631.y = _RESERVED_IDENTIFIER_FIXUP_1085.y;
    _RESERVED_IDENTIFIER_FIXUP_1631.z = _RESERVED_IDENTIFIER_FIXUP_1085.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1110 = mix(_RESERVED_IDENTIFIER_FIXUP_1631.xyz, _RESERVED_IDENTIFIER_FIXUP_1082, _RESERVED_IDENTIFIER_FIXUP_700);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1643 = _RESERVED_IDENTIFIER_FIXUP_1069;
    _RESERVED_IDENTIFIER_FIXUP_1643.x = _RESERVED_IDENTIFIER_FIXUP_1110.x;
    _RESERVED_IDENTIFIER_FIXUP_1643.y = _RESERVED_IDENTIFIER_FIXUP_1110.y;
    _RESERVED_IDENTIFIER_FIXUP_1643.z = _RESERVED_IDENTIFIER_FIXUP_1110.z;
    vec2 param_15 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1120 = hdTex3(param_15);
    vec2 param_16 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1128 = hdTex0(param_16);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1132 = _RESERVED_IDENTIFIER_FIXUP_1128.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1133 = _RESERVED_IDENTIFIER_FIXUP_1625.xyz * _RESERVED_IDENTIFIER_FIXUP_1132;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1649;
    _RESERVED_IDENTIFIER_FIXUP_1649.x = _RESERVED_IDENTIFIER_FIXUP_1133.x;
    _RESERVED_IDENTIFIER_FIXUP_1649.y = _RESERVED_IDENTIFIER_FIXUP_1133.y;
    _RESERVED_IDENTIFIER_FIXUP_1649.z = _RESERVED_IDENTIFIER_FIXUP_1133.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1148 = mix(_RESERVED_IDENTIFIER_FIXUP_1649.xyz, _RESERVED_IDENTIFIER_FIXUP_1132, _RESERVED_IDENTIFIER_FIXUP_738);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1655 = _RESERVED_IDENTIFIER_FIXUP_1128;
    _RESERVED_IDENTIFIER_FIXUP_1655.x = _RESERVED_IDENTIFIER_FIXUP_1148.x;
    _RESERVED_IDENTIFIER_FIXUP_1655.y = _RESERVED_IDENTIFIER_FIXUP_1148.y;
    _RESERVED_IDENTIFIER_FIXUP_1655.z = _RESERVED_IDENTIFIER_FIXUP_1148.z;
    float _RESERVED_IDENTIFIER_FIXUP_1158 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1120.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1795 = vec4(_RESERVED_IDENTIFIER_FIXUP_1076, _RESERVED_IDENTIFIER_FIXUP_1074.yz, _RESERVED_IDENTIFIER_FIXUP_1158);
    _RESERVED_IDENTIFIER_FIXUP_1795.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1158;
    vec2 param_17 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1174 = hdTex2(param_17);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1178 = _RESERVED_IDENTIFIER_FIXUP_1174.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1179 = _RESERVED_IDENTIFIER_FIXUP_1795.xyz * _RESERVED_IDENTIFIER_FIXUP_1178;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1666;
    _RESERVED_IDENTIFIER_FIXUP_1666.x = _RESERVED_IDENTIFIER_FIXUP_1179.x;
    _RESERVED_IDENTIFIER_FIXUP_1666.y = _RESERVED_IDENTIFIER_FIXUP_1179.y;
    _RESERVED_IDENTIFIER_FIXUP_1666.z = _RESERVED_IDENTIFIER_FIXUP_1179.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1194 = mix(_RESERVED_IDENTIFIER_FIXUP_1666.xyz, _RESERVED_IDENTIFIER_FIXUP_1178, _RESERVED_IDENTIFIER_FIXUP_784);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1672 = _RESERVED_IDENTIFIER_FIXUP_1174;
    _RESERVED_IDENTIFIER_FIXUP_1672.x = _RESERVED_IDENTIFIER_FIXUP_1194.x;
    _RESERVED_IDENTIFIER_FIXUP_1672.y = _RESERVED_IDENTIFIER_FIXUP_1194.y;
    _RESERVED_IDENTIFIER_FIXUP_1672.z = _RESERVED_IDENTIFIER_FIXUP_1194.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1206 = (_RESERVED_IDENTIFIER_FIXUP_1672 * _RESERVED_IDENTIFIER_FIXUP_1120.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1655 * _RESERVED_IDENTIFIER_FIXUP_1795.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1643 * _RESERVED_IDENTIFIER_FIXUP_1120.xxxx));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1689 = _RESERVED_IDENTIFIER_FIXUP_1120;
    _RESERVED_IDENTIFIER_FIXUP_1689.x = _RESERVED_IDENTIFIER_FIXUP_831;
    _RESERVED_IDENTIFIER_FIXUP_1689.y = _RESERVED_IDENTIFIER_FIXUP_833;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1248 = _RESERVED_IDENTIFIER_FIXUP_1689.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1693 = _RESERVED_IDENTIFIER_FIXUP_1522;
    _RESERVED_IDENTIFIER_FIXUP_1693.x = _RESERVED_IDENTIFIER_FIXUP_1248.x;
    _RESERVED_IDENTIFIER_FIXUP_1693.y = _RESERVED_IDENTIFIER_FIXUP_1248.y;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_815;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_817;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1693.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_825;
    float _RESERVED_IDENTIFIER_FIXUP_1263 = hdLod5(param_18, param_19).x + hdLod5(param_20, param_21).x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1700 = _RESERVED_IDENTIFIER_FIXUP_1206;
    _RESERVED_IDENTIFIER_FIXUP_1700.w = _RESERVED_IDENTIFIER_FIXUP_1263;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1277 = _RESERVED_IDENTIFIER_FIXUP_1689.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1706 = _RESERVED_IDENTIFIER_FIXUP_1522;
    _RESERVED_IDENTIFIER_FIXUP_1706.x = _RESERVED_IDENTIFIER_FIXUP_1277.x;
    _RESERVED_IDENTIFIER_FIXUP_1706.y = _RESERVED_IDENTIFIER_FIXUP_1277.y;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1706.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_825;
    float _RESERVED_IDENTIFIER_FIXUP_1292 = _RESERVED_IDENTIFIER_FIXUP_1263 + hdLod5(param_22, param_23).x;
    _RESERVED_IDENTIFIER_FIXUP_1700.w = _RESERVED_IDENTIFIER_FIXUP_1292;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_1689.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1715;
    _RESERVED_IDENTIFIER_FIXUP_1715.x = _RESERVED_IDENTIFIER_FIXUP_1299.x;
    _RESERVED_IDENTIFIER_FIXUP_1715.y = _RESERVED_IDENTIFIER_FIXUP_1299.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_1689.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1719;
    _RESERVED_IDENTIFIER_FIXUP_1719.x = _RESERVED_IDENTIFIER_FIXUP_1309.x;
    _RESERVED_IDENTIFIER_FIXUP_1719.y = _RESERVED_IDENTIFIER_FIXUP_1309.y;
    _RESERVED_IDENTIFIER_FIXUP_1715.w = _RESERVED_IDENTIFIER_FIXUP_825;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1715.xy;
    float param_25 = _RESERVED_IDENTIFIER_FIXUP_825;
    float _RESERVED_IDENTIFIER_FIXUP_1331 = _RESERVED_IDENTIFIER_FIXUP_1292 + hdLod5(param_24, param_25).x;
    _RESERVED_IDENTIFIER_FIXUP_1700.w = _RESERVED_IDENTIFIER_FIXUP_1331;
    _RESERVED_IDENTIFIER_FIXUP_1719.w = _RESERVED_IDENTIFIER_FIXUP_825;
    vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1719.xy;
    float param_27 = _RESERVED_IDENTIFIER_FIXUP_825;
    float _RESERVED_IDENTIFIER_FIXUP_1350 = _RESERVED_IDENTIFIER_FIXUP_1331 + hdLod5(param_26, param_27).x;
    _RESERVED_IDENTIFIER_FIXUP_1700.w = _RESERVED_IDENTIFIER_FIXUP_1350;
    float _RESERVED_IDENTIFIER_FIXUP_1355 = (_RESERVED_IDENTIFIER_FIXUP_1350 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1700.w = _RESERVED_IDENTIFIER_FIXUP_1355;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1796 = vec4(_RESERVED_IDENTIFIER_FIXUP_1206.www * color1.xyz, _RESERVED_IDENTIFIER_FIXUP_954);
    float _RESERVED_IDENTIFIER_FIXUP_1369 = clamp((_RESERVED_IDENTIFIER_FIXUP_954 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1796.w = _RESERVED_IDENTIFIER_FIXUP_1369;
    float _RESERVED_IDENTIFIER_FIXUP_1376 = (_RESERVED_IDENTIFIER_FIXUP_1369 * _RESERVED_IDENTIFIER_FIXUP_1355) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1700.w = _RESERVED_IDENTIFIER_FIXUP_1376;
    float _RESERVED_IDENTIFIER_FIXUP_1382 = min(_RESERVED_IDENTIFIER_FIXUP_1376, _RESERVED_IDENTIFIER_FIXUP_1120.w);
    _RESERVED_IDENTIFIER_FIXUP_1796.w = _RESERVED_IDENTIFIER_FIXUP_1382;
    float _RESERVED_IDENTIFIER_FIXUP_1398 = (_RESERVED_IDENTIFIER_FIXUP_1382 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1700.w = _RESERVED_IDENTIFIER_FIXUP_1398;
    _RESERVED_IDENTIFIER_FIXUP_1700.w = _RESERVED_IDENTIFIER_FIXUP_1398;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1414 = (_RESERVED_IDENTIFIER_FIXUP_1700.xyz * _RESERVED_IDENTIFIER_FIXUP_1700.www) + vec4(_RESERVED_IDENTIFIER_FIXUP_1796.xyz * _RESERVED_IDENTIFIER_FIXUP_1796.www, _RESERVED_IDENTIFIER_FIXUP_1382).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1772;
    _RESERVED_IDENTIFIER_FIXUP_1772.x = _RESERVED_IDENTIFIER_FIXUP_1414.x;
    _RESERVED_IDENTIFIER_FIXUP_1772.y = _RESERVED_IDENTIFIER_FIXUP_1414.y;
    _RESERVED_IDENTIFIER_FIXUP_1772.z = _RESERVED_IDENTIFIER_FIXUP_1414.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1427 = _RESERVED_IDENTIFIER_FIXUP_1772.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1778;
    _RESERVED_IDENTIFIER_FIXUP_1778.x = _RESERVED_IDENTIFIER_FIXUP_1427.x;
    _RESERVED_IDENTIFIER_FIXUP_1778.y = _RESERVED_IDENTIFIER_FIXUP_1427.y;
    _RESERVED_IDENTIFIER_FIXUP_1778.z = _RESERVED_IDENTIFIER_FIXUP_1427.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1778.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_524 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_533;
    if (_RESERVED_IDENTIFIER_FIXUP_524)
    {
        _RESERVED_IDENTIFIER_FIXUP_533 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_533 = _RESERVED_IDENTIFIER_FIXUP_524;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_533)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_570 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1617.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_596 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1453;
    if (_RESERVED_IDENTIFIER_FIXUP_570 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1453 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_570), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_596);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1453 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_596);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1453;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1398);
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
    vec2 param = v3.xy;
    r0 = hdTex1(param);
    vec3 hdB57 = v0.xyz + v0.xyz;
    r1.x = hdB57.x;
    r1.y = hdB57.y;
    r1.z = hdB57.z;
    vec3 hdB73 = r0.xyz * r1.xyz;
    r2.x = hdB73.x;
    r2.y = hdB73.y;
    r2.z = hdB73.z;
    vec3 hdB94 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r3.x = hdB94.x;
    r3.y = hdB94.y;
    r3.z = hdB94.z;
    vec4 hdB103 = r0;
    vec3 hdB112 = mix(r2.xyz, hdB103.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r0.x = hdB112.x;
    r0.y = hdB112.y;
    r0.z = hdB112.z;
    vec2 param_1 = v4.xy;
    r2 = hdTex3(param_1);
    r0 *= r2.xxxx;
    vec2 param_2 = v2.xy;
    r4 = hdTex0(param_2);
    vec3 hdB137 = r1.xyz * r4.xyz;
    r5.x = hdB137.x;
    r5.y = hdB137.y;
    r5.z = hdB137.z;
    vec4 hdB146 = r4;
    vec3 hdB152 = mix(r5.xyz, hdB146.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r4.x = hdB152.x;
    r4.y = hdB152.y;
    r4.z = hdB152.z;
    r1.w = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r1.w = (-r1.w) + 1.0;
    r0 = (r4 * r1.wwww) + r0;
    vec2 param_3 = v3.wz;
    r4 = hdTex2(param_3);
    vec4 hdB183 = r1;
    vec3 hdB187 = hdB183.xyz * r4.xyz;
    r1.x = hdB187.x;
    r1.y = hdB187.y;
    r1.z = hdB187.z;
    vec4 hdB196 = r4;
    vec3 hdB202 = mix(r1.xyz, hdB196.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r4.x = hdB202.x;
    r4.y = hdB202.y;
    r4.z = hdB202.z;
    r0 = (r4 * r2.yyyy) + r0;
    vec3 hdB219 = r0.www * v1.xyz;
    r1.x = hdB219.x;
    r1.y = hdB219.y;
    r1.z = hdB219.z;
    r3 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param_4 = r3.xy;
    float param_5 = r3.w;
    r3 = hdLod5(param_4, param_5);
    vec2 hdB243 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB243.x;
    r4.w = hdB243.y;
    vec2 hdB252 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB252.x;
    r2.y = hdB252.y;
    vec2 hdB263 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = hdB263.x;
    r4.y = hdB263.y;
    vec2 param_6 = r4.xy;
    float param_7 = r4.w;
    r4 = hdLod5(param_6, param_7);
    r0.w = r3.x + r4.x;
    vec2 hdB282 = vec2(1.0, 0.0) * v5.zx;
    r3.z = hdB282.x;
    r3.w = hdB282.y;
    vec2 hdB293 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r3.x = hdB293.x;
    r3.y = hdB293.y;
    vec2 param_8 = r3.xy;
    float param_9 = r3.w;
    r3 = hdLod5(param_8, param_9);
    r0.w += r3.x;
    vec2 hdB316 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r3.x = hdB316.x;
    r3.y = hdB316.y;
    vec2 hdB327 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r4.x = hdB327.x;
    r4.y = hdB327.y;
    vec2 hdB334 = vec2(1.0, 0.0) * v5.zx;
    r3.z = hdB334.x;
    r3.w = hdB334.y;
    vec2 param_10 = r3.xy;
    float param_11 = r3.w;
    r3 = hdLod5(param_10, param_11);
    r0.w += r3.x;
    vec2 hdB353 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB353.x;
    r4.w = hdB353.y;
    vec2 param_12 = r4.xy;
    float param_13 = r4.w;
    r3 = hdLod5(param_12, param_13);
    r0.w += r3.x;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.w = max(abs(v5.x), abs(v5.y));
    r1.w = clamp((r1.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.w * r0.w) + 1.0;
    r1.w = min(r0.w, r2.w);
    vec4 hdB406 = r1;
    vec4 hdB408 = r1;
    vec3 hdB410 = hdB406.xyz * hdB408.www;
    r1.x = hdB410.x;
    r1.y = hdB410.y;
    r1.z = hdB410.z;
    r0.w = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB424 = r0;
    vec4 hdB426 = r0;
    vec3 hdB431 = (hdB424.xyz * hdB426.www) + r1.xyz;
    r0.x = hdB431.x;
    r0.y = hdB431.y;
    r0.z = hdB431.z;
    vec4 hdB438 = r0;
    vec3 hdB445 = hdB438.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB445.x;
    r0.y = hdB445.y;
    r0.z = hdB445.z;
    vec3 hdB460 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB460.x;
    oC0.y = hdB460.y;
    oC0.z = hdB460.z;
    oC0.w = 1.0;
    bool hdB472 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB480;
    if (hdB472)
    {
        hdB480 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB480 = hdB472;
    }
    if (hdB480)
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
    bool _1742 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1752;
    if (_1742)
    {
        _1752 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1752 = _1742;
    }
    if (_1752)
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
        bool _1777 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1792;
        if (!_1777)
        {
            _1792 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1792 = _1777;
        }
        if (_1792)
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
