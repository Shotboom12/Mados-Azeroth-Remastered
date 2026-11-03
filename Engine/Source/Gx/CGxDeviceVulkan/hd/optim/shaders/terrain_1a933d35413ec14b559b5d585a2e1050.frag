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
float _RESERVED_IDENTIFIER_FIXUP_1568;
vec4 _RESERVED_IDENTIFIER_FIXUP_1569;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_592 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_596 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_599 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _RESERVED_IDENTIFIER_FIXUP_602 = _RESERVED_IDENTIFIER_FIXUP_592.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1578 = vec4(_RESERVED_IDENTIFIER_FIXUP_599, _RESERVED_IDENTIFIER_FIXUP_602 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1568).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_613 = _RESERVED_IDENTIFIER_FIXUP_1578.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_616 = _RESERVED_IDENTIFIER_FIXUP_613 + _RESERVED_IDENTIFIER_FIXUP_613;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1285 = _RESERVED_IDENTIFIER_FIXUP_1578;
    _RESERVED_IDENTIFIER_FIXUP_1285.y = _RESERVED_IDENTIFIER_FIXUP_616.x;
    _RESERVED_IDENTIFIER_FIXUP_1285.z = _RESERVED_IDENTIFIER_FIXUP_616.y;
    _RESERVED_IDENTIFIER_FIXUP_1285.w = _RESERVED_IDENTIFIER_FIXUP_616.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_631 = mix(_RESERVED_IDENTIFIER_FIXUP_1285.yzw, _RESERVED_IDENTIFIER_FIXUP_602, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1285.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_592;
    _RESERVED_IDENTIFIER_FIXUP_1291.x = _RESERVED_IDENTIFIER_FIXUP_631.x;
    _RESERVED_IDENTIFIER_FIXUP_1291.y = _RESERVED_IDENTIFIER_FIXUP_631.y;
    _RESERVED_IDENTIFIER_FIXUP_1291.z = _RESERVED_IDENTIFIER_FIXUP_631.z;
    float _RESERVED_IDENTIFIER_FIXUP_641 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_596.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1297 = _RESERVED_IDENTIFIER_FIXUP_596;
    _RESERVED_IDENTIFIER_FIXUP_1297.x = _RESERVED_IDENTIFIER_FIXUP_641;
    _RESERVED_IDENTIFIER_FIXUP_1297.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_641;
    vec4 _RESERVED_IDENTIFIER_FIXUP_651 = _RESERVED_IDENTIFIER_FIXUP_1291 * _RESERVED_IDENTIFIER_FIXUP_1297.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_658 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1402 = _RESERVED_IDENTIFIER_FIXUP_651;
    _RESERVED_IDENTIFIER_FIXUP_1402.x = _RESERVED_IDENTIFIER_FIXUP_651.x;
    _RESERVED_IDENTIFIER_FIXUP_1402.y = _RESERVED_IDENTIFIER_FIXUP_651.y;
    _RESERVED_IDENTIFIER_FIXUP_1402.z = _RESERVED_IDENTIFIER_FIXUP_651.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_890 = _RESERVED_IDENTIFIER_FIXUP_1402.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1408 = _RESERVED_IDENTIFIER_FIXUP_1402;
    _RESERVED_IDENTIFIER_FIXUP_1408.x = _RESERVED_IDENTIFIER_FIXUP_890.x;
    _RESERVED_IDENTIFIER_FIXUP_1408.y = _RESERVED_IDENTIFIER_FIXUP_890.y;
    _RESERVED_IDENTIFIER_FIXUP_1408.z = _RESERVED_IDENTIFIER_FIXUP_890.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_937 = OptTex0( texcoord0.xyz);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_941 = hdTex1(param_1);
    vec3 _RESERVED_IDENTIFIER_FIXUP_947 = _RESERVED_IDENTIFIER_FIXUP_937.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1582 = vec4(_RESERVED_IDENTIFIER_FIXUP_599, _RESERVED_IDENTIFIER_FIXUP_947 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_958 = _RESERVED_IDENTIFIER_FIXUP_1582.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_961 = _RESERVED_IDENTIFIER_FIXUP_958 + _RESERVED_IDENTIFIER_FIXUP_958;
    float _RESERVED_IDENTIFIER_FIXUP_963 = _RESERVED_IDENTIFIER_FIXUP_961.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1430 = _RESERVED_IDENTIFIER_FIXUP_1582;
    _RESERVED_IDENTIFIER_FIXUP_1430.y = _RESERVED_IDENTIFIER_FIXUP_963;
    _RESERVED_IDENTIFIER_FIXUP_1430.z = _RESERVED_IDENTIFIER_FIXUP_961.y;
    _RESERVED_IDENTIFIER_FIXUP_1430.w = _RESERVED_IDENTIFIER_FIXUP_961.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_976 = mix(_RESERVED_IDENTIFIER_FIXUP_1430.yzw, _RESERVED_IDENTIFIER_FIXUP_947, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1430.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1436 = _RESERVED_IDENTIFIER_FIXUP_937;
    _RESERVED_IDENTIFIER_FIXUP_1436.x = _RESERVED_IDENTIFIER_FIXUP_976.x;
    _RESERVED_IDENTIFIER_FIXUP_1436.y = _RESERVED_IDENTIFIER_FIXUP_976.y;
    _RESERVED_IDENTIFIER_FIXUP_1436.z = _RESERVED_IDENTIFIER_FIXUP_976.z;
    float _RESERVED_IDENTIFIER_FIXUP_986 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_941.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1442 = _RESERVED_IDENTIFIER_FIXUP_941;
    _RESERVED_IDENTIFIER_FIXUP_1442.x = _RESERVED_IDENTIFIER_FIXUP_986;
    _RESERVED_IDENTIFIER_FIXUP_1442.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_986;
    vec4 _RESERVED_IDENTIFIER_FIXUP_996 = _RESERVED_IDENTIFIER_FIXUP_1436 * _RESERVED_IDENTIFIER_FIXUP_1442.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1449 = _RESERVED_IDENTIFIER_FIXUP_1442;
    _RESERVED_IDENTIFIER_FIXUP_1449.x = _RESERVED_IDENTIFIER_FIXUP_658;
    float _RESERVED_IDENTIFIER_FIXUP_1009 = clamp((_RESERVED_IDENTIFIER_FIXUP_658 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1449.x = _RESERVED_IDENTIFIER_FIXUP_1009;
    float _RESERVED_IDENTIFIER_FIXUP_1015 = ((-_RESERVED_IDENTIFIER_FIXUP_1009) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1449.y = _RESERVED_IDENTIFIER_FIXUP_1015;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1574;
    if (_RESERVED_IDENTIFIER_FIXUP_1015 != (-_RESERVED_IDENTIFIER_FIXUP_1015))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1027 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1027.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1027.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1033 = hdLod5(param_2, param_3);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1037 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1449.y = _RESERVED_IDENTIFIER_FIXUP_1037.x;
        _RESERVED_IDENTIFIER_FIXUP_1449.z = _RESERVED_IDENTIFIER_FIXUP_1037.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1047 = _RESERVED_IDENTIFIER_FIXUP_1449.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1467;
        _RESERVED_IDENTIFIER_FIXUP_1467.x = _RESERVED_IDENTIFIER_FIXUP_1047.x;
        _RESERVED_IDENTIFIER_FIXUP_1467.y = _RESERVED_IDENTIFIER_FIXUP_1047.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1054 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1058 = _RESERVED_IDENTIFIER_FIXUP_1054.y;
        _RESERVED_IDENTIFIER_FIXUP_1467.w = _RESERVED_IDENTIFIER_FIXUP_1058;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1467.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1058;
        float _RESERVED_IDENTIFIER_FIXUP_1069 = _RESERVED_IDENTIFIER_FIXUP_1033.x + hdLod5(param_4, param_5).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1478 = _RESERVED_IDENTIFIER_FIXUP_1033;
        _RESERVED_IDENTIFIER_FIXUP_1478.x = _RESERVED_IDENTIFIER_FIXUP_1069;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1076 = _RESERVED_IDENTIFIER_FIXUP_1449.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1480;
        _RESERVED_IDENTIFIER_FIXUP_1480.x = _RESERVED_IDENTIFIER_FIXUP_1076.x;
        _RESERVED_IDENTIFIER_FIXUP_1480.y = _RESERVED_IDENTIFIER_FIXUP_1076.y;
        _RESERVED_IDENTIFIER_FIXUP_1480.w = _RESERVED_IDENTIFIER_FIXUP_1058;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1480.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1058;
        float _RESERVED_IDENTIFIER_FIXUP_1098 = _RESERVED_IDENTIFIER_FIXUP_1069 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_1478.x = _RESERVED_IDENTIFIER_FIXUP_1098;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1105 = _RESERVED_IDENTIFIER_FIXUP_1449.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1493;
        _RESERVED_IDENTIFIER_FIXUP_1493.x = _RESERVED_IDENTIFIER_FIXUP_1105.x;
        _RESERVED_IDENTIFIER_FIXUP_1493.y = _RESERVED_IDENTIFIER_FIXUP_1105.y;
        _RESERVED_IDENTIFIER_FIXUP_1493.w = _RESERVED_IDENTIFIER_FIXUP_1058;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1493.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1058;
        float _RESERVED_IDENTIFIER_FIXUP_1127 = _RESERVED_IDENTIFIER_FIXUP_1098 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1478.x = _RESERVED_IDENTIFIER_FIXUP_1127;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1134 = _RESERVED_IDENTIFIER_FIXUP_1449.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1506;
        _RESERVED_IDENTIFIER_FIXUP_1506.x = _RESERVED_IDENTIFIER_FIXUP_1134.x;
        _RESERVED_IDENTIFIER_FIXUP_1506.y = _RESERVED_IDENTIFIER_FIXUP_1134.y;
        _RESERVED_IDENTIFIER_FIXUP_1506.w = _RESERVED_IDENTIFIER_FIXUP_1058;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1506.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1058;
        _RESERVED_IDENTIFIER_FIXUP_1478.x = min((_RESERVED_IDENTIFIER_FIXUP_1009 * (((_RESERVED_IDENTIFIER_FIXUP_1127 + hdLod5(param_10, param_11).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_941.w);
        _RESERVED_IDENTIFIER_FIXUP_1574 = _RESERVED_IDENTIFIER_FIXUP_1478;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1574 = vec4(_RESERVED_IDENTIFIER_FIXUP_941.w, _RESERVED_IDENTIFIER_FIXUP_963, _RESERVED_IDENTIFIER_FIXUP_961.yz);
    }
    float _RESERVED_IDENTIFIER_FIXUP_1184 = (_RESERVED_IDENTIFIER_FIXUP_1574.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1584 = vec4(_RESERVED_IDENTIFIER_FIXUP_1184, _RESERVED_IDENTIFIER_FIXUP_996.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1208 = _RESERVED_IDENTIFIER_FIXUP_1574.xxx * _RESERVED_IDENTIFIER_FIXUP_1584.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1543 = _RESERVED_IDENTIFIER_FIXUP_1584;
    _RESERVED_IDENTIFIER_FIXUP_1543.y = _RESERVED_IDENTIFIER_FIXUP_1208.x;
    _RESERVED_IDENTIFIER_FIXUP_1543.z = _RESERVED_IDENTIFIER_FIXUP_1208.y;
    _RESERVED_IDENTIFIER_FIXUP_1543.w = _RESERVED_IDENTIFIER_FIXUP_1208.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1222 = (_RESERVED_IDENTIFIER_FIXUP_996.xyz * _RESERVED_IDENTIFIER_FIXUP_1543.xxx) + _RESERVED_IDENTIFIER_FIXUP_1543.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_996;
    _RESERVED_IDENTIFIER_FIXUP_1549.x = _RESERVED_IDENTIFIER_FIXUP_1222.x;
    _RESERVED_IDENTIFIER_FIXUP_1549.y = _RESERVED_IDENTIFIER_FIXUP_1222.y;
    _RESERVED_IDENTIFIER_FIXUP_1549.z = _RESERVED_IDENTIFIER_FIXUP_1222.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1235 = _RESERVED_IDENTIFIER_FIXUP_1549.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1555 = _RESERVED_IDENTIFIER_FIXUP_1549;
    _RESERVED_IDENTIFIER_FIXUP_1555.x = _RESERVED_IDENTIFIER_FIXUP_1235.x;
    _RESERVED_IDENTIFIER_FIXUP_1555.y = _RESERVED_IDENTIFIER_FIXUP_1235.y;
    _RESERVED_IDENTIFIER_FIXUP_1555.z = _RESERVED_IDENTIFIER_FIXUP_1235.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1555.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_460 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_469;
    if (_RESERVED_IDENTIFIER_FIXUP_460)
    {
        _RESERVED_IDENTIFIER_FIXUP_469 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_469 = _RESERVED_IDENTIFIER_FIXUP_460;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_469)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_506 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1408.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_532 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1270;
    if (_RESERVED_IDENTIFIER_FIXUP_506 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1270 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_506), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_532);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1270 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_532);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1270;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1184);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
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
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = r2.xy;
        float param_2 = r2.w;
        r2 = hdLod5(param_1, param_2);
        vec2 hdB181 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB181.x;
        r1.z = hdB181.y;
        vec2 hdB193 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB193.x;
        r3.y = hdB193.y;
        vec2 hdB201 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB201.x;
        r3.w = hdB201.y;
        vec2 param_3 = r3.xy;
        float param_4 = r3.w;
        r3 = hdLod5(param_3, param_4);
        r2.x += r3.x;
        vec2 hdB224 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB224.x;
        r3.y = hdB224.y;
        vec2 hdB231 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB231.x;
        r3.w = hdB231.y;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
        r2.x += r3.x;
        vec2 hdB254 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB254.x;
        r3.y = hdB254.y;
        vec2 hdB261 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB261.x;
        r3.w = hdB261.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r2.x += r3.x;
        vec2 hdB284 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB284.x;
        r3.y = hdB284.y;
        vec2 hdB291 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB291.x;
        r3.w = hdB291.y;
        vec2 param_9 = r3.xy;
        float param_10 = r3.w;
        r3 = hdLod5(param_9, param_10);
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
    vec3 hdB343 = r0.www * v1.xyz;
    r1.y = hdB343.x;
    r1.z = hdB343.y;
    r1.w = hdB343.z;
    vec4 hdB352 = r1;
    vec3 hdB354 = r2.xxx * hdB352.yzw;
    r1.y = hdB354.x;
    r1.z = hdB354.y;
    r1.w = hdB354.z;
    vec4 hdB361 = r0;
    vec3 hdB368 = (hdB361.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB368.x;
    r0.y = hdB368.y;
    r0.z = hdB368.z;
    vec4 hdB375 = r0;
    vec3 hdB382 = hdB375.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB382.x;
    r0.y = hdB382.y;
    r0.z = hdB382.z;
    vec3 hdB397 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB397.x;
    oC0.y = hdB397.y;
    oC0.z = hdB397.z;
    oC0.w = 1.0;
    bool hdB408 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB416;
    if (hdB408)
    {
        hdB416 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB416 = hdB408;
    }
    if (hdB416)
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
    bool _1185 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1195;
    if (_1185)
    {
        _1195 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1195 = _1185;
    }
    if (_1195)
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
        bool _1220 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1235;
        if (!_1220)
        {
            _1235 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1235 = _1220;
        }
        if (_1235)
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
