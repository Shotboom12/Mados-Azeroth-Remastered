#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
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
float _RESERVED_IDENTIFIER_FIXUP_944;
vec4 _RESERVED_IDENTIFIER_FIXUP_945;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _43 = hdOverride >= 0;
    bool _63;
    if (_43)
    {
        _63 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _63 = _43;
    }
    vec4 _64;
    if (_63)
    {
        _64 = vec4(float(hdOverride));
    }
    else
    {
        _64 = value;
    }
    return _64;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _81 = hdOverride >= 0;
    bool _90;
    if (_81)
    {
        _90 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _90 = _81;
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
    vec2 _RESERVED_IDENTIFIER_FIXUP_423 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_797;
    _RESERVED_IDENTIFIER_FIXUP_797.x = _RESERVED_IDENTIFIER_FIXUP_423.x;
    float _RESERVED_IDENTIFIER_FIXUP_427 = _RESERVED_IDENTIFIER_FIXUP_423.y;
    _RESERVED_IDENTIFIER_FIXUP_797.y = _RESERVED_IDENTIFIER_FIXUP_427;
    vec3 _RESERVED_IDENTIFIER_FIXUP_429 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_944).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_432 = _RESERVED_IDENTIFIER_FIXUP_429 + _RESERVED_IDENTIFIER_FIXUP_429;
    vec4 _RESERVED_IDENTIFIER_FIXUP_801;
    _RESERVED_IDENTIFIER_FIXUP_801.x = _RESERVED_IDENTIFIER_FIXUP_432.x;
    _RESERVED_IDENTIFIER_FIXUP_801.y = _RESERVED_IDENTIFIER_FIXUP_432.y;
    _RESERVED_IDENTIFIER_FIXUP_801.z = _RESERVED_IDENTIFIER_FIXUP_432.z;
    vec2 param = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_446 = hdTex0(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_447 = _RESERVED_IDENTIFIER_FIXUP_801.xyz * _RESERVED_IDENTIFIER_FIXUP_446;
    vec4 _RESERVED_IDENTIFIER_FIXUP_807;
    _RESERVED_IDENTIFIER_FIXUP_807.x = _RESERVED_IDENTIFIER_FIXUP_447.x;
    _RESERVED_IDENTIFIER_FIXUP_807.y = _RESERVED_IDENTIFIER_FIXUP_447.y;
    _RESERVED_IDENTIFIER_FIXUP_807.z = _RESERVED_IDENTIFIER_FIXUP_447.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_461 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_797.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_462 = mix(_RESERVED_IDENTIFIER_FIXUP_807.xyz, _RESERVED_IDENTIFIER_FIXUP_446, _RESERVED_IDENTIFIER_FIXUP_461);
    vec4 _RESERVED_IDENTIFIER_FIXUP_813;
    _RESERVED_IDENTIFIER_FIXUP_813.x = _RESERVED_IDENTIFIER_FIXUP_462.x;
    _RESERVED_IDENTIFIER_FIXUP_813.y = _RESERVED_IDENTIFIER_FIXUP_462.y;
    _RESERVED_IDENTIFIER_FIXUP_813.z = _RESERVED_IDENTIFIER_FIXUP_462.z;
    vec2 param_1 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_476 = hdTex1(param_1).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_477 = _RESERVED_IDENTIFIER_FIXUP_801.xyz * _RESERVED_IDENTIFIER_FIXUP_476;
    vec4 _RESERVED_IDENTIFIER_FIXUP_946 = vec4(_RESERVED_IDENTIFIER_FIXUP_477.x, _RESERVED_IDENTIFIER_FIXUP_427, _RESERVED_IDENTIFIER_FIXUP_477.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_492 = mix(_RESERVED_IDENTIFIER_FIXUP_946.xzw, _RESERVED_IDENTIFIER_FIXUP_476, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_946.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_825;
    _RESERVED_IDENTIFIER_FIXUP_825.x = _RESERVED_IDENTIFIER_FIXUP_492.x;
    _RESERVED_IDENTIFIER_FIXUP_825.y = _RESERVED_IDENTIFIER_FIXUP_492.y;
    _RESERVED_IDENTIFIER_FIXUP_825.z = _RESERVED_IDENTIFIER_FIXUP_492.z;
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_502 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_510 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_502.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_831 = _RESERVED_IDENTIFIER_FIXUP_502;
    _RESERVED_IDENTIFIER_FIXUP_831.x = _RESERVED_IDENTIFIER_FIXUP_510;
    _RESERVED_IDENTIFIER_FIXUP_831.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_510;
    vec4 _RESERVED_IDENTIFIER_FIXUP_836 = _RESERVED_IDENTIFIER_FIXUP_831;
    _RESERVED_IDENTIFIER_FIXUP_836.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_836.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_836.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_947 = vec4(_RESERVED_IDENTIFIER_FIXUP_836.www * _RESERVED_IDENTIFIER_FIXUP_836.xyz, (_RESERVED_IDENTIFIER_FIXUP_502.w * 0.300000011920928955078125) + 0.699999988079071044921875);
    vec3 _RESERVED_IDENTIFIER_FIXUP_557 = (((_RESERVED_IDENTIFIER_FIXUP_813 * _RESERVED_IDENTIFIER_FIXUP_831.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_825 * _RESERVED_IDENTIFIER_FIXUP_502.xxxx)).xyz * _RESERVED_IDENTIFIER_FIXUP_947.www) + _RESERVED_IDENTIFIER_FIXUP_947.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_851;
    _RESERVED_IDENTIFIER_FIXUP_851.x = _RESERVED_IDENTIFIER_FIXUP_557.x;
    _RESERVED_IDENTIFIER_FIXUP_851.y = _RESERVED_IDENTIFIER_FIXUP_557.y;
    _RESERVED_IDENTIFIER_FIXUP_851.z = _RESERVED_IDENTIFIER_FIXUP_557.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_570 = _RESERVED_IDENTIFIER_FIXUP_851.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_857;
    _RESERVED_IDENTIFIER_FIXUP_857.x = _RESERVED_IDENTIFIER_FIXUP_570.x;
    _RESERVED_IDENTIFIER_FIXUP_857.y = _RESERVED_IDENTIFIER_FIXUP_570.y;
    _RESERVED_IDENTIFIER_FIXUP_857.z = _RESERVED_IDENTIFIER_FIXUP_570.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_585 = _RESERVED_IDENTIFIER_FIXUP_857.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_863;
    _RESERVED_IDENTIFIER_FIXUP_863.x = _RESERVED_IDENTIFIER_FIXUP_585.x;
    _RESERVED_IDENTIFIER_FIXUP_863.y = _RESERVED_IDENTIFIER_FIXUP_585.y;
    _RESERVED_IDENTIFIER_FIXUP_863.z = _RESERVED_IDENTIFIER_FIXUP_585.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_626 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_875;
    _RESERVED_IDENTIFIER_FIXUP_875.x = _RESERVED_IDENTIFIER_FIXUP_626.x;
    _RESERVED_IDENTIFIER_FIXUP_875.y = _RESERVED_IDENTIFIER_FIXUP_626.y;
    _RESERVED_IDENTIFIER_FIXUP_875.z = _RESERVED_IDENTIFIER_FIXUP_626.z;
    vec2 param_3 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_636 = hdTex0(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_640 = _RESERVED_IDENTIFIER_FIXUP_636.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_875.xyz * _RESERVED_IDENTIFIER_FIXUP_640;
    vec4 _RESERVED_IDENTIFIER_FIXUP_881;
    _RESERVED_IDENTIFIER_FIXUP_881.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
    _RESERVED_IDENTIFIER_FIXUP_881.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
    _RESERVED_IDENTIFIER_FIXUP_881.z = _RESERVED_IDENTIFIER_FIXUP_641.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_656 = mix(_RESERVED_IDENTIFIER_FIXUP_881.xyz, _RESERVED_IDENTIFIER_FIXUP_640, _RESERVED_IDENTIFIER_FIXUP_461);
    vec4 _RESERVED_IDENTIFIER_FIXUP_887 = _RESERVED_IDENTIFIER_FIXUP_636;
    _RESERVED_IDENTIFIER_FIXUP_887.x = _RESERVED_IDENTIFIER_FIXUP_656.x;
    _RESERVED_IDENTIFIER_FIXUP_887.y = _RESERVED_IDENTIFIER_FIXUP_656.y;
    _RESERVED_IDENTIFIER_FIXUP_887.z = _RESERVED_IDENTIFIER_FIXUP_656.z;
    vec2 param_4 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_666 = hdTex1(param_4);
    vec3 _RESERVED_IDENTIFIER_FIXUP_670 = _RESERVED_IDENTIFIER_FIXUP_666.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_671 = _RESERVED_IDENTIFIER_FIXUP_875.xyz * _RESERVED_IDENTIFIER_FIXUP_670;
    vec4 _RESERVED_IDENTIFIER_FIXUP_948 = vec4(_RESERVED_IDENTIFIER_FIXUP_671.x, _RESERVED_IDENTIFIER_FIXUP_427, _RESERVED_IDENTIFIER_FIXUP_671.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_686 = mix(_RESERVED_IDENTIFIER_FIXUP_948.xzw, _RESERVED_IDENTIFIER_FIXUP_670, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_948.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_899 = _RESERVED_IDENTIFIER_FIXUP_666;
    _RESERVED_IDENTIFIER_FIXUP_899.x = _RESERVED_IDENTIFIER_FIXUP_686.x;
    _RESERVED_IDENTIFIER_FIXUP_899.y = _RESERVED_IDENTIFIER_FIXUP_686.y;
    _RESERVED_IDENTIFIER_FIXUP_899.z = _RESERVED_IDENTIFIER_FIXUP_686.z;
    vec2 param_5 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_696 = hdTex2(param_5);
    float _RESERVED_IDENTIFIER_FIXUP_704 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_696.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_905 = _RESERVED_IDENTIFIER_FIXUP_696;
    _RESERVED_IDENTIFIER_FIXUP_905.x = _RESERVED_IDENTIFIER_FIXUP_704;
    _RESERVED_IDENTIFIER_FIXUP_905.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_704;
    vec4 _RESERVED_IDENTIFIER_FIXUP_716 = (_RESERVED_IDENTIFIER_FIXUP_887 * _RESERVED_IDENTIFIER_FIXUP_905.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_899 * _RESERVED_IDENTIFIER_FIXUP_696.xxxx);
    vec3 _RESERVED_IDENTIFIER_FIXUP_721 = _RESERVED_IDENTIFIER_FIXUP_716.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_910 = _RESERVED_IDENTIFIER_FIXUP_905;
    _RESERVED_IDENTIFIER_FIXUP_910.x = _RESERVED_IDENTIFIER_FIXUP_721.x;
    _RESERVED_IDENTIFIER_FIXUP_910.y = _RESERVED_IDENTIFIER_FIXUP_721.y;
    _RESERVED_IDENTIFIER_FIXUP_910.z = _RESERVED_IDENTIFIER_FIXUP_721.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_949 = vec4(_RESERVED_IDENTIFIER_FIXUP_910.www * _RESERVED_IDENTIFIER_FIXUP_910.xyz, (_RESERVED_IDENTIFIER_FIXUP_696.w * 0.300000011920928955078125) + 0.699999988079071044921875);
    vec3 _RESERVED_IDENTIFIER_FIXUP_751 = (_RESERVED_IDENTIFIER_FIXUP_716.xyz * _RESERVED_IDENTIFIER_FIXUP_949.www) + _RESERVED_IDENTIFIER_FIXUP_949.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_925;
    _RESERVED_IDENTIFIER_FIXUP_925.x = _RESERVED_IDENTIFIER_FIXUP_751.x;
    _RESERVED_IDENTIFIER_FIXUP_925.y = _RESERVED_IDENTIFIER_FIXUP_751.y;
    _RESERVED_IDENTIFIER_FIXUP_925.z = _RESERVED_IDENTIFIER_FIXUP_751.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_764 = _RESERVED_IDENTIFIER_FIXUP_925.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_931;
    _RESERVED_IDENTIFIER_FIXUP_931.x = _RESERVED_IDENTIFIER_FIXUP_764.x;
    _RESERVED_IDENTIFIER_FIXUP_931.y = _RESERVED_IDENTIFIER_FIXUP_764.y;
    _RESERVED_IDENTIFIER_FIXUP_931.z = _RESERVED_IDENTIFIER_FIXUP_764.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_931.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_294 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_303;
    if (_RESERVED_IDENTIFIER_FIXUP_294)
    {
        _RESERVED_IDENTIFIER_FIXUP_303 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_303 = _RESERVED_IDENTIFIER_FIXUP_294;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_303)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_340 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_863.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_366 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_790;
    if (_RESERVED_IDENTIFIER_FIXUP_340 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_790 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_340), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_366);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_790 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_366);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_790;
    wxlLight = vec4(color0.xyz * 2.0, 1.0);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 hdB54 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r0.x = hdB54.x;
    r0.y = hdB54.y;
    vec3 hdB67 = v0.xyz + v0.xyz;
    r1.x = hdB67.x;
    r1.y = hdB67.y;
    r1.z = hdB67.z;
    vec2 param = v2.xy;
    r2 = hdTex0(param);
    vec3 hdB87 = r1.xyz * r2.xyz;
    r3.x = hdB87.x;
    r3.y = hdB87.y;
    r3.z = hdB87.z;
    vec4 hdB96 = r2;
    vec3 hdB105 = mix(r3.xyz, hdB96.xyz, greaterThanEqual(-r0.xxx, vec3(0.0)));
    r2.x = hdB105.x;
    r2.y = hdB105.y;
    r2.z = hdB105.z;
    vec2 param_1 = v3.xy;
    r3 = hdTex1(param_1);
    vec3 hdB121 = r1.xyz * r3.xyz;
    r0.x = hdB121.x;
    r0.z = hdB121.y;
    r0.w = hdB121.z;
    vec4 hdB131 = r3;
    vec3 hdB137 = mix(r0.xzw, hdB131.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r3.x = hdB137.x;
    r3.y = hdB137.y;
    r3.z = hdB137.z;
    vec2 param_2 = v4.xy;
    r0 = hdTex2(param_2);
    r1 = r3 * r0.xxxx;
    r0.x = clamp(dot(r0.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    r1 = (r2 * r0.xxxx) + r1;
    vec3 hdB175 = r1.www * v1.xyz;
    r0.x = hdB175.x;
    r0.y = hdB175.y;
    r0.z = hdB175.z;
    vec4 hdB182 = r0;
    vec4 hdB184 = r0;
    vec3 hdB186 = hdB182.www * hdB184.xyz;
    r0.x = hdB186.x;
    r0.y = hdB186.y;
    r0.z = hdB186.z;
    r0.w = (r0.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB202 = r0;
    vec4 hdB205 = r0;
    vec3 hdB207 = (r1.xyz * hdB202.www) + hdB205.xyz;
    r0.x = hdB207.x;
    r0.y = hdB207.y;
    r0.z = hdB207.z;
    vec4 hdB214 = r0;
    vec3 hdB221 = hdB214.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB221.x;
    r0.y = hdB221.y;
    r0.z = hdB221.z;
    vec3 hdB236 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB236.x;
    oC0.y = hdB236.y;
    oC0.z = hdB236.z;
    oC0.w = 1.0;
    bool hdB248 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB256;
    if (hdB248)
    {
        hdB256 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB256 = hdB248;
    }
    if (hdB256)
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
    bool _968 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _978;
    if (_968)
    {
        _978 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 7u) != 0u;
    }
    else
    {
        _978 = _968;
    }
    if (_978)
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
        bool _1003 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1018;
        if (!_1003)
        {
            _1018 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 7u) != 0u;
        }
        else
        {
            _1018 = _1003;
        }
        if (_1018)
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
