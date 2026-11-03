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
float _RESERVED_IDENTIFIER_FIXUP_1431;
vec4 _RESERVED_IDENTIFIER_FIXUP_1432;


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

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_554 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 _RESERVED_IDENTIFIER_FIXUP_563 = vec2(1.0, 0.0) * texcoord4.zx;
    float _RESERVED_IDENTIFIER_FIXUP_567 = _RESERVED_IDENTIFIER_FIXUP_563.y;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1169;
    _RESERVED_IDENTIFIER_FIXUP_1169.w = _RESERVED_IDENTIFIER_FIXUP_567;
    vec2 _RESERVED_IDENTIFIER_FIXUP_571 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_736 = hdTex0(param);
    vec3 _RESERVED_IDENTIFIER_FIXUP_763 = _RESERVED_IDENTIFIER_FIXUP_736.xyz * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_1431).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1258;
    _RESERVED_IDENTIFIER_FIXUP_1258.x = _RESERVED_IDENTIFIER_FIXUP_763.x;
    _RESERVED_IDENTIFIER_FIXUP_1258.y = _RESERVED_IDENTIFIER_FIXUP_763.y;
    _RESERVED_IDENTIFIER_FIXUP_1258.z = _RESERVED_IDENTIFIER_FIXUP_763.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_774 = _RESERVED_IDENTIFIER_FIXUP_1258.xyz + _RESERVED_IDENTIFIER_FIXUP_1258.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1264;
    _RESERVED_IDENTIFIER_FIXUP_1264.x = _RESERVED_IDENTIFIER_FIXUP_774.x;
    _RESERVED_IDENTIFIER_FIXUP_1264.y = _RESERVED_IDENTIFIER_FIXUP_774.y;
    _RESERVED_IDENTIFIER_FIXUP_1264.z = _RESERVED_IDENTIFIER_FIXUP_774.z;
    float _RESERVED_IDENTIFIER_FIXUP_783 = abs(optRegs.rows[optTile*82u+uint(1)].x);
    _RESERVED_IDENTIFIER_FIXUP_736.w = _RESERVED_IDENTIFIER_FIXUP_783;
    vec3 _RESERVED_IDENTIFIER_FIXUP_793 = mix(_RESERVED_IDENTIFIER_FIXUP_1264.xyz, _RESERVED_IDENTIFIER_FIXUP_736.xyz, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_736.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1278;
    _RESERVED_IDENTIFIER_FIXUP_1278.x = _RESERVED_IDENTIFIER_FIXUP_793.x;
    _RESERVED_IDENTIFIER_FIXUP_1278.y = _RESERVED_IDENTIFIER_FIXUP_793.y;
    _RESERVED_IDENTIFIER_FIXUP_1278.z = _RESERVED_IDENTIFIER_FIXUP_793.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_820 = _RESERVED_IDENTIFIER_FIXUP_1278.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1284;
    _RESERVED_IDENTIFIER_FIXUP_1284.x = _RESERVED_IDENTIFIER_FIXUP_820.x;
    _RESERVED_IDENTIFIER_FIXUP_1284.y = _RESERVED_IDENTIFIER_FIXUP_820.y;
    _RESERVED_IDENTIFIER_FIXUP_1284.z = _RESERVED_IDENTIFIER_FIXUP_820.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_835 = _RESERVED_IDENTIFIER_FIXUP_1284.xyz + optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1290;
    _RESERVED_IDENTIFIER_FIXUP_1290.x = _RESERVED_IDENTIFIER_FIXUP_835.x;
    _RESERVED_IDENTIFIER_FIXUP_1290.y = _RESERVED_IDENTIFIER_FIXUP_835.y;
    _RESERVED_IDENTIFIER_FIXUP_1290.z = _RESERVED_IDENTIFIER_FIXUP_835.z;
    vec2 param_1 = _RESERVED_IDENTIFIER_FIXUP_554.xy;
    float param_2 = _RESERVED_IDENTIFIER_FIXUP_554.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_872 = hdLod5(param_1, param_2);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1303 = _RESERVED_IDENTIFIER_FIXUP_872;
    _RESERVED_IDENTIFIER_FIXUP_1303.y = _RESERVED_IDENTIFIER_FIXUP_571.x;
    _RESERVED_IDENTIFIER_FIXUP_1303.z = _RESERVED_IDENTIFIER_FIXUP_571.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_893 = _RESERVED_IDENTIFIER_FIXUP_1303.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1307 = _RESERVED_IDENTIFIER_FIXUP_1169;
    _RESERVED_IDENTIFIER_FIXUP_1307.x = _RESERVED_IDENTIFIER_FIXUP_893.x;
    _RESERVED_IDENTIFIER_FIXUP_1307.y = _RESERVED_IDENTIFIER_FIXUP_893.y;
    vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1307.xy;
    float param_4 = _RESERVED_IDENTIFIER_FIXUP_567;
    float _RESERVED_IDENTIFIER_FIXUP_908 = _RESERVED_IDENTIFIER_FIXUP_872.x + hdLod5(param_3, param_4).x;
    _RESERVED_IDENTIFIER_FIXUP_1303.x = _RESERVED_IDENTIFIER_FIXUP_908;
    vec2 _RESERVED_IDENTIFIER_FIXUP_922 = _RESERVED_IDENTIFIER_FIXUP_1303.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1320 = _RESERVED_IDENTIFIER_FIXUP_1169;
    _RESERVED_IDENTIFIER_FIXUP_1320.x = _RESERVED_IDENTIFIER_FIXUP_922.x;
    _RESERVED_IDENTIFIER_FIXUP_1320.y = _RESERVED_IDENTIFIER_FIXUP_922.y;
    vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_1320.xy;
    float param_6 = _RESERVED_IDENTIFIER_FIXUP_567;
    float _RESERVED_IDENTIFIER_FIXUP_937 = _RESERVED_IDENTIFIER_FIXUP_908 + hdLod5(param_5, param_6).x;
    _RESERVED_IDENTIFIER_FIXUP_1303.x = _RESERVED_IDENTIFIER_FIXUP_937;
    vec2 _RESERVED_IDENTIFIER_FIXUP_944 = _RESERVED_IDENTIFIER_FIXUP_1303.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1329;
    _RESERVED_IDENTIFIER_FIXUP_1329.x = _RESERVED_IDENTIFIER_FIXUP_944.x;
    _RESERVED_IDENTIFIER_FIXUP_1329.y = _RESERVED_IDENTIFIER_FIXUP_944.y;
    vec2 _RESERVED_IDENTIFIER_FIXUP_954 = _RESERVED_IDENTIFIER_FIXUP_1303.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1333;
    _RESERVED_IDENTIFIER_FIXUP_1333.x = _RESERVED_IDENTIFIER_FIXUP_954.x;
    _RESERVED_IDENTIFIER_FIXUP_1333.y = _RESERVED_IDENTIFIER_FIXUP_954.y;
    _RESERVED_IDENTIFIER_FIXUP_1329.w = _RESERVED_IDENTIFIER_FIXUP_567;
    _RESERVED_IDENTIFIER_FIXUP_1333.w = _RESERVED_IDENTIFIER_FIXUP_567;
    vec2 param_7 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1026 = hdTex1(param_7);
    vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_1329.xy;
    float param_9 = _RESERVED_IDENTIFIER_FIXUP_567;
    vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_1333.xy;
    float param_11 = _RESERVED_IDENTIFIER_FIXUP_567;
    float _RESERVED_IDENTIFIER_FIXUP_1031 = min((clamp((max(abs(texcoord4.x), abs(texcoord4.y)) * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0) * ((((_RESERVED_IDENTIFIER_FIXUP_937 + hdLod5(param_8, param_9).x) + hdLod5(param_10, param_11).x) * 0.20000000298023223876953125) + (-1.0))) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1026.w);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1371;
    _RESERVED_IDENTIFIER_FIXUP_1371.x = _RESERVED_IDENTIFIER_FIXUP_1031;
    float _RESERVED_IDENTIFIER_FIXUP_1036 = (_RESERVED_IDENTIFIER_FIXUP_1031 * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_12 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1048 = hdTex0(param_12);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1434 = vec4(_RESERVED_IDENTIFIER_FIXUP_1036, _RESERVED_IDENTIFIER_FIXUP_1048.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1064 = _RESERVED_IDENTIFIER_FIXUP_1371.xxx * _RESERVED_IDENTIFIER_FIXUP_1434.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1386 = _RESERVED_IDENTIFIER_FIXUP_1434;
    _RESERVED_IDENTIFIER_FIXUP_1386.y = _RESERVED_IDENTIFIER_FIXUP_1064.x;
    _RESERVED_IDENTIFIER_FIXUP_1386.z = _RESERVED_IDENTIFIER_FIXUP_1064.y;
    _RESERVED_IDENTIFIER_FIXUP_1386.w = _RESERVED_IDENTIFIER_FIXUP_1064.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1075 = _RESERVED_IDENTIFIER_FIXUP_1048.xyz * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1392;
    _RESERVED_IDENTIFIER_FIXUP_1392.x = _RESERVED_IDENTIFIER_FIXUP_1075.x;
    _RESERVED_IDENTIFIER_FIXUP_1392.y = _RESERVED_IDENTIFIER_FIXUP_1075.y;
    _RESERVED_IDENTIFIER_FIXUP_1392.z = _RESERVED_IDENTIFIER_FIXUP_1075.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1086 = _RESERVED_IDENTIFIER_FIXUP_1392.xyz + _RESERVED_IDENTIFIER_FIXUP_1392.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1398;
    _RESERVED_IDENTIFIER_FIXUP_1398.x = _RESERVED_IDENTIFIER_FIXUP_1086.x;
    _RESERVED_IDENTIFIER_FIXUP_1398.y = _RESERVED_IDENTIFIER_FIXUP_1086.y;
    _RESERVED_IDENTIFIER_FIXUP_1398.z = _RESERVED_IDENTIFIER_FIXUP_1086.z;
    _RESERVED_IDENTIFIER_FIXUP_1048.w = _RESERVED_IDENTIFIER_FIXUP_783;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1105 = mix(_RESERVED_IDENTIFIER_FIXUP_1398.xyz, _RESERVED_IDENTIFIER_FIXUP_1048.xyz, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_1048.www, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_1406;
    _RESERVED_IDENTIFIER_FIXUP_1406.x = _RESERVED_IDENTIFIER_FIXUP_1105.x;
    _RESERVED_IDENTIFIER_FIXUP_1406.y = _RESERVED_IDENTIFIER_FIXUP_1105.y;
    _RESERVED_IDENTIFIER_FIXUP_1406.z = _RESERVED_IDENTIFIER_FIXUP_1105.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1119 = (_RESERVED_IDENTIFIER_FIXUP_1406.xyz * _RESERVED_IDENTIFIER_FIXUP_1386.xxx) + _RESERVED_IDENTIFIER_FIXUP_1386.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1412;
    _RESERVED_IDENTIFIER_FIXUP_1412.x = _RESERVED_IDENTIFIER_FIXUP_1119.x;
    _RESERVED_IDENTIFIER_FIXUP_1412.y = _RESERVED_IDENTIFIER_FIXUP_1119.y;
    _RESERVED_IDENTIFIER_FIXUP_1412.z = _RESERVED_IDENTIFIER_FIXUP_1119.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1132 = _RESERVED_IDENTIFIER_FIXUP_1412.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1418;
    _RESERVED_IDENTIFIER_FIXUP_1418.x = _RESERVED_IDENTIFIER_FIXUP_1132.x;
    _RESERVED_IDENTIFIER_FIXUP_1418.y = _RESERVED_IDENTIFIER_FIXUP_1132.y;
    _RESERVED_IDENTIFIER_FIXUP_1418.z = _RESERVED_IDENTIFIER_FIXUP_1132.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_1418.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_423 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_432;
    if (_RESERVED_IDENTIFIER_FIXUP_423)
    {
        _RESERVED_IDENTIFIER_FIXUP_432 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_432 = _RESERVED_IDENTIFIER_FIXUP_423;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_432)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_469 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(_RESERVED_IDENTIFIER_FIXUP_1290.xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_495 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_1158;
    if (_RESERVED_IDENTIFIER_FIXUP_469 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_1158 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_469), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_495);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1158 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_495);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_1158;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_1036);
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
    r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    vec2 param = r0.xy;
    float param_1 = r0.w;
    r0 = hdLod5(param, param_1);
    vec2 hdB62 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB62.x;
    r1.w = hdB62.y;
    vec2 hdB72 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = hdB72.x;
    r0.z = hdB72.y;
    vec2 hdB94 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = hdB94.x;
    r1.y = hdB94.y;
    vec2 param_2 = r1.xy;
    float param_3 = r1.w;
    r1 = hdLod5(param_2, param_3);
    r0.x += r1.x;
    vec2 hdB114 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB114.x;
    r1.w = hdB114.y;
    vec2 hdB125 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = hdB125.x;
    r1.y = hdB125.y;
    vec2 param_4 = r1.xy;
    float param_5 = r1.w;
    r1 = hdLod5(param_4, param_5);
    r0.x += r1.x;
    vec2 hdB148 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = hdB148.x;
    r1.y = hdB148.y;
    vec2 hdB159 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = hdB159.x;
    r2.y = hdB159.y;
    vec2 hdB166 = vec2(1.0, 0.0) * v4.zx;
    r1.z = hdB166.x;
    r1.w = hdB166.y;
    vec2 param_6 = r1.xy;
    float param_7 = r1.w;
    r1 = hdLod5(param_6, param_7);
    r0.x += r1.x;
    vec2 hdB185 = vec2(1.0, 0.0) * v4.zx;
    r2.z = hdB185.x;
    r2.w = hdB185.y;
    vec2 param_8 = r2.xy;
    float param_9 = r2.w;
    r1 = hdLod5(param_8, param_9);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    vec2 param_10 = v3.xy;
    r1 = hdTex1(param_10);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec2 param_11 = v2.xy;
    r1 = hdTex0(param_11);
    vec3 hdB260 = r1.www * v1.xyz;
    r0.y = hdB260.x;
    r0.z = hdB260.y;
    r0.w = hdB260.z;
    vec4 hdB269 = r0;
    vec3 hdB271 = r2.xxx * hdB269.yzw;
    r0.y = hdB271.x;
    r0.z = hdB271.y;
    r0.w = hdB271.z;
    vec3 hdB282 = r1.xyz * v0.xyz;
    r2.x = hdB282.x;
    r2.y = hdB282.y;
    r2.z = hdB282.z;
    vec4 hdB289 = r2;
    vec4 hdB291 = r2;
    vec3 hdB293 = hdB289.xyz + hdB291.xyz;
    r2.x = hdB293.x;
    r2.y = hdB293.y;
    r2.z = hdB293.z;
    r1.w = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec4 hdB308 = r1;
    vec4 hdB310 = r1;
    vec3 hdB317 = mix(r2.xyz, hdB308.xyz, greaterThanEqual(-hdB310.www, vec3(0.0)));
    r1.x = hdB317.x;
    r1.y = hdB317.y;
    r1.z = hdB317.z;
    vec4 hdB326 = r0;
    vec4 hdB329 = r0;
    vec3 hdB331 = (r1.xyz * hdB326.xxx) + hdB329.yzw;
    r0.x = hdB331.x;
    r0.y = hdB331.y;
    r0.z = hdB331.z;
    vec4 hdB338 = r0;
    vec3 hdB345 = hdB338.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB345.x;
    r0.y = hdB345.y;
    r0.z = hdB345.z;
    vec3 hdB360 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB360.x;
    oC0.y = hdB360.y;
    oC0.z = hdB360.z;
    oC0.w = 1.0;
    bool hdB371 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB379;
    if (hdB371)
    {
        hdB379 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB379 = hdB371;
    }
    if (hdB379)
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
    bool _1105 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1115;
    if (_1105)
    {
        _1115 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 35u) != 0u;
    }
    else
    {
        _1115 = _1105;
    }
    if (_1115)
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
        bool _1140 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1155;
        if (!_1140)
        {
            _1155 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 35u) != 0u;
        }
        else
        {
            _1155 = _1140;
        }
        if (_1155)
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
