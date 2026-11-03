#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_919;
vec4 _RESERVED_IDENTIFIER_FIXUP_920;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _77 = hdOverride >= 0;
    bool _87;
    if (_77)
    {
        _87 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
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
    vec2 _RESERVED_IDENTIFIER_FIXUP_417 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_776;
    _RESERVED_IDENTIFIER_FIXUP_776.x = _RESERVED_IDENTIFIER_FIXUP_417.x;
    float _RESERVED_IDENTIFIER_FIXUP_421 = _RESERVED_IDENTIFIER_FIXUP_417.y;
    _RESERVED_IDENTIFIER_FIXUP_776.y = _RESERVED_IDENTIFIER_FIXUP_421;
    vec3 _RESERVED_IDENTIFIER_FIXUP_423 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_919).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_426 = _RESERVED_IDENTIFIER_FIXUP_423 + _RESERVED_IDENTIFIER_FIXUP_423;
    vec4 _RESERVED_IDENTIFIER_FIXUP_780;
    _RESERVED_IDENTIFIER_FIXUP_780.x = _RESERVED_IDENTIFIER_FIXUP_426.x;
    _RESERVED_IDENTIFIER_FIXUP_780.y = _RESERVED_IDENTIFIER_FIXUP_426.y;
    _RESERVED_IDENTIFIER_FIXUP_780.z = _RESERVED_IDENTIFIER_FIXUP_426.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_440 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_441 = _RESERVED_IDENTIFIER_FIXUP_780.xyz * _RESERVED_IDENTIFIER_FIXUP_440;
    vec4 _RESERVED_IDENTIFIER_FIXUP_786;
    _RESERVED_IDENTIFIER_FIXUP_786.x = _RESERVED_IDENTIFIER_FIXUP_441.x;
    _RESERVED_IDENTIFIER_FIXUP_786.y = _RESERVED_IDENTIFIER_FIXUP_441.y;
    _RESERVED_IDENTIFIER_FIXUP_786.z = _RESERVED_IDENTIFIER_FIXUP_441.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_455 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_776.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_456 = mix(_RESERVED_IDENTIFIER_FIXUP_786.xyz, _RESERVED_IDENTIFIER_FIXUP_440, _RESERVED_IDENTIFIER_FIXUP_455);
    vec4 _RESERVED_IDENTIFIER_FIXUP_792;
    _RESERVED_IDENTIFIER_FIXUP_792.x = _RESERVED_IDENTIFIER_FIXUP_456.x;
    _RESERVED_IDENTIFIER_FIXUP_792.y = _RESERVED_IDENTIFIER_FIXUP_456.y;
    _RESERVED_IDENTIFIER_FIXUP_792.z = _RESERVED_IDENTIFIER_FIXUP_456.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_470 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_471 = _RESERVED_IDENTIFIER_FIXUP_780.xyz * _RESERVED_IDENTIFIER_FIXUP_470;
    vec4 _RESERVED_IDENTIFIER_FIXUP_921 = vec4(_RESERVED_IDENTIFIER_FIXUP_471.x, _RESERVED_IDENTIFIER_FIXUP_421, _RESERVED_IDENTIFIER_FIXUP_471.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_486 = mix(_RESERVED_IDENTIFIER_FIXUP_921.xzw, _RESERVED_IDENTIFIER_FIXUP_470, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_921.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_804;
    _RESERVED_IDENTIFIER_FIXUP_804.x = _RESERVED_IDENTIFIER_FIXUP_486.x;
    _RESERVED_IDENTIFIER_FIXUP_804.y = _RESERVED_IDENTIFIER_FIXUP_486.y;
    _RESERVED_IDENTIFIER_FIXUP_804.z = _RESERVED_IDENTIFIER_FIXUP_486.z;
    vec2 param_1 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_496 = hdTex2(param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_810 = _RESERVED_IDENTIFIER_FIXUP_496;
    _RESERVED_IDENTIFIER_FIXUP_810.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_810.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_810.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_922 = vec4(_RESERVED_IDENTIFIER_FIXUP_810.www * _RESERVED_IDENTIFIER_FIXUP_810.xyz, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_543 = (mix(_RESERVED_IDENTIFIER_FIXUP_792, _RESERVED_IDENTIFIER_FIXUP_804, _RESERVED_IDENTIFIER_FIXUP_496.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_922.www) + _RESERVED_IDENTIFIER_FIXUP_922.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_827;
    _RESERVED_IDENTIFIER_FIXUP_827.x = _RESERVED_IDENTIFIER_FIXUP_543.x;
    _RESERVED_IDENTIFIER_FIXUP_827.y = _RESERVED_IDENTIFIER_FIXUP_543.y;
    _RESERVED_IDENTIFIER_FIXUP_827.z = _RESERVED_IDENTIFIER_FIXUP_543.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_556 = _RESERVED_IDENTIFIER_FIXUP_827.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_833;
    _RESERVED_IDENTIFIER_FIXUP_833.x = _RESERVED_IDENTIFIER_FIXUP_556.x;
    _RESERVED_IDENTIFIER_FIXUP_833.y = _RESERVED_IDENTIFIER_FIXUP_556.y;
    _RESERVED_IDENTIFIER_FIXUP_833.z = _RESERVED_IDENTIFIER_FIXUP_556.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_571 = _RESERVED_IDENTIFIER_FIXUP_833.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_839;
    _RESERVED_IDENTIFIER_FIXUP_839.x = _RESERVED_IDENTIFIER_FIXUP_571.x;
    _RESERVED_IDENTIFIER_FIXUP_839.y = _RESERVED_IDENTIFIER_FIXUP_571.y;
    _RESERVED_IDENTIFIER_FIXUP_839.z = _RESERVED_IDENTIFIER_FIXUP_571.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_612 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_851;
    _RESERVED_IDENTIFIER_FIXUP_851.x = _RESERVED_IDENTIFIER_FIXUP_612.x;
    _RESERVED_IDENTIFIER_FIXUP_851.y = _RESERVED_IDENTIFIER_FIXUP_612.y;
    _RESERVED_IDENTIFIER_FIXUP_851.z = _RESERVED_IDENTIFIER_FIXUP_612.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_622 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_626 = _RESERVED_IDENTIFIER_FIXUP_622.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_627 = _RESERVED_IDENTIFIER_FIXUP_851.xyz * _RESERVED_IDENTIFIER_FIXUP_626;
    vec4 _RESERVED_IDENTIFIER_FIXUP_857;
    _RESERVED_IDENTIFIER_FIXUP_857.x = _RESERVED_IDENTIFIER_FIXUP_627.x;
    _RESERVED_IDENTIFIER_FIXUP_857.y = _RESERVED_IDENTIFIER_FIXUP_627.y;
    _RESERVED_IDENTIFIER_FIXUP_857.z = _RESERVED_IDENTIFIER_FIXUP_627.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_642 = mix(_RESERVED_IDENTIFIER_FIXUP_857.xyz, _RESERVED_IDENTIFIER_FIXUP_626, _RESERVED_IDENTIFIER_FIXUP_455);
    vec4 _RESERVED_IDENTIFIER_FIXUP_863 = _RESERVED_IDENTIFIER_FIXUP_622;
    _RESERVED_IDENTIFIER_FIXUP_863.x = _RESERVED_IDENTIFIER_FIXUP_642.x;
    _RESERVED_IDENTIFIER_FIXUP_863.y = _RESERVED_IDENTIFIER_FIXUP_642.y;
    _RESERVED_IDENTIFIER_FIXUP_863.z = _RESERVED_IDENTIFIER_FIXUP_642.z;
    vec2 param_2 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_652 = hdTex1(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_652.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_657 = _RESERVED_IDENTIFIER_FIXUP_851.xyz * _RESERVED_IDENTIFIER_FIXUP_656;
    vec4 _RESERVED_IDENTIFIER_FIXUP_923 = vec4(_RESERVED_IDENTIFIER_FIXUP_657.x, _RESERVED_IDENTIFIER_FIXUP_421, _RESERVED_IDENTIFIER_FIXUP_657.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_672 = mix(_RESERVED_IDENTIFIER_FIXUP_923.xzw, _RESERVED_IDENTIFIER_FIXUP_656, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_923.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_875 = _RESERVED_IDENTIFIER_FIXUP_652;
    _RESERVED_IDENTIFIER_FIXUP_875.x = _RESERVED_IDENTIFIER_FIXUP_672.x;
    _RESERVED_IDENTIFIER_FIXUP_875.y = _RESERVED_IDENTIFIER_FIXUP_672.y;
    _RESERVED_IDENTIFIER_FIXUP_875.z = _RESERVED_IDENTIFIER_FIXUP_672.z;
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_682 = hdTex2(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_687 = mix(_RESERVED_IDENTIFIER_FIXUP_863, _RESERVED_IDENTIFIER_FIXUP_875, _RESERVED_IDENTIFIER_FIXUP_682.xxxx);
    vec3 _RESERVED_IDENTIFIER_FIXUP_692 = _RESERVED_IDENTIFIER_FIXUP_687.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_881 = _RESERVED_IDENTIFIER_FIXUP_682;
    _RESERVED_IDENTIFIER_FIXUP_881.x = _RESERVED_IDENTIFIER_FIXUP_692.x;
    _RESERVED_IDENTIFIER_FIXUP_881.y = _RESERVED_IDENTIFIER_FIXUP_692.y;
    _RESERVED_IDENTIFIER_FIXUP_881.z = _RESERVED_IDENTIFIER_FIXUP_692.z;
    float _RESERVED_IDENTIFIER_FIXUP_713 = (_RESERVED_IDENTIFIER_FIXUP_682.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_924 = vec4(_RESERVED_IDENTIFIER_FIXUP_881.www * _RESERVED_IDENTIFIER_FIXUP_881.xyz, _RESERVED_IDENTIFIER_FIXUP_713);
    _RESERVED_IDENTIFIER_FIXUP_924.w = _RESERVED_IDENTIFIER_FIXUP_713;
    vec3 _RESERVED_IDENTIFIER_FIXUP_729 = (_RESERVED_IDENTIFIER_FIXUP_687.xyz * _RESERVED_IDENTIFIER_FIXUP_924.www) + _RESERVED_IDENTIFIER_FIXUP_924.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_900;
    _RESERVED_IDENTIFIER_FIXUP_900.x = _RESERVED_IDENTIFIER_FIXUP_729.x;
    _RESERVED_IDENTIFIER_FIXUP_900.y = _RESERVED_IDENTIFIER_FIXUP_729.y;
    _RESERVED_IDENTIFIER_FIXUP_900.z = _RESERVED_IDENTIFIER_FIXUP_729.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_742 = _RESERVED_IDENTIFIER_FIXUP_900.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_906;
    _RESERVED_IDENTIFIER_FIXUP_906.x = _RESERVED_IDENTIFIER_FIXUP_742.x;
    _RESERVED_IDENTIFIER_FIXUP_906.y = _RESERVED_IDENTIFIER_FIXUP_742.y;
    _RESERVED_IDENTIFIER_FIXUP_906.z = _RESERVED_IDENTIFIER_FIXUP_742.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_906.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_288 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_297;
    if (_RESERVED_IDENTIFIER_FIXUP_288)
    {
        _RESERVED_IDENTIFIER_FIXUP_297 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_297 = _RESERVED_IDENTIFIER_FIXUP_288;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_297)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_334 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_839.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_360 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_768;
    if (_RESERVED_IDENTIFIER_FIXUP_334 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_768 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_334), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_360);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_768 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_360);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_768;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_713);
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
    r2 = OptTex0( v2.xyz);
    vec3 hdB87 = r1.xyz * r2.xyz;
    r3.x = hdB87.x;
    r3.y = hdB87.y;
    r3.z = hdB87.z;
    vec4 hdB96 = r2;
    vec3 hdB105 = mix(r3.xyz, hdB96.xyz, greaterThanEqual(-r0.xxx, vec3(0.0)));
    r2.x = hdB105.x;
    r2.y = hdB105.y;
    r2.z = hdB105.z;
    vec2 param = v3.xy;
    r3 = hdTex1(param);
    vec3 hdB124 = r1.xyz * r3.xyz;
    r0.x = hdB124.x;
    r0.z = hdB124.y;
    r0.w = hdB124.z;
    vec4 hdB134 = r3;
    vec3 hdB140 = mix(r0.xzw, hdB134.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r3.x = hdB140.x;
    r3.y = hdB140.y;
    r3.z = hdB140.z;
    vec2 param_1 = v4.xy;
    r0 = hdTex2(param_1);
    r1 = mix(r2, r3, r0.xxxx);
    vec3 hdB161 = r1.www * v1.xyz;
    r0.x = hdB161.x;
    r0.y = hdB161.y;
    r0.z = hdB161.z;
    vec4 hdB168 = r0;
    vec4 hdB170 = r0;
    vec3 hdB172 = hdB168.www * hdB170.xyz;
    r0.x = hdB172.x;
    r0.y = hdB172.y;
    r0.z = hdB172.z;
    r0.w = (r0.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB188 = r0;
    vec4 hdB191 = r0;
    vec3 hdB193 = (r1.xyz * hdB188.www) + hdB191.xyz;
    r0.x = hdB193.x;
    r0.y = hdB193.y;
    r0.z = hdB193.z;
    vec4 hdB200 = r0;
    vec3 hdB207 = hdB200.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB207.x;
    r0.y = hdB207.y;
    r0.z = hdB207.z;
    vec3 hdB222 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB222.x;
    oC0.y = hdB222.y;
    oC0.z = hdB222.z;
    oC0.w = 1.0;
    bool hdB235 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB243;
    if (hdB235)
    {
        hdB243 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB243 = hdB235;
    }
    if (hdB243)
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
    bool _895 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _905;
    if (_895)
    {
        _905 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 6u) != 0u;
    }
    else
    {
        _905 = _895;
    }
    if (_905)
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
        bool _930 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _945;
        if (!_930)
        {
            _945 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 6u) != 0u;
        }
        else
        {
            _945 = _930;
        }
        if (_945)
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
