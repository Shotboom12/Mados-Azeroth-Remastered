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
float _RESERVED_IDENTIFIER_FIXUP_724;
vec4 _RESERVED_IDENTIFIER_FIXUP_725;


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

void HDActual()
{
    vec2 param = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_372 = hdTex2(param);
    vec4 _RESERVED_IDENTIFIER_FIXUP_628;
    _RESERVED_IDENTIFIER_FIXUP_628.x = 1.0;
    vec2 param_1 = texcoord0.xy;
    vec2 param_2 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_394 = mix(hdTex0(param_1), hdTex1(param_2), _RESERVED_IDENTIFIER_FIXUP_372.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_628.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_630;
    _RESERVED_IDENTIFIER_FIXUP_630.x = _RESERVED_IDENTIFIER_FIXUP_394.x;
    _RESERVED_IDENTIFIER_FIXUP_630.y = _RESERVED_IDENTIFIER_FIXUP_394.y;
    _RESERVED_IDENTIFIER_FIXUP_630.z = _RESERVED_IDENTIFIER_FIXUP_394.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_636;
    _RESERVED_IDENTIFIER_FIXUP_636.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_636.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_636.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_416 = _RESERVED_IDENTIFIER_FIXUP_630.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_724).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_642;
    _RESERVED_IDENTIFIER_FIXUP_642.x = _RESERVED_IDENTIFIER_FIXUP_416.x;
    _RESERVED_IDENTIFIER_FIXUP_642.y = _RESERVED_IDENTIFIER_FIXUP_416.y;
    _RESERVED_IDENTIFIER_FIXUP_642.z = _RESERVED_IDENTIFIER_FIXUP_416.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_427 = _RESERVED_IDENTIFIER_FIXUP_642.xyz + _RESERVED_IDENTIFIER_FIXUP_642.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_648;
    _RESERVED_IDENTIFIER_FIXUP_648.x = _RESERVED_IDENTIFIER_FIXUP_427.x;
    _RESERVED_IDENTIFIER_FIXUP_648.y = _RESERVED_IDENTIFIER_FIXUP_427.y;
    _RESERVED_IDENTIFIER_FIXUP_648.z = _RESERVED_IDENTIFIER_FIXUP_427.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_441 = (_RESERVED_IDENTIFIER_FIXUP_636.xyz * _RESERVED_IDENTIFIER_FIXUP_372.www) + _RESERVED_IDENTIFIER_FIXUP_648.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_654;
    _RESERVED_IDENTIFIER_FIXUP_654.x = _RESERVED_IDENTIFIER_FIXUP_441.x;
    _RESERVED_IDENTIFIER_FIXUP_654.y = _RESERVED_IDENTIFIER_FIXUP_441.y;
    _RESERVED_IDENTIFIER_FIXUP_654.z = _RESERVED_IDENTIFIER_FIXUP_441.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_454 = _RESERVED_IDENTIFIER_FIXUP_654.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_660;
    _RESERVED_IDENTIFIER_FIXUP_660.x = _RESERVED_IDENTIFIER_FIXUP_454.x;
    _RESERVED_IDENTIFIER_FIXUP_660.y = _RESERVED_IDENTIFIER_FIXUP_454.y;
    _RESERVED_IDENTIFIER_FIXUP_660.z = _RESERVED_IDENTIFIER_FIXUP_454.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_469 = _RESERVED_IDENTIFIER_FIXUP_660.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_666;
    _RESERVED_IDENTIFIER_FIXUP_666.x = _RESERVED_IDENTIFIER_FIXUP_469.x;
    _RESERVED_IDENTIFIER_FIXUP_666.y = _RESERVED_IDENTIFIER_FIXUP_469.y;
    _RESERVED_IDENTIFIER_FIXUP_666.z = _RESERVED_IDENTIFIER_FIXUP_469.z;
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_509 = hdTex2(param_3);
    vec2 param_4 = texcoord0.xy;
    vec2 param_5 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_514 = mix(hdTex0(param_4), hdTex1(param_5), _RESERVED_IDENTIFIER_FIXUP_509.xxxx);
    float _RESERVED_IDENTIFIER_FIXUP_518 = (_RESERVED_IDENTIFIER_FIXUP_509.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_679;
    _RESERVED_IDENTIFIER_FIXUP_679.x = _RESERVED_IDENTIFIER_FIXUP_518;
    vec3 _RESERVED_IDENTIFIER_FIXUP_531 = _RESERVED_IDENTIFIER_FIXUP_514.xyz * _RESERVED_IDENTIFIER_FIXUP_679.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_681;
    _RESERVED_IDENTIFIER_FIXUP_681.x = _RESERVED_IDENTIFIER_FIXUP_531.x;
    _RESERVED_IDENTIFIER_FIXUP_681.y = _RESERVED_IDENTIFIER_FIXUP_531.y;
    _RESERVED_IDENTIFIER_FIXUP_681.z = _RESERVED_IDENTIFIER_FIXUP_531.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_542 = _RESERVED_IDENTIFIER_FIXUP_514.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_687;
    _RESERVED_IDENTIFIER_FIXUP_687.x = _RESERVED_IDENTIFIER_FIXUP_542.x;
    _RESERVED_IDENTIFIER_FIXUP_687.y = _RESERVED_IDENTIFIER_FIXUP_542.y;
    _RESERVED_IDENTIFIER_FIXUP_687.z = _RESERVED_IDENTIFIER_FIXUP_542.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_553 = _RESERVED_IDENTIFIER_FIXUP_681.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_693;
    _RESERVED_IDENTIFIER_FIXUP_693.x = _RESERVED_IDENTIFIER_FIXUP_553.x;
    _RESERVED_IDENTIFIER_FIXUP_693.y = _RESERVED_IDENTIFIER_FIXUP_553.y;
    _RESERVED_IDENTIFIER_FIXUP_693.z = _RESERVED_IDENTIFIER_FIXUP_553.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_564 = _RESERVED_IDENTIFIER_FIXUP_693.xyz + _RESERVED_IDENTIFIER_FIXUP_693.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_699;
    _RESERVED_IDENTIFIER_FIXUP_699.x = _RESERVED_IDENTIFIER_FIXUP_564.x;
    _RESERVED_IDENTIFIER_FIXUP_699.y = _RESERVED_IDENTIFIER_FIXUP_564.y;
    _RESERVED_IDENTIFIER_FIXUP_699.z = _RESERVED_IDENTIFIER_FIXUP_564.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_578 = (_RESERVED_IDENTIFIER_FIXUP_687.xyz * _RESERVED_IDENTIFIER_FIXUP_509.www) + _RESERVED_IDENTIFIER_FIXUP_699.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_705;
    _RESERVED_IDENTIFIER_FIXUP_705.x = _RESERVED_IDENTIFIER_FIXUP_578.x;
    _RESERVED_IDENTIFIER_FIXUP_705.y = _RESERVED_IDENTIFIER_FIXUP_578.y;
    _RESERVED_IDENTIFIER_FIXUP_705.z = _RESERVED_IDENTIFIER_FIXUP_578.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_591 = _RESERVED_IDENTIFIER_FIXUP_705.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_711;
    _RESERVED_IDENTIFIER_FIXUP_711.x = _RESERVED_IDENTIFIER_FIXUP_591.x;
    _RESERVED_IDENTIFIER_FIXUP_711.y = _RESERVED_IDENTIFIER_FIXUP_591.y;
    _RESERVED_IDENTIFIER_FIXUP_711.z = _RESERVED_IDENTIFIER_FIXUP_591.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_711.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_666.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_307 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_617;
    if (_RESERVED_IDENTIFIER_FIXUP_280 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_617 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_280), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_307);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_617 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_307);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_617;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_518);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v4.xy;
    r2 = hdTex2(param_2);
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = (r2.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB76 = r0;
    vec3 hdB78 = r3.xyz * hdB76.xxx;
    r0.x = hdB78.x;
    r0.y = hdB78.y;
    r0.z = hdB78.z;
    vec3 hdB91 = r3.www * v1.xyz;
    r1.x = hdB91.x;
    r1.y = hdB91.y;
    r1.z = hdB91.z;
    vec4 hdB98 = r0;
    vec3 hdB102 = hdB98.xyz * v0.xyz;
    r0.x = hdB102.x;
    r0.y = hdB102.y;
    r0.z = hdB102.z;
    vec4 hdB109 = r0;
    vec4 hdB111 = r0;
    vec3 hdB113 = hdB109.xyz + hdB111.xyz;
    r0.x = hdB113.x;
    r0.y = hdB113.y;
    r0.z = hdB113.z;
    vec4 hdB125 = r0;
    vec3 hdB127 = (r1.xyz * r2.www) + hdB125.xyz;
    r0.x = hdB127.x;
    r0.y = hdB127.y;
    r0.z = hdB127.z;
    vec4 hdB134 = r0;
    vec3 hdB151 = hdB134.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB151.x;
    r0.y = hdB151.y;
    r0.z = hdB151.z;
    vec3 hdB166 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB166.x;
    oC0.y = hdB166.y;
    oC0.z = hdB166.z;
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
    bool _731 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _741;
    if (_731)
    {
        _741 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 7u) != 0u;
    }
    else
    {
        _741 = _731;
    }
    if (_741)
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
        bool _766 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _781;
        if (!_766)
        {
            _781 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 7u) != 0u;
        }
        else
        {
            _781 = _766;
        }
        if (_781)
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
