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
float _RESERVED_IDENTIFIER_FIXUP_1815;
vec4 _RESERVED_IDENTIFIER_FIXUP_1816;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_663 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_667 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_671 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_675 = hdTex3(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_679 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1478;
    _RESERVED_IDENTIFIER_FIXUP_1478.x = _RESERVED_IDENTIFIER_FIXUP_679.x;
    _RESERVED_IDENTIFIER_FIXUP_1478.y = _RESERVED_IDENTIFIER_FIXUP_679.y;
    float _RESERVED_IDENTIFIER_FIXUP_685 = _RESERVED_IDENTIFIER_FIXUP_679.z;
    _RESERVED_IDENTIFIER_FIXUP_1478.z = _RESERVED_IDENTIFIER_FIXUP_685;
    vec3 _RESERVED_IDENTIFIER_FIXUP_687 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1815).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_690 = _RESERVED_IDENTIFIER_FIXUP_687 + _RESERVED_IDENTIFIER_FIXUP_687;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1484;
    _RESERVED_IDENTIFIER_FIXUP_1484.x = _RESERVED_IDENTIFIER_FIXUP_690.x;
    _RESERVED_IDENTIFIER_FIXUP_1484.y = _RESERVED_IDENTIFIER_FIXUP_690.y;
    _RESERVED_IDENTIFIER_FIXUP_1484.z = _RESERVED_IDENTIFIER_FIXUP_690.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_698 = _RESERVED_IDENTIFIER_FIXUP_663.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_701 = _RESERVED_IDENTIFIER_FIXUP_698 * _RESERVED_IDENTIFIER_FIXUP_1484.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1490;
    _RESERVED_IDENTIFIER_FIXUP_1490.x = _RESERVED_IDENTIFIER_FIXUP_701.x;
    _RESERVED_IDENTIFIER_FIXUP_1490.y = _RESERVED_IDENTIFIER_FIXUP_701.y;
    _RESERVED_IDENTIFIER_FIXUP_1490.z = _RESERVED_IDENTIFIER_FIXUP_701.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_715 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1478.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_716 = mix(_RESERVED_IDENTIFIER_FIXUP_1490.xyz, _RESERVED_IDENTIFIER_FIXUP_698, _RESERVED_IDENTIFIER_FIXUP_715);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1496 = _RESERVED_IDENTIFIER_FIXUP_663;
    _RESERVED_IDENTIFIER_FIXUP_1496.x = _RESERVED_IDENTIFIER_FIXUP_716.x;
    _RESERVED_IDENTIFIER_FIXUP_1496.y = _RESERVED_IDENTIFIER_FIXUP_716.y;
    _RESERVED_IDENTIFIER_FIXUP_1496.z = _RESERVED_IDENTIFIER_FIXUP_716.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_724 = _RESERVED_IDENTIFIER_FIXUP_667.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_727 = _RESERVED_IDENTIFIER_FIXUP_724 * _RESERVED_IDENTIFIER_FIXUP_1484.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1502;
    _RESERVED_IDENTIFIER_FIXUP_1502.x = _RESERVED_IDENTIFIER_FIXUP_727.x;
    _RESERVED_IDENTIFIER_FIXUP_1502.y = _RESERVED_IDENTIFIER_FIXUP_727.y;
    _RESERVED_IDENTIFIER_FIXUP_1502.z = _RESERVED_IDENTIFIER_FIXUP_727.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_741 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1478.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_742 = mix(_RESERVED_IDENTIFIER_FIXUP_1502.xyz, _RESERVED_IDENTIFIER_FIXUP_724, _RESERVED_IDENTIFIER_FIXUP_741);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1508 = _RESERVED_IDENTIFIER_FIXUP_667;
    _RESERVED_IDENTIFIER_FIXUP_1508.x = _RESERVED_IDENTIFIER_FIXUP_742.x;
    _RESERVED_IDENTIFIER_FIXUP_1508.y = _RESERVED_IDENTIFIER_FIXUP_742.y;
    _RESERVED_IDENTIFIER_FIXUP_1508.z = _RESERVED_IDENTIFIER_FIXUP_742.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_750 = _RESERVED_IDENTIFIER_FIXUP_671.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_753 = _RESERVED_IDENTIFIER_FIXUP_750 * _RESERVED_IDENTIFIER_FIXUP_1484.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1825 = vec4(_RESERVED_IDENTIFIER_FIXUP_753.xy, _RESERVED_IDENTIFIER_FIXUP_685, _RESERVED_IDENTIFIER_FIXUP_753.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_768 = mix(_RESERVED_IDENTIFIER_FIXUP_1825.xyw, _RESERVED_IDENTIFIER_FIXUP_750, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1825.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1520 = _RESERVED_IDENTIFIER_FIXUP_671;
    _RESERVED_IDENTIFIER_FIXUP_1520.x = _RESERVED_IDENTIFIER_FIXUP_768.x;
    _RESERVED_IDENTIFIER_FIXUP_1520.y = _RESERVED_IDENTIFIER_FIXUP_768.y;
    _RESERVED_IDENTIFIER_FIXUP_1520.z = _RESERVED_IDENTIFIER_FIXUP_768.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_784 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1496, _RESERVED_IDENTIFIER_FIXUP_1508, _RESERVED_IDENTIFIER_FIXUP_675.xxxx), _RESERVED_IDENTIFIER_FIXUP_1520, _RESERVED_IDENTIFIER_FIXUP_675.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_791 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1626 = _RESERVED_IDENTIFIER_FIXUP_784;
    _RESERVED_IDENTIFIER_FIXUP_1626.x = _RESERVED_IDENTIFIER_FIXUP_784.x;
    _RESERVED_IDENTIFIER_FIXUP_1626.y = _RESERVED_IDENTIFIER_FIXUP_784.y;
    _RESERVED_IDENTIFIER_FIXUP_1626.z = _RESERVED_IDENTIFIER_FIXUP_784.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1023 = _RESERVED_IDENTIFIER_FIXUP_1626.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1632 = _RESERVED_IDENTIFIER_FIXUP_1626;
    _RESERVED_IDENTIFIER_FIXUP_1632.x = _RESERVED_IDENTIFIER_FIXUP_1023.x;
    _RESERVED_IDENTIFIER_FIXUP_1632.y = _RESERVED_IDENTIFIER_FIXUP_1023.y;
    _RESERVED_IDENTIFIER_FIXUP_1632.z = _RESERVED_IDENTIFIER_FIXUP_1023.z;
    vec2 param_4 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1075 = hdTex0(param_4);
    vec2 param_5 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1079 = hdTex1(param_5);
    vec2 param_6 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1083 = hdTex2(param_6);
    vec2 param_7 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1087 = hdTex3(param_7);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1102 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1652;
    _RESERVED_IDENTIFIER_FIXUP_1652.x = _RESERVED_IDENTIFIER_FIXUP_1102.x;
    _RESERVED_IDENTIFIER_FIXUP_1652.y = _RESERVED_IDENTIFIER_FIXUP_1102.y;
    _RESERVED_IDENTIFIER_FIXUP_1652.z = _RESERVED_IDENTIFIER_FIXUP_1102.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1110 = _RESERVED_IDENTIFIER_FIXUP_1075.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1113 = _RESERVED_IDENTIFIER_FIXUP_1110 * _RESERVED_IDENTIFIER_FIXUP_1652.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1658;
    _RESERVED_IDENTIFIER_FIXUP_1658.x = _RESERVED_IDENTIFIER_FIXUP_1113.x;
    _RESERVED_IDENTIFIER_FIXUP_1658.y = _RESERVED_IDENTIFIER_FIXUP_1113.y;
    _RESERVED_IDENTIFIER_FIXUP_1658.z = _RESERVED_IDENTIFIER_FIXUP_1113.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1128 = mix(_RESERVED_IDENTIFIER_FIXUP_1658.xyz, _RESERVED_IDENTIFIER_FIXUP_1110, _RESERVED_IDENTIFIER_FIXUP_715);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1664 = _RESERVED_IDENTIFIER_FIXUP_1075;
    _RESERVED_IDENTIFIER_FIXUP_1664.x = _RESERVED_IDENTIFIER_FIXUP_1128.x;
    _RESERVED_IDENTIFIER_FIXUP_1664.y = _RESERVED_IDENTIFIER_FIXUP_1128.y;
    _RESERVED_IDENTIFIER_FIXUP_1664.z = _RESERVED_IDENTIFIER_FIXUP_1128.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1136 = _RESERVED_IDENTIFIER_FIXUP_1079.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1139 = _RESERVED_IDENTIFIER_FIXUP_1136 * _RESERVED_IDENTIFIER_FIXUP_1652.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1670;
    _RESERVED_IDENTIFIER_FIXUP_1670.x = _RESERVED_IDENTIFIER_FIXUP_1139.x;
    _RESERVED_IDENTIFIER_FIXUP_1670.y = _RESERVED_IDENTIFIER_FIXUP_1139.y;
    _RESERVED_IDENTIFIER_FIXUP_1670.z = _RESERVED_IDENTIFIER_FIXUP_1139.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1154 = mix(_RESERVED_IDENTIFIER_FIXUP_1670.xyz, _RESERVED_IDENTIFIER_FIXUP_1136, _RESERVED_IDENTIFIER_FIXUP_741);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1676 = _RESERVED_IDENTIFIER_FIXUP_1079;
    _RESERVED_IDENTIFIER_FIXUP_1676.x = _RESERVED_IDENTIFIER_FIXUP_1154.x;
    _RESERVED_IDENTIFIER_FIXUP_1676.y = _RESERVED_IDENTIFIER_FIXUP_1154.y;
    _RESERVED_IDENTIFIER_FIXUP_1676.z = _RESERVED_IDENTIFIER_FIXUP_1154.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1162 = _RESERVED_IDENTIFIER_FIXUP_1083.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1165 = _RESERVED_IDENTIFIER_FIXUP_1162 * _RESERVED_IDENTIFIER_FIXUP_1652.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1829 = vec4(_RESERVED_IDENTIFIER_FIXUP_1165.xy, _RESERVED_IDENTIFIER_FIXUP_685, _RESERVED_IDENTIFIER_FIXUP_1165.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1180 = mix(_RESERVED_IDENTIFIER_FIXUP_1829.xyw, _RESERVED_IDENTIFIER_FIXUP_1162, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1829.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1688 = _RESERVED_IDENTIFIER_FIXUP_1083;
    _RESERVED_IDENTIFIER_FIXUP_1688.x = _RESERVED_IDENTIFIER_FIXUP_1180.x;
    _RESERVED_IDENTIFIER_FIXUP_1688.y = _RESERVED_IDENTIFIER_FIXUP_1180.y;
    _RESERVED_IDENTIFIER_FIXUP_1688.z = _RESERVED_IDENTIFIER_FIXUP_1180.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1196 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1664, _RESERVED_IDENTIFIER_FIXUP_1676, _RESERVED_IDENTIFIER_FIXUP_1087.xxxx), _RESERVED_IDENTIFIER_FIXUP_1688, _RESERVED_IDENTIFIER_FIXUP_1087.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1696 = _RESERVED_IDENTIFIER_FIXUP_1676;
    _RESERVED_IDENTIFIER_FIXUP_1696.x = _RESERVED_IDENTIFIER_FIXUP_791;
    float _RESERVED_IDENTIFIER_FIXUP_1209 = clamp((_RESERVED_IDENTIFIER_FIXUP_791 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1696.x = _RESERVED_IDENTIFIER_FIXUP_1209;
    float _RESERVED_IDENTIFIER_FIXUP_1215 = ((-_RESERVED_IDENTIFIER_FIXUP_1209) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1696.y = _RESERVED_IDENTIFIER_FIXUP_1215;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1821;
    if (_RESERVED_IDENTIFIER_FIXUP_1215 != (-_RESERVED_IDENTIFIER_FIXUP_1215))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1227 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1237 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1239 = _RESERVED_IDENTIFIER_FIXUP_1237.x;
        _RESERVED_IDENTIFIER_FIXUP_1696.y = _RESERVED_IDENTIFIER_FIXUP_1239;
        _RESERVED_IDENTIFIER_FIXUP_1696.z = _RESERVED_IDENTIFIER_FIXUP_1237.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1247 = _RESERVED_IDENTIFIER_FIXUP_1696.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1714;
        _RESERVED_IDENTIFIER_FIXUP_1714.x = _RESERVED_IDENTIFIER_FIXUP_1247.x;
        _RESERVED_IDENTIFIER_FIXUP_1714.y = _RESERVED_IDENTIFIER_FIXUP_1247.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1254 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_1254.y;
        _RESERVED_IDENTIFIER_FIXUP_1714.w = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1227.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1227.w;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1714.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1258;
        float _RESERVED_IDENTIFIER_FIXUP_1269 = hdLod5(param_8, param_9).x + hdLod5(param_10, param_11).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1830 = vec4(_RESERVED_IDENTIFIER_FIXUP_1209, _RESERVED_IDENTIFIER_FIXUP_1239, _RESERVED_IDENTIFIER_FIXUP_1237.y, _RESERVED_IDENTIFIER_FIXUP_1269);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1276 = _RESERVED_IDENTIFIER_FIXUP_1830.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1727;
        _RESERVED_IDENTIFIER_FIXUP_1727.x = _RESERVED_IDENTIFIER_FIXUP_1276.x;
        _RESERVED_IDENTIFIER_FIXUP_1727.y = _RESERVED_IDENTIFIER_FIXUP_1276.y;
        _RESERVED_IDENTIFIER_FIXUP_1727.w = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1727.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1258;
        float _RESERVED_IDENTIFIER_FIXUP_1298 = _RESERVED_IDENTIFIER_FIXUP_1269 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_1830.w = _RESERVED_IDENTIFIER_FIXUP_1298;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1305 = _RESERVED_IDENTIFIER_FIXUP_1830.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1740;
        _RESERVED_IDENTIFIER_FIXUP_1740.x = _RESERVED_IDENTIFIER_FIXUP_1305.x;
        _RESERVED_IDENTIFIER_FIXUP_1740.y = _RESERVED_IDENTIFIER_FIXUP_1305.y;
        _RESERVED_IDENTIFIER_FIXUP_1740.w = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1740.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1258;
        float _RESERVED_IDENTIFIER_FIXUP_1327 = _RESERVED_IDENTIFIER_FIXUP_1298 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_1830.w = _RESERVED_IDENTIFIER_FIXUP_1327;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1334 = _RESERVED_IDENTIFIER_FIXUP_1830.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1753;
        _RESERVED_IDENTIFIER_FIXUP_1753.x = _RESERVED_IDENTIFIER_FIXUP_1334.x;
        _RESERVED_IDENTIFIER_FIXUP_1753.y = _RESERVED_IDENTIFIER_FIXUP_1334.y;
        _RESERVED_IDENTIFIER_FIXUP_1753.w = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1753.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1351 = hdLod5(param_16, param_17);
        _RESERVED_IDENTIFIER_FIXUP_1351.x = min((_RESERVED_IDENTIFIER_FIXUP_1209 * (((_RESERVED_IDENTIFIER_FIXUP_1327 + _RESERVED_IDENTIFIER_FIXUP_1351.x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1087.w);
        _RESERVED_IDENTIFIER_FIXUP_1821 = _RESERVED_IDENTIFIER_FIXUP_1351;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1707 = _RESERVED_IDENTIFIER_FIXUP_1688;
        _RESERVED_IDENTIFIER_FIXUP_1707.x = _RESERVED_IDENTIFIER_FIXUP_1087.w;
        _RESERVED_IDENTIFIER_FIXUP_1821 = _RESERVED_IDENTIFIER_FIXUP_1707;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1384 = (_RESERVED_IDENTIFIER_FIXUP_1821.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1831 = vec4(_RESERVED_IDENTIFIER_FIXUP_1384, _RESERVED_IDENTIFIER_FIXUP_1196.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1408 = _RESERVED_IDENTIFIER_FIXUP_1821.xxx * _RESERVED_IDENTIFIER_FIXUP_1831.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1790 = _RESERVED_IDENTIFIER_FIXUP_1831;
    _RESERVED_IDENTIFIER_FIXUP_1790.y = _RESERVED_IDENTIFIER_FIXUP_1408.x;
    _RESERVED_IDENTIFIER_FIXUP_1790.z = _RESERVED_IDENTIFIER_FIXUP_1408.y;
    _RESERVED_IDENTIFIER_FIXUP_1790.w = _RESERVED_IDENTIFIER_FIXUP_1408.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1422 = (_RESERVED_IDENTIFIER_FIXUP_1196.xyz * _RESERVED_IDENTIFIER_FIXUP_1790.xxx) + _RESERVED_IDENTIFIER_FIXUP_1790.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1796 = _RESERVED_IDENTIFIER_FIXUP_1196;
    _RESERVED_IDENTIFIER_FIXUP_1796.x = _RESERVED_IDENTIFIER_FIXUP_1422.x;
    _RESERVED_IDENTIFIER_FIXUP_1796.y = _RESERVED_IDENTIFIER_FIXUP_1422.y;
    _RESERVED_IDENTIFIER_FIXUP_1796.z = _RESERVED_IDENTIFIER_FIXUP_1422.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1435 = _RESERVED_IDENTIFIER_FIXUP_1796.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1802 = _RESERVED_IDENTIFIER_FIXUP_1796;
    _RESERVED_IDENTIFIER_FIXUP_1802.x = _RESERVED_IDENTIFIER_FIXUP_1435.x;
    _RESERVED_IDENTIFIER_FIXUP_1802.y = _RESERVED_IDENTIFIER_FIXUP_1435.y;
    _RESERVED_IDENTIFIER_FIXUP_1802.z = _RESERVED_IDENTIFIER_FIXUP_1435.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1802.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_526 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_535;
    if (_RESERVED_IDENTIFIER_FIXUP_526)
    {
        _RESERVED_IDENTIFIER_FIXUP_535 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_535 = _RESERVED_IDENTIFIER_FIXUP_526;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_535)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_572 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1632.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_598 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1470;
    if (_RESERVED_IDENTIFIER_FIXUP_572 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1470 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_572), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_598);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1470 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_598);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1470;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1384);
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
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB247 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB247.x;
        r1.z = hdB247.y;
        vec2 hdB258 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB258.x;
        r4.y = hdB258.y;
        vec2 hdB266 = vec2(1.0, 0.0) * v5.zx;
        r4.z = hdB266.x;
        r4.w = hdB266.y;
        vec2 param_6 = r4.xy;
        float param_7 = r4.w;
        r4 = hdLod5(param_6, param_7);
        r1.w = r2.x + r4.x;
        vec2 hdB289 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB289.x;
        r2.y = hdB289.y;
        vec2 hdB296 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB296.x;
        r2.w = hdB296.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB319 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB319.x;
        r2.y = hdB319.y;
        vec2 hdB326 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB326.x;
        r2.w = hdB326.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.w += r2.x;
        vec2 hdB349 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB349.x;
        r2.y = hdB349.y;
        vec2 hdB356 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB356.x;
        r2.w = hdB356.y;
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
    vec3 hdB408 = r0.www * v1.xyz;
    r1.y = hdB408.x;
    r1.z = hdB408.y;
    r1.w = hdB408.z;
    vec4 hdB417 = r1;
    vec3 hdB419 = r2.xxx * hdB417.yzw;
    r1.y = hdB419.x;
    r1.z = hdB419.y;
    r1.w = hdB419.z;
    vec4 hdB426 = r0;
    vec3 hdB433 = (hdB426.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB433.x;
    r0.y = hdB433.y;
    r0.z = hdB433.z;
    vec4 hdB440 = r0;
    vec3 hdB447 = hdB440.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB447.x;
    r0.y = hdB447.y;
    r0.z = hdB447.z;
    vec3 hdB462 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB462.x;
    oC0.y = hdB462.y;
    oC0.z = hdB462.z;
    oC0.w = 1.0;
    bool hdB474 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB482;
    if (hdB474)
    {
        hdB482 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB482 = hdB474;
    }
    if (hdB482)
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
    bool _1536 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1546;
    if (_1536)
    {
        _1546 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1546 = _1536;
    }
    if (_1546)
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
        bool _1571 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1586;
        if (!_1571)
        {
            _1586 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1586 = _1571;
        }
        if (_1586)
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
