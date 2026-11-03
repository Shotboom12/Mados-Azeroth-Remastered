#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
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
float _RESERVED_IDENTIFIER_FIXUP_1543;
vec4 _RESERVED_IDENTIFIER_FIXUP_1544;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _43 = hdOverride >= 0;
    bool _62;
    if (_43)
    {
        _62 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _62 = _43;
    }
    vec4 _63;
    if (_62)
    {
        _63 = vec4(float(hdOverride));
    }
    else
    {
        _63 = value;
    }
    return _63;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _81 = hdOverride >= 0;
    bool _91;
    if (_81)
    {
        _91 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
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

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_585 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_589 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_592 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_589.x = _RESERVED_IDENTIFIER_FIXUP_592;
    vec3 _RESERVED_IDENTIFIER_FIXUP_595 = _RESERVED_IDENTIFIER_FIXUP_585.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_598 = _RESERVED_IDENTIFIER_FIXUP_595 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1543).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1252 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1252.x = _RESERVED_IDENTIFIER_FIXUP_598.x;
    _RESERVED_IDENTIFIER_FIXUP_1252.y = _RESERVED_IDENTIFIER_FIXUP_598.y;
    _RESERVED_IDENTIFIER_FIXUP_1252.z = _RESERVED_IDENTIFIER_FIXUP_598.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_609 = _RESERVED_IDENTIFIER_FIXUP_1252.xyz + _RESERVED_IDENTIFIER_FIXUP_1252.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_1252;
    _RESERVED_IDENTIFIER_FIXUP_1258.x = _RESERVED_IDENTIFIER_FIXUP_609.x;
    _RESERVED_IDENTIFIER_FIXUP_1258.y = _RESERVED_IDENTIFIER_FIXUP_609.y;
    _RESERVED_IDENTIFIER_FIXUP_1258.z = _RESERVED_IDENTIFIER_FIXUP_609.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_624 = mix(_RESERVED_IDENTIFIER_FIXUP_1258.xyz, _RESERVED_IDENTIFIER_FIXUP_595, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_589.xxx, vec3(0.0)));
    float _RESERVED_IDENTIFIER_FIXUP_626 = _RESERVED_IDENTIFIER_FIXUP_624.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_585;
    _RESERVED_IDENTIFIER_FIXUP_1264.x = _RESERVED_IDENTIFIER_FIXUP_626;
    float _RESERVED_IDENTIFIER_FIXUP_628 = _RESERVED_IDENTIFIER_FIXUP_624.y;
    _RESERVED_IDENTIFIER_FIXUP_1264.y = _RESERVED_IDENTIFIER_FIXUP_628;
    float _RESERVED_IDENTIFIER_FIXUP_630 = _RESERVED_IDENTIFIER_FIXUP_624.z;
    _RESERVED_IDENTIFIER_FIXUP_1264.z = _RESERVED_IDENTIFIER_FIXUP_630;
    float _RESERVED_IDENTIFIER_FIXUP_637 = max(abs(texcoord4.x), abs(texcoord4.y));
    _RESERVED_IDENTIFIER_FIXUP_1264.x = _RESERVED_IDENTIFIER_FIXUP_626;
    _RESERVED_IDENTIFIER_FIXUP_1264.y = _RESERVED_IDENTIFIER_FIXUP_628;
    _RESERVED_IDENTIFIER_FIXUP_1264.z = _RESERVED_IDENTIFIER_FIXUP_630;
    vec3 _RESERVED_IDENTIFIER_FIXUP_871 = _RESERVED_IDENTIFIER_FIXUP_1264.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1382 = _RESERVED_IDENTIFIER_FIXUP_1264;
    _RESERVED_IDENTIFIER_FIXUP_1382.x = _RESERVED_IDENTIFIER_FIXUP_871.x;
    _RESERVED_IDENTIFIER_FIXUP_1382.y = _RESERVED_IDENTIFIER_FIXUP_871.y;
    _RESERVED_IDENTIFIER_FIXUP_1382.z = _RESERVED_IDENTIFIER_FIXUP_871.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_921 = OptTex0( texcoord0.xyz);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_925 = hdTex1(param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1396 = _RESERVED_IDENTIFIER_FIXUP_925;
    _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_592;
    vec3 _RESERVED_IDENTIFIER_FIXUP_931 = _RESERVED_IDENTIFIER_FIXUP_921.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_934 = _RESERVED_IDENTIFIER_FIXUP_931 * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1398 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1398.x = _RESERVED_IDENTIFIER_FIXUP_934.x;
    _RESERVED_IDENTIFIER_FIXUP_1398.y = _RESERVED_IDENTIFIER_FIXUP_934.y;
    _RESERVED_IDENTIFIER_FIXUP_1398.z = _RESERVED_IDENTIFIER_FIXUP_934.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_945 = _RESERVED_IDENTIFIER_FIXUP_1398.xyz + _RESERVED_IDENTIFIER_FIXUP_1398.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1404 = _RESERVED_IDENTIFIER_FIXUP_1398;
    _RESERVED_IDENTIFIER_FIXUP_1404.x = _RESERVED_IDENTIFIER_FIXUP_945.x;
    _RESERVED_IDENTIFIER_FIXUP_1404.y = _RESERVED_IDENTIFIER_FIXUP_945.y;
    _RESERVED_IDENTIFIER_FIXUP_1404.z = _RESERVED_IDENTIFIER_FIXUP_945.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_960 = mix(_RESERVED_IDENTIFIER_FIXUP_1404.xyz, _RESERVED_IDENTIFIER_FIXUP_931, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1396.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_921;
    _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_960.x;
    _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_960.y;
    _RESERVED_IDENTIFIER_FIXUP_1410.z = _RESERVED_IDENTIFIER_FIXUP_960.z;
    _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_637;
    float _RESERVED_IDENTIFIER_FIXUP_979 = clamp((_RESERVED_IDENTIFIER_FIXUP_637 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_979;
    float _RESERVED_IDENTIFIER_FIXUP_985 = ((-_RESERVED_IDENTIFIER_FIXUP_979) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_985;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1549;
    if (_RESERVED_IDENTIFIER_FIXUP_985 != (-_RESERVED_IDENTIFIER_FIXUP_985))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_997 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_997.x;
        _RESERVED_IDENTIFIER_FIXUP_1396.z = _RESERVED_IDENTIFIER_FIXUP_997.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1007 = _RESERVED_IDENTIFIER_FIXUP_1396.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1435;
        _RESERVED_IDENTIFIER_FIXUP_1435.x = _RESERVED_IDENTIFIER_FIXUP_1007.x;
        _RESERVED_IDENTIFIER_FIXUP_1435.y = _RESERVED_IDENTIFIER_FIXUP_1007.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1017 = _RESERVED_IDENTIFIER_FIXUP_1396.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1439;
        _RESERVED_IDENTIFIER_FIXUP_1439.x = _RESERVED_IDENTIFIER_FIXUP_1017.x;
        _RESERVED_IDENTIFIER_FIXUP_1439.y = _RESERVED_IDENTIFIER_FIXUP_1017.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1027 = _RESERVED_IDENTIFIER_FIXUP_1396.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1443;
        _RESERVED_IDENTIFIER_FIXUP_1443.x = _RESERVED_IDENTIFIER_FIXUP_1027.x;
        _RESERVED_IDENTIFIER_FIXUP_1443.y = _RESERVED_IDENTIFIER_FIXUP_1027.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1037 = _RESERVED_IDENTIFIER_FIXUP_1396.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1447;
        _RESERVED_IDENTIFIER_FIXUP_1447.x = _RESERVED_IDENTIFIER_FIXUP_1037.x;
        _RESERVED_IDENTIFIER_FIXUP_1447.y = _RESERVED_IDENTIFIER_FIXUP_1037.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1045 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1045.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1045.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1051 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_1435.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1439.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1443.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1447.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1435.xy;
        float param_5 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1051.y = hdLod5(param_4, param_5).x;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1439.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1051.z = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1443.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1051.w = hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1108 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1051 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1447.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1108.x = min((_RESERVED_IDENTIFIER_FIXUP_979 * (((float((hdLod5(param_10, param_11).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1108, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_925.w);
        _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_1108;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1404.x = _RESERVED_IDENTIFIER_FIXUP_925.w;
        _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_1404;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1156 = (_RESERVED_IDENTIFIER_FIXUP_1549.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1555 = vec4(_RESERVED_IDENTIFIER_FIXUP_1156, _RESERVED_IDENTIFIER_FIXUP_1410.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1180 = _RESERVED_IDENTIFIER_FIXUP_1549.xxx * _RESERVED_IDENTIFIER_FIXUP_1555.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1518 = _RESERVED_IDENTIFIER_FIXUP_1555;
    _RESERVED_IDENTIFIER_FIXUP_1518.y = _RESERVED_IDENTIFIER_FIXUP_1180.x;
    _RESERVED_IDENTIFIER_FIXUP_1518.z = _RESERVED_IDENTIFIER_FIXUP_1180.y;
    _RESERVED_IDENTIFIER_FIXUP_1518.w = _RESERVED_IDENTIFIER_FIXUP_1180.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1194 = (_RESERVED_IDENTIFIER_FIXUP_1410.xyz * _RESERVED_IDENTIFIER_FIXUP_1518.xxx) + _RESERVED_IDENTIFIER_FIXUP_1518.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1524 = _RESERVED_IDENTIFIER_FIXUP_1410;
    _RESERVED_IDENTIFIER_FIXUP_1524.x = _RESERVED_IDENTIFIER_FIXUP_1194.x;
    _RESERVED_IDENTIFIER_FIXUP_1524.y = _RESERVED_IDENTIFIER_FIXUP_1194.y;
    _RESERVED_IDENTIFIER_FIXUP_1524.z = _RESERVED_IDENTIFIER_FIXUP_1194.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1207 = _RESERVED_IDENTIFIER_FIXUP_1524.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1530 = _RESERVED_IDENTIFIER_FIXUP_1524;
    _RESERVED_IDENTIFIER_FIXUP_1530.x = _RESERVED_IDENTIFIER_FIXUP_1207.x;
    _RESERVED_IDENTIFIER_FIXUP_1530.y = _RESERVED_IDENTIFIER_FIXUP_1207.y;
    _RESERVED_IDENTIFIER_FIXUP_1530.z = _RESERVED_IDENTIFIER_FIXUP_1207.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1530.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_451 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_460;
    if (_RESERVED_IDENTIFIER_FIXUP_451)
    {
        _RESERVED_IDENTIFIER_FIXUP_460 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_460 = _RESERVED_IDENTIFIER_FIXUP_451;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_460)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_497 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1382.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_523 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1242;
    if (_RESERVED_IDENTIFIER_FIXUP_497 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1242 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_497), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_523);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1242 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_523);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1242;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1156);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    vec4 r6 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    r1.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 hdB81 = r0.xyz * v0.xyz;
    r2.x = hdB81.x;
    r2.y = hdB81.y;
    r2.z = hdB81.z;
    vec4 hdB90 = r2;
    vec4 hdB92 = r2;
    vec3 hdB94 = hdB90.xyz + hdB92.xyz;
    r2.x = hdB94.x;
    r2.y = hdB94.y;
    r2.z = hdB94.z;
    vec4 hdB103 = r0;
    vec3 hdB112 = mix(r2.xyz, hdB103.xyz, greaterThanEqual(-r1.xxx, vec3(0.0)));
    r0.x = hdB112.x;
    r0.y = hdB112.y;
    r0.z = hdB112.z;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB155 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB155.x;
        r1.z = hdB155.y;
        vec2 hdB167 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB167.x;
        r2.y = hdB167.y;
        vec2 hdB178 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB178.x;
        r3.y = hdB178.y;
        vec2 hdB189 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB189.x;
        r4.y = hdB189.y;
        vec2 hdB200 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB200.x;
        r5.y = hdB200.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = r6.xy;
        float param_2 = r6.w;
        r6 = hdLod5(param_1, param_2);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_7 = r4.xy;
        float param_8 = r4.w;
        r4 = hdLod5(param_7, param_8);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_9 = r5.xy;
        float param_10 = r5.w;
        r5 = hdLod5(param_9, param_10);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v4.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r1.w);
    }
    else
    {
        r2.x = r1.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB334 = r0.www * v1.xyz;
    r1.y = hdB334.x;
    r1.z = hdB334.y;
    r1.w = hdB334.z;
    vec4 hdB343 = r1;
    vec3 hdB345 = r2.xxx * hdB343.yzw;
    r1.y = hdB345.x;
    r1.z = hdB345.y;
    r1.w = hdB345.z;
    vec4 hdB352 = r0;
    vec3 hdB359 = (hdB352.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB359.x;
    r0.y = hdB359.y;
    r0.z = hdB359.z;
    vec4 hdB366 = r0;
    vec3 hdB373 = hdB366.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB373.x;
    r0.y = hdB373.y;
    r0.z = hdB373.z;
    vec3 hdB388 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB388.x;
    oC0.y = hdB388.y;
    oC0.z = hdB388.z;
    oC0.w = 1.0;
    bool hdB399 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB407;
    if (hdB399)
    {
        hdB407 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB407 = hdB399;
    }
    if (hdB407)
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
    bool _1111 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1121;
    if (_1111)
    {
        _1121 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1121 = _1111;
    }
    if (_1121)
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
        bool _1146 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1161;
        if (!_1146)
        {
            _1161 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1161 = _1146;
        }
        if (_1161)
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
