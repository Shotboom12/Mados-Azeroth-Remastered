#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];

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
float _RESERVED_IDENTIFIER_FIXUP_916;
vec4 _RESERVED_IDENTIFIER_FIXUP_917;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _43 = hdOverride >= 0;
    bool _63;
    if (_43)
    {
        _63 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
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
    bool _108 = hdOverride >= 0;
    bool _118;
    if (_108)
    {
        _118 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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

void HDActual()
{
    vec2 _RESERVED_IDENTIFIER_FIXUP_414 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_773;
    _RESERVED_IDENTIFIER_FIXUP_773.x = _RESERVED_IDENTIFIER_FIXUP_414.x;
    float _RESERVED_IDENTIFIER_FIXUP_418 = _RESERVED_IDENTIFIER_FIXUP_414.y;
    _RESERVED_IDENTIFIER_FIXUP_773.y = _RESERVED_IDENTIFIER_FIXUP_418;
    vec3 _RESERVED_IDENTIFIER_FIXUP_420 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_916).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_423 = _RESERVED_IDENTIFIER_FIXUP_420 + _RESERVED_IDENTIFIER_FIXUP_420;
    vec4 _RESERVED_IDENTIFIER_FIXUP_777;
    _RESERVED_IDENTIFIER_FIXUP_777.x = _RESERVED_IDENTIFIER_FIXUP_423.x;
    _RESERVED_IDENTIFIER_FIXUP_777.y = _RESERVED_IDENTIFIER_FIXUP_423.y;
    _RESERVED_IDENTIFIER_FIXUP_777.z = _RESERVED_IDENTIFIER_FIXUP_423.z;
    vec2 param = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_437 = hdTex0(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_438 = _RESERVED_IDENTIFIER_FIXUP_777.xyz * _RESERVED_IDENTIFIER_FIXUP_437;
    vec4 _RESERVED_IDENTIFIER_FIXUP_783;
    _RESERVED_IDENTIFIER_FIXUP_783.x = _RESERVED_IDENTIFIER_FIXUP_438.x;
    _RESERVED_IDENTIFIER_FIXUP_783.y = _RESERVED_IDENTIFIER_FIXUP_438.y;
    _RESERVED_IDENTIFIER_FIXUP_783.z = _RESERVED_IDENTIFIER_FIXUP_438.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_452 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_773.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_453 = mix(_RESERVED_IDENTIFIER_FIXUP_783.xyz, _RESERVED_IDENTIFIER_FIXUP_437, _RESERVED_IDENTIFIER_FIXUP_452);
    vec4 _RESERVED_IDENTIFIER_FIXUP_789;
    _RESERVED_IDENTIFIER_FIXUP_789.x = _RESERVED_IDENTIFIER_FIXUP_453.x;
    _RESERVED_IDENTIFIER_FIXUP_789.y = _RESERVED_IDENTIFIER_FIXUP_453.y;
    _RESERVED_IDENTIFIER_FIXUP_789.z = _RESERVED_IDENTIFIER_FIXUP_453.z;
    vec2 param_1 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_467 = hdTex1(param_1).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_468 = _RESERVED_IDENTIFIER_FIXUP_777.xyz * _RESERVED_IDENTIFIER_FIXUP_467;
    vec4 _RESERVED_IDENTIFIER_FIXUP_918 = vec4(_RESERVED_IDENTIFIER_FIXUP_468.x, _RESERVED_IDENTIFIER_FIXUP_418, _RESERVED_IDENTIFIER_FIXUP_468.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_483 = mix(_RESERVED_IDENTIFIER_FIXUP_918.xzw, _RESERVED_IDENTIFIER_FIXUP_467, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_918.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_801;
    _RESERVED_IDENTIFIER_FIXUP_801.x = _RESERVED_IDENTIFIER_FIXUP_483.x;
    _RESERVED_IDENTIFIER_FIXUP_801.y = _RESERVED_IDENTIFIER_FIXUP_483.y;
    _RESERVED_IDENTIFIER_FIXUP_801.z = _RESERVED_IDENTIFIER_FIXUP_483.z;
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_493 = hdTex2(param_2);
    vec4 _RESERVED_IDENTIFIER_FIXUP_807 = _RESERVED_IDENTIFIER_FIXUP_493;
    _RESERVED_IDENTIFIER_FIXUP_807.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_807.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_807.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_919 = vec4(_RESERVED_IDENTIFIER_FIXUP_807.www * _RESERVED_IDENTIFIER_FIXUP_807.xyz, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_540 = (mix(_RESERVED_IDENTIFIER_FIXUP_789, _RESERVED_IDENTIFIER_FIXUP_801, _RESERVED_IDENTIFIER_FIXUP_493.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_919.www) + _RESERVED_IDENTIFIER_FIXUP_919.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_824;
    _RESERVED_IDENTIFIER_FIXUP_824.x = _RESERVED_IDENTIFIER_FIXUP_540.x;
    _RESERVED_IDENTIFIER_FIXUP_824.y = _RESERVED_IDENTIFIER_FIXUP_540.y;
    _RESERVED_IDENTIFIER_FIXUP_824.z = _RESERVED_IDENTIFIER_FIXUP_540.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_553 = _RESERVED_IDENTIFIER_FIXUP_824.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_830;
    _RESERVED_IDENTIFIER_FIXUP_830.x = _RESERVED_IDENTIFIER_FIXUP_553.x;
    _RESERVED_IDENTIFIER_FIXUP_830.y = _RESERVED_IDENTIFIER_FIXUP_553.y;
    _RESERVED_IDENTIFIER_FIXUP_830.z = _RESERVED_IDENTIFIER_FIXUP_553.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_568 = _RESERVED_IDENTIFIER_FIXUP_830.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_836;
    _RESERVED_IDENTIFIER_FIXUP_836.x = _RESERVED_IDENTIFIER_FIXUP_568.x;
    _RESERVED_IDENTIFIER_FIXUP_836.y = _RESERVED_IDENTIFIER_FIXUP_568.y;
    _RESERVED_IDENTIFIER_FIXUP_836.z = _RESERVED_IDENTIFIER_FIXUP_568.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_609 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_848;
    _RESERVED_IDENTIFIER_FIXUP_848.x = _RESERVED_IDENTIFIER_FIXUP_609.x;
    _RESERVED_IDENTIFIER_FIXUP_848.y = _RESERVED_IDENTIFIER_FIXUP_609.y;
    _RESERVED_IDENTIFIER_FIXUP_848.z = _RESERVED_IDENTIFIER_FIXUP_609.z;
    vec2 param_3 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_619 = hdTex0(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_623 = _RESERVED_IDENTIFIER_FIXUP_619.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_624 = _RESERVED_IDENTIFIER_FIXUP_848.xyz * _RESERVED_IDENTIFIER_FIXUP_623;
    vec4 _RESERVED_IDENTIFIER_FIXUP_854;
    _RESERVED_IDENTIFIER_FIXUP_854.x = _RESERVED_IDENTIFIER_FIXUP_624.x;
    _RESERVED_IDENTIFIER_FIXUP_854.y = _RESERVED_IDENTIFIER_FIXUP_624.y;
    _RESERVED_IDENTIFIER_FIXUP_854.z = _RESERVED_IDENTIFIER_FIXUP_624.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_639 = mix(_RESERVED_IDENTIFIER_FIXUP_854.xyz, _RESERVED_IDENTIFIER_FIXUP_623, _RESERVED_IDENTIFIER_FIXUP_452);
    vec4 _RESERVED_IDENTIFIER_FIXUP_860 = _RESERVED_IDENTIFIER_FIXUP_619;
    _RESERVED_IDENTIFIER_FIXUP_860.x = _RESERVED_IDENTIFIER_FIXUP_639.x;
    _RESERVED_IDENTIFIER_FIXUP_860.y = _RESERVED_IDENTIFIER_FIXUP_639.y;
    _RESERVED_IDENTIFIER_FIXUP_860.z = _RESERVED_IDENTIFIER_FIXUP_639.z;
    vec2 param_4 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_649 = hdTex1(param_4);
    vec3 _RESERVED_IDENTIFIER_FIXUP_653 = _RESERVED_IDENTIFIER_FIXUP_649.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_654 = _RESERVED_IDENTIFIER_FIXUP_848.xyz * _RESERVED_IDENTIFIER_FIXUP_653;
    vec4 _RESERVED_IDENTIFIER_FIXUP_920 = vec4(_RESERVED_IDENTIFIER_FIXUP_654.x, _RESERVED_IDENTIFIER_FIXUP_418, _RESERVED_IDENTIFIER_FIXUP_654.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_669 = mix(_RESERVED_IDENTIFIER_FIXUP_920.xzw, _RESERVED_IDENTIFIER_FIXUP_653, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_920.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_872 = _RESERVED_IDENTIFIER_FIXUP_649;
    _RESERVED_IDENTIFIER_FIXUP_872.x = _RESERVED_IDENTIFIER_FIXUP_669.x;
    _RESERVED_IDENTIFIER_FIXUP_872.y = _RESERVED_IDENTIFIER_FIXUP_669.y;
    _RESERVED_IDENTIFIER_FIXUP_872.z = _RESERVED_IDENTIFIER_FIXUP_669.z;
    vec2 param_5 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_679 = hdTex2(param_5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_684 = mix(_RESERVED_IDENTIFIER_FIXUP_860, _RESERVED_IDENTIFIER_FIXUP_872, _RESERVED_IDENTIFIER_FIXUP_679.xxxx);
    vec3 _RESERVED_IDENTIFIER_FIXUP_689 = _RESERVED_IDENTIFIER_FIXUP_684.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_878 = _RESERVED_IDENTIFIER_FIXUP_679;
    _RESERVED_IDENTIFIER_FIXUP_878.x = _RESERVED_IDENTIFIER_FIXUP_689.x;
    _RESERVED_IDENTIFIER_FIXUP_878.y = _RESERVED_IDENTIFIER_FIXUP_689.y;
    _RESERVED_IDENTIFIER_FIXUP_878.z = _RESERVED_IDENTIFIER_FIXUP_689.z;
    float _RESERVED_IDENTIFIER_FIXUP_710 = (_RESERVED_IDENTIFIER_FIXUP_679.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_921 = vec4(_RESERVED_IDENTIFIER_FIXUP_878.www * _RESERVED_IDENTIFIER_FIXUP_878.xyz, _RESERVED_IDENTIFIER_FIXUP_710);
    _RESERVED_IDENTIFIER_FIXUP_921.w = _RESERVED_IDENTIFIER_FIXUP_710;
    vec3 _RESERVED_IDENTIFIER_FIXUP_726 = (_RESERVED_IDENTIFIER_FIXUP_684.xyz * _RESERVED_IDENTIFIER_FIXUP_921.www) + _RESERVED_IDENTIFIER_FIXUP_921.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_897;
    _RESERVED_IDENTIFIER_FIXUP_897.x = _RESERVED_IDENTIFIER_FIXUP_726.x;
    _RESERVED_IDENTIFIER_FIXUP_897.y = _RESERVED_IDENTIFIER_FIXUP_726.y;
    _RESERVED_IDENTIFIER_FIXUP_897.z = _RESERVED_IDENTIFIER_FIXUP_726.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_739 = _RESERVED_IDENTIFIER_FIXUP_897.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_903;
    _RESERVED_IDENTIFIER_FIXUP_903.x = _RESERVED_IDENTIFIER_FIXUP_739.x;
    _RESERVED_IDENTIFIER_FIXUP_903.y = _RESERVED_IDENTIFIER_FIXUP_739.y;
    _RESERVED_IDENTIFIER_FIXUP_903.z = _RESERVED_IDENTIFIER_FIXUP_739.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_903.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_285 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_294;
    if (_RESERVED_IDENTIFIER_FIXUP_285)
    {
        _RESERVED_IDENTIFIER_FIXUP_294 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_294 = _RESERVED_IDENTIFIER_FIXUP_285;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_294)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_331 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_836.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_357 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_765;
    if (_RESERVED_IDENTIFIER_FIXUP_331 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_765 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_331), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_357);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_765 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_357);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_765;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_710);
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
    vec2 hdB54 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r0.x = hdB54.x;
    r0.y = hdB54.y;
    vec3 hdB67 = v0.xyz + v0.xyz;
    r1.x = hdB67.x;
    r1.y = hdB67.y;
    r1.z = hdB67.z;
    vec2 param = v2.xy;
    r2 = hdTex0(param);
    vec3 hdB87 = r1.xyz * r2.xyz;
    r3.x = hdB87.x;
    r3.y = hdB87.y;
    r3.z = hdB87.z;
    vec4 hdB96 = r2;
    vec3 hdB105 = mix(r3.xyz, hdB96.xyz, greaterThanEqual(-r0.xxx, vec3(0.0)));
    r2.x = hdB105.x;
    r2.y = hdB105.y;
    r2.z = hdB105.z;
    vec2 param_1 = v3.xy;
    r3 = hdTex1(param_1);
    vec3 hdB121 = r1.xyz * r3.xyz;
    r0.x = hdB121.x;
    r0.z = hdB121.y;
    r0.w = hdB121.z;
    vec4 hdB131 = r3;
    vec3 hdB137 = mix(r0.xzw, hdB131.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r3.x = hdB137.x;
    r3.y = hdB137.y;
    r3.z = hdB137.z;
    vec2 param_2 = v4.xy;
    r0 = hdTex2(param_2);
    r1 = mix(r2, r3, r0.xxxx);
    vec3 hdB158 = r1.www * v1.xyz;
    r0.x = hdB158.x;
    r0.y = hdB158.y;
    r0.z = hdB158.z;
    vec4 hdB165 = r0;
    vec4 hdB167 = r0;
    vec3 hdB169 = hdB165.www * hdB167.xyz;
    r0.x = hdB169.x;
    r0.y = hdB169.y;
    r0.z = hdB169.z;
    r0.w = (r0.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB185 = r0;
    vec4 hdB188 = r0;
    vec3 hdB190 = (r1.xyz * hdB185.www) + hdB188.xyz;
    r0.x = hdB190.x;
    r0.y = hdB190.y;
    r0.z = hdB190.z;
    vec4 hdB197 = r0;
    vec3 hdB204 = hdB197.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB204.x;
    r0.y = hdB204.y;
    r0.z = hdB204.z;
    vec3 hdB219 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB219.x;
    oC0.y = hdB219.y;
    oC0.z = hdB219.z;
    oC0.w = 1.0;
    bool hdB232 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB240;
    if (hdB232)
    {
        hdB240 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB240 = hdB232;
    }
    if (hdB240)
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
    bool _921 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _931;
    if (_921)
    {
        _931 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 7u) != 0u;
    }
    else
    {
        _931 = _921;
    }
    if (_931)
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
        bool _956 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _971;
        if (!_956)
        {
            _971 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 7u) != 0u;
        }
        else
        {
            _971 = _956;
        }
        if (_971)
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
