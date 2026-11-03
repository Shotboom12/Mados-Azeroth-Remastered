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
float _RESERVED_IDENTIFIER_FIXUP_1595;
vec4 _RESERVED_IDENTIFIER_FIXUP_1596;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_600 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_604 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_607 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _RESERVED_IDENTIFIER_FIXUP_610 = _RESERVED_IDENTIFIER_FIXUP_600.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1605 = vec4(_RESERVED_IDENTIFIER_FIXUP_607, _RESERVED_IDENTIFIER_FIXUP_610 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1595).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_621 = _RESERVED_IDENTIFIER_FIXUP_1605.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_624 = _RESERVED_IDENTIFIER_FIXUP_621 + _RESERVED_IDENTIFIER_FIXUP_621;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1300 = _RESERVED_IDENTIFIER_FIXUP_1605;
    _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_624.x;
    _RESERVED_IDENTIFIER_FIXUP_1300.z = _RESERVED_IDENTIFIER_FIXUP_624.y;
    _RESERVED_IDENTIFIER_FIXUP_1300.w = _RESERVED_IDENTIFIER_FIXUP_624.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_639 = mix(_RESERVED_IDENTIFIER_FIXUP_1300.yzw, _RESERVED_IDENTIFIER_FIXUP_610, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1300.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1306 = _RESERVED_IDENTIFIER_FIXUP_600;
    _RESERVED_IDENTIFIER_FIXUP_1306.x = _RESERVED_IDENTIFIER_FIXUP_639.x;
    _RESERVED_IDENTIFIER_FIXUP_1306.y = _RESERVED_IDENTIFIER_FIXUP_639.y;
    _RESERVED_IDENTIFIER_FIXUP_1306.z = _RESERVED_IDENTIFIER_FIXUP_639.z;
    float _RESERVED_IDENTIFIER_FIXUP_649 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_604.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312 = _RESERVED_IDENTIFIER_FIXUP_604;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_649;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_649;
    vec4 _RESERVED_IDENTIFIER_FIXUP_659 = _RESERVED_IDENTIFIER_FIXUP_1306 * _RESERVED_IDENTIFIER_FIXUP_1312.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_666 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1423 = _RESERVED_IDENTIFIER_FIXUP_659;
    _RESERVED_IDENTIFIER_FIXUP_1423.x = _RESERVED_IDENTIFIER_FIXUP_659.x;
    _RESERVED_IDENTIFIER_FIXUP_1423.y = _RESERVED_IDENTIFIER_FIXUP_659.y;
    _RESERVED_IDENTIFIER_FIXUP_1423.z = _RESERVED_IDENTIFIER_FIXUP_659.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_900 = _RESERVED_IDENTIFIER_FIXUP_1423.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1429 = _RESERVED_IDENTIFIER_FIXUP_1423;
    _RESERVED_IDENTIFIER_FIXUP_1429.x = _RESERVED_IDENTIFIER_FIXUP_900.x;
    _RESERVED_IDENTIFIER_FIXUP_1429.y = _RESERVED_IDENTIFIER_FIXUP_900.y;
    _RESERVED_IDENTIFIER_FIXUP_1429.z = _RESERVED_IDENTIFIER_FIXUP_900.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_950 = OptTex0( texcoord0.xyz);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_954 = hdTex1(param_1);
    vec3 _RESERVED_IDENTIFIER_FIXUP_960 = _RESERVED_IDENTIFIER_FIXUP_950.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1609 = vec4(_RESERVED_IDENTIFIER_FIXUP_607, _RESERVED_IDENTIFIER_FIXUP_960 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_971 = _RESERVED_IDENTIFIER_FIXUP_1609.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_974 = _RESERVED_IDENTIFIER_FIXUP_971 + _RESERVED_IDENTIFIER_FIXUP_971;
    float _RESERVED_IDENTIFIER_FIXUP_976 = _RESERVED_IDENTIFIER_FIXUP_974.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1451 = _RESERVED_IDENTIFIER_FIXUP_1609;
    _RESERVED_IDENTIFIER_FIXUP_1451.y = _RESERVED_IDENTIFIER_FIXUP_976;
    _RESERVED_IDENTIFIER_FIXUP_1451.z = _RESERVED_IDENTIFIER_FIXUP_974.y;
    _RESERVED_IDENTIFIER_FIXUP_1451.w = _RESERVED_IDENTIFIER_FIXUP_974.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_989 = mix(_RESERVED_IDENTIFIER_FIXUP_1451.yzw, _RESERVED_IDENTIFIER_FIXUP_960, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1451.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1457 = _RESERVED_IDENTIFIER_FIXUP_950;
    _RESERVED_IDENTIFIER_FIXUP_1457.x = _RESERVED_IDENTIFIER_FIXUP_989.x;
    _RESERVED_IDENTIFIER_FIXUP_1457.y = _RESERVED_IDENTIFIER_FIXUP_989.y;
    _RESERVED_IDENTIFIER_FIXUP_1457.z = _RESERVED_IDENTIFIER_FIXUP_989.z;
    float _RESERVED_IDENTIFIER_FIXUP_999 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_954.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1463 = _RESERVED_IDENTIFIER_FIXUP_954;
    _RESERVED_IDENTIFIER_FIXUP_1463.x = _RESERVED_IDENTIFIER_FIXUP_999;
    _RESERVED_IDENTIFIER_FIXUP_1463.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_999;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1009 = _RESERVED_IDENTIFIER_FIXUP_1457 * _RESERVED_IDENTIFIER_FIXUP_1463.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1470 = _RESERVED_IDENTIFIER_FIXUP_1463;
    _RESERVED_IDENTIFIER_FIXUP_1470.x = _RESERVED_IDENTIFIER_FIXUP_666;
    float _RESERVED_IDENTIFIER_FIXUP_1022 = clamp((_RESERVED_IDENTIFIER_FIXUP_666 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1470.x = _RESERVED_IDENTIFIER_FIXUP_1022;
    float _RESERVED_IDENTIFIER_FIXUP_1028 = ((-_RESERVED_IDENTIFIER_FIXUP_1022) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1470.y = _RESERVED_IDENTIFIER_FIXUP_1028;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1601;
    if (_RESERVED_IDENTIFIER_FIXUP_1028 != (-_RESERVED_IDENTIFIER_FIXUP_1028))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1040 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1470.y = _RESERVED_IDENTIFIER_FIXUP_1040.x;
        _RESERVED_IDENTIFIER_FIXUP_1470.z = _RESERVED_IDENTIFIER_FIXUP_1040.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1050 = _RESERVED_IDENTIFIER_FIXUP_1470.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1487;
        _RESERVED_IDENTIFIER_FIXUP_1487.x = _RESERVED_IDENTIFIER_FIXUP_1050.x;
        _RESERVED_IDENTIFIER_FIXUP_1487.y = _RESERVED_IDENTIFIER_FIXUP_1050.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1060 = _RESERVED_IDENTIFIER_FIXUP_1470.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1491;
        _RESERVED_IDENTIFIER_FIXUP_1491.x = _RESERVED_IDENTIFIER_FIXUP_1060.x;
        _RESERVED_IDENTIFIER_FIXUP_1491.y = _RESERVED_IDENTIFIER_FIXUP_1060.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1070 = _RESERVED_IDENTIFIER_FIXUP_1470.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1495;
        _RESERVED_IDENTIFIER_FIXUP_1495.x = _RESERVED_IDENTIFIER_FIXUP_1070.x;
        _RESERVED_IDENTIFIER_FIXUP_1495.y = _RESERVED_IDENTIFIER_FIXUP_1070.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1080 = _RESERVED_IDENTIFIER_FIXUP_1470.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1499;
        _RESERVED_IDENTIFIER_FIXUP_1499.x = _RESERVED_IDENTIFIER_FIXUP_1080.x;
        _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_1080.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1088 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1088.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1088.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1094 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_1487.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1491.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1495.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1499.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1487.xy;
        float param_5 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1094.y = hdLod5(param_4, param_5).x;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1491.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1094.z = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1495.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1094.w = hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1151 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1094 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1499.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1151.x = min((_RESERVED_IDENTIFIER_FIXUP_1022 * (((float((hdLod5(param_10, param_11).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1151, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_954.w);
        _RESERVED_IDENTIFIER_FIXUP_1601 = _RESERVED_IDENTIFIER_FIXUP_1151;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1601 = vec4(_RESERVED_IDENTIFIER_FIXUP_954.w, _RESERVED_IDENTIFIER_FIXUP_976, _RESERVED_IDENTIFIER_FIXUP_974.yz);
    }
    float _RESERVED_IDENTIFIER_FIXUP_1199 = (_RESERVED_IDENTIFIER_FIXUP_1601.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1611 = vec4(_RESERVED_IDENTIFIER_FIXUP_1199, _RESERVED_IDENTIFIER_FIXUP_1009.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1223 = _RESERVED_IDENTIFIER_FIXUP_1601.xxx * _RESERVED_IDENTIFIER_FIXUP_1611.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1570 = _RESERVED_IDENTIFIER_FIXUP_1611;
    _RESERVED_IDENTIFIER_FIXUP_1570.y = _RESERVED_IDENTIFIER_FIXUP_1223.x;
    _RESERVED_IDENTIFIER_FIXUP_1570.z = _RESERVED_IDENTIFIER_FIXUP_1223.y;
    _RESERVED_IDENTIFIER_FIXUP_1570.w = _RESERVED_IDENTIFIER_FIXUP_1223.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1237 = (_RESERVED_IDENTIFIER_FIXUP_1009.xyz * _RESERVED_IDENTIFIER_FIXUP_1570.xxx) + _RESERVED_IDENTIFIER_FIXUP_1570.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1576 = _RESERVED_IDENTIFIER_FIXUP_1009;
    _RESERVED_IDENTIFIER_FIXUP_1576.x = _RESERVED_IDENTIFIER_FIXUP_1237.x;
    _RESERVED_IDENTIFIER_FIXUP_1576.y = _RESERVED_IDENTIFIER_FIXUP_1237.y;
    _RESERVED_IDENTIFIER_FIXUP_1576.z = _RESERVED_IDENTIFIER_FIXUP_1237.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1250 = _RESERVED_IDENTIFIER_FIXUP_1576.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1582 = _RESERVED_IDENTIFIER_FIXUP_1576;
    _RESERVED_IDENTIFIER_FIXUP_1582.x = _RESERVED_IDENTIFIER_FIXUP_1250.x;
    _RESERVED_IDENTIFIER_FIXUP_1582.y = _RESERVED_IDENTIFIER_FIXUP_1250.y;
    _RESERVED_IDENTIFIER_FIXUP_1582.z = _RESERVED_IDENTIFIER_FIXUP_1250.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1582.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_466 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_475;
    if (_RESERVED_IDENTIFIER_FIXUP_466)
    {
        _RESERVED_IDENTIFIER_FIXUP_475 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_475 = _RESERVED_IDENTIFIER_FIXUP_466;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_475)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_512 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1429.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_538 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1285;
    if (_RESERVED_IDENTIFIER_FIXUP_512 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1285 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_512), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_538);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1285 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_538);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1285;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1199);
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
    r2.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 hdB81 = r0.xyz * v0.xyz;
    r2.y = hdB81.x;
    r2.z = hdB81.y;
    r2.w = hdB81.z;
    vec4 hdB91 = r2;
    vec4 hdB93 = r2;
    vec3 hdB95 = hdB91.yzw + hdB93.yzw;
    r2.y = hdB95.x;
    r2.z = hdB95.y;
    r2.w = hdB95.z;
    vec4 hdB104 = r0;
    vec3 hdB113 = mix(r2.yzw, hdB104.xyz, greaterThanEqual(-r2.xxx, vec3(0.0)));
    r0.x = hdB113.x;
    r0.y = hdB113.y;
    r0.z = hdB113.z;
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB171 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB171.x;
        r1.z = hdB171.y;
        vec2 hdB183 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB183.x;
        r2.y = hdB183.y;
        vec2 hdB194 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB194.x;
        r3.y = hdB194.y;
        vec2 hdB205 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB205.x;
        r4.y = hdB205.y;
        vec2 hdB216 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB216.x;
        r5.y = hdB216.y;
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
    vec3 hdB349 = r0.www * v1.xyz;
    r1.y = hdB349.x;
    r1.z = hdB349.y;
    r1.w = hdB349.z;
    vec4 hdB358 = r1;
    vec3 hdB360 = r2.xxx * hdB358.yzw;
    r1.y = hdB360.x;
    r1.z = hdB360.y;
    r1.w = hdB360.z;
    vec4 hdB367 = r0;
    vec3 hdB374 = (hdB367.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB374.x;
    r0.y = hdB374.y;
    r0.z = hdB374.z;
    vec4 hdB381 = r0;
    vec3 hdB388 = hdB381.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB388.x;
    r0.y = hdB388.y;
    r0.z = hdB388.z;
    vec3 hdB403 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB403.x;
    oC0.y = hdB403.y;
    oC0.z = hdB403.z;
    oC0.w = 1.0;
    bool hdB414 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB422;
    if (hdB414)
    {
        hdB422 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB422 = hdB414;
    }
    if (hdB422)
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
    bool _1153 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1163;
    if (_1153)
    {
        _1163 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1163 = _1153;
    }
    if (_1163)
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
        bool _1188 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1203;
        if (!_1188)
        {
            _1203 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1203 = _1188;
        }
        if (_1203)
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
