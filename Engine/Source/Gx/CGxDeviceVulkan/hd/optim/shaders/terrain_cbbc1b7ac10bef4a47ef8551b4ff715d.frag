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
float _RESERVED_IDENTIFIER_FIXUP_1876;
vec4 _RESERVED_IDENTIFIER_FIXUP_1877;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_683 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_687 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_691 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_695 = hdTex3(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_699 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1529 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1529.x = _RESERVED_IDENTIFIER_FIXUP_699.x;
    _RESERVED_IDENTIFIER_FIXUP_1529.y = _RESERVED_IDENTIFIER_FIXUP_699.y;
    float _RESERVED_IDENTIFIER_FIXUP_705 = _RESERVED_IDENTIFIER_FIXUP_699.z;
    _RESERVED_IDENTIFIER_FIXUP_1529.z = _RESERVED_IDENTIFIER_FIXUP_705;
    vec3 _RESERVED_IDENTIFIER_FIXUP_707 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1876).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_710 = _RESERVED_IDENTIFIER_FIXUP_707 + _RESERVED_IDENTIFIER_FIXUP_707;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1535;
    _RESERVED_IDENTIFIER_FIXUP_1535.x = _RESERVED_IDENTIFIER_FIXUP_710.x;
    _RESERVED_IDENTIFIER_FIXUP_1535.y = _RESERVED_IDENTIFIER_FIXUP_710.y;
    _RESERVED_IDENTIFIER_FIXUP_1535.z = _RESERVED_IDENTIFIER_FIXUP_710.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_718 = _RESERVED_IDENTIFIER_FIXUP_683.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_721 = _RESERVED_IDENTIFIER_FIXUP_718 * _RESERVED_IDENTIFIER_FIXUP_1535.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1541;
    _RESERVED_IDENTIFIER_FIXUP_1541.x = _RESERVED_IDENTIFIER_FIXUP_721.x;
    _RESERVED_IDENTIFIER_FIXUP_1541.y = _RESERVED_IDENTIFIER_FIXUP_721.y;
    _RESERVED_IDENTIFIER_FIXUP_1541.z = _RESERVED_IDENTIFIER_FIXUP_721.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_735 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1529.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_736 = mix(_RESERVED_IDENTIFIER_FIXUP_1541.xyz, _RESERVED_IDENTIFIER_FIXUP_718, _RESERVED_IDENTIFIER_FIXUP_735);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1547 = _RESERVED_IDENTIFIER_FIXUP_683;
    _RESERVED_IDENTIFIER_FIXUP_1547.x = _RESERVED_IDENTIFIER_FIXUP_736.x;
    _RESERVED_IDENTIFIER_FIXUP_1547.y = _RESERVED_IDENTIFIER_FIXUP_736.y;
    _RESERVED_IDENTIFIER_FIXUP_1547.z = _RESERVED_IDENTIFIER_FIXUP_736.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_744 = _RESERVED_IDENTIFIER_FIXUP_687.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_747 = _RESERVED_IDENTIFIER_FIXUP_744 * _RESERVED_IDENTIFIER_FIXUP_1535.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1553;
    _RESERVED_IDENTIFIER_FIXUP_1553.x = _RESERVED_IDENTIFIER_FIXUP_747.x;
    _RESERVED_IDENTIFIER_FIXUP_1553.y = _RESERVED_IDENTIFIER_FIXUP_747.y;
    _RESERVED_IDENTIFIER_FIXUP_1553.z = _RESERVED_IDENTIFIER_FIXUP_747.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_761 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1529.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_762 = mix(_RESERVED_IDENTIFIER_FIXUP_1553.xyz, _RESERVED_IDENTIFIER_FIXUP_744, _RESERVED_IDENTIFIER_FIXUP_761);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1559 = _RESERVED_IDENTIFIER_FIXUP_687;
    _RESERVED_IDENTIFIER_FIXUP_1559.x = _RESERVED_IDENTIFIER_FIXUP_762.x;
    _RESERVED_IDENTIFIER_FIXUP_1559.y = _RESERVED_IDENTIFIER_FIXUP_762.y;
    _RESERVED_IDENTIFIER_FIXUP_1559.z = _RESERVED_IDENTIFIER_FIXUP_762.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_770 = _RESERVED_IDENTIFIER_FIXUP_691.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_773 = _RESERVED_IDENTIFIER_FIXUP_770 * _RESERVED_IDENTIFIER_FIXUP_1535.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1886 = vec4(_RESERVED_IDENTIFIER_FIXUP_773.xy, _RESERVED_IDENTIFIER_FIXUP_705, _RESERVED_IDENTIFIER_FIXUP_773.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_788 = mix(_RESERVED_IDENTIFIER_FIXUP_1886.xyw, _RESERVED_IDENTIFIER_FIXUP_770, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1886.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1571 = _RESERVED_IDENTIFIER_FIXUP_691;
    _RESERVED_IDENTIFIER_FIXUP_1571.x = _RESERVED_IDENTIFIER_FIXUP_788.x;
    _RESERVED_IDENTIFIER_FIXUP_1571.y = _RESERVED_IDENTIFIER_FIXUP_788.y;
    _RESERVED_IDENTIFIER_FIXUP_1571.z = _RESERVED_IDENTIFIER_FIXUP_788.z;
    float _RESERVED_IDENTIFIER_FIXUP_798 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_695.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1577 = _RESERVED_IDENTIFIER_FIXUP_695;
    _RESERVED_IDENTIFIER_FIXUP_1577.z = _RESERVED_IDENTIFIER_FIXUP_798;
    _RESERVED_IDENTIFIER_FIXUP_1577.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_798;
    vec4 _RESERVED_IDENTIFIER_FIXUP_820 = (_RESERVED_IDENTIFIER_FIXUP_1571 * _RESERVED_IDENTIFIER_FIXUP_1577.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1547 * _RESERVED_IDENTIFIER_FIXUP_1577.zzzz) + (_RESERVED_IDENTIFIER_FIXUP_1577.xxxx * _RESERVED_IDENTIFIER_FIXUP_1559));
    float _RESERVED_IDENTIFIER_FIXUP_827 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1682 = _RESERVED_IDENTIFIER_FIXUP_820;
    _RESERVED_IDENTIFIER_FIXUP_1682.x = _RESERVED_IDENTIFIER_FIXUP_820.x;
    _RESERVED_IDENTIFIER_FIXUP_1682.y = _RESERVED_IDENTIFIER_FIXUP_820.y;
    _RESERVED_IDENTIFIER_FIXUP_1682.z = _RESERVED_IDENTIFIER_FIXUP_820.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1059 = _RESERVED_IDENTIFIER_FIXUP_1682.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1688 = _RESERVED_IDENTIFIER_FIXUP_1682;
    _RESERVED_IDENTIFIER_FIXUP_1688.x = _RESERVED_IDENTIFIER_FIXUP_1059.x;
    _RESERVED_IDENTIFIER_FIXUP_1688.y = _RESERVED_IDENTIFIER_FIXUP_1059.y;
    _RESERVED_IDENTIFIER_FIXUP_1688.z = _RESERVED_IDENTIFIER_FIXUP_1059.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1111 = OptTex0( texcoord0.xyz);
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1115 = hdTex1(param_3);
    vec2 param_4 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1119 = hdTex2(param_4);
    vec2 param_5 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1123 = hdTex3(param_5);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1138 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1708;
    _RESERVED_IDENTIFIER_FIXUP_1708.x = _RESERVED_IDENTIFIER_FIXUP_1138.x;
    _RESERVED_IDENTIFIER_FIXUP_1708.y = _RESERVED_IDENTIFIER_FIXUP_1138.y;
    _RESERVED_IDENTIFIER_FIXUP_1708.z = _RESERVED_IDENTIFIER_FIXUP_1138.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1146 = _RESERVED_IDENTIFIER_FIXUP_1111.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1149 = _RESERVED_IDENTIFIER_FIXUP_1146 * _RESERVED_IDENTIFIER_FIXUP_1708.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1714;
    _RESERVED_IDENTIFIER_FIXUP_1714.x = _RESERVED_IDENTIFIER_FIXUP_1149.x;
    _RESERVED_IDENTIFIER_FIXUP_1714.y = _RESERVED_IDENTIFIER_FIXUP_1149.y;
    _RESERVED_IDENTIFIER_FIXUP_1714.z = _RESERVED_IDENTIFIER_FIXUP_1149.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1164 = mix(_RESERVED_IDENTIFIER_FIXUP_1714.xyz, _RESERVED_IDENTIFIER_FIXUP_1146, _RESERVED_IDENTIFIER_FIXUP_735);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1720 = _RESERVED_IDENTIFIER_FIXUP_1111;
    _RESERVED_IDENTIFIER_FIXUP_1720.x = _RESERVED_IDENTIFIER_FIXUP_1164.x;
    _RESERVED_IDENTIFIER_FIXUP_1720.y = _RESERVED_IDENTIFIER_FIXUP_1164.y;
    _RESERVED_IDENTIFIER_FIXUP_1720.z = _RESERVED_IDENTIFIER_FIXUP_1164.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1172 = _RESERVED_IDENTIFIER_FIXUP_1115.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1175 = _RESERVED_IDENTIFIER_FIXUP_1172 * _RESERVED_IDENTIFIER_FIXUP_1708.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1726;
    _RESERVED_IDENTIFIER_FIXUP_1726.x = _RESERVED_IDENTIFIER_FIXUP_1175.x;
    _RESERVED_IDENTIFIER_FIXUP_1726.y = _RESERVED_IDENTIFIER_FIXUP_1175.y;
    _RESERVED_IDENTIFIER_FIXUP_1726.z = _RESERVED_IDENTIFIER_FIXUP_1175.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1190 = mix(_RESERVED_IDENTIFIER_FIXUP_1726.xyz, _RESERVED_IDENTIFIER_FIXUP_1172, _RESERVED_IDENTIFIER_FIXUP_761);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1732 = _RESERVED_IDENTIFIER_FIXUP_1115;
    _RESERVED_IDENTIFIER_FIXUP_1732.x = _RESERVED_IDENTIFIER_FIXUP_1190.x;
    _RESERVED_IDENTIFIER_FIXUP_1732.y = _RESERVED_IDENTIFIER_FIXUP_1190.y;
    _RESERVED_IDENTIFIER_FIXUP_1732.z = _RESERVED_IDENTIFIER_FIXUP_1190.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1198 = _RESERVED_IDENTIFIER_FIXUP_1119.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1201 = _RESERVED_IDENTIFIER_FIXUP_1198 * _RESERVED_IDENTIFIER_FIXUP_1708.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1890 = vec4(_RESERVED_IDENTIFIER_FIXUP_1201.xy, _RESERVED_IDENTIFIER_FIXUP_705, _RESERVED_IDENTIFIER_FIXUP_1201.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1216 = mix(_RESERVED_IDENTIFIER_FIXUP_1890.xyw, _RESERVED_IDENTIFIER_FIXUP_1198, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1890.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1744 = _RESERVED_IDENTIFIER_FIXUP_1119;
    _RESERVED_IDENTIFIER_FIXUP_1744.x = _RESERVED_IDENTIFIER_FIXUP_1216.x;
    _RESERVED_IDENTIFIER_FIXUP_1744.y = _RESERVED_IDENTIFIER_FIXUP_1216.y;
    _RESERVED_IDENTIFIER_FIXUP_1744.z = _RESERVED_IDENTIFIER_FIXUP_1216.z;
    float _RESERVED_IDENTIFIER_FIXUP_1226 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1123.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1750 = _RESERVED_IDENTIFIER_FIXUP_1123;
    _RESERVED_IDENTIFIER_FIXUP_1750.z = _RESERVED_IDENTIFIER_FIXUP_1226;
    _RESERVED_IDENTIFIER_FIXUP_1750.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1226;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1236 = _RESERVED_IDENTIFIER_FIXUP_1750.xxxx * _RESERVED_IDENTIFIER_FIXUP_1732;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1248 = (_RESERVED_IDENTIFIER_FIXUP_1744 * _RESERVED_IDENTIFIER_FIXUP_1750.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1720 * _RESERVED_IDENTIFIER_FIXUP_1750.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1236);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1757 = _RESERVED_IDENTIFIER_FIXUP_1236;
    _RESERVED_IDENTIFIER_FIXUP_1757.x = _RESERVED_IDENTIFIER_FIXUP_827;
    float _RESERVED_IDENTIFIER_FIXUP_1261 = clamp((_RESERVED_IDENTIFIER_FIXUP_827 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1757.x = _RESERVED_IDENTIFIER_FIXUP_1261;
    float _RESERVED_IDENTIFIER_FIXUP_1267 = ((-_RESERVED_IDENTIFIER_FIXUP_1261) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1757.y = _RESERVED_IDENTIFIER_FIXUP_1267;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1882;
    if (_RESERVED_IDENTIFIER_FIXUP_1267 != (-_RESERVED_IDENTIFIER_FIXUP_1267))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1279 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1289 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_1289.x;
        _RESERVED_IDENTIFIER_FIXUP_1757.y = _RESERVED_IDENTIFIER_FIXUP_1291;
        _RESERVED_IDENTIFIER_FIXUP_1757.z = _RESERVED_IDENTIFIER_FIXUP_1289.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1299 = _RESERVED_IDENTIFIER_FIXUP_1757.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1775;
        _RESERVED_IDENTIFIER_FIXUP_1775.x = _RESERVED_IDENTIFIER_FIXUP_1299.x;
        _RESERVED_IDENTIFIER_FIXUP_1775.y = _RESERVED_IDENTIFIER_FIXUP_1299.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1306 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1310 = _RESERVED_IDENTIFIER_FIXUP_1306.y;
        _RESERVED_IDENTIFIER_FIXUP_1775.w = _RESERVED_IDENTIFIER_FIXUP_1310;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1279.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1279.w;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1775.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1310;
        float _RESERVED_IDENTIFIER_FIXUP_1321 = hdLod5(param_6, param_7).x + hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1891 = vec4(_RESERVED_IDENTIFIER_FIXUP_1261, _RESERVED_IDENTIFIER_FIXUP_1291, _RESERVED_IDENTIFIER_FIXUP_1289.y, _RESERVED_IDENTIFIER_FIXUP_1321);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1328 = _RESERVED_IDENTIFIER_FIXUP_1891.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1788;
        _RESERVED_IDENTIFIER_FIXUP_1788.x = _RESERVED_IDENTIFIER_FIXUP_1328.x;
        _RESERVED_IDENTIFIER_FIXUP_1788.y = _RESERVED_IDENTIFIER_FIXUP_1328.y;
        _RESERVED_IDENTIFIER_FIXUP_1788.w = _RESERVED_IDENTIFIER_FIXUP_1310;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1788.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1310;
        float _RESERVED_IDENTIFIER_FIXUP_1350 = _RESERVED_IDENTIFIER_FIXUP_1321 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1891.w = _RESERVED_IDENTIFIER_FIXUP_1350;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1357 = _RESERVED_IDENTIFIER_FIXUP_1891.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1801;
        _RESERVED_IDENTIFIER_FIXUP_1801.x = _RESERVED_IDENTIFIER_FIXUP_1357.x;
        _RESERVED_IDENTIFIER_FIXUP_1801.y = _RESERVED_IDENTIFIER_FIXUP_1357.y;
        _RESERVED_IDENTIFIER_FIXUP_1801.w = _RESERVED_IDENTIFIER_FIXUP_1310;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1801.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1310;
        float _RESERVED_IDENTIFIER_FIXUP_1379 = _RESERVED_IDENTIFIER_FIXUP_1350 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_1891.w = _RESERVED_IDENTIFIER_FIXUP_1379;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1386 = _RESERVED_IDENTIFIER_FIXUP_1891.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1814;
        _RESERVED_IDENTIFIER_FIXUP_1814.x = _RESERVED_IDENTIFIER_FIXUP_1386.x;
        _RESERVED_IDENTIFIER_FIXUP_1814.y = _RESERVED_IDENTIFIER_FIXUP_1386.y;
        _RESERVED_IDENTIFIER_FIXUP_1814.w = _RESERVED_IDENTIFIER_FIXUP_1310;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1814.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1310;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1403 = hdLod5(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_1403.x = min((_RESERVED_IDENTIFIER_FIXUP_1261 * (((_RESERVED_IDENTIFIER_FIXUP_1379 + _RESERVED_IDENTIFIER_FIXUP_1403.x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1123.w);
        _RESERVED_IDENTIFIER_FIXUP_1882 = _RESERVED_IDENTIFIER_FIXUP_1403;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1768 = _RESERVED_IDENTIFIER_FIXUP_1744;
        _RESERVED_IDENTIFIER_FIXUP_1768.x = _RESERVED_IDENTIFIER_FIXUP_1123.w;
        _RESERVED_IDENTIFIER_FIXUP_1882 = _RESERVED_IDENTIFIER_FIXUP_1768;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1436 = (_RESERVED_IDENTIFIER_FIXUP_1882.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1892 = vec4(_RESERVED_IDENTIFIER_FIXUP_1436, _RESERVED_IDENTIFIER_FIXUP_1248.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1460 = _RESERVED_IDENTIFIER_FIXUP_1882.xxx * _RESERVED_IDENTIFIER_FIXUP_1892.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1851 = _RESERVED_IDENTIFIER_FIXUP_1892;
    _RESERVED_IDENTIFIER_FIXUP_1851.y = _RESERVED_IDENTIFIER_FIXUP_1460.x;
    _RESERVED_IDENTIFIER_FIXUP_1851.z = _RESERVED_IDENTIFIER_FIXUP_1460.y;
    _RESERVED_IDENTIFIER_FIXUP_1851.w = _RESERVED_IDENTIFIER_FIXUP_1460.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1474 = (_RESERVED_IDENTIFIER_FIXUP_1248.xyz * _RESERVED_IDENTIFIER_FIXUP_1851.xxx) + _RESERVED_IDENTIFIER_FIXUP_1851.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1857 = _RESERVED_IDENTIFIER_FIXUP_1248;
    _RESERVED_IDENTIFIER_FIXUP_1857.x = _RESERVED_IDENTIFIER_FIXUP_1474.x;
    _RESERVED_IDENTIFIER_FIXUP_1857.y = _RESERVED_IDENTIFIER_FIXUP_1474.y;
    _RESERVED_IDENTIFIER_FIXUP_1857.z = _RESERVED_IDENTIFIER_FIXUP_1474.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1487 = _RESERVED_IDENTIFIER_FIXUP_1857.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1863 = _RESERVED_IDENTIFIER_FIXUP_1857;
    _RESERVED_IDENTIFIER_FIXUP_1863.x = _RESERVED_IDENTIFIER_FIXUP_1487.x;
    _RESERVED_IDENTIFIER_FIXUP_1863.y = _RESERVED_IDENTIFIER_FIXUP_1487.y;
    _RESERVED_IDENTIFIER_FIXUP_1863.z = _RESERVED_IDENTIFIER_FIXUP_1487.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1863.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_546 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_555;
    if (_RESERVED_IDENTIFIER_FIXUP_546)
    {
        _RESERVED_IDENTIFIER_FIXUP_555 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_555 = _RESERVED_IDENTIFIER_FIXUP_546;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_555)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_592 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1688.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_618 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1522;
    if (_RESERVED_IDENTIFIER_FIXUP_592 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1522 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_592), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_618);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1522 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_618);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1522;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1436);
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
    vec3 hdB87 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB87.x;
    r4.y = hdB87.y;
    r4.z = hdB87.z;
    vec3 hdB102 = v0.xyz + v0.xyz;
    r5.x = hdB102.x;
    r5.y = hdB102.y;
    r5.z = hdB102.z;
    vec3 hdB113 = r0.xyz * r5.xyz;
    r6.x = hdB113.x;
    r6.y = hdB113.y;
    r6.z = hdB113.z;
    vec4 hdB122 = r0;
    vec3 hdB131 = mix(r6.xyz, hdB122.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB131.x;
    r0.y = hdB131.y;
    r0.z = hdB131.z;
    vec3 hdB142 = r1.xyz * r5.xyz;
    r6.x = hdB142.x;
    r6.y = hdB142.y;
    r6.z = hdB142.z;
    vec4 hdB151 = r1;
    vec3 hdB157 = mix(r6.xyz, hdB151.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB157.x;
    r1.y = hdB157.y;
    r1.z = hdB157.z;
    vec3 hdB168 = r2.xyz * r5.xyz;
    r4.x = hdB168.x;
    r4.y = hdB168.y;
    r4.w = hdB168.z;
    vec4 hdB178 = r2;
    vec3 hdB184 = mix(r4.xyw, hdB178.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB184.x;
    r2.y = hdB184.y;
    r2.z = hdB184.z;
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 = r3.xxxx * r1;
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
        vec2 hdB267 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB267.x;
        r1.z = hdB267.y;
        vec2 hdB278 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB278.x;
        r4.y = hdB278.y;
        vec2 hdB286 = vec2(1.0, 0.0) * v5.zx;
        r4.z = hdB286.x;
        r4.w = hdB286.y;
        vec2 param_5 = r4.xy;
        float param_6 = r4.w;
        r4 = hdLod5(param_5, param_6);
        r1.w = r2.x + r4.x;
        vec2 hdB309 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB309.x;
        r2.y = hdB309.y;
        vec2 hdB316 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB316.x;
        r2.w = hdB316.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.w += r2.x;
        vec2 hdB339 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB339.x;
        r2.y = hdB339.y;
        vec2 hdB346 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB346.x;
        r2.w = hdB346.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.w += r2.x;
        vec2 hdB369 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB369.x;
        r2.y = hdB369.y;
        vec2 hdB376 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB376.x;
        r2.w = hdB376.y;
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
    vec3 hdB428 = r0.www * v1.xyz;
    r1.y = hdB428.x;
    r1.z = hdB428.y;
    r1.w = hdB428.z;
    vec4 hdB437 = r1;
    vec3 hdB439 = r2.xxx * hdB437.yzw;
    r1.y = hdB439.x;
    r1.z = hdB439.y;
    r1.w = hdB439.z;
    vec4 hdB446 = r0;
    vec3 hdB453 = (hdB446.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB453.x;
    r0.y = hdB453.y;
    r0.z = hdB453.z;
    vec4 hdB460 = r0;
    vec3 hdB467 = hdB460.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB467.x;
    r0.y = hdB467.y;
    r0.z = hdB467.z;
    vec3 hdB482 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB482.x;
    oC0.y = hdB482.y;
    oC0.z = hdB482.z;
    oC0.w = 1.0;
    bool hdB494 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB502;
    if (hdB494)
    {
        hdB502 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB502 = hdB494;
    }
    if (hdB502)
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
    bool _1563 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1573;
    if (_1563)
    {
        _1573 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1573 = _1563;
    }
    if (_1573)
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
        bool _1598 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1613;
        if (!_1598)
        {
            _1613 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1613 = _1598;
        }
        if (_1613)
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
