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
float _RESERVED_IDENTIFIER_FIXUP_1176;
vec4 _RESERVED_IDENTIFIER_FIXUP_1177;


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
    vec3 _RESERVED_IDENTIFIER_FIXUP_504 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1176).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_507 = _RESERVED_IDENTIFIER_FIXUP_504 + _RESERVED_IDENTIFIER_FIXUP_504;
    vec4 _RESERVED_IDENTIFIER_FIXUP_993;
    _RESERVED_IDENTIFIER_FIXUP_993.x = _RESERVED_IDENTIFIER_FIXUP_507.x;
    _RESERVED_IDENTIFIER_FIXUP_993.y = _RESERVED_IDENTIFIER_FIXUP_507.y;
    _RESERVED_IDENTIFIER_FIXUP_993.z = _RESERVED_IDENTIFIER_FIXUP_507.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_515 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_518 = _RESERVED_IDENTIFIER_FIXUP_515 * _RESERVED_IDENTIFIER_FIXUP_993.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_999;
    _RESERVED_IDENTIFIER_FIXUP_999.x = _RESERVED_IDENTIFIER_FIXUP_518.x;
    _RESERVED_IDENTIFIER_FIXUP_999.y = _RESERVED_IDENTIFIER_FIXUP_518.y;
    _RESERVED_IDENTIFIER_FIXUP_999.z = _RESERVED_IDENTIFIER_FIXUP_518.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_527 = abs(optRegs.rows[optTile*82u+uint(1)]);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_535 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_527.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_536 = mix(_RESERVED_IDENTIFIER_FIXUP_999.xyz, _RESERVED_IDENTIFIER_FIXUP_515, _RESERVED_IDENTIFIER_FIXUP_535);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1005;
    _RESERVED_IDENTIFIER_FIXUP_1005.x = _RESERVED_IDENTIFIER_FIXUP_536.x;
    _RESERVED_IDENTIFIER_FIXUP_1005.y = _RESERVED_IDENTIFIER_FIXUP_536.y;
    _RESERVED_IDENTIFIER_FIXUP_1005.z = _RESERVED_IDENTIFIER_FIXUP_536.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_544 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_547 = _RESERVED_IDENTIFIER_FIXUP_544 * _RESERVED_IDENTIFIER_FIXUP_993.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1011;
    _RESERVED_IDENTIFIER_FIXUP_1011.x = _RESERVED_IDENTIFIER_FIXUP_547.x;
    _RESERVED_IDENTIFIER_FIXUP_1011.y = _RESERVED_IDENTIFIER_FIXUP_547.y;
    _RESERVED_IDENTIFIER_FIXUP_1011.z = _RESERVED_IDENTIFIER_FIXUP_547.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_561 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_527.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_562 = mix(_RESERVED_IDENTIFIER_FIXUP_1011.xyz, _RESERVED_IDENTIFIER_FIXUP_544, _RESERVED_IDENTIFIER_FIXUP_561);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1017;
    _RESERVED_IDENTIFIER_FIXUP_1017.x = _RESERVED_IDENTIFIER_FIXUP_562.x;
    _RESERVED_IDENTIFIER_FIXUP_1017.y = _RESERVED_IDENTIFIER_FIXUP_562.y;
    _RESERVED_IDENTIFIER_FIXUP_1017.z = _RESERVED_IDENTIFIER_FIXUP_562.z;
    vec2 param_1 = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_572 = hdTex4(param_1);
    vec2 param_2 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_585 = hdTex2(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_586 = _RESERVED_IDENTIFIER_FIXUP_993.xyz * _RESERVED_IDENTIFIER_FIXUP_585;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1023;
    _RESERVED_IDENTIFIER_FIXUP_1023.x = _RESERVED_IDENTIFIER_FIXUP_586.x;
    _RESERVED_IDENTIFIER_FIXUP_1023.y = _RESERVED_IDENTIFIER_FIXUP_586.y;
    _RESERVED_IDENTIFIER_FIXUP_1023.z = _RESERVED_IDENTIFIER_FIXUP_586.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_600 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_527.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_601 = mix(_RESERVED_IDENTIFIER_FIXUP_1023.xyz, _RESERVED_IDENTIFIER_FIXUP_585, _RESERVED_IDENTIFIER_FIXUP_600);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1029;
    _RESERVED_IDENTIFIER_FIXUP_1029.x = _RESERVED_IDENTIFIER_FIXUP_601.x;
    _RESERVED_IDENTIFIER_FIXUP_1029.y = _RESERVED_IDENTIFIER_FIXUP_601.y;
    _RESERVED_IDENTIFIER_FIXUP_1029.z = _RESERVED_IDENTIFIER_FIXUP_601.z;
    vec2 param_3 = texcoord3.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_620 = hdTex3(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_621 = _RESERVED_IDENTIFIER_FIXUP_993.xyz * _RESERVED_IDENTIFIER_FIXUP_620;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1035;
    _RESERVED_IDENTIFIER_FIXUP_1035.x = _RESERVED_IDENTIFIER_FIXUP_621.x;
    _RESERVED_IDENTIFIER_FIXUP_1035.y = _RESERVED_IDENTIFIER_FIXUP_621.y;
    _RESERVED_IDENTIFIER_FIXUP_1035.z = _RESERVED_IDENTIFIER_FIXUP_621.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_635 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_527.www, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_636 = mix(_RESERVED_IDENTIFIER_FIXUP_1035.xyz, _RESERVED_IDENTIFIER_FIXUP_620, _RESERVED_IDENTIFIER_FIXUP_635);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1041;
    _RESERVED_IDENTIFIER_FIXUP_1041.x = _RESERVED_IDENTIFIER_FIXUP_636.x;
    _RESERVED_IDENTIFIER_FIXUP_1041.y = _RESERVED_IDENTIFIER_FIXUP_636.y;
    _RESERVED_IDENTIFIER_FIXUP_1041.z = _RESERVED_IDENTIFIER_FIXUP_636.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1047;
    _RESERVED_IDENTIFIER_FIXUP_1047.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1047.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1047.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1178 = vec4(_RESERVED_IDENTIFIER_FIXUP_572.www * _RESERVED_IDENTIFIER_FIXUP_1047.xyz, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_689 = (mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1005, _RESERVED_IDENTIFIER_FIXUP_1017, _RESERVED_IDENTIFIER_FIXUP_572.xxxx), _RESERVED_IDENTIFIER_FIXUP_1029, _RESERVED_IDENTIFIER_FIXUP_572.yyyy), _RESERVED_IDENTIFIER_FIXUP_1041, _RESERVED_IDENTIFIER_FIXUP_572.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_1178.www) + _RESERVED_IDENTIFIER_FIXUP_1178.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1064;
    _RESERVED_IDENTIFIER_FIXUP_1064.x = _RESERVED_IDENTIFIER_FIXUP_689.x;
    _RESERVED_IDENTIFIER_FIXUP_1064.y = _RESERVED_IDENTIFIER_FIXUP_689.y;
    _RESERVED_IDENTIFIER_FIXUP_1064.z = _RESERVED_IDENTIFIER_FIXUP_689.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_702 = _RESERVED_IDENTIFIER_FIXUP_1064.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1070;
    _RESERVED_IDENTIFIER_FIXUP_1070.x = _RESERVED_IDENTIFIER_FIXUP_702.x;
    _RESERVED_IDENTIFIER_FIXUP_1070.y = _RESERVED_IDENTIFIER_FIXUP_702.y;
    _RESERVED_IDENTIFIER_FIXUP_1070.z = _RESERVED_IDENTIFIER_FIXUP_702.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_717 = _RESERVED_IDENTIFIER_FIXUP_1070.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1076;
    _RESERVED_IDENTIFIER_FIXUP_1076.x = _RESERVED_IDENTIFIER_FIXUP_717.x;
    _RESERVED_IDENTIFIER_FIXUP_1076.y = _RESERVED_IDENTIFIER_FIXUP_717.y;
    _RESERVED_IDENTIFIER_FIXUP_1076.z = _RESERVED_IDENTIFIER_FIXUP_717.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_755 = OptTex0( texcoord0.xyz);
    vec2 param_4 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_759 = hdTex1(param_4);
    vec3 _RESERVED_IDENTIFIER_FIXUP_764 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1084;
    _RESERVED_IDENTIFIER_FIXUP_1084.x = _RESERVED_IDENTIFIER_FIXUP_764.x;
    _RESERVED_IDENTIFIER_FIXUP_1084.y = _RESERVED_IDENTIFIER_FIXUP_764.y;
    _RESERVED_IDENTIFIER_FIXUP_1084.z = _RESERVED_IDENTIFIER_FIXUP_764.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = _RESERVED_IDENTIFIER_FIXUP_755.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = _RESERVED_IDENTIFIER_FIXUP_772 * _RESERVED_IDENTIFIER_FIXUP_1084.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1090;
    _RESERVED_IDENTIFIER_FIXUP_1090.x = _RESERVED_IDENTIFIER_FIXUP_775.x;
    _RESERVED_IDENTIFIER_FIXUP_1090.y = _RESERVED_IDENTIFIER_FIXUP_775.y;
    _RESERVED_IDENTIFIER_FIXUP_1090.z = _RESERVED_IDENTIFIER_FIXUP_775.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_793 = mix(_RESERVED_IDENTIFIER_FIXUP_1090.xyz, _RESERVED_IDENTIFIER_FIXUP_772, _RESERVED_IDENTIFIER_FIXUP_535);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1096 = _RESERVED_IDENTIFIER_FIXUP_755;
    _RESERVED_IDENTIFIER_FIXUP_1096.x = _RESERVED_IDENTIFIER_FIXUP_793.x;
    _RESERVED_IDENTIFIER_FIXUP_1096.y = _RESERVED_IDENTIFIER_FIXUP_793.y;
    _RESERVED_IDENTIFIER_FIXUP_1096.z = _RESERVED_IDENTIFIER_FIXUP_793.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_801 = _RESERVED_IDENTIFIER_FIXUP_759.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_804 = _RESERVED_IDENTIFIER_FIXUP_801 * _RESERVED_IDENTIFIER_FIXUP_1084.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1102;
    _RESERVED_IDENTIFIER_FIXUP_1102.x = _RESERVED_IDENTIFIER_FIXUP_804.x;
    _RESERVED_IDENTIFIER_FIXUP_1102.y = _RESERVED_IDENTIFIER_FIXUP_804.y;
    _RESERVED_IDENTIFIER_FIXUP_1102.z = _RESERVED_IDENTIFIER_FIXUP_804.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_819 = mix(_RESERVED_IDENTIFIER_FIXUP_1102.xyz, _RESERVED_IDENTIFIER_FIXUP_801, _RESERVED_IDENTIFIER_FIXUP_561);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1108 = _RESERVED_IDENTIFIER_FIXUP_759;
    _RESERVED_IDENTIFIER_FIXUP_1108.x = _RESERVED_IDENTIFIER_FIXUP_819.x;
    _RESERVED_IDENTIFIER_FIXUP_1108.y = _RESERVED_IDENTIFIER_FIXUP_819.y;
    _RESERVED_IDENTIFIER_FIXUP_1108.z = _RESERVED_IDENTIFIER_FIXUP_819.z;
    vec2 param_5 = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_829 = hdTex4(param_5);
    vec2 param_6 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_838 = hdTex2(param_6);
    vec3 _RESERVED_IDENTIFIER_FIXUP_842 = _RESERVED_IDENTIFIER_FIXUP_838.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_843 = _RESERVED_IDENTIFIER_FIXUP_1084.xyz * _RESERVED_IDENTIFIER_FIXUP_842;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1114;
    _RESERVED_IDENTIFIER_FIXUP_1114.x = _RESERVED_IDENTIFIER_FIXUP_843.x;
    _RESERVED_IDENTIFIER_FIXUP_1114.y = _RESERVED_IDENTIFIER_FIXUP_843.y;
    _RESERVED_IDENTIFIER_FIXUP_1114.z = _RESERVED_IDENTIFIER_FIXUP_843.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_858 = mix(_RESERVED_IDENTIFIER_FIXUP_1114.xyz, _RESERVED_IDENTIFIER_FIXUP_842, _RESERVED_IDENTIFIER_FIXUP_600);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_838;
    _RESERVED_IDENTIFIER_FIXUP_1120.x = _RESERVED_IDENTIFIER_FIXUP_858.x;
    _RESERVED_IDENTIFIER_FIXUP_1120.y = _RESERVED_IDENTIFIER_FIXUP_858.y;
    _RESERVED_IDENTIFIER_FIXUP_1120.z = _RESERVED_IDENTIFIER_FIXUP_858.z;
    vec2 param_7 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_873 = hdTex3(param_7);
    vec3 _RESERVED_IDENTIFIER_FIXUP_877 = _RESERVED_IDENTIFIER_FIXUP_873.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_878 = _RESERVED_IDENTIFIER_FIXUP_1084.xyz * _RESERVED_IDENTIFIER_FIXUP_877;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1126;
    _RESERVED_IDENTIFIER_FIXUP_1126.x = _RESERVED_IDENTIFIER_FIXUP_878.x;
    _RESERVED_IDENTIFIER_FIXUP_1126.y = _RESERVED_IDENTIFIER_FIXUP_878.y;
    _RESERVED_IDENTIFIER_FIXUP_1126.z = _RESERVED_IDENTIFIER_FIXUP_878.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_893 = mix(_RESERVED_IDENTIFIER_FIXUP_1126.xyz, _RESERVED_IDENTIFIER_FIXUP_877, _RESERVED_IDENTIFIER_FIXUP_635);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1132 = _RESERVED_IDENTIFIER_FIXUP_873;
    _RESERVED_IDENTIFIER_FIXUP_1132.x = _RESERVED_IDENTIFIER_FIXUP_893.x;
    _RESERVED_IDENTIFIER_FIXUP_1132.y = _RESERVED_IDENTIFIER_FIXUP_893.y;
    _RESERVED_IDENTIFIER_FIXUP_1132.z = _RESERVED_IDENTIFIER_FIXUP_893.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_904 = mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1096, _RESERVED_IDENTIFIER_FIXUP_1108, _RESERVED_IDENTIFIER_FIXUP_829.xxxx), _RESERVED_IDENTIFIER_FIXUP_1120, _RESERVED_IDENTIFIER_FIXUP_829.yyyy), _RESERVED_IDENTIFIER_FIXUP_1132, _RESERVED_IDENTIFIER_FIXUP_829.zzzz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_909 = _RESERVED_IDENTIFIER_FIXUP_904.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1138;
    _RESERVED_IDENTIFIER_FIXUP_1138.x = _RESERVED_IDENTIFIER_FIXUP_909.x;
    _RESERVED_IDENTIFIER_FIXUP_1138.y = _RESERVED_IDENTIFIER_FIXUP_909.y;
    _RESERVED_IDENTIFIER_FIXUP_1138.z = _RESERVED_IDENTIFIER_FIXUP_909.z;
    float _RESERVED_IDENTIFIER_FIXUP_930 = (_RESERVED_IDENTIFIER_FIXUP_829.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1179 = vec4(_RESERVED_IDENTIFIER_FIXUP_829.www * _RESERVED_IDENTIFIER_FIXUP_1138.xyz, _RESERVED_IDENTIFIER_FIXUP_930);
    _RESERVED_IDENTIFIER_FIXUP_1179.w = _RESERVED_IDENTIFIER_FIXUP_930;
    vec3 _RESERVED_IDENTIFIER_FIXUP_946 = (_RESERVED_IDENTIFIER_FIXUP_904.xyz * _RESERVED_IDENTIFIER_FIXUP_1179.www) + _RESERVED_IDENTIFIER_FIXUP_1179.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1157;
    _RESERVED_IDENTIFIER_FIXUP_1157.x = _RESERVED_IDENTIFIER_FIXUP_946.x;
    _RESERVED_IDENTIFIER_FIXUP_1157.y = _RESERVED_IDENTIFIER_FIXUP_946.y;
    _RESERVED_IDENTIFIER_FIXUP_1157.z = _RESERVED_IDENTIFIER_FIXUP_946.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_959 = _RESERVED_IDENTIFIER_FIXUP_1157.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1163;
    _RESERVED_IDENTIFIER_FIXUP_1163.x = _RESERVED_IDENTIFIER_FIXUP_959.x;
    _RESERVED_IDENTIFIER_FIXUP_1163.y = _RESERVED_IDENTIFIER_FIXUP_959.y;
    _RESERVED_IDENTIFIER_FIXUP_1163.z = _RESERVED_IDENTIFIER_FIXUP_959.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1163.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_363 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_372;
    if (_RESERVED_IDENTIFIER_FIXUP_363)
    {
        _RESERVED_IDENTIFIER_FIXUP_372 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_372 = _RESERVED_IDENTIFIER_FIXUP_363;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_372)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_409 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1076.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_435 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_985;
    if (_RESERVED_IDENTIFIER_FIXUP_409 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_985 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_409), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_435);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_985 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_435);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_985;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_930);
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
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec3 hdB68 = v0.xyz + v0.xyz;
    r2.x = hdB68.x;
    r2.y = hdB68.y;
    r2.z = hdB68.z;
    vec3 hdB84 = r0.xyz * r2.xyz;
    r3.x = hdB84.x;
    r3.y = hdB84.y;
    r3.z = hdB84.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 hdB107 = r0;
    vec3 hdB116 = mix(r3.xyz, hdB107.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB116.x;
    r0.y = hdB116.y;
    r0.z = hdB116.z;
    vec3 hdB127 = r1.xyz * r2.xyz;
    r3.x = hdB127.x;
    r3.y = hdB127.y;
    r3.z = hdB127.z;
    vec4 hdB136 = r1;
    vec3 hdB142 = mix(r3.xyz, hdB136.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB142.x;
    r1.y = hdB142.y;
    r1.z = hdB142.z;
    vec2 param_1 = v6.xy;
    r3 = hdTex4(param_1);
    r5 = mix(r0, r1, r3.xxxx);
    vec2 param_2 = v4.xy;
    r0 = hdTex2(param_2);
    vec3 hdB168 = r2.xyz * r0.xyz;
    r1.x = hdB168.x;
    r1.y = hdB168.y;
    r1.z = hdB168.z;
    vec4 hdB177 = r0;
    vec3 hdB183 = mix(r1.xyz, hdB177.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = hdB183.x;
    r0.y = hdB183.y;
    r0.z = hdB183.z;
    r1 = mix(r5, r0, r3.yyyy);
    vec2 param_3 = v5.xy;
    r0 = hdTex3(param_3);
    vec4 hdB200 = r2;
    vec3 hdB204 = hdB200.xyz * r0.xyz;
    r2.x = hdB204.x;
    r2.y = hdB204.y;
    r2.z = hdB204.z;
    vec4 hdB213 = r0;
    vec3 hdB219 = mix(r2.xyz, hdB213.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r0.x = hdB219.x;
    r0.y = hdB219.y;
    r0.z = hdB219.z;
    r2 = mix(r1, r0, r3.zzzz);
    vec3 hdB235 = r2.www * v1.xyz;
    r0.x = hdB235.x;
    r0.y = hdB235.y;
    r0.z = hdB235.z;
    vec4 hdB244 = r0;
    vec3 hdB246 = r3.www * hdB244.xyz;
    r0.x = hdB246.x;
    r0.y = hdB246.y;
    r0.z = hdB246.z;
    r0.w = (r3.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB263 = r0;
    vec4 hdB266 = r0;
    vec3 hdB268 = (r2.xyz * hdB263.www) + hdB266.xyz;
    r0.x = hdB268.x;
    r0.y = hdB268.y;
    r0.z = hdB268.z;
    vec4 hdB275 = r0;
    vec3 hdB282 = hdB275.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB282.x;
    r0.y = hdB282.y;
    r0.z = hdB282.z;
    vec3 hdB297 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB297.x;
    oC0.y = hdB297.y;
    oC0.z = hdB297.z;
    oC0.w = 1.0;
    bool hdB310 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB318;
    if (hdB310)
    {
        hdB318 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB318 = hdB310;
    }
    if (hdB318)
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
    bool _1215 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1225;
    if (_1215)
    {
        _1225 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 30u) != 0u;
    }
    else
    {
        _1225 = _1215;
    }
    if (_1225)
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
        bool _1250 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1265;
        if (!_1250)
        {
            _1265 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 30u) != 0u;
        }
        else
        {
            _1265 = _1250;
        }
        if (_1265)
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
