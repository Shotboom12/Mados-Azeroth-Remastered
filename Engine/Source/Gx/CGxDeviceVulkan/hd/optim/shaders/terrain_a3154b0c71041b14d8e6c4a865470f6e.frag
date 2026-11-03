#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1100;
vec4 _RESERVED_IDENTIFIER_FIXUP_1101;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _43 = hdOverride >= 0;
    bool _62;
    if (_43)
    {
        _62 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _62 = _43;
    }
    vec4 _63;
    if (_62)
    {
        _63 = vec4(float(hdOverride));
    }
    else
    {
        _63 = value;
    }
    return _63;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _80 = hdOverride >= 0;
    bool _90;
    if (_80)
    {
        _90 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _90 = _80;
    }
    vec4 _91;
    if (_90)
    {
        _91 = vec4(float(hdOverride));
    }
    else
    {
        _91 = value;
    }
    return _91;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _108 = hdOverride >= 0;
    bool _118;
    if (_108)
    {
        _118 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _118 = _108;
    }
    vec4 _119;
    if (_118)
    {
        _119 = vec4(float(hdOverride));
    }
    else
    {
        _119 = value;
    }
    return _119;
}

void HDActual()
{
    vec3 _RESERVED_IDENTIFIER_FIXUP_474 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1100).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_477 = _RESERVED_IDENTIFIER_FIXUP_474 + _RESERVED_IDENTIFIER_FIXUP_474;
    float _RESERVED_IDENTIFIER_FIXUP_479 = _RESERVED_IDENTIFIER_FIXUP_477.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_925;
    _RESERVED_IDENTIFIER_FIXUP_925.x = _RESERVED_IDENTIFIER_FIXUP_479;
    _RESERVED_IDENTIFIER_FIXUP_925.y = _RESERVED_IDENTIFIER_FIXUP_477.y;
    _RESERVED_IDENTIFIER_FIXUP_925.z = _RESERVED_IDENTIFIER_FIXUP_477.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_485 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_488 = _RESERVED_IDENTIFIER_FIXUP_485 * _RESERVED_IDENTIFIER_FIXUP_925.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_931;
    _RESERVED_IDENTIFIER_FIXUP_931.x = _RESERVED_IDENTIFIER_FIXUP_488.x;
    _RESERVED_IDENTIFIER_FIXUP_931.y = _RESERVED_IDENTIFIER_FIXUP_488.y;
    _RESERVED_IDENTIFIER_FIXUP_931.z = _RESERVED_IDENTIFIER_FIXUP_488.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_498 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_937;
    _RESERVED_IDENTIFIER_FIXUP_937.x = _RESERVED_IDENTIFIER_FIXUP_498.x;
    _RESERVED_IDENTIFIER_FIXUP_937.y = _RESERVED_IDENTIFIER_FIXUP_498.y;
    _RESERVED_IDENTIFIER_FIXUP_937.z = _RESERVED_IDENTIFIER_FIXUP_498.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_512 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_937.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_513 = mix(_RESERVED_IDENTIFIER_FIXUP_931.xyz, _RESERVED_IDENTIFIER_FIXUP_485, _RESERVED_IDENTIFIER_FIXUP_512);
    vec4 _RESERVED_IDENTIFIER_FIXUP_943;
    _RESERVED_IDENTIFIER_FIXUP_943.x = _RESERVED_IDENTIFIER_FIXUP_513.x;
    _RESERVED_IDENTIFIER_FIXUP_943.y = _RESERVED_IDENTIFIER_FIXUP_513.y;
    _RESERVED_IDENTIFIER_FIXUP_943.z = _RESERVED_IDENTIFIER_FIXUP_513.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_527 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_528 = _RESERVED_IDENTIFIER_FIXUP_925.xyz * _RESERVED_IDENTIFIER_FIXUP_527;
    vec4 _RESERVED_IDENTIFIER_FIXUP_949;
    _RESERVED_IDENTIFIER_FIXUP_949.x = _RESERVED_IDENTIFIER_FIXUP_528.x;
    _RESERVED_IDENTIFIER_FIXUP_949.y = _RESERVED_IDENTIFIER_FIXUP_528.y;
    _RESERVED_IDENTIFIER_FIXUP_949.z = _RESERVED_IDENTIFIER_FIXUP_528.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_542 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_937.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_543 = mix(_RESERVED_IDENTIFIER_FIXUP_949.xyz, _RESERVED_IDENTIFIER_FIXUP_527, _RESERVED_IDENTIFIER_FIXUP_542);
    vec4 _RESERVED_IDENTIFIER_FIXUP_955;
    _RESERVED_IDENTIFIER_FIXUP_955.x = _RESERVED_IDENTIFIER_FIXUP_543.x;
    _RESERVED_IDENTIFIER_FIXUP_955.y = _RESERVED_IDENTIFIER_FIXUP_543.y;
    _RESERVED_IDENTIFIER_FIXUP_955.z = _RESERVED_IDENTIFIER_FIXUP_543.z;
    vec2 param_1 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_553 = hdTex3(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_561 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_553.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1102 = vec4(_RESERVED_IDENTIFIER_FIXUP_479, _RESERVED_IDENTIFIER_FIXUP_477.yz, _RESERVED_IDENTIFIER_FIXUP_561);
    _RESERVED_IDENTIFIER_FIXUP_1102.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_561;
    vec2 param_2 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_581 = hdTex2(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_582 = _RESERVED_IDENTIFIER_FIXUP_1102.xyz * _RESERVED_IDENTIFIER_FIXUP_581;
    vec4 _RESERVED_IDENTIFIER_FIXUP_966;
    _RESERVED_IDENTIFIER_FIXUP_966.x = _RESERVED_IDENTIFIER_FIXUP_582.x;
    _RESERVED_IDENTIFIER_FIXUP_966.y = _RESERVED_IDENTIFIER_FIXUP_582.y;
    _RESERVED_IDENTIFIER_FIXUP_966.z = _RESERVED_IDENTIFIER_FIXUP_582.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_596 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_937.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_597 = mix(_RESERVED_IDENTIFIER_FIXUP_966.xyz, _RESERVED_IDENTIFIER_FIXUP_581, _RESERVED_IDENTIFIER_FIXUP_596);
    vec4 _RESERVED_IDENTIFIER_FIXUP_972;
    _RESERVED_IDENTIFIER_FIXUP_972.x = _RESERVED_IDENTIFIER_FIXUP_597.x;
    _RESERVED_IDENTIFIER_FIXUP_972.y = _RESERVED_IDENTIFIER_FIXUP_597.y;
    _RESERVED_IDENTIFIER_FIXUP_972.z = _RESERVED_IDENTIFIER_FIXUP_597.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_609 = (_RESERVED_IDENTIFIER_FIXUP_972 * _RESERVED_IDENTIFIER_FIXUP_553.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_943 * _RESERVED_IDENTIFIER_FIXUP_1102.wwww) + (_RESERVED_IDENTIFIER_FIXUP_955 * _RESERVED_IDENTIFIER_FIXUP_553.xxxx));
    vec4 _RESERVED_IDENTIFIER_FIXUP_978;
    _RESERVED_IDENTIFIER_FIXUP_978.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_978.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_978.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_625 = _RESERVED_IDENTIFIER_FIXUP_553.www * _RESERVED_IDENTIFIER_FIXUP_978.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_984;
    _RESERVED_IDENTIFIER_FIXUP_984.x = _RESERVED_IDENTIFIER_FIXUP_625.x;
    _RESERVED_IDENTIFIER_FIXUP_984.y = _RESERVED_IDENTIFIER_FIXUP_625.y;
    _RESERVED_IDENTIFIER_FIXUP_984.z = _RESERVED_IDENTIFIER_FIXUP_625.z;
    _RESERVED_IDENTIFIER_FIXUP_609.w = (_RESERVED_IDENTIFIER_FIXUP_553.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_644 = (_RESERVED_IDENTIFIER_FIXUP_609.xyz * _RESERVED_IDENTIFIER_FIXUP_609.www) + _RESERVED_IDENTIFIER_FIXUP_984.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_993;
    _RESERVED_IDENTIFIER_FIXUP_993.x = _RESERVED_IDENTIFIER_FIXUP_644.x;
    _RESERVED_IDENTIFIER_FIXUP_993.y = _RESERVED_IDENTIFIER_FIXUP_644.y;
    _RESERVED_IDENTIFIER_FIXUP_993.z = _RESERVED_IDENTIFIER_FIXUP_644.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_657 = _RESERVED_IDENTIFIER_FIXUP_993.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_999;
    _RESERVED_IDENTIFIER_FIXUP_999.x = _RESERVED_IDENTIFIER_FIXUP_657.x;
    _RESERVED_IDENTIFIER_FIXUP_999.y = _RESERVED_IDENTIFIER_FIXUP_657.y;
    _RESERVED_IDENTIFIER_FIXUP_999.z = _RESERVED_IDENTIFIER_FIXUP_657.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_672 = _RESERVED_IDENTIFIER_FIXUP_999.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1005;
    _RESERVED_IDENTIFIER_FIXUP_1005.x = _RESERVED_IDENTIFIER_FIXUP_672.x;
    _RESERVED_IDENTIFIER_FIXUP_1005.y = _RESERVED_IDENTIFIER_FIXUP_672.y;
    _RESERVED_IDENTIFIER_FIXUP_1005.z = _RESERVED_IDENTIFIER_FIXUP_672.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_707 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_712 = color0.xyz + color0.xyz;
    float _RESERVED_IDENTIFIER_FIXUP_714 = _RESERVED_IDENTIFIER_FIXUP_712.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1013;
    _RESERVED_IDENTIFIER_FIXUP_1013.x = _RESERVED_IDENTIFIER_FIXUP_714;
    _RESERVED_IDENTIFIER_FIXUP_1013.y = _RESERVED_IDENTIFIER_FIXUP_712.y;
    _RESERVED_IDENTIFIER_FIXUP_1013.z = _RESERVED_IDENTIFIER_FIXUP_712.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_720 = _RESERVED_IDENTIFIER_FIXUP_707.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_723 = _RESERVED_IDENTIFIER_FIXUP_720 * _RESERVED_IDENTIFIER_FIXUP_1013.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1019;
    _RESERVED_IDENTIFIER_FIXUP_1019.x = _RESERVED_IDENTIFIER_FIXUP_723.x;
    _RESERVED_IDENTIFIER_FIXUP_1019.y = _RESERVED_IDENTIFIER_FIXUP_723.y;
    _RESERVED_IDENTIFIER_FIXUP_1019.z = _RESERVED_IDENTIFIER_FIXUP_723.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_748 = mix(_RESERVED_IDENTIFIER_FIXUP_1019.xyz, _RESERVED_IDENTIFIER_FIXUP_720, _RESERVED_IDENTIFIER_FIXUP_512);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1031 = _RESERVED_IDENTIFIER_FIXUP_707;
    _RESERVED_IDENTIFIER_FIXUP_1031.x = _RESERVED_IDENTIFIER_FIXUP_748.x;
    _RESERVED_IDENTIFIER_FIXUP_1031.y = _RESERVED_IDENTIFIER_FIXUP_748.y;
    _RESERVED_IDENTIFIER_FIXUP_1031.z = _RESERVED_IDENTIFIER_FIXUP_748.z;
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_758 = hdTex1(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_762 = _RESERVED_IDENTIFIER_FIXUP_758.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_763 = _RESERVED_IDENTIFIER_FIXUP_1013.xyz * _RESERVED_IDENTIFIER_FIXUP_762;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1037;
    _RESERVED_IDENTIFIER_FIXUP_1037.x = _RESERVED_IDENTIFIER_FIXUP_763.x;
    _RESERVED_IDENTIFIER_FIXUP_1037.y = _RESERVED_IDENTIFIER_FIXUP_763.y;
    _RESERVED_IDENTIFIER_FIXUP_1037.z = _RESERVED_IDENTIFIER_FIXUP_763.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_778 = mix(_RESERVED_IDENTIFIER_FIXUP_1037.xyz, _RESERVED_IDENTIFIER_FIXUP_762, _RESERVED_IDENTIFIER_FIXUP_542);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1043 = _RESERVED_IDENTIFIER_FIXUP_758;
    _RESERVED_IDENTIFIER_FIXUP_1043.x = _RESERVED_IDENTIFIER_FIXUP_778.x;
    _RESERVED_IDENTIFIER_FIXUP_1043.y = _RESERVED_IDENTIFIER_FIXUP_778.y;
    _RESERVED_IDENTIFIER_FIXUP_1043.z = _RESERVED_IDENTIFIER_FIXUP_778.z;
    vec2 param_4 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_788 = hdTex3(param_4);
    float _RESERVED_IDENTIFIER_FIXUP_796 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_788.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1103 = vec4(_RESERVED_IDENTIFIER_FIXUP_714, _RESERVED_IDENTIFIER_FIXUP_712.yz, _RESERVED_IDENTIFIER_FIXUP_796);
    _RESERVED_IDENTIFIER_FIXUP_1103.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_796;
    vec2 param_5 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_812 = hdTex2(param_5);
    vec3 _RESERVED_IDENTIFIER_FIXUP_816 = _RESERVED_IDENTIFIER_FIXUP_812.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_817 = _RESERVED_IDENTIFIER_FIXUP_1103.xyz * _RESERVED_IDENTIFIER_FIXUP_816;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1054;
    _RESERVED_IDENTIFIER_FIXUP_1054.x = _RESERVED_IDENTIFIER_FIXUP_817.x;
    _RESERVED_IDENTIFIER_FIXUP_1054.y = _RESERVED_IDENTIFIER_FIXUP_817.y;
    _RESERVED_IDENTIFIER_FIXUP_1054.z = _RESERVED_IDENTIFIER_FIXUP_817.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_832 = mix(_RESERVED_IDENTIFIER_FIXUP_1054.xyz, _RESERVED_IDENTIFIER_FIXUP_816, _RESERVED_IDENTIFIER_FIXUP_596);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1060 = _RESERVED_IDENTIFIER_FIXUP_812;
    _RESERVED_IDENTIFIER_FIXUP_1060.x = _RESERVED_IDENTIFIER_FIXUP_832.x;
    _RESERVED_IDENTIFIER_FIXUP_1060.y = _RESERVED_IDENTIFIER_FIXUP_832.y;
    _RESERVED_IDENTIFIER_FIXUP_1060.z = _RESERVED_IDENTIFIER_FIXUP_832.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_844 = (_RESERVED_IDENTIFIER_FIXUP_1060 * _RESERVED_IDENTIFIER_FIXUP_788.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1031 * _RESERVED_IDENTIFIER_FIXUP_1103.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1043 * _RESERVED_IDENTIFIER_FIXUP_788.xxxx));
    vec3 _RESERVED_IDENTIFIER_FIXUP_849 = _RESERVED_IDENTIFIER_FIXUP_844.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1066;
    _RESERVED_IDENTIFIER_FIXUP_1066.x = _RESERVED_IDENTIFIER_FIXUP_849.x;
    _RESERVED_IDENTIFIER_FIXUP_1066.y = _RESERVED_IDENTIFIER_FIXUP_849.y;
    _RESERVED_IDENTIFIER_FIXUP_1066.z = _RESERVED_IDENTIFIER_FIXUP_849.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_860 = _RESERVED_IDENTIFIER_FIXUP_788.www * _RESERVED_IDENTIFIER_FIXUP_1066.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1072;
    _RESERVED_IDENTIFIER_FIXUP_1072.x = _RESERVED_IDENTIFIER_FIXUP_860.x;
    _RESERVED_IDENTIFIER_FIXUP_1072.y = _RESERVED_IDENTIFIER_FIXUP_860.y;
    _RESERVED_IDENTIFIER_FIXUP_1072.z = _RESERVED_IDENTIFIER_FIXUP_860.z;
    _RESERVED_IDENTIFIER_FIXUP_844.w = (_RESERVED_IDENTIFIER_FIXUP_788.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_879 = (_RESERVED_IDENTIFIER_FIXUP_844.xyz * _RESERVED_IDENTIFIER_FIXUP_844.www) + _RESERVED_IDENTIFIER_FIXUP_1072.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1081;
    _RESERVED_IDENTIFIER_FIXUP_1081.x = _RESERVED_IDENTIFIER_FIXUP_879.x;
    _RESERVED_IDENTIFIER_FIXUP_1081.y = _RESERVED_IDENTIFIER_FIXUP_879.y;
    _RESERVED_IDENTIFIER_FIXUP_1081.z = _RESERVED_IDENTIFIER_FIXUP_879.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_892 = _RESERVED_IDENTIFIER_FIXUP_1081.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1087;
    _RESERVED_IDENTIFIER_FIXUP_1087.x = _RESERVED_IDENTIFIER_FIXUP_892.x;
    _RESERVED_IDENTIFIER_FIXUP_1087.y = _RESERVED_IDENTIFIER_FIXUP_892.y;
    _RESERVED_IDENTIFIER_FIXUP_1087.z = _RESERVED_IDENTIFIER_FIXUP_892.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1087.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_340 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_349;
    if (_RESERVED_IDENTIFIER_FIXUP_340)
    {
        _RESERVED_IDENTIFIER_FIXUP_349 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_349 = _RESERVED_IDENTIFIER_FIXUP_340;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_349)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_386 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1005.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_412 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_918;
    if (_RESERVED_IDENTIFIER_FIXUP_386 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_918 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_386), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_412);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_918 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_412);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_918;
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
    r0 = OptTex0( v2.xyz);
    vec3 hdB55 = v0.xyz + v0.xyz;
    r1.x = hdB55.x;
    r1.y = hdB55.y;
    r1.z = hdB55.z;
    vec3 hdB71 = r0.xyz * r1.xyz;
    r2.x = hdB71.x;
    r2.y = hdB71.y;
    r2.z = hdB71.z;
    vec3 hdB92 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r3.x = hdB92.x;
    r3.y = hdB92.y;
    r3.z = hdB92.z;
    vec4 hdB101 = r0;
    vec3 hdB110 = mix(r2.xyz, hdB101.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB110.x;
    r0.y = hdB110.y;
    r0.z = hdB110.z;
    vec2 param = v3.xy;
    r2 = hdTex1(param);
    vec3 hdB130 = r1.xyz * r2.xyz;
    r4.x = hdB130.x;
    r4.y = hdB130.y;
    r4.z = hdB130.z;
    vec4 hdB139 = r2;
    vec3 hdB145 = mix(r4.xyz, hdB139.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r2.x = hdB145.x;
    r2.y = hdB145.y;
    r2.z = hdB145.z;
    vec2 param_1 = v5.xy;
    r4 = hdTex3(param_1);
    r2 *= r4.xxxx;
    r1.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r1.w = (-r1.w) + 1.0;
    r0 = (r0 * r1.wwww) + r2;
    vec2 param_2 = v4.xy;
    r2 = hdTex2(param_2);
    vec4 hdB185 = r1;
    vec3 hdB189 = hdB185.xyz * r2.xyz;
    r1.x = hdB189.x;
    r1.y = hdB189.y;
    r1.z = hdB189.z;
    vec4 hdB198 = r2;
    vec3 hdB204 = mix(r1.xyz, hdB198.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r2.x = hdB204.x;
    r2.y = hdB204.y;
    r2.z = hdB204.z;
    r0 = (r2 * r4.yyyy) + r0;
    vec3 hdB221 = r0.www * v1.xyz;
    r1.x = hdB221.x;
    r1.y = hdB221.y;
    r1.z = hdB221.z;
    vec4 hdB230 = r1;
    vec3 hdB232 = r4.www * hdB230.xyz;
    r1.x = hdB232.x;
    r1.y = hdB232.y;
    r1.z = hdB232.z;
    r0.w = (r4.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB246 = r0;
    vec4 hdB248 = r0;
    vec3 hdB253 = (hdB246.xyz * hdB248.www) + r1.xyz;
    r0.x = hdB253.x;
    r0.y = hdB253.y;
    r0.z = hdB253.z;
    vec4 hdB260 = r0;
    vec3 hdB267 = hdB260.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB267.x;
    r0.y = hdB267.y;
    r0.z = hdB267.z;
    vec3 hdB282 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB282.x;
    oC0.y = hdB282.y;
    oC0.z = hdB282.z;
    oC0.w = 1.0;
    bool hdB294 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB302;
    if (hdB294)
    {
        hdB302 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB302 = hdB294;
    }
    if (hdB302)
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
    bool _1146 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1156;
    if (_1146)
    {
        _1156 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 14u) != 0u;
    }
    else
    {
        _1156 = _1146;
    }
    if (_1156)
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
        bool _1181 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1196;
        if (!_1181)
        {
            _1196 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 14u) != 0u;
        }
        else
        {
            _1196 = _1181;
        }
        if (_1196)
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
