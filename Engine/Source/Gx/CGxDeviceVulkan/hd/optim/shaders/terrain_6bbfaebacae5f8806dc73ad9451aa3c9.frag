#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
layout(location = 6) in vec4 texcoord4;
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
float _RESERVED_IDENTIFIER_FIXUP_800;
vec4 _RESERVED_IDENTIFIER_FIXUP_801;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _170 = hdOverride >= 0;
    bool _179;
    if (_170)
    {
        _179 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _179 = _170;
    }
    vec4 _180;
    if (_179)
    {
        _180 = vec4(float(hdOverride));
    }
    else
    {
        _180 = value;
    }
    return _180;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _115 = hdOverride >= 0;
    bool _125;
    if (_115)
    {
        _125 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _125 = _115;
    }
    vec4 _126;
    if (_125)
    {
        _126 = vec4(float(hdOverride));
    }
    else
    {
        _126 = value;
    }
    return _126;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _143 = hdOverride >= 0;
    bool _152;
    if (_143)
    {
        _152 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _152 = _143;
    }
    vec4 _153;
    if (_152)
    {
        _153 = vec4(float(hdOverride));
    }
    else
    {
        _153 = value;
    }
    return _153;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _87 = hdOverride >= 0;
    bool _97;
    if (_87)
    {
        _97 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _97 = _87;
    }
    vec4 _98;
    if (_97)
    {
        _98 = vec4(float(hdOverride));
    }
    else
    {
        _98 = value;
    }
    return _98;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _49 = hdOverride >= 0;
    bool _69;
    if (_49)
    {
        _69 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _69 = _49;
    }
    vec4 _70;
    if (_69)
    {
        _70 = vec4(float(hdOverride));
    }
    else
    {
        _70 = value;
    }
    return _70;
}

void HDActual()
{
    vec2 param = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_414 = hdTex4(param);
    vec4 _RESERVED_IDENTIFIER_FIXUP_704;
    _RESERVED_IDENTIFIER_FIXUP_704.x = 1.0;
    vec2 param_1 = texcoord0.xy;
    vec2 param_2 = texcoord1.xy;
    vec2 param_3 = texcoord2.xy;
    vec2 param_4 = texcoord3.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_446 = mix(mix(mix(hdTex0(param_1), hdTex1(param_2), _RESERVED_IDENTIFIER_FIXUP_414.xxxx), hdTex2(param_3), _RESERVED_IDENTIFIER_FIXUP_414.yyyy), hdTex3(param_4), _RESERVED_IDENTIFIER_FIXUP_414.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_704.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_706;
    _RESERVED_IDENTIFIER_FIXUP_706.x = _RESERVED_IDENTIFIER_FIXUP_446.x;
    _RESERVED_IDENTIFIER_FIXUP_706.y = _RESERVED_IDENTIFIER_FIXUP_446.y;
    _RESERVED_IDENTIFIER_FIXUP_706.z = _RESERVED_IDENTIFIER_FIXUP_446.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_712;
    _RESERVED_IDENTIFIER_FIXUP_712.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_712.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_712.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_468 = _RESERVED_IDENTIFIER_FIXUP_706.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_800).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_718;
    _RESERVED_IDENTIFIER_FIXUP_718.x = _RESERVED_IDENTIFIER_FIXUP_468.x;
    _RESERVED_IDENTIFIER_FIXUP_718.y = _RESERVED_IDENTIFIER_FIXUP_468.y;
    _RESERVED_IDENTIFIER_FIXUP_718.z = _RESERVED_IDENTIFIER_FIXUP_468.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_479 = _RESERVED_IDENTIFIER_FIXUP_718.xyz + _RESERVED_IDENTIFIER_FIXUP_718.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_724;
    _RESERVED_IDENTIFIER_FIXUP_724.x = _RESERVED_IDENTIFIER_FIXUP_479.x;
    _RESERVED_IDENTIFIER_FIXUP_724.y = _RESERVED_IDENTIFIER_FIXUP_479.y;
    _RESERVED_IDENTIFIER_FIXUP_724.z = _RESERVED_IDENTIFIER_FIXUP_479.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_493 = (_RESERVED_IDENTIFIER_FIXUP_712.xyz * _RESERVED_IDENTIFIER_FIXUP_414.www) + _RESERVED_IDENTIFIER_FIXUP_724.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_730;
    _RESERVED_IDENTIFIER_FIXUP_730.x = _RESERVED_IDENTIFIER_FIXUP_493.x;
    _RESERVED_IDENTIFIER_FIXUP_730.y = _RESERVED_IDENTIFIER_FIXUP_493.y;
    _RESERVED_IDENTIFIER_FIXUP_730.z = _RESERVED_IDENTIFIER_FIXUP_493.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_506 = _RESERVED_IDENTIFIER_FIXUP_730.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_736;
    _RESERVED_IDENTIFIER_FIXUP_736.x = _RESERVED_IDENTIFIER_FIXUP_506.x;
    _RESERVED_IDENTIFIER_FIXUP_736.y = _RESERVED_IDENTIFIER_FIXUP_506.y;
    _RESERVED_IDENTIFIER_FIXUP_736.z = _RESERVED_IDENTIFIER_FIXUP_506.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_521 = _RESERVED_IDENTIFIER_FIXUP_736.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_742;
    _RESERVED_IDENTIFIER_FIXUP_742.x = _RESERVED_IDENTIFIER_FIXUP_521.x;
    _RESERVED_IDENTIFIER_FIXUP_742.y = _RESERVED_IDENTIFIER_FIXUP_521.y;
    _RESERVED_IDENTIFIER_FIXUP_742.z = _RESERVED_IDENTIFIER_FIXUP_521.z;
    vec2 param_5 = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_575 = hdTex4(param_5);
    vec2 param_6 = texcoord0.xy;
    vec2 param_7 = texcoord1.xy;
    vec2 param_8 = texcoord2.xy;
    vec2 param_9 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_590 = mix(mix(mix(hdTex0(param_6), hdTex1(param_7), _RESERVED_IDENTIFIER_FIXUP_575.xxxx), hdTex2(param_8), _RESERVED_IDENTIFIER_FIXUP_575.yyyy), hdTex3(param_9), _RESERVED_IDENTIFIER_FIXUP_575.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_594 = (_RESERVED_IDENTIFIER_FIXUP_575.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_755;
    _RESERVED_IDENTIFIER_FIXUP_755.x = _RESERVED_IDENTIFIER_FIXUP_594;
    vec3 _RESERVED_IDENTIFIER_FIXUP_607 = _RESERVED_IDENTIFIER_FIXUP_590.xyz * _RESERVED_IDENTIFIER_FIXUP_755.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_757;
    _RESERVED_IDENTIFIER_FIXUP_757.x = _RESERVED_IDENTIFIER_FIXUP_607.x;
    _RESERVED_IDENTIFIER_FIXUP_757.y = _RESERVED_IDENTIFIER_FIXUP_607.y;
    _RESERVED_IDENTIFIER_FIXUP_757.z = _RESERVED_IDENTIFIER_FIXUP_607.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_618 = _RESERVED_IDENTIFIER_FIXUP_590.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_763;
    _RESERVED_IDENTIFIER_FIXUP_763.x = _RESERVED_IDENTIFIER_FIXUP_618.x;
    _RESERVED_IDENTIFIER_FIXUP_763.y = _RESERVED_IDENTIFIER_FIXUP_618.y;
    _RESERVED_IDENTIFIER_FIXUP_763.z = _RESERVED_IDENTIFIER_FIXUP_618.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_629 = _RESERVED_IDENTIFIER_FIXUP_757.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_769;
    _RESERVED_IDENTIFIER_FIXUP_769.x = _RESERVED_IDENTIFIER_FIXUP_629.x;
    _RESERVED_IDENTIFIER_FIXUP_769.y = _RESERVED_IDENTIFIER_FIXUP_629.y;
    _RESERVED_IDENTIFIER_FIXUP_769.z = _RESERVED_IDENTIFIER_FIXUP_629.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_640 = _RESERVED_IDENTIFIER_FIXUP_769.xyz + _RESERVED_IDENTIFIER_FIXUP_769.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_775;
    _RESERVED_IDENTIFIER_FIXUP_775.x = _RESERVED_IDENTIFIER_FIXUP_640.x;
    _RESERVED_IDENTIFIER_FIXUP_775.y = _RESERVED_IDENTIFIER_FIXUP_640.y;
    _RESERVED_IDENTIFIER_FIXUP_775.z = _RESERVED_IDENTIFIER_FIXUP_640.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_654 = (_RESERVED_IDENTIFIER_FIXUP_763.xyz * _RESERVED_IDENTIFIER_FIXUP_575.www) + _RESERVED_IDENTIFIER_FIXUP_775.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_781;
    _RESERVED_IDENTIFIER_FIXUP_781.x = _RESERVED_IDENTIFIER_FIXUP_654.x;
    _RESERVED_IDENTIFIER_FIXUP_781.y = _RESERVED_IDENTIFIER_FIXUP_654.y;
    _RESERVED_IDENTIFIER_FIXUP_781.z = _RESERVED_IDENTIFIER_FIXUP_654.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_667 = _RESERVED_IDENTIFIER_FIXUP_781.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_787;
    _RESERVED_IDENTIFIER_FIXUP_787.x = _RESERVED_IDENTIFIER_FIXUP_667.x;
    _RESERVED_IDENTIFIER_FIXUP_787.y = _RESERVED_IDENTIFIER_FIXUP_667.y;
    _RESERVED_IDENTIFIER_FIXUP_787.z = _RESERVED_IDENTIFIER_FIXUP_667.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_787.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_262 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_271;
    if (_RESERVED_IDENTIFIER_FIXUP_262)
    {
        _RESERVED_IDENTIFIER_FIXUP_271 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_271 = _RESERVED_IDENTIFIER_FIXUP_262;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_271)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_308 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_742.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_335 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_693;
    if (_RESERVED_IDENTIFIER_FIXUP_308 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_693 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_308), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_335);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_693 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_335);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_693;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_594);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord3;
    vec4 v6 = texcoord4;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v5.xy;
    r0 = hdTex3(param);
    vec2 param_1 = v4.xy;
    r1 = hdTex2(param_1);
    vec2 param_2 = v2.xy;
    r2 = hdTex0(param_2);
    vec2 param_3 = v3.xy;
    r3 = hdTex1(param_3);
    vec2 param_4 = v6.xy;
    r4 = hdTex4(param_4);
    r5 = mix(r2, r3, r4.xxxx);
    r2 = mix(r5, r1, r4.yyyy);
    r1 = mix(r2, r0, r4.zzzz);
    r0.x = (r4.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB104 = r0;
    vec3 hdB106 = r1.xyz * hdB104.xxx;
    r0.x = hdB106.x;
    r0.y = hdB106.y;
    r0.z = hdB106.z;
    vec4 hdB115 = r1;
    vec3 hdB119 = hdB115.www * v1.xyz;
    r1.x = hdB119.x;
    r1.y = hdB119.y;
    r1.z = hdB119.z;
    vec4 hdB126 = r0;
    vec3 hdB130 = hdB126.xyz * v0.xyz;
    r0.x = hdB130.x;
    r0.y = hdB130.y;
    r0.z = hdB130.z;
    vec4 hdB137 = r0;
    vec4 hdB139 = r0;
    vec3 hdB141 = hdB137.xyz + hdB139.xyz;
    r0.x = hdB141.x;
    r0.y = hdB141.y;
    r0.z = hdB141.z;
    vec4 hdB153 = r0;
    vec3 hdB155 = (r1.xyz * r4.www) + hdB153.xyz;
    r0.x = hdB155.x;
    r0.y = hdB155.y;
    r0.z = hdB155.z;
    vec4 hdB162 = r0;
    vec3 hdB179 = hdB162.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB179.x;
    r0.y = hdB179.y;
    r0.z = hdB179.z;
    vec3 hdB194 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB194.x;
    oC0.y = hdB194.y;
    oC0.z = hdB194.z;
    oC0.w = 1.0;
    bool hdB209 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB217;
    if (hdB209)
    {
        hdB217 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB217 = hdB209;
    }
    if (hdB217)
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
    bool _848 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _858;
    if (_848)
    {
        _858 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 31u) != 0u;
    }
    else
    {
        _858 = _848;
    }
    if (_858)
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
        bool _883 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _898;
        if (!_883)
        {
            _898 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 31u) != 0u;
        }
        else
        {
            _898 = _883;
        }
        if (_898)
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
