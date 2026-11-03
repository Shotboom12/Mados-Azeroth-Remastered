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
float _RESERVED_IDENTIFIER_FIXUP_738;
vec4 _RESERVED_IDENTIFIER_FIXUP_739;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_368 = hdTex1(param);
    vec4 _RESERVED_IDENTIFIER_FIXUP_632;
    _RESERVED_IDENTIFIER_FIXUP_632.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_385 = OptTex0( texcoord0.xyz).xyz * _RESERVED_IDENTIFIER_FIXUP_632.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_634;
    _RESERVED_IDENTIFIER_FIXUP_634.x = _RESERVED_IDENTIFIER_FIXUP_385.x;
    _RESERVED_IDENTIFIER_FIXUP_634.y = _RESERVED_IDENTIFIER_FIXUP_385.y;
    _RESERVED_IDENTIFIER_FIXUP_634.z = _RESERVED_IDENTIFIER_FIXUP_385.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_640;
    _RESERVED_IDENTIFIER_FIXUP_640.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_640.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_640.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_407 = _RESERVED_IDENTIFIER_FIXUP_634.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_738).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_646;
    _RESERVED_IDENTIFIER_FIXUP_646.x = _RESERVED_IDENTIFIER_FIXUP_407.x;
    _RESERVED_IDENTIFIER_FIXUP_646.y = _RESERVED_IDENTIFIER_FIXUP_407.y;
    _RESERVED_IDENTIFIER_FIXUP_646.z = _RESERVED_IDENTIFIER_FIXUP_407.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_418 = _RESERVED_IDENTIFIER_FIXUP_646.xyz + _RESERVED_IDENTIFIER_FIXUP_646.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_652;
    _RESERVED_IDENTIFIER_FIXUP_652.x = _RESERVED_IDENTIFIER_FIXUP_418.x;
    _RESERVED_IDENTIFIER_FIXUP_652.y = _RESERVED_IDENTIFIER_FIXUP_418.y;
    _RESERVED_IDENTIFIER_FIXUP_652.z = _RESERVED_IDENTIFIER_FIXUP_418.z;
    float _RESERVED_IDENTIFIER_FIXUP_442 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_368.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_740 = vec4((_RESERVED_IDENTIFIER_FIXUP_640.xyz * _RESERVED_IDENTIFIER_FIXUP_368.www) + _RESERVED_IDENTIFIER_FIXUP_652.xyz, _RESERVED_IDENTIFIER_FIXUP_442);
    _RESERVED_IDENTIFIER_FIXUP_740.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_442;
    vec3 _RESERVED_IDENTIFIER_FIXUP_458 = (_RESERVED_IDENTIFIER_FIXUP_740.xyz * _RESERVED_IDENTIFIER_FIXUP_740.www) - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_669;
    _RESERVED_IDENTIFIER_FIXUP_669.x = _RESERVED_IDENTIFIER_FIXUP_458.x;
    _RESERVED_IDENTIFIER_FIXUP_669.y = _RESERVED_IDENTIFIER_FIXUP_458.y;
    _RESERVED_IDENTIFIER_FIXUP_669.z = _RESERVED_IDENTIFIER_FIXUP_458.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_473 = _RESERVED_IDENTIFIER_FIXUP_669.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_675;
    _RESERVED_IDENTIFIER_FIXUP_675.x = _RESERVED_IDENTIFIER_FIXUP_473.x;
    _RESERVED_IDENTIFIER_FIXUP_675.y = _RESERVED_IDENTIFIER_FIXUP_473.y;
    _RESERVED_IDENTIFIER_FIXUP_675.z = _RESERVED_IDENTIFIER_FIXUP_473.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_502 = OptTex0( texcoord0.xyz);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_506 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_510 = (_RESERVED_IDENTIFIER_FIXUP_506.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_688;
    _RESERVED_IDENTIFIER_FIXUP_688.x = _RESERVED_IDENTIFIER_FIXUP_510;
    vec3 _RESERVED_IDENTIFIER_FIXUP_523 = _RESERVED_IDENTIFIER_FIXUP_502.xyz * _RESERVED_IDENTIFIER_FIXUP_688.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_690 = _RESERVED_IDENTIFIER_FIXUP_502;
    _RESERVED_IDENTIFIER_FIXUP_690.x = _RESERVED_IDENTIFIER_FIXUP_523.x;
    _RESERVED_IDENTIFIER_FIXUP_690.y = _RESERVED_IDENTIFIER_FIXUP_523.y;
    _RESERVED_IDENTIFIER_FIXUP_690.z = _RESERVED_IDENTIFIER_FIXUP_523.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_534 = _RESERVED_IDENTIFIER_FIXUP_690.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_696;
    _RESERVED_IDENTIFIER_FIXUP_696.x = _RESERVED_IDENTIFIER_FIXUP_534.x;
    _RESERVED_IDENTIFIER_FIXUP_696.y = _RESERVED_IDENTIFIER_FIXUP_534.y;
    _RESERVED_IDENTIFIER_FIXUP_696.z = _RESERVED_IDENTIFIER_FIXUP_534.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_545 = _RESERVED_IDENTIFIER_FIXUP_690.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_702;
    _RESERVED_IDENTIFIER_FIXUP_702.x = _RESERVED_IDENTIFIER_FIXUP_545.x;
    _RESERVED_IDENTIFIER_FIXUP_702.y = _RESERVED_IDENTIFIER_FIXUP_545.y;
    _RESERVED_IDENTIFIER_FIXUP_702.z = _RESERVED_IDENTIFIER_FIXUP_545.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_556 = _RESERVED_IDENTIFIER_FIXUP_702.xyz + _RESERVED_IDENTIFIER_FIXUP_702.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_708;
    _RESERVED_IDENTIFIER_FIXUP_708.x = _RESERVED_IDENTIFIER_FIXUP_556.x;
    _RESERVED_IDENTIFIER_FIXUP_708.y = _RESERVED_IDENTIFIER_FIXUP_556.y;
    _RESERVED_IDENTIFIER_FIXUP_708.z = _RESERVED_IDENTIFIER_FIXUP_556.z;
    float _RESERVED_IDENTIFIER_FIXUP_580 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_506.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_741 = vec4((_RESERVED_IDENTIFIER_FIXUP_696.xyz * _RESERVED_IDENTIFIER_FIXUP_506.www) + _RESERVED_IDENTIFIER_FIXUP_708.xyz, _RESERVED_IDENTIFIER_FIXUP_580);
    _RESERVED_IDENTIFIER_FIXUP_741.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_580;
    vec3 _RESERVED_IDENTIFIER_FIXUP_596 = (_RESERVED_IDENTIFIER_FIXUP_741.xyz * _RESERVED_IDENTIFIER_FIXUP_741.www) - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_725;
    _RESERVED_IDENTIFIER_FIXUP_725.x = _RESERVED_IDENTIFIER_FIXUP_596.x;
    _RESERVED_IDENTIFIER_FIXUP_725.y = _RESERVED_IDENTIFIER_FIXUP_596.y;
    _RESERVED_IDENTIFIER_FIXUP_725.z = _RESERVED_IDENTIFIER_FIXUP_596.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_725.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_675.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_310 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_622;
    if (_RESERVED_IDENTIFIER_FIXUP_283 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_622 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_283), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_310);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_622 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_310);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_622;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_510);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    r2.x = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB63 = r0;
    vec3 hdB67 = hdB63.xyz * r2.xxx;
    r0.x = hdB67.x;
    r0.y = hdB67.y;
    r0.z = hdB67.z;
    vec3 hdB80 = r0.www * v1.xyz;
    r2.x = hdB80.x;
    r2.y = hdB80.y;
    r2.z = hdB80.z;
    vec4 hdB87 = r0;
    vec3 hdB91 = hdB87.xyz * v0.xyz;
    r0.x = hdB91.x;
    r0.y = hdB91.y;
    r0.z = hdB91.z;
    vec4 hdB98 = r0;
    vec4 hdB100 = r0;
    vec3 hdB102 = hdB98.xyz + hdB100.xyz;
    r0.x = hdB102.x;
    r0.y = hdB102.y;
    r0.z = hdB102.z;
    vec4 hdB114 = r0;
    vec3 hdB116 = (r2.xyz * r1.www) + hdB114.xyz;
    r0.x = hdB116.x;
    r0.y = hdB116.y;
    r0.z = hdB116.z;
    r0.w = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.w = (-r0.w) + 1.0;
    vec4 hdB135 = r0;
    vec4 hdB137 = r0;
    vec3 hdB155 = (hdB135.xyz * hdB137.www) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB155.x;
    r0.y = hdB155.y;
    r0.z = hdB155.z;
    vec3 hdB170 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB170.x;
    oC0.y = hdB170.y;
    oC0.z = hdB170.z;
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
    bool _676 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _685;
    if (_676)
    {
        _685 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _685 = _676;
    }
    if (_685)
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
        bool _710 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _725;
        if (!_710)
        {
            _725 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 2u) != 0u;
        }
        else
        {
            _725 = _710;
        }
        if (_725)
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
