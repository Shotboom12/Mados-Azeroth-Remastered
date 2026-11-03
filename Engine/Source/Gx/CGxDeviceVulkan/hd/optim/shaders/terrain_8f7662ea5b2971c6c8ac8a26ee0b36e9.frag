#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
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
float _RESERVED_IDENTIFIER_FIXUP_1586;
vec4 _RESERVED_IDENTIFIER_FIXUP_1587;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _47 = hdOverride >= 0;
    bool _67;
    if (_47)
    {
        _67 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _67 = _47;
    }
    vec4 _68;
    if (_67)
    {
        _68 = vec4(float(hdOverride));
    }
    else
    {
        _68 = value;
    }
    return _68;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _85 = hdOverride >= 0;
    bool _95;
    if (_85)
    {
        _95 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _95 = _85;
    }
    vec4 _96;
    if (_95)
    {
        _96 = vec4(float(hdOverride));
    }
    else
    {
        _96 = value;
    }
    return _96;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _113 = hdOverride >= 0;
    bool _122;
    if (_113)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _122 = _113;
    }
    vec4 _123;
    if (_122)
    {
        _123 = vec4(float(hdOverride));
    }
    else
    {
        _123 = value;
    }
    return _123;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_601 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_604 = _RESERVED_IDENTIFIER_FIXUP_601.xy;
    float _RESERVED_IDENTIFIER_FIXUP_606 = _RESERVED_IDENTIFIER_FIXUP_601.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_604;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_606;
    vec4 _RESERVED_IDENTIFIER_FIXUP_607 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_610 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_614 = _RESERVED_IDENTIFIER_FIXUP_610.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1296;
    _RESERVED_IDENTIFIER_FIXUP_1296.w = _RESERVED_IDENTIFIER_FIXUP_614;
    vec2 _RESERVED_IDENTIFIER_FIXUP_618 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_620 = _RESERVED_IDENTIFIER_FIXUP_618.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1298 = _RESERVED_IDENTIFIER_FIXUP_607;
    _RESERVED_IDENTIFIER_FIXUP_1298.y = _RESERVED_IDENTIFIER_FIXUP_620;
    float _RESERVED_IDENTIFIER_FIXUP_622 = _RESERVED_IDENTIFIER_FIXUP_618.y;
    _RESERVED_IDENTIFIER_FIXUP_1298.z = _RESERVED_IDENTIFIER_FIXUP_622;
    vec2 _RESERVED_IDENTIFIER_FIXUP_628 = _RESERVED_IDENTIFIER_FIXUP_1298.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1302 = _RESERVED_IDENTIFIER_FIXUP_1296;
    _RESERVED_IDENTIFIER_FIXUP_1302.x = _RESERVED_IDENTIFIER_FIXUP_628.x;
    _RESERVED_IDENTIFIER_FIXUP_1302.y = _RESERVED_IDENTIFIER_FIXUP_628.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1302.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_614;
    float _RESERVED_IDENTIFIER_FIXUP_643 = _RESERVED_IDENTIFIER_FIXUP_607.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1298.x = _RESERVED_IDENTIFIER_FIXUP_643;
    vec2 _RESERVED_IDENTIFIER_FIXUP_657 = _RESERVED_IDENTIFIER_FIXUP_1298.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1315 = _RESERVED_IDENTIFIER_FIXUP_1296;
    _RESERVED_IDENTIFIER_FIXUP_1315.x = _RESERVED_IDENTIFIER_FIXUP_657.x;
    _RESERVED_IDENTIFIER_FIXUP_1315.y = _RESERVED_IDENTIFIER_FIXUP_657.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1315.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_614;
    float _RESERVED_IDENTIFIER_FIXUP_672 = _RESERVED_IDENTIFIER_FIXUP_643 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1298.x = _RESERVED_IDENTIFIER_FIXUP_672;
    vec2 _RESERVED_IDENTIFIER_FIXUP_679 = _RESERVED_IDENTIFIER_FIXUP_1298.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1324;
    _RESERVED_IDENTIFIER_FIXUP_1324.x = _RESERVED_IDENTIFIER_FIXUP_679.x;
    _RESERVED_IDENTIFIER_FIXUP_1324.y = _RESERVED_IDENTIFIER_FIXUP_679.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_689 = _RESERVED_IDENTIFIER_FIXUP_1298.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1328;
    _RESERVED_IDENTIFIER_FIXUP_1328.x = _RESERVED_IDENTIFIER_FIXUP_689.x;
    _RESERVED_IDENTIFIER_FIXUP_1328.y = _RESERVED_IDENTIFIER_FIXUP_689.y;
    _RESERVED_IDENTIFIER_FIXUP_1324.w = _RESERVED_IDENTIFIER_FIXUP_614;
    _RESERVED_IDENTIFIER_FIXUP_1328.w = _RESERVED_IDENTIFIER_FIXUP_614;
    float _RESERVED_IDENTIFIER_FIXUP_743 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_761 = hdTex2(param_6);
    vec2 _RESERVED_IDENTIFIER_FIXUP_771 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1368;
    _RESERVED_IDENTIFIER_FIXUP_1368.x = _RESERVED_IDENTIFIER_FIXUP_771.x;
    float _RESERVED_IDENTIFIER_FIXUP_775 = _RESERVED_IDENTIFIER_FIXUP_771.y;
    _RESERVED_IDENTIFIER_FIXUP_1368.y = _RESERVED_IDENTIFIER_FIXUP_775;
    vec3 _RESERVED_IDENTIFIER_FIXUP_777 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1586).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_780 = _RESERVED_IDENTIFIER_FIXUP_777 + _RESERVED_IDENTIFIER_FIXUP_777;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1372 = _RESERVED_IDENTIFIER_FIXUP_761;
    _RESERVED_IDENTIFIER_FIXUP_1372.y = _RESERVED_IDENTIFIER_FIXUP_780.x;
    _RESERVED_IDENTIFIER_FIXUP_1372.z = _RESERVED_IDENTIFIER_FIXUP_780.y;
    _RESERVED_IDENTIFIER_FIXUP_1372.w = _RESERVED_IDENTIFIER_FIXUP_780.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_794 = OptTex0( texcoord0.xyz).xyz;
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1324.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_614;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1328.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_614;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1588 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_743 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_672 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_761.w), _RESERVED_IDENTIFIER_FIXUP_1372.yzw * _RESERVED_IDENTIFIER_FIXUP_794);
    bvec3 _RESERVED_IDENTIFIER_FIXUP_809 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1368.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_810 = mix(_RESERVED_IDENTIFIER_FIXUP_1588.yzw, _RESERVED_IDENTIFIER_FIXUP_794, _RESERVED_IDENTIFIER_FIXUP_809);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1384;
    _RESERVED_IDENTIFIER_FIXUP_1384.x = _RESERVED_IDENTIFIER_FIXUP_810.x;
    _RESERVED_IDENTIFIER_FIXUP_1384.y = _RESERVED_IDENTIFIER_FIXUP_810.y;
    _RESERVED_IDENTIFIER_FIXUP_1384.z = _RESERVED_IDENTIFIER_FIXUP_810.z;
    vec2 param_11 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_824 = hdTex1(param_11).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_825 = _RESERVED_IDENTIFIER_FIXUP_1372.yzw * _RESERVED_IDENTIFIER_FIXUP_824;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1589 = vec4(_RESERVED_IDENTIFIER_FIXUP_825.x, _RESERVED_IDENTIFIER_FIXUP_775, _RESERVED_IDENTIFIER_FIXUP_825.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_840 = mix(_RESERVED_IDENTIFIER_FIXUP_1589.xzw, _RESERVED_IDENTIFIER_FIXUP_824, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1589.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1396;
    _RESERVED_IDENTIFIER_FIXUP_1396.x = _RESERVED_IDENTIFIER_FIXUP_840.x;
    _RESERVED_IDENTIFIER_FIXUP_1396.y = _RESERVED_IDENTIFIER_FIXUP_840.y;
    _RESERVED_IDENTIFIER_FIXUP_1396.z = _RESERVED_IDENTIFIER_FIXUP_840.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_851 = mix(_RESERVED_IDENTIFIER_FIXUP_1384, _RESERVED_IDENTIFIER_FIXUP_1396, _RESERVED_IDENTIFIER_FIXUP_1372.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1402;
    _RESERVED_IDENTIFIER_FIXUP_1402.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1402.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1402.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_867 = _RESERVED_IDENTIFIER_FIXUP_1588.xxx * _RESERVED_IDENTIFIER_FIXUP_1402.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1408;
    _RESERVED_IDENTIFIER_FIXUP_1408.x = _RESERVED_IDENTIFIER_FIXUP_867.x;
    _RESERVED_IDENTIFIER_FIXUP_1408.y = _RESERVED_IDENTIFIER_FIXUP_867.y;
    _RESERVED_IDENTIFIER_FIXUP_1408.z = _RESERVED_IDENTIFIER_FIXUP_867.z;
    _RESERVED_IDENTIFIER_FIXUP_851.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_893 = (_RESERVED_IDENTIFIER_FIXUP_851.xyz * _RESERVED_IDENTIFIER_FIXUP_851.www) + _RESERVED_IDENTIFIER_FIXUP_1408.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1419;
    _RESERVED_IDENTIFIER_FIXUP_1419.x = _RESERVED_IDENTIFIER_FIXUP_893.x;
    _RESERVED_IDENTIFIER_FIXUP_1419.y = _RESERVED_IDENTIFIER_FIXUP_893.y;
    _RESERVED_IDENTIFIER_FIXUP_1419.z = _RESERVED_IDENTIFIER_FIXUP_893.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_906 = _RESERVED_IDENTIFIER_FIXUP_1419.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1425;
    _RESERVED_IDENTIFIER_FIXUP_1425.x = _RESERVED_IDENTIFIER_FIXUP_906.x;
    _RESERVED_IDENTIFIER_FIXUP_1425.y = _RESERVED_IDENTIFIER_FIXUP_906.y;
    _RESERVED_IDENTIFIER_FIXUP_1425.z = _RESERVED_IDENTIFIER_FIXUP_906.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_921 = _RESERVED_IDENTIFIER_FIXUP_1425.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1431;
    _RESERVED_IDENTIFIER_FIXUP_1431.x = _RESERVED_IDENTIFIER_FIXUP_921.x;
    _RESERVED_IDENTIFIER_FIXUP_1431.y = _RESERVED_IDENTIFIER_FIXUP_921.y;
    _RESERVED_IDENTIFIER_FIXUP_1431.z = _RESERVED_IDENTIFIER_FIXUP_921.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_604;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_606;
    vec4 _RESERVED_IDENTIFIER_FIXUP_960 = hdLod5(param_12, param_13);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1444 = _RESERVED_IDENTIFIER_FIXUP_960;
    _RESERVED_IDENTIFIER_FIXUP_1444.y = _RESERVED_IDENTIFIER_FIXUP_620;
    _RESERVED_IDENTIFIER_FIXUP_1444.z = _RESERVED_IDENTIFIER_FIXUP_622;
    vec2 _RESERVED_IDENTIFIER_FIXUP_981 = _RESERVED_IDENTIFIER_FIXUP_1444.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1448 = _RESERVED_IDENTIFIER_FIXUP_1296;
    _RESERVED_IDENTIFIER_FIXUP_1448.x = _RESERVED_IDENTIFIER_FIXUP_981.x;
    _RESERVED_IDENTIFIER_FIXUP_1448.y = _RESERVED_IDENTIFIER_FIXUP_981.y;
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1448.xy;
    float param_15 = _RESERVED_IDENTIFIER_FIXUP_614;
    float _RESERVED_IDENTIFIER_FIXUP_996 = _RESERVED_IDENTIFIER_FIXUP_960.x + hdLod5(param_14, param_15).x;
    _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_996;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1010 = _RESERVED_IDENTIFIER_FIXUP_1444.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1461 = _RESERVED_IDENTIFIER_FIXUP_1296;
    _RESERVED_IDENTIFIER_FIXUP_1461.x = _RESERVED_IDENTIFIER_FIXUP_1010.x;
    _RESERVED_IDENTIFIER_FIXUP_1461.y = _RESERVED_IDENTIFIER_FIXUP_1010.y;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1461.xy;
    float param_17 = _RESERVED_IDENTIFIER_FIXUP_614;
    float _RESERVED_IDENTIFIER_FIXUP_1025 = _RESERVED_IDENTIFIER_FIXUP_996 + hdLod5(param_16, param_17).x;
    _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_1025;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1032 = _RESERVED_IDENTIFIER_FIXUP_1444.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1470;
    _RESERVED_IDENTIFIER_FIXUP_1470.x = _RESERVED_IDENTIFIER_FIXUP_1032.x;
    _RESERVED_IDENTIFIER_FIXUP_1470.y = _RESERVED_IDENTIFIER_FIXUP_1032.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_1042 = _RESERVED_IDENTIFIER_FIXUP_1444.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1474;
    _RESERVED_IDENTIFIER_FIXUP_1474.x = _RESERVED_IDENTIFIER_FIXUP_1042.x;
    _RESERVED_IDENTIFIER_FIXUP_1474.y = _RESERVED_IDENTIFIER_FIXUP_1042.y;
    _RESERVED_IDENTIFIER_FIXUP_1470.w = _RESERVED_IDENTIFIER_FIXUP_614;
    _RESERVED_IDENTIFIER_FIXUP_1474.w = _RESERVED_IDENTIFIER_FIXUP_614;
    vec2 param_18 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1114 = hdTex2(param_18);
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1470.xy;
    float param_20 = _RESERVED_IDENTIFIER_FIXUP_614;
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1474.xy;
    float param_22 = _RESERVED_IDENTIFIER_FIXUP_614;
    float _RESERVED_IDENTIFIER_FIXUP_1119 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_743 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_1025 + hdLod5(param_19, param_20).x) + hdLod5(param_21, param_22).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1114.w);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1133 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1518 = _RESERVED_IDENTIFIER_FIXUP_1114;
    _RESERVED_IDENTIFIER_FIXUP_1518.y = _RESERVED_IDENTIFIER_FIXUP_1133.x;
    _RESERVED_IDENTIFIER_FIXUP_1518.z = _RESERVED_IDENTIFIER_FIXUP_1133.y;
    _RESERVED_IDENTIFIER_FIXUP_1518.w = _RESERVED_IDENTIFIER_FIXUP_1133.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1143 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1147 = _RESERVED_IDENTIFIER_FIXUP_1143.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1590 = vec4(_RESERVED_IDENTIFIER_FIXUP_1119, _RESERVED_IDENTIFIER_FIXUP_1518.yzw * _RESERVED_IDENTIFIER_FIXUP_1147);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1163 = mix(_RESERVED_IDENTIFIER_FIXUP_1590.yzw, _RESERVED_IDENTIFIER_FIXUP_1147, _RESERVED_IDENTIFIER_FIXUP_809);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1530 = _RESERVED_IDENTIFIER_FIXUP_1143;
    _RESERVED_IDENTIFIER_FIXUP_1530.x = _RESERVED_IDENTIFIER_FIXUP_1163.x;
    _RESERVED_IDENTIFIER_FIXUP_1530.y = _RESERVED_IDENTIFIER_FIXUP_1163.y;
    _RESERVED_IDENTIFIER_FIXUP_1530.z = _RESERVED_IDENTIFIER_FIXUP_1163.z;
    vec2 param_23 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1173 = hdTex1(param_23);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_1173.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1178 = _RESERVED_IDENTIFIER_FIXUP_1518.yzw * _RESERVED_IDENTIFIER_FIXUP_1177;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1591 = vec4(_RESERVED_IDENTIFIER_FIXUP_1178.x, _RESERVED_IDENTIFIER_FIXUP_775, _RESERVED_IDENTIFIER_FIXUP_1178.yz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1193 = mix(_RESERVED_IDENTIFIER_FIXUP_1591.xzw, _RESERVED_IDENTIFIER_FIXUP_1177, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1591.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1542 = _RESERVED_IDENTIFIER_FIXUP_1173;
    _RESERVED_IDENTIFIER_FIXUP_1542.x = _RESERVED_IDENTIFIER_FIXUP_1193.x;
    _RESERVED_IDENTIFIER_FIXUP_1542.y = _RESERVED_IDENTIFIER_FIXUP_1193.y;
    _RESERVED_IDENTIFIER_FIXUP_1542.z = _RESERVED_IDENTIFIER_FIXUP_1193.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1204 = mix(_RESERVED_IDENTIFIER_FIXUP_1530, _RESERVED_IDENTIFIER_FIXUP_1542, _RESERVED_IDENTIFIER_FIXUP_1518.xxxx);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1209 = _RESERVED_IDENTIFIER_FIXUP_1204.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1548;
    _RESERVED_IDENTIFIER_FIXUP_1548.x = _RESERVED_IDENTIFIER_FIXUP_1209.x;
    _RESERVED_IDENTIFIER_FIXUP_1548.y = _RESERVED_IDENTIFIER_FIXUP_1209.y;
    _RESERVED_IDENTIFIER_FIXUP_1548.z = _RESERVED_IDENTIFIER_FIXUP_1209.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1220 = _RESERVED_IDENTIFIER_FIXUP_1590.xxx * _RESERVED_IDENTIFIER_FIXUP_1548.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1554;
    _RESERVED_IDENTIFIER_FIXUP_1554.x = _RESERVED_IDENTIFIER_FIXUP_1220.x;
    _RESERVED_IDENTIFIER_FIXUP_1554.y = _RESERVED_IDENTIFIER_FIXUP_1220.y;
    _RESERVED_IDENTIFIER_FIXUP_1554.z = _RESERVED_IDENTIFIER_FIXUP_1220.z;
    float _RESERVED_IDENTIFIER_FIXUP_1230 = (_RESERVED_IDENTIFIER_FIXUP_1119 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1204.w = _RESERVED_IDENTIFIER_FIXUP_1230;
    _RESERVED_IDENTIFIER_FIXUP_1204.w = _RESERVED_IDENTIFIER_FIXUP_1230;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1246 = (_RESERVED_IDENTIFIER_FIXUP_1204.xyz * _RESERVED_IDENTIFIER_FIXUP_1204.www) + _RESERVED_IDENTIFIER_FIXUP_1554.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1567;
    _RESERVED_IDENTIFIER_FIXUP_1567.x = _RESERVED_IDENTIFIER_FIXUP_1246.x;
    _RESERVED_IDENTIFIER_FIXUP_1567.y = _RESERVED_IDENTIFIER_FIXUP_1246.y;
    _RESERVED_IDENTIFIER_FIXUP_1567.z = _RESERVED_IDENTIFIER_FIXUP_1246.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1259 = _RESERVED_IDENTIFIER_FIXUP_1567.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1573;
    _RESERVED_IDENTIFIER_FIXUP_1573.x = _RESERVED_IDENTIFIER_FIXUP_1259.x;
    _RESERVED_IDENTIFIER_FIXUP_1573.y = _RESERVED_IDENTIFIER_FIXUP_1259.y;
    _RESERVED_IDENTIFIER_FIXUP_1573.z = _RESERVED_IDENTIFIER_FIXUP_1259.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1573.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_468 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_477;
    if (_RESERVED_IDENTIFIER_FIXUP_468)
    {
        _RESERVED_IDENTIFIER_FIXUP_477 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_477 = _RESERVED_IDENTIFIER_FIXUP_468;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_477)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_514 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1431.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_540 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1285;
    if (_RESERVED_IDENTIFIER_FIXUP_514 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1285 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_514), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_540);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1285 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_540);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1285;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1230);
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
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB64 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB64.x;
    r1.w = hdB64.y;
    vec2 hdB74 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB74.x;
    r0.z = hdB74.y;
    vec2 hdB96 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB96.x;
    r1.y = hdB96.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB116 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB116.x;
    r1.w = hdB116.y;
    vec2 hdB127 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB127.x;
    r1.y = hdB127.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB150 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB150.x;
    r1.y = hdB150.y;
    vec2 hdB161 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB161.x;
    r2.y = hdB161.y;
    vec2 hdB168 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB168.x;
    r1.w = hdB168.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB187 = vec2(1.0, 0.0) * v4.zx;
    r2.z = hdB187.x;
    r2.w = hdB187.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v3.wz;
    r1 = hdTex2(param_10);
    r2.x = min(r0.x, r1.w);
    vec2 hdB249 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r0.x = hdB249.x;
    r0.y = hdB249.y;
    vec3 hdB259 = v0.xyz + v0.xyz;
    r1.y = hdB259.x;
    r1.z = hdB259.y;
    r1.w = hdB259.z;
    r3 = OptTex0( v2.xyz);
    vec3 hdB278 = r1.yzw * r3.xyz;
    r2.y = hdB278.x;
    r2.z = hdB278.y;
    r2.w = hdB278.z;
    vec4 hdB287 = r3;
    vec3 hdB296 = mix(r2.yzw, hdB287.xyz, greaterThanEqual(-r0.xxx, vec3(0.0)));
    r3.x = hdB296.x;
    r3.y = hdB296.y;
    r3.z = hdB296.z;
    vec2 param_11 = v3.xy;
    r4 = hdTex1(param_11);
    vec3 hdB312 = r1.yzw * r4.xyz;
    r0.x = hdB312.x;
    r0.z = hdB312.y;
    r0.w = hdB312.z;
    vec4 hdB321 = r4;
    vec3 hdB327 = mix(r0.xzw, hdB321.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r4.x = hdB327.x;
    r4.y = hdB327.y;
    r4.z = hdB327.z;
    r0 = mix(r3, r4, r1.xxxx);
    vec3 hdB343 = r0.www * v1.xyz;
    r1.x = hdB343.x;
    r1.y = hdB343.y;
    r1.z = hdB343.z;
    vec4 hdB352 = r1;
    vec3 hdB354 = r2.xxx * hdB352.xyz;
    r1.x = hdB354.x;
    r1.y = hdB354.y;
    r1.z = hdB354.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB368 = r0;
    vec4 hdB370 = r0;
    vec3 hdB375 = (hdB368.xyz * hdB370.www) + r1.xyz;
    r0.x = hdB375.x;
    r0.y = hdB375.y;
    r0.z = hdB375.z;
    vec4 hdB382 = r0;
    vec3 hdB389 = hdB382.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB389.x;
    r0.y = hdB389.y;
    r0.z = hdB389.z;
    vec3 hdB404 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB404.x;
    oC0.y = hdB404.y;
    oC0.z = hdB404.z;
    oC0.w = 1.0;
    bool hdB416 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB424;
    if (hdB416)
    {
        hdB424 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB424 = hdB416;
    }
    if (hdB424)
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
    bool _1437 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1447;
    if (_1437)
    {
        _1447 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 38u) != 0u;
    }
    else
    {
        _1447 = _1437;
    }
    if (_1447)
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
        bool _1472 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1487;
        if (!_1472)
        {
            _1487 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 38u) != 0u;
        }
        else
        {
            _1487 = _1472;
        }
        if (_1487)
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
