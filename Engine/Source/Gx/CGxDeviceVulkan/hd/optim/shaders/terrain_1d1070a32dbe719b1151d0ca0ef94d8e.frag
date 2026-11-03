#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
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
float _RESERVED_IDENTIFIER_FIXUP_711;
vec4 _RESERVED_IDENTIFIER_FIXUP_712;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _37 = hdOverride >= 0;
    bool _56;
    if (_37)
    {
        _56 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _56 = _37;
    }
    vec4 _57;
    if (_56)
    {
        _57 = vec4(float(hdOverride));
    }
    else
    {
        _57 = value;
    }
    return _57;
}

void HDActual()
{
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_360 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_364 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_360.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_608 = _RESERVED_IDENTIFIER_FIXUP_360;
    _RESERVED_IDENTIFIER_FIXUP_608.x = _RESERVED_IDENTIFIER_FIXUP_364;
    _RESERVED_IDENTIFIER_FIXUP_608.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_364;
    vec4 _RESERVED_IDENTIFIER_FIXUP_614 = _RESERVED_IDENTIFIER_FIXUP_608;
    _RESERVED_IDENTIFIER_FIXUP_614.x = (_RESERVED_IDENTIFIER_FIXUP_360.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_384 = (OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_608.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_614.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_616;
    _RESERVED_IDENTIFIER_FIXUP_616.x = _RESERVED_IDENTIFIER_FIXUP_384.x;
    _RESERVED_IDENTIFIER_FIXUP_616.y = _RESERVED_IDENTIFIER_FIXUP_384.y;
    _RESERVED_IDENTIFIER_FIXUP_616.z = _RESERVED_IDENTIFIER_FIXUP_384.z;
    _RESERVED_IDENTIFIER_FIXUP_614.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_614.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_614.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_406 = _RESERVED_IDENTIFIER_FIXUP_616.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_711).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_628;
    _RESERVED_IDENTIFIER_FIXUP_628.x = _RESERVED_IDENTIFIER_FIXUP_406.x;
    _RESERVED_IDENTIFIER_FIXUP_628.y = _RESERVED_IDENTIFIER_FIXUP_406.y;
    _RESERVED_IDENTIFIER_FIXUP_628.z = _RESERVED_IDENTIFIER_FIXUP_406.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_417 = _RESERVED_IDENTIFIER_FIXUP_628.xyz + _RESERVED_IDENTIFIER_FIXUP_628.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_634;
    _RESERVED_IDENTIFIER_FIXUP_634.x = _RESERVED_IDENTIFIER_FIXUP_417.x;
    _RESERVED_IDENTIFIER_FIXUP_634.y = _RESERVED_IDENTIFIER_FIXUP_417.y;
    _RESERVED_IDENTIFIER_FIXUP_634.z = _RESERVED_IDENTIFIER_FIXUP_417.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_431 = (_RESERVED_IDENTIFIER_FIXUP_614.xyz * _RESERVED_IDENTIFIER_FIXUP_614.www) + _RESERVED_IDENTIFIER_FIXUP_634.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_640;
    _RESERVED_IDENTIFIER_FIXUP_640.x = _RESERVED_IDENTIFIER_FIXUP_431.x;
    _RESERVED_IDENTIFIER_FIXUP_640.y = _RESERVED_IDENTIFIER_FIXUP_431.y;
    _RESERVED_IDENTIFIER_FIXUP_640.z = _RESERVED_IDENTIFIER_FIXUP_431.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_444 = _RESERVED_IDENTIFIER_FIXUP_640.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_646;
    _RESERVED_IDENTIFIER_FIXUP_646.x = _RESERVED_IDENTIFIER_FIXUP_444.x;
    _RESERVED_IDENTIFIER_FIXUP_646.y = _RESERVED_IDENTIFIER_FIXUP_444.y;
    _RESERVED_IDENTIFIER_FIXUP_646.z = _RESERVED_IDENTIFIER_FIXUP_444.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_459 = _RESERVED_IDENTIFIER_FIXUP_646.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_652;
    _RESERVED_IDENTIFIER_FIXUP_652.x = _RESERVED_IDENTIFIER_FIXUP_459.x;
    _RESERVED_IDENTIFIER_FIXUP_652.y = _RESERVED_IDENTIFIER_FIXUP_459.y;
    _RESERVED_IDENTIFIER_FIXUP_652.z = _RESERVED_IDENTIFIER_FIXUP_459.z;
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_491 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_495 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_491.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_660 = _RESERVED_IDENTIFIER_FIXUP_491;
    _RESERVED_IDENTIFIER_FIXUP_660.x = _RESERVED_IDENTIFIER_FIXUP_495;
    _RESERVED_IDENTIFIER_FIXUP_660.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_495;
    vec4 _RESERVED_IDENTIFIER_FIXUP_505 = OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_660.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_666 = _RESERVED_IDENTIFIER_FIXUP_660;
    _RESERVED_IDENTIFIER_FIXUP_666.x = (_RESERVED_IDENTIFIER_FIXUP_491.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_515 = _RESERVED_IDENTIFIER_FIXUP_505.xyz * _RESERVED_IDENTIFIER_FIXUP_666.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_668 = _RESERVED_IDENTIFIER_FIXUP_505;
    _RESERVED_IDENTIFIER_FIXUP_668.x = _RESERVED_IDENTIFIER_FIXUP_515.x;
    _RESERVED_IDENTIFIER_FIXUP_668.y = _RESERVED_IDENTIFIER_FIXUP_515.y;
    _RESERVED_IDENTIFIER_FIXUP_668.z = _RESERVED_IDENTIFIER_FIXUP_515.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_526 = _RESERVED_IDENTIFIER_FIXUP_668.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_666.x = _RESERVED_IDENTIFIER_FIXUP_526.x;
    _RESERVED_IDENTIFIER_FIXUP_666.y = _RESERVED_IDENTIFIER_FIXUP_526.y;
    _RESERVED_IDENTIFIER_FIXUP_666.z = _RESERVED_IDENTIFIER_FIXUP_526.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_537 = _RESERVED_IDENTIFIER_FIXUP_668.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_680;
    _RESERVED_IDENTIFIER_FIXUP_680.x = _RESERVED_IDENTIFIER_FIXUP_537.x;
    _RESERVED_IDENTIFIER_FIXUP_680.y = _RESERVED_IDENTIFIER_FIXUP_537.y;
    _RESERVED_IDENTIFIER_FIXUP_680.z = _RESERVED_IDENTIFIER_FIXUP_537.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_548 = _RESERVED_IDENTIFIER_FIXUP_680.xyz + _RESERVED_IDENTIFIER_FIXUP_680.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_686;
    _RESERVED_IDENTIFIER_FIXUP_686.x = _RESERVED_IDENTIFIER_FIXUP_548.x;
    _RESERVED_IDENTIFIER_FIXUP_686.y = _RESERVED_IDENTIFIER_FIXUP_548.y;
    _RESERVED_IDENTIFIER_FIXUP_686.z = _RESERVED_IDENTIFIER_FIXUP_548.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_562 = (_RESERVED_IDENTIFIER_FIXUP_666.xyz * _RESERVED_IDENTIFIER_FIXUP_666.www) + _RESERVED_IDENTIFIER_FIXUP_686.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_692;
    _RESERVED_IDENTIFIER_FIXUP_692.x = _RESERVED_IDENTIFIER_FIXUP_562.x;
    _RESERVED_IDENTIFIER_FIXUP_692.y = _RESERVED_IDENTIFIER_FIXUP_562.y;
    _RESERVED_IDENTIFIER_FIXUP_692.z = _RESERVED_IDENTIFIER_FIXUP_562.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_575 = _RESERVED_IDENTIFIER_FIXUP_692.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_698;
    _RESERVED_IDENTIFIER_FIXUP_698.x = _RESERVED_IDENTIFIER_FIXUP_575.x;
    _RESERVED_IDENTIFIER_FIXUP_698.y = _RESERVED_IDENTIFIER_FIXUP_575.y;
    _RESERVED_IDENTIFIER_FIXUP_698.z = _RESERVED_IDENTIFIER_FIXUP_575.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_698.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_230 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_239;
    if (_RESERVED_IDENTIFIER_FIXUP_230)
    {
        _RESERVED_IDENTIFIER_FIXUP_239 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_239 = _RESERVED_IDENTIFIER_FIXUP_230;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_239)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_276 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_652.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_303 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_601;
    if (_RESERVED_IDENTIFIER_FIXUP_276 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_601 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_276), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_303);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_601 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_303);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_601;
    wxlLight = vec4(color0.xyz * 2.0, 1.0);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB78 = r0;
    vec3 hdB82 = hdB78.xyz * r1.xxx;
    r0.x = hdB82.x;
    r0.y = hdB82.y;
    r0.z = hdB82.z;
    vec3 hdB95 = r0.www * v1.xyz;
    r1.x = hdB95.x;
    r1.y = hdB95.y;
    r1.z = hdB95.z;
    vec4 hdB102 = r0;
    vec3 hdB106 = hdB102.xyz * v0.xyz;
    r0.x = hdB106.x;
    r0.y = hdB106.y;
    r0.z = hdB106.z;
    vec4 hdB113 = r0;
    vec4 hdB115 = r0;
    vec3 hdB117 = hdB113.xyz + hdB115.xyz;
    r0.x = hdB117.x;
    r0.y = hdB117.y;
    r0.z = hdB117.z;
    vec4 hdB129 = r0;
    vec3 hdB131 = (r1.xyz * r1.www) + hdB129.xyz;
    r0.x = hdB131.x;
    r0.y = hdB131.y;
    r0.z = hdB131.z;
    vec4 hdB138 = r0;
    vec3 hdB155 = hdB138.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB155.x;
    r0.y = hdB155.y;
    r0.z = hdB155.z;
    vec3 hdB170 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB170.x;
    oC0.y = hdB170.y;
    oC0.z = hdB170.z;
    oC0.w = 1.0;
    bool hdB184 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB192;
    if (hdB184)
    {
        hdB192 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB192 = hdB184;
    }
    if (hdB192)
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
    bool _693 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _702;
    if (_693)
    {
        _702 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _702 = _693;
    }
    if (_702)
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
        bool _727 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _742;
        if (!_727)
        {
            _742 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 2u) != 0u;
        }
        else
        {
            _742 = _727;
        }
        if (_742)
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
