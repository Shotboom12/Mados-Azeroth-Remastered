#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
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
float _RESERVED_IDENTIFIER_FIXUP_793;
vec4 _RESERVED_IDENTIFIER_FIXUP_794;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _81 = hdOverride >= 0;
    bool _91;
    if (_81)
    {
        _91 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _91 = _81;
    }
    vec4 _92;
    if (_91)
    {
        _92 = vec4(float(hdOverride));
    }
    else
    {
        _92 = value;
    }
    return _92;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _43 = hdOverride >= 0;
    bool _63;
    if (_43)
    {
        _63 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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
    bool _109 = hdOverride >= 0;
    bool _118;
    if (_109)
    {
        _118 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _118 = _109;
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

void HDActual()
{
    vec2 param = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_400 = hdTex3(param);
    float _RESERVED_IDENTIFIER_FIXUP_404 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_400.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_690 = _RESERVED_IDENTIFIER_FIXUP_400;
    _RESERVED_IDENTIFIER_FIXUP_690.z = _RESERVED_IDENTIFIER_FIXUP_404;
    _RESERVED_IDENTIFIER_FIXUP_690.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_404;
    vec4 _RESERVED_IDENTIFIER_FIXUP_696;
    _RESERVED_IDENTIFIER_FIXUP_696.x = (_RESERVED_IDENTIFIER_FIXUP_400.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_1 = texcoord2.xy;
    vec2 param_2 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_440 = ((hdTex2(param_1) * _RESERVED_IDENTIFIER_FIXUP_690.yyyy) + ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_690.zzzz) + (_RESERVED_IDENTIFIER_FIXUP_690.xxxx * hdTex1(param_2)))).xyz * _RESERVED_IDENTIFIER_FIXUP_696.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_698;
    _RESERVED_IDENTIFIER_FIXUP_698.x = _RESERVED_IDENTIFIER_FIXUP_440.x;
    _RESERVED_IDENTIFIER_FIXUP_698.y = _RESERVED_IDENTIFIER_FIXUP_440.y;
    _RESERVED_IDENTIFIER_FIXUP_698.z = _RESERVED_IDENTIFIER_FIXUP_440.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_704;
    _RESERVED_IDENTIFIER_FIXUP_704.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_704.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_704.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_462 = _RESERVED_IDENTIFIER_FIXUP_698.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_793).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_710;
    _RESERVED_IDENTIFIER_FIXUP_710.x = _RESERVED_IDENTIFIER_FIXUP_462.x;
    _RESERVED_IDENTIFIER_FIXUP_710.y = _RESERVED_IDENTIFIER_FIXUP_462.y;
    _RESERVED_IDENTIFIER_FIXUP_710.z = _RESERVED_IDENTIFIER_FIXUP_462.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_473 = _RESERVED_IDENTIFIER_FIXUP_710.xyz + _RESERVED_IDENTIFIER_FIXUP_710.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_716;
    _RESERVED_IDENTIFIER_FIXUP_716.x = _RESERVED_IDENTIFIER_FIXUP_473.x;
    _RESERVED_IDENTIFIER_FIXUP_716.y = _RESERVED_IDENTIFIER_FIXUP_473.y;
    _RESERVED_IDENTIFIER_FIXUP_716.z = _RESERVED_IDENTIFIER_FIXUP_473.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_487 = (_RESERVED_IDENTIFIER_FIXUP_704.xyz * _RESERVED_IDENTIFIER_FIXUP_690.www) + _RESERVED_IDENTIFIER_FIXUP_716.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_722;
    _RESERVED_IDENTIFIER_FIXUP_722.x = _RESERVED_IDENTIFIER_FIXUP_487.x;
    _RESERVED_IDENTIFIER_FIXUP_722.y = _RESERVED_IDENTIFIER_FIXUP_487.y;
    _RESERVED_IDENTIFIER_FIXUP_722.z = _RESERVED_IDENTIFIER_FIXUP_487.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_500 = _RESERVED_IDENTIFIER_FIXUP_722.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_728;
    _RESERVED_IDENTIFIER_FIXUP_728.x = _RESERVED_IDENTIFIER_FIXUP_500.x;
    _RESERVED_IDENTIFIER_FIXUP_728.y = _RESERVED_IDENTIFIER_FIXUP_500.y;
    _RESERVED_IDENTIFIER_FIXUP_728.z = _RESERVED_IDENTIFIER_FIXUP_500.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_515 = _RESERVED_IDENTIFIER_FIXUP_728.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_734;
    _RESERVED_IDENTIFIER_FIXUP_734.x = _RESERVED_IDENTIFIER_FIXUP_515.x;
    _RESERVED_IDENTIFIER_FIXUP_734.y = _RESERVED_IDENTIFIER_FIXUP_515.y;
    _RESERVED_IDENTIFIER_FIXUP_734.z = _RESERVED_IDENTIFIER_FIXUP_515.z;
    vec2 param_3 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_557 = hdTex3(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_561 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_557.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_742 = _RESERVED_IDENTIFIER_FIXUP_557;
    _RESERVED_IDENTIFIER_FIXUP_742.z = _RESERVED_IDENTIFIER_FIXUP_561;
    _RESERVED_IDENTIFIER_FIXUP_742.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_561;
    vec2 param_4 = texcoord2.xy;
    vec2 param_5 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_587 = (hdTex2(param_4) * _RESERVED_IDENTIFIER_FIXUP_742.yyyy) + ((OptTex0( texcoord0.xyz) * _RESERVED_IDENTIFIER_FIXUP_742.zzzz) + (_RESERVED_IDENTIFIER_FIXUP_742.xxxx * hdTex1(param_5)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_748;
    _RESERVED_IDENTIFIER_FIXUP_748.x = (_RESERVED_IDENTIFIER_FIXUP_557.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_597 = _RESERVED_IDENTIFIER_FIXUP_587.xyz * _RESERVED_IDENTIFIER_FIXUP_748.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_750 = _RESERVED_IDENTIFIER_FIXUP_587;
    _RESERVED_IDENTIFIER_FIXUP_750.x = _RESERVED_IDENTIFIER_FIXUP_597.x;
    _RESERVED_IDENTIFIER_FIXUP_750.y = _RESERVED_IDENTIFIER_FIXUP_597.y;
    _RESERVED_IDENTIFIER_FIXUP_750.z = _RESERVED_IDENTIFIER_FIXUP_597.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_608 = _RESERVED_IDENTIFIER_FIXUP_750.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_756;
    _RESERVED_IDENTIFIER_FIXUP_756.x = _RESERVED_IDENTIFIER_FIXUP_608.x;
    _RESERVED_IDENTIFIER_FIXUP_756.y = _RESERVED_IDENTIFIER_FIXUP_608.y;
    _RESERVED_IDENTIFIER_FIXUP_756.z = _RESERVED_IDENTIFIER_FIXUP_608.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_619 = _RESERVED_IDENTIFIER_FIXUP_750.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_762;
    _RESERVED_IDENTIFIER_FIXUP_762.x = _RESERVED_IDENTIFIER_FIXUP_619.x;
    _RESERVED_IDENTIFIER_FIXUP_762.y = _RESERVED_IDENTIFIER_FIXUP_619.y;
    _RESERVED_IDENTIFIER_FIXUP_762.z = _RESERVED_IDENTIFIER_FIXUP_619.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_630 = _RESERVED_IDENTIFIER_FIXUP_762.xyz + _RESERVED_IDENTIFIER_FIXUP_762.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_768;
    _RESERVED_IDENTIFIER_FIXUP_768.x = _RESERVED_IDENTIFIER_FIXUP_630.x;
    _RESERVED_IDENTIFIER_FIXUP_768.y = _RESERVED_IDENTIFIER_FIXUP_630.y;
    _RESERVED_IDENTIFIER_FIXUP_768.z = _RESERVED_IDENTIFIER_FIXUP_630.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_644 = (_RESERVED_IDENTIFIER_FIXUP_756.xyz * _RESERVED_IDENTIFIER_FIXUP_742.www) + _RESERVED_IDENTIFIER_FIXUP_768.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_774;
    _RESERVED_IDENTIFIER_FIXUP_774.x = _RESERVED_IDENTIFIER_FIXUP_644.x;
    _RESERVED_IDENTIFIER_FIXUP_774.y = _RESERVED_IDENTIFIER_FIXUP_644.y;
    _RESERVED_IDENTIFIER_FIXUP_774.z = _RESERVED_IDENTIFIER_FIXUP_644.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_657 = _RESERVED_IDENTIFIER_FIXUP_774.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_780;
    _RESERVED_IDENTIFIER_FIXUP_780.x = _RESERVED_IDENTIFIER_FIXUP_657.x;
    _RESERVED_IDENTIFIER_FIXUP_780.y = _RESERVED_IDENTIFIER_FIXUP_657.y;
    _RESERVED_IDENTIFIER_FIXUP_780.z = _RESERVED_IDENTIFIER_FIXUP_657.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_780.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_260 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_269;
    if (_RESERVED_IDENTIFIER_FIXUP_260)
    {
        _RESERVED_IDENTIFIER_FIXUP_269 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_269 = _RESERVED_IDENTIFIER_FIXUP_260;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_269)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_306 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_734.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_333 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_683;
    if (_RESERVED_IDENTIFIER_FIXUP_306 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_683 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_306), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_333);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_683 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_333);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_683;
    wxlLight = vec4(color0.xyz * 2.0, 1.0);
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
    vec4 v5 = texcoord3;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v4.xy;
    r0 = hdTex2(param);
    r1 = OptTex0( v2.xyz);
    vec2 param_1 = v5.xy;
    r2 = hdTex3(param_1);
    r2.z = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.z = (-r2.z) + 1.0;
    vec2 param_2 = v3.xy;
    r3 = hdTex1(param_2);
    r3 = r2.xxxx * r3;
    r1 = (r1 * r2.zzzz) + r3;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = (r2.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB109 = r0;
    vec3 hdB113 = hdB109.xyz * r1.xxx;
    r0.x = hdB113.x;
    r0.y = hdB113.y;
    r0.z = hdB113.z;
    vec3 hdB125 = r0.www * v1.xyz;
    r1.x = hdB125.x;
    r1.y = hdB125.y;
    r1.z = hdB125.z;
    vec4 hdB132 = r0;
    vec3 hdB136 = hdB132.xyz * v0.xyz;
    r0.x = hdB136.x;
    r0.y = hdB136.y;
    r0.z = hdB136.z;
    vec4 hdB143 = r0;
    vec4 hdB145 = r0;
    vec3 hdB147 = hdB143.xyz + hdB145.xyz;
    r0.x = hdB147.x;
    r0.y = hdB147.y;
    r0.z = hdB147.z;
    vec4 hdB159 = r0;
    vec3 hdB161 = (r1.xyz * r2.www) + hdB159.xyz;
    r0.x = hdB161.x;
    r0.y = hdB161.y;
    r0.z = hdB161.z;
    vec4 hdB168 = r0;
    vec3 hdB185 = hdB168.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB185.x;
    r0.y = hdB185.y;
    r0.z = hdB185.z;
    vec3 hdB200 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB200.x;
    oC0.y = hdB200.y;
    oC0.z = hdB200.z;
    oC0.w = 1.0;
    bool hdB214 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB222;
    if (hdB214)
    {
        hdB222 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB222 = hdB214;
    }
    if (hdB222)
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
    bool _815 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _825;
    if (_815)
    {
        _825 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 14u) != 0u;
    }
    else
    {
        _825 = _815;
    }
    if (_825)
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
        bool _850 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _865;
        if (!_850)
        {
            _865 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 14u) != 0u;
        }
        else
        {
            _865 = _850;
        }
        if (_865)
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
