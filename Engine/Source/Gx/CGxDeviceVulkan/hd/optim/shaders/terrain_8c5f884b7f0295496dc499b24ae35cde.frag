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
float _RESERVED_IDENTIFIER_FIXUP_1933;
vec4 _RESERVED_IDENTIFIER_FIXUP_1934;


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
    vec4 _RESERVED_IDENTIFIER_FIXUP_696 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_700 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_704 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_708 = hdTex3(param_3);
    vec2 param_4 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_712 = hdTex4(param_4);
    vec4 _RESERVED_IDENTIFIER_FIXUP_715 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _RESERVED_IDENTIFIER_FIXUP_717 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1933).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_720 = _RESERVED_IDENTIFIER_FIXUP_717 + _RESERVED_IDENTIFIER_FIXUP_717;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1572 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1572.x = _RESERVED_IDENTIFIER_FIXUP_720.x;
    _RESERVED_IDENTIFIER_FIXUP_1572.y = _RESERVED_IDENTIFIER_FIXUP_720.y;
    _RESERVED_IDENTIFIER_FIXUP_1572.z = _RESERVED_IDENTIFIER_FIXUP_720.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_728 = _RESERVED_IDENTIFIER_FIXUP_696.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_731 = _RESERVED_IDENTIFIER_FIXUP_728 * _RESERVED_IDENTIFIER_FIXUP_1572.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1578;
    _RESERVED_IDENTIFIER_FIXUP_1578.x = _RESERVED_IDENTIFIER_FIXUP_731.x;
    _RESERVED_IDENTIFIER_FIXUP_1578.y = _RESERVED_IDENTIFIER_FIXUP_731.y;
    _RESERVED_IDENTIFIER_FIXUP_1578.z = _RESERVED_IDENTIFIER_FIXUP_731.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_745 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_715.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_746 = mix(_RESERVED_IDENTIFIER_FIXUP_1578.xyz, _RESERVED_IDENTIFIER_FIXUP_728, _RESERVED_IDENTIFIER_FIXUP_745);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1584 = _RESERVED_IDENTIFIER_FIXUP_696;
    _RESERVED_IDENTIFIER_FIXUP_1584.x = _RESERVED_IDENTIFIER_FIXUP_746.x;
    _RESERVED_IDENTIFIER_FIXUP_1584.y = _RESERVED_IDENTIFIER_FIXUP_746.y;
    _RESERVED_IDENTIFIER_FIXUP_1584.z = _RESERVED_IDENTIFIER_FIXUP_746.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_754 = _RESERVED_IDENTIFIER_FIXUP_700.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_757 = _RESERVED_IDENTIFIER_FIXUP_754 * _RESERVED_IDENTIFIER_FIXUP_1572.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1590;
    _RESERVED_IDENTIFIER_FIXUP_1590.x = _RESERVED_IDENTIFIER_FIXUP_757.x;
    _RESERVED_IDENTIFIER_FIXUP_1590.y = _RESERVED_IDENTIFIER_FIXUP_757.y;
    _RESERVED_IDENTIFIER_FIXUP_1590.z = _RESERVED_IDENTIFIER_FIXUP_757.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_771 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_715.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_772 = mix(_RESERVED_IDENTIFIER_FIXUP_1590.xyz, _RESERVED_IDENTIFIER_FIXUP_754, _RESERVED_IDENTIFIER_FIXUP_771);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1596 = _RESERVED_IDENTIFIER_FIXUP_700;
    _RESERVED_IDENTIFIER_FIXUP_1596.x = _RESERVED_IDENTIFIER_FIXUP_772.x;
    _RESERVED_IDENTIFIER_FIXUP_1596.y = _RESERVED_IDENTIFIER_FIXUP_772.y;
    _RESERVED_IDENTIFIER_FIXUP_1596.z = _RESERVED_IDENTIFIER_FIXUP_772.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_780 = _RESERVED_IDENTIFIER_FIXUP_704.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_783 = _RESERVED_IDENTIFIER_FIXUP_780 * _RESERVED_IDENTIFIER_FIXUP_1572.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1602;
    _RESERVED_IDENTIFIER_FIXUP_1602.x = _RESERVED_IDENTIFIER_FIXUP_783.x;
    _RESERVED_IDENTIFIER_FIXUP_1602.y = _RESERVED_IDENTIFIER_FIXUP_783.y;
    _RESERVED_IDENTIFIER_FIXUP_1602.z = _RESERVED_IDENTIFIER_FIXUP_783.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_797 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_715.zzz, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_798 = mix(_RESERVED_IDENTIFIER_FIXUP_1602.xyz, _RESERVED_IDENTIFIER_FIXUP_780, _RESERVED_IDENTIFIER_FIXUP_797);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1608 = _RESERVED_IDENTIFIER_FIXUP_704;
    _RESERVED_IDENTIFIER_FIXUP_1608.x = _RESERVED_IDENTIFIER_FIXUP_798.x;
    _RESERVED_IDENTIFIER_FIXUP_1608.y = _RESERVED_IDENTIFIER_FIXUP_798.y;
    _RESERVED_IDENTIFIER_FIXUP_1608.z = _RESERVED_IDENTIFIER_FIXUP_798.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_806 = _RESERVED_IDENTIFIER_FIXUP_708.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_809 = _RESERVED_IDENTIFIER_FIXUP_806 * _RESERVED_IDENTIFIER_FIXUP_1572.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1614 = _RESERVED_IDENTIFIER_FIXUP_715;
    _RESERVED_IDENTIFIER_FIXUP_1614.x = _RESERVED_IDENTIFIER_FIXUP_809.x;
    _RESERVED_IDENTIFIER_FIXUP_1614.y = _RESERVED_IDENTIFIER_FIXUP_809.y;
    _RESERVED_IDENTIFIER_FIXUP_1614.z = _RESERVED_IDENTIFIER_FIXUP_809.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_824 = mix(_RESERVED_IDENTIFIER_FIXUP_1614.xyz, _RESERVED_IDENTIFIER_FIXUP_806, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1614.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1620 = _RESERVED_IDENTIFIER_FIXUP_708;
    _RESERVED_IDENTIFIER_FIXUP_1620.x = _RESERVED_IDENTIFIER_FIXUP_824.x;
    _RESERVED_IDENTIFIER_FIXUP_1620.y = _RESERVED_IDENTIFIER_FIXUP_824.y;
    _RESERVED_IDENTIFIER_FIXUP_1620.z = _RESERVED_IDENTIFIER_FIXUP_824.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_845 = mix(mix(mix(_RESERVED_IDENTIFIER_FIXUP_1584, _RESERVED_IDENTIFIER_FIXUP_1596, _RESERVED_IDENTIFIER_FIXUP_712.xxxx), _RESERVED_IDENTIFIER_FIXUP_1608, _RESERVED_IDENTIFIER_FIXUP_712.yyyy), _RESERVED_IDENTIFIER_FIXUP_1620, _RESERVED_IDENTIFIER_FIXUP_712.zzzz);
    float _RESERVED_IDENTIFIER_FIXUP_852 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1942 = vec4(_RESERVED_IDENTIFIER_FIXUP_845.x, 0.0, 0.0, 0.0);
    _RESERVED_IDENTIFIER_FIXUP_1942.y = _RESERVED_IDENTIFIER_FIXUP_845.y;
    _RESERVED_IDENTIFIER_FIXUP_1942.z = _RESERVED_IDENTIFIER_FIXUP_845.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1086 = _RESERVED_IDENTIFIER_FIXUP_1942.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1738 = _RESERVED_IDENTIFIER_FIXUP_1942;
    _RESERVED_IDENTIFIER_FIXUP_1738.x = _RESERVED_IDENTIFIER_FIXUP_1086.x;
    _RESERVED_IDENTIFIER_FIXUP_1738.y = _RESERVED_IDENTIFIER_FIXUP_1086.y;
    _RESERVED_IDENTIFIER_FIXUP_1738.z = _RESERVED_IDENTIFIER_FIXUP_1086.z;
    vec2 param_5 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1139 = hdTex0(param_5);
    vec2 param_6 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1143 = hdTex1(param_6);
    vec2 param_7 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1147 = hdTex2(param_7);
    vec2 param_8 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1151 = hdTex3(param_8);
    vec2 param_9 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1155 = hdTex4(param_9);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1163 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1752 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_1752.x = _RESERVED_IDENTIFIER_FIXUP_1163.x;
    _RESERVED_IDENTIFIER_FIXUP_1752.y = _RESERVED_IDENTIFIER_FIXUP_1163.y;
    _RESERVED_IDENTIFIER_FIXUP_1752.z = _RESERVED_IDENTIFIER_FIXUP_1163.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1171 = _RESERVED_IDENTIFIER_FIXUP_1139.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1171 * _RESERVED_IDENTIFIER_FIXUP_1752.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1758;
    _RESERVED_IDENTIFIER_FIXUP_1758.x = _RESERVED_IDENTIFIER_FIXUP_1174.x;
    _RESERVED_IDENTIFIER_FIXUP_1758.y = _RESERVED_IDENTIFIER_FIXUP_1174.y;
    _RESERVED_IDENTIFIER_FIXUP_1758.z = _RESERVED_IDENTIFIER_FIXUP_1174.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1189 = mix(_RESERVED_IDENTIFIER_FIXUP_1758.xyz, _RESERVED_IDENTIFIER_FIXUP_1171, _RESERVED_IDENTIFIER_FIXUP_745);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1764 = _RESERVED_IDENTIFIER_FIXUP_1139;
    _RESERVED_IDENTIFIER_FIXUP_1764.x = _RESERVED_IDENTIFIER_FIXUP_1189.x;
    _RESERVED_IDENTIFIER_FIXUP_1764.y = _RESERVED_IDENTIFIER_FIXUP_1189.y;
    _RESERVED_IDENTIFIER_FIXUP_1764.z = _RESERVED_IDENTIFIER_FIXUP_1189.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1197 = _RESERVED_IDENTIFIER_FIXUP_1143.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1200 = _RESERVED_IDENTIFIER_FIXUP_1197 * _RESERVED_IDENTIFIER_FIXUP_1752.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1770;
    _RESERVED_IDENTIFIER_FIXUP_1770.x = _RESERVED_IDENTIFIER_FIXUP_1200.x;
    _RESERVED_IDENTIFIER_FIXUP_1770.y = _RESERVED_IDENTIFIER_FIXUP_1200.y;
    _RESERVED_IDENTIFIER_FIXUP_1770.z = _RESERVED_IDENTIFIER_FIXUP_1200.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1215 = mix(_RESERVED_IDENTIFIER_FIXUP_1770.xyz, _RESERVED_IDENTIFIER_FIXUP_1197, _RESERVED_IDENTIFIER_FIXUP_771);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1776 = _RESERVED_IDENTIFIER_FIXUP_1143;
    _RESERVED_IDENTIFIER_FIXUP_1776.x = _RESERVED_IDENTIFIER_FIXUP_1215.x;
    _RESERVED_IDENTIFIER_FIXUP_1776.y = _RESERVED_IDENTIFIER_FIXUP_1215.y;
    _RESERVED_IDENTIFIER_FIXUP_1776.z = _RESERVED_IDENTIFIER_FIXUP_1215.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1223 = _RESERVED_IDENTIFIER_FIXUP_1147.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1226 = _RESERVED_IDENTIFIER_FIXUP_1223 * _RESERVED_IDENTIFIER_FIXUP_1752.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1782;
    _RESERVED_IDENTIFIER_FIXUP_1782.x = _RESERVED_IDENTIFIER_FIXUP_1226.x;
    _RESERVED_IDENTIFIER_FIXUP_1782.y = _RESERVED_IDENTIFIER_FIXUP_1226.y;
    _RESERVED_IDENTIFIER_FIXUP_1782.z = _RESERVED_IDENTIFIER_FIXUP_1226.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1241 = mix(_RESERVED_IDENTIFIER_FIXUP_1782.xyz, _RESERVED_IDENTIFIER_FIXUP_1223, _RESERVED_IDENTIFIER_FIXUP_797);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1788 = _RESERVED_IDENTIFIER_FIXUP_1147;
    _RESERVED_IDENTIFIER_FIXUP_1788.x = _RESERVED_IDENTIFIER_FIXUP_1241.x;
    _RESERVED_IDENTIFIER_FIXUP_1788.y = _RESERVED_IDENTIFIER_FIXUP_1241.y;
    _RESERVED_IDENTIFIER_FIXUP_1788.z = _RESERVED_IDENTIFIER_FIXUP_1241.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1249 = _RESERVED_IDENTIFIER_FIXUP_1151.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1252 = _RESERVED_IDENTIFIER_FIXUP_1249 * _RESERVED_IDENTIFIER_FIXUP_1752.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1794 = _RESERVED_IDENTIFIER_FIXUP_715;
    _RESERVED_IDENTIFIER_FIXUP_1794.x = _RESERVED_IDENTIFIER_FIXUP_1252.x;
    _RESERVED_IDENTIFIER_FIXUP_1794.y = _RESERVED_IDENTIFIER_FIXUP_1252.y;
    _RESERVED_IDENTIFIER_FIXUP_1794.z = _RESERVED_IDENTIFIER_FIXUP_1252.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1267 = mix(_RESERVED_IDENTIFIER_FIXUP_1794.xyz, _RESERVED_IDENTIFIER_FIXUP_1249, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1794.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1800 = _RESERVED_IDENTIFIER_FIXUP_1151;
    _RESERVED_IDENTIFIER_FIXUP_1800.x = _RESERVED_IDENTIFIER_FIXUP_1267.x;
    _RESERVED_IDENTIFIER_FIXUP_1800.y = _RESERVED_IDENTIFIER_FIXUP_1267.y;
    _RESERVED_IDENTIFIER_FIXUP_1800.z = _RESERVED_IDENTIFIER_FIXUP_1267.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1283 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_1764, _RESERVED_IDENTIFIER_FIXUP_1776, _RESERVED_IDENTIFIER_FIXUP_1155.xxxx), _RESERVED_IDENTIFIER_FIXUP_1788, _RESERVED_IDENTIFIER_FIXUP_1155.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1288 = mix(_RESERVED_IDENTIFIER_FIXUP_1283, _RESERVED_IDENTIFIER_FIXUP_1800, _RESERVED_IDENTIFIER_FIXUP_1155.zzzz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1808 = _RESERVED_IDENTIFIER_FIXUP_1283;
    _RESERVED_IDENTIFIER_FIXUP_1808.x = _RESERVED_IDENTIFIER_FIXUP_852;
    float _RESERVED_IDENTIFIER_FIXUP_1301 = clamp((_RESERVED_IDENTIFIER_FIXUP_852 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1808.x = _RESERVED_IDENTIFIER_FIXUP_1301;
    float _RESERVED_IDENTIFIER_FIXUP_1307 = ((-_RESERVED_IDENTIFIER_FIXUP_1301) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1808.y = _RESERVED_IDENTIFIER_FIXUP_1307;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1938;
    if (_RESERVED_IDENTIFIER_FIXUP_1307 != (-_RESERVED_IDENTIFIER_FIXUP_1307))
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1319 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        _RESERVED_IDENTIFIER_FIXUP_1808.y = _RESERVED_IDENTIFIER_FIXUP_1319.x;
        _RESERVED_IDENTIFIER_FIXUP_1808.z = _RESERVED_IDENTIFIER_FIXUP_1319.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1329 = _RESERVED_IDENTIFIER_FIXUP_1808.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1825;
        _RESERVED_IDENTIFIER_FIXUP_1825.x = _RESERVED_IDENTIFIER_FIXUP_1329.x;
        _RESERVED_IDENTIFIER_FIXUP_1825.y = _RESERVED_IDENTIFIER_FIXUP_1329.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_1808.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1829;
        _RESERVED_IDENTIFIER_FIXUP_1829.x = _RESERVED_IDENTIFIER_FIXUP_1339.x;
        _RESERVED_IDENTIFIER_FIXUP_1829.y = _RESERVED_IDENTIFIER_FIXUP_1339.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1349 = _RESERVED_IDENTIFIER_FIXUP_1808.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1833;
        _RESERVED_IDENTIFIER_FIXUP_1833.x = _RESERVED_IDENTIFIER_FIXUP_1349.x;
        _RESERVED_IDENTIFIER_FIXUP_1833.y = _RESERVED_IDENTIFIER_FIXUP_1349.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1359 = _RESERVED_IDENTIFIER_FIXUP_1808.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1837;
        _RESERVED_IDENTIFIER_FIXUP_1837.x = _RESERVED_IDENTIFIER_FIXUP_1359.x;
        _RESERVED_IDENTIFIER_FIXUP_1837.y = _RESERVED_IDENTIFIER_FIXUP_1359.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1367 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1367.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1367.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1373 = hdLod5(param_10, param_11);
        _RESERVED_IDENTIFIER_FIXUP_1825.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1829.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1833.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1837.w = 0.0;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1825.xy;
        float param_13 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1373.y = hdLod5(param_12, param_13).x;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1829.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1373.z = hdLod5(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1833.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1373.w = hdLod5(param_16, param_17).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1430 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1373 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1837.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1430.x = min((_RESERVED_IDENTIFIER_FIXUP_1301 * (((float((hdLod5(param_18, param_19).x - texcoord4.z) >= 0.0) + dot(_RESERVED_IDENTIFIER_FIXUP_1430, vec4(1.0))) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1155.w);
        _RESERVED_IDENTIFIER_FIXUP_1938 = _RESERVED_IDENTIFIER_FIXUP_1430;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1819 = _RESERVED_IDENTIFIER_FIXUP_1788;
        _RESERVED_IDENTIFIER_FIXUP_1819.x = _RESERVED_IDENTIFIER_FIXUP_1155.w;
        _RESERVED_IDENTIFIER_FIXUP_1938 = _RESERVED_IDENTIFIER_FIXUP_1819;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1478 = (_RESERVED_IDENTIFIER_FIXUP_1938.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1944 = vec4(_RESERVED_IDENTIFIER_FIXUP_1478, _RESERVED_IDENTIFIER_FIXUP_1288.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1502 = _RESERVED_IDENTIFIER_FIXUP_1938.xxx * _RESERVED_IDENTIFIER_FIXUP_1944.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1504 = _RESERVED_IDENTIFIER_FIXUP_1502.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1908 = _RESERVED_IDENTIFIER_FIXUP_1944;
    _RESERVED_IDENTIFIER_FIXUP_1908.y = _RESERVED_IDENTIFIER_FIXUP_1504;
    _RESERVED_IDENTIFIER_FIXUP_1908.z = _RESERVED_IDENTIFIER_FIXUP_1502.y;
    _RESERVED_IDENTIFIER_FIXUP_1908.w = _RESERVED_IDENTIFIER_FIXUP_1502.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1516 = (_RESERVED_IDENTIFIER_FIXUP_1288.xyz * _RESERVED_IDENTIFIER_FIXUP_1908.xxx) + _RESERVED_IDENTIFIER_FIXUP_1908.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1945 = vec4(_RESERVED_IDENTIFIER_FIXUP_1516.x, _RESERVED_IDENTIFIER_FIXUP_1504, _RESERVED_IDENTIFIER_FIXUP_1502.yz);
    _RESERVED_IDENTIFIER_FIXUP_1945.y = _RESERVED_IDENTIFIER_FIXUP_1516.y;
    _RESERVED_IDENTIFIER_FIXUP_1945.z = _RESERVED_IDENTIFIER_FIXUP_1516.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1529 = _RESERVED_IDENTIFIER_FIXUP_1945.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1920 = _RESERVED_IDENTIFIER_FIXUP_1945;
    _RESERVED_IDENTIFIER_FIXUP_1920.x = _RESERVED_IDENTIFIER_FIXUP_1529.x;
    _RESERVED_IDENTIFIER_FIXUP_1920.y = _RESERVED_IDENTIFIER_FIXUP_1529.y;
    _RESERVED_IDENTIFIER_FIXUP_1920.z = _RESERVED_IDENTIFIER_FIXUP_1529.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1920.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_559 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_568;
    if (_RESERVED_IDENTIFIER_FIXUP_559)
    {
        _RESERVED_IDENTIFIER_FIXUP_568 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_568 = _RESERVED_IDENTIFIER_FIXUP_559;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_568)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_605 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1738.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_631 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1564;
    if (_RESERVED_IDENTIFIER_FIXUP_605 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1564 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_605), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_631);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1564 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_631);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1564;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1478);
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
    vec2 param_4 = v4.wz;
    r4 = hdTex4(param_4);
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 hdB94 = v0.xyz + v0.xyz;
    r6.x = hdB94.x;
    r6.y = hdB94.y;
    r6.z = hdB94.z;
    vec3 hdB109 = r0.xyz * r6.xyz;
    r7.x = hdB109.x;
    r7.y = hdB109.y;
    r7.z = hdB109.z;
    vec4 hdB118 = r0;
    vec3 hdB127 = mix(r7.xyz, hdB118.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = hdB127.x;
    r0.y = hdB127.y;
    r0.z = hdB127.z;
    vec3 hdB138 = r1.xyz * r6.xyz;
    r7.x = hdB138.x;
    r7.y = hdB138.y;
    r7.z = hdB138.z;
    vec4 hdB147 = r1;
    vec3 hdB153 = mix(r7.xyz, hdB147.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = hdB153.x;
    r1.y = hdB153.y;
    r1.z = hdB153.z;
    vec3 hdB164 = r2.xyz * r6.xyz;
    r7.x = hdB164.x;
    r7.y = hdB164.y;
    r7.z = hdB164.z;
    vec4 hdB173 = r2;
    vec3 hdB179 = mix(r7.xyz, hdB173.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = hdB179.x;
    r2.y = hdB179.y;
    r2.z = hdB179.z;
    vec3 hdB190 = r3.xyz * r6.xyz;
    r5.x = hdB190.x;
    r5.y = hdB190.y;
    r5.z = hdB190.z;
    vec4 hdB199 = r3;
    vec3 hdB205 = mix(r5.xyz, hdB199.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = hdB205.x;
    r3.y = hdB205.y;
    r3.z = hdB205.z;
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 hdB263 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB263.x;
        r0.z = hdB263.y;
        vec2 hdB274 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB274.x;
        r2.y = hdB274.y;
        vec2 hdB285 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB285.x;
        r3.y = hdB285.y;
        vec2 hdB296 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = hdB296.x;
        r5.y = hdB296.y;
        vec2 hdB307 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = hdB307.x;
        r6.y = hdB307.y;
        r7 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_5 = r7.xy;
        float param_6 = r7.w;
        r7 = hdLod5(param_5, param_6);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_9 = r3.xy;
        float param_10 = r3.w;
        r3 = hdLod5(param_9, param_10);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_11 = r5.xy;
        float param_12 = r5.w;
        r5 = hdLod5(param_11, param_12);
        r6.z = 0.0;
        r6.w = 0.0;
        vec2 param_13 = r6.xy;
        float param_14 = r6.w;
        r6 = hdLod5(param_13, param_14);
        r7.y = r2.x;
        r7.z = r3.x;
        r7.w = r5.x;
        r2 = r7 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r0.y = r6.x + (-v5.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r2.x = min(r0.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB441 = r1.www * v1.xyz;
    r0.y = hdB441.x;
    r0.z = hdB441.y;
    r0.w = hdB441.z;
    vec4 hdB450 = r0;
    vec3 hdB452 = r2.xxx * hdB450.yzw;
    r0.y = hdB452.x;
    r0.z = hdB452.y;
    r0.w = hdB452.z;
    vec4 hdB461 = r0;
    vec4 hdB464 = r0;
    vec3 hdB466 = (r1.xyz * hdB461.xxx) + hdB464.yzw;
    r0.x = hdB466.x;
    r0.y = hdB466.y;
    r0.z = hdB466.z;
    vec4 hdB473 = r0;
    vec3 hdB480 = hdB473.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB480.x;
    r0.y = hdB480.y;
    r0.z = hdB480.z;
    vec3 hdB495 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB495.x;
    oC0.y = hdB495.y;
    oC0.z = hdB495.z;
    oC0.w = 1.0;
    bool hdB507 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB515;
    if (hdB507)
    {
        hdB515 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB515 = hdB507;
    }
    if (hdB515)
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
    bool _1654 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1664;
    if (_1654)
    {
        _1664 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1664 = _1654;
    }
    if (_1664)
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
        bool _1689 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1704;
        if (!_1689)
        {
            _1704 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1704 = _1689;
        }
        if (_1704)
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
