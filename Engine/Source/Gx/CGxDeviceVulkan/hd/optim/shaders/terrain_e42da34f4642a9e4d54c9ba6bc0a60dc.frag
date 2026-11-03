#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

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
float _RESERVED_IDENTIFIER_FIXUP_1441;
vec4 _RESERVED_IDENTIFIER_FIXUP_1442;


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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _46 = hdOverride >= 0;
    bool _66;
    if (_46)
    {
        _66 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _66 = _46;
    }
    vec4 _67;
    if (_66)
    {
        _67 = vec4(float(hdOverride));
    }
    else
    {
        _67 = value;
    }
    return _67;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _84 = hdOverride >= 0;
    bool _93;
    if (_84)
    {
        _93 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _93 = _84;
    }
    vec4 _94;
    if (_93)
    {
        _94 = vec4(float(hdOverride));
    }
    else
    {
        _94 = value;
    }
    return _94;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _112 = hdOverride >= 0;
    bool _122;
    if (_112)
    {
        _122 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
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
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_554 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_558 = hdTex1(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_565 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1178 = _RESERVED_IDENTIFIER_FIXUP_558;
    _RESERVED_IDENTIFIER_FIXUP_1178.x = _RESERVED_IDENTIFIER_FIXUP_565;
    float _RESERVED_IDENTIFIER_FIXUP_571 = clamp((_RESERVED_IDENTIFIER_FIXUP_565 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1178.x = _RESERVED_IDENTIFIER_FIXUP_571;
    float _RESERVED_IDENTIFIER_FIXUP_577 = ((-_RESERVED_IDENTIFIER_FIXUP_571) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1178.y = _RESERVED_IDENTIFIER_FIXUP_577;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1444;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1443;
    if (_RESERVED_IDENTIFIER_FIXUP_577 != (-_RESERVED_IDENTIFIER_FIXUP_577))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_589 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_589.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_589.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_595 = hdLod5(param_2, param_3);
        vec2 _RESERVED_IDENTIFIER_FIXUP_599 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1192 = _RESERVED_IDENTIFIER_FIXUP_1178;
        _RESERVED_IDENTIFIER_FIXUP_1192.y = _RESERVED_IDENTIFIER_FIXUP_599.x;
        _RESERVED_IDENTIFIER_FIXUP_1192.z = _RESERVED_IDENTIFIER_FIXUP_599.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_609 = _RESERVED_IDENTIFIER_FIXUP_1192.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1196;
        _RESERVED_IDENTIFIER_FIXUP_1196.x = _RESERVED_IDENTIFIER_FIXUP_609.x;
        _RESERVED_IDENTIFIER_FIXUP_1196.y = _RESERVED_IDENTIFIER_FIXUP_609.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_616 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_620 = _RESERVED_IDENTIFIER_FIXUP_616.y;
        _RESERVED_IDENTIFIER_FIXUP_1196.w = _RESERVED_IDENTIFIER_FIXUP_620;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1196.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_620;
        float _RESERVED_IDENTIFIER_FIXUP_631 = _RESERVED_IDENTIFIER_FIXUP_595.x + hdLod5(param_4, param_5).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1207 = _RESERVED_IDENTIFIER_FIXUP_595;
        _RESERVED_IDENTIFIER_FIXUP_1207.x = _RESERVED_IDENTIFIER_FIXUP_631;
        vec2 _RESERVED_IDENTIFIER_FIXUP_638 = _RESERVED_IDENTIFIER_FIXUP_1192.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1209;
        _RESERVED_IDENTIFIER_FIXUP_1209.x = _RESERVED_IDENTIFIER_FIXUP_638.x;
        _RESERVED_IDENTIFIER_FIXUP_1209.y = _RESERVED_IDENTIFIER_FIXUP_638.y;
        _RESERVED_IDENTIFIER_FIXUP_1209.w = _RESERVED_IDENTIFIER_FIXUP_620;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_1209.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_620;
        float _RESERVED_IDENTIFIER_FIXUP_660 = _RESERVED_IDENTIFIER_FIXUP_631 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_1207.x = _RESERVED_IDENTIFIER_FIXUP_660;
        vec2 _RESERVED_IDENTIFIER_FIXUP_667 = _RESERVED_IDENTIFIER_FIXUP_1192.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1222;
        _RESERVED_IDENTIFIER_FIXUP_1222.x = _RESERVED_IDENTIFIER_FIXUP_667.x;
        _RESERVED_IDENTIFIER_FIXUP_1222.y = _RESERVED_IDENTIFIER_FIXUP_667.y;
        _RESERVED_IDENTIFIER_FIXUP_1222.w = _RESERVED_IDENTIFIER_FIXUP_620;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1222.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_620;
        float _RESERVED_IDENTIFIER_FIXUP_689 = _RESERVED_IDENTIFIER_FIXUP_660 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_1207.x = _RESERVED_IDENTIFIER_FIXUP_689;
        vec2 _RESERVED_IDENTIFIER_FIXUP_696 = _RESERVED_IDENTIFIER_FIXUP_1192.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1235;
        _RESERVED_IDENTIFIER_FIXUP_1235.x = _RESERVED_IDENTIFIER_FIXUP_696.x;
        _RESERVED_IDENTIFIER_FIXUP_1235.y = _RESERVED_IDENTIFIER_FIXUP_696.y;
        _RESERVED_IDENTIFIER_FIXUP_1235.w = _RESERVED_IDENTIFIER_FIXUP_620;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1235.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_620;
        float _RESERVED_IDENTIFIER_FIXUP_718 = _RESERVED_IDENTIFIER_FIXUP_689 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_1192.y = _RESERVED_IDENTIFIER_FIXUP_718;
        float _RESERVED_IDENTIFIER_FIXUP_723 = (_RESERVED_IDENTIFIER_FIXUP_718 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1192.y = _RESERVED_IDENTIFIER_FIXUP_723;
        float _RESERVED_IDENTIFIER_FIXUP_730 = (_RESERVED_IDENTIFIER_FIXUP_571 * _RESERVED_IDENTIFIER_FIXUP_723) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1192.x = _RESERVED_IDENTIFIER_FIXUP_730;
        _RESERVED_IDENTIFIER_FIXUP_1207.x = min(_RESERVED_IDENTIFIER_FIXUP_730, _RESERVED_IDENTIFIER_FIXUP_558.w);
        _RESERVED_IDENTIFIER_FIXUP_1444 = _RESERVED_IDENTIFIER_FIXUP_1192;
        _RESERVED_IDENTIFIER_FIXUP_1443 = _RESERVED_IDENTIFIER_FIXUP_1207;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1189 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1189.x = _RESERVED_IDENTIFIER_FIXUP_558.w;
        _RESERVED_IDENTIFIER_FIXUP_1444 = _RESERVED_IDENTIFIER_FIXUP_1178;
        _RESERVED_IDENTIFIER_FIXUP_1443 = _RESERVED_IDENTIFIER_FIXUP_1189;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_1262 = _RESERVED_IDENTIFIER_FIXUP_1444;
    _RESERVED_IDENTIFIER_FIXUP_1262.x = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_759 = _RESERVED_IDENTIFIER_FIXUP_554.xyz * _RESERVED_IDENTIFIER_FIXUP_1262.xxx;
    _RESERVED_IDENTIFIER_FIXUP_554.x = _RESERVED_IDENTIFIER_FIXUP_759.x;
    _RESERVED_IDENTIFIER_FIXUP_554.y = _RESERVED_IDENTIFIER_FIXUP_759.y;
    _RESERVED_IDENTIFIER_FIXUP_554.z = _RESERVED_IDENTIFIER_FIXUP_759.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_770 = _RESERVED_IDENTIFIER_FIXUP_554.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1441).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1270 = _RESERVED_IDENTIFIER_FIXUP_554;
    _RESERVED_IDENTIFIER_FIXUP_1270.x = _RESERVED_IDENTIFIER_FIXUP_770.x;
    _RESERVED_IDENTIFIER_FIXUP_1270.y = _RESERVED_IDENTIFIER_FIXUP_770.y;
    _RESERVED_IDENTIFIER_FIXUP_1270.z = _RESERVED_IDENTIFIER_FIXUP_770.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_781 = _RESERVED_IDENTIFIER_FIXUP_1270.xyz + _RESERVED_IDENTIFIER_FIXUP_1270.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1276 = _RESERVED_IDENTIFIER_FIXUP_1270;
    _RESERVED_IDENTIFIER_FIXUP_1276.x = _RESERVED_IDENTIFIER_FIXUP_781.x;
    _RESERVED_IDENTIFIER_FIXUP_1276.y = _RESERVED_IDENTIFIER_FIXUP_781.y;
    _RESERVED_IDENTIFIER_FIXUP_1276.z = _RESERVED_IDENTIFIER_FIXUP_781.z;
    _RESERVED_IDENTIFIER_FIXUP_1262.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1262.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_1262.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_806 = (_RESERVED_IDENTIFIER_FIXUP_1262.xyz * _RESERVED_IDENTIFIER_FIXUP_1443.xxx) + _RESERVED_IDENTIFIER_FIXUP_1276.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1288 = _RESERVED_IDENTIFIER_FIXUP_1276;
    _RESERVED_IDENTIFIER_FIXUP_1288.x = _RESERVED_IDENTIFIER_FIXUP_806.x;
    _RESERVED_IDENTIFIER_FIXUP_1288.y = _RESERVED_IDENTIFIER_FIXUP_806.y;
    _RESERVED_IDENTIFIER_FIXUP_1288.z = _RESERVED_IDENTIFIER_FIXUP_806.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_819 = _RESERVED_IDENTIFIER_FIXUP_1288.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1294 = _RESERVED_IDENTIFIER_FIXUP_1288;
    _RESERVED_IDENTIFIER_FIXUP_1294.x = _RESERVED_IDENTIFIER_FIXUP_819.x;
    _RESERVED_IDENTIFIER_FIXUP_1294.y = _RESERVED_IDENTIFIER_FIXUP_819.y;
    _RESERVED_IDENTIFIER_FIXUP_1294.z = _RESERVED_IDENTIFIER_FIXUP_819.z;
    vec2 param_12 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_866 = hdTex0(param_12);
    vec2 param_13 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_870 = hdTex1(param_13);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1310 = _RESERVED_IDENTIFIER_FIXUP_870;
    _RESERVED_IDENTIFIER_FIXUP_1310.x = _RESERVED_IDENTIFIER_FIXUP_565;
    float _RESERVED_IDENTIFIER_FIXUP_883 = clamp((_RESERVED_IDENTIFIER_FIXUP_565 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_1310.x = _RESERVED_IDENTIFIER_FIXUP_883;
    float _RESERVED_IDENTIFIER_FIXUP_889 = ((-_RESERVED_IDENTIFIER_FIXUP_883) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_1310.y = _RESERVED_IDENTIFIER_FIXUP_889;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1448;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1447;
    if (_RESERVED_IDENTIFIER_FIXUP_889 != (-_RESERVED_IDENTIFIER_FIXUP_889))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_901 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_901.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_901.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_907 = hdLod5(param_14, param_15);
        vec2 _RESERVED_IDENTIFIER_FIXUP_911 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_1324 = _RESERVED_IDENTIFIER_FIXUP_1310;
        _RESERVED_IDENTIFIER_FIXUP_1324.y = _RESERVED_IDENTIFIER_FIXUP_911.x;
        _RESERVED_IDENTIFIER_FIXUP_1324.z = _RESERVED_IDENTIFIER_FIXUP_911.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_921 = _RESERVED_IDENTIFIER_FIXUP_1324.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1328;
        _RESERVED_IDENTIFIER_FIXUP_1328.x = _RESERVED_IDENTIFIER_FIXUP_921.x;
        _RESERVED_IDENTIFIER_FIXUP_1328.y = _RESERVED_IDENTIFIER_FIXUP_921.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_928 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_932 = _RESERVED_IDENTIFIER_FIXUP_928.y;
        _RESERVED_IDENTIFIER_FIXUP_1328.w = _RESERVED_IDENTIFIER_FIXUP_932;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_1328.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_932;
        float _RESERVED_IDENTIFIER_FIXUP_943 = _RESERVED_IDENTIFIER_FIXUP_907.x + hdLod5(param_16, param_17).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1339 = _RESERVED_IDENTIFIER_FIXUP_907;
        _RESERVED_IDENTIFIER_FIXUP_1339.x = _RESERVED_IDENTIFIER_FIXUP_943;
        vec2 _RESERVED_IDENTIFIER_FIXUP_950 = _RESERVED_IDENTIFIER_FIXUP_1324.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1341;
        _RESERVED_IDENTIFIER_FIXUP_1341.x = _RESERVED_IDENTIFIER_FIXUP_950.x;
        _RESERVED_IDENTIFIER_FIXUP_1341.y = _RESERVED_IDENTIFIER_FIXUP_950.y;
        _RESERVED_IDENTIFIER_FIXUP_1341.w = _RESERVED_IDENTIFIER_FIXUP_932;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_1341.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_932;
        float _RESERVED_IDENTIFIER_FIXUP_972 = _RESERVED_IDENTIFIER_FIXUP_943 + hdLod5(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_1339.x = _RESERVED_IDENTIFIER_FIXUP_972;
        vec2 _RESERVED_IDENTIFIER_FIXUP_979 = _RESERVED_IDENTIFIER_FIXUP_1324.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1354;
        _RESERVED_IDENTIFIER_FIXUP_1354.x = _RESERVED_IDENTIFIER_FIXUP_979.x;
        _RESERVED_IDENTIFIER_FIXUP_1354.y = _RESERVED_IDENTIFIER_FIXUP_979.y;
        _RESERVED_IDENTIFIER_FIXUP_1354.w = _RESERVED_IDENTIFIER_FIXUP_932;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1354.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_932;
        float _RESERVED_IDENTIFIER_FIXUP_1001 = _RESERVED_IDENTIFIER_FIXUP_972 + hdLod5(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_1339.x = _RESERVED_IDENTIFIER_FIXUP_1001;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1008 = _RESERVED_IDENTIFIER_FIXUP_1324.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1367;
        _RESERVED_IDENTIFIER_FIXUP_1367.x = _RESERVED_IDENTIFIER_FIXUP_1008.x;
        _RESERVED_IDENTIFIER_FIXUP_1367.y = _RESERVED_IDENTIFIER_FIXUP_1008.y;
        _RESERVED_IDENTIFIER_FIXUP_1367.w = _RESERVED_IDENTIFIER_FIXUP_932;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_1367.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_932;
        float _RESERVED_IDENTIFIER_FIXUP_1030 = _RESERVED_IDENTIFIER_FIXUP_1001 + hdLod5(param_22, param_23).x;
        _RESERVED_IDENTIFIER_FIXUP_1324.y = _RESERVED_IDENTIFIER_FIXUP_1030;
        float _RESERVED_IDENTIFIER_FIXUP_1035 = (_RESERVED_IDENTIFIER_FIXUP_1030 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_1324.y = _RESERVED_IDENTIFIER_FIXUP_1035;
        float _RESERVED_IDENTIFIER_FIXUP_1042 = (_RESERVED_IDENTIFIER_FIXUP_883 * _RESERVED_IDENTIFIER_FIXUP_1035) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_1324.x = _RESERVED_IDENTIFIER_FIXUP_1042;
        _RESERVED_IDENTIFIER_FIXUP_1339.x = min(_RESERVED_IDENTIFIER_FIXUP_1042, _RESERVED_IDENTIFIER_FIXUP_870.w);
        _RESERVED_IDENTIFIER_FIXUP_1448 = _RESERVED_IDENTIFIER_FIXUP_1324;
        _RESERVED_IDENTIFIER_FIXUP_1447 = _RESERVED_IDENTIFIER_FIXUP_1339;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1321 = vec4(0.0);
        _RESERVED_IDENTIFIER_FIXUP_1321.x = _RESERVED_IDENTIFIER_FIXUP_870.w;
        _RESERVED_IDENTIFIER_FIXUP_1448 = _RESERVED_IDENTIFIER_FIXUP_1310;
        _RESERVED_IDENTIFIER_FIXUP_1447 = _RESERVED_IDENTIFIER_FIXUP_1321;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1058 = (_RESERVED_IDENTIFIER_FIXUP_1447.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1392 = _RESERVED_IDENTIFIER_FIXUP_1448;
    _RESERVED_IDENTIFIER_FIXUP_1392.x = _RESERVED_IDENTIFIER_FIXUP_1058;
    _RESERVED_IDENTIFIER_FIXUP_1392.x = _RESERVED_IDENTIFIER_FIXUP_1058;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1071 = _RESERVED_IDENTIFIER_FIXUP_866.xyz * _RESERVED_IDENTIFIER_FIXUP_1392.xxx;
    _RESERVED_IDENTIFIER_FIXUP_866.x = _RESERVED_IDENTIFIER_FIXUP_1071.x;
    _RESERVED_IDENTIFIER_FIXUP_866.y = _RESERVED_IDENTIFIER_FIXUP_1071.y;
    _RESERVED_IDENTIFIER_FIXUP_866.z = _RESERVED_IDENTIFIER_FIXUP_1071.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1082 = _RESERVED_IDENTIFIER_FIXUP_866.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1404 = _RESERVED_IDENTIFIER_FIXUP_866;
    _RESERVED_IDENTIFIER_FIXUP_1404.x = _RESERVED_IDENTIFIER_FIXUP_1082.x;
    _RESERVED_IDENTIFIER_FIXUP_1404.y = _RESERVED_IDENTIFIER_FIXUP_1082.y;
    _RESERVED_IDENTIFIER_FIXUP_1404.z = _RESERVED_IDENTIFIER_FIXUP_1082.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1093 = _RESERVED_IDENTIFIER_FIXUP_1404.xyz + _RESERVED_IDENTIFIER_FIXUP_1404.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_1404;
    _RESERVED_IDENTIFIER_FIXUP_1410.x = _RESERVED_IDENTIFIER_FIXUP_1093.x;
    _RESERVED_IDENTIFIER_FIXUP_1410.y = _RESERVED_IDENTIFIER_FIXUP_1093.y;
    _RESERVED_IDENTIFIER_FIXUP_1410.z = _RESERVED_IDENTIFIER_FIXUP_1093.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1104 = _RESERVED_IDENTIFIER_FIXUP_1410.www * color1.xyz;
    _RESERVED_IDENTIFIER_FIXUP_1392.x = _RESERVED_IDENTIFIER_FIXUP_1104.x;
    _RESERVED_IDENTIFIER_FIXUP_1392.y = _RESERVED_IDENTIFIER_FIXUP_1104.y;
    _RESERVED_IDENTIFIER_FIXUP_1392.z = _RESERVED_IDENTIFIER_FIXUP_1104.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1118 = (_RESERVED_IDENTIFIER_FIXUP_1392.xyz * _RESERVED_IDENTIFIER_FIXUP_1447.xxx) + _RESERVED_IDENTIFIER_FIXUP_1410.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1422 = _RESERVED_IDENTIFIER_FIXUP_1410;
    _RESERVED_IDENTIFIER_FIXUP_1422.x = _RESERVED_IDENTIFIER_FIXUP_1118.x;
    _RESERVED_IDENTIFIER_FIXUP_1422.y = _RESERVED_IDENTIFIER_FIXUP_1118.y;
    _RESERVED_IDENTIFIER_FIXUP_1422.z = _RESERVED_IDENTIFIER_FIXUP_1118.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1131 = _RESERVED_IDENTIFIER_FIXUP_1422.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1428 = _RESERVED_IDENTIFIER_FIXUP_1422;
    _RESERVED_IDENTIFIER_FIXUP_1428.x = _RESERVED_IDENTIFIER_FIXUP_1131.x;
    _RESERVED_IDENTIFIER_FIXUP_1428.y = _RESERVED_IDENTIFIER_FIXUP_1131.y;
    _RESERVED_IDENTIFIER_FIXUP_1428.z = _RESERVED_IDENTIFIER_FIXUP_1131.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1428.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_421 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_430;
    if (_RESERVED_IDENTIFIER_FIXUP_421)
    {
        _RESERVED_IDENTIFIER_FIXUP_430 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_430 = _RESERVED_IDENTIFIER_FIXUP_421;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_430)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_467 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_1294.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_494 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1168;
    if (_RESERVED_IDENTIFIER_FIXUP_467 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1168 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_467), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_494);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1168 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_494);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1168;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1058);
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r2.xy;
        float param_3 = r2.w;
        r2 = hdLod5(param_2, param_3);
        vec2 hdB107 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB107.x;
        r1.z = hdB107.y;
        vec2 hdB129 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB129.x;
        r3.y = hdB129.y;
        vec2 hdB137 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB137.x;
        r3.w = hdB137.y;
        vec2 param_4 = r3.xy;
        float param_5 = r3.w;
        r3 = hdLod5(param_4, param_5);
        r2.x += r3.x;
        vec2 hdB160 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB160.x;
        r3.y = hdB160.y;
        vec2 hdB167 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB167.x;
        r3.w = hdB167.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r2.x += r3.x;
        vec2 hdB190 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = hdB190.x;
        r3.y = hdB190.y;
        vec2 hdB197 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB197.x;
        r3.w = hdB197.y;
        vec2 param_8 = r3.xy;
        float param_9 = r3.w;
        r3 = hdLod5(param_8, param_9);
        r2.x += r3.x;
        vec2 hdB220 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = hdB220.x;
        r3.y = hdB220.y;
        vec2 hdB227 = vec2(1.0, 0.0) * v4.zx;
        r3.z = hdB227.x;
        r3.w = hdB227.y;
        vec2 param_10 = r3.xy;
        float param_11 = r3.w;
        r3 = hdLod5(param_10, param_11);
        r1.y = r2.x + r3.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r1.w);
    }
    else
    {
        r2.x = r1.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB276 = r0;
    vec3 hdB280 = hdB276.xyz * r1.xxx;
    r0.x = hdB280.x;
    r0.y = hdB280.y;
    r0.z = hdB280.z;
    vec4 hdB287 = r0;
    vec3 hdB291 = hdB287.xyz * v0.xyz;
    r0.x = hdB291.x;
    r0.y = hdB291.y;
    r0.z = hdB291.z;
    vec4 hdB298 = r0;
    vec4 hdB300 = r0;
    vec3 hdB302 = hdB298.xyz + hdB300.xyz;
    r0.x = hdB302.x;
    r0.y = hdB302.y;
    r0.z = hdB302.z;
    vec3 hdB313 = r0.www * v1.xyz;
    r1.x = hdB313.x;
    r1.y = hdB313.y;
    r1.z = hdB313.z;
    vec4 hdB325 = r0;
    vec3 hdB327 = (r1.xyz * r2.xxx) + hdB325.xyz;
    r0.x = hdB327.x;
    r0.y = hdB327.y;
    r0.z = hdB327.z;
    vec4 hdB334 = r0;
    vec3 hdB341 = hdB334.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB341.x;
    r0.y = hdB341.y;
    r0.z = hdB341.z;
    vec3 hdB356 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB356.x;
    oC0.y = hdB356.y;
    oC0.z = hdB356.z;
    oC0.w = 1.0;
    bool hdB369 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB377;
    if (hdB369)
    {
        hdB377 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB377 = hdB369;
    }
    if (hdB377)
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
    bool _1351 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1361;
    if (_1351)
    {
        _1361 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1361 = _1351;
    }
    if (_1361)
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
        bool _1386 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1401;
        if (!_1386)
        {
            _1401 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1401 = _1386;
        }
        if (_1401)
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
