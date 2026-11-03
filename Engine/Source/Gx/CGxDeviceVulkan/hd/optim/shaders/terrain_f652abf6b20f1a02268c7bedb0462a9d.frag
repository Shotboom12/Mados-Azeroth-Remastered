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
float _RESERVED_IDENTIFIER_FIXUP_1444;
vec4 _RESERVED_IDENTIFIER_FIXUP_1445;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_557 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_561 = hdTex1(param);
    float _RESERVED_IDENTIFIER_FIXUP_568 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_561;
    _RESERVED_IDENTIFIER_FIXUP_1181.x = _RESERVED_IDENTIFIER_FIXUP_568;
    float _RESERVED_IDENTIFIER_FIXUP_574 = clamp((_RESERVED_IDENTIFIER_FIXUP_568 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1181.x = _RESERVED_IDENTIFIER_FIXUP_574;
    float _RESERVED_IDENTIFIER_FIXUP_580 = ((-_RESERVED_IDENTIFIER_FIXUP_574) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1181.y = _RESERVED_IDENTIFIER_FIXUP_580;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1447;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1446;
    if (_RESERVED_IDENTIFIER_FIXUP_580 != (-_RESERVED_IDENTIFIER_FIXUP_580))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_592 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_592.xy;
        float param_2 = _RESERVED_IDENTIFIER_FIXUP_592.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_598 = hdLod5(param_1, param_2);
        vec2 _RESERVED_IDENTIFIER_FIXUP_602 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1195 = _RESERVED_IDENTIFIER_FIXUP_1181;
        _RESERVED_IDENTIFIER_FIXUP_1195.y = _RESERVED_IDENTIFIER_FIXUP_602.x;
        _RESERVED_IDENTIFIER_FIXUP_1195.z = _RESERVED_IDENTIFIER_FIXUP_602.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_612 = _RESERVED_IDENTIFIER_FIXUP_1195.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1199;
        _RESERVED_IDENTIFIER_FIXUP_1199.x = _RESERVED_IDENTIFIER_FIXUP_612.x;
        _RESERVED_IDENTIFIER_FIXUP_1199.y = _RESERVED_IDENTIFIER_FIXUP_612.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_619 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_623 = _RESERVED_IDENTIFIER_FIXUP_619.y;
        _RESERVED_IDENTIFIER_FIXUP_1199.w = _RESERVED_IDENTIFIER_FIXUP_623;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1199.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_623;
        float _RESERVED_IDENTIFIER_FIXUP_634 = _RESERVED_IDENTIFIER_FIXUP_598.x + hdLod5(param_3, param_4).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1210 = _RESERVED_IDENTIFIER_FIXUP_598;
        _RESERVED_IDENTIFIER_FIXUP_1210.x = _RESERVED_IDENTIFIER_FIXUP_634;
        vec2 _RESERVED_IDENTIFIER_FIXUP_641 = _RESERVED_IDENTIFIER_FIXUP_1195.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1212;
        _RESERVED_IDENTIFIER_FIXUP_1212.x = _RESERVED_IDENTIFIER_FIXUP_641.x;
        _RESERVED_IDENTIFIER_FIXUP_1212.y = _RESERVED_IDENTIFIER_FIXUP_641.y;
        _RESERVED_IDENTIFIER_FIXUP_1212.w = _RESERVED_IDENTIFIER_FIXUP_623;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1212.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_623;
        float _RESERVED_IDENTIFIER_FIXUP_663 = _RESERVED_IDENTIFIER_FIXUP_634 + hdLod5(param_5, param_6).x;
        _RESERVED_IDENTIFIER_FIXUP_1210.x = _RESERVED_IDENTIFIER_FIXUP_663;
        vec2 _RESERVED_IDENTIFIER_FIXUP_670 = _RESERVED_IDENTIFIER_FIXUP_1195.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1225;
        _RESERVED_IDENTIFIER_FIXUP_1225.x = _RESERVED_IDENTIFIER_FIXUP_670.x;
        _RESERVED_IDENTIFIER_FIXUP_1225.y = _RESERVED_IDENTIFIER_FIXUP_670.y;
        _RESERVED_IDENTIFIER_FIXUP_1225.w = _RESERVED_IDENTIFIER_FIXUP_623;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1225.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_623;
        float _RESERVED_IDENTIFIER_FIXUP_692 = _RESERVED_IDENTIFIER_FIXUP_663 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_1210.x = _RESERVED_IDENTIFIER_FIXUP_692;
        vec2 _RESERVED_IDENTIFIER_FIXUP_699 = _RESERVED_IDENTIFIER_FIXUP_1195.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1238;
        _RESERVED_IDENTIFIER_FIXUP_1238.x = _RESERVED_IDENTIFIER_FIXUP_699.x;
        _RESERVED_IDENTIFIER_FIXUP_1238.y = _RESERVED_IDENTIFIER_FIXUP_699.y;
        _RESERVED_IDENTIFIER_FIXUP_1238.w = _RESERVED_IDENTIFIER_FIXUP_623;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1238.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_623;
        float _RESERVED_IDENTIFIER_FIXUP_721 = _RESERVED_IDENTIFIER_FIXUP_692 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_1195.y = _RESERVED_IDENTIFIER_FIXUP_721;
        float _RESERVED_IDENTIFIER_FIXUP_726 = (_RESERVED_IDENTIFIER_FIXUP_721 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1195.y = _RESERVED_IDENTIFIER_FIXUP_726;
        float _RESERVED_IDENTIFIER_FIXUP_733 = (_RESERVED_IDENTIFIER_FIXUP_574 * _RESERVED_IDENTIFIER_FIXUP_726) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1195.x = _RESERVED_IDENTIFIER_FIXUP_733;
        _RESERVED_IDENTIFIER_FIXUP_1210.x = min(_RESERVED_IDENTIFIER_FIXUP_733, _RESERVED_IDENTIFIER_FIXUP_561.w);
        _RESERVED_IDENTIFIER_FIXUP_1447 = _RESERVED_IDENTIFIER_FIXUP_1195;
        _RESERVED_IDENTIFIER_FIXUP_1446 = _RESERVED_IDENTIFIER_FIXUP_1210;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1192 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1192.x = _RESERVED_IDENTIFIER_FIXUP_561.w;
        _RESERVED_IDENTIFIER_FIXUP_1447 = _RESERVED_IDENTIFIER_FIXUP_1181;
        _RESERVED_IDENTIFIER_FIXUP_1446 = _RESERVED_IDENTIFIER_FIXUP_1192;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_1447;
    _RESERVED_IDENTIFIER_FIXUP_1265.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_762 = _RESERVED_IDENTIFIER_FIXUP_557.xyz * _RESERVED_IDENTIFIER_FIXUP_1265.xxx;
    _RESERVED_IDENTIFIER_FIXUP_557.x = _RESERVED_IDENTIFIER_FIXUP_762.x;
    _RESERVED_IDENTIFIER_FIXUP_557.y = _RESERVED_IDENTIFIER_FIXUP_762.y;
    _RESERVED_IDENTIFIER_FIXUP_557.z = _RESERVED_IDENTIFIER_FIXUP_762.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_773 = _RESERVED_IDENTIFIER_FIXUP_557.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1444).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1273 = _RESERVED_IDENTIFIER_FIXUP_557;
    _RESERVED_IDENTIFIER_FIXUP_1273.x = _RESERVED_IDENTIFIER_FIXUP_773.x;
    _RESERVED_IDENTIFIER_FIXUP_1273.y = _RESERVED_IDENTIFIER_FIXUP_773.y;
    _RESERVED_IDENTIFIER_FIXUP_1273.z = _RESERVED_IDENTIFIER_FIXUP_773.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_784 = _RESERVED_IDENTIFIER_FIXUP_1273.xyz + _RESERVED_IDENTIFIER_FIXUP_1273.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1279 = _RESERVED_IDENTIFIER_FIXUP_1273;
    _RESERVED_IDENTIFIER_FIXUP_1279.x = _RESERVED_IDENTIFIER_FIXUP_784.x;
    _RESERVED_IDENTIFIER_FIXUP_1279.y = _RESERVED_IDENTIFIER_FIXUP_784.y;
    _RESERVED_IDENTIFIER_FIXUP_1279.z = _RESERVED_IDENTIFIER_FIXUP_784.z;
    _RESERVED_IDENTIFIER_FIXUP_1265.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1265.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1265.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_809 = (_RESERVED_IDENTIFIER_FIXUP_1265.xyz * _RESERVED_IDENTIFIER_FIXUP_1446.xxx) + _RESERVED_IDENTIFIER_FIXUP_1279.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_1279;
    _RESERVED_IDENTIFIER_FIXUP_1291.x = _RESERVED_IDENTIFIER_FIXUP_809.x;
    _RESERVED_IDENTIFIER_FIXUP_1291.y = _RESERVED_IDENTIFIER_FIXUP_809.y;
    _RESERVED_IDENTIFIER_FIXUP_1291.z = _RESERVED_IDENTIFIER_FIXUP_809.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_822 = _RESERVED_IDENTIFIER_FIXUP_1291.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1297 = _RESERVED_IDENTIFIER_FIXUP_1291;
    _RESERVED_IDENTIFIER_FIXUP_1297.x = _RESERVED_IDENTIFIER_FIXUP_822.x;
    _RESERVED_IDENTIFIER_FIXUP_1297.y = _RESERVED_IDENTIFIER_FIXUP_822.y;
    _RESERVED_IDENTIFIER_FIXUP_1297.z = _RESERVED_IDENTIFIER_FIXUP_822.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_869 = OptTex0( texcoord0.xyz);
    vec2 param_11 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_873 = hdTex1(param_11);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1313 = _RESERVED_IDENTIFIER_FIXUP_873;
    _RESERVED_IDENTIFIER_FIXUP_1313.x = _RESERVED_IDENTIFIER_FIXUP_568;
    float _RESERVED_IDENTIFIER_FIXUP_886 = clamp((_RESERVED_IDENTIFIER_FIXUP_568 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1313.x = _RESERVED_IDENTIFIER_FIXUP_886;
    float _RESERVED_IDENTIFIER_FIXUP_892 = ((-_RESERVED_IDENTIFIER_FIXUP_886) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1313.y = _RESERVED_IDENTIFIER_FIXUP_892;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1451;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1450;
    if (_RESERVED_IDENTIFIER_FIXUP_892 != (-_RESERVED_IDENTIFIER_FIXUP_892))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_904 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_904.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_904.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_910 = hdLod5(param_12, param_13);
        vec2 _RESERVED_IDENTIFIER_FIXUP_914 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_1313;
        _RESERVED_IDENTIFIER_FIXUP_1327.y = _RESERVED_IDENTIFIER_FIXUP_914.x;
        _RESERVED_IDENTIFIER_FIXUP_1327.z = _RESERVED_IDENTIFIER_FIXUP_914.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_924 = _RESERVED_IDENTIFIER_FIXUP_1327.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1331;
        _RESERVED_IDENTIFIER_FIXUP_1331.x = _RESERVED_IDENTIFIER_FIXUP_924.x;
        _RESERVED_IDENTIFIER_FIXUP_1331.y = _RESERVED_IDENTIFIER_FIXUP_924.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_931 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_935 = _RESERVED_IDENTIFIER_FIXUP_931.y;
        _RESERVED_IDENTIFIER_FIXUP_1331.w = _RESERVED_IDENTIFIER_FIXUP_935;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1331.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_935;
        float _RESERVED_IDENTIFIER_FIXUP_946 = _RESERVED_IDENTIFIER_FIXUP_910.x + hdLod5(param_14, param_15).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1342 = _RESERVED_IDENTIFIER_FIXUP_910;
        _RESERVED_IDENTIFIER_FIXUP_1342.x = _RESERVED_IDENTIFIER_FIXUP_946;
        vec2 _RESERVED_IDENTIFIER_FIXUP_953 = _RESERVED_IDENTIFIER_FIXUP_1327.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1344;
        _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_953.x;
        _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_953.y;
        _RESERVED_IDENTIFIER_FIXUP_1344.w = _RESERVED_IDENTIFIER_FIXUP_935;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1344.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_935;
        float _RESERVED_IDENTIFIER_FIXUP_975 = _RESERVED_IDENTIFIER_FIXUP_946 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_1342.x = _RESERVED_IDENTIFIER_FIXUP_975;
        vec2 _RESERVED_IDENTIFIER_FIXUP_982 = _RESERVED_IDENTIFIER_FIXUP_1327.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1357;
        _RESERVED_IDENTIFIER_FIXUP_1357.x = _RESERVED_IDENTIFIER_FIXUP_982.x;
        _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_982.y;
        _RESERVED_IDENTIFIER_FIXUP_1357.w = _RESERVED_IDENTIFIER_FIXUP_935;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1357.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_935;
        float _RESERVED_IDENTIFIER_FIXUP_1004 = _RESERVED_IDENTIFIER_FIXUP_975 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_1342.x = _RESERVED_IDENTIFIER_FIXUP_1004;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1011 = _RESERVED_IDENTIFIER_FIXUP_1327.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1370;
        _RESERVED_IDENTIFIER_FIXUP_1370.x = _RESERVED_IDENTIFIER_FIXUP_1011.x;
        _RESERVED_IDENTIFIER_FIXUP_1370.y = _RESERVED_IDENTIFIER_FIXUP_1011.y;
        _RESERVED_IDENTIFIER_FIXUP_1370.w = _RESERVED_IDENTIFIER_FIXUP_935;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1370.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_935;
        float _RESERVED_IDENTIFIER_FIXUP_1033 = _RESERVED_IDENTIFIER_FIXUP_1004 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_1327.y = _RESERVED_IDENTIFIER_FIXUP_1033;
        float _RESERVED_IDENTIFIER_FIXUP_1038 = (_RESERVED_IDENTIFIER_FIXUP_1033 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1327.y = _RESERVED_IDENTIFIER_FIXUP_1038;
        float _RESERVED_IDENTIFIER_FIXUP_1045 = (_RESERVED_IDENTIFIER_FIXUP_886 * _RESERVED_IDENTIFIER_FIXUP_1038) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1327.x = _RESERVED_IDENTIFIER_FIXUP_1045;
        _RESERVED_IDENTIFIER_FIXUP_1342.x = min(_RESERVED_IDENTIFIER_FIXUP_1045, _RESERVED_IDENTIFIER_FIXUP_873.w);
        _RESERVED_IDENTIFIER_FIXUP_1451 = _RESERVED_IDENTIFIER_FIXUP_1327;
        _RESERVED_IDENTIFIER_FIXUP_1450 = _RESERVED_IDENTIFIER_FIXUP_1342;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1324 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1324.x = _RESERVED_IDENTIFIER_FIXUP_873.w;
        _RESERVED_IDENTIFIER_FIXUP_1451 = _RESERVED_IDENTIFIER_FIXUP_1313;
        _RESERVED_IDENTIFIER_FIXUP_1450 = _RESERVED_IDENTIFIER_FIXUP_1324;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1061 = (_RESERVED_IDENTIFIER_FIXUP_1450.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1395 = _RESERVED_IDENTIFIER_FIXUP_1451;
    _RESERVED_IDENTIFIER_FIXUP_1395.x = _RESERVED_IDENTIFIER_FIXUP_1061;
    _RESERVED_IDENTIFIER_FIXUP_1395.x = _RESERVED_IDENTIFIER_FIXUP_1061;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1074 = _RESERVED_IDENTIFIER_FIXUP_869.xyz * _RESERVED_IDENTIFIER_FIXUP_1395.xxx;
    _RESERVED_IDENTIFIER_FIXUP_869.x = _RESERVED_IDENTIFIER_FIXUP_1074.x;
    _RESERVED_IDENTIFIER_FIXUP_869.y = _RESERVED_IDENTIFIER_FIXUP_1074.y;
    _RESERVED_IDENTIFIER_FIXUP_869.z = _RESERVED_IDENTIFIER_FIXUP_1074.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1085 = _RESERVED_IDENTIFIER_FIXUP_869.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_869;
    _RESERVED_IDENTIFIER_FIXUP_1407.x = _RESERVED_IDENTIFIER_FIXUP_1085.x;
    _RESERVED_IDENTIFIER_FIXUP_1407.y = _RESERVED_IDENTIFIER_FIXUP_1085.y;
    _RESERVED_IDENTIFIER_FIXUP_1407.z = _RESERVED_IDENTIFIER_FIXUP_1085.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1096 = _RESERVED_IDENTIFIER_FIXUP_1407.xyz + _RESERVED_IDENTIFIER_FIXUP_1407.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1413 = _RESERVED_IDENTIFIER_FIXUP_1407;
    _RESERVED_IDENTIFIER_FIXUP_1413.x = _RESERVED_IDENTIFIER_FIXUP_1096.x;
    _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_1096.y;
    _RESERVED_IDENTIFIER_FIXUP_1413.z = _RESERVED_IDENTIFIER_FIXUP_1096.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1107 = _RESERVED_IDENTIFIER_FIXUP_1413.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1395.x = _RESERVED_IDENTIFIER_FIXUP_1107.x;
    _RESERVED_IDENTIFIER_FIXUP_1395.y = _RESERVED_IDENTIFIER_FIXUP_1107.y;
    _RESERVED_IDENTIFIER_FIXUP_1395.z = _RESERVED_IDENTIFIER_FIXUP_1107.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1121 = (_RESERVED_IDENTIFIER_FIXUP_1395.xyz * _RESERVED_IDENTIFIER_FIXUP_1450.xxx) + _RESERVED_IDENTIFIER_FIXUP_1413.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1425 = _RESERVED_IDENTIFIER_FIXUP_1413;
    _RESERVED_IDENTIFIER_FIXUP_1425.x = _RESERVED_IDENTIFIER_FIXUP_1121.x;
    _RESERVED_IDENTIFIER_FIXUP_1425.y = _RESERVED_IDENTIFIER_FIXUP_1121.y;
    _RESERVED_IDENTIFIER_FIXUP_1425.z = _RESERVED_IDENTIFIER_FIXUP_1121.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1134 = _RESERVED_IDENTIFIER_FIXUP_1425.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1431 = _RESERVED_IDENTIFIER_FIXUP_1425;
    _RESERVED_IDENTIFIER_FIXUP_1431.x = _RESERVED_IDENTIFIER_FIXUP_1134.x;
    _RESERVED_IDENTIFIER_FIXUP_1431.y = _RESERVED_IDENTIFIER_FIXUP_1134.y;
    _RESERVED_IDENTIFIER_FIXUP_1431.z = _RESERVED_IDENTIFIER_FIXUP_1134.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1431.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_424 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_433;
    if (_RESERVED_IDENTIFIER_FIXUP_424)
    {
        _RESERVED_IDENTIFIER_FIXUP_433 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_433 = _RESERVED_IDENTIFIER_FIXUP_424;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_433)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_470 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1297.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_497 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1171;
    if (_RESERVED_IDENTIFIER_FIXUP_470 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1171 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_470), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_497);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1171 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_497);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1171;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1061);
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
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_1 = r2.xy;
        float param_2 = r2.w;
        r2 = hdLod5(param_1, param_2);
        vec2 hdB111 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB111.x;
        r1.z = hdB111.y;
        vec2 hdB133 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB133.x;
        r3.y = hdB133.y;
        vec2 hdB141 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB141.x;
        r3.w = hdB141.y;
        vec2 param_3 = r3.xy;
        float param_4 = r3.w;
        r3 = hdLod5(param_3, param_4);
        r2.x += r3.x;
        vec2 hdB164 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB164.x;
        r3.y = hdB164.y;
        vec2 hdB171 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB171.x;
        r3.w = hdB171.y;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
        r2.x += r3.x;
        vec2 hdB194 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB194.x;
        r3.y = hdB194.y;
        vec2 hdB201 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB201.x;
        r3.w = hdB201.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r2.x += r3.x;
        vec2 hdB224 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB224.x;
        r3.y = hdB224.y;
        vec2 hdB231 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB231.x;
        r3.w = hdB231.y;
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
    vec4 hdB279 = r0;
    vec3 hdB283 = hdB279.xyz * r1.xxx;
    r0.x = hdB283.x;
    r0.y = hdB283.y;
    r0.z = hdB283.z;
    vec4 hdB290 = r0;
    vec3 hdB294 = hdB290.xyz * v0.xyz;
    r0.x = hdB294.x;
    r0.y = hdB294.y;
    r0.z = hdB294.z;
    vec4 hdB301 = r0;
    vec4 hdB303 = r0;
    vec3 hdB305 = hdB301.xyz + hdB303.xyz;
    r0.x = hdB305.x;
    r0.y = hdB305.y;
    r0.z = hdB305.z;
    vec3 hdB316 = r0.www * v1.xyz;
    r1.x = hdB316.x;
    r1.y = hdB316.y;
    r1.z = hdB316.z;
    vec4 hdB328 = r0;
    vec3 hdB330 = (r1.xyz * r2.xxx) + hdB328.xyz;
    r0.x = hdB330.x;
    r0.y = hdB330.y;
    r0.z = hdB330.z;
    vec4 hdB337 = r0;
    vec3 hdB344 = hdB337.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB344.x;
    r0.y = hdB344.y;
    r0.z = hdB344.z;
    vec3 hdB359 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB359.x;
    oC0.y = hdB359.y;
    oC0.z = hdB359.z;
    oC0.w = 1.0;
    bool hdB372 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB380;
    if (hdB372)
    {
        hdB380 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB380 = hdB372;
    }
    if (hdB380)
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
    bool _1325 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1335;
    if (_1325)
    {
        _1335 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1335 = _1325;
    }
    if (_1335)
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
        bool _1360 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1375;
        if (!_1360)
        {
            _1375 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1375 = _1360;
        }
        if (_1375)
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
