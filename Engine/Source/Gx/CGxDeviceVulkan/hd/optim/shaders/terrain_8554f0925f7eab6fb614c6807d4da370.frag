#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1592;
vec4 _RESERVED_IDENTIFIER_FIXUP_1593;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _46 = hdOverride >= 0;
    bool _66;
    if (_46)
    {
        _66 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
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

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _84 = hdOverride >= 0;
    bool _93;
    if (_84)
    {
        _93 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _93 = _84;
    }
    vec4 _94;
    if (_93)
    {
        _94 = vec4(float(hdOverride));
    }
    else
    {
        _94 = value;
    }
    return _94;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _112 = hdOverride >= 0;
    bool _122;
    if (_112)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _122 = _112;
    }
    vec4 _123;
    if (_122)
    {
        _123 = vec4(float(hdOverride));
    }
    else
    {
        _123 = value;
    }
    return _123;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_597 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_601 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_604 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _RESERVED_IDENTIFIER_FIXUP_607 = _RESERVED_IDENTIFIER_FIXUP_597.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1602 = vec4(_RESERVED_IDENTIFIER_FIXUP_604, _RESERVED_IDENTIFIER_FIXUP_607 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1592).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_618 = _RESERVED_IDENTIFIER_FIXUP_1602.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_621 = _RESERVED_IDENTIFIER_FIXUP_618 + _RESERVED_IDENTIFIER_FIXUP_618;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1297 = _RESERVED_IDENTIFIER_FIXUP_1602;
    _RESERVED_IDENTIFIER_FIXUP_1297.y = _RESERVED_IDENTIFIER_FIXUP_621.x;
    _RESERVED_IDENTIFIER_FIXUP_1297.z = _RESERVED_IDENTIFIER_FIXUP_621.y;
    _RESERVED_IDENTIFIER_FIXUP_1297.w = _RESERVED_IDENTIFIER_FIXUP_621.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_636 = mix(_RESERVED_IDENTIFIER_FIXUP_1297.yzw, _RESERVED_IDENTIFIER_FIXUP_607, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1297.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1303 = _RESERVED_IDENTIFIER_FIXUP_597;
    _RESERVED_IDENTIFIER_FIXUP_1303.x = _RESERVED_IDENTIFIER_FIXUP_636.x;
    _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_636.y;
    _RESERVED_IDENTIFIER_FIXUP_1303.z = _RESERVED_IDENTIFIER_FIXUP_636.z;
    float _RESERVED_IDENTIFIER_FIXUP_646 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_601.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_601;
    _RESERVED_IDENTIFIER_FIXUP_1309.x = _RESERVED_IDENTIFIER_FIXUP_646;
    _RESERVED_IDENTIFIER_FIXUP_1309.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_646;
    vec4 _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_1303 * _RESERVED_IDENTIFIER_FIXUP_1309.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_663 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_656;
    _RESERVED_IDENTIFIER_FIXUP_1420.x = _RESERVED_IDENTIFIER_FIXUP_656.x;
    _RESERVED_IDENTIFIER_FIXUP_1420.y = _RESERVED_IDENTIFIER_FIXUP_656.y;
    _RESERVED_IDENTIFIER_FIXUP_1420.z = _RESERVED_IDENTIFIER_FIXUP_656.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_897 = _RESERVED_IDENTIFIER_FIXUP_1420.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1426 = _RESERVED_IDENTIFIER_FIXUP_1420;
    _RESERVED_IDENTIFIER_FIXUP_1426.x = _RESERVED_IDENTIFIER_FIXUP_897.x;
    _RESERVED_IDENTIFIER_FIXUP_1426.y = _RESERVED_IDENTIFIER_FIXUP_897.y;
    _RESERVED_IDENTIFIER_FIXUP_1426.z = _RESERVED_IDENTIFIER_FIXUP_897.z;
    vec2 param_2 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_947 = hdTex0(param_2);
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_951 = hdTex1(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_957 = _RESERVED_IDENTIFIER_FIXUP_947.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1606 = vec4(_RESERVED_IDENTIFIER_FIXUP_604, _RESERVED_IDENTIFIER_FIXUP_957 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_968 = _RESERVED_IDENTIFIER_FIXUP_1606.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_971 = _RESERVED_IDENTIFIER_FIXUP_968 + _RESERVED_IDENTIFIER_FIXUP_968;
    float _RESERVED_IDENTIFIER_FIXUP_973 = _RESERVED_IDENTIFIER_FIXUP_971.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1448 = _RESERVED_IDENTIFIER_FIXUP_1606;
    _RESERVED_IDENTIFIER_FIXUP_1448.y = _RESERVED_IDENTIFIER_FIXUP_973;
    _RESERVED_IDENTIFIER_FIXUP_1448.z = _RESERVED_IDENTIFIER_FIXUP_971.y;
    _RESERVED_IDENTIFIER_FIXUP_1448.w = _RESERVED_IDENTIFIER_FIXUP_971.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_986 = mix(_RESERVED_IDENTIFIER_FIXUP_1448.yzw, _RESERVED_IDENTIFIER_FIXUP_957, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1448.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1454 = _RESERVED_IDENTIFIER_FIXUP_947;
    _RESERVED_IDENTIFIER_FIXUP_1454.x = _RESERVED_IDENTIFIER_FIXUP_986.x;
    _RESERVED_IDENTIFIER_FIXUP_1454.y = _RESERVED_IDENTIFIER_FIXUP_986.y;
    _RESERVED_IDENTIFIER_FIXUP_1454.z = _RESERVED_IDENTIFIER_FIXUP_986.z;
    float _RESERVED_IDENTIFIER_FIXUP_996 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_951.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1460 = _RESERVED_IDENTIFIER_FIXUP_951;
    _RESERVED_IDENTIFIER_FIXUP_1460.x = _RESERVED_IDENTIFIER_FIXUP_996;
    _RESERVED_IDENTIFIER_FIXUP_1460.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_996;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1006 = _RESERVED_IDENTIFIER_FIXUP_1454 * _RESERVED_IDENTIFIER_FIXUP_1460.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1467 = _RESERVED_IDENTIFIER_FIXUP_1460;
    _RESERVED_IDENTIFIER_FIXUP_1467.x = _RESERVED_IDENTIFIER_FIXUP_663;
    float _RESERVED_IDENTIFIER_FIXUP_1019 = clamp((_RESERVED_IDENTIFIER_FIXUP_663 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1467.x = _RESERVED_IDENTIFIER_FIXUP_1019;
    float _RESERVED_IDENTIFIER_FIXUP_1025 = ((-_RESERVED_IDENTIFIER_FIXUP_1019) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1467.y = _RESERVED_IDENTIFIER_FIXUP_1025;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1598;
    if (_RESERVED_IDENTIFIER_FIXUP_1025 != (-_RESERVED_IDENTIFIER_FIXUP_1025))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1037 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1467.y = _RESERVED_IDENTIFIER_FIXUP_1037.x;
        _RESERVED_IDENTIFIER_FIXUP_1467.z = _RESERVED_IDENTIFIER_FIXUP_1037.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1047 = _RESERVED_IDENTIFIER_FIXUP_1467.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1484;
        _RESERVED_IDENTIFIER_FIXUP_1484.x = _RESERVED_IDENTIFIER_FIXUP_1047.x;
        _RESERVED_IDENTIFIER_FIXUP_1484.y = _RESERVED_IDENTIFIER_FIXUP_1047.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1057 = _RESERVED_IDENTIFIER_FIXUP_1467.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1488;
        _RESERVED_IDENTIFIER_FIXUP_1488.x = _RESERVED_IDENTIFIER_FIXUP_1057.x;
        _RESERVED_IDENTIFIER_FIXUP_1488.y = _RESERVED_IDENTIFIER_FIXUP_1057.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1067 = _RESERVED_IDENTIFIER_FIXUP_1467.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1492;
        _RESERVED_IDENTIFIER_FIXUP_1492.x = _RESERVED_IDENTIFIER_FIXUP_1067.x;
        _RESERVED_IDENTIFIER_FIXUP_1492.y = _RESERVED_IDENTIFIER_FIXUP_1067.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1077 = _RESERVED_IDENTIFIER_FIXUP_1467.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1496;
        _RESERVED_IDENTIFIER_FIXUP_1496.x = _RESERVED_IDENTIFIER_FIXUP_1077.x;
        _RESERVED_IDENTIFIER_FIXUP_1496.y = _RESERVED_IDENTIFIER_FIXUP_1077.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1085 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1085.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1085.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1091 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_1484.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1488.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1492.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1496.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1484.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1091.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1488.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1091.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1492.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1091.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1148 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1091 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1496.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1148.x = min((_RESERVED_IDENTIFIER_FIXUP_1019 * (((float((hdLod5(param_12, param_13).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1148, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_951.w);
        _RESERVED_IDENTIFIER_FIXUP_1598 = _RESERVED_IDENTIFIER_FIXUP_1148;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1598 = vec4(_RESERVED_IDENTIFIER_FIXUP_951.w, _RESERVED_IDENTIFIER_FIXUP_973, _RESERVED_IDENTIFIER_FIXUP_971.yz);
    }
    float _RESERVED_IDENTIFIER_FIXUP_1196 = (_RESERVED_IDENTIFIER_FIXUP_1598.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1608 = vec4(_RESERVED_IDENTIFIER_FIXUP_1196, _RESERVED_IDENTIFIER_FIXUP_1006.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1220 = _RESERVED_IDENTIFIER_FIXUP_1598.xxx * _RESERVED_IDENTIFIER_FIXUP_1608.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1567 = _RESERVED_IDENTIFIER_FIXUP_1608;
    _RESERVED_IDENTIFIER_FIXUP_1567.y = _RESERVED_IDENTIFIER_FIXUP_1220.x;
    _RESERVED_IDENTIFIER_FIXUP_1567.z = _RESERVED_IDENTIFIER_FIXUP_1220.y;
    _RESERVED_IDENTIFIER_FIXUP_1567.w = _RESERVED_IDENTIFIER_FIXUP_1220.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1234 = (_RESERVED_IDENTIFIER_FIXUP_1006.xyz * _RESERVED_IDENTIFIER_FIXUP_1567.xxx) + _RESERVED_IDENTIFIER_FIXUP_1567.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1573 = _RESERVED_IDENTIFIER_FIXUP_1006;
    _RESERVED_IDENTIFIER_FIXUP_1573.x = _RESERVED_IDENTIFIER_FIXUP_1234.x;
    _RESERVED_IDENTIFIER_FIXUP_1573.y = _RESERVED_IDENTIFIER_FIXUP_1234.y;
    _RESERVED_IDENTIFIER_FIXUP_1573.z = _RESERVED_IDENTIFIER_FIXUP_1234.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1247 = _RESERVED_IDENTIFIER_FIXUP_1573.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1579 = _RESERVED_IDENTIFIER_FIXUP_1573;
    _RESERVED_IDENTIFIER_FIXUP_1579.x = _RESERVED_IDENTIFIER_FIXUP_1247.x;
    _RESERVED_IDENTIFIER_FIXUP_1579.y = _RESERVED_IDENTIFIER_FIXUP_1247.y;
    _RESERVED_IDENTIFIER_FIXUP_1579.z = _RESERVED_IDENTIFIER_FIXUP_1247.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1579.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_463 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_472;
    if (_RESERVED_IDENTIFIER_FIXUP_463)
    {
        _RESERVED_IDENTIFIER_FIXUP_472 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_472 = _RESERVED_IDENTIFIER_FIXUP_463;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_472)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_509 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1426.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_535 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1282;
    if (_RESERVED_IDENTIFIER_FIXUP_509 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1282 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_509), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_535);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1282 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_535);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1282;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1196);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    r2.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 hdB78 = r0.xyz * v0.xyz;
    r2.y = hdB78.x;
    r2.z = hdB78.y;
    r2.w = hdB78.z;
    vec4 hdB88 = r2;
    vec4 hdB90 = r2;
    vec3 hdB92 = hdB88.yzw + hdB90.yzw;
    r2.y = hdB92.x;
    r2.z = hdB92.y;
    r2.w = hdB92.z;
    vec4 hdB101 = r0;
    vec3 hdB110 = mix(r2.yzw, hdB101.xyz, greaterThanEqual(-r2.xxx, vec3(0.0)));
    r0.x = hdB110.x;
    r0.y = hdB110.y;
    r0.z = hdB110.z;
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB168 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB168.x;
        r1.z = hdB168.y;
        vec2 hdB180 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB180.x;
        r2.y = hdB180.y;
        vec2 hdB191 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB191.x;
        r3.y = hdB191.y;
        vec2 hdB202 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB202.x;
        r4.y = hdB202.y;
        vec2 hdB213 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB213.x;
        r5.y = hdB213.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r6.xy;
        float param_3 = r6.w;
        r6 = hdLod5(param_2, param_3);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_8 = r4.xy;
        float param_9 = r4.w;
        r4 = hdLod5(param_8, param_9);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_10 = r5.xy;
        float param_11 = r5.w;
        r5 = hdLod5(param_10, param_11);
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
    vec3 hdB346 = r0.www * v1.xyz;
    r1.y = hdB346.x;
    r1.z = hdB346.y;
    r1.w = hdB346.z;
    vec4 hdB355 = r1;
    vec3 hdB357 = r2.xxx * hdB355.yzw;
    r1.y = hdB357.x;
    r1.z = hdB357.y;
    r1.w = hdB357.z;
    vec4 hdB364 = r0;
    vec3 hdB371 = (hdB364.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB371.x;
    r0.y = hdB371.y;
    r0.z = hdB371.z;
    vec4 hdB378 = r0;
    vec3 hdB385 = hdB378.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB385.x;
    r0.y = hdB385.y;
    r0.z = hdB385.z;
    vec3 hdB400 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB400.x;
    oC0.y = hdB400.y;
    oC0.z = hdB400.z;
    oC0.w = 1.0;
    bool hdB411 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB419;
    if (hdB411)
    {
        hdB419 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB419 = hdB411;
    }
    if (hdB419)
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
    bool _1179 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1189;
    if (_1179)
    {
        _1189 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1189 = _1179;
    }
    if (_1189)
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
        bool _1214 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1229;
        if (!_1214)
        {
            _1229 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1229 = _1214;
        }
        if (_1229)
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
