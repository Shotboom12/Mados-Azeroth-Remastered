#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_727;
vec4 _RESERVED_IDENTIFIER_FIXUP_728;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _77 = hdOverride >= 0;
    bool _87;
    if (_77)
    {
        _87 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _87 = _77;
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

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _40 = hdOverride >= 0;
    bool _59;
    if (_40)
    {
        _59 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _59 = _40;
    }
    vec4 _60;
    if (_59)
    {
        _60 = vec4(float(hdOverride));
    }
    else
    {
        _60 = value;
    }
    return _60;
}

void HDActual()
{
    vec2 param = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_375 = hdTex2(param);
    vec4 _RESERVED_IDENTIFIER_FIXUP_631;
    _RESERVED_IDENTIFIER_FIXUP_631.x = 1.0;
    vec2 param_1 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_397 = mix(OptTex0( texcoord0.xyz), hdTex1(param_1), _RESERVED_IDENTIFIER_FIXUP_375.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_631.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_633;
    _RESERVED_IDENTIFIER_FIXUP_633.x = _RESERVED_IDENTIFIER_FIXUP_397.x;
    _RESERVED_IDENTIFIER_FIXUP_633.y = _RESERVED_IDENTIFIER_FIXUP_397.y;
    _RESERVED_IDENTIFIER_FIXUP_633.z = _RESERVED_IDENTIFIER_FIXUP_397.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_639;
    _RESERVED_IDENTIFIER_FIXUP_639.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_639.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_639.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_419 = _RESERVED_IDENTIFIER_FIXUP_633.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_727).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_645;
    _RESERVED_IDENTIFIER_FIXUP_645.x = _RESERVED_IDENTIFIER_FIXUP_419.x;
    _RESERVED_IDENTIFIER_FIXUP_645.y = _RESERVED_IDENTIFIER_FIXUP_419.y;
    _RESERVED_IDENTIFIER_FIXUP_645.z = _RESERVED_IDENTIFIER_FIXUP_419.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_430 = _RESERVED_IDENTIFIER_FIXUP_645.xyz + _RESERVED_IDENTIFIER_FIXUP_645.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_651;
    _RESERVED_IDENTIFIER_FIXUP_651.x = _RESERVED_IDENTIFIER_FIXUP_430.x;
    _RESERVED_IDENTIFIER_FIXUP_651.y = _RESERVED_IDENTIFIER_FIXUP_430.y;
    _RESERVED_IDENTIFIER_FIXUP_651.z = _RESERVED_IDENTIFIER_FIXUP_430.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_444 = (_RESERVED_IDENTIFIER_FIXUP_639.xyz * _RESERVED_IDENTIFIER_FIXUP_375.www) + _RESERVED_IDENTIFIER_FIXUP_651.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_657;
    _RESERVED_IDENTIFIER_FIXUP_657.x = _RESERVED_IDENTIFIER_FIXUP_444.x;
    _RESERVED_IDENTIFIER_FIXUP_657.y = _RESERVED_IDENTIFIER_FIXUP_444.y;
    _RESERVED_IDENTIFIER_FIXUP_657.z = _RESERVED_IDENTIFIER_FIXUP_444.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_457 = _RESERVED_IDENTIFIER_FIXUP_657.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_663;
    _RESERVED_IDENTIFIER_FIXUP_663.x = _RESERVED_IDENTIFIER_FIXUP_457.x;
    _RESERVED_IDENTIFIER_FIXUP_663.y = _RESERVED_IDENTIFIER_FIXUP_457.y;
    _RESERVED_IDENTIFIER_FIXUP_663.z = _RESERVED_IDENTIFIER_FIXUP_457.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_472 = _RESERVED_IDENTIFIER_FIXUP_663.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_669;
    _RESERVED_IDENTIFIER_FIXUP_669.x = _RESERVED_IDENTIFIER_FIXUP_472.x;
    _RESERVED_IDENTIFIER_FIXUP_669.y = _RESERVED_IDENTIFIER_FIXUP_472.y;
    _RESERVED_IDENTIFIER_FIXUP_669.z = _RESERVED_IDENTIFIER_FIXUP_472.z;
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_512 = hdTex2(param_2);
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_517 = mix(OptTex0( texcoord0.xyz), hdTex1(param_3), _RESERVED_IDENTIFIER_FIXUP_512.xxxx);
    float _RESERVED_IDENTIFIER_FIXUP_521 = (_RESERVED_IDENTIFIER_FIXUP_512.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_682;
    _RESERVED_IDENTIFIER_FIXUP_682.x = _RESERVED_IDENTIFIER_FIXUP_521;
    vec3 _RESERVED_IDENTIFIER_FIXUP_534 = _RESERVED_IDENTIFIER_FIXUP_517.xyz * _RESERVED_IDENTIFIER_FIXUP_682.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_684;
    _RESERVED_IDENTIFIER_FIXUP_684.x = _RESERVED_IDENTIFIER_FIXUP_534.x;
    _RESERVED_IDENTIFIER_FIXUP_684.y = _RESERVED_IDENTIFIER_FIXUP_534.y;
    _RESERVED_IDENTIFIER_FIXUP_684.z = _RESERVED_IDENTIFIER_FIXUP_534.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_545 = _RESERVED_IDENTIFIER_FIXUP_517.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_690;
    _RESERVED_IDENTIFIER_FIXUP_690.x = _RESERVED_IDENTIFIER_FIXUP_545.x;
    _RESERVED_IDENTIFIER_FIXUP_690.y = _RESERVED_IDENTIFIER_FIXUP_545.y;
    _RESERVED_IDENTIFIER_FIXUP_690.z = _RESERVED_IDENTIFIER_FIXUP_545.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_556 = _RESERVED_IDENTIFIER_FIXUP_684.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_696;
    _RESERVED_IDENTIFIER_FIXUP_696.x = _RESERVED_IDENTIFIER_FIXUP_556.x;
    _RESERVED_IDENTIFIER_FIXUP_696.y = _RESERVED_IDENTIFIER_FIXUP_556.y;
    _RESERVED_IDENTIFIER_FIXUP_696.z = _RESERVED_IDENTIFIER_FIXUP_556.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_567 = _RESERVED_IDENTIFIER_FIXUP_696.xyz + _RESERVED_IDENTIFIER_FIXUP_696.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_702;
    _RESERVED_IDENTIFIER_FIXUP_702.x = _RESERVED_IDENTIFIER_FIXUP_567.x;
    _RESERVED_IDENTIFIER_FIXUP_702.y = _RESERVED_IDENTIFIER_FIXUP_567.y;
    _RESERVED_IDENTIFIER_FIXUP_702.z = _RESERVED_IDENTIFIER_FIXUP_567.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_581 = (_RESERVED_IDENTIFIER_FIXUP_690.xyz * _RESERVED_IDENTIFIER_FIXUP_512.www) + _RESERVED_IDENTIFIER_FIXUP_702.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_708;
    _RESERVED_IDENTIFIER_FIXUP_708.x = _RESERVED_IDENTIFIER_FIXUP_581.x;
    _RESERVED_IDENTIFIER_FIXUP_708.y = _RESERVED_IDENTIFIER_FIXUP_581.y;
    _RESERVED_IDENTIFIER_FIXUP_708.z = _RESERVED_IDENTIFIER_FIXUP_581.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_594 = _RESERVED_IDENTIFIER_FIXUP_708.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_714;
    _RESERVED_IDENTIFIER_FIXUP_714.x = _RESERVED_IDENTIFIER_FIXUP_594.x;
    _RESERVED_IDENTIFIER_FIXUP_714.y = _RESERVED_IDENTIFIER_FIXUP_594.y;
    _RESERVED_IDENTIFIER_FIXUP_714.z = _RESERVED_IDENTIFIER_FIXUP_594.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_714.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_237 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_246;
    if (_RESERVED_IDENTIFIER_FIXUP_237)
    {
        _RESERVED_IDENTIFIER_FIXUP_246 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_246 = _RESERVED_IDENTIFIER_FIXUP_237;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_246)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_283 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_669.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_310 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_620;
    if (_RESERVED_IDENTIFIER_FIXUP_283 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_620 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_283), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_310);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_620 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_310);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_620;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_521);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v4.xy;
    r2 = hdTex2(param_1);
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = (r2.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB79 = r0;
    vec3 hdB81 = r3.xyz * hdB79.xxx;
    r0.x = hdB81.x;
    r0.y = hdB81.y;
    r0.z = hdB81.z;
    vec3 hdB94 = r3.www * v1.xyz;
    r1.x = hdB94.x;
    r1.y = hdB94.y;
    r1.z = hdB94.z;
    vec4 hdB101 = r0;
    vec3 hdB105 = hdB101.xyz * v0.xyz;
    r0.x = hdB105.x;
    r0.y = hdB105.y;
    r0.z = hdB105.z;
    vec4 hdB112 = r0;
    vec4 hdB114 = r0;
    vec3 hdB116 = hdB112.xyz + hdB114.xyz;
    r0.x = hdB116.x;
    r0.y = hdB116.y;
    r0.z = hdB116.z;
    vec4 hdB128 = r0;
    vec3 hdB130 = (r1.xyz * r2.www) + hdB128.xyz;
    r0.x = hdB130.x;
    r0.y = hdB130.y;
    r0.z = hdB130.z;
    vec4 hdB137 = r0;
    vec3 hdB154 = hdB137.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB154.x;
    r0.y = hdB154.y;
    r0.z = hdB154.z;
    vec3 hdB169 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB169.x;
    oC0.y = hdB169.y;
    oC0.z = hdB169.z;
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
    bool _705 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _715;
    if (_705)
    {
        _715 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 6u) != 0u;
    }
    else
    {
        _715 = _705;
    }
    if (_715)
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
        bool _740 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _755;
        if (!_740)
        {
            _755 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 6u) != 0u;
        }
        else
        {
            _755 = _740;
        }
        if (_755)
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
