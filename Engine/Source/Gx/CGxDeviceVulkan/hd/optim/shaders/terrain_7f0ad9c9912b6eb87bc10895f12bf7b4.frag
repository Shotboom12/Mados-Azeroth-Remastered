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
float _RESERVED_IDENTIFIER_FIXUP_1839;
vec4 _RESERVED_IDENTIFIER_FIXUP_1840;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_670 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_674 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_678 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_682 = hdTex3(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_686 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1490;
    _RESERVED_IDENTIFIER_FIXUP_1490.x = _RESERVED_IDENTIFIER_FIXUP_686.x;
    _RESERVED_IDENTIFIER_FIXUP_1490.y = _RESERVED_IDENTIFIER_FIXUP_686.y;
    float _RESERVED_IDENTIFIER_FIXUP_692 = _RESERVED_IDENTIFIER_FIXUP_686.z;
    _RESERVED_IDENTIFIER_FIXUP_1490.z = _RESERVED_IDENTIFIER_FIXUP_692;
    vec3 _RESERVED_IDENTIFIER_FIXUP_694 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1839).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_697 = _RESERVED_IDENTIFIER_FIXUP_694 + _RESERVED_IDENTIFIER_FIXUP_694;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1496 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1496.x = _RESERVED_IDENTIFIER_FIXUP_697.x;
    _RESERVED_IDENTIFIER_FIXUP_1496.y = _RESERVED_IDENTIFIER_FIXUP_697.y;
    _RESERVED_IDENTIFIER_FIXUP_1496.z = _RESERVED_IDENTIFIER_FIXUP_697.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_705 = _RESERVED_IDENTIFIER_FIXUP_670.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_708 = _RESERVED_IDENTIFIER_FIXUP_705 * _RESERVED_IDENTIFIER_FIXUP_1496.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1502 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1502.x = _RESERVED_IDENTIFIER_FIXUP_708.x;
    _RESERVED_IDENTIFIER_FIXUP_1502.y = _RESERVED_IDENTIFIER_FIXUP_708.y;
    _RESERVED_IDENTIFIER_FIXUP_1502.z = _RESERVED_IDENTIFIER_FIXUP_708.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_722 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1490.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_723 = mix(_RESERVED_IDENTIFIER_FIXUP_1502.xyz, _RESERVED_IDENTIFIER_FIXUP_705, _RESERVED_IDENTIFIER_FIXUP_722);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1508 = _RESERVED_IDENTIFIER_FIXUP_670;
    _RESERVED_IDENTIFIER_FIXUP_1508.x = _RESERVED_IDENTIFIER_FIXUP_723.x;
    _RESERVED_IDENTIFIER_FIXUP_1508.y = _RESERVED_IDENTIFIER_FIXUP_723.y;
    _RESERVED_IDENTIFIER_FIXUP_1508.z = _RESERVED_IDENTIFIER_FIXUP_723.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_731 = _RESERVED_IDENTIFIER_FIXUP_674.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_734 = _RESERVED_IDENTIFIER_FIXUP_731 * _RESERVED_IDENTIFIER_FIXUP_1496.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1502.x = _RESERVED_IDENTIFIER_FIXUP_734.x;
    _RESERVED_IDENTIFIER_FIXUP_1502.y = _RESERVED_IDENTIFIER_FIXUP_734.y;
    _RESERVED_IDENTIFIER_FIXUP_1502.z = _RESERVED_IDENTIFIER_FIXUP_734.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_748 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1490.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_749 = mix(_RESERVED_IDENTIFIER_FIXUP_1502.xyz, _RESERVED_IDENTIFIER_FIXUP_731, _RESERVED_IDENTIFIER_FIXUP_748);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1520 = _RESERVED_IDENTIFIER_FIXUP_674;
    _RESERVED_IDENTIFIER_FIXUP_1520.x = _RESERVED_IDENTIFIER_FIXUP_749.x;
    _RESERVED_IDENTIFIER_FIXUP_1520.y = _RESERVED_IDENTIFIER_FIXUP_749.y;
    _RESERVED_IDENTIFIER_FIXUP_1520.z = _RESERVED_IDENTIFIER_FIXUP_749.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_757 = _RESERVED_IDENTIFIER_FIXUP_678.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_760 = _RESERVED_IDENTIFIER_FIXUP_757 * _RESERVED_IDENTIFIER_FIXUP_1496.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1849 = vec4(_RESERVED_IDENTIFIER_FIXUP_760.xy, _RESERVED_IDENTIFIER_FIXUP_692, _RESERVED_IDENTIFIER_FIXUP_760.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_775 = mix(_RESERVED_IDENTIFIER_FIXUP_1849.xyw, _RESERVED_IDENTIFIER_FIXUP_757, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1849.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1532 = _RESERVED_IDENTIFIER_FIXUP_678;
    _RESERVED_IDENTIFIER_FIXUP_1532.x = _RESERVED_IDENTIFIER_FIXUP_775.x;
    _RESERVED_IDENTIFIER_FIXUP_1532.y = _RESERVED_IDENTIFIER_FIXUP_775.y;
    _RESERVED_IDENTIFIER_FIXUP_1532.z = _RESERVED_IDENTIFIER_FIXUP_775.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_791 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1508, _RESERVED_IDENTIFIER_FIXUP_1520, _RESERVED_IDENTIFIER_FIXUP_682.xxxx), _RESERVED_IDENTIFIER_FIXUP_1532, _RESERVED_IDENTIFIER_FIXUP_682.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_798 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1644 = _RESERVED_IDENTIFIER_FIXUP_791;
    _RESERVED_IDENTIFIER_FIXUP_1644.x = _RESERVED_IDENTIFIER_FIXUP_791.x;
    _RESERVED_IDENTIFIER_FIXUP_1644.y = _RESERVED_IDENTIFIER_FIXUP_791.y;
    _RESERVED_IDENTIFIER_FIXUP_1644.z = _RESERVED_IDENTIFIER_FIXUP_791.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1032 = _RESERVED_IDENTIFIER_FIXUP_1644.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1650 = _RESERVED_IDENTIFIER_FIXUP_1644;
    _RESERVED_IDENTIFIER_FIXUP_1650.x = _RESERVED_IDENTIFIER_FIXUP_1032.x;
    _RESERVED_IDENTIFIER_FIXUP_1650.y = _RESERVED_IDENTIFIER_FIXUP_1032.y;
    _RESERVED_IDENTIFIER_FIXUP_1650.z = _RESERVED_IDENTIFIER_FIXUP_1032.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1085 = OptTex0( texcoord0.xyz);
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1089 = hdTex1(param_3);
    vec2 param_4 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1093 = hdTex2(param_4);
    vec2 param_5 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1097 = hdTex3(param_5);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1112 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1670 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1670.x = _RESERVED_IDENTIFIER_FIXUP_1112.x;
    _RESERVED_IDENTIFIER_FIXUP_1670.y = _RESERVED_IDENTIFIER_FIXUP_1112.y;
    _RESERVED_IDENTIFIER_FIXUP_1670.z = _RESERVED_IDENTIFIER_FIXUP_1112.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_1085.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1123 = _RESERVED_IDENTIFIER_FIXUP_1120 * _RESERVED_IDENTIFIER_FIXUP_1670.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1676 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1676.x = _RESERVED_IDENTIFIER_FIXUP_1123.x;
    _RESERVED_IDENTIFIER_FIXUP_1676.y = _RESERVED_IDENTIFIER_FIXUP_1123.y;
    _RESERVED_IDENTIFIER_FIXUP_1676.z = _RESERVED_IDENTIFIER_FIXUP_1123.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1138 = mix(_RESERVED_IDENTIFIER_FIXUP_1676.xyz, _RESERVED_IDENTIFIER_FIXUP_1120, _RESERVED_IDENTIFIER_FIXUP_722);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1682 = _RESERVED_IDENTIFIER_FIXUP_1085;
    _RESERVED_IDENTIFIER_FIXUP_1682.x = _RESERVED_IDENTIFIER_FIXUP_1138.x;
    _RESERVED_IDENTIFIER_FIXUP_1682.y = _RESERVED_IDENTIFIER_FIXUP_1138.y;
    _RESERVED_IDENTIFIER_FIXUP_1682.z = _RESERVED_IDENTIFIER_FIXUP_1138.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1146 = _RESERVED_IDENTIFIER_FIXUP_1089.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1149 = _RESERVED_IDENTIFIER_FIXUP_1146 * _RESERVED_IDENTIFIER_FIXUP_1670.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1676.x = _RESERVED_IDENTIFIER_FIXUP_1149.x;
    _RESERVED_IDENTIFIER_FIXUP_1676.y = _RESERVED_IDENTIFIER_FIXUP_1149.y;
    _RESERVED_IDENTIFIER_FIXUP_1676.z = _RESERVED_IDENTIFIER_FIXUP_1149.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1164 = mix(_RESERVED_IDENTIFIER_FIXUP_1676.xyz, _RESERVED_IDENTIFIER_FIXUP_1146, _RESERVED_IDENTIFIER_FIXUP_748);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1694 = _RESERVED_IDENTIFIER_FIXUP_1089;
    _RESERVED_IDENTIFIER_FIXUP_1694.x = _RESERVED_IDENTIFIER_FIXUP_1164.x;
    _RESERVED_IDENTIFIER_FIXUP_1694.y = _RESERVED_IDENTIFIER_FIXUP_1164.y;
    _RESERVED_IDENTIFIER_FIXUP_1694.z = _RESERVED_IDENTIFIER_FIXUP_1164.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1172 = _RESERVED_IDENTIFIER_FIXUP_1093.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1175 = _RESERVED_IDENTIFIER_FIXUP_1172 * _RESERVED_IDENTIFIER_FIXUP_1670.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1852 = vec4(_RESERVED_IDENTIFIER_FIXUP_1175.xy, _RESERVED_IDENTIFIER_FIXUP_692, _RESERVED_IDENTIFIER_FIXUP_1175.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1190 = mix(_RESERVED_IDENTIFIER_FIXUP_1852.xyw, _RESERVED_IDENTIFIER_FIXUP_1172, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1852.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1706 = _RESERVED_IDENTIFIER_FIXUP_1093;
    _RESERVED_IDENTIFIER_FIXUP_1706.x = _RESERVED_IDENTIFIER_FIXUP_1190.x;
    _RESERVED_IDENTIFIER_FIXUP_1706.y = _RESERVED_IDENTIFIER_FIXUP_1190.y;
    _RESERVED_IDENTIFIER_FIXUP_1706.z = _RESERVED_IDENTIFIER_FIXUP_1190.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1206 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1682, _RESERVED_IDENTIFIER_FIXUP_1694, _RESERVED_IDENTIFIER_FIXUP_1097.xxxx), _RESERVED_IDENTIFIER_FIXUP_1706, _RESERVED_IDENTIFIER_FIXUP_1097.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1714 = _RESERVED_IDENTIFIER_FIXUP_1694;
    _RESERVED_IDENTIFIER_FIXUP_1714.x = _RESERVED_IDENTIFIER_FIXUP_798;
    float _RESERVED_IDENTIFIER_FIXUP_1219 = clamp((_RESERVED_IDENTIFIER_FIXUP_798 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1714.x = _RESERVED_IDENTIFIER_FIXUP_1219;
    float _RESERVED_IDENTIFIER_FIXUP_1225 = ((-_RESERVED_IDENTIFIER_FIXUP_1219) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1714.y = _RESERVED_IDENTIFIER_FIXUP_1225;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1845;
    if (_RESERVED_IDENTIFIER_FIXUP_1225 != (-_RESERVED_IDENTIFIER_FIXUP_1225))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1237 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1714.y = _RESERVED_IDENTIFIER_FIXUP_1237.x;
        _RESERVED_IDENTIFIER_FIXUP_1714.z = _RESERVED_IDENTIFIER_FIXUP_1237.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1247 = _RESERVED_IDENTIFIER_FIXUP_1714.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1731;
        _RESERVED_IDENTIFIER_FIXUP_1731.x = _RESERVED_IDENTIFIER_FIXUP_1247.x;
        _RESERVED_IDENTIFIER_FIXUP_1731.y = _RESERVED_IDENTIFIER_FIXUP_1247.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1257 = _RESERVED_IDENTIFIER_FIXUP_1714.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1735;
        _RESERVED_IDENTIFIER_FIXUP_1735.x = _RESERVED_IDENTIFIER_FIXUP_1257.x;
        _RESERVED_IDENTIFIER_FIXUP_1735.y = _RESERVED_IDENTIFIER_FIXUP_1257.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1267 = _RESERVED_IDENTIFIER_FIXUP_1714.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1739;
        _RESERVED_IDENTIFIER_FIXUP_1739.x = _RESERVED_IDENTIFIER_FIXUP_1267.x;
        _RESERVED_IDENTIFIER_FIXUP_1739.y = _RESERVED_IDENTIFIER_FIXUP_1267.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1277 = _RESERVED_IDENTIFIER_FIXUP_1714.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1743;
        _RESERVED_IDENTIFIER_FIXUP_1743.x = _RESERVED_IDENTIFIER_FIXUP_1277.x;
        _RESERVED_IDENTIFIER_FIXUP_1743.y = _RESERVED_IDENTIFIER_FIXUP_1277.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1285 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1285.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1285.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1291 = hdLod5(param_6, param_7);
        _RESERVED_IDENTIFIER_FIXUP_1731.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1735.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1739.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1743.w = 0.0;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1731.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1291.y = hdLod5(param_8, param_9).x;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1735.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1291.z = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1739.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1291.w = hdLod5(param_12, param_13).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1348 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1291 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1743.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1348.x = min((_RESERVED_IDENTIFIER_FIXUP_1219 * (((float((hdLod5(param_14, param_15).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1348, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1097.w);
        _RESERVED_IDENTIFIER_FIXUP_1845 = _RESERVED_IDENTIFIER_FIXUP_1348;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1725 = _RESERVED_IDENTIFIER_FIXUP_1706;
        _RESERVED_IDENTIFIER_FIXUP_1725.x = _RESERVED_IDENTIFIER_FIXUP_1097.w;
        _RESERVED_IDENTIFIER_FIXUP_1845 = _RESERVED_IDENTIFIER_FIXUP_1725;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1396 = (_RESERVED_IDENTIFIER_FIXUP_1845.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1853 = vec4(_RESERVED_IDENTIFIER_FIXUP_1396, _RESERVED_IDENTIFIER_FIXUP_1206.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1420 = _RESERVED_IDENTIFIER_FIXUP_1845.xxx * _RESERVED_IDENTIFIER_FIXUP_1853.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1814 = _RESERVED_IDENTIFIER_FIXUP_1853;
    _RESERVED_IDENTIFIER_FIXUP_1814.y = _RESERVED_IDENTIFIER_FIXUP_1420.x;
    _RESERVED_IDENTIFIER_FIXUP_1814.z = _RESERVED_IDENTIFIER_FIXUP_1420.y;
    _RESERVED_IDENTIFIER_FIXUP_1814.w = _RESERVED_IDENTIFIER_FIXUP_1420.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1434 = (_RESERVED_IDENTIFIER_FIXUP_1206.xyz * _RESERVED_IDENTIFIER_FIXUP_1814.xxx) + _RESERVED_IDENTIFIER_FIXUP_1814.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1820 = _RESERVED_IDENTIFIER_FIXUP_1206;
    _RESERVED_IDENTIFIER_FIXUP_1820.x = _RESERVED_IDENTIFIER_FIXUP_1434.x;
    _RESERVED_IDENTIFIER_FIXUP_1820.y = _RESERVED_IDENTIFIER_FIXUP_1434.y;
    _RESERVED_IDENTIFIER_FIXUP_1820.z = _RESERVED_IDENTIFIER_FIXUP_1434.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1447 = _RESERVED_IDENTIFIER_FIXUP_1820.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1826 = _RESERVED_IDENTIFIER_FIXUP_1820;
    _RESERVED_IDENTIFIER_FIXUP_1826.x = _RESERVED_IDENTIFIER_FIXUP_1447.x;
    _RESERVED_IDENTIFIER_FIXUP_1826.y = _RESERVED_IDENTIFIER_FIXUP_1447.y;
    _RESERVED_IDENTIFIER_FIXUP_1826.z = _RESERVED_IDENTIFIER_FIXUP_1447.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1826.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_533 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_542;
    if (_RESERVED_IDENTIFIER_FIXUP_533)
    {
        _RESERVED_IDENTIFIER_FIXUP_542 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_542 = _RESERVED_IDENTIFIER_FIXUP_533;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_542)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_579 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1650.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_605 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1482;
    if (_RESERVED_IDENTIFIER_FIXUP_579 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1482 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_579), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_605);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1482 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_605);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1482;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1396);
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 param_2 = v4.xy;
    r3 = hdTex3(param_2);
    vec3 hdB88 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB88.x;
    r4.y = hdB88.y;
    r4.z = hdB88.z;
    vec3 hdB103 = v0.xyz + v0.xyz;
    r5.x = hdB103.x;
    r5.y = hdB103.y;
    r5.z = hdB103.z;
    vec3 hdB114 = r0.xyz * r5.xyz;
    r6.x = hdB114.x;
    r6.y = hdB114.y;
    r6.z = hdB114.z;
    vec4 hdB123 = r0;
    vec3 hdB132 = mix(r6.xyz, hdB123.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB132.x;
    r0.y = hdB132.y;
    r0.z = hdB132.z;
    vec3 hdB143 = r1.xyz * r5.xyz;
    r6.x = hdB143.x;
    r6.y = hdB143.y;
    r6.z = hdB143.z;
    vec4 hdB152 = r1;
    vec3 hdB158 = mix(r6.xyz, hdB152.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB158.x;
    r1.y = hdB158.y;
    r1.z = hdB158.z;
    vec3 hdB169 = r2.xyz * r5.xyz;
    r4.x = hdB169.x;
    r4.y = hdB169.y;
    r4.w = hdB169.z;
    vec4 hdB179 = r2;
    vec3 hdB185 = mix(r4.xyw, hdB179.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB185.x;
    r2.y = hdB185.y;
    r2.z = hdB185.z;
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB238 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB238.x;
        r1.z = hdB238.y;
        vec2 hdB249 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB249.x;
        r2.y = hdB249.y;
        vec2 hdB260 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB260.x;
        r4.y = hdB260.y;
        vec2 hdB271 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB271.x;
        r5.y = hdB271.y;
        vec2 hdB282 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB282.x;
        r6.y = hdB282.y;
        r7 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r7.xy;
        float param_4 = r7.w;
        r7 = hdLod5(param_3, param_4);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_5 = r2.xy;
        float param_6 = r2.w;
        r2 = hdLod5(param_5, param_6);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_7 = r4.xy;
        float param_8 = r4.w;
        r4 = hdLod5(param_7, param_8);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_9 = r5.xy;
        float param_10 = r5.w;
        r5 = hdLod5(param_9, param_10);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_11 = r6.xy;
        float param_12 = r6.w;
        r6 = hdLod5(param_11, param_12);
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
    vec3 hdB415 = r0.www * v1.xyz;
    r1.y = hdB415.x;
    r1.z = hdB415.y;
    r1.w = hdB415.z;
    vec4 hdB424 = r1;
    vec3 hdB426 = r2.xxx * hdB424.yzw;
    r1.y = hdB426.x;
    r1.z = hdB426.y;
    r1.w = hdB426.z;
    vec4 hdB433 = r0;
    vec3 hdB440 = (hdB433.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB440.x;
    r0.y = hdB440.y;
    r0.z = hdB440.z;
    vec4 hdB447 = r0;
    vec3 hdB454 = hdB447.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB454.x;
    r0.y = hdB454.y;
    r0.z = hdB454.z;
    vec3 hdB469 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB469.x;
    oC0.y = hdB469.y;
    oC0.z = hdB469.z;
    oC0.w = 1.0;
    bool hdB481 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB489;
    if (hdB481)
    {
        hdB489 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB489 = hdB481;
    }
    if (hdB489)
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
    bool _1469 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1479;
    if (_1469)
    {
        _1479 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1479 = _1469;
    }
    if (_1479)
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
        bool _1504 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1519;
        if (!_1504)
        {
            _1519 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1519 = _1504;
        }
        if (_1519)
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
