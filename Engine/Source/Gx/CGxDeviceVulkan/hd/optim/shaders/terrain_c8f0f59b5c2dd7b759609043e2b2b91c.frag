#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
float _RESERVED_IDENTIFIER_FIXUP_803;
vec4 _RESERVED_IDENTIFIER_FIXUP_804;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _139 = hdOverride >= 0;
    bool _148;
    if (_139)
    {
        _148 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _148 = _139;
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

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _112 = hdOverride >= 0;
    bool _121;
    if (_112)
    {
        _121 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _121 = _112;
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
    bool _84 = hdOverride >= 0;
    bool _94;
    if (_84)
    {
        _94 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _94 = _84;
    }
    vec4 _95;
    if (_94)
    {
        _95 = vec4(float(hdOverride));
    }
    else
    {
        _95 = value;
    }
    return _95;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _46 = hdOverride >= 0;
    bool _66;
    if (_46)
    {
        _66 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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

void HDActual()
{
    vec2 param = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_417 = hdTex4(param);
    vec4 _RESERVED_IDENTIFIER_FIXUP_707;
    _RESERVED_IDENTIFIER_FIXUP_707.x = 1.0;
    vec2 param_1 = texcoord1.xy;
    vec2 param_2 = texcoord2.xy;
    vec2 param_3 = texcoord3.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_449 = mix(mix(mix(OptTex0( texcoord0.xyz), hdTex1(param_1), _RESERVED_IDENTIFIER_FIXUP_417.xxxx), hdTex2(param_2), _RESERVED_IDENTIFIER_FIXUP_417.yyyy), hdTex3(param_3), _RESERVED_IDENTIFIER_FIXUP_417.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_707.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_709;
    _RESERVED_IDENTIFIER_FIXUP_709.x = _RESERVED_IDENTIFIER_FIXUP_449.x;
    _RESERVED_IDENTIFIER_FIXUP_709.y = _RESERVED_IDENTIFIER_FIXUP_449.y;
    _RESERVED_IDENTIFIER_FIXUP_709.z = _RESERVED_IDENTIFIER_FIXUP_449.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_715;
    _RESERVED_IDENTIFIER_FIXUP_715.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_715.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_715.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_471 = _RESERVED_IDENTIFIER_FIXUP_709.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_803).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_721;
    _RESERVED_IDENTIFIER_FIXUP_721.x = _RESERVED_IDENTIFIER_FIXUP_471.x;
    _RESERVED_IDENTIFIER_FIXUP_721.y = _RESERVED_IDENTIFIER_FIXUP_471.y;
    _RESERVED_IDENTIFIER_FIXUP_721.z = _RESERVED_IDENTIFIER_FIXUP_471.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_482 = _RESERVED_IDENTIFIER_FIXUP_721.xyz + _RESERVED_IDENTIFIER_FIXUP_721.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_727;
    _RESERVED_IDENTIFIER_FIXUP_727.x = _RESERVED_IDENTIFIER_FIXUP_482.x;
    _RESERVED_IDENTIFIER_FIXUP_727.y = _RESERVED_IDENTIFIER_FIXUP_482.y;
    _RESERVED_IDENTIFIER_FIXUP_727.z = _RESERVED_IDENTIFIER_FIXUP_482.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_496 = (_RESERVED_IDENTIFIER_FIXUP_715.xyz * _RESERVED_IDENTIFIER_FIXUP_417.www) + _RESERVED_IDENTIFIER_FIXUP_727.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_733;
    _RESERVED_IDENTIFIER_FIXUP_733.x = _RESERVED_IDENTIFIER_FIXUP_496.x;
    _RESERVED_IDENTIFIER_FIXUP_733.y = _RESERVED_IDENTIFIER_FIXUP_496.y;
    _RESERVED_IDENTIFIER_FIXUP_733.z = _RESERVED_IDENTIFIER_FIXUP_496.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_509 = _RESERVED_IDENTIFIER_FIXUP_733.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_739;
    _RESERVED_IDENTIFIER_FIXUP_739.x = _RESERVED_IDENTIFIER_FIXUP_509.x;
    _RESERVED_IDENTIFIER_FIXUP_739.y = _RESERVED_IDENTIFIER_FIXUP_509.y;
    _RESERVED_IDENTIFIER_FIXUP_739.z = _RESERVED_IDENTIFIER_FIXUP_509.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_524 = _RESERVED_IDENTIFIER_FIXUP_739.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_745;
    _RESERVED_IDENTIFIER_FIXUP_745.x = _RESERVED_IDENTIFIER_FIXUP_524.x;
    _RESERVED_IDENTIFIER_FIXUP_745.y = _RESERVED_IDENTIFIER_FIXUP_524.y;
    _RESERVED_IDENTIFIER_FIXUP_745.z = _RESERVED_IDENTIFIER_FIXUP_524.z;
    vec2 param_4 = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_578 = hdTex4(param_4);
    vec2 param_5 = texcoord1.xy;
    vec2 param_6 = texcoord2.xy;
    vec2 param_7 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_593 = mix(mix(mix(OptTex0( texcoord0.xyz), hdTex1(param_5), _RESERVED_IDENTIFIER_FIXUP_578.xxxx), hdTex2(param_6), _RESERVED_IDENTIFIER_FIXUP_578.yyyy), hdTex3(param_7), _RESERVED_IDENTIFIER_FIXUP_578.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_597 = (_RESERVED_IDENTIFIER_FIXUP_578.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_758;
    _RESERVED_IDENTIFIER_FIXUP_758.x = _RESERVED_IDENTIFIER_FIXUP_597;
    vec3 _RESERVED_IDENTIFIER_FIXUP_610 = _RESERVED_IDENTIFIER_FIXUP_593.xyz * _RESERVED_IDENTIFIER_FIXUP_758.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_760;
    _RESERVED_IDENTIFIER_FIXUP_760.x = _RESERVED_IDENTIFIER_FIXUP_610.x;
    _RESERVED_IDENTIFIER_FIXUP_760.y = _RESERVED_IDENTIFIER_FIXUP_610.y;
    _RESERVED_IDENTIFIER_FIXUP_760.z = _RESERVED_IDENTIFIER_FIXUP_610.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_621 = _RESERVED_IDENTIFIER_FIXUP_593.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_766;
    _RESERVED_IDENTIFIER_FIXUP_766.x = _RESERVED_IDENTIFIER_FIXUP_621.x;
    _RESERVED_IDENTIFIER_FIXUP_766.y = _RESERVED_IDENTIFIER_FIXUP_621.y;
    _RESERVED_IDENTIFIER_FIXUP_766.z = _RESERVED_IDENTIFIER_FIXUP_621.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_632 = _RESERVED_IDENTIFIER_FIXUP_760.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_772;
    _RESERVED_IDENTIFIER_FIXUP_772.x = _RESERVED_IDENTIFIER_FIXUP_632.x;
    _RESERVED_IDENTIFIER_FIXUP_772.y = _RESERVED_IDENTIFIER_FIXUP_632.y;
    _RESERVED_IDENTIFIER_FIXUP_772.z = _RESERVED_IDENTIFIER_FIXUP_632.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_643 = _RESERVED_IDENTIFIER_FIXUP_772.xyz + _RESERVED_IDENTIFIER_FIXUP_772.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_778;
    _RESERVED_IDENTIFIER_FIXUP_778.x = _RESERVED_IDENTIFIER_FIXUP_643.x;
    _RESERVED_IDENTIFIER_FIXUP_778.y = _RESERVED_IDENTIFIER_FIXUP_643.y;
    _RESERVED_IDENTIFIER_FIXUP_778.z = _RESERVED_IDENTIFIER_FIXUP_643.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_657 = (_RESERVED_IDENTIFIER_FIXUP_766.xyz * _RESERVED_IDENTIFIER_FIXUP_578.www) + _RESERVED_IDENTIFIER_FIXUP_778.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_784;
    _RESERVED_IDENTIFIER_FIXUP_784.x = _RESERVED_IDENTIFIER_FIXUP_657.x;
    _RESERVED_IDENTIFIER_FIXUP_784.y = _RESERVED_IDENTIFIER_FIXUP_657.y;
    _RESERVED_IDENTIFIER_FIXUP_784.z = _RESERVED_IDENTIFIER_FIXUP_657.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_670 = _RESERVED_IDENTIFIER_FIXUP_784.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_790;
    _RESERVED_IDENTIFIER_FIXUP_790.x = _RESERVED_IDENTIFIER_FIXUP_670.x;
    _RESERVED_IDENTIFIER_FIXUP_790.y = _RESERVED_IDENTIFIER_FIXUP_670.y;
    _RESERVED_IDENTIFIER_FIXUP_790.z = _RESERVED_IDENTIFIER_FIXUP_670.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_790.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_265 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_274;
    if (_RESERVED_IDENTIFIER_FIXUP_265)
    {
        _RESERVED_IDENTIFIER_FIXUP_274 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_274 = _RESERVED_IDENTIFIER_FIXUP_265;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_274)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_311 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_745.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_338 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_696;
    if (_RESERVED_IDENTIFIER_FIXUP_311 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_696 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_311), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_338);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_696 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_338);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_696;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_597);
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
    vec2 param = v5.xy;
    r0 = hdTex3(param);
    vec2 param_1 = v4.xy;
    r1 = hdTex2(param_1);
    r2 = OptTex0( v2.xyz);
    vec2 param_2 = v3.xy;
    r3 = hdTex1(param_2);
    vec2 param_3 = v6.xy;
    r4 = hdTex4(param_3);
    r5 = mix(r2, r3, r4.xxxx);
    r2 = mix(r5, r1, r4.yyyy);
    r1 = mix(r2, r0, r4.zzzz);
    r0.x = (r4.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB107 = r0;
    vec3 hdB109 = r1.xyz * hdB107.xxx;
    r0.x = hdB109.x;
    r0.y = hdB109.y;
    r0.z = hdB109.z;
    vec4 hdB118 = r1;
    vec3 hdB122 = hdB118.www * v1.xyz;
    r1.x = hdB122.x;
    r1.y = hdB122.y;
    r1.z = hdB122.z;
    vec4 hdB129 = r0;
    vec3 hdB133 = hdB129.xyz * v0.xyz;
    r0.x = hdB133.x;
    r0.y = hdB133.y;
    r0.z = hdB133.z;
    vec4 hdB140 = r0;
    vec4 hdB142 = r0;
    vec3 hdB144 = hdB140.xyz + hdB142.xyz;
    r0.x = hdB144.x;
    r0.y = hdB144.y;
    r0.z = hdB144.z;
    vec4 hdB156 = r0;
    vec3 hdB158 = (r1.xyz * r4.www) + hdB156.xyz;
    r0.x = hdB158.x;
    r0.y = hdB158.y;
    r0.z = hdB158.z;
    vec4 hdB165 = r0;
    vec3 hdB182 = hdB165.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB182.x;
    r0.y = hdB182.y;
    r0.z = hdB182.z;
    vec3 hdB197 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB197.x;
    oC0.y = hdB197.y;
    oC0.z = hdB197.z;
    oC0.w = 1.0;
    bool hdB212 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB220;
    if (hdB212)
    {
        hdB220 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB220 = hdB212;
    }
    if (hdB220)
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
    bool _822 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _832;
    if (_822)
    {
        _832 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 30u) != 0u;
    }
    else
    {
        _832 = _822;
    }
    if (_832)
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
        bool _857 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _872;
        if (!_857)
        {
            _872 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 30u) != 0u;
        }
        else
        {
            _872 = _857;
        }
        if (_872)
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
