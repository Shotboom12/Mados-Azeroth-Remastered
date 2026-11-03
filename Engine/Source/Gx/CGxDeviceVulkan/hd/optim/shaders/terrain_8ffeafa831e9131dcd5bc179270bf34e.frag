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
float _RESERVED_IDENTIFIER_FIXUP_1530;
vec4 _RESERVED_IDENTIFIER_FIXUP_1531;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_585 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_589 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_593 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_597 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_593.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1255 = _RESERVED_IDENTIFIER_FIXUP_593;
    _RESERVED_IDENTIFIER_FIXUP_1255.y = _RESERVED_IDENTIFIER_FIXUP_597;
    _RESERVED_IDENTIFIER_FIXUP_1255.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_597;
    vec4 _RESERVED_IDENTIFIER_FIXUP_607 = _RESERVED_IDENTIFIER_FIXUP_589 * _RESERVED_IDENTIFIER_FIXUP_1255.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_613 = (_RESERVED_IDENTIFIER_FIXUP_585 * _RESERVED_IDENTIFIER_FIXUP_1255.yyyy) + _RESERVED_IDENTIFIER_FIXUP_607;
    float _RESERVED_IDENTIFIER_FIXUP_620 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_607;
    _RESERVED_IDENTIFIER_FIXUP_1262.x = _RESERVED_IDENTIFIER_FIXUP_620;
    float _RESERVED_IDENTIFIER_FIXUP_626 = clamp((_RESERVED_IDENTIFIER_FIXUP_620 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1262.x = _RESERVED_IDENTIFIER_FIXUP_626;
    float _RESERVED_IDENTIFIER_FIXUP_632 = ((-_RESERVED_IDENTIFIER_FIXUP_626) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1262.y = _RESERVED_IDENTIFIER_FIXUP_632;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1533;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1532;
    if (_RESERVED_IDENTIFIER_FIXUP_632 != (-_RESERVED_IDENTIFIER_FIXUP_632))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_644 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_654 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_656 = _RESERVED_IDENTIFIER_FIXUP_654.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1276 = _RESERVED_IDENTIFIER_FIXUP_1262;
        _RESERVED_IDENTIFIER_FIXUP_1276.y = _RESERVED_IDENTIFIER_FIXUP_656;
        _RESERVED_IDENTIFIER_FIXUP_1276.z = _RESERVED_IDENTIFIER_FIXUP_654.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_664 = _RESERVED_IDENTIFIER_FIXUP_1276.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1280;
        _RESERVED_IDENTIFIER_FIXUP_1280.x = _RESERVED_IDENTIFIER_FIXUP_664.x;
        _RESERVED_IDENTIFIER_FIXUP_1280.y = _RESERVED_IDENTIFIER_FIXUP_664.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_671 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_675 = _RESERVED_IDENTIFIER_FIXUP_671.y;
        _RESERVED_IDENTIFIER_FIXUP_1280.w = _RESERVED_IDENTIFIER_FIXUP_675;
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_644.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_644.w;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1280.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_675;
        float _RESERVED_IDENTIFIER_FIXUP_686 = hdLod5(param_2, param_3).x + hdLod5(param_4, param_5).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1540 = vec4(_RESERVED_IDENTIFIER_FIXUP_626, _RESERVED_IDENTIFIER_FIXUP_656, _RESERVED_IDENTIFIER_FIXUP_654.y, _RESERVED_IDENTIFIER_FIXUP_686);
        vec2 _RESERVED_IDENTIFIER_FIXUP_693 = _RESERVED_IDENTIFIER_FIXUP_1540.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1293;
        _RESERVED_IDENTIFIER_FIXUP_1293.x = _RESERVED_IDENTIFIER_FIXUP_693.x;
        _RESERVED_IDENTIFIER_FIXUP_1293.y = _RESERVED_IDENTIFIER_FIXUP_693.y;
        _RESERVED_IDENTIFIER_FIXUP_1293.w = _RESERVED_IDENTIFIER_FIXUP_675;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1293.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_675;
        float _RESERVED_IDENTIFIER_FIXUP_715 = _RESERVED_IDENTIFIER_FIXUP_686 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_1540.w = _RESERVED_IDENTIFIER_FIXUP_715;
        vec2 _RESERVED_IDENTIFIER_FIXUP_722 = _RESERVED_IDENTIFIER_FIXUP_1540.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1306;
        _RESERVED_IDENTIFIER_FIXUP_1306.x = _RESERVED_IDENTIFIER_FIXUP_722.x;
        _RESERVED_IDENTIFIER_FIXUP_1306.y = _RESERVED_IDENTIFIER_FIXUP_722.y;
        _RESERVED_IDENTIFIER_FIXUP_1306.w = _RESERVED_IDENTIFIER_FIXUP_675;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1306.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_675;
        float _RESERVED_IDENTIFIER_FIXUP_744 = _RESERVED_IDENTIFIER_FIXUP_715 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1540.w = _RESERVED_IDENTIFIER_FIXUP_744;
        vec2 _RESERVED_IDENTIFIER_FIXUP_751 = _RESERVED_IDENTIFIER_FIXUP_1540.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1319;
        _RESERVED_IDENTIFIER_FIXUP_1319.x = _RESERVED_IDENTIFIER_FIXUP_751.x;
        _RESERVED_IDENTIFIER_FIXUP_1319.y = _RESERVED_IDENTIFIER_FIXUP_751.y;
        _RESERVED_IDENTIFIER_FIXUP_1319.w = _RESERVED_IDENTIFIER_FIXUP_675;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1319.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_675;
        vec4 _RESERVED_IDENTIFIER_FIXUP_768 = hdLod5(param_10, param_11);
        float _RESERVED_IDENTIFIER_FIXUP_773 = _RESERVED_IDENTIFIER_FIXUP_744 + _RESERVED_IDENTIFIER_FIXUP_768.x;
        _RESERVED_IDENTIFIER_FIXUP_1540.y = _RESERVED_IDENTIFIER_FIXUP_773;
        float _RESERVED_IDENTIFIER_FIXUP_778 = (_RESERVED_IDENTIFIER_FIXUP_773 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1540.y = _RESERVED_IDENTIFIER_FIXUP_778;
        float _RESERVED_IDENTIFIER_FIXUP_785 = (_RESERVED_IDENTIFIER_FIXUP_626 * _RESERVED_IDENTIFIER_FIXUP_778) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1540.x = _RESERVED_IDENTIFIER_FIXUP_785;
        _RESERVED_IDENTIFIER_FIXUP_768.x = min(_RESERVED_IDENTIFIER_FIXUP_785, _RESERVED_IDENTIFIER_FIXUP_593.w);
        _RESERVED_IDENTIFIER_FIXUP_1533 = _RESERVED_IDENTIFIER_FIXUP_1540;
        _RESERVED_IDENTIFIER_FIXUP_1532 = _RESERVED_IDENTIFIER_FIXUP_768;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1273 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1273.x = _RESERVED_IDENTIFIER_FIXUP_593.w;
        _RESERVED_IDENTIFIER_FIXUP_1533 = _RESERVED_IDENTIFIER_FIXUP_1262;
        _RESERVED_IDENTIFIER_FIXUP_1532 = _RESERVED_IDENTIFIER_FIXUP_1273;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1346 = _RESERVED_IDENTIFIER_FIXUP_1533;
    _RESERVED_IDENTIFIER_FIXUP_1346.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_814 = _RESERVED_IDENTIFIER_FIXUP_613.xyz * _RESERVED_IDENTIFIER_FIXUP_1346.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1348 = _RESERVED_IDENTIFIER_FIXUP_613;
    _RESERVED_IDENTIFIER_FIXUP_1348.x = _RESERVED_IDENTIFIER_FIXUP_814.x;
    _RESERVED_IDENTIFIER_FIXUP_1348.y = _RESERVED_IDENTIFIER_FIXUP_814.y;
    _RESERVED_IDENTIFIER_FIXUP_1348.z = _RESERVED_IDENTIFIER_FIXUP_814.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = _RESERVED_IDENTIFIER_FIXUP_1348.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1530).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_1348;
    _RESERVED_IDENTIFIER_FIXUP_1354.x = _RESERVED_IDENTIFIER_FIXUP_825.x;
    _RESERVED_IDENTIFIER_FIXUP_1354.y = _RESERVED_IDENTIFIER_FIXUP_825.y;
    _RESERVED_IDENTIFIER_FIXUP_1354.z = _RESERVED_IDENTIFIER_FIXUP_825.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_836 = _RESERVED_IDENTIFIER_FIXUP_1354.xyz + _RESERVED_IDENTIFIER_FIXUP_1354.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1360 = _RESERVED_IDENTIFIER_FIXUP_1354;
    _RESERVED_IDENTIFIER_FIXUP_1360.x = _RESERVED_IDENTIFIER_FIXUP_836.x;
    _RESERVED_IDENTIFIER_FIXUP_1360.y = _RESERVED_IDENTIFIER_FIXUP_836.y;
    _RESERVED_IDENTIFIER_FIXUP_1360.z = _RESERVED_IDENTIFIER_FIXUP_836.z;
    _RESERVED_IDENTIFIER_FIXUP_1346.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1346.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1346.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_861 = (_RESERVED_IDENTIFIER_FIXUP_1346.xyz * _RESERVED_IDENTIFIER_FIXUP_1532.xxx) + _RESERVED_IDENTIFIER_FIXUP_1360.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1372 = _RESERVED_IDENTIFIER_FIXUP_1360;
    _RESERVED_IDENTIFIER_FIXUP_1372.x = _RESERVED_IDENTIFIER_FIXUP_861.x;
    _RESERVED_IDENTIFIER_FIXUP_1372.y = _RESERVED_IDENTIFIER_FIXUP_861.y;
    _RESERVED_IDENTIFIER_FIXUP_1372.z = _RESERVED_IDENTIFIER_FIXUP_861.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_874 = _RESERVED_IDENTIFIER_FIXUP_1372.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1378 = _RESERVED_IDENTIFIER_FIXUP_1372;
    _RESERVED_IDENTIFIER_FIXUP_1378.x = _RESERVED_IDENTIFIER_FIXUP_874.x;
    _RESERVED_IDENTIFIER_FIXUP_1378.y = _RESERVED_IDENTIFIER_FIXUP_874.y;
    _RESERVED_IDENTIFIER_FIXUP_1378.z = _RESERVED_IDENTIFIER_FIXUP_874.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_922 = OptTex0( texcoord0.xyz);
    vec2 param_12 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_926 = hdTex1(param_12);
    vec2 param_13 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_930 = hdTex2(param_13);
    float _RESERVED_IDENTIFIER_FIXUP_934 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_930.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1392 = _RESERVED_IDENTIFIER_FIXUP_930;
    _RESERVED_IDENTIFIER_FIXUP_1392.y = _RESERVED_IDENTIFIER_FIXUP_934;
    _RESERVED_IDENTIFIER_FIXUP_1392.y = 1.0 - _RESERVED_IDENTIFIER_FIXUP_934;
    vec4 _RESERVED_IDENTIFIER_FIXUP_944 = _RESERVED_IDENTIFIER_FIXUP_926 * _RESERVED_IDENTIFIER_FIXUP_1392.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_950 = (_RESERVED_IDENTIFIER_FIXUP_922 * _RESERVED_IDENTIFIER_FIXUP_1392.yyyy) + _RESERVED_IDENTIFIER_FIXUP_944;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1399 = _RESERVED_IDENTIFIER_FIXUP_944;
    _RESERVED_IDENTIFIER_FIXUP_1399.x = _RESERVED_IDENTIFIER_FIXUP_620;
    float _RESERVED_IDENTIFIER_FIXUP_963 = clamp((_RESERVED_IDENTIFIER_FIXUP_620 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1399.x = _RESERVED_IDENTIFIER_FIXUP_963;
    float _RESERVED_IDENTIFIER_FIXUP_969 = ((-_RESERVED_IDENTIFIER_FIXUP_963) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1399.y = _RESERVED_IDENTIFIER_FIXUP_969;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1537;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1536;
    if (_RESERVED_IDENTIFIER_FIXUP_969 != (-_RESERVED_IDENTIFIER_FIXUP_969))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_981 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_991 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_993 = _RESERVED_IDENTIFIER_FIXUP_991.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = _RESERVED_IDENTIFIER_FIXUP_1399;
        _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_993;
        _RESERVED_IDENTIFIER_FIXUP_1413.z = _RESERVED_IDENTIFIER_FIXUP_991.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1001 = _RESERVED_IDENTIFIER_FIXUP_1413.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1417;
        _RESERVED_IDENTIFIER_FIXUP_1417.x = _RESERVED_IDENTIFIER_FIXUP_1001.x;
        _RESERVED_IDENTIFIER_FIXUP_1417.y = _RESERVED_IDENTIFIER_FIXUP_1001.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1008 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1012 = _RESERVED_IDENTIFIER_FIXUP_1008.y;
        _RESERVED_IDENTIFIER_FIXUP_1417.w = _RESERVED_IDENTIFIER_FIXUP_1012;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_981.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_981.w;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1417.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1012;
        float _RESERVED_IDENTIFIER_FIXUP_1023 = hdLod5(param_14, param_15).x + hdLod5(param_16, param_17).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1542 = vec4(_RESERVED_IDENTIFIER_FIXUP_963, _RESERVED_IDENTIFIER_FIXUP_993, _RESERVED_IDENTIFIER_FIXUP_991.y, _RESERVED_IDENTIFIER_FIXUP_1023);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1030 = _RESERVED_IDENTIFIER_FIXUP_1542.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1430;
        _RESERVED_IDENTIFIER_FIXUP_1430.x = _RESERVED_IDENTIFIER_FIXUP_1030.x;
        _RESERVED_IDENTIFIER_FIXUP_1430.y = _RESERVED_IDENTIFIER_FIXUP_1030.y;
        _RESERVED_IDENTIFIER_FIXUP_1430.w = _RESERVED_IDENTIFIER_FIXUP_1012;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1430.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1012;
        float _RESERVED_IDENTIFIER_FIXUP_1052 = _RESERVED_IDENTIFIER_FIXUP_1023 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_1542.w = _RESERVED_IDENTIFIER_FIXUP_1052;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1059 = _RESERVED_IDENTIFIER_FIXUP_1542.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1443;
        _RESERVED_IDENTIFIER_FIXUP_1443.x = _RESERVED_IDENTIFIER_FIXUP_1059.x;
        _RESERVED_IDENTIFIER_FIXUP_1443.y = _RESERVED_IDENTIFIER_FIXUP_1059.y;
        _RESERVED_IDENTIFIER_FIXUP_1443.w = _RESERVED_IDENTIFIER_FIXUP_1012;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1443.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1012;
        float _RESERVED_IDENTIFIER_FIXUP_1081 = _RESERVED_IDENTIFIER_FIXUP_1052 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_1542.w = _RESERVED_IDENTIFIER_FIXUP_1081;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1088 = _RESERVED_IDENTIFIER_FIXUP_1542.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1456;
        _RESERVED_IDENTIFIER_FIXUP_1456.x = _RESERVED_IDENTIFIER_FIXUP_1088.x;
        _RESERVED_IDENTIFIER_FIXUP_1456.y = _RESERVED_IDENTIFIER_FIXUP_1088.y;
        _RESERVED_IDENTIFIER_FIXUP_1456.w = _RESERVED_IDENTIFIER_FIXUP_1012;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1456.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1012;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1105 = hdLod5(param_22, param_23);
        float _RESERVED_IDENTIFIER_FIXUP_1110 = _RESERVED_IDENTIFIER_FIXUP_1081 + _RESERVED_IDENTIFIER_FIXUP_1105.x;
        _RESERVED_IDENTIFIER_FIXUP_1542.y = _RESERVED_IDENTIFIER_FIXUP_1110;
        float _RESERVED_IDENTIFIER_FIXUP_1115 = (_RESERVED_IDENTIFIER_FIXUP_1110 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1542.y = _RESERVED_IDENTIFIER_FIXUP_1115;
        float _RESERVED_IDENTIFIER_FIXUP_1122 = (_RESERVED_IDENTIFIER_FIXUP_963 * _RESERVED_IDENTIFIER_FIXUP_1115) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1542.x = _RESERVED_IDENTIFIER_FIXUP_1122;
        _RESERVED_IDENTIFIER_FIXUP_1105.x = min(_RESERVED_IDENTIFIER_FIXUP_1122, _RESERVED_IDENTIFIER_FIXUP_930.w);
        _RESERVED_IDENTIFIER_FIXUP_1537 = _RESERVED_IDENTIFIER_FIXUP_1542;
        _RESERVED_IDENTIFIER_FIXUP_1536 = _RESERVED_IDENTIFIER_FIXUP_1105;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_930.w;
        _RESERVED_IDENTIFIER_FIXUP_1537 = _RESERVED_IDENTIFIER_FIXUP_1399;
        _RESERVED_IDENTIFIER_FIXUP_1536 = _RESERVED_IDENTIFIER_FIXUP_1410;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1138 = (_RESERVED_IDENTIFIER_FIXUP_1536.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1481 = _RESERVED_IDENTIFIER_FIXUP_1537;
    _RESERVED_IDENTIFIER_FIXUP_1481.x = _RESERVED_IDENTIFIER_FIXUP_1138;
    _RESERVED_IDENTIFIER_FIXUP_1481.x = _RESERVED_IDENTIFIER_FIXUP_1138;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1151 = _RESERVED_IDENTIFIER_FIXUP_950.xyz * _RESERVED_IDENTIFIER_FIXUP_1481.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1487 = _RESERVED_IDENTIFIER_FIXUP_950;
    _RESERVED_IDENTIFIER_FIXUP_1487.x = _RESERVED_IDENTIFIER_FIXUP_1151.x;
    _RESERVED_IDENTIFIER_FIXUP_1487.y = _RESERVED_IDENTIFIER_FIXUP_1151.y;
    _RESERVED_IDENTIFIER_FIXUP_1487.z = _RESERVED_IDENTIFIER_FIXUP_1151.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1162 = _RESERVED_IDENTIFIER_FIXUP_1487.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1493 = _RESERVED_IDENTIFIER_FIXUP_1487;
    _RESERVED_IDENTIFIER_FIXUP_1493.x = _RESERVED_IDENTIFIER_FIXUP_1162.x;
    _RESERVED_IDENTIFIER_FIXUP_1493.y = _RESERVED_IDENTIFIER_FIXUP_1162.y;
    _RESERVED_IDENTIFIER_FIXUP_1493.z = _RESERVED_IDENTIFIER_FIXUP_1162.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1173 = _RESERVED_IDENTIFIER_FIXUP_1493.xyz + _RESERVED_IDENTIFIER_FIXUP_1493.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_1493;
    _RESERVED_IDENTIFIER_FIXUP_1499.x = _RESERVED_IDENTIFIER_FIXUP_1173.x;
    _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_1173.y;
    _RESERVED_IDENTIFIER_FIXUP_1499.z = _RESERVED_IDENTIFIER_FIXUP_1173.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1184 = _RESERVED_IDENTIFIER_FIXUP_1499.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1481.x = _RESERVED_IDENTIFIER_FIXUP_1184.x;
    _RESERVED_IDENTIFIER_FIXUP_1481.y = _RESERVED_IDENTIFIER_FIXUP_1184.y;
    _RESERVED_IDENTIFIER_FIXUP_1481.z = _RESERVED_IDENTIFIER_FIXUP_1184.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1198 = (_RESERVED_IDENTIFIER_FIXUP_1481.xyz * _RESERVED_IDENTIFIER_FIXUP_1536.xxx) + _RESERVED_IDENTIFIER_FIXUP_1499.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1511 = _RESERVED_IDENTIFIER_FIXUP_1499;
    _RESERVED_IDENTIFIER_FIXUP_1511.x = _RESERVED_IDENTIFIER_FIXUP_1198.x;
    _RESERVED_IDENTIFIER_FIXUP_1511.y = _RESERVED_IDENTIFIER_FIXUP_1198.y;
    _RESERVED_IDENTIFIER_FIXUP_1511.z = _RESERVED_IDENTIFIER_FIXUP_1198.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1211 = _RESERVED_IDENTIFIER_FIXUP_1511.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_1511;
    _RESERVED_IDENTIFIER_FIXUP_1517.x = _RESERVED_IDENTIFIER_FIXUP_1211.x;
    _RESERVED_IDENTIFIER_FIXUP_1517.y = _RESERVED_IDENTIFIER_FIXUP_1211.y;
    _RESERVED_IDENTIFIER_FIXUP_1517.z = _RESERVED_IDENTIFIER_FIXUP_1211.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1517.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1378.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_524 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1248;
    if (_RESERVED_IDENTIFIER_FIXUP_497 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1248 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_497), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_524);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1248 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_524);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1248;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1138);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
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
        r3 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r3.xy;
        float param_3 = r3.w;
        r3 = hdLod5(param_2, param_3);
        vec2 hdB138 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB138.x;
        r1.z = hdB138.y;
        vec2 hdB160 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB160.x;
        r4.y = hdB160.y;
        vec2 hdB168 = vec2(1.0, 0.0) * v4.zx;
        r4.z = hdB168.x;
        r4.w = hdB168.y;
        vec2 param_4 = r4.xy;
        float param_5 = r4.w;
        r4 = hdLod5(param_4, param_5);
        r1.w = r3.x + r4.x;
        vec2 hdB191 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB191.x;
        r3.y = hdB191.y;
        vec2 hdB198 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB198.x;
        r3.w = hdB198.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r1.w += r3.x;
        vec2 hdB221 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB221.x;
        r3.y = hdB221.y;
        vec2 hdB228 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB228.x;
        r3.w = hdB228.y;
        vec2 param_8 = r3.xy;
        float param_9 = r3.w;
        r3 = hdLod5(param_8, param_9);
        r1.w += r3.x;
        vec2 hdB251 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB251.x;
        r3.y = hdB251.y;
        vec2 hdB258 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB258.x;
        r3.w = hdB258.y;
        vec2 param_10 = r3.xy;
        float param_11 = r3.w;
        r3 = hdLod5(param_10, param_11);
        r1.y = r1.w + r3.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r3.x = min(r1.x, r2.w);
    }
    else
    {
        r3.x = r2.w;
    }
    r1.x = (r3.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB306 = r0;
    vec3 hdB310 = hdB306.xyz * r1.xxx;
    r0.x = hdB310.x;
    r0.y = hdB310.y;
    r0.z = hdB310.z;
    vec4 hdB317 = r0;
    vec3 hdB321 = hdB317.xyz * v0.xyz;
    r0.x = hdB321.x;
    r0.y = hdB321.y;
    r0.z = hdB321.z;
    vec4 hdB328 = r0;
    vec4 hdB330 = r0;
    vec3 hdB332 = hdB328.xyz + hdB330.xyz;
    r0.x = hdB332.x;
    r0.y = hdB332.y;
    r0.z = hdB332.z;
    vec3 hdB343 = r0.www * v1.xyz;
    r1.x = hdB343.x;
    r1.y = hdB343.y;
    r1.z = hdB343.z;
    vec4 hdB355 = r0;
    vec3 hdB357 = (r1.xyz * r3.xxx) + hdB355.xyz;
    r0.x = hdB357.x;
    r0.y = hdB357.y;
    r0.z = hdB357.z;
    vec4 hdB364 = r0;
    vec3 hdB371 = hdB364.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB371.x;
    r0.y = hdB371.y;
    r0.z = hdB371.z;
    vec3 hdB386 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB386.x;
    oC0.y = hdB386.y;
    oC0.z = hdB386.z;
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
    bool _1454 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1464;
    if (_1454)
    {
        _1464 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1464 = _1454;
    }
    if (_1464)
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
        bool _1489 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1504;
        if (!_1489)
        {
            _1504 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1504 = _1489;
        }
        if (_1504)
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
