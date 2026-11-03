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
float _RESERVED_IDENTIFIER_FIXUP_1072;
vec4 _RESERVED_IDENTIFIER_FIXUP_1073;


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
    vec3 _RESERVED_IDENTIFIER_FIXUP_466 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1072).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_469 = _RESERVED_IDENTIFIER_FIXUP_466 + _RESERVED_IDENTIFIER_FIXUP_466;
    vec4 _RESERVED_IDENTIFIER_FIXUP_901;
    _RESERVED_IDENTIFIER_FIXUP_901.x = _RESERVED_IDENTIFIER_FIXUP_469.x;
    _RESERVED_IDENTIFIER_FIXUP_901.y = _RESERVED_IDENTIFIER_FIXUP_469.y;
    _RESERVED_IDENTIFIER_FIXUP_901.z = _RESERVED_IDENTIFIER_FIXUP_469.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_477 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_480 = _RESERVED_IDENTIFIER_FIXUP_477 * _RESERVED_IDENTIFIER_FIXUP_901.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_907;
    _RESERVED_IDENTIFIER_FIXUP_907.x = _RESERVED_IDENTIFIER_FIXUP_480.x;
    _RESERVED_IDENTIFIER_FIXUP_907.y = _RESERVED_IDENTIFIER_FIXUP_480.y;
    _RESERVED_IDENTIFIER_FIXUP_907.z = _RESERVED_IDENTIFIER_FIXUP_480.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_490 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_913;
    _RESERVED_IDENTIFIER_FIXUP_913.x = _RESERVED_IDENTIFIER_FIXUP_490.x;
    _RESERVED_IDENTIFIER_FIXUP_913.y = _RESERVED_IDENTIFIER_FIXUP_490.y;
    _RESERVED_IDENTIFIER_FIXUP_913.z = _RESERVED_IDENTIFIER_FIXUP_490.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_504 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_913.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_505 = mix(_RESERVED_IDENTIFIER_FIXUP_907.xyz, _RESERVED_IDENTIFIER_FIXUP_477, _RESERVED_IDENTIFIER_FIXUP_504);
    vec4 _RESERVED_IDENTIFIER_FIXUP_919;
    _RESERVED_IDENTIFIER_FIXUP_919.x = _RESERVED_IDENTIFIER_FIXUP_505.x;
    _RESERVED_IDENTIFIER_FIXUP_919.y = _RESERVED_IDENTIFIER_FIXUP_505.y;
    _RESERVED_IDENTIFIER_FIXUP_919.z = _RESERVED_IDENTIFIER_FIXUP_505.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_519 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_520 = _RESERVED_IDENTIFIER_FIXUP_901.xyz * _RESERVED_IDENTIFIER_FIXUP_519;
    vec4 _RESERVED_IDENTIFIER_FIXUP_925;
    _RESERVED_IDENTIFIER_FIXUP_925.x = _RESERVED_IDENTIFIER_FIXUP_520.x;
    _RESERVED_IDENTIFIER_FIXUP_925.y = _RESERVED_IDENTIFIER_FIXUP_520.y;
    _RESERVED_IDENTIFIER_FIXUP_925.z = _RESERVED_IDENTIFIER_FIXUP_520.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_534 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_913.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_535 = mix(_RESERVED_IDENTIFIER_FIXUP_925.xyz, _RESERVED_IDENTIFIER_FIXUP_519, _RESERVED_IDENTIFIER_FIXUP_534);
    vec4 _RESERVED_IDENTIFIER_FIXUP_931;
    _RESERVED_IDENTIFIER_FIXUP_931.x = _RESERVED_IDENTIFIER_FIXUP_535.x;
    _RESERVED_IDENTIFIER_FIXUP_931.y = _RESERVED_IDENTIFIER_FIXUP_535.y;
    _RESERVED_IDENTIFIER_FIXUP_931.z = _RESERVED_IDENTIFIER_FIXUP_535.z;
    vec2 param_1 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_545 = hdTex3(param_1);
    vec2 param_2 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_558 = hdTex2(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_559 = _RESERVED_IDENTIFIER_FIXUP_901.xyz * _RESERVED_IDENTIFIER_FIXUP_558;
    vec4 _RESERVED_IDENTIFIER_FIXUP_937;
    _RESERVED_IDENTIFIER_FIXUP_937.x = _RESERVED_IDENTIFIER_FIXUP_559.x;
    _RESERVED_IDENTIFIER_FIXUP_937.y = _RESERVED_IDENTIFIER_FIXUP_559.y;
    _RESERVED_IDENTIFIER_FIXUP_937.z = _RESERVED_IDENTIFIER_FIXUP_559.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_573 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_913.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_574 = mix(_RESERVED_IDENTIFIER_FIXUP_937.xyz, _RESERVED_IDENTIFIER_FIXUP_558, _RESERVED_IDENTIFIER_FIXUP_573);
    vec4 _RESERVED_IDENTIFIER_FIXUP_943;
    _RESERVED_IDENTIFIER_FIXUP_943.x = _RESERVED_IDENTIFIER_FIXUP_574.x;
    _RESERVED_IDENTIFIER_FIXUP_943.y = _RESERVED_IDENTIFIER_FIXUP_574.y;
    _RESERVED_IDENTIFIER_FIXUP_943.z = _RESERVED_IDENTIFIER_FIXUP_574.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_949;
    _RESERVED_IDENTIFIER_FIXUP_949.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_949.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_949.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1074 = vec4(_RESERVED_IDENTIFIER_FIXUP_545.www * _RESERVED_IDENTIFIER_FIXUP_949.xyz, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_627 = (mix(mix(_RESERVED_IDENTIFIER_FIXUP_919, _RESERVED_IDENTIFIER_FIXUP_931, _RESERVED_IDENTIFIER_FIXUP_545.xxxx), _RESERVED_IDENTIFIER_FIXUP_943, _RESERVED_IDENTIFIER_FIXUP_545.yyyy).xyz * _RESERVED_IDENTIFIER_FIXUP_1074.www) + _RESERVED_IDENTIFIER_FIXUP_1074.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_966;
    _RESERVED_IDENTIFIER_FIXUP_966.x = _RESERVED_IDENTIFIER_FIXUP_627.x;
    _RESERVED_IDENTIFIER_FIXUP_966.y = _RESERVED_IDENTIFIER_FIXUP_627.y;
    _RESERVED_IDENTIFIER_FIXUP_966.z = _RESERVED_IDENTIFIER_FIXUP_627.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_640 = _RESERVED_IDENTIFIER_FIXUP_966.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_972;
    _RESERVED_IDENTIFIER_FIXUP_972.x = _RESERVED_IDENTIFIER_FIXUP_640.x;
    _RESERVED_IDENTIFIER_FIXUP_972.y = _RESERVED_IDENTIFIER_FIXUP_640.y;
    _RESERVED_IDENTIFIER_FIXUP_972.z = _RESERVED_IDENTIFIER_FIXUP_640.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_655 = _RESERVED_IDENTIFIER_FIXUP_972.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_978;
    _RESERVED_IDENTIFIER_FIXUP_978.x = _RESERVED_IDENTIFIER_FIXUP_655.x;
    _RESERVED_IDENTIFIER_FIXUP_978.y = _RESERVED_IDENTIFIER_FIXUP_655.y;
    _RESERVED_IDENTIFIER_FIXUP_978.z = _RESERVED_IDENTIFIER_FIXUP_655.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_691 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_696 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_986;
    _RESERVED_IDENTIFIER_FIXUP_986.x = _RESERVED_IDENTIFIER_FIXUP_696.x;
    _RESERVED_IDENTIFIER_FIXUP_986.y = _RESERVED_IDENTIFIER_FIXUP_696.y;
    _RESERVED_IDENTIFIER_FIXUP_986.z = _RESERVED_IDENTIFIER_FIXUP_696.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_704 = _RESERVED_IDENTIFIER_FIXUP_691.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_707 = _RESERVED_IDENTIFIER_FIXUP_704 * _RESERVED_IDENTIFIER_FIXUP_986.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_992;
    _RESERVED_IDENTIFIER_FIXUP_992.x = _RESERVED_IDENTIFIER_FIXUP_707.x;
    _RESERVED_IDENTIFIER_FIXUP_992.y = _RESERVED_IDENTIFIER_FIXUP_707.y;
    _RESERVED_IDENTIFIER_FIXUP_992.z = _RESERVED_IDENTIFIER_FIXUP_707.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_732 = mix(_RESERVED_IDENTIFIER_FIXUP_992.xyz, _RESERVED_IDENTIFIER_FIXUP_704, _RESERVED_IDENTIFIER_FIXUP_504);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1004 = _RESERVED_IDENTIFIER_FIXUP_691;
    _RESERVED_IDENTIFIER_FIXUP_1004.x = _RESERVED_IDENTIFIER_FIXUP_732.x;
    _RESERVED_IDENTIFIER_FIXUP_1004.y = _RESERVED_IDENTIFIER_FIXUP_732.y;
    _RESERVED_IDENTIFIER_FIXUP_1004.z = _RESERVED_IDENTIFIER_FIXUP_732.z;
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_742 = hdTex1(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_746 = _RESERVED_IDENTIFIER_FIXUP_742.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_747 = _RESERVED_IDENTIFIER_FIXUP_986.xyz * _RESERVED_IDENTIFIER_FIXUP_746;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1010;
    _RESERVED_IDENTIFIER_FIXUP_1010.x = _RESERVED_IDENTIFIER_FIXUP_747.x;
    _RESERVED_IDENTIFIER_FIXUP_1010.y = _RESERVED_IDENTIFIER_FIXUP_747.y;
    _RESERVED_IDENTIFIER_FIXUP_1010.z = _RESERVED_IDENTIFIER_FIXUP_747.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_762 = mix(_RESERVED_IDENTIFIER_FIXUP_1010.xyz, _RESERVED_IDENTIFIER_FIXUP_746, _RESERVED_IDENTIFIER_FIXUP_534);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1016 = _RESERVED_IDENTIFIER_FIXUP_742;
    _RESERVED_IDENTIFIER_FIXUP_1016.x = _RESERVED_IDENTIFIER_FIXUP_762.x;
    _RESERVED_IDENTIFIER_FIXUP_1016.y = _RESERVED_IDENTIFIER_FIXUP_762.y;
    _RESERVED_IDENTIFIER_FIXUP_1016.z = _RESERVED_IDENTIFIER_FIXUP_762.z;
    vec2 param_4 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_772 = hdTex3(param_4);
    vec2 param_5 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_781 = hdTex2(param_5);
    vec3 _RESERVED_IDENTIFIER_FIXUP_785 = _RESERVED_IDENTIFIER_FIXUP_781.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_786 = _RESERVED_IDENTIFIER_FIXUP_986.xyz * _RESERVED_IDENTIFIER_FIXUP_785;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1022;
    _RESERVED_IDENTIFIER_FIXUP_1022.x = _RESERVED_IDENTIFIER_FIXUP_786.x;
    _RESERVED_IDENTIFIER_FIXUP_1022.y = _RESERVED_IDENTIFIER_FIXUP_786.y;
    _RESERVED_IDENTIFIER_FIXUP_1022.z = _RESERVED_IDENTIFIER_FIXUP_786.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_801 = mix(_RESERVED_IDENTIFIER_FIXUP_1022.xyz, _RESERVED_IDENTIFIER_FIXUP_785, _RESERVED_IDENTIFIER_FIXUP_573);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1028 = _RESERVED_IDENTIFIER_FIXUP_781;
    _RESERVED_IDENTIFIER_FIXUP_1028.x = _RESERVED_IDENTIFIER_FIXUP_801.x;
    _RESERVED_IDENTIFIER_FIXUP_1028.y = _RESERVED_IDENTIFIER_FIXUP_801.y;
    _RESERVED_IDENTIFIER_FIXUP_1028.z = _RESERVED_IDENTIFIER_FIXUP_801.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_812 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1004, _RESERVED_IDENTIFIER_FIXUP_1016, _RESERVED_IDENTIFIER_FIXUP_772.xxxx), _RESERVED_IDENTIFIER_FIXUP_1028, _RESERVED_IDENTIFIER_FIXUP_772.yyyy);
    vec3 _RESERVED_IDENTIFIER_FIXUP_817 = _RESERVED_IDENTIFIER_FIXUP_812.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1034;
    _RESERVED_IDENTIFIER_FIXUP_1034.x = _RESERVED_IDENTIFIER_FIXUP_817.x;
    _RESERVED_IDENTIFIER_FIXUP_1034.y = _RESERVED_IDENTIFIER_FIXUP_817.y;
    _RESERVED_IDENTIFIER_FIXUP_1034.z = _RESERVED_IDENTIFIER_FIXUP_817.z;
    float _RESERVED_IDENTIFIER_FIXUP_838 = (_RESERVED_IDENTIFIER_FIXUP_772.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1075 = vec4(_RESERVED_IDENTIFIER_FIXUP_772.www * _RESERVED_IDENTIFIER_FIXUP_1034.xyz, _RESERVED_IDENTIFIER_FIXUP_838);
    _RESERVED_IDENTIFIER_FIXUP_1075.w = _RESERVED_IDENTIFIER_FIXUP_838;
    vec3 _RESERVED_IDENTIFIER_FIXUP_854 = (_RESERVED_IDENTIFIER_FIXUP_812.xyz * _RESERVED_IDENTIFIER_FIXUP_1075.www) + _RESERVED_IDENTIFIER_FIXUP_1075.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1053;
    _RESERVED_IDENTIFIER_FIXUP_1053.x = _RESERVED_IDENTIFIER_FIXUP_854.x;
    _RESERVED_IDENTIFIER_FIXUP_1053.y = _RESERVED_IDENTIFIER_FIXUP_854.y;
    _RESERVED_IDENTIFIER_FIXUP_1053.z = _RESERVED_IDENTIFIER_FIXUP_854.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_867 = _RESERVED_IDENTIFIER_FIXUP_1053.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1059;
    _RESERVED_IDENTIFIER_FIXUP_1059.x = _RESERVED_IDENTIFIER_FIXUP_867.x;
    _RESERVED_IDENTIFIER_FIXUP_1059.y = _RESERVED_IDENTIFIER_FIXUP_867.y;
    _RESERVED_IDENTIFIER_FIXUP_1059.z = _RESERVED_IDENTIFIER_FIXUP_867.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1059.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_331 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_340;
    if (_RESERVED_IDENTIFIER_FIXUP_331)
    {
        _RESERVED_IDENTIFIER_FIXUP_340 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_340 = _RESERVED_IDENTIFIER_FIXUP_331;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_340)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_377 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_978.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_403 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_893;
    if (_RESERVED_IDENTIFIER_FIXUP_377 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_893 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_377), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_403);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_893 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_403);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_893;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_838);
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
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
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
    vec2 param = v3.xy;
    r2 = hdTex1(param);
    vec3 hdB131 = r1.xyz * r2.xyz;
    r4.x = hdB131.x;
    r4.y = hdB131.y;
    r4.z = hdB131.z;
    vec4 hdB140 = r2;
    vec3 hdB146 = mix(r4.xyz, hdB140.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r2.x = hdB146.x;
    r2.y = hdB146.y;
    r2.z = hdB146.z;
    vec2 param_1 = v5.xy;
    r4 = hdTex3(param_1);
    r5 = mix(r0, r2, r4.xxxx);
    vec2 param_2 = v4.xy;
    r0 = hdTex2(param_2);
    vec4 hdB168 = r1;
    vec3 hdB172 = hdB168.xyz * r0.xyz;
    r1.x = hdB172.x;
    r1.y = hdB172.y;
    r1.z = hdB172.z;
    vec4 hdB181 = r0;
    vec3 hdB187 = mix(r1.xyz, hdB181.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r0.x = hdB187.x;
    r0.y = hdB187.y;
    r0.z = hdB187.z;
    r1 = mix(r5, r0, r4.yyyy);
    vec3 hdB203 = r1.www * v1.xyz;
    r0.x = hdB203.x;
    r0.y = hdB203.y;
    r0.z = hdB203.z;
    vec4 hdB212 = r0;
    vec3 hdB214 = r4.www * hdB212.xyz;
    r0.x = hdB214.x;
    r0.y = hdB214.y;
    r0.z = hdB214.z;
    r0.w = (r4.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB231 = r0;
    vec4 hdB234 = r0;
    vec3 hdB236 = (r1.xyz * hdB231.www) + hdB234.xyz;
    r0.x = hdB236.x;
    r0.y = hdB236.y;
    r0.z = hdB236.z;
    vec4 hdB243 = r0;
    vec3 hdB250 = hdB243.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB250.x;
    r0.y = hdB250.y;
    r0.z = hdB250.z;
    vec3 hdB265 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB265.x;
    oC0.y = hdB265.y;
    oC0.z = hdB265.z;
    oC0.w = 1.0;
    bool hdB278 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB286;
    if (hdB278)
    {
        hdB286 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB286 = hdB278;
    }
    if (hdB286)
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
    bool _1069 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1079;
    if (_1069)
    {
        _1079 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 14u) != 0u;
    }
    else
    {
        _1079 = _1069;
    }
    if (_1079)
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
        bool _1104 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1119;
        if (!_1104)
        {
            _1119 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 14u) != 0u;
        }
        else
        {
            _1119 = _1104;
        }
        if (_1119)
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
