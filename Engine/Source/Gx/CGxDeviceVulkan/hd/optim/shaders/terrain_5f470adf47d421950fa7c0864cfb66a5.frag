#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 6) in vec4 texcoord4;
layout(location = 7) in vec4 texcoord5;
layout(location = 8) in vec4 texcoord6;
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
float _RESERVED_IDENTIFIER_FIXUP_3483;
vec4 _RESERVED_IDENTIFIER_FIXUP_3484;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex6Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s6[0],uv,dx,dy);if(optTile==1u)return textureGrad(s6[1],uv,dx,dy);if(optTile==2u)return textureGrad(s6[2],uv,dx,dy);return textureGrad(s6[3],uv,dx,dy);}
vec4 OptTex6(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex6Grad(uv,dx,dy);}
vec4 OptTex6(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex6Grad(uv,dx,dy);}
vec4 OptTex6Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s6[0],uv,lod);if(optTile==1u)return textureLod(s6[1],uv,lod);if(optTile==2u)return textureLod(s6[2],uv,lod);return textureLod(s6[3],uv,lod);}
vec4 OptTex7Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s7[0],uv,dx,dy);if(optTile==1u)return textureGrad(s7[1],uv,dx,dy);if(optTile==2u)return textureGrad(s7[2],uv,dx,dy);return textureGrad(s7[3],uv,dx,dy);}
vec4 OptTex7(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex7Grad(uv,dx,dy);}
vec4 OptTex7(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex7Grad(uv,dx,dy);}
vec4 OptTex7Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s7[0],uv,lod);if(optTile==1u)return textureLod(s7[1],uv,lod);if(optTile==2u)return textureLod(s7[2],uv,lod);return textureLod(s7[3],uv,lod);}
vec4 OptTex8Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s8[0],uv,dx,dy);if(optTile==1u)return textureGrad(s8[1],uv,dx,dy);if(optTile==2u)return textureGrad(s8[2],uv,dx,dy);return textureGrad(s8[3],uv,dx,dy);}
vec4 OptTex8(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex8Grad(uv,dx,dy);}
vec4 OptTex8(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex8Grad(uv,dx,dy);}
vec4 OptTex8Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s8[0],uv,lod);if(optTile==1u)return textureLod(s8[1],uv,lod);if(optTile==2u)return textureLod(s8[2],uv,lod);return textureLod(s8[3],uv,lod);}
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _58 = hdOverride >= 0;
    bool _78;
    if (_58)
    {
        _78 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _78 = _58;
    }
    vec4 _79;
    if (_78)
    {
        _79 = vec4(float(hdOverride));
    }
    else
    {
        _79 = value;
    }
    return _79;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _96 = hdOverride >= 0;
    bool _105;
    if (_96)
    {
        _105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _105 = _96;
    }
    vec4 _106;
    if (_105)
    {
        _106 = vec4(float(hdOverride));
    }
    else
    {
        _106 = value;
    }
    return _106;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _124 = hdOverride >= 0;
    bool _134;
    if (_124)
    {
        _134 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _134 = _124;
    }
    vec4 _135;
    if (_134)
    {
        _135 = vec4(float(hdOverride));
    }
    else
    {
        _135 = value;
    }
    return _135;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _153 = hdOverride >= 0;
    bool _163;
    if (_153)
    {
        _163 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _163 = _153;
    }
    vec4 _164;
    if (_163)
    {
        _164 = vec4(float(hdOverride));
    }
    else
    {
        _164 = value;
    }
    return _164;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _182 = hdOverride >= 0;
    bool _192;
    if (_182)
    {
        _192 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _192 = _182;
    }
    vec4 _193;
    if (_192)
    {
        _193 = vec4(float(hdOverride));
    }
    else
    {
        _193 = value;
    }
    return _193;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _211 = hdOverride >= 0;
    bool _221;
    if (_211)
    {
        _221 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _221 = _211;
    }
    vec4 _222;
    if (_221)
    {
        _222 = vec4(float(hdOverride));
    }
    else
    {
        _222 = value;
    }
    return _222;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1081 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1085 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1088 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_1085.w = _RESERVED_IDENTIFIER_FIXUP_1088;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1091 = _RESERVED_IDENTIFIER_FIXUP_1081.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1094 = _RESERVED_IDENTIFIER_FIXUP_1091 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3483).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2732 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_2732.x = _RESERVED_IDENTIFIER_FIXUP_1094.x;
    _RESERVED_IDENTIFIER_FIXUP_2732.y = _RESERVED_IDENTIFIER_FIXUP_1094.y;
    _RESERVED_IDENTIFIER_FIXUP_2732.z = _RESERVED_IDENTIFIER_FIXUP_1094.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1105 = _RESERVED_IDENTIFIER_FIXUP_2732.xyz + _RESERVED_IDENTIFIER_FIXUP_2732.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2738 = _RESERVED_IDENTIFIER_FIXUP_2732;
    _RESERVED_IDENTIFIER_FIXUP_2738.x = _RESERVED_IDENTIFIER_FIXUP_1105.x;
    _RESERVED_IDENTIFIER_FIXUP_2738.y = _RESERVED_IDENTIFIER_FIXUP_1105.y;
    _RESERVED_IDENTIFIER_FIXUP_2738.z = _RESERVED_IDENTIFIER_FIXUP_1105.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1120 = mix(_RESERVED_IDENTIFIER_FIXUP_2738.xyz, _RESERVED_IDENTIFIER_FIXUP_1091, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1085.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2744 = _RESERVED_IDENTIFIER_FIXUP_1081;
    _RESERVED_IDENTIFIER_FIXUP_2744.x = _RESERVED_IDENTIFIER_FIXUP_1120.x;
    _RESERVED_IDENTIFIER_FIXUP_2744.y = _RESERVED_IDENTIFIER_FIXUP_1120.y;
    _RESERVED_IDENTIFIER_FIXUP_2744.z = _RESERVED_IDENTIFIER_FIXUP_1120.z;
    float _RESERVED_IDENTIFIER_FIXUP_1130 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1085.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2750 = _RESERVED_IDENTIFIER_FIXUP_1085;
    _RESERVED_IDENTIFIER_FIXUP_2750.x = _RESERVED_IDENTIFIER_FIXUP_1130;
    _RESERVED_IDENTIFIER_FIXUP_2750.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1130;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1140 = _RESERVED_IDENTIFIER_FIXUP_2744 * _RESERVED_IDENTIFIER_FIXUP_2750.xxxx;
    float _RESERVED_IDENTIFIER_FIXUP_1147 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2757 = _RESERVED_IDENTIFIER_FIXUP_2750;
    _RESERVED_IDENTIFIER_FIXUP_2757.x = _RESERVED_IDENTIFIER_FIXUP_1147;
    float _RESERVED_IDENTIFIER_FIXUP_1153 = clamp((_RESERVED_IDENTIFIER_FIXUP_1147 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2757.x = _RESERVED_IDENTIFIER_FIXUP_1153;
    float _RESERVED_IDENTIFIER_FIXUP_1159 = ((-_RESERVED_IDENTIFIER_FIXUP_1153) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2757.y = _RESERVED_IDENTIFIER_FIXUP_1159;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3486;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3485;
    if (_RESERVED_IDENTIFIER_FIXUP_1159 != (-_RESERVED_IDENTIFIER_FIXUP_1159))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3509 = vec4(_RESERVED_IDENTIFIER_FIXUP_1153, (texcoord4.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1088);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1177 = _RESERVED_IDENTIFIER_FIXUP_3509.yz;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1181 = _RESERVED_IDENTIFIER_FIXUP_1177 + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2773;
        _RESERVED_IDENTIFIER_FIXUP_2773.x = _RESERVED_IDENTIFIER_FIXUP_1181.x;
        _RESERVED_IDENTIFIER_FIXUP_2773.y = _RESERVED_IDENTIFIER_FIXUP_1181.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1191 = _RESERVED_IDENTIFIER_FIXUP_1177 + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2777;
        _RESERVED_IDENTIFIER_FIXUP_2777.x = _RESERVED_IDENTIFIER_FIXUP_1191.x;
        _RESERVED_IDENTIFIER_FIXUP_2777.y = _RESERVED_IDENTIFIER_FIXUP_1191.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1201 = _RESERVED_IDENTIFIER_FIXUP_1177 + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2781;
        _RESERVED_IDENTIFIER_FIXUP_2781.x = _RESERVED_IDENTIFIER_FIXUP_1201.x;
        _RESERVED_IDENTIFIER_FIXUP_2781.y = _RESERVED_IDENTIFIER_FIXUP_1201.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1211 = _RESERVED_IDENTIFIER_FIXUP_1177 + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2785;
        _RESERVED_IDENTIFIER_FIXUP_2785.x = _RESERVED_IDENTIFIER_FIXUP_1211.x;
        _RESERVED_IDENTIFIER_FIXUP_2785.y = _RESERVED_IDENTIFIER_FIXUP_1211.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1219 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1219.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1219.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1225 = hdLod5(param_2, param_3);
        _RESERVED_IDENTIFIER_FIXUP_2773.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2777.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2781.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2785.w = 0.0;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_2773.xy;
        float param_5 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1225.y = hdLod5(param_4, param_5).x;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2777.xy;
        float param_7 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1225.z = hdLod5(param_6, param_7).x;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2781.xy;
        float param_9 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1225.w = hdLod5(param_8, param_9).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1282 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1225 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2785.xy;
        float param_11 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1288 = hdLod5(param_10, param_11).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3509.y = _RESERVED_IDENTIFIER_FIXUP_1288;
        float _RESERVED_IDENTIFIER_FIXUP_1293 = float(_RESERVED_IDENTIFIER_FIXUP_1288 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3509.y = _RESERVED_IDENTIFIER_FIXUP_1293;
        float _RESERVED_IDENTIFIER_FIXUP_1296 = dot(_RESERVED_IDENTIFIER_FIXUP_1282, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3509.z = _RESERVED_IDENTIFIER_FIXUP_1296;
        float _RESERVED_IDENTIFIER_FIXUP_1302 = _RESERVED_IDENTIFIER_FIXUP_1293 + _RESERVED_IDENTIFIER_FIXUP_1296;
        _RESERVED_IDENTIFIER_FIXUP_3509.y = _RESERVED_IDENTIFIER_FIXUP_1302;
        float _RESERVED_IDENTIFIER_FIXUP_1307 = (_RESERVED_IDENTIFIER_FIXUP_1302 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3509.y = _RESERVED_IDENTIFIER_FIXUP_1307;
        _RESERVED_IDENTIFIER_FIXUP_3509.x = (_RESERVED_IDENTIFIER_FIXUP_1153 * _RESERVED_IDENTIFIER_FIXUP_1307) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3486 = _RESERVED_IDENTIFIER_FIXUP_1282;
        _RESERVED_IDENTIFIER_FIXUP_3485 = _RESERVED_IDENTIFIER_FIXUP_3509;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2757.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3486 = _RESERVED_IDENTIFIER_FIXUP_2738;
        _RESERVED_IDENTIFIER_FIXUP_3485 = _RESERVED_IDENTIFIER_FIXUP_2757;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1325 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2841 = _RESERVED_IDENTIFIER_FIXUP_3485;
    _RESERVED_IDENTIFIER_FIXUP_2841.y = _RESERVED_IDENTIFIER_FIXUP_1325;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3489;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3487;
    if (_RESERVED_IDENTIFIER_FIXUP_1325 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_1334 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3002 = _RESERVED_IDENTIFIER_FIXUP_2841;
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1334.x;
        _RESERVED_IDENTIFIER_FIXUP_3002.z = _RESERVED_IDENTIFIER_FIXUP_1334.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1344 = _RESERVED_IDENTIFIER_FIXUP_3002.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3006;
        _RESERVED_IDENTIFIER_FIXUP_3006.x = _RESERVED_IDENTIFIER_FIXUP_1344.x;
        _RESERVED_IDENTIFIER_FIXUP_3006.y = _RESERVED_IDENTIFIER_FIXUP_1344.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1354 = _RESERVED_IDENTIFIER_FIXUP_3002.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3010;
        _RESERVED_IDENTIFIER_FIXUP_3010.x = _RESERVED_IDENTIFIER_FIXUP_1354.x;
        _RESERVED_IDENTIFIER_FIXUP_3010.y = _RESERVED_IDENTIFIER_FIXUP_1354.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1364 = _RESERVED_IDENTIFIER_FIXUP_3002.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3014;
        _RESERVED_IDENTIFIER_FIXUP_3014.x = _RESERVED_IDENTIFIER_FIXUP_1364.x;
        _RESERVED_IDENTIFIER_FIXUP_3014.y = _RESERVED_IDENTIFIER_FIXUP_1364.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1374 = _RESERVED_IDENTIFIER_FIXUP_3002.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3018;
        _RESERVED_IDENTIFIER_FIXUP_3018.x = _RESERVED_IDENTIFIER_FIXUP_1374.x;
        _RESERVED_IDENTIFIER_FIXUP_3018.y = _RESERVED_IDENTIFIER_FIXUP_1374.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1382 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_1382.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1382.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1388 = hdLod6(param_12, param_13);
        _RESERVED_IDENTIFIER_FIXUP_3006.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3010.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3014.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3018.w = 0.0;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3006.xy;
        float param_15 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1388.y = hdLod6(param_14, param_15).x;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3010.xy;
        float param_17 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1388.z = hdLod6(param_16, param_17).x;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3014.xy;
        float param_19 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_1388.w = hdLod6(param_18, param_19).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1445 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1388 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3018.xy;
        float param_21 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_1451 = hdLod6(param_20, param_21).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1451;
        float _RESERVED_IDENTIFIER_FIXUP_1456 = float(_RESERVED_IDENTIFIER_FIXUP_1451 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1456;
        float _RESERVED_IDENTIFIER_FIXUP_1459 = dot(_RESERVED_IDENTIFIER_FIXUP_1445, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3002.z = _RESERVED_IDENTIFIER_FIXUP_1459;
        float _RESERVED_IDENTIFIER_FIXUP_1465 = _RESERVED_IDENTIFIER_FIXUP_1456 + _RESERVED_IDENTIFIER_FIXUP_1459;
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1465;
        _RESERVED_IDENTIFIER_FIXUP_3002.y = _RESERVED_IDENTIFIER_FIXUP_1465 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3489 = _RESERVED_IDENTIFIER_FIXUP_1445;
        _RESERVED_IDENTIFIER_FIXUP_3487 = _RESERVED_IDENTIFIER_FIXUP_3002;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1478 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2846 = _RESERVED_IDENTIFIER_FIXUP_2841;
        _RESERVED_IDENTIFIER_FIXUP_2846.z = _RESERVED_IDENTIFIER_FIXUP_1478;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3490;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3488;
        if (_RESERVED_IDENTIFIER_FIXUP_1478 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_1487 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2936 = _RESERVED_IDENTIFIER_FIXUP_2846;
            _RESERVED_IDENTIFIER_FIXUP_2936.z = _RESERVED_IDENTIFIER_FIXUP_1487.x;
            _RESERVED_IDENTIFIER_FIXUP_2936.w = _RESERVED_IDENTIFIER_FIXUP_1487.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1497 = _RESERVED_IDENTIFIER_FIXUP_2936.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2940;
            _RESERVED_IDENTIFIER_FIXUP_2940.x = _RESERVED_IDENTIFIER_FIXUP_1497.x;
            _RESERVED_IDENTIFIER_FIXUP_2940.y = _RESERVED_IDENTIFIER_FIXUP_1497.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1507 = _RESERVED_IDENTIFIER_FIXUP_2936.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2944;
            _RESERVED_IDENTIFIER_FIXUP_2944.x = _RESERVED_IDENTIFIER_FIXUP_1507.x;
            _RESERVED_IDENTIFIER_FIXUP_2944.y = _RESERVED_IDENTIFIER_FIXUP_1507.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1517 = _RESERVED_IDENTIFIER_FIXUP_2936.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2948;
            _RESERVED_IDENTIFIER_FIXUP_2948.x = _RESERVED_IDENTIFIER_FIXUP_1517.x;
            _RESERVED_IDENTIFIER_FIXUP_2948.y = _RESERVED_IDENTIFIER_FIXUP_1517.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1527 = _RESERVED_IDENTIFIER_FIXUP_2936.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2952;
            _RESERVED_IDENTIFIER_FIXUP_2952.x = _RESERVED_IDENTIFIER_FIXUP_1527.x;
            _RESERVED_IDENTIFIER_FIXUP_2952.y = _RESERVED_IDENTIFIER_FIXUP_1527.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1535 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1535.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1535.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1541 = hdLod7(param_22, param_23);
            _RESERVED_IDENTIFIER_FIXUP_2940.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2944.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2948.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2952.w = 0.0;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_2940.xy;
            float param_25 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1541.y = hdLod7(param_24, param_25).x;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_2944.xy;
            float param_27 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1541.z = hdLod7(param_26, param_27).x;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_2948.xy;
            float param_29 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1541.w = hdLod7(param_28, param_29).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1598 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1541 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_2952.xy;
            float param_31 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1604 = hdLod7(param_30, param_31).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_2936.z = _RESERVED_IDENTIFIER_FIXUP_1604;
            float _RESERVED_IDENTIFIER_FIXUP_1609 = float(_RESERVED_IDENTIFIER_FIXUP_1604 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2936.z = _RESERVED_IDENTIFIER_FIXUP_1609;
            float _RESERVED_IDENTIFIER_FIXUP_1612 = dot(_RESERVED_IDENTIFIER_FIXUP_1598, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2936.w = _RESERVED_IDENTIFIER_FIXUP_1612;
            float _RESERVED_IDENTIFIER_FIXUP_1618 = _RESERVED_IDENTIFIER_FIXUP_1609 + _RESERVED_IDENTIFIER_FIXUP_1612;
            _RESERVED_IDENTIFIER_FIXUP_2936.z = _RESERVED_IDENTIFIER_FIXUP_1618;
            _RESERVED_IDENTIFIER_FIXUP_2936.y = _RESERVED_IDENTIFIER_FIXUP_1618 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3490 = _RESERVED_IDENTIFIER_FIXUP_1598;
            _RESERVED_IDENTIFIER_FIXUP_3488 = _RESERVED_IDENTIFIER_FIXUP_2936;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2850 = _RESERVED_IDENTIFIER_FIXUP_3486;
            _RESERVED_IDENTIFIER_FIXUP_2850.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2850.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1634 = (_RESERVED_IDENTIFIER_FIXUP_2850.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_2855;
            _RESERVED_IDENTIFIER_FIXUP_2855.x = _RESERVED_IDENTIFIER_FIXUP_1634.x;
            _RESERVED_IDENTIFIER_FIXUP_2855.y = _RESERVED_IDENTIFIER_FIXUP_1634.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1644 = _RESERVED_IDENTIFIER_FIXUP_2855.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2859;
            _RESERVED_IDENTIFIER_FIXUP_2859.x = _RESERVED_IDENTIFIER_FIXUP_1644.x;
            _RESERVED_IDENTIFIER_FIXUP_2859.y = _RESERVED_IDENTIFIER_FIXUP_1644.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1654 = _RESERVED_IDENTIFIER_FIXUP_2855.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2863;
            _RESERVED_IDENTIFIER_FIXUP_2863.x = _RESERVED_IDENTIFIER_FIXUP_1654.x;
            _RESERVED_IDENTIFIER_FIXUP_2863.y = _RESERVED_IDENTIFIER_FIXUP_1654.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1664 = _RESERVED_IDENTIFIER_FIXUP_2855.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2867;
            _RESERVED_IDENTIFIER_FIXUP_2867.x = _RESERVED_IDENTIFIER_FIXUP_1664.x;
            _RESERVED_IDENTIFIER_FIXUP_2867.y = _RESERVED_IDENTIFIER_FIXUP_1664.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1674 = _RESERVED_IDENTIFIER_FIXUP_2855.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2871;
            _RESERVED_IDENTIFIER_FIXUP_2871.x = _RESERVED_IDENTIFIER_FIXUP_1674.x;
            _RESERVED_IDENTIFIER_FIXUP_2871.y = _RESERVED_IDENTIFIER_FIXUP_1674.y;
            _RESERVED_IDENTIFIER_FIXUP_2855.w = 0.0;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_2855.xy;
            float param_33 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1688 = hdLod8(param_32, param_33);
            _RESERVED_IDENTIFIER_FIXUP_2859.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2863.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2867.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2871.w = 0.0;
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_2859.xy;
            float param_35 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1688.y = hdLod8(param_34, param_35).x;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_2863.xy;
            float param_37 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1688.z = hdLod8(param_36, param_37).x;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_2867.xy;
            float param_39 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_1688.w = hdLod8(param_38, param_39).x;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2871.xy;
            float param_41 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_1751 = hdLod8(param_40, param_41).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2911 = _RESERVED_IDENTIFIER_FIXUP_2846;
            _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1751;
            float _RESERVED_IDENTIFIER_FIXUP_1756 = float(_RESERVED_IDENTIFIER_FIXUP_1751 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1756;
            float _RESERVED_IDENTIFIER_FIXUP_1759 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_1688 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_2911.w = _RESERVED_IDENTIFIER_FIXUP_1759;
            float _RESERVED_IDENTIFIER_FIXUP_1765 = _RESERVED_IDENTIFIER_FIXUP_1756 + _RESERVED_IDENTIFIER_FIXUP_1759;
            _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1765;
            float _RESERVED_IDENTIFIER_FIXUP_1773 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_2911.w = _RESERVED_IDENTIFIER_FIXUP_1773;
            float _RESERVED_IDENTIFIER_FIXUP_1779 = clamp((_RESERVED_IDENTIFIER_FIXUP_1773 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2911.w = _RESERVED_IDENTIFIER_FIXUP_1779;
            float _RESERVED_IDENTIFIER_FIXUP_1784 = (_RESERVED_IDENTIFIER_FIXUP_1765 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1784;
            _RESERVED_IDENTIFIER_FIXUP_2911.y = (_RESERVED_IDENTIFIER_FIXUP_1779 * _RESERVED_IDENTIFIER_FIXUP_1784) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3490 = _RESERVED_IDENTIFIER_FIXUP_2850;
            _RESERVED_IDENTIFIER_FIXUP_3488 = _RESERVED_IDENTIFIER_FIXUP_2911;
        }
        _RESERVED_IDENTIFIER_FIXUP_3489 = _RESERVED_IDENTIFIER_FIXUP_3490;
        _RESERVED_IDENTIFIER_FIXUP_3487 = _RESERVED_IDENTIFIER_FIXUP_3488;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1799 = min(_RESERVED_IDENTIFIER_FIXUP_3487.y, _RESERVED_IDENTIFIER_FIXUP_3487.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3070 = _RESERVED_IDENTIFIER_FIXUP_3489;
    _RESERVED_IDENTIFIER_FIXUP_3070.x = _RESERVED_IDENTIFIER_FIXUP_1799;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3510 = vec4((_RESERVED_IDENTIFIER_FIXUP_1799 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1821 = _RESERVED_IDENTIFIER_FIXUP_3070.xxx * _RESERVED_IDENTIFIER_FIXUP_3510.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3081 = _RESERVED_IDENTIFIER_FIXUP_3510;
    _RESERVED_IDENTIFIER_FIXUP_3081.y = _RESERVED_IDENTIFIER_FIXUP_1821.x;
    _RESERVED_IDENTIFIER_FIXUP_3081.z = _RESERVED_IDENTIFIER_FIXUP_1821.y;
    _RESERVED_IDENTIFIER_FIXUP_3081.w = _RESERVED_IDENTIFIER_FIXUP_1821.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1835 = (_RESERVED_IDENTIFIER_FIXUP_1140.xyz * _RESERVED_IDENTIFIER_FIXUP_3081.xxx) + _RESERVED_IDENTIFIER_FIXUP_3081.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3087 = _RESERVED_IDENTIFIER_FIXUP_1140;
    _RESERVED_IDENTIFIER_FIXUP_3087.x = _RESERVED_IDENTIFIER_FIXUP_1835.x;
    _RESERVED_IDENTIFIER_FIXUP_3087.y = _RESERVED_IDENTIFIER_FIXUP_1835.y;
    _RESERVED_IDENTIFIER_FIXUP_3087.z = _RESERVED_IDENTIFIER_FIXUP_1835.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1848 = _RESERVED_IDENTIFIER_FIXUP_3087.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3093 = _RESERVED_IDENTIFIER_FIXUP_3087;
    _RESERVED_IDENTIFIER_FIXUP_3093.x = _RESERVED_IDENTIFIER_FIXUP_1848.x;
    _RESERVED_IDENTIFIER_FIXUP_3093.y = _RESERVED_IDENTIFIER_FIXUP_1848.y;
    _RESERVED_IDENTIFIER_FIXUP_3093.z = _RESERVED_IDENTIFIER_FIXUP_1848.z;
    vec2 param_42 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1903 = hdTex0(param_42);
    vec2 param_43 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1907 = hdTex1(param_43);
    _RESERVED_IDENTIFIER_FIXUP_1907.w = _RESERVED_IDENTIFIER_FIXUP_1088;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1913 = _RESERVED_IDENTIFIER_FIXUP_1903.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1916 = _RESERVED_IDENTIFIER_FIXUP_1913 * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3109 = vec4(0.0);
    _RESERVED_IDENTIFIER_FIXUP_3109.x = _RESERVED_IDENTIFIER_FIXUP_1916.x;
    _RESERVED_IDENTIFIER_FIXUP_3109.y = _RESERVED_IDENTIFIER_FIXUP_1916.y;
    _RESERVED_IDENTIFIER_FIXUP_3109.z = _RESERVED_IDENTIFIER_FIXUP_1916.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1927 = _RESERVED_IDENTIFIER_FIXUP_3109.xyz + _RESERVED_IDENTIFIER_FIXUP_3109.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3115 = _RESERVED_IDENTIFIER_FIXUP_3109;
    _RESERVED_IDENTIFIER_FIXUP_3115.x = _RESERVED_IDENTIFIER_FIXUP_1927.x;
    _RESERVED_IDENTIFIER_FIXUP_3115.y = _RESERVED_IDENTIFIER_FIXUP_1927.y;
    _RESERVED_IDENTIFIER_FIXUP_3115.z = _RESERVED_IDENTIFIER_FIXUP_1927.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1942 = mix(_RESERVED_IDENTIFIER_FIXUP_3115.xyz, _RESERVED_IDENTIFIER_FIXUP_1913, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1907.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3121 = _RESERVED_IDENTIFIER_FIXUP_1903;
    _RESERVED_IDENTIFIER_FIXUP_3121.x = _RESERVED_IDENTIFIER_FIXUP_1942.x;
    _RESERVED_IDENTIFIER_FIXUP_3121.y = _RESERVED_IDENTIFIER_FIXUP_1942.y;
    _RESERVED_IDENTIFIER_FIXUP_3121.z = _RESERVED_IDENTIFIER_FIXUP_1942.z;
    float _RESERVED_IDENTIFIER_FIXUP_1952 = clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1907.xyz, vec3(1.0)), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3127 = _RESERVED_IDENTIFIER_FIXUP_1907;
    _RESERVED_IDENTIFIER_FIXUP_3127.x = _RESERVED_IDENTIFIER_FIXUP_1952;
    _RESERVED_IDENTIFIER_FIXUP_3127.x = 1.0 - _RESERVED_IDENTIFIER_FIXUP_1952;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1962 = _RESERVED_IDENTIFIER_FIXUP_3121 * _RESERVED_IDENTIFIER_FIXUP_3127.xxxx;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3134 = _RESERVED_IDENTIFIER_FIXUP_3127;
    _RESERVED_IDENTIFIER_FIXUP_3134.x = _RESERVED_IDENTIFIER_FIXUP_1147;
    float _RESERVED_IDENTIFIER_FIXUP_1975 = clamp((_RESERVED_IDENTIFIER_FIXUP_1147 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3134.x = _RESERVED_IDENTIFIER_FIXUP_1975;
    float _RESERVED_IDENTIFIER_FIXUP_1981 = ((-_RESERVED_IDENTIFIER_FIXUP_1975) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3134.y = _RESERVED_IDENTIFIER_FIXUP_1981;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3498;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3497;
    if (_RESERVED_IDENTIFIER_FIXUP_1981 != (-_RESERVED_IDENTIFIER_FIXUP_1981))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3512 = vec4(_RESERVED_IDENTIFIER_FIXUP_1975, (texcoord4.xy * vec2(0.5)) + vec2(0.5), _RESERVED_IDENTIFIER_FIXUP_1088);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1999 = _RESERVED_IDENTIFIER_FIXUP_3512.yz;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2003 = _RESERVED_IDENTIFIER_FIXUP_1999 + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3150;
        _RESERVED_IDENTIFIER_FIXUP_3150.x = _RESERVED_IDENTIFIER_FIXUP_2003.x;
        _RESERVED_IDENTIFIER_FIXUP_3150.y = _RESERVED_IDENTIFIER_FIXUP_2003.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2013 = _RESERVED_IDENTIFIER_FIXUP_1999 + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3154;
        _RESERVED_IDENTIFIER_FIXUP_3154.x = _RESERVED_IDENTIFIER_FIXUP_2013.x;
        _RESERVED_IDENTIFIER_FIXUP_3154.y = _RESERVED_IDENTIFIER_FIXUP_2013.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2023 = _RESERVED_IDENTIFIER_FIXUP_1999 + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3158;
        _RESERVED_IDENTIFIER_FIXUP_3158.x = _RESERVED_IDENTIFIER_FIXUP_2023.x;
        _RESERVED_IDENTIFIER_FIXUP_3158.y = _RESERVED_IDENTIFIER_FIXUP_2023.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2033 = _RESERVED_IDENTIFIER_FIXUP_1999 + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3162;
        _RESERVED_IDENTIFIER_FIXUP_3162.x = _RESERVED_IDENTIFIER_FIXUP_2033.x;
        _RESERVED_IDENTIFIER_FIXUP_3162.y = _RESERVED_IDENTIFIER_FIXUP_2033.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2041 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_2041.xy;
        float param_45 = _RESERVED_IDENTIFIER_FIXUP_2041.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2047 = hdLod5(param_44, param_45);
        _RESERVED_IDENTIFIER_FIXUP_3150.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3154.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3158.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3162.w = 0.0;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_3150.xy;
        float param_47 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2047.y = hdLod5(param_46, param_47).x;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3154.xy;
        float param_49 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2047.z = hdLod5(param_48, param_49).x;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3158.xy;
        float param_51 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2047.w = hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2104 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2047 - texcoord4.zzzz, vec4(0.0)));
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3162.xy;
        float param_53 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2110 = hdLod5(param_52, param_53).x - texcoord4.z;
        _RESERVED_IDENTIFIER_FIXUP_3512.y = _RESERVED_IDENTIFIER_FIXUP_2110;
        float _RESERVED_IDENTIFIER_FIXUP_2115 = float(_RESERVED_IDENTIFIER_FIXUP_2110 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3512.y = _RESERVED_IDENTIFIER_FIXUP_2115;
        float _RESERVED_IDENTIFIER_FIXUP_2118 = dot(_RESERVED_IDENTIFIER_FIXUP_2104, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3512.z = _RESERVED_IDENTIFIER_FIXUP_2118;
        float _RESERVED_IDENTIFIER_FIXUP_2124 = _RESERVED_IDENTIFIER_FIXUP_2115 + _RESERVED_IDENTIFIER_FIXUP_2118;
        _RESERVED_IDENTIFIER_FIXUP_3512.y = _RESERVED_IDENTIFIER_FIXUP_2124;
        float _RESERVED_IDENTIFIER_FIXUP_2129 = (_RESERVED_IDENTIFIER_FIXUP_2124 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3512.y = _RESERVED_IDENTIFIER_FIXUP_2129;
        _RESERVED_IDENTIFIER_FIXUP_3512.x = (_RESERVED_IDENTIFIER_FIXUP_1975 * _RESERVED_IDENTIFIER_FIXUP_2129) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3498 = _RESERVED_IDENTIFIER_FIXUP_2104;
        _RESERVED_IDENTIFIER_FIXUP_3497 = _RESERVED_IDENTIFIER_FIXUP_3512;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_3134.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3498 = _RESERVED_IDENTIFIER_FIXUP_3115;
        _RESERVED_IDENTIFIER_FIXUP_3497 = _RESERVED_IDENTIFIER_FIXUP_3134;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3218 = _RESERVED_IDENTIFIER_FIXUP_3497;
    _RESERVED_IDENTIFIER_FIXUP_3218.y = _RESERVED_IDENTIFIER_FIXUP_1325;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3501;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3499;
    if (_RESERVED_IDENTIFIER_FIXUP_1325 < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_2156 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3379 = _RESERVED_IDENTIFIER_FIXUP_3218;
        _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_2156.x;
        _RESERVED_IDENTIFIER_FIXUP_3379.z = _RESERVED_IDENTIFIER_FIXUP_2156.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2166 = _RESERVED_IDENTIFIER_FIXUP_3379.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3383;
        _RESERVED_IDENTIFIER_FIXUP_3383.x = _RESERVED_IDENTIFIER_FIXUP_2166.x;
        _RESERVED_IDENTIFIER_FIXUP_3383.y = _RESERVED_IDENTIFIER_FIXUP_2166.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2176 = _RESERVED_IDENTIFIER_FIXUP_3379.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3387;
        _RESERVED_IDENTIFIER_FIXUP_3387.x = _RESERVED_IDENTIFIER_FIXUP_2176.x;
        _RESERVED_IDENTIFIER_FIXUP_3387.y = _RESERVED_IDENTIFIER_FIXUP_2176.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2186 = _RESERVED_IDENTIFIER_FIXUP_3379.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3391;
        _RESERVED_IDENTIFIER_FIXUP_3391.x = _RESERVED_IDENTIFIER_FIXUP_2186.x;
        _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_2186.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2196 = _RESERVED_IDENTIFIER_FIXUP_3379.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3395;
        _RESERVED_IDENTIFIER_FIXUP_3395.x = _RESERVED_IDENTIFIER_FIXUP_2196.x;
        _RESERVED_IDENTIFIER_FIXUP_3395.y = _RESERVED_IDENTIFIER_FIXUP_2196.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2204 = (texcoord5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_2204.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2204.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2210 = hdLod6(param_54, param_55);
        _RESERVED_IDENTIFIER_FIXUP_3383.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3387.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3391.w = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_3395.w = 0.0;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3383.xy;
        float param_57 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2210.y = hdLod6(param_56, param_57).x;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3387.xy;
        float param_59 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2210.z = hdLod6(param_58, param_59).x;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3391.xy;
        float param_61 = 0.0;
        _RESERVED_IDENTIFIER_FIXUP_2210.w = hdLod6(param_60, param_61).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2267 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2210 - texcoord5.zzzz, vec4(0.0)));
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3395.xy;
        float param_63 = 0.0;
        float _RESERVED_IDENTIFIER_FIXUP_2273 = hdLod6(param_62, param_63).x - texcoord5.z;
        _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_2273;
        float _RESERVED_IDENTIFIER_FIXUP_2278 = float(_RESERVED_IDENTIFIER_FIXUP_2273 >= 0.0);
        _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_2278;
        float _RESERVED_IDENTIFIER_FIXUP_2281 = dot(_RESERVED_IDENTIFIER_FIXUP_2267, vec4(1.0));
        _RESERVED_IDENTIFIER_FIXUP_3379.z = _RESERVED_IDENTIFIER_FIXUP_2281;
        float _RESERVED_IDENTIFIER_FIXUP_2287 = _RESERVED_IDENTIFIER_FIXUP_2278 + _RESERVED_IDENTIFIER_FIXUP_2281;
        _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_2287;
        _RESERVED_IDENTIFIER_FIXUP_3379.y = _RESERVED_IDENTIFIER_FIXUP_2287 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3501 = _RESERVED_IDENTIFIER_FIXUP_2267;
        _RESERVED_IDENTIFIER_FIXUP_3499 = _RESERVED_IDENTIFIER_FIXUP_3379;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2300 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3223 = _RESERVED_IDENTIFIER_FIXUP_3218;
        _RESERVED_IDENTIFIER_FIXUP_3223.z = _RESERVED_IDENTIFIER_FIXUP_2300;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3502;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3500;
        if (_RESERVED_IDENTIFIER_FIXUP_2300 < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_2309 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3313 = _RESERVED_IDENTIFIER_FIXUP_3223;
            _RESERVED_IDENTIFIER_FIXUP_3313.z = _RESERVED_IDENTIFIER_FIXUP_2309.x;
            _RESERVED_IDENTIFIER_FIXUP_3313.w = _RESERVED_IDENTIFIER_FIXUP_2309.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2319 = _RESERVED_IDENTIFIER_FIXUP_3313.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3317;
            _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_2319.x;
            _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_2319.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2329 = _RESERVED_IDENTIFIER_FIXUP_3313.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3321;
            _RESERVED_IDENTIFIER_FIXUP_3321.x = _RESERVED_IDENTIFIER_FIXUP_2329.x;
            _RESERVED_IDENTIFIER_FIXUP_3321.y = _RESERVED_IDENTIFIER_FIXUP_2329.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2339 = _RESERVED_IDENTIFIER_FIXUP_3313.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3325;
            _RESERVED_IDENTIFIER_FIXUP_3325.x = _RESERVED_IDENTIFIER_FIXUP_2339.x;
            _RESERVED_IDENTIFIER_FIXUP_3325.y = _RESERVED_IDENTIFIER_FIXUP_2339.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2349 = _RESERVED_IDENTIFIER_FIXUP_3313.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3329;
            _RESERVED_IDENTIFIER_FIXUP_3329.x = _RESERVED_IDENTIFIER_FIXUP_2349.x;
            _RESERVED_IDENTIFIER_FIXUP_3329.y = _RESERVED_IDENTIFIER_FIXUP_2349.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2357 = (texcoord6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_2357.xy;
            float param_65 = _RESERVED_IDENTIFIER_FIXUP_2357.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2363 = hdLod7(param_64, param_65);
            _RESERVED_IDENTIFIER_FIXUP_3317.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3321.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3325.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3329.w = 0.0;
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3317.xy;
            float param_67 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2363.y = hdLod7(param_66, param_67).x;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3321.xy;
            float param_69 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2363.z = hdLod7(param_68, param_69).x;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3325.xy;
            float param_71 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2363.w = hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2420 = vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2363 - texcoord6.zzzz, vec4(0.0)));
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3329.xy;
            float param_73 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2426 = hdLod7(param_72, param_73).x - texcoord6.z;
            _RESERVED_IDENTIFIER_FIXUP_3313.z = _RESERVED_IDENTIFIER_FIXUP_2426;
            float _RESERVED_IDENTIFIER_FIXUP_2431 = float(_RESERVED_IDENTIFIER_FIXUP_2426 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3313.z = _RESERVED_IDENTIFIER_FIXUP_2431;
            float _RESERVED_IDENTIFIER_FIXUP_2434 = dot(_RESERVED_IDENTIFIER_FIXUP_2420, vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3313.w = _RESERVED_IDENTIFIER_FIXUP_2434;
            float _RESERVED_IDENTIFIER_FIXUP_2440 = _RESERVED_IDENTIFIER_FIXUP_2431 + _RESERVED_IDENTIFIER_FIXUP_2434;
            _RESERVED_IDENTIFIER_FIXUP_3313.z = _RESERVED_IDENTIFIER_FIXUP_2440;
            _RESERVED_IDENTIFIER_FIXUP_3313.y = _RESERVED_IDENTIFIER_FIXUP_2440 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3502 = _RESERVED_IDENTIFIER_FIXUP_2420;
            _RESERVED_IDENTIFIER_FIXUP_3500 = _RESERVED_IDENTIFIER_FIXUP_3313;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3227 = _RESERVED_IDENTIFIER_FIXUP_3498;
            _RESERVED_IDENTIFIER_FIXUP_3227.x = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3227.y = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2456 = (_RESERVED_IDENTIFIER_FIXUP_3227.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3232;
            _RESERVED_IDENTIFIER_FIXUP_3232.x = _RESERVED_IDENTIFIER_FIXUP_2456.x;
            _RESERVED_IDENTIFIER_FIXUP_3232.y = _RESERVED_IDENTIFIER_FIXUP_2456.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2466 = _RESERVED_IDENTIFIER_FIXUP_3232.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3236;
            _RESERVED_IDENTIFIER_FIXUP_3236.x = _RESERVED_IDENTIFIER_FIXUP_2466.x;
            _RESERVED_IDENTIFIER_FIXUP_3236.y = _RESERVED_IDENTIFIER_FIXUP_2466.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2476 = _RESERVED_IDENTIFIER_FIXUP_3232.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3240;
            _RESERVED_IDENTIFIER_FIXUP_3240.x = _RESERVED_IDENTIFIER_FIXUP_2476.x;
            _RESERVED_IDENTIFIER_FIXUP_3240.y = _RESERVED_IDENTIFIER_FIXUP_2476.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2486 = _RESERVED_IDENTIFIER_FIXUP_3232.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3244;
            _RESERVED_IDENTIFIER_FIXUP_3244.x = _RESERVED_IDENTIFIER_FIXUP_2486.x;
            _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_2486.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2496 = _RESERVED_IDENTIFIER_FIXUP_3232.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3248;
            _RESERVED_IDENTIFIER_FIXUP_3248.x = _RESERVED_IDENTIFIER_FIXUP_2496.x;
            _RESERVED_IDENTIFIER_FIXUP_3248.y = _RESERVED_IDENTIFIER_FIXUP_2496.y;
            _RESERVED_IDENTIFIER_FIXUP_3232.w = 0.0;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3232.xy;
            float param_75 = 0.0;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2510 = hdLod8(param_74, param_75);
            _RESERVED_IDENTIFIER_FIXUP_3236.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3240.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3244.w = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_3248.w = 0.0;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3236.xy;
            float param_77 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2510.y = hdLod8(param_76, param_77).x;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3240.xy;
            float param_79 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2510.z = hdLod8(param_78, param_79).x;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3244.xy;
            float param_81 = 0.0;
            _RESERVED_IDENTIFIER_FIXUP_2510.w = hdLod8(param_80, param_81).x;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3248.xy;
            float param_83 = 0.0;
            float _RESERVED_IDENTIFIER_FIXUP_2573 = hdLod8(param_82, param_83).x - texcoord6.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3288 = _RESERVED_IDENTIFIER_FIXUP_3223;
            _RESERVED_IDENTIFIER_FIXUP_3288.z = _RESERVED_IDENTIFIER_FIXUP_2573;
            float _RESERVED_IDENTIFIER_FIXUP_2578 = float(_RESERVED_IDENTIFIER_FIXUP_2573 >= 0.0);
            _RESERVED_IDENTIFIER_FIXUP_3288.z = _RESERVED_IDENTIFIER_FIXUP_2578;
            float _RESERVED_IDENTIFIER_FIXUP_2581 = dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_2510 - texcoord6.wwww, vec4(0.0))), vec4(1.0));
            _RESERVED_IDENTIFIER_FIXUP_3288.w = _RESERVED_IDENTIFIER_FIXUP_2581;
            float _RESERVED_IDENTIFIER_FIXUP_2587 = _RESERVED_IDENTIFIER_FIXUP_2578 + _RESERVED_IDENTIFIER_FIXUP_2581;
            _RESERVED_IDENTIFIER_FIXUP_3288.z = _RESERVED_IDENTIFIER_FIXUP_2587;
            float _RESERVED_IDENTIFIER_FIXUP_2595 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3288.w = _RESERVED_IDENTIFIER_FIXUP_2595;
            float _RESERVED_IDENTIFIER_FIXUP_2601 = clamp((_RESERVED_IDENTIFIER_FIXUP_2595 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3288.w = _RESERVED_IDENTIFIER_FIXUP_2601;
            float _RESERVED_IDENTIFIER_FIXUP_2606 = (_RESERVED_IDENTIFIER_FIXUP_2587 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3288.z = _RESERVED_IDENTIFIER_FIXUP_2606;
            _RESERVED_IDENTIFIER_FIXUP_3288.y = (_RESERVED_IDENTIFIER_FIXUP_2601 * _RESERVED_IDENTIFIER_FIXUP_2606) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3502 = _RESERVED_IDENTIFIER_FIXUP_3227;
            _RESERVED_IDENTIFIER_FIXUP_3500 = _RESERVED_IDENTIFIER_FIXUP_3288;
        }
        _RESERVED_IDENTIFIER_FIXUP_3501 = _RESERVED_IDENTIFIER_FIXUP_3502;
        _RESERVED_IDENTIFIER_FIXUP_3499 = _RESERVED_IDENTIFIER_FIXUP_3500;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2621 = min(_RESERVED_IDENTIFIER_FIXUP_3499.y, _RESERVED_IDENTIFIER_FIXUP_3499.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3447 = _RESERVED_IDENTIFIER_FIXUP_3501;
    _RESERVED_IDENTIFIER_FIXUP_3447.x = _RESERVED_IDENTIFIER_FIXUP_2621;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3513 = vec4((_RESERVED_IDENTIFIER_FIXUP_2621 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_1962.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2643 = _RESERVED_IDENTIFIER_FIXUP_3447.xxx * _RESERVED_IDENTIFIER_FIXUP_3513.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3458 = _RESERVED_IDENTIFIER_FIXUP_3513;
    _RESERVED_IDENTIFIER_FIXUP_3458.y = _RESERVED_IDENTIFIER_FIXUP_2643.x;
    _RESERVED_IDENTIFIER_FIXUP_3458.z = _RESERVED_IDENTIFIER_FIXUP_2643.y;
    _RESERVED_IDENTIFIER_FIXUP_3458.w = _RESERVED_IDENTIFIER_FIXUP_2643.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2657 = (_RESERVED_IDENTIFIER_FIXUP_1962.xyz * _RESERVED_IDENTIFIER_FIXUP_3458.xxx) + _RESERVED_IDENTIFIER_FIXUP_3458.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3464 = _RESERVED_IDENTIFIER_FIXUP_1962;
    _RESERVED_IDENTIFIER_FIXUP_3464.x = _RESERVED_IDENTIFIER_FIXUP_2657.x;
    _RESERVED_IDENTIFIER_FIXUP_3464.y = _RESERVED_IDENTIFIER_FIXUP_2657.y;
    _RESERVED_IDENTIFIER_FIXUP_3464.z = _RESERVED_IDENTIFIER_FIXUP_2657.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2670 = _RESERVED_IDENTIFIER_FIXUP_3464.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3470 = _RESERVED_IDENTIFIER_FIXUP_3464;
    _RESERVED_IDENTIFIER_FIXUP_3470.x = _RESERVED_IDENTIFIER_FIXUP_2670.x;
    _RESERVED_IDENTIFIER_FIXUP_3470.y = _RESERVED_IDENTIFIER_FIXUP_2670.y;
    _RESERVED_IDENTIFIER_FIXUP_3470.z = _RESERVED_IDENTIFIER_FIXUP_2670.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3470.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_942 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_951;
    if (_RESERVED_IDENTIFIER_FIXUP_942)
    {
        _RESERVED_IDENTIFIER_FIXUP_951 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_951 = _RESERVED_IDENTIFIER_FIXUP_942;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_951)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_988 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3093.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1014 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2723;
    if (_RESERVED_IDENTIFIER_FIXUP_988 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2723 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_988), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1014);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2723 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1014);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2723;
    wxlLight = vec4(color0.xyz * 2.0, 1.0);
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
    vec4 v4 = texcoord4;
    vec4 v5 = texcoord5;
    vec4 v6 = texcoord6;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    r1.w = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 hdB86 = r0.xyz * v0.xyz;
    r2.x = hdB86.x;
    r2.y = hdB86.y;
    r2.z = hdB86.z;
    vec4 hdB95 = r2;
    vec4 hdB97 = r2;
    vec3 hdB99 = hdB95.xyz + hdB97.xyz;
    r2.x = hdB99.x;
    r2.y = hdB99.y;
    r2.z = hdB99.z;
    vec4 hdB108 = r0;
    vec3 hdB117 = mix(r2.xyz, hdB108.xyz, greaterThanEqual(-r1.www, vec3(0.0)));
    r0.x = hdB117.x;
    r0.y = hdB117.y;
    r0.z = hdB117.z;
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        vec2 hdB175 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB175.x;
        r1.z = hdB175.y;
        vec2 hdB187 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB187.x;
        r2.y = hdB187.y;
        vec2 hdB198 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB198.x;
        r3.y = hdB198.y;
        vec2 hdB209 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB209.x;
        r4.y = hdB209.y;
        vec2 hdB220 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB220.x;
        r5.y = hdB220.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r6.xy;
        float param_3 = r6.w;
        r6 = hdLod5(param_2, param_3);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
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
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v4.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
    }
    else
    {
        r1.x = 1.0;
    }
    r1.y = max(abs(v5.x), abs(v5.y));
    if (r1.y < 1.0)
    {
        vec2 hdB350 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB350.x;
        r1.z = hdB350.y;
        vec2 hdB360 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = hdB360.x;
        r2.y = hdB360.y;
        vec2 hdB370 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB370.x;
        r3.y = hdB370.y;
        vec2 hdB380 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB380.x;
        r4.y = hdB380.y;
        vec2 hdB390 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB390.x;
        r5.y = hdB390.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_12 = r6.xy;
        float param_13 = r6.w;
        r6 = hdLod6(param_12, param_13);
        r2.z = 0.0;
        r2.w = 0.0;
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod6(param_14, param_15);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_16 = r3.xy;
        float param_17 = r3.w;
        r3 = hdLod6(param_16, param_17);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_18 = r4.xy;
        float param_19 = r4.w;
        r4 = hdLod6(param_18, param_19);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_20 = r5.xy;
        float param_21 = r5.w;
        r5 = hdLod6(param_20, param_21);
        r6.y = r2.x;
        r6.z = r3.x;
        r6.w = r4.x;
        r2 = r6 + (-v5.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r1.y = r5.x + (-v5.z);
        r1.y = float(r1.y >= 0.0);
        r1.z = dot(r2, vec4(1.0));
        r1.y += r1.z;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v6.x), abs(v6.y));
        if (r1.z < 1.0)
        {
            vec2 hdB505 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB505.x;
            r1.w = hdB505.y;
            vec2 hdB515 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB515.x;
            r2.y = hdB515.y;
            vec2 hdB525 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB525.x;
            r3.y = hdB525.y;
            vec2 hdB535 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB535.x;
            r4.y = hdB535.y;
            vec2 hdB545 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB545.x;
            r5.y = hdB545.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_22 = r6.xy;
            float param_23 = r6.w;
            r6 = hdLod7(param_22, param_23);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod7(param_24, param_25);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_28 = r4.xy;
            float param_29 = r4.w;
            r4 = hdLod7(param_28, param_29);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_30 = r5.xy;
            float param_31 = r5.w;
            r5 = hdLod7(param_30, param_31);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v6.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.z = r5.x + (-v6.z);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r2, vec4(1.0));
            r1.z += r1.w;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r2.x = v4.w;
            r2.y = v5.w;
            vec2 hdB653 = (r2.xy * vec2(0.5)) + vec2(0.5);
            r3.x = hdB653.x;
            r3.y = hdB653.y;
            vec2 hdB663 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB663.x;
            r4.y = hdB663.y;
            vec2 hdB673 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = hdB673.x;
            r5.y = hdB673.y;
            vec2 hdB683 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = hdB683.x;
            r6.y = hdB683.y;
            vec2 hdB693 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB693.x;
            r7.y = hdB693.y;
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_32 = r3.xy;
            float param_33 = r3.w;
            r3 = hdLod8(param_32, param_33);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_34 = r4.xy;
            float param_35 = r4.w;
            r4 = hdLod8(param_34, param_35);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_36 = r5.xy;
            float param_37 = r5.w;
            r5 = hdLod8(param_36, param_37);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_38 = r6.xy;
            float param_39 = r6.w;
            r6 = hdLod8(param_38, param_39);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_40 = r7.xy;
            float param_41 = r7.w;
            r7 = hdLod8(param_40, param_41);
            r3.y = r4.x;
            r3.z = r5.x;
            r3.w = r6.x;
            r3 += (-v6.wwww);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.z = r7.x + (-v6.w);
            r1.z = float(r1.z >= 0.0);
            r1.w = dot(r3, vec4(1.0));
            r1.z += r1.w;
            r1.w = max(abs(r2.x), abs(r2.y));
            r1.w = clamp((r1.w * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.z = (r1.z * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.w * r1.z) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB832 = r0.www * v1.xyz;
    r1.y = hdB832.x;
    r1.z = hdB832.y;
    r1.w = hdB832.z;
    vec4 hdB841 = r1;
    vec3 hdB843 = r2.xxx * hdB841.yzw;
    r1.y = hdB843.x;
    r1.z = hdB843.y;
    r1.w = hdB843.z;
    vec4 hdB850 = r0;
    vec3 hdB857 = (hdB850.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB857.x;
    r0.y = hdB857.y;
    r0.z = hdB857.z;
    vec4 hdB864 = r0;
    vec3 hdB871 = hdB864.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB871.x;
    r0.y = hdB871.y;
    r0.z = hdB871.z;
    vec3 hdB886 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB886.x;
    oC0.y = hdB886.y;
    oC0.z = hdB886.z;
    oC0.w = 1.0;
    bool hdB897 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB905;
    if (hdB897)
    {
        hdB905 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB905 = hdB897;
    }
    if (hdB905)
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
    bool _3058 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3068;
    if (_3058)
    {
        _3068 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 483u) != 0u;
    }
    else
    {
        _3068 = _3058;
    }
    if (_3068)
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
        bool _3093 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3108;
        if (!_3093)
        {
            _3108 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 483u) != 0u;
        }
        else
        {
            _3108 = _3093;
        }
        if (_3108)
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
