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
float _RESERVED_IDENTIFIER_FIXUP_760;
vec4 _RESERVED_IDENTIFIER_FIXUP_761;


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
    float _RESERVED_IDENTIFIER_FIXUP_366 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec2 param = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_373 = hdTex0(param).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_762 = vec4(_RESERVED_IDENTIFIER_FIXUP_366, _RESERVED_IDENTIFIER_FIXUP_373 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_760).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_384 = _RESERVED_IDENTIFIER_FIXUP_762.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_387 = _RESERVED_IDENTIFIER_FIXUP_384 + _RESERVED_IDENTIFIER_FIXUP_384;
    vec4 _RESERVED_IDENTIFIER_FIXUP_653 = _RESERVED_IDENTIFIER_FIXUP_762;
    _RESERVED_IDENTIFIER_FIXUP_653.y = _RESERVED_IDENTIFIER_FIXUP_387.x;
    _RESERVED_IDENTIFIER_FIXUP_653.z = _RESERVED_IDENTIFIER_FIXUP_387.y;
    _RESERVED_IDENTIFIER_FIXUP_653.w = _RESERVED_IDENTIFIER_FIXUP_387.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_665;
    _RESERVED_IDENTIFIER_FIXUP_665.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_665.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_665.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_763 = vec4(mix(_RESERVED_IDENTIFIER_FIXUP_653.yzw, _RESERVED_IDENTIFIER_FIXUP_373, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_653.xxx, vec3(0.0))), 1.0);
    vec2 param_1 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_440 = _RESERVED_IDENTIFIER_FIXUP_665.xyz * hdTex1(param_1).www;
    vec4 _RESERVED_IDENTIFIER_FIXUP_676;
    _RESERVED_IDENTIFIER_FIXUP_676.x = _RESERVED_IDENTIFIER_FIXUP_440.x;
    _RESERVED_IDENTIFIER_FIXUP_676.y = _RESERVED_IDENTIFIER_FIXUP_440.y;
    _RESERVED_IDENTIFIER_FIXUP_676.z = _RESERVED_IDENTIFIER_FIXUP_440.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_454 = (_RESERVED_IDENTIFIER_FIXUP_763.xyz * _RESERVED_IDENTIFIER_FIXUP_763.www) + _RESERVED_IDENTIFIER_FIXUP_676.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_682;
    _RESERVED_IDENTIFIER_FIXUP_682.x = _RESERVED_IDENTIFIER_FIXUP_454.x;
    _RESERVED_IDENTIFIER_FIXUP_682.y = _RESERVED_IDENTIFIER_FIXUP_454.y;
    _RESERVED_IDENTIFIER_FIXUP_682.z = _RESERVED_IDENTIFIER_FIXUP_454.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_467 = _RESERVED_IDENTIFIER_FIXUP_682.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_688;
    _RESERVED_IDENTIFIER_FIXUP_688.x = _RESERVED_IDENTIFIER_FIXUP_467.x;
    _RESERVED_IDENTIFIER_FIXUP_688.y = _RESERVED_IDENTIFIER_FIXUP_467.y;
    _RESERVED_IDENTIFIER_FIXUP_688.z = _RESERVED_IDENTIFIER_FIXUP_467.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_482 = _RESERVED_IDENTIFIER_FIXUP_688.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_694;
    _RESERVED_IDENTIFIER_FIXUP_694.x = _RESERVED_IDENTIFIER_FIXUP_482.x;
    _RESERVED_IDENTIFIER_FIXUP_694.y = _RESERVED_IDENTIFIER_FIXUP_482.y;
    _RESERVED_IDENTIFIER_FIXUP_694.z = _RESERVED_IDENTIFIER_FIXUP_482.z;
    vec2 param_2 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_515 = hdTex0(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_517 = _RESERVED_IDENTIFIER_FIXUP_515.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_764 = vec4(_RESERVED_IDENTIFIER_FIXUP_366, _RESERVED_IDENTIFIER_FIXUP_517 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_528 = _RESERVED_IDENTIFIER_FIXUP_764.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_531 = _RESERVED_IDENTIFIER_FIXUP_528 + _RESERVED_IDENTIFIER_FIXUP_528;
    vec4 _RESERVED_IDENTIFIER_FIXUP_710 = _RESERVED_IDENTIFIER_FIXUP_764;
    _RESERVED_IDENTIFIER_FIXUP_710.y = _RESERVED_IDENTIFIER_FIXUP_531.x;
    _RESERVED_IDENTIFIER_FIXUP_710.z = _RESERVED_IDENTIFIER_FIXUP_531.y;
    _RESERVED_IDENTIFIER_FIXUP_710.w = _RESERVED_IDENTIFIER_FIXUP_531.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_557 = _RESERVED_IDENTIFIER_FIXUP_515.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_722;
    _RESERVED_IDENTIFIER_FIXUP_722.x = _RESERVED_IDENTIFIER_FIXUP_557.x;
    _RESERVED_IDENTIFIER_FIXUP_722.y = _RESERVED_IDENTIFIER_FIXUP_557.y;
    _RESERVED_IDENTIFIER_FIXUP_722.z = _RESERVED_IDENTIFIER_FIXUP_557.z;
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_567 = hdTex1(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_571 = (_RESERVED_IDENTIFIER_FIXUP_567.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_765 = vec4(mix(_RESERVED_IDENTIFIER_FIXUP_710.yzw, _RESERVED_IDENTIFIER_FIXUP_517, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_710.xxx, vec3(0.0))), _RESERVED_IDENTIFIER_FIXUP_571);
    _RESERVED_IDENTIFIER_FIXUP_765.w = _RESERVED_IDENTIFIER_FIXUP_571;
    vec3 _RESERVED_IDENTIFIER_FIXUP_584 = _RESERVED_IDENTIFIER_FIXUP_722.xyz * _RESERVED_IDENTIFIER_FIXUP_567.www;
    vec4 _RESERVED_IDENTIFIER_FIXUP_735;
    _RESERVED_IDENTIFIER_FIXUP_735.x = _RESERVED_IDENTIFIER_FIXUP_584.x;
    _RESERVED_IDENTIFIER_FIXUP_735.y = _RESERVED_IDENTIFIER_FIXUP_584.y;
    _RESERVED_IDENTIFIER_FIXUP_735.z = _RESERVED_IDENTIFIER_FIXUP_584.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_598 = (_RESERVED_IDENTIFIER_FIXUP_765.xyz * _RESERVED_IDENTIFIER_FIXUP_765.www) + _RESERVED_IDENTIFIER_FIXUP_735.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_741;
    _RESERVED_IDENTIFIER_FIXUP_741.x = _RESERVED_IDENTIFIER_FIXUP_598.x;
    _RESERVED_IDENTIFIER_FIXUP_741.y = _RESERVED_IDENTIFIER_FIXUP_598.y;
    _RESERVED_IDENTIFIER_FIXUP_741.z = _RESERVED_IDENTIFIER_FIXUP_598.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_611 = _RESERVED_IDENTIFIER_FIXUP_741.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_747;
    _RESERVED_IDENTIFIER_FIXUP_747.x = _RESERVED_IDENTIFIER_FIXUP_611.x;
    _RESERVED_IDENTIFIER_FIXUP_747.y = _RESERVED_IDENTIFIER_FIXUP_611.y;
    _RESERVED_IDENTIFIER_FIXUP_747.z = _RESERVED_IDENTIFIER_FIXUP_611.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_747.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_241 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_250;
    if (_RESERVED_IDENTIFIER_FIXUP_241)
    {
        _RESERVED_IDENTIFIER_FIXUP_250 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_250 = _RESERVED_IDENTIFIER_FIXUP_241;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_250)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_287 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_694.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_313 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_637;
    if (_RESERVED_IDENTIFIER_FIXUP_287 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_637 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_287), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_313);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_637 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_313);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_637;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_571);
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
    r0.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec2 param = v2.xy;
    r1 = hdTex0(param);
    vec3 hdB66 = r1.xyz * v0.xyz;
    r0.y = hdB66.x;
    r0.z = hdB66.y;
    r0.w = hdB66.z;
    vec4 hdB76 = r0;
    vec4 hdB78 = r0;
    vec3 hdB80 = hdB76.yzw + hdB78.yzw;
    r0.y = hdB80.x;
    r0.z = hdB80.y;
    r0.w = hdB80.z;
    vec4 hdB87 = r0;
    vec4 hdB91 = r0;
    vec3 hdB98 = mix(hdB87.yzw, r1.xyz, greaterThanEqual(-hdB91.xxx, vec3(0.0)));
    r0.x = hdB98.x;
    r0.y = hdB98.y;
    r0.z = hdB98.z;
    vec4 hdB105 = r1;
    vec3 hdB109 = hdB105.www * v1.xyz;
    r1.x = hdB109.x;
    r1.y = hdB109.y;
    r1.z = hdB109.z;
    vec2 param_1 = v3.xy;
    r2 = hdTex1(param_1);
    r0.w = (r2.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB128 = r1;
    vec3 hdB132 = hdB128.xyz * r2.www;
    r1.x = hdB132.x;
    r1.y = hdB132.y;
    r1.z = hdB132.z;
    vec4 hdB139 = r0;
    vec4 hdB141 = r0;
    vec3 hdB146 = (hdB139.xyz * hdB141.www) + r1.xyz;
    r0.x = hdB146.x;
    r0.y = hdB146.y;
    r0.z = hdB146.z;
    vec4 hdB153 = r0;
    vec3 hdB161 = hdB153.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB161.x;
    r0.y = hdB161.y;
    r0.z = hdB161.z;
    vec3 hdB176 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB176.x;
    oC0.y = hdB176.y;
    oC0.z = hdB176.z;
    oC0.w = 1.0;
    bool hdB188 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB196;
    if (hdB188)
    {
        hdB196 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB196 = hdB188;
    }
    if (hdB196)
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
    bool _727 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _736;
    if (_727)
    {
        _736 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 3u) != 0u;
    }
    else
    {
        _736 = _727;
    }
    if (_736)
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
        bool _761 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _776;
        if (!_761)
        {
            _776 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 3u) != 0u;
        }
        else
        {
            _776 = _761;
        }
        if (_776)
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
