#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
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
float _RESERVED_IDENTIFIER_FIXUP_1207;
vec4 _RESERVED_IDENTIFIER_FIXUP_1208;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
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

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _114 = hdOverride >= 0;
    bool _123;
    if (_114)
    {
        _123 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _123 = _114;
    }
    vec4 _124;
    if (_123)
    {
        _124 = vec4(float(hdOverride));
    }
    else
    {
        _124 = value;
    }
    return _124;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _141 = hdOverride >= 0;
    bool _151;
    if (_141)
    {
        _151 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _151 = _141;
    }
    vec4 _152;
    if (_151)
    {
        _152 = vec4(float(hdOverride));
    }
    else
    {
        _152 = value;
    }
    return _152;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _169 = hdOverride >= 0;
    bool _179;
    if (_169)
    {
        _179 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _179 = _169;
    }
    vec4 _180;
    if (_179)
    {
        _180 = vec4(float(hdOverride));
    }
    else
    {
        _180 = value;
    }
    return _180;
}

void HDActual()
{
    vec3 _RESERVED_IDENTIFIER_FIXUP_508 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1207).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_511 = _RESERVED_IDENTIFIER_FIXUP_508 + _RESERVED_IDENTIFIER_FIXUP_508;
    float _RESERVED_IDENTIFIER_FIXUP_513 = _RESERVED_IDENTIFIER_FIXUP_511.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1020;
    _RESERVED_IDENTIFIER_FIXUP_1020.x = _RESERVED_IDENTIFIER_FIXUP_513;
    _RESERVED_IDENTIFIER_FIXUP_1020.y = _RESERVED_IDENTIFIER_FIXUP_511.y;
    _RESERVED_IDENTIFIER_FIXUP_1020.z = _RESERVED_IDENTIFIER_FIXUP_511.z;
    vec2 param = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_519 = hdTex0(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_522 = _RESERVED_IDENTIFIER_FIXUP_519 * _RESERVED_IDENTIFIER_FIXUP_1020.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1026;
    _RESERVED_IDENTIFIER_FIXUP_1026.x = _RESERVED_IDENTIFIER_FIXUP_522.x;
    _RESERVED_IDENTIFIER_FIXUP_1026.y = _RESERVED_IDENTIFIER_FIXUP_522.y;
    _RESERVED_IDENTIFIER_FIXUP_1026.z = _RESERVED_IDENTIFIER_FIXUP_522.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_531 = abs(optRegs.rows[optTile*82u+uint(1)]);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_539 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_531.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_540 = mix(_RESERVED_IDENTIFIER_FIXUP_1026.xyz, _RESERVED_IDENTIFIER_FIXUP_519, _RESERVED_IDENTIFIER_FIXUP_539);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1032;
    _RESERVED_IDENTIFIER_FIXUP_1032.x = _RESERVED_IDENTIFIER_FIXUP_540.x;
    _RESERVED_IDENTIFIER_FIXUP_1032.y = _RESERVED_IDENTIFIER_FIXUP_540.y;
    _RESERVED_IDENTIFIER_FIXUP_1032.z = _RESERVED_IDENTIFIER_FIXUP_540.z;
    vec2 param_1 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_554 = hdTex1(param_1).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_555 = _RESERVED_IDENTIFIER_FIXUP_1020.xyz * _RESERVED_IDENTIFIER_FIXUP_554;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1038;
    _RESERVED_IDENTIFIER_FIXUP_1038.x = _RESERVED_IDENTIFIER_FIXUP_555.x;
    _RESERVED_IDENTIFIER_FIXUP_1038.y = _RESERVED_IDENTIFIER_FIXUP_555.y;
    _RESERVED_IDENTIFIER_FIXUP_1038.z = _RESERVED_IDENTIFIER_FIXUP_555.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_569 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_531.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_570 = mix(_RESERVED_IDENTIFIER_FIXUP_1038.xyz, _RESERVED_IDENTIFIER_FIXUP_554, _RESERVED_IDENTIFIER_FIXUP_569);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1044;
    _RESERVED_IDENTIFIER_FIXUP_1044.x = _RESERVED_IDENTIFIER_FIXUP_570.x;
    _RESERVED_IDENTIFIER_FIXUP_1044.y = _RESERVED_IDENTIFIER_FIXUP_570.y;
    _RESERVED_IDENTIFIER_FIXUP_1044.z = _RESERVED_IDENTIFIER_FIXUP_570.z;
    vec2 param_2 = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_580 = hdTex4(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_588 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_580.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1209 = vec4(_RESERVED_IDENTIFIER_FIXUP_513, _RESERVED_IDENTIFIER_FIXUP_511.yz, _RESERVED_IDENTIFIER_FIXUP_588);
    _RESERVED_IDENTIFIER_FIXUP_1209.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_588;
    vec2 param_3 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_608 = hdTex2(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_609 = _RESERVED_IDENTIFIER_FIXUP_1209.xyz * _RESERVED_IDENTIFIER_FIXUP_608;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1055;
    _RESERVED_IDENTIFIER_FIXUP_1055.x = _RESERVED_IDENTIFIER_FIXUP_609.x;
    _RESERVED_IDENTIFIER_FIXUP_1055.y = _RESERVED_IDENTIFIER_FIXUP_609.y;
    _RESERVED_IDENTIFIER_FIXUP_1055.z = _RESERVED_IDENTIFIER_FIXUP_609.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_623 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_531.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_624 = mix(_RESERVED_IDENTIFIER_FIXUP_1055.xyz, _RESERVED_IDENTIFIER_FIXUP_608, _RESERVED_IDENTIFIER_FIXUP_623);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1061;
    _RESERVED_IDENTIFIER_FIXUP_1061.x = _RESERVED_IDENTIFIER_FIXUP_624.x;
    _RESERVED_IDENTIFIER_FIXUP_1061.y = _RESERVED_IDENTIFIER_FIXUP_624.y;
    _RESERVED_IDENTIFIER_FIXUP_1061.z = _RESERVED_IDENTIFIER_FIXUP_624.z;
    vec2 param_4 = texcoord3.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_644 = hdTex3(param_4).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_645 = _RESERVED_IDENTIFIER_FIXUP_1209.xyz * _RESERVED_IDENTIFIER_FIXUP_644;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1067;
    _RESERVED_IDENTIFIER_FIXUP_1067.x = _RESERVED_IDENTIFIER_FIXUP_645.x;
    _RESERVED_IDENTIFIER_FIXUP_1067.y = _RESERVED_IDENTIFIER_FIXUP_645.y;
    _RESERVED_IDENTIFIER_FIXUP_1067.z = _RESERVED_IDENTIFIER_FIXUP_645.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_659 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_531.www, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_660 = mix(_RESERVED_IDENTIFIER_FIXUP_1067.xyz, _RESERVED_IDENTIFIER_FIXUP_644, _RESERVED_IDENTIFIER_FIXUP_659);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1073;
    _RESERVED_IDENTIFIER_FIXUP_1073.x = _RESERVED_IDENTIFIER_FIXUP_660.x;
    _RESERVED_IDENTIFIER_FIXUP_1073.y = _RESERVED_IDENTIFIER_FIXUP_660.y;
    _RESERVED_IDENTIFIER_FIXUP_1073.z = _RESERVED_IDENTIFIER_FIXUP_660.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_672 = (_RESERVED_IDENTIFIER_FIXUP_1073 * _RESERVED_IDENTIFIER_FIXUP_580.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1061 * _RESERVED_IDENTIFIER_FIXUP_580.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1032 * _RESERVED_IDENTIFIER_FIXUP_1209.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1044 * _RESERVED_IDENTIFIER_FIXUP_580.xxxx)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1079;
    _RESERVED_IDENTIFIER_FIXUP_1079.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1079.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1079.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_688 = _RESERVED_IDENTIFIER_FIXUP_580.www * _RESERVED_IDENTIFIER_FIXUP_1079.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1085;
    _RESERVED_IDENTIFIER_FIXUP_1085.x = _RESERVED_IDENTIFIER_FIXUP_688.x;
    _RESERVED_IDENTIFIER_FIXUP_1085.y = _RESERVED_IDENTIFIER_FIXUP_688.y;
    _RESERVED_IDENTIFIER_FIXUP_1085.z = _RESERVED_IDENTIFIER_FIXUP_688.z;
    _RESERVED_IDENTIFIER_FIXUP_672.w = (_RESERVED_IDENTIFIER_FIXUP_580.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_707 = (_RESERVED_IDENTIFIER_FIXUP_672.xyz * _RESERVED_IDENTIFIER_FIXUP_672.www) + _RESERVED_IDENTIFIER_FIXUP_1085.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1094;
    _RESERVED_IDENTIFIER_FIXUP_1094.x = _RESERVED_IDENTIFIER_FIXUP_707.x;
    _RESERVED_IDENTIFIER_FIXUP_1094.y = _RESERVED_IDENTIFIER_FIXUP_707.y;
    _RESERVED_IDENTIFIER_FIXUP_1094.z = _RESERVED_IDENTIFIER_FIXUP_707.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_720 = _RESERVED_IDENTIFIER_FIXUP_1094.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1100;
    _RESERVED_IDENTIFIER_FIXUP_1100.x = _RESERVED_IDENTIFIER_FIXUP_720.x;
    _RESERVED_IDENTIFIER_FIXUP_1100.y = _RESERVED_IDENTIFIER_FIXUP_720.y;
    _RESERVED_IDENTIFIER_FIXUP_1100.z = _RESERVED_IDENTIFIER_FIXUP_720.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_735 = _RESERVED_IDENTIFIER_FIXUP_1100.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1106;
    _RESERVED_IDENTIFIER_FIXUP_1106.x = _RESERVED_IDENTIFIER_FIXUP_735.x;
    _RESERVED_IDENTIFIER_FIXUP_1106.y = _RESERVED_IDENTIFIER_FIXUP_735.y;
    _RESERVED_IDENTIFIER_FIXUP_1106.z = _RESERVED_IDENTIFIER_FIXUP_735.z;
    vec2 param_5 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_773 = hdTex0(param_5);
    vec3 _RESERVED_IDENTIFIER_FIXUP_778 = color0.xyz + color0.xyz;
    float _RESERVED_IDENTIFIER_FIXUP_780 = _RESERVED_IDENTIFIER_FIXUP_778.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1114;
    _RESERVED_IDENTIFIER_FIXUP_1114.x = _RESERVED_IDENTIFIER_FIXUP_780;
    _RESERVED_IDENTIFIER_FIXUP_1114.y = _RESERVED_IDENTIFIER_FIXUP_778.y;
    _RESERVED_IDENTIFIER_FIXUP_1114.z = _RESERVED_IDENTIFIER_FIXUP_778.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_786 = _RESERVED_IDENTIFIER_FIXUP_773.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_789 = _RESERVED_IDENTIFIER_FIXUP_786 * _RESERVED_IDENTIFIER_FIXUP_1114.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1120;
    _RESERVED_IDENTIFIER_FIXUP_1120.x = _RESERVED_IDENTIFIER_FIXUP_789.x;
    _RESERVED_IDENTIFIER_FIXUP_1120.y = _RESERVED_IDENTIFIER_FIXUP_789.y;
    _RESERVED_IDENTIFIER_FIXUP_1120.z = _RESERVED_IDENTIFIER_FIXUP_789.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_807 = mix(_RESERVED_IDENTIFIER_FIXUP_1120.xyz, _RESERVED_IDENTIFIER_FIXUP_786, _RESERVED_IDENTIFIER_FIXUP_539);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1126 = _RESERVED_IDENTIFIER_FIXUP_773;
    _RESERVED_IDENTIFIER_FIXUP_1126.x = _RESERVED_IDENTIFIER_FIXUP_807.x;
    _RESERVED_IDENTIFIER_FIXUP_1126.y = _RESERVED_IDENTIFIER_FIXUP_807.y;
    _RESERVED_IDENTIFIER_FIXUP_1126.z = _RESERVED_IDENTIFIER_FIXUP_807.z;
    vec2 param_6 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_817 = hdTex1(param_6);
    vec3 _RESERVED_IDENTIFIER_FIXUP_821 = _RESERVED_IDENTIFIER_FIXUP_817.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_822 = _RESERVED_IDENTIFIER_FIXUP_1114.xyz * _RESERVED_IDENTIFIER_FIXUP_821;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1132;
    _RESERVED_IDENTIFIER_FIXUP_1132.x = _RESERVED_IDENTIFIER_FIXUP_822.x;
    _RESERVED_IDENTIFIER_FIXUP_1132.y = _RESERVED_IDENTIFIER_FIXUP_822.y;
    _RESERVED_IDENTIFIER_FIXUP_1132.z = _RESERVED_IDENTIFIER_FIXUP_822.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_837 = mix(_RESERVED_IDENTIFIER_FIXUP_1132.xyz, _RESERVED_IDENTIFIER_FIXUP_821, _RESERVED_IDENTIFIER_FIXUP_569);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1138 = _RESERVED_IDENTIFIER_FIXUP_817;
    _RESERVED_IDENTIFIER_FIXUP_1138.x = _RESERVED_IDENTIFIER_FIXUP_837.x;
    _RESERVED_IDENTIFIER_FIXUP_1138.y = _RESERVED_IDENTIFIER_FIXUP_837.y;
    _RESERVED_IDENTIFIER_FIXUP_1138.z = _RESERVED_IDENTIFIER_FIXUP_837.z;
    vec2 param_7 = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_847 = hdTex4(param_7);
    float _RESERVED_IDENTIFIER_FIXUP_855 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_847.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1210 = vec4(_RESERVED_IDENTIFIER_FIXUP_780, _RESERVED_IDENTIFIER_FIXUP_778.yz, _RESERVED_IDENTIFIER_FIXUP_855);
    _RESERVED_IDENTIFIER_FIXUP_1210.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_855;
    vec2 param_8 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_871 = hdTex2(param_8);
    vec3 _RESERVED_IDENTIFIER_FIXUP_875 = _RESERVED_IDENTIFIER_FIXUP_871.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_876 = _RESERVED_IDENTIFIER_FIXUP_1210.xyz * _RESERVED_IDENTIFIER_FIXUP_875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1149;
    _RESERVED_IDENTIFIER_FIXUP_1149.x = _RESERVED_IDENTIFIER_FIXUP_876.x;
    _RESERVED_IDENTIFIER_FIXUP_1149.y = _RESERVED_IDENTIFIER_FIXUP_876.y;
    _RESERVED_IDENTIFIER_FIXUP_1149.z = _RESERVED_IDENTIFIER_FIXUP_876.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_891 = mix(_RESERVED_IDENTIFIER_FIXUP_1149.xyz, _RESERVED_IDENTIFIER_FIXUP_875, _RESERVED_IDENTIFIER_FIXUP_623);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1155 = _RESERVED_IDENTIFIER_FIXUP_871;
    _RESERVED_IDENTIFIER_FIXUP_1155.x = _RESERVED_IDENTIFIER_FIXUP_891.x;
    _RESERVED_IDENTIFIER_FIXUP_1155.y = _RESERVED_IDENTIFIER_FIXUP_891.y;
    _RESERVED_IDENTIFIER_FIXUP_1155.z = _RESERVED_IDENTIFIER_FIXUP_891.z;
    vec2 param_9 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_907 = hdTex3(param_9);
    vec3 _RESERVED_IDENTIFIER_FIXUP_911 = _RESERVED_IDENTIFIER_FIXUP_907.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_912 = _RESERVED_IDENTIFIER_FIXUP_1210.xyz * _RESERVED_IDENTIFIER_FIXUP_911;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1161;
    _RESERVED_IDENTIFIER_FIXUP_1161.x = _RESERVED_IDENTIFIER_FIXUP_912.x;
    _RESERVED_IDENTIFIER_FIXUP_1161.y = _RESERVED_IDENTIFIER_FIXUP_912.y;
    _RESERVED_IDENTIFIER_FIXUP_1161.z = _RESERVED_IDENTIFIER_FIXUP_912.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_927 = mix(_RESERVED_IDENTIFIER_FIXUP_1161.xyz, _RESERVED_IDENTIFIER_FIXUP_911, _RESERVED_IDENTIFIER_FIXUP_659);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1167 = _RESERVED_IDENTIFIER_FIXUP_907;
    _RESERVED_IDENTIFIER_FIXUP_1167.x = _RESERVED_IDENTIFIER_FIXUP_927.x;
    _RESERVED_IDENTIFIER_FIXUP_1167.y = _RESERVED_IDENTIFIER_FIXUP_927.y;
    _RESERVED_IDENTIFIER_FIXUP_1167.z = _RESERVED_IDENTIFIER_FIXUP_927.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_939 = (_RESERVED_IDENTIFIER_FIXUP_1167 * _RESERVED_IDENTIFIER_FIXUP_847.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1155 * _RESERVED_IDENTIFIER_FIXUP_847.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1126 * _RESERVED_IDENTIFIER_FIXUP_1210.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1138 * _RESERVED_IDENTIFIER_FIXUP_847.xxxx)));
    vec3 _RESERVED_IDENTIFIER_FIXUP_944 = _RESERVED_IDENTIFIER_FIXUP_939.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1173;
    _RESERVED_IDENTIFIER_FIXUP_1173.x = _RESERVED_IDENTIFIER_FIXUP_944.x;
    _RESERVED_IDENTIFIER_FIXUP_1173.y = _RESERVED_IDENTIFIER_FIXUP_944.y;
    _RESERVED_IDENTIFIER_FIXUP_1173.z = _RESERVED_IDENTIFIER_FIXUP_944.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_955 = _RESERVED_IDENTIFIER_FIXUP_847.www * _RESERVED_IDENTIFIER_FIXUP_1173.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1179;
    _RESERVED_IDENTIFIER_FIXUP_1179.x = _RESERVED_IDENTIFIER_FIXUP_955.x;
    _RESERVED_IDENTIFIER_FIXUP_1179.y = _RESERVED_IDENTIFIER_FIXUP_955.y;
    _RESERVED_IDENTIFIER_FIXUP_1179.z = _RESERVED_IDENTIFIER_FIXUP_955.z;
    _RESERVED_IDENTIFIER_FIXUP_939.w = (_RESERVED_IDENTIFIER_FIXUP_847.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_974 = (_RESERVED_IDENTIFIER_FIXUP_939.xyz * _RESERVED_IDENTIFIER_FIXUP_939.www) + _RESERVED_IDENTIFIER_FIXUP_1179.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1188;
    _RESERVED_IDENTIFIER_FIXUP_1188.x = _RESERVED_IDENTIFIER_FIXUP_974.x;
    _RESERVED_IDENTIFIER_FIXUP_1188.y = _RESERVED_IDENTIFIER_FIXUP_974.y;
    _RESERVED_IDENTIFIER_FIXUP_1188.z = _RESERVED_IDENTIFIER_FIXUP_974.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_987 = _RESERVED_IDENTIFIER_FIXUP_1188.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1194;
    _RESERVED_IDENTIFIER_FIXUP_1194.x = _RESERVED_IDENTIFIER_FIXUP_987.x;
    _RESERVED_IDENTIFIER_FIXUP_1194.y = _RESERVED_IDENTIFIER_FIXUP_987.y;
    _RESERVED_IDENTIFIER_FIXUP_1194.z = _RESERVED_IDENTIFIER_FIXUP_987.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1194.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_371 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_380;
    if (_RESERVED_IDENTIFIER_FIXUP_371)
    {
        _RESERVED_IDENTIFIER_FIXUP_380 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_380 = _RESERVED_IDENTIFIER_FIXUP_371;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_380)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_417 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1106.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_443 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1013;
    if (_RESERVED_IDENTIFIER_FIXUP_417 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1013 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_417), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_443);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1013 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_443);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1013;
    wxlLight = vec4(color0.xyz * 2.0, 1.0);
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
    vec4 v5 = texcoord3;
    vec4 v6 = texcoord4;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec3 hdB60 = v0.xyz + v0.xyz;
    r1.x = hdB60.x;
    r1.y = hdB60.y;
    r1.z = hdB60.z;
    vec3 hdB76 = r0.xyz * r1.xyz;
    r2.x = hdB76.x;
    r2.y = hdB76.y;
    r2.z = hdB76.z;
    r3 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 hdB99 = r0;
    vec3 hdB108 = mix(r2.xyz, hdB99.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB108.x;
    r0.y = hdB108.y;
    r0.z = hdB108.z;
    vec2 param_1 = v3.xy;
    r2 = hdTex1(param_1);
    vec3 hdB124 = r1.xyz * r2.xyz;
    r4.x = hdB124.x;
    r4.y = hdB124.y;
    r4.z = hdB124.z;
    vec4 hdB133 = r2;
    vec3 hdB139 = mix(r4.xyz, hdB133.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r2.x = hdB139.x;
    r2.y = hdB139.y;
    r2.z = hdB139.z;
    vec2 param_2 = v6.xy;
    r4 = hdTex4(param_2);
    r2 *= r4.xxxx;
    r1.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r1.w = (-r1.w) + 1.0;
    r0 = (r0 * r1.wwww) + r2;
    vec2 param_3 = v4.xy;
    r2 = hdTex2(param_3);
    vec3 hdB183 = r1.xyz * r2.xyz;
    r5.x = hdB183.x;
    r5.y = hdB183.y;
    r5.z = hdB183.z;
    vec4 hdB192 = r2;
    vec3 hdB198 = mix(r5.xyz, hdB192.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r2.x = hdB198.x;
    r2.y = hdB198.y;
    r2.z = hdB198.z;
    r0 = (r2 * r4.yyyy) + r0;
    vec2 param_4 = v5.xy;
    r2 = hdTex3(param_4);
    vec4 hdB216 = r1;
    vec3 hdB220 = hdB216.xyz * r2.xyz;
    r1.x = hdB220.x;
    r1.y = hdB220.y;
    r1.z = hdB220.z;
    vec4 hdB229 = r2;
    vec3 hdB235 = mix(r1.xyz, hdB229.xyz, greaterThanEqual(-r3.www, vec3(0.0)));
    r2.x = hdB235.x;
    r2.y = hdB235.y;
    r2.z = hdB235.z;
    r0 = (r2 * r4.zzzz) + r0;
    vec3 hdB252 = r0.www * v1.xyz;
    r1.x = hdB252.x;
    r1.y = hdB252.y;
    r1.z = hdB252.z;
    vec4 hdB261 = r1;
    vec3 hdB263 = r4.www * hdB261.xyz;
    r1.x = hdB263.x;
    r1.y = hdB263.y;
    r1.z = hdB263.z;
    r0.w = (r4.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB277 = r0;
    vec4 hdB279 = r0;
    vec3 hdB284 = (hdB277.xyz * hdB279.www) + r1.xyz;
    r0.x = hdB284.x;
    r0.y = hdB284.y;
    r0.z = hdB284.z;
    vec4 hdB291 = r0;
    vec3 hdB298 = hdB291.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB298.x;
    r0.y = hdB298.y;
    r0.z = hdB298.z;
    vec3 hdB313 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB313.x;
    oC0.y = hdB313.y;
    oC0.z = hdB313.z;
    oC0.w = 1.0;
    bool hdB325 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB333;
    if (hdB325)
    {
        hdB333 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB333 = hdB325;
    }
    if (hdB333)
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
    bool _1322 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1332;
    if (_1322)
    {
        _1332 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 31u) != 0u;
    }
    else
    {
        _1332 = _1322;
    }
    if (_1332)
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
        bool _1357 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1372;
        if (!_1357)
        {
            _1372 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 31u) != 0u;
        }
        else
        {
            _1372 = _1357;
        }
        if (_1372)
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
