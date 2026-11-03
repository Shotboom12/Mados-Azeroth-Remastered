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
float _RESERVED_IDENTIFIER_FIXUP_763;
vec4 _RESERVED_IDENTIFIER_FIXUP_764;


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
    float _RESERVED_IDENTIFIER_FIXUP_369 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _RESERVED_IDENTIFIER_FIXUP_376 = OptTex0( texcoord0.xyz).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_765 = vec4(_RESERVED_IDENTIFIER_FIXUP_369, _RESERVED_IDENTIFIER_FIXUP_376 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_763).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_387 = _RESERVED_IDENTIFIER_FIXUP_765.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_390 = _RESERVED_IDENTIFIER_FIXUP_387 + _RESERVED_IDENTIFIER_FIXUP_387;
    vec4 _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_765;
    _RESERVED_IDENTIFIER_FIXUP_656.y = _RESERVED_IDENTIFIER_FIXUP_390.x;
    _RESERVED_IDENTIFIER_FIXUP_656.z = _RESERVED_IDENTIFIER_FIXUP_390.y;
    _RESERVED_IDENTIFIER_FIXUP_656.w = _RESERVED_IDENTIFIER_FIXUP_390.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_668;
    _RESERVED_IDENTIFIER_FIXUP_668.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_668.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_668.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_766 = vec4(mix(_RESERVED_IDENTIFIER_FIXUP_656.yzw, _RESERVED_IDENTIFIER_FIXUP_376, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_656.xxx, vec3(0.0))), 1.0);
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_443 = _RESERVED_IDENTIFIER_FIXUP_668.xyz * hdTex1(param).www;
    vec4 _RESERVED_IDENTIFIER_FIXUP_679;
    _RESERVED_IDENTIFIER_FIXUP_679.x = _RESERVED_IDENTIFIER_FIXUP_443.x;
    _RESERVED_IDENTIFIER_FIXUP_679.y = _RESERVED_IDENTIFIER_FIXUP_443.y;
    _RESERVED_IDENTIFIER_FIXUP_679.z = _RESERVED_IDENTIFIER_FIXUP_443.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_457 = (_RESERVED_IDENTIFIER_FIXUP_766.xyz * _RESERVED_IDENTIFIER_FIXUP_766.www) + _RESERVED_IDENTIFIER_FIXUP_679.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_685;
    _RESERVED_IDENTIFIER_FIXUP_685.x = _RESERVED_IDENTIFIER_FIXUP_457.x;
    _RESERVED_IDENTIFIER_FIXUP_685.y = _RESERVED_IDENTIFIER_FIXUP_457.y;
    _RESERVED_IDENTIFIER_FIXUP_685.z = _RESERVED_IDENTIFIER_FIXUP_457.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_470 = _RESERVED_IDENTIFIER_FIXUP_685.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_691;
    _RESERVED_IDENTIFIER_FIXUP_691.x = _RESERVED_IDENTIFIER_FIXUP_470.x;
    _RESERVED_IDENTIFIER_FIXUP_691.y = _RESERVED_IDENTIFIER_FIXUP_470.y;
    _RESERVED_IDENTIFIER_FIXUP_691.z = _RESERVED_IDENTIFIER_FIXUP_470.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_485 = _RESERVED_IDENTIFIER_FIXUP_691.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_697;
    _RESERVED_IDENTIFIER_FIXUP_697.x = _RESERVED_IDENTIFIER_FIXUP_485.x;
    _RESERVED_IDENTIFIER_FIXUP_697.y = _RESERVED_IDENTIFIER_FIXUP_485.y;
    _RESERVED_IDENTIFIER_FIXUP_697.z = _RESERVED_IDENTIFIER_FIXUP_485.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_518 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_520 = _RESERVED_IDENTIFIER_FIXUP_518.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_767 = vec4(_RESERVED_IDENTIFIER_FIXUP_369, _RESERVED_IDENTIFIER_FIXUP_520 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_531 = _RESERVED_IDENTIFIER_FIXUP_767.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_534 = _RESERVED_IDENTIFIER_FIXUP_531 + _RESERVED_IDENTIFIER_FIXUP_531;
    vec4 _RESERVED_IDENTIFIER_FIXUP_713 = _RESERVED_IDENTIFIER_FIXUP_767;
    _RESERVED_IDENTIFIER_FIXUP_713.y = _RESERVED_IDENTIFIER_FIXUP_534.x;
    _RESERVED_IDENTIFIER_FIXUP_713.z = _RESERVED_IDENTIFIER_FIXUP_534.y;
    _RESERVED_IDENTIFIER_FIXUP_713.w = _RESERVED_IDENTIFIER_FIXUP_534.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_560 = _RESERVED_IDENTIFIER_FIXUP_518.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_725;
    _RESERVED_IDENTIFIER_FIXUP_725.x = _RESERVED_IDENTIFIER_FIXUP_560.x;
    _RESERVED_IDENTIFIER_FIXUP_725.y = _RESERVED_IDENTIFIER_FIXUP_560.y;
    _RESERVED_IDENTIFIER_FIXUP_725.z = _RESERVED_IDENTIFIER_FIXUP_560.z;
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_570 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_574 = (_RESERVED_IDENTIFIER_FIXUP_570.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_768 = vec4(mix(_RESERVED_IDENTIFIER_FIXUP_713.yzw, _RESERVED_IDENTIFIER_FIXUP_520, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_713.xxx, vec3(0.0))), _RESERVED_IDENTIFIER_FIXUP_574);
    _RESERVED_IDENTIFIER_FIXUP_768.w = _RESERVED_IDENTIFIER_FIXUP_574;
    vec3 _RESERVED_IDENTIFIER_FIXUP_587 = _RESERVED_IDENTIFIER_FIXUP_725.xyz * _RESERVED_IDENTIFIER_FIXUP_570.www;
    vec4 _RESERVED_IDENTIFIER_FIXUP_738;
    _RESERVED_IDENTIFIER_FIXUP_738.x = _RESERVED_IDENTIFIER_FIXUP_587.x;
    _RESERVED_IDENTIFIER_FIXUP_738.y = _RESERVED_IDENTIFIER_FIXUP_587.y;
    _RESERVED_IDENTIFIER_FIXUP_738.z = _RESERVED_IDENTIFIER_FIXUP_587.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_601 = (_RESERVED_IDENTIFIER_FIXUP_768.xyz * _RESERVED_IDENTIFIER_FIXUP_768.www) + _RESERVED_IDENTIFIER_FIXUP_738.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_744;
    _RESERVED_IDENTIFIER_FIXUP_744.x = _RESERVED_IDENTIFIER_FIXUP_601.x;
    _RESERVED_IDENTIFIER_FIXUP_744.y = _RESERVED_IDENTIFIER_FIXUP_601.y;
    _RESERVED_IDENTIFIER_FIXUP_744.z = _RESERVED_IDENTIFIER_FIXUP_601.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_614 = _RESERVED_IDENTIFIER_FIXUP_744.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_750;
    _RESERVED_IDENTIFIER_FIXUP_750.x = _RESERVED_IDENTIFIER_FIXUP_614.x;
    _RESERVED_IDENTIFIER_FIXUP_750.y = _RESERVED_IDENTIFIER_FIXUP_614.y;
    _RESERVED_IDENTIFIER_FIXUP_750.z = _RESERVED_IDENTIFIER_FIXUP_614.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_750.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_244 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_253;
    if (_RESERVED_IDENTIFIER_FIXUP_244)
    {
        _RESERVED_IDENTIFIER_FIXUP_253 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_253 = _RESERVED_IDENTIFIER_FIXUP_244;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_253)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_290 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_697.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_316 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_640;
    if (_RESERVED_IDENTIFIER_FIXUP_290 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_640 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_290), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_316);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_640 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_316);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_640;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_574);
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
    r0.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    r1 = OptTex0( v2.xyz);
    vec3 hdB65 = r1.xyz * v0.xyz;
    r0.y = hdB65.x;
    r0.z = hdB65.y;
    r0.w = hdB65.z;
    vec4 hdB75 = r0;
    vec4 hdB77 = r0;
    vec3 hdB79 = hdB75.yzw + hdB77.yzw;
    r0.y = hdB79.x;
    r0.z = hdB79.y;
    r0.w = hdB79.z;
    vec4 hdB86 = r0;
    vec4 hdB90 = r0;
    vec3 hdB97 = mix(hdB86.yzw, r1.xyz, greaterThanEqual(-hdB90.xxx, vec3(0.0)));
    r0.x = hdB97.x;
    r0.y = hdB97.y;
    r0.z = hdB97.z;
    vec4 hdB104 = r1;
    vec3 hdB108 = hdB104.www * v1.xyz;
    r1.x = hdB108.x;
    r1.y = hdB108.y;
    r1.z = hdB108.z;
    vec2 param = v3.xy;
    r2 = hdTex1(param);
    r0.w = (r2.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB131 = r1;
    vec3 hdB135 = hdB131.xyz * r2.www;
    r1.x = hdB135.x;
    r1.y = hdB135.y;
    r1.z = hdB135.z;
    vec4 hdB142 = r0;
    vec4 hdB144 = r0;
    vec3 hdB149 = (hdB142.xyz * hdB144.www) + r1.xyz;
    r0.x = hdB149.x;
    r0.y = hdB149.y;
    r0.z = hdB149.z;
    vec4 hdB156 = r0;
    vec3 hdB164 = hdB156.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB164.x;
    r0.y = hdB164.y;
    r0.z = hdB164.z;
    vec3 hdB179 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB179.x;
    oC0.y = hdB179.y;
    oC0.z = hdB179.z;
    oC0.w = 1.0;
    bool hdB191 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB199;
    if (hdB191)
    {
        hdB199 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB199 = hdB191;
    }
    if (hdB199)
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
    bool _701 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _710;
    if (_701)
    {
        _710 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _710 = _701;
    }
    if (_710)
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
        bool _735 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _750;
        if (!_735)
        {
            _750 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 2u) != 0u;
        }
        else
        {
            _750 = _735;
        }
        if (_750)
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
