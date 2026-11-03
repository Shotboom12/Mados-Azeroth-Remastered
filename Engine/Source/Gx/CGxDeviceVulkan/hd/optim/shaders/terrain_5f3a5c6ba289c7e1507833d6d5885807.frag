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
float _RESERVED_IDENTIFIER_FIXUP_782;
vec4 _RESERVED_IDENTIFIER_FIXUP_783;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
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
    float _RESERVED_IDENTIFIER_FIXUP_372 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec2 param = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_379 = hdTex0(param).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_784 = vec4(_RESERVED_IDENTIFIER_FIXUP_372, _RESERVED_IDENTIFIER_FIXUP_379 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_782).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_390 = _RESERVED_IDENTIFIER_FIXUP_784.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_393 = _RESERVED_IDENTIFIER_FIXUP_390 + _RESERVED_IDENTIFIER_FIXUP_390;
    vec4 _RESERVED_IDENTIFIER_FIXUP_671 = _RESERVED_IDENTIFIER_FIXUP_784;
    _RESERVED_IDENTIFIER_FIXUP_671.y = _RESERVED_IDENTIFIER_FIXUP_393.x;
    _RESERVED_IDENTIFIER_FIXUP_671.z = _RESERVED_IDENTIFIER_FIXUP_393.y;
    _RESERVED_IDENTIFIER_FIXUP_671.w = _RESERVED_IDENTIFIER_FIXUP_393.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_408 = mix(_RESERVED_IDENTIFIER_FIXUP_671.yzw, _RESERVED_IDENTIFIER_FIXUP_379, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_671.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_677;
    _RESERVED_IDENTIFIER_FIXUP_677.x = _RESERVED_IDENTIFIER_FIXUP_408.x;
    _RESERVED_IDENTIFIER_FIXUP_677.y = _RESERVED_IDENTIFIER_FIXUP_408.y;
    _RESERVED_IDENTIFIER_FIXUP_677.z = _RESERVED_IDENTIFIER_FIXUP_408.z;
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_418 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_422 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_418.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_683 = _RESERVED_IDENTIFIER_FIXUP_418;
    _RESERVED_IDENTIFIER_FIXUP_683.x = _RESERVED_IDENTIFIER_FIXUP_422;
    _RESERVED_IDENTIFIER_FIXUP_683.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_422;
    vec4 _RESERVED_IDENTIFIER_FIXUP_688 = _RESERVED_IDENTIFIER_FIXUP_683;
    _RESERVED_IDENTIFIER_FIXUP_688.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_688.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_688.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_785 = vec4(_RESERVED_IDENTIFIER_FIXUP_688.www * _RESERVED_IDENTIFIER_FIXUP_688.xyz, (_RESERVED_IDENTIFIER_FIXUP_418.w * 0.300000011920928955078125) + 0.699999988079071044921875);
    vec3 _RESERVED_IDENTIFIER_FIXUP_467 = ((_RESERVED_IDENTIFIER_FIXUP_677 * _RESERVED_IDENTIFIER_FIXUP_683.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_785.www) + _RESERVED_IDENTIFIER_FIXUP_785.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_703;
    _RESERVED_IDENTIFIER_FIXUP_703.x = _RESERVED_IDENTIFIER_FIXUP_467.x;
    _RESERVED_IDENTIFIER_FIXUP_703.y = _RESERVED_IDENTIFIER_FIXUP_467.y;
    _RESERVED_IDENTIFIER_FIXUP_703.z = _RESERVED_IDENTIFIER_FIXUP_467.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_480 = _RESERVED_IDENTIFIER_FIXUP_703.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_709;
    _RESERVED_IDENTIFIER_FIXUP_709.x = _RESERVED_IDENTIFIER_FIXUP_480.x;
    _RESERVED_IDENTIFIER_FIXUP_709.y = _RESERVED_IDENTIFIER_FIXUP_480.y;
    _RESERVED_IDENTIFIER_FIXUP_709.z = _RESERVED_IDENTIFIER_FIXUP_480.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_495 = _RESERVED_IDENTIFIER_FIXUP_709.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_715;
    _RESERVED_IDENTIFIER_FIXUP_715.x = _RESERVED_IDENTIFIER_FIXUP_495.x;
    _RESERVED_IDENTIFIER_FIXUP_715.y = _RESERVED_IDENTIFIER_FIXUP_495.y;
    _RESERVED_IDENTIFIER_FIXUP_715.z = _RESERVED_IDENTIFIER_FIXUP_495.z;
    vec2 param_2 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_527 = hdTex0(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_529 = _RESERVED_IDENTIFIER_FIXUP_527.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_786 = vec4(_RESERVED_IDENTIFIER_FIXUP_372, _RESERVED_IDENTIFIER_FIXUP_529 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_540 = _RESERVED_IDENTIFIER_FIXUP_786.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_543 = _RESERVED_IDENTIFIER_FIXUP_540 + _RESERVED_IDENTIFIER_FIXUP_540;
    vec4 _RESERVED_IDENTIFIER_FIXUP_731 = _RESERVED_IDENTIFIER_FIXUP_786;
    _RESERVED_IDENTIFIER_FIXUP_731.y = _RESERVED_IDENTIFIER_FIXUP_543.x;
    _RESERVED_IDENTIFIER_FIXUP_731.z = _RESERVED_IDENTIFIER_FIXUP_543.y;
    _RESERVED_IDENTIFIER_FIXUP_731.w = _RESERVED_IDENTIFIER_FIXUP_543.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_558 = mix(_RESERVED_IDENTIFIER_FIXUP_731.yzw, _RESERVED_IDENTIFIER_FIXUP_529, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_731.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_737 = _RESERVED_IDENTIFIER_FIXUP_527;
    _RESERVED_IDENTIFIER_FIXUP_737.x = _RESERVED_IDENTIFIER_FIXUP_558.x;
    _RESERVED_IDENTIFIER_FIXUP_737.y = _RESERVED_IDENTIFIER_FIXUP_558.y;
    _RESERVED_IDENTIFIER_FIXUP_737.z = _RESERVED_IDENTIFIER_FIXUP_558.z;
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_568 = hdTex1(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_572 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_568.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_743 = _RESERVED_IDENTIFIER_FIXUP_568;
    _RESERVED_IDENTIFIER_FIXUP_743.x = _RESERVED_IDENTIFIER_FIXUP_572;
    _RESERVED_IDENTIFIER_FIXUP_743.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_572;
    vec4 _RESERVED_IDENTIFIER_FIXUP_582 = _RESERVED_IDENTIFIER_FIXUP_737 * _RESERVED_IDENTIFIER_FIXUP_743.xxxx;
    vec3 _RESERVED_IDENTIFIER_FIXUP_587 = _RESERVED_IDENTIFIER_FIXUP_582.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_748 = _RESERVED_IDENTIFIER_FIXUP_743;
    _RESERVED_IDENTIFIER_FIXUP_748.x = _RESERVED_IDENTIFIER_FIXUP_587.x;
    _RESERVED_IDENTIFIER_FIXUP_748.y = _RESERVED_IDENTIFIER_FIXUP_587.y;
    _RESERVED_IDENTIFIER_FIXUP_748.z = _RESERVED_IDENTIFIER_FIXUP_587.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_787 = vec4(_RESERVED_IDENTIFIER_FIXUP_748.www * _RESERVED_IDENTIFIER_FIXUP_748.xyz, (_RESERVED_IDENTIFIER_FIXUP_568.w * 0.300000011920928955078125) + 0.699999988079071044921875);
    vec3 _RESERVED_IDENTIFIER_FIXUP_617 = (_RESERVED_IDENTIFIER_FIXUP_582.xyz * _RESERVED_IDENTIFIER_FIXUP_787.www) + _RESERVED_IDENTIFIER_FIXUP_787.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_763;
    _RESERVED_IDENTIFIER_FIXUP_763.x = _RESERVED_IDENTIFIER_FIXUP_617.x;
    _RESERVED_IDENTIFIER_FIXUP_763.y = _RESERVED_IDENTIFIER_FIXUP_617.y;
    _RESERVED_IDENTIFIER_FIXUP_763.z = _RESERVED_IDENTIFIER_FIXUP_617.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_630 = _RESERVED_IDENTIFIER_FIXUP_763.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_769;
    _RESERVED_IDENTIFIER_FIXUP_769.x = _RESERVED_IDENTIFIER_FIXUP_630.x;
    _RESERVED_IDENTIFIER_FIXUP_769.y = _RESERVED_IDENTIFIER_FIXUP_630.y;
    _RESERVED_IDENTIFIER_FIXUP_769.z = _RESERVED_IDENTIFIER_FIXUP_630.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_769.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_248 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_257;
    if (_RESERVED_IDENTIFIER_FIXUP_248)
    {
        _RESERVED_IDENTIFIER_FIXUP_257 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_257 = _RESERVED_IDENTIFIER_FIXUP_248;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_257)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_294 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_715.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_320 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_656;
    if (_RESERVED_IDENTIFIER_FIXUP_294 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_656 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_294), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_320);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_656 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_320);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_656;
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
    vec2 param = v2.xy;
    r1 = hdTex0(param);
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
    vec4 hdB88 = r1;
    vec3 hdB97 = mix(r0.yzw, hdB88.xyz, greaterThanEqual(-r0.xxx, vec3(0.0)));
    r1.x = hdB97.x;
    r1.y = hdB97.y;
    r1.z = hdB97.z;
    vec2 param_1 = v3.xy;
    r0 = hdTex1(param_1);
    r0.x = clamp(dot(r0.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    r1 *= r0.xxxx;
    vec3 hdB129 = r1.www * v1.xyz;
    r0.x = hdB129.x;
    r0.y = hdB129.y;
    r0.z = hdB129.z;
    vec4 hdB136 = r0;
    vec4 hdB138 = r0;
    vec3 hdB140 = hdB136.www * hdB138.xyz;
    r0.x = hdB140.x;
    r0.y = hdB140.y;
    r0.z = hdB140.z;
    r0.w = (r0.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB156 = r0;
    vec4 hdB159 = r0;
    vec3 hdB161 = (r1.xyz * hdB156.www) + hdB159.xyz;
    r0.x = hdB161.x;
    r0.y = hdB161.y;
    r0.z = hdB161.z;
    vec4 hdB168 = r0;
    vec3 hdB176 = hdB168.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB176.x;
    r0.y = hdB176.y;
    r0.z = hdB176.z;
    vec3 hdB191 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB191.x;
    oC0.y = hdB191.y;
    oC0.z = hdB191.z;
    oC0.w = 1.0;
    bool hdB202 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB210;
    if (hdB202)
    {
        hdB210 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB210 = hdB202;
    }
    if (hdB210)
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
    bool _775 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _784;
    if (_775)
    {
        _784 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 3u) != 0u;
    }
    else
    {
        _784 = _775;
    }
    if (_784)
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
        bool _809 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _824;
        if (!_809)
        {
            _824 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 3u) != 0u;
        }
        else
        {
            _824 = _809;
        }
        if (_824)
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
