#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform sampler2D s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_701;
vec4 _RESERVED_IDENTIFIER_FIXUP_702;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _77 = hdOverride >= 0;
    bool _87;
    if (_77)
    {
        _87 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
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

void HDActual()
{
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_351 = hdTex1(param);
    _RESERVED_IDENTIFIER_FIXUP_351.x = 1.0;
    vec2 param_1 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_379 = _RESERVED_IDENTIFIER_FIXUP_351.xxx * hdTex0(param_1).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_609 = _RESERVED_IDENTIFIER_FIXUP_351;
    _RESERVED_IDENTIFIER_FIXUP_609.x = _RESERVED_IDENTIFIER_FIXUP_379.x;
    _RESERVED_IDENTIFIER_FIXUP_609.y = _RESERVED_IDENTIFIER_FIXUP_379.y;
    _RESERVED_IDENTIFIER_FIXUP_609.z = _RESERVED_IDENTIFIER_FIXUP_379.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_615;
    _RESERVED_IDENTIFIER_FIXUP_615.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_615.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_615.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_401 = _RESERVED_IDENTIFIER_FIXUP_609.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_701).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_621 = _RESERVED_IDENTIFIER_FIXUP_609;
    _RESERVED_IDENTIFIER_FIXUP_621.x = _RESERVED_IDENTIFIER_FIXUP_401.x;
    _RESERVED_IDENTIFIER_FIXUP_621.y = _RESERVED_IDENTIFIER_FIXUP_401.y;
    _RESERVED_IDENTIFIER_FIXUP_621.z = _RESERVED_IDENTIFIER_FIXUP_401.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_412 = _RESERVED_IDENTIFIER_FIXUP_621.xyz + _RESERVED_IDENTIFIER_FIXUP_621.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_627 = _RESERVED_IDENTIFIER_FIXUP_621;
    _RESERVED_IDENTIFIER_FIXUP_627.x = _RESERVED_IDENTIFIER_FIXUP_412.x;
    _RESERVED_IDENTIFIER_FIXUP_627.y = _RESERVED_IDENTIFIER_FIXUP_412.y;
    _RESERVED_IDENTIFIER_FIXUP_627.z = _RESERVED_IDENTIFIER_FIXUP_412.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_426 = (_RESERVED_IDENTIFIER_FIXUP_615.xyz * _RESERVED_IDENTIFIER_FIXUP_627.www) + _RESERVED_IDENTIFIER_FIXUP_627.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_633;
    _RESERVED_IDENTIFIER_FIXUP_633.x = _RESERVED_IDENTIFIER_FIXUP_426.x;
    _RESERVED_IDENTIFIER_FIXUP_633.y = _RESERVED_IDENTIFIER_FIXUP_426.y;
    _RESERVED_IDENTIFIER_FIXUP_633.z = _RESERVED_IDENTIFIER_FIXUP_426.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_439 = _RESERVED_IDENTIFIER_FIXUP_633.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_639;
    _RESERVED_IDENTIFIER_FIXUP_639.x = _RESERVED_IDENTIFIER_FIXUP_439.x;
    _RESERVED_IDENTIFIER_FIXUP_639.y = _RESERVED_IDENTIFIER_FIXUP_439.y;
    _RESERVED_IDENTIFIER_FIXUP_639.z = _RESERVED_IDENTIFIER_FIXUP_439.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_454 = _RESERVED_IDENTIFIER_FIXUP_639.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_645;
    _RESERVED_IDENTIFIER_FIXUP_645.x = _RESERVED_IDENTIFIER_FIXUP_454.x;
    _RESERVED_IDENTIFIER_FIXUP_645.y = _RESERVED_IDENTIFIER_FIXUP_454.y;
    _RESERVED_IDENTIFIER_FIXUP_645.z = _RESERVED_IDENTIFIER_FIXUP_454.z;
    vec2 param_2 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_481 = hdTex1(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_492 = (_RESERVED_IDENTIFIER_FIXUP_481.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_654 = _RESERVED_IDENTIFIER_FIXUP_481;
    _RESERVED_IDENTIFIER_FIXUP_654.x = _RESERVED_IDENTIFIER_FIXUP_492;
    _RESERVED_IDENTIFIER_FIXUP_654.x = _RESERVED_IDENTIFIER_FIXUP_492;
    vec2 param_3 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_504 = hdTex0(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_509 = _RESERVED_IDENTIFIER_FIXUP_654.xxx * _RESERVED_IDENTIFIER_FIXUP_504.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_660 = _RESERVED_IDENTIFIER_FIXUP_654;
    _RESERVED_IDENTIFIER_FIXUP_660.x = _RESERVED_IDENTIFIER_FIXUP_509.x;
    _RESERVED_IDENTIFIER_FIXUP_660.y = _RESERVED_IDENTIFIER_FIXUP_509.y;
    _RESERVED_IDENTIFIER_FIXUP_660.z = _RESERVED_IDENTIFIER_FIXUP_509.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_520 = _RESERVED_IDENTIFIER_FIXUP_504.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_666;
    _RESERVED_IDENTIFIER_FIXUP_666.x = _RESERVED_IDENTIFIER_FIXUP_520.x;
    _RESERVED_IDENTIFIER_FIXUP_666.y = _RESERVED_IDENTIFIER_FIXUP_520.y;
    _RESERVED_IDENTIFIER_FIXUP_666.z = _RESERVED_IDENTIFIER_FIXUP_520.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_531 = _RESERVED_IDENTIFIER_FIXUP_660.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_672 = _RESERVED_IDENTIFIER_FIXUP_660;
    _RESERVED_IDENTIFIER_FIXUP_672.x = _RESERVED_IDENTIFIER_FIXUP_531.x;
    _RESERVED_IDENTIFIER_FIXUP_672.y = _RESERVED_IDENTIFIER_FIXUP_531.y;
    _RESERVED_IDENTIFIER_FIXUP_672.z = _RESERVED_IDENTIFIER_FIXUP_531.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_542 = _RESERVED_IDENTIFIER_FIXUP_672.xyz + _RESERVED_IDENTIFIER_FIXUP_672.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_678 = _RESERVED_IDENTIFIER_FIXUP_672;
    _RESERVED_IDENTIFIER_FIXUP_678.x = _RESERVED_IDENTIFIER_FIXUP_542.x;
    _RESERVED_IDENTIFIER_FIXUP_678.y = _RESERVED_IDENTIFIER_FIXUP_542.y;
    _RESERVED_IDENTIFIER_FIXUP_678.z = _RESERVED_IDENTIFIER_FIXUP_542.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_556 = (_RESERVED_IDENTIFIER_FIXUP_666.xyz * _RESERVED_IDENTIFIER_FIXUP_678.www) + _RESERVED_IDENTIFIER_FIXUP_678.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_684;
    _RESERVED_IDENTIFIER_FIXUP_684.x = _RESERVED_IDENTIFIER_FIXUP_556.x;
    _RESERVED_IDENTIFIER_FIXUP_684.y = _RESERVED_IDENTIFIER_FIXUP_556.y;
    _RESERVED_IDENTIFIER_FIXUP_684.z = _RESERVED_IDENTIFIER_FIXUP_556.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_569 = _RESERVED_IDENTIFIER_FIXUP_684.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_690;
    _RESERVED_IDENTIFIER_FIXUP_690.x = _RESERVED_IDENTIFIER_FIXUP_569.x;
    _RESERVED_IDENTIFIER_FIXUP_690.y = _RESERVED_IDENTIFIER_FIXUP_569.y;
    _RESERVED_IDENTIFIER_FIXUP_690.z = _RESERVED_IDENTIFIER_FIXUP_569.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_690.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, dot(_RESERVED_IDENTIFIER_FIXUP_481.xyz, optRegs.rows[optTile*82u+uint(0)].xyz));
    bool _RESERVED_IDENTIFIER_FIXUP_225 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_234;
    if (_RESERVED_IDENTIFIER_FIXUP_225)
    {
        _RESERVED_IDENTIFIER_FIXUP_234 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_234 = _RESERVED_IDENTIFIER_FIXUP_225;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_234)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_271 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_645.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_298 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_594;
    if (_RESERVED_IDENTIFIER_FIXUP_271 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_594 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_271), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_298);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_594 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_298);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_594;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_492);
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
    oC0.w = dot(r0.xyz, optRegs.rows[optTile*82u+uint(0)].xyz);
    r0.x = (r0.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_1 = v2.xy;
    r1 = hdTex0(param_1);
    vec4 hdB77 = r0;
    vec3 hdB81 = hdB77.xxx * r1.xyz;
    r0.x = hdB81.x;
    r0.y = hdB81.y;
    r0.z = hdB81.z;
    vec4 hdB90 = r1;
    vec3 hdB94 = hdB90.www * v1.xyz;
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
    vec4 hdB125 = r0;
    vec4 hdB128 = r0;
    vec3 hdB130 = (r1.xyz * hdB125.www) + hdB128.xyz;
    r0.x = hdB130.x;
    r0.y = hdB130.y;
    r0.z = hdB130.z;
    vec4 hdB137 = r0;
    vec3 hdB144 = hdB137.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB144.x;
    r0.y = hdB144.y;
    r0.z = hdB144.z;
    vec3 hdB159 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB159.x;
    oC0.y = hdB159.y;
    oC0.z = hdB159.z;
    bool hdB171 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB179;
    if (hdB171)
    {
        hdB179 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB179 = hdB171;
    }
    if (hdB179)
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
    bool _696 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _705;
    if (_696)
    {
        _705 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 3u) != 0u;
    }
    else
    {
        _705 = _696;
    }
    if (_705)
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
        bool _730 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _745;
        if (!_730)
        {
            _745 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 3u) != 0u;
        }
        else
        {
            _745 = _730;
        }
        if (_745)
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
