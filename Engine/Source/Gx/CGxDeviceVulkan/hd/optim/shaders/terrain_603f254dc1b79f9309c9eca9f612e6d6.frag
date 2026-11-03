#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1457;
vec4 _RESERVED_IDENTIFIER_FIXUP_1458;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _56 = hdOverride >= 0;
    bool _76;
    if (_56)
    {
        _76 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _76 = _56;
    }
    vec4 _77;
    if (_76)
    {
        _77 = vec4(float(hdOverride));
    }
    else
    {
        _77 = value;
    }
    return _77;
}

vec4 hdTex4(vec2 uv)
{
    vec4 value = OptTex4( uv);
    bool _94 = hdOverride >= 0;
    bool _103;
    if (_94)
    {
        _103 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
    }
    else
    {
        _103 = _94;
    }
    vec4 _104;
    if (_103)
    {
        _104 = vec4(float(hdOverride));
    }
    else
    {
        _104 = value;
    }
    return _104;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _121 = hdOverride >= 0;
    bool _131;
    if (_121)
    {
        _131 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _131 = _121;
    }
    vec4 _132;
    if (_131)
    {
        _132 = vec4(float(hdOverride));
    }
    else
    {
        _132 = value;
    }
    return _132;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _149 = hdOverride >= 0;
    bool _158;
    if (_149)
    {
        _158 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _158 = _149;
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

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _176 = hdOverride >= 0;
    bool _186;
    if (_176)
    {
        _186 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _186 = _176;
    }
    vec4 _187;
    if (_186)
    {
        _187 = vec4(float(hdOverride));
    }
    else
    {
        _187 = value;
    }
    return _187;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _204 = hdOverride >= 0;
    bool _214;
    if (_204)
    {
        _214 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_575 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_578 = _RESERVED_IDENTIFIER_FIXUP_575.xy;
    float _RESERVED_IDENTIFIER_FIXUP_580 = _RESERVED_IDENTIFIER_FIXUP_575.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_578;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_580;
    vec4 _RESERVED_IDENTIFIER_FIXUP_581 = hdLod5(param, param_1);
    vec2 _RESERVED_IDENTIFIER_FIXUP_584 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_588 = _RESERVED_IDENTIFIER_FIXUP_584.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1211.w = _RESERVED_IDENTIFIER_FIXUP_588;
    vec2 _RESERVED_IDENTIFIER_FIXUP_592 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    float _RESERVED_IDENTIFIER_FIXUP_594 = _RESERVED_IDENTIFIER_FIXUP_592.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1213 = _RESERVED_IDENTIFIER_FIXUP_581;
    _RESERVED_IDENTIFIER_FIXUP_1213.y = _RESERVED_IDENTIFIER_FIXUP_594;
    float _RESERVED_IDENTIFIER_FIXUP_596 = _RESERVED_IDENTIFIER_FIXUP_592.y;
    _RESERVED_IDENTIFIER_FIXUP_1213.z = _RESERVED_IDENTIFIER_FIXUP_596;
    vec2 _RESERVED_IDENTIFIER_FIXUP_602 = _RESERVED_IDENTIFIER_FIXUP_1213.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1217 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1217.x = _RESERVED_IDENTIFIER_FIXUP_602.x;
    _RESERVED_IDENTIFIER_FIXUP_1217.y = _RESERVED_IDENTIFIER_FIXUP_602.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1217.xy;
    float param_3 = _RESERVED_IDENTIFIER_FIXUP_588;
    float _RESERVED_IDENTIFIER_FIXUP_617 = _RESERVED_IDENTIFIER_FIXUP_581.x + hdLod5(param_2, param_3).x;
    _RESERVED_IDENTIFIER_FIXUP_1213.x = _RESERVED_IDENTIFIER_FIXUP_617;
    vec2 _RESERVED_IDENTIFIER_FIXUP_631 = _RESERVED_IDENTIFIER_FIXUP_1213.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1230 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1230.x = _RESERVED_IDENTIFIER_FIXUP_631.x;
    _RESERVED_IDENTIFIER_FIXUP_1230.y = _RESERVED_IDENTIFIER_FIXUP_631.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1230.xy;
    float param_5 = _RESERVED_IDENTIFIER_FIXUP_588;
    float _RESERVED_IDENTIFIER_FIXUP_646 = _RESERVED_IDENTIFIER_FIXUP_617 + hdLod5(param_4, param_5).x;
    _RESERVED_IDENTIFIER_FIXUP_1213.x = _RESERVED_IDENTIFIER_FIXUP_646;
    vec2 _RESERVED_IDENTIFIER_FIXUP_653 = _RESERVED_IDENTIFIER_FIXUP_1213.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1239;
    _RESERVED_IDENTIFIER_FIXUP_1239.x = _RESERVED_IDENTIFIER_FIXUP_653.x;
    _RESERVED_IDENTIFIER_FIXUP_1239.y = _RESERVED_IDENTIFIER_FIXUP_653.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_663 = _RESERVED_IDENTIFIER_FIXUP_1213.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1243;
    _RESERVED_IDENTIFIER_FIXUP_1243.x = _RESERVED_IDENTIFIER_FIXUP_663.x;
    _RESERVED_IDENTIFIER_FIXUP_1243.y = _RESERVED_IDENTIFIER_FIXUP_663.y;
    _RESERVED_IDENTIFIER_FIXUP_1239.w = _RESERVED_IDENTIFIER_FIXUP_588;
    _RESERVED_IDENTIFIER_FIXUP_1243.w = _RESERVED_IDENTIFIER_FIXUP_588;
    float _RESERVED_IDENTIFIER_FIXUP_717 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_6 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_735 = hdTex4(param_6);
    vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_1239.xy;
    float param_8 = _RESERVED_IDENTIFIER_FIXUP_588;
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1243.xy;
    float param_10 = _RESERVED_IDENTIFIER_FIXUP_588;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1281;
    _RESERVED_IDENTIFIER_FIXUP_1281.x = min((clamp((_RESERVED_IDENTIFIER_FIXUP_717 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_646 + hdLod5(param_7, param_8).x) + hdLod5(param_9, param_10).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_735.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1286;
    _RESERVED_IDENTIFIER_FIXUP_1286.x = 1.0;
    vec2 param_11 = texcoord0.xy;
    vec2 param_12 = texcoord1.xy;
    vec2 param_13 = texcoord1.wz;
    vec2 param_14 = texcoord2.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_789 = _RESERVED_IDENTIFIER_FIXUP_1286.xxx * mix(mix(mix(hdTex0(param_11), hdTex1(param_12), _RESERVED_IDENTIFIER_FIXUP_735.xxxx), hdTex2(param_13), _RESERVED_IDENTIFIER_FIXUP_735.yyyy), hdTex3(param_14), _RESERVED_IDENTIFIER_FIXUP_735.zzzz).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1288;
    _RESERVED_IDENTIFIER_FIXUP_1288.x = _RESERVED_IDENTIFIER_FIXUP_789.x;
    _RESERVED_IDENTIFIER_FIXUP_1288.y = _RESERVED_IDENTIFIER_FIXUP_789.y;
    _RESERVED_IDENTIFIER_FIXUP_1288.z = _RESERVED_IDENTIFIER_FIXUP_789.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1294;
    _RESERVED_IDENTIFIER_FIXUP_1294.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1294.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1294.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_811 = _RESERVED_IDENTIFIER_FIXUP_1288.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1457).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1300;
    _RESERVED_IDENTIFIER_FIXUP_1300.x = _RESERVED_IDENTIFIER_FIXUP_811.x;
    _RESERVED_IDENTIFIER_FIXUP_1300.y = _RESERVED_IDENTIFIER_FIXUP_811.y;
    _RESERVED_IDENTIFIER_FIXUP_1300.z = _RESERVED_IDENTIFIER_FIXUP_811.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_822 = _RESERVED_IDENTIFIER_FIXUP_1300.xyz + _RESERVED_IDENTIFIER_FIXUP_1300.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1306;
    _RESERVED_IDENTIFIER_FIXUP_1306.x = _RESERVED_IDENTIFIER_FIXUP_822.x;
    _RESERVED_IDENTIFIER_FIXUP_1306.y = _RESERVED_IDENTIFIER_FIXUP_822.y;
    _RESERVED_IDENTIFIER_FIXUP_1306.z = _RESERVED_IDENTIFIER_FIXUP_822.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_836 = (_RESERVED_IDENTIFIER_FIXUP_1294.xyz * _RESERVED_IDENTIFIER_FIXUP_1281.xxx) + _RESERVED_IDENTIFIER_FIXUP_1306.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1312;
    _RESERVED_IDENTIFIER_FIXUP_1312.x = _RESERVED_IDENTIFIER_FIXUP_836.x;
    _RESERVED_IDENTIFIER_FIXUP_1312.y = _RESERVED_IDENTIFIER_FIXUP_836.y;
    _RESERVED_IDENTIFIER_FIXUP_1312.z = _RESERVED_IDENTIFIER_FIXUP_836.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_849 = _RESERVED_IDENTIFIER_FIXUP_1312.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1318;
    _RESERVED_IDENTIFIER_FIXUP_1318.x = _RESERVED_IDENTIFIER_FIXUP_849.x;
    _RESERVED_IDENTIFIER_FIXUP_1318.y = _RESERVED_IDENTIFIER_FIXUP_849.y;
    _RESERVED_IDENTIFIER_FIXUP_1318.z = _RESERVED_IDENTIFIER_FIXUP_849.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_864 = _RESERVED_IDENTIFIER_FIXUP_1318.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1324;
    _RESERVED_IDENTIFIER_FIXUP_1324.x = _RESERVED_IDENTIFIER_FIXUP_864.x;
    _RESERVED_IDENTIFIER_FIXUP_1324.y = _RESERVED_IDENTIFIER_FIXUP_864.y;
    _RESERVED_IDENTIFIER_FIXUP_1324.z = _RESERVED_IDENTIFIER_FIXUP_864.z;
    vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_578;
    float param_16 = _RESERVED_IDENTIFIER_FIXUP_580;
    vec4 _RESERVED_IDENTIFIER_FIXUP_906 = hdLod5(param_15, param_16);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1337 = _RESERVED_IDENTIFIER_FIXUP_906;
    _RESERVED_IDENTIFIER_FIXUP_1337.y = _RESERVED_IDENTIFIER_FIXUP_594;
    _RESERVED_IDENTIFIER_FIXUP_1337.z = _RESERVED_IDENTIFIER_FIXUP_596;
    vec2 _RESERVED_IDENTIFIER_FIXUP_927 = _RESERVED_IDENTIFIER_FIXUP_1337.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1341 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1341.x = _RESERVED_IDENTIFIER_FIXUP_927.x;
    _RESERVED_IDENTIFIER_FIXUP_1341.y = _RESERVED_IDENTIFIER_FIXUP_927.y;
    vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_1341.xy;
    float param_18 = _RESERVED_IDENTIFIER_FIXUP_588;
    float _RESERVED_IDENTIFIER_FIXUP_942 = _RESERVED_IDENTIFIER_FIXUP_906.x + hdLod5(param_17, param_18).x;
    _RESERVED_IDENTIFIER_FIXUP_1337.x = _RESERVED_IDENTIFIER_FIXUP_942;
    vec2 _RESERVED_IDENTIFIER_FIXUP_956 = _RESERVED_IDENTIFIER_FIXUP_1337.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_1211;
    _RESERVED_IDENTIFIER_FIXUP_1354.x = _RESERVED_IDENTIFIER_FIXUP_956.x;
    _RESERVED_IDENTIFIER_FIXUP_1354.y = _RESERVED_IDENTIFIER_FIXUP_956.y;
    vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_1354.xy;
    float param_20 = _RESERVED_IDENTIFIER_FIXUP_588;
    float _RESERVED_IDENTIFIER_FIXUP_971 = _RESERVED_IDENTIFIER_FIXUP_942 + hdLod5(param_19, param_20).x;
    _RESERVED_IDENTIFIER_FIXUP_1337.x = _RESERVED_IDENTIFIER_FIXUP_971;
    vec2 _RESERVED_IDENTIFIER_FIXUP_978 = _RESERVED_IDENTIFIER_FIXUP_1337.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1363;
    _RESERVED_IDENTIFIER_FIXUP_1363.x = _RESERVED_IDENTIFIER_FIXUP_978.x;
    _RESERVED_IDENTIFIER_FIXUP_1363.y = _RESERVED_IDENTIFIER_FIXUP_978.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_988 = _RESERVED_IDENTIFIER_FIXUP_1337.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1367;
    _RESERVED_IDENTIFIER_FIXUP_1367.x = _RESERVED_IDENTIFIER_FIXUP_988.x;
    _RESERVED_IDENTIFIER_FIXUP_1367.y = _RESERVED_IDENTIFIER_FIXUP_988.y;
    _RESERVED_IDENTIFIER_FIXUP_1363.w = _RESERVED_IDENTIFIER_FIXUP_588;
    _RESERVED_IDENTIFIER_FIXUP_1367.w = _RESERVED_IDENTIFIER_FIXUP_588;
    vec2 param_21 = texcoord2.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1060 = hdTex4(param_21);
    vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1363.xy;
    float param_23 = _RESERVED_IDENTIFIER_FIXUP_588;
    vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1367.xy;
    float param_25 = _RESERVED_IDENTIFIER_FIXUP_588;
    float _RESERVED_IDENTIFIER_FIXUP_1065 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_717 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_971 + hdLod5(param_22, param_23).x) + hdLod5(param_24, param_25).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1060.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1405;
    _RESERVED_IDENTIFIER_FIXUP_1405.x = _RESERVED_IDENTIFIER_FIXUP_1065;
    float _RESERVED_IDENTIFIER_FIXUP_1070 = (_RESERVED_IDENTIFIER_FIXUP_1065 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1412;
    _RESERVED_IDENTIFIER_FIXUP_1412.x = _RESERVED_IDENTIFIER_FIXUP_1070;
    vec2 param_26 = texcoord0.xy;
    vec2 param_27 = texcoord1.xy;
    vec2 param_28 = texcoord1.wz;
    vec2 param_29 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1109 = mix(mix(mix(hdTex0(param_26), hdTex1(param_27), _RESERVED_IDENTIFIER_FIXUP_1060.xxxx), hdTex2(param_28), _RESERVED_IDENTIFIER_FIXUP_1060.yyyy), hdTex3(param_29), _RESERVED_IDENTIFIER_FIXUP_1060.zzzz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1114 = _RESERVED_IDENTIFIER_FIXUP_1412.xxx * _RESERVED_IDENTIFIER_FIXUP_1109.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1414;
    _RESERVED_IDENTIFIER_FIXUP_1414.x = _RESERVED_IDENTIFIER_FIXUP_1114.x;
    _RESERVED_IDENTIFIER_FIXUP_1414.y = _RESERVED_IDENTIFIER_FIXUP_1114.y;
    _RESERVED_IDENTIFIER_FIXUP_1414.z = _RESERVED_IDENTIFIER_FIXUP_1114.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1125 = _RESERVED_IDENTIFIER_FIXUP_1109.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1420;
    _RESERVED_IDENTIFIER_FIXUP_1420.x = _RESERVED_IDENTIFIER_FIXUP_1125.x;
    _RESERVED_IDENTIFIER_FIXUP_1420.y = _RESERVED_IDENTIFIER_FIXUP_1125.y;
    _RESERVED_IDENTIFIER_FIXUP_1420.z = _RESERVED_IDENTIFIER_FIXUP_1125.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1136 = _RESERVED_IDENTIFIER_FIXUP_1414.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1426;
    _RESERVED_IDENTIFIER_FIXUP_1426.x = _RESERVED_IDENTIFIER_FIXUP_1136.x;
    _RESERVED_IDENTIFIER_FIXUP_1426.y = _RESERVED_IDENTIFIER_FIXUP_1136.y;
    _RESERVED_IDENTIFIER_FIXUP_1426.z = _RESERVED_IDENTIFIER_FIXUP_1136.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1147 = _RESERVED_IDENTIFIER_FIXUP_1426.xyz + _RESERVED_IDENTIFIER_FIXUP_1426.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1432;
    _RESERVED_IDENTIFIER_FIXUP_1432.x = _RESERVED_IDENTIFIER_FIXUP_1147.x;
    _RESERVED_IDENTIFIER_FIXUP_1432.y = _RESERVED_IDENTIFIER_FIXUP_1147.y;
    _RESERVED_IDENTIFIER_FIXUP_1432.z = _RESERVED_IDENTIFIER_FIXUP_1147.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1161 = (_RESERVED_IDENTIFIER_FIXUP_1420.xyz * _RESERVED_IDENTIFIER_FIXUP_1405.xxx) + _RESERVED_IDENTIFIER_FIXUP_1432.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1438;
    _RESERVED_IDENTIFIER_FIXUP_1438.x = _RESERVED_IDENTIFIER_FIXUP_1161.x;
    _RESERVED_IDENTIFIER_FIXUP_1438.y = _RESERVED_IDENTIFIER_FIXUP_1161.y;
    _RESERVED_IDENTIFIER_FIXUP_1438.z = _RESERVED_IDENTIFIER_FIXUP_1161.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1174 = _RESERVED_IDENTIFIER_FIXUP_1438.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1444;
    _RESERVED_IDENTIFIER_FIXUP_1444.x = _RESERVED_IDENTIFIER_FIXUP_1174.x;
    _RESERVED_IDENTIFIER_FIXUP_1444.y = _RESERVED_IDENTIFIER_FIXUP_1174.y;
    _RESERVED_IDENTIFIER_FIXUP_1444.z = _RESERVED_IDENTIFIER_FIXUP_1174.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1444.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_438 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_447;
    if (_RESERVED_IDENTIFIER_FIXUP_438)
    {
        _RESERVED_IDENTIFIER_FIXUP_447 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_447 = _RESERVED_IDENTIFIER_FIXUP_438;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_447)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_484 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1324.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_511 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1200;
    if (_RESERVED_IDENTIFIER_FIXUP_484 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1200 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_484), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_511);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1200 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_511);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1200;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1070);
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB68 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB68.x;
    r1.w = hdB68.y;
    vec2 hdB78 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB78.x;
    r0.z = hdB78.y;
    vec2 hdB100 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB100.x;
    r1.y = hdB100.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB120 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB120.x;
    r1.w = hdB120.y;
    vec2 hdB131 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB131.x;
    r1.y = hdB131.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB154 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB154.x;
    r1.y = hdB154.y;
    vec2 hdB165 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB165.x;
    r2.y = hdB165.y;
    vec2 hdB172 = vec2(1.0, 0.0) * v5.zx;
    r1.z = hdB172.x;
    r1.w = hdB172.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB191 = vec2(1.0, 0.0) * v5.zx;
    r2.z = hdB191.x;
    r2.w = hdB191.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v5.x), abs(v5.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v4.wz;
    r1 = hdTex4(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_11 = v2.xy;
    r3 = hdTex0(param_11);
    vec2 param_12 = v3.xy;
    r4 = hdTex1(param_12);
    r5 = mix(r3, r4, r1.xxxx);
    vec2 param_13 = v3.wz;
    r3 = hdTex2(param_13);
    r4 = mix(r5, r3, r1.yyyy);
    vec2 param_14 = v4.xy;
    r3 = hdTex3(param_14);
    r5 = mix(r4, r3, r1.zzzz);
    vec4 hdB292 = r0;
    vec3 hdB296 = hdB292.xxx * r5.xyz;
    r0.x = hdB296.x;
    r0.y = hdB296.y;
    r0.z = hdB296.z;
    vec3 hdB307 = r5.www * v1.xyz;
    r1.x = hdB307.x;
    r1.y = hdB307.y;
    r1.z = hdB307.z;
    vec4 hdB314 = r0;
    vec3 hdB318 = hdB314.xyz * v0.xyz;
    r0.x = hdB318.x;
    r0.y = hdB318.y;
    r0.z = hdB318.z;
    vec4 hdB325 = r0;
    vec4 hdB327 = r0;
    vec3 hdB329 = hdB325.xyz + hdB327.xyz;
    r0.x = hdB329.x;
    r0.y = hdB329.y;
    r0.z = hdB329.z;
    vec4 hdB341 = r0;
    vec3 hdB343 = (r1.xyz * r2.xxx) + hdB341.xyz;
    r0.x = hdB343.x;
    r0.y = hdB343.y;
    r0.z = hdB343.z;
    vec4 hdB350 = r0;
    vec3 hdB357 = hdB350.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB357.x;
    r0.y = hdB357.y;
    r0.z = hdB357.z;
    vec3 hdB372 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB372.x;
    oC0.y = hdB372.y;
    oC0.z = hdB372.z;
    oC0.w = 1.0;
    bool hdB386 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB394;
    if (hdB386)
    {
        hdB394 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB394 = hdB386;
    }
    if (hdB394)
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
    bool _1386 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1396;
    if (_1386)
    {
        _1396 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 63u) != 0u;
    }
    else
    {
        _1396 = _1386;
    }
    if (_1396)
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
        bool _1421 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1436;
        if (!_1421)
        {
            _1436 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 63u) != 0u;
        }
        else
        {
            _1436 = _1421;
        }
        if (_1436)
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
