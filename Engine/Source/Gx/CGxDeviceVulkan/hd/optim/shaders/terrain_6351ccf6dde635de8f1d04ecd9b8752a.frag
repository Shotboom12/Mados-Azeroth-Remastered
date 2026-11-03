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
float _RESERVED_IDENTIFIER_FIXUP_1873;
vec4 _RESERVED_IDENTIFIER_FIXUP_1874;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_680 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_684 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_688 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_692 = hdTex3(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_696 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1526 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1526.x = _RESERVED_IDENTIFIER_FIXUP_696.x;
    _RESERVED_IDENTIFIER_FIXUP_1526.y = _RESERVED_IDENTIFIER_FIXUP_696.y;
    float _RESERVED_IDENTIFIER_FIXUP_702 = _RESERVED_IDENTIFIER_FIXUP_696.z;
    _RESERVED_IDENTIFIER_FIXUP_1526.z = _RESERVED_IDENTIFIER_FIXUP_702;
    vec3 _RESERVED_IDENTIFIER_FIXUP_704 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1873).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_707 = _RESERVED_IDENTIFIER_FIXUP_704 + _RESERVED_IDENTIFIER_FIXUP_704;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1532;
    _RESERVED_IDENTIFIER_FIXUP_1532.x = _RESERVED_IDENTIFIER_FIXUP_707.x;
    _RESERVED_IDENTIFIER_FIXUP_1532.y = _RESERVED_IDENTIFIER_FIXUP_707.y;
    _RESERVED_IDENTIFIER_FIXUP_1532.z = _RESERVED_IDENTIFIER_FIXUP_707.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_715 = _RESERVED_IDENTIFIER_FIXUP_680.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_718 = _RESERVED_IDENTIFIER_FIXUP_715 * _RESERVED_IDENTIFIER_FIXUP_1532.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1538;
    _RESERVED_IDENTIFIER_FIXUP_1538.x = _RESERVED_IDENTIFIER_FIXUP_718.x;
    _RESERVED_IDENTIFIER_FIXUP_1538.y = _RESERVED_IDENTIFIER_FIXUP_718.y;
    _RESERVED_IDENTIFIER_FIXUP_1538.z = _RESERVED_IDENTIFIER_FIXUP_718.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_732 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1526.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_733 = mix(_RESERVED_IDENTIFIER_FIXUP_1538.xyz, _RESERVED_IDENTIFIER_FIXUP_715, _RESERVED_IDENTIFIER_FIXUP_732);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1544 = _RESERVED_IDENTIFIER_FIXUP_680;
    _RESERVED_IDENTIFIER_FIXUP_1544.x = _RESERVED_IDENTIFIER_FIXUP_733.x;
    _RESERVED_IDENTIFIER_FIXUP_1544.y = _RESERVED_IDENTIFIER_FIXUP_733.y;
    _RESERVED_IDENTIFIER_FIXUP_1544.z = _RESERVED_IDENTIFIER_FIXUP_733.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_741 = _RESERVED_IDENTIFIER_FIXUP_684.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_744 = _RESERVED_IDENTIFIER_FIXUP_741 * _RESERVED_IDENTIFIER_FIXUP_1532.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1550;
    _RESERVED_IDENTIFIER_FIXUP_1550.x = _RESERVED_IDENTIFIER_FIXUP_744.x;
    _RESERVED_IDENTIFIER_FIXUP_1550.y = _RESERVED_IDENTIFIER_FIXUP_744.y;
    _RESERVED_IDENTIFIER_FIXUP_1550.z = _RESERVED_IDENTIFIER_FIXUP_744.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_758 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1526.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_759 = mix(_RESERVED_IDENTIFIER_FIXUP_1550.xyz, _RESERVED_IDENTIFIER_FIXUP_741, _RESERVED_IDENTIFIER_FIXUP_758);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1556 = _RESERVED_IDENTIFIER_FIXUP_684;
    _RESERVED_IDENTIFIER_FIXUP_1556.x = _RESERVED_IDENTIFIER_FIXUP_759.x;
    _RESERVED_IDENTIFIER_FIXUP_1556.y = _RESERVED_IDENTIFIER_FIXUP_759.y;
    _RESERVED_IDENTIFIER_FIXUP_1556.z = _RESERVED_IDENTIFIER_FIXUP_759.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_767 = _RESERVED_IDENTIFIER_FIXUP_688.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_770 = _RESERVED_IDENTIFIER_FIXUP_767 * _RESERVED_IDENTIFIER_FIXUP_1532.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1883 = vec4(_RESERVED_IDENTIFIER_FIXUP_770.xy, _RESERVED_IDENTIFIER_FIXUP_702, _RESERVED_IDENTIFIER_FIXUP_770.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_785 = mix(_RESERVED_IDENTIFIER_FIXUP_1883.xyw, _RESERVED_IDENTIFIER_FIXUP_767, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1883.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1568 = _RESERVED_IDENTIFIER_FIXUP_688;
    _RESERVED_IDENTIFIER_FIXUP_1568.x = _RESERVED_IDENTIFIER_FIXUP_785.x;
    _RESERVED_IDENTIFIER_FIXUP_1568.y = _RESERVED_IDENTIFIER_FIXUP_785.y;
    _RESERVED_IDENTIFIER_FIXUP_1568.z = _RESERVED_IDENTIFIER_FIXUP_785.z;
    float _RESERVED_IDENTIFIER_FIXUP_795 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_692.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1574 = _RESERVED_IDENTIFIER_FIXUP_692;
    _RESERVED_IDENTIFIER_FIXUP_1574.z = _RESERVED_IDENTIFIER_FIXUP_795;
    _RESERVED_IDENTIFIER_FIXUP_1574.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_795;
    vec4 _RESERVED_IDENTIFIER_FIXUP_817 = (_RESERVED_IDENTIFIER_FIXUP_1568 * _RESERVED_IDENTIFIER_FIXUP_1574.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1544 * _RESERVED_IDENTIFIER_FIXUP_1574.zzzz) + (_RESERVED_IDENTIFIER_FIXUP_1574.xxxx * _RESERVED_IDENTIFIER_FIXUP_1556));
    float _RESERVED_IDENTIFIER_FIXUP_824 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1679 = _RESERVED_IDENTIFIER_FIXUP_817;
    _RESERVED_IDENTIFIER_FIXUP_1679.x = _RESERVED_IDENTIFIER_FIXUP_817.x;
    _RESERVED_IDENTIFIER_FIXUP_1679.y = _RESERVED_IDENTIFIER_FIXUP_817.y;
    _RESERVED_IDENTIFIER_FIXUP_1679.z = _RESERVED_IDENTIFIER_FIXUP_817.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1056 = _RESERVED_IDENTIFIER_FIXUP_1679.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1685 = _RESERVED_IDENTIFIER_FIXUP_1679;
    _RESERVED_IDENTIFIER_FIXUP_1685.x = _RESERVED_IDENTIFIER_FIXUP_1056.x;
    _RESERVED_IDENTIFIER_FIXUP_1685.y = _RESERVED_IDENTIFIER_FIXUP_1056.y;
    _RESERVED_IDENTIFIER_FIXUP_1685.z = _RESERVED_IDENTIFIER_FIXUP_1056.z;
    vec2 param_4 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1108 = hdTex0(param_4);
    vec2 param_5 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1112 = hdTex1(param_5);
    vec2 param_6 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1116 = hdTex2(param_6);
    vec2 param_7 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1120 = hdTex3(param_7);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1135 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1705;
    _RESERVED_IDENTIFIER_FIXUP_1705.x = _RESERVED_IDENTIFIER_FIXUP_1135.x;
    _RESERVED_IDENTIFIER_FIXUP_1705.y = _RESERVED_IDENTIFIER_FIXUP_1135.y;
    _RESERVED_IDENTIFIER_FIXUP_1705.z = _RESERVED_IDENTIFIER_FIXUP_1135.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1143 = _RESERVED_IDENTIFIER_FIXUP_1108.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1146 = _RESERVED_IDENTIFIER_FIXUP_1143 * _RESERVED_IDENTIFIER_FIXUP_1705.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1711;
    _RESERVED_IDENTIFIER_FIXUP_1711.x = _RESERVED_IDENTIFIER_FIXUP_1146.x;
    _RESERVED_IDENTIFIER_FIXUP_1711.y = _RESERVED_IDENTIFIER_FIXUP_1146.y;
    _RESERVED_IDENTIFIER_FIXUP_1711.z = _RESERVED_IDENTIFIER_FIXUP_1146.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1161 = mix(_RESERVED_IDENTIFIER_FIXUP_1711.xyz, _RESERVED_IDENTIFIER_FIXUP_1143, _RESERVED_IDENTIFIER_FIXUP_732);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1717 = _RESERVED_IDENTIFIER_FIXUP_1108;
    _RESERVED_IDENTIFIER_FIXUP_1717.x = _RESERVED_IDENTIFIER_FIXUP_1161.x;
    _RESERVED_IDENTIFIER_FIXUP_1717.y = _RESERVED_IDENTIFIER_FIXUP_1161.y;
    _RESERVED_IDENTIFIER_FIXUP_1717.z = _RESERVED_IDENTIFIER_FIXUP_1161.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1169 = _RESERVED_IDENTIFIER_FIXUP_1112.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1172 = _RESERVED_IDENTIFIER_FIXUP_1169 * _RESERVED_IDENTIFIER_FIXUP_1705.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1723;
    _RESERVED_IDENTIFIER_FIXUP_1723.x = _RESERVED_IDENTIFIER_FIXUP_1172.x;
    _RESERVED_IDENTIFIER_FIXUP_1723.y = _RESERVED_IDENTIFIER_FIXUP_1172.y;
    _RESERVED_IDENTIFIER_FIXUP_1723.z = _RESERVED_IDENTIFIER_FIXUP_1172.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1187 = mix(_RESERVED_IDENTIFIER_FIXUP_1723.xyz, _RESERVED_IDENTIFIER_FIXUP_1169, _RESERVED_IDENTIFIER_FIXUP_758);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1729 = _RESERVED_IDENTIFIER_FIXUP_1112;
    _RESERVED_IDENTIFIER_FIXUP_1729.x = _RESERVED_IDENTIFIER_FIXUP_1187.x;
    _RESERVED_IDENTIFIER_FIXUP_1729.y = _RESERVED_IDENTIFIER_FIXUP_1187.y;
    _RESERVED_IDENTIFIER_FIXUP_1729.z = _RESERVED_IDENTIFIER_FIXUP_1187.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1195 = _RESERVED_IDENTIFIER_FIXUP_1116.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1198 = _RESERVED_IDENTIFIER_FIXUP_1195 * _RESERVED_IDENTIFIER_FIXUP_1705.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1887 = vec4(_RESERVED_IDENTIFIER_FIXUP_1198.xy, _RESERVED_IDENTIFIER_FIXUP_702, _RESERVED_IDENTIFIER_FIXUP_1198.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1213 = mix(_RESERVED_IDENTIFIER_FIXUP_1887.xyw, _RESERVED_IDENTIFIER_FIXUP_1195, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1887.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1741 = _RESERVED_IDENTIFIER_FIXUP_1116;
    _RESERVED_IDENTIFIER_FIXUP_1741.x = _RESERVED_IDENTIFIER_FIXUP_1213.x;
    _RESERVED_IDENTIFIER_FIXUP_1741.y = _RESERVED_IDENTIFIER_FIXUP_1213.y;
    _RESERVED_IDENTIFIER_FIXUP_1741.z = _RESERVED_IDENTIFIER_FIXUP_1213.z;
    float _RESERVED_IDENTIFIER_FIXUP_1223 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1120.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1747 = _RESERVED_IDENTIFIER_FIXUP_1120;
    _RESERVED_IDENTIFIER_FIXUP_1747.z = _RESERVED_IDENTIFIER_FIXUP_1223;
    _RESERVED_IDENTIFIER_FIXUP_1747.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1223;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1233 = _RESERVED_IDENTIFIER_FIXUP_1747.xxxx * _RESERVED_IDENTIFIER_FIXUP_1729;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1245 = (_RESERVED_IDENTIFIER_FIXUP_1741 * _RESERVED_IDENTIFIER_FIXUP_1747.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1717 * _RESERVED_IDENTIFIER_FIXUP_1747.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1233);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1754 = _RESERVED_IDENTIFIER_FIXUP_1233;
    _RESERVED_IDENTIFIER_FIXUP_1754.x = _RESERVED_IDENTIFIER_FIXUP_824;
    float _RESERVED_IDENTIFIER_FIXUP_1258 = clamp((_RESERVED_IDENTIFIER_FIXUP_824 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1754.x = _RESERVED_IDENTIFIER_FIXUP_1258;
    float _RESERVED_IDENTIFIER_FIXUP_1264 = ((-_RESERVED_IDENTIFIER_FIXUP_1258) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1754.y = _RESERVED_IDENTIFIER_FIXUP_1264;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1879;
    if (_RESERVED_IDENTIFIER_FIXUP_1264 != (-_RESERVED_IDENTIFIER_FIXUP_1264))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1276 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1286 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_1286.x;
        _RESERVED_IDENTIFIER_FIXUP_1754.y = _RESERVED_IDENTIFIER_FIXUP_1288;
        _RESERVED_IDENTIFIER_FIXUP_1754.z = _RESERVED_IDENTIFIER_FIXUP_1286.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1296 = _RESERVED_IDENTIFIER_FIXUP_1754.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1772;
        _RESERVED_IDENTIFIER_FIXUP_1772.x = _RESERVED_IDENTIFIER_FIXUP_1296.x;
        _RESERVED_IDENTIFIER_FIXUP_1772.y = _RESERVED_IDENTIFIER_FIXUP_1296.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1303 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1307 = _RESERVED_IDENTIFIER_FIXUP_1303.y;
        _RESERVED_IDENTIFIER_FIXUP_1772.w = _RESERVED_IDENTIFIER_FIXUP_1307;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1276.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1276.w;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1772.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1307;
        float _RESERVED_IDENTIFIER_FIXUP_1318 = hdLod5(param_8, param_9).x + hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1888 = vec4(_RESERVED_IDENTIFIER_FIXUP_1258, _RESERVED_IDENTIFIER_FIXUP_1288, _RESERVED_IDENTIFIER_FIXUP_1286.y, _RESERVED_IDENTIFIER_FIXUP_1318);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1325 = _RESERVED_IDENTIFIER_FIXUP_1888.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1785;
        _RESERVED_IDENTIFIER_FIXUP_1785.x = _RESERVED_IDENTIFIER_FIXUP_1325.x;
        _RESERVED_IDENTIFIER_FIXUP_1785.y = _RESERVED_IDENTIFIER_FIXUP_1325.y;
        _RESERVED_IDENTIFIER_FIXUP_1785.w = _RESERVED_IDENTIFIER_FIXUP_1307;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1785.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1307;
        float _RESERVED_IDENTIFIER_FIXUP_1347 = _RESERVED_IDENTIFIER_FIXUP_1318 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_1888.w = _RESERVED_IDENTIFIER_FIXUP_1347;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_1888.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1798;
        _RESERVED_IDENTIFIER_FIXUP_1798.x = _RESERVED_IDENTIFIER_FIXUP_1354.x;
        _RESERVED_IDENTIFIER_FIXUP_1798.y = _RESERVED_IDENTIFIER_FIXUP_1354.y;
        _RESERVED_IDENTIFIER_FIXUP_1798.w = _RESERVED_IDENTIFIER_FIXUP_1307;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1798.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1307;
        float _RESERVED_IDENTIFIER_FIXUP_1376 = _RESERVED_IDENTIFIER_FIXUP_1347 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_1888.w = _RESERVED_IDENTIFIER_FIXUP_1376;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1383 = _RESERVED_IDENTIFIER_FIXUP_1888.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1811;
        _RESERVED_IDENTIFIER_FIXUP_1811.x = _RESERVED_IDENTIFIER_FIXUP_1383.x;
        _RESERVED_IDENTIFIER_FIXUP_1811.y = _RESERVED_IDENTIFIER_FIXUP_1383.y;
        _RESERVED_IDENTIFIER_FIXUP_1811.w = _RESERVED_IDENTIFIER_FIXUP_1307;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1811.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1307;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1400 = hdLod5(param_16, param_17);
        _RESERVED_IDENTIFIER_FIXUP_1400.x = min((_RESERVED_IDENTIFIER_FIXUP_1258 * (((_RESERVED_IDENTIFIER_FIXUP_1376 + _RESERVED_IDENTIFIER_FIXUP_1400.x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1120.w);
        _RESERVED_IDENTIFIER_FIXUP_1879 = _RESERVED_IDENTIFIER_FIXUP_1400;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1765 = _RESERVED_IDENTIFIER_FIXUP_1741;
        _RESERVED_IDENTIFIER_FIXUP_1765.x = _RESERVED_IDENTIFIER_FIXUP_1120.w;
        _RESERVED_IDENTIFIER_FIXUP_1879 = _RESERVED_IDENTIFIER_FIXUP_1765;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1433 = (_RESERVED_IDENTIFIER_FIXUP_1879.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1889 = vec4(_RESERVED_IDENTIFIER_FIXUP_1433, _RESERVED_IDENTIFIER_FIXUP_1245.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1457 = _RESERVED_IDENTIFIER_FIXUP_1879.xxx * _RESERVED_IDENTIFIER_FIXUP_1889.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1848 = _RESERVED_IDENTIFIER_FIXUP_1889;
    _RESERVED_IDENTIFIER_FIXUP_1848.y = _RESERVED_IDENTIFIER_FIXUP_1457.x;
    _RESERVED_IDENTIFIER_FIXUP_1848.z = _RESERVED_IDENTIFIER_FIXUP_1457.y;
    _RESERVED_IDENTIFIER_FIXUP_1848.w = _RESERVED_IDENTIFIER_FIXUP_1457.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1471 = (_RESERVED_IDENTIFIER_FIXUP_1245.xyz * _RESERVED_IDENTIFIER_FIXUP_1848.xxx) + _RESERVED_IDENTIFIER_FIXUP_1848.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1854 = _RESERVED_IDENTIFIER_FIXUP_1245;
    _RESERVED_IDENTIFIER_FIXUP_1854.x = _RESERVED_IDENTIFIER_FIXUP_1471.x;
    _RESERVED_IDENTIFIER_FIXUP_1854.y = _RESERVED_IDENTIFIER_FIXUP_1471.y;
    _RESERVED_IDENTIFIER_FIXUP_1854.z = _RESERVED_IDENTIFIER_FIXUP_1471.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1484 = _RESERVED_IDENTIFIER_FIXUP_1854.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1860 = _RESERVED_IDENTIFIER_FIXUP_1854;
    _RESERVED_IDENTIFIER_FIXUP_1860.x = _RESERVED_IDENTIFIER_FIXUP_1484.x;
    _RESERVED_IDENTIFIER_FIXUP_1860.y = _RESERVED_IDENTIFIER_FIXUP_1484.y;
    _RESERVED_IDENTIFIER_FIXUP_1860.z = _RESERVED_IDENTIFIER_FIXUP_1484.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1860.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_543 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_552;
    if (_RESERVED_IDENTIFIER_FIXUP_543)
    {
        _RESERVED_IDENTIFIER_FIXUP_552 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_552 = _RESERVED_IDENTIFIER_FIXUP_543;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_552)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_589 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1685.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_615 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1519;
    if (_RESERVED_IDENTIFIER_FIXUP_589 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1519 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_589), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_615);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1519 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_615);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1519;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1433);
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
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
    vec3 hdB84 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB84.x;
    r4.y = hdB84.y;
    r4.z = hdB84.z;
    vec3 hdB99 = v0.xyz + v0.xyz;
    r5.x = hdB99.x;
    r5.y = hdB99.y;
    r5.z = hdB99.z;
    vec3 hdB110 = r0.xyz * r5.xyz;
    r6.x = hdB110.x;
    r6.y = hdB110.y;
    r6.z = hdB110.z;
    vec4 hdB119 = r0;
    vec3 hdB128 = mix(r6.xyz, hdB119.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB128.x;
    r0.y = hdB128.y;
    r0.z = hdB128.z;
    vec3 hdB139 = r1.xyz * r5.xyz;
    r6.x = hdB139.x;
    r6.y = hdB139.y;
    r6.z = hdB139.z;
    vec4 hdB148 = r1;
    vec3 hdB154 = mix(r6.xyz, hdB148.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB154.x;
    r1.y = hdB154.y;
    r1.z = hdB154.z;
    vec3 hdB165 = r2.xyz * r5.xyz;
    r4.x = hdB165.x;
    r4.y = hdB165.y;
    r4.w = hdB165.z;
    vec4 hdB175 = r2;
    vec3 hdB181 = mix(r4.xyw, hdB175.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB181.x;
    r2.y = hdB181.y;
    r2.z = hdB181.z;
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
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB264 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB264.x;
        r1.z = hdB264.y;
        vec2 hdB275 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB275.x;
        r4.y = hdB275.y;
        vec2 hdB283 = vec2(1.0, 0.0) * v5.zx;
        r4.z = hdB283.x;
        r4.w = hdB283.y;
        vec2 param_6 = r4.xy;
        float param_7 = r4.w;
        r4 = hdLod5(param_6, param_7);
        r1.w = r2.x + r4.x;
        vec2 hdB306 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB306.x;
        r2.y = hdB306.y;
        vec2 hdB313 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB313.x;
        r2.w = hdB313.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB336 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB336.x;
        r2.y = hdB336.y;
        vec2 hdB343 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB343.x;
        r2.w = hdB343.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.w += r2.x;
        vec2 hdB366 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB366.x;
        r2.y = hdB366.y;
        vec2 hdB373 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB373.x;
        r2.w = hdB373.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
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
    vec3 hdB425 = r0.www * v1.xyz;
    r1.y = hdB425.x;
    r1.z = hdB425.y;
    r1.w = hdB425.z;
    vec4 hdB434 = r1;
    vec3 hdB436 = r2.xxx * hdB434.yzw;
    r1.y = hdB436.x;
    r1.z = hdB436.y;
    r1.w = hdB436.z;
    vec4 hdB443 = r0;
    vec3 hdB450 = (hdB443.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB450.x;
    r0.y = hdB450.y;
    r0.z = hdB450.z;
    vec4 hdB457 = r0;
    vec3 hdB464 = hdB457.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB464.x;
    r0.y = hdB464.y;
    r0.z = hdB464.z;
    vec3 hdB479 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB479.x;
    oC0.y = hdB479.y;
    oC0.z = hdB479.z;
    oC0.w = 1.0;
    bool hdB491 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB499;
    if (hdB491)
    {
        hdB499 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB499 = hdB491;
    }
    if (hdB499)
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
    bool _1589 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1599;
    if (_1589)
    {
        _1599 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1599 = _1589;
    }
    if (_1599)
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
        bool _1624 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1639;
        if (!_1624)
        {
            _1639 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1639 = _1624;
        }
        if (_1639)
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
