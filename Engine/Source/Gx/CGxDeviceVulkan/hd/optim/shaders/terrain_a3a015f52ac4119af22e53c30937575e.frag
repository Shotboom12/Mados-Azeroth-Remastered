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
float _RESERVED_IDENTIFIER_FIXUP_708;
vec4 _RESERVED_IDENTIFIER_FIXUP_709;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_357 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_361 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_357.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_605 = _RESERVED_IDENTIFIER_FIXUP_357;
    _RESERVED_IDENTIFIER_FIXUP_605.x = _RESERVED_IDENTIFIER_FIXUP_361;
    _RESERVED_IDENTIFIER_FIXUP_605.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_361;
    vec4 _RESERVED_IDENTIFIER_FIXUP_611 = _RESERVED_IDENTIFIER_FIXUP_605;
    _RESERVED_IDENTIFIER_FIXUP_611.x = (_RESERVED_IDENTIFIER_FIXUP_357.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_1 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_381 = (hdTex0(param_1) * _RESERVED_IDENTIFIER_FIXUP_605.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_611.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_613;
    _RESERVED_IDENTIFIER_FIXUP_613.x = _RESERVED_IDENTIFIER_FIXUP_381.x;
    _RESERVED_IDENTIFIER_FIXUP_613.y = _RESERVED_IDENTIFIER_FIXUP_381.y;
    _RESERVED_IDENTIFIER_FIXUP_613.z = _RESERVED_IDENTIFIER_FIXUP_381.z;
    _RESERVED_IDENTIFIER_FIXUP_611.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_611.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_611.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_403 = _RESERVED_IDENTIFIER_FIXUP_613.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_708).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_625;
    _RESERVED_IDENTIFIER_FIXUP_625.x = _RESERVED_IDENTIFIER_FIXUP_403.x;
    _RESERVED_IDENTIFIER_FIXUP_625.y = _RESERVED_IDENTIFIER_FIXUP_403.y;
    _RESERVED_IDENTIFIER_FIXUP_625.z = _RESERVED_IDENTIFIER_FIXUP_403.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_414 = _RESERVED_IDENTIFIER_FIXUP_625.xyz + _RESERVED_IDENTIFIER_FIXUP_625.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_631;
    _RESERVED_IDENTIFIER_FIXUP_631.x = _RESERVED_IDENTIFIER_FIXUP_414.x;
    _RESERVED_IDENTIFIER_FIXUP_631.y = _RESERVED_IDENTIFIER_FIXUP_414.y;
    _RESERVED_IDENTIFIER_FIXUP_631.z = _RESERVED_IDENTIFIER_FIXUP_414.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_428 = (_RESERVED_IDENTIFIER_FIXUP_611.xyz * _RESERVED_IDENTIFIER_FIXUP_611.www) + _RESERVED_IDENTIFIER_FIXUP_631.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_637;
    _RESERVED_IDENTIFIER_FIXUP_637.x = _RESERVED_IDENTIFIER_FIXUP_428.x;
    _RESERVED_IDENTIFIER_FIXUP_637.y = _RESERVED_IDENTIFIER_FIXUP_428.y;
    _RESERVED_IDENTIFIER_FIXUP_637.z = _RESERVED_IDENTIFIER_FIXUP_428.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_441 = _RESERVED_IDENTIFIER_FIXUP_637.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_643;
    _RESERVED_IDENTIFIER_FIXUP_643.x = _RESERVED_IDENTIFIER_FIXUP_441.x;
    _RESERVED_IDENTIFIER_FIXUP_643.y = _RESERVED_IDENTIFIER_FIXUP_441.y;
    _RESERVED_IDENTIFIER_FIXUP_643.z = _RESERVED_IDENTIFIER_FIXUP_441.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_456 = _RESERVED_IDENTIFIER_FIXUP_643.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_649;
    _RESERVED_IDENTIFIER_FIXUP_649.x = _RESERVED_IDENTIFIER_FIXUP_456.x;
    _RESERVED_IDENTIFIER_FIXUP_649.y = _RESERVED_IDENTIFIER_FIXUP_456.y;
    _RESERVED_IDENTIFIER_FIXUP_649.z = _RESERVED_IDENTIFIER_FIXUP_456.z;
    vec2 param_2 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_488 = hdTex1(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_492 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_488.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_657 = _RESERVED_IDENTIFIER_FIXUP_488;
    _RESERVED_IDENTIFIER_FIXUP_657.x = _RESERVED_IDENTIFIER_FIXUP_492;
    _RESERVED_IDENTIFIER_FIXUP_657.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_492;
    vec2 param_3 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_502 = hdTex0(param_3) * _RESERVED_IDENTIFIER_FIXUP_657.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_663 = _RESERVED_IDENTIFIER_FIXUP_657;
    _RESERVED_IDENTIFIER_FIXUP_663.x = (_RESERVED_IDENTIFIER_FIXUP_488.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_512 = _RESERVED_IDENTIFIER_FIXUP_502.xyz * _RESERVED_IDENTIFIER_FIXUP_663.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_665 = _RESERVED_IDENTIFIER_FIXUP_502;
    _RESERVED_IDENTIFIER_FIXUP_665.x = _RESERVED_IDENTIFIER_FIXUP_512.x;
    _RESERVED_IDENTIFIER_FIXUP_665.y = _RESERVED_IDENTIFIER_FIXUP_512.y;
    _RESERVED_IDENTIFIER_FIXUP_665.z = _RESERVED_IDENTIFIER_FIXUP_512.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_523 = _RESERVED_IDENTIFIER_FIXUP_665.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_663.x = _RESERVED_IDENTIFIER_FIXUP_523.x;
    _RESERVED_IDENTIFIER_FIXUP_663.y = _RESERVED_IDENTIFIER_FIXUP_523.y;
    _RESERVED_IDENTIFIER_FIXUP_663.z = _RESERVED_IDENTIFIER_FIXUP_523.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_534 = _RESERVED_IDENTIFIER_FIXUP_665.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_677;
    _RESERVED_IDENTIFIER_FIXUP_677.x = _RESERVED_IDENTIFIER_FIXUP_534.x;
    _RESERVED_IDENTIFIER_FIXUP_677.y = _RESERVED_IDENTIFIER_FIXUP_534.y;
    _RESERVED_IDENTIFIER_FIXUP_677.z = _RESERVED_IDENTIFIER_FIXUP_534.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_545 = _RESERVED_IDENTIFIER_FIXUP_677.xyz + _RESERVED_IDENTIFIER_FIXUP_677.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_683;
    _RESERVED_IDENTIFIER_FIXUP_683.x = _RESERVED_IDENTIFIER_FIXUP_545.x;
    _RESERVED_IDENTIFIER_FIXUP_683.y = _RESERVED_IDENTIFIER_FIXUP_545.y;
    _RESERVED_IDENTIFIER_FIXUP_683.z = _RESERVED_IDENTIFIER_FIXUP_545.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_559 = (_RESERVED_IDENTIFIER_FIXUP_663.xyz * _RESERVED_IDENTIFIER_FIXUP_663.www) + _RESERVED_IDENTIFIER_FIXUP_683.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_689;
    _RESERVED_IDENTIFIER_FIXUP_689.x = _RESERVED_IDENTIFIER_FIXUP_559.x;
    _RESERVED_IDENTIFIER_FIXUP_689.y = _RESERVED_IDENTIFIER_FIXUP_559.y;
    _RESERVED_IDENTIFIER_FIXUP_689.z = _RESERVED_IDENTIFIER_FIXUP_559.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_572 = _RESERVED_IDENTIFIER_FIXUP_689.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_695;
    _RESERVED_IDENTIFIER_FIXUP_695.x = _RESERVED_IDENTIFIER_FIXUP_572.x;
    _RESERVED_IDENTIFIER_FIXUP_695.y = _RESERVED_IDENTIFIER_FIXUP_572.y;
    _RESERVED_IDENTIFIER_FIXUP_695.z = _RESERVED_IDENTIFIER_FIXUP_572.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_695.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_227 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_236;
    if (_RESERVED_IDENTIFIER_FIXUP_227)
    {
        _RESERVED_IDENTIFIER_FIXUP_236 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_236 = _RESERVED_IDENTIFIER_FIXUP_227;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_236)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_273 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_649.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_300 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_598;
    if (_RESERVED_IDENTIFIER_FIXUP_273 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_598 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_273), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_300);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_598 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_300);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_598;
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB75 = r0;
    vec3 hdB79 = hdB75.xyz * r1.xxx;
    r0.x = hdB79.x;
    r0.y = hdB79.y;
    r0.z = hdB79.z;
    vec3 hdB92 = r0.www * v1.xyz;
    r1.x = hdB92.x;
    r1.y = hdB92.y;
    r1.z = hdB92.z;
    vec4 hdB99 = r0;
    vec3 hdB103 = hdB99.xyz * v0.xyz;
    r0.x = hdB103.x;
    r0.y = hdB103.y;
    r0.z = hdB103.z;
    vec4 hdB110 = r0;
    vec4 hdB112 = r0;
    vec3 hdB114 = hdB110.xyz + hdB112.xyz;
    r0.x = hdB114.x;
    r0.y = hdB114.y;
    r0.z = hdB114.z;
    vec4 hdB126 = r0;
    vec3 hdB128 = (r1.xyz * r1.www) + hdB126.xyz;
    r0.x = hdB128.x;
    r0.y = hdB128.y;
    r0.z = hdB128.z;
    vec4 hdB135 = r0;
    vec3 hdB152 = hdB135.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB152.x;
    r0.y = hdB152.y;
    r0.z = hdB152.z;
    vec3 hdB167 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB167.x;
    oC0.y = hdB167.y;
    oC0.z = hdB167.z;
    oC0.w = 1.0;
    bool hdB181 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB189;
    if (hdB181)
    {
        hdB189 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB189 = hdB181;
    }
    if (hdB189)
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
    bool _719 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _728;
    if (_719)
    {
        _728 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 3u) != 0u;
    }
    else
    {
        _728 = _719;
    }
    if (_728)
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
        bool _753 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _768;
        if (!_753)
        {
            _768 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 3u) != 0u;
        }
        else
        {
            _768 = _753;
        }
        if (_768)
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
