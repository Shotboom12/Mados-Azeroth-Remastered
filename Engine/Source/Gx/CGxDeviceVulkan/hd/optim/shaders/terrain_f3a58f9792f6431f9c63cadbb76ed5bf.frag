#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];

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
float _RESERVED_IDENTIFIER_FIXUP_749;
vec4 _RESERVED_IDENTIFIER_FIXUP_750;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _81 = hdOverride >= 0;
    bool _91;
    if (_81)
    {
        _91 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _91 = _81;
    }
    vec4 _92;
    if (_91)
    {
        _92 = vec4(float(hdOverride));
    }
    else
    {
        _92 = value;
    }
    return _92;
}

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
    bool _109 = hdOverride >= 0;
    bool _118;
    if (_109)
    {
        _118 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _118 = _109;
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
    vec2 param = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_375 = hdTex2(param);
    float _RESERVED_IDENTIFIER_FIXUP_379 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_375.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_646 = _RESERVED_IDENTIFIER_FIXUP_375;
    _RESERVED_IDENTIFIER_FIXUP_646.y = _RESERVED_IDENTIFIER_FIXUP_379;
    _RESERVED_IDENTIFIER_FIXUP_646.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_379;
    vec4 _RESERVED_IDENTIFIER_FIXUP_652 = _RESERVED_IDENTIFIER_FIXUP_646;
    _RESERVED_IDENTIFIER_FIXUP_652.x = (_RESERVED_IDENTIFIER_FIXUP_375.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_1 = texcoord0.xy;
    vec2 param_2 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_409 = ((hdTex0(param_1) * _RESERVED_IDENTIFIER_FIXUP_646.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_646.xxxx * hdTex1(param_2))).xyz * _RESERVED_IDENTIFIER_FIXUP_652.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_654;
    _RESERVED_IDENTIFIER_FIXUP_654.x = _RESERVED_IDENTIFIER_FIXUP_409.x;
    _RESERVED_IDENTIFIER_FIXUP_654.y = _RESERVED_IDENTIFIER_FIXUP_409.y;
    _RESERVED_IDENTIFIER_FIXUP_654.z = _RESERVED_IDENTIFIER_FIXUP_409.z;
    _RESERVED_IDENTIFIER_FIXUP_652.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_652.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_652.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_431 = _RESERVED_IDENTIFIER_FIXUP_654.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_749).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_666;
    _RESERVED_IDENTIFIER_FIXUP_666.x = _RESERVED_IDENTIFIER_FIXUP_431.x;
    _RESERVED_IDENTIFIER_FIXUP_666.y = _RESERVED_IDENTIFIER_FIXUP_431.y;
    _RESERVED_IDENTIFIER_FIXUP_666.z = _RESERVED_IDENTIFIER_FIXUP_431.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_442 = _RESERVED_IDENTIFIER_FIXUP_666.xyz + _RESERVED_IDENTIFIER_FIXUP_666.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_672;
    _RESERVED_IDENTIFIER_FIXUP_672.x = _RESERVED_IDENTIFIER_FIXUP_442.x;
    _RESERVED_IDENTIFIER_FIXUP_672.y = _RESERVED_IDENTIFIER_FIXUP_442.y;
    _RESERVED_IDENTIFIER_FIXUP_672.z = _RESERVED_IDENTIFIER_FIXUP_442.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_456 = (_RESERVED_IDENTIFIER_FIXUP_652.xyz * _RESERVED_IDENTIFIER_FIXUP_652.www) + _RESERVED_IDENTIFIER_FIXUP_672.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_678;
    _RESERVED_IDENTIFIER_FIXUP_678.x = _RESERVED_IDENTIFIER_FIXUP_456.x;
    _RESERVED_IDENTIFIER_FIXUP_678.y = _RESERVED_IDENTIFIER_FIXUP_456.y;
    _RESERVED_IDENTIFIER_FIXUP_678.z = _RESERVED_IDENTIFIER_FIXUP_456.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_469 = _RESERVED_IDENTIFIER_FIXUP_678.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_684;
    _RESERVED_IDENTIFIER_FIXUP_684.x = _RESERVED_IDENTIFIER_FIXUP_469.x;
    _RESERVED_IDENTIFIER_FIXUP_684.y = _RESERVED_IDENTIFIER_FIXUP_469.y;
    _RESERVED_IDENTIFIER_FIXUP_684.z = _RESERVED_IDENTIFIER_FIXUP_469.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_484 = _RESERVED_IDENTIFIER_FIXUP_684.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_690;
    _RESERVED_IDENTIFIER_FIXUP_690.x = _RESERVED_IDENTIFIER_FIXUP_484.x;
    _RESERVED_IDENTIFIER_FIXUP_690.y = _RESERVED_IDENTIFIER_FIXUP_484.y;
    _RESERVED_IDENTIFIER_FIXUP_690.z = _RESERVED_IDENTIFIER_FIXUP_484.z;
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_519 = hdTex2(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_523 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_519.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_698 = _RESERVED_IDENTIFIER_FIXUP_519;
    _RESERVED_IDENTIFIER_FIXUP_698.y = _RESERVED_IDENTIFIER_FIXUP_523;
    _RESERVED_IDENTIFIER_FIXUP_698.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_523;
    vec2 param_4 = texcoord0.xy;
    vec2 param_5 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_543 = (hdTex0(param_4) * _RESERVED_IDENTIFIER_FIXUP_698.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_698.xxxx * hdTex1(param_5));
    vec4 _RESERVED_IDENTIFIER_FIXUP_704 = _RESERVED_IDENTIFIER_FIXUP_698;
    _RESERVED_IDENTIFIER_FIXUP_704.x = (_RESERVED_IDENTIFIER_FIXUP_519.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_553 = _RESERVED_IDENTIFIER_FIXUP_543.xyz * _RESERVED_IDENTIFIER_FIXUP_704.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_706 = _RESERVED_IDENTIFIER_FIXUP_543;
    _RESERVED_IDENTIFIER_FIXUP_706.x = _RESERVED_IDENTIFIER_FIXUP_553.x;
    _RESERVED_IDENTIFIER_FIXUP_706.y = _RESERVED_IDENTIFIER_FIXUP_553.y;
    _RESERVED_IDENTIFIER_FIXUP_706.z = _RESERVED_IDENTIFIER_FIXUP_553.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_564 = _RESERVED_IDENTIFIER_FIXUP_706.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_704.x = _RESERVED_IDENTIFIER_FIXUP_564.x;
    _RESERVED_IDENTIFIER_FIXUP_704.y = _RESERVED_IDENTIFIER_FIXUP_564.y;
    _RESERVED_IDENTIFIER_FIXUP_704.z = _RESERVED_IDENTIFIER_FIXUP_564.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_575 = _RESERVED_IDENTIFIER_FIXUP_706.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_718;
    _RESERVED_IDENTIFIER_FIXUP_718.x = _RESERVED_IDENTIFIER_FIXUP_575.x;
    _RESERVED_IDENTIFIER_FIXUP_718.y = _RESERVED_IDENTIFIER_FIXUP_575.y;
    _RESERVED_IDENTIFIER_FIXUP_718.z = _RESERVED_IDENTIFIER_FIXUP_575.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_586 = _RESERVED_IDENTIFIER_FIXUP_718.xyz + _RESERVED_IDENTIFIER_FIXUP_718.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_724;
    _RESERVED_IDENTIFIER_FIXUP_724.x = _RESERVED_IDENTIFIER_FIXUP_586.x;
    _RESERVED_IDENTIFIER_FIXUP_724.y = _RESERVED_IDENTIFIER_FIXUP_586.y;
    _RESERVED_IDENTIFIER_FIXUP_724.z = _RESERVED_IDENTIFIER_FIXUP_586.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_600 = (_RESERVED_IDENTIFIER_FIXUP_704.xyz * _RESERVED_IDENTIFIER_FIXUP_704.www) + _RESERVED_IDENTIFIER_FIXUP_724.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_730;
    _RESERVED_IDENTIFIER_FIXUP_730.x = _RESERVED_IDENTIFIER_FIXUP_600.x;
    _RESERVED_IDENTIFIER_FIXUP_730.y = _RESERVED_IDENTIFIER_FIXUP_600.y;
    _RESERVED_IDENTIFIER_FIXUP_730.z = _RESERVED_IDENTIFIER_FIXUP_600.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_613 = _RESERVED_IDENTIFIER_FIXUP_730.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_736;
    _RESERVED_IDENTIFIER_FIXUP_736.x = _RESERVED_IDENTIFIER_FIXUP_613.x;
    _RESERVED_IDENTIFIER_FIXUP_736.y = _RESERVED_IDENTIFIER_FIXUP_613.y;
    _RESERVED_IDENTIFIER_FIXUP_736.z = _RESERVED_IDENTIFIER_FIXUP_613.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_736.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_242 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_251;
    if (_RESERVED_IDENTIFIER_FIXUP_242)
    {
        _RESERVED_IDENTIFIER_FIXUP_251 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_251 = _RESERVED_IDENTIFIER_FIXUP_242;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_251)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_288 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_690.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_315 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_639;
    if (_RESERVED_IDENTIFIER_FIXUP_288 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_639 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_288), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_315);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_639 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_315);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_639;
    wxlLight = vec4(color0.xyz * 2.0, 1.0);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v4.xy;
    r1 = hdTex2(param_1);
    r1.y = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.y = (-r1.y) + 1.0;
    vec2 param_2 = v3.xy;
    r2 = hdTex1(param_2);
    r2 = r1.xxxx * r2;
    r0 = (r0 * r1.yyyy) + r2;
    r1.x = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB91 = r0;
    vec3 hdB95 = hdB91.xyz * r1.xxx;
    r0.x = hdB95.x;
    r0.y = hdB95.y;
    r0.z = hdB95.z;
    vec3 hdB107 = r0.www * v1.xyz;
    r1.x = hdB107.x;
    r1.y = hdB107.y;
    r1.z = hdB107.z;
    vec4 hdB114 = r0;
    vec3 hdB118 = hdB114.xyz * v0.xyz;
    r0.x = hdB118.x;
    r0.y = hdB118.y;
    r0.z = hdB118.z;
    vec4 hdB125 = r0;
    vec4 hdB127 = r0;
    vec3 hdB129 = hdB125.xyz + hdB127.xyz;
    r0.x = hdB129.x;
    r0.y = hdB129.y;
    r0.z = hdB129.z;
    vec4 hdB141 = r0;
    vec3 hdB143 = (r1.xyz * r1.www) + hdB141.xyz;
    r0.x = hdB143.x;
    r0.y = hdB143.y;
    r0.z = hdB143.z;
    vec4 hdB150 = r0;
    vec3 hdB167 = hdB150.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB167.x;
    r0.y = hdB167.y;
    r0.z = hdB167.z;
    vec3 hdB182 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB182.x;
    oC0.y = hdB182.y;
    oC0.z = hdB182.z;
    oC0.w = 1.0;
    bool hdB196 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB204;
    if (hdB196)
    {
        hdB204 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB204 = hdB196;
    }
    if (hdB204)
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
    bool _780 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _790;
    if (_780)
    {
        _790 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 7u) != 0u;
    }
    else
    {
        _790 = _780;
    }
    if (_790)
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
        bool _815 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _830;
        if (!_815)
        {
            _830 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 7u) != 0u;
        }
        else
        {
            _830 = _815;
        }
        if (_830)
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
