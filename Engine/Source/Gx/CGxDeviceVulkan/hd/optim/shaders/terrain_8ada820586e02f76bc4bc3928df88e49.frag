#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
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
float _RESERVED_IDENTIFIER_FIXUP_834;
vec4 _RESERVED_IDENTIFIER_FIXUP_835;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _84 = hdOverride >= 0;
    bool _93;
    if (_84)
    {
        _93 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _46 = hdOverride >= 0;
    bool _66;
    if (_46)
    {
        _66 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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
    bool _111 = hdOverride >= 0;
    bool _120;
    if (_111)
    {
        _120 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _120 = _111;
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

void HDActual()
{
    vec2 param = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_418 = hdTex4(param);
    vec4 _RESERVED_IDENTIFIER_FIXUP_734;
    _RESERVED_IDENTIFIER_FIXUP_734.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_418.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_737;
    _RESERVED_IDENTIFIER_FIXUP_737.x = (_RESERVED_IDENTIFIER_FIXUP_418.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_1 = texcoord3.xy;
    vec2 param_2 = texcoord2.xy;
    vec2 param_3 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_468 = ((hdTex3(param_1) * _RESERVED_IDENTIFIER_FIXUP_418.zzzz) + ((hdTex2(param_2) * _RESERVED_IDENTIFIER_FIXUP_418.yyyy) + ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_734.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_418.xxxx * hdTex1(param_3))))).xyz * _RESERVED_IDENTIFIER_FIXUP_737.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_739;
    _RESERVED_IDENTIFIER_FIXUP_739.x = _RESERVED_IDENTIFIER_FIXUP_468.x;
    _RESERVED_IDENTIFIER_FIXUP_739.y = _RESERVED_IDENTIFIER_FIXUP_468.y;
    _RESERVED_IDENTIFIER_FIXUP_739.z = _RESERVED_IDENTIFIER_FIXUP_468.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_745;
    _RESERVED_IDENTIFIER_FIXUP_745.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_745.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_745.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_490 = _RESERVED_IDENTIFIER_FIXUP_739.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_834).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_751;
    _RESERVED_IDENTIFIER_FIXUP_751.x = _RESERVED_IDENTIFIER_FIXUP_490.x;
    _RESERVED_IDENTIFIER_FIXUP_751.y = _RESERVED_IDENTIFIER_FIXUP_490.y;
    _RESERVED_IDENTIFIER_FIXUP_751.z = _RESERVED_IDENTIFIER_FIXUP_490.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_501 = _RESERVED_IDENTIFIER_FIXUP_751.xyz + _RESERVED_IDENTIFIER_FIXUP_751.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_757;
    _RESERVED_IDENTIFIER_FIXUP_757.x = _RESERVED_IDENTIFIER_FIXUP_501.x;
    _RESERVED_IDENTIFIER_FIXUP_757.y = _RESERVED_IDENTIFIER_FIXUP_501.y;
    _RESERVED_IDENTIFIER_FIXUP_757.z = _RESERVED_IDENTIFIER_FIXUP_501.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_515 = (_RESERVED_IDENTIFIER_FIXUP_745.xyz * _RESERVED_IDENTIFIER_FIXUP_418.www) + _RESERVED_IDENTIFIER_FIXUP_757.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_763;
    _RESERVED_IDENTIFIER_FIXUP_763.x = _RESERVED_IDENTIFIER_FIXUP_515.x;
    _RESERVED_IDENTIFIER_FIXUP_763.y = _RESERVED_IDENTIFIER_FIXUP_515.y;
    _RESERVED_IDENTIFIER_FIXUP_763.z = _RESERVED_IDENTIFIER_FIXUP_515.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_528 = _RESERVED_IDENTIFIER_FIXUP_763.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_769;
    _RESERVED_IDENTIFIER_FIXUP_769.x = _RESERVED_IDENTIFIER_FIXUP_528.x;
    _RESERVED_IDENTIFIER_FIXUP_769.y = _RESERVED_IDENTIFIER_FIXUP_528.y;
    _RESERVED_IDENTIFIER_FIXUP_769.z = _RESERVED_IDENTIFIER_FIXUP_528.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_543 = _RESERVED_IDENTIFIER_FIXUP_769.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_775;
    _RESERVED_IDENTIFIER_FIXUP_775.x = _RESERVED_IDENTIFIER_FIXUP_543.x;
    _RESERVED_IDENTIFIER_FIXUP_775.y = _RESERVED_IDENTIFIER_FIXUP_543.y;
    _RESERVED_IDENTIFIER_FIXUP_775.z = _RESERVED_IDENTIFIER_FIXUP_543.z;
    vec2 param_4 = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_588 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_786;
    _RESERVED_IDENTIFIER_FIXUP_786.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_588.xyz, vec3(1.0)), 0.0, 1.0);
    vec2 param_5 = texcoord3.xy;
    vec2 param_6 = texcoord2.xy;
    vec2 param_7 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_628 = (hdTex3(param_5) * _RESERVED_IDENTIFIER_FIXUP_588.zzzz) + ((hdTex2(param_6) * _RESERVED_IDENTIFIER_FIXUP_588.yyyy) + ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_786.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_588.xxxx * hdTex1(param_7))));
    vec4 _RESERVED_IDENTIFIER_FIXUP_789;
    _RESERVED_IDENTIFIER_FIXUP_789.x = (_RESERVED_IDENTIFIER_FIXUP_588.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_638 = _RESERVED_IDENTIFIER_FIXUP_628.xyz * _RESERVED_IDENTIFIER_FIXUP_789.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_791 = _RESERVED_IDENTIFIER_FIXUP_628;
    _RESERVED_IDENTIFIER_FIXUP_791.x = _RESERVED_IDENTIFIER_FIXUP_638.x;
    _RESERVED_IDENTIFIER_FIXUP_791.y = _RESERVED_IDENTIFIER_FIXUP_638.y;
    _RESERVED_IDENTIFIER_FIXUP_791.z = _RESERVED_IDENTIFIER_FIXUP_638.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_649 = _RESERVED_IDENTIFIER_FIXUP_791.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_797;
    _RESERVED_IDENTIFIER_FIXUP_797.x = _RESERVED_IDENTIFIER_FIXUP_649.x;
    _RESERVED_IDENTIFIER_FIXUP_797.y = _RESERVED_IDENTIFIER_FIXUP_649.y;
    _RESERVED_IDENTIFIER_FIXUP_797.z = _RESERVED_IDENTIFIER_FIXUP_649.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_660 = _RESERVED_IDENTIFIER_FIXUP_791.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_803;
    _RESERVED_IDENTIFIER_FIXUP_803.x = _RESERVED_IDENTIFIER_FIXUP_660.x;
    _RESERVED_IDENTIFIER_FIXUP_803.y = _RESERVED_IDENTIFIER_FIXUP_660.y;
    _RESERVED_IDENTIFIER_FIXUP_803.z = _RESERVED_IDENTIFIER_FIXUP_660.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_671 = _RESERVED_IDENTIFIER_FIXUP_803.xyz + _RESERVED_IDENTIFIER_FIXUP_803.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_809;
    _RESERVED_IDENTIFIER_FIXUP_809.x = _RESERVED_IDENTIFIER_FIXUP_671.x;
    _RESERVED_IDENTIFIER_FIXUP_809.y = _RESERVED_IDENTIFIER_FIXUP_671.y;
    _RESERVED_IDENTIFIER_FIXUP_809.z = _RESERVED_IDENTIFIER_FIXUP_671.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_685 = (_RESERVED_IDENTIFIER_FIXUP_797.xyz * _RESERVED_IDENTIFIER_FIXUP_588.www) + _RESERVED_IDENTIFIER_FIXUP_809.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_815;
    _RESERVED_IDENTIFIER_FIXUP_815.x = _RESERVED_IDENTIFIER_FIXUP_685.x;
    _RESERVED_IDENTIFIER_FIXUP_815.y = _RESERVED_IDENTIFIER_FIXUP_685.y;
    _RESERVED_IDENTIFIER_FIXUP_815.z = _RESERVED_IDENTIFIER_FIXUP_685.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_698 = _RESERVED_IDENTIFIER_FIXUP_815.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_821;
    _RESERVED_IDENTIFIER_FIXUP_821.x = _RESERVED_IDENTIFIER_FIXUP_698.x;
    _RESERVED_IDENTIFIER_FIXUP_821.y = _RESERVED_IDENTIFIER_FIXUP_698.y;
    _RESERVED_IDENTIFIER_FIXUP_821.z = _RESERVED_IDENTIFIER_FIXUP_698.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_821.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_275 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_284;
    if (_RESERVED_IDENTIFIER_FIXUP_275)
    {
        _RESERVED_IDENTIFIER_FIXUP_284 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_284 = _RESERVED_IDENTIFIER_FIXUP_275;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_284)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_321 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_775.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_348 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_724;
    if (_RESERVED_IDENTIFIER_FIXUP_321 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_724 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_321), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_348);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_724 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_348);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_724;
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
    r1 = OptTex0( v2.xyz);
    vec2 param_1 = v6.xy;
    r2 = hdTex4(param_1);
    r3.x = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r3.x = (-r3.x) + 1.0;
    vec2 param_2 = v3.xy;
    r4 = hdTex1(param_2);
    r4 = r2.xxxx * r4;
    r1 = (r1 * r3.xxxx) + r4;
    r0 = (r0 * r2.yyyy) + r1;
    vec2 param_3 = v5.xy;
    r1 = hdTex3(param_3);
    r0 = (r1 * r2.zzzz) + r0;
    r1.x = (r2.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB123 = r0;
    vec3 hdB127 = hdB123.xyz * r1.xxx;
    r0.x = hdB127.x;
    r0.y = hdB127.y;
    r0.z = hdB127.z;
    vec3 hdB140 = r0.www * v1.xyz;
    r1.x = hdB140.x;
    r1.y = hdB140.y;
    r1.z = hdB140.z;
    vec4 hdB147 = r0;
    vec3 hdB151 = hdB147.xyz * v0.xyz;
    r0.x = hdB151.x;
    r0.y = hdB151.y;
    r0.z = hdB151.z;
    vec4 hdB158 = r0;
    vec4 hdB160 = r0;
    vec3 hdB162 = hdB158.xyz + hdB160.xyz;
    r0.x = hdB162.x;
    r0.y = hdB162.y;
    r0.z = hdB162.z;
    vec4 hdB174 = r0;
    vec3 hdB176 = (r1.xyz * r2.www) + hdB174.xyz;
    r0.x = hdB176.x;
    r0.y = hdB176.y;
    r0.z = hdB176.z;
    vec4 hdB183 = r0;
    vec3 hdB200 = hdB183.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB200.x;
    r0.y = hdB200.y;
    r0.z = hdB200.z;
    vec3 hdB215 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB215.x;
    oC0.y = hdB215.y;
    oC0.z = hdB215.z;
    oC0.w = 1.0;
    bool hdB229 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB237;
    if (hdB229)
    {
        hdB237 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB237 = hdB229;
    }
    if (hdB237)
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
    bool _865 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _875;
    if (_865)
    {
        _875 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 30u) != 0u;
    }
    else
    {
        _875 = _865;
    }
    if (_875)
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
        bool _900 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _915;
        if (!_900)
        {
            _915 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 30u) != 0u;
        }
        else
        {
            _915 = _900;
        }
        if (_915)
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
