#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1568;
vec4 _RESERVED_IDENTIFIER_FIXUP_1569;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _49 = hdOverride >= 0;
    bool _68;
    if (_49)
    {
        _68 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _68 = _49;
    }
    vec4 _69;
    if (_68)
    {
        _69 = vec4(float(hdOverride));
    }
    else
    {
        _69 = value;
    }
    return _69;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _86 = hdOverride >= 0;
    bool _96;
    if (_86)
    {
        _96 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _96 = _86;
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

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _114 = hdOverride >= 0;
    bool _124;
    if (_114)
    {
        _124 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _124 = _114;
    }
    vec4 _125;
    if (_124)
    {
        _125 = vec4(float(hdOverride));
    }
    else
    {
        _125 = value;
    }
    return _125;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _143 = hdOverride >= 0;
    bool _153;
    if (_143)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_601 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_605 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_609 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_613 = hdTex3(param_2);
    float _RESERVED_IDENTIFIER_FIXUP_617 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_613.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1293 = _RESERVED_IDENTIFIER_FIXUP_613;
    _RESERVED_IDENTIFIER_FIXUP_1293.z = _RESERVED_IDENTIFIER_FIXUP_617;
    _RESERVED_IDENTIFIER_FIXUP_1293.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_617;
    vec4 _RESERVED_IDENTIFIER_FIXUP_627 = _RESERVED_IDENTIFIER_FIXUP_605 * _RESERVED_IDENTIFIER_FIXUP_1293.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_639 = (_RESERVED_IDENTIFIER_FIXUP_609 * _RESERVED_IDENTIFIER_FIXUP_1293.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_601 * _RESERVED_IDENTIFIER_FIXUP_1293.zzzz) + _RESERVED_IDENTIFIER_FIXUP_627);
    float _RESERVED_IDENTIFIER_FIXUP_646 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1300 = _RESERVED_IDENTIFIER_FIXUP_627;
    _RESERVED_IDENTIFIER_FIXUP_1300.x = _RESERVED_IDENTIFIER_FIXUP_646;
    float _RESERVED_IDENTIFIER_FIXUP_652 = clamp((_RESERVED_IDENTIFIER_FIXUP_646 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1300.x = _RESERVED_IDENTIFIER_FIXUP_652;
    float _RESERVED_IDENTIFIER_FIXUP_658 = ((-_RESERVED_IDENTIFIER_FIXUP_652) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_658;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1571;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1570;
    if (_RESERVED_IDENTIFIER_FIXUP_658 != (-_RESERVED_IDENTIFIER_FIXUP_658))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_670 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_680 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_682 = _RESERVED_IDENTIFIER_FIXUP_680.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1314 = _RESERVED_IDENTIFIER_FIXUP_1300;
        _RESERVED_IDENTIFIER_FIXUP_1314.y = _RESERVED_IDENTIFIER_FIXUP_682;
        _RESERVED_IDENTIFIER_FIXUP_1314.z = _RESERVED_IDENTIFIER_FIXUP_680.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_690 = _RESERVED_IDENTIFIER_FIXUP_1314.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1318;
        _RESERVED_IDENTIFIER_FIXUP_1318.x = _RESERVED_IDENTIFIER_FIXUP_690.x;
        _RESERVED_IDENTIFIER_FIXUP_1318.y = _RESERVED_IDENTIFIER_FIXUP_690.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_697 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_701 = _RESERVED_IDENTIFIER_FIXUP_697.y;
        _RESERVED_IDENTIFIER_FIXUP_1318.w = _RESERVED_IDENTIFIER_FIXUP_701;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_670.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_670.w;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1318.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_701;
        float _RESERVED_IDENTIFIER_FIXUP_712 = hdLod5(param_3, param_4).x + hdLod5(param_5, param_6).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1578 = vec4(_RESERVED_IDENTIFIER_FIXUP_652, _RESERVED_IDENTIFIER_FIXUP_682, _RESERVED_IDENTIFIER_FIXUP_680.y, _RESERVED_IDENTIFIER_FIXUP_712);
        vec2 _RESERVED_IDENTIFIER_FIXUP_719 = _RESERVED_IDENTIFIER_FIXUP_1578.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1331;
        _RESERVED_IDENTIFIER_FIXUP_1331.x = _RESERVED_IDENTIFIER_FIXUP_719.x;
        _RESERVED_IDENTIFIER_FIXUP_1331.y = _RESERVED_IDENTIFIER_FIXUP_719.y;
        _RESERVED_IDENTIFIER_FIXUP_1331.w = _RESERVED_IDENTIFIER_FIXUP_701;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1331.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_701;
        float _RESERVED_IDENTIFIER_FIXUP_741 = _RESERVED_IDENTIFIER_FIXUP_712 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_1578.w = _RESERVED_IDENTIFIER_FIXUP_741;
        vec2 _RESERVED_IDENTIFIER_FIXUP_748 = _RESERVED_IDENTIFIER_FIXUP_1578.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1344;
        _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_748.x;
        _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_748.y;
        _RESERVED_IDENTIFIER_FIXUP_1344.w = _RESERVED_IDENTIFIER_FIXUP_701;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1344.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_701;
        float _RESERVED_IDENTIFIER_FIXUP_770 = _RESERVED_IDENTIFIER_FIXUP_741 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_1578.w = _RESERVED_IDENTIFIER_FIXUP_770;
        vec2 _RESERVED_IDENTIFIER_FIXUP_777 = _RESERVED_IDENTIFIER_FIXUP_1578.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1357;
        _RESERVED_IDENTIFIER_FIXUP_1357.x = _RESERVED_IDENTIFIER_FIXUP_777.x;
        _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_777.y;
        _RESERVED_IDENTIFIER_FIXUP_1357.w = _RESERVED_IDENTIFIER_FIXUP_701;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_1357.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_701;
        vec4 _RESERVED_IDENTIFIER_FIXUP_794 = hdLod5(param_11, param_12);
        float _RESERVED_IDENTIFIER_FIXUP_799 = _RESERVED_IDENTIFIER_FIXUP_770 + _RESERVED_IDENTIFIER_FIXUP_794.x;
        _RESERVED_IDENTIFIER_FIXUP_1578.y = _RESERVED_IDENTIFIER_FIXUP_799;
        float _RESERVED_IDENTIFIER_FIXUP_804 = (_RESERVED_IDENTIFIER_FIXUP_799 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1578.y = _RESERVED_IDENTIFIER_FIXUP_804;
        float _RESERVED_IDENTIFIER_FIXUP_811 = (_RESERVED_IDENTIFIER_FIXUP_652 * _RESERVED_IDENTIFIER_FIXUP_804) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1578.x = _RESERVED_IDENTIFIER_FIXUP_811;
        _RESERVED_IDENTIFIER_FIXUP_794.x = min(_RESERVED_IDENTIFIER_FIXUP_811, _RESERVED_IDENTIFIER_FIXUP_613.w);
        _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_1578;
        _RESERVED_IDENTIFIER_FIXUP_1570 = _RESERVED_IDENTIFIER_FIXUP_794;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_609.x = _RESERVED_IDENTIFIER_FIXUP_613.w;
        _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_1300;
        _RESERVED_IDENTIFIER_FIXUP_1570 = _RESERVED_IDENTIFIER_FIXUP_609;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1384 = _RESERVED_IDENTIFIER_FIXUP_1571;
    _RESERVED_IDENTIFIER_FIXUP_1384.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_840 = _RESERVED_IDENTIFIER_FIXUP_639.xyz * _RESERVED_IDENTIFIER_FIXUP_1384.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1386 = _RESERVED_IDENTIFIER_FIXUP_639;
    _RESERVED_IDENTIFIER_FIXUP_1386.x = _RESERVED_IDENTIFIER_FIXUP_840.x;
    _RESERVED_IDENTIFIER_FIXUP_1386.y = _RESERVED_IDENTIFIER_FIXUP_840.y;
    _RESERVED_IDENTIFIER_FIXUP_1386.z = _RESERVED_IDENTIFIER_FIXUP_840.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_851 = _RESERVED_IDENTIFIER_FIXUP_1386.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1568).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1392 = _RESERVED_IDENTIFIER_FIXUP_1386;
    _RESERVED_IDENTIFIER_FIXUP_1392.x = _RESERVED_IDENTIFIER_FIXUP_851.x;
    _RESERVED_IDENTIFIER_FIXUP_1392.y = _RESERVED_IDENTIFIER_FIXUP_851.y;
    _RESERVED_IDENTIFIER_FIXUP_1392.z = _RESERVED_IDENTIFIER_FIXUP_851.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_862 = _RESERVED_IDENTIFIER_FIXUP_1392.xyz + _RESERVED_IDENTIFIER_FIXUP_1392.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1398 = _RESERVED_IDENTIFIER_FIXUP_1392;
    _RESERVED_IDENTIFIER_FIXUP_1398.x = _RESERVED_IDENTIFIER_FIXUP_862.x;
    _RESERVED_IDENTIFIER_FIXUP_1398.y = _RESERVED_IDENTIFIER_FIXUP_862.y;
    _RESERVED_IDENTIFIER_FIXUP_1398.z = _RESERVED_IDENTIFIER_FIXUP_862.z;
    _RESERVED_IDENTIFIER_FIXUP_1384.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1384.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1384.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_887 = (_RESERVED_IDENTIFIER_FIXUP_1384.xyz * _RESERVED_IDENTIFIER_FIXUP_1570.xxx) + _RESERVED_IDENTIFIER_FIXUP_1398.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_1398;
    _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_887.x;
    _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_887.y;
    _RESERVED_IDENTIFIER_FIXUP_1410.z = _RESERVED_IDENTIFIER_FIXUP_887.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_900 = _RESERVED_IDENTIFIER_FIXUP_1410.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1416 = _RESERVED_IDENTIFIER_FIXUP_1410;
    _RESERVED_IDENTIFIER_FIXUP_1416.x = _RESERVED_IDENTIFIER_FIXUP_900.x;
    _RESERVED_IDENTIFIER_FIXUP_1416.y = _RESERVED_IDENTIFIER_FIXUP_900.y;
    _RESERVED_IDENTIFIER_FIXUP_1416.z = _RESERVED_IDENTIFIER_FIXUP_900.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_950 = OptTex0( texcoord0.xyz);
    vec2 param_13 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_954 = hdTex1(param_13);
    vec2 param_14 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_958 = hdTex2(param_14);
    vec2 param_15 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_962 = hdTex3(param_15);
    float _RESERVED_IDENTIFIER_FIXUP_966 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_962.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1430 = _RESERVED_IDENTIFIER_FIXUP_962;
    _RESERVED_IDENTIFIER_FIXUP_1430.z = _RESERVED_IDENTIFIER_FIXUP_966;
    _RESERVED_IDENTIFIER_FIXUP_1430.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_966;
    vec4 _RESERVED_IDENTIFIER_FIXUP_976 = _RESERVED_IDENTIFIER_FIXUP_954 * _RESERVED_IDENTIFIER_FIXUP_1430.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_988 = (_RESERVED_IDENTIFIER_FIXUP_958 * _RESERVED_IDENTIFIER_FIXUP_1430.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_950 * _RESERVED_IDENTIFIER_FIXUP_1430.zzzz) + _RESERVED_IDENTIFIER_FIXUP_976);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1437 = _RESERVED_IDENTIFIER_FIXUP_976;
    _RESERVED_IDENTIFIER_FIXUP_1437.x = _RESERVED_IDENTIFIER_FIXUP_646;
    float _RESERVED_IDENTIFIER_FIXUP_1001 = clamp((_RESERVED_IDENTIFIER_FIXUP_646 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1437.x = _RESERVED_IDENTIFIER_FIXUP_1001;
    float _RESERVED_IDENTIFIER_FIXUP_1007 = ((-_RESERVED_IDENTIFIER_FIXUP_1001) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1437.y = _RESERVED_IDENTIFIER_FIXUP_1007;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1575;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1574;
    if (_RESERVED_IDENTIFIER_FIXUP_1007 != (-_RESERVED_IDENTIFIER_FIXUP_1007))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1019 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1029 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1031 = _RESERVED_IDENTIFIER_FIXUP_1029.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1451 = _RESERVED_IDENTIFIER_FIXUP_1437;
        _RESERVED_IDENTIFIER_FIXUP_1451.y = _RESERVED_IDENTIFIER_FIXUP_1031;
        _RESERVED_IDENTIFIER_FIXUP_1451.z = _RESERVED_IDENTIFIER_FIXUP_1029.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1039 = _RESERVED_IDENTIFIER_FIXUP_1451.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1455;
        _RESERVED_IDENTIFIER_FIXUP_1455.x = _RESERVED_IDENTIFIER_FIXUP_1039.x;
        _RESERVED_IDENTIFIER_FIXUP_1455.y = _RESERVED_IDENTIFIER_FIXUP_1039.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1046 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1050 = _RESERVED_IDENTIFIER_FIXUP_1046.y;
        _RESERVED_IDENTIFIER_FIXUP_1455.w = _RESERVED_IDENTIFIER_FIXUP_1050;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1019.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1019.w;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1455.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1050;
        float _RESERVED_IDENTIFIER_FIXUP_1061 = hdLod5(param_16, param_17).x + hdLod5(param_18, param_19).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1580 = vec4(_RESERVED_IDENTIFIER_FIXUP_1001, _RESERVED_IDENTIFIER_FIXUP_1031, _RESERVED_IDENTIFIER_FIXUP_1029.y, _RESERVED_IDENTIFIER_FIXUP_1061);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1068 = _RESERVED_IDENTIFIER_FIXUP_1580.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1468;
        _RESERVED_IDENTIFIER_FIXUP_1468.x = _RESERVED_IDENTIFIER_FIXUP_1068.x;
        _RESERVED_IDENTIFIER_FIXUP_1468.y = _RESERVED_IDENTIFIER_FIXUP_1068.y;
        _RESERVED_IDENTIFIER_FIXUP_1468.w = _RESERVED_IDENTIFIER_FIXUP_1050;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1468.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1050;
        float _RESERVED_IDENTIFIER_FIXUP_1090 = _RESERVED_IDENTIFIER_FIXUP_1061 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_1580.w = _RESERVED_IDENTIFIER_FIXUP_1090;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1097 = _RESERVED_IDENTIFIER_FIXUP_1580.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1481;
        _RESERVED_IDENTIFIER_FIXUP_1481.x = _RESERVED_IDENTIFIER_FIXUP_1097.x;
        _RESERVED_IDENTIFIER_FIXUP_1481.y = _RESERVED_IDENTIFIER_FIXUP_1097.y;
        _RESERVED_IDENTIFIER_FIXUP_1481.w = _RESERVED_IDENTIFIER_FIXUP_1050;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1481.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1050;
        float _RESERVED_IDENTIFIER_FIXUP_1119 = _RESERVED_IDENTIFIER_FIXUP_1090 + hdLod5(param_22, param_23).x;
        _RESERVED_IDENTIFIER_FIXUP_1580.w = _RESERVED_IDENTIFIER_FIXUP_1119;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1126 = _RESERVED_IDENTIFIER_FIXUP_1580.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1494;
        _RESERVED_IDENTIFIER_FIXUP_1494.x = _RESERVED_IDENTIFIER_FIXUP_1126.x;
        _RESERVED_IDENTIFIER_FIXUP_1494.y = _RESERVED_IDENTIFIER_FIXUP_1126.y;
        _RESERVED_IDENTIFIER_FIXUP_1494.w = _RESERVED_IDENTIFIER_FIXUP_1050;
        vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1494.xy;
        float param_25 = _RESERVED_IDENTIFIER_FIXUP_1050;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1143 = hdLod5(param_24, param_25);
        float _RESERVED_IDENTIFIER_FIXUP_1148 = _RESERVED_IDENTIFIER_FIXUP_1119 + _RESERVED_IDENTIFIER_FIXUP_1143.x;
        _RESERVED_IDENTIFIER_FIXUP_1580.y = _RESERVED_IDENTIFIER_FIXUP_1148;
        float _RESERVED_IDENTIFIER_FIXUP_1153 = (_RESERVED_IDENTIFIER_FIXUP_1148 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1580.y = _RESERVED_IDENTIFIER_FIXUP_1153;
        float _RESERVED_IDENTIFIER_FIXUP_1160 = (_RESERVED_IDENTIFIER_FIXUP_1001 * _RESERVED_IDENTIFIER_FIXUP_1153) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1580.x = _RESERVED_IDENTIFIER_FIXUP_1160;
        _RESERVED_IDENTIFIER_FIXUP_1143.x = min(_RESERVED_IDENTIFIER_FIXUP_1160, _RESERVED_IDENTIFIER_FIXUP_962.w);
        _RESERVED_IDENTIFIER_FIXUP_1575 = _RESERVED_IDENTIFIER_FIXUP_1580;
        _RESERVED_IDENTIFIER_FIXUP_1574 = _RESERVED_IDENTIFIER_FIXUP_1143;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_958.x = _RESERVED_IDENTIFIER_FIXUP_962.w;
        _RESERVED_IDENTIFIER_FIXUP_1575 = _RESERVED_IDENTIFIER_FIXUP_1437;
        _RESERVED_IDENTIFIER_FIXUP_1574 = _RESERVED_IDENTIFIER_FIXUP_958;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1176 = (_RESERVED_IDENTIFIER_FIXUP_1574.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1519 = _RESERVED_IDENTIFIER_FIXUP_1575;
    _RESERVED_IDENTIFIER_FIXUP_1519.x = _RESERVED_IDENTIFIER_FIXUP_1176;
    _RESERVED_IDENTIFIER_FIXUP_1519.x = _RESERVED_IDENTIFIER_FIXUP_1176;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1189 = _RESERVED_IDENTIFIER_FIXUP_988.xyz * _RESERVED_IDENTIFIER_FIXUP_1519.xxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1525 = _RESERVED_IDENTIFIER_FIXUP_988;
    _RESERVED_IDENTIFIER_FIXUP_1525.x = _RESERVED_IDENTIFIER_FIXUP_1189.x;
    _RESERVED_IDENTIFIER_FIXUP_1525.y = _RESERVED_IDENTIFIER_FIXUP_1189.y;
    _RESERVED_IDENTIFIER_FIXUP_1525.z = _RESERVED_IDENTIFIER_FIXUP_1189.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1200 = _RESERVED_IDENTIFIER_FIXUP_1525.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1531 = _RESERVED_IDENTIFIER_FIXUP_1525;
    _RESERVED_IDENTIFIER_FIXUP_1531.x = _RESERVED_IDENTIFIER_FIXUP_1200.x;
    _RESERVED_IDENTIFIER_FIXUP_1531.y = _RESERVED_IDENTIFIER_FIXUP_1200.y;
    _RESERVED_IDENTIFIER_FIXUP_1531.z = _RESERVED_IDENTIFIER_FIXUP_1200.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1211 = _RESERVED_IDENTIFIER_FIXUP_1531.xyz + _RESERVED_IDENTIFIER_FIXUP_1531.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1537 = _RESERVED_IDENTIFIER_FIXUP_1531;
    _RESERVED_IDENTIFIER_FIXUP_1537.x = _RESERVED_IDENTIFIER_FIXUP_1211.x;
    _RESERVED_IDENTIFIER_FIXUP_1537.y = _RESERVED_IDENTIFIER_FIXUP_1211.y;
    _RESERVED_IDENTIFIER_FIXUP_1537.z = _RESERVED_IDENTIFIER_FIXUP_1211.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1222 = _RESERVED_IDENTIFIER_FIXUP_1537.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1519.x = _RESERVED_IDENTIFIER_FIXUP_1222.x;
    _RESERVED_IDENTIFIER_FIXUP_1519.y = _RESERVED_IDENTIFIER_FIXUP_1222.y;
    _RESERVED_IDENTIFIER_FIXUP_1519.z = _RESERVED_IDENTIFIER_FIXUP_1222.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1236 = (_RESERVED_IDENTIFIER_FIXUP_1519.xyz * _RESERVED_IDENTIFIER_FIXUP_1574.xxx) + _RESERVED_IDENTIFIER_FIXUP_1537.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1549 = _RESERVED_IDENTIFIER_FIXUP_1537;
    _RESERVED_IDENTIFIER_FIXUP_1549.x = _RESERVED_IDENTIFIER_FIXUP_1236.x;
    _RESERVED_IDENTIFIER_FIXUP_1549.y = _RESERVED_IDENTIFIER_FIXUP_1236.y;
    _RESERVED_IDENTIFIER_FIXUP_1549.z = _RESERVED_IDENTIFIER_FIXUP_1236.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1249 = _RESERVED_IDENTIFIER_FIXUP_1549.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1555 = _RESERVED_IDENTIFIER_FIXUP_1549;
    _RESERVED_IDENTIFIER_FIXUP_1555.x = _RESERVED_IDENTIFIER_FIXUP_1249.x;
    _RESERVED_IDENTIFIER_FIXUP_1555.y = _RESERVED_IDENTIFIER_FIXUP_1249.y;
    _RESERVED_IDENTIFIER_FIXUP_1555.z = _RESERVED_IDENTIFIER_FIXUP_1249.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1555.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_465 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_474;
    if (_RESERVED_IDENTIFIER_FIXUP_465)
    {
        _RESERVED_IDENTIFIER_FIXUP_474 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_474 = _RESERVED_IDENTIFIER_FIXUP_465;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_474)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_511 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1416.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_538 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1286;
    if (_RESERVED_IDENTIFIER_FIXUP_511 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1286 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_511), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_538);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1286 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_538);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1286;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1176);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 param_2 = v4.xy;
    r3 = hdTex3(param_2);
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
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
        vec2 hdB153 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB153.x;
        r1.z = hdB153.y;
        vec2 hdB174 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB174.x;
        r4.y = hdB174.y;
        vec2 hdB182 = vec2(1.0, 0.0) * v5.zx;
        r4.z = hdB182.x;
        r4.w = hdB182.y;
        vec2 param_5 = r4.xy;
        float param_6 = r4.w;
        r4 = hdLod5(param_5, param_6);
        r1.w = r2.x + r4.x;
        vec2 hdB205 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB205.x;
        r2.y = hdB205.y;
        vec2 hdB212 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB212.x;
        r2.w = hdB212.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.w += r2.x;
        vec2 hdB235 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB235.x;
        r2.y = hdB235.y;
        vec2 hdB242 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB242.x;
        r2.w = hdB242.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.w += r2.x;
        vec2 hdB265 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB265.x;
        r2.y = hdB265.y;
        vec2 hdB272 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB272.x;
        r2.w = hdB272.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
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
    vec4 hdB320 = r0;
    vec3 hdB324 = hdB320.xyz * r1.xxx;
    r0.x = hdB324.x;
    r0.y = hdB324.y;
    r0.z = hdB324.z;
    vec4 hdB331 = r0;
    vec3 hdB335 = hdB331.xyz * v0.xyz;
    r0.x = hdB335.x;
    r0.y = hdB335.y;
    r0.z = hdB335.z;
    vec4 hdB342 = r0;
    vec4 hdB344 = r0;
    vec3 hdB346 = hdB342.xyz + hdB344.xyz;
    r0.x = hdB346.x;
    r0.y = hdB346.y;
    r0.z = hdB346.z;
    vec3 hdB357 = r0.www * v1.xyz;
    r1.x = hdB357.x;
    r1.y = hdB357.y;
    r1.z = hdB357.z;
    vec4 hdB369 = r0;
    vec3 hdB371 = (r1.xyz * r2.xxx) + hdB369.xyz;
    r0.x = hdB371.x;
    r0.y = hdB371.y;
    r0.z = hdB371.z;
    vec4 hdB378 = r0;
    vec3 hdB385 = hdB378.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB385.x;
    r0.y = hdB385.y;
    r0.z = hdB385.z;
    vec3 hdB400 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB400.x;
    oC0.y = hdB400.y;
    oC0.z = hdB400.z;
    oC0.w = 1.0;
    bool hdB413 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB421;
    if (hdB413)
    {
        hdB421 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB421 = hdB413;
    }
    if (hdB421)
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
    bool _1516 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1526;
    if (_1516)
    {
        _1526 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1526 = _1516;
    }
    if (_1526)
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
        bool _1551 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1566;
        if (!_1551)
        {
            _1566 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1566 = _1551;
        }
        if (_1566)
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
