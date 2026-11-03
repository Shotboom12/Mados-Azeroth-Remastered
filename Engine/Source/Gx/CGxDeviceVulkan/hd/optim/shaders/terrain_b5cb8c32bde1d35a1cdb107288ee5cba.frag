#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform sampler2D s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1502;
vec4 _RESERVED_IDENTIFIER_FIXUP_1503;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _85 = hdOverride >= 0;
    bool _94;
    if (_85)
    {
        _94 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _94 = _85;
    }
    vec4 _95;
    if (_94)
    {
        _95 = vec4(float(hdOverride));
    }
    else
    {
        _95 = value;
    }
    return _95;
}

vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _112 = hdOverride >= 0;
    bool _122;
    if (_112)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _122 = _112;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_572 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_575 = _RESERVED_IDENTIFIER_FIXUP_572.xy;
    float _RESERVED_IDENTIFIER_FIXUP_577 = _RESERVED_IDENTIFIER_FIXUP_572.w;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_575;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_577;
    vec4 _RESERVED_IDENTIFIER_FIXUP_578 = hdLod5(param, param_1);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_1218.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_586 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1220;
    _RESERVED_IDENTIFIER_FIXUP_1220.x = _RESERVED_IDENTIFIER_FIXUP_586.x;
    _RESERVED_IDENTIFIER_FIXUP_1220.y = _RESERVED_IDENTIFIER_FIXUP_586.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_596 = _RESERVED_IDENTIFIER_FIXUP_1220.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1224 = _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_1224.x = _RESERVED_IDENTIFIER_FIXUP_596.x;
    _RESERVED_IDENTIFIER_FIXUP_1224.y = _RESERVED_IDENTIFIER_FIXUP_596.y;
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1224.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_578.y = hdLod5(param_2, param_3).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_619 = _RESERVED_IDENTIFIER_FIXUP_1220.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1236 = _RESERVED_IDENTIFIER_FIXUP_1218;
    _RESERVED_IDENTIFIER_FIXUP_1236.x = _RESERVED_IDENTIFIER_FIXUP_619.x;
    _RESERVED_IDENTIFIER_FIXUP_1236.y = _RESERVED_IDENTIFIER_FIXUP_619.y;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1236.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_578.z = hdLod5(param_4, param_5).x;
    vec2 _RESERVED_IDENTIFIER_FIXUP_638 = _RESERVED_IDENTIFIER_FIXUP_1220.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1244;
    _RESERVED_IDENTIFIER_FIXUP_1244.x = _RESERVED_IDENTIFIER_FIXUP_638.x;
    _RESERVED_IDENTIFIER_FIXUP_1244.y = _RESERVED_IDENTIFIER_FIXUP_638.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_648 = _RESERVED_IDENTIFIER_FIXUP_1220.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1248;
    _RESERVED_IDENTIFIER_FIXUP_1248.x = _RESERVED_IDENTIFIER_FIXUP_648.x;
    _RESERVED_IDENTIFIER_FIXUP_1248.y = _RESERVED_IDENTIFIER_FIXUP_648.y;
    _RESERVED_IDENTIFIER_FIXUP_1244.w = 0.0;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1244.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_578.w = hdLod5(param_6, param_7).x;
    _RESERVED_IDENTIFIER_FIXUP_1248.w = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_716 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec2 param_8 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_734 = hdTex1(param_8);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1299;
    _RESERVED_IDENTIFIER_FIXUP_1299.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_734.xyz, vec3(1.0)), 0.0, 1.0);
    float _RESERVED_IDENTIFIER_FIXUP_753 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_1299.y = _RESERVED_IDENTIFIER_FIXUP_753;
    vec2 param_9 = texcoord0.xy;
    vec3 _RESERVED_IDENTIFIER_FIXUP_760 = hdTex0(param_9).xyz;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1248.xy;
    float param_11 = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1504 = vec4(min((clamp((_RESERVED_IDENTIFIER_FIXUP_716 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_578 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_10, param_11).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_734.w), _RESERVED_IDENTIFIER_FIXUP_760 * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1502).xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_771 = _RESERVED_IDENTIFIER_FIXUP_1504.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_774 = _RESERVED_IDENTIFIER_FIXUP_771 + _RESERVED_IDENTIFIER_FIXUP_771;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1309 = _RESERVED_IDENTIFIER_FIXUP_1504;
    _RESERVED_IDENTIFIER_FIXUP_1309.y = _RESERVED_IDENTIFIER_FIXUP_774.x;
    _RESERVED_IDENTIFIER_FIXUP_1309.z = _RESERVED_IDENTIFIER_FIXUP_774.y;
    _RESERVED_IDENTIFIER_FIXUP_1309.w = _RESERVED_IDENTIFIER_FIXUP_774.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_789 = mix(_RESERVED_IDENTIFIER_FIXUP_1309.yzw, _RESERVED_IDENTIFIER_FIXUP_760, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1299.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1315;
    _RESERVED_IDENTIFIER_FIXUP_1315.x = _RESERVED_IDENTIFIER_FIXUP_789.x;
    _RESERVED_IDENTIFIER_FIXUP_1315.y = _RESERVED_IDENTIFIER_FIXUP_789.y;
    _RESERVED_IDENTIFIER_FIXUP_1315.z = _RESERVED_IDENTIFIER_FIXUP_789.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_799 = _RESERVED_IDENTIFIER_FIXUP_1299.xxxx * _RESERVED_IDENTIFIER_FIXUP_1315;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1321;
    _RESERVED_IDENTIFIER_FIXUP_1321.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1321.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1321.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_815 = _RESERVED_IDENTIFIER_FIXUP_1309.xxx * _RESERVED_IDENTIFIER_FIXUP_1321.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1327;
    _RESERVED_IDENTIFIER_FIXUP_1327.x = _RESERVED_IDENTIFIER_FIXUP_815.x;
    _RESERVED_IDENTIFIER_FIXUP_1327.y = _RESERVED_IDENTIFIER_FIXUP_815.y;
    _RESERVED_IDENTIFIER_FIXUP_1327.z = _RESERVED_IDENTIFIER_FIXUP_815.z;
    _RESERVED_IDENTIFIER_FIXUP_799.w = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_841 = (_RESERVED_IDENTIFIER_FIXUP_799.xyz * _RESERVED_IDENTIFIER_FIXUP_799.www) + _RESERVED_IDENTIFIER_FIXUP_1327.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1338;
    _RESERVED_IDENTIFIER_FIXUP_1338.x = _RESERVED_IDENTIFIER_FIXUP_841.x;
    _RESERVED_IDENTIFIER_FIXUP_1338.y = _RESERVED_IDENTIFIER_FIXUP_841.y;
    _RESERVED_IDENTIFIER_FIXUP_1338.z = _RESERVED_IDENTIFIER_FIXUP_841.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_854 = _RESERVED_IDENTIFIER_FIXUP_1338.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1344;
    _RESERVED_IDENTIFIER_FIXUP_1344.x = _RESERVED_IDENTIFIER_FIXUP_854.x;
    _RESERVED_IDENTIFIER_FIXUP_1344.y = _RESERVED_IDENTIFIER_FIXUP_854.y;
    _RESERVED_IDENTIFIER_FIXUP_1344.z = _RESERVED_IDENTIFIER_FIXUP_854.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_869 = _RESERVED_IDENTIFIER_FIXUP_1344.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1350;
    _RESERVED_IDENTIFIER_FIXUP_1350.x = _RESERVED_IDENTIFIER_FIXUP_869.x;
    _RESERVED_IDENTIFIER_FIXUP_1350.y = _RESERVED_IDENTIFIER_FIXUP_869.y;
    _RESERVED_IDENTIFIER_FIXUP_1350.z = _RESERVED_IDENTIFIER_FIXUP_869.z;
    vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_575;
    float param_13 = _RESERVED_IDENTIFIER_FIXUP_577;
    vec4 _RESERVED_IDENTIFIER_FIXUP_906 = hdLod5(param_12, param_13);
    vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1224.xy;
    float param_15 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_906.y = hdLod5(param_14, param_15).x;
    vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1236.xy;
    float param_17 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_906.z = hdLod5(param_16, param_17).x;
    vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1244.xy;
    float param_19 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_906.w = hdLod5(param_18, param_19).x;
    vec2 param_20 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1062 = hdTex1(param_20);
    vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_1248.xy;
    float param_22 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1067 = min((clamp((_RESERVED_IDENTIFIER_FIXUP_716 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_906 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_21, param_22).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1062.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1442;
    _RESERVED_IDENTIFIER_FIXUP_1442.x = 1.0 - clamp(dot(_RESERVED_IDENTIFIER_FIXUP_1062.xyz, vec3(1.0)), 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1442.y = _RESERVED_IDENTIFIER_FIXUP_753;
    vec2 param_23 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1086 = hdTex0(param_23);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1088 = _RESERVED_IDENTIFIER_FIXUP_1086.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1505 = vec4(_RESERVED_IDENTIFIER_FIXUP_1067, _RESERVED_IDENTIFIER_FIXUP_1088 * color0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1099 = _RESERVED_IDENTIFIER_FIXUP_1505.yzw;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1102 = _RESERVED_IDENTIFIER_FIXUP_1099 + _RESERVED_IDENTIFIER_FIXUP_1099;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1452 = _RESERVED_IDENTIFIER_FIXUP_1505;
    _RESERVED_IDENTIFIER_FIXUP_1452.y = _RESERVED_IDENTIFIER_FIXUP_1102.x;
    _RESERVED_IDENTIFIER_FIXUP_1452.z = _RESERVED_IDENTIFIER_FIXUP_1102.y;
    _RESERVED_IDENTIFIER_FIXUP_1452.w = _RESERVED_IDENTIFIER_FIXUP_1102.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1117 = mix(_RESERVED_IDENTIFIER_FIXUP_1452.yzw, _RESERVED_IDENTIFIER_FIXUP_1088, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1442.yyy, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1458 = _RESERVED_IDENTIFIER_FIXUP_1086;
    _RESERVED_IDENTIFIER_FIXUP_1458.x = _RESERVED_IDENTIFIER_FIXUP_1117.x;
    _RESERVED_IDENTIFIER_FIXUP_1458.y = _RESERVED_IDENTIFIER_FIXUP_1117.y;
    _RESERVED_IDENTIFIER_FIXUP_1458.z = _RESERVED_IDENTIFIER_FIXUP_1117.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1127 = _RESERVED_IDENTIFIER_FIXUP_1442.xxxx * _RESERVED_IDENTIFIER_FIXUP_1458;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1132 = _RESERVED_IDENTIFIER_FIXUP_1127.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1464;
    _RESERVED_IDENTIFIER_FIXUP_1464.x = _RESERVED_IDENTIFIER_FIXUP_1132.x;
    _RESERVED_IDENTIFIER_FIXUP_1464.y = _RESERVED_IDENTIFIER_FIXUP_1132.y;
    _RESERVED_IDENTIFIER_FIXUP_1464.z = _RESERVED_IDENTIFIER_FIXUP_1132.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1143 = _RESERVED_IDENTIFIER_FIXUP_1452.xxx * _RESERVED_IDENTIFIER_FIXUP_1464.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1470;
    _RESERVED_IDENTIFIER_FIXUP_1470.x = _RESERVED_IDENTIFIER_FIXUP_1143.x;
    _RESERVED_IDENTIFIER_FIXUP_1470.y = _RESERVED_IDENTIFIER_FIXUP_1143.y;
    _RESERVED_IDENTIFIER_FIXUP_1470.z = _RESERVED_IDENTIFIER_FIXUP_1143.z;
    float _RESERVED_IDENTIFIER_FIXUP_1153 = (_RESERVED_IDENTIFIER_FIXUP_1067 * 0.300000011920928955078125) + 0.699999988079071044921875;
    _RESERVED_IDENTIFIER_FIXUP_1127.w = _RESERVED_IDENTIFIER_FIXUP_1153;
    _RESERVED_IDENTIFIER_FIXUP_1127.w = _RESERVED_IDENTIFIER_FIXUP_1153;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1169 = (_RESERVED_IDENTIFIER_FIXUP_1127.xyz * _RESERVED_IDENTIFIER_FIXUP_1127.www) + _RESERVED_IDENTIFIER_FIXUP_1470.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1483;
    _RESERVED_IDENTIFIER_FIXUP_1483.x = _RESERVED_IDENTIFIER_FIXUP_1169.x;
    _RESERVED_IDENTIFIER_FIXUP_1483.y = _RESERVED_IDENTIFIER_FIXUP_1169.y;
    _RESERVED_IDENTIFIER_FIXUP_1483.z = _RESERVED_IDENTIFIER_FIXUP_1169.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1182 = _RESERVED_IDENTIFIER_FIXUP_1483.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1489;
    _RESERVED_IDENTIFIER_FIXUP_1489.x = _RESERVED_IDENTIFIER_FIXUP_1182.x;
    _RESERVED_IDENTIFIER_FIXUP_1489.y = _RESERVED_IDENTIFIER_FIXUP_1182.y;
    _RESERVED_IDENTIFIER_FIXUP_1489.z = _RESERVED_IDENTIFIER_FIXUP_1182.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1489.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_441 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_450;
    if (_RESERVED_IDENTIFIER_FIXUP_441)
    {
        _RESERVED_IDENTIFIER_FIXUP_450 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_450 = _RESERVED_IDENTIFIER_FIXUP_441;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_450)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_487 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1350.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_513 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1208;
    if (_RESERVED_IDENTIFIER_FIXUP_487 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1208 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_487), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_513);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1208 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_513);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1208;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1153);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB67 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = hdB67.x;
    r2.y = hdB67.y;
    vec2 hdB90 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB90.x;
    r1.y = hdB90.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 hdB114 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB114.x;
    r1.y = hdB114.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.z = r1.x;
    vec2 hdB134 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB134.x;
    r1.y = hdB134.y;
    vec4 hdB139 = r2;
    vec2 hdB145 = hdB139.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB145.x;
    r2.y = hdB145.y;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.w = r1.x;
    r0 += (-v4.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.y = r1.x + (-v4.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v3.xy;
    r1 = hdTex1(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    r0.y = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec2 param_11 = v2.xy;
    r1 = hdTex0(param_11);
    vec3 hdB274 = r1.xyz * v0.xyz;
    r2.y = hdB274.x;
    r2.z = hdB274.y;
    r2.w = hdB274.z;
    vec4 hdB281 = r2;
    vec4 hdB283 = r2;
    vec3 hdB285 = hdB281.yzw + hdB283.yzw;
    r2.y = hdB285.x;
    r2.z = hdB285.y;
    r2.w = hdB285.z;
    vec4 hdB294 = r1;
    vec3 hdB302 = mix(r2.yzw, hdB294.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r1.x = hdB302.x;
    r1.y = hdB302.y;
    r1.z = hdB302.z;
    r0 = r0.xxxx * r1;
    vec3 hdB317 = r0.www * v1.xyz;
    r1.x = hdB317.x;
    r1.y = hdB317.y;
    r1.z = hdB317.z;
    vec4 hdB326 = r1;
    vec3 hdB328 = r2.xxx * hdB326.xyz;
    r1.x = hdB328.x;
    r1.y = hdB328.y;
    r1.z = hdB328.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB342 = r0;
    vec4 hdB344 = r0;
    vec3 hdB349 = (hdB342.xyz * hdB344.www) + r1.xyz;
    r0.x = hdB349.x;
    r0.y = hdB349.y;
    r0.z = hdB349.z;
    vec4 hdB356 = r0;
    vec3 hdB363 = hdB356.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB363.x;
    r0.y = hdB363.y;
    r0.z = hdB363.z;
    vec3 hdB378 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB378.x;
    oC0.y = hdB378.y;
    oC0.z = hdB378.z;
    oC0.w = 1.0;
    bool hdB389 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB397;
    if (hdB389)
    {
        hdB397 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB397 = hdB389;
    }
    if (hdB397)
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
    bool _1220 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1230;
    if (_1220)
    {
        _1230 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1230 = _1220;
    }
    if (_1230)
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
        bool _1255 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1270;
        if (!_1255)
        {
            _1270 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1270 = _1255;
        }
        if (_1270)
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
