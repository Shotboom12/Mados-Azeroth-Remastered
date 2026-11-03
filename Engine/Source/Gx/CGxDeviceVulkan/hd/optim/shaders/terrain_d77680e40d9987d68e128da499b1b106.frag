#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1450;
vec4 _RESERVED_IDENTIFIER_FIXUP_1451;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _50 = hdOverride >= 0;
    bool _70;
    if (_50)
    {
        _70 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _70 = _50;
    }
    vec4 _71;
    if (_70)
    {
        _71 = vec4(float(hdOverride));
    }
    else
    {
        _71 = value;
    }
    return _71;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _88 = hdOverride >= 0;
    bool _98;
    if (_88)
    {
        _98 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _98 = _88;
    }
    vec4 _99;
    if (_98)
    {
        _99 = vec4(float(hdOverride));
    }
    else
    {
        _99 = value;
    }
    return _99;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _116 = hdOverride >= 0;
    bool _125;
    if (_116)
    {
        _125 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _125 = _116;
    }
    vec4 _126;
    if (_125)
    {
        _126 = vec4(float(hdOverride));
    }
    else
    {
        _126 = value;
    }
    return _126;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _143 = hdOverride >= 0;
    bool _153;
    if (_143)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _153 = _143;
    }
    vec4 _154;
    if (_153)
    {
        _154 = vec4(float(hdOverride));
    }
    else
    {
        _154 = value;
    }
    return _154;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_570 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_573 = _RESERVED_IDENTIFIER_FIXUP_570.xy;
    float _RESERVED_IDENTIFIER_FIXUP_575 = _RESERVED_IDENTIFIER_FIXUP_570.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_573;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_575;
    vec4 _RESERVED_IDENTIFIER_FIXUP_576 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1192;
    _RESERVED_IDENTIFIER_FIXUP_1192.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_584 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1194;
    _RESERVED_IDENTIFIER_FIXUP_1194.x = _RESERVED_IDENTIFIER_FIXUP_584.x;
    _RESERVED_IDENTIFIER_FIXUP_1194.y = _RESERVED_IDENTIFIER_FIXUP_584.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_594 = _RESERVED_IDENTIFIER_FIXUP_1194.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1198 = _RESERVED_IDENTIFIER_FIXUP_1192;
    _RESERVED_IDENTIFIER_FIXUP_1198.x = _RESERVED_IDENTIFIER_FIXUP_594.x;
    _RESERVED_IDENTIFIER_FIXUP_1198.y = _RESERVED_IDENTIFIER_FIXUP_594.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1198.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_576.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_617 = _RESERVED_IDENTIFIER_FIXUP_1194.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1210 = _RESERVED_IDENTIFIER_FIXUP_1192;
    _RESERVED_IDENTIFIER_FIXUP_1210.x = _RESERVED_IDENTIFIER_FIXUP_617.x;
    _RESERVED_IDENTIFIER_FIXUP_1210.y = _RESERVED_IDENTIFIER_FIXUP_617.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1210.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_576.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_636 = _RESERVED_IDENTIFIER_FIXUP_1194.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_1218.x = _RESERVED_IDENTIFIER_FIXUP_636.x;
    _RESERVED_IDENTIFIER_FIXUP_1218.y = _RESERVED_IDENTIFIER_FIXUP_636.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_646 = _RESERVED_IDENTIFIER_FIXUP_1194.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1222;
    _RESERVED_IDENTIFIER_FIXUP_1222.x = _RESERVED_IDENTIFIER_FIXUP_646.x;
    _RESERVED_IDENTIFIER_FIXUP_1222.y = _RESERVED_IDENTIFIER_FIXUP_646.y;
    _RESERVED_IDENTIFIER_FIXUP_1218.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1218.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_576.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1222.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_714 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_732 = hdTex3(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1222.xy;
    float param_10 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1268;
    _RESERVED_IDENTIFIER_FIXUP_1268.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_714 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_576 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_732.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1273;
    _RESERVED_IDENTIFIER_FIXUP_1273.x = 1.0;
    vec2 param_11 = texcoord1.xy;
    vec2 param_12 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_777 = _RESERVED_IDENTIFIER_FIXUP_1273.xxx * mix(mix(OptTex0( texcoord0.xyz), hdTex1(param_11), _RESERVED_IDENTIFIER_FIXUP_732.xxxx), hdTex2(param_12), _RESERVED_IDENTIFIER_FIXUP_732.yyyy).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1275;
    _RESERVED_IDENTIFIER_FIXUP_1275.x = _RESERVED_IDENTIFIER_FIXUP_777.x;
    _RESERVED_IDENTIFIER_FIXUP_1275.y = _RESERVED_IDENTIFIER_FIXUP_777.y;
    _RESERVED_IDENTIFIER_FIXUP_1275.z = _RESERVED_IDENTIFIER_FIXUP_777.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1281;
    _RESERVED_IDENTIFIER_FIXUP_1281.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1281.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1281.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_799 = _RESERVED_IDENTIFIER_FIXUP_1275.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1450).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1287;
    _RESERVED_IDENTIFIER_FIXUP_1287.x = _RESERVED_IDENTIFIER_FIXUP_799.x;
    _RESERVED_IDENTIFIER_FIXUP_1287.y = _RESERVED_IDENTIFIER_FIXUP_799.y;
    _RESERVED_IDENTIFIER_FIXUP_1287.z = _RESERVED_IDENTIFIER_FIXUP_799.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_810 = _RESERVED_IDENTIFIER_FIXUP_1287.xyz + _RESERVED_IDENTIFIER_FIXUP_1287.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1293;
    _RESERVED_IDENTIFIER_FIXUP_1293.x = _RESERVED_IDENTIFIER_FIXUP_810.x;
    _RESERVED_IDENTIFIER_FIXUP_1293.y = _RESERVED_IDENTIFIER_FIXUP_810.y;
    _RESERVED_IDENTIFIER_FIXUP_1293.z = _RESERVED_IDENTIFIER_FIXUP_810.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_824 = (_RESERVED_IDENTIFIER_FIXUP_1281.xyz * _RESERVED_IDENTIFIER_FIXUP_1268.xxx) + _RESERVED_IDENTIFIER_FIXUP_1293.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1299;
    _RESERVED_IDENTIFIER_FIXUP_1299.x = _RESERVED_IDENTIFIER_FIXUP_824.x;
    _RESERVED_IDENTIFIER_FIXUP_1299.y = _RESERVED_IDENTIFIER_FIXUP_824.y;
    _RESERVED_IDENTIFIER_FIXUP_1299.z = _RESERVED_IDENTIFIER_FIXUP_824.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_837 = _RESERVED_IDENTIFIER_FIXUP_1299.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1305;
    _RESERVED_IDENTIFIER_FIXUP_1305.x = _RESERVED_IDENTIFIER_FIXUP_837.x;
    _RESERVED_IDENTIFIER_FIXUP_1305.y = _RESERVED_IDENTIFIER_FIXUP_837.y;
    _RESERVED_IDENTIFIER_FIXUP_1305.z = _RESERVED_IDENTIFIER_FIXUP_837.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_852 = _RESERVED_IDENTIFIER_FIXUP_1305.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1311;
    _RESERVED_IDENTIFIER_FIXUP_1311.x = _RESERVED_IDENTIFIER_FIXUP_852.x;
    _RESERVED_IDENTIFIER_FIXUP_1311.y = _RESERVED_IDENTIFIER_FIXUP_852.y;
    _RESERVED_IDENTIFIER_FIXUP_1311.z = _RESERVED_IDENTIFIER_FIXUP_852.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_573;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_575;
    vec4 _RESERVED_IDENTIFIER_FIXUP_894 = hdLod5(param_13, param_14);
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1198.xy;
    float param_16 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_894.y = hdLod5(param_15, param_16).x;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1210.xy;
    float param_18 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_894.z = hdLod5(param_17, param_18).x;
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1218.xy;
    float param_20 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_894.w = hdLod5(param_19, param_20).x;
    vec2 param_21 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1050 = hdTex3(param_21);
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1222.xy;
    float param_23 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1055 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_714 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_894 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_22, param_23).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1050.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1398;
    _RESERVED_IDENTIFIER_FIXUP_1398.x = _RESERVED_IDENTIFIER_FIXUP_1055;
    float _RESERVED_IDENTIFIER_FIXUP_1060 = (_RESERVED_IDENTIFIER_FIXUP_1055 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1405;
    _RESERVED_IDENTIFIER_FIXUP_1405.x = _RESERVED_IDENTIFIER_FIXUP_1060;
    vec2 param_24 = texcoord1.xy;
    vec2 param_25 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1090 = mix(mix(OptTex0( texcoord0.xyz), hdTex1(param_24), _RESERVED_IDENTIFIER_FIXUP_1050.xxxx), hdTex2(param_25), _RESERVED_IDENTIFIER_FIXUP_1050.yyyy);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1095 = _RESERVED_IDENTIFIER_FIXUP_1405.xxx * _RESERVED_IDENTIFIER_FIXUP_1090.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1407;
    _RESERVED_IDENTIFIER_FIXUP_1407.x = _RESERVED_IDENTIFIER_FIXUP_1095.x;
    _RESERVED_IDENTIFIER_FIXUP_1407.y = _RESERVED_IDENTIFIER_FIXUP_1095.y;
    _RESERVED_IDENTIFIER_FIXUP_1407.z = _RESERVED_IDENTIFIER_FIXUP_1095.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1106 = _RESERVED_IDENTIFIER_FIXUP_1090.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1413;
    _RESERVED_IDENTIFIER_FIXUP_1413.x = _RESERVED_IDENTIFIER_FIXUP_1106.x;
    _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_1106.y;
    _RESERVED_IDENTIFIER_FIXUP_1413.z = _RESERVED_IDENTIFIER_FIXUP_1106.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1407.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1419;
    _RESERVED_IDENTIFIER_FIXUP_1419.x = _RESERVED_IDENTIFIER_FIXUP_1117.x;
    _RESERVED_IDENTIFIER_FIXUP_1419.y = _RESERVED_IDENTIFIER_FIXUP_1117.y;
    _RESERVED_IDENTIFIER_FIXUP_1419.z = _RESERVED_IDENTIFIER_FIXUP_1117.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1128 = _RESERVED_IDENTIFIER_FIXUP_1419.xyz + _RESERVED_IDENTIFIER_FIXUP_1419.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1425;
    _RESERVED_IDENTIFIER_FIXUP_1425.x = _RESERVED_IDENTIFIER_FIXUP_1128.x;
    _RESERVED_IDENTIFIER_FIXUP_1425.y = _RESERVED_IDENTIFIER_FIXUP_1128.y;
    _RESERVED_IDENTIFIER_FIXUP_1425.z = _RESERVED_IDENTIFIER_FIXUP_1128.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1142 = (_RESERVED_IDENTIFIER_FIXUP_1413.xyz * _RESERVED_IDENTIFIER_FIXUP_1398.xxx) + _RESERVED_IDENTIFIER_FIXUP_1425.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1431;
    _RESERVED_IDENTIFIER_FIXUP_1431.x = _RESERVED_IDENTIFIER_FIXUP_1142.x;
    _RESERVED_IDENTIFIER_FIXUP_1431.y = _RESERVED_IDENTIFIER_FIXUP_1142.y;
    _RESERVED_IDENTIFIER_FIXUP_1431.z = _RESERVED_IDENTIFIER_FIXUP_1142.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1155 = _RESERVED_IDENTIFIER_FIXUP_1431.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1437;
    _RESERVED_IDENTIFIER_FIXUP_1437.x = _RESERVED_IDENTIFIER_FIXUP_1155.x;
    _RESERVED_IDENTIFIER_FIXUP_1437.y = _RESERVED_IDENTIFIER_FIXUP_1155.y;
    _RESERVED_IDENTIFIER_FIXUP_1437.z = _RESERVED_IDENTIFIER_FIXUP_1155.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1437.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_434 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_443;
    if (_RESERVED_IDENTIFIER_FIXUP_434)
    {
        _RESERVED_IDENTIFIER_FIXUP_443 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_443 = _RESERVED_IDENTIFIER_FIXUP_434;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_443)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_480 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1311.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_507 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181;
    if (_RESERVED_IDENTIFIER_FIXUP_480 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1181 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_480), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_507);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1181 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_507);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1181;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1060);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB73 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB73.x;
    r2.y = hdB73.y;
    vec2 hdB96 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB96.x;
    r1.y = hdB96.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB120 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB120.x;
    r1.y = hdB120.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB140 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB140.x;
    r1.y = hdB140.y;
    vec4 hdB145 = r2;
    vec2 hdB151 = hdB145.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB151.x;
    r2.y = hdB151.y;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.w = r1.x;
    r0 += (-v5.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.y = r1.x + (-v5.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v5.x), abs(v5.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v4.xy;
    r1 = hdTex3(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r3 = OptTex0( v2.xyz);
    vec2 param_11 = v3.xy;
    r4 = hdTex1(param_11);
    r5 = mix(r3, r4, r1.xxxx);
    vec2 param_12 = v3.wz;
    r3 = hdTex2(param_12);
    r4 = mix(r5, r3, r1.yyyy);
    vec4 hdB289 = r0;
    vec3 hdB293 = hdB289.xxx * r4.xyz;
    r0.x = hdB293.x;
    r0.y = hdB293.y;
    r0.z = hdB293.z;
    vec3 hdB304 = r4.www * v1.xyz;
    r1.x = hdB304.x;
    r1.y = hdB304.y;
    r1.z = hdB304.z;
    vec4 hdB311 = r0;
    vec3 hdB315 = hdB311.xyz * v0.xyz;
    r0.x = hdB315.x;
    r0.y = hdB315.y;
    r0.z = hdB315.z;
    vec4 hdB322 = r0;
    vec4 hdB324 = r0;
    vec3 hdB326 = hdB322.xyz + hdB324.xyz;
    r0.x = hdB326.x;
    r0.y = hdB326.y;
    r0.z = hdB326.z;
    vec4 hdB338 = r0;
    vec3 hdB340 = (r1.xyz * r2.xxx) + hdB338.xyz;
    r0.x = hdB340.x;
    r0.y = hdB340.y;
    r0.z = hdB340.z;
    vec4 hdB347 = r0;
    vec3 hdB354 = hdB347.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB354.x;
    r0.y = hdB354.y;
    r0.z = hdB354.z;
    vec3 hdB369 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB369.x;
    oC0.y = hdB369.y;
    oC0.z = hdB369.z;
    oC0.w = 1.0;
    bool hdB382 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB390;
    if (hdB382)
    {
        hdB390 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB390 = hdB382;
    }
    if (hdB390)
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
    bool _1204 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1214;
    if (_1204)
    {
        _1214 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1214 = _1204;
    }
    if (_1214)
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
        bool _1239 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1254;
        if (!_1239)
        {
            _1254 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1254 = _1239;
        }
        if (_1254)
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
