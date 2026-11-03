#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
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
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _52 = hdOverride >= 0;
    bool _72;
    if (_52)
    {
        _72 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _72 = _52;
    }
    vec4 _73;
    if (_72)
    {
        _73 = vec4(float(hdOverride));
    }
    else
    {
        _73 = value;
    }
    return _73;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _90 = hdOverride >= 0;
    bool _99;
    if (_90)
    {
        _99 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _99 = _90;
    }
    vec4 _100;
    if (_99)
    {
        _100 = vec4(float(hdOverride));
    }
    else
    {
        _100 = value;
    }
    return _100;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _117 = hdOverride >= 0;
    bool _127;
    if (_117)
    {
        _127 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _127 = _117;
    }
    vec4 _128;
    if (_127)
    {
        _128 = vec4(float(hdOverride));
    }
    else
    {
        _128 = value;
    }
    return _128;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _145 = hdOverride >= 0;
    bool _155;
    if (_145)
    {
        _155 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _155 = _145;
    }
    vec4 _156;
    if (_155)
    {
        _156 = vec4(float(hdOverride));
    }
    else
    {
        _156 = value;
    }
    return _156;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _174 = hdOverride >= 0;
    bool _184;
    if (_174)
    {
        _184 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _184 = _174;
    }
    vec4 _185;
    if (_184)
    {
        _185 = vec4(float(hdOverride));
    }
    else
    {
        _185 = value;
    }
    return _185;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_598 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_602 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_606 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_610 = hdTex3(param_3);
    float _RESERVED_IDENTIFIER_FIXUP_614 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_610.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1290 = _RESERVED_IDENTIFIER_FIXUP_610;
    _RESERVED_IDENTIFIER_FIXUP_1290.z = _RESERVED_IDENTIFIER_FIXUP_614;
    _RESERVED_IDENTIFIER_FIXUP_1290.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_614;
    vec4 _RESERVED_IDENTIFIER_FIXUP_624 = _RESERVED_IDENTIFIER_FIXUP_602 * _RESERVED_IDENTIFIER_FIXUP_1290.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_636 = (_RESERVED_IDENTIFIER_FIXUP_606 * _RESERVED_IDENTIFIER_FIXUP_1290.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_598 * _RESERVED_IDENTIFIER_FIXUP_1290.zzzz) + _RESERVED_IDENTIFIER_FIXUP_624);
    float _RESERVED_IDENTIFIER_FIXUP_643 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1297 = _RESERVED_IDENTIFIER_FIXUP_624;
    _RESERVED_IDENTIFIER_FIXUP_1297.x = _RESERVED_IDENTIFIER_FIXUP_643;
    float _RESERVED_IDENTIFIER_FIXUP_649 = clamp((_RESERVED_IDENTIFIER_FIXUP_643 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1297.x = _RESERVED_IDENTIFIER_FIXUP_649;
    float _RESERVED_IDENTIFIER_FIXUP_655 = ((-_RESERVED_IDENTIFIER_FIXUP_649) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1297.y = _RESERVED_IDENTIFIER_FIXUP_655;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1568;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1567;
    if (_RESERVED_IDENTIFIER_FIXUP_655 != (-_RESERVED_IDENTIFIER_FIXUP_655))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_667 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_677 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_679 = _RESERVED_IDENTIFIER_FIXUP_677.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1311 = _RESERVED_IDENTIFIER_FIXUP_1297;
        _RESERVED_IDENTIFIER_FIXUP_1311.y = _RESERVED_IDENTIFIER_FIXUP_679;
        _RESERVED_IDENTIFIER_FIXUP_1311.z = _RESERVED_IDENTIFIER_FIXUP_677.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_687 = _RESERVED_IDENTIFIER_FIXUP_1311.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1315;
        _RESERVED_IDENTIFIER_FIXUP_1315.x = _RESERVED_IDENTIFIER_FIXUP_687.x;
        _RESERVED_IDENTIFIER_FIXUP_1315.y = _RESERVED_IDENTIFIER_FIXUP_687.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_694 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_698 = _RESERVED_IDENTIFIER_FIXUP_694.y;
        _RESERVED_IDENTIFIER_FIXUP_1315.w = _RESERVED_IDENTIFIER_FIXUP_698;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_667.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_667.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1315.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_698;
        float _RESERVED_IDENTIFIER_FIXUP_709 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1575 = vec4(_RESERVED_IDENTIFIER_FIXUP_649, _RESERVED_IDENTIFIER_FIXUP_679, _RESERVED_IDENTIFIER_FIXUP_677.y, _RESERVED_IDENTIFIER_FIXUP_709);
        vec2 _RESERVED_IDENTIFIER_FIXUP_716 = _RESERVED_IDENTIFIER_FIXUP_1575.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1328;
        _RESERVED_IDENTIFIER_FIXUP_1328.x = _RESERVED_IDENTIFIER_FIXUP_716.x;
        _RESERVED_IDENTIFIER_FIXUP_1328.y = _RESERVED_IDENTIFIER_FIXUP_716.y;
        _RESERVED_IDENTIFIER_FIXUP_1328.w = _RESERVED_IDENTIFIER_FIXUP_698;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1328.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_698;
        float _RESERVED_IDENTIFIER_FIXUP_738 = _RESERVED_IDENTIFIER_FIXUP_709 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1575.w = _RESERVED_IDENTIFIER_FIXUP_738;
        vec2 _RESERVED_IDENTIFIER_FIXUP_745 = _RESERVED_IDENTIFIER_FIXUP_1575.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1341;
        _RESERVED_IDENTIFIER_FIXUP_1341.x = _RESERVED_IDENTIFIER_FIXUP_745.x;
        _RESERVED_IDENTIFIER_FIXUP_1341.y = _RESERVED_IDENTIFIER_FIXUP_745.y;
        _RESERVED_IDENTIFIER_FIXUP_1341.w = _RESERVED_IDENTIFIER_FIXUP_698;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1341.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_698;
        float _RESERVED_IDENTIFIER_FIXUP_767 = _RESERVED_IDENTIFIER_FIXUP_738 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1575.w = _RESERVED_IDENTIFIER_FIXUP_767;
        vec2 _RESERVED_IDENTIFIER_FIXUP_774 = _RESERVED_IDENTIFIER_FIXUP_1575.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1354;
        _RESERVED_IDENTIFIER_FIXUP_1354.x = _RESERVED_IDENTIFIER_FIXUP_774.x;
        _RESERVED_IDENTIFIER_FIXUP_1354.y = _RESERVED_IDENTIFIER_FIXUP_774.y;
        _RESERVED_IDENTIFIER_FIXUP_1354.w = _RESERVED_IDENTIFIER_FIXUP_698;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1354.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_698;
        vec4 _RESERVED_IDENTIFIER_FIXUP_791 = hdLod5(param_12, param_13);
        float _RESERVED_IDENTIFIER_FIXUP_796 = _RESERVED_IDENTIFIER_FIXUP_767 + _RESERVED_IDENTIFIER_FIXUP_791.x;
        _RESERVED_IDENTIFIER_FIXUP_1575.y = _RESERVED_IDENTIFIER_FIXUP_796;
        float _RESERVED_IDENTIFIER_FIXUP_801 = (_RESERVED_IDENTIFIER_FIXUP_796 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1575.y = _RESERVED_IDENTIFIER_FIXUP_801;
        float _RESERVED_IDENTIFIER_FIXUP_808 = (_RESERVED_IDENTIFIER_FIXUP_649 * _RESERVED_IDENTIFIER_FIXUP_801) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1575.x = _RESERVED_IDENTIFIER_FIXUP_808;
        _RESERVED_IDENTIFIER_FIXUP_791.x = min(_RESERVED_IDENTIFIER_FIXUP_808, _RESERVED_IDENTIFIER_FIXUP_610.w);
        _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_1575;
        _RESERVED_IDENTIFIER_FIXUP_1567 = _RESERVED_IDENTIFIER_FIXUP_791;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_606.x = _RESERVED_IDENTIFIER_FIXUP_610.w;
        _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_1297;
        _RESERVED_IDENTIFIER_FIXUP_1567 = _RESERVED_IDENTIFIER_FIXUP_606;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_1568;
    _RESERVED_IDENTIFIER_FIXUP_1381.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_837 = _RESERVED_IDENTIFIER_FIXUP_636.xyz * _RESERVED_IDENTIFIER_FIXUP_1381.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1383 = _RESERVED_IDENTIFIER_FIXUP_636;
    _RESERVED_IDENTIFIER_FIXUP_1383.x = _RESERVED_IDENTIFIER_FIXUP_837.x;
    _RESERVED_IDENTIFIER_FIXUP_1383.y = _RESERVED_IDENTIFIER_FIXUP_837.y;
    _RESERVED_IDENTIFIER_FIXUP_1383.z = _RESERVED_IDENTIFIER_FIXUP_837.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_848 = _RESERVED_IDENTIFIER_FIXUP_1383.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1565).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1389 = _RESERVED_IDENTIFIER_FIXUP_1383;
    _RESERVED_IDENTIFIER_FIXUP_1389.x = _RESERVED_IDENTIFIER_FIXUP_848.x;
    _RESERVED_IDENTIFIER_FIXUP_1389.y = _RESERVED_IDENTIFIER_FIXUP_848.y;
    _RESERVED_IDENTIFIER_FIXUP_1389.z = _RESERVED_IDENTIFIER_FIXUP_848.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_859 = _RESERVED_IDENTIFIER_FIXUP_1389.xyz + _RESERVED_IDENTIFIER_FIXUP_1389.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1395 = _RESERVED_IDENTIFIER_FIXUP_1389;
    _RESERVED_IDENTIFIER_FIXUP_1395.x = _RESERVED_IDENTIFIER_FIXUP_859.x;
    _RESERVED_IDENTIFIER_FIXUP_1395.y = _RESERVED_IDENTIFIER_FIXUP_859.y;
    _RESERVED_IDENTIFIER_FIXUP_1395.z = _RESERVED_IDENTIFIER_FIXUP_859.z;
    _RESERVED_IDENTIFIER_FIXUP_1381.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1381.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1381.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_884 = (_RESERVED_IDENTIFIER_FIXUP_1381.xyz * _RESERVED_IDENTIFIER_FIXUP_1567.xxx) + _RESERVED_IDENTIFIER_FIXUP_1395.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_1395;
    _RESERVED_IDENTIFIER_FIXUP_1407.x = _RESERVED_IDENTIFIER_FIXUP_884.x;
    _RESERVED_IDENTIFIER_FIXUP_1407.y = _RESERVED_IDENTIFIER_FIXUP_884.y;
    _RESERVED_IDENTIFIER_FIXUP_1407.z = _RESERVED_IDENTIFIER_FIXUP_884.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_897 = _RESERVED_IDENTIFIER_FIXUP_1407.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = _RESERVED_IDENTIFIER_FIXUP_1407;
    _RESERVED_IDENTIFIER_FIXUP_1413.x = _RESERVED_IDENTIFIER_FIXUP_897.x;
    _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_897.y;
    _RESERVED_IDENTIFIER_FIXUP_1413.z = _RESERVED_IDENTIFIER_FIXUP_897.z;
    vec2 param_14 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_947 = hdTex0(param_14);
    vec2 param_15 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_951 = hdTex1(param_15);
    vec2 param_16 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_955 = hdTex2(param_16);
    vec2 param_17 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_959 = hdTex3(param_17);
    float _RESERVED_IDENTIFIER_FIXUP_963 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_959.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1427 = _RESERVED_IDENTIFIER_FIXUP_959;
    _RESERVED_IDENTIFIER_FIXUP_1427.z = _RESERVED_IDENTIFIER_FIXUP_963;
    _RESERVED_IDENTIFIER_FIXUP_1427.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_963;
    vec4 _RESERVED_IDENTIFIER_FIXUP_973 = _RESERVED_IDENTIFIER_FIXUP_951 * _RESERVED_IDENTIFIER_FIXUP_1427.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_985 = (_RESERVED_IDENTIFIER_FIXUP_955 * _RESERVED_IDENTIFIER_FIXUP_1427.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_947 * _RESERVED_IDENTIFIER_FIXUP_1427.zzzz) + _RESERVED_IDENTIFIER_FIXUP_973);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1434 = _RESERVED_IDENTIFIER_FIXUP_973;
    _RESERVED_IDENTIFIER_FIXUP_1434.x = _RESERVED_IDENTIFIER_FIXUP_643;
    float _RESERVED_IDENTIFIER_FIXUP_998 = clamp((_RESERVED_IDENTIFIER_FIXUP_643 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1434.x = _RESERVED_IDENTIFIER_FIXUP_998;
    float _RESERVED_IDENTIFIER_FIXUP_1004 = ((-_RESERVED_IDENTIFIER_FIXUP_998) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1434.y = _RESERVED_IDENTIFIER_FIXUP_1004;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1572;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1571;
    if (_RESERVED_IDENTIFIER_FIXUP_1004 != (-_RESERVED_IDENTIFIER_FIXUP_1004))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1016 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1026 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1028 = _RESERVED_IDENTIFIER_FIXUP_1026.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1448 = _RESERVED_IDENTIFIER_FIXUP_1434;
        _RESERVED_IDENTIFIER_FIXUP_1448.y = _RESERVED_IDENTIFIER_FIXUP_1028;
        _RESERVED_IDENTIFIER_FIXUP_1448.z = _RESERVED_IDENTIFIER_FIXUP_1026.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1036 = _RESERVED_IDENTIFIER_FIXUP_1448.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1452;
        _RESERVED_IDENTIFIER_FIXUP_1452.x = _RESERVED_IDENTIFIER_FIXUP_1036.x;
        _RESERVED_IDENTIFIER_FIXUP_1452.y = _RESERVED_IDENTIFIER_FIXUP_1036.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1043 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1047 = _RESERVED_IDENTIFIER_FIXUP_1043.y;
        _RESERVED_IDENTIFIER_FIXUP_1452.w = _RESERVED_IDENTIFIER_FIXUP_1047;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1016.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1016.w;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1452.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1047;
        float _RESERVED_IDENTIFIER_FIXUP_1058 = hdLod5(param_18, param_19).x + hdLod5(param_20, param_21).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1577 = vec4(_RESERVED_IDENTIFIER_FIXUP_998, _RESERVED_IDENTIFIER_FIXUP_1028, _RESERVED_IDENTIFIER_FIXUP_1026.y, _RESERVED_IDENTIFIER_FIXUP_1058);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1065 = _RESERVED_IDENTIFIER_FIXUP_1577.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1465;
        _RESERVED_IDENTIFIER_FIXUP_1465.x = _RESERVED_IDENTIFIER_FIXUP_1065.x;
        _RESERVED_IDENTIFIER_FIXUP_1465.y = _RESERVED_IDENTIFIER_FIXUP_1065.y;
        _RESERVED_IDENTIFIER_FIXUP_1465.w = _RESERVED_IDENTIFIER_FIXUP_1047;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1465.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1047;
        float _RESERVED_IDENTIFIER_FIXUP_1087 = _RESERVED_IDENTIFIER_FIXUP_1058 + hdLod5(param_22, param_23).x;
        _RESERVED_IDENTIFIER_FIXUP_1577.w = _RESERVED_IDENTIFIER_FIXUP_1087;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1094 = _RESERVED_IDENTIFIER_FIXUP_1577.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1478;
        _RESERVED_IDENTIFIER_FIXUP_1478.x = _RESERVED_IDENTIFIER_FIXUP_1094.x;
        _RESERVED_IDENTIFIER_FIXUP_1478.y = _RESERVED_IDENTIFIER_FIXUP_1094.y;
        _RESERVED_IDENTIFIER_FIXUP_1478.w = _RESERVED_IDENTIFIER_FIXUP_1047;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1478.xy;
        float param_25 = _RESERVED_IDENTIFIER_FIXUP_1047;
        float _RESERVED_IDENTIFIER_FIXUP_1116 = _RESERVED_IDENTIFIER_FIXUP_1087 + hdLod5(param_24, param_25).x;
        _RESERVED_IDENTIFIER_FIXUP_1577.w = _RESERVED_IDENTIFIER_FIXUP_1116;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1123 = _RESERVED_IDENTIFIER_FIXUP_1577.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1491;
        _RESERVED_IDENTIFIER_FIXUP_1491.x = _RESERVED_IDENTIFIER_FIXUP_1123.x;
        _RESERVED_IDENTIFIER_FIXUP_1491.y = _RESERVED_IDENTIFIER_FIXUP_1123.y;
        _RESERVED_IDENTIFIER_FIXUP_1491.w = _RESERVED_IDENTIFIER_FIXUP_1047;
        vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1491.xy;
        float param_27 = _RESERVED_IDENTIFIER_FIXUP_1047;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1140 = hdLod5(param_26, param_27);
        float _RESERVED_IDENTIFIER_FIXUP_1145 = _RESERVED_IDENTIFIER_FIXUP_1116 + _RESERVED_IDENTIFIER_FIXUP_1140.x;
        _RESERVED_IDENTIFIER_FIXUP_1577.y = _RESERVED_IDENTIFIER_FIXUP_1145;
        float _RESERVED_IDENTIFIER_FIXUP_1150 = (_RESERVED_IDENTIFIER_FIXUP_1145 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1577.y = _RESERVED_IDENTIFIER_FIXUP_1150;
        float _RESERVED_IDENTIFIER_FIXUP_1157 = (_RESERVED_IDENTIFIER_FIXUP_998 * _RESERVED_IDENTIFIER_FIXUP_1150) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1577.x = _RESERVED_IDENTIFIER_FIXUP_1157;
        _RESERVED_IDENTIFIER_FIXUP_1140.x = min(_RESERVED_IDENTIFIER_FIXUP_1157, _RESERVED_IDENTIFIER_FIXUP_959.w);
        _RESERVED_IDENTIFIER_FIXUP_1572 = _RESERVED_IDENTIFIER_FIXUP_1577;
        _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_1140;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_955.x = _RESERVED_IDENTIFIER_FIXUP_959.w;
        _RESERVED_IDENTIFIER_FIXUP_1572 = _RESERVED_IDENTIFIER_FIXUP_1434;
        _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_955;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1173 = (_RESERVED_IDENTIFIER_FIXUP_1571.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1516 = _RESERVED_IDENTIFIER_FIXUP_1572;
    _RESERVED_IDENTIFIER_FIXUP_1516.x = _RESERVED_IDENTIFIER_FIXUP_1173;
    _RESERVED_IDENTIFIER_FIXUP_1516.x = _RESERVED_IDENTIFIER_FIXUP_1173;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1186 = _RESERVED_IDENTIFIER_FIXUP_985.xyz * _RESERVED_IDENTIFIER_FIXUP_1516.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1522 = _RESERVED_IDENTIFIER_FIXUP_985;
    _RESERVED_IDENTIFIER_FIXUP_1522.x = _RESERVED_IDENTIFIER_FIXUP_1186.x;
    _RESERVED_IDENTIFIER_FIXUP_1522.y = _RESERVED_IDENTIFIER_FIXUP_1186.y;
    _RESERVED_IDENTIFIER_FIXUP_1522.z = _RESERVED_IDENTIFIER_FIXUP_1186.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1197 = _RESERVED_IDENTIFIER_FIXUP_1522.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1528 = _RESERVED_IDENTIFIER_FIXUP_1522;
    _RESERVED_IDENTIFIER_FIXUP_1528.x = _RESERVED_IDENTIFIER_FIXUP_1197.x;
    _RESERVED_IDENTIFIER_FIXUP_1528.y = _RESERVED_IDENTIFIER_FIXUP_1197.y;
    _RESERVED_IDENTIFIER_FIXUP_1528.z = _RESERVED_IDENTIFIER_FIXUP_1197.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1208 = _RESERVED_IDENTIFIER_FIXUP_1528.xyz + _RESERVED_IDENTIFIER_FIXUP_1528.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1534 = _RESERVED_IDENTIFIER_FIXUP_1528;
    _RESERVED_IDENTIFIER_FIXUP_1534.x = _RESERVED_IDENTIFIER_FIXUP_1208.x;
    _RESERVED_IDENTIFIER_FIXUP_1534.y = _RESERVED_IDENTIFIER_FIXUP_1208.y;
    _RESERVED_IDENTIFIER_FIXUP_1534.z = _RESERVED_IDENTIFIER_FIXUP_1208.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1219 = _RESERVED_IDENTIFIER_FIXUP_1534.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1516.x = _RESERVED_IDENTIFIER_FIXUP_1219.x;
    _RESERVED_IDENTIFIER_FIXUP_1516.y = _RESERVED_IDENTIFIER_FIXUP_1219.y;
    _RESERVED_IDENTIFIER_FIXUP_1516.z = _RESERVED_IDENTIFIER_FIXUP_1219.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1233 = (_RESERVED_IDENTIFIER_FIXUP_1516.xyz * _RESERVED_IDENTIFIER_FIXUP_1571.xxx) + _RESERVED_IDENTIFIER_FIXUP_1534.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1546 = _RESERVED_IDENTIFIER_FIXUP_1534;
    _RESERVED_IDENTIFIER_FIXUP_1546.x = _RESERVED_IDENTIFIER_FIXUP_1233.x;
    _RESERVED_IDENTIFIER_FIXUP_1546.y = _RESERVED_IDENTIFIER_FIXUP_1233.y;
    _RESERVED_IDENTIFIER_FIXUP_1546.z = _RESERVED_IDENTIFIER_FIXUP_1233.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1246 = _RESERVED_IDENTIFIER_FIXUP_1546.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1552 = _RESERVED_IDENTIFIER_FIXUP_1546;
    _RESERVED_IDENTIFIER_FIXUP_1552.x = _RESERVED_IDENTIFIER_FIXUP_1246.x;
    _RESERVED_IDENTIFIER_FIXUP_1552.y = _RESERVED_IDENTIFIER_FIXUP_1246.y;
    _RESERVED_IDENTIFIER_FIXUP_1552.z = _RESERVED_IDENTIFIER_FIXUP_1246.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1552.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_462 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_471;
    if (_RESERVED_IDENTIFIER_FIXUP_462)
    {
        _RESERVED_IDENTIFIER_FIXUP_471 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_471 = _RESERVED_IDENTIFIER_FIXUP_462;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_471)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_508 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1413.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_535 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1283;
    if (_RESERVED_IDENTIFIER_FIXUP_508 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1283 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_508), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_535);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1283 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_535);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1283;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1173);
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 *= r3.xxxx;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB150 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB150.x;
        r1.z = hdB150.y;
        vec2 hdB171 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB171.x;
        r4.y = hdB171.y;
        vec2 hdB179 = vec2(1.0, 0.0) * v5.zx;
        r4.z = hdB179.x;
        r4.w = hdB179.y;
        vec2 param_6 = r4.xy;
        float param_7 = r4.w;
        r4 = hdLod5(param_6, param_7);
        r1.w = r2.x + r4.x;
        vec2 hdB202 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB202.x;
        r2.y = hdB202.y;
        vec2 hdB209 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB209.x;
        r2.w = hdB209.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB232 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB232.x;
        r2.y = hdB232.y;
        vec2 hdB239 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB239.x;
        r2.w = hdB239.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.w += r2.x;
        vec2 hdB262 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB262.x;
        r2.y = hdB262.y;
        vec2 hdB269 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB269.x;
        r2.w = hdB269.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.y = r1.w + r2.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r3.w);
    }
    else
    {
        r2.x = r3.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB317 = r0;
    vec3 hdB321 = hdB317.xyz * r1.xxx;
    r0.x = hdB321.x;
    r0.y = hdB321.y;
    r0.z = hdB321.z;
    vec4 hdB328 = r0;
    vec3 hdB332 = hdB328.xyz * v0.xyz;
    r0.x = hdB332.x;
    r0.y = hdB332.y;
    r0.z = hdB332.z;
    vec4 hdB339 = r0;
    vec4 hdB341 = r0;
    vec3 hdB343 = hdB339.xyz + hdB341.xyz;
    r0.x = hdB343.x;
    r0.y = hdB343.y;
    r0.z = hdB343.z;
    vec3 hdB354 = r0.www * v1.xyz;
    r1.x = hdB354.x;
    r1.y = hdB354.y;
    r1.z = hdB354.z;
    vec4 hdB366 = r0;
    vec3 hdB368 = (r1.xyz * r2.xxx) + hdB366.xyz;
    r0.x = hdB368.x;
    r0.y = hdB368.y;
    r0.z = hdB368.z;
    vec4 hdB375 = r0;
    vec3 hdB382 = hdB375.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB382.x;
    r0.y = hdB382.y;
    r0.z = hdB382.z;
    vec3 hdB397 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB397.x;
    oC0.y = hdB397.y;
    oC0.z = hdB397.z;
    oC0.w = 1.0;
    bool hdB410 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB418;
    if (hdB410)
    {
        hdB418 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB418 = hdB410;
    }
    if (hdB418)
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
    bool _1542 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1552;
    if (_1542)
    {
        _1552 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1552 = _1542;
    }
    if (_1552)
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
        bool _1577 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1592;
        if (!_1577)
        {
            _1592 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1592 = _1577;
        }
        if (_1592)
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
