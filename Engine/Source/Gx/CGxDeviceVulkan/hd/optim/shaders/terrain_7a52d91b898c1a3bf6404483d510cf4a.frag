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
float _RESERVED_IDENTIFIER_FIXUP_1538;
vec4 _RESERVED_IDENTIFIER_FIXUP_1539;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_593 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_597 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_601 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_605 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_609 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_619 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_593, _RESERVED_IDENTIFIER_FIXUP_597, _RESERVED_IDENTIFIER_FIXUP_609.xxxx), _RESERVED_IDENTIFIER_FIXUP_601, _RESERVED_IDENTIFIER_FIXUP_609.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_624 = mix(_RESERVED_IDENTIFIER_FIXUP_619, _RESERVED_IDENTIFIER_FIXUP_605, _RESERVED_IDENTIFIER_FIXUP_609.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_631 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1275 = _RESERVED_IDENTIFIER_FIXUP_619;
    _RESERVED_IDENTIFIER_FIXUP_1275.x = _RESERVED_IDENTIFIER_FIXUP_631;
    float _RESERVED_IDENTIFIER_FIXUP_637 = clamp((_RESERVED_IDENTIFIER_FIXUP_631 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1275.x = _RESERVED_IDENTIFIER_FIXUP_637;
    float _RESERVED_IDENTIFIER_FIXUP_643 = ((-_RESERVED_IDENTIFIER_FIXUP_637) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1275.y = _RESERVED_IDENTIFIER_FIXUP_643;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1541;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1540;
    if (_RESERVED_IDENTIFIER_FIXUP_643 != (-_RESERVED_IDENTIFIER_FIXUP_643))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_655 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_665 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_667 = _RESERVED_IDENTIFIER_FIXUP_665.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1289 = _RESERVED_IDENTIFIER_FIXUP_1275;
        _RESERVED_IDENTIFIER_FIXUP_1289.y = _RESERVED_IDENTIFIER_FIXUP_667;
        _RESERVED_IDENTIFIER_FIXUP_1289.z = _RESERVED_IDENTIFIER_FIXUP_665.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_675 = _RESERVED_IDENTIFIER_FIXUP_1289.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1293;
        _RESERVED_IDENTIFIER_FIXUP_1293.x = _RESERVED_IDENTIFIER_FIXUP_675.x;
        _RESERVED_IDENTIFIER_FIXUP_1293.y = _RESERVED_IDENTIFIER_FIXUP_675.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_682 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_686 = _RESERVED_IDENTIFIER_FIXUP_682.y;
        _RESERVED_IDENTIFIER_FIXUP_1293.w = _RESERVED_IDENTIFIER_FIXUP_686;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_655.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_655.w;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1293.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_686;
        float _RESERVED_IDENTIFIER_FIXUP_697 = hdLod5(param_5, param_6).x + hdLod5(param_7, param_8).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1548 = vec4(_RESERVED_IDENTIFIER_FIXUP_637, _RESERVED_IDENTIFIER_FIXUP_667, _RESERVED_IDENTIFIER_FIXUP_665.y, _RESERVED_IDENTIFIER_FIXUP_697);
        vec2 _RESERVED_IDENTIFIER_FIXUP_704 = _RESERVED_IDENTIFIER_FIXUP_1548.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1306;
        _RESERVED_IDENTIFIER_FIXUP_1306.x = _RESERVED_IDENTIFIER_FIXUP_704.x;
        _RESERVED_IDENTIFIER_FIXUP_1306.y = _RESERVED_IDENTIFIER_FIXUP_704.y;
        _RESERVED_IDENTIFIER_FIXUP_1306.w = _RESERVED_IDENTIFIER_FIXUP_686;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1306.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_686;
        float _RESERVED_IDENTIFIER_FIXUP_726 = _RESERVED_IDENTIFIER_FIXUP_697 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_1548.w = _RESERVED_IDENTIFIER_FIXUP_726;
        vec2 _RESERVED_IDENTIFIER_FIXUP_733 = _RESERVED_IDENTIFIER_FIXUP_1548.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1319;
        _RESERVED_IDENTIFIER_FIXUP_1319.x = _RESERVED_IDENTIFIER_FIXUP_733.x;
        _RESERVED_IDENTIFIER_FIXUP_1319.y = _RESERVED_IDENTIFIER_FIXUP_733.y;
        _RESERVED_IDENTIFIER_FIXUP_1319.w = _RESERVED_IDENTIFIER_FIXUP_686;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1319.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_686;
        float _RESERVED_IDENTIFIER_FIXUP_755 = _RESERVED_IDENTIFIER_FIXUP_726 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_1548.w = _RESERVED_IDENTIFIER_FIXUP_755;
        vec2 _RESERVED_IDENTIFIER_FIXUP_762 = _RESERVED_IDENTIFIER_FIXUP_1548.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1332;
        _RESERVED_IDENTIFIER_FIXUP_1332.x = _RESERVED_IDENTIFIER_FIXUP_762.x;
        _RESERVED_IDENTIFIER_FIXUP_1332.y = _RESERVED_IDENTIFIER_FIXUP_762.y;
        _RESERVED_IDENTIFIER_FIXUP_1332.w = _RESERVED_IDENTIFIER_FIXUP_686;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1332.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_686;
        vec4 _RESERVED_IDENTIFIER_FIXUP_779 = hdLod5(param_13, param_14);
        float _RESERVED_IDENTIFIER_FIXUP_784 = _RESERVED_IDENTIFIER_FIXUP_755 + _RESERVED_IDENTIFIER_FIXUP_779.x;
        _RESERVED_IDENTIFIER_FIXUP_1548.y = _RESERVED_IDENTIFIER_FIXUP_784;
        float _RESERVED_IDENTIFIER_FIXUP_789 = (_RESERVED_IDENTIFIER_FIXUP_784 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1548.y = _RESERVED_IDENTIFIER_FIXUP_789;
        float _RESERVED_IDENTIFIER_FIXUP_796 = (_RESERVED_IDENTIFIER_FIXUP_637 * _RESERVED_IDENTIFIER_FIXUP_789) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1548.x = _RESERVED_IDENTIFIER_FIXUP_796;
        _RESERVED_IDENTIFIER_FIXUP_779.x = min(_RESERVED_IDENTIFIER_FIXUP_796, _RESERVED_IDENTIFIER_FIXUP_609.w);
        _RESERVED_IDENTIFIER_FIXUP_1541 = _RESERVED_IDENTIFIER_FIXUP_1548;
        _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_779;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_601.x = _RESERVED_IDENTIFIER_FIXUP_609.w;
        _RESERVED_IDENTIFIER_FIXUP_1541 = _RESERVED_IDENTIFIER_FIXUP_1275;
        _RESERVED_IDENTIFIER_FIXUP_1540 = _RESERVED_IDENTIFIER_FIXUP_601;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_1541;
    _RESERVED_IDENTIFIER_FIXUP_1359.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = _RESERVED_IDENTIFIER_FIXUP_624.xyz * _RESERVED_IDENTIFIER_FIXUP_1359.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1361 = _RESERVED_IDENTIFIER_FIXUP_1359;
    _RESERVED_IDENTIFIER_FIXUP_1361.x = _RESERVED_IDENTIFIER_FIXUP_825.x;
    _RESERVED_IDENTIFIER_FIXUP_1361.y = _RESERVED_IDENTIFIER_FIXUP_825.y;
    _RESERVED_IDENTIFIER_FIXUP_1361.z = _RESERVED_IDENTIFIER_FIXUP_825.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_836 = _RESERVED_IDENTIFIER_FIXUP_1361.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1538).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1367 = _RESERVED_IDENTIFIER_FIXUP_1361;
    _RESERVED_IDENTIFIER_FIXUP_1367.x = _RESERVED_IDENTIFIER_FIXUP_836.x;
    _RESERVED_IDENTIFIER_FIXUP_1367.y = _RESERVED_IDENTIFIER_FIXUP_836.y;
    _RESERVED_IDENTIFIER_FIXUP_1367.z = _RESERVED_IDENTIFIER_FIXUP_836.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_847 = _RESERVED_IDENTIFIER_FIXUP_1367.xyz + _RESERVED_IDENTIFIER_FIXUP_1367.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1373 = _RESERVED_IDENTIFIER_FIXUP_1367;
    _RESERVED_IDENTIFIER_FIXUP_1373.x = _RESERVED_IDENTIFIER_FIXUP_847.x;
    _RESERVED_IDENTIFIER_FIXUP_1373.y = _RESERVED_IDENTIFIER_FIXUP_847.y;
    _RESERVED_IDENTIFIER_FIXUP_1373.z = _RESERVED_IDENTIFIER_FIXUP_847.z;
    _RESERVED_IDENTIFIER_FIXUP_624.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_624.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_624.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_872 = (_RESERVED_IDENTIFIER_FIXUP_624.xyz * _RESERVED_IDENTIFIER_FIXUP_1540.xxx) + _RESERVED_IDENTIFIER_FIXUP_1373.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1385 = _RESERVED_IDENTIFIER_FIXUP_1373;
    _RESERVED_IDENTIFIER_FIXUP_1385.x = _RESERVED_IDENTIFIER_FIXUP_872.x;
    _RESERVED_IDENTIFIER_FIXUP_1385.y = _RESERVED_IDENTIFIER_FIXUP_872.y;
    _RESERVED_IDENTIFIER_FIXUP_1385.z = _RESERVED_IDENTIFIER_FIXUP_872.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_885 = _RESERVED_IDENTIFIER_FIXUP_1385.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1391 = _RESERVED_IDENTIFIER_FIXUP_1385;
    _RESERVED_IDENTIFIER_FIXUP_1391.x = _RESERVED_IDENTIFIER_FIXUP_885.x;
    _RESERVED_IDENTIFIER_FIXUP_1391.y = _RESERVED_IDENTIFIER_FIXUP_885.y;
    _RESERVED_IDENTIFIER_FIXUP_1391.z = _RESERVED_IDENTIFIER_FIXUP_885.z;
    vec2 param_15 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_936 = hdTex0(param_15);
    vec2 param_16 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_940 = hdTex1(param_16);
    vec2 param_17 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_944 = hdTex2(param_17);
    vec2 param_18 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_948 = hdTex3(param_18);
    vec2 param_19 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_952 = hdTex4(param_19);
    vec4 _RESERVED_IDENTIFIER_FIXUP_962 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_936, _RESERVED_IDENTIFIER_FIXUP_940, _RESERVED_IDENTIFIER_FIXUP_952.xxxx), _RESERVED_IDENTIFIER_FIXUP_944, _RESERVED_IDENTIFIER_FIXUP_952.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_967 = mix(_RESERVED_IDENTIFIER_FIXUP_962, _RESERVED_IDENTIFIER_FIXUP_948, _RESERVED_IDENTIFIER_FIXUP_952.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_962;
    _RESERVED_IDENTIFIER_FIXUP_1407.x = _RESERVED_IDENTIFIER_FIXUP_631;
    float _RESERVED_IDENTIFIER_FIXUP_980 = clamp((_RESERVED_IDENTIFIER_FIXUP_631 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1407.x = _RESERVED_IDENTIFIER_FIXUP_980;
    float _RESERVED_IDENTIFIER_FIXUP_986 = ((-_RESERVED_IDENTIFIER_FIXUP_980) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1407.y = _RESERVED_IDENTIFIER_FIXUP_986;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1545;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1544;
    if (_RESERVED_IDENTIFIER_FIXUP_986 != (-_RESERVED_IDENTIFIER_FIXUP_986))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_998 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1008 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1010 = _RESERVED_IDENTIFIER_FIXUP_1008.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1421 = _RESERVED_IDENTIFIER_FIXUP_1407;
        _RESERVED_IDENTIFIER_FIXUP_1421.y = _RESERVED_IDENTIFIER_FIXUP_1010;
        _RESERVED_IDENTIFIER_FIXUP_1421.z = _RESERVED_IDENTIFIER_FIXUP_1008.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1018 = _RESERVED_IDENTIFIER_FIXUP_1421.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1425;
        _RESERVED_IDENTIFIER_FIXUP_1425.x = _RESERVED_IDENTIFIER_FIXUP_1018.x;
        _RESERVED_IDENTIFIER_FIXUP_1425.y = _RESERVED_IDENTIFIER_FIXUP_1018.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1025 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1029 = _RESERVED_IDENTIFIER_FIXUP_1025.y;
        _RESERVED_IDENTIFIER_FIXUP_1425.w = _RESERVED_IDENTIFIER_FIXUP_1029;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_998.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_998.w;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1425.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1029;
        float _RESERVED_IDENTIFIER_FIXUP_1040 = hdLod5(param_20, param_21).x + hdLod5(param_22, param_23).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1550 = vec4(_RESERVED_IDENTIFIER_FIXUP_980, _RESERVED_IDENTIFIER_FIXUP_1010, _RESERVED_IDENTIFIER_FIXUP_1008.y, _RESERVED_IDENTIFIER_FIXUP_1040);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1047 = _RESERVED_IDENTIFIER_FIXUP_1550.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1438;
        _RESERVED_IDENTIFIER_FIXUP_1438.x = _RESERVED_IDENTIFIER_FIXUP_1047.x;
        _RESERVED_IDENTIFIER_FIXUP_1438.y = _RESERVED_IDENTIFIER_FIXUP_1047.y;
        _RESERVED_IDENTIFIER_FIXUP_1438.w = _RESERVED_IDENTIFIER_FIXUP_1029;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1438.xy;
        float param_25 = _RESERVED_IDENTIFIER_FIXUP_1029;
        float _RESERVED_IDENTIFIER_FIXUP_1069 = _RESERVED_IDENTIFIER_FIXUP_1040 + hdLod5(param_24, param_25).x;
        _RESERVED_IDENTIFIER_FIXUP_1550.w = _RESERVED_IDENTIFIER_FIXUP_1069;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1076 = _RESERVED_IDENTIFIER_FIXUP_1550.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1451;
        _RESERVED_IDENTIFIER_FIXUP_1451.x = _RESERVED_IDENTIFIER_FIXUP_1076.x;
        _RESERVED_IDENTIFIER_FIXUP_1451.y = _RESERVED_IDENTIFIER_FIXUP_1076.y;
        _RESERVED_IDENTIFIER_FIXUP_1451.w = _RESERVED_IDENTIFIER_FIXUP_1029;
        vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_1451.xy;
        float param_27 = _RESERVED_IDENTIFIER_FIXUP_1029;
        float _RESERVED_IDENTIFIER_FIXUP_1098 = _RESERVED_IDENTIFIER_FIXUP_1069 + hdLod5(param_26, param_27).x;
        _RESERVED_IDENTIFIER_FIXUP_1550.w = _RESERVED_IDENTIFIER_FIXUP_1098;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1105 = _RESERVED_IDENTIFIER_FIXUP_1550.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1464;
        _RESERVED_IDENTIFIER_FIXUP_1464.x = _RESERVED_IDENTIFIER_FIXUP_1105.x;
        _RESERVED_IDENTIFIER_FIXUP_1464.y = _RESERVED_IDENTIFIER_FIXUP_1105.y;
        _RESERVED_IDENTIFIER_FIXUP_1464.w = _RESERVED_IDENTIFIER_FIXUP_1029;
        vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_1464.xy;
        float param_29 = _RESERVED_IDENTIFIER_FIXUP_1029;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1122 = hdLod5(param_28, param_29);
        float _RESERVED_IDENTIFIER_FIXUP_1127 = _RESERVED_IDENTIFIER_FIXUP_1098 + _RESERVED_IDENTIFIER_FIXUP_1122.x;
        _RESERVED_IDENTIFIER_FIXUP_1550.y = _RESERVED_IDENTIFIER_FIXUP_1127;
        float _RESERVED_IDENTIFIER_FIXUP_1132 = (_RESERVED_IDENTIFIER_FIXUP_1127 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1550.y = _RESERVED_IDENTIFIER_FIXUP_1132;
        float _RESERVED_IDENTIFIER_FIXUP_1139 = (_RESERVED_IDENTIFIER_FIXUP_980 * _RESERVED_IDENTIFIER_FIXUP_1132) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1550.x = _RESERVED_IDENTIFIER_FIXUP_1139;
        _RESERVED_IDENTIFIER_FIXUP_1122.x = min(_RESERVED_IDENTIFIER_FIXUP_1139, _RESERVED_IDENTIFIER_FIXUP_952.w);
        _RESERVED_IDENTIFIER_FIXUP_1545 = _RESERVED_IDENTIFIER_FIXUP_1550;
        _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_1122;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_944.x = _RESERVED_IDENTIFIER_FIXUP_952.w;
        _RESERVED_IDENTIFIER_FIXUP_1545 = _RESERVED_IDENTIFIER_FIXUP_1407;
        _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_944;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1155 = (_RESERVED_IDENTIFIER_FIXUP_1544.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1489 = _RESERVED_IDENTIFIER_FIXUP_1545;
    _RESERVED_IDENTIFIER_FIXUP_1489.x = _RESERVED_IDENTIFIER_FIXUP_1155;
    _RESERVED_IDENTIFIER_FIXUP_1489.x = _RESERVED_IDENTIFIER_FIXUP_1155;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1168 = _RESERVED_IDENTIFIER_FIXUP_967.xyz * _RESERVED_IDENTIFIER_FIXUP_1489.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1495 = _RESERVED_IDENTIFIER_FIXUP_1489;
    _RESERVED_IDENTIFIER_FIXUP_1495.x = _RESERVED_IDENTIFIER_FIXUP_1168.x;
    _RESERVED_IDENTIFIER_FIXUP_1495.y = _RESERVED_IDENTIFIER_FIXUP_1168.y;
    _RESERVED_IDENTIFIER_FIXUP_1495.z = _RESERVED_IDENTIFIER_FIXUP_1168.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1179 = _RESERVED_IDENTIFIER_FIXUP_1495.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1501 = _RESERVED_IDENTIFIER_FIXUP_1495;
    _RESERVED_IDENTIFIER_FIXUP_1501.x = _RESERVED_IDENTIFIER_FIXUP_1179.x;
    _RESERVED_IDENTIFIER_FIXUP_1501.y = _RESERVED_IDENTIFIER_FIXUP_1179.y;
    _RESERVED_IDENTIFIER_FIXUP_1501.z = _RESERVED_IDENTIFIER_FIXUP_1179.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1190 = _RESERVED_IDENTIFIER_FIXUP_1501.xyz + _RESERVED_IDENTIFIER_FIXUP_1501.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_1501;
    _RESERVED_IDENTIFIER_FIXUP_1507.x = _RESERVED_IDENTIFIER_FIXUP_1190.x;
    _RESERVED_IDENTIFIER_FIXUP_1507.y = _RESERVED_IDENTIFIER_FIXUP_1190.y;
    _RESERVED_IDENTIFIER_FIXUP_1507.z = _RESERVED_IDENTIFIER_FIXUP_1190.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1201 = _RESERVED_IDENTIFIER_FIXUP_967.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1513 = _RESERVED_IDENTIFIER_FIXUP_967;
    _RESERVED_IDENTIFIER_FIXUP_1513.x = _RESERVED_IDENTIFIER_FIXUP_1201.x;
    _RESERVED_IDENTIFIER_FIXUP_1513.y = _RESERVED_IDENTIFIER_FIXUP_1201.y;
    _RESERVED_IDENTIFIER_FIXUP_1513.z = _RESERVED_IDENTIFIER_FIXUP_1201.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1215 = (_RESERVED_IDENTIFIER_FIXUP_1513.xyz * _RESERVED_IDENTIFIER_FIXUP_1544.xxx) + _RESERVED_IDENTIFIER_FIXUP_1507.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1519 = _RESERVED_IDENTIFIER_FIXUP_1507;
    _RESERVED_IDENTIFIER_FIXUP_1519.x = _RESERVED_IDENTIFIER_FIXUP_1215.x;
    _RESERVED_IDENTIFIER_FIXUP_1519.y = _RESERVED_IDENTIFIER_FIXUP_1215.y;
    _RESERVED_IDENTIFIER_FIXUP_1519.z = _RESERVED_IDENTIFIER_FIXUP_1215.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1228 = _RESERVED_IDENTIFIER_FIXUP_1519.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1525 = _RESERVED_IDENTIFIER_FIXUP_1519;
    _RESERVED_IDENTIFIER_FIXUP_1525.x = _RESERVED_IDENTIFIER_FIXUP_1228.x;
    _RESERVED_IDENTIFIER_FIXUP_1525.y = _RESERVED_IDENTIFIER_FIXUP_1228.y;
    _RESERVED_IDENTIFIER_FIXUP_1525.z = _RESERVED_IDENTIFIER_FIXUP_1228.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1525.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_456 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_465;
    if (_RESERVED_IDENTIFIER_FIXUP_456)
    {
        _RESERVED_IDENTIFIER_FIXUP_465 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_465 = _RESERVED_IDENTIFIER_FIXUP_456;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_465)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_502 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1391.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_529 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1265;
    if (_RESERVED_IDENTIFIER_FIXUP_502 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1265 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_502), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_529);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1265 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_529);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1265;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1155);
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
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
    vec2 param_4 = v4.wz;
    r4 = hdTex4(param_4);
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        vec2 hdB142 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB142.x;
        r0.z = hdB142.y;
        vec2 hdB164 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB164.x;
        r3.y = hdB164.y;
        vec2 hdB172 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB172.x;
        r3.w = hdB172.y;
        vec2 param_7 = r3.xy;
        float param_8 = r3.w;
        r3 = hdLod5(param_7, param_8);
        r0.w = r2.x + r3.x;
        vec2 hdB195 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB195.x;
        r2.y = hdB195.y;
        vec2 hdB202 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB202.x;
        r2.w = hdB202.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r0.w += r2.x;
        vec2 hdB225 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB225.x;
        r2.y = hdB225.y;
        vec2 hdB232 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB232.x;
        r2.w = hdB232.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
        r0.w += r2.x;
        vec2 hdB255 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB255.x;
        r2.y = hdB255.y;
        vec2 hdB262 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB262.x;
        r2.w = hdB262.y;
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod5(param_13, param_14);
        r0.y = r0.w + r2.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r2.x = min(r0.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB313 = r0;
    vec3 hdB315 = r1.xyz * hdB313.xxx;
    r0.x = hdB315.x;
    r0.y = hdB315.y;
    r0.z = hdB315.z;
    vec4 hdB322 = r0;
    vec3 hdB326 = hdB322.xyz * v0.xyz;
    r0.x = hdB326.x;
    r0.y = hdB326.y;
    r0.z = hdB326.z;
    vec4 hdB333 = r0;
    vec4 hdB335 = r0;
    vec3 hdB337 = hdB333.xyz + hdB335.xyz;
    r0.x = hdB337.x;
    r0.y = hdB337.y;
    r0.z = hdB337.z;
    vec4 hdB344 = r1;
    vec3 hdB348 = hdB344.www * v1.xyz;
    r1.x = hdB348.x;
    r1.y = hdB348.y;
    r1.z = hdB348.z;
    vec4 hdB360 = r0;
    vec3 hdB362 = (r1.xyz * r2.xxx) + hdB360.xyz;
    r0.x = hdB362.x;
    r0.y = hdB362.y;
    r0.z = hdB362.z;
    vec4 hdB369 = r0;
    vec3 hdB376 = hdB369.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB376.x;
    r0.y = hdB376.y;
    r0.z = hdB376.z;
    vec3 hdB391 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB391.x;
    oC0.y = hdB391.y;
    oC0.z = hdB391.z;
    oC0.w = 1.0;
    bool hdB404 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB412;
    if (hdB404)
    {
        hdB412 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB412 = hdB404;
    }
    if (hdB412)
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
    bool _1553 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1563;
    if (_1553)
    {
        _1563 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1563 = _1553;
    }
    if (_1563)
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
        bool _1588 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1603;
        if (!_1588)
        {
            _1603 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1603 = _1588;
        }
        if (_1603)
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
