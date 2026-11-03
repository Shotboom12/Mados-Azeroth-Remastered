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
float _RESERVED_IDENTIFIER_FIXUP_947;
vec4 _RESERVED_IDENTIFIER_FIXUP_948;


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
    vec2 _RESERVED_IDENTIFIER_FIXUP_426 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_800;
    _RESERVED_IDENTIFIER_FIXUP_800.x = _RESERVED_IDENTIFIER_FIXUP_426.x;
    float _RESERVED_IDENTIFIER_FIXUP_430 = _RESERVED_IDENTIFIER_FIXUP_426.y;
    _RESERVED_IDENTIFIER_FIXUP_800.y = _RESERVED_IDENTIFIER_FIXUP_430;
    vec3 _RESERVED_IDENTIFIER_FIXUP_432 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_947).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_435 = _RESERVED_IDENTIFIER_FIXUP_432 + _RESERVED_IDENTIFIER_FIXUP_432;
    vec4 _RESERVED_IDENTIFIER_FIXUP_804;
    _RESERVED_IDENTIFIER_FIXUP_804.x = _RESERVED_IDENTIFIER_FIXUP_435.x;
    _RESERVED_IDENTIFIER_FIXUP_804.y = _RESERVED_IDENTIFIER_FIXUP_435.y;
    _RESERVED_IDENTIFIER_FIXUP_804.z = _RESERVED_IDENTIFIER_FIXUP_435.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_449 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_450 = _RESERVED_IDENTIFIER_FIXUP_804.xyz * _RESERVED_IDENTIFIER_FIXUP_449;
    vec4 _RESERVED_IDENTIFIER_FIXUP_810;
    _RESERVED_IDENTIFIER_FIXUP_810.x = _RESERVED_IDENTIFIER_FIXUP_450.x;
    _RESERVED_IDENTIFIER_FIXUP_810.y = _RESERVED_IDENTIFIER_FIXUP_450.y;
    _RESERVED_IDENTIFIER_FIXUP_810.z = _RESERVED_IDENTIFIER_FIXUP_450.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_464 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_800.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_465 = mix(_RESERVED_IDENTIFIER_FIXUP_810.xyz, _RESERVED_IDENTIFIER_FIXUP_449, _RESERVED_IDENTIFIER_FIXUP_464);
    vec4 _RESERVED_IDENTIFIER_FIXUP_816;
    _RESERVED_IDENTIFIER_FIXUP_816.x = _RESERVED_IDENTIFIER_FIXUP_465.x;
    _RESERVED_IDENTIFIER_FIXUP_816.y = _RESERVED_IDENTIFIER_FIXUP_465.y;
    _RESERVED_IDENTIFIER_FIXUP_816.z = _RESERVED_IDENTIFIER_FIXUP_465.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_479 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_480 = _RESERVED_IDENTIFIER_FIXUP_804.xyz * _RESERVED_IDENTIFIER_FIXUP_479;
    vec4 _RESERVED_IDENTIFIER_FIXUP_949 = vec4(_RESERVED_IDENTIFIER_FIXUP_480.x, _RESERVED_IDENTIFIER_FIXUP_430, _RESERVED_IDENTIFIER_FIXUP_480.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_495 = mix(_RESERVED_IDENTIFIER_FIXUP_949.xzw, _RESERVED_IDENTIFIER_FIXUP_479, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_949.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_828;
    _RESERVED_IDENTIFIER_FIXUP_828.x = _RESERVED_IDENTIFIER_FIXUP_495.x;
    _RESERVED_IDENTIFIER_FIXUP_828.y = _RESERVED_IDENTIFIER_FIXUP_495.y;
    _RESERVED_IDENTIFIER_FIXUP_828.z = _RESERVED_IDENTIFIER_FIXUP_495.z;
    vec2 param_1 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_505 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_513 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_505.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_834 = _RESERVED_IDENTIFIER_FIXUP_505;
    _RESERVED_IDENTIFIER_FIXUP_834.x = _RESERVED_IDENTIFIER_FIXUP_513;
    _RESERVED_IDENTIFIER_FIXUP_834.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_513;
    vec4 _RESERVED_IDENTIFIER_FIXUP_839 = _RESERVED_IDENTIFIER_FIXUP_834;
    _RESERVED_IDENTIFIER_FIXUP_839.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_839.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_839.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_950 = vec4(_RESERVED_IDENTIFIER_FIXUP_839.www * _RESERVED_IDENTIFIER_FIXUP_839.xyz, (_RESERVED_IDENTIFIER_FIXUP_505.w * 0.300000011920928955078125) + 0.699999988079071044921875);
    vec3 _RESERVED_IDENTIFIER_FIXUP_560 = (((_RESERVED_IDENTIFIER_FIXUP_816 * _RESERVED_IDENTIFIER_FIXUP_834.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_828 * _RESERVED_IDENTIFIER_FIXUP_505.xxxx)).xyz * _RESERVED_IDENTIFIER_FIXUP_950.www) + _RESERVED_IDENTIFIER_FIXUP_950.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_854;
    _RESERVED_IDENTIFIER_FIXUP_854.x = _RESERVED_IDENTIFIER_FIXUP_560.x;
    _RESERVED_IDENTIFIER_FIXUP_854.y = _RESERVED_IDENTIFIER_FIXUP_560.y;
    _RESERVED_IDENTIFIER_FIXUP_854.z = _RESERVED_IDENTIFIER_FIXUP_560.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_573 = _RESERVED_IDENTIFIER_FIXUP_854.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_860;
    _RESERVED_IDENTIFIER_FIXUP_860.x = _RESERVED_IDENTIFIER_FIXUP_573.x;
    _RESERVED_IDENTIFIER_FIXUP_860.y = _RESERVED_IDENTIFIER_FIXUP_573.y;
    _RESERVED_IDENTIFIER_FIXUP_860.z = _RESERVED_IDENTIFIER_FIXUP_573.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_588 = _RESERVED_IDENTIFIER_FIXUP_860.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_866;
    _RESERVED_IDENTIFIER_FIXUP_866.x = _RESERVED_IDENTIFIER_FIXUP_588.x;
    _RESERVED_IDENTIFIER_FIXUP_866.y = _RESERVED_IDENTIFIER_FIXUP_588.y;
    _RESERVED_IDENTIFIER_FIXUP_866.z = _RESERVED_IDENTIFIER_FIXUP_588.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_629 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_878;
    _RESERVED_IDENTIFIER_FIXUP_878.x = _RESERVED_IDENTIFIER_FIXUP_629.x;
    _RESERVED_IDENTIFIER_FIXUP_878.y = _RESERVED_IDENTIFIER_FIXUP_629.y;
    _RESERVED_IDENTIFIER_FIXUP_878.z = _RESERVED_IDENTIFIER_FIXUP_629.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_639 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_643 = _RESERVED_IDENTIFIER_FIXUP_639.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_644 = _RESERVED_IDENTIFIER_FIXUP_878.xyz * _RESERVED_IDENTIFIER_FIXUP_643;
    vec4 _RESERVED_IDENTIFIER_FIXUP_884;
    _RESERVED_IDENTIFIER_FIXUP_884.x = _RESERVED_IDENTIFIER_FIXUP_644.x;
    _RESERVED_IDENTIFIER_FIXUP_884.y = _RESERVED_IDENTIFIER_FIXUP_644.y;
    _RESERVED_IDENTIFIER_FIXUP_884.z = _RESERVED_IDENTIFIER_FIXUP_644.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_659 = mix(_RESERVED_IDENTIFIER_FIXUP_884.xyz, _RESERVED_IDENTIFIER_FIXUP_643, _RESERVED_IDENTIFIER_FIXUP_464);
    vec4 _RESERVED_IDENTIFIER_FIXUP_890 = _RESERVED_IDENTIFIER_FIXUP_639;
    _RESERVED_IDENTIFIER_FIXUP_890.x = _RESERVED_IDENTIFIER_FIXUP_659.x;
    _RESERVED_IDENTIFIER_FIXUP_890.y = _RESERVED_IDENTIFIER_FIXUP_659.y;
    _RESERVED_IDENTIFIER_FIXUP_890.z = _RESERVED_IDENTIFIER_FIXUP_659.z;
    vec2 param_2 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_669 = hdTex1(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_673 = _RESERVED_IDENTIFIER_FIXUP_669.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_674 = _RESERVED_IDENTIFIER_FIXUP_878.xyz * _RESERVED_IDENTIFIER_FIXUP_673;
    vec4 _RESERVED_IDENTIFIER_FIXUP_951 = vec4(_RESERVED_IDENTIFIER_FIXUP_674.x, _RESERVED_IDENTIFIER_FIXUP_430, _RESERVED_IDENTIFIER_FIXUP_674.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_689 = mix(_RESERVED_IDENTIFIER_FIXUP_951.xzw, _RESERVED_IDENTIFIER_FIXUP_673, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_951.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_902 = _RESERVED_IDENTIFIER_FIXUP_669;
    _RESERVED_IDENTIFIER_FIXUP_902.x = _RESERVED_IDENTIFIER_FIXUP_689.x;
    _RESERVED_IDENTIFIER_FIXUP_902.y = _RESERVED_IDENTIFIER_FIXUP_689.y;
    _RESERVED_IDENTIFIER_FIXUP_902.z = _RESERVED_IDENTIFIER_FIXUP_689.z;
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_699 = hdTex2(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_707 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_699.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_908 = _RESERVED_IDENTIFIER_FIXUP_699;
    _RESERVED_IDENTIFIER_FIXUP_908.x = _RESERVED_IDENTIFIER_FIXUP_707;
    _RESERVED_IDENTIFIER_FIXUP_908.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_707;
    vec4 _RESERVED_IDENTIFIER_FIXUP_719 = (_RESERVED_IDENTIFIER_FIXUP_890 * _RESERVED_IDENTIFIER_FIXUP_908.xxxx) + (_RESERVED_IDENTIFIER_FIXUP_902 * _RESERVED_IDENTIFIER_FIXUP_699.xxxx);
    vec3 _RESERVED_IDENTIFIER_FIXUP_724 = _RESERVED_IDENTIFIER_FIXUP_719.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_913 = _RESERVED_IDENTIFIER_FIXUP_908;
    _RESERVED_IDENTIFIER_FIXUP_913.x = _RESERVED_IDENTIFIER_FIXUP_724.x;
    _RESERVED_IDENTIFIER_FIXUP_913.y = _RESERVED_IDENTIFIER_FIXUP_724.y;
    _RESERVED_IDENTIFIER_FIXUP_913.z = _RESERVED_IDENTIFIER_FIXUP_724.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_952 = vec4(_RESERVED_IDENTIFIER_FIXUP_913.www * _RESERVED_IDENTIFIER_FIXUP_913.xyz, (_RESERVED_IDENTIFIER_FIXUP_699.w * 0.300000011920928955078125) + 0.699999988079071044921875);
    vec3 _RESERVED_IDENTIFIER_FIXUP_754 = (_RESERVED_IDENTIFIER_FIXUP_719.xyz * _RESERVED_IDENTIFIER_FIXUP_952.www) + _RESERVED_IDENTIFIER_FIXUP_952.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_928;
    _RESERVED_IDENTIFIER_FIXUP_928.x = _RESERVED_IDENTIFIER_FIXUP_754.x;
    _RESERVED_IDENTIFIER_FIXUP_928.y = _RESERVED_IDENTIFIER_FIXUP_754.y;
    _RESERVED_IDENTIFIER_FIXUP_928.z = _RESERVED_IDENTIFIER_FIXUP_754.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_767 = _RESERVED_IDENTIFIER_FIXUP_928.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_934;
    _RESERVED_IDENTIFIER_FIXUP_934.x = _RESERVED_IDENTIFIER_FIXUP_767.x;
    _RESERVED_IDENTIFIER_FIXUP_934.y = _RESERVED_IDENTIFIER_FIXUP_767.y;
    _RESERVED_IDENTIFIER_FIXUP_934.z = _RESERVED_IDENTIFIER_FIXUP_767.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_934.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_297 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_306;
    if (_RESERVED_IDENTIFIER_FIXUP_297)
    {
        _RESERVED_IDENTIFIER_FIXUP_306 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_306 = _RESERVED_IDENTIFIER_FIXUP_297;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_306)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_343 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_866.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_369 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_793;
    if (_RESERVED_IDENTIFIER_FIXUP_343 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_793 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_343), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_369);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_793 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_369);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_793;
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
    r1 = r3 * r0.xxxx;
    r0.x = clamp(dot(r0.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    r1 = (r2 * r0.xxxx) + r1;
    vec3 hdB178 = r1.www * v1.xyz;
    r0.x = hdB178.x;
    r0.y = hdB178.y;
    r0.z = hdB178.z;
    vec4 hdB185 = r0;
    vec4 hdB187 = r0;
    vec3 hdB189 = hdB185.www * hdB187.xyz;
    r0.x = hdB189.x;
    r0.y = hdB189.y;
    r0.z = hdB189.z;
    r0.w = (r0.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB205 = r0;
    vec4 hdB208 = r0;
    vec3 hdB210 = (r1.xyz * hdB205.www) + hdB208.xyz;
    r0.x = hdB210.x;
    r0.y = hdB210.y;
    r0.z = hdB210.z;
    vec4 hdB217 = r0;
    vec3 hdB224 = hdB217.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB224.x;
    r0.y = hdB224.y;
    r0.z = hdB224.z;
    vec3 hdB239 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB239.x;
    oC0.y = hdB239.y;
    oC0.z = hdB239.z;
    oC0.w = 1.0;
    bool hdB251 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB259;
    if (hdB251)
    {
        hdB259 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB259 = hdB251;
    }
    if (hdB259)
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
    bool _942 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _952;
    if (_942)
    {
        _952 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 6u) != 0u;
    }
    else
    {
        _952 = _942;
    }
    if (_952)
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
        bool _977 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _992;
        if (!_977)
        {
            _992 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 6u) != 0u;
        }
        else
        {
            _992 = _977;
        }
        if (_992)
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
