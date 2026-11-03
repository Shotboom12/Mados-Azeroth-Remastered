#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
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
float _RESERVED_IDENTIFIER_FIXUP_765;
vec4 _RESERVED_IDENTIFIER_FIXUP_766;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _108 = hdOverride >= 0;
    bool _118;
    if (_108)
    {
        _118 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _118 = _108;
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

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _81 = hdOverride >= 0;
    bool _90;
    if (_81)
    {
        _90 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _90 = _81;
    }
    vec4 _91;
    if (_90)
    {
        _91 = vec4(float(hdOverride));
    }
    else
    {
        _91 = value;
    }
    return _91;
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

void HDActual()
{
    vec2 param = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_396 = hdTex3(param);
    vec4 _RESERVED_IDENTIFIER_FIXUP_669;
    _RESERVED_IDENTIFIER_FIXUP_669.x = 1.0;
    vec2 param_1 = texcoord1.xy;
    vec2 param_2 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_423 = mix(mix(OptTex0( texcoord0.xyz), hdTex1(param_1), _RESERVED_IDENTIFIER_FIXUP_396.xxxx), hdTex2(param_2), _RESERVED_IDENTIFIER_FIXUP_396.yyyy).xyz * _RESERVED_IDENTIFIER_FIXUP_669.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_671;
    _RESERVED_IDENTIFIER_FIXUP_671.x = _RESERVED_IDENTIFIER_FIXUP_423.x;
    _RESERVED_IDENTIFIER_FIXUP_671.y = _RESERVED_IDENTIFIER_FIXUP_423.y;
    _RESERVED_IDENTIFIER_FIXUP_671.z = _RESERVED_IDENTIFIER_FIXUP_423.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_677;
    _RESERVED_IDENTIFIER_FIXUP_677.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_677.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_677.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_445 = _RESERVED_IDENTIFIER_FIXUP_671.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_765).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_683;
    _RESERVED_IDENTIFIER_FIXUP_683.x = _RESERVED_IDENTIFIER_FIXUP_445.x;
    _RESERVED_IDENTIFIER_FIXUP_683.y = _RESERVED_IDENTIFIER_FIXUP_445.y;
    _RESERVED_IDENTIFIER_FIXUP_683.z = _RESERVED_IDENTIFIER_FIXUP_445.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_456 = _RESERVED_IDENTIFIER_FIXUP_683.xyz + _RESERVED_IDENTIFIER_FIXUP_683.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_689;
    _RESERVED_IDENTIFIER_FIXUP_689.x = _RESERVED_IDENTIFIER_FIXUP_456.x;
    _RESERVED_IDENTIFIER_FIXUP_689.y = _RESERVED_IDENTIFIER_FIXUP_456.y;
    _RESERVED_IDENTIFIER_FIXUP_689.z = _RESERVED_IDENTIFIER_FIXUP_456.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_470 = (_RESERVED_IDENTIFIER_FIXUP_677.xyz * _RESERVED_IDENTIFIER_FIXUP_396.www) + _RESERVED_IDENTIFIER_FIXUP_689.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_695;
    _RESERVED_IDENTIFIER_FIXUP_695.x = _RESERVED_IDENTIFIER_FIXUP_470.x;
    _RESERVED_IDENTIFIER_FIXUP_695.y = _RESERVED_IDENTIFIER_FIXUP_470.y;
    _RESERVED_IDENTIFIER_FIXUP_695.z = _RESERVED_IDENTIFIER_FIXUP_470.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_483 = _RESERVED_IDENTIFIER_FIXUP_695.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_701;
    _RESERVED_IDENTIFIER_FIXUP_701.x = _RESERVED_IDENTIFIER_FIXUP_483.x;
    _RESERVED_IDENTIFIER_FIXUP_701.y = _RESERVED_IDENTIFIER_FIXUP_483.y;
    _RESERVED_IDENTIFIER_FIXUP_701.z = _RESERVED_IDENTIFIER_FIXUP_483.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_498 = _RESERVED_IDENTIFIER_FIXUP_701.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_707;
    _RESERVED_IDENTIFIER_FIXUP_707.x = _RESERVED_IDENTIFIER_FIXUP_498.x;
    _RESERVED_IDENTIFIER_FIXUP_707.y = _RESERVED_IDENTIFIER_FIXUP_498.y;
    _RESERVED_IDENTIFIER_FIXUP_707.z = _RESERVED_IDENTIFIER_FIXUP_498.z;
    vec2 param_3 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_545 = hdTex3(param_3);
    vec2 param_4 = texcoord1.xy;
    vec2 param_5 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_555 = mix(mix(OptTex0( texcoord0.xyz), hdTex1(param_4), _RESERVED_IDENTIFIER_FIXUP_545.xxxx), hdTex2(param_5), _RESERVED_IDENTIFIER_FIXUP_545.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_559 = (_RESERVED_IDENTIFIER_FIXUP_545.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_720;
    _RESERVED_IDENTIFIER_FIXUP_720.x = _RESERVED_IDENTIFIER_FIXUP_559;
    vec3 _RESERVED_IDENTIFIER_FIXUP_572 = _RESERVED_IDENTIFIER_FIXUP_555.xyz * _RESERVED_IDENTIFIER_FIXUP_720.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_722;
    _RESERVED_IDENTIFIER_FIXUP_722.x = _RESERVED_IDENTIFIER_FIXUP_572.x;
    _RESERVED_IDENTIFIER_FIXUP_722.y = _RESERVED_IDENTIFIER_FIXUP_572.y;
    _RESERVED_IDENTIFIER_FIXUP_722.z = _RESERVED_IDENTIFIER_FIXUP_572.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_583 = _RESERVED_IDENTIFIER_FIXUP_555.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_728;
    _RESERVED_IDENTIFIER_FIXUP_728.x = _RESERVED_IDENTIFIER_FIXUP_583.x;
    _RESERVED_IDENTIFIER_FIXUP_728.y = _RESERVED_IDENTIFIER_FIXUP_583.y;
    _RESERVED_IDENTIFIER_FIXUP_728.z = _RESERVED_IDENTIFIER_FIXUP_583.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_594 = _RESERVED_IDENTIFIER_FIXUP_722.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_734;
    _RESERVED_IDENTIFIER_FIXUP_734.x = _RESERVED_IDENTIFIER_FIXUP_594.x;
    _RESERVED_IDENTIFIER_FIXUP_734.y = _RESERVED_IDENTIFIER_FIXUP_594.y;
    _RESERVED_IDENTIFIER_FIXUP_734.z = _RESERVED_IDENTIFIER_FIXUP_594.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_605 = _RESERVED_IDENTIFIER_FIXUP_734.xyz + _RESERVED_IDENTIFIER_FIXUP_734.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_740;
    _RESERVED_IDENTIFIER_FIXUP_740.x = _RESERVED_IDENTIFIER_FIXUP_605.x;
    _RESERVED_IDENTIFIER_FIXUP_740.y = _RESERVED_IDENTIFIER_FIXUP_605.y;
    _RESERVED_IDENTIFIER_FIXUP_740.z = _RESERVED_IDENTIFIER_FIXUP_605.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_619 = (_RESERVED_IDENTIFIER_FIXUP_728.xyz * _RESERVED_IDENTIFIER_FIXUP_545.www) + _RESERVED_IDENTIFIER_FIXUP_740.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_746;
    _RESERVED_IDENTIFIER_FIXUP_746.x = _RESERVED_IDENTIFIER_FIXUP_619.x;
    _RESERVED_IDENTIFIER_FIXUP_746.y = _RESERVED_IDENTIFIER_FIXUP_619.y;
    _RESERVED_IDENTIFIER_FIXUP_746.z = _RESERVED_IDENTIFIER_FIXUP_619.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_632 = _RESERVED_IDENTIFIER_FIXUP_746.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_752;
    _RESERVED_IDENTIFIER_FIXUP_752.x = _RESERVED_IDENTIFIER_FIXUP_632.x;
    _RESERVED_IDENTIFIER_FIXUP_752.y = _RESERVED_IDENTIFIER_FIXUP_632.y;
    _RESERVED_IDENTIFIER_FIXUP_752.z = _RESERVED_IDENTIFIER_FIXUP_632.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_752.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_707.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_324 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_658;
    if (_RESERVED_IDENTIFIER_FIXUP_297 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_658 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_297), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_324);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_658 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_324);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_658;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_559);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
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
    vec2 param_1 = v3.xy;
    r2 = hdTex1(param_1);
    vec2 param_2 = v5.xy;
    r3 = hdTex3(param_2);
    r4 = mix(r1, r2, r3.xxxx);
    r1 = mix(r4, r0, r3.yyyy);
    r0.x = (r3.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB93 = r0;
    vec3 hdB95 = r1.xyz * hdB93.xxx;
    r0.x = hdB95.x;
    r0.y = hdB95.y;
    r0.z = hdB95.z;
    vec4 hdB104 = r1;
    vec3 hdB108 = hdB104.www * v1.xyz;
    r1.x = hdB108.x;
    r1.y = hdB108.y;
    r1.z = hdB108.z;
    vec4 hdB115 = r0;
    vec3 hdB119 = hdB115.xyz * v0.xyz;
    r0.x = hdB119.x;
    r0.y = hdB119.y;
    r0.z = hdB119.z;
    vec4 hdB126 = r0;
    vec4 hdB128 = r0;
    vec3 hdB130 = hdB126.xyz + hdB128.xyz;
    r0.x = hdB130.x;
    r0.y = hdB130.y;
    r0.z = hdB130.z;
    vec4 hdB142 = r0;
    vec3 hdB144 = (r1.xyz * r3.www) + hdB142.xyz;
    r0.x = hdB144.x;
    r0.y = hdB144.y;
    r0.z = hdB144.z;
    vec4 hdB151 = r0;
    vec3 hdB168 = hdB151.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB168.x;
    r0.y = hdB168.y;
    r0.z = hdB168.z;
    vec3 hdB183 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB183.x;
    oC0.y = hdB183.y;
    oC0.z = hdB183.z;
    oC0.w = 1.0;
    bool hdB198 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB206;
    if (hdB198)
    {
        hdB206 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB206 = hdB198;
    }
    if (hdB206)
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
    bool _765 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _775;
    if (_765)
    {
        _775 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 14u) != 0u;
    }
    else
    {
        _775 = _765;
    }
    if (_775)
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
        bool _800 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _815;
        if (!_800)
        {
            _815 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 14u) != 0u;
        }
        else
        {
            _815 = _800;
        }
        if (_815)
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
