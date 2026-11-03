#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
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
float _RESERVED_IDENTIFIER_FIXUP_831;
vec4 _RESERVED_IDENTIFIER_FIXUP_832;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _115 = hdOverride >= 0;
    bool _124;
    if (_115)
    {
        _124 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _124 = _115;
    }
    vec4 _125;
    if (_124)
    {
        _125 = vec4(float(hdOverride));
    }
    else
    {
        _125 = value;
    }
    return _125;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _49 = hdOverride >= 0;
    bool _69;
    if (_49)
    {
        _69 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _87 = hdOverride >= 0;
    bool _97;
    if (_87)
    {
        _97 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _97 = _87;
    }
    vec4 _98;
    if (_97)
    {
        _98 = vec4(float(hdOverride));
    }
    else
    {
        _98 = value;
    }
    return _98;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _142 = hdOverride >= 0;
    bool _151;
    if (_142)
    {
        _151 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _151 = _142;
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

void HDActual()
{
    vec2 param = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_415 = hdTex4(param);
    vec4 _RESERVED_IDENTIFIER_FIXUP_731;
    _RESERVED_IDENTIFIER_FIXUP_731.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_415.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_734;
    _RESERVED_IDENTIFIER_FIXUP_734.x = (_RESERVED_IDENTIFIER_FIXUP_415.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_1 = texcoord3.xy;
    vec2 param_2 = texcoord2.xy;
    vec2 param_3 = texcoord0.xy;
    vec2 param_4 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_465 = ((hdTex3(param_1) * _RESERVED_IDENTIFIER_FIXUP_415.zzzz) + ((hdTex2(param_2) * _RESERVED_IDENTIFIER_FIXUP_415.yyyy) + ((hdTex0(param_3) * _RESERVED_IDENTIFIER_FIXUP_731.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_415.xxxx * hdTex1(param_4))))).xyz * _RESERVED_IDENTIFIER_FIXUP_734.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_736;
    _RESERVED_IDENTIFIER_FIXUP_736.x = _RESERVED_IDENTIFIER_FIXUP_465.x;
    _RESERVED_IDENTIFIER_FIXUP_736.y = _RESERVED_IDENTIFIER_FIXUP_465.y;
    _RESERVED_IDENTIFIER_FIXUP_736.z = _RESERVED_IDENTIFIER_FIXUP_465.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_742;
    _RESERVED_IDENTIFIER_FIXUP_742.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_742.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_742.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_487 = _RESERVED_IDENTIFIER_FIXUP_736.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_831).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_748;
    _RESERVED_IDENTIFIER_FIXUP_748.x = _RESERVED_IDENTIFIER_FIXUP_487.x;
    _RESERVED_IDENTIFIER_FIXUP_748.y = _RESERVED_IDENTIFIER_FIXUP_487.y;
    _RESERVED_IDENTIFIER_FIXUP_748.z = _RESERVED_IDENTIFIER_FIXUP_487.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_498 = _RESERVED_IDENTIFIER_FIXUP_748.xyz + _RESERVED_IDENTIFIER_FIXUP_748.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_754;
    _RESERVED_IDENTIFIER_FIXUP_754.x = _RESERVED_IDENTIFIER_FIXUP_498.x;
    _RESERVED_IDENTIFIER_FIXUP_754.y = _RESERVED_IDENTIFIER_FIXUP_498.y;
    _RESERVED_IDENTIFIER_FIXUP_754.z = _RESERVED_IDENTIFIER_FIXUP_498.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_512 = (_RESERVED_IDENTIFIER_FIXUP_742.xyz * _RESERVED_IDENTIFIER_FIXUP_415.www) + _RESERVED_IDENTIFIER_FIXUP_754.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_760;
    _RESERVED_IDENTIFIER_FIXUP_760.x = _RESERVED_IDENTIFIER_FIXUP_512.x;
    _RESERVED_IDENTIFIER_FIXUP_760.y = _RESERVED_IDENTIFIER_FIXUP_512.y;
    _RESERVED_IDENTIFIER_FIXUP_760.z = _RESERVED_IDENTIFIER_FIXUP_512.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_525 = _RESERVED_IDENTIFIER_FIXUP_760.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_766;
    _RESERVED_IDENTIFIER_FIXUP_766.x = _RESERVED_IDENTIFIER_FIXUP_525.x;
    _RESERVED_IDENTIFIER_FIXUP_766.y = _RESERVED_IDENTIFIER_FIXUP_525.y;
    _RESERVED_IDENTIFIER_FIXUP_766.z = _RESERVED_IDENTIFIER_FIXUP_525.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_540 = _RESERVED_IDENTIFIER_FIXUP_766.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_772;
    _RESERVED_IDENTIFIER_FIXUP_772.x = _RESERVED_IDENTIFIER_FIXUP_540.x;
    _RESERVED_IDENTIFIER_FIXUP_772.y = _RESERVED_IDENTIFIER_FIXUP_540.y;
    _RESERVED_IDENTIFIER_FIXUP_772.z = _RESERVED_IDENTIFIER_FIXUP_540.z;
    vec2 param_5 = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_585 = hdTex4(param_5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_783;
    _RESERVED_IDENTIFIER_FIXUP_783.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_585.xyz, vec3(1.0)), 0.0, 1.0);
    vec2 param_6 = texcoord3.xy;
    vec2 param_7 = texcoord2.xy;
    vec2 param_8 = texcoord0.xy;
    vec2 param_9 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_625 = (hdTex3(param_6) * _RESERVED_IDENTIFIER_FIXUP_585.zzzz) + ((hdTex2(param_7) * _RESERVED_IDENTIFIER_FIXUP_585.yyyy) + ((hdTex0(param_8) * _RESERVED_IDENTIFIER_FIXUP_783.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_585.xxxx * hdTex1(param_9))));
    vec4 _RESERVED_IDENTIFIER_FIXUP_786;
    _RESERVED_IDENTIFIER_FIXUP_786.x = (_RESERVED_IDENTIFIER_FIXUP_585.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_635 = _RESERVED_IDENTIFIER_FIXUP_625.xyz * _RESERVED_IDENTIFIER_FIXUP_786.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_788 = _RESERVED_IDENTIFIER_FIXUP_625;
    _RESERVED_IDENTIFIER_FIXUP_788.x = _RESERVED_IDENTIFIER_FIXUP_635.x;
    _RESERVED_IDENTIFIER_FIXUP_788.y = _RESERVED_IDENTIFIER_FIXUP_635.y;
    _RESERVED_IDENTIFIER_FIXUP_788.z = _RESERVED_IDENTIFIER_FIXUP_635.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_646 = _RESERVED_IDENTIFIER_FIXUP_788.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_794;
    _RESERVED_IDENTIFIER_FIXUP_794.x = _RESERVED_IDENTIFIER_FIXUP_646.x;
    _RESERVED_IDENTIFIER_FIXUP_794.y = _RESERVED_IDENTIFIER_FIXUP_646.y;
    _RESERVED_IDENTIFIER_FIXUP_794.z = _RESERVED_IDENTIFIER_FIXUP_646.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_657 = _RESERVED_IDENTIFIER_FIXUP_788.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_800;
    _RESERVED_IDENTIFIER_FIXUP_800.x = _RESERVED_IDENTIFIER_FIXUP_657.x;
    _RESERVED_IDENTIFIER_FIXUP_800.y = _RESERVED_IDENTIFIER_FIXUP_657.y;
    _RESERVED_IDENTIFIER_FIXUP_800.z = _RESERVED_IDENTIFIER_FIXUP_657.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_668 = _RESERVED_IDENTIFIER_FIXUP_800.xyz + _RESERVED_IDENTIFIER_FIXUP_800.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_806;
    _RESERVED_IDENTIFIER_FIXUP_806.x = _RESERVED_IDENTIFIER_FIXUP_668.x;
    _RESERVED_IDENTIFIER_FIXUP_806.y = _RESERVED_IDENTIFIER_FIXUP_668.y;
    _RESERVED_IDENTIFIER_FIXUP_806.z = _RESERVED_IDENTIFIER_FIXUP_668.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_682 = (_RESERVED_IDENTIFIER_FIXUP_794.xyz * _RESERVED_IDENTIFIER_FIXUP_585.www) + _RESERVED_IDENTIFIER_FIXUP_806.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_812;
    _RESERVED_IDENTIFIER_FIXUP_812.x = _RESERVED_IDENTIFIER_FIXUP_682.x;
    _RESERVED_IDENTIFIER_FIXUP_812.y = _RESERVED_IDENTIFIER_FIXUP_682.y;
    _RESERVED_IDENTIFIER_FIXUP_812.z = _RESERVED_IDENTIFIER_FIXUP_682.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_695 = _RESERVED_IDENTIFIER_FIXUP_812.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_818;
    _RESERVED_IDENTIFIER_FIXUP_818.x = _RESERVED_IDENTIFIER_FIXUP_695.x;
    _RESERVED_IDENTIFIER_FIXUP_818.y = _RESERVED_IDENTIFIER_FIXUP_695.y;
    _RESERVED_IDENTIFIER_FIXUP_818.z = _RESERVED_IDENTIFIER_FIXUP_695.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_818.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_272 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_281;
    if (_RESERVED_IDENTIFIER_FIXUP_272)
    {
        _RESERVED_IDENTIFIER_FIXUP_281 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_281 = _RESERVED_IDENTIFIER_FIXUP_272;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_281)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_318 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_772.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_345 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_721;
    if (_RESERVED_IDENTIFIER_FIXUP_318 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_721 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_318), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_345);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_721 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_345);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_721;
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
    vec4 v6 = texcoord4;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v4.xy;
    r0 = hdTex2(param);
    vec2 param_1 = v2.xy;
    r1 = hdTex0(param_1);
    vec2 param_2 = v6.xy;
    r2 = hdTex4(param_2);
    r3.x = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r3.x = (-r3.x) + 1.0;
    vec2 param_3 = v3.xy;
    r4 = hdTex1(param_3);
    r4 = r2.xxxx * r4;
    r1 = (r1 * r3.xxxx) + r4;
    r0 = (r0 * r2.yyyy) + r1;
    vec2 param_4 = v5.xy;
    r1 = hdTex3(param_4);
    r0 = (r1 * r2.zzzz) + r0;
    r1.x = (r2.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB120 = r0;
    vec3 hdB124 = hdB120.xyz * r1.xxx;
    r0.x = hdB124.x;
    r0.y = hdB124.y;
    r0.z = hdB124.z;
    vec3 hdB137 = r0.www * v1.xyz;
    r1.x = hdB137.x;
    r1.y = hdB137.y;
    r1.z = hdB137.z;
    vec4 hdB144 = r0;
    vec3 hdB148 = hdB144.xyz * v0.xyz;
    r0.x = hdB148.x;
    r0.y = hdB148.y;
    r0.z = hdB148.z;
    vec4 hdB155 = r0;
    vec4 hdB157 = r0;
    vec3 hdB159 = hdB155.xyz + hdB157.xyz;
    r0.x = hdB159.x;
    r0.y = hdB159.y;
    r0.z = hdB159.z;
    vec4 hdB171 = r0;
    vec3 hdB173 = (r1.xyz * r2.www) + hdB171.xyz;
    r0.x = hdB173.x;
    r0.y = hdB173.y;
    r0.z = hdB173.z;
    vec4 hdB180 = r0;
    vec3 hdB197 = hdB180.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB197.x;
    r0.y = hdB197.y;
    r0.z = hdB197.z;
    vec3 hdB212 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB212.x;
    oC0.y = hdB212.y;
    oC0.z = hdB212.z;
    oC0.w = 1.0;
    bool hdB226 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB234;
    if (hdB226)
    {
        hdB234 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB234 = hdB226;
    }
    if (hdB234)
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
    bool _891 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _901;
    if (_891)
    {
        _901 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 31u) != 0u;
    }
    else
    {
        _901 = _891;
    }
    if (_901)
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
        bool _926 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _941;
        if (!_926)
        {
            _941 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 31u) != 0u;
        }
        else
        {
            _941 = _926;
        }
        if (_941)
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
