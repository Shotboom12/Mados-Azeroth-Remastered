#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1557;
vec4 _RESERVED_IDENTIFIER_FIXUP_1558;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
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
    bool _46 = hdOverride >= 0;
    bool _65;
    if (_46)
    {
        _65 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _65 = _46;
    }
    vec4 _66;
    if (_65)
    {
        _66 = vec4(float(hdOverride));
    }
    else
    {
        _66 = value;
    }
    return _66;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _83 = hdOverride >= 0;
    bool _93;
    if (_83)
    {
        _93 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _93 = _83;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_593 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_597 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_601 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_605 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_601.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1270 = _RESERVED_IDENTIFIER_FIXUP_601;
    _RESERVED_IDENTIFIER_FIXUP_1270.y = _RESERVED_IDENTIFIER_FIXUP_605;
    _RESERVED_IDENTIFIER_FIXUP_1270.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_605;
    vec4 _RESERVED_IDENTIFIER_FIXUP_615 = _RESERVED_IDENTIFIER_FIXUP_597 * _RESERVED_IDENTIFIER_FIXUP_1270.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_621 = (_RESERVED_IDENTIFIER_FIXUP_593 * _RESERVED_IDENTIFIER_FIXUP_1270.yyyy) + _RESERVED_IDENTIFIER_FIXUP_615;
    float _RESERVED_IDENTIFIER_FIXUP_628 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1277 = _RESERVED_IDENTIFIER_FIXUP_615;
    _RESERVED_IDENTIFIER_FIXUP_1277.x = _RESERVED_IDENTIFIER_FIXUP_628;
    float _RESERVED_IDENTIFIER_FIXUP_634 = clamp((_RESERVED_IDENTIFIER_FIXUP_628 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1277.x = _RESERVED_IDENTIFIER_FIXUP_634;
    float _RESERVED_IDENTIFIER_FIXUP_640 = ((-_RESERVED_IDENTIFIER_FIXUP_634) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1277.y = _RESERVED_IDENTIFIER_FIXUP_640;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1560;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1559;
    if (_RESERVED_IDENTIFIER_FIXUP_640 != (-_RESERVED_IDENTIFIER_FIXUP_640))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_652 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1290 = _RESERVED_IDENTIFIER_FIXUP_1277;
        _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_652.x;
        _RESERVED_IDENTIFIER_FIXUP_1290.z = _RESERVED_IDENTIFIER_FIXUP_652.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_662 = _RESERVED_IDENTIFIER_FIXUP_1290.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1294;
        _RESERVED_IDENTIFIER_FIXUP_1294.x = _RESERVED_IDENTIFIER_FIXUP_662.x;
        _RESERVED_IDENTIFIER_FIXUP_1294.y = _RESERVED_IDENTIFIER_FIXUP_662.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_672 = _RESERVED_IDENTIFIER_FIXUP_1290.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1298;
        _RESERVED_IDENTIFIER_FIXUP_1298.x = _RESERVED_IDENTIFIER_FIXUP_672.x;
        _RESERVED_IDENTIFIER_FIXUP_1298.y = _RESERVED_IDENTIFIER_FIXUP_672.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_682 = _RESERVED_IDENTIFIER_FIXUP_1290.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1302;
        _RESERVED_IDENTIFIER_FIXUP_1302.x = _RESERVED_IDENTIFIER_FIXUP_682.x;
        _RESERVED_IDENTIFIER_FIXUP_1302.y = _RESERVED_IDENTIFIER_FIXUP_682.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_692 = _RESERVED_IDENTIFIER_FIXUP_1290.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1306;
        _RESERVED_IDENTIFIER_FIXUP_1306.x = _RESERVED_IDENTIFIER_FIXUP_692.x;
        _RESERVED_IDENTIFIER_FIXUP_1306.y = _RESERVED_IDENTIFIER_FIXUP_692.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_700 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_700.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_700.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_706 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_1294.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1298.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1302.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1306.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1294.xy;
        float param_5 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_706.y = hdLod5(param_4, param_5).x;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1298.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_706.z = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1302.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_706.w = hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_763 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_706 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1306.xy;
        float param_11 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_769 = hdLod5(param_10, param_11).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_769;
        float _RESERVED_IDENTIFIER_FIXUP_774 = float(_RESERVED_IDENTIFIER_FIXUP_769 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_774;
        float _RESERVED_IDENTIFIER_FIXUP_777 = dot(_RESERVED_IDENTIFIER_FIXUP_763, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1290.z = _RESERVED_IDENTIFIER_FIXUP_777;
        float _RESERVED_IDENTIFIER_FIXUP_783 = _RESERVED_IDENTIFIER_FIXUP_774 + _RESERVED_IDENTIFIER_FIXUP_777;
        _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_783;
        float _RESERVED_IDENTIFIER_FIXUP_788 = (_RESERVED_IDENTIFIER_FIXUP_783 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_788;
        float _RESERVED_IDENTIFIER_FIXUP_795 = (_RESERVED_IDENTIFIER_FIXUP_634 * _RESERVED_IDENTIFIER_FIXUP_788) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1290.x = _RESERVED_IDENTIFIER_FIXUP_795;
        _RESERVED_IDENTIFIER_FIXUP_763.x = min(_RESERVED_IDENTIFIER_FIXUP_795, _RESERVED_IDENTIFIER_FIXUP_601.w);
        _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_1290;
        _RESERVED_IDENTIFIER_FIXUP_1559 = _RESERVED_IDENTIFIER_FIXUP_763;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1288 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1288.x = _RESERVED_IDENTIFIER_FIXUP_601.w;
        _RESERVED_IDENTIFIER_FIXUP_1560 = _RESERVED_IDENTIFIER_FIXUP_1277;
        _RESERVED_IDENTIFIER_FIXUP_1559 = _RESERVED_IDENTIFIER_FIXUP_1288;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1367 = _RESERVED_IDENTIFIER_FIXUP_1560;
    _RESERVED_IDENTIFIER_FIXUP_1367.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_824 = _RESERVED_IDENTIFIER_FIXUP_621.xyz * _RESERVED_IDENTIFIER_FIXUP_1367.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1369 = _RESERVED_IDENTIFIER_FIXUP_621;
    _RESERVED_IDENTIFIER_FIXUP_1369.x = _RESERVED_IDENTIFIER_FIXUP_824.x;
    _RESERVED_IDENTIFIER_FIXUP_1369.y = _RESERVED_IDENTIFIER_FIXUP_824.y;
    _RESERVED_IDENTIFIER_FIXUP_1369.z = _RESERVED_IDENTIFIER_FIXUP_824.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_835 = _RESERVED_IDENTIFIER_FIXUP_1369.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1557).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1375 = _RESERVED_IDENTIFIER_FIXUP_1369;
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_835.x;
    _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_835.y;
    _RESERVED_IDENTIFIER_FIXUP_1375.z = _RESERVED_IDENTIFIER_FIXUP_835.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_846 = _RESERVED_IDENTIFIER_FIXUP_1375.xyz + _RESERVED_IDENTIFIER_FIXUP_1375.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_1375;
    _RESERVED_IDENTIFIER_FIXUP_1381.x = _RESERVED_IDENTIFIER_FIXUP_846.x;
    _RESERVED_IDENTIFIER_FIXUP_1381.y = _RESERVED_IDENTIFIER_FIXUP_846.y;
    _RESERVED_IDENTIFIER_FIXUP_1381.z = _RESERVED_IDENTIFIER_FIXUP_846.z;
    _RESERVED_IDENTIFIER_FIXUP_1367.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1367.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1367.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_871 = (_RESERVED_IDENTIFIER_FIXUP_1367.xyz * _RESERVED_IDENTIFIER_FIXUP_1559.xxx) + _RESERVED_IDENTIFIER_FIXUP_1381.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1393 = _RESERVED_IDENTIFIER_FIXUP_1381;
    _RESERVED_IDENTIFIER_FIXUP_1393.x = _RESERVED_IDENTIFIER_FIXUP_871.x;
    _RESERVED_IDENTIFIER_FIXUP_1393.y = _RESERVED_IDENTIFIER_FIXUP_871.y;
    _RESERVED_IDENTIFIER_FIXUP_1393.z = _RESERVED_IDENTIFIER_FIXUP_871.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_884 = _RESERVED_IDENTIFIER_FIXUP_1393.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1399 = _RESERVED_IDENTIFIER_FIXUP_1393;
    _RESERVED_IDENTIFIER_FIXUP_1399.x = _RESERVED_IDENTIFIER_FIXUP_884.x;
    _RESERVED_IDENTIFIER_FIXUP_1399.y = _RESERVED_IDENTIFIER_FIXUP_884.y;
    _RESERVED_IDENTIFIER_FIXUP_1399.z = _RESERVED_IDENTIFIER_FIXUP_884.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_935 = OptTex0( texcoord0.xyz);
    vec2 param_12 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_939 = hdTex1(param_12);
    vec2 param_13 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_943 = hdTex2(param_13);
    float _RESERVED_IDENTIFIER_FIXUP_947 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_943.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = _RESERVED_IDENTIFIER_FIXUP_943;
    _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_947;
    _RESERVED_IDENTIFIER_FIXUP_1413.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_947;
    vec4 _RESERVED_IDENTIFIER_FIXUP_957 = _RESERVED_IDENTIFIER_FIXUP_939 * _RESERVED_IDENTIFIER_FIXUP_1413.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_963 = (_RESERVED_IDENTIFIER_FIXUP_935 * _RESERVED_IDENTIFIER_FIXUP_1413.yyyy) + _RESERVED_IDENTIFIER_FIXUP_957;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_957;
    _RESERVED_IDENTIFIER_FIXUP_1420.x = _RESERVED_IDENTIFIER_FIXUP_628;
    float _RESERVED_IDENTIFIER_FIXUP_976 = clamp((_RESERVED_IDENTIFIER_FIXUP_628 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1420.x = _RESERVED_IDENTIFIER_FIXUP_976;
    float _RESERVED_IDENTIFIER_FIXUP_982 = ((-_RESERVED_IDENTIFIER_FIXUP_976) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1420.y = _RESERVED_IDENTIFIER_FIXUP_982;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1564;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1563;
    if (_RESERVED_IDENTIFIER_FIXUP_982 != (-_RESERVED_IDENTIFIER_FIXUP_982))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_994 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1433 = _RESERVED_IDENTIFIER_FIXUP_1420;
        _RESERVED_IDENTIFIER_FIXUP_1433.y = _RESERVED_IDENTIFIER_FIXUP_994.x;
        _RESERVED_IDENTIFIER_FIXUP_1433.z = _RESERVED_IDENTIFIER_FIXUP_994.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1004 = _RESERVED_IDENTIFIER_FIXUP_1433.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1437;
        _RESERVED_IDENTIFIER_FIXUP_1437.x = _RESERVED_IDENTIFIER_FIXUP_1004.x;
        _RESERVED_IDENTIFIER_FIXUP_1437.y = _RESERVED_IDENTIFIER_FIXUP_1004.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1014 = _RESERVED_IDENTIFIER_FIXUP_1433.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1441;
        _RESERVED_IDENTIFIER_FIXUP_1441.x = _RESERVED_IDENTIFIER_FIXUP_1014.x;
        _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_1014.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1024 = _RESERVED_IDENTIFIER_FIXUP_1433.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1445;
        _RESERVED_IDENTIFIER_FIXUP_1445.x = _RESERVED_IDENTIFIER_FIXUP_1024.x;
        _RESERVED_IDENTIFIER_FIXUP_1445.y = _RESERVED_IDENTIFIER_FIXUP_1024.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1034 = _RESERVED_IDENTIFIER_FIXUP_1433.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1449;
        _RESERVED_IDENTIFIER_FIXUP_1449.x = _RESERVED_IDENTIFIER_FIXUP_1034.x;
        _RESERVED_IDENTIFIER_FIXUP_1449.y = _RESERVED_IDENTIFIER_FIXUP_1034.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1042 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1042.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1042.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1048 = hdLod5(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_1437.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1441.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1445.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1449.w = 0.0;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1437.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1048.y = hdLod5(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1441.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1048.z = hdLod5(param_18, param_19).x;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1445.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1048.w = hdLod5(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1105 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1048 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1449.xy;
        float param_23 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1111 = hdLod5(param_22, param_23).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1433.y = _RESERVED_IDENTIFIER_FIXUP_1111;
        float _RESERVED_IDENTIFIER_FIXUP_1116 = float(_RESERVED_IDENTIFIER_FIXUP_1111 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1433.y = _RESERVED_IDENTIFIER_FIXUP_1116;
        float _RESERVED_IDENTIFIER_FIXUP_1119 = dot(_RESERVED_IDENTIFIER_FIXUP_1105, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1433.z = _RESERVED_IDENTIFIER_FIXUP_1119;
        float _RESERVED_IDENTIFIER_FIXUP_1125 = _RESERVED_IDENTIFIER_FIXUP_1116 + _RESERVED_IDENTIFIER_FIXUP_1119;
        _RESERVED_IDENTIFIER_FIXUP_1433.y = _RESERVED_IDENTIFIER_FIXUP_1125;
        float _RESERVED_IDENTIFIER_FIXUP_1130 = (_RESERVED_IDENTIFIER_FIXUP_1125 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1433.y = _RESERVED_IDENTIFIER_FIXUP_1130;
        float _RESERVED_IDENTIFIER_FIXUP_1137 = (_RESERVED_IDENTIFIER_FIXUP_976 * _RESERVED_IDENTIFIER_FIXUP_1130) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1433.x = _RESERVED_IDENTIFIER_FIXUP_1137;
        _RESERVED_IDENTIFIER_FIXUP_1105.x = min(_RESERVED_IDENTIFIER_FIXUP_1137, _RESERVED_IDENTIFIER_FIXUP_943.w);
        _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_1433;
        _RESERVED_IDENTIFIER_FIXUP_1563 = _RESERVED_IDENTIFIER_FIXUP_1105;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1431 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1431.x = _RESERVED_IDENTIFIER_FIXUP_943.w;
        _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_1420;
        _RESERVED_IDENTIFIER_FIXUP_1563 = _RESERVED_IDENTIFIER_FIXUP_1431;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1153 = (_RESERVED_IDENTIFIER_FIXUP_1563.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1508 = _RESERVED_IDENTIFIER_FIXUP_1564;
    _RESERVED_IDENTIFIER_FIXUP_1508.x = _RESERVED_IDENTIFIER_FIXUP_1153;
    _RESERVED_IDENTIFIER_FIXUP_1508.x = _RESERVED_IDENTIFIER_FIXUP_1153;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1166 = _RESERVED_IDENTIFIER_FIXUP_963.xyz * _RESERVED_IDENTIFIER_FIXUP_1508.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1514 = _RESERVED_IDENTIFIER_FIXUP_963;
    _RESERVED_IDENTIFIER_FIXUP_1514.x = _RESERVED_IDENTIFIER_FIXUP_1166.x;
    _RESERVED_IDENTIFIER_FIXUP_1514.y = _RESERVED_IDENTIFIER_FIXUP_1166.y;
    _RESERVED_IDENTIFIER_FIXUP_1514.z = _RESERVED_IDENTIFIER_FIXUP_1166.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_1514.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1520 = _RESERVED_IDENTIFIER_FIXUP_1514;
    _RESERVED_IDENTIFIER_FIXUP_1520.x = _RESERVED_IDENTIFIER_FIXUP_1177.x;
    _RESERVED_IDENTIFIER_FIXUP_1520.y = _RESERVED_IDENTIFIER_FIXUP_1177.y;
    _RESERVED_IDENTIFIER_FIXUP_1520.z = _RESERVED_IDENTIFIER_FIXUP_1177.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1188 = _RESERVED_IDENTIFIER_FIXUP_1520.xyz + _RESERVED_IDENTIFIER_FIXUP_1520.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1526 = _RESERVED_IDENTIFIER_FIXUP_1520;
    _RESERVED_IDENTIFIER_FIXUP_1526.x = _RESERVED_IDENTIFIER_FIXUP_1188.x;
    _RESERVED_IDENTIFIER_FIXUP_1526.y = _RESERVED_IDENTIFIER_FIXUP_1188.y;
    _RESERVED_IDENTIFIER_FIXUP_1526.z = _RESERVED_IDENTIFIER_FIXUP_1188.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1199 = _RESERVED_IDENTIFIER_FIXUP_1526.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1508.x = _RESERVED_IDENTIFIER_FIXUP_1199.x;
    _RESERVED_IDENTIFIER_FIXUP_1508.y = _RESERVED_IDENTIFIER_FIXUP_1199.y;
    _RESERVED_IDENTIFIER_FIXUP_1508.z = _RESERVED_IDENTIFIER_FIXUP_1199.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1213 = (_RESERVED_IDENTIFIER_FIXUP_1508.xyz * _RESERVED_IDENTIFIER_FIXUP_1563.xxx) + _RESERVED_IDENTIFIER_FIXUP_1526.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1538 = _RESERVED_IDENTIFIER_FIXUP_1526;
    _RESERVED_IDENTIFIER_FIXUP_1538.x = _RESERVED_IDENTIFIER_FIXUP_1213.x;
    _RESERVED_IDENTIFIER_FIXUP_1538.y = _RESERVED_IDENTIFIER_FIXUP_1213.y;
    _RESERVED_IDENTIFIER_FIXUP_1538.z = _RESERVED_IDENTIFIER_FIXUP_1213.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1226 = _RESERVED_IDENTIFIER_FIXUP_1538.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_1538;
    _RESERVED_IDENTIFIER_FIXUP_1544.x = _RESERVED_IDENTIFIER_FIXUP_1226.x;
    _RESERVED_IDENTIFIER_FIXUP_1544.y = _RESERVED_IDENTIFIER_FIXUP_1226.y;
    _RESERVED_IDENTIFIER_FIXUP_1544.z = _RESERVED_IDENTIFIER_FIXUP_1226.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1544.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1399.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_530 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1263;
    if (_RESERVED_IDENTIFIER_FIXUP_503 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1263 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_503), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_530);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1263 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_530);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1263;
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
    vec4 r7 = vec4(0.0);
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
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 *= r2.xxxx;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB127 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB127.x;
        r1.z = hdB127.y;
        vec2 hdB149 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB149.x;
        r3.y = hdB149.y;
        vec2 hdB160 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB160.x;
        r4.y = hdB160.y;
        vec2 hdB171 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB171.x;
        r5.y = hdB171.y;
        vec2 hdB182 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB182.x;
        r6.y = hdB182.y;
        r7 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r7.xy;
        float param_3 = r7.w;
        r7 = hdLod5(param_2, param_3);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_4 = r3.xy;
        float param_5 = r3.w;
        r3 = hdLod5(param_4, param_5);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_6 = r4.xy;
        float param_7 = r4.w;
        r4 = hdLod5(param_6, param_7);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_8 = r5.xy;
        float param_9 = r5.w;
        r5 = hdLod5(param_8, param_9);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_10 = r6.xy;
        float param_11 = r6.w;
        r6 = hdLod5(param_10, param_11);
        r7.y = r3.x;
        r7.z = r4.x;
        r7.w = r5.x;
        r3 = r7 + (-v4.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.y = r6.x + (-v4.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r3.x = min(r1.x, r2.w);
    }
    else
    {
        r3.x = r2.w;
    }
    r1.x = (r3.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB312 = r0;
    vec3 hdB316 = hdB312.xyz * r1.xxx;
    r0.x = hdB316.x;
    r0.y = hdB316.y;
    r0.z = hdB316.z;
    vec4 hdB323 = r0;
    vec3 hdB327 = hdB323.xyz * v0.xyz;
    r0.x = hdB327.x;
    r0.y = hdB327.y;
    r0.z = hdB327.z;
    vec4 hdB334 = r0;
    vec4 hdB336 = r0;
    vec3 hdB338 = hdB334.xyz + hdB336.xyz;
    r0.x = hdB338.x;
    r0.y = hdB338.y;
    r0.z = hdB338.z;
    vec3 hdB349 = r0.www * v1.xyz;
    r1.x = hdB349.x;
    r1.y = hdB349.y;
    r1.z = hdB349.z;
    vec4 hdB361 = r0;
    vec3 hdB363 = (r1.xyz * r3.xxx) + hdB361.xyz;
    r0.x = hdB363.x;
    r0.y = hdB363.y;
    r0.z = hdB363.z;
    vec4 hdB370 = r0;
    vec3 hdB377 = hdB370.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB377.x;
    r0.y = hdB377.y;
    r0.z = hdB377.z;
    vec3 hdB392 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB392.x;
    oC0.y = hdB392.y;
    oC0.z = hdB392.z;
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
    bool _1419 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1429;
    if (_1419)
    {
        _1429 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1429 = _1419;
    }
    if (_1429)
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
        bool _1454 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1469;
        if (!_1454)
        {
            _1469 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1469 = _1454;
        }
        if (_1469)
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
