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
float _RESERVED_IDENTIFIER_FIXUP_1540;
vec4 _RESERVED_IDENTIFIER_FIXUP_1541;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_582 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_586 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_589 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_586.x = _RESERVED_IDENTIFIER_FIXUP_589;
    vec3 _RESERVED_IDENTIFIER_FIXUP_592 = _RESERVED_IDENTIFIER_FIXUP_582.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_595 = _RESERVED_IDENTIFIER_FIXUP_592 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1540).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1249 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1249.x = _RESERVED_IDENTIFIER_FIXUP_595.x;
    _RESERVED_IDENTIFIER_FIXUP_1249.y = _RESERVED_IDENTIFIER_FIXUP_595.y;
    _RESERVED_IDENTIFIER_FIXUP_1249.z = _RESERVED_IDENTIFIER_FIXUP_595.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_606 = _RESERVED_IDENTIFIER_FIXUP_1249.xyz + _RESERVED_IDENTIFIER_FIXUP_1249.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1255 = _RESERVED_IDENTIFIER_FIXUP_1249;
    _RESERVED_IDENTIFIER_FIXUP_1255.x = _RESERVED_IDENTIFIER_FIXUP_606.x;
    _RESERVED_IDENTIFIER_FIXUP_1255.y = _RESERVED_IDENTIFIER_FIXUP_606.y;
    _RESERVED_IDENTIFIER_FIXUP_1255.z = _RESERVED_IDENTIFIER_FIXUP_606.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_621 = mix(_RESERVED_IDENTIFIER_FIXUP_1255.xyz, _RESERVED_IDENTIFIER_FIXUP_592, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_586.xxx, vec3(0.0)));
    float _RESERVED_IDENTIFIER_FIXUP_623 = _RESERVED_IDENTIFIER_FIXUP_621.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_582;
    _RESERVED_IDENTIFIER_FIXUP_1261.x = _RESERVED_IDENTIFIER_FIXUP_623;
    float _RESERVED_IDENTIFIER_FIXUP_625 = _RESERVED_IDENTIFIER_FIXUP_621.y;
    _RESERVED_IDENTIFIER_FIXUP_1261.y = _RESERVED_IDENTIFIER_FIXUP_625;
    float _RESERVED_IDENTIFIER_FIXUP_627 = _RESERVED_IDENTIFIER_FIXUP_621.z;
    _RESERVED_IDENTIFIER_FIXUP_1261.z = _RESERVED_IDENTIFIER_FIXUP_627;
    float _RESERVED_IDENTIFIER_FIXUP_634 = max(abs(texcoord4.x), abs(texcoord4.y));
    _RESERVED_IDENTIFIER_FIXUP_1261.x = _RESERVED_IDENTIFIER_FIXUP_623;
    _RESERVED_IDENTIFIER_FIXUP_1261.y = _RESERVED_IDENTIFIER_FIXUP_625;
    _RESERVED_IDENTIFIER_FIXUP_1261.z = _RESERVED_IDENTIFIER_FIXUP_627;
    vec3 _RESERVED_IDENTIFIER_FIXUP_868 = _RESERVED_IDENTIFIER_FIXUP_1261.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1379 = _RESERVED_IDENTIFIER_FIXUP_1261;
    _RESERVED_IDENTIFIER_FIXUP_1379.x = _RESERVED_IDENTIFIER_FIXUP_868.x;
    _RESERVED_IDENTIFIER_FIXUP_1379.y = _RESERVED_IDENTIFIER_FIXUP_868.y;
    _RESERVED_IDENTIFIER_FIXUP_1379.z = _RESERVED_IDENTIFIER_FIXUP_868.z;
    vec2 param_2 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_918 = hdTex0(param_2);
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_922 = hdTex1(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1393 = _RESERVED_IDENTIFIER_FIXUP_922;
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_589;
    vec3 _RESERVED_IDENTIFIER_FIXUP_928 = _RESERVED_IDENTIFIER_FIXUP_918.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_931 = _RESERVED_IDENTIFIER_FIXUP_928 * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1395 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1395.x = _RESERVED_IDENTIFIER_FIXUP_931.x;
    _RESERVED_IDENTIFIER_FIXUP_1395.y = _RESERVED_IDENTIFIER_FIXUP_931.y;
    _RESERVED_IDENTIFIER_FIXUP_1395.z = _RESERVED_IDENTIFIER_FIXUP_931.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_942 = _RESERVED_IDENTIFIER_FIXUP_1395.xyz + _RESERVED_IDENTIFIER_FIXUP_1395.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1401 = _RESERVED_IDENTIFIER_FIXUP_1395;
    _RESERVED_IDENTIFIER_FIXUP_1401.x = _RESERVED_IDENTIFIER_FIXUP_942.x;
    _RESERVED_IDENTIFIER_FIXUP_1401.y = _RESERVED_IDENTIFIER_FIXUP_942.y;
    _RESERVED_IDENTIFIER_FIXUP_1401.z = _RESERVED_IDENTIFIER_FIXUP_942.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_957 = mix(_RESERVED_IDENTIFIER_FIXUP_1401.xyz, _RESERVED_IDENTIFIER_FIXUP_928, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1393.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_918;
    _RESERVED_IDENTIFIER_FIXUP_1407.x = _RESERVED_IDENTIFIER_FIXUP_957.x;
    _RESERVED_IDENTIFIER_FIXUP_1407.y = _RESERVED_IDENTIFIER_FIXUP_957.y;
    _RESERVED_IDENTIFIER_FIXUP_1407.z = _RESERVED_IDENTIFIER_FIXUP_957.z;
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_634;
    float _RESERVED_IDENTIFIER_FIXUP_976 = clamp((_RESERVED_IDENTIFIER_FIXUP_634 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_976;
    float _RESERVED_IDENTIFIER_FIXUP_982 = ((-_RESERVED_IDENTIFIER_FIXUP_976) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_982;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1546;
    if (_RESERVED_IDENTIFIER_FIXUP_982 != (-_RESERVED_IDENTIFIER_FIXUP_982))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_994 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_994.x;
        _RESERVED_IDENTIFIER_FIXUP_1393.z = _RESERVED_IDENTIFIER_FIXUP_994.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1004 = _RESERVED_IDENTIFIER_FIXUP_1393.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1432;
        _RESERVED_IDENTIFIER_FIXUP_1432.x = _RESERVED_IDENTIFIER_FIXUP_1004.x;
        _RESERVED_IDENTIFIER_FIXUP_1432.y = _RESERVED_IDENTIFIER_FIXUP_1004.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1014 = _RESERVED_IDENTIFIER_FIXUP_1393.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1436;
        _RESERVED_IDENTIFIER_FIXUP_1436.x = _RESERVED_IDENTIFIER_FIXUP_1014.x;
        _RESERVED_IDENTIFIER_FIXUP_1436.y = _RESERVED_IDENTIFIER_FIXUP_1014.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1024 = _RESERVED_IDENTIFIER_FIXUP_1393.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1440;
        _RESERVED_IDENTIFIER_FIXUP_1440.x = _RESERVED_IDENTIFIER_FIXUP_1024.x;
        _RESERVED_IDENTIFIER_FIXUP_1440.y = _RESERVED_IDENTIFIER_FIXUP_1024.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1034 = _RESERVED_IDENTIFIER_FIXUP_1393.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1444;
        _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_1034.x;
        _RESERVED_IDENTIFIER_FIXUP_1444.y = _RESERVED_IDENTIFIER_FIXUP_1034.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1042 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1042.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1042.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1048 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_1432.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1436.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1440.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1444.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1432.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1048.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1436.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1048.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1440.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1048.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1105 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1048 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1444.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1105.x = min((_RESERVED_IDENTIFIER_FIXUP_976 * (((float((hdLod5(param_12, param_13).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1105, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_922.w);
        _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_1105;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1401.x = _RESERVED_IDENTIFIER_FIXUP_922.w;
        _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_1401;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1153 = (_RESERVED_IDENTIFIER_FIXUP_1546.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1552 = vec4(_RESERVED_IDENTIFIER_FIXUP_1153, _RESERVED_IDENTIFIER_FIXUP_1407.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_1546.xxx * _RESERVED_IDENTIFIER_FIXUP_1552.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1515 = _RESERVED_IDENTIFIER_FIXUP_1552;
    _RESERVED_IDENTIFIER_FIXUP_1515.y = _RESERVED_IDENTIFIER_FIXUP_1177.x;
    _RESERVED_IDENTIFIER_FIXUP_1515.z = _RESERVED_IDENTIFIER_FIXUP_1177.y;
    _RESERVED_IDENTIFIER_FIXUP_1515.w = _RESERVED_IDENTIFIER_FIXUP_1177.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1191 = (_RESERVED_IDENTIFIER_FIXUP_1407.xyz * _RESERVED_IDENTIFIER_FIXUP_1515.xxx) + _RESERVED_IDENTIFIER_FIXUP_1515.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1521 = _RESERVED_IDENTIFIER_FIXUP_1407;
    _RESERVED_IDENTIFIER_FIXUP_1521.x = _RESERVED_IDENTIFIER_FIXUP_1191.x;
    _RESERVED_IDENTIFIER_FIXUP_1521.y = _RESERVED_IDENTIFIER_FIXUP_1191.y;
    _RESERVED_IDENTIFIER_FIXUP_1521.z = _RESERVED_IDENTIFIER_FIXUP_1191.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1204 = _RESERVED_IDENTIFIER_FIXUP_1521.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1527 = _RESERVED_IDENTIFIER_FIXUP_1521;
    _RESERVED_IDENTIFIER_FIXUP_1527.x = _RESERVED_IDENTIFIER_FIXUP_1204.x;
    _RESERVED_IDENTIFIER_FIXUP_1527.y = _RESERVED_IDENTIFIER_FIXUP_1204.y;
    _RESERVED_IDENTIFIER_FIXUP_1527.z = _RESERVED_IDENTIFIER_FIXUP_1204.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1527.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_448 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_457;
    if (_RESERVED_IDENTIFIER_FIXUP_448)
    {
        _RESERVED_IDENTIFIER_FIXUP_457 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_457 = _RESERVED_IDENTIFIER_FIXUP_448;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_457)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_494 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1379.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_520 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1239;
    if (_RESERVED_IDENTIFIER_FIXUP_494 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1239 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_494), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_520);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1239 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_520);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1239;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1153);
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
    r1.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 hdB78 = r0.xyz * v0.xyz;
    r2.x = hdB78.x;
    r2.y = hdB78.y;
    r2.z = hdB78.z;
    vec4 hdB87 = r2;
    vec4 hdB89 = r2;
    vec3 hdB91 = hdB87.xyz + hdB89.xyz;
    r2.x = hdB91.x;
    r2.y = hdB91.y;
    r2.z = hdB91.z;
    vec4 hdB100 = r0;
    vec3 hdB109 = mix(r2.xyz, hdB100.xyz, greaterThanEqual(-r1.xxx, vec3(0.0)));
    r0.x = hdB109.x;
    r0.y = hdB109.y;
    r0.z = hdB109.z;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB152 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB152.x;
        r1.z = hdB152.y;
        vec2 hdB164 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB164.x;
        r2.y = hdB164.y;
        vec2 hdB175 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB175.x;
        r3.y = hdB175.y;
        vec2 hdB186 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB186.x;
        r4.y = hdB186.y;
        vec2 hdB197 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB197.x;
        r5.y = hdB197.y;
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
    vec3 hdB331 = r0.www * v1.xyz;
    r1.y = hdB331.x;
    r1.z = hdB331.y;
    r1.w = hdB331.z;
    vec4 hdB340 = r1;
    vec3 hdB342 = r2.xxx * hdB340.yzw;
    r1.y = hdB342.x;
    r1.z = hdB342.y;
    r1.w = hdB342.z;
    vec4 hdB349 = r0;
    vec3 hdB356 = (hdB349.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB356.x;
    r0.y = hdB356.y;
    r0.z = hdB356.z;
    vec4 hdB363 = r0;
    vec3 hdB370 = hdB363.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB370.x;
    r0.y = hdB370.y;
    r0.z = hdB370.z;
    vec3 hdB385 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB385.x;
    oC0.y = hdB385.y;
    oC0.z = hdB385.z;
    oC0.w = 1.0;
    bool hdB396 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB404;
    if (hdB396)
    {
        hdB404 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB404 = hdB396;
    }
    if (hdB404)
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
    bool _1137 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1147;
    if (_1137)
    {
        _1147 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1147 = _1137;
    }
    if (_1147)
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
        bool _1172 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1187;
        if (!_1172)
        {
            _1187 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1187 = _1172;
        }
        if (_1187)
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
