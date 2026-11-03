#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1913;
vec4 _RESERVED_IDENTIFIER_FIXUP_1914;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _52 = hdOverride >= 0;
    bool _71;
    if (_52)
    {
        _71 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _71 = _52;
    }
    vec4 _72;
    if (_71)
    {
        _72 = vec4(float(hdOverride));
    }
    else
    {
        _72 = value;
    }
    return _72;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _89 = hdOverride >= 0;
    bool _98;
    if (_89)
    {
        _98 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _98 = _89;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _116 = hdOverride >= 0;
    bool _126;
    if (_116)
    {
        _126 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _126 = _116;
    }
    vec4 _127;
    if (_126)
    {
        _127 = vec4(float(hdOverride));
    }
    else
    {
        _127 = value;
    }
    return _127;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _144 = hdOverride >= 0;
    bool _154;
    if (_144)
    {
        _154 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _154 = _144;
    }
    vec4 _155;
    if (_154)
    {
        _155 = vec4(float(hdOverride));
    }
    else
    {
        _155 = value;
    }
    return _155;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _173 = hdOverride >= 0;
    bool _183;
    if (_173)
    {
        _183 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _183 = _173;
    }
    vec4 _184;
    if (_183)
    {
        _184 = vec4(float(hdOverride));
    }
    else
    {
        _184 = value;
    }
    return _184;
}

void HDActual()
{
    vec3 _RESERVED_IDENTIFIER_FIXUP_702 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1913).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_705 = _RESERVED_IDENTIFIER_FIXUP_702 + _RESERVED_IDENTIFIER_FIXUP_702;
    float _RESERVED_IDENTIFIER_FIXUP_707 = _RESERVED_IDENTIFIER_FIXUP_705.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1558;
    _RESERVED_IDENTIFIER_FIXUP_1558.x = _RESERVED_IDENTIFIER_FIXUP_707;
    _RESERVED_IDENTIFIER_FIXUP_1558.y = _RESERVED_IDENTIFIER_FIXUP_705.y;
    _RESERVED_IDENTIFIER_FIXUP_1558.z = _RESERVED_IDENTIFIER_FIXUP_705.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_713 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_716 = _RESERVED_IDENTIFIER_FIXUP_713 * _RESERVED_IDENTIFIER_FIXUP_1558.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1564;
    _RESERVED_IDENTIFIER_FIXUP_1564.x = _RESERVED_IDENTIFIER_FIXUP_716.x;
    _RESERVED_IDENTIFIER_FIXUP_1564.y = _RESERVED_IDENTIFIER_FIXUP_716.y;
    _RESERVED_IDENTIFIER_FIXUP_1564.z = _RESERVED_IDENTIFIER_FIXUP_716.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_725 = abs(optRegs.rows[optTile*82u+uint(1)]);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_733 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_725.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_734 = mix(_RESERVED_IDENTIFIER_FIXUP_1564.xyz, _RESERVED_IDENTIFIER_FIXUP_713, _RESERVED_IDENTIFIER_FIXUP_733);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1570;
    _RESERVED_IDENTIFIER_FIXUP_1570.x = _RESERVED_IDENTIFIER_FIXUP_734.x;
    _RESERVED_IDENTIFIER_FIXUP_1570.y = _RESERVED_IDENTIFIER_FIXUP_734.y;
    _RESERVED_IDENTIFIER_FIXUP_1570.z = _RESERVED_IDENTIFIER_FIXUP_734.z;
    vec2 param_1 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_744 = hdTex4(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_752 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_744.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1915 = vec4(_RESERVED_IDENTIFIER_FIXUP_707, _RESERVED_IDENTIFIER_FIXUP_705.yz, _RESERVED_IDENTIFIER_FIXUP_752);
    _RESERVED_IDENTIFIER_FIXUP_1915.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_752;
    vec3 _RESERVED_IDENTIFIER_FIXUP_760 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_763 = _RESERVED_IDENTIFIER_FIXUP_760 * _RESERVED_IDENTIFIER_FIXUP_1915.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1581;
    _RESERVED_IDENTIFIER_FIXUP_1581.x = _RESERVED_IDENTIFIER_FIXUP_763.x;
    _RESERVED_IDENTIFIER_FIXUP_1581.y = _RESERVED_IDENTIFIER_FIXUP_763.y;
    _RESERVED_IDENTIFIER_FIXUP_1581.z = _RESERVED_IDENTIFIER_FIXUP_763.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_777 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_725.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_778 = mix(_RESERVED_IDENTIFIER_FIXUP_1581.xyz, _RESERVED_IDENTIFIER_FIXUP_760, _RESERVED_IDENTIFIER_FIXUP_777);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1587;
    _RESERVED_IDENTIFIER_FIXUP_1587.x = _RESERVED_IDENTIFIER_FIXUP_778.x;
    _RESERVED_IDENTIFIER_FIXUP_1587.y = _RESERVED_IDENTIFIER_FIXUP_778.y;
    _RESERVED_IDENTIFIER_FIXUP_1587.z = _RESERVED_IDENTIFIER_FIXUP_778.z;
    vec2 param_2 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_798 = hdTex2(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_799 = _RESERVED_IDENTIFIER_FIXUP_1915.xyz * _RESERVED_IDENTIFIER_FIXUP_798;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1593;
    _RESERVED_IDENTIFIER_FIXUP_1593.x = _RESERVED_IDENTIFIER_FIXUP_799.x;
    _RESERVED_IDENTIFIER_FIXUP_1593.y = _RESERVED_IDENTIFIER_FIXUP_799.y;
    _RESERVED_IDENTIFIER_FIXUP_1593.z = _RESERVED_IDENTIFIER_FIXUP_799.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_813 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_725.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_814 = mix(_RESERVED_IDENTIFIER_FIXUP_1593.xyz, _RESERVED_IDENTIFIER_FIXUP_798, _RESERVED_IDENTIFIER_FIXUP_813);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1599;
    _RESERVED_IDENTIFIER_FIXUP_1599.x = _RESERVED_IDENTIFIER_FIXUP_814.x;
    _RESERVED_IDENTIFIER_FIXUP_1599.y = _RESERVED_IDENTIFIER_FIXUP_814.y;
    _RESERVED_IDENTIFIER_FIXUP_1599.z = _RESERVED_IDENTIFIER_FIXUP_814.z;
    vec2 param_3 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_834 = hdTex3(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_835 = _RESERVED_IDENTIFIER_FIXUP_1915.xyz * _RESERVED_IDENTIFIER_FIXUP_834;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1605;
    _RESERVED_IDENTIFIER_FIXUP_1605.x = _RESERVED_IDENTIFIER_FIXUP_835.x;
    _RESERVED_IDENTIFIER_FIXUP_1605.y = _RESERVED_IDENTIFIER_FIXUP_835.y;
    _RESERVED_IDENTIFIER_FIXUP_1605.z = _RESERVED_IDENTIFIER_FIXUP_835.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_849 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_725.www, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_850 = mix(_RESERVED_IDENTIFIER_FIXUP_1605.xyz, _RESERVED_IDENTIFIER_FIXUP_834, _RESERVED_IDENTIFIER_FIXUP_849);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1611;
    _RESERVED_IDENTIFIER_FIXUP_1611.x = _RESERVED_IDENTIFIER_FIXUP_850.x;
    _RESERVED_IDENTIFIER_FIXUP_1611.y = _RESERVED_IDENTIFIER_FIXUP_850.y;
    _RESERVED_IDENTIFIER_FIXUP_1611.z = _RESERVED_IDENTIFIER_FIXUP_850.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_862 = (_RESERVED_IDENTIFIER_FIXUP_1611 * _RESERVED_IDENTIFIER_FIXUP_744.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1599 * _RESERVED_IDENTIFIER_FIXUP_744.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1587 * _RESERVED_IDENTIFIER_FIXUP_1915.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1570 * _RESERVED_IDENTIFIER_FIXUP_744.xxxx)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_877 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_880 = _RESERVED_IDENTIFIER_FIXUP_877.xy;
    float _RESERVED_IDENTIFIER_FIXUP_882 = _RESERVED_IDENTIFIER_FIXUP_877.w;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_880;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_882;
    vec4 _RESERVED_IDENTIFIER_FIXUP_883 = hdLod5(param_4, param_5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1626;
    _RESERVED_IDENTIFIER_FIXUP_1626.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_891 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_893 = _RESERVED_IDENTIFIER_FIXUP_891.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1628 = _RESERVED_IDENTIFIER_FIXUP_744;
    _RESERVED_IDENTIFIER_FIXUP_1628.x = _RESERVED_IDENTIFIER_FIXUP_893;
    float _RESERVED_IDENTIFIER_FIXUP_895 = _RESERVED_IDENTIFIER_FIXUP_891.y;
    _RESERVED_IDENTIFIER_FIXUP_1628.y = _RESERVED_IDENTIFIER_FIXUP_895;
    vec2 _RESERVED_IDENTIFIER_FIXUP_901 = _RESERVED_IDENTIFIER_FIXUP_1628.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1632 = _RESERVED_IDENTIFIER_FIXUP_1626;
    _RESERVED_IDENTIFIER_FIXUP_1632.x = _RESERVED_IDENTIFIER_FIXUP_901.x;
    _RESERVED_IDENTIFIER_FIXUP_1632.y = _RESERVED_IDENTIFIER_FIXUP_901.y;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1632.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_883.y = hdLod5(param_6, param_7).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_924 = _RESERVED_IDENTIFIER_FIXUP_1628.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1644 = _RESERVED_IDENTIFIER_FIXUP_1626;
    _RESERVED_IDENTIFIER_FIXUP_1644.x = _RESERVED_IDENTIFIER_FIXUP_924.x;
    _RESERVED_IDENTIFIER_FIXUP_1644.y = _RESERVED_IDENTIFIER_FIXUP_924.y;
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1644.xy;
    float param_9 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_883.z = hdLod5(param_8, param_9).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_943 = _RESERVED_IDENTIFIER_FIXUP_1628.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1652;
    _RESERVED_IDENTIFIER_FIXUP_1652.x = _RESERVED_IDENTIFIER_FIXUP_943.x;
    _RESERVED_IDENTIFIER_FIXUP_1652.y = _RESERVED_IDENTIFIER_FIXUP_943.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_953 = _RESERVED_IDENTIFIER_FIXUP_1628.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1656;
    _RESERVED_IDENTIFIER_FIXUP_1656.x = _RESERVED_IDENTIFIER_FIXUP_953.x;
    _RESERVED_IDENTIFIER_FIXUP_1656.y = _RESERVED_IDENTIFIER_FIXUP_953.y;
    _RESERVED_IDENTIFIER_FIXUP_1652.w = 0.0;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1652.xy;
    float param_11 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_883.w = hdLod5(param_10, param_11).x;
    float _RESERVED_IDENTIFIER_FIXUP_980 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_883 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
    _RESERVED_IDENTIFIER_FIXUP_862.w = _RESERVED_IDENTIFIER_FIXUP_980;
    _RESERVED_IDENTIFIER_FIXUP_1656.w = 0.0;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1656.xy;
    float param_13 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_997 = hdLod5(param_12, param_13).x - texcoord4.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1916 = vec4(0.0, 0.0, 0.0, _RESERVED_IDENTIFIER_FIXUP_997);
    float _RESERVED_IDENTIFIER_FIXUP_1002 = float(_RESERVED_IDENTIFIER_FIXUP_997 >= 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1916.w = _RESERVED_IDENTIFIER_FIXUP_1002;
    float _RESERVED_IDENTIFIER_FIXUP_1008 = _RESERVED_IDENTIFIER_FIXUP_980 + _RESERVED_IDENTIFIER_FIXUP_1002;
    _RESERVED_IDENTIFIER_FIXUP_862.w = _RESERVED_IDENTIFIER_FIXUP_1008;
    float _RESERVED_IDENTIFIER_FIXUP_1013 = (_RESERVED_IDENTIFIER_FIXUP_1008 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_862.w = _RESERVED_IDENTIFIER_FIXUP_1013;
    float _RESERVED_IDENTIFIER_FIXUP_1021 = max(abs(texcoord4.x), abs(texcoord4.y));
    _RESERVED_IDENTIFIER_FIXUP_1916.w = _RESERVED_IDENTIFIER_FIXUP_1021;
    float _RESERVED_IDENTIFIER_FIXUP_1027 = clamp((_RESERVED_IDENTIFIER_FIXUP_1021 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1916.w = _RESERVED_IDENTIFIER_FIXUP_1027;
    float _RESERVED_IDENTIFIER_FIXUP_1034 = (_RESERVED_IDENTIFIER_FIXUP_1027 * _RESERVED_IDENTIFIER_FIXUP_1013) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_862.w = _RESERVED_IDENTIFIER_FIXUP_1034;
    _RESERVED_IDENTIFIER_FIXUP_1916.w = min(_RESERVED_IDENTIFIER_FIXUP_1034, _RESERVED_IDENTIFIER_FIXUP_744.w);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1046 = _RESERVED_IDENTIFIER_FIXUP_1916.xyz * _RESERVED_IDENTIFIER_FIXUP_1916.www;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1704;
    _RESERVED_IDENTIFIER_FIXUP_1704.x = _RESERVED_IDENTIFIER_FIXUP_1046.x;
    _RESERVED_IDENTIFIER_FIXUP_1704.y = _RESERVED_IDENTIFIER_FIXUP_1046.y;
    _RESERVED_IDENTIFIER_FIXUP_1704.z = _RESERVED_IDENTIFIER_FIXUP_1046.z;
    _RESERVED_IDENTIFIER_FIXUP_862.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1072 = (_RESERVED_IDENTIFIER_FIXUP_862.xyz * _RESERVED_IDENTIFIER_FIXUP_862.www) + _RESERVED_IDENTIFIER_FIXUP_1704.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1715;
    _RESERVED_IDENTIFIER_FIXUP_1715.x = _RESERVED_IDENTIFIER_FIXUP_1072.x;
    _RESERVED_IDENTIFIER_FIXUP_1715.y = _RESERVED_IDENTIFIER_FIXUP_1072.y;
    _RESERVED_IDENTIFIER_FIXUP_1715.z = _RESERVED_IDENTIFIER_FIXUP_1072.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1085 = _RESERVED_IDENTIFIER_FIXUP_1715.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1721;
    _RESERVED_IDENTIFIER_FIXUP_1721.x = _RESERVED_IDENTIFIER_FIXUP_1085.x;
    _RESERVED_IDENTIFIER_FIXUP_1721.y = _RESERVED_IDENTIFIER_FIXUP_1085.y;
    _RESERVED_IDENTIFIER_FIXUP_1721.z = _RESERVED_IDENTIFIER_FIXUP_1085.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1100 = _RESERVED_IDENTIFIER_FIXUP_1721.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1727;
    _RESERVED_IDENTIFIER_FIXUP_1727.x = _RESERVED_IDENTIFIER_FIXUP_1100.x;
    _RESERVED_IDENTIFIER_FIXUP_1727.y = _RESERVED_IDENTIFIER_FIXUP_1100.y;
    _RESERVED_IDENTIFIER_FIXUP_1727.z = _RESERVED_IDENTIFIER_FIXUP_1100.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1136 = OptTex0( texcoord0.xyz);
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1140 = hdTex1(param_14);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1145 = color0.xyz + color0.xyz;
    float _RESERVED_IDENTIFIER_FIXUP_1147 = _RESERVED_IDENTIFIER_FIXUP_1145.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1735;
    _RESERVED_IDENTIFIER_FIXUP_1735.x = _RESERVED_IDENTIFIER_FIXUP_1147;
    _RESERVED_IDENTIFIER_FIXUP_1735.y = _RESERVED_IDENTIFIER_FIXUP_1145.y;
    _RESERVED_IDENTIFIER_FIXUP_1735.z = _RESERVED_IDENTIFIER_FIXUP_1145.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1153 = _RESERVED_IDENTIFIER_FIXUP_1140.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1156 = _RESERVED_IDENTIFIER_FIXUP_1153 * _RESERVED_IDENTIFIER_FIXUP_1735.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1741;
    _RESERVED_IDENTIFIER_FIXUP_1741.x = _RESERVED_IDENTIFIER_FIXUP_1156.x;
    _RESERVED_IDENTIFIER_FIXUP_1741.y = _RESERVED_IDENTIFIER_FIXUP_1156.y;
    _RESERVED_IDENTIFIER_FIXUP_1741.z = _RESERVED_IDENTIFIER_FIXUP_1156.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1174 = mix(_RESERVED_IDENTIFIER_FIXUP_1741.xyz, _RESERVED_IDENTIFIER_FIXUP_1153, _RESERVED_IDENTIFIER_FIXUP_733);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1747 = _RESERVED_IDENTIFIER_FIXUP_1140;
    _RESERVED_IDENTIFIER_FIXUP_1747.x = _RESERVED_IDENTIFIER_FIXUP_1174.x;
    _RESERVED_IDENTIFIER_FIXUP_1747.y = _RESERVED_IDENTIFIER_FIXUP_1174.y;
    _RESERVED_IDENTIFIER_FIXUP_1747.z = _RESERVED_IDENTIFIER_FIXUP_1174.z;
    vec2 param_15 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1184 = hdTex4(param_15);
    float _RESERVED_IDENTIFIER_FIXUP_1192 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1184.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1917 = vec4(_RESERVED_IDENTIFIER_FIXUP_1147, _RESERVED_IDENTIFIER_FIXUP_1145.yz, _RESERVED_IDENTIFIER_FIXUP_1192);
    _RESERVED_IDENTIFIER_FIXUP_1917.w = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1192;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1200 = _RESERVED_IDENTIFIER_FIXUP_1136.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1203 = _RESERVED_IDENTIFIER_FIXUP_1200 * _RESERVED_IDENTIFIER_FIXUP_1917.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1758;
    _RESERVED_IDENTIFIER_FIXUP_1758.x = _RESERVED_IDENTIFIER_FIXUP_1203.x;
    _RESERVED_IDENTIFIER_FIXUP_1758.y = _RESERVED_IDENTIFIER_FIXUP_1203.y;
    _RESERVED_IDENTIFIER_FIXUP_1758.z = _RESERVED_IDENTIFIER_FIXUP_1203.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1218 = mix(_RESERVED_IDENTIFIER_FIXUP_1758.xyz, _RESERVED_IDENTIFIER_FIXUP_1200, _RESERVED_IDENTIFIER_FIXUP_777);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1764 = _RESERVED_IDENTIFIER_FIXUP_1136;
    _RESERVED_IDENTIFIER_FIXUP_1764.x = _RESERVED_IDENTIFIER_FIXUP_1218.x;
    _RESERVED_IDENTIFIER_FIXUP_1764.y = _RESERVED_IDENTIFIER_FIXUP_1218.y;
    _RESERVED_IDENTIFIER_FIXUP_1764.z = _RESERVED_IDENTIFIER_FIXUP_1218.z;
    vec2 param_16 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1234 = hdTex2(param_16);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1238 = _RESERVED_IDENTIFIER_FIXUP_1234.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1239 = _RESERVED_IDENTIFIER_FIXUP_1917.xyz * _RESERVED_IDENTIFIER_FIXUP_1238;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1770;
    _RESERVED_IDENTIFIER_FIXUP_1770.x = _RESERVED_IDENTIFIER_FIXUP_1239.x;
    _RESERVED_IDENTIFIER_FIXUP_1770.y = _RESERVED_IDENTIFIER_FIXUP_1239.y;
    _RESERVED_IDENTIFIER_FIXUP_1770.z = _RESERVED_IDENTIFIER_FIXUP_1239.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1254 = mix(_RESERVED_IDENTIFIER_FIXUP_1770.xyz, _RESERVED_IDENTIFIER_FIXUP_1238, _RESERVED_IDENTIFIER_FIXUP_813);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1776 = _RESERVED_IDENTIFIER_FIXUP_1234;
    _RESERVED_IDENTIFIER_FIXUP_1776.x = _RESERVED_IDENTIFIER_FIXUP_1254.x;
    _RESERVED_IDENTIFIER_FIXUP_1776.y = _RESERVED_IDENTIFIER_FIXUP_1254.y;
    _RESERVED_IDENTIFIER_FIXUP_1776.z = _RESERVED_IDENTIFIER_FIXUP_1254.z;
    vec2 param_17 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1270 = hdTex3(param_17);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1274 = _RESERVED_IDENTIFIER_FIXUP_1270.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1275 = _RESERVED_IDENTIFIER_FIXUP_1917.xyz * _RESERVED_IDENTIFIER_FIXUP_1274;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1782;
    _RESERVED_IDENTIFIER_FIXUP_1782.x = _RESERVED_IDENTIFIER_FIXUP_1275.x;
    _RESERVED_IDENTIFIER_FIXUP_1782.y = _RESERVED_IDENTIFIER_FIXUP_1275.y;
    _RESERVED_IDENTIFIER_FIXUP_1782.z = _RESERVED_IDENTIFIER_FIXUP_1275.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1290 = mix(_RESERVED_IDENTIFIER_FIXUP_1782.xyz, _RESERVED_IDENTIFIER_FIXUP_1274, _RESERVED_IDENTIFIER_FIXUP_849);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1788 = _RESERVED_IDENTIFIER_FIXUP_1270;
    _RESERVED_IDENTIFIER_FIXUP_1788.x = _RESERVED_IDENTIFIER_FIXUP_1290.x;
    _RESERVED_IDENTIFIER_FIXUP_1788.y = _RESERVED_IDENTIFIER_FIXUP_1290.y;
    _RESERVED_IDENTIFIER_FIXUP_1788.z = _RESERVED_IDENTIFIER_FIXUP_1290.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1302 = (_RESERVED_IDENTIFIER_FIXUP_1788 * _RESERVED_IDENTIFIER_FIXUP_1184.zzzz) + ((_RESERVED_IDENTIFIER_FIXUP_1776 * _RESERVED_IDENTIFIER_FIXUP_1184.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1764 * _RESERVED_IDENTIFIER_FIXUP_1917.wwww) + (_RESERVED_IDENTIFIER_FIXUP_1747 * _RESERVED_IDENTIFIER_FIXUP_1184.xxxx)));
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_880;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_882;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1323 = hdLod5(param_18, param_19);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1805 = _RESERVED_IDENTIFIER_FIXUP_1184;
    _RESERVED_IDENTIFIER_FIXUP_1805.x = _RESERVED_IDENTIFIER_FIXUP_893;
    _RESERVED_IDENTIFIER_FIXUP_1805.y = _RESERVED_IDENTIFIER_FIXUP_895;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1341 = _RESERVED_IDENTIFIER_FIXUP_1805.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1809 = _RESERVED_IDENTIFIER_FIXUP_1626;
    _RESERVED_IDENTIFIER_FIXUP_1809.x = _RESERVED_IDENTIFIER_FIXUP_1341.x;
    _RESERVED_IDENTIFIER_FIXUP_1809.y = _RESERVED_IDENTIFIER_FIXUP_1341.y;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1809.xy;
    float param_21 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1323.y = hdLod5(param_20, param_21).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1364 = _RESERVED_IDENTIFIER_FIXUP_1805.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1821 = _RESERVED_IDENTIFIER_FIXUP_1626;
    _RESERVED_IDENTIFIER_FIXUP_1821.x = _RESERVED_IDENTIFIER_FIXUP_1364.x;
    _RESERVED_IDENTIFIER_FIXUP_1821.y = _RESERVED_IDENTIFIER_FIXUP_1364.y;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1821.xy;
    float param_23 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1323.z = hdLod5(param_22, param_23).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1383 = _RESERVED_IDENTIFIER_FIXUP_1805.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1829;
    _RESERVED_IDENTIFIER_FIXUP_1829.x = _RESERVED_IDENTIFIER_FIXUP_1383.x;
    _RESERVED_IDENTIFIER_FIXUP_1829.y = _RESERVED_IDENTIFIER_FIXUP_1383.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1393 = _RESERVED_IDENTIFIER_FIXUP_1805.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1833;
    _RESERVED_IDENTIFIER_FIXUP_1833.x = _RESERVED_IDENTIFIER_FIXUP_1393.x;
    _RESERVED_IDENTIFIER_FIXUP_1833.y = _RESERVED_IDENTIFIER_FIXUP_1393.y;
    _RESERVED_IDENTIFIER_FIXUP_1829.w = 0.0;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1829.xy;
    float param_25 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1323.w = hdLod5(param_24, param_25).x;
    float _RESERVED_IDENTIFIER_FIXUP_1420 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1323 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1845 = _RESERVED_IDENTIFIER_FIXUP_1302;
    _RESERVED_IDENTIFIER_FIXUP_1845.w = _RESERVED_IDENTIFIER_FIXUP_1420;
    _RESERVED_IDENTIFIER_FIXUP_1833.w = 0.0;
    vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1833.xy;
    float param_27 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1437 = hdLod5(param_26, param_27).x - texcoord4.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1918 = vec4(_RESERVED_IDENTIFIER_FIXUP_1302.www * color1.xyz, _RESERVED_IDENTIFIER_FIXUP_1437);
    float _RESERVED_IDENTIFIER_FIXUP_1442 = float(_RESERVED_IDENTIFIER_FIXUP_1437 >= 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1918.w = _RESERVED_IDENTIFIER_FIXUP_1442;
    float _RESERVED_IDENTIFIER_FIXUP_1448 = _RESERVED_IDENTIFIER_FIXUP_1420 + _RESERVED_IDENTIFIER_FIXUP_1442;
    _RESERVED_IDENTIFIER_FIXUP_1845.w = _RESERVED_IDENTIFIER_FIXUP_1448;
    float _RESERVED_IDENTIFIER_FIXUP_1453 = (_RESERVED_IDENTIFIER_FIXUP_1448 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1845.w = _RESERVED_IDENTIFIER_FIXUP_1453;
    _RESERVED_IDENTIFIER_FIXUP_1918.w = _RESERVED_IDENTIFIER_FIXUP_1021;
    float _RESERVED_IDENTIFIER_FIXUP_1467 = clamp((_RESERVED_IDENTIFIER_FIXUP_1021 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1918.w = _RESERVED_IDENTIFIER_FIXUP_1467;
    float _RESERVED_IDENTIFIER_FIXUP_1474 = (_RESERVED_IDENTIFIER_FIXUP_1467 * _RESERVED_IDENTIFIER_FIXUP_1453) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1845.w = _RESERVED_IDENTIFIER_FIXUP_1474;
    float _RESERVED_IDENTIFIER_FIXUP_1480 = min(_RESERVED_IDENTIFIER_FIXUP_1474, _RESERVED_IDENTIFIER_FIXUP_1184.w);
    _RESERVED_IDENTIFIER_FIXUP_1918.w = _RESERVED_IDENTIFIER_FIXUP_1480;
    float _RESERVED_IDENTIFIER_FIXUP_1496 = (_RESERVED_IDENTIFIER_FIXUP_1480 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1845.w = _RESERVED_IDENTIFIER_FIXUP_1496;
    _RESERVED_IDENTIFIER_FIXUP_1845.w = _RESERVED_IDENTIFIER_FIXUP_1496;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1512 = (_RESERVED_IDENTIFIER_FIXUP_1845.xyz * _RESERVED_IDENTIFIER_FIXUP_1845.www) + vec4(_RESERVED_IDENTIFIER_FIXUP_1918.xyz * _RESERVED_IDENTIFIER_FIXUP_1918.www, _RESERVED_IDENTIFIER_FIXUP_1480).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1894;
    _RESERVED_IDENTIFIER_FIXUP_1894.x = _RESERVED_IDENTIFIER_FIXUP_1512.x;
    _RESERVED_IDENTIFIER_FIXUP_1894.y = _RESERVED_IDENTIFIER_FIXUP_1512.y;
    _RESERVED_IDENTIFIER_FIXUP_1894.z = _RESERVED_IDENTIFIER_FIXUP_1512.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1525 = _RESERVED_IDENTIFIER_FIXUP_1894.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1900;
    _RESERVED_IDENTIFIER_FIXUP_1900.x = _RESERVED_IDENTIFIER_FIXUP_1525.x;
    _RESERVED_IDENTIFIER_FIXUP_1900.y = _RESERVED_IDENTIFIER_FIXUP_1525.y;
    _RESERVED_IDENTIFIER_FIXUP_1900.z = _RESERVED_IDENTIFIER_FIXUP_1525.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1900.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_560 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_569;
    if (_RESERVED_IDENTIFIER_FIXUP_560)
    {
        _RESERVED_IDENTIFIER_FIXUP_569 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_569 = _RESERVED_IDENTIFIER_FIXUP_560;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_569)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_606 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1727.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_632 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1551;
    if (_RESERVED_IDENTIFIER_FIXUP_606 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1551 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_606), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_632);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1551 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_632);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1551;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1496);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec3 hdB65 = v0.xyz + v0.xyz;
    r2.x = hdB65.x;
    r2.y = hdB65.y;
    r2.z = hdB65.z;
    vec3 hdB81 = r1.xyz * r2.xyz;
    r3.x = hdB81.x;
    r3.y = hdB81.y;
    r3.z = hdB81.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 hdB104 = r1;
    vec3 hdB113 = mix(r3.xyz, hdB104.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB113.x;
    r1.y = hdB113.y;
    r1.z = hdB113.z;
    vec2 param_1 = v4.wz;
    r3 = hdTex4(param_1);
    r1 *= r3.xxxx;
    r2.w = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r2.w = (-r2.w) + 1.0;
    vec3 hdB146 = r0.xyz * r2.xyz;
    r5.x = hdB146.x;
    r5.y = hdB146.y;
    r5.z = hdB146.z;
    vec4 hdB155 = r0;
    vec3 hdB161 = mix(r5.xyz, hdB155.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB161.x;
    r0.y = hdB161.y;
    r0.z = hdB161.z;
    r0 = (r0 * r2.wwww) + r1;
    vec2 param_2 = v3.wz;
    r1 = hdTex2(param_2);
    vec3 hdB183 = r2.xyz * r1.xyz;
    r5.x = hdB183.x;
    r5.y = hdB183.y;
    r5.z = hdB183.z;
    vec4 hdB192 = r1;
    vec3 hdB198 = mix(r5.xyz, hdB192.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r1.x = hdB198.x;
    r1.y = hdB198.y;
    r1.z = hdB198.z;
    r0 = (r1 * r3.yyyy) + r0;
    vec2 param_3 = v4.xy;
    r1 = hdTex3(param_3);
    vec4 hdB216 = r2;
    vec3 hdB220 = hdB216.xyz * r1.xyz;
    r2.x = hdB220.x;
    r2.y = hdB220.y;
    r2.z = hdB220.z;
    vec4 hdB229 = r1;
    vec3 hdB235 = mix(r2.xyz, hdB229.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r1.x = hdB235.x;
    r1.y = hdB235.y;
    r1.z = hdB235.z;
    r0 = (r1 * r3.zzzz) + r0;
    vec3 hdB252 = r0.www * v1.xyz;
    r1.x = hdB252.x;
    r1.y = hdB252.y;
    r1.z = hdB252.z;
    r2 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param_4 = r2.xy;
    float param_5 = r2.w;
    r2 = hdLod5(param_4, param_5);
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 hdB281 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r3.x = hdB281.x;
    r3.y = hdB281.y;
    vec2 hdB292 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = hdB292.x;
    r4.y = hdB292.y;
    vec2 param_6 = r4.xy;
    float param_7 = r4.w;
    r4 = hdLod5(param_6, param_7);
    r2.y = r4.x;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 hdB316 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = hdB316.x;
    r4.y = hdB316.y;
    vec2 param_8 = r4.xy;
    float param_9 = r4.w;
    r4 = hdLod5(param_8, param_9);
    r2.z = r4.x;
    vec2 hdB336 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = hdB336.x;
    r4.y = hdB336.y;
    vec2 hdB347 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r5.x = hdB347.x;
    r5.y = hdB347.y;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 param_10 = r4.xy;
    float param_11 = r4.w;
    r4 = hdLod5(param_10, param_11);
    r2.w = r4.x;
    r2 += (-v5.zzzz);
    r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
    r0.w = dot(r2, vec4(1.0));
    r5.z = 0.0;
    r5.w = 0.0;
    vec2 param_12 = r5.xy;
    float param_13 = r5.w;
    r2 = hdLod5(param_12, param_13);
    r1.w = r2.x + (-v5.z);
    r1.w = float(r1.w >= 0.0);
    r0.w += r1.w;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.w = max(abs(v5.x), abs(v5.y));
    r1.w = clamp((r1.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.w * r0.w) + 1.0;
    r1.w = min(r0.w, r3.w);
    vec4 hdB442 = r1;
    vec4 hdB444 = r1;
    vec3 hdB446 = hdB442.xyz * hdB444.www;
    r1.x = hdB446.x;
    r1.y = hdB446.y;
    r1.z = hdB446.z;
    r0.w = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB460 = r0;
    vec4 hdB462 = r0;
    vec3 hdB467 = (hdB460.xyz * hdB462.www) + r1.xyz;
    r0.x = hdB467.x;
    r0.y = hdB467.y;
    r0.z = hdB467.z;
    vec4 hdB474 = r0;
    vec3 hdB481 = hdB474.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB481.x;
    r0.y = hdB481.y;
    r0.z = hdB481.z;
    vec3 hdB496 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB496.x;
    oC0.y = hdB496.y;
    oC0.z = hdB496.z;
    oC0.w = 1.0;
    bool hdB508 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB516;
    if (hdB508)
    {
        hdB516 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB516 = hdB508;
    }
    if (hdB516)
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
    bool _1848 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1858;
    if (_1848)
    {
        _1858 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1858 = _1848;
    }
    if (_1858)
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
        bool _1883 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1898;
        if (!_1883)
        {
            _1898 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1898 = _1883;
        }
        if (_1898)
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
