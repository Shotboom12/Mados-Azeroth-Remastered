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
float _RESERVED_IDENTIFIER_FIXUP_1069;
vec4 _RESERVED_IDENTIFIER_FIXUP_1070;


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
    vec3 _RESERVED_IDENTIFIER_FIXUP_463 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1069).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_466 = _RESERVED_IDENTIFIER_FIXUP_463 + _RESERVED_IDENTIFIER_FIXUP_463;
    vec4 _RESERVED_IDENTIFIER_FIXUP_898;
    _RESERVED_IDENTIFIER_FIXUP_898.x = _RESERVED_IDENTIFIER_FIXUP_466.x;
    _RESERVED_IDENTIFIER_FIXUP_898.y = _RESERVED_IDENTIFIER_FIXUP_466.y;
    _RESERVED_IDENTIFIER_FIXUP_898.z = _RESERVED_IDENTIFIER_FIXUP_466.z;
    vec2 param = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_474 = hdTex0(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_477 = _RESERVED_IDENTIFIER_FIXUP_474 * _RESERVED_IDENTIFIER_FIXUP_898.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_904;
    _RESERVED_IDENTIFIER_FIXUP_904.x = _RESERVED_IDENTIFIER_FIXUP_477.x;
    _RESERVED_IDENTIFIER_FIXUP_904.y = _RESERVED_IDENTIFIER_FIXUP_477.y;
    _RESERVED_IDENTIFIER_FIXUP_904.z = _RESERVED_IDENTIFIER_FIXUP_477.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_487 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_910;
    _RESERVED_IDENTIFIER_FIXUP_910.x = _RESERVED_IDENTIFIER_FIXUP_487.x;
    _RESERVED_IDENTIFIER_FIXUP_910.y = _RESERVED_IDENTIFIER_FIXUP_487.y;
    _RESERVED_IDENTIFIER_FIXUP_910.z = _RESERVED_IDENTIFIER_FIXUP_487.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_501 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_910.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_502 = mix(_RESERVED_IDENTIFIER_FIXUP_904.xyz, _RESERVED_IDENTIFIER_FIXUP_474, _RESERVED_IDENTIFIER_FIXUP_501);
    vec4 _RESERVED_IDENTIFIER_FIXUP_916;
    _RESERVED_IDENTIFIER_FIXUP_916.x = _RESERVED_IDENTIFIER_FIXUP_502.x;
    _RESERVED_IDENTIFIER_FIXUP_916.y = _RESERVED_IDENTIFIER_FIXUP_502.y;
    _RESERVED_IDENTIFIER_FIXUP_916.z = _RESERVED_IDENTIFIER_FIXUP_502.z;
    vec2 param_1 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_516 = hdTex1(param_1).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_517 = _RESERVED_IDENTIFIER_FIXUP_898.xyz * _RESERVED_IDENTIFIER_FIXUP_516;
    vec4 _RESERVED_IDENTIFIER_FIXUP_922;
    _RESERVED_IDENTIFIER_FIXUP_922.x = _RESERVED_IDENTIFIER_FIXUP_517.x;
    _RESERVED_IDENTIFIER_FIXUP_922.y = _RESERVED_IDENTIFIER_FIXUP_517.y;
    _RESERVED_IDENTIFIER_FIXUP_922.z = _RESERVED_IDENTIFIER_FIXUP_517.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_531 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_910.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_532 = mix(_RESERVED_IDENTIFIER_FIXUP_922.xyz, _RESERVED_IDENTIFIER_FIXUP_516, _RESERVED_IDENTIFIER_FIXUP_531);
    vec4 _RESERVED_IDENTIFIER_FIXUP_928;
    _RESERVED_IDENTIFIER_FIXUP_928.x = _RESERVED_IDENTIFIER_FIXUP_532.x;
    _RESERVED_IDENTIFIER_FIXUP_928.y = _RESERVED_IDENTIFIER_FIXUP_532.y;
    _RESERVED_IDENTIFIER_FIXUP_928.z = _RESERVED_IDENTIFIER_FIXUP_532.z;
    vec2 param_2 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_542 = hdTex3(param_2);
    vec2 param_3 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_555 = hdTex2(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_556 = _RESERVED_IDENTIFIER_FIXUP_898.xyz * _RESERVED_IDENTIFIER_FIXUP_555;
    vec4 _RESERVED_IDENTIFIER_FIXUP_934;
    _RESERVED_IDENTIFIER_FIXUP_934.x = _RESERVED_IDENTIFIER_FIXUP_556.x;
    _RESERVED_IDENTIFIER_FIXUP_934.y = _RESERVED_IDENTIFIER_FIXUP_556.y;
    _RESERVED_IDENTIFIER_FIXUP_934.z = _RESERVED_IDENTIFIER_FIXUP_556.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_570 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_910.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_571 = mix(_RESERVED_IDENTIFIER_FIXUP_934.xyz, _RESERVED_IDENTIFIER_FIXUP_555, _RESERVED_IDENTIFIER_FIXUP_570);
    vec4 _RESERVED_IDENTIFIER_FIXUP_940;
    _RESERVED_IDENTIFIER_FIXUP_940.x = _RESERVED_IDENTIFIER_FIXUP_571.x;
    _RESERVED_IDENTIFIER_FIXUP_940.y = _RESERVED_IDENTIFIER_FIXUP_571.y;
    _RESERVED_IDENTIFIER_FIXUP_940.z = _RESERVED_IDENTIFIER_FIXUP_571.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_946;
    _RESERVED_IDENTIFIER_FIXUP_946.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_946.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_946.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1071 = vec4(_RESERVED_IDENTIFIER_FIXUP_542.www * _RESERVED_IDENTIFIER_FIXUP_946.xyz, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_624 = (mix(mix(_RESERVED_IDENTIFIER_FIXUP_916, _RESERVED_IDENTIFIER_FIXUP_928, _RESERVED_IDENTIFIER_FIXUP_542.xxxx), _RESERVED_IDENTIFIER_FIXUP_940, _RESERVED_IDENTIFIER_FIXUP_542.yyyy).xyz * _RESERVED_IDENTIFIER_FIXUP_1071.www) + _RESERVED_IDENTIFIER_FIXUP_1071.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_963;
    _RESERVED_IDENTIFIER_FIXUP_963.x = _RESERVED_IDENTIFIER_FIXUP_624.x;
    _RESERVED_IDENTIFIER_FIXUP_963.y = _RESERVED_IDENTIFIER_FIXUP_624.y;
    _RESERVED_IDENTIFIER_FIXUP_963.z = _RESERVED_IDENTIFIER_FIXUP_624.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_637 = _RESERVED_IDENTIFIER_FIXUP_963.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_969;
    _RESERVED_IDENTIFIER_FIXUP_969.x = _RESERVED_IDENTIFIER_FIXUP_637.x;
    _RESERVED_IDENTIFIER_FIXUP_969.y = _RESERVED_IDENTIFIER_FIXUP_637.y;
    _RESERVED_IDENTIFIER_FIXUP_969.z = _RESERVED_IDENTIFIER_FIXUP_637.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_652 = _RESERVED_IDENTIFIER_FIXUP_969.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_975;
    _RESERVED_IDENTIFIER_FIXUP_975.x = _RESERVED_IDENTIFIER_FIXUP_652.x;
    _RESERVED_IDENTIFIER_FIXUP_975.y = _RESERVED_IDENTIFIER_FIXUP_652.y;
    _RESERVED_IDENTIFIER_FIXUP_975.z = _RESERVED_IDENTIFIER_FIXUP_652.z;
    vec2 param_4 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_688 = hdTex0(param_4);
    vec3 _RESERVED_IDENTIFIER_FIXUP_693 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_983;
    _RESERVED_IDENTIFIER_FIXUP_983.x = _RESERVED_IDENTIFIER_FIXUP_693.x;
    _RESERVED_IDENTIFIER_FIXUP_983.y = _RESERVED_IDENTIFIER_FIXUP_693.y;
    _RESERVED_IDENTIFIER_FIXUP_983.z = _RESERVED_IDENTIFIER_FIXUP_693.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_701 = _RESERVED_IDENTIFIER_FIXUP_688.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_704 = _RESERVED_IDENTIFIER_FIXUP_701 * _RESERVED_IDENTIFIER_FIXUP_983.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_989;
    _RESERVED_IDENTIFIER_FIXUP_989.x = _RESERVED_IDENTIFIER_FIXUP_704.x;
    _RESERVED_IDENTIFIER_FIXUP_989.y = _RESERVED_IDENTIFIER_FIXUP_704.y;
    _RESERVED_IDENTIFIER_FIXUP_989.z = _RESERVED_IDENTIFIER_FIXUP_704.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_729 = mix(_RESERVED_IDENTIFIER_FIXUP_989.xyz, _RESERVED_IDENTIFIER_FIXUP_701, _RESERVED_IDENTIFIER_FIXUP_501);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1001 = _RESERVED_IDENTIFIER_FIXUP_688;
    _RESERVED_IDENTIFIER_FIXUP_1001.x = _RESERVED_IDENTIFIER_FIXUP_729.x;
    _RESERVED_IDENTIFIER_FIXUP_1001.y = _RESERVED_IDENTIFIER_FIXUP_729.y;
    _RESERVED_IDENTIFIER_FIXUP_1001.z = _RESERVED_IDENTIFIER_FIXUP_729.z;
    vec2 param_5 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_739 = hdTex1(param_5);
    vec3 _RESERVED_IDENTIFIER_FIXUP_743 = _RESERVED_IDENTIFIER_FIXUP_739.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_744 = _RESERVED_IDENTIFIER_FIXUP_983.xyz * _RESERVED_IDENTIFIER_FIXUP_743;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1007;
    _RESERVED_IDENTIFIER_FIXUP_1007.x = _RESERVED_IDENTIFIER_FIXUP_744.x;
    _RESERVED_IDENTIFIER_FIXUP_1007.y = _RESERVED_IDENTIFIER_FIXUP_744.y;
    _RESERVED_IDENTIFIER_FIXUP_1007.z = _RESERVED_IDENTIFIER_FIXUP_744.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_759 = mix(_RESERVED_IDENTIFIER_FIXUP_1007.xyz, _RESERVED_IDENTIFIER_FIXUP_743, _RESERVED_IDENTIFIER_FIXUP_531);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1013 = _RESERVED_IDENTIFIER_FIXUP_739;
    _RESERVED_IDENTIFIER_FIXUP_1013.x = _RESERVED_IDENTIFIER_FIXUP_759.x;
    _RESERVED_IDENTIFIER_FIXUP_1013.y = _RESERVED_IDENTIFIER_FIXUP_759.y;
    _RESERVED_IDENTIFIER_FIXUP_1013.z = _RESERVED_IDENTIFIER_FIXUP_759.z;
    vec2 param_6 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_769 = hdTex3(param_6);
    vec2 param_7 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_778 = hdTex2(param_7);
    vec3 _RESERVED_IDENTIFIER_FIXUP_782 = _RESERVED_IDENTIFIER_FIXUP_778.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_783 = _RESERVED_IDENTIFIER_FIXUP_983.xyz * _RESERVED_IDENTIFIER_FIXUP_782;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1019;
    _RESERVED_IDENTIFIER_FIXUP_1019.x = _RESERVED_IDENTIFIER_FIXUP_783.x;
    _RESERVED_IDENTIFIER_FIXUP_1019.y = _RESERVED_IDENTIFIER_FIXUP_783.y;
    _RESERVED_IDENTIFIER_FIXUP_1019.z = _RESERVED_IDENTIFIER_FIXUP_783.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_798 = mix(_RESERVED_IDENTIFIER_FIXUP_1019.xyz, _RESERVED_IDENTIFIER_FIXUP_782, _RESERVED_IDENTIFIER_FIXUP_570);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1025 = _RESERVED_IDENTIFIER_FIXUP_778;
    _RESERVED_IDENTIFIER_FIXUP_1025.x = _RESERVED_IDENTIFIER_FIXUP_798.x;
    _RESERVED_IDENTIFIER_FIXUP_1025.y = _RESERVED_IDENTIFIER_FIXUP_798.y;
    _RESERVED_IDENTIFIER_FIXUP_1025.z = _RESERVED_IDENTIFIER_FIXUP_798.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_809 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1001, _RESERVED_IDENTIFIER_FIXUP_1013, _RESERVED_IDENTIFIER_FIXUP_769.xxxx), _RESERVED_IDENTIFIER_FIXUP_1025, _RESERVED_IDENTIFIER_FIXUP_769.yyyy);
    vec3 _RESERVED_IDENTIFIER_FIXUP_814 = _RESERVED_IDENTIFIER_FIXUP_809.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1031;
    _RESERVED_IDENTIFIER_FIXUP_1031.x = _RESERVED_IDENTIFIER_FIXUP_814.x;
    _RESERVED_IDENTIFIER_FIXUP_1031.y = _RESERVED_IDENTIFIER_FIXUP_814.y;
    _RESERVED_IDENTIFIER_FIXUP_1031.z = _RESERVED_IDENTIFIER_FIXUP_814.z;
    float _RESERVED_IDENTIFIER_FIXUP_835 = (_RESERVED_IDENTIFIER_FIXUP_769.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1072 = vec4(_RESERVED_IDENTIFIER_FIXUP_769.www * _RESERVED_IDENTIFIER_FIXUP_1031.xyz, _RESERVED_IDENTIFIER_FIXUP_835);
    _RESERVED_IDENTIFIER_FIXUP_1072.w = _RESERVED_IDENTIFIER_FIXUP_835;
    vec3 _RESERVED_IDENTIFIER_FIXUP_851 = (_RESERVED_IDENTIFIER_FIXUP_809.xyz * _RESERVED_IDENTIFIER_FIXUP_1072.www) + _RESERVED_IDENTIFIER_FIXUP_1072.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1050;
    _RESERVED_IDENTIFIER_FIXUP_1050.x = _RESERVED_IDENTIFIER_FIXUP_851.x;
    _RESERVED_IDENTIFIER_FIXUP_1050.y = _RESERVED_IDENTIFIER_FIXUP_851.y;
    _RESERVED_IDENTIFIER_FIXUP_1050.z = _RESERVED_IDENTIFIER_FIXUP_851.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_864 = _RESERVED_IDENTIFIER_FIXUP_1050.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1056;
    _RESERVED_IDENTIFIER_FIXUP_1056.x = _RESERVED_IDENTIFIER_FIXUP_864.x;
    _RESERVED_IDENTIFIER_FIXUP_1056.y = _RESERVED_IDENTIFIER_FIXUP_864.y;
    _RESERVED_IDENTIFIER_FIXUP_1056.z = _RESERVED_IDENTIFIER_FIXUP_864.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1056.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_328 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_337;
    if (_RESERVED_IDENTIFIER_FIXUP_328)
    {
        _RESERVED_IDENTIFIER_FIXUP_337 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_337 = _RESERVED_IDENTIFIER_FIXUP_328;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_337)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_374 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_975.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_400 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_890;
    if (_RESERVED_IDENTIFIER_FIXUP_374 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_890 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_374), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_400);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_890 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_400);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_890;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_835);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
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
    vec3 hdB112 = mix(r2.xyz, hdB103.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = hdB112.x;
    r0.y = hdB112.y;
    r0.z = hdB112.z;
    vec2 param_1 = v3.xy;
    r2 = hdTex1(param_1);
    vec3 hdB128 = r1.xyz * r2.xyz;
    r4.x = hdB128.x;
    r4.y = hdB128.y;
    r4.z = hdB128.z;
    vec4 hdB137 = r2;
    vec3 hdB143 = mix(r4.xyz, hdB137.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r2.x = hdB143.x;
    r2.y = hdB143.y;
    r2.z = hdB143.z;
    vec2 param_2 = v5.xy;
    r4 = hdTex3(param_2);
    r5 = mix(r0, r2, r4.xxxx);
    vec2 param_3 = v4.xy;
    r0 = hdTex2(param_3);
    vec4 hdB165 = r1;
    vec3 hdB169 = hdB165.xyz * r0.xyz;
    r1.x = hdB169.x;
    r1.y = hdB169.y;
    r1.z = hdB169.z;
    vec4 hdB178 = r0;
    vec3 hdB184 = mix(r1.xyz, hdB178.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r0.x = hdB184.x;
    r0.y = hdB184.y;
    r0.z = hdB184.z;
    r1 = mix(r5, r0, r4.yyyy);
    vec3 hdB200 = r1.www * v1.xyz;
    r0.x = hdB200.x;
    r0.y = hdB200.y;
    r0.z = hdB200.z;
    vec4 hdB209 = r0;
    vec3 hdB211 = r4.www * hdB209.xyz;
    r0.x = hdB211.x;
    r0.y = hdB211.y;
    r0.z = hdB211.z;
    r0.w = (r4.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB228 = r0;
    vec4 hdB231 = r0;
    vec3 hdB233 = (r1.xyz * hdB228.www) + hdB231.xyz;
    r0.x = hdB233.x;
    r0.y = hdB233.y;
    r0.z = hdB233.z;
    vec4 hdB240 = r0;
    vec3 hdB247 = hdB240.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB247.x;
    r0.y = hdB247.y;
    r0.z = hdB247.z;
    vec3 hdB262 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB262.x;
    oC0.y = hdB262.y;
    oC0.z = hdB262.z;
    oC0.w = 1.0;
    bool hdB275 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB283;
    if (hdB275)
    {
        hdB283 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB283 = hdB275;
    }
    if (hdB283)
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
    bool _1095 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1105;
    if (_1095)
    {
        _1105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 15u) != 0u;
    }
    else
    {
        _1105 = _1095;
    }
    if (_1105)
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
        bool _1130 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1145;
        if (!_1130)
        {
            _1145 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 15u) != 0u;
        }
        else
        {
            _1145 = _1130;
        }
        if (_1145)
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
