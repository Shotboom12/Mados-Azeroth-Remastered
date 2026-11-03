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
float _RESERVED_IDENTIFIER_FIXUP_1516;
vec4 _RESERVED_IDENTIFIER_FIXUP_1517;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_577 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_581 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_584 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_581.x = _RESERVED_IDENTIFIER_FIXUP_584;
    vec3 _RESERVED_IDENTIFIER_FIXUP_587 = _RESERVED_IDENTIFIER_FIXUP_577.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_590 = _RESERVED_IDENTIFIER_FIXUP_587 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1516).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1237 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1237.x = _RESERVED_IDENTIFIER_FIXUP_590.x;
    _RESERVED_IDENTIFIER_FIXUP_1237.y = _RESERVED_IDENTIFIER_FIXUP_590.y;
    _RESERVED_IDENTIFIER_FIXUP_1237.z = _RESERVED_IDENTIFIER_FIXUP_590.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_601 = _RESERVED_IDENTIFIER_FIXUP_1237.xyz + _RESERVED_IDENTIFIER_FIXUP_1237.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1243 = _RESERVED_IDENTIFIER_FIXUP_1237;
    _RESERVED_IDENTIFIER_FIXUP_1243.x = _RESERVED_IDENTIFIER_FIXUP_601.x;
    _RESERVED_IDENTIFIER_FIXUP_1243.y = _RESERVED_IDENTIFIER_FIXUP_601.y;
    _RESERVED_IDENTIFIER_FIXUP_1243.z = _RESERVED_IDENTIFIER_FIXUP_601.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_616 = mix(_RESERVED_IDENTIFIER_FIXUP_1243.xyz, _RESERVED_IDENTIFIER_FIXUP_587, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_581.xxx, vec3(0.0)));
    float _RESERVED_IDENTIFIER_FIXUP_618 = _RESERVED_IDENTIFIER_FIXUP_616.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1249 = _RESERVED_IDENTIFIER_FIXUP_577;
    _RESERVED_IDENTIFIER_FIXUP_1249.x = _RESERVED_IDENTIFIER_FIXUP_618;
    float _RESERVED_IDENTIFIER_FIXUP_620 = _RESERVED_IDENTIFIER_FIXUP_616.y;
    _RESERVED_IDENTIFIER_FIXUP_1249.y = _RESERVED_IDENTIFIER_FIXUP_620;
    float _RESERVED_IDENTIFIER_FIXUP_622 = _RESERVED_IDENTIFIER_FIXUP_616.z;
    _RESERVED_IDENTIFIER_FIXUP_1249.z = _RESERVED_IDENTIFIER_FIXUP_622;
    float _RESERVED_IDENTIFIER_FIXUP_629 = max(abs(texcoord4.x), abs(texcoord4.y));
    _RESERVED_IDENTIFIER_FIXUP_1249.x = _RESERVED_IDENTIFIER_FIXUP_618;
    _RESERVED_IDENTIFIER_FIXUP_1249.y = _RESERVED_IDENTIFIER_FIXUP_620;
    _RESERVED_IDENTIFIER_FIXUP_1249.z = _RESERVED_IDENTIFIER_FIXUP_622;
    vec3 _RESERVED_IDENTIFIER_FIXUP_861 = _RESERVED_IDENTIFIER_FIXUP_1249.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1361 = _RESERVED_IDENTIFIER_FIXUP_1249;
    _RESERVED_IDENTIFIER_FIXUP_1361.x = _RESERVED_IDENTIFIER_FIXUP_861.x;
    _RESERVED_IDENTIFIER_FIXUP_1361.y = _RESERVED_IDENTIFIER_FIXUP_861.y;
    _RESERVED_IDENTIFIER_FIXUP_1361.z = _RESERVED_IDENTIFIER_FIXUP_861.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_908 = OptTex0( texcoord0.xyz);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_912 = hdTex1(param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1375 = _RESERVED_IDENTIFIER_FIXUP_912;
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_584;
    vec3 _RESERVED_IDENTIFIER_FIXUP_918 = _RESERVED_IDENTIFIER_FIXUP_908.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_921 = _RESERVED_IDENTIFIER_FIXUP_918 * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1377 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1377.x = _RESERVED_IDENTIFIER_FIXUP_921.x;
    _RESERVED_IDENTIFIER_FIXUP_1377.y = _RESERVED_IDENTIFIER_FIXUP_921.y;
    _RESERVED_IDENTIFIER_FIXUP_1377.z = _RESERVED_IDENTIFIER_FIXUP_921.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_932 = _RESERVED_IDENTIFIER_FIXUP_1377.xyz + _RESERVED_IDENTIFIER_FIXUP_1377.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1383 = _RESERVED_IDENTIFIER_FIXUP_1377;
    _RESERVED_IDENTIFIER_FIXUP_1383.x = _RESERVED_IDENTIFIER_FIXUP_932.x;
    _RESERVED_IDENTIFIER_FIXUP_1383.y = _RESERVED_IDENTIFIER_FIXUP_932.y;
    _RESERVED_IDENTIFIER_FIXUP_1383.z = _RESERVED_IDENTIFIER_FIXUP_932.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_947 = mix(_RESERVED_IDENTIFIER_FIXUP_1383.xyz, _RESERVED_IDENTIFIER_FIXUP_918, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1375.xxx, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1389 = _RESERVED_IDENTIFIER_FIXUP_908;
    _RESERVED_IDENTIFIER_FIXUP_1389.x = _RESERVED_IDENTIFIER_FIXUP_947.x;
    _RESERVED_IDENTIFIER_FIXUP_1389.y = _RESERVED_IDENTIFIER_FIXUP_947.y;
    _RESERVED_IDENTIFIER_FIXUP_1389.z = _RESERVED_IDENTIFIER_FIXUP_947.z;
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_629;
    float _RESERVED_IDENTIFIER_FIXUP_966 = clamp((_RESERVED_IDENTIFIER_FIXUP_629 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_966;
    float _RESERVED_IDENTIFIER_FIXUP_972 = ((-_RESERVED_IDENTIFIER_FIXUP_966) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_972;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1522;
    if (_RESERVED_IDENTIFIER_FIXUP_972 != (-_RESERVED_IDENTIFIER_FIXUP_972))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_984 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_984.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_984.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_990 = hdLod5(param_2, param_3);
        vec2 _RESERVED_IDENTIFIER_FIXUP_994 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_994.x;
        _RESERVED_IDENTIFIER_FIXUP_1375.z = _RESERVED_IDENTIFIER_FIXUP_994.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1004 = _RESERVED_IDENTIFIER_FIXUP_1375.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1415;
        _RESERVED_IDENTIFIER_FIXUP_1415.x = _RESERVED_IDENTIFIER_FIXUP_1004.x;
        _RESERVED_IDENTIFIER_FIXUP_1415.y = _RESERVED_IDENTIFIER_FIXUP_1004.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1011 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1015 = _RESERVED_IDENTIFIER_FIXUP_1011.y;
        _RESERVED_IDENTIFIER_FIXUP_1415.w = _RESERVED_IDENTIFIER_FIXUP_1015;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1415.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1015;
        float _RESERVED_IDENTIFIER_FIXUP_1026 = _RESERVED_IDENTIFIER_FIXUP_990.x + hdLod5(param_4, param_5).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1426 = _RESERVED_IDENTIFIER_FIXUP_990;
        _RESERVED_IDENTIFIER_FIXUP_1426.x = _RESERVED_IDENTIFIER_FIXUP_1026;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1033 = _RESERVED_IDENTIFIER_FIXUP_1375.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1428;
        _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_1033.x;
        _RESERVED_IDENTIFIER_FIXUP_1428.y = _RESERVED_IDENTIFIER_FIXUP_1033.y;
        _RESERVED_IDENTIFIER_FIXUP_1428.w = _RESERVED_IDENTIFIER_FIXUP_1015;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1428.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1015;
        float _RESERVED_IDENTIFIER_FIXUP_1055 = _RESERVED_IDENTIFIER_FIXUP_1026 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_1426.x = _RESERVED_IDENTIFIER_FIXUP_1055;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1062 = _RESERVED_IDENTIFIER_FIXUP_1375.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1441;
        _RESERVED_IDENTIFIER_FIXUP_1441.x = _RESERVED_IDENTIFIER_FIXUP_1062.x;
        _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_1062.y;
        _RESERVED_IDENTIFIER_FIXUP_1441.w = _RESERVED_IDENTIFIER_FIXUP_1015;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1441.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1015;
        float _RESERVED_IDENTIFIER_FIXUP_1084 = _RESERVED_IDENTIFIER_FIXUP_1055 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1426.x = _RESERVED_IDENTIFIER_FIXUP_1084;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1091 = _RESERVED_IDENTIFIER_FIXUP_1375.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1454;
        _RESERVED_IDENTIFIER_FIXUP_1454.x = _RESERVED_IDENTIFIER_FIXUP_1091.x;
        _RESERVED_IDENTIFIER_FIXUP_1454.y = _RESERVED_IDENTIFIER_FIXUP_1091.y;
        _RESERVED_IDENTIFIER_FIXUP_1454.w = _RESERVED_IDENTIFIER_FIXUP_1015;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1454.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1015;
        _RESERVED_IDENTIFIER_FIXUP_1426.x = min((_RESERVED_IDENTIFIER_FIXUP_966 * (((_RESERVED_IDENTIFIER_FIXUP_1084 + hdLod5(param_10, param_11).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_912.w);
        _RESERVED_IDENTIFIER_FIXUP_1522 = _RESERVED_IDENTIFIER_FIXUP_1426;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1383.x = _RESERVED_IDENTIFIER_FIXUP_912.w;
        _RESERVED_IDENTIFIER_FIXUP_1522 = _RESERVED_IDENTIFIER_FIXUP_1383;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1141 = (_RESERVED_IDENTIFIER_FIXUP_1522.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1528 = vec4(_RESERVED_IDENTIFIER_FIXUP_1141, _RESERVED_IDENTIFIER_FIXUP_1389.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1165 = _RESERVED_IDENTIFIER_FIXUP_1522.xxx * _RESERVED_IDENTIFIER_FIXUP_1528.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1491 = _RESERVED_IDENTIFIER_FIXUP_1528;
    _RESERVED_IDENTIFIER_FIXUP_1491.y = _RESERVED_IDENTIFIER_FIXUP_1165.x;
    _RESERVED_IDENTIFIER_FIXUP_1491.z = _RESERVED_IDENTIFIER_FIXUP_1165.y;
    _RESERVED_IDENTIFIER_FIXUP_1491.w = _RESERVED_IDENTIFIER_FIXUP_1165.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1179 = (_RESERVED_IDENTIFIER_FIXUP_1389.xyz * _RESERVED_IDENTIFIER_FIXUP_1491.xxx) + _RESERVED_IDENTIFIER_FIXUP_1491.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1497 = _RESERVED_IDENTIFIER_FIXUP_1389;
    _RESERVED_IDENTIFIER_FIXUP_1497.x = _RESERVED_IDENTIFIER_FIXUP_1179.x;
    _RESERVED_IDENTIFIER_FIXUP_1497.y = _RESERVED_IDENTIFIER_FIXUP_1179.y;
    _RESERVED_IDENTIFIER_FIXUP_1497.z = _RESERVED_IDENTIFIER_FIXUP_1179.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1192 = _RESERVED_IDENTIFIER_FIXUP_1497.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1503 = _RESERVED_IDENTIFIER_FIXUP_1497;
    _RESERVED_IDENTIFIER_FIXUP_1503.x = _RESERVED_IDENTIFIER_FIXUP_1192.x;
    _RESERVED_IDENTIFIER_FIXUP_1503.y = _RESERVED_IDENTIFIER_FIXUP_1192.y;
    _RESERVED_IDENTIFIER_FIXUP_1503.z = _RESERVED_IDENTIFIER_FIXUP_1192.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1503.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_445 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_454;
    if (_RESERVED_IDENTIFIER_FIXUP_445)
    {
        _RESERVED_IDENTIFIER_FIXUP_454 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_454 = _RESERVED_IDENTIFIER_FIXUP_445;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_454)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_491 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1361.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_517 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1227;
    if (_RESERVED_IDENTIFIER_FIXUP_491 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1227 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_491), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_517);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1227 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_517);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1227;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1141);
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
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = r2.xy;
        float param_2 = r2.w;
        r2 = hdLod5(param_1, param_2);
        vec2 hdB166 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB166.x;
        r1.z = hdB166.y;
        vec2 hdB178 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB178.x;
        r3.y = hdB178.y;
        vec2 hdB186 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB186.x;
        r3.w = hdB186.y;
        vec2 param_3 = r3.xy;
        float param_4 = r3.w;
        r3 = hdLod5(param_3, param_4);
        r2.x += r3.x;
        vec2 hdB209 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB209.x;
        r3.y = hdB209.y;
        vec2 hdB216 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB216.x;
        r3.w = hdB216.y;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
        r2.x += r3.x;
        vec2 hdB239 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB239.x;
        r3.y = hdB239.y;
        vec2 hdB246 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB246.x;
        r3.w = hdB246.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r2.x += r3.x;
        vec2 hdB269 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB269.x;
        r3.y = hdB269.y;
        vec2 hdB276 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB276.x;
        r3.w = hdB276.y;
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
    vec3 hdB328 = r0.www * v1.xyz;
    r1.y = hdB328.x;
    r1.z = hdB328.y;
    r1.w = hdB328.z;
    vec4 hdB337 = r1;
    vec3 hdB339 = r2.xxx * hdB337.yzw;
    r1.y = hdB339.x;
    r1.z = hdB339.y;
    r1.w = hdB339.z;
    vec4 hdB346 = r0;
    vec3 hdB353 = (hdB346.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB353.x;
    r0.y = hdB353.y;
    r0.z = hdB353.z;
    vec4 hdB360 = r0;
    vec3 hdB367 = hdB360.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB367.x;
    r0.y = hdB367.y;
    r0.z = hdB367.z;
    vec3 hdB382 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB382.x;
    oC0.y = hdB382.y;
    oC0.z = hdB382.z;
    oC0.w = 1.0;
    bool hdB393 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB401;
    if (hdB393)
    {
        hdB401 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB401 = hdB393;
    }
    if (hdB401)
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
    bool _1143 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1153;
    if (_1143)
    {
        _1153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1153 = _1143;
    }
    if (_1153)
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
        bool _1178 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1193;
        if (!_1178)
        {
            _1193 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1193 = _1178;
        }
        if (_1193)
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
