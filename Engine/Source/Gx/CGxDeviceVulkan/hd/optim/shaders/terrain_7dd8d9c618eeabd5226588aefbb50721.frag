#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1394;
vec4 _RESERVED_IDENTIFIER_FIXUP_1395;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _50 = hdOverride >= 0;
    bool _70;
    if (_50)
    {
        _70 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _70 = _50;
    }
    vec4 _71;
    if (_70)
    {
        _71 = vec4(float(hdOverride));
    }
    else
    {
        _71 = value;
    }
    return _71;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _88 = hdOverride >= 0;
    bool _98;
    if (_88)
    {
        _98 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _98 = _88;
    }
    vec4 _99;
    if (_98)
    {
        _99 = vec4(float(hdOverride));
    }
    else
    {
        _99 = value;
    }
    return _99;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _116 = hdOverride >= 0;
    bool _126;
    if (_116)
    {
        _126 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _126 = _116;
    }
    vec4 _127;
    if (_126)
    {
        _127 = vec4(float(hdOverride));
    }
    else
    {
        _127 = value;
    }
    return _127;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _144 = hdOverride >= 0;
    bool _153;
    if (_144)
    {
        _153 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _153 = _144;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_550 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_553 = _RESERVED_IDENTIFIER_FIXUP_550.xy;
    float _RESERVED_IDENTIFIER_FIXUP_555 = _RESERVED_IDENTIFIER_FIXUP_550.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_553;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_555;
    vec4 _RESERVED_IDENTIFIER_FIXUP_556 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_559 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_563 = _RESERVED_IDENTIFIER_FIXUP_559.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1148;
    _RESERVED_IDENTIFIER_FIXUP_1148.w = _RESERVED_IDENTIFIER_FIXUP_563;
    vec2 _RESERVED_IDENTIFIER_FIXUP_567 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_569 = _RESERVED_IDENTIFIER_FIXUP_567.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1150 = _RESERVED_IDENTIFIER_FIXUP_556;
    _RESERVED_IDENTIFIER_FIXUP_1150.y = _RESERVED_IDENTIFIER_FIXUP_569;
    float _RESERVED_IDENTIFIER_FIXUP_571 = _RESERVED_IDENTIFIER_FIXUP_567.y;
    _RESERVED_IDENTIFIER_FIXUP_1150.z = _RESERVED_IDENTIFIER_FIXUP_571;
    vec2 _RESERVED_IDENTIFIER_FIXUP_577 = _RESERVED_IDENTIFIER_FIXUP_1150.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1154 = _RESERVED_IDENTIFIER_FIXUP_1148;
    _RESERVED_IDENTIFIER_FIXUP_1154.x = _RESERVED_IDENTIFIER_FIXUP_577.x;
    _RESERVED_IDENTIFIER_FIXUP_1154.y = _RESERVED_IDENTIFIER_FIXUP_577.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1154.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_563;
    float _RESERVED_IDENTIFIER_FIXUP_592 = _RESERVED_IDENTIFIER_FIXUP_556.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1150.x = _RESERVED_IDENTIFIER_FIXUP_592;
    vec2 _RESERVED_IDENTIFIER_FIXUP_606 = _RESERVED_IDENTIFIER_FIXUP_1150.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1167 = _RESERVED_IDENTIFIER_FIXUP_1148;
    _RESERVED_IDENTIFIER_FIXUP_1167.x = _RESERVED_IDENTIFIER_FIXUP_606.x;
    _RESERVED_IDENTIFIER_FIXUP_1167.y = _RESERVED_IDENTIFIER_FIXUP_606.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1167.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_563;
    float _RESERVED_IDENTIFIER_FIXUP_621 = _RESERVED_IDENTIFIER_FIXUP_592 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1150.x = _RESERVED_IDENTIFIER_FIXUP_621;
    vec2 _RESERVED_IDENTIFIER_FIXUP_628 = _RESERVED_IDENTIFIER_FIXUP_1150.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1176;
    _RESERVED_IDENTIFIER_FIXUP_1176.x = _RESERVED_IDENTIFIER_FIXUP_628.x;
    _RESERVED_IDENTIFIER_FIXUP_1176.y = _RESERVED_IDENTIFIER_FIXUP_628.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_638 = _RESERVED_IDENTIFIER_FIXUP_1150.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1180;
    _RESERVED_IDENTIFIER_FIXUP_1180.x = _RESERVED_IDENTIFIER_FIXUP_638.x;
    _RESERVED_IDENTIFIER_FIXUP_1180.y = _RESERVED_IDENTIFIER_FIXUP_638.y;
    _RESERVED_IDENTIFIER_FIXUP_1176.w = _RESERVED_IDENTIFIER_FIXUP_563;
    _RESERVED_IDENTIFIER_FIXUP_1180.w = _RESERVED_IDENTIFIER_FIXUP_563;
    float _RESERVED_IDENTIFIER_FIXUP_692 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_710 = hdTex2(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1176.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_563;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1180.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_563;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_1218.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_692 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_621 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_710.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1223;
    _RESERVED_IDENTIFIER_FIXUP_1223.x = 1.0;
    vec2 param_11 = texcoord0.xy;
    vec2 param_12 = texcoord1.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_746 = _RESERVED_IDENTIFIER_FIXUP_1223.xxx * mix(hdTex0(param_11), hdTex1(param_12), _RESERVED_IDENTIFIER_FIXUP_710.xxxx).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1225;
    _RESERVED_IDENTIFIER_FIXUP_1225.x = _RESERVED_IDENTIFIER_FIXUP_746.x;
    _RESERVED_IDENTIFIER_FIXUP_1225.y = _RESERVED_IDENTIFIER_FIXUP_746.y;
    _RESERVED_IDENTIFIER_FIXUP_1225.z = _RESERVED_IDENTIFIER_FIXUP_746.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1231;
    _RESERVED_IDENTIFIER_FIXUP_1231.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1231.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1231.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_768 = _RESERVED_IDENTIFIER_FIXUP_1225.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1394).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1237;
    _RESERVED_IDENTIFIER_FIXUP_1237.x = _RESERVED_IDENTIFIER_FIXUP_768.x;
    _RESERVED_IDENTIFIER_FIXUP_1237.y = _RESERVED_IDENTIFIER_FIXUP_768.y;
    _RESERVED_IDENTIFIER_FIXUP_1237.z = _RESERVED_IDENTIFIER_FIXUP_768.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_779 = _RESERVED_IDENTIFIER_FIXUP_1237.xyz + _RESERVED_IDENTIFIER_FIXUP_1237.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1243;
    _RESERVED_IDENTIFIER_FIXUP_1243.x = _RESERVED_IDENTIFIER_FIXUP_779.x;
    _RESERVED_IDENTIFIER_FIXUP_1243.y = _RESERVED_IDENTIFIER_FIXUP_779.y;
    _RESERVED_IDENTIFIER_FIXUP_1243.z = _RESERVED_IDENTIFIER_FIXUP_779.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_793 = (_RESERVED_IDENTIFIER_FIXUP_1231.xyz * _RESERVED_IDENTIFIER_FIXUP_1218.xxx) + _RESERVED_IDENTIFIER_FIXUP_1243.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1249;
    _RESERVED_IDENTIFIER_FIXUP_1249.x = _RESERVED_IDENTIFIER_FIXUP_793.x;
    _RESERVED_IDENTIFIER_FIXUP_1249.y = _RESERVED_IDENTIFIER_FIXUP_793.y;
    _RESERVED_IDENTIFIER_FIXUP_1249.z = _RESERVED_IDENTIFIER_FIXUP_793.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_806 = _RESERVED_IDENTIFIER_FIXUP_1249.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1255;
    _RESERVED_IDENTIFIER_FIXUP_1255.x = _RESERVED_IDENTIFIER_FIXUP_806.x;
    _RESERVED_IDENTIFIER_FIXUP_1255.y = _RESERVED_IDENTIFIER_FIXUP_806.y;
    _RESERVED_IDENTIFIER_FIXUP_1255.z = _RESERVED_IDENTIFIER_FIXUP_806.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_821 = _RESERVED_IDENTIFIER_FIXUP_1255.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1261;
    _RESERVED_IDENTIFIER_FIXUP_1261.x = _RESERVED_IDENTIFIER_FIXUP_821.x;
    _RESERVED_IDENTIFIER_FIXUP_1261.y = _RESERVED_IDENTIFIER_FIXUP_821.y;
    _RESERVED_IDENTIFIER_FIXUP_1261.z = _RESERVED_IDENTIFIER_FIXUP_821.z;
    vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_553;
    float param_14 = _RESERVED_IDENTIFIER_FIXUP_555;
    vec4 _RESERVED_IDENTIFIER_FIXUP_861 = hdLod5(param_13, param_14);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1274 = _RESERVED_IDENTIFIER_FIXUP_861;
    _RESERVED_IDENTIFIER_FIXUP_1274.y = _RESERVED_IDENTIFIER_FIXUP_569;
    _RESERVED_IDENTIFIER_FIXUP_1274.z = _RESERVED_IDENTIFIER_FIXUP_571;
    vec2 _RESERVED_IDENTIFIER_FIXUP_882 = _RESERVED_IDENTIFIER_FIXUP_1274.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1278 = _RESERVED_IDENTIFIER_FIXUP_1148;
    _RESERVED_IDENTIFIER_FIXUP_1278.x = _RESERVED_IDENTIFIER_FIXUP_882.x;
    _RESERVED_IDENTIFIER_FIXUP_1278.y = _RESERVED_IDENTIFIER_FIXUP_882.y;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_1278.xy;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_563;
    float _RESERVED_IDENTIFIER_FIXUP_897 = _RESERVED_IDENTIFIER_FIXUP_861.x + hdLod5(param_15, param_16).x;
    _RESERVED_IDENTIFIER_FIXUP_1274.x = _RESERVED_IDENTIFIER_FIXUP_897;
    vec2 _RESERVED_IDENTIFIER_FIXUP_911 = _RESERVED_IDENTIFIER_FIXUP_1274.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1291 = _RESERVED_IDENTIFIER_FIXUP_1148;
    _RESERVED_IDENTIFIER_FIXUP_1291.x = _RESERVED_IDENTIFIER_FIXUP_911.x;
    _RESERVED_IDENTIFIER_FIXUP_1291.y = _RESERVED_IDENTIFIER_FIXUP_911.y;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1291.xy;
    float param_18 = _RESERVED_IDENTIFIER_FIXUP_563;
    float _RESERVED_IDENTIFIER_FIXUP_926 = _RESERVED_IDENTIFIER_FIXUP_897 + hdLod5(param_17, param_18).x;
    _RESERVED_IDENTIFIER_FIXUP_1274.x = _RESERVED_IDENTIFIER_FIXUP_926;
    vec2 _RESERVED_IDENTIFIER_FIXUP_933 = _RESERVED_IDENTIFIER_FIXUP_1274.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1300;
    _RESERVED_IDENTIFIER_FIXUP_1300.x = _RESERVED_IDENTIFIER_FIXUP_933.x;
    _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_933.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_943 = _RESERVED_IDENTIFIER_FIXUP_1274.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1304;
    _RESERVED_IDENTIFIER_FIXUP_1304.x = _RESERVED_IDENTIFIER_FIXUP_943.x;
    _RESERVED_IDENTIFIER_FIXUP_1304.y = _RESERVED_IDENTIFIER_FIXUP_943.y;
    _RESERVED_IDENTIFIER_FIXUP_1300.w = _RESERVED_IDENTIFIER_FIXUP_563;
    _RESERVED_IDENTIFIER_FIXUP_1304.w = _RESERVED_IDENTIFIER_FIXUP_563;
    vec2 param_19 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1015 = hdTex2(param_19);
    vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1300.xy;
    float param_21 = _RESERVED_IDENTIFIER_FIXUP_563;
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1304.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_563;
    float _RESERVED_IDENTIFIER_FIXUP_1020 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_692 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_926 + hdLod5(param_20, param_21).x) + hdLod5(param_22, param_23).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1015.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1342;
    _RESERVED_IDENTIFIER_FIXUP_1342.x = _RESERVED_IDENTIFIER_FIXUP_1020;
    float _RESERVED_IDENTIFIER_FIXUP_1025 = (_RESERVED_IDENTIFIER_FIXUP_1020 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1349;
    _RESERVED_IDENTIFIER_FIXUP_1349.x = _RESERVED_IDENTIFIER_FIXUP_1025;
    vec2 param_24 = texcoord0.xy;
    vec2 param_25 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1046 = mix(hdTex0(param_24), hdTex1(param_25), _RESERVED_IDENTIFIER_FIXUP_1015.xxxx);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1051 = _RESERVED_IDENTIFIER_FIXUP_1349.xxx * _RESERVED_IDENTIFIER_FIXUP_1046.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1351;
    _RESERVED_IDENTIFIER_FIXUP_1351.x = _RESERVED_IDENTIFIER_FIXUP_1051.x;
    _RESERVED_IDENTIFIER_FIXUP_1351.y = _RESERVED_IDENTIFIER_FIXUP_1051.y;
    _RESERVED_IDENTIFIER_FIXUP_1351.z = _RESERVED_IDENTIFIER_FIXUP_1051.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1062 = _RESERVED_IDENTIFIER_FIXUP_1046.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1357;
    _RESERVED_IDENTIFIER_FIXUP_1357.x = _RESERVED_IDENTIFIER_FIXUP_1062.x;
    _RESERVED_IDENTIFIER_FIXUP_1357.y = _RESERVED_IDENTIFIER_FIXUP_1062.y;
    _RESERVED_IDENTIFIER_FIXUP_1357.z = _RESERVED_IDENTIFIER_FIXUP_1062.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1073 = _RESERVED_IDENTIFIER_FIXUP_1351.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1363;
    _RESERVED_IDENTIFIER_FIXUP_1363.x = _RESERVED_IDENTIFIER_FIXUP_1073.x;
    _RESERVED_IDENTIFIER_FIXUP_1363.y = _RESERVED_IDENTIFIER_FIXUP_1073.y;
    _RESERVED_IDENTIFIER_FIXUP_1363.z = _RESERVED_IDENTIFIER_FIXUP_1073.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1084 = _RESERVED_IDENTIFIER_FIXUP_1363.xyz + _RESERVED_IDENTIFIER_FIXUP_1363.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1369;
    _RESERVED_IDENTIFIER_FIXUP_1369.x = _RESERVED_IDENTIFIER_FIXUP_1084.x;
    _RESERVED_IDENTIFIER_FIXUP_1369.y = _RESERVED_IDENTIFIER_FIXUP_1084.y;
    _RESERVED_IDENTIFIER_FIXUP_1369.z = _RESERVED_IDENTIFIER_FIXUP_1084.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1098 = (_RESERVED_IDENTIFIER_FIXUP_1357.xyz * _RESERVED_IDENTIFIER_FIXUP_1342.xxx) + _RESERVED_IDENTIFIER_FIXUP_1369.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1375;
    _RESERVED_IDENTIFIER_FIXUP_1375.x = _RESERVED_IDENTIFIER_FIXUP_1098.x;
    _RESERVED_IDENTIFIER_FIXUP_1375.y = _RESERVED_IDENTIFIER_FIXUP_1098.y;
    _RESERVED_IDENTIFIER_FIXUP_1375.z = _RESERVED_IDENTIFIER_FIXUP_1098.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1111 = _RESERVED_IDENTIFIER_FIXUP_1375.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1381;
    _RESERVED_IDENTIFIER_FIXUP_1381.x = _RESERVED_IDENTIFIER_FIXUP_1111.x;
    _RESERVED_IDENTIFIER_FIXUP_1381.y = _RESERVED_IDENTIFIER_FIXUP_1111.y;
    _RESERVED_IDENTIFIER_FIXUP_1381.z = _RESERVED_IDENTIFIER_FIXUP_1111.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1381.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_415 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_424;
    if (_RESERVED_IDENTIFIER_FIXUP_415)
    {
        _RESERVED_IDENTIFIER_FIXUP_424 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_424 = _RESERVED_IDENTIFIER_FIXUP_415;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_424)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_461 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1261.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_488 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1137;
    if (_RESERVED_IDENTIFIER_FIXUP_461 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1137 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_461), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_488);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1137 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_488);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1137;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1025);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
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
    vec2 hdB65 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB65.x;
    r1.w = hdB65.y;
    vec2 hdB75 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB75.x;
    r0.z = hdB75.y;
    vec2 hdB97 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB97.x;
    r1.y = hdB97.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB117 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB117.x;
    r1.w = hdB117.y;
    vec2 hdB128 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB128.x;
    r1.y = hdB128.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB151 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB151.x;
    r1.y = hdB151.y;
    vec2 hdB162 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB162.x;
    r2.y = hdB162.y;
    vec2 hdB169 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB169.x;
    r1.w = hdB169.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB188 = vec2(1.0, 0.0) * v4.zx;
    r2.z = hdB188.x;
    r2.w = hdB188.y;
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
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_11 = v2.xy;
    r3 = hdTex0(param_11);
    vec2 param_12 = v3.xy;
    r4 = hdTex1(param_12);
    r5 = mix(r3, r4, r1.xxxx);
    vec4 hdB269 = r0;
    vec3 hdB273 = hdB269.xxx * r5.xyz;
    r0.x = hdB273.x;
    r0.y = hdB273.y;
    r0.z = hdB273.z;
    vec3 hdB284 = r5.www * v1.xyz;
    r1.x = hdB284.x;
    r1.y = hdB284.y;
    r1.z = hdB284.z;
    vec4 hdB291 = r0;
    vec3 hdB295 = hdB291.xyz * v0.xyz;
    r0.x = hdB295.x;
    r0.y = hdB295.y;
    r0.z = hdB295.z;
    vec4 hdB302 = r0;
    vec4 hdB304 = r0;
    vec3 hdB306 = hdB302.xyz + hdB304.xyz;
    r0.x = hdB306.x;
    r0.y = hdB306.y;
    r0.z = hdB306.z;
    vec4 hdB318 = r0;
    vec3 hdB320 = (r1.xyz * r2.xxx) + hdB318.xyz;
    r0.x = hdB320.x;
    r0.y = hdB320.y;
    r0.z = hdB320.z;
    vec4 hdB327 = r0;
    vec3 hdB334 = hdB327.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB334.x;
    r0.y = hdB334.y;
    r0.z = hdB334.z;
    vec3 hdB349 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB349.x;
    oC0.y = hdB349.y;
    oC0.z = hdB349.z;
    oC0.w = 1.0;
    bool hdB363 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB371;
    if (hdB363)
    {
        hdB371 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB371 = hdB363;
    }
    if (hdB371)
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
    bool _1276 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1286;
    if (_1276)
    {
        _1286 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 39u) != 0u;
    }
    else
    {
        _1286 = _1276;
    }
    if (_1286)
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
        bool _1311 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1326;
        if (!_1311)
        {
            _1326 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 39u) != 0u;
        }
        else
        {
            _1326 = _1311;
        }
        if (_1326)
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
