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
float _RESERVED_IDENTIFIER_FIXUP_1818;
vec4 _RESERVED_IDENTIFIER_FIXUP_1819;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_666 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_670 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_674 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_678 = hdTex3(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_682 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1481;
    _RESERVED_IDENTIFIER_FIXUP_1481.x = _RESERVED_IDENTIFIER_FIXUP_682.x;
    _RESERVED_IDENTIFIER_FIXUP_1481.y = _RESERVED_IDENTIFIER_FIXUP_682.y;
    float _RESERVED_IDENTIFIER_FIXUP_688 = _RESERVED_IDENTIFIER_FIXUP_682.z;
    _RESERVED_IDENTIFIER_FIXUP_1481.z = _RESERVED_IDENTIFIER_FIXUP_688;
    vec3 _RESERVED_IDENTIFIER_FIXUP_690 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1818).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_693 = _RESERVED_IDENTIFIER_FIXUP_690 + _RESERVED_IDENTIFIER_FIXUP_690;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1487;
    _RESERVED_IDENTIFIER_FIXUP_1487.x = _RESERVED_IDENTIFIER_FIXUP_693.x;
    _RESERVED_IDENTIFIER_FIXUP_1487.y = _RESERVED_IDENTIFIER_FIXUP_693.y;
    _RESERVED_IDENTIFIER_FIXUP_1487.z = _RESERVED_IDENTIFIER_FIXUP_693.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_701 = _RESERVED_IDENTIFIER_FIXUP_666.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_704 = _RESERVED_IDENTIFIER_FIXUP_701 * _RESERVED_IDENTIFIER_FIXUP_1487.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1493;
    _RESERVED_IDENTIFIER_FIXUP_1493.x = _RESERVED_IDENTIFIER_FIXUP_704.x;
    _RESERVED_IDENTIFIER_FIXUP_1493.y = _RESERVED_IDENTIFIER_FIXUP_704.y;
    _RESERVED_IDENTIFIER_FIXUP_1493.z = _RESERVED_IDENTIFIER_FIXUP_704.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_718 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1481.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_719 = mix(_RESERVED_IDENTIFIER_FIXUP_1493.xyz, _RESERVED_IDENTIFIER_FIXUP_701, _RESERVED_IDENTIFIER_FIXUP_718);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1499 = _RESERVED_IDENTIFIER_FIXUP_666;
    _RESERVED_IDENTIFIER_FIXUP_1499.x = _RESERVED_IDENTIFIER_FIXUP_719.x;
    _RESERVED_IDENTIFIER_FIXUP_1499.y = _RESERVED_IDENTIFIER_FIXUP_719.y;
    _RESERVED_IDENTIFIER_FIXUP_1499.z = _RESERVED_IDENTIFIER_FIXUP_719.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_727 = _RESERVED_IDENTIFIER_FIXUP_670.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_730 = _RESERVED_IDENTIFIER_FIXUP_727 * _RESERVED_IDENTIFIER_FIXUP_1487.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1505;
    _RESERVED_IDENTIFIER_FIXUP_1505.x = _RESERVED_IDENTIFIER_FIXUP_730.x;
    _RESERVED_IDENTIFIER_FIXUP_1505.y = _RESERVED_IDENTIFIER_FIXUP_730.y;
    _RESERVED_IDENTIFIER_FIXUP_1505.z = _RESERVED_IDENTIFIER_FIXUP_730.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_744 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1481.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_745 = mix(_RESERVED_IDENTIFIER_FIXUP_1505.xyz, _RESERVED_IDENTIFIER_FIXUP_727, _RESERVED_IDENTIFIER_FIXUP_744);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1511 = _RESERVED_IDENTIFIER_FIXUP_670;
    _RESERVED_IDENTIFIER_FIXUP_1511.x = _RESERVED_IDENTIFIER_FIXUP_745.x;
    _RESERVED_IDENTIFIER_FIXUP_1511.y = _RESERVED_IDENTIFIER_FIXUP_745.y;
    _RESERVED_IDENTIFIER_FIXUP_1511.z = _RESERVED_IDENTIFIER_FIXUP_745.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_753 = _RESERVED_IDENTIFIER_FIXUP_674.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_756 = _RESERVED_IDENTIFIER_FIXUP_753 * _RESERVED_IDENTIFIER_FIXUP_1487.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1828 = vec4(_RESERVED_IDENTIFIER_FIXUP_756.xy, _RESERVED_IDENTIFIER_FIXUP_688, _RESERVED_IDENTIFIER_FIXUP_756.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_771 = mix(_RESERVED_IDENTIFIER_FIXUP_1828.xyw, _RESERVED_IDENTIFIER_FIXUP_753, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1828.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1523 = _RESERVED_IDENTIFIER_FIXUP_674;
    _RESERVED_IDENTIFIER_FIXUP_1523.x = _RESERVED_IDENTIFIER_FIXUP_771.x;
    _RESERVED_IDENTIFIER_FIXUP_1523.y = _RESERVED_IDENTIFIER_FIXUP_771.y;
    _RESERVED_IDENTIFIER_FIXUP_1523.z = _RESERVED_IDENTIFIER_FIXUP_771.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_787 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1499, _RESERVED_IDENTIFIER_FIXUP_1511, _RESERVED_IDENTIFIER_FIXUP_678.xxxx), _RESERVED_IDENTIFIER_FIXUP_1523, _RESERVED_IDENTIFIER_FIXUP_678.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_794 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1629 = _RESERVED_IDENTIFIER_FIXUP_787;
    _RESERVED_IDENTIFIER_FIXUP_1629.x = _RESERVED_IDENTIFIER_FIXUP_787.x;
    _RESERVED_IDENTIFIER_FIXUP_1629.y = _RESERVED_IDENTIFIER_FIXUP_787.y;
    _RESERVED_IDENTIFIER_FIXUP_1629.z = _RESERVED_IDENTIFIER_FIXUP_787.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1026 = _RESERVED_IDENTIFIER_FIXUP_1629.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1635 = _RESERVED_IDENTIFIER_FIXUP_1629;
    _RESERVED_IDENTIFIER_FIXUP_1635.x = _RESERVED_IDENTIFIER_FIXUP_1026.x;
    _RESERVED_IDENTIFIER_FIXUP_1635.y = _RESERVED_IDENTIFIER_FIXUP_1026.y;
    _RESERVED_IDENTIFIER_FIXUP_1635.z = _RESERVED_IDENTIFIER_FIXUP_1026.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1078 = OptTex0( texcoord0.xyz);
    vec2 param_3 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1082 = hdTex1(param_3);
    vec2 param_4 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1086 = hdTex2(param_4);
    vec2 param_5 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1090 = hdTex3(param_5);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1105 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1655;
    _RESERVED_IDENTIFIER_FIXUP_1655.x = _RESERVED_IDENTIFIER_FIXUP_1105.x;
    _RESERVED_IDENTIFIER_FIXUP_1655.y = _RESERVED_IDENTIFIER_FIXUP_1105.y;
    _RESERVED_IDENTIFIER_FIXUP_1655.z = _RESERVED_IDENTIFIER_FIXUP_1105.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1113 = _RESERVED_IDENTIFIER_FIXUP_1078.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1116 = _RESERVED_IDENTIFIER_FIXUP_1113 * _RESERVED_IDENTIFIER_FIXUP_1655.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1661;
    _RESERVED_IDENTIFIER_FIXUP_1661.x = _RESERVED_IDENTIFIER_FIXUP_1116.x;
    _RESERVED_IDENTIFIER_FIXUP_1661.y = _RESERVED_IDENTIFIER_FIXUP_1116.y;
    _RESERVED_IDENTIFIER_FIXUP_1661.z = _RESERVED_IDENTIFIER_FIXUP_1116.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1131 = mix(_RESERVED_IDENTIFIER_FIXUP_1661.xyz, _RESERVED_IDENTIFIER_FIXUP_1113, _RESERVED_IDENTIFIER_FIXUP_718);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1667 = _RESERVED_IDENTIFIER_FIXUP_1078;
    _RESERVED_IDENTIFIER_FIXUP_1667.x = _RESERVED_IDENTIFIER_FIXUP_1131.x;
    _RESERVED_IDENTIFIER_FIXUP_1667.y = _RESERVED_IDENTIFIER_FIXUP_1131.y;
    _RESERVED_IDENTIFIER_FIXUP_1667.z = _RESERVED_IDENTIFIER_FIXUP_1131.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1139 = _RESERVED_IDENTIFIER_FIXUP_1082.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1142 = _RESERVED_IDENTIFIER_FIXUP_1139 * _RESERVED_IDENTIFIER_FIXUP_1655.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1673;
    _RESERVED_IDENTIFIER_FIXUP_1673.x = _RESERVED_IDENTIFIER_FIXUP_1142.x;
    _RESERVED_IDENTIFIER_FIXUP_1673.y = _RESERVED_IDENTIFIER_FIXUP_1142.y;
    _RESERVED_IDENTIFIER_FIXUP_1673.z = _RESERVED_IDENTIFIER_FIXUP_1142.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1157 = mix(_RESERVED_IDENTIFIER_FIXUP_1673.xyz, _RESERVED_IDENTIFIER_FIXUP_1139, _RESERVED_IDENTIFIER_FIXUP_744);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1679 = _RESERVED_IDENTIFIER_FIXUP_1082;
    _RESERVED_IDENTIFIER_FIXUP_1679.x = _RESERVED_IDENTIFIER_FIXUP_1157.x;
    _RESERVED_IDENTIFIER_FIXUP_1679.y = _RESERVED_IDENTIFIER_FIXUP_1157.y;
    _RESERVED_IDENTIFIER_FIXUP_1679.z = _RESERVED_IDENTIFIER_FIXUP_1157.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1165 = _RESERVED_IDENTIFIER_FIXUP_1086.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1168 = _RESERVED_IDENTIFIER_FIXUP_1165 * _RESERVED_IDENTIFIER_FIXUP_1655.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1832 = vec4(_RESERVED_IDENTIFIER_FIXUP_1168.xy, _RESERVED_IDENTIFIER_FIXUP_688, _RESERVED_IDENTIFIER_FIXUP_1168.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1183 = mix(_RESERVED_IDENTIFIER_FIXUP_1832.xyw, _RESERVED_IDENTIFIER_FIXUP_1165, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1832.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1691 = _RESERVED_IDENTIFIER_FIXUP_1086;
    _RESERVED_IDENTIFIER_FIXUP_1691.x = _RESERVED_IDENTIFIER_FIXUP_1183.x;
    _RESERVED_IDENTIFIER_FIXUP_1691.y = _RESERVED_IDENTIFIER_FIXUP_1183.y;
    _RESERVED_IDENTIFIER_FIXUP_1691.z = _RESERVED_IDENTIFIER_FIXUP_1183.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1199 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1667, _RESERVED_IDENTIFIER_FIXUP_1679, _RESERVED_IDENTIFIER_FIXUP_1090.xxxx), _RESERVED_IDENTIFIER_FIXUP_1691, _RESERVED_IDENTIFIER_FIXUP_1090.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1699 = _RESERVED_IDENTIFIER_FIXUP_1679;
    _RESERVED_IDENTIFIER_FIXUP_1699.x = _RESERVED_IDENTIFIER_FIXUP_794;
    float _RESERVED_IDENTIFIER_FIXUP_1212 = clamp((_RESERVED_IDENTIFIER_FIXUP_794 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1699.x = _RESERVED_IDENTIFIER_FIXUP_1212;
    float _RESERVED_IDENTIFIER_FIXUP_1218 = ((-_RESERVED_IDENTIFIER_FIXUP_1212) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1699.y = _RESERVED_IDENTIFIER_FIXUP_1218;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1824;
    if (_RESERVED_IDENTIFIER_FIXUP_1218 != (-_RESERVED_IDENTIFIER_FIXUP_1218))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1230 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1240 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1242 = _RESERVED_IDENTIFIER_FIXUP_1240.x;
        _RESERVED_IDENTIFIER_FIXUP_1699.y = _RESERVED_IDENTIFIER_FIXUP_1242;
        _RESERVED_IDENTIFIER_FIXUP_1699.z = _RESERVED_IDENTIFIER_FIXUP_1240.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1250 = _RESERVED_IDENTIFIER_FIXUP_1699.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1717;
        _RESERVED_IDENTIFIER_FIXUP_1717.x = _RESERVED_IDENTIFIER_FIXUP_1250.x;
        _RESERVED_IDENTIFIER_FIXUP_1717.y = _RESERVED_IDENTIFIER_FIXUP_1250.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1257 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1261 = _RESERVED_IDENTIFIER_FIXUP_1257.y;
        _RESERVED_IDENTIFIER_FIXUP_1717.w = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1230.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1230.w;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1717.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1261;
        float _RESERVED_IDENTIFIER_FIXUP_1272 = hdLod5(param_6, param_7).x + hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1833 = vec4(_RESERVED_IDENTIFIER_FIXUP_1212, _RESERVED_IDENTIFIER_FIXUP_1242, _RESERVED_IDENTIFIER_FIXUP_1240.y, _RESERVED_IDENTIFIER_FIXUP_1272);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1279 = _RESERVED_IDENTIFIER_FIXUP_1833.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1730;
        _RESERVED_IDENTIFIER_FIXUP_1730.x = _RESERVED_IDENTIFIER_FIXUP_1279.x;
        _RESERVED_IDENTIFIER_FIXUP_1730.y = _RESERVED_IDENTIFIER_FIXUP_1279.y;
        _RESERVED_IDENTIFIER_FIXUP_1730.w = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1730.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1261;
        float _RESERVED_IDENTIFIER_FIXUP_1301 = _RESERVED_IDENTIFIER_FIXUP_1272 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1833.w = _RESERVED_IDENTIFIER_FIXUP_1301;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1308 = _RESERVED_IDENTIFIER_FIXUP_1833.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1743;
        _RESERVED_IDENTIFIER_FIXUP_1743.x = _RESERVED_IDENTIFIER_FIXUP_1308.x;
        _RESERVED_IDENTIFIER_FIXUP_1743.y = _RESERVED_IDENTIFIER_FIXUP_1308.y;
        _RESERVED_IDENTIFIER_FIXUP_1743.w = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1743.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1261;
        float _RESERVED_IDENTIFIER_FIXUP_1330 = _RESERVED_IDENTIFIER_FIXUP_1301 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_1833.w = _RESERVED_IDENTIFIER_FIXUP_1330;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1337 = _RESERVED_IDENTIFIER_FIXUP_1833.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1756;
        _RESERVED_IDENTIFIER_FIXUP_1756.x = _RESERVED_IDENTIFIER_FIXUP_1337.x;
        _RESERVED_IDENTIFIER_FIXUP_1756.y = _RESERVED_IDENTIFIER_FIXUP_1337.y;
        _RESERVED_IDENTIFIER_FIXUP_1756.w = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1756.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1261;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1354 = hdLod5(param_14, param_15);
        _RESERVED_IDENTIFIER_FIXUP_1354.x = min((_RESERVED_IDENTIFIER_FIXUP_1212 * (((_RESERVED_IDENTIFIER_FIXUP_1330 + _RESERVED_IDENTIFIER_FIXUP_1354.x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1090.w);
        _RESERVED_IDENTIFIER_FIXUP_1824 = _RESERVED_IDENTIFIER_FIXUP_1354;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1710 = _RESERVED_IDENTIFIER_FIXUP_1691;
        _RESERVED_IDENTIFIER_FIXUP_1710.x = _RESERVED_IDENTIFIER_FIXUP_1090.w;
        _RESERVED_IDENTIFIER_FIXUP_1824 = _RESERVED_IDENTIFIER_FIXUP_1710;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1387 = (_RESERVED_IDENTIFIER_FIXUP_1824.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1834 = vec4(_RESERVED_IDENTIFIER_FIXUP_1387, _RESERVED_IDENTIFIER_FIXUP_1199.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1411 = _RESERVED_IDENTIFIER_FIXUP_1824.xxx * _RESERVED_IDENTIFIER_FIXUP_1834.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1793 = _RESERVED_IDENTIFIER_FIXUP_1834;
    _RESERVED_IDENTIFIER_FIXUP_1793.y = _RESERVED_IDENTIFIER_FIXUP_1411.x;
    _RESERVED_IDENTIFIER_FIXUP_1793.z = _RESERVED_IDENTIFIER_FIXUP_1411.y;
    _RESERVED_IDENTIFIER_FIXUP_1793.w = _RESERVED_IDENTIFIER_FIXUP_1411.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1425 = (_RESERVED_IDENTIFIER_FIXUP_1199.xyz * _RESERVED_IDENTIFIER_FIXUP_1793.xxx) + _RESERVED_IDENTIFIER_FIXUP_1793.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1799 = _RESERVED_IDENTIFIER_FIXUP_1199;
    _RESERVED_IDENTIFIER_FIXUP_1799.x = _RESERVED_IDENTIFIER_FIXUP_1425.x;
    _RESERVED_IDENTIFIER_FIXUP_1799.y = _RESERVED_IDENTIFIER_FIXUP_1425.y;
    _RESERVED_IDENTIFIER_FIXUP_1799.z = _RESERVED_IDENTIFIER_FIXUP_1425.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1438 = _RESERVED_IDENTIFIER_FIXUP_1799.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1805 = _RESERVED_IDENTIFIER_FIXUP_1799;
    _RESERVED_IDENTIFIER_FIXUP_1805.x = _RESERVED_IDENTIFIER_FIXUP_1438.x;
    _RESERVED_IDENTIFIER_FIXUP_1805.y = _RESERVED_IDENTIFIER_FIXUP_1438.y;
    _RESERVED_IDENTIFIER_FIXUP_1805.z = _RESERVED_IDENTIFIER_FIXUP_1438.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1805.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_529 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_538;
    if (_RESERVED_IDENTIFIER_FIXUP_529)
    {
        _RESERVED_IDENTIFIER_FIXUP_538 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_538 = _RESERVED_IDENTIFIER_FIXUP_529;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_538)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_575 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1635.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_601 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1473;
    if (_RESERVED_IDENTIFIER_FIXUP_575 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1473 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_575), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_601);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1473 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_601);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1473;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1387);
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
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
        vec2 hdB250 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB250.x;
        r1.z = hdB250.y;
        vec2 hdB261 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = hdB261.x;
        r4.y = hdB261.y;
        vec2 hdB269 = vec2(1.0, 0.0) * v5.zx;
        r4.z = hdB269.x;
        r4.w = hdB269.y;
        vec2 param_5 = r4.xy;
        float param_6 = r4.w;
        r4 = hdLod5(param_5, param_6);
        r1.w = r2.x + r4.x;
        vec2 hdB292 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB292.x;
        r2.y = hdB292.y;
        vec2 hdB299 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB299.x;
        r2.w = hdB299.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.w += r2.x;
        vec2 hdB322 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB322.x;
        r2.y = hdB322.y;
        vec2 hdB329 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB329.x;
        r2.w = hdB329.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.w += r2.x;
        vec2 hdB352 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB352.x;
        r2.y = hdB352.y;
        vec2 hdB359 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB359.x;
        r2.w = hdB359.y;
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
    vec3 hdB411 = r0.www * v1.xyz;
    r1.y = hdB411.x;
    r1.z = hdB411.y;
    r1.w = hdB411.z;
    vec4 hdB420 = r1;
    vec3 hdB422 = r2.xxx * hdB420.yzw;
    r1.y = hdB422.x;
    r1.z = hdB422.y;
    r1.w = hdB422.z;
    vec4 hdB429 = r0;
    vec3 hdB436 = (hdB429.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB436.x;
    r0.y = hdB436.y;
    r0.z = hdB436.z;
    vec4 hdB443 = r0;
    vec3 hdB450 = hdB443.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB450.x;
    r0.y = hdB450.y;
    r0.z = hdB450.z;
    vec3 hdB465 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB465.x;
    oC0.y = hdB465.y;
    oC0.z = hdB465.z;
    oC0.w = 1.0;
    bool hdB477 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB485;
    if (hdB477)
    {
        hdB485 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB485 = hdB477;
    }
    if (hdB485)
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
    bool _1510 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1520;
    if (_1510)
    {
        _1520 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 46u) != 0u;
    }
    else
    {
        _1520 = _1510;
    }
    if (_1520)
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
        bool _1545 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1560;
        if (!_1545)
        {
            _1560 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 46u) != 0u;
        }
        else
        {
            _1560 = _1545;
        }
        if (_1560)
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
