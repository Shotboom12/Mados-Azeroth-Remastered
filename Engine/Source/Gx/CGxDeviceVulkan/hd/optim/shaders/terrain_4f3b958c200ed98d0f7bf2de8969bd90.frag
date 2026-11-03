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
float _RESERVED_IDENTIFIER_FIXUP_1534;
vec4 _RESERVED_IDENTIFIER_FIXUP_1535;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_589 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_593 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_597 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_601 = hdTex3(param_3);
    vec4 _RESERVED_IDENTIFIER_FIXUP_611 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_589, _RESERVED_IDENTIFIER_FIXUP_593, _RESERVED_IDENTIFIER_FIXUP_601.xxxx), _RESERVED_IDENTIFIER_FIXUP_597, _RESERVED_IDENTIFIER_FIXUP_601.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_618 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1259 = _RESERVED_IDENTIFIER_FIXUP_593;
    _RESERVED_IDENTIFIER_FIXUP_1259.x = _RESERVED_IDENTIFIER_FIXUP_618;
    float _RESERVED_IDENTIFIER_FIXUP_624 = clamp((_RESERVED_IDENTIFIER_FIXUP_618 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1259.x = _RESERVED_IDENTIFIER_FIXUP_624;
    float _RESERVED_IDENTIFIER_FIXUP_630 = ((-_RESERVED_IDENTIFIER_FIXUP_624) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1259.y = _RESERVED_IDENTIFIER_FIXUP_630;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1537;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1536;
    if (_RESERVED_IDENTIFIER_FIXUP_630 != (-_RESERVED_IDENTIFIER_FIXUP_630))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_642 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1272 = _RESERVED_IDENTIFIER_FIXUP_1259;
        _RESERVED_IDENTIFIER_FIXUP_1272.y = _RESERVED_IDENTIFIER_FIXUP_642.x;
        _RESERVED_IDENTIFIER_FIXUP_1272.z = _RESERVED_IDENTIFIER_FIXUP_642.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_652 = _RESERVED_IDENTIFIER_FIXUP_1272.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1276;
        _RESERVED_IDENTIFIER_FIXUP_1276.x = _RESERVED_IDENTIFIER_FIXUP_652.x;
        _RESERVED_IDENTIFIER_FIXUP_1276.y = _RESERVED_IDENTIFIER_FIXUP_652.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_662 = _RESERVED_IDENTIFIER_FIXUP_1272.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1280;
        _RESERVED_IDENTIFIER_FIXUP_1280.x = _RESERVED_IDENTIFIER_FIXUP_662.x;
        _RESERVED_IDENTIFIER_FIXUP_1280.y = _RESERVED_IDENTIFIER_FIXUP_662.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_672 = _RESERVED_IDENTIFIER_FIXUP_1272.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1284;
        _RESERVED_IDENTIFIER_FIXUP_1284.x = _RESERVED_IDENTIFIER_FIXUP_672.x;
        _RESERVED_IDENTIFIER_FIXUP_1284.y = _RESERVED_IDENTIFIER_FIXUP_672.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_682 = _RESERVED_IDENTIFIER_FIXUP_1272.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1288;
        _RESERVED_IDENTIFIER_FIXUP_1288.x = _RESERVED_IDENTIFIER_FIXUP_682.x;
        _RESERVED_IDENTIFIER_FIXUP_1288.y = _RESERVED_IDENTIFIER_FIXUP_682.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_690 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_690.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_690.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_696 = hdLod5(param_4, param_5);
        _RESERVED_IDENTIFIER_FIXUP_1276.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1280.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1284.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1288.w = 0.0;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1276.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_696.y = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1280.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_696.z = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1284.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_696.w = hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_753 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_696 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1288.xy;
        float param_13 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_759 = hdLod5(param_12, param_13).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1272.y = _RESERVED_IDENTIFIER_FIXUP_759;
        float _RESERVED_IDENTIFIER_FIXUP_764 = float(_RESERVED_IDENTIFIER_FIXUP_759 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1272.y = _RESERVED_IDENTIFIER_FIXUP_764;
        float _RESERVED_IDENTIFIER_FIXUP_767 = dot(_RESERVED_IDENTIFIER_FIXUP_753, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1272.z = _RESERVED_IDENTIFIER_FIXUP_767;
        float _RESERVED_IDENTIFIER_FIXUP_773 = _RESERVED_IDENTIFIER_FIXUP_764 + _RESERVED_IDENTIFIER_FIXUP_767;
        _RESERVED_IDENTIFIER_FIXUP_1272.y = _RESERVED_IDENTIFIER_FIXUP_773;
        float _RESERVED_IDENTIFIER_FIXUP_778 = (_RESERVED_IDENTIFIER_FIXUP_773 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1272.y = _RESERVED_IDENTIFIER_FIXUP_778;
        float _RESERVED_IDENTIFIER_FIXUP_785 = (_RESERVED_IDENTIFIER_FIXUP_624 * _RESERVED_IDENTIFIER_FIXUP_778) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1272.x = _RESERVED_IDENTIFIER_FIXUP_785;
        _RESERVED_IDENTIFIER_FIXUP_753.x = min(_RESERVED_IDENTIFIER_FIXUP_785, _RESERVED_IDENTIFIER_FIXUP_601.w);
        _RESERVED_IDENTIFIER_FIXUP_1537 = _RESERVED_IDENTIFIER_FIXUP_1272;
        _RESERVED_IDENTIFIER_FIXUP_1536 = _RESERVED_IDENTIFIER_FIXUP_753;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_597.x = _RESERVED_IDENTIFIER_FIXUP_601.w;
        _RESERVED_IDENTIFIER_FIXUP_1537 = _RESERVED_IDENTIFIER_FIXUP_1259;
        _RESERVED_IDENTIFIER_FIXUP_1536 = _RESERVED_IDENTIFIER_FIXUP_597;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1349 = _RESERVED_IDENTIFIER_FIXUP_1537;
    _RESERVED_IDENTIFIER_FIXUP_1349.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_814 = _RESERVED_IDENTIFIER_FIXUP_611.xyz * _RESERVED_IDENTIFIER_FIXUP_1349.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1351 = _RESERVED_IDENTIFIER_FIXUP_611;
    _RESERVED_IDENTIFIER_FIXUP_1351.x = _RESERVED_IDENTIFIER_FIXUP_814.x;
    _RESERVED_IDENTIFIER_FIXUP_1351.y = _RESERVED_IDENTIFIER_FIXUP_814.y;
    _RESERVED_IDENTIFIER_FIXUP_1351.z = _RESERVED_IDENTIFIER_FIXUP_814.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = _RESERVED_IDENTIFIER_FIXUP_1351.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1534).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1357 = _RESERVED_IDENTIFIER_FIXUP_1351;
    _RESERVED_IDENTIFIER_FIXUP_1357.x = _RESERVED_IDENTIFIER_FIXUP_825.x;
    _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_825.y;
    _RESERVED_IDENTIFIER_FIXUP_1357.z = _RESERVED_IDENTIFIER_FIXUP_825.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_836 = _RESERVED_IDENTIFIER_FIXUP_1357.xyz + _RESERVED_IDENTIFIER_FIXUP_1357.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1363 = _RESERVED_IDENTIFIER_FIXUP_1357;
    _RESERVED_IDENTIFIER_FIXUP_1363.x = _RESERVED_IDENTIFIER_FIXUP_836.x;
    _RESERVED_IDENTIFIER_FIXUP_1363.y = _RESERVED_IDENTIFIER_FIXUP_836.y;
    _RESERVED_IDENTIFIER_FIXUP_1363.z = _RESERVED_IDENTIFIER_FIXUP_836.z;
    _RESERVED_IDENTIFIER_FIXUP_1349.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1349.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1349.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_861 = (_RESERVED_IDENTIFIER_FIXUP_1349.xyz * _RESERVED_IDENTIFIER_FIXUP_1536.xxx) + _RESERVED_IDENTIFIER_FIXUP_1363.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1375 = _RESERVED_IDENTIFIER_FIXUP_1363;
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_861.x;
    _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_861.y;
    _RESERVED_IDENTIFIER_FIXUP_1375.z = _RESERVED_IDENTIFIER_FIXUP_861.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_874 = _RESERVED_IDENTIFIER_FIXUP_1375.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_1375;
    _RESERVED_IDENTIFIER_FIXUP_1381.x = _RESERVED_IDENTIFIER_FIXUP_874.x;
    _RESERVED_IDENTIFIER_FIXUP_1381.y = _RESERVED_IDENTIFIER_FIXUP_874.y;
    _RESERVED_IDENTIFIER_FIXUP_1381.z = _RESERVED_IDENTIFIER_FIXUP_874.z;
    vec2 param_14 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_927 = hdTex0(param_14);
    vec2 param_15 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_931 = hdTex1(param_15);
    vec2 param_16 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_935 = hdTex2(param_16);
    vec2 param_17 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_939 = hdTex3(param_17);
    vec4 _RESERVED_IDENTIFIER_FIXUP_949 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_927, _RESERVED_IDENTIFIER_FIXUP_931, _RESERVED_IDENTIFIER_FIXUP_939.xxxx), _RESERVED_IDENTIFIER_FIXUP_935, _RESERVED_IDENTIFIER_FIXUP_939.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1397 = _RESERVED_IDENTIFIER_FIXUP_931;
    _RESERVED_IDENTIFIER_FIXUP_1397.x = _RESERVED_IDENTIFIER_FIXUP_618;
    float _RESERVED_IDENTIFIER_FIXUP_962 = clamp((_RESERVED_IDENTIFIER_FIXUP_618 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1397.x = _RESERVED_IDENTIFIER_FIXUP_962;
    float _RESERVED_IDENTIFIER_FIXUP_968 = ((-_RESERVED_IDENTIFIER_FIXUP_962) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1397.y = _RESERVED_IDENTIFIER_FIXUP_968;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1541;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1540;
    if (_RESERVED_IDENTIFIER_FIXUP_968 != (-_RESERVED_IDENTIFIER_FIXUP_968))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_980 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_1397;
        _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_980.x;
        _RESERVED_IDENTIFIER_FIXUP_1410.z = _RESERVED_IDENTIFIER_FIXUP_980.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_990 = _RESERVED_IDENTIFIER_FIXUP_1410.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1414;
        _RESERVED_IDENTIFIER_FIXUP_1414.x = _RESERVED_IDENTIFIER_FIXUP_990.x;
        _RESERVED_IDENTIFIER_FIXUP_1414.y = _RESERVED_IDENTIFIER_FIXUP_990.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1000 = _RESERVED_IDENTIFIER_FIXUP_1410.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1418;
        _RESERVED_IDENTIFIER_FIXUP_1418.x = _RESERVED_IDENTIFIER_FIXUP_1000.x;
        _RESERVED_IDENTIFIER_FIXUP_1418.y = _RESERVED_IDENTIFIER_FIXUP_1000.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1010 = _RESERVED_IDENTIFIER_FIXUP_1410.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1422;
        _RESERVED_IDENTIFIER_FIXUP_1422.x = _RESERVED_IDENTIFIER_FIXUP_1010.x;
        _RESERVED_IDENTIFIER_FIXUP_1422.y = _RESERVED_IDENTIFIER_FIXUP_1010.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1020 = _RESERVED_IDENTIFIER_FIXUP_1410.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1426;
        _RESERVED_IDENTIFIER_FIXUP_1426.x = _RESERVED_IDENTIFIER_FIXUP_1020.x;
        _RESERVED_IDENTIFIER_FIXUP_1426.y = _RESERVED_IDENTIFIER_FIXUP_1020.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1028 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1028.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1028.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1034 = hdLod5(param_18, param_19);
        _RESERVED_IDENTIFIER_FIXUP_1414.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1418.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1422.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1426.w = 0.0;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1414.xy;
        float param_21 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1034.y = hdLod5(param_20, param_21).x;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1418.xy;
        float param_23 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1034.z = hdLod5(param_22, param_23).x;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1422.xy;
        float param_25 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1034.w = hdLod5(param_24, param_25).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1091 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1034 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1426.xy;
        float param_27 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1097 = hdLod5(param_26, param_27).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_1097;
        float _RESERVED_IDENTIFIER_FIXUP_1102 = float(_RESERVED_IDENTIFIER_FIXUP_1097 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_1102;
        float _RESERVED_IDENTIFIER_FIXUP_1105 = dot(_RESERVED_IDENTIFIER_FIXUP_1091, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1410.z = _RESERVED_IDENTIFIER_FIXUP_1105;
        float _RESERVED_IDENTIFIER_FIXUP_1111 = _RESERVED_IDENTIFIER_FIXUP_1102 + _RESERVED_IDENTIFIER_FIXUP_1105;
        _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_1111;
        float _RESERVED_IDENTIFIER_FIXUP_1116 = (_RESERVED_IDENTIFIER_FIXUP_1111 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_1116;
        float _RESERVED_IDENTIFIER_FIXUP_1123 = (_RESERVED_IDENTIFIER_FIXUP_962 * _RESERVED_IDENTIFIER_FIXUP_1116) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_1123;
        _RESERVED_IDENTIFIER_FIXUP_1091.x = min(_RESERVED_IDENTIFIER_FIXUP_1123, _RESERVED_IDENTIFIER_FIXUP_939.w);
        _RESERVED_IDENTIFIER_FIXUP_1541 = _RESERVED_IDENTIFIER_FIXUP_1410;
        _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_1091;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_935.x = _RESERVED_IDENTIFIER_FIXUP_939.w;
        _RESERVED_IDENTIFIER_FIXUP_1541 = _RESERVED_IDENTIFIER_FIXUP_1397;
        _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_935;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1139 = (_RESERVED_IDENTIFIER_FIXUP_1540.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1485 = _RESERVED_IDENTIFIER_FIXUP_1541;
    _RESERVED_IDENTIFIER_FIXUP_1485.x = _RESERVED_IDENTIFIER_FIXUP_1139;
    _RESERVED_IDENTIFIER_FIXUP_1485.x = _RESERVED_IDENTIFIER_FIXUP_1139;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1152 = _RESERVED_IDENTIFIER_FIXUP_949.xyz * _RESERVED_IDENTIFIER_FIXUP_1485.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1491 = _RESERVED_IDENTIFIER_FIXUP_949;
    _RESERVED_IDENTIFIER_FIXUP_1491.x = _RESERVED_IDENTIFIER_FIXUP_1152.x;
    _RESERVED_IDENTIFIER_FIXUP_1491.y = _RESERVED_IDENTIFIER_FIXUP_1152.y;
    _RESERVED_IDENTIFIER_FIXUP_1491.z = _RESERVED_IDENTIFIER_FIXUP_1152.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1163 = _RESERVED_IDENTIFIER_FIXUP_1491.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1497 = _RESERVED_IDENTIFIER_FIXUP_1491;
    _RESERVED_IDENTIFIER_FIXUP_1497.x = _RESERVED_IDENTIFIER_FIXUP_1163.x;
    _RESERVED_IDENTIFIER_FIXUP_1497.y = _RESERVED_IDENTIFIER_FIXUP_1163.y;
    _RESERVED_IDENTIFIER_FIXUP_1497.z = _RESERVED_IDENTIFIER_FIXUP_1163.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1497.xyz + _RESERVED_IDENTIFIER_FIXUP_1497.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1503 = _RESERVED_IDENTIFIER_FIXUP_1497;
    _RESERVED_IDENTIFIER_FIXUP_1503.x = _RESERVED_IDENTIFIER_FIXUP_1174.x;
    _RESERVED_IDENTIFIER_FIXUP_1503.y = _RESERVED_IDENTIFIER_FIXUP_1174.y;
    _RESERVED_IDENTIFIER_FIXUP_1503.z = _RESERVED_IDENTIFIER_FIXUP_1174.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1185 = _RESERVED_IDENTIFIER_FIXUP_1503.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1485.x = _RESERVED_IDENTIFIER_FIXUP_1185.x;
    _RESERVED_IDENTIFIER_FIXUP_1485.y = _RESERVED_IDENTIFIER_FIXUP_1185.y;
    _RESERVED_IDENTIFIER_FIXUP_1485.z = _RESERVED_IDENTIFIER_FIXUP_1185.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1199 = (_RESERVED_IDENTIFIER_FIXUP_1485.xyz * _RESERVED_IDENTIFIER_FIXUP_1540.xxx) + _RESERVED_IDENTIFIER_FIXUP_1503.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1515 = _RESERVED_IDENTIFIER_FIXUP_1503;
    _RESERVED_IDENTIFIER_FIXUP_1515.x = _RESERVED_IDENTIFIER_FIXUP_1199.x;
    _RESERVED_IDENTIFIER_FIXUP_1515.y = _RESERVED_IDENTIFIER_FIXUP_1199.y;
    _RESERVED_IDENTIFIER_FIXUP_1515.z = _RESERVED_IDENTIFIER_FIXUP_1199.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1212 = _RESERVED_IDENTIFIER_FIXUP_1515.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1521 = _RESERVED_IDENTIFIER_FIXUP_1515;
    _RESERVED_IDENTIFIER_FIXUP_1521.x = _RESERVED_IDENTIFIER_FIXUP_1212.x;
    _RESERVED_IDENTIFIER_FIXUP_1521.y = _RESERVED_IDENTIFIER_FIXUP_1212.y;
    _RESERVED_IDENTIFIER_FIXUP_1521.z = _RESERVED_IDENTIFIER_FIXUP_1212.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1521.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1381.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_524 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1249;
    if (_RESERVED_IDENTIFIER_FIXUP_497 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1249 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_497), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_524);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1249 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_524);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1249;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1139);
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
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB120 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB120.x;
        r1.z = hdB120.y;
        vec2 hdB142 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB142.x;
        r2.y = hdB142.y;
        vec2 hdB153 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB153.x;
        r4.y = hdB153.y;
        vec2 hdB164 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB164.x;
        r5.y = hdB164.y;
        vec2 hdB175 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB175.x;
        r6.y = hdB175.y;
        r7 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r7.xy;
        float param_5 = r7.w;
        r7 = hdLod5(param_4, param_5);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_6 = r2.xy;
        float param_7 = r2.w;
        r2 = hdLod5(param_6, param_7);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_8 = r4.xy;
        float param_9 = r4.w;
        r4 = hdLod5(param_8, param_9);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_10 = r5.xy;
        float param_11 = r5.w;
        r5 = hdLod5(param_10, param_11);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_12 = r6.xy;
        float param_13 = r6.w;
        r6 = hdLod5(param_12, param_13);
        r7.y = r2.x;
        r7.z = r4.x;
        r7.w = r5.x;
        r2 = r7 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r6.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r3.w);
    }
    else
    {
        r2.x = r3.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
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
    vec3 hdB357 = (r1.xyz * r2.xxx) + hdB355.xyz;
    r0.x = hdB357.x;
    r0.y = hdB357.y;
    r0.z = hdB357.z;
    vec4 hdB364 = r0;
    vec3 hdB371 = hdB364.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB371.x;
    r0.y = hdB371.y;
    r0.z = hdB371.z;
    vec3 hdB386 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
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
    bool _1452 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1462;
    if (_1452)
    {
        _1462 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1462 = _1452;
    }
    if (_1462)
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
        bool _1487 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1502;
        if (!_1487)
        {
            _1502 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1502 = _1487;
        }
        if (_1502)
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
