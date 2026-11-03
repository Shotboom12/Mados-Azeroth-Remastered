#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=2)uniform sampler2D s2[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
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
float _RESERVED_IDENTIFIER_FIXUP_1097;
vec4 _RESERVED_IDENTIFIER_FIXUP_1098;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _46 = hdOverride >= 0;
    bool _66;
    if (_46)
    {
        _66 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _66 = _46;
    }
    vec4 _67;
    if (_66)
    {
        _67 = vec4(float(hdOverride));
    }
    else
    {
        _67 = value;
    }
    return _67;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _84 = hdOverride >= 0;
    bool _93;
    if (_84)
    {
        _93 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _93 = _84;
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _111 = hdOverride >= 0;
    bool _121;
    if (_111)
    {
        _121 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _121 = _111;
    }
    vec4 _122;
    if (_121)
    {
        _122 = vec4(float(hdOverride));
    }
    else
    {
        _122 = value;
    }
    return _122;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _139 = hdOverride >= 0;
    bool _149;
    if (_139)
    {
        _149 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _149 = _139;
    }
    vec4 _150;
    if (_149)
    {
        _150 = vec4(float(hdOverride));
    }
    else
    {
        _150 = value;
    }
    return _150;
}

void HDActual()
{
    vec3 _RESERVED_IDENTIFIER_FIXUP_471 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1097).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_474 = _RESERVED_IDENTIFIER_FIXUP_471 + _RESERVED_IDENTIFIER_FIXUP_471;
    float _RESERVED_IDENTIFIER_FIXUP_476 = _RESERVED_IDENTIFIER_FIXUP_474.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_922;
    _RESERVED_IDENTIFIER_FIXUP_922.x = _RESERVED_IDENTIFIER_FIXUP_476;
    _RESERVED_IDENTIFIER_FIXUP_922.y = _RESERVED_IDENTIFIER_FIXUP_474.y;
    _RESERVED_IDENTIFIER_FIXUP_922.z = _RESERVED_IDENTIFIER_FIXUP_474.z;
    vec2 param = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_482 = hdTex0(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_485 = _RESERVED_IDENTIFIER_FIXUP_482 * _RESERVED_IDENTIFIER_FIXUP_922.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_928;
    _RESERVED_IDENTIFIER_FIXUP_928.x = _RESERVED_IDENTIFIER_FIXUP_485.x;
    _RESERVED_IDENTIFIER_FIXUP_928.y = _RESERVED_IDENTIFIER_FIXUP_485.y;
    _RESERVED_IDENTIFIER_FIXUP_928.z = _RESERVED_IDENTIFIER_FIXUP_485.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_495 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_934;
    _RESERVED_IDENTIFIER_FIXUP_934.x = _RESERVED_IDENTIFIER_FIXUP_495.x;
    _RESERVED_IDENTIFIER_FIXUP_934.y = _RESERVED_IDENTIFIER_FIXUP_495.y;
    _RESERVED_IDENTIFIER_FIXUP_934.z = _RESERVED_IDENTIFIER_FIXUP_495.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_509 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_934.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_510 = mix(_RESERVED_IDENTIFIER_FIXUP_928.xyz, _RESERVED_IDENTIFIER_FIXUP_482, _RESERVED_IDENTIFIER_FIXUP_509);
    vec4 _RESERVED_IDENTIFIER_FIXUP_940;
    _RESERVED_IDENTIFIER_FIXUP_940.x = _RESERVED_IDENTIFIER_FIXUP_510.x;
    _RESERVED_IDENTIFIER_FIXUP_940.y = _RESERVED_IDENTIFIER_FIXUP_510.y;
    _RESERVED_IDENTIFIER_FIXUP_940.z = _RESERVED_IDENTIFIER_FIXUP_510.z;
    vec2 param_1 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_524 = hdTex1(param_1).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_525 = _RESERVED_IDENTIFIER_FIXUP_922.xyz * _RESERVED_IDENTIFIER_FIXUP_524;
    vec4 _RESERVED_IDENTIFIER_FIXUP_946;
    _RESERVED_IDENTIFIER_FIXUP_946.x = _RESERVED_IDENTIFIER_FIXUP_525.x;
    _RESERVED_IDENTIFIER_FIXUP_946.y = _RESERVED_IDENTIFIER_FIXUP_525.y;
    _RESERVED_IDENTIFIER_FIXUP_946.z = _RESERVED_IDENTIFIER_FIXUP_525.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_539 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_934.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_540 = mix(_RESERVED_IDENTIFIER_FIXUP_946.xyz, _RESERVED_IDENTIFIER_FIXUP_524, _RESERVED_IDENTIFIER_FIXUP_539);
    vec4 _RESERVED_IDENTIFIER_FIXUP_952;
    _RESERVED_IDENTIFIER_FIXUP_952.x = _RESERVED_IDENTIFIER_FIXUP_540.x;
    _RESERVED_IDENTIFIER_FIXUP_952.y = _RESERVED_IDENTIFIER_FIXUP_540.y;
    _RESERVED_IDENTIFIER_FIXUP_952.z = _RESERVED_IDENTIFIER_FIXUP_540.z;
    vec2 param_2 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_550 = hdTex3(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_558 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_550.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1099 = vec4(_RESERVED_IDENTIFIER_FIXUP_476, _RESERVED_IDENTIFIER_FIXUP_474.yz, _RESERVED_IDENTIFIER_FIXUP_558);
    _RESERVED_IDENTIFIER_FIXUP_1099.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_558;
    vec2 param_3 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_578 = hdTex2(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_579 = _RESERVED_IDENTIFIER_FIXUP_1099.xyz * _RESERVED_IDENTIFIER_FIXUP_578;
    vec4 _RESERVED_IDENTIFIER_FIXUP_963;
    _RESERVED_IDENTIFIER_FIXUP_963.x = _RESERVED_IDENTIFIER_FIXUP_579.x;
    _RESERVED_IDENTIFIER_FIXUP_963.y = _RESERVED_IDENTIFIER_FIXUP_579.y;
    _RESERVED_IDENTIFIER_FIXUP_963.z = _RESERVED_IDENTIFIER_FIXUP_579.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_593 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_934.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_594 = mix(_RESERVED_IDENTIFIER_FIXUP_963.xyz, _RESERVED_IDENTIFIER_FIXUP_578, _RESERVED_IDENTIFIER_FIXUP_593);
    vec4 _RESERVED_IDENTIFIER_FIXUP_969;
    _RESERVED_IDENTIFIER_FIXUP_969.x = _RESERVED_IDENTIFIER_FIXUP_594.x;
    _RESERVED_IDENTIFIER_FIXUP_969.y = _RESERVED_IDENTIFIER_FIXUP_594.y;
    _RESERVED_IDENTIFIER_FIXUP_969.z = _RESERVED_IDENTIFIER_FIXUP_594.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_606 = (_RESERVED_IDENTIFIER_FIXUP_969 * _RESERVED_IDENTIFIER_FIXUP_550.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_940 * _RESERVED_IDENTIFIER_FIXUP_1099.wwww) + (_RESERVED_IDENTIFIER_FIXUP_952 * _RESERVED_IDENTIFIER_FIXUP_550.xxxx));
    vec4 _RESERVED_IDENTIFIER_FIXUP_975;
    _RESERVED_IDENTIFIER_FIXUP_975.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_975.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_975.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_622 = _RESERVED_IDENTIFIER_FIXUP_550.www * _RESERVED_IDENTIFIER_FIXUP_975.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_981;
    _RESERVED_IDENTIFIER_FIXUP_981.x = _RESERVED_IDENTIFIER_FIXUP_622.x;
    _RESERVED_IDENTIFIER_FIXUP_981.y = _RESERVED_IDENTIFIER_FIXUP_622.y;
    _RESERVED_IDENTIFIER_FIXUP_981.z = _RESERVED_IDENTIFIER_FIXUP_622.z;
    _RESERVED_IDENTIFIER_FIXUP_606.w = (_RESERVED_IDENTIFIER_FIXUP_550.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_641 = (_RESERVED_IDENTIFIER_FIXUP_606.xyz * _RESERVED_IDENTIFIER_FIXUP_606.www) + _RESERVED_IDENTIFIER_FIXUP_981.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_990;
    _RESERVED_IDENTIFIER_FIXUP_990.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
    _RESERVED_IDENTIFIER_FIXUP_990.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
    _RESERVED_IDENTIFIER_FIXUP_990.z = _RESERVED_IDENTIFIER_FIXUP_641.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_654 = _RESERVED_IDENTIFIER_FIXUP_990.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_996;
    _RESERVED_IDENTIFIER_FIXUP_996.x = _RESERVED_IDENTIFIER_FIXUP_654.x;
    _RESERVED_IDENTIFIER_FIXUP_996.y = _RESERVED_IDENTIFIER_FIXUP_654.y;
    _RESERVED_IDENTIFIER_FIXUP_996.z = _RESERVED_IDENTIFIER_FIXUP_654.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_669 = _RESERVED_IDENTIFIER_FIXUP_996.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1002;
    _RESERVED_IDENTIFIER_FIXUP_1002.x = _RESERVED_IDENTIFIER_FIXUP_669.x;
    _RESERVED_IDENTIFIER_FIXUP_1002.y = _RESERVED_IDENTIFIER_FIXUP_669.y;
    _RESERVED_IDENTIFIER_FIXUP_1002.z = _RESERVED_IDENTIFIER_FIXUP_669.z;
    vec2 param_4 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_704 = hdTex0(param_4);
    vec3 _RESERVED_IDENTIFIER_FIXUP_709 = color0.xyz + color0.xyz;
    float _RESERVED_IDENTIFIER_FIXUP_711 = _RESERVED_IDENTIFIER_FIXUP_709.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1010;
    _RESERVED_IDENTIFIER_FIXUP_1010.x = _RESERVED_IDENTIFIER_FIXUP_711;
    _RESERVED_IDENTIFIER_FIXUP_1010.y = _RESERVED_IDENTIFIER_FIXUP_709.y;
    _RESERVED_IDENTIFIER_FIXUP_1010.z = _RESERVED_IDENTIFIER_FIXUP_709.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_717 = _RESERVED_IDENTIFIER_FIXUP_704.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_720 = _RESERVED_IDENTIFIER_FIXUP_717 * _RESERVED_IDENTIFIER_FIXUP_1010.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1016;
    _RESERVED_IDENTIFIER_FIXUP_1016.x = _RESERVED_IDENTIFIER_FIXUP_720.x;
    _RESERVED_IDENTIFIER_FIXUP_1016.y = _RESERVED_IDENTIFIER_FIXUP_720.y;
    _RESERVED_IDENTIFIER_FIXUP_1016.z = _RESERVED_IDENTIFIER_FIXUP_720.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_745 = mix(_RESERVED_IDENTIFIER_FIXUP_1016.xyz, _RESERVED_IDENTIFIER_FIXUP_717, _RESERVED_IDENTIFIER_FIXUP_509);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1028 = _RESERVED_IDENTIFIER_FIXUP_704;
    _RESERVED_IDENTIFIER_FIXUP_1028.x = _RESERVED_IDENTIFIER_FIXUP_745.x;
    _RESERVED_IDENTIFIER_FIXUP_1028.y = _RESERVED_IDENTIFIER_FIXUP_745.y;
    _RESERVED_IDENTIFIER_FIXUP_1028.z = _RESERVED_IDENTIFIER_FIXUP_745.z;
    vec2 param_5 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_755 = hdTex1(param_5);
    vec3 _RESERVED_IDENTIFIER_FIXUP_759 = _RESERVED_IDENTIFIER_FIXUP_755.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_760 = _RESERVED_IDENTIFIER_FIXUP_1010.xyz * _RESERVED_IDENTIFIER_FIXUP_759;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1034;
    _RESERVED_IDENTIFIER_FIXUP_1034.x = _RESERVED_IDENTIFIER_FIXUP_760.x;
    _RESERVED_IDENTIFIER_FIXUP_1034.y = _RESERVED_IDENTIFIER_FIXUP_760.y;
    _RESERVED_IDENTIFIER_FIXUP_1034.z = _RESERVED_IDENTIFIER_FIXUP_760.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = mix(_RESERVED_IDENTIFIER_FIXUP_1034.xyz, _RESERVED_IDENTIFIER_FIXUP_759, _RESERVED_IDENTIFIER_FIXUP_539);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1040 = _RESERVED_IDENTIFIER_FIXUP_755;
    _RESERVED_IDENTIFIER_FIXUP_1040.x = _RESERVED_IDENTIFIER_FIXUP_775.x;
    _RESERVED_IDENTIFIER_FIXUP_1040.y = _RESERVED_IDENTIFIER_FIXUP_775.y;
    _RESERVED_IDENTIFIER_FIXUP_1040.z = _RESERVED_IDENTIFIER_FIXUP_775.z;
    vec2 param_6 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_785 = hdTex3(param_6);
    float _RESERVED_IDENTIFIER_FIXUP_793 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_785.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1100 = vec4(_RESERVED_IDENTIFIER_FIXUP_711, _RESERVED_IDENTIFIER_FIXUP_709.yz, _RESERVED_IDENTIFIER_FIXUP_793);
    _RESERVED_IDENTIFIER_FIXUP_1100.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_793;
    vec2 param_7 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_809 = hdTex2(param_7);
    vec3 _RESERVED_IDENTIFIER_FIXUP_813 = _RESERVED_IDENTIFIER_FIXUP_809.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_814 = _RESERVED_IDENTIFIER_FIXUP_1100.xyz * _RESERVED_IDENTIFIER_FIXUP_813;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1051;
    _RESERVED_IDENTIFIER_FIXUP_1051.x = _RESERVED_IDENTIFIER_FIXUP_814.x;
    _RESERVED_IDENTIFIER_FIXUP_1051.y = _RESERVED_IDENTIFIER_FIXUP_814.y;
    _RESERVED_IDENTIFIER_FIXUP_1051.z = _RESERVED_IDENTIFIER_FIXUP_814.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_829 = mix(_RESERVED_IDENTIFIER_FIXUP_1051.xyz, _RESERVED_IDENTIFIER_FIXUP_813, _RESERVED_IDENTIFIER_FIXUP_593);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1057 = _RESERVED_IDENTIFIER_FIXUP_809;
    _RESERVED_IDENTIFIER_FIXUP_1057.x = _RESERVED_IDENTIFIER_FIXUP_829.x;
    _RESERVED_IDENTIFIER_FIXUP_1057.y = _RESERVED_IDENTIFIER_FIXUP_829.y;
    _RESERVED_IDENTIFIER_FIXUP_1057.z = _RESERVED_IDENTIFIER_FIXUP_829.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_841 = (_RESERVED_IDENTIFIER_FIXUP_1057 * _RESERVED_IDENTIFIER_FIXUP_785.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1028 * _RESERVED_IDENTIFIER_FIXUP_1100.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1040 * _RESERVED_IDENTIFIER_FIXUP_785.xxxx));
    vec3 _RESERVED_IDENTIFIER_FIXUP_846 = _RESERVED_IDENTIFIER_FIXUP_841.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1063;
    _RESERVED_IDENTIFIER_FIXUP_1063.x = _RESERVED_IDENTIFIER_FIXUP_846.x;
    _RESERVED_IDENTIFIER_FIXUP_1063.y = _RESERVED_IDENTIFIER_FIXUP_846.y;
    _RESERVED_IDENTIFIER_FIXUP_1063.z = _RESERVED_IDENTIFIER_FIXUP_846.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_857 = _RESERVED_IDENTIFIER_FIXUP_785.www * _RESERVED_IDENTIFIER_FIXUP_1063.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1069;
    _RESERVED_IDENTIFIER_FIXUP_1069.x = _RESERVED_IDENTIFIER_FIXUP_857.x;
    _RESERVED_IDENTIFIER_FIXUP_1069.y = _RESERVED_IDENTIFIER_FIXUP_857.y;
    _RESERVED_IDENTIFIER_FIXUP_1069.z = _RESERVED_IDENTIFIER_FIXUP_857.z;
    _RESERVED_IDENTIFIER_FIXUP_841.w = (_RESERVED_IDENTIFIER_FIXUP_785.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_876 = (_RESERVED_IDENTIFIER_FIXUP_841.xyz * _RESERVED_IDENTIFIER_FIXUP_841.www) + _RESERVED_IDENTIFIER_FIXUP_1069.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1078;
    _RESERVED_IDENTIFIER_FIXUP_1078.x = _RESERVED_IDENTIFIER_FIXUP_876.x;
    _RESERVED_IDENTIFIER_FIXUP_1078.y = _RESERVED_IDENTIFIER_FIXUP_876.y;
    _RESERVED_IDENTIFIER_FIXUP_1078.z = _RESERVED_IDENTIFIER_FIXUP_876.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_889 = _RESERVED_IDENTIFIER_FIXUP_1078.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1084;
    _RESERVED_IDENTIFIER_FIXUP_1084.x = _RESERVED_IDENTIFIER_FIXUP_889.x;
    _RESERVED_IDENTIFIER_FIXUP_1084.y = _RESERVED_IDENTIFIER_FIXUP_889.y;
    _RESERVED_IDENTIFIER_FIXUP_1084.z = _RESERVED_IDENTIFIER_FIXUP_889.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1084.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_337 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_346;
    if (_RESERVED_IDENTIFIER_FIXUP_337)
    {
        _RESERVED_IDENTIFIER_FIXUP_346 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_346 = _RESERVED_IDENTIFIER_FIXUP_337;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_346)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_383 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1002.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_409 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_915;
    if (_RESERVED_IDENTIFIER_FIXUP_383 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_915 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_383), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_409);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_915 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_409);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_915;
    wxlLight = vec4(color0.xyz * 2.0, 1.0);
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord3;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec3 hdB56 = v0.xyz + v0.xyz;
    r1.x = hdB56.x;
    r1.y = hdB56.y;
    r1.z = hdB56.z;
    vec3 hdB72 = r0.xyz * r1.xyz;
    r2.x = hdB72.x;
    r2.y = hdB72.y;
    r2.z = hdB72.z;
    vec3 hdB93 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r3.x = hdB93.x;
    r3.y = hdB93.y;
    r3.z = hdB93.z;
    vec4 hdB102 = r0;
    vec3 hdB111 = mix(r2.xyz, hdB102.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB111.x;
    r0.y = hdB111.y;
    r0.z = hdB111.z;
    vec2 param_1 = v3.xy;
    r2 = hdTex1(param_1);
    vec3 hdB127 = r1.xyz * r2.xyz;
    r4.x = hdB127.x;
    r4.y = hdB127.y;
    r4.z = hdB127.z;
    vec4 hdB136 = r2;
    vec3 hdB142 = mix(r4.xyz, hdB136.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r2.x = hdB142.x;
    r2.y = hdB142.y;
    r2.z = hdB142.z;
    vec2 param_2 = v5.xy;
    r4 = hdTex3(param_2);
    r2 *= r4.xxxx;
    r1.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r1.w = (-r1.w) + 1.0;
    r0 = (r0 * r1.wwww) + r2;
    vec2 param_3 = v4.xy;
    r2 = hdTex2(param_3);
    vec4 hdB182 = r1;
    vec3 hdB186 = hdB182.xyz * r2.xyz;
    r1.x = hdB186.x;
    r1.y = hdB186.y;
    r1.z = hdB186.z;
    vec4 hdB195 = r2;
    vec3 hdB201 = mix(r1.xyz, hdB195.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r2.x = hdB201.x;
    r2.y = hdB201.y;
    r2.z = hdB201.z;
    r0 = (r2 * r4.yyyy) + r0;
    vec3 hdB218 = r0.www * v1.xyz;
    r1.x = hdB218.x;
    r1.y = hdB218.y;
    r1.z = hdB218.z;
    vec4 hdB227 = r1;
    vec3 hdB229 = r4.www * hdB227.xyz;
    r1.x = hdB229.x;
    r1.y = hdB229.y;
    r1.z = hdB229.z;
    r0.w = (r4.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB243 = r0;
    vec4 hdB245 = r0;
    vec3 hdB250 = (hdB243.xyz * hdB245.www) + r1.xyz;
    r0.x = hdB250.x;
    r0.y = hdB250.y;
    r0.z = hdB250.z;
    vec4 hdB257 = r0;
    vec3 hdB264 = hdB257.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB264.x;
    r0.y = hdB264.y;
    r0.z = hdB264.z;
    vec3 hdB279 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB279.x;
    oC0.y = hdB279.y;
    oC0.z = hdB279.z;
    oC0.w = 1.0;
    bool hdB291 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB299;
    if (hdB291)
    {
        hdB299 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB299 = hdB291;
    }
    if (hdB299)
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
    bool _1172 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1182;
    if (_1172)
    {
        _1182 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 15u) != 0u;
    }
    else
    {
        _1182 = _1172;
    }
    if (_1182)
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
        bool _1207 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1222;
        if (!_1207)
        {
            _1222 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 15u) != 0u;
        }
        else
        {
            _1222 = _1207;
        }
        if (_1222)
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
