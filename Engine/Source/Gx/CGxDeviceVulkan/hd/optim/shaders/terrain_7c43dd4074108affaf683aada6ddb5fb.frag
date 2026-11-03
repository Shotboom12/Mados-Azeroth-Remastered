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
float _RESERVED_IDENTIFIER_FIXUP_683;
vec4 _RESERVED_IDENTIFIER_FIXUP_684;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_345 = hdTex1(param);
    _RESERVED_IDENTIFIER_FIXUP_345.x = 1.0;
    vec2 param_1 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_366 = _RESERVED_IDENTIFIER_FIXUP_345.xxx * hdTex0(param_1).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_589 = _RESERVED_IDENTIFIER_FIXUP_345;
    _RESERVED_IDENTIFIER_FIXUP_589.x = _RESERVED_IDENTIFIER_FIXUP_366.x;
    _RESERVED_IDENTIFIER_FIXUP_589.y = _RESERVED_IDENTIFIER_FIXUP_366.y;
    _RESERVED_IDENTIFIER_FIXUP_589.z = _RESERVED_IDENTIFIER_FIXUP_366.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_595;
    _RESERVED_IDENTIFIER_FIXUP_595.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_595.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_595.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_388 = _RESERVED_IDENTIFIER_FIXUP_589.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_683).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_601 = _RESERVED_IDENTIFIER_FIXUP_589;
    _RESERVED_IDENTIFIER_FIXUP_601.x = _RESERVED_IDENTIFIER_FIXUP_388.x;
    _RESERVED_IDENTIFIER_FIXUP_601.y = _RESERVED_IDENTIFIER_FIXUP_388.y;
    _RESERVED_IDENTIFIER_FIXUP_601.z = _RESERVED_IDENTIFIER_FIXUP_388.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_399 = _RESERVED_IDENTIFIER_FIXUP_601.xyz + _RESERVED_IDENTIFIER_FIXUP_601.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_607 = _RESERVED_IDENTIFIER_FIXUP_601;
    _RESERVED_IDENTIFIER_FIXUP_607.x = _RESERVED_IDENTIFIER_FIXUP_399.x;
    _RESERVED_IDENTIFIER_FIXUP_607.y = _RESERVED_IDENTIFIER_FIXUP_399.y;
    _RESERVED_IDENTIFIER_FIXUP_607.z = _RESERVED_IDENTIFIER_FIXUP_399.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_413 = (_RESERVED_IDENTIFIER_FIXUP_595.xyz * _RESERVED_IDENTIFIER_FIXUP_607.www) + _RESERVED_IDENTIFIER_FIXUP_607.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_613;
    _RESERVED_IDENTIFIER_FIXUP_613.x = _RESERVED_IDENTIFIER_FIXUP_413.x;
    _RESERVED_IDENTIFIER_FIXUP_613.y = _RESERVED_IDENTIFIER_FIXUP_413.y;
    _RESERVED_IDENTIFIER_FIXUP_613.z = _RESERVED_IDENTIFIER_FIXUP_413.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_426 = _RESERVED_IDENTIFIER_FIXUP_613.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_619;
    _RESERVED_IDENTIFIER_FIXUP_619.x = _RESERVED_IDENTIFIER_FIXUP_426.x;
    _RESERVED_IDENTIFIER_FIXUP_619.y = _RESERVED_IDENTIFIER_FIXUP_426.y;
    _RESERVED_IDENTIFIER_FIXUP_619.z = _RESERVED_IDENTIFIER_FIXUP_426.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_441 = _RESERVED_IDENTIFIER_FIXUP_619.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_625;
    _RESERVED_IDENTIFIER_FIXUP_625.x = _RESERVED_IDENTIFIER_FIXUP_441.x;
    _RESERVED_IDENTIFIER_FIXUP_625.y = _RESERVED_IDENTIFIER_FIXUP_441.y;
    _RESERVED_IDENTIFIER_FIXUP_625.z = _RESERVED_IDENTIFIER_FIXUP_441.z;
    vec2 param_2 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_469 = hdTex1(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_473 = (_RESERVED_IDENTIFIER_FIXUP_469.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_634 = _RESERVED_IDENTIFIER_FIXUP_469;
    _RESERVED_IDENTIFIER_FIXUP_634.x = _RESERVED_IDENTIFIER_FIXUP_473;
    _RESERVED_IDENTIFIER_FIXUP_634.x = _RESERVED_IDENTIFIER_FIXUP_473;
    vec2 param_3 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_485 = hdTex0(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_490 = _RESERVED_IDENTIFIER_FIXUP_634.xxx * _RESERVED_IDENTIFIER_FIXUP_485.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_640 = _RESERVED_IDENTIFIER_FIXUP_634;
    _RESERVED_IDENTIFIER_FIXUP_640.x = _RESERVED_IDENTIFIER_FIXUP_490.x;
    _RESERVED_IDENTIFIER_FIXUP_640.y = _RESERVED_IDENTIFIER_FIXUP_490.y;
    _RESERVED_IDENTIFIER_FIXUP_640.z = _RESERVED_IDENTIFIER_FIXUP_490.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_501 = _RESERVED_IDENTIFIER_FIXUP_485.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_646;
    _RESERVED_IDENTIFIER_FIXUP_646.x = _RESERVED_IDENTIFIER_FIXUP_501.x;
    _RESERVED_IDENTIFIER_FIXUP_646.y = _RESERVED_IDENTIFIER_FIXUP_501.y;
    _RESERVED_IDENTIFIER_FIXUP_646.z = _RESERVED_IDENTIFIER_FIXUP_501.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_512 = _RESERVED_IDENTIFIER_FIXUP_640.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_652 = _RESERVED_IDENTIFIER_FIXUP_640;
    _RESERVED_IDENTIFIER_FIXUP_652.x = _RESERVED_IDENTIFIER_FIXUP_512.x;
    _RESERVED_IDENTIFIER_FIXUP_652.y = _RESERVED_IDENTIFIER_FIXUP_512.y;
    _RESERVED_IDENTIFIER_FIXUP_652.z = _RESERVED_IDENTIFIER_FIXUP_512.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_523 = _RESERVED_IDENTIFIER_FIXUP_652.xyz + _RESERVED_IDENTIFIER_FIXUP_652.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_658 = _RESERVED_IDENTIFIER_FIXUP_652;
    _RESERVED_IDENTIFIER_FIXUP_658.x = _RESERVED_IDENTIFIER_FIXUP_523.x;
    _RESERVED_IDENTIFIER_FIXUP_658.y = _RESERVED_IDENTIFIER_FIXUP_523.y;
    _RESERVED_IDENTIFIER_FIXUP_658.z = _RESERVED_IDENTIFIER_FIXUP_523.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_537 = (_RESERVED_IDENTIFIER_FIXUP_646.xyz * _RESERVED_IDENTIFIER_FIXUP_658.www) + _RESERVED_IDENTIFIER_FIXUP_658.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_664;
    _RESERVED_IDENTIFIER_FIXUP_664.x = _RESERVED_IDENTIFIER_FIXUP_537.x;
    _RESERVED_IDENTIFIER_FIXUP_664.y = _RESERVED_IDENTIFIER_FIXUP_537.y;
    _RESERVED_IDENTIFIER_FIXUP_664.z = _RESERVED_IDENTIFIER_FIXUP_537.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_550 = _RESERVED_IDENTIFIER_FIXUP_664.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_670;
    _RESERVED_IDENTIFIER_FIXUP_670.x = _RESERVED_IDENTIFIER_FIXUP_550.x;
    _RESERVED_IDENTIFIER_FIXUP_670.y = _RESERVED_IDENTIFIER_FIXUP_550.y;
    _RESERVED_IDENTIFIER_FIXUP_670.z = _RESERVED_IDENTIFIER_FIXUP_550.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_670.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_219 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_228;
    if (_RESERVED_IDENTIFIER_FIXUP_219)
    {
        _RESERVED_IDENTIFIER_FIXUP_228 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_228 = _RESERVED_IDENTIFIER_FIXUP_219;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_228)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_265 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_625.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_292 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_576;
    if (_RESERVED_IDENTIFIER_FIXUP_265 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_576 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_265), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_292);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_576 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_292);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_576;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_473);
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
    vec2 param_1 = v2.xy;
    r1 = hdTex0(param_1);
    vec4 hdB59 = r0;
    vec3 hdB63 = hdB59.xxx * r1.xyz;
    r0.x = hdB63.x;
    r0.y = hdB63.y;
    r0.z = hdB63.z;
    vec4 hdB72 = r1;
    vec3 hdB76 = hdB72.www * v1.xyz;
    r1.x = hdB76.x;
    r1.y = hdB76.y;
    r1.z = hdB76.z;
    vec4 hdB83 = r0;
    vec3 hdB87 = hdB83.xyz * v0.xyz;
    r0.x = hdB87.x;
    r0.y = hdB87.y;
    r0.z = hdB87.z;
    vec4 hdB94 = r0;
    vec4 hdB96 = r0;
    vec3 hdB98 = hdB94.xyz + hdB96.xyz;
    r0.x = hdB98.x;
    r0.y = hdB98.y;
    r0.z = hdB98.z;
    vec4 hdB107 = r0;
    vec4 hdB110 = r0;
    vec3 hdB112 = (r1.xyz * hdB107.www) + hdB110.xyz;
    r0.x = hdB112.x;
    r0.y = hdB112.y;
    r0.z = hdB112.z;
    vec4 hdB119 = r0;
    vec3 hdB136 = hdB119.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB136.x;
    r0.y = hdB136.y;
    r0.z = hdB136.z;
    vec3 hdB151 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB151.x;
    oC0.y = hdB151.y;
    oC0.z = hdB151.z;
    oC0.w = 1.0;
    bool hdB166 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB174;
    if (hdB166)
    {
        hdB174 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB174 = hdB166;
    }
    if (hdB174)
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
    bool _684 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _693;
    if (_684)
    {
        _693 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 3u) != 0u;
    }
    else
    {
        _693 = _684;
    }
    if (_693)
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
        bool _718 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _733;
        if (!_718)
        {
            _733 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 3u) != 0u;
        }
        else
        {
            _733 = _718;
        }
        if (_733)
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
