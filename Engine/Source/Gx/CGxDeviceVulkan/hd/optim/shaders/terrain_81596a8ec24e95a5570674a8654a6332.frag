#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=3)uniform sampler2D s3[4];

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
float _RESERVED_IDENTIFIER_FIXUP_762;
vec4 _RESERVED_IDENTIFIER_FIXUP_763;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _139 = hdOverride >= 0;
    bool _149;
    if (_139)
    {
        _149 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _149 = _139;
    }
    vec4 _150;
    if (_149)
    {
        _150 = vec4(float(hdOverride));
    }
    else
    {
        _150 = value;
    }
    return _150;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _84 = hdOverride >= 0;
    bool _94;
    if (_84)
    {
        _94 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _94 = _84;
    }
    vec4 _95;
    if (_94)
    {
        _95 = vec4(float(hdOverride));
    }
    else
    {
        _95 = value;
    }
    return _95;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _112 = hdOverride >= 0;
    bool _121;
    if (_112)
    {
        _121 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _121 = _112;
    }
    vec4 _122;
    if (_121)
    {
        _122 = vec4(float(hdOverride));
    }
    else
    {
        _122 = value;
    }
    return _122;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _46 = hdOverride >= 0;
    bool _66;
    if (_46)
    {
        _66 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _66 = _46;
    }
    vec4 _67;
    if (_66)
    {
        _67 = vec4(float(hdOverride));
    }
    else
    {
        _67 = value;
    }
    return _67;
}

void HDActual()
{
    vec2 param = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_393 = hdTex3(param);
    vec4 _RESERVED_IDENTIFIER_FIXUP_666;
    _RESERVED_IDENTIFIER_FIXUP_666.x = 1.0;
    vec2 param_1 = texcoord0.xy;
    vec2 param_2 = texcoord1.xy;
    vec2 param_3 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_420 = mix(mix(hdTex0(param_1), hdTex1(param_2), _RESERVED_IDENTIFIER_FIXUP_393.xxxx), hdTex2(param_3), _RESERVED_IDENTIFIER_FIXUP_393.yyyy).xyz * _RESERVED_IDENTIFIER_FIXUP_666.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_668;
    _RESERVED_IDENTIFIER_FIXUP_668.x = _RESERVED_IDENTIFIER_FIXUP_420.x;
    _RESERVED_IDENTIFIER_FIXUP_668.y = _RESERVED_IDENTIFIER_FIXUP_420.y;
    _RESERVED_IDENTIFIER_FIXUP_668.z = _RESERVED_IDENTIFIER_FIXUP_420.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_674;
    _RESERVED_IDENTIFIER_FIXUP_674.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_674.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_674.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_442 = _RESERVED_IDENTIFIER_FIXUP_668.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_762).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_680;
    _RESERVED_IDENTIFIER_FIXUP_680.x = _RESERVED_IDENTIFIER_FIXUP_442.x;
    _RESERVED_IDENTIFIER_FIXUP_680.y = _RESERVED_IDENTIFIER_FIXUP_442.y;
    _RESERVED_IDENTIFIER_FIXUP_680.z = _RESERVED_IDENTIFIER_FIXUP_442.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_453 = _RESERVED_IDENTIFIER_FIXUP_680.xyz + _RESERVED_IDENTIFIER_FIXUP_680.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_686;
    _RESERVED_IDENTIFIER_FIXUP_686.x = _RESERVED_IDENTIFIER_FIXUP_453.x;
    _RESERVED_IDENTIFIER_FIXUP_686.y = _RESERVED_IDENTIFIER_FIXUP_453.y;
    _RESERVED_IDENTIFIER_FIXUP_686.z = _RESERVED_IDENTIFIER_FIXUP_453.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_467 = (_RESERVED_IDENTIFIER_FIXUP_674.xyz * _RESERVED_IDENTIFIER_FIXUP_393.www) + _RESERVED_IDENTIFIER_FIXUP_686.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_692;
    _RESERVED_IDENTIFIER_FIXUP_692.x = _RESERVED_IDENTIFIER_FIXUP_467.x;
    _RESERVED_IDENTIFIER_FIXUP_692.y = _RESERVED_IDENTIFIER_FIXUP_467.y;
    _RESERVED_IDENTIFIER_FIXUP_692.z = _RESERVED_IDENTIFIER_FIXUP_467.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_480 = _RESERVED_IDENTIFIER_FIXUP_692.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_698;
    _RESERVED_IDENTIFIER_FIXUP_698.x = _RESERVED_IDENTIFIER_FIXUP_480.x;
    _RESERVED_IDENTIFIER_FIXUP_698.y = _RESERVED_IDENTIFIER_FIXUP_480.y;
    _RESERVED_IDENTIFIER_FIXUP_698.z = _RESERVED_IDENTIFIER_FIXUP_480.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_495 = _RESERVED_IDENTIFIER_FIXUP_698.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_704;
    _RESERVED_IDENTIFIER_FIXUP_704.x = _RESERVED_IDENTIFIER_FIXUP_495.x;
    _RESERVED_IDENTIFIER_FIXUP_704.y = _RESERVED_IDENTIFIER_FIXUP_495.y;
    _RESERVED_IDENTIFIER_FIXUP_704.z = _RESERVED_IDENTIFIER_FIXUP_495.z;
    vec2 param_4 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_542 = hdTex3(param_4);
    vec2 param_5 = texcoord0.xy;
    vec2 param_6 = texcoord1.xy;
    vec2 param_7 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_552 = mix(mix(hdTex0(param_5), hdTex1(param_6), _RESERVED_IDENTIFIER_FIXUP_542.xxxx), hdTex2(param_7), _RESERVED_IDENTIFIER_FIXUP_542.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_556 = (_RESERVED_IDENTIFIER_FIXUP_542.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_717;
    _RESERVED_IDENTIFIER_FIXUP_717.x = _RESERVED_IDENTIFIER_FIXUP_556;
    vec3 _RESERVED_IDENTIFIER_FIXUP_569 = _RESERVED_IDENTIFIER_FIXUP_552.xyz * _RESERVED_IDENTIFIER_FIXUP_717.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_719;
    _RESERVED_IDENTIFIER_FIXUP_719.x = _RESERVED_IDENTIFIER_FIXUP_569.x;
    _RESERVED_IDENTIFIER_FIXUP_719.y = _RESERVED_IDENTIFIER_FIXUP_569.y;
    _RESERVED_IDENTIFIER_FIXUP_719.z = _RESERVED_IDENTIFIER_FIXUP_569.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_580 = _RESERVED_IDENTIFIER_FIXUP_552.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_725;
    _RESERVED_IDENTIFIER_FIXUP_725.x = _RESERVED_IDENTIFIER_FIXUP_580.x;
    _RESERVED_IDENTIFIER_FIXUP_725.y = _RESERVED_IDENTIFIER_FIXUP_580.y;
    _RESERVED_IDENTIFIER_FIXUP_725.z = _RESERVED_IDENTIFIER_FIXUP_580.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_591 = _RESERVED_IDENTIFIER_FIXUP_719.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_731;
    _RESERVED_IDENTIFIER_FIXUP_731.x = _RESERVED_IDENTIFIER_FIXUP_591.x;
    _RESERVED_IDENTIFIER_FIXUP_731.y = _RESERVED_IDENTIFIER_FIXUP_591.y;
    _RESERVED_IDENTIFIER_FIXUP_731.z = _RESERVED_IDENTIFIER_FIXUP_591.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_602 = _RESERVED_IDENTIFIER_FIXUP_731.xyz + _RESERVED_IDENTIFIER_FIXUP_731.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_737;
    _RESERVED_IDENTIFIER_FIXUP_737.x = _RESERVED_IDENTIFIER_FIXUP_602.x;
    _RESERVED_IDENTIFIER_FIXUP_737.y = _RESERVED_IDENTIFIER_FIXUP_602.y;
    _RESERVED_IDENTIFIER_FIXUP_737.z = _RESERVED_IDENTIFIER_FIXUP_602.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_616 = (_RESERVED_IDENTIFIER_FIXUP_725.xyz * _RESERVED_IDENTIFIER_FIXUP_542.www) + _RESERVED_IDENTIFIER_FIXUP_737.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_743;
    _RESERVED_IDENTIFIER_FIXUP_743.x = _RESERVED_IDENTIFIER_FIXUP_616.x;
    _RESERVED_IDENTIFIER_FIXUP_743.y = _RESERVED_IDENTIFIER_FIXUP_616.y;
    _RESERVED_IDENTIFIER_FIXUP_743.z = _RESERVED_IDENTIFIER_FIXUP_616.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_629 = _RESERVED_IDENTIFIER_FIXUP_743.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_749;
    _RESERVED_IDENTIFIER_FIXUP_749.x = _RESERVED_IDENTIFIER_FIXUP_629.x;
    _RESERVED_IDENTIFIER_FIXUP_749.y = _RESERVED_IDENTIFIER_FIXUP_629.y;
    _RESERVED_IDENTIFIER_FIXUP_749.z = _RESERVED_IDENTIFIER_FIXUP_629.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_749.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_704.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_321 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_655;
    if (_RESERVED_IDENTIFIER_FIXUP_294 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_655 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_294), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_321);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_655 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_321);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_655;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_556);
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
    vec2 param_1 = v2.xy;
    r1 = hdTex0(param_1);
    vec2 param_2 = v3.xy;
    r2 = hdTex1(param_2);
    vec2 param_3 = v5.xy;
    r3 = hdTex3(param_3);
    r4 = mix(r1, r2, r3.xxxx);
    r1 = mix(r4, r0, r3.yyyy);
    r0.x = (r3.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB90 = r0;
    vec3 hdB92 = r1.xyz * hdB90.xxx;
    r0.x = hdB92.x;
    r0.y = hdB92.y;
    r0.z = hdB92.z;
    vec4 hdB101 = r1;
    vec3 hdB105 = hdB101.www * v1.xyz;
    r1.x = hdB105.x;
    r1.y = hdB105.y;
    r1.z = hdB105.z;
    vec4 hdB112 = r0;
    vec3 hdB116 = hdB112.xyz * v0.xyz;
    r0.x = hdB116.x;
    r0.y = hdB116.y;
    r0.z = hdB116.z;
    vec4 hdB123 = r0;
    vec4 hdB125 = r0;
    vec3 hdB127 = hdB123.xyz + hdB125.xyz;
    r0.x = hdB127.x;
    r0.y = hdB127.y;
    r0.z = hdB127.z;
    vec4 hdB139 = r0;
    vec3 hdB141 = (r1.xyz * r3.www) + hdB139.xyz;
    r0.x = hdB141.x;
    r0.y = hdB141.y;
    r0.z = hdB141.z;
    vec4 hdB148 = r0;
    vec3 hdB165 = hdB148.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB165.x;
    r0.y = hdB165.y;
    r0.z = hdB165.z;
    vec3 hdB180 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB180.x;
    oC0.y = hdB180.y;
    oC0.z = hdB180.z;
    oC0.w = 1.0;
    bool hdB195 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB203;
    if (hdB195)
    {
        hdB203 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB203 = hdB195;
    }
    if (hdB203)
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
    bool _791 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _801;
    if (_791)
    {
        _801 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 15u) != 0u;
    }
    else
    {
        _801 = _791;
    }
    if (_801)
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
        bool _826 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _841;
        if (!_826)
        {
            _841 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 15u) != 0u;
        }
        else
        {
            _841 = _826;
        }
        if (_841)
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
