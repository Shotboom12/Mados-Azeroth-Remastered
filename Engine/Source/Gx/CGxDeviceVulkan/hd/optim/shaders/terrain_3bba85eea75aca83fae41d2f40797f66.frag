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
float _RESERVED_IDENTIFIER_FIXUP_785;
vec4 _RESERVED_IDENTIFIER_FIXUP_786;


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
    float _RESERVED_IDENTIFIER_FIXUP_375 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _RESERVED_IDENTIFIER_FIXUP_382 = OptTex0( texcoord0.xyz).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_787 = vec4(_RESERVED_IDENTIFIER_FIXUP_375, _RESERVED_IDENTIFIER_FIXUP_382 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_785).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_393 = _RESERVED_IDENTIFIER_FIXUP_787.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_396 = _RESERVED_IDENTIFIER_FIXUP_393 + _RESERVED_IDENTIFIER_FIXUP_393;
    vec4 _RESERVED_IDENTIFIER_FIXUP_674 = _RESERVED_IDENTIFIER_FIXUP_787;
    _RESERVED_IDENTIFIER_FIXUP_674.y = _RESERVED_IDENTIFIER_FIXUP_396.x;
    _RESERVED_IDENTIFIER_FIXUP_674.z = _RESERVED_IDENTIFIER_FIXUP_396.y;
    _RESERVED_IDENTIFIER_FIXUP_674.w = _RESERVED_IDENTIFIER_FIXUP_396.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_411 = mix(_RESERVED_IDENTIFIER_FIXUP_674.yzw, _RESERVED_IDENTIFIER_FIXUP_382, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_674.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_680;
    _RESERVED_IDENTIFIER_FIXUP_680.x = _RESERVED_IDENTIFIER_FIXUP_411.x;
    _RESERVED_IDENTIFIER_FIXUP_680.y = _RESERVED_IDENTIFIER_FIXUP_411.y;
    _RESERVED_IDENTIFIER_FIXUP_680.z = _RESERVED_IDENTIFIER_FIXUP_411.z;
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_421 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_425 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_421.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_686 = _RESERVED_IDENTIFIER_FIXUP_421;
    _RESERVED_IDENTIFIER_FIXUP_686.x = _RESERVED_IDENTIFIER_FIXUP_425;
    _RESERVED_IDENTIFIER_FIXUP_686.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_425;
    vec4 _RESERVED_IDENTIFIER_FIXUP_691 = _RESERVED_IDENTIFIER_FIXUP_686;
    _RESERVED_IDENTIFIER_FIXUP_691.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_691.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_691.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_788 = vec4(_RESERVED_IDENTIFIER_FIXUP_691.www * _RESERVED_IDENTIFIER_FIXUP_691.xyz, (_RESERVED_IDENTIFIER_FIXUP_421.w * 0.300000011920928955078125) + 0.699999988079071044921875);
    vec3 _RESERVED_IDENTIFIER_FIXUP_470 = ((_RESERVED_IDENTIFIER_FIXUP_680 * _RESERVED_IDENTIFIER_FIXUP_686.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_788.www) + _RESERVED_IDENTIFIER_FIXUP_788.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_706;
    _RESERVED_IDENTIFIER_FIXUP_706.x = _RESERVED_IDENTIFIER_FIXUP_470.x;
    _RESERVED_IDENTIFIER_FIXUP_706.y = _RESERVED_IDENTIFIER_FIXUP_470.y;
    _RESERVED_IDENTIFIER_FIXUP_706.z = _RESERVED_IDENTIFIER_FIXUP_470.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_483 = _RESERVED_IDENTIFIER_FIXUP_706.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_712;
    _RESERVED_IDENTIFIER_FIXUP_712.x = _RESERVED_IDENTIFIER_FIXUP_483.x;
    _RESERVED_IDENTIFIER_FIXUP_712.y = _RESERVED_IDENTIFIER_FIXUP_483.y;
    _RESERVED_IDENTIFIER_FIXUP_712.z = _RESERVED_IDENTIFIER_FIXUP_483.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_498 = _RESERVED_IDENTIFIER_FIXUP_712.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_718;
    _RESERVED_IDENTIFIER_FIXUP_718.x = _RESERVED_IDENTIFIER_FIXUP_498.x;
    _RESERVED_IDENTIFIER_FIXUP_718.y = _RESERVED_IDENTIFIER_FIXUP_498.y;
    _RESERVED_IDENTIFIER_FIXUP_718.z = _RESERVED_IDENTIFIER_FIXUP_498.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_530 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_532 = _RESERVED_IDENTIFIER_FIXUP_530.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_789 = vec4(_RESERVED_IDENTIFIER_FIXUP_375, _RESERVED_IDENTIFIER_FIXUP_532 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_543 = _RESERVED_IDENTIFIER_FIXUP_789.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_546 = _RESERVED_IDENTIFIER_FIXUP_543 + _RESERVED_IDENTIFIER_FIXUP_543;
    vec4 _RESERVED_IDENTIFIER_FIXUP_734 = _RESERVED_IDENTIFIER_FIXUP_789;
    _RESERVED_IDENTIFIER_FIXUP_734.y = _RESERVED_IDENTIFIER_FIXUP_546.x;
    _RESERVED_IDENTIFIER_FIXUP_734.z = _RESERVED_IDENTIFIER_FIXUP_546.y;
    _RESERVED_IDENTIFIER_FIXUP_734.w = _RESERVED_IDENTIFIER_FIXUP_546.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_561 = mix(_RESERVED_IDENTIFIER_FIXUP_734.yzw, _RESERVED_IDENTIFIER_FIXUP_532, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_734.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_740 = _RESERVED_IDENTIFIER_FIXUP_530;
    _RESERVED_IDENTIFIER_FIXUP_740.x = _RESERVED_IDENTIFIER_FIXUP_561.x;
    _RESERVED_IDENTIFIER_FIXUP_740.y = _RESERVED_IDENTIFIER_FIXUP_561.y;
    _RESERVED_IDENTIFIER_FIXUP_740.z = _RESERVED_IDENTIFIER_FIXUP_561.z;
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_571 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_575 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_571.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_746 = _RESERVED_IDENTIFIER_FIXUP_571;
    _RESERVED_IDENTIFIER_FIXUP_746.x = _RESERVED_IDENTIFIER_FIXUP_575;
    _RESERVED_IDENTIFIER_FIXUP_746.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_575;
    vec4 _RESERVED_IDENTIFIER_FIXUP_585 = _RESERVED_IDENTIFIER_FIXUP_740 * _RESERVED_IDENTIFIER_FIXUP_746.xxxx;
    vec3 _RESERVED_IDENTIFIER_FIXUP_590 = _RESERVED_IDENTIFIER_FIXUP_585.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_751 = _RESERVED_IDENTIFIER_FIXUP_746;
    _RESERVED_IDENTIFIER_FIXUP_751.x = _RESERVED_IDENTIFIER_FIXUP_590.x;
    _RESERVED_IDENTIFIER_FIXUP_751.y = _RESERVED_IDENTIFIER_FIXUP_590.y;
    _RESERVED_IDENTIFIER_FIXUP_751.z = _RESERVED_IDENTIFIER_FIXUP_590.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_790 = vec4(_RESERVED_IDENTIFIER_FIXUP_751.www * _RESERVED_IDENTIFIER_FIXUP_751.xyz, (_RESERVED_IDENTIFIER_FIXUP_571.w * 0.300000011920928955078125) + 0.699999988079071044921875);
    vec3 _RESERVED_IDENTIFIER_FIXUP_620 = (_RESERVED_IDENTIFIER_FIXUP_585.xyz * _RESERVED_IDENTIFIER_FIXUP_790.www) + _RESERVED_IDENTIFIER_FIXUP_790.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_766;
    _RESERVED_IDENTIFIER_FIXUP_766.x = _RESERVED_IDENTIFIER_FIXUP_620.x;
    _RESERVED_IDENTIFIER_FIXUP_766.y = _RESERVED_IDENTIFIER_FIXUP_620.y;
    _RESERVED_IDENTIFIER_FIXUP_766.z = _RESERVED_IDENTIFIER_FIXUP_620.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_633 = _RESERVED_IDENTIFIER_FIXUP_766.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_772;
    _RESERVED_IDENTIFIER_FIXUP_772.x = _RESERVED_IDENTIFIER_FIXUP_633.x;
    _RESERVED_IDENTIFIER_FIXUP_772.y = _RESERVED_IDENTIFIER_FIXUP_633.y;
    _RESERVED_IDENTIFIER_FIXUP_772.z = _RESERVED_IDENTIFIER_FIXUP_633.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_772.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_251 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_260;
    if (_RESERVED_IDENTIFIER_FIXUP_251)
    {
        _RESERVED_IDENTIFIER_FIXUP_260 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_260 = _RESERVED_IDENTIFIER_FIXUP_251;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_260)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_297 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_718.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_323 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_659;
    if (_RESERVED_IDENTIFIER_FIXUP_297 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_659 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_297), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_323);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_659 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_323);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_659;
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
    r0.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    r1 = OptTex0( v2.xyz);
    vec3 hdB64 = r1.xyz * v0.xyz;
    r0.y = hdB64.x;
    r0.z = hdB64.y;
    r0.w = hdB64.z;
    vec4 hdB74 = r0;
    vec4 hdB76 = r0;
    vec3 hdB78 = hdB74.yzw + hdB76.yzw;
    r0.y = hdB78.x;
    r0.z = hdB78.y;
    r0.w = hdB78.z;
    vec4 hdB87 = r1;
    vec3 hdB96 = mix(r0.yzw, hdB87.xyz, greaterThanEqual(-r0.xxx, vec3(0.0)));
    r1.x = hdB96.x;
    r1.y = hdB96.y;
    r1.z = hdB96.z;
    vec2 param = v3.xy;
    r0 = hdTex1(param);
    r0.x = clamp(dot(r0.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    r1 *= r0.xxxx;
    vec3 hdB132 = r1.www * v1.xyz;
    r0.x = hdB132.x;
    r0.y = hdB132.y;
    r0.z = hdB132.z;
    vec4 hdB139 = r0;
    vec4 hdB141 = r0;
    vec3 hdB143 = hdB139.www * hdB141.xyz;
    r0.x = hdB143.x;
    r0.y = hdB143.y;
    r0.z = hdB143.z;
    r0.w = (r0.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB159 = r0;
    vec4 hdB162 = r0;
    vec3 hdB164 = (r1.xyz * hdB159.www) + hdB162.xyz;
    r0.x = hdB164.x;
    r0.y = hdB164.y;
    r0.z = hdB164.z;
    vec4 hdB171 = r0;
    vec3 hdB179 = hdB171.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB179.x;
    r0.y = hdB179.y;
    r0.z = hdB179.z;
    vec3 hdB194 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB194.x;
    oC0.y = hdB194.y;
    oC0.z = hdB194.z;
    oC0.w = 1.0;
    bool hdB205 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB213;
    if (hdB205)
    {
        hdB213 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB213 = hdB205;
    }
    if (hdB213)
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
    bool _749 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _758;
    if (_749)
    {
        _758 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _758 = _749;
    }
    if (_758)
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
        bool _783 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _798;
        if (!_783)
        {
            _798 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 2u) != 0u;
        }
        else
        {
            _798 = _783;
        }
        if (_798)
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
