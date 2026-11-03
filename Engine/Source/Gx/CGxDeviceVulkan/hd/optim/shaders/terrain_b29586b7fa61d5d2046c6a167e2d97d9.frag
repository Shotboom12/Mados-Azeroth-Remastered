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
float _RESERVED_IDENTIFIER_FIXUP_1513;
vec4 _RESERVED_IDENTIFIER_FIXUP_1514;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_574 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_578 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_581 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_578.x = _RESERVED_IDENTIFIER_FIXUP_581;
    vec3 _RESERVED_IDENTIFIER_FIXUP_584 = _RESERVED_IDENTIFIER_FIXUP_574.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_587 = _RESERVED_IDENTIFIER_FIXUP_584 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1513).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1234 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1234.x = _RESERVED_IDENTIFIER_FIXUP_587.x;
    _RESERVED_IDENTIFIER_FIXUP_1234.y = _RESERVED_IDENTIFIER_FIXUP_587.y;
    _RESERVED_IDENTIFIER_FIXUP_1234.z = _RESERVED_IDENTIFIER_FIXUP_587.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_598 = _RESERVED_IDENTIFIER_FIXUP_1234.xyz + _RESERVED_IDENTIFIER_FIXUP_1234.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1240 = _RESERVED_IDENTIFIER_FIXUP_1234;
    _RESERVED_IDENTIFIER_FIXUP_1240.x = _RESERVED_IDENTIFIER_FIXUP_598.x;
    _RESERVED_IDENTIFIER_FIXUP_1240.y = _RESERVED_IDENTIFIER_FIXUP_598.y;
    _RESERVED_IDENTIFIER_FIXUP_1240.z = _RESERVED_IDENTIFIER_FIXUP_598.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_613 = mix(_RESERVED_IDENTIFIER_FIXUP_1240.xyz, _RESERVED_IDENTIFIER_FIXUP_584, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_578.xxx, vec3(0.0)));
    float _RESERVED_IDENTIFIER_FIXUP_615 = _RESERVED_IDENTIFIER_FIXUP_613.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1246 = _RESERVED_IDENTIFIER_FIXUP_574;
    _RESERVED_IDENTIFIER_FIXUP_1246.x = _RESERVED_IDENTIFIER_FIXUP_615;
    float _RESERVED_IDENTIFIER_FIXUP_617 = _RESERVED_IDENTIFIER_FIXUP_613.y;
    _RESERVED_IDENTIFIER_FIXUP_1246.y = _RESERVED_IDENTIFIER_FIXUP_617;
    float _RESERVED_IDENTIFIER_FIXUP_619 = _RESERVED_IDENTIFIER_FIXUP_613.z;
    _RESERVED_IDENTIFIER_FIXUP_1246.z = _RESERVED_IDENTIFIER_FIXUP_619;
    float _RESERVED_IDENTIFIER_FIXUP_626 = max(abs(texcoord4.x), abs(texcoord4.y));
    _RESERVED_IDENTIFIER_FIXUP_1246.x = _RESERVED_IDENTIFIER_FIXUP_615;
    _RESERVED_IDENTIFIER_FIXUP_1246.y = _RESERVED_IDENTIFIER_FIXUP_617;
    _RESERVED_IDENTIFIER_FIXUP_1246.z = _RESERVED_IDENTIFIER_FIXUP_619;
    vec3 _RESERVED_IDENTIFIER_FIXUP_858 = _RESERVED_IDENTIFIER_FIXUP_1246.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1358 = _RESERVED_IDENTIFIER_FIXUP_1246;
    _RESERVED_IDENTIFIER_FIXUP_1358.x = _RESERVED_IDENTIFIER_FIXUP_858.x;
    _RESERVED_IDENTIFIER_FIXUP_1358.y = _RESERVED_IDENTIFIER_FIXUP_858.y;
    _RESERVED_IDENTIFIER_FIXUP_1358.z = _RESERVED_IDENTIFIER_FIXUP_858.z;
    vec2 param_2 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_905 = hdTex0(param_2);
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_909 = hdTex1(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1372 = _RESERVED_IDENTIFIER_FIXUP_909;
    _RESERVED_IDENTIFIER_FIXUP_1372.x = _RESERVED_IDENTIFIER_FIXUP_581;
    vec3 _RESERVED_IDENTIFIER_FIXUP_915 = _RESERVED_IDENTIFIER_FIXUP_905.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_918 = _RESERVED_IDENTIFIER_FIXUP_915 * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1374 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1374.x = _RESERVED_IDENTIFIER_FIXUP_918.x;
    _RESERVED_IDENTIFIER_FIXUP_1374.y = _RESERVED_IDENTIFIER_FIXUP_918.y;
    _RESERVED_IDENTIFIER_FIXUP_1374.z = _RESERVED_IDENTIFIER_FIXUP_918.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_929 = _RESERVED_IDENTIFIER_FIXUP_1374.xyz + _RESERVED_IDENTIFIER_FIXUP_1374.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1380 = _RESERVED_IDENTIFIER_FIXUP_1374;
    _RESERVED_IDENTIFIER_FIXUP_1380.x = _RESERVED_IDENTIFIER_FIXUP_929.x;
    _RESERVED_IDENTIFIER_FIXUP_1380.y = _RESERVED_IDENTIFIER_FIXUP_929.y;
    _RESERVED_IDENTIFIER_FIXUP_1380.z = _RESERVED_IDENTIFIER_FIXUP_929.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_944 = mix(_RESERVED_IDENTIFIER_FIXUP_1380.xyz, _RESERVED_IDENTIFIER_FIXUP_915, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1372.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1386 = _RESERVED_IDENTIFIER_FIXUP_905;
    _RESERVED_IDENTIFIER_FIXUP_1386.x = _RESERVED_IDENTIFIER_FIXUP_944.x;
    _RESERVED_IDENTIFIER_FIXUP_1386.y = _RESERVED_IDENTIFIER_FIXUP_944.y;
    _RESERVED_IDENTIFIER_FIXUP_1386.z = _RESERVED_IDENTIFIER_FIXUP_944.z;
    _RESERVED_IDENTIFIER_FIXUP_1372.x = _RESERVED_IDENTIFIER_FIXUP_626;
    float _RESERVED_IDENTIFIER_FIXUP_963 = clamp((_RESERVED_IDENTIFIER_FIXUP_626 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1372.x = _RESERVED_IDENTIFIER_FIXUP_963;
    float _RESERVED_IDENTIFIER_FIXUP_969 = ((-_RESERVED_IDENTIFIER_FIXUP_963) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1372.y = _RESERVED_IDENTIFIER_FIXUP_969;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1519;
    if (_RESERVED_IDENTIFIER_FIXUP_969 != (-_RESERVED_IDENTIFIER_FIXUP_969))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_981 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_981.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_981.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_987 = hdLod5(param_4, param_5);
        vec2 _RESERVED_IDENTIFIER_FIXUP_991 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1372.y = _RESERVED_IDENTIFIER_FIXUP_991.x;
        _RESERVED_IDENTIFIER_FIXUP_1372.z = _RESERVED_IDENTIFIER_FIXUP_991.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1001 = _RESERVED_IDENTIFIER_FIXUP_1372.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1412;
        _RESERVED_IDENTIFIER_FIXUP_1412.x = _RESERVED_IDENTIFIER_FIXUP_1001.x;
        _RESERVED_IDENTIFIER_FIXUP_1412.y = _RESERVED_IDENTIFIER_FIXUP_1001.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1008 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1012 = _RESERVED_IDENTIFIER_FIXUP_1008.y;
        _RESERVED_IDENTIFIER_FIXUP_1412.w = _RESERVED_IDENTIFIER_FIXUP_1012;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1412.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1012;
        float _RESERVED_IDENTIFIER_FIXUP_1023 = _RESERVED_IDENTIFIER_FIXUP_987.x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1423 = _RESERVED_IDENTIFIER_FIXUP_987;
        _RESERVED_IDENTIFIER_FIXUP_1423.x = _RESERVED_IDENTIFIER_FIXUP_1023;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1030 = _RESERVED_IDENTIFIER_FIXUP_1372.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1425;
        _RESERVED_IDENTIFIER_FIXUP_1425.x = _RESERVED_IDENTIFIER_FIXUP_1030.x;
        _RESERVED_IDENTIFIER_FIXUP_1425.y = _RESERVED_IDENTIFIER_FIXUP_1030.y;
        _RESERVED_IDENTIFIER_FIXUP_1425.w = _RESERVED_IDENTIFIER_FIXUP_1012;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1425.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1012;
        float _RESERVED_IDENTIFIER_FIXUP_1052 = _RESERVED_IDENTIFIER_FIXUP_1023 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1423.x = _RESERVED_IDENTIFIER_FIXUP_1052;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1059 = _RESERVED_IDENTIFIER_FIXUP_1372.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1438;
        _RESERVED_IDENTIFIER_FIXUP_1438.x = _RESERVED_IDENTIFIER_FIXUP_1059.x;
        _RESERVED_IDENTIFIER_FIXUP_1438.y = _RESERVED_IDENTIFIER_FIXUP_1059.y;
        _RESERVED_IDENTIFIER_FIXUP_1438.w = _RESERVED_IDENTIFIER_FIXUP_1012;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1438.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1012;
        float _RESERVED_IDENTIFIER_FIXUP_1081 = _RESERVED_IDENTIFIER_FIXUP_1052 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1423.x = _RESERVED_IDENTIFIER_FIXUP_1081;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1088 = _RESERVED_IDENTIFIER_FIXUP_1372.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1451;
        _RESERVED_IDENTIFIER_FIXUP_1451.x = _RESERVED_IDENTIFIER_FIXUP_1088.x;
        _RESERVED_IDENTIFIER_FIXUP_1451.y = _RESERVED_IDENTIFIER_FIXUP_1088.y;
        _RESERVED_IDENTIFIER_FIXUP_1451.w = _RESERVED_IDENTIFIER_FIXUP_1012;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1451.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1012;
        _RESERVED_IDENTIFIER_FIXUP_1423.x = min((_RESERVED_IDENTIFIER_FIXUP_963 * (((_RESERVED_IDENTIFIER_FIXUP_1081 + hdLod5(param_12, param_13).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_909.w);
        _RESERVED_IDENTIFIER_FIXUP_1519 = _RESERVED_IDENTIFIER_FIXUP_1423;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1380.x = _RESERVED_IDENTIFIER_FIXUP_909.w;
        _RESERVED_IDENTIFIER_FIXUP_1519 = _RESERVED_IDENTIFIER_FIXUP_1380;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1138 = (_RESERVED_IDENTIFIER_FIXUP_1519.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1525 = vec4(_RESERVED_IDENTIFIER_FIXUP_1138, _RESERVED_IDENTIFIER_FIXUP_1386.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1162 = _RESERVED_IDENTIFIER_FIXUP_1519.xxx * _RESERVED_IDENTIFIER_FIXUP_1525.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1488 = _RESERVED_IDENTIFIER_FIXUP_1525;
    _RESERVED_IDENTIFIER_FIXUP_1488.y = _RESERVED_IDENTIFIER_FIXUP_1162.x;
    _RESERVED_IDENTIFIER_FIXUP_1488.z = _RESERVED_IDENTIFIER_FIXUP_1162.y;
    _RESERVED_IDENTIFIER_FIXUP_1488.w = _RESERVED_IDENTIFIER_FIXUP_1162.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1176 = (_RESERVED_IDENTIFIER_FIXUP_1386.xyz * _RESERVED_IDENTIFIER_FIXUP_1488.xxx) + _RESERVED_IDENTIFIER_FIXUP_1488.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1494 = _RESERVED_IDENTIFIER_FIXUP_1386;
    _RESERVED_IDENTIFIER_FIXUP_1494.x = _RESERVED_IDENTIFIER_FIXUP_1176.x;
    _RESERVED_IDENTIFIER_FIXUP_1494.y = _RESERVED_IDENTIFIER_FIXUP_1176.y;
    _RESERVED_IDENTIFIER_FIXUP_1494.z = _RESERVED_IDENTIFIER_FIXUP_1176.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1189 = _RESERVED_IDENTIFIER_FIXUP_1494.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1500 = _RESERVED_IDENTIFIER_FIXUP_1494;
    _RESERVED_IDENTIFIER_FIXUP_1500.x = _RESERVED_IDENTIFIER_FIXUP_1189.x;
    _RESERVED_IDENTIFIER_FIXUP_1500.y = _RESERVED_IDENTIFIER_FIXUP_1189.y;
    _RESERVED_IDENTIFIER_FIXUP_1500.z = _RESERVED_IDENTIFIER_FIXUP_1189.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1500.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_442 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_451;
    if (_RESERVED_IDENTIFIER_FIXUP_442)
    {
        _RESERVED_IDENTIFIER_FIXUP_451 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_451 = _RESERVED_IDENTIFIER_FIXUP_442;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_451)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_488 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1358.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_514 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1224;
    if (_RESERVED_IDENTIFIER_FIXUP_488 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1224 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_488), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_514);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1224 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_514);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1224;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1138);
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
    r1.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 hdB75 = r0.xyz * v0.xyz;
    r2.x = hdB75.x;
    r2.y = hdB75.y;
    r2.z = hdB75.z;
    vec4 hdB84 = r2;
    vec4 hdB86 = r2;
    vec3 hdB88 = hdB84.xyz + hdB86.xyz;
    r2.x = hdB88.x;
    r2.y = hdB88.y;
    r2.z = hdB88.z;
    vec4 hdB97 = r0;
    vec3 hdB106 = mix(r2.xyz, hdB97.xyz, greaterThanEqual(-r1.xxx, vec3(0.0)));
    r0.x = hdB106.x;
    r0.y = hdB106.y;
    r0.z = hdB106.z;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r2.xy;
        float param_3 = r2.w;
        r2 = hdLod5(param_2, param_3);
        vec2 hdB163 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB163.x;
        r1.z = hdB163.y;
        vec2 hdB175 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB175.x;
        r3.y = hdB175.y;
        vec2 hdB183 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB183.x;
        r3.w = hdB183.y;
        vec2 param_4 = r3.xy;
        float param_5 = r3.w;
        r3 = hdLod5(param_4, param_5);
        r2.x += r3.x;
        vec2 hdB206 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB206.x;
        r3.y = hdB206.y;
        vec2 hdB213 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB213.x;
        r3.w = hdB213.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r2.x += r3.x;
        vec2 hdB236 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB236.x;
        r3.y = hdB236.y;
        vec2 hdB243 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB243.x;
        r3.w = hdB243.y;
        vec2 param_8 = r3.xy;
        float param_9 = r3.w;
        r3 = hdLod5(param_8, param_9);
        r2.x += r3.x;
        vec2 hdB266 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB266.x;
        r3.y = hdB266.y;
        vec2 hdB273 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB273.x;
        r3.w = hdB273.y;
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
    vec3 hdB325 = r0.www * v1.xyz;
    r1.y = hdB325.x;
    r1.z = hdB325.y;
    r1.w = hdB325.z;
    vec4 hdB334 = r1;
    vec3 hdB336 = r2.xxx * hdB334.yzw;
    r1.y = hdB336.x;
    r1.z = hdB336.y;
    r1.w = hdB336.z;
    vec4 hdB343 = r0;
    vec3 hdB350 = (hdB343.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB350.x;
    r0.y = hdB350.y;
    r0.z = hdB350.z;
    vec4 hdB357 = r0;
    vec3 hdB364 = hdB357.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB364.x;
    r0.y = hdB364.y;
    r0.z = hdB364.z;
    vec3 hdB379 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB379.x;
    oC0.y = hdB379.y;
    oC0.z = hdB379.z;
    oC0.w = 1.0;
    bool hdB390 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB398;
    if (hdB390)
    {
        hdB398 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB398 = hdB390;
    }
    if (hdB398)
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
    bool _1169 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1179;
    if (_1169)
    {
        _1179 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1179 = _1169;
    }
    if (_1179)
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
        bool _1204 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1219;
        if (!_1204)
        {
            _1219 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1219 = _1204;
        }
        if (_1219)
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
