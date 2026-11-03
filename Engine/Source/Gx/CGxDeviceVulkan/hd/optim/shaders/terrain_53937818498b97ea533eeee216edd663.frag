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
float _RESERVED_IDENTIFIER_FIXUP_1894;
vec4 _RESERVED_IDENTIFIER_FIXUP_1895;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_684 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_688 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_692 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_696 = hdTex3(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_700 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1535 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1535.x = _RESERVED_IDENTIFIER_FIXUP_700.x;
    _RESERVED_IDENTIFIER_FIXUP_1535.y = _RESERVED_IDENTIFIER_FIXUP_700.y;
    float _RESERVED_IDENTIFIER_FIXUP_706 = _RESERVED_IDENTIFIER_FIXUP_700.z;
    _RESERVED_IDENTIFIER_FIXUP_1535.z = _RESERVED_IDENTIFIER_FIXUP_706;
    vec3 _RESERVED_IDENTIFIER_FIXUP_708 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1894).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_711 = _RESERVED_IDENTIFIER_FIXUP_708 + _RESERVED_IDENTIFIER_FIXUP_708;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1541 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1541.x = _RESERVED_IDENTIFIER_FIXUP_711.x;
    _RESERVED_IDENTIFIER_FIXUP_1541.y = _RESERVED_IDENTIFIER_FIXUP_711.y;
    _RESERVED_IDENTIFIER_FIXUP_1541.z = _RESERVED_IDENTIFIER_FIXUP_711.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_719 = _RESERVED_IDENTIFIER_FIXUP_684.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_722 = _RESERVED_IDENTIFIER_FIXUP_719 * _RESERVED_IDENTIFIER_FIXUP_1541.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1547 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1547.x = _RESERVED_IDENTIFIER_FIXUP_722.x;
    _RESERVED_IDENTIFIER_FIXUP_1547.y = _RESERVED_IDENTIFIER_FIXUP_722.y;
    _RESERVED_IDENTIFIER_FIXUP_1547.z = _RESERVED_IDENTIFIER_FIXUP_722.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_736 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1535.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_737 = mix(_RESERVED_IDENTIFIER_FIXUP_1547.xyz, _RESERVED_IDENTIFIER_FIXUP_719, _RESERVED_IDENTIFIER_FIXUP_736);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1553 = _RESERVED_IDENTIFIER_FIXUP_684;
    _RESERVED_IDENTIFIER_FIXUP_1553.x = _RESERVED_IDENTIFIER_FIXUP_737.x;
    _RESERVED_IDENTIFIER_FIXUP_1553.y = _RESERVED_IDENTIFIER_FIXUP_737.y;
    _RESERVED_IDENTIFIER_FIXUP_1553.z = _RESERVED_IDENTIFIER_FIXUP_737.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_745 = _RESERVED_IDENTIFIER_FIXUP_688.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_748 = _RESERVED_IDENTIFIER_FIXUP_745 * _RESERVED_IDENTIFIER_FIXUP_1541.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1547.x = _RESERVED_IDENTIFIER_FIXUP_748.x;
    _RESERVED_IDENTIFIER_FIXUP_1547.y = _RESERVED_IDENTIFIER_FIXUP_748.y;
    _RESERVED_IDENTIFIER_FIXUP_1547.z = _RESERVED_IDENTIFIER_FIXUP_748.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_762 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1535.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_763 = mix(_RESERVED_IDENTIFIER_FIXUP_1547.xyz, _RESERVED_IDENTIFIER_FIXUP_745, _RESERVED_IDENTIFIER_FIXUP_762);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1565 = _RESERVED_IDENTIFIER_FIXUP_688;
    _RESERVED_IDENTIFIER_FIXUP_1565.x = _RESERVED_IDENTIFIER_FIXUP_763.x;
    _RESERVED_IDENTIFIER_FIXUP_1565.y = _RESERVED_IDENTIFIER_FIXUP_763.y;
    _RESERVED_IDENTIFIER_FIXUP_1565.z = _RESERVED_IDENTIFIER_FIXUP_763.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_771 = _RESERVED_IDENTIFIER_FIXUP_692.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_774 = _RESERVED_IDENTIFIER_FIXUP_771 * _RESERVED_IDENTIFIER_FIXUP_1541.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1904 = vec4(_RESERVED_IDENTIFIER_FIXUP_774.xy, _RESERVED_IDENTIFIER_FIXUP_706, _RESERVED_IDENTIFIER_FIXUP_774.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_789 = mix(_RESERVED_IDENTIFIER_FIXUP_1904.xyw, _RESERVED_IDENTIFIER_FIXUP_771, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1904.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1577 = _RESERVED_IDENTIFIER_FIXUP_692;
    _RESERVED_IDENTIFIER_FIXUP_1577.x = _RESERVED_IDENTIFIER_FIXUP_789.x;
    _RESERVED_IDENTIFIER_FIXUP_1577.y = _RESERVED_IDENTIFIER_FIXUP_789.y;
    _RESERVED_IDENTIFIER_FIXUP_1577.z = _RESERVED_IDENTIFIER_FIXUP_789.z;
    float _RESERVED_IDENTIFIER_FIXUP_799 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_696.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1583 = _RESERVED_IDENTIFIER_FIXUP_696;
    _RESERVED_IDENTIFIER_FIXUP_1583.z = _RESERVED_IDENTIFIER_FIXUP_799;
    _RESERVED_IDENTIFIER_FIXUP_1583.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_799;
    vec4 _RESERVED_IDENTIFIER_FIXUP_821 = (_RESERVED_IDENTIFIER_FIXUP_1577 * _RESERVED_IDENTIFIER_FIXUP_1583.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1553 * _RESERVED_IDENTIFIER_FIXUP_1583.zzzz) + (_RESERVED_IDENTIFIER_FIXUP_1583.xxxx * _RESERVED_IDENTIFIER_FIXUP_1565));
    float _RESERVED_IDENTIFIER_FIXUP_828 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1694 = _RESERVED_IDENTIFIER_FIXUP_821;
    _RESERVED_IDENTIFIER_FIXUP_1694.x = _RESERVED_IDENTIFIER_FIXUP_821.x;
    _RESERVED_IDENTIFIER_FIXUP_1694.y = _RESERVED_IDENTIFIER_FIXUP_821.y;
    _RESERVED_IDENTIFIER_FIXUP_1694.z = _RESERVED_IDENTIFIER_FIXUP_821.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1062 = _RESERVED_IDENTIFIER_FIXUP_1694.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1700 = _RESERVED_IDENTIFIER_FIXUP_1694;
    _RESERVED_IDENTIFIER_FIXUP_1700.x = _RESERVED_IDENTIFIER_FIXUP_1062.x;
    _RESERVED_IDENTIFIER_FIXUP_1700.y = _RESERVED_IDENTIFIER_FIXUP_1062.y;
    _RESERVED_IDENTIFIER_FIXUP_1700.z = _RESERVED_IDENTIFIER_FIXUP_1062.z;
    vec2 param_4 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1115 = hdTex0(param_4);
    vec2 param_5 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1119 = hdTex1(param_5);
    vec2 param_6 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1123 = hdTex2(param_6);
    vec2 param_7 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1127 = hdTex3(param_7);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1142 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1720 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1720.x = _RESERVED_IDENTIFIER_FIXUP_1142.x;
    _RESERVED_IDENTIFIER_FIXUP_1720.y = _RESERVED_IDENTIFIER_FIXUP_1142.y;
    _RESERVED_IDENTIFIER_FIXUP_1720.z = _RESERVED_IDENTIFIER_FIXUP_1142.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1150 = _RESERVED_IDENTIFIER_FIXUP_1115.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1153 = _RESERVED_IDENTIFIER_FIXUP_1150 * _RESERVED_IDENTIFIER_FIXUP_1720.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1726 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1726.x = _RESERVED_IDENTIFIER_FIXUP_1153.x;
    _RESERVED_IDENTIFIER_FIXUP_1726.y = _RESERVED_IDENTIFIER_FIXUP_1153.y;
    _RESERVED_IDENTIFIER_FIXUP_1726.z = _RESERVED_IDENTIFIER_FIXUP_1153.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1168 = mix(_RESERVED_IDENTIFIER_FIXUP_1726.xyz, _RESERVED_IDENTIFIER_FIXUP_1150, _RESERVED_IDENTIFIER_FIXUP_736);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1732 = _RESERVED_IDENTIFIER_FIXUP_1115;
    _RESERVED_IDENTIFIER_FIXUP_1732.x = _RESERVED_IDENTIFIER_FIXUP_1168.x;
    _RESERVED_IDENTIFIER_FIXUP_1732.y = _RESERVED_IDENTIFIER_FIXUP_1168.y;
    _RESERVED_IDENTIFIER_FIXUP_1732.z = _RESERVED_IDENTIFIER_FIXUP_1168.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1176 = _RESERVED_IDENTIFIER_FIXUP_1119.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1179 = _RESERVED_IDENTIFIER_FIXUP_1176 * _RESERVED_IDENTIFIER_FIXUP_1720.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1726.x = _RESERVED_IDENTIFIER_FIXUP_1179.x;
    _RESERVED_IDENTIFIER_FIXUP_1726.y = _RESERVED_IDENTIFIER_FIXUP_1179.y;
    _RESERVED_IDENTIFIER_FIXUP_1726.z = _RESERVED_IDENTIFIER_FIXUP_1179.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1194 = mix(_RESERVED_IDENTIFIER_FIXUP_1726.xyz, _RESERVED_IDENTIFIER_FIXUP_1176, _RESERVED_IDENTIFIER_FIXUP_762);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1744 = _RESERVED_IDENTIFIER_FIXUP_1119;
    _RESERVED_IDENTIFIER_FIXUP_1744.x = _RESERVED_IDENTIFIER_FIXUP_1194.x;
    _RESERVED_IDENTIFIER_FIXUP_1744.y = _RESERVED_IDENTIFIER_FIXUP_1194.y;
    _RESERVED_IDENTIFIER_FIXUP_1744.z = _RESERVED_IDENTIFIER_FIXUP_1194.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1202 = _RESERVED_IDENTIFIER_FIXUP_1123.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1205 = _RESERVED_IDENTIFIER_FIXUP_1202 * _RESERVED_IDENTIFIER_FIXUP_1720.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1907 = vec4(_RESERVED_IDENTIFIER_FIXUP_1205.xy, _RESERVED_IDENTIFIER_FIXUP_706, _RESERVED_IDENTIFIER_FIXUP_1205.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1220 = mix(_RESERVED_IDENTIFIER_FIXUP_1907.xyw, _RESERVED_IDENTIFIER_FIXUP_1202, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1907.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1756 = _RESERVED_IDENTIFIER_FIXUP_1123;
    _RESERVED_IDENTIFIER_FIXUP_1756.x = _RESERVED_IDENTIFIER_FIXUP_1220.x;
    _RESERVED_IDENTIFIER_FIXUP_1756.y = _RESERVED_IDENTIFIER_FIXUP_1220.y;
    _RESERVED_IDENTIFIER_FIXUP_1756.z = _RESERVED_IDENTIFIER_FIXUP_1220.z;
    float _RESERVED_IDENTIFIER_FIXUP_1230 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1127.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1762 = _RESERVED_IDENTIFIER_FIXUP_1127;
    _RESERVED_IDENTIFIER_FIXUP_1762.z = _RESERVED_IDENTIFIER_FIXUP_1230;
    _RESERVED_IDENTIFIER_FIXUP_1762.z = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1230;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1240 = _RESERVED_IDENTIFIER_FIXUP_1762.xxxx * _RESERVED_IDENTIFIER_FIXUP_1744;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1252 = (_RESERVED_IDENTIFIER_FIXUP_1756 * _RESERVED_IDENTIFIER_FIXUP_1762.yyyy) + ((_RESERVED_IDENTIFIER_FIXUP_1732 * _RESERVED_IDENTIFIER_FIXUP_1762.zzzz) + _RESERVED_IDENTIFIER_FIXUP_1240);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1769 = _RESERVED_IDENTIFIER_FIXUP_1240;
    _RESERVED_IDENTIFIER_FIXUP_1769.x = _RESERVED_IDENTIFIER_FIXUP_828;
    float _RESERVED_IDENTIFIER_FIXUP_1265 = clamp((_RESERVED_IDENTIFIER_FIXUP_828 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1769.x = _RESERVED_IDENTIFIER_FIXUP_1265;
    float _RESERVED_IDENTIFIER_FIXUP_1271 = ((-_RESERVED_IDENTIFIER_FIXUP_1265) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1769.y = _RESERVED_IDENTIFIER_FIXUP_1271;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1900;
    if (_RESERVED_IDENTIFIER_FIXUP_1271 != (-_RESERVED_IDENTIFIER_FIXUP_1271))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1283 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1769.y = _RESERVED_IDENTIFIER_FIXUP_1283.x;
        _RESERVED_IDENTIFIER_FIXUP_1769.z = _RESERVED_IDENTIFIER_FIXUP_1283.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1293 = _RESERVED_IDENTIFIER_FIXUP_1769.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1786;
        _RESERVED_IDENTIFIER_FIXUP_1786.x = _RESERVED_IDENTIFIER_FIXUP_1293.x;
        _RESERVED_IDENTIFIER_FIXUP_1786.y = _RESERVED_IDENTIFIER_FIXUP_1293.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1303 = _RESERVED_IDENTIFIER_FIXUP_1769.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1790;
        _RESERVED_IDENTIFIER_FIXUP_1790.x = _RESERVED_IDENTIFIER_FIXUP_1303.x;
        _RESERVED_IDENTIFIER_FIXUP_1790.y = _RESERVED_IDENTIFIER_FIXUP_1303.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1313 = _RESERVED_IDENTIFIER_FIXUP_1769.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1794;
        _RESERVED_IDENTIFIER_FIXUP_1794.x = _RESERVED_IDENTIFIER_FIXUP_1313.x;
        _RESERVED_IDENTIFIER_FIXUP_1794.y = _RESERVED_IDENTIFIER_FIXUP_1313.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1323 = _RESERVED_IDENTIFIER_FIXUP_1769.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1798;
        _RESERVED_IDENTIFIER_FIXUP_1798.x = _RESERVED_IDENTIFIER_FIXUP_1323.x;
        _RESERVED_IDENTIFIER_FIXUP_1798.y = _RESERVED_IDENTIFIER_FIXUP_1323.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1331 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1331.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1331.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1337 = hdLod5(param_8, param_9);
        _RESERVED_IDENTIFIER_FIXUP_1786.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1790.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1794.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1798.w = 0.0;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1786.xy;
        float param_11 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1337.y = hdLod5(param_10, param_11).x;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1790.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1337.z = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1794.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1337.w = hdLod5(param_14, param_15).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1394 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1337 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1798.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1394.x = min((_RESERVED_IDENTIFIER_FIXUP_1265 * (((float((hdLod5(param_16, param_17).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1394, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1127.w);
        _RESERVED_IDENTIFIER_FIXUP_1900 = _RESERVED_IDENTIFIER_FIXUP_1394;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1780 = _RESERVED_IDENTIFIER_FIXUP_1756;
        _RESERVED_IDENTIFIER_FIXUP_1780.x = _RESERVED_IDENTIFIER_FIXUP_1127.w;
        _RESERVED_IDENTIFIER_FIXUP_1900 = _RESERVED_IDENTIFIER_FIXUP_1780;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1442 = (_RESERVED_IDENTIFIER_FIXUP_1900.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1908 = vec4(_RESERVED_IDENTIFIER_FIXUP_1442, _RESERVED_IDENTIFIER_FIXUP_1252.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1466 = _RESERVED_IDENTIFIER_FIXUP_1900.xxx * _RESERVED_IDENTIFIER_FIXUP_1908.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1869 = _RESERVED_IDENTIFIER_FIXUP_1908;
    _RESERVED_IDENTIFIER_FIXUP_1869.y = _RESERVED_IDENTIFIER_FIXUP_1466.x;
    _RESERVED_IDENTIFIER_FIXUP_1869.z = _RESERVED_IDENTIFIER_FIXUP_1466.y;
    _RESERVED_IDENTIFIER_FIXUP_1869.w = _RESERVED_IDENTIFIER_FIXUP_1466.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1480 = (_RESERVED_IDENTIFIER_FIXUP_1252.xyz * _RESERVED_IDENTIFIER_FIXUP_1869.xxx) + _RESERVED_IDENTIFIER_FIXUP_1869.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1875 = _RESERVED_IDENTIFIER_FIXUP_1252;
    _RESERVED_IDENTIFIER_FIXUP_1875.x = _RESERVED_IDENTIFIER_FIXUP_1480.x;
    _RESERVED_IDENTIFIER_FIXUP_1875.y = _RESERVED_IDENTIFIER_FIXUP_1480.y;
    _RESERVED_IDENTIFIER_FIXUP_1875.z = _RESERVED_IDENTIFIER_FIXUP_1480.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1493 = _RESERVED_IDENTIFIER_FIXUP_1875.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1881 = _RESERVED_IDENTIFIER_FIXUP_1875;
    _RESERVED_IDENTIFIER_FIXUP_1881.x = _RESERVED_IDENTIFIER_FIXUP_1493.x;
    _RESERVED_IDENTIFIER_FIXUP_1881.y = _RESERVED_IDENTIFIER_FIXUP_1493.y;
    _RESERVED_IDENTIFIER_FIXUP_1881.z = _RESERVED_IDENTIFIER_FIXUP_1493.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1881.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_547 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_556;
    if (_RESERVED_IDENTIFIER_FIXUP_547)
    {
        _RESERVED_IDENTIFIER_FIXUP_556 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_556 = _RESERVED_IDENTIFIER_FIXUP_547;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_556)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_593 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1700.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_619 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1528;
    if (_RESERVED_IDENTIFIER_FIXUP_593 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1528 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_593), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_619);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1528 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_619);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1528;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1442);
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
        vec2 hdB252 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB252.x;
        r1.z = hdB252.y;
        vec2 hdB263 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB263.x;
        r2.y = hdB263.y;
        vec2 hdB274 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = hdB274.x;
        r4.y = hdB274.y;
        vec2 hdB285 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB285.x;
        r5.y = hdB285.y;
        vec2 hdB296 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB296.x;
        r6.y = hdB296.y;
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
    vec3 hdB429 = r0.www * v1.xyz;
    r1.y = hdB429.x;
    r1.z = hdB429.y;
    r1.w = hdB429.z;
    vec4 hdB438 = r1;
    vec3 hdB440 = r2.xxx * hdB438.yzw;
    r1.y = hdB440.x;
    r1.z = hdB440.y;
    r1.w = hdB440.z;
    vec4 hdB447 = r0;
    vec3 hdB454 = (hdB447.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB454.x;
    r0.y = hdB454.y;
    r0.z = hdB454.z;
    vec4 hdB461 = r0;
    vec3 hdB468 = hdB461.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB468.x;
    r0.y = hdB468.y;
    r0.z = hdB468.z;
    vec3 hdB483 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB483.x;
    oC0.y = hdB483.y;
    oC0.z = hdB483.z;
    oC0.w = 1.0;
    bool hdB495 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB503;
    if (hdB495)
    {
        hdB503 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB503 = hdB495;
    }
    if (hdB503)
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
    bool _1548 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1558;
    if (_1548)
    {
        _1558 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 47u) != 0u;
    }
    else
    {
        _1558 = _1548;
    }
    if (_1558)
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
        bool _1583 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1598;
        if (!_1583)
        {
            _1598 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 47u) != 0u;
        }
        else
        {
            _1598 = _1583;
        }
        if (_1598)
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
