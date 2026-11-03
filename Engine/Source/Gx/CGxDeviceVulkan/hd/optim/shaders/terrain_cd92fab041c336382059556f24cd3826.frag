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
float _RESERVED_IDENTIFIER_FIXUP_686;
vec4 _RESERVED_IDENTIFIER_FIXUP_687;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_348 = hdTex1(param);
    _RESERVED_IDENTIFIER_FIXUP_348.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_369 = _RESERVED_IDENTIFIER_FIXUP_348.xxx * OptTex0( texcoord0.xyz).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_592 = _RESERVED_IDENTIFIER_FIXUP_348;
    _RESERVED_IDENTIFIER_FIXUP_592.x = _RESERVED_IDENTIFIER_FIXUP_369.x;
    _RESERVED_IDENTIFIER_FIXUP_592.y = _RESERVED_IDENTIFIER_FIXUP_369.y;
    _RESERVED_IDENTIFIER_FIXUP_592.z = _RESERVED_IDENTIFIER_FIXUP_369.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_598;
    _RESERVED_IDENTIFIER_FIXUP_598.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_598.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_598.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_391 = _RESERVED_IDENTIFIER_FIXUP_592.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_686).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_604 = _RESERVED_IDENTIFIER_FIXUP_592;
    _RESERVED_IDENTIFIER_FIXUP_604.x = _RESERVED_IDENTIFIER_FIXUP_391.x;
    _RESERVED_IDENTIFIER_FIXUP_604.y = _RESERVED_IDENTIFIER_FIXUP_391.y;
    _RESERVED_IDENTIFIER_FIXUP_604.z = _RESERVED_IDENTIFIER_FIXUP_391.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_402 = _RESERVED_IDENTIFIER_FIXUP_604.xyz + _RESERVED_IDENTIFIER_FIXUP_604.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_610 = _RESERVED_IDENTIFIER_FIXUP_604;
    _RESERVED_IDENTIFIER_FIXUP_610.x = _RESERVED_IDENTIFIER_FIXUP_402.x;
    _RESERVED_IDENTIFIER_FIXUP_610.y = _RESERVED_IDENTIFIER_FIXUP_402.y;
    _RESERVED_IDENTIFIER_FIXUP_610.z = _RESERVED_IDENTIFIER_FIXUP_402.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_416 = (_RESERVED_IDENTIFIER_FIXUP_598.xyz * _RESERVED_IDENTIFIER_FIXUP_610.www) + _RESERVED_IDENTIFIER_FIXUP_610.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_616;
    _RESERVED_IDENTIFIER_FIXUP_616.x = _RESERVED_IDENTIFIER_FIXUP_416.x;
    _RESERVED_IDENTIFIER_FIXUP_616.y = _RESERVED_IDENTIFIER_FIXUP_416.y;
    _RESERVED_IDENTIFIER_FIXUP_616.z = _RESERVED_IDENTIFIER_FIXUP_416.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_429 = _RESERVED_IDENTIFIER_FIXUP_616.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_622;
    _RESERVED_IDENTIFIER_FIXUP_622.x = _RESERVED_IDENTIFIER_FIXUP_429.x;
    _RESERVED_IDENTIFIER_FIXUP_622.y = _RESERVED_IDENTIFIER_FIXUP_429.y;
    _RESERVED_IDENTIFIER_FIXUP_622.z = _RESERVED_IDENTIFIER_FIXUP_429.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_444 = _RESERVED_IDENTIFIER_FIXUP_622.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_628;
    _RESERVED_IDENTIFIER_FIXUP_628.x = _RESERVED_IDENTIFIER_FIXUP_444.x;
    _RESERVED_IDENTIFIER_FIXUP_628.y = _RESERVED_IDENTIFIER_FIXUP_444.y;
    _RESERVED_IDENTIFIER_FIXUP_628.z = _RESERVED_IDENTIFIER_FIXUP_444.z;
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_472 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_476 = (_RESERVED_IDENTIFIER_FIXUP_472.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_637 = _RESERVED_IDENTIFIER_FIXUP_472;
    _RESERVED_IDENTIFIER_FIXUP_637.x = _RESERVED_IDENTIFIER_FIXUP_476;
    _RESERVED_IDENTIFIER_FIXUP_637.x = _RESERVED_IDENTIFIER_FIXUP_476;
    vec4 _RESERVED_IDENTIFIER_FIXUP_488 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_493 = _RESERVED_IDENTIFIER_FIXUP_637.xxx * _RESERVED_IDENTIFIER_FIXUP_488.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_643 = _RESERVED_IDENTIFIER_FIXUP_637;
    _RESERVED_IDENTIFIER_FIXUP_643.x = _RESERVED_IDENTIFIER_FIXUP_493.x;
    _RESERVED_IDENTIFIER_FIXUP_643.y = _RESERVED_IDENTIFIER_FIXUP_493.y;
    _RESERVED_IDENTIFIER_FIXUP_643.z = _RESERVED_IDENTIFIER_FIXUP_493.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_504 = _RESERVED_IDENTIFIER_FIXUP_488.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_649;
    _RESERVED_IDENTIFIER_FIXUP_649.x = _RESERVED_IDENTIFIER_FIXUP_504.x;
    _RESERVED_IDENTIFIER_FIXUP_649.y = _RESERVED_IDENTIFIER_FIXUP_504.y;
    _RESERVED_IDENTIFIER_FIXUP_649.z = _RESERVED_IDENTIFIER_FIXUP_504.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_515 = _RESERVED_IDENTIFIER_FIXUP_643.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_655 = _RESERVED_IDENTIFIER_FIXUP_643;
    _RESERVED_IDENTIFIER_FIXUP_655.x = _RESERVED_IDENTIFIER_FIXUP_515.x;
    _RESERVED_IDENTIFIER_FIXUP_655.y = _RESERVED_IDENTIFIER_FIXUP_515.y;
    _RESERVED_IDENTIFIER_FIXUP_655.z = _RESERVED_IDENTIFIER_FIXUP_515.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_526 = _RESERVED_IDENTIFIER_FIXUP_655.xyz + _RESERVED_IDENTIFIER_FIXUP_655.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_661 = _RESERVED_IDENTIFIER_FIXUP_655;
    _RESERVED_IDENTIFIER_FIXUP_661.x = _RESERVED_IDENTIFIER_FIXUP_526.x;
    _RESERVED_IDENTIFIER_FIXUP_661.y = _RESERVED_IDENTIFIER_FIXUP_526.y;
    _RESERVED_IDENTIFIER_FIXUP_661.z = _RESERVED_IDENTIFIER_FIXUP_526.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_540 = (_RESERVED_IDENTIFIER_FIXUP_649.xyz * _RESERVED_IDENTIFIER_FIXUP_661.www) + _RESERVED_IDENTIFIER_FIXUP_661.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_667;
    _RESERVED_IDENTIFIER_FIXUP_667.x = _RESERVED_IDENTIFIER_FIXUP_540.x;
    _RESERVED_IDENTIFIER_FIXUP_667.y = _RESERVED_IDENTIFIER_FIXUP_540.y;
    _RESERVED_IDENTIFIER_FIXUP_667.z = _RESERVED_IDENTIFIER_FIXUP_540.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_553 = _RESERVED_IDENTIFIER_FIXUP_667.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_673;
    _RESERVED_IDENTIFIER_FIXUP_673.x = _RESERVED_IDENTIFIER_FIXUP_553.x;
    _RESERVED_IDENTIFIER_FIXUP_673.y = _RESERVED_IDENTIFIER_FIXUP_553.y;
    _RESERVED_IDENTIFIER_FIXUP_673.z = _RESERVED_IDENTIFIER_FIXUP_553.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_673.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_222 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_231;
    if (_RESERVED_IDENTIFIER_FIXUP_222)
    {
        _RESERVED_IDENTIFIER_FIXUP_231 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_231 = _RESERVED_IDENTIFIER_FIXUP_222;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_231)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_268 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_628.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_295 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_579;
    if (_RESERVED_IDENTIFIER_FIXUP_268 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_579 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_268), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_295);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_579 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_295);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_579;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_476);
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
    vec2 param = v3.xy;
    r0 = hdTex1(param);
    r0.x = (r0.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    r1 = OptTex0( v2.xyz);
    vec4 hdB62 = r0;
    vec3 hdB66 = hdB62.xxx * r1.xyz;
    r0.x = hdB66.x;
    r0.y = hdB66.y;
    r0.z = hdB66.z;
    vec4 hdB75 = r1;
    vec3 hdB79 = hdB75.www * v1.xyz;
    r1.x = hdB79.x;
    r1.y = hdB79.y;
    r1.z = hdB79.z;
    vec4 hdB86 = r0;
    vec3 hdB90 = hdB86.xyz * v0.xyz;
    r0.x = hdB90.x;
    r0.y = hdB90.y;
    r0.z = hdB90.z;
    vec4 hdB97 = r0;
    vec4 hdB99 = r0;
    vec3 hdB101 = hdB97.xyz + hdB99.xyz;
    r0.x = hdB101.x;
    r0.y = hdB101.y;
    r0.z = hdB101.z;
    vec4 hdB110 = r0;
    vec4 hdB113 = r0;
    vec3 hdB115 = (r1.xyz * hdB110.www) + hdB113.xyz;
    r0.x = hdB115.x;
    r0.y = hdB115.y;
    r0.z = hdB115.z;
    vec4 hdB122 = r0;
    vec3 hdB139 = hdB122.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB139.x;
    r0.y = hdB139.y;
    r0.z = hdB139.z;
    vec3 hdB154 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB154.x;
    oC0.y = hdB154.y;
    oC0.z = hdB154.z;
    oC0.w = 1.0;
    bool hdB169 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB177;
    if (hdB169)
    {
        hdB177 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB177 = hdB169;
    }
    if (hdB177)
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
    bool _658 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _667;
    if (_658)
    {
        _667 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _667 = _658;
    }
    if (_667)
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
        bool _692 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _707;
        if (!_692)
        {
            _707 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 2u) != 0u;
        }
        else
        {
            _707 = _692;
        }
        if (_707)
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
