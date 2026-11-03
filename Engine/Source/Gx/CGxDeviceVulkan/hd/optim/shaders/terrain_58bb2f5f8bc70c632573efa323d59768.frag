#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1623;
vec4 _RESERVED_IDENTIFIER_FIXUP_1624;


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
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _55 = hdOverride >= 0;
    bool _75;
    if (_55)
    {
        _75 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _75 = _55;
    }
    vec4 _76;
    if (_75)
    {
        _76 = vec4(float(hdOverride));
    }
    else
    {
        _76 = value;
    }
    return _76;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _93 = hdOverride >= 0;
    bool _102;
    if (_93)
    {
        _102 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _102 = _93;
    }
    vec4 _103;
    if (_102)
    {
        _103 = vec4(float(hdOverride));
    }
    else
    {
        _103 = value;
    }
    return _103;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _120 = hdOverride >= 0;
    bool _130;
    if (_120)
    {
        _130 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _130 = _120;
    }
    vec4 _131;
    if (_130)
    {
        _131 = vec4(float(hdOverride));
    }
    else
    {
        _131 = value;
    }
    return _131;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _148 = hdOverride >= 0;
    bool _158;
    if (_148)
    {
        _158 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _158 = _148;
    }
    vec4 _159;
    if (_158)
    {
        _159 = vec4(float(hdOverride));
    }
    else
    {
        _159 = value;
    }
    return _159;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _176 = hdOverride >= 0;
    bool _185;
    if (_176)
    {
        _185 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _185 = _176;
    }
    vec4 _186;
    if (_185)
    {
        _186 = vec4(float(hdOverride));
    }
    else
    {
        _186 = value;
    }
    return _186;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _204 = hdOverride >= 0;
    bool _214;
    if (_204)
    {
        _214 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _214 = _204;
    }
    vec4 _215;
    if (_214)
    {
        _215 = vec4(float(hdOverride));
    }
    else
    {
        _215 = value;
    }
    return _215;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_617 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_621 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_625 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_629 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_633 = hdTex4(param_4);
    float _RESERVED_IDENTIFIER_FIXUP_637 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_633.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1336 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1336.x = _RESERVED_IDENTIFIER_FIXUP_637;
    _RESERVED_IDENTIFIER_FIXUP_1336.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_637;
    vec4 _RESERVED_IDENTIFIER_FIXUP_647 = _RESERVED_IDENTIFIER_FIXUP_621 * _RESERVED_IDENTIFIER_FIXUP_633.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_665 = (_RESERVED_IDENTIFIER_FIXUP_629 * _RESERVED_IDENTIFIER_FIXUP_633.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_625 * _RESERVED_IDENTIFIER_FIXUP_633.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_617 * _RESERVED_IDENTIFIER_FIXUP_1336.xxxx) + _RESERVED_IDENTIFIER_FIXUP_647));
    float _RESERVED_IDENTIFIER_FIXUP_672 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1343 = _RESERVED_IDENTIFIER_FIXUP_647;
    _RESERVED_IDENTIFIER_FIXUP_1343.x = _RESERVED_IDENTIFIER_FIXUP_672;
    float _RESERVED_IDENTIFIER_FIXUP_678 = clamp((_RESERVED_IDENTIFIER_FIXUP_672 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1343.x = _RESERVED_IDENTIFIER_FIXUP_678;
    float _RESERVED_IDENTIFIER_FIXUP_684 = ((-_RESERVED_IDENTIFIER_FIXUP_678) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1343.y = _RESERVED_IDENTIFIER_FIXUP_684;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1626;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1625;
    if (_RESERVED_IDENTIFIER_FIXUP_684 != (-_RESERVED_IDENTIFIER_FIXUP_684))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_696 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1356 = _RESERVED_IDENTIFIER_FIXUP_1343;
        _RESERVED_IDENTIFIER_FIXUP_1356.y = _RESERVED_IDENTIFIER_FIXUP_696.x;
        _RESERVED_IDENTIFIER_FIXUP_1356.z = _RESERVED_IDENTIFIER_FIXUP_696.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_706 = _RESERVED_IDENTIFIER_FIXUP_1356.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1360;
        _RESERVED_IDENTIFIER_FIXUP_1360.x = _RESERVED_IDENTIFIER_FIXUP_706.x;
        _RESERVED_IDENTIFIER_FIXUP_1360.y = _RESERVED_IDENTIFIER_FIXUP_706.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_716 = _RESERVED_IDENTIFIER_FIXUP_1356.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1364;
        _RESERVED_IDENTIFIER_FIXUP_1364.x = _RESERVED_IDENTIFIER_FIXUP_716.x;
        _RESERVED_IDENTIFIER_FIXUP_1364.y = _RESERVED_IDENTIFIER_FIXUP_716.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_726 = _RESERVED_IDENTIFIER_FIXUP_1356.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1368;
        _RESERVED_IDENTIFIER_FIXUP_1368.x = _RESERVED_IDENTIFIER_FIXUP_726.x;
        _RESERVED_IDENTIFIER_FIXUP_1368.y = _RESERVED_IDENTIFIER_FIXUP_726.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_736 = _RESERVED_IDENTIFIER_FIXUP_1356.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1372;
        _RESERVED_IDENTIFIER_FIXUP_1372.x = _RESERVED_IDENTIFIER_FIXUP_736.x;
        _RESERVED_IDENTIFIER_FIXUP_1372.y = _RESERVED_IDENTIFIER_FIXUP_736.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_744 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_744.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_744.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_750 = hdLod5(param_5, param_6);
        _RESERVED_IDENTIFIER_FIXUP_1360.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1364.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1368.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1372.w = 0.0;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1360.xy;
        float param_8 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_750.y = hdLod5(param_7, param_8).x;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1364.xy;
        float param_10 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_750.z = hdLod5(param_9, param_10).x;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1368.xy;
        float param_12 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_750.w = hdLod5(param_11, param_12).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_807 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_750 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1372.xy;
        float param_14 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_813 = hdLod5(param_13, param_14).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1356.y = _RESERVED_IDENTIFIER_FIXUP_813;
        float _RESERVED_IDENTIFIER_FIXUP_818 = float(_RESERVED_IDENTIFIER_FIXUP_813 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1356.y = _RESERVED_IDENTIFIER_FIXUP_818;
        float _RESERVED_IDENTIFIER_FIXUP_821 = dot(_RESERVED_IDENTIFIER_FIXUP_807, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1356.z = _RESERVED_IDENTIFIER_FIXUP_821;
        float _RESERVED_IDENTIFIER_FIXUP_827 = _RESERVED_IDENTIFIER_FIXUP_818 + _RESERVED_IDENTIFIER_FIXUP_821;
        _RESERVED_IDENTIFIER_FIXUP_1356.y = _RESERVED_IDENTIFIER_FIXUP_827;
        float _RESERVED_IDENTIFIER_FIXUP_832 = (_RESERVED_IDENTIFIER_FIXUP_827 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1356.y = _RESERVED_IDENTIFIER_FIXUP_832;
        float _RESERVED_IDENTIFIER_FIXUP_839 = (_RESERVED_IDENTIFIER_FIXUP_678 * _RESERVED_IDENTIFIER_FIXUP_832) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1356.x = _RESERVED_IDENTIFIER_FIXUP_839;
        _RESERVED_IDENTIFIER_FIXUP_807.x = min(_RESERVED_IDENTIFIER_FIXUP_839, _RESERVED_IDENTIFIER_FIXUP_633.w);
        _RESERVED_IDENTIFIER_FIXUP_1626 = _RESERVED_IDENTIFIER_FIXUP_1356;
        _RESERVED_IDENTIFIER_FIXUP_1625 = _RESERVED_IDENTIFIER_FIXUP_807;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_625.x = _RESERVED_IDENTIFIER_FIXUP_633.w;
        _RESERVED_IDENTIFIER_FIXUP_1626 = _RESERVED_IDENTIFIER_FIXUP_1343;
        _RESERVED_IDENTIFIER_FIXUP_1625 = _RESERVED_IDENTIFIER_FIXUP_625;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1433 = _RESERVED_IDENTIFIER_FIXUP_1626;
    _RESERVED_IDENTIFIER_FIXUP_1433.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_868 = _RESERVED_IDENTIFIER_FIXUP_665.xyz * _RESERVED_IDENTIFIER_FIXUP_1433.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1435 = _RESERVED_IDENTIFIER_FIXUP_665;
    _RESERVED_IDENTIFIER_FIXUP_1435.x = _RESERVED_IDENTIFIER_FIXUP_868.x;
    _RESERVED_IDENTIFIER_FIXUP_1435.y = _RESERVED_IDENTIFIER_FIXUP_868.y;
    _RESERVED_IDENTIFIER_FIXUP_1435.z = _RESERVED_IDENTIFIER_FIXUP_868.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_879 = _RESERVED_IDENTIFIER_FIXUP_1435.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1623).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1441 = _RESERVED_IDENTIFIER_FIXUP_1435;
    _RESERVED_IDENTIFIER_FIXUP_1441.x = _RESERVED_IDENTIFIER_FIXUP_879.x;
    _RESERVED_IDENTIFIER_FIXUP_1441.y = _RESERVED_IDENTIFIER_FIXUP_879.y;
    _RESERVED_IDENTIFIER_FIXUP_1441.z = _RESERVED_IDENTIFIER_FIXUP_879.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_890 = _RESERVED_IDENTIFIER_FIXUP_1441.xyz + _RESERVED_IDENTIFIER_FIXUP_1441.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1447 = _RESERVED_IDENTIFIER_FIXUP_1441;
    _RESERVED_IDENTIFIER_FIXUP_1447.x = _RESERVED_IDENTIFIER_FIXUP_890.x;
    _RESERVED_IDENTIFIER_FIXUP_1447.y = _RESERVED_IDENTIFIER_FIXUP_890.y;
    _RESERVED_IDENTIFIER_FIXUP_1447.z = _RESERVED_IDENTIFIER_FIXUP_890.z;
    _RESERVED_IDENTIFIER_FIXUP_1433.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1433.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1433.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_915 = (_RESERVED_IDENTIFIER_FIXUP_1433.xyz * _RESERVED_IDENTIFIER_FIXUP_1625.xxx) + _RESERVED_IDENTIFIER_FIXUP_1447.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1459 = _RESERVED_IDENTIFIER_FIXUP_1447;
    _RESERVED_IDENTIFIER_FIXUP_1459.x = _RESERVED_IDENTIFIER_FIXUP_915.x;
    _RESERVED_IDENTIFIER_FIXUP_1459.y = _RESERVED_IDENTIFIER_FIXUP_915.y;
    _RESERVED_IDENTIFIER_FIXUP_1459.z = _RESERVED_IDENTIFIER_FIXUP_915.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_928 = _RESERVED_IDENTIFIER_FIXUP_1459.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1465 = _RESERVED_IDENTIFIER_FIXUP_1459;
    _RESERVED_IDENTIFIER_FIXUP_1465.x = _RESERVED_IDENTIFIER_FIXUP_928.x;
    _RESERVED_IDENTIFIER_FIXUP_1465.y = _RESERVED_IDENTIFIER_FIXUP_928.y;
    _RESERVED_IDENTIFIER_FIXUP_1465.z = _RESERVED_IDENTIFIER_FIXUP_928.z;
    vec2 param_15 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_981 = hdTex0(param_15);
    vec2 param_16 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_985 = hdTex1(param_16);
    vec2 param_17 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_989 = hdTex2(param_17);
    vec2 param_18 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_993 = hdTex3(param_18);
    vec2 param_19 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_997 = hdTex4(param_19);
    float _RESERVED_IDENTIFIER_FIXUP_1001 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_997.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1479 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1479.x = _RESERVED_IDENTIFIER_FIXUP_1001;
    _RESERVED_IDENTIFIER_FIXUP_1479.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1001;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1011 = _RESERVED_IDENTIFIER_FIXUP_985 * _RESERVED_IDENTIFIER_FIXUP_997.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1029 = (_RESERVED_IDENTIFIER_FIXUP_993 * _RESERVED_IDENTIFIER_FIXUP_997.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_989 * _RESERVED_IDENTIFIER_FIXUP_997.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_981 * _RESERVED_IDENTIFIER_FIXUP_1479.xxxx) + _RESERVED_IDENTIFIER_FIXUP_1011));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1486 = _RESERVED_IDENTIFIER_FIXUP_1011;
    _RESERVED_IDENTIFIER_FIXUP_1486.x = _RESERVED_IDENTIFIER_FIXUP_672;
    float _RESERVED_IDENTIFIER_FIXUP_1042 = clamp((_RESERVED_IDENTIFIER_FIXUP_672 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1486.x = _RESERVED_IDENTIFIER_FIXUP_1042;
    float _RESERVED_IDENTIFIER_FIXUP_1048 = ((-_RESERVED_IDENTIFIER_FIXUP_1042) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1486.y = _RESERVED_IDENTIFIER_FIXUP_1048;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1630;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1629;
    if (_RESERVED_IDENTIFIER_FIXUP_1048 != (-_RESERVED_IDENTIFIER_FIXUP_1048))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1060 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_1486;
        _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_1060.x;
        _RESERVED_IDENTIFIER_FIXUP_1499.z = _RESERVED_IDENTIFIER_FIXUP_1060.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1070 = _RESERVED_IDENTIFIER_FIXUP_1499.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1503;
        _RESERVED_IDENTIFIER_FIXUP_1503.x = _RESERVED_IDENTIFIER_FIXUP_1070.x;
        _RESERVED_IDENTIFIER_FIXUP_1503.y = _RESERVED_IDENTIFIER_FIXUP_1070.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1080 = _RESERVED_IDENTIFIER_FIXUP_1499.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1507;
        _RESERVED_IDENTIFIER_FIXUP_1507.x = _RESERVED_IDENTIFIER_FIXUP_1080.x;
        _RESERVED_IDENTIFIER_FIXUP_1507.y = _RESERVED_IDENTIFIER_FIXUP_1080.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1090 = _RESERVED_IDENTIFIER_FIXUP_1499.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1511;
        _RESERVED_IDENTIFIER_FIXUP_1511.x = _RESERVED_IDENTIFIER_FIXUP_1090.x;
        _RESERVED_IDENTIFIER_FIXUP_1511.y = _RESERVED_IDENTIFIER_FIXUP_1090.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1100 = _RESERVED_IDENTIFIER_FIXUP_1499.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1515;
        _RESERVED_IDENTIFIER_FIXUP_1515.x = _RESERVED_IDENTIFIER_FIXUP_1100.x;
        _RESERVED_IDENTIFIER_FIXUP_1515.y = _RESERVED_IDENTIFIER_FIXUP_1100.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1108 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1108.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1108.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1114 = hdLod5(param_20, param_21);
        _RESERVED_IDENTIFIER_FIXUP_1503.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1507.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1511.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1515.w = 0.0;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1503.xy;
        float param_23 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1114.y = hdLod5(param_22, param_23).x;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1507.xy;
        float param_25 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1114.z = hdLod5(param_24, param_25).x;
        vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1511.xy;
        float param_27 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1114.w = hdLod5(param_26, param_27).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1171 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1114 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_1515.xy;
        float param_29 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1177 = hdLod5(param_28, param_29).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_1177;
        float _RESERVED_IDENTIFIER_FIXUP_1182 = float(_RESERVED_IDENTIFIER_FIXUP_1177 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_1182;
        float _RESERVED_IDENTIFIER_FIXUP_1185 = dot(_RESERVED_IDENTIFIER_FIXUP_1171, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_1499.z = _RESERVED_IDENTIFIER_FIXUP_1185;
        float _RESERVED_IDENTIFIER_FIXUP_1191 = _RESERVED_IDENTIFIER_FIXUP_1182 + _RESERVED_IDENTIFIER_FIXUP_1185;
        _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_1191;
        float _RESERVED_IDENTIFIER_FIXUP_1196 = (_RESERVED_IDENTIFIER_FIXUP_1191 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_1196;
        float _RESERVED_IDENTIFIER_FIXUP_1203 = (_RESERVED_IDENTIFIER_FIXUP_1042 * _RESERVED_IDENTIFIER_FIXUP_1196) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1499.x = _RESERVED_IDENTIFIER_FIXUP_1203;
        _RESERVED_IDENTIFIER_FIXUP_1171.x = min(_RESERVED_IDENTIFIER_FIXUP_1203, _RESERVED_IDENTIFIER_FIXUP_997.w);
        _RESERVED_IDENTIFIER_FIXUP_1630 = _RESERVED_IDENTIFIER_FIXUP_1499;
        _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_1171;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_989.x = _RESERVED_IDENTIFIER_FIXUP_997.w;
        _RESERVED_IDENTIFIER_FIXUP_1630 = _RESERVED_IDENTIFIER_FIXUP_1486;
        _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_989;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1219 = (_RESERVED_IDENTIFIER_FIXUP_1629.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1574 = _RESERVED_IDENTIFIER_FIXUP_1630;
    _RESERVED_IDENTIFIER_FIXUP_1574.x = _RESERVED_IDENTIFIER_FIXUP_1219;
    _RESERVED_IDENTIFIER_FIXUP_1574.x = _RESERVED_IDENTIFIER_FIXUP_1219;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1232 = _RESERVED_IDENTIFIER_FIXUP_1029.xyz * _RESERVED_IDENTIFIER_FIXUP_1574.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1580 = _RESERVED_IDENTIFIER_FIXUP_1029;
    _RESERVED_IDENTIFIER_FIXUP_1580.x = _RESERVED_IDENTIFIER_FIXUP_1232.x;
    _RESERVED_IDENTIFIER_FIXUP_1580.y = _RESERVED_IDENTIFIER_FIXUP_1232.y;
    _RESERVED_IDENTIFIER_FIXUP_1580.z = _RESERVED_IDENTIFIER_FIXUP_1232.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1243 = _RESERVED_IDENTIFIER_FIXUP_1580.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1586 = _RESERVED_IDENTIFIER_FIXUP_1580;
    _RESERVED_IDENTIFIER_FIXUP_1586.x = _RESERVED_IDENTIFIER_FIXUP_1243.x;
    _RESERVED_IDENTIFIER_FIXUP_1586.y = _RESERVED_IDENTIFIER_FIXUP_1243.y;
    _RESERVED_IDENTIFIER_FIXUP_1586.z = _RESERVED_IDENTIFIER_FIXUP_1243.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1254 = _RESERVED_IDENTIFIER_FIXUP_1586.xyz + _RESERVED_IDENTIFIER_FIXUP_1586.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1592 = _RESERVED_IDENTIFIER_FIXUP_1586;
    _RESERVED_IDENTIFIER_FIXUP_1592.x = _RESERVED_IDENTIFIER_FIXUP_1254.x;
    _RESERVED_IDENTIFIER_FIXUP_1592.y = _RESERVED_IDENTIFIER_FIXUP_1254.y;
    _RESERVED_IDENTIFIER_FIXUP_1592.z = _RESERVED_IDENTIFIER_FIXUP_1254.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_1592.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1574.x = _RESERVED_IDENTIFIER_FIXUP_1265.x;
    _RESERVED_IDENTIFIER_FIXUP_1574.y = _RESERVED_IDENTIFIER_FIXUP_1265.y;
    _RESERVED_IDENTIFIER_FIXUP_1574.z = _RESERVED_IDENTIFIER_FIXUP_1265.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1279 = (_RESERVED_IDENTIFIER_FIXUP_1574.xyz * _RESERVED_IDENTIFIER_FIXUP_1629.xxx) + _RESERVED_IDENTIFIER_FIXUP_1592.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1604 = _RESERVED_IDENTIFIER_FIXUP_1592;
    _RESERVED_IDENTIFIER_FIXUP_1604.x = _RESERVED_IDENTIFIER_FIXUP_1279.x;
    _RESERVED_IDENTIFIER_FIXUP_1604.y = _RESERVED_IDENTIFIER_FIXUP_1279.y;
    _RESERVED_IDENTIFIER_FIXUP_1604.z = _RESERVED_IDENTIFIER_FIXUP_1279.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1292 = _RESERVED_IDENTIFIER_FIXUP_1604.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1610 = _RESERVED_IDENTIFIER_FIXUP_1604;
    _RESERVED_IDENTIFIER_FIXUP_1610.x = _RESERVED_IDENTIFIER_FIXUP_1292.x;
    _RESERVED_IDENTIFIER_FIXUP_1610.y = _RESERVED_IDENTIFIER_FIXUP_1292.y;
    _RESERVED_IDENTIFIER_FIXUP_1610.z = _RESERVED_IDENTIFIER_FIXUP_1292.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1610.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_479 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_488;
    if (_RESERVED_IDENTIFIER_FIXUP_479)
    {
        _RESERVED_IDENTIFIER_FIXUP_488 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_488 = _RESERVED_IDENTIFIER_FIXUP_479;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_488)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_525 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1465.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_552 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1329;
    if (_RESERVED_IDENTIFIER_FIXUP_525 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1329 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_525), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_552);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1329 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_552);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1329;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1219);
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
    vec2 param_4 = v4.wz;
    r4 = hdTex4(param_4);
    r5.x = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r5.x = (-r5.x) + 1.0;
    r1 *= r4.xxxx;
    r0 = (r0 * r5.xxxx) + r1;
    r0 = (r2 * r4.yyyy) + r0;
    r0 = (r3 * r4.zzzz) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB149 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB149.x;
        r1.z = hdB149.y;
        vec2 hdB171 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB171.x;
        r2.y = hdB171.y;
        vec2 hdB182 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB182.x;
        r3.y = hdB182.y;
        vec2 hdB193 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB193.x;
        r5.y = hdB193.y;
        vec2 hdB204 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB204.x;
        r6.y = hdB204.y;
        r7 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r7.xy;
        float param_6 = r7.w;
        r7 = hdLod5(param_5, param_6);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_9 = r3.xy;
        float param_10 = r3.w;
        r3 = hdLod5(param_9, param_10);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_11 = r5.xy;
        float param_12 = r5.w;
        r5 = hdLod5(param_11, param_12);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod5(param_13, param_14);
        r7.y = r2.x;
        r7.z = r3.x;
        r7.w = r5.x;
        r2 = r7 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r6.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB334 = r0;
    vec3 hdB338 = hdB334.xyz * r1.xxx;
    r0.x = hdB338.x;
    r0.y = hdB338.y;
    r0.z = hdB338.z;
    vec4 hdB345 = r0;
    vec3 hdB349 = hdB345.xyz * v0.xyz;
    r0.x = hdB349.x;
    r0.y = hdB349.y;
    r0.z = hdB349.z;
    vec4 hdB356 = r0;
    vec4 hdB358 = r0;
    vec3 hdB360 = hdB356.xyz + hdB358.xyz;
    r0.x = hdB360.x;
    r0.y = hdB360.y;
    r0.z = hdB360.z;
    vec3 hdB371 = r0.www * v1.xyz;
    r1.x = hdB371.x;
    r1.y = hdB371.y;
    r1.z = hdB371.z;
    vec4 hdB383 = r0;
    vec3 hdB385 = (r1.xyz * r2.xxx) + hdB383.xyz;
    r0.x = hdB385.x;
    r0.y = hdB385.y;
    r0.z = hdB385.z;
    vec4 hdB392 = r0;
    vec3 hdB399 = hdB392.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB399.x;
    r0.y = hdB399.y;
    r0.z = hdB399.z;
    vec3 hdB414 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB414.x;
    oC0.y = hdB414.y;
    oC0.z = hdB414.z;
    oC0.w = 1.0;
    bool hdB427 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB435;
    if (hdB427)
    {
        hdB435 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB435 = hdB427;
    }
    if (hdB435)
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
    bool _1565 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1575;
    if (_1565)
    {
        _1575 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1575 = _1565;
    }
    if (_1575)
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
        bool _1600 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1615;
        if (!_1600)
        {
            _1615 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1615 = _1600;
        }
        if (_1615)
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
