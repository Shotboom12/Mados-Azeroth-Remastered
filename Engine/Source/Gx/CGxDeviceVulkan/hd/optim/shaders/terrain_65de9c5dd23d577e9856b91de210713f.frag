#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
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
float _RESERVED_IDENTIFIER_FIXUP_1173;
vec4 _RESERVED_IDENTIFIER_FIXUP_1174;


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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _49 = hdOverride >= 0;
    bool _69;
    if (_49)
    {
        _69 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _69 = _49;
    }
    vec4 _70;
    if (_69)
    {
        _70 = vec4(float(hdOverride));
    }
    else
    {
        _70 = value;
    }
    return _70;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _87 = hdOverride >= 0;
    bool _96;
    if (_87)
    {
        _96 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _96 = _87;
    }
    vec4 _97;
    if (_96)
    {
        _97 = vec4(float(hdOverride));
    }
    else
    {
        _97 = value;
    }
    return _97;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _114 = hdOverride >= 0;
    bool _123;
    if (_114)
    {
        _123 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _123 = _114;
    }
    vec4 _124;
    if (_123)
    {
        _124 = vec4(float(hdOverride));
    }
    else
    {
        _124 = value;
    }
    return _124;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _141 = hdOverride >= 0;
    bool _151;
    if (_141)
    {
        _151 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _151 = _141;
    }
    vec4 _152;
    if (_151)
    {
        _152 = vec4(float(hdOverride));
    }
    else
    {
        _152 = value;
    }
    return _152;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _169 = hdOverride >= 0;
    bool _179;
    if (_169)
    {
        _179 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _179 = _169;
    }
    vec4 _180;
    if (_179)
    {
        _180 = vec4(float(hdOverride));
    }
    else
    {
        _180 = value;
    }
    return _180;
}

void HDActual()
{
    vec3 _RESERVED_IDENTIFIER_FIXUP_501 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1173).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_504 = _RESERVED_IDENTIFIER_FIXUP_501 + _RESERVED_IDENTIFIER_FIXUP_501;
    vec4 _RESERVED_IDENTIFIER_FIXUP_990;
    _RESERVED_IDENTIFIER_FIXUP_990.x = _RESERVED_IDENTIFIER_FIXUP_504.x;
    _RESERVED_IDENTIFIER_FIXUP_990.y = _RESERVED_IDENTIFIER_FIXUP_504.y;
    _RESERVED_IDENTIFIER_FIXUP_990.z = _RESERVED_IDENTIFIER_FIXUP_504.z;
    vec2 param = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_512 = hdTex0(param).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_515 = _RESERVED_IDENTIFIER_FIXUP_512 * _RESERVED_IDENTIFIER_FIXUP_990.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_996;
    _RESERVED_IDENTIFIER_FIXUP_996.x = _RESERVED_IDENTIFIER_FIXUP_515.x;
    _RESERVED_IDENTIFIER_FIXUP_996.y = _RESERVED_IDENTIFIER_FIXUP_515.y;
    _RESERVED_IDENTIFIER_FIXUP_996.z = _RESERVED_IDENTIFIER_FIXUP_515.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_524 = abs(optRegs.rows[optTile*82u+uint(1)]);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_532 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_524.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_533 = mix(_RESERVED_IDENTIFIER_FIXUP_996.xyz, _RESERVED_IDENTIFIER_FIXUP_512, _RESERVED_IDENTIFIER_FIXUP_532);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1002;
    _RESERVED_IDENTIFIER_FIXUP_1002.x = _RESERVED_IDENTIFIER_FIXUP_533.x;
    _RESERVED_IDENTIFIER_FIXUP_1002.y = _RESERVED_IDENTIFIER_FIXUP_533.y;
    _RESERVED_IDENTIFIER_FIXUP_1002.z = _RESERVED_IDENTIFIER_FIXUP_533.z;
    vec2 param_1 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_541 = hdTex1(param_1).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_544 = _RESERVED_IDENTIFIER_FIXUP_541 * _RESERVED_IDENTIFIER_FIXUP_990.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1008;
    _RESERVED_IDENTIFIER_FIXUP_1008.x = _RESERVED_IDENTIFIER_FIXUP_544.x;
    _RESERVED_IDENTIFIER_FIXUP_1008.y = _RESERVED_IDENTIFIER_FIXUP_544.y;
    _RESERVED_IDENTIFIER_FIXUP_1008.z = _RESERVED_IDENTIFIER_FIXUP_544.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_558 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_524.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_559 = mix(_RESERVED_IDENTIFIER_FIXUP_1008.xyz, _RESERVED_IDENTIFIER_FIXUP_541, _RESERVED_IDENTIFIER_FIXUP_558);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1014;
    _RESERVED_IDENTIFIER_FIXUP_1014.x = _RESERVED_IDENTIFIER_FIXUP_559.x;
    _RESERVED_IDENTIFIER_FIXUP_1014.y = _RESERVED_IDENTIFIER_FIXUP_559.y;
    _RESERVED_IDENTIFIER_FIXUP_1014.z = _RESERVED_IDENTIFIER_FIXUP_559.z;
    vec2 param_2 = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_569 = hdTex4(param_2);
    vec2 param_3 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_582 = hdTex2(param_3).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_583 = _RESERVED_IDENTIFIER_FIXUP_990.xyz * _RESERVED_IDENTIFIER_FIXUP_582;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1020;
    _RESERVED_IDENTIFIER_FIXUP_1020.x = _RESERVED_IDENTIFIER_FIXUP_583.x;
    _RESERVED_IDENTIFIER_FIXUP_1020.y = _RESERVED_IDENTIFIER_FIXUP_583.y;
    _RESERVED_IDENTIFIER_FIXUP_1020.z = _RESERVED_IDENTIFIER_FIXUP_583.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_597 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_524.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_598 = mix(_RESERVED_IDENTIFIER_FIXUP_1020.xyz, _RESERVED_IDENTIFIER_FIXUP_582, _RESERVED_IDENTIFIER_FIXUP_597);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1026;
    _RESERVED_IDENTIFIER_FIXUP_1026.x = _RESERVED_IDENTIFIER_FIXUP_598.x;
    _RESERVED_IDENTIFIER_FIXUP_1026.y = _RESERVED_IDENTIFIER_FIXUP_598.y;
    _RESERVED_IDENTIFIER_FIXUP_1026.z = _RESERVED_IDENTIFIER_FIXUP_598.z;
    vec2 param_4 = texcoord3.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_617 = hdTex3(param_4).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_618 = _RESERVED_IDENTIFIER_FIXUP_990.xyz * _RESERVED_IDENTIFIER_FIXUP_617;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1032;
    _RESERVED_IDENTIFIER_FIXUP_1032.x = _RESERVED_IDENTIFIER_FIXUP_618.x;
    _RESERVED_IDENTIFIER_FIXUP_1032.y = _RESERVED_IDENTIFIER_FIXUP_618.y;
    _RESERVED_IDENTIFIER_FIXUP_1032.z = _RESERVED_IDENTIFIER_FIXUP_618.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_632 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_524.www, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_633 = mix(_RESERVED_IDENTIFIER_FIXUP_1032.xyz, _RESERVED_IDENTIFIER_FIXUP_617, _RESERVED_IDENTIFIER_FIXUP_632);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1038;
    _RESERVED_IDENTIFIER_FIXUP_1038.x = _RESERVED_IDENTIFIER_FIXUP_633.x;
    _RESERVED_IDENTIFIER_FIXUP_1038.y = _RESERVED_IDENTIFIER_FIXUP_633.y;
    _RESERVED_IDENTIFIER_FIXUP_1038.z = _RESERVED_IDENTIFIER_FIXUP_633.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1044;
    _RESERVED_IDENTIFIER_FIXUP_1044.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1044.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1044.z = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1175 = vec4(_RESERVED_IDENTIFIER_FIXUP_569.www * _RESERVED_IDENTIFIER_FIXUP_1044.xyz, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_686 = (mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1002, _RESERVED_IDENTIFIER_FIXUP_1014, _RESERVED_IDENTIFIER_FIXUP_569.xxxx), _RESERVED_IDENTIFIER_FIXUP_1026, _RESERVED_IDENTIFIER_FIXUP_569.yyyy), _RESERVED_IDENTIFIER_FIXUP_1038, _RESERVED_IDENTIFIER_FIXUP_569.zzzz).xyz * _RESERVED_IDENTIFIER_FIXUP_1175.www) + _RESERVED_IDENTIFIER_FIXUP_1175.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1061;
    _RESERVED_IDENTIFIER_FIXUP_1061.x = _RESERVED_IDENTIFIER_FIXUP_686.x;
    _RESERVED_IDENTIFIER_FIXUP_1061.y = _RESERVED_IDENTIFIER_FIXUP_686.y;
    _RESERVED_IDENTIFIER_FIXUP_1061.z = _RESERVED_IDENTIFIER_FIXUP_686.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_699 = _RESERVED_IDENTIFIER_FIXUP_1061.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1067;
    _RESERVED_IDENTIFIER_FIXUP_1067.x = _RESERVED_IDENTIFIER_FIXUP_699.x;
    _RESERVED_IDENTIFIER_FIXUP_1067.y = _RESERVED_IDENTIFIER_FIXUP_699.y;
    _RESERVED_IDENTIFIER_FIXUP_1067.z = _RESERVED_IDENTIFIER_FIXUP_699.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_714 = _RESERVED_IDENTIFIER_FIXUP_1067.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1073;
    _RESERVED_IDENTIFIER_FIXUP_1073.x = _RESERVED_IDENTIFIER_FIXUP_714.x;
    _RESERVED_IDENTIFIER_FIXUP_1073.y = _RESERVED_IDENTIFIER_FIXUP_714.y;
    _RESERVED_IDENTIFIER_FIXUP_1073.z = _RESERVED_IDENTIFIER_FIXUP_714.z;
    vec2 param_5 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_752 = hdTex0(param_5);
    vec2 param_6 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_756 = hdTex1(param_6);
    vec3 _RESERVED_IDENTIFIER_FIXUP_761 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1081;
    _RESERVED_IDENTIFIER_FIXUP_1081.x = _RESERVED_IDENTIFIER_FIXUP_761.x;
    _RESERVED_IDENTIFIER_FIXUP_1081.y = _RESERVED_IDENTIFIER_FIXUP_761.y;
    _RESERVED_IDENTIFIER_FIXUP_1081.z = _RESERVED_IDENTIFIER_FIXUP_761.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_769 = _RESERVED_IDENTIFIER_FIXUP_752.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = _RESERVED_IDENTIFIER_FIXUP_769 * _RESERVED_IDENTIFIER_FIXUP_1081.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1087;
    _RESERVED_IDENTIFIER_FIXUP_1087.x = _RESERVED_IDENTIFIER_FIXUP_772.x;
    _RESERVED_IDENTIFIER_FIXUP_1087.y = _RESERVED_IDENTIFIER_FIXUP_772.y;
    _RESERVED_IDENTIFIER_FIXUP_1087.z = _RESERVED_IDENTIFIER_FIXUP_772.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_790 = mix(_RESERVED_IDENTIFIER_FIXUP_1087.xyz, _RESERVED_IDENTIFIER_FIXUP_769, _RESERVED_IDENTIFIER_FIXUP_532);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1093 = _RESERVED_IDENTIFIER_FIXUP_752;
    _RESERVED_IDENTIFIER_FIXUP_1093.x = _RESERVED_IDENTIFIER_FIXUP_790.x;
    _RESERVED_IDENTIFIER_FIXUP_1093.y = _RESERVED_IDENTIFIER_FIXUP_790.y;
    _RESERVED_IDENTIFIER_FIXUP_1093.z = _RESERVED_IDENTIFIER_FIXUP_790.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_798 = _RESERVED_IDENTIFIER_FIXUP_756.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_801 = _RESERVED_IDENTIFIER_FIXUP_798 * _RESERVED_IDENTIFIER_FIXUP_1081.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1099;
    _RESERVED_IDENTIFIER_FIXUP_1099.x = _RESERVED_IDENTIFIER_FIXUP_801.x;
    _RESERVED_IDENTIFIER_FIXUP_1099.y = _RESERVED_IDENTIFIER_FIXUP_801.y;
    _RESERVED_IDENTIFIER_FIXUP_1099.z = _RESERVED_IDENTIFIER_FIXUP_801.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_816 = mix(_RESERVED_IDENTIFIER_FIXUP_1099.xyz, _RESERVED_IDENTIFIER_FIXUP_798, _RESERVED_IDENTIFIER_FIXUP_558);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1105 = _RESERVED_IDENTIFIER_FIXUP_756;
    _RESERVED_IDENTIFIER_FIXUP_1105.x = _RESERVED_IDENTIFIER_FIXUP_816.x;
    _RESERVED_IDENTIFIER_FIXUP_1105.y = _RESERVED_IDENTIFIER_FIXUP_816.y;
    _RESERVED_IDENTIFIER_FIXUP_1105.z = _RESERVED_IDENTIFIER_FIXUP_816.z;
    vec2 param_7 = texcoord4.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_826 = hdTex4(param_7);
    vec2 param_8 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_835 = hdTex2(param_8);
    vec3 _RESERVED_IDENTIFIER_FIXUP_839 = _RESERVED_IDENTIFIER_FIXUP_835.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_840 = _RESERVED_IDENTIFIER_FIXUP_1081.xyz * _RESERVED_IDENTIFIER_FIXUP_839;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1111;
    _RESERVED_IDENTIFIER_FIXUP_1111.x = _RESERVED_IDENTIFIER_FIXUP_840.x;
    _RESERVED_IDENTIFIER_FIXUP_1111.y = _RESERVED_IDENTIFIER_FIXUP_840.y;
    _RESERVED_IDENTIFIER_FIXUP_1111.z = _RESERVED_IDENTIFIER_FIXUP_840.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_855 = mix(_RESERVED_IDENTIFIER_FIXUP_1111.xyz, _RESERVED_IDENTIFIER_FIXUP_839, _RESERVED_IDENTIFIER_FIXUP_597);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_835;
    _RESERVED_IDENTIFIER_FIXUP_1117.x = _RESERVED_IDENTIFIER_FIXUP_855.x;
    _RESERVED_IDENTIFIER_FIXUP_1117.y = _RESERVED_IDENTIFIER_FIXUP_855.y;
    _RESERVED_IDENTIFIER_FIXUP_1117.z = _RESERVED_IDENTIFIER_FIXUP_855.z;
    vec2 param_9 = texcoord3.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_870 = hdTex3(param_9);
    vec3 _RESERVED_IDENTIFIER_FIXUP_874 = _RESERVED_IDENTIFIER_FIXUP_870.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_875 = _RESERVED_IDENTIFIER_FIXUP_1081.xyz * _RESERVED_IDENTIFIER_FIXUP_874;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1123;
    _RESERVED_IDENTIFIER_FIXUP_1123.x = _RESERVED_IDENTIFIER_FIXUP_875.x;
    _RESERVED_IDENTIFIER_FIXUP_1123.y = _RESERVED_IDENTIFIER_FIXUP_875.y;
    _RESERVED_IDENTIFIER_FIXUP_1123.z = _RESERVED_IDENTIFIER_FIXUP_875.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_890 = mix(_RESERVED_IDENTIFIER_FIXUP_1123.xyz, _RESERVED_IDENTIFIER_FIXUP_874, _RESERVED_IDENTIFIER_FIXUP_632);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1129 = _RESERVED_IDENTIFIER_FIXUP_870;
    _RESERVED_IDENTIFIER_FIXUP_1129.x = _RESERVED_IDENTIFIER_FIXUP_890.x;
    _RESERVED_IDENTIFIER_FIXUP_1129.y = _RESERVED_IDENTIFIER_FIXUP_890.y;
    _RESERVED_IDENTIFIER_FIXUP_1129.z = _RESERVED_IDENTIFIER_FIXUP_890.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_901 = mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1093, _RESERVED_IDENTIFIER_FIXUP_1105, _RESERVED_IDENTIFIER_FIXUP_826.xxxx), _RESERVED_IDENTIFIER_FIXUP_1117, _RESERVED_IDENTIFIER_FIXUP_826.yyyy), _RESERVED_IDENTIFIER_FIXUP_1129, _RESERVED_IDENTIFIER_FIXUP_826.zzzz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_906 = _RESERVED_IDENTIFIER_FIXUP_901.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1135;
    _RESERVED_IDENTIFIER_FIXUP_1135.x = _RESERVED_IDENTIFIER_FIXUP_906.x;
    _RESERVED_IDENTIFIER_FIXUP_1135.y = _RESERVED_IDENTIFIER_FIXUP_906.y;
    _RESERVED_IDENTIFIER_FIXUP_1135.z = _RESERVED_IDENTIFIER_FIXUP_906.z;
    float _RESERVED_IDENTIFIER_FIXUP_927 = (_RESERVED_IDENTIFIER_FIXUP_826.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1176 = vec4(_RESERVED_IDENTIFIER_FIXUP_826.www * _RESERVED_IDENTIFIER_FIXUP_1135.xyz, _RESERVED_IDENTIFIER_FIXUP_927);
    _RESERVED_IDENTIFIER_FIXUP_1176.w = _RESERVED_IDENTIFIER_FIXUP_927;
    vec3 _RESERVED_IDENTIFIER_FIXUP_943 = (_RESERVED_IDENTIFIER_FIXUP_901.xyz * _RESERVED_IDENTIFIER_FIXUP_1176.www) + _RESERVED_IDENTIFIER_FIXUP_1176.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1154;
    _RESERVED_IDENTIFIER_FIXUP_1154.x = _RESERVED_IDENTIFIER_FIXUP_943.x;
    _RESERVED_IDENTIFIER_FIXUP_1154.y = _RESERVED_IDENTIFIER_FIXUP_943.y;
    _RESERVED_IDENTIFIER_FIXUP_1154.z = _RESERVED_IDENTIFIER_FIXUP_943.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_956 = _RESERVED_IDENTIFIER_FIXUP_1154.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1160;
    _RESERVED_IDENTIFIER_FIXUP_1160.x = _RESERVED_IDENTIFIER_FIXUP_956.x;
    _RESERVED_IDENTIFIER_FIXUP_1160.y = _RESERVED_IDENTIFIER_FIXUP_956.y;
    _RESERVED_IDENTIFIER_FIXUP_1160.z = _RESERVED_IDENTIFIER_FIXUP_956.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1160.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_360 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_369;
    if (_RESERVED_IDENTIFIER_FIXUP_360)
    {
        _RESERVED_IDENTIFIER_FIXUP_369 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_369 = _RESERVED_IDENTIFIER_FIXUP_360;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_369)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_406 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1073.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_432 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_982;
    if (_RESERVED_IDENTIFIER_FIXUP_406 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_982 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_406), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_432);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_982 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_432);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_982;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_927);
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
    vec4 v5 = texcoord3;
    vec4 v6 = texcoord4;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
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
    vec2 param_2 = v6.xy;
    r3 = hdTex4(param_2);
    r5 = mix(r0, r1, r3.xxxx);
    vec2 param_3 = v4.xy;
    r0 = hdTex2(param_3);
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
    vec2 param_4 = v5.xy;
    r0 = hdTex3(param_4);
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
    vec4 hdB241 = r0;
    vec3 hdB243 = r3.www * hdB241.xyz;
    r0.x = hdB243.x;
    r0.y = hdB243.y;
    r0.z = hdB243.z;
    r0.w = (r3.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB260 = r0;
    vec4 hdB263 = r0;
    vec3 hdB265 = (r2.xyz * hdB260.www) + hdB263.xyz;
    r0.x = hdB265.x;
    r0.y = hdB265.y;
    r0.z = hdB265.z;
    vec4 hdB272 = r0;
    vec3 hdB279 = hdB272.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB279.x;
    r0.y = hdB279.y;
    r0.z = hdB279.z;
    vec3 hdB294 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB294.x;
    oC0.y = hdB294.y;
    oC0.z = hdB294.z;
    oC0.w = 1.0;
    bool hdB307 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB315;
    if (hdB307)
    {
        hdB315 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB315 = hdB307;
    }
    if (hdB315)
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
    bool _1241 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1251;
    if (_1241)
    {
        _1251 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 31u) != 0u;
    }
    else
    {
        _1251 = _1241;
    }
    if (_1251)
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
        bool _1276 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1291;
        if (!_1276)
        {
            _1291 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 31u) != 0u;
        }
        else
        {
            _1291 = _1276;
        }
        if (_1291)
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
