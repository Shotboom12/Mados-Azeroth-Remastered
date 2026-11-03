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
float _RESERVED_IDENTIFIER_FIXUP_720;
vec4 _RESERVED_IDENTIFIER_FIXUP_721;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_361 = hdTex1(param);
    vec4 _RESERVED_IDENTIFIER_FIXUP_620;
    _RESERVED_IDENTIFIER_FIXUP_620.x = 1.0;
    vec2 param_1 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_378 = hdTex0(param_1).xyz * _RESERVED_IDENTIFIER_FIXUP_620.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_622;
    _RESERVED_IDENTIFIER_FIXUP_622.x = _RESERVED_IDENTIFIER_FIXUP_378.x;
    _RESERVED_IDENTIFIER_FIXUP_622.y = _RESERVED_IDENTIFIER_FIXUP_378.y;
    _RESERVED_IDENTIFIER_FIXUP_622.z = _RESERVED_IDENTIFIER_FIXUP_378.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_628;
    _RESERVED_IDENTIFIER_FIXUP_628.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_628.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_628.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_400 = _RESERVED_IDENTIFIER_FIXUP_622.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_720).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_634;
    _RESERVED_IDENTIFIER_FIXUP_634.x = _RESERVED_IDENTIFIER_FIXUP_400.x;
    _RESERVED_IDENTIFIER_FIXUP_634.y = _RESERVED_IDENTIFIER_FIXUP_400.y;
    _RESERVED_IDENTIFIER_FIXUP_634.z = _RESERVED_IDENTIFIER_FIXUP_400.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_411 = _RESERVED_IDENTIFIER_FIXUP_634.xyz + _RESERVED_IDENTIFIER_FIXUP_634.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_640;
    _RESERVED_IDENTIFIER_FIXUP_640.x = _RESERVED_IDENTIFIER_FIXUP_411.x;
    _RESERVED_IDENTIFIER_FIXUP_640.y = _RESERVED_IDENTIFIER_FIXUP_411.y;
    _RESERVED_IDENTIFIER_FIXUP_640.z = _RESERVED_IDENTIFIER_FIXUP_411.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_722 = vec4((_RESERVED_IDENTIFIER_FIXUP_628.xyz * _RESERVED_IDENTIFIER_FIXUP_361.www) + _RESERVED_IDENTIFIER_FIXUP_640.xyz, dot(_RESERVED_IDENTIFIER_FIXUP_361.xyz, optRegs.rows[optTile*82u+uint(0)].xyz));
    vec3 _RESERVED_IDENTIFIER_FIXUP_448 = (_RESERVED_IDENTIFIER_FIXUP_722.xyz * _RESERVED_IDENTIFIER_FIXUP_722.www) - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_654;
    _RESERVED_IDENTIFIER_FIXUP_654.x = _RESERVED_IDENTIFIER_FIXUP_448.x;
    _RESERVED_IDENTIFIER_FIXUP_654.y = _RESERVED_IDENTIFIER_FIXUP_448.y;
    _RESERVED_IDENTIFIER_FIXUP_654.z = _RESERVED_IDENTIFIER_FIXUP_448.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_463 = _RESERVED_IDENTIFIER_FIXUP_654.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_660;
    _RESERVED_IDENTIFIER_FIXUP_660.x = _RESERVED_IDENTIFIER_FIXUP_463.x;
    _RESERVED_IDENTIFIER_FIXUP_660.y = _RESERVED_IDENTIFIER_FIXUP_463.y;
    _RESERVED_IDENTIFIER_FIXUP_660.z = _RESERVED_IDENTIFIER_FIXUP_463.z;
    vec2 param_2 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_492 = hdTex0(param_2);
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_496 = hdTex1(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_500 = (_RESERVED_IDENTIFIER_FIXUP_496.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_673;
    _RESERVED_IDENTIFIER_FIXUP_673.x = _RESERVED_IDENTIFIER_FIXUP_500;
    vec3 _RESERVED_IDENTIFIER_FIXUP_513 = _RESERVED_IDENTIFIER_FIXUP_492.xyz * _RESERVED_IDENTIFIER_FIXUP_673.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_675 = _RESERVED_IDENTIFIER_FIXUP_492;
    _RESERVED_IDENTIFIER_FIXUP_675.x = _RESERVED_IDENTIFIER_FIXUP_513.x;
    _RESERVED_IDENTIFIER_FIXUP_675.y = _RESERVED_IDENTIFIER_FIXUP_513.y;
    _RESERVED_IDENTIFIER_FIXUP_675.z = _RESERVED_IDENTIFIER_FIXUP_513.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_524 = _RESERVED_IDENTIFIER_FIXUP_675.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_681;
    _RESERVED_IDENTIFIER_FIXUP_681.x = _RESERVED_IDENTIFIER_FIXUP_524.x;
    _RESERVED_IDENTIFIER_FIXUP_681.y = _RESERVED_IDENTIFIER_FIXUP_524.y;
    _RESERVED_IDENTIFIER_FIXUP_681.z = _RESERVED_IDENTIFIER_FIXUP_524.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_535 = _RESERVED_IDENTIFIER_FIXUP_675.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_687;
    _RESERVED_IDENTIFIER_FIXUP_687.x = _RESERVED_IDENTIFIER_FIXUP_535.x;
    _RESERVED_IDENTIFIER_FIXUP_687.y = _RESERVED_IDENTIFIER_FIXUP_535.y;
    _RESERVED_IDENTIFIER_FIXUP_687.z = _RESERVED_IDENTIFIER_FIXUP_535.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_546 = _RESERVED_IDENTIFIER_FIXUP_687.xyz + _RESERVED_IDENTIFIER_FIXUP_687.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_693;
    _RESERVED_IDENTIFIER_FIXUP_693.x = _RESERVED_IDENTIFIER_FIXUP_546.x;
    _RESERVED_IDENTIFIER_FIXUP_693.y = _RESERVED_IDENTIFIER_FIXUP_546.y;
    _RESERVED_IDENTIFIER_FIXUP_693.z = _RESERVED_IDENTIFIER_FIXUP_546.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_723 = vec4((_RESERVED_IDENTIFIER_FIXUP_681.xyz * _RESERVED_IDENTIFIER_FIXUP_496.www) + _RESERVED_IDENTIFIER_FIXUP_693.xyz, dot(_RESERVED_IDENTIFIER_FIXUP_496.xyz, optRegs.rows[optTile*82u+uint(0)].xyz));
    vec3 _RESERVED_IDENTIFIER_FIXUP_583 = (_RESERVED_IDENTIFIER_FIXUP_723.xyz * _RESERVED_IDENTIFIER_FIXUP_723.www) - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_707;
    _RESERVED_IDENTIFIER_FIXUP_707.x = _RESERVED_IDENTIFIER_FIXUP_583.x;
    _RESERVED_IDENTIFIER_FIXUP_707.y = _RESERVED_IDENTIFIER_FIXUP_583.y;
    _RESERVED_IDENTIFIER_FIXUP_707.z = _RESERVED_IDENTIFIER_FIXUP_583.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_707.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_660.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_303 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_609;
    if (_RESERVED_IDENTIFIER_FIXUP_276 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_609 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_276), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_303);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_609 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_303);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_609;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_500);
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
    r0.w = dot(r1.xyz, optRegs.rows[optTile*82u+uint(0)].xyz);
    vec4 hdB137 = r0;
    vec4 hdB139 = r0;
    vec3 hdB147 = (hdB137.xyz * hdB139.www) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB147.x;
    r0.y = hdB147.y;
    r0.z = hdB147.z;
    vec3 hdB162 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB162.x;
    oC0.y = hdB162.y;
    oC0.z = hdB162.z;
    oC0.w = 1.0;
    bool hdB177 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB185;
    if (hdB177)
    {
        hdB185 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB185 = hdB177;
    }
    if (hdB185)
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
    bool _692 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _701;
    if (_692)
    {
        _701 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 3u) != 0u;
    }
    else
    {
        _701 = _692;
    }
    if (_701)
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
        bool _726 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _741;
        if (!_726)
        {
            _741 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 3u) != 0u;
        }
        else
        {
            _741 = _726;
        }
        if (_741)
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
