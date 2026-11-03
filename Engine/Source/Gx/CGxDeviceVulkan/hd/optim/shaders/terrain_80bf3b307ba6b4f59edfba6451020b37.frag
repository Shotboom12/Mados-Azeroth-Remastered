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
float _RESERVED_IDENTIFIER_FIXUP_1836;
vec4 _RESERVED_IDENTIFIER_FIXUP_1837;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_667 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_671 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_675 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_679 = hdTex3(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_683 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1487;
    _RESERVED_IDENTIFIER_FIXUP_1487.x = _RESERVED_IDENTIFIER_FIXUP_683.x;
    _RESERVED_IDENTIFIER_FIXUP_1487.y = _RESERVED_IDENTIFIER_FIXUP_683.y;
    float _RESERVED_IDENTIFIER_FIXUP_689 = _RESERVED_IDENTIFIER_FIXUP_683.z;
    _RESERVED_IDENTIFIER_FIXUP_1487.z = _RESERVED_IDENTIFIER_FIXUP_689;
    vec3 _RESERVED_IDENTIFIER_FIXUP_691 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1836).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_694 = _RESERVED_IDENTIFIER_FIXUP_691 + _RESERVED_IDENTIFIER_FIXUP_691;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1493 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1493.x = _RESERVED_IDENTIFIER_FIXUP_694.x;
    _RESERVED_IDENTIFIER_FIXUP_1493.y = _RESERVED_IDENTIFIER_FIXUP_694.y;
    _RESERVED_IDENTIFIER_FIXUP_1493.z = _RESERVED_IDENTIFIER_FIXUP_694.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_702 = _RESERVED_IDENTIFIER_FIXUP_667.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_705 = _RESERVED_IDENTIFIER_FIXUP_702 * _RESERVED_IDENTIFIER_FIXUP_1493.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1499 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1499.x = _RESERVED_IDENTIFIER_FIXUP_705.x;
    _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_705.y;
    _RESERVED_IDENTIFIER_FIXUP_1499.z = _RESERVED_IDENTIFIER_FIXUP_705.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_719 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1487.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_720 = mix(_RESERVED_IDENTIFIER_FIXUP_1499.xyz, _RESERVED_IDENTIFIER_FIXUP_702, _RESERVED_IDENTIFIER_FIXUP_719);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1505 = _RESERVED_IDENTIFIER_FIXUP_667;
    _RESERVED_IDENTIFIER_FIXUP_1505.x = _RESERVED_IDENTIFIER_FIXUP_720.x;
    _RESERVED_IDENTIFIER_FIXUP_1505.y = _RESERVED_IDENTIFIER_FIXUP_720.y;
    _RESERVED_IDENTIFIER_FIXUP_1505.z = _RESERVED_IDENTIFIER_FIXUP_720.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_728 = _RESERVED_IDENTIFIER_FIXUP_671.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_731 = _RESERVED_IDENTIFIER_FIXUP_728 * _RESERVED_IDENTIFIER_FIXUP_1493.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1499.x = _RESERVED_IDENTIFIER_FIXUP_731.x;
    _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_731.y;
    _RESERVED_IDENTIFIER_FIXUP_1499.z = _RESERVED_IDENTIFIER_FIXUP_731.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_745 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1487.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_746 = mix(_RESERVED_IDENTIFIER_FIXUP_1499.xyz, _RESERVED_IDENTIFIER_FIXUP_728, _RESERVED_IDENTIFIER_FIXUP_745);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_671;
    _RESERVED_IDENTIFIER_FIXUP_1517.x = _RESERVED_IDENTIFIER_FIXUP_746.x;
    _RESERVED_IDENTIFIER_FIXUP_1517.y = _RESERVED_IDENTIFIER_FIXUP_746.y;
    _RESERVED_IDENTIFIER_FIXUP_1517.z = _RESERVED_IDENTIFIER_FIXUP_746.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_754 = _RESERVED_IDENTIFIER_FIXUP_675.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_757 = _RESERVED_IDENTIFIER_FIXUP_754 * _RESERVED_IDENTIFIER_FIXUP_1493.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1846 = vec4(_RESERVED_IDENTIFIER_FIXUP_757.xy, _RESERVED_IDENTIFIER_FIXUP_689, _RESERVED_IDENTIFIER_FIXUP_757.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = mix(_RESERVED_IDENTIFIER_FIXUP_1846.xyw, _RESERVED_IDENTIFIER_FIXUP_754, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1846.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1529 = _RESERVED_IDENTIFIER_FIXUP_675;
    _RESERVED_IDENTIFIER_FIXUP_1529.x = _RESERVED_IDENTIFIER_FIXUP_772.x;
    _RESERVED_IDENTIFIER_FIXUP_1529.y = _RESERVED_IDENTIFIER_FIXUP_772.y;
    _RESERVED_IDENTIFIER_FIXUP_1529.z = _RESERVED_IDENTIFIER_FIXUP_772.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_788 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1505, _RESERVED_IDENTIFIER_FIXUP_1517, _RESERVED_IDENTIFIER_FIXUP_679.xxxx), _RESERVED_IDENTIFIER_FIXUP_1529, _RESERVED_IDENTIFIER_FIXUP_679.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_795 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1641 = _RESERVED_IDENTIFIER_FIXUP_788;
    _RESERVED_IDENTIFIER_FIXUP_1641.x = _RESERVED_IDENTIFIER_FIXUP_788.x;
    _RESERVED_IDENTIFIER_FIXUP_1641.y = _RESERVED_IDENTIFIER_FIXUP_788.y;
    _RESERVED_IDENTIFIER_FIXUP_1641.z = _RESERVED_IDENTIFIER_FIXUP_788.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1029 = _RESERVED_IDENTIFIER_FIXUP_1641.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1647 = _RESERVED_IDENTIFIER_FIXUP_1641;
    _RESERVED_IDENTIFIER_FIXUP_1647.x = _RESERVED_IDENTIFIER_FIXUP_1029.x;
    _RESERVED_IDENTIFIER_FIXUP_1647.y = _RESERVED_IDENTIFIER_FIXUP_1029.y;
    _RESERVED_IDENTIFIER_FIXUP_1647.z = _RESERVED_IDENTIFIER_FIXUP_1029.z;
    vec2 param_4 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1082 = hdTex0(param_4);
    vec2 param_5 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1086 = hdTex1(param_5);
    vec2 param_6 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1090 = hdTex2(param_6);
    vec2 param_7 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1094 = hdTex3(param_7);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1109 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1667 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1667.x = _RESERVED_IDENTIFIER_FIXUP_1109.x;
    _RESERVED_IDENTIFIER_FIXUP_1667.y = _RESERVED_IDENTIFIER_FIXUP_1109.y;
    _RESERVED_IDENTIFIER_FIXUP_1667.z = _RESERVED_IDENTIFIER_FIXUP_1109.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1117 = _RESERVED_IDENTIFIER_FIXUP_1082.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1120 = _RESERVED_IDENTIFIER_FIXUP_1117 * _RESERVED_IDENTIFIER_FIXUP_1667.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1673 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1673.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
    _RESERVED_IDENTIFIER_FIXUP_1673.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
    _RESERVED_IDENTIFIER_FIXUP_1673.z = _RESERVED_IDENTIFIER_FIXUP_1120.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1135 = mix(_RESERVED_IDENTIFIER_FIXUP_1673.xyz, _RESERVED_IDENTIFIER_FIXUP_1117, _RESERVED_IDENTIFIER_FIXUP_719);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1679 = _RESERVED_IDENTIFIER_FIXUP_1082;
    _RESERVED_IDENTIFIER_FIXUP_1679.x = _RESERVED_IDENTIFIER_FIXUP_1135.x;
    _RESERVED_IDENTIFIER_FIXUP_1679.y = _RESERVED_IDENTIFIER_FIXUP_1135.y;
    _RESERVED_IDENTIFIER_FIXUP_1679.z = _RESERVED_IDENTIFIER_FIXUP_1135.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1143 = _RESERVED_IDENTIFIER_FIXUP_1086.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1146 = _RESERVED_IDENTIFIER_FIXUP_1143 * _RESERVED_IDENTIFIER_FIXUP_1667.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1673.x = _RESERVED_IDENTIFIER_FIXUP_1146.x;
    _RESERVED_IDENTIFIER_FIXUP_1673.y = _RESERVED_IDENTIFIER_FIXUP_1146.y;
    _RESERVED_IDENTIFIER_FIXUP_1673.z = _RESERVED_IDENTIFIER_FIXUP_1146.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1161 = mix(_RESERVED_IDENTIFIER_FIXUP_1673.xyz, _RESERVED_IDENTIFIER_FIXUP_1143, _RESERVED_IDENTIFIER_FIXUP_745);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1691 = _RESERVED_IDENTIFIER_FIXUP_1086;
    _RESERVED_IDENTIFIER_FIXUP_1691.x = _RESERVED_IDENTIFIER_FIXUP_1161.x;
    _RESERVED_IDENTIFIER_FIXUP_1691.y = _RESERVED_IDENTIFIER_FIXUP_1161.y;
    _RESERVED_IDENTIFIER_FIXUP_1691.z = _RESERVED_IDENTIFIER_FIXUP_1161.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1169 = _RESERVED_IDENTIFIER_FIXUP_1090.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1172 = _RESERVED_IDENTIFIER_FIXUP_1169 * _RESERVED_IDENTIFIER_FIXUP_1667.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1849 = vec4(_RESERVED_IDENTIFIER_FIXUP_1172.xy, _RESERVED_IDENTIFIER_FIXUP_689, _RESERVED_IDENTIFIER_FIXUP_1172.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1187 = mix(_RESERVED_IDENTIFIER_FIXUP_1849.xyw, _RESERVED_IDENTIFIER_FIXUP_1169, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1849.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1703 = _RESERVED_IDENTIFIER_FIXUP_1090;
    _RESERVED_IDENTIFIER_FIXUP_1703.x = _RESERVED_IDENTIFIER_FIXUP_1187.x;
    _RESERVED_IDENTIFIER_FIXUP_1703.y = _RESERVED_IDENTIFIER_FIXUP_1187.y;
    _RESERVED_IDENTIFIER_FIXUP_1703.z = _RESERVED_IDENTIFIER_FIXUP_1187.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1203 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1679, _RESERVED_IDENTIFIER_FIXUP_1691, _RESERVED_IDENTIFIER_FIXUP_1094.xxxx), _RESERVED_IDENTIFIER_FIXUP_1703, _RESERVED_IDENTIFIER_FIXUP_1094.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1711 = _RESERVED_IDENTIFIER_FIXUP_1691;
    _RESERVED_IDENTIFIER_FIXUP_1711.x = _RESERVED_IDENTIFIER_FIXUP_795;
    float _RESERVED_IDENTIFIER_FIXUP_1216 = clamp((_RESERVED_IDENTIFIER_FIXUP_795 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1711.x = _RESERVED_IDENTIFIER_FIXUP_1216;
    float _RESERVED_IDENTIFIER_FIXUP_1222 = ((-_RESERVED_IDENTIFIER_FIXUP_1216) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1711.y = _RESERVED_IDENTIFIER_FIXUP_1222;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1842;
    if (_RESERVED_IDENTIFIER_FIXUP_1222 != (-_RESERVED_IDENTIFIER_FIXUP_1222))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1234 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1711.y = _RESERVED_IDENTIFIER_FIXUP_1234.x;
        _RESERVED_IDENTIFIER_FIXUP_1711.z = _RESERVED_IDENTIFIER_FIXUP_1234.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1244 = _RESERVED_IDENTIFIER_FIXUP_1711.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1728;
        _RESERVED_IDENTIFIER_FIXUP_1728.x = _RESERVED_IDENTIFIER_FIXUP_1244.x;
        _RESERVED_IDENTIFIER_FIXUP_1728.y = _RESERVED_IDENTIFIER_FIXUP_1244.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1254 = _RESERVED_IDENTIFIER_FIXUP_1711.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1732;
        _RESERVED_IDENTIFIER_FIXUP_1732.x = _RESERVED_IDENTIFIER_FIXUP_1254.x;
        _RESERVED_IDENTIFIER_FIXUP_1732.y = _RESERVED_IDENTIFIER_FIXUP_1254.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1264 = _RESERVED_IDENTIFIER_FIXUP_1711.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1736;
        _RESERVED_IDENTIFIER_FIXUP_1736.x = _RESERVED_IDENTIFIER_FIXUP_1264.x;
        _RESERVED_IDENTIFIER_FIXUP_1736.y = _RESERVED_IDENTIFIER_FIXUP_1264.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1274 = _RESERVED_IDENTIFIER_FIXUP_1711.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1740;
        _RESERVED_IDENTIFIER_FIXUP_1740.x = _RESERVED_IDENTIFIER_FIXUP_1274.x;
        _RESERVED_IDENTIFIER_FIXUP_1740.y = _RESERVED_IDENTIFIER_FIXUP_1274.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1282 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1282.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1282.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1288 = hdLod5(param_8, param_9);
        _RESERVED_IDENTIFIER_FIXUP_1728.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1732.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1736.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1740.w = 0.0;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1728.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1288.y = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1732.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1288.z = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1736.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1288.w = hdLod5(param_14, param_15).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1345 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1288 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1740.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1345.x = min((_RESERVED_IDENTIFIER_FIXUP_1216 * (((float((hdLod5(param_16, param_17).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1345, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1094.w);
        _RESERVED_IDENTIFIER_FIXUP_1842 = _RESERVED_IDENTIFIER_FIXUP_1345;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1722 = _RESERVED_IDENTIFIER_FIXUP_1703;
        _RESERVED_IDENTIFIER_FIXUP_1722.x = _RESERVED_IDENTIFIER_FIXUP_1094.w;
        _RESERVED_IDENTIFIER_FIXUP_1842 = _RESERVED_IDENTIFIER_FIXUP_1722;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1393 = (_RESERVED_IDENTIFIER_FIXUP_1842.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1850 = vec4(_RESERVED_IDENTIFIER_FIXUP_1393, _RESERVED_IDENTIFIER_FIXUP_1203.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1417 = _RESERVED_IDENTIFIER_FIXUP_1842.xxx * _RESERVED_IDENTIFIER_FIXUP_1850.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1811 = _RESERVED_IDENTIFIER_FIXUP_1850;
    _RESERVED_IDENTIFIER_FIXUP_1811.y = _RESERVED_IDENTIFIER_FIXUP_1417.x;
    _RESERVED_IDENTIFIER_FIXUP_1811.z = _RESERVED_IDENTIFIER_FIXUP_1417.y;
    _RESERVED_IDENTIFIER_FIXUP_1811.w = _RESERVED_IDENTIFIER_FIXUP_1417.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1431 = (_RESERVED_IDENTIFIER_FIXUP_1203.xyz * _RESERVED_IDENTIFIER_FIXUP_1811.xxx) + _RESERVED_IDENTIFIER_FIXUP_1811.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1817 = _RESERVED_IDENTIFIER_FIXUP_1203;
    _RESERVED_IDENTIFIER_FIXUP_1817.x = _RESERVED_IDENTIFIER_FIXUP_1431.x;
    _RESERVED_IDENTIFIER_FIXUP_1817.y = _RESERVED_IDENTIFIER_FIXUP_1431.y;
    _RESERVED_IDENTIFIER_FIXUP_1817.z = _RESERVED_IDENTIFIER_FIXUP_1431.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1444 = _RESERVED_IDENTIFIER_FIXUP_1817.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1823 = _RESERVED_IDENTIFIER_FIXUP_1817;
    _RESERVED_IDENTIFIER_FIXUP_1823.x = _RESERVED_IDENTIFIER_FIXUP_1444.x;
    _RESERVED_IDENTIFIER_FIXUP_1823.y = _RESERVED_IDENTIFIER_FIXUP_1444.y;
    _RESERVED_IDENTIFIER_FIXUP_1823.z = _RESERVED_IDENTIFIER_FIXUP_1444.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1823.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_530 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_539;
    if (_RESERVED_IDENTIFIER_FIXUP_530)
    {
        _RESERVED_IDENTIFIER_FIXUP_539 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_539 = _RESERVED_IDENTIFIER_FIXUP_530;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_539)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_576 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1647.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_602 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1479;
    if (_RESERVED_IDENTIFIER_FIXUP_576 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1479 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_576), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_602);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1479 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_602);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1479;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1393);
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
    vec3 hdB85 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB85.x;
    r4.y = hdB85.y;
    r4.z = hdB85.z;
    vec3 hdB100 = v0.xyz + v0.xyz;
    r5.x = hdB100.x;
    r5.y = hdB100.y;
    r5.z = hdB100.z;
    vec3 hdB111 = r0.xyz * r5.xyz;
    r6.x = hdB111.x;
    r6.y = hdB111.y;
    r6.z = hdB111.z;
    vec4 hdB120 = r0;
    vec3 hdB129 = mix(r6.xyz, hdB120.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB129.x;
    r0.y = hdB129.y;
    r0.z = hdB129.z;
    vec3 hdB140 = r1.xyz * r5.xyz;
    r6.x = hdB140.x;
    r6.y = hdB140.y;
    r6.z = hdB140.z;
    vec4 hdB149 = r1;
    vec3 hdB155 = mix(r6.xyz, hdB149.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB155.x;
    r1.y = hdB155.y;
    r1.z = hdB155.z;
    vec3 hdB166 = r2.xyz * r5.xyz;
    r4.x = hdB166.x;
    r4.y = hdB166.y;
    r4.w = hdB166.z;
    vec4 hdB176 = r2;
    vec3 hdB182 = mix(r4.xyw, hdB176.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB182.x;
    r2.y = hdB182.y;
    r2.z = hdB182.z;
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB235 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB235.x;
        r1.z = hdB235.y;
        vec2 hdB246 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB246.x;
        r2.y = hdB246.y;
        vec2 hdB257 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB257.x;
        r4.y = hdB257.y;
        vec2 hdB268 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB268.x;
        r5.y = hdB268.y;
        vec2 hdB279 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB279.x;
        r6.y = hdB279.y;
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
    vec3 hdB412 = r0.www * v1.xyz;
    r1.y = hdB412.x;
    r1.z = hdB412.y;
    r1.w = hdB412.z;
    vec4 hdB421 = r1;
    vec3 hdB423 = r2.xxx * hdB421.yzw;
    r1.y = hdB423.x;
    r1.z = hdB423.y;
    r1.w = hdB423.z;
    vec4 hdB430 = r0;
    vec3 hdB437 = (hdB430.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB437.x;
    r0.y = hdB437.y;
    r0.z = hdB437.z;
    vec4 hdB444 = r0;
    vec3 hdB451 = hdB444.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB451.x;
    r0.y = hdB451.y;
    r0.z = hdB451.z;
    vec3 hdB466 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB466.x;
    oC0.y = hdB466.y;
    oC0.z = hdB466.z;
    oC0.w = 1.0;
    bool hdB478 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB486;
    if (hdB478)
    {
        hdB486 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB486 = hdB478;
    }
    if (hdB486)
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
    bool _1495 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1505;
    if (_1495)
    {
        _1505 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1505 = _1495;
    }
    if (_1505)
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
        bool _1530 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1545;
        if (!_1530)
        {
            _1545 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1545 = _1530;
        }
        if (_1545)
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
