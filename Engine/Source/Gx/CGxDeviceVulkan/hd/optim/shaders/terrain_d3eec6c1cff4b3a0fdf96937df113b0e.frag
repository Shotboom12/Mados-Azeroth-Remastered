#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1434;
vec4 _RESERVED_IDENTIFIER_FIXUP_1435;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _44 = hdOverride >= 0;
    bool _64;
    if (_44)
    {
        _64 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _64 = _44;
    }
    vec4 _65;
    if (_64)
    {
        _65 = vec4(float(hdOverride));
    }
    else
    {
        _65 = value;
    }
    return _65;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _82 = hdOverride >= 0;
    bool _91;
    if (_82)
    {
        _91 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _91 = _82;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_557 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_566 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_570 = _RESERVED_IDENTIFIER_FIXUP_566.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1172;
    _RESERVED_IDENTIFIER_FIXUP_1172.w = _RESERVED_IDENTIFIER_FIXUP_570;
    vec2 _RESERVED_IDENTIFIER_FIXUP_574 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_739 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_766 = _RESERVED_IDENTIFIER_FIXUP_739.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1434).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1261;
    _RESERVED_IDENTIFIER_FIXUP_1261.x = _RESERVED_IDENTIFIER_FIXUP_766.x;
    _RESERVED_IDENTIFIER_FIXUP_1261.y = _RESERVED_IDENTIFIER_FIXUP_766.y;
    _RESERVED_IDENTIFIER_FIXUP_1261.z = _RESERVED_IDENTIFIER_FIXUP_766.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_777 = _RESERVED_IDENTIFIER_FIXUP_1261.xyz + _RESERVED_IDENTIFIER_FIXUP_1261.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1267;
    _RESERVED_IDENTIFIER_FIXUP_1267.x = _RESERVED_IDENTIFIER_FIXUP_777.x;
    _RESERVED_IDENTIFIER_FIXUP_1267.y = _RESERVED_IDENTIFIER_FIXUP_777.y;
    _RESERVED_IDENTIFIER_FIXUP_1267.z = _RESERVED_IDENTIFIER_FIXUP_777.z;
    float _RESERVED_IDENTIFIER_FIXUP_786 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_739.w = _RESERVED_IDENTIFIER_FIXUP_786;
    vec3 _RESERVED_IDENTIFIER_FIXUP_796 = mix(_RESERVED_IDENTIFIER_FIXUP_1267.xyz, _RESERVED_IDENTIFIER_FIXUP_739.xyz, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_739.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1281;
    _RESERVED_IDENTIFIER_FIXUP_1281.x = _RESERVED_IDENTIFIER_FIXUP_796.x;
    _RESERVED_IDENTIFIER_FIXUP_1281.y = _RESERVED_IDENTIFIER_FIXUP_796.y;
    _RESERVED_IDENTIFIER_FIXUP_1281.z = _RESERVED_IDENTIFIER_FIXUP_796.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_823 = _RESERVED_IDENTIFIER_FIXUP_1281.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1287;
    _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_823.x;
    _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_823.y;
    _RESERVED_IDENTIFIER_FIXUP_1287.z = _RESERVED_IDENTIFIER_FIXUP_823.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_838 = _RESERVED_IDENTIFIER_FIXUP_1287.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1293;
    _RESERVED_IDENTIFIER_FIXUP_1293.x = _RESERVED_IDENTIFIER_FIXUP_838.x;
    _RESERVED_IDENTIFIER_FIXUP_1293.y = _RESERVED_IDENTIFIER_FIXUP_838.y;
    _RESERVED_IDENTIFIER_FIXUP_1293.z = _RESERVED_IDENTIFIER_FIXUP_838.z;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_557.xy;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_557.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_875 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1306 = _RESERVED_IDENTIFIER_FIXUP_875;
    _RESERVED_IDENTIFIER_FIXUP_1306.y = _RESERVED_IDENTIFIER_FIXUP_574.x;
    _RESERVED_IDENTIFIER_FIXUP_1306.z = _RESERVED_IDENTIFIER_FIXUP_574.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_896 = _RESERVED_IDENTIFIER_FIXUP_1306.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1310 = _RESERVED_IDENTIFIER_FIXUP_1172;
    _RESERVED_IDENTIFIER_FIXUP_1310.x = _RESERVED_IDENTIFIER_FIXUP_896.x;
    _RESERVED_IDENTIFIER_FIXUP_1310.y = _RESERVED_IDENTIFIER_FIXUP_896.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1310.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_570;
    float _RESERVED_IDENTIFIER_FIXUP_911 = _RESERVED_IDENTIFIER_FIXUP_875.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1306.x = _RESERVED_IDENTIFIER_FIXUP_911;
    vec2 _RESERVED_IDENTIFIER_FIXUP_925 = _RESERVED_IDENTIFIER_FIXUP_1306.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1323 = _RESERVED_IDENTIFIER_FIXUP_1172;
    _RESERVED_IDENTIFIER_FIXUP_1323.x = _RESERVED_IDENTIFIER_FIXUP_925.x;
    _RESERVED_IDENTIFIER_FIXUP_1323.y = _RESERVED_IDENTIFIER_FIXUP_925.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1323.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_570;
    float _RESERVED_IDENTIFIER_FIXUP_940 = _RESERVED_IDENTIFIER_FIXUP_911 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1306.x = _RESERVED_IDENTIFIER_FIXUP_940;
    vec2 _RESERVED_IDENTIFIER_FIXUP_947 = _RESERVED_IDENTIFIER_FIXUP_1306.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1332;
    _RESERVED_IDENTIFIER_FIXUP_1332.x = _RESERVED_IDENTIFIER_FIXUP_947.x;
    _RESERVED_IDENTIFIER_FIXUP_1332.y = _RESERVED_IDENTIFIER_FIXUP_947.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_957 = _RESERVED_IDENTIFIER_FIXUP_1306.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1336;
    _RESERVED_IDENTIFIER_FIXUP_1336.x = _RESERVED_IDENTIFIER_FIXUP_957.x;
    _RESERVED_IDENTIFIER_FIXUP_1336.y = _RESERVED_IDENTIFIER_FIXUP_957.y;
    _RESERVED_IDENTIFIER_FIXUP_1332.w = _RESERVED_IDENTIFIER_FIXUP_570;
    _RESERVED_IDENTIFIER_FIXUP_1336.w = _RESERVED_IDENTIFIER_FIXUP_570;
    vec2 param_6 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1029 = hdTex1(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1332.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_570;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1336.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_570;
    float _RESERVED_IDENTIFIER_FIXUP_1034 = min((clamp((max(abs(texcoord4.x), abs(texcoord4.y)) * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_940 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1029.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1374;
    _RESERVED_IDENTIFIER_FIXUP_1374.x = _RESERVED_IDENTIFIER_FIXUP_1034;
    float _RESERVED_IDENTIFIER_FIXUP_1039 = (_RESERVED_IDENTIFIER_FIXUP_1034 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1051 = OptTex0( texcoord0.xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1437 = vec4(_RESERVED_IDENTIFIER_FIXUP_1039, _RESERVED_IDENTIFIER_FIXUP_1051.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1067 = _RESERVED_IDENTIFIER_FIXUP_1374.xxx * _RESERVED_IDENTIFIER_FIXUP_1437.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1389 = _RESERVED_IDENTIFIER_FIXUP_1437;
    _RESERVED_IDENTIFIER_FIXUP_1389.y = _RESERVED_IDENTIFIER_FIXUP_1067.x;
    _RESERVED_IDENTIFIER_FIXUP_1389.z = _RESERVED_IDENTIFIER_FIXUP_1067.y;
    _RESERVED_IDENTIFIER_FIXUP_1389.w = _RESERVED_IDENTIFIER_FIXUP_1067.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1078 = _RESERVED_IDENTIFIER_FIXUP_1051.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1395;
    _RESERVED_IDENTIFIER_FIXUP_1395.x = _RESERVED_IDENTIFIER_FIXUP_1078.x;
    _RESERVED_IDENTIFIER_FIXUP_1395.y = _RESERVED_IDENTIFIER_FIXUP_1078.y;
    _RESERVED_IDENTIFIER_FIXUP_1395.z = _RESERVED_IDENTIFIER_FIXUP_1078.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1089 = _RESERVED_IDENTIFIER_FIXUP_1395.xyz + _RESERVED_IDENTIFIER_FIXUP_1395.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1401;
    _RESERVED_IDENTIFIER_FIXUP_1401.x = _RESERVED_IDENTIFIER_FIXUP_1089.x;
    _RESERVED_IDENTIFIER_FIXUP_1401.y = _RESERVED_IDENTIFIER_FIXUP_1089.y;
    _RESERVED_IDENTIFIER_FIXUP_1401.z = _RESERVED_IDENTIFIER_FIXUP_1089.z;
    _RESERVED_IDENTIFIER_FIXUP_1051.w = _RESERVED_IDENTIFIER_FIXUP_786;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1108 = mix(_RESERVED_IDENTIFIER_FIXUP_1401.xyz, _RESERVED_IDENTIFIER_FIXUP_1051.xyz, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1051.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1409;
    _RESERVED_IDENTIFIER_FIXUP_1409.x = _RESERVED_IDENTIFIER_FIXUP_1108.x;
    _RESERVED_IDENTIFIER_FIXUP_1409.y = _RESERVED_IDENTIFIER_FIXUP_1108.y;
    _RESERVED_IDENTIFIER_FIXUP_1409.z = _RESERVED_IDENTIFIER_FIXUP_1108.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1122 = (_RESERVED_IDENTIFIER_FIXUP_1409.xyz * _RESERVED_IDENTIFIER_FIXUP_1389.xxx) + _RESERVED_IDENTIFIER_FIXUP_1389.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1415;
    _RESERVED_IDENTIFIER_FIXUP_1415.x = _RESERVED_IDENTIFIER_FIXUP_1122.x;
    _RESERVED_IDENTIFIER_FIXUP_1415.y = _RESERVED_IDENTIFIER_FIXUP_1122.y;
    _RESERVED_IDENTIFIER_FIXUP_1415.z = _RESERVED_IDENTIFIER_FIXUP_1122.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1135 = _RESERVED_IDENTIFIER_FIXUP_1415.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1421;
    _RESERVED_IDENTIFIER_FIXUP_1421.x = _RESERVED_IDENTIFIER_FIXUP_1135.x;
    _RESERVED_IDENTIFIER_FIXUP_1421.y = _RESERVED_IDENTIFIER_FIXUP_1135.y;
    _RESERVED_IDENTIFIER_FIXUP_1421.z = _RESERVED_IDENTIFIER_FIXUP_1135.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1421.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_426 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_435;
    if (_RESERVED_IDENTIFIER_FIXUP_426)
    {
        _RESERVED_IDENTIFIER_FIXUP_435 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_435 = _RESERVED_IDENTIFIER_FIXUP_426;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_435)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_472 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1293.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_498 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1161;
    if (_RESERVED_IDENTIFIER_FIXUP_472 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1161 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_472), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_498);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1161 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_498);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1161;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1039);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB62 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB62.x;
    r1.w = hdB62.y;
    vec2 hdB72 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB72.x;
    r0.z = hdB72.y;
    vec2 hdB94 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB94.x;
    r1.y = hdB94.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB114 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB114.x;
    r1.w = hdB114.y;
    vec2 hdB125 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB125.x;
    r1.y = hdB125.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB148 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB148.x;
    r1.y = hdB148.y;
    vec2 hdB159 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB159.x;
    r2.y = hdB159.y;
    vec2 hdB166 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB166.x;
    r1.w = hdB166.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB185 = vec2(1.0, 0.0) * v4.zx;
    r2.z = hdB185.x;
    r2.w = hdB185.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v3.xy;
    r1 = hdTex1(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r1 = OptTex0( v2.xyz);
    vec3 hdB263 = r1.www * v1.xyz;
    r0.y = hdB263.x;
    r0.z = hdB263.y;
    r0.w = hdB263.z;
    vec4 hdB272 = r0;
    vec3 hdB274 = r2.xxx * hdB272.yzw;
    r0.y = hdB274.x;
    r0.z = hdB274.y;
    r0.w = hdB274.z;
    vec3 hdB285 = r1.xyz * v0.xyz;
    r2.x = hdB285.x;
    r2.y = hdB285.y;
    r2.z = hdB285.z;
    vec4 hdB292 = r2;
    vec4 hdB294 = r2;
    vec3 hdB296 = hdB292.xyz + hdB294.xyz;
    r2.x = hdB296.x;
    r2.y = hdB296.y;
    r2.z = hdB296.z;
    r1.w = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec4 hdB311 = r1;
    vec4 hdB313 = r1;
    vec3 hdB320 = mix(r2.xyz, hdB311.xyz, greaterThanEqual(-hdB313.www, vec3(0.0)));
    r1.x = hdB320.x;
    r1.y = hdB320.y;
    r1.z = hdB320.z;
    vec4 hdB329 = r0;
    vec4 hdB332 = r0;
    vec3 hdB334 = (r1.xyz * hdB329.xxx) + hdB332.yzw;
    r0.x = hdB334.x;
    r0.y = hdB334.y;
    r0.z = hdB334.z;
    vec4 hdB341 = r0;
    vec3 hdB348 = hdB341.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB348.x;
    r0.y = hdB348.y;
    r0.z = hdB348.z;
    vec3 hdB363 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB363.x;
    oC0.y = hdB363.y;
    oC0.z = hdB363.z;
    oC0.w = 1.0;
    bool hdB374 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB382;
    if (hdB374)
    {
        hdB382 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB382 = hdB374;
    }
    if (hdB382)
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
    bool _1079 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1089;
    if (_1079)
    {
        _1089 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1089 = _1079;
    }
    if (_1089)
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
        bool _1114 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1129;
        if (!_1114)
        {
            _1129 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1129 = _1114;
        }
        if (_1129)
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
