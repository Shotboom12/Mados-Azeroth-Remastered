#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];

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
float _RESERVED_IDENTIFIER_FIXUP_735;
vec4 _RESERVED_IDENTIFIER_FIXUP_736;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _78 = hdOverride >= 0;
    bool _87;
    if (_78)
    {
        _87 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _87 = _78;
    }
    vec4 _88;
    if (_87)
    {
        _88 = vec4(float(hdOverride));
    }
    else
    {
        _88 = value;
    }
    return _88;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _40 = hdOverride >= 0;
    bool _60;
    if (_40)
    {
        _60 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _60 = _40;
    }
    vec4 _61;
    if (_60)
    {
        _61 = vec4(float(hdOverride));
    }
    else
    {
        _61 = value;
    }
    return _61;
}

void HDActual()
{
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_365 = hdTex1(param);
    vec4 _RESERVED_IDENTIFIER_FIXUP_629;
    _RESERVED_IDENTIFIER_FIXUP_629.x = 1.0;
    vec2 param_1 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_382 = hdTex0(param_1).xyz * _RESERVED_IDENTIFIER_FIXUP_629.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_631;
    _RESERVED_IDENTIFIER_FIXUP_631.x = _RESERVED_IDENTIFIER_FIXUP_382.x;
    _RESERVED_IDENTIFIER_FIXUP_631.y = _RESERVED_IDENTIFIER_FIXUP_382.y;
    _RESERVED_IDENTIFIER_FIXUP_631.z = _RESERVED_IDENTIFIER_FIXUP_382.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_637;
    _RESERVED_IDENTIFIER_FIXUP_637.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_637.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_637.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_404 = _RESERVED_IDENTIFIER_FIXUP_631.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_735).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_643;
    _RESERVED_IDENTIFIER_FIXUP_643.x = _RESERVED_IDENTIFIER_FIXUP_404.x;
    _RESERVED_IDENTIFIER_FIXUP_643.y = _RESERVED_IDENTIFIER_FIXUP_404.y;
    _RESERVED_IDENTIFIER_FIXUP_643.z = _RESERVED_IDENTIFIER_FIXUP_404.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_415 = _RESERVED_IDENTIFIER_FIXUP_643.xyz + _RESERVED_IDENTIFIER_FIXUP_643.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_649;
    _RESERVED_IDENTIFIER_FIXUP_649.x = _RESERVED_IDENTIFIER_FIXUP_415.x;
    _RESERVED_IDENTIFIER_FIXUP_649.y = _RESERVED_IDENTIFIER_FIXUP_415.y;
    _RESERVED_IDENTIFIER_FIXUP_649.z = _RESERVED_IDENTIFIER_FIXUP_415.z;
    float _RESERVED_IDENTIFIER_FIXUP_439 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_365.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_737 = vec4((_RESERVED_IDENTIFIER_FIXUP_637.xyz * _RESERVED_IDENTIFIER_FIXUP_365.www) + _RESERVED_IDENTIFIER_FIXUP_649.xyz, _RESERVED_IDENTIFIER_FIXUP_439);
    _RESERVED_IDENTIFIER_FIXUP_737.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_439;
    vec3 _RESERVED_IDENTIFIER_FIXUP_455 = (_RESERVED_IDENTIFIER_FIXUP_737.xyz * _RESERVED_IDENTIFIER_FIXUP_737.www) - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_666;
    _RESERVED_IDENTIFIER_FIXUP_666.x = _RESERVED_IDENTIFIER_FIXUP_455.x;
    _RESERVED_IDENTIFIER_FIXUP_666.y = _RESERVED_IDENTIFIER_FIXUP_455.y;
    _RESERVED_IDENTIFIER_FIXUP_666.z = _RESERVED_IDENTIFIER_FIXUP_455.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_470 = _RESERVED_IDENTIFIER_FIXUP_666.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_672;
    _RESERVED_IDENTIFIER_FIXUP_672.x = _RESERVED_IDENTIFIER_FIXUP_470.x;
    _RESERVED_IDENTIFIER_FIXUP_672.y = _RESERVED_IDENTIFIER_FIXUP_470.y;
    _RESERVED_IDENTIFIER_FIXUP_672.z = _RESERVED_IDENTIFIER_FIXUP_470.z;
    vec2 param_2 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_499 = hdTex0(param_2);
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_503 = hdTex1(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_507 = (_RESERVED_IDENTIFIER_FIXUP_503.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_685;
    _RESERVED_IDENTIFIER_FIXUP_685.x = _RESERVED_IDENTIFIER_FIXUP_507;
    vec3 _RESERVED_IDENTIFIER_FIXUP_520 = _RESERVED_IDENTIFIER_FIXUP_499.xyz * _RESERVED_IDENTIFIER_FIXUP_685.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_687 = _RESERVED_IDENTIFIER_FIXUP_499;
    _RESERVED_IDENTIFIER_FIXUP_687.x = _RESERVED_IDENTIFIER_FIXUP_520.x;
    _RESERVED_IDENTIFIER_FIXUP_687.y = _RESERVED_IDENTIFIER_FIXUP_520.y;
    _RESERVED_IDENTIFIER_FIXUP_687.z = _RESERVED_IDENTIFIER_FIXUP_520.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_531 = _RESERVED_IDENTIFIER_FIXUP_687.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_693;
    _RESERVED_IDENTIFIER_FIXUP_693.x = _RESERVED_IDENTIFIER_FIXUP_531.x;
    _RESERVED_IDENTIFIER_FIXUP_693.y = _RESERVED_IDENTIFIER_FIXUP_531.y;
    _RESERVED_IDENTIFIER_FIXUP_693.z = _RESERVED_IDENTIFIER_FIXUP_531.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_542 = _RESERVED_IDENTIFIER_FIXUP_687.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_699;
    _RESERVED_IDENTIFIER_FIXUP_699.x = _RESERVED_IDENTIFIER_FIXUP_542.x;
    _RESERVED_IDENTIFIER_FIXUP_699.y = _RESERVED_IDENTIFIER_FIXUP_542.y;
    _RESERVED_IDENTIFIER_FIXUP_699.z = _RESERVED_IDENTIFIER_FIXUP_542.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_553 = _RESERVED_IDENTIFIER_FIXUP_699.xyz + _RESERVED_IDENTIFIER_FIXUP_699.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_705;
    _RESERVED_IDENTIFIER_FIXUP_705.x = _RESERVED_IDENTIFIER_FIXUP_553.x;
    _RESERVED_IDENTIFIER_FIXUP_705.y = _RESERVED_IDENTIFIER_FIXUP_553.y;
    _RESERVED_IDENTIFIER_FIXUP_705.z = _RESERVED_IDENTIFIER_FIXUP_553.z;
    float _RESERVED_IDENTIFIER_FIXUP_577 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_503.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_738 = vec4((_RESERVED_IDENTIFIER_FIXUP_693.xyz * _RESERVED_IDENTIFIER_FIXUP_503.www) + _RESERVED_IDENTIFIER_FIXUP_705.xyz, _RESERVED_IDENTIFIER_FIXUP_577);
    _RESERVED_IDENTIFIER_FIXUP_738.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_577;
    vec3 _RESERVED_IDENTIFIER_FIXUP_593 = (_RESERVED_IDENTIFIER_FIXUP_738.xyz * _RESERVED_IDENTIFIER_FIXUP_738.www) - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_722;
    _RESERVED_IDENTIFIER_FIXUP_722.x = _RESERVED_IDENTIFIER_FIXUP_593.x;
    _RESERVED_IDENTIFIER_FIXUP_722.y = _RESERVED_IDENTIFIER_FIXUP_593.y;
    _RESERVED_IDENTIFIER_FIXUP_722.z = _RESERVED_IDENTIFIER_FIXUP_593.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_722.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_234 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_243;
    if (_RESERVED_IDENTIFIER_FIXUP_234)
    {
        _RESERVED_IDENTIFIER_FIXUP_243 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_243 = _RESERVED_IDENTIFIER_FIXUP_234;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_243)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_280 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_672.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_307 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_619;
    if (_RESERVED_IDENTIFIER_FIXUP_280 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_619 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_280), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_307);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_619 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_307);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_619;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_507);
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
    vec4 v4 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    r2.x = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB60 = r0;
    vec3 hdB64 = hdB60.xyz * r2.xxx;
    r0.x = hdB64.x;
    r0.y = hdB64.y;
    r0.z = hdB64.z;
    vec3 hdB77 = r0.www * v1.xyz;
    r2.x = hdB77.x;
    r2.y = hdB77.y;
    r2.z = hdB77.z;
    vec4 hdB84 = r0;
    vec3 hdB88 = hdB84.xyz * v0.xyz;
    r0.x = hdB88.x;
    r0.y = hdB88.y;
    r0.z = hdB88.z;
    vec4 hdB95 = r0;
    vec4 hdB97 = r0;
    vec3 hdB99 = hdB95.xyz + hdB97.xyz;
    r0.x = hdB99.x;
    r0.y = hdB99.y;
    r0.z = hdB99.z;
    vec4 hdB111 = r0;
    vec3 hdB113 = (r2.xyz * r1.www) + hdB111.xyz;
    r0.x = hdB113.x;
    r0.y = hdB113.y;
    r0.z = hdB113.z;
    r0.w = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.w = (-r0.w) + 1.0;
    vec4 hdB132 = r0;
    vec4 hdB134 = r0;
    vec3 hdB152 = (hdB132.xyz * hdB134.www) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB152.x;
    r0.y = hdB152.y;
    r0.z = hdB152.z;
    vec3 hdB167 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB167.x;
    oC0.y = hdB167.y;
    oC0.z = hdB167.z;
    oC0.w = 1.0;
    bool hdB181 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB189;
    if (hdB181)
    {
        hdB189 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB189 = hdB181;
    }
    if (hdB189)
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
    bool _702 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _711;
    if (_702)
    {
        _711 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 3u) != 0u;
    }
    else
    {
        _711 = _702;
    }
    if (_711)
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
        bool _736 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _751;
        if (!_736)
        {
            _751 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 3u) != 0u;
        }
        else
        {
            _751 = _736;
        }
        if (_751)
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
