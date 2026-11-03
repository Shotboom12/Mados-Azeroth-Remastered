#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1848;
vec4 _RESERVED_IDENTIFIER_FIXUP_1849;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _120 = hdOverride >= 0;
    bool _129;
    if (_120)
    {
        _129 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _129 = _120;
    }
    vec4 _130;
    if (_129)
    {
        _130 = vec4(float(hdOverride));
    }
    else
    {
        _130 = value;
    }
    return _130;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _147 = hdOverride >= 0;
    bool _157;
    if (_147)
    {
        _157 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _157 = _147;
    }
    vec4 _158;
    if (_157)
    {
        _158 = vec4(float(hdOverride));
    }
    else
    {
        _158 = value;
    }
    return _158;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _175 = hdOverride >= 0;
    bool _185;
    if (_175)
    {
        _185 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _185 = _175;
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
    vec3 _RESERVED_IDENTIFIER_FIXUP_680 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1848).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_683 = _RESERVED_IDENTIFIER_FIXUP_680 + _RESERVED_IDENTIFIER_FIXUP_680;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1503;
    _RESERVED_IDENTIFIER_FIXUP_1503.x = _RESERVED_IDENTIFIER_FIXUP_683.x;
    _RESERVED_IDENTIFIER_FIXUP_1503.y = _RESERVED_IDENTIFIER_FIXUP_683.y;
    _RESERVED_IDENTIFIER_FIXUP_1503.z = _RESERVED_IDENTIFIER_FIXUP_683.z;
    vec2 param = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_691 = hdTex0(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_694 = _RESERVED_IDENTIFIER_FIXUP_691 * _RESERVED_IDENTIFIER_FIXUP_1503.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1509;
    _RESERVED_IDENTIFIER_FIXUP_1509.x = _RESERVED_IDENTIFIER_FIXUP_694.x;
    _RESERVED_IDENTIFIER_FIXUP_1509.y = _RESERVED_IDENTIFIER_FIXUP_694.y;
    _RESERVED_IDENTIFIER_FIXUP_1509.z = _RESERVED_IDENTIFIER_FIXUP_694.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_703 = abs(optRegs.rows[optTile*82u+uint(1)]);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_711 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_703.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_712 = mix(_RESERVED_IDENTIFIER_FIXUP_1509.xyz, _RESERVED_IDENTIFIER_FIXUP_691, _RESERVED_IDENTIFIER_FIXUP_711);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1515;
    _RESERVED_IDENTIFIER_FIXUP_1515.x = _RESERVED_IDENTIFIER_FIXUP_712.x;
    _RESERVED_IDENTIFIER_FIXUP_1515.y = _RESERVED_IDENTIFIER_FIXUP_712.y;
    _RESERVED_IDENTIFIER_FIXUP_1515.z = _RESERVED_IDENTIFIER_FIXUP_712.z;
    vec2 param_1 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_720 = hdTex1(param_1).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_723 = _RESERVED_IDENTIFIER_FIXUP_720 * _RESERVED_IDENTIFIER_FIXUP_1503.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1521;
    _RESERVED_IDENTIFIER_FIXUP_1521.x = _RESERVED_IDENTIFIER_FIXUP_723.x;
    _RESERVED_IDENTIFIER_FIXUP_1521.y = _RESERVED_IDENTIFIER_FIXUP_723.y;
    _RESERVED_IDENTIFIER_FIXUP_1521.z = _RESERVED_IDENTIFIER_FIXUP_723.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_737 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_703.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_738 = mix(_RESERVED_IDENTIFIER_FIXUP_1521.xyz, _RESERVED_IDENTIFIER_FIXUP_720, _RESERVED_IDENTIFIER_FIXUP_737);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1527;
    _RESERVED_IDENTIFIER_FIXUP_1527.x = _RESERVED_IDENTIFIER_FIXUP_738.x;
    _RESERVED_IDENTIFIER_FIXUP_1527.y = _RESERVED_IDENTIFIER_FIXUP_738.y;
    _RESERVED_IDENTIFIER_FIXUP_1527.z = _RESERVED_IDENTIFIER_FIXUP_738.z;
    vec2 param_2 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_748 = hdTex4(param_2);
    vec2 param_3 = texcoord1.wz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_761 = hdTex2(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_762 = _RESERVED_IDENTIFIER_FIXUP_1503.xyz * _RESERVED_IDENTIFIER_FIXUP_761;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1533;
    _RESERVED_IDENTIFIER_FIXUP_1533.x = _RESERVED_IDENTIFIER_FIXUP_762.x;
    _RESERVED_IDENTIFIER_FIXUP_1533.y = _RESERVED_IDENTIFIER_FIXUP_762.y;
    _RESERVED_IDENTIFIER_FIXUP_1533.z = _RESERVED_IDENTIFIER_FIXUP_762.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_776 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_703.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_777 = mix(_RESERVED_IDENTIFIER_FIXUP_1533.xyz, _RESERVED_IDENTIFIER_FIXUP_761, _RESERVED_IDENTIFIER_FIXUP_776);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1539;
    _RESERVED_IDENTIFIER_FIXUP_1539.x = _RESERVED_IDENTIFIER_FIXUP_777.x;
    _RESERVED_IDENTIFIER_FIXUP_1539.y = _RESERVED_IDENTIFIER_FIXUP_777.y;
    _RESERVED_IDENTIFIER_FIXUP_1539.z = _RESERVED_IDENTIFIER_FIXUP_777.z;
    vec2 param_4 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_796 = hdTex3(param_4).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_797 = _RESERVED_IDENTIFIER_FIXUP_1503.xyz * _RESERVED_IDENTIFIER_FIXUP_796;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1545;
    _RESERVED_IDENTIFIER_FIXUP_1545.x = _RESERVED_IDENTIFIER_FIXUP_797.x;
    _RESERVED_IDENTIFIER_FIXUP_1545.y = _RESERVED_IDENTIFIER_FIXUP_797.y;
    _RESERVED_IDENTIFIER_FIXUP_1545.z = _RESERVED_IDENTIFIER_FIXUP_797.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_811 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_703.www, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_812 = mix(_RESERVED_IDENTIFIER_FIXUP_1545.xyz, _RESERVED_IDENTIFIER_FIXUP_796, _RESERVED_IDENTIFIER_FIXUP_811);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1551;
    _RESERVED_IDENTIFIER_FIXUP_1551.x = _RESERVED_IDENTIFIER_FIXUP_812.x;
    _RESERVED_IDENTIFIER_FIXUP_1551.y = _RESERVED_IDENTIFIER_FIXUP_812.y;
    _RESERVED_IDENTIFIER_FIXUP_1551.z = _RESERVED_IDENTIFIER_FIXUP_812.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_838 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_841 = _RESERVED_IDENTIFIER_FIXUP_838.xy;
    float _RESERVED_IDENTIFIER_FIXUP_843 = _RESERVED_IDENTIFIER_FIXUP_838.w;
    vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_841;
    float param_6 = _RESERVED_IDENTIFIER_FIXUP_843;
    vec4 _RESERVED_IDENTIFIER_FIXUP_844 = hdLod5(param_5, param_6);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1566;
    _RESERVED_IDENTIFIER_FIXUP_1566.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_852 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_854 = _RESERVED_IDENTIFIER_FIXUP_852.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_748;
    _RESERVED_IDENTIFIER_FIXUP_1568.x = _RESERVED_IDENTIFIER_FIXUP_854;
    float _RESERVED_IDENTIFIER_FIXUP_856 = _RESERVED_IDENTIFIER_FIXUP_852.y;
    _RESERVED_IDENTIFIER_FIXUP_1568.y = _RESERVED_IDENTIFIER_FIXUP_856;
    vec2 _RESERVED_IDENTIFIER_FIXUP_862 = _RESERVED_IDENTIFIER_FIXUP_1568.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1572 = _RESERVED_IDENTIFIER_FIXUP_1566;
    _RESERVED_IDENTIFIER_FIXUP_1572.x = _RESERVED_IDENTIFIER_FIXUP_862.x;
    _RESERVED_IDENTIFIER_FIXUP_1572.y = _RESERVED_IDENTIFIER_FIXUP_862.y;
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1572.xy;
    float param_8 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_844.y = hdLod5(param_7, param_8).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_885 = _RESERVED_IDENTIFIER_FIXUP_1568.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1584 = _RESERVED_IDENTIFIER_FIXUP_1566;
    _RESERVED_IDENTIFIER_FIXUP_1584.x = _RESERVED_IDENTIFIER_FIXUP_885.x;
    _RESERVED_IDENTIFIER_FIXUP_1584.y = _RESERVED_IDENTIFIER_FIXUP_885.y;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1584.xy;
    float param_10 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_844.z = hdLod5(param_9, param_10).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_904 = _RESERVED_IDENTIFIER_FIXUP_1568.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1592;
    _RESERVED_IDENTIFIER_FIXUP_1592.x = _RESERVED_IDENTIFIER_FIXUP_904.x;
    _RESERVED_IDENTIFIER_FIXUP_1592.y = _RESERVED_IDENTIFIER_FIXUP_904.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_914 = _RESERVED_IDENTIFIER_FIXUP_1568.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1596;
    _RESERVED_IDENTIFIER_FIXUP_1596.x = _RESERVED_IDENTIFIER_FIXUP_914.x;
    _RESERVED_IDENTIFIER_FIXUP_1596.y = _RESERVED_IDENTIFIER_FIXUP_914.y;
    _RESERVED_IDENTIFIER_FIXUP_1592.w = 0.0;
    vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1592.xy;
    float param_12 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_844.w = hdLod5(param_11, param_12).x;
    float _RESERVED_IDENTIFIER_FIXUP_941 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_844 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1850 = vec4(0.0, 0.0, 0.0, _RESERVED_IDENTIFIER_FIXUP_941);
    _RESERVED_IDENTIFIER_FIXUP_1596.w = 0.0;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1596.xy;
    float param_14 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_969 = _RESERVED_IDENTIFIER_FIXUP_941 + float((hdLod5(param_13, param_14).x - texcoord4.z) >= 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1850.w = _RESERVED_IDENTIFIER_FIXUP_969;
    float _RESERVED_IDENTIFIER_FIXUP_974 = (_RESERVED_IDENTIFIER_FIXUP_969 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1850.w = _RESERVED_IDENTIFIER_FIXUP_974;
    float _RESERVED_IDENTIFIER_FIXUP_988 = clamp((max(abs(texcoord4.x), abs(texcoord4.y)) * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    float _RESERVED_IDENTIFIER_FIXUP_995 = (_RESERVED_IDENTIFIER_FIXUP_988 * _RESERVED_IDENTIFIER_FIXUP_974) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1850.w = _RESERVED_IDENTIFIER_FIXUP_995;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1642;
    _RESERVED_IDENTIFIER_FIXUP_1642.x = min(_RESERVED_IDENTIFIER_FIXUP_995, _RESERVED_IDENTIFIER_FIXUP_748.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1851 = vec4(_RESERVED_IDENTIFIER_FIXUP_1850.xyz * _RESERVED_IDENTIFIER_FIXUP_1642.xxx, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1033 = (mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1515, _RESERVED_IDENTIFIER_FIXUP_1527, _RESERVED_IDENTIFIER_FIXUP_748.xxxx), _RESERVED_IDENTIFIER_FIXUP_1539, _RESERVED_IDENTIFIER_FIXUP_748.yyyy), _RESERVED_IDENTIFIER_FIXUP_1551, _RESERVED_IDENTIFIER_FIXUP_748.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_1851.www) + _RESERVED_IDENTIFIER_FIXUP_1851.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1655;
    _RESERVED_IDENTIFIER_FIXUP_1655.x = _RESERVED_IDENTIFIER_FIXUP_1033.x;
    _RESERVED_IDENTIFIER_FIXUP_1655.y = _RESERVED_IDENTIFIER_FIXUP_1033.y;
    _RESERVED_IDENTIFIER_FIXUP_1655.z = _RESERVED_IDENTIFIER_FIXUP_1033.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1046 = _RESERVED_IDENTIFIER_FIXUP_1655.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1661;
    _RESERVED_IDENTIFIER_FIXUP_1661.x = _RESERVED_IDENTIFIER_FIXUP_1046.x;
    _RESERVED_IDENTIFIER_FIXUP_1661.y = _RESERVED_IDENTIFIER_FIXUP_1046.y;
    _RESERVED_IDENTIFIER_FIXUP_1661.z = _RESERVED_IDENTIFIER_FIXUP_1046.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1061 = _RESERVED_IDENTIFIER_FIXUP_1661.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1667;
    _RESERVED_IDENTIFIER_FIXUP_1667.x = _RESERVED_IDENTIFIER_FIXUP_1061.x;
    _RESERVED_IDENTIFIER_FIXUP_1667.y = _RESERVED_IDENTIFIER_FIXUP_1061.y;
    _RESERVED_IDENTIFIER_FIXUP_1667.z = _RESERVED_IDENTIFIER_FIXUP_1061.z;
    vec2 param_15 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1097 = hdTex0(param_15);
    vec2 param_16 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1101 = hdTex1(param_16);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1106 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1675;
    _RESERVED_IDENTIFIER_FIXUP_1675.x = _RESERVED_IDENTIFIER_FIXUP_1106.x;
    _RESERVED_IDENTIFIER_FIXUP_1675.y = _RESERVED_IDENTIFIER_FIXUP_1106.y;
    _RESERVED_IDENTIFIER_FIXUP_1675.z = _RESERVED_IDENTIFIER_FIXUP_1106.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1114 = _RESERVED_IDENTIFIER_FIXUP_1097.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1114 * _RESERVED_IDENTIFIER_FIXUP_1675.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1681;
    _RESERVED_IDENTIFIER_FIXUP_1681.x = _RESERVED_IDENTIFIER_FIXUP_1117.x;
    _RESERVED_IDENTIFIER_FIXUP_1681.y = _RESERVED_IDENTIFIER_FIXUP_1117.y;
    _RESERVED_IDENTIFIER_FIXUP_1681.z = _RESERVED_IDENTIFIER_FIXUP_1117.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1135 = mix(_RESERVED_IDENTIFIER_FIXUP_1681.xyz, _RESERVED_IDENTIFIER_FIXUP_1114, _RESERVED_IDENTIFIER_FIXUP_711);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1687 = _RESERVED_IDENTIFIER_FIXUP_1097;
    _RESERVED_IDENTIFIER_FIXUP_1687.x = _RESERVED_IDENTIFIER_FIXUP_1135.x;
    _RESERVED_IDENTIFIER_FIXUP_1687.y = _RESERVED_IDENTIFIER_FIXUP_1135.y;
    _RESERVED_IDENTIFIER_FIXUP_1687.z = _RESERVED_IDENTIFIER_FIXUP_1135.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1143 = _RESERVED_IDENTIFIER_FIXUP_1101.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1146 = _RESERVED_IDENTIFIER_FIXUP_1143 * _RESERVED_IDENTIFIER_FIXUP_1675.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1693;
    _RESERVED_IDENTIFIER_FIXUP_1693.x = _RESERVED_IDENTIFIER_FIXUP_1146.x;
    _RESERVED_IDENTIFIER_FIXUP_1693.y = _RESERVED_IDENTIFIER_FIXUP_1146.y;
    _RESERVED_IDENTIFIER_FIXUP_1693.z = _RESERVED_IDENTIFIER_FIXUP_1146.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1161 = mix(_RESERVED_IDENTIFIER_FIXUP_1693.xyz, _RESERVED_IDENTIFIER_FIXUP_1143, _RESERVED_IDENTIFIER_FIXUP_737);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1699 = _RESERVED_IDENTIFIER_FIXUP_1101;
    _RESERVED_IDENTIFIER_FIXUP_1699.x = _RESERVED_IDENTIFIER_FIXUP_1161.x;
    _RESERVED_IDENTIFIER_FIXUP_1699.y = _RESERVED_IDENTIFIER_FIXUP_1161.y;
    _RESERVED_IDENTIFIER_FIXUP_1699.z = _RESERVED_IDENTIFIER_FIXUP_1161.z;
    vec2 param_17 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1171 = hdTex4(param_17);
    vec2 param_18 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1180 = hdTex2(param_18);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1184 = _RESERVED_IDENTIFIER_FIXUP_1180.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1185 = _RESERVED_IDENTIFIER_FIXUP_1675.xyz * _RESERVED_IDENTIFIER_FIXUP_1184;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1705;
    _RESERVED_IDENTIFIER_FIXUP_1705.x = _RESERVED_IDENTIFIER_FIXUP_1185.x;
    _RESERVED_IDENTIFIER_FIXUP_1705.y = _RESERVED_IDENTIFIER_FIXUP_1185.y;
    _RESERVED_IDENTIFIER_FIXUP_1705.z = _RESERVED_IDENTIFIER_FIXUP_1185.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1200 = mix(_RESERVED_IDENTIFIER_FIXUP_1705.xyz, _RESERVED_IDENTIFIER_FIXUP_1184, _RESERVED_IDENTIFIER_FIXUP_776);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1711 = _RESERVED_IDENTIFIER_FIXUP_1180;
    _RESERVED_IDENTIFIER_FIXUP_1711.x = _RESERVED_IDENTIFIER_FIXUP_1200.x;
    _RESERVED_IDENTIFIER_FIXUP_1711.y = _RESERVED_IDENTIFIER_FIXUP_1200.y;
    _RESERVED_IDENTIFIER_FIXUP_1711.z = _RESERVED_IDENTIFIER_FIXUP_1200.z;
    vec2 param_19 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1215 = hdTex3(param_19);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1219 = _RESERVED_IDENTIFIER_FIXUP_1215.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1220 = _RESERVED_IDENTIFIER_FIXUP_1675.xyz * _RESERVED_IDENTIFIER_FIXUP_1219;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1717;
    _RESERVED_IDENTIFIER_FIXUP_1717.x = _RESERVED_IDENTIFIER_FIXUP_1220.x;
    _RESERVED_IDENTIFIER_FIXUP_1717.y = _RESERVED_IDENTIFIER_FIXUP_1220.y;
    _RESERVED_IDENTIFIER_FIXUP_1717.z = _RESERVED_IDENTIFIER_FIXUP_1220.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1235 = mix(_RESERVED_IDENTIFIER_FIXUP_1717.xyz, _RESERVED_IDENTIFIER_FIXUP_1219, _RESERVED_IDENTIFIER_FIXUP_811);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1723 = _RESERVED_IDENTIFIER_FIXUP_1215;
    _RESERVED_IDENTIFIER_FIXUP_1723.x = _RESERVED_IDENTIFIER_FIXUP_1235.x;
    _RESERVED_IDENTIFIER_FIXUP_1723.y = _RESERVED_IDENTIFIER_FIXUP_1235.y;
    _RESERVED_IDENTIFIER_FIXUP_1723.z = _RESERVED_IDENTIFIER_FIXUP_1235.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1246 = mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1687, _RESERVED_IDENTIFIER_FIXUP_1699, _RESERVED_IDENTIFIER_FIXUP_1171.xxxx), _RESERVED_IDENTIFIER_FIXUP_1711, _RESERVED_IDENTIFIER_FIXUP_1171.yyyy), _RESERVED_IDENTIFIER_FIXUP_1723, _RESERVED_IDENTIFIER_FIXUP_1171.zzzz);
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_841;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_843;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1267 = hdLod5(param_20, param_21);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1740 = _RESERVED_IDENTIFIER_FIXUP_1171;
    _RESERVED_IDENTIFIER_FIXUP_1740.x = _RESERVED_IDENTIFIER_FIXUP_854;
    _RESERVED_IDENTIFIER_FIXUP_1740.y = _RESERVED_IDENTIFIER_FIXUP_856;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1285 = _RESERVED_IDENTIFIER_FIXUP_1740.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1744 = _RESERVED_IDENTIFIER_FIXUP_1566;
    _RESERVED_IDENTIFIER_FIXUP_1744.x = _RESERVED_IDENTIFIER_FIXUP_1285.x;
    _RESERVED_IDENTIFIER_FIXUP_1744.y = _RESERVED_IDENTIFIER_FIXUP_1285.y;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1744.xy;
    float param_23 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1267.y = hdLod5(param_22, param_23).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1308 = _RESERVED_IDENTIFIER_FIXUP_1740.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1756 = _RESERVED_IDENTIFIER_FIXUP_1566;
    _RESERVED_IDENTIFIER_FIXUP_1756.x = _RESERVED_IDENTIFIER_FIXUP_1308.x;
    _RESERVED_IDENTIFIER_FIXUP_1756.y = _RESERVED_IDENTIFIER_FIXUP_1308.y;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1756.xy;
    float param_25 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1267.z = hdLod5(param_24, param_25).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_1740.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1764;
    _RESERVED_IDENTIFIER_FIXUP_1764.x = _RESERVED_IDENTIFIER_FIXUP_1327.x;
    _RESERVED_IDENTIFIER_FIXUP_1764.y = _RESERVED_IDENTIFIER_FIXUP_1327.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1337 = _RESERVED_IDENTIFIER_FIXUP_1740.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1768;
    _RESERVED_IDENTIFIER_FIXUP_1768.x = _RESERVED_IDENTIFIER_FIXUP_1337.x;
    _RESERVED_IDENTIFIER_FIXUP_1768.y = _RESERVED_IDENTIFIER_FIXUP_1337.y;
    _RESERVED_IDENTIFIER_FIXUP_1764.w = 0.0;
    vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1764.xy;
    float param_27 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1267.w = hdLod5(param_26, param_27).x;
    float _RESERVED_IDENTIFIER_FIXUP_1364 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1267 - texcoord4.zzzz, vec4(0.0))), vec4(1.0));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1852 = vec4(_RESERVED_IDENTIFIER_FIXUP_1246.www * color1.xyz, _RESERVED_IDENTIFIER_FIXUP_1364);
    _RESERVED_IDENTIFIER_FIXUP_1768.w = 0.0;
    vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_1768.xy;
    float param_29 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1392 = _RESERVED_IDENTIFIER_FIXUP_1364 + float((hdLod5(param_28, param_29).x - texcoord4.z) >= 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1852.w = _RESERVED_IDENTIFIER_FIXUP_1392;
    float _RESERVED_IDENTIFIER_FIXUP_1397 = (_RESERVED_IDENTIFIER_FIXUP_1392 * 0.20000000298023223876953125) + (-1.0);
    _RESERVED_IDENTIFIER_FIXUP_1852.w = _RESERVED_IDENTIFIER_FIXUP_1397;
    float _RESERVED_IDENTIFIER_FIXUP_1418 = (_RESERVED_IDENTIFIER_FIXUP_988 * _RESERVED_IDENTIFIER_FIXUP_1397) + 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1852.w = _RESERVED_IDENTIFIER_FIXUP_1418;
    float _RESERVED_IDENTIFIER_FIXUP_1424 = min(_RESERVED_IDENTIFIER_FIXUP_1418, _RESERVED_IDENTIFIER_FIXUP_1171.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1814;
    _RESERVED_IDENTIFIER_FIXUP_1814.x = _RESERVED_IDENTIFIER_FIXUP_1424;
    float _RESERVED_IDENTIFIER_FIXUP_1440 = (_RESERVED_IDENTIFIER_FIXUP_1424 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1853 = vec4(_RESERVED_IDENTIFIER_FIXUP_1852.xyz * _RESERVED_IDENTIFIER_FIXUP_1814.xxx, _RESERVED_IDENTIFIER_FIXUP_1440);
    _RESERVED_IDENTIFIER_FIXUP_1853.w = _RESERVED_IDENTIFIER_FIXUP_1440;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1456 = (_RESERVED_IDENTIFIER_FIXUP_1246.xyz * _RESERVED_IDENTIFIER_FIXUP_1853.www) + _RESERVED_IDENTIFIER_FIXUP_1853.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1829;
    _RESERVED_IDENTIFIER_FIXUP_1829.x = _RESERVED_IDENTIFIER_FIXUP_1456.x;
    _RESERVED_IDENTIFIER_FIXUP_1829.y = _RESERVED_IDENTIFIER_FIXUP_1456.y;
    _RESERVED_IDENTIFIER_FIXUP_1829.z = _RESERVED_IDENTIFIER_FIXUP_1456.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1469 = _RESERVED_IDENTIFIER_FIXUP_1829.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1835;
    _RESERVED_IDENTIFIER_FIXUP_1835.x = _RESERVED_IDENTIFIER_FIXUP_1469.x;
    _RESERVED_IDENTIFIER_FIXUP_1835.y = _RESERVED_IDENTIFIER_FIXUP_1469.y;
    _RESERVED_IDENTIFIER_FIXUP_1835.z = _RESERVED_IDENTIFIER_FIXUP_1469.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1835.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
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
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1667.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_611 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1495;
    if (_RESERVED_IDENTIFIER_FIXUP_585 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1495 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_585), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_611);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1495 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_611);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1495;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1440);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec3 hdB62 = v0.xyz + v0.xyz;
    r2.x = hdB62.x;
    r2.y = hdB62.y;
    r2.z = hdB62.z;
    vec3 hdB78 = r0.xyz * r2.xyz;
    r3.x = hdB78.x;
    r3.y = hdB78.y;
    r3.z = hdB78.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 hdB101 = r0;
    vec3 hdB110 = mix(r3.xyz, hdB101.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB110.x;
    r0.y = hdB110.y;
    r0.z = hdB110.z;
    vec3 hdB121 = r1.xyz * r2.xyz;
    r3.x = hdB121.x;
    r3.y = hdB121.y;
    r3.z = hdB121.z;
    vec4 hdB130 = r1;
    vec3 hdB136 = mix(r3.xyz, hdB130.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB136.x;
    r1.y = hdB136.y;
    r1.z = hdB136.z;
    vec2 param_2 = v4.wz;
    r3 = hdTex4(param_2);
    r5 = mix(r0, r1, r3.xxxx);
    vec2 param_3 = v3.wz;
    r0 = hdTex2(param_3);
    vec3 hdB162 = r2.xyz * r0.xyz;
    r1.x = hdB162.x;
    r1.y = hdB162.y;
    r1.z = hdB162.z;
    vec4 hdB171 = r0;
    vec3 hdB177 = mix(r1.xyz, hdB171.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = hdB177.x;
    r0.y = hdB177.y;
    r0.z = hdB177.z;
    r1 = mix(r5, r0, r3.yyyy);
    vec2 param_4 = v4.xy;
    r0 = hdTex3(param_4);
    vec4 hdB194 = r2;
    vec3 hdB198 = hdB194.xyz * r0.xyz;
    r2.x = hdB198.x;
    r2.y = hdB198.y;
    r2.z = hdB198.z;
    vec4 hdB207 = r0;
    vec3 hdB213 = mix(r2.xyz, hdB207.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r0.x = hdB213.x;
    r0.y = hdB213.y;
    r0.z = hdB213.z;
    r2 = mix(r1, r0, r3.zzzz);
    vec3 hdB229 = r2.www * v1.xyz;
    r0.x = hdB229.x;
    r0.y = hdB229.y;
    r0.z = hdB229.z;
    r1 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param_5 = r1.xy;
    float param_6 = r1.w;
    r1 = hdLod5(param_5, param_6);
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 hdB259 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r3.x = hdB259.x;
    r3.y = hdB259.y;
    vec2 hdB270 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = hdB270.x;
    r4.y = hdB270.y;
    vec2 param_7 = r4.xy;
    float param_8 = r4.w;
    r4 = hdLod5(param_7, param_8);
    r1.y = r4.x;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 hdB294 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = hdB294.x;
    r4.y = hdB294.y;
    vec2 param_9 = r4.xy;
    float param_10 = r4.w;
    r4 = hdLod5(param_9, param_10);
    r1.z = r4.x;
    vec2 hdB314 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = hdB314.x;
    r4.y = hdB314.y;
    vec2 hdB325 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r5.x = hdB325.x;
    r5.y = hdB325.y;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 param_11 = r4.xy;
    float param_12 = r4.w;
    r4 = hdLod5(param_11, param_12);
    r1.w = r4.x;
    r1 += (-v5.zzzz);
    r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
    r0.w = dot(r1, vec4(1.0));
    r5.z = 0.0;
    r5.w = 0.0;
    vec2 param_13 = r5.xy;
    float param_14 = r5.w;
    r1 = hdLod5(param_13, param_14);
    r1.x += (-v5.z);
    r1.x = float(r1.x >= 0.0);
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
    bool _1766 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1776;
    if (_1766)
    {
        _1776 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1776 = _1766;
    }
    if (_1776)
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
        bool _1801 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1816;
        if (!_1801)
        {
            _1816 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1816 = _1801;
        }
        if (_1816)
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
