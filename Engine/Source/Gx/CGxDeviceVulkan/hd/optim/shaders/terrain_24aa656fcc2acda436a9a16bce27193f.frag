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
float _RESERVED_IDENTIFIER_FIXUP_1833;
vec4 _RESERVED_IDENTIFIER_FIXUP_1834;


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
    vec3 _RESERVED_IDENTIFIER_FIXUP_681 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1833).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_684 = _RESERVED_IDENTIFIER_FIXUP_681 + _RESERVED_IDENTIFIER_FIXUP_681;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1500;
    _RESERVED_IDENTIFIER_FIXUP_1500.x = _RESERVED_IDENTIFIER_FIXUP_684.x;
    _RESERVED_IDENTIFIER_FIXUP_1500.y = _RESERVED_IDENTIFIER_FIXUP_684.y;
    _RESERVED_IDENTIFIER_FIXUP_1500.z = _RESERVED_IDENTIFIER_FIXUP_684.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_692 = OptTex0( texcoord0.xyz).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_695 = _RESERVED_IDENTIFIER_FIXUP_692 * _RESERVED_IDENTIFIER_FIXUP_1500.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1506;
    _RESERVED_IDENTIFIER_FIXUP_1506.x = _RESERVED_IDENTIFIER_FIXUP_695.x;
    _RESERVED_IDENTIFIER_FIXUP_1506.y = _RESERVED_IDENTIFIER_FIXUP_695.y;
    _RESERVED_IDENTIFIER_FIXUP_1506.z = _RESERVED_IDENTIFIER_FIXUP_695.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_704 = abs(optRegs.rows[optTile*82u+uint(1)]);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_712 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_704.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_713 = mix(_RESERVED_IDENTIFIER_FIXUP_1506.xyz, _RESERVED_IDENTIFIER_FIXUP_692, _RESERVED_IDENTIFIER_FIXUP_712);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1512;
    _RESERVED_IDENTIFIER_FIXUP_1512.x = _RESERVED_IDENTIFIER_FIXUP_713.x;
    _RESERVED_IDENTIFIER_FIXUP_1512.y = _RESERVED_IDENTIFIER_FIXUP_713.y;
    _RESERVED_IDENTIFIER_FIXUP_1512.z = _RESERVED_IDENTIFIER_FIXUP_713.z;
    vec2 param = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_721 = hdTex1(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_724 = _RESERVED_IDENTIFIER_FIXUP_721 * _RESERVED_IDENTIFIER_FIXUP_1500.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1518;
    _RESERVED_IDENTIFIER_FIXUP_1518.x = _RESERVED_IDENTIFIER_FIXUP_724.x;
    _RESERVED_IDENTIFIER_FIXUP_1518.y = _RESERVED_IDENTIFIER_FIXUP_724.y;
    _RESERVED_IDENTIFIER_FIXUP_1518.z = _RESERVED_IDENTIFIER_FIXUP_724.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_738 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_704.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_739 = mix(_RESERVED_IDENTIFIER_FIXUP_1518.xyz, _RESERVED_IDENTIFIER_FIXUP_721, _RESERVED_IDENTIFIER_FIXUP_738);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1524;
    _RESERVED_IDENTIFIER_FIXUP_1524.x = _RESERVED_IDENTIFIER_FIXUP_739.x;
    _RESERVED_IDENTIFIER_FIXUP_1524.y = _RESERVED_IDENTIFIER_FIXUP_739.y;
    _RESERVED_IDENTIFIER_FIXUP_1524.z = _RESERVED_IDENTIFIER_FIXUP_739.z;
    vec2 param_1 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_749 = hdTex4(param_1);
    vec2 param_2 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_762 = hdTex2(param_2).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_763 = _RESERVED_IDENTIFIER_FIXUP_1500.xyz * _RESERVED_IDENTIFIER_FIXUP_762;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1530;
    _RESERVED_IDENTIFIER_FIXUP_1530.x = _RESERVED_IDENTIFIER_FIXUP_763.x;
    _RESERVED_IDENTIFIER_FIXUP_1530.y = _RESERVED_IDENTIFIER_FIXUP_763.y;
    _RESERVED_IDENTIFIER_FIXUP_1530.z = _RESERVED_IDENTIFIER_FIXUP_763.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_777 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_704.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_778 = mix(_RESERVED_IDENTIFIER_FIXUP_1530.xyz, _RESERVED_IDENTIFIER_FIXUP_762, _RESERVED_IDENTIFIER_FIXUP_777);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1536;
    _RESERVED_IDENTIFIER_FIXUP_1536.x = _RESERVED_IDENTIFIER_FIXUP_778.x;
    _RESERVED_IDENTIFIER_FIXUP_1536.y = _RESERVED_IDENTIFIER_FIXUP_778.y;
    _RESERVED_IDENTIFIER_FIXUP_1536.z = _RESERVED_IDENTIFIER_FIXUP_778.z;
    vec2 param_3 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_797 = hdTex3(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_798 = _RESERVED_IDENTIFIER_FIXUP_1500.xyz * _RESERVED_IDENTIFIER_FIXUP_797;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1542;
    _RESERVED_IDENTIFIER_FIXUP_1542.x = _RESERVED_IDENTIFIER_FIXUP_798.x;
    _RESERVED_IDENTIFIER_FIXUP_1542.y = _RESERVED_IDENTIFIER_FIXUP_798.y;
    _RESERVED_IDENTIFIER_FIXUP_1542.z = _RESERVED_IDENTIFIER_FIXUP_798.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_812 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_704.www, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_813 = mix(_RESERVED_IDENTIFIER_FIXUP_1542.xyz, _RESERVED_IDENTIFIER_FIXUP_797, _RESERVED_IDENTIFIER_FIXUP_812);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1548;
    _RESERVED_IDENTIFIER_FIXUP_1548.x = _RESERVED_IDENTIFIER_FIXUP_813.x;
    _RESERVED_IDENTIFIER_FIXUP_1548.y = _RESERVED_IDENTIFIER_FIXUP_813.y;
    _RESERVED_IDENTIFIER_FIXUP_1548.z = _RESERVED_IDENTIFIER_FIXUP_813.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_839 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_842 = _RESERVED_IDENTIFIER_FIXUP_839.xy;
    float _RESERVED_IDENTIFIER_FIXUP_844 = _RESERVED_IDENTIFIER_FIXUP_839.w;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_842;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_844;
    vec4 _RESERVED_IDENTIFIER_FIXUP_845 = hdLod5(param_4, param_5);
    vec2 _RESERVED_IDENTIFIER_FIXUP_848 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_852 = _RESERVED_IDENTIFIER_FIXUP_848.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1563;
    _RESERVED_IDENTIFIER_FIXUP_1563.w = _RESERVED_IDENTIFIER_FIXUP_852;
    vec2 _RESERVED_IDENTIFIER_FIXUP_856 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_858 = _RESERVED_IDENTIFIER_FIXUP_856.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1565 = _RESERVED_IDENTIFIER_FIXUP_845;
    _RESERVED_IDENTIFIER_FIXUP_1565.y = _RESERVED_IDENTIFIER_FIXUP_858;
    float _RESERVED_IDENTIFIER_FIXUP_860 = _RESERVED_IDENTIFIER_FIXUP_856.y;
    _RESERVED_IDENTIFIER_FIXUP_1565.z = _RESERVED_IDENTIFIER_FIXUP_860;
    vec2 _RESERVED_IDENTIFIER_FIXUP_866 = _RESERVED_IDENTIFIER_FIXUP_1565.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1569 = _RESERVED_IDENTIFIER_FIXUP_1563;
    _RESERVED_IDENTIFIER_FIXUP_1569.x = _RESERVED_IDENTIFIER_FIXUP_866.x;
    _RESERVED_IDENTIFIER_FIXUP_1569.y = _RESERVED_IDENTIFIER_FIXUP_866.y;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1569.xy;
    float param_7 = _RESERVED_IDENTIFIER_FIXUP_852;
    float _RESERVED_IDENTIFIER_FIXUP_881 = _RESERVED_IDENTIFIER_FIXUP_845.x + hdLod5(param_6, param_7).x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1835 = vec4(0.0, 0.0, 0.0, _RESERVED_IDENTIFIER_FIXUP_881);
    vec2 _RESERVED_IDENTIFIER_FIXUP_895 = _RESERVED_IDENTIFIER_FIXUP_1565.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1582 = _RESERVED_IDENTIFIER_FIXUP_1563;
    _RESERVED_IDENTIFIER_FIXUP_1582.x = _RESERVED_IDENTIFIER_FIXUP_895.x;
    _RESERVED_IDENTIFIER_FIXUP_1582.y = _RESERVED_IDENTIFIER_FIXUP_895.y;
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1582.xy;
    float param_9 = _RESERVED_IDENTIFIER_FIXUP_852;
    float _RESERVED_IDENTIFIER_FIXUP_910 = _RESERVED_IDENTIFIER_FIXUP_881 + hdLod5(param_8, param_9).x;
    _RESERVED_IDENTIFIER_FIXUP_1835.w = _RESERVED_IDENTIFIER_FIXUP_910;
    vec2 _RESERVED_IDENTIFIER_FIXUP_917 = _RESERVED_IDENTIFIER_FIXUP_1565.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1591;
    _RESERVED_IDENTIFIER_FIXUP_1591.x = _RESERVED_IDENTIFIER_FIXUP_917.x;
    _RESERVED_IDENTIFIER_FIXUP_1591.y = _RESERVED_IDENTIFIER_FIXUP_917.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_927 = _RESERVED_IDENTIFIER_FIXUP_1565.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1595;
    _RESERVED_IDENTIFIER_FIXUP_1595.x = _RESERVED_IDENTIFIER_FIXUP_927.x;
    _RESERVED_IDENTIFIER_FIXUP_1595.y = _RESERVED_IDENTIFIER_FIXUP_927.y;
    _RESERVED_IDENTIFIER_FIXUP_1591.w = _RESERVED_IDENTIFIER_FIXUP_852;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1591.xy;
    float param_11 = _RESERVED_IDENTIFIER_FIXUP_852;
    float _RESERVED_IDENTIFIER_FIXUP_949 = _RESERVED_IDENTIFIER_FIXUP_910 + hdLod5(param_10, param_11).x;
    _RESERVED_IDENTIFIER_FIXUP_1835.w = _RESERVED_IDENTIFIER_FIXUP_949;
    _RESERVED_IDENTIFIER_FIXUP_1595.w = _RESERVED_IDENTIFIER_FIXUP_852;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1595.xy;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_852;
    float _RESERVED_IDENTIFIER_FIXUP_968 = _RESERVED_IDENTIFIER_FIXUP_949 + hdLod5(param_12, param_13).x;
    _RESERVED_IDENTIFIER_FIXUP_1835.w = _RESERVED_IDENTIFIER_FIXUP_968;
    float _RESERVED_IDENTIFIER_FIXUP_973 = (_RESERVED_IDENTIFIER_FIXUP_968 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1835.w = _RESERVED_IDENTIFIER_FIXUP_973;
    float _RESERVED_IDENTIFIER_FIXUP_987 = clamp((max(abs(texcoord4.x), abs(texcoord4.y)) * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    float _RESERVED_IDENTIFIER_FIXUP_994 = (_RESERVED_IDENTIFIER_FIXUP_987 * _RESERVED_IDENTIFIER_FIXUP_973) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1835.w = _RESERVED_IDENTIFIER_FIXUP_994;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1633;
    _RESERVED_IDENTIFIER_FIXUP_1633.x = min(_RESERVED_IDENTIFIER_FIXUP_994, _RESERVED_IDENTIFIER_FIXUP_749.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1836 = vec4(_RESERVED_IDENTIFIER_FIXUP_1835.xyz * _RESERVED_IDENTIFIER_FIXUP_1633.xxx, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1032 = (mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1512, _RESERVED_IDENTIFIER_FIXUP_1524, _RESERVED_IDENTIFIER_FIXUP_749.xxxx), _RESERVED_IDENTIFIER_FIXUP_1536, _RESERVED_IDENTIFIER_FIXUP_749.yyyy), _RESERVED_IDENTIFIER_FIXUP_1548, _RESERVED_IDENTIFIER_FIXUP_749.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_1836.www) + _RESERVED_IDENTIFIER_FIXUP_1836.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1646;
    _RESERVED_IDENTIFIER_FIXUP_1646.x = _RESERVED_IDENTIFIER_FIXUP_1032.x;
    _RESERVED_IDENTIFIER_FIXUP_1646.y = _RESERVED_IDENTIFIER_FIXUP_1032.y;
    _RESERVED_IDENTIFIER_FIXUP_1646.z = _RESERVED_IDENTIFIER_FIXUP_1032.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1045 = _RESERVED_IDENTIFIER_FIXUP_1646.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1652;
    _RESERVED_IDENTIFIER_FIXUP_1652.x = _RESERVED_IDENTIFIER_FIXUP_1045.x;
    _RESERVED_IDENTIFIER_FIXUP_1652.y = _RESERVED_IDENTIFIER_FIXUP_1045.y;
    _RESERVED_IDENTIFIER_FIXUP_1652.z = _RESERVED_IDENTIFIER_FIXUP_1045.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1060 = _RESERVED_IDENTIFIER_FIXUP_1652.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1658;
    _RESERVED_IDENTIFIER_FIXUP_1658.x = _RESERVED_IDENTIFIER_FIXUP_1060.x;
    _RESERVED_IDENTIFIER_FIXUP_1658.y = _RESERVED_IDENTIFIER_FIXUP_1060.y;
    _RESERVED_IDENTIFIER_FIXUP_1658.z = _RESERVED_IDENTIFIER_FIXUP_1060.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1096 = OptTex0( texcoord0.xyz);
    vec2 param_14 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1100 = hdTex1(param_14);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1105 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1666;
    _RESERVED_IDENTIFIER_FIXUP_1666.x = _RESERVED_IDENTIFIER_FIXUP_1105.x;
    _RESERVED_IDENTIFIER_FIXUP_1666.y = _RESERVED_IDENTIFIER_FIXUP_1105.y;
    _RESERVED_IDENTIFIER_FIXUP_1666.z = _RESERVED_IDENTIFIER_FIXUP_1105.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1113 = _RESERVED_IDENTIFIER_FIXUP_1096.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1116 = _RESERVED_IDENTIFIER_FIXUP_1113 * _RESERVED_IDENTIFIER_FIXUP_1666.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1672;
    _RESERVED_IDENTIFIER_FIXUP_1672.x = _RESERVED_IDENTIFIER_FIXUP_1116.x;
    _RESERVED_IDENTIFIER_FIXUP_1672.y = _RESERVED_IDENTIFIER_FIXUP_1116.y;
    _RESERVED_IDENTIFIER_FIXUP_1672.z = _RESERVED_IDENTIFIER_FIXUP_1116.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1134 = mix(_RESERVED_IDENTIFIER_FIXUP_1672.xyz, _RESERVED_IDENTIFIER_FIXUP_1113, _RESERVED_IDENTIFIER_FIXUP_712);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1678 = _RESERVED_IDENTIFIER_FIXUP_1096;
    _RESERVED_IDENTIFIER_FIXUP_1678.x = _RESERVED_IDENTIFIER_FIXUP_1134.x;
    _RESERVED_IDENTIFIER_FIXUP_1678.y = _RESERVED_IDENTIFIER_FIXUP_1134.y;
    _RESERVED_IDENTIFIER_FIXUP_1678.z = _RESERVED_IDENTIFIER_FIXUP_1134.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1142 = _RESERVED_IDENTIFIER_FIXUP_1100.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1145 = _RESERVED_IDENTIFIER_FIXUP_1142 * _RESERVED_IDENTIFIER_FIXUP_1666.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1684;
    _RESERVED_IDENTIFIER_FIXUP_1684.x = _RESERVED_IDENTIFIER_FIXUP_1145.x;
    _RESERVED_IDENTIFIER_FIXUP_1684.y = _RESERVED_IDENTIFIER_FIXUP_1145.y;
    _RESERVED_IDENTIFIER_FIXUP_1684.z = _RESERVED_IDENTIFIER_FIXUP_1145.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1160 = mix(_RESERVED_IDENTIFIER_FIXUP_1684.xyz, _RESERVED_IDENTIFIER_FIXUP_1142, _RESERVED_IDENTIFIER_FIXUP_738);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1690 = _RESERVED_IDENTIFIER_FIXUP_1100;
    _RESERVED_IDENTIFIER_FIXUP_1690.x = _RESERVED_IDENTIFIER_FIXUP_1160.x;
    _RESERVED_IDENTIFIER_FIXUP_1690.y = _RESERVED_IDENTIFIER_FIXUP_1160.y;
    _RESERVED_IDENTIFIER_FIXUP_1690.z = _RESERVED_IDENTIFIER_FIXUP_1160.z;
    vec2 param_15 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1170 = hdTex4(param_15);
    vec2 param_16 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1179 = hdTex2(param_16);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1183 = _RESERVED_IDENTIFIER_FIXUP_1179.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1184 = _RESERVED_IDENTIFIER_FIXUP_1666.xyz * _RESERVED_IDENTIFIER_FIXUP_1183;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1696;
    _RESERVED_IDENTIFIER_FIXUP_1696.x = _RESERVED_IDENTIFIER_FIXUP_1184.x;
    _RESERVED_IDENTIFIER_FIXUP_1696.y = _RESERVED_IDENTIFIER_FIXUP_1184.y;
    _RESERVED_IDENTIFIER_FIXUP_1696.z = _RESERVED_IDENTIFIER_FIXUP_1184.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1199 = mix(_RESERVED_IDENTIFIER_FIXUP_1696.xyz, _RESERVED_IDENTIFIER_FIXUP_1183, _RESERVED_IDENTIFIER_FIXUP_777);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1702 = _RESERVED_IDENTIFIER_FIXUP_1179;
    _RESERVED_IDENTIFIER_FIXUP_1702.x = _RESERVED_IDENTIFIER_FIXUP_1199.x;
    _RESERVED_IDENTIFIER_FIXUP_1702.y = _RESERVED_IDENTIFIER_FIXUP_1199.y;
    _RESERVED_IDENTIFIER_FIXUP_1702.z = _RESERVED_IDENTIFIER_FIXUP_1199.z;
    vec2 param_17 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1214 = hdTex3(param_17);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1218 = _RESERVED_IDENTIFIER_FIXUP_1214.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1219 = _RESERVED_IDENTIFIER_FIXUP_1666.xyz * _RESERVED_IDENTIFIER_FIXUP_1218;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1708;
    _RESERVED_IDENTIFIER_FIXUP_1708.x = _RESERVED_IDENTIFIER_FIXUP_1219.x;
    _RESERVED_IDENTIFIER_FIXUP_1708.y = _RESERVED_IDENTIFIER_FIXUP_1219.y;
    _RESERVED_IDENTIFIER_FIXUP_1708.z = _RESERVED_IDENTIFIER_FIXUP_1219.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1234 = mix(_RESERVED_IDENTIFIER_FIXUP_1708.xyz, _RESERVED_IDENTIFIER_FIXUP_1218, _RESERVED_IDENTIFIER_FIXUP_812);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1714 = _RESERVED_IDENTIFIER_FIXUP_1214;
    _RESERVED_IDENTIFIER_FIXUP_1714.x = _RESERVED_IDENTIFIER_FIXUP_1234.x;
    _RESERVED_IDENTIFIER_FIXUP_1714.y = _RESERVED_IDENTIFIER_FIXUP_1234.y;
    _RESERVED_IDENTIFIER_FIXUP_1714.z = _RESERVED_IDENTIFIER_FIXUP_1234.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1245 = mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1678, _RESERVED_IDENTIFIER_FIXUP_1690, _RESERVED_IDENTIFIER_FIXUP_1170.xxxx), _RESERVED_IDENTIFIER_FIXUP_1702, _RESERVED_IDENTIFIER_FIXUP_1170.yyyy), _RESERVED_IDENTIFIER_FIXUP_1714, _RESERVED_IDENTIFIER_FIXUP_1170.zzzz);
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_842;
    float param_19 = _RESERVED_IDENTIFIER_FIXUP_844;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1266 = hdLod5(param_18, param_19);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1731 = _RESERVED_IDENTIFIER_FIXUP_1266;
    _RESERVED_IDENTIFIER_FIXUP_1731.y = _RESERVED_IDENTIFIER_FIXUP_858;
    _RESERVED_IDENTIFIER_FIXUP_1731.z = _RESERVED_IDENTIFIER_FIXUP_860;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1287 = _RESERVED_IDENTIFIER_FIXUP_1731.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1735 = _RESERVED_IDENTIFIER_FIXUP_1563;
    _RESERVED_IDENTIFIER_FIXUP_1735.x = _RESERVED_IDENTIFIER_FIXUP_1287.x;
    _RESERVED_IDENTIFIER_FIXUP_1735.y = _RESERVED_IDENTIFIER_FIXUP_1287.y;
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1735.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_852;
    float _RESERVED_IDENTIFIER_FIXUP_1302 = _RESERVED_IDENTIFIER_FIXUP_1266.x + hdLod5(param_20, param_21).x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1837 = vec4(_RESERVED_IDENTIFIER_FIXUP_1245.www * color1.xyz, _RESERVED_IDENTIFIER_FIXUP_1302);
    vec2 _RESERVED_IDENTIFIER_FIXUP_1316 = _RESERVED_IDENTIFIER_FIXUP_1731.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1748 = _RESERVED_IDENTIFIER_FIXUP_1563;
    _RESERVED_IDENTIFIER_FIXUP_1748.x = _RESERVED_IDENTIFIER_FIXUP_1316.x;
    _RESERVED_IDENTIFIER_FIXUP_1748.y = _RESERVED_IDENTIFIER_FIXUP_1316.y;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1748.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_852;
    float _RESERVED_IDENTIFIER_FIXUP_1331 = _RESERVED_IDENTIFIER_FIXUP_1302 + hdLod5(param_22, param_23).x;
    _RESERVED_IDENTIFIER_FIXUP_1837.w = _RESERVED_IDENTIFIER_FIXUP_1331;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1338 = _RESERVED_IDENTIFIER_FIXUP_1731.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1757;
    _RESERVED_IDENTIFIER_FIXUP_1757.x = _RESERVED_IDENTIFIER_FIXUP_1338.x;
    _RESERVED_IDENTIFIER_FIXUP_1757.y = _RESERVED_IDENTIFIER_FIXUP_1338.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1348 = _RESERVED_IDENTIFIER_FIXUP_1731.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1761;
    _RESERVED_IDENTIFIER_FIXUP_1761.x = _RESERVED_IDENTIFIER_FIXUP_1348.x;
    _RESERVED_IDENTIFIER_FIXUP_1761.y = _RESERVED_IDENTIFIER_FIXUP_1348.y;
    _RESERVED_IDENTIFIER_FIXUP_1757.w = _RESERVED_IDENTIFIER_FIXUP_852;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1757.xy;
    float param_25 = _RESERVED_IDENTIFIER_FIXUP_852;
    float _RESERVED_IDENTIFIER_FIXUP_1370 = _RESERVED_IDENTIFIER_FIXUP_1331 + hdLod5(param_24, param_25).x;
    _RESERVED_IDENTIFIER_FIXUP_1837.w = _RESERVED_IDENTIFIER_FIXUP_1370;
    _RESERVED_IDENTIFIER_FIXUP_1761.w = _RESERVED_IDENTIFIER_FIXUP_852;
    vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1761.xy;
    float param_27 = _RESERVED_IDENTIFIER_FIXUP_852;
    float _RESERVED_IDENTIFIER_FIXUP_1389 = _RESERVED_IDENTIFIER_FIXUP_1370 + hdLod5(param_26, param_27).x;
    _RESERVED_IDENTIFIER_FIXUP_1837.w = _RESERVED_IDENTIFIER_FIXUP_1389;
    float _RESERVED_IDENTIFIER_FIXUP_1394 = (_RESERVED_IDENTIFIER_FIXUP_1389 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1837.w = _RESERVED_IDENTIFIER_FIXUP_1394;
    float _RESERVED_IDENTIFIER_FIXUP_1415 = (_RESERVED_IDENTIFIER_FIXUP_987 * _RESERVED_IDENTIFIER_FIXUP_1394) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1837.w = _RESERVED_IDENTIFIER_FIXUP_1415;
    float _RESERVED_IDENTIFIER_FIXUP_1421 = min(_RESERVED_IDENTIFIER_FIXUP_1415, _RESERVED_IDENTIFIER_FIXUP_1170.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1799;
    _RESERVED_IDENTIFIER_FIXUP_1799.x = _RESERVED_IDENTIFIER_FIXUP_1421;
    float _RESERVED_IDENTIFIER_FIXUP_1437 = (_RESERVED_IDENTIFIER_FIXUP_1421 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1838 = vec4(_RESERVED_IDENTIFIER_FIXUP_1837.xyz * _RESERVED_IDENTIFIER_FIXUP_1799.xxx, _RESERVED_IDENTIFIER_FIXUP_1437);
    _RESERVED_IDENTIFIER_FIXUP_1838.w = _RESERVED_IDENTIFIER_FIXUP_1437;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1453 = (_RESERVED_IDENTIFIER_FIXUP_1245.xyz * _RESERVED_IDENTIFIER_FIXUP_1838.www) + _RESERVED_IDENTIFIER_FIXUP_1838.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1814;
    _RESERVED_IDENTIFIER_FIXUP_1814.x = _RESERVED_IDENTIFIER_FIXUP_1453.x;
    _RESERVED_IDENTIFIER_FIXUP_1814.y = _RESERVED_IDENTIFIER_FIXUP_1453.y;
    _RESERVED_IDENTIFIER_FIXUP_1814.z = _RESERVED_IDENTIFIER_FIXUP_1453.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1466 = _RESERVED_IDENTIFIER_FIXUP_1814.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1820;
    _RESERVED_IDENTIFIER_FIXUP_1820.x = _RESERVED_IDENTIFIER_FIXUP_1466.x;
    _RESERVED_IDENTIFIER_FIXUP_1820.y = _RESERVED_IDENTIFIER_FIXUP_1466.y;
    _RESERVED_IDENTIFIER_FIXUP_1820.z = _RESERVED_IDENTIFIER_FIXUP_1466.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1820.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_539 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_548;
    if (_RESERVED_IDENTIFIER_FIXUP_539)
    {
        _RESERVED_IDENTIFIER_FIXUP_548 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_548 = _RESERVED_IDENTIFIER_FIXUP_539;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_548)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_585 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1658.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_611 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1492;
    if (_RESERVED_IDENTIFIER_FIXUP_585 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1492 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_585), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_611);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1492 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_611);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1492;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1437);
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
    vec3 hdB81 = r0.xyz * r2.xyz;
    r3.x = hdB81.x;
    r3.y = hdB81.y;
    r3.z = hdB81.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 hdB104 = r0;
    vec3 hdB113 = mix(r3.xyz, hdB104.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB113.x;
    r0.y = hdB113.y;
    r0.z = hdB113.z;
    vec3 hdB124 = r1.xyz * r2.xyz;
    r3.x = hdB124.x;
    r3.y = hdB124.y;
    r3.z = hdB124.z;
    vec4 hdB133 = r1;
    vec3 hdB139 = mix(r3.xyz, hdB133.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB139.x;
    r1.y = hdB139.y;
    r1.z = hdB139.z;
    vec2 param_1 = v4.wz;
    r3 = hdTex4(param_1);
    r5 = mix(r0, r1, r3.xxxx);
    vec2 param_2 = v3.wz;
    r0 = hdTex2(param_2);
    vec3 hdB165 = r2.xyz * r0.xyz;
    r1.x = hdB165.x;
    r1.y = hdB165.y;
    r1.z = hdB165.z;
    vec4 hdB174 = r0;
    vec3 hdB180 = mix(r1.xyz, hdB174.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = hdB180.x;
    r0.y = hdB180.y;
    r0.z = hdB180.z;
    r1 = mix(r5, r0, r3.yyyy);
    vec2 param_3 = v4.xy;
    r0 = hdTex3(param_3);
    vec4 hdB197 = r2;
    vec3 hdB201 = hdB197.xyz * r0.xyz;
    r2.x = hdB201.x;
    r2.y = hdB201.y;
    r2.z = hdB201.z;
    vec4 hdB210 = r0;
    vec3 hdB216 = mix(r2.xyz, hdB210.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r0.x = hdB216.x;
    r0.y = hdB216.y;
    r0.z = hdB216.z;
    r2 = mix(r1, r0, r3.zzzz);
    vec3 hdB232 = r2.www * v1.xyz;
    r0.x = hdB232.x;
    r0.y = hdB232.y;
    r0.z = hdB232.z;
    r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    vec2 hdB258 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB258.x;
    r4.w = hdB258.y;
    vec2 hdB267 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r1.y = hdB267.x;
    r1.z = hdB267.y;
    vec2 hdB278 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = hdB278.x;
    r4.y = hdB278.y;
    vec2 param_6 = r4.xy;
    float param_7 = r4.w;
    r4 = hdLod5(param_6, param_7);
    r0.w = r1.x + r4.x;
    vec2 hdB297 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB297.x;
    r4.w = hdB297.y;
    vec2 hdB308 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = hdB308.x;
    r4.y = hdB308.y;
    vec2 param_8 = r4.xy;
    float param_9 = r4.w;
    r4 = hdLod5(param_8, param_9);
    r0.w += r4.x;
    vec2 hdB331 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = hdB331.x;
    r4.y = hdB331.y;
    vec4 hdB336 = r1;
    vec2 hdB342 = hdB336.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r1.x = hdB342.x;
    r1.y = hdB342.y;
    vec2 hdB349 = vec2(1.0, 0.0) * v5.zx;
    r4.z = hdB349.x;
    r4.w = hdB349.y;
    vec2 param_10 = r4.xy;
    float param_11 = r4.w;
    r4 = hdLod5(param_10, param_11);
    r0.w += r4.x;
    vec2 hdB368 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB368.x;
    r1.w = hdB368.y;
    vec2 param_12 = r1.xy;
    float param_13 = r1.w;
    r1 = hdLod5(param_12, param_13);
    r0.w += r1.x;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.x * r0.w) + 1.0;
    r1.x = min(r0.w, r3.w);
    vec4 hdB421 = r0;
    vec3 hdB425 = hdB421.xyz * r1.xxx;
    r0.x = hdB425.x;
    r0.y = hdB425.y;
    r0.z = hdB425.z;
    r0.w = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB441 = r0;
    vec4 hdB444 = r0;
    vec3 hdB446 = (r2.xyz * hdB441.www) + hdB444.xyz;
    r0.x = hdB446.x;
    r0.y = hdB446.y;
    r0.z = hdB446.z;
    vec4 hdB453 = r0;
    vec3 hdB460 = hdB453.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB460.x;
    r0.y = hdB460.y;
    r0.z = hdB460.z;
    vec3 hdB475 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB475.x;
    oC0.y = hdB475.y;
    oC0.z = hdB475.z;
    oC0.w = 1.0;
    bool hdB487 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB495;
    if (hdB487)
    {
        hdB495 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB495 = hdB487;
    }
    if (hdB495)
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
    bool _1776 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1786;
    if (_1776)
    {
        _1786 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 62u) != 0u;
    }
    else
    {
        _1786 = _1776;
    }
    if (_1786)
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
        bool _1811 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1826;
        if (!_1811)
        {
            _1826 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 62u) != 0u;
        }
        else
        {
            _1826 = _1811;
        }
        if (_1826)
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
