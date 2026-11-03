#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_752;
vec4 _RESERVED_IDENTIFIER_FIXUP_753;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _40 = hdOverride >= 0;
    bool _60;
    if (_40)
    {
        _60 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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

void HDActual()
{
    vec2 param = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_378 = hdTex2(param);
    float _RESERVED_IDENTIFIER_FIXUP_382 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_378.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_649 = _RESERVED_IDENTIFIER_FIXUP_378;
    _RESERVED_IDENTIFIER_FIXUP_649.y = _RESERVED_IDENTIFIER_FIXUP_382;
    _RESERVED_IDENTIFIER_FIXUP_649.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_382;
    vec4 _RESERVED_IDENTIFIER_FIXUP_655 = _RESERVED_IDENTIFIER_FIXUP_649;
    _RESERVED_IDENTIFIER_FIXUP_655.x = (_RESERVED_IDENTIFIER_FIXUP_378.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_1 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_412 = ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_649.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_649.xxxx * hdTex1(param_1))).xyz * _RESERVED_IDENTIFIER_FIXUP_655.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_657;
    _RESERVED_IDENTIFIER_FIXUP_657.x = _RESERVED_IDENTIFIER_FIXUP_412.x;
    _RESERVED_IDENTIFIER_FIXUP_657.y = _RESERVED_IDENTIFIER_FIXUP_412.y;
    _RESERVED_IDENTIFIER_FIXUP_657.z = _RESERVED_IDENTIFIER_FIXUP_412.z;
    _RESERVED_IDENTIFIER_FIXUP_655.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_655.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_655.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_434 = _RESERVED_IDENTIFIER_FIXUP_657.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_752).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_669;
    _RESERVED_IDENTIFIER_FIXUP_669.x = _RESERVED_IDENTIFIER_FIXUP_434.x;
    _RESERVED_IDENTIFIER_FIXUP_669.y = _RESERVED_IDENTIFIER_FIXUP_434.y;
    _RESERVED_IDENTIFIER_FIXUP_669.z = _RESERVED_IDENTIFIER_FIXUP_434.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_445 = _RESERVED_IDENTIFIER_FIXUP_669.xyz + _RESERVED_IDENTIFIER_FIXUP_669.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_675;
    _RESERVED_IDENTIFIER_FIXUP_675.x = _RESERVED_IDENTIFIER_FIXUP_445.x;
    _RESERVED_IDENTIFIER_FIXUP_675.y = _RESERVED_IDENTIFIER_FIXUP_445.y;
    _RESERVED_IDENTIFIER_FIXUP_675.z = _RESERVED_IDENTIFIER_FIXUP_445.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_459 = (_RESERVED_IDENTIFIER_FIXUP_655.xyz * _RESERVED_IDENTIFIER_FIXUP_655.www) + _RESERVED_IDENTIFIER_FIXUP_675.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_681;
    _RESERVED_IDENTIFIER_FIXUP_681.x = _RESERVED_IDENTIFIER_FIXUP_459.x;
    _RESERVED_IDENTIFIER_FIXUP_681.y = _RESERVED_IDENTIFIER_FIXUP_459.y;
    _RESERVED_IDENTIFIER_FIXUP_681.z = _RESERVED_IDENTIFIER_FIXUP_459.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_472 = _RESERVED_IDENTIFIER_FIXUP_681.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_687;
    _RESERVED_IDENTIFIER_FIXUP_687.x = _RESERVED_IDENTIFIER_FIXUP_472.x;
    _RESERVED_IDENTIFIER_FIXUP_687.y = _RESERVED_IDENTIFIER_FIXUP_472.y;
    _RESERVED_IDENTIFIER_FIXUP_687.z = _RESERVED_IDENTIFIER_FIXUP_472.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_487 = _RESERVED_IDENTIFIER_FIXUP_687.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_693;
    _RESERVED_IDENTIFIER_FIXUP_693.x = _RESERVED_IDENTIFIER_FIXUP_487.x;
    _RESERVED_IDENTIFIER_FIXUP_693.y = _RESERVED_IDENTIFIER_FIXUP_487.y;
    _RESERVED_IDENTIFIER_FIXUP_693.z = _RESERVED_IDENTIFIER_FIXUP_487.z;
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_522 = hdTex2(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_526 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_522.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_701 = _RESERVED_IDENTIFIER_FIXUP_522;
    _RESERVED_IDENTIFIER_FIXUP_701.y = _RESERVED_IDENTIFIER_FIXUP_526;
    _RESERVED_IDENTIFIER_FIXUP_701.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_526;
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_546 = (OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_701.yyyy) + (_RESERVED_IDENTIFIER_FIXUP_701.xxxx * hdTex1(param_3));
    vec4 _RESERVED_IDENTIFIER_FIXUP_707 = _RESERVED_IDENTIFIER_FIXUP_701;
    _RESERVED_IDENTIFIER_FIXUP_707.x = (_RESERVED_IDENTIFIER_FIXUP_522.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_556 = _RESERVED_IDENTIFIER_FIXUP_546.xyz * _RESERVED_IDENTIFIER_FIXUP_707.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_709 = _RESERVED_IDENTIFIER_FIXUP_546;
    _RESERVED_IDENTIFIER_FIXUP_709.x = _RESERVED_IDENTIFIER_FIXUP_556.x;
    _RESERVED_IDENTIFIER_FIXUP_709.y = _RESERVED_IDENTIFIER_FIXUP_556.y;
    _RESERVED_IDENTIFIER_FIXUP_709.z = _RESERVED_IDENTIFIER_FIXUP_556.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_567 = _RESERVED_IDENTIFIER_FIXUP_709.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_707.x = _RESERVED_IDENTIFIER_FIXUP_567.x;
    _RESERVED_IDENTIFIER_FIXUP_707.y = _RESERVED_IDENTIFIER_FIXUP_567.y;
    _RESERVED_IDENTIFIER_FIXUP_707.z = _RESERVED_IDENTIFIER_FIXUP_567.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_578 = _RESERVED_IDENTIFIER_FIXUP_709.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_721;
    _RESERVED_IDENTIFIER_FIXUP_721.x = _RESERVED_IDENTIFIER_FIXUP_578.x;
    _RESERVED_IDENTIFIER_FIXUP_721.y = _RESERVED_IDENTIFIER_FIXUP_578.y;
    _RESERVED_IDENTIFIER_FIXUP_721.z = _RESERVED_IDENTIFIER_FIXUP_578.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_589 = _RESERVED_IDENTIFIER_FIXUP_721.xyz + _RESERVED_IDENTIFIER_FIXUP_721.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_727;
    _RESERVED_IDENTIFIER_FIXUP_727.x = _RESERVED_IDENTIFIER_FIXUP_589.x;
    _RESERVED_IDENTIFIER_FIXUP_727.y = _RESERVED_IDENTIFIER_FIXUP_589.y;
    _RESERVED_IDENTIFIER_FIXUP_727.z = _RESERVED_IDENTIFIER_FIXUP_589.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_603 = (_RESERVED_IDENTIFIER_FIXUP_707.xyz * _RESERVED_IDENTIFIER_FIXUP_707.www) + _RESERVED_IDENTIFIER_FIXUP_727.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_733;
    _RESERVED_IDENTIFIER_FIXUP_733.x = _RESERVED_IDENTIFIER_FIXUP_603.x;
    _RESERVED_IDENTIFIER_FIXUP_733.y = _RESERVED_IDENTIFIER_FIXUP_603.y;
    _RESERVED_IDENTIFIER_FIXUP_733.z = _RESERVED_IDENTIFIER_FIXUP_603.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_616 = _RESERVED_IDENTIFIER_FIXUP_733.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_739;
    _RESERVED_IDENTIFIER_FIXUP_739.x = _RESERVED_IDENTIFIER_FIXUP_616.x;
    _RESERVED_IDENTIFIER_FIXUP_739.y = _RESERVED_IDENTIFIER_FIXUP_616.y;
    _RESERVED_IDENTIFIER_FIXUP_739.z = _RESERVED_IDENTIFIER_FIXUP_616.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_739.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_245 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_254;
    if (_RESERVED_IDENTIFIER_FIXUP_245)
    {
        _RESERVED_IDENTIFIER_FIXUP_254 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_254 = _RESERVED_IDENTIFIER_FIXUP_245;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_254)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_291 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_693.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_318 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_642;
    if (_RESERVED_IDENTIFIER_FIXUP_291 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_642 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_291), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_318);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_642 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_318);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_642;
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v4.xy;
    r1 = hdTex2(param);
    r1.y = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.y = (-r1.y) + 1.0;
    vec2 param_1 = v3.xy;
    r2 = hdTex1(param_1);
    r2 = r1.xxxx * r2;
    r0 = (r0 * r1.yyyy) + r2;
    r1.x = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB94 = r0;
    vec3 hdB98 = hdB94.xyz * r1.xxx;
    r0.x = hdB98.x;
    r0.y = hdB98.y;
    r0.z = hdB98.z;
    vec3 hdB110 = r0.www * v1.xyz;
    r1.x = hdB110.x;
    r1.y = hdB110.y;
    r1.z = hdB110.z;
    vec4 hdB117 = r0;
    vec3 hdB121 = hdB117.xyz * v0.xyz;
    r0.x = hdB121.x;
    r0.y = hdB121.y;
    r0.z = hdB121.z;
    vec4 hdB128 = r0;
    vec4 hdB130 = r0;
    vec3 hdB132 = hdB128.xyz + hdB130.xyz;
    r0.x = hdB132.x;
    r0.y = hdB132.y;
    r0.z = hdB132.z;
    vec4 hdB144 = r0;
    vec3 hdB146 = (r1.xyz * r1.www) + hdB144.xyz;
    r0.x = hdB146.x;
    r0.y = hdB146.y;
    r0.z = hdB146.z;
    vec4 hdB153 = r0;
    vec3 hdB170 = hdB153.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB170.x;
    r0.y = hdB170.y;
    r0.z = hdB170.z;
    vec3 hdB185 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB185.x;
    oC0.y = hdB185.y;
    oC0.z = hdB185.z;
    oC0.w = 1.0;
    bool hdB199 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB207;
    if (hdB199)
    {
        hdB207 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB207 = hdB199;
    }
    if (hdB207)
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
    bool _754 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _764;
    if (_754)
    {
        _764 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 6u) != 0u;
    }
    else
    {
        _764 = _754;
    }
    if (_764)
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
        bool _789 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _804;
        if (!_789)
        {
            _804 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 6u) != 0u;
        }
        else
        {
            _804 = _789;
        }
        if (_804)
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
