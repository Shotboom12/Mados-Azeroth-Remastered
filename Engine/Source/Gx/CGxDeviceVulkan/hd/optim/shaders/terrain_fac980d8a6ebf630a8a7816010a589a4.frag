#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1210;
vec4 _RESERVED_IDENTIFIER_FIXUP_1211;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _83 = hdOverride >= 0;
    bool _92;
    if (_83)
    {
        _92 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _92 = _83;
    }
    vec4 _93;
    if (_92)
    {
        _93 = vec4(float(hdOverride));
    }
    else
    {
        _93 = value;
    }
    return _93;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _110 = hdOverride >= 0;
    bool _120;
    if (_110)
    {
        _120 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _120 = _110;
    }
    vec4 _121;
    if (_120)
    {
        _121 = vec4(float(hdOverride));
    }
    else
    {
        _121 = value;
    }
    return _121;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _138 = hdOverride >= 0;
    bool _148;
    if (_138)
    {
        _148 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _148 = _138;
    }
    vec4 _149;
    if (_148)
    {
        _149 = vec4(float(hdOverride));
    }
    else
    {
        _149 = value;
    }
    return _149;
}

void HDActual()
{
    vec3 _RESERVED_IDENTIFIER_FIXUP_511 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1210).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_514 = _RESERVED_IDENTIFIER_FIXUP_511 + _RESERVED_IDENTIFIER_FIXUP_511;
    float _RESERVED_IDENTIFIER_FIXUP_516 = _RESERVED_IDENTIFIER_FIXUP_514.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1023;
    _RESERVED_IDENTIFIER_FIXUP_1023.x = _RESERVED_IDENTIFIER_FIXUP_516;
    _RESERVED_IDENTIFIER_FIXUP_1023.y = _RESERVED_IDENTIFIER_FIXUP_514.y;
    _RESERVED_IDENTIFIER_FIXUP_1023.z = _RESERVED_IDENTIFIER_FIXUP_514.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_522 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_525 = _RESERVED_IDENTIFIER_FIXUP_522 * _RESERVED_IDENTIFIER_FIXUP_1023.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1029;
    _RESERVED_IDENTIFIER_FIXUP_1029.x = _RESERVED_IDENTIFIER_FIXUP_525.x;
    _RESERVED_IDENTIFIER_FIXUP_1029.y = _RESERVED_IDENTIFIER_FIXUP_525.y;
    _RESERVED_IDENTIFIER_FIXUP_1029.z = _RESERVED_IDENTIFIER_FIXUP_525.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_534 = abs(optRegs.rows[optTile*82u+uint(1)]);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_542 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_534.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_543 = mix(_RESERVED_IDENTIFIER_FIXUP_1029.xyz, _RESERVED_IDENTIFIER_FIXUP_522, _RESERVED_IDENTIFIER_FIXUP_542);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1035;
    _RESERVED_IDENTIFIER_FIXUP_1035.x = _RESERVED_IDENTIFIER_FIXUP_543.x;
    _RESERVED_IDENTIFIER_FIXUP_1035.y = _RESERVED_IDENTIFIER_FIXUP_543.y;
    _RESERVED_IDENTIFIER_FIXUP_1035.z = _RESERVED_IDENTIFIER_FIXUP_543.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_557 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_558 = _RESERVED_IDENTIFIER_FIXUP_1023.xyz * _RESERVED_IDENTIFIER_FIXUP_557;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1041;
    _RESERVED_IDENTIFIER_FIXUP_1041.x = _RESERVED_IDENTIFIER_FIXUP_558.x;
    _RESERVED_IDENTIFIER_FIXUP_1041.y = _RESERVED_IDENTIFIER_FIXUP_558.y;
    _RESERVED_IDENTIFIER_FIXUP_1041.z = _RESERVED_IDENTIFIER_FIXUP_558.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_572 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_534.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_573 = mix(_RESERVED_IDENTIFIER_FIXUP_1041.xyz, _RESERVED_IDENTIFIER_FIXUP_557, _RESERVED_IDENTIFIER_FIXUP_572);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1047;
    _RESERVED_IDENTIFIER_FIXUP_1047.x = _RESERVED_IDENTIFIER_FIXUP_573.x;
    _RESERVED_IDENTIFIER_FIXUP_1047.y = _RESERVED_IDENTIFIER_FIXUP_573.y;
    _RESERVED_IDENTIFIER_FIXUP_1047.z = _RESERVED_IDENTIFIER_FIXUP_573.z;
    vec2 param_1 = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_583 = hdTex4(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_591 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_583.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1212 = vec4(_RESERVED_IDENTIFIER_FIXUP_516, _RESERVED_IDENTIFIER_FIXUP_514.yz, _RESERVED_IDENTIFIER_FIXUP_591);
    _RESERVED_IDENTIFIER_FIXUP_1212.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_591;
    vec2 param_2 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_611 = hdTex2(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_612 = _RESERVED_IDENTIFIER_FIXUP_1212.xyz * _RESERVED_IDENTIFIER_FIXUP_611;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1058;
    _RESERVED_IDENTIFIER_FIXUP_1058.x = _RESERVED_IDENTIFIER_FIXUP_612.x;
    _RESERVED_IDENTIFIER_FIXUP_1058.y = _RESERVED_IDENTIFIER_FIXUP_612.y;
    _RESERVED_IDENTIFIER_FIXUP_1058.z = _RESERVED_IDENTIFIER_FIXUP_612.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_626 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_534.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_627 = mix(_RESERVED_IDENTIFIER_FIXUP_1058.xyz, _RESERVED_IDENTIFIER_FIXUP_611, _RESERVED_IDENTIFIER_FIXUP_626);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1064;
    _RESERVED_IDENTIFIER_FIXUP_1064.x = _RESERVED_IDENTIFIER_FIXUP_627.x;
    _RESERVED_IDENTIFIER_FIXUP_1064.y = _RESERVED_IDENTIFIER_FIXUP_627.y;
    _RESERVED_IDENTIFIER_FIXUP_1064.z = _RESERVED_IDENTIFIER_FIXUP_627.z;
    vec2 param_3 = texcoord3.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_647 = hdTex3(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_648 = _RESERVED_IDENTIFIER_FIXUP_1212.xyz * _RESERVED_IDENTIFIER_FIXUP_647;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1070;
    _RESERVED_IDENTIFIER_FIXUP_1070.x = _RESERVED_IDENTIFIER_FIXUP_648.x;
    _RESERVED_IDENTIFIER_FIXUP_1070.y = _RESERVED_IDENTIFIER_FIXUP_648.y;
    _RESERVED_IDENTIFIER_FIXUP_1070.z = _RESERVED_IDENTIFIER_FIXUP_648.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_662 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_534.www, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_663 = mix(_RESERVED_IDENTIFIER_FIXUP_1070.xyz, _RESERVED_IDENTIFIER_FIXUP_647, _RESERVED_IDENTIFIER_FIXUP_662);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1076;
    _RESERVED_IDENTIFIER_FIXUP_1076.x = _RESERVED_IDENTIFIER_FIXUP_663.x;
    _RESERVED_IDENTIFIER_FIXUP_1076.y = _RESERVED_IDENTIFIER_FIXUP_663.y;
    _RESERVED_IDENTIFIER_FIXUP_1076.z = _RESERVED_IDENTIFIER_FIXUP_663.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_675 = (_RESERVED_IDENTIFIER_FIXUP_1076 * _RESERVED_IDENTIFIER_FIXUP_583.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1064 * _RESERVED_IDENTIFIER_FIXUP_583.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1035 * _RESERVED_IDENTIFIER_FIXUP_1212.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1047 * _RESERVED_IDENTIFIER_FIXUP_583.xxxx)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1082;
    _RESERVED_IDENTIFIER_FIXUP_1082.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1082.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1082.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_691 = _RESERVED_IDENTIFIER_FIXUP_583.www * _RESERVED_IDENTIFIER_FIXUP_1082.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1088;
    _RESERVED_IDENTIFIER_FIXUP_1088.x = _RESERVED_IDENTIFIER_FIXUP_691.x;
    _RESERVED_IDENTIFIER_FIXUP_1088.y = _RESERVED_IDENTIFIER_FIXUP_691.y;
    _RESERVED_IDENTIFIER_FIXUP_1088.z = _RESERVED_IDENTIFIER_FIXUP_691.z;
    _RESERVED_IDENTIFIER_FIXUP_675.w = (_RESERVED_IDENTIFIER_FIXUP_583.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_710 = (_RESERVED_IDENTIFIER_FIXUP_675.xyz * _RESERVED_IDENTIFIER_FIXUP_675.www) + _RESERVED_IDENTIFIER_FIXUP_1088.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1097;
    _RESERVED_IDENTIFIER_FIXUP_1097.x = _RESERVED_IDENTIFIER_FIXUP_710.x;
    _RESERVED_IDENTIFIER_FIXUP_1097.y = _RESERVED_IDENTIFIER_FIXUP_710.y;
    _RESERVED_IDENTIFIER_FIXUP_1097.z = _RESERVED_IDENTIFIER_FIXUP_710.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_723 = _RESERVED_IDENTIFIER_FIXUP_1097.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1103;
    _RESERVED_IDENTIFIER_FIXUP_1103.x = _RESERVED_IDENTIFIER_FIXUP_723.x;
    _RESERVED_IDENTIFIER_FIXUP_1103.y = _RESERVED_IDENTIFIER_FIXUP_723.y;
    _RESERVED_IDENTIFIER_FIXUP_1103.z = _RESERVED_IDENTIFIER_FIXUP_723.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_738 = _RESERVED_IDENTIFIER_FIXUP_1103.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1109;
    _RESERVED_IDENTIFIER_FIXUP_1109.x = _RESERVED_IDENTIFIER_FIXUP_738.x;
    _RESERVED_IDENTIFIER_FIXUP_1109.y = _RESERVED_IDENTIFIER_FIXUP_738.y;
    _RESERVED_IDENTIFIER_FIXUP_1109.z = _RESERVED_IDENTIFIER_FIXUP_738.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_776 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_781 = color0.xyz + color0.xyz;
    float _RESERVED_IDENTIFIER_FIXUP_783 = _RESERVED_IDENTIFIER_FIXUP_781.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1117;
    _RESERVED_IDENTIFIER_FIXUP_1117.x = _RESERVED_IDENTIFIER_FIXUP_783;
    _RESERVED_IDENTIFIER_FIXUP_1117.y = _RESERVED_IDENTIFIER_FIXUP_781.y;
    _RESERVED_IDENTIFIER_FIXUP_1117.z = _RESERVED_IDENTIFIER_FIXUP_781.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_789 = _RESERVED_IDENTIFIER_FIXUP_776.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_792 = _RESERVED_IDENTIFIER_FIXUP_789 * _RESERVED_IDENTIFIER_FIXUP_1117.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1123;
    _RESERVED_IDENTIFIER_FIXUP_1123.x = _RESERVED_IDENTIFIER_FIXUP_792.x;
    _RESERVED_IDENTIFIER_FIXUP_1123.y = _RESERVED_IDENTIFIER_FIXUP_792.y;
    _RESERVED_IDENTIFIER_FIXUP_1123.z = _RESERVED_IDENTIFIER_FIXUP_792.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_810 = mix(_RESERVED_IDENTIFIER_FIXUP_1123.xyz, _RESERVED_IDENTIFIER_FIXUP_789, _RESERVED_IDENTIFIER_FIXUP_542);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1129 = _RESERVED_IDENTIFIER_FIXUP_776;
    _RESERVED_IDENTIFIER_FIXUP_1129.x = _RESERVED_IDENTIFIER_FIXUP_810.x;
    _RESERVED_IDENTIFIER_FIXUP_1129.y = _RESERVED_IDENTIFIER_FIXUP_810.y;
    _RESERVED_IDENTIFIER_FIXUP_1129.z = _RESERVED_IDENTIFIER_FIXUP_810.z;
    vec2 param_4 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_820 = hdTex1(param_4);
    vec3 _RESERVED_IDENTIFIER_FIXUP_824 = _RESERVED_IDENTIFIER_FIXUP_820.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = _RESERVED_IDENTIFIER_FIXUP_1117.xyz * _RESERVED_IDENTIFIER_FIXUP_824;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1135;
    _RESERVED_IDENTIFIER_FIXUP_1135.x = _RESERVED_IDENTIFIER_FIXUP_825.x;
    _RESERVED_IDENTIFIER_FIXUP_1135.y = _RESERVED_IDENTIFIER_FIXUP_825.y;
    _RESERVED_IDENTIFIER_FIXUP_1135.z = _RESERVED_IDENTIFIER_FIXUP_825.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_840 = mix(_RESERVED_IDENTIFIER_FIXUP_1135.xyz, _RESERVED_IDENTIFIER_FIXUP_824, _RESERVED_IDENTIFIER_FIXUP_572);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1141 = _RESERVED_IDENTIFIER_FIXUP_820;
    _RESERVED_IDENTIFIER_FIXUP_1141.x = _RESERVED_IDENTIFIER_FIXUP_840.x;
    _RESERVED_IDENTIFIER_FIXUP_1141.y = _RESERVED_IDENTIFIER_FIXUP_840.y;
    _RESERVED_IDENTIFIER_FIXUP_1141.z = _RESERVED_IDENTIFIER_FIXUP_840.z;
    vec2 param_5 = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_850 = hdTex4(param_5);
    float _RESERVED_IDENTIFIER_FIXUP_858 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_850.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1213 = vec4(_RESERVED_IDENTIFIER_FIXUP_783, _RESERVED_IDENTIFIER_FIXUP_781.yz, _RESERVED_IDENTIFIER_FIXUP_858);
    _RESERVED_IDENTIFIER_FIXUP_1213.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_858;
    vec2 param_6 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_874 = hdTex2(param_6);
    vec3 _RESERVED_IDENTIFIER_FIXUP_878 = _RESERVED_IDENTIFIER_FIXUP_874.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_879 = _RESERVED_IDENTIFIER_FIXUP_1213.xyz * _RESERVED_IDENTIFIER_FIXUP_878;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1152;
    _RESERVED_IDENTIFIER_FIXUP_1152.x = _RESERVED_IDENTIFIER_FIXUP_879.x;
    _RESERVED_IDENTIFIER_FIXUP_1152.y = _RESERVED_IDENTIFIER_FIXUP_879.y;
    _RESERVED_IDENTIFIER_FIXUP_1152.z = _RESERVED_IDENTIFIER_FIXUP_879.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_894 = mix(_RESERVED_IDENTIFIER_FIXUP_1152.xyz, _RESERVED_IDENTIFIER_FIXUP_878, _RESERVED_IDENTIFIER_FIXUP_626);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1158 = _RESERVED_IDENTIFIER_FIXUP_874;
    _RESERVED_IDENTIFIER_FIXUP_1158.x = _RESERVED_IDENTIFIER_FIXUP_894.x;
    _RESERVED_IDENTIFIER_FIXUP_1158.y = _RESERVED_IDENTIFIER_FIXUP_894.y;
    _RESERVED_IDENTIFIER_FIXUP_1158.z = _RESERVED_IDENTIFIER_FIXUP_894.z;
    vec2 param_7 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_910 = hdTex3(param_7);
    vec3 _RESERVED_IDENTIFIER_FIXUP_914 = _RESERVED_IDENTIFIER_FIXUP_910.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_915 = _RESERVED_IDENTIFIER_FIXUP_1213.xyz * _RESERVED_IDENTIFIER_FIXUP_914;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1164;
    _RESERVED_IDENTIFIER_FIXUP_1164.x = _RESERVED_IDENTIFIER_FIXUP_915.x;
    _RESERVED_IDENTIFIER_FIXUP_1164.y = _RESERVED_IDENTIFIER_FIXUP_915.y;
    _RESERVED_IDENTIFIER_FIXUP_1164.z = _RESERVED_IDENTIFIER_FIXUP_915.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_930 = mix(_RESERVED_IDENTIFIER_FIXUP_1164.xyz, _RESERVED_IDENTIFIER_FIXUP_914, _RESERVED_IDENTIFIER_FIXUP_662);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1170 = _RESERVED_IDENTIFIER_FIXUP_910;
    _RESERVED_IDENTIFIER_FIXUP_1170.x = _RESERVED_IDENTIFIER_FIXUP_930.x;
    _RESERVED_IDENTIFIER_FIXUP_1170.y = _RESERVED_IDENTIFIER_FIXUP_930.y;
    _RESERVED_IDENTIFIER_FIXUP_1170.z = _RESERVED_IDENTIFIER_FIXUP_930.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_942 = (_RESERVED_IDENTIFIER_FIXUP_1170 * _RESERVED_IDENTIFIER_FIXUP_850.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1158 * _RESERVED_IDENTIFIER_FIXUP_850.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1129 * _RESERVED_IDENTIFIER_FIXUP_1213.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1141 * _RESERVED_IDENTIFIER_FIXUP_850.xxxx)));
    vec3 _RESERVED_IDENTIFIER_FIXUP_947 = _RESERVED_IDENTIFIER_FIXUP_942.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1176;
    _RESERVED_IDENTIFIER_FIXUP_1176.x = _RESERVED_IDENTIFIER_FIXUP_947.x;
    _RESERVED_IDENTIFIER_FIXUP_1176.y = _RESERVED_IDENTIFIER_FIXUP_947.y;
    _RESERVED_IDENTIFIER_FIXUP_1176.z = _RESERVED_IDENTIFIER_FIXUP_947.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_958 = _RESERVED_IDENTIFIER_FIXUP_850.www * _RESERVED_IDENTIFIER_FIXUP_1176.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1182;
    _RESERVED_IDENTIFIER_FIXUP_1182.x = _RESERVED_IDENTIFIER_FIXUP_958.x;
    _RESERVED_IDENTIFIER_FIXUP_1182.y = _RESERVED_IDENTIFIER_FIXUP_958.y;
    _RESERVED_IDENTIFIER_FIXUP_1182.z = _RESERVED_IDENTIFIER_FIXUP_958.z;
    _RESERVED_IDENTIFIER_FIXUP_942.w = (_RESERVED_IDENTIFIER_FIXUP_850.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_977 = (_RESERVED_IDENTIFIER_FIXUP_942.xyz * _RESERVED_IDENTIFIER_FIXUP_942.www) + _RESERVED_IDENTIFIER_FIXUP_1182.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1191;
    _RESERVED_IDENTIFIER_FIXUP_1191.x = _RESERVED_IDENTIFIER_FIXUP_977.x;
    _RESERVED_IDENTIFIER_FIXUP_1191.y = _RESERVED_IDENTIFIER_FIXUP_977.y;
    _RESERVED_IDENTIFIER_FIXUP_1191.z = _RESERVED_IDENTIFIER_FIXUP_977.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_990 = _RESERVED_IDENTIFIER_FIXUP_1191.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1197;
    _RESERVED_IDENTIFIER_FIXUP_1197.x = _RESERVED_IDENTIFIER_FIXUP_990.x;
    _RESERVED_IDENTIFIER_FIXUP_1197.y = _RESERVED_IDENTIFIER_FIXUP_990.y;
    _RESERVED_IDENTIFIER_FIXUP_1197.z = _RESERVED_IDENTIFIER_FIXUP_990.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1197.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_374 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_383;
    if (_RESERVED_IDENTIFIER_FIXUP_374)
    {
        _RESERVED_IDENTIFIER_FIXUP_383 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_383 = _RESERVED_IDENTIFIER_FIXUP_374;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_383)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_420 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1109.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_446 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1016;
    if (_RESERVED_IDENTIFIER_FIXUP_420 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1016 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_420), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_446);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1016 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_446);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1016;
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
    r0 = OptTex0( v2.xyz);
    vec3 hdB59 = v0.xyz + v0.xyz;
    r1.x = hdB59.x;
    r1.y = hdB59.y;
    r1.z = hdB59.z;
    vec3 hdB75 = r0.xyz * r1.xyz;
    r2.x = hdB75.x;
    r2.y = hdB75.y;
    r2.z = hdB75.z;
    r3 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 hdB98 = r0;
    vec3 hdB107 = mix(r2.xyz, hdB98.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB107.x;
    r0.y = hdB107.y;
    r0.z = hdB107.z;
    vec2 param = v3.xy;
    r2 = hdTex1(param);
    vec3 hdB127 = r1.xyz * r2.xyz;
    r4.x = hdB127.x;
    r4.y = hdB127.y;
    r4.z = hdB127.z;
    vec4 hdB136 = r2;
    vec3 hdB142 = mix(r4.xyz, hdB136.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r2.x = hdB142.x;
    r2.y = hdB142.y;
    r2.z = hdB142.z;
    vec2 param_1 = v6.xy;
    r4 = hdTex4(param_1);
    r2 *= r4.xxxx;
    r1.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r1.w = (-r1.w) + 1.0;
    r0 = (r0 * r1.wwww) + r2;
    vec2 param_2 = v4.xy;
    r2 = hdTex2(param_2);
    vec3 hdB186 = r1.xyz * r2.xyz;
    r5.x = hdB186.x;
    r5.y = hdB186.y;
    r5.z = hdB186.z;
    vec4 hdB195 = r2;
    vec3 hdB201 = mix(r5.xyz, hdB195.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r2.x = hdB201.x;
    r2.y = hdB201.y;
    r2.z = hdB201.z;
    r0 = (r2 * r4.yyyy) + r0;
    vec2 param_3 = v5.xy;
    r2 = hdTex3(param_3);
    vec4 hdB219 = r1;
    vec3 hdB223 = hdB219.xyz * r2.xyz;
    r1.x = hdB223.x;
    r1.y = hdB223.y;
    r1.z = hdB223.z;
    vec4 hdB232 = r2;
    vec3 hdB238 = mix(r1.xyz, hdB232.xyz, greaterThanEqual(-r3.www, vec3(0.0)));
    r2.x = hdB238.x;
    r2.y = hdB238.y;
    r2.z = hdB238.z;
    r0 = (r2 * r4.zzzz) + r0;
    vec3 hdB255 = r0.www * v1.xyz;
    r1.x = hdB255.x;
    r1.y = hdB255.y;
    r1.z = hdB255.z;
    vec4 hdB264 = r1;
    vec3 hdB266 = r4.www * hdB264.xyz;
    r1.x = hdB266.x;
    r1.y = hdB266.y;
    r1.z = hdB266.z;
    r0.w = (r4.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB280 = r0;
    vec4 hdB282 = r0;
    vec3 hdB287 = (hdB280.xyz * hdB282.www) + r1.xyz;
    r0.x = hdB287.x;
    r0.y = hdB287.y;
    r0.z = hdB287.z;
    vec4 hdB294 = r0;
    vec3 hdB301 = hdB294.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB301.x;
    r0.y = hdB301.y;
    r0.z = hdB301.z;
    vec3 hdB316 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB316.x;
    oC0.y = hdB316.y;
    oC0.z = hdB316.z;
    oC0.w = 1.0;
    bool hdB328 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB336;
    if (hdB328)
    {
        hdB336 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB336 = hdB328;
    }
    if (hdB336)
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
    bool _1296 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1306;
    if (_1296)
    {
        _1306 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 30u) != 0u;
    }
    else
    {
        _1306 = _1296;
    }
    if (_1306)
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
        bool _1331 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1346;
        if (!_1331)
        {
            _1346 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 30u) != 0u;
        }
        else
        {
            _1346 = _1331;
        }
        if (_1346)
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
