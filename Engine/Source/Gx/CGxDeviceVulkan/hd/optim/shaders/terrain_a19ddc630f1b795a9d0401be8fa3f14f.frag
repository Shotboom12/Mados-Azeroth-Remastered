#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=1)uniform sampler2D s1[4];

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
float _RESERVED_IDENTIFIER_FIXUP_790;
vec4 _RESERVED_IDENTIFIER_FIXUP_791;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _112 = hdOverride >= 0;
    bool _122;
    if (_112)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _122 = _112;
    }
    vec4 _123;
    if (_122)
    {
        _123 = vec4(float(hdOverride));
    }
    else
    {
        _123 = value;
    }
    return _123;
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

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _84 = hdOverride >= 0;
    bool _94;
    if (_84)
    {
        _94 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
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

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _140 = hdOverride >= 0;
    bool _149;
    if (_140)
    {
        _149 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _149 = _140;
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
    vec2 param = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_397 = hdTex3(param);
    float _RESERVED_IDENTIFIER_FIXUP_401 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_397.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_687 = _RESERVED_IDENTIFIER_FIXUP_397;
    _RESERVED_IDENTIFIER_FIXUP_687.z = _RESERVED_IDENTIFIER_FIXUP_401;
    _RESERVED_IDENTIFIER_FIXUP_687.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_401;
    vec4 _RESERVED_IDENTIFIER_FIXUP_693;
    _RESERVED_IDENTIFIER_FIXUP_693.x = (_RESERVED_IDENTIFIER_FIXUP_397.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_1 = texcoord2.xy;
    vec2 param_2 = texcoord0.xy;
    vec2 param_3 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_437 = ((hdTex2(param_1) * _RESERVED_IDENTIFIER_FIXUP_687.yyyy) + ((hdTex0(param_2) * _RESERVED_IDENTIFIER_FIXUP_687.zzzz) + (_RESERVED_IDENTIFIER_FIXUP_687.xxxx * hdTex1(param_3)))).xyz * _RESERVED_IDENTIFIER_FIXUP_693.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_695;
    _RESERVED_IDENTIFIER_FIXUP_695.x = _RESERVED_IDENTIFIER_FIXUP_437.x;
    _RESERVED_IDENTIFIER_FIXUP_695.y = _RESERVED_IDENTIFIER_FIXUP_437.y;
    _RESERVED_IDENTIFIER_FIXUP_695.z = _RESERVED_IDENTIFIER_FIXUP_437.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_701;
    _RESERVED_IDENTIFIER_FIXUP_701.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_701.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_701.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_459 = _RESERVED_IDENTIFIER_FIXUP_695.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_790).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_707;
    _RESERVED_IDENTIFIER_FIXUP_707.x = _RESERVED_IDENTIFIER_FIXUP_459.x;
    _RESERVED_IDENTIFIER_FIXUP_707.y = _RESERVED_IDENTIFIER_FIXUP_459.y;
    _RESERVED_IDENTIFIER_FIXUP_707.z = _RESERVED_IDENTIFIER_FIXUP_459.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_470 = _RESERVED_IDENTIFIER_FIXUP_707.xyz + _RESERVED_IDENTIFIER_FIXUP_707.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_713;
    _RESERVED_IDENTIFIER_FIXUP_713.x = _RESERVED_IDENTIFIER_FIXUP_470.x;
    _RESERVED_IDENTIFIER_FIXUP_713.y = _RESERVED_IDENTIFIER_FIXUP_470.y;
    _RESERVED_IDENTIFIER_FIXUP_713.z = _RESERVED_IDENTIFIER_FIXUP_470.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_484 = (_RESERVED_IDENTIFIER_FIXUP_701.xyz * _RESERVED_IDENTIFIER_FIXUP_687.www) + _RESERVED_IDENTIFIER_FIXUP_713.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_719;
    _RESERVED_IDENTIFIER_FIXUP_719.x = _RESERVED_IDENTIFIER_FIXUP_484.x;
    _RESERVED_IDENTIFIER_FIXUP_719.y = _RESERVED_IDENTIFIER_FIXUP_484.y;
    _RESERVED_IDENTIFIER_FIXUP_719.z = _RESERVED_IDENTIFIER_FIXUP_484.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_497 = _RESERVED_IDENTIFIER_FIXUP_719.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_725;
    _RESERVED_IDENTIFIER_FIXUP_725.x = _RESERVED_IDENTIFIER_FIXUP_497.x;
    _RESERVED_IDENTIFIER_FIXUP_725.y = _RESERVED_IDENTIFIER_FIXUP_497.y;
    _RESERVED_IDENTIFIER_FIXUP_725.z = _RESERVED_IDENTIFIER_FIXUP_497.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_512 = _RESERVED_IDENTIFIER_FIXUP_725.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_731;
    _RESERVED_IDENTIFIER_FIXUP_731.x = _RESERVED_IDENTIFIER_FIXUP_512.x;
    _RESERVED_IDENTIFIER_FIXUP_731.y = _RESERVED_IDENTIFIER_FIXUP_512.y;
    _RESERVED_IDENTIFIER_FIXUP_731.z = _RESERVED_IDENTIFIER_FIXUP_512.z;
    vec2 param_4 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_554 = hdTex3(param_4);
    float _RESERVED_IDENTIFIER_FIXUP_558 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_554.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_739 = _RESERVED_IDENTIFIER_FIXUP_554;
    _RESERVED_IDENTIFIER_FIXUP_739.z = _RESERVED_IDENTIFIER_FIXUP_558;
    _RESERVED_IDENTIFIER_FIXUP_739.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_558;
    vec2 param_5 = texcoord2.xy;
    vec2 param_6 = texcoord0.xy;
    vec2 param_7 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_584 = (hdTex2(param_5) * _RESERVED_IDENTIFIER_FIXUP_739.yyyy) + ((hdTex0(param_6) * _RESERVED_IDENTIFIER_FIXUP_739.zzzz) + (_RESERVED_IDENTIFIER_FIXUP_739.xxxx * hdTex1(param_7)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_745;
    _RESERVED_IDENTIFIER_FIXUP_745.x = (_RESERVED_IDENTIFIER_FIXUP_554.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_594 = _RESERVED_IDENTIFIER_FIXUP_584.xyz * _RESERVED_IDENTIFIER_FIXUP_745.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_747 = _RESERVED_IDENTIFIER_FIXUP_584;
    _RESERVED_IDENTIFIER_FIXUP_747.x = _RESERVED_IDENTIFIER_FIXUP_594.x;
    _RESERVED_IDENTIFIER_FIXUP_747.y = _RESERVED_IDENTIFIER_FIXUP_594.y;
    _RESERVED_IDENTIFIER_FIXUP_747.z = _RESERVED_IDENTIFIER_FIXUP_594.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_605 = _RESERVED_IDENTIFIER_FIXUP_747.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_753;
    _RESERVED_IDENTIFIER_FIXUP_753.x = _RESERVED_IDENTIFIER_FIXUP_605.x;
    _RESERVED_IDENTIFIER_FIXUP_753.y = _RESERVED_IDENTIFIER_FIXUP_605.y;
    _RESERVED_IDENTIFIER_FIXUP_753.z = _RESERVED_IDENTIFIER_FIXUP_605.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_616 = _RESERVED_IDENTIFIER_FIXUP_747.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_759;
    _RESERVED_IDENTIFIER_FIXUP_759.x = _RESERVED_IDENTIFIER_FIXUP_616.x;
    _RESERVED_IDENTIFIER_FIXUP_759.y = _RESERVED_IDENTIFIER_FIXUP_616.y;
    _RESERVED_IDENTIFIER_FIXUP_759.z = _RESERVED_IDENTIFIER_FIXUP_616.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_627 = _RESERVED_IDENTIFIER_FIXUP_759.xyz + _RESERVED_IDENTIFIER_FIXUP_759.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_765;
    _RESERVED_IDENTIFIER_FIXUP_765.x = _RESERVED_IDENTIFIER_FIXUP_627.x;
    _RESERVED_IDENTIFIER_FIXUP_765.y = _RESERVED_IDENTIFIER_FIXUP_627.y;
    _RESERVED_IDENTIFIER_FIXUP_765.z = _RESERVED_IDENTIFIER_FIXUP_627.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_641 = (_RESERVED_IDENTIFIER_FIXUP_753.xyz * _RESERVED_IDENTIFIER_FIXUP_739.www) + _RESERVED_IDENTIFIER_FIXUP_765.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_771;
    _RESERVED_IDENTIFIER_FIXUP_771.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
    _RESERVED_IDENTIFIER_FIXUP_771.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
    _RESERVED_IDENTIFIER_FIXUP_771.z = _RESERVED_IDENTIFIER_FIXUP_641.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_654 = _RESERVED_IDENTIFIER_FIXUP_771.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_777;
    _RESERVED_IDENTIFIER_FIXUP_777.x = _RESERVED_IDENTIFIER_FIXUP_654.x;
    _RESERVED_IDENTIFIER_FIXUP_777.y = _RESERVED_IDENTIFIER_FIXUP_654.y;
    _RESERVED_IDENTIFIER_FIXUP_777.z = _RESERVED_IDENTIFIER_FIXUP_654.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_777.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_257 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_266;
    if (_RESERVED_IDENTIFIER_FIXUP_257)
    {
        _RESERVED_IDENTIFIER_FIXUP_266 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_266 = _RESERVED_IDENTIFIER_FIXUP_257;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_266)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_303 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_731.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_330 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_680;
    if (_RESERVED_IDENTIFIER_FIXUP_303 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_680 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_303), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_330);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_680 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_330);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_680;
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
    vec4 v5 = texcoord3;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v4.xy;
    r0 = hdTex2(param);
    vec2 param_1 = v2.xy;
    r1 = hdTex0(param_1);
    vec2 param_2 = v5.xy;
    r2 = hdTex3(param_2);
    r2.z = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.z = (-r2.z) + 1.0;
    vec2 param_3 = v3.xy;
    r3 = hdTex1(param_3);
    r3 = r2.xxxx * r3;
    r1 = (r1 * r2.zzzz) + r3;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = (r2.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB106 = r0;
    vec3 hdB110 = hdB106.xyz * r1.xxx;
    r0.x = hdB110.x;
    r0.y = hdB110.y;
    r0.z = hdB110.z;
    vec3 hdB122 = r0.www * v1.xyz;
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
    vec3 hdB158 = (r1.xyz * r2.www) + hdB156.xyz;
    r0.x = hdB158.x;
    r0.y = hdB158.y;
    r0.z = hdB158.z;
    vec4 hdB165 = r0;
    vec3 hdB182 = hdB165.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB182.x;
    r0.y = hdB182.y;
    r0.z = hdB182.z;
    vec3 hdB197 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB197.x;
    oC0.y = hdB197.y;
    oC0.z = hdB197.z;
    oC0.w = 1.0;
    bool hdB211 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB219;
    if (hdB211)
    {
        hdB219 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB219 = hdB211;
    }
    if (hdB219)
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
    bool _841 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _851;
    if (_841)
    {
        _851 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 15u) != 0u;
    }
    else
    {
        _851 = _841;
    }
    if (_851)
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
        bool _876 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _891;
        if (!_876)
        {
            _891 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 15u) != 0u;
        }
        else
        {
            _891 = _876;
        }
        if (_891)
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
