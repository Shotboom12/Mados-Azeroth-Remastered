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
float _RESERVED_IDENTIFIER_FIXUP_1565;
vec4 _RESERVED_IDENTIFIER_FIXUP_1566;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_589 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_593 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_596 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _RESERVED_IDENTIFIER_FIXUP_599 = _RESERVED_IDENTIFIER_FIXUP_589.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1575 = vec4(_RESERVED_IDENTIFIER_FIXUP_596, _RESERVED_IDENTIFIER_FIXUP_599 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1565).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_610 = _RESERVED_IDENTIFIER_FIXUP_1575.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_613 = _RESERVED_IDENTIFIER_FIXUP_610 + _RESERVED_IDENTIFIER_FIXUP_610;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1282 = _RESERVED_IDENTIFIER_FIXUP_1575;
    _RESERVED_IDENTIFIER_FIXUP_1282.y = _RESERVED_IDENTIFIER_FIXUP_613.x;
    _RESERVED_IDENTIFIER_FIXUP_1282.z = _RESERVED_IDENTIFIER_FIXUP_613.y;
    _RESERVED_IDENTIFIER_FIXUP_1282.w = _RESERVED_IDENTIFIER_FIXUP_613.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_628 = mix(_RESERVED_IDENTIFIER_FIXUP_1282.yzw, _RESERVED_IDENTIFIER_FIXUP_599, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1282.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_589;
    _RESERVED_IDENTIFIER_FIXUP_1288.x = _RESERVED_IDENTIFIER_FIXUP_628.x;
    _RESERVED_IDENTIFIER_FIXUP_1288.y = _RESERVED_IDENTIFIER_FIXUP_628.y;
    _RESERVED_IDENTIFIER_FIXUP_1288.z = _RESERVED_IDENTIFIER_FIXUP_628.z;
    float _RESERVED_IDENTIFIER_FIXUP_638 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_593.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1294 = _RESERVED_IDENTIFIER_FIXUP_593;
    _RESERVED_IDENTIFIER_FIXUP_1294.x = _RESERVED_IDENTIFIER_FIXUP_638;
    _RESERVED_IDENTIFIER_FIXUP_1294.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_638;
    vec4 _RESERVED_IDENTIFIER_FIXUP_648 = _RESERVED_IDENTIFIER_FIXUP_1288 * _RESERVED_IDENTIFIER_FIXUP_1294.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_655 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1399 = _RESERVED_IDENTIFIER_FIXUP_648;
    _RESERVED_IDENTIFIER_FIXUP_1399.x = _RESERVED_IDENTIFIER_FIXUP_648.x;
    _RESERVED_IDENTIFIER_FIXUP_1399.y = _RESERVED_IDENTIFIER_FIXUP_648.y;
    _RESERVED_IDENTIFIER_FIXUP_1399.z = _RESERVED_IDENTIFIER_FIXUP_648.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_887 = _RESERVED_IDENTIFIER_FIXUP_1399.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1405 = _RESERVED_IDENTIFIER_FIXUP_1399;
    _RESERVED_IDENTIFIER_FIXUP_1405.x = _RESERVED_IDENTIFIER_FIXUP_887.x;
    _RESERVED_IDENTIFIER_FIXUP_1405.y = _RESERVED_IDENTIFIER_FIXUP_887.y;
    _RESERVED_IDENTIFIER_FIXUP_1405.z = _RESERVED_IDENTIFIER_FIXUP_887.z;
    vec2 param_2 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_934 = hdTex0(param_2);
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_938 = hdTex1(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_944 = _RESERVED_IDENTIFIER_FIXUP_934.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1579 = vec4(_RESERVED_IDENTIFIER_FIXUP_596, _RESERVED_IDENTIFIER_FIXUP_944 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_955 = _RESERVED_IDENTIFIER_FIXUP_1579.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_958 = _RESERVED_IDENTIFIER_FIXUP_955 + _RESERVED_IDENTIFIER_FIXUP_955;
    float _RESERVED_IDENTIFIER_FIXUP_960 = _RESERVED_IDENTIFIER_FIXUP_958.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1427 = _RESERVED_IDENTIFIER_FIXUP_1579;
    _RESERVED_IDENTIFIER_FIXUP_1427.y = _RESERVED_IDENTIFIER_FIXUP_960;
    _RESERVED_IDENTIFIER_FIXUP_1427.z = _RESERVED_IDENTIFIER_FIXUP_958.y;
    _RESERVED_IDENTIFIER_FIXUP_1427.w = _RESERVED_IDENTIFIER_FIXUP_958.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_973 = mix(_RESERVED_IDENTIFIER_FIXUP_1427.yzw, _RESERVED_IDENTIFIER_FIXUP_944, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1427.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1433 = _RESERVED_IDENTIFIER_FIXUP_934;
    _RESERVED_IDENTIFIER_FIXUP_1433.x = _RESERVED_IDENTIFIER_FIXUP_973.x;
    _RESERVED_IDENTIFIER_FIXUP_1433.y = _RESERVED_IDENTIFIER_FIXUP_973.y;
    _RESERVED_IDENTIFIER_FIXUP_1433.z = _RESERVED_IDENTIFIER_FIXUP_973.z;
    float _RESERVED_IDENTIFIER_FIXUP_983 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_938.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1439 = _RESERVED_IDENTIFIER_FIXUP_938;
    _RESERVED_IDENTIFIER_FIXUP_1439.x = _RESERVED_IDENTIFIER_FIXUP_983;
    _RESERVED_IDENTIFIER_FIXUP_1439.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_983;
    vec4 _RESERVED_IDENTIFIER_FIXUP_993 = _RESERVED_IDENTIFIER_FIXUP_1433 * _RESERVED_IDENTIFIER_FIXUP_1439.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1446 = _RESERVED_IDENTIFIER_FIXUP_1439;
    _RESERVED_IDENTIFIER_FIXUP_1446.x = _RESERVED_IDENTIFIER_FIXUP_655;
    float _RESERVED_IDENTIFIER_FIXUP_1006 = clamp((_RESERVED_IDENTIFIER_FIXUP_655 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1446.x = _RESERVED_IDENTIFIER_FIXUP_1006;
    float _RESERVED_IDENTIFIER_FIXUP_1012 = ((-_RESERVED_IDENTIFIER_FIXUP_1006) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1446.y = _RESERVED_IDENTIFIER_FIXUP_1012;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1571;
    if (_RESERVED_IDENTIFIER_FIXUP_1012 != (-_RESERVED_IDENTIFIER_FIXUP_1012))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1024 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1024.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1024.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1030 = hdLod5(param_4, param_5);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1034 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1446.y = _RESERVED_IDENTIFIER_FIXUP_1034.x;
        _RESERVED_IDENTIFIER_FIXUP_1446.z = _RESERVED_IDENTIFIER_FIXUP_1034.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1044 = _RESERVED_IDENTIFIER_FIXUP_1446.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1464;
        _RESERVED_IDENTIFIER_FIXUP_1464.x = _RESERVED_IDENTIFIER_FIXUP_1044.x;
        _RESERVED_IDENTIFIER_FIXUP_1464.y = _RESERVED_IDENTIFIER_FIXUP_1044.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1051 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1055 = _RESERVED_IDENTIFIER_FIXUP_1051.y;
        _RESERVED_IDENTIFIER_FIXUP_1464.w = _RESERVED_IDENTIFIER_FIXUP_1055;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1464.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1055;
        float _RESERVED_IDENTIFIER_FIXUP_1066 = _RESERVED_IDENTIFIER_FIXUP_1030.x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1475 = _RESERVED_IDENTIFIER_FIXUP_1030;
        _RESERVED_IDENTIFIER_FIXUP_1475.x = _RESERVED_IDENTIFIER_FIXUP_1066;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1073 = _RESERVED_IDENTIFIER_FIXUP_1446.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1477;
        _RESERVED_IDENTIFIER_FIXUP_1477.x = _RESERVED_IDENTIFIER_FIXUP_1073.x;
        _RESERVED_IDENTIFIER_FIXUP_1477.y = _RESERVED_IDENTIFIER_FIXUP_1073.y;
        _RESERVED_IDENTIFIER_FIXUP_1477.w = _RESERVED_IDENTIFIER_FIXUP_1055;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1477.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1055;
        float _RESERVED_IDENTIFIER_FIXUP_1095 = _RESERVED_IDENTIFIER_FIXUP_1066 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1475.x = _RESERVED_IDENTIFIER_FIXUP_1095;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1102 = _RESERVED_IDENTIFIER_FIXUP_1446.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1490;
        _RESERVED_IDENTIFIER_FIXUP_1490.x = _RESERVED_IDENTIFIER_FIXUP_1102.x;
        _RESERVED_IDENTIFIER_FIXUP_1490.y = _RESERVED_IDENTIFIER_FIXUP_1102.y;
        _RESERVED_IDENTIFIER_FIXUP_1490.w = _RESERVED_IDENTIFIER_FIXUP_1055;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1490.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1055;
        float _RESERVED_IDENTIFIER_FIXUP_1124 = _RESERVED_IDENTIFIER_FIXUP_1095 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1475.x = _RESERVED_IDENTIFIER_FIXUP_1124;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1131 = _RESERVED_IDENTIFIER_FIXUP_1446.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1503;
        _RESERVED_IDENTIFIER_FIXUP_1503.x = _RESERVED_IDENTIFIER_FIXUP_1131.x;
        _RESERVED_IDENTIFIER_FIXUP_1503.y = _RESERVED_IDENTIFIER_FIXUP_1131.y;
        _RESERVED_IDENTIFIER_FIXUP_1503.w = _RESERVED_IDENTIFIER_FIXUP_1055;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1503.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1055;
        _RESERVED_IDENTIFIER_FIXUP_1475.x = min((_RESERVED_IDENTIFIER_FIXUP_1006 * (((_RESERVED_IDENTIFIER_FIXUP_1124 + hdLod5(param_12, param_13).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_938.w);
        _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_1475;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1571 = vec4(_RESERVED_IDENTIFIER_FIXUP_938.w, _RESERVED_IDENTIFIER_FIXUP_960, _RESERVED_IDENTIFIER_FIXUP_958.yz);
    }
    float _RESERVED_IDENTIFIER_FIXUP_1181 = (_RESERVED_IDENTIFIER_FIXUP_1571.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1581 = vec4(_RESERVED_IDENTIFIER_FIXUP_1181, _RESERVED_IDENTIFIER_FIXUP_993.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_1571.xxx * _RESERVED_IDENTIFIER_FIXUP_1581.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_1581;
    _RESERVED_IDENTIFIER_FIXUP_1540.y = _RESERVED_IDENTIFIER_FIXUP_1205.x;
    _RESERVED_IDENTIFIER_FIXUP_1540.z = _RESERVED_IDENTIFIER_FIXUP_1205.y;
    _RESERVED_IDENTIFIER_FIXUP_1540.w = _RESERVED_IDENTIFIER_FIXUP_1205.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1219 = (_RESERVED_IDENTIFIER_FIXUP_993.xyz * _RESERVED_IDENTIFIER_FIXUP_1540.xxx) + _RESERVED_IDENTIFIER_FIXUP_1540.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_993;
    _RESERVED_IDENTIFIER_FIXUP_1546.x = _RESERVED_IDENTIFIER_FIXUP_1219.x;
    _RESERVED_IDENTIFIER_FIXUP_1546.y = _RESERVED_IDENTIFIER_FIXUP_1219.y;
    _RESERVED_IDENTIFIER_FIXUP_1546.z = _RESERVED_IDENTIFIER_FIXUP_1219.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1232 = _RESERVED_IDENTIFIER_FIXUP_1546.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1552 = _RESERVED_IDENTIFIER_FIXUP_1546;
    _RESERVED_IDENTIFIER_FIXUP_1552.x = _RESERVED_IDENTIFIER_FIXUP_1232.x;
    _RESERVED_IDENTIFIER_FIXUP_1552.y = _RESERVED_IDENTIFIER_FIXUP_1232.y;
    _RESERVED_IDENTIFIER_FIXUP_1552.z = _RESERVED_IDENTIFIER_FIXUP_1232.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1552.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_457 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_466;
    if (_RESERVED_IDENTIFIER_FIXUP_457)
    {
        _RESERVED_IDENTIFIER_FIXUP_466 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_466 = _RESERVED_IDENTIFIER_FIXUP_457;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_466)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_503 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1405.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_529 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1267;
    if (_RESERVED_IDENTIFIER_FIXUP_503 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1267 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_503), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_529);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1267 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_529);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1267;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1181);
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
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    r2.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 hdB75 = r0.xyz * v0.xyz;
    r2.y = hdB75.x;
    r2.z = hdB75.y;
    r2.w = hdB75.z;
    vec4 hdB85 = r2;
    vec4 hdB87 = r2;
    vec3 hdB89 = hdB85.yzw + hdB87.yzw;
    r2.y = hdB89.x;
    r2.z = hdB89.y;
    r2.w = hdB89.z;
    vec4 hdB98 = r0;
    vec3 hdB107 = mix(r2.yzw, hdB98.xyz, greaterThanEqual(-r2.xxx, vec3(0.0)));
    r0.x = hdB107.x;
    r0.y = hdB107.y;
    r0.z = hdB107.z;
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r2.xy;
        float param_3 = r2.w;
        r2 = hdLod5(param_2, param_3);
        vec2 hdB178 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB178.x;
        r1.z = hdB178.y;
        vec2 hdB190 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB190.x;
        r3.y = hdB190.y;
        vec2 hdB198 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB198.x;
        r3.w = hdB198.y;
        vec2 param_4 = r3.xy;
        float param_5 = r3.w;
        r3 = hdLod5(param_4, param_5);
        r2.x += r3.x;
        vec2 hdB221 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB221.x;
        r3.y = hdB221.y;
        vec2 hdB228 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB228.x;
        r3.w = hdB228.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r2.x += r3.x;
        vec2 hdB251 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB251.x;
        r3.y = hdB251.y;
        vec2 hdB258 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB258.x;
        r3.w = hdB258.y;
        vec2 param_8 = r3.xy;
        float param_9 = r3.w;
        r3 = hdLod5(param_8, param_9);
        r2.x += r3.x;
        vec2 hdB281 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB281.x;
        r3.y = hdB281.y;
        vec2 hdB288 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB288.x;
        r3.w = hdB288.y;
        vec2 param_10 = r3.xy;
        float param_11 = r3.w;
        r3 = hdLod5(param_10, param_11);
        r1.y = r2.x + r3.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r1.w);
    }
    else
    {
        r2.x = r1.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB340 = r0.www * v1.xyz;
    r1.y = hdB340.x;
    r1.z = hdB340.y;
    r1.w = hdB340.z;
    vec4 hdB349 = r1;
    vec3 hdB351 = r2.xxx * hdB349.yzw;
    r1.y = hdB351.x;
    r1.z = hdB351.y;
    r1.w = hdB351.z;
    vec4 hdB358 = r0;
    vec3 hdB365 = (hdB358.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB365.x;
    r0.y = hdB365.y;
    r0.z = hdB365.z;
    vec4 hdB372 = r0;
    vec3 hdB379 = hdB372.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB379.x;
    r0.y = hdB379.y;
    r0.z = hdB379.z;
    vec3 hdB394 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB394.x;
    oC0.y = hdB394.y;
    oC0.z = hdB394.z;
    oC0.w = 1.0;
    bool hdB405 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB413;
    if (hdB405)
    {
        hdB413 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB413 = hdB405;
    }
    if (hdB413)
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
    bool _1211 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1221;
    if (_1211)
    {
        _1221 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1221 = _1211;
    }
    if (_1221)
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
        bool _1246 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1261;
        if (!_1246)
        {
            _1261 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1261 = _1246;
        }
        if (_1261)
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
