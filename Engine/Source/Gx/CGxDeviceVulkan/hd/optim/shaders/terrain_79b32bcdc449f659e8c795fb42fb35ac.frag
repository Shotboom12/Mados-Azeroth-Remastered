#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
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
float _RESERVED_IDENTIFIER_FIXUP_1452;
vec4 _RESERVED_IDENTIFIER_FIXUP_1453;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
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
    bool _44 = hdOverride >= 0;
    bool _64;
    if (_44)
    {
        _64 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _64 = _44;
    }
    vec4 _65;
    if (_64)
    {
        _65 = vec4(float(hdOverride));
    }
    else
    {
        _65 = value;
    }
    return _65;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _82 = hdOverride >= 0;
    bool _91;
    if (_82)
    {
        _91 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _91 = _82;
    }
    vec4 _92;
    if (_91)
    {
        _92 = vec4(float(hdOverride));
    }
    else
    {
        _92 = value;
    }
    return _92;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_559 = (texcoord4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1178;
    _RESERVED_IDENTIFIER_FIXUP_1178.w = 0.0;
    vec2 _RESERVED_IDENTIFIER_FIXUP_573 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1180;
    _RESERVED_IDENTIFIER_FIXUP_1180.x = _RESERVED_IDENTIFIER_FIXUP_573.x;
    _RESERVED_IDENTIFIER_FIXUP_1180.y = _RESERVED_IDENTIFIER_FIXUP_573.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_583 = _RESERVED_IDENTIFIER_FIXUP_1180.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1184 = _RESERVED_IDENTIFIER_FIXUP_1178;
    _RESERVED_IDENTIFIER_FIXUP_1184.x = _RESERVED_IDENTIFIER_FIXUP_583.x;
    _RESERVED_IDENTIFIER_FIXUP_1184.y = _RESERVED_IDENTIFIER_FIXUP_583.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_606 = _RESERVED_IDENTIFIER_FIXUP_1180.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1196 = _RESERVED_IDENTIFIER_FIXUP_1178;
    _RESERVED_IDENTIFIER_FIXUP_1196.x = _RESERVED_IDENTIFIER_FIXUP_606.x;
    _RESERVED_IDENTIFIER_FIXUP_1196.y = _RESERVED_IDENTIFIER_FIXUP_606.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_625 = _RESERVED_IDENTIFIER_FIXUP_1180.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1204;
    _RESERVED_IDENTIFIER_FIXUP_1204.x = _RESERVED_IDENTIFIER_FIXUP_625.x;
    _RESERVED_IDENTIFIER_FIXUP_1204.y = _RESERVED_IDENTIFIER_FIXUP_625.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_635 = _RESERVED_IDENTIFIER_FIXUP_1180.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1208;
    _RESERVED_IDENTIFIER_FIXUP_1208.x = _RESERVED_IDENTIFIER_FIXUP_635.x;
    _RESERVED_IDENTIFIER_FIXUP_1208.y = _RESERVED_IDENTIFIER_FIXUP_635.y;
    _RESERVED_IDENTIFIER_FIXUP_1204.w = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1208.w = 0.0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_743 = OptTex0( texcoord0.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_770 = _RESERVED_IDENTIFIER_FIXUP_743.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1452).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1273;
    _RESERVED_IDENTIFIER_FIXUP_1273.x = _RESERVED_IDENTIFIER_FIXUP_770.x;
    _RESERVED_IDENTIFIER_FIXUP_1273.y = _RESERVED_IDENTIFIER_FIXUP_770.y;
    _RESERVED_IDENTIFIER_FIXUP_1273.z = _RESERVED_IDENTIFIER_FIXUP_770.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_781 = _RESERVED_IDENTIFIER_FIXUP_1273.xyz + _RESERVED_IDENTIFIER_FIXUP_1273.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1279;
    _RESERVED_IDENTIFIER_FIXUP_1279.x = _RESERVED_IDENTIFIER_FIXUP_781.x;
    _RESERVED_IDENTIFIER_FIXUP_1279.y = _RESERVED_IDENTIFIER_FIXUP_781.y;
    _RESERVED_IDENTIFIER_FIXUP_1279.z = _RESERVED_IDENTIFIER_FIXUP_781.z;
    float _RESERVED_IDENTIFIER_FIXUP_790 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_743.w = _RESERVED_IDENTIFIER_FIXUP_790;
    vec3 _RESERVED_IDENTIFIER_FIXUP_800 = mix(_RESERVED_IDENTIFIER_FIXUP_1279.xyz, _RESERVED_IDENTIFIER_FIXUP_743.xyz, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_743.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1293;
    _RESERVED_IDENTIFIER_FIXUP_1293.x = _RESERVED_IDENTIFIER_FIXUP_800.x;
    _RESERVED_IDENTIFIER_FIXUP_1293.y = _RESERVED_IDENTIFIER_FIXUP_800.y;
    _RESERVED_IDENTIFIER_FIXUP_1293.z = _RESERVED_IDENTIFIER_FIXUP_800.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_827 = _RESERVED_IDENTIFIER_FIXUP_1293.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1299;
    _RESERVED_IDENTIFIER_FIXUP_1299.x = _RESERVED_IDENTIFIER_FIXUP_827.x;
    _RESERVED_IDENTIFIER_FIXUP_1299.y = _RESERVED_IDENTIFIER_FIXUP_827.y;
    _RESERVED_IDENTIFIER_FIXUP_1299.z = _RESERVED_IDENTIFIER_FIXUP_827.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_842 = _RESERVED_IDENTIFIER_FIXUP_1299.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1305;
    _RESERVED_IDENTIFIER_FIXUP_1305.x = _RESERVED_IDENTIFIER_FIXUP_842.x;
    _RESERVED_IDENTIFIER_FIXUP_1305.y = _RESERVED_IDENTIFIER_FIXUP_842.y;
    _RESERVED_IDENTIFIER_FIXUP_1305.z = _RESERVED_IDENTIFIER_FIXUP_842.z;
    vec2 param = _RESERVED_IDENTIFIER_FIXUP_559.xy;
    float param_1 = _RESERVED_IDENTIFIER_FIXUP_559.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_879 = hdLod5(param, param_1);
    vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1184.xy;
    float param_3 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_879.y = hdLod5(param_2, param_3).x;
    vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1196.xy;
    float param_5 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_879.z = hdLod5(param_4, param_5).x;
    vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1204.xy;
    float param_7 = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_879.w = hdLod5(param_6, param_7).x;
    vec2 param_8 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1035 = hdTex1(param_8);
    vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_1208.xy;
    float param_10 = 0.0;
    float _RESERVED_IDENTIFIER_FIXUP_1040 = min((clamp((max(abs(texcoord4.x), abs(texcoord4.y)) * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * (((dot(vec4(greaterThanEqual(_RESERVED_IDENTIFIER_FIXUP_879 - texcoord4.zzzz, vec4(0.0))), vec4(1.0)) + float((hdLod5(param_9, param_10).x - texcoord4.z) >= 0.0)) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1035.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1392;
    _RESERVED_IDENTIFIER_FIXUP_1392.x = _RESERVED_IDENTIFIER_FIXUP_1040;
    float _RESERVED_IDENTIFIER_FIXUP_1045 = (_RESERVED_IDENTIFIER_FIXUP_1040 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1057 = OptTex0( texcoord0.xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1455 = vec4(_RESERVED_IDENTIFIER_FIXUP_1045, _RESERVED_IDENTIFIER_FIXUP_1057.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1073 = _RESERVED_IDENTIFIER_FIXUP_1392.xxx * _RESERVED_IDENTIFIER_FIXUP_1455.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1407 = _RESERVED_IDENTIFIER_FIXUP_1455;
    _RESERVED_IDENTIFIER_FIXUP_1407.y = _RESERVED_IDENTIFIER_FIXUP_1073.x;
    _RESERVED_IDENTIFIER_FIXUP_1407.z = _RESERVED_IDENTIFIER_FIXUP_1073.y;
    _RESERVED_IDENTIFIER_FIXUP_1407.w = _RESERVED_IDENTIFIER_FIXUP_1073.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1084 = _RESERVED_IDENTIFIER_FIXUP_1057.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1413;
    _RESERVED_IDENTIFIER_FIXUP_1413.x = _RESERVED_IDENTIFIER_FIXUP_1084.x;
    _RESERVED_IDENTIFIER_FIXUP_1413.y = _RESERVED_IDENTIFIER_FIXUP_1084.y;
    _RESERVED_IDENTIFIER_FIXUP_1413.z = _RESERVED_IDENTIFIER_FIXUP_1084.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1095 = _RESERVED_IDENTIFIER_FIXUP_1413.xyz + _RESERVED_IDENTIFIER_FIXUP_1413.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1419;
    _RESERVED_IDENTIFIER_FIXUP_1419.x = _RESERVED_IDENTIFIER_FIXUP_1095.x;
    _RESERVED_IDENTIFIER_FIXUP_1419.y = _RESERVED_IDENTIFIER_FIXUP_1095.y;
    _RESERVED_IDENTIFIER_FIXUP_1419.z = _RESERVED_IDENTIFIER_FIXUP_1095.z;
    _RESERVED_IDENTIFIER_FIXUP_1057.w = _RESERVED_IDENTIFIER_FIXUP_790;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1114 = mix(_RESERVED_IDENTIFIER_FIXUP_1419.xyz, _RESERVED_IDENTIFIER_FIXUP_1057.xyz, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1057.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1427;
    _RESERVED_IDENTIFIER_FIXUP_1427.x = _RESERVED_IDENTIFIER_FIXUP_1114.x;
    _RESERVED_IDENTIFIER_FIXUP_1427.y = _RESERVED_IDENTIFIER_FIXUP_1114.y;
    _RESERVED_IDENTIFIER_FIXUP_1427.z = _RESERVED_IDENTIFIER_FIXUP_1114.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1128 = (_RESERVED_IDENTIFIER_FIXUP_1427.xyz * _RESERVED_IDENTIFIER_FIXUP_1407.xxx) + _RESERVED_IDENTIFIER_FIXUP_1407.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1433;
    _RESERVED_IDENTIFIER_FIXUP_1433.x = _RESERVED_IDENTIFIER_FIXUP_1128.x;
    _RESERVED_IDENTIFIER_FIXUP_1433.y = _RESERVED_IDENTIFIER_FIXUP_1128.y;
    _RESERVED_IDENTIFIER_FIXUP_1433.z = _RESERVED_IDENTIFIER_FIXUP_1128.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1141 = _RESERVED_IDENTIFIER_FIXUP_1433.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1439;
    _RESERVED_IDENTIFIER_FIXUP_1439.x = _RESERVED_IDENTIFIER_FIXUP_1141.x;
    _RESERVED_IDENTIFIER_FIXUP_1439.y = _RESERVED_IDENTIFIER_FIXUP_1141.y;
    _RESERVED_IDENTIFIER_FIXUP_1439.z = _RESERVED_IDENTIFIER_FIXUP_1141.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1439.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_429 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_438;
    if (_RESERVED_IDENTIFIER_FIXUP_429)
    {
        _RESERVED_IDENTIFIER_FIXUP_438 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_438 = _RESERVED_IDENTIFIER_FIXUP_429;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_438)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_475 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1305.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_501 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1167;
    if (_RESERVED_IDENTIFIER_FIXUP_475 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1167 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_475), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_501);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1167 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_501);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1167;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1045);
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
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r1 = OptTex0( v2.xyz);
    vec3 hdB267 = r1.www * v1.xyz;
    r0.y = hdB267.x;
    r0.z = hdB267.y;
    r0.w = hdB267.z;
    vec4 hdB276 = r0;
    vec3 hdB278 = r2.xxx * hdB276.yzw;
    r0.y = hdB278.x;
    r0.z = hdB278.y;
    r0.w = hdB278.z;
    vec3 hdB289 = r1.xyz * v0.xyz;
    r2.x = hdB289.x;
    r2.y = hdB289.y;
    r2.z = hdB289.z;
    vec4 hdB296 = r2;
    vec4 hdB298 = r2;
    vec3 hdB300 = hdB296.xyz + hdB298.xyz;
    r2.x = hdB300.x;
    r2.y = hdB300.y;
    r2.z = hdB300.z;
    r1.w = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec4 hdB315 = r1;
    vec4 hdB317 = r1;
    vec3 hdB323 = mix(r2.xyz, hdB315.xyz, greaterThanEqual(-hdB317.www, vec3(0.0)));
    r1.x = hdB323.x;
    r1.y = hdB323.y;
    r1.z = hdB323.z;
    vec4 hdB332 = r0;
    vec4 hdB335 = r0;
    vec3 hdB337 = (r1.xyz * hdB332.xxx) + hdB335.yzw;
    r0.x = hdB337.x;
    r0.y = hdB337.y;
    r0.z = hdB337.z;
    vec4 hdB344 = r0;
    vec3 hdB351 = hdB344.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB351.x;
    r0.y = hdB351.y;
    r0.z = hdB351.z;
    vec3 hdB366 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB366.x;
    oC0.y = hdB366.y;
    oC0.z = hdB366.z;
    oC0.w = 1.0;
    bool hdB377 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB385;
    if (hdB377)
    {
        hdB385 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB385 = hdB377;
    }
    if (hdB385)
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
    bool _1050 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1060;
    if (_1050)
    {
        _1060 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 34u) != 0u;
    }
    else
    {
        _1060 = _1050;
    }
    if (_1060)
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
        bool _1085 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1100;
        if (!_1085)
        {
            _1100 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 34u) != 0u;
        }
        else
        {
            _1100 = _1085;
        }
        if (_1100)
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
