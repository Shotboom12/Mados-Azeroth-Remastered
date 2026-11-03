#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
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
float _RESERVED_IDENTIFIER_FIXUP_3576;
vec4 _RESERVED_IDENTIFIER_FIXUP_3577;


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
    bool _64 = hdOverride >= 0;
    bool _84;
    if (_64)
    {
        _84 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _84 = _64;
    }
    vec4 _85;
    if (_84)
    {
        _85 = vec4(float(hdOverride));
    }
    else
    {
        _85 = value;
    }
    return _85;
}

vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _102 = hdOverride >= 0;
    bool _111;
    if (_102)
    {
        _111 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _111 = _102;
    }
    vec4 _112;
    if (_111)
    {
        _112 = vec4(float(hdOverride));
    }
    else
    {
        _112 = value;
    }
    return _112;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _129 = hdOverride >= 0;
    bool _139;
    if (_129)
    {
        _139 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _139 = _129;
    }
    vec4 _140;
    if (_139)
    {
        _140 = vec4(float(hdOverride));
    }
    else
    {
        _140 = value;
    }
    return _140;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _157 = hdOverride >= 0;
    bool _167;
    if (_157)
    {
        _167 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _167 = _157;
    }
    vec4 _168;
    if (_167)
    {
        _168 = vec4(float(hdOverride));
    }
    else
    {
        _168 = value;
    }
    return _168;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _186 = hdOverride >= 0;
    bool _196;
    if (_186)
    {
        _196 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _196 = _186;
    }
    vec4 _197;
    if (_196)
    {
        _197 = vec4(float(hdOverride));
    }
    else
    {
        _197 = value;
    }
    return _197;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _215 = hdOverride >= 0;
    bool _225;
    if (_215)
    {
        _225 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _225 = _215;
    }
    vec4 _226;
    if (_225)
    {
        _226 = vec4(float(hdOverride));
    }
    else
    {
        _226 = value;
    }
    return _226;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _244 = hdOverride >= 0;
    bool _254;
    if (_244)
    {
        _254 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _254 = _244;
    }
    vec4 _255;
    if (_254)
    {
        _255 = vec4(float(hdOverride));
    }
    else
    {
        _255 = value;
    }
    return _255;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _273 = hdOverride >= 0;
    bool _283;
    if (_273)
    {
        _283 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _283 = _273;
    }
    vec4 _284;
    if (_283)
    {
        _284 = vec4(float(hdOverride));
    }
    else
    {
        _284 = value;
    }
    return _284;
}

void HDActual()
{
    vec2 param = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1122 = hdTex0(param);
    vec2 param_1 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1126 = hdTex1(param_1);
    vec2 param_2 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1130 = hdTex2(param_2);
    vec2 param_3 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1134 = hdTex3(param_3);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1138 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2845;
    _RESERVED_IDENTIFIER_FIXUP_2845.x = _RESERVED_IDENTIFIER_FIXUP_1138.x;
    _RESERVED_IDENTIFIER_FIXUP_2845.y = _RESERVED_IDENTIFIER_FIXUP_1138.y;
    float _RESERVED_IDENTIFIER_FIXUP_1144 = _RESERVED_IDENTIFIER_FIXUP_1138.z;
    _RESERVED_IDENTIFIER_FIXUP_2845.z = _RESERVED_IDENTIFIER_FIXUP_1144;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1146 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3576).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1149 = _RESERVED_IDENTIFIER_FIXUP_1146 + _RESERVED_IDENTIFIER_FIXUP_1146;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2851;
    _RESERVED_IDENTIFIER_FIXUP_2851.x = _RESERVED_IDENTIFIER_FIXUP_1149.x;
    _RESERVED_IDENTIFIER_FIXUP_2851.y = _RESERVED_IDENTIFIER_FIXUP_1149.y;
    _RESERVED_IDENTIFIER_FIXUP_2851.z = _RESERVED_IDENTIFIER_FIXUP_1149.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1157 = _RESERVED_IDENTIFIER_FIXUP_1122.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1160 = _RESERVED_IDENTIFIER_FIXUP_1157 * _RESERVED_IDENTIFIER_FIXUP_2851.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2857;
    _RESERVED_IDENTIFIER_FIXUP_2857.x = _RESERVED_IDENTIFIER_FIXUP_1160.x;
    _RESERVED_IDENTIFIER_FIXUP_2857.y = _RESERVED_IDENTIFIER_FIXUP_1160.y;
    _RESERVED_IDENTIFIER_FIXUP_2857.z = _RESERVED_IDENTIFIER_FIXUP_1160.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1174 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2845.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1175 = mix(_RESERVED_IDENTIFIER_FIXUP_2857.xyz, _RESERVED_IDENTIFIER_FIXUP_1157, _RESERVED_IDENTIFIER_FIXUP_1174);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2863 = _RESERVED_IDENTIFIER_FIXUP_1122;
    _RESERVED_IDENTIFIER_FIXUP_2863.x = _RESERVED_IDENTIFIER_FIXUP_1175.x;
    _RESERVED_IDENTIFIER_FIXUP_2863.y = _RESERVED_IDENTIFIER_FIXUP_1175.y;
    _RESERVED_IDENTIFIER_FIXUP_2863.z = _RESERVED_IDENTIFIER_FIXUP_1175.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1183 = _RESERVED_IDENTIFIER_FIXUP_1126.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1186 = _RESERVED_IDENTIFIER_FIXUP_1183 * _RESERVED_IDENTIFIER_FIXUP_2851.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2869;
    _RESERVED_IDENTIFIER_FIXUP_2869.x = _RESERVED_IDENTIFIER_FIXUP_1186.x;
    _RESERVED_IDENTIFIER_FIXUP_2869.y = _RESERVED_IDENTIFIER_FIXUP_1186.y;
    _RESERVED_IDENTIFIER_FIXUP_2869.z = _RESERVED_IDENTIFIER_FIXUP_1186.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1200 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2845.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1201 = mix(_RESERVED_IDENTIFIER_FIXUP_2869.xyz, _RESERVED_IDENTIFIER_FIXUP_1183, _RESERVED_IDENTIFIER_FIXUP_1200);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2875 = _RESERVED_IDENTIFIER_FIXUP_1126;
    _RESERVED_IDENTIFIER_FIXUP_2875.x = _RESERVED_IDENTIFIER_FIXUP_1201.x;
    _RESERVED_IDENTIFIER_FIXUP_2875.y = _RESERVED_IDENTIFIER_FIXUP_1201.y;
    _RESERVED_IDENTIFIER_FIXUP_2875.z = _RESERVED_IDENTIFIER_FIXUP_1201.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1209 = _RESERVED_IDENTIFIER_FIXUP_1130.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1212 = _RESERVED_IDENTIFIER_FIXUP_1209 * _RESERVED_IDENTIFIER_FIXUP_2851.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3604 = vec4(_RESERVED_IDENTIFIER_FIXUP_1212.xy, _RESERVED_IDENTIFIER_FIXUP_1144, _RESERVED_IDENTIFIER_FIXUP_1212.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1227 = mix(_RESERVED_IDENTIFIER_FIXUP_3604.xyw, _RESERVED_IDENTIFIER_FIXUP_1209, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3604.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2887 = _RESERVED_IDENTIFIER_FIXUP_1130;
    _RESERVED_IDENTIFIER_FIXUP_2887.x = _RESERVED_IDENTIFIER_FIXUP_1227.x;
    _RESERVED_IDENTIFIER_FIXUP_2887.y = _RESERVED_IDENTIFIER_FIXUP_1227.y;
    _RESERVED_IDENTIFIER_FIXUP_2887.z = _RESERVED_IDENTIFIER_FIXUP_1227.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1243 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2863, _RESERVED_IDENTIFIER_FIXUP_2875, _RESERVED_IDENTIFIER_FIXUP_1134.xxxx), _RESERVED_IDENTIFIER_FIXUP_2887, _RESERVED_IDENTIFIER_FIXUP_1134.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1250 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2895 = _RESERVED_IDENTIFIER_FIXUP_2875;
    _RESERVED_IDENTIFIER_FIXUP_2895.x = _RESERVED_IDENTIFIER_FIXUP_1250;
    float _RESERVED_IDENTIFIER_FIXUP_1256 = clamp((_RESERVED_IDENTIFIER_FIXUP_1250 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2895.x = _RESERVED_IDENTIFIER_FIXUP_1256;
    float _RESERVED_IDENTIFIER_FIXUP_1262 = ((-_RESERVED_IDENTIFIER_FIXUP_1256) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2895.y = _RESERVED_IDENTIFIER_FIXUP_1262;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3578;
    if (_RESERVED_IDENTIFIER_FIXUP_1262 != (-_RESERVED_IDENTIFIER_FIXUP_1262))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1274 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1284 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1286 = _RESERVED_IDENTIFIER_FIXUP_1284.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2908 = _RESERVED_IDENTIFIER_FIXUP_2895;
        _RESERVED_IDENTIFIER_FIXUP_2908.y = _RESERVED_IDENTIFIER_FIXUP_1286;
        _RESERVED_IDENTIFIER_FIXUP_2908.z = _RESERVED_IDENTIFIER_FIXUP_1284.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1294 = _RESERVED_IDENTIFIER_FIXUP_2908.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2912;
        _RESERVED_IDENTIFIER_FIXUP_2912.x = _RESERVED_IDENTIFIER_FIXUP_1294.x;
        _RESERVED_IDENTIFIER_FIXUP_2912.y = _RESERVED_IDENTIFIER_FIXUP_1294.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1301 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1305 = _RESERVED_IDENTIFIER_FIXUP_1301.y;
        _RESERVED_IDENTIFIER_FIXUP_2912.w = _RESERVED_IDENTIFIER_FIXUP_1305;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_1274.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1274.w;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_2912.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1305;
        float _RESERVED_IDENTIFIER_FIXUP_1316 = hdLod5(param_4, param_5).x + hdLod5(param_6, param_7).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3605 = vec4(_RESERVED_IDENTIFIER_FIXUP_1256, _RESERVED_IDENTIFIER_FIXUP_1286, _RESERVED_IDENTIFIER_FIXUP_1284.y, _RESERVED_IDENTIFIER_FIXUP_1316);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1323 = _RESERVED_IDENTIFIER_FIXUP_3605.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2925;
        _RESERVED_IDENTIFIER_FIXUP_2925.x = _RESERVED_IDENTIFIER_FIXUP_1323.x;
        _RESERVED_IDENTIFIER_FIXUP_2925.y = _RESERVED_IDENTIFIER_FIXUP_1323.y;
        _RESERVED_IDENTIFIER_FIXUP_2925.w = _RESERVED_IDENTIFIER_FIXUP_1305;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_2925.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1305;
        float _RESERVED_IDENTIFIER_FIXUP_1345 = _RESERVED_IDENTIFIER_FIXUP_1316 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3605.w = _RESERVED_IDENTIFIER_FIXUP_1345;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1352 = _RESERVED_IDENTIFIER_FIXUP_3605.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2938;
        _RESERVED_IDENTIFIER_FIXUP_2938.x = _RESERVED_IDENTIFIER_FIXUP_1352.x;
        _RESERVED_IDENTIFIER_FIXUP_2938.y = _RESERVED_IDENTIFIER_FIXUP_1352.y;
        _RESERVED_IDENTIFIER_FIXUP_2938.w = _RESERVED_IDENTIFIER_FIXUP_1305;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_2938.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1305;
        float _RESERVED_IDENTIFIER_FIXUP_1374 = _RESERVED_IDENTIFIER_FIXUP_1345 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3605.w = _RESERVED_IDENTIFIER_FIXUP_1374;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_3605.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2951;
        _RESERVED_IDENTIFIER_FIXUP_2951.x = _RESERVED_IDENTIFIER_FIXUP_1381.x;
        _RESERVED_IDENTIFIER_FIXUP_2951.y = _RESERVED_IDENTIFIER_FIXUP_1381.y;
        _RESERVED_IDENTIFIER_FIXUP_2951.w = _RESERVED_IDENTIFIER_FIXUP_1305;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_2951.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1305;
        float _RESERVED_IDENTIFIER_FIXUP_1403 = _RESERVED_IDENTIFIER_FIXUP_1374 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3605.y = _RESERVED_IDENTIFIER_FIXUP_1403;
        float _RESERVED_IDENTIFIER_FIXUP_1408 = (_RESERVED_IDENTIFIER_FIXUP_1403 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3605.y = _RESERVED_IDENTIFIER_FIXUP_1408;
        _RESERVED_IDENTIFIER_FIXUP_3605.x = (_RESERVED_IDENTIFIER_FIXUP_1256 * _RESERVED_IDENTIFIER_FIXUP_1408) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3578 = _RESERVED_IDENTIFIER_FIXUP_3605;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2905 = _RESERVED_IDENTIFIER_FIXUP_2895;
        _RESERVED_IDENTIFIER_FIXUP_2905.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3578 = _RESERVED_IDENTIFIER_FIXUP_2905;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1426 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2973 = _RESERVED_IDENTIFIER_FIXUP_3578;
    _RESERVED_IDENTIFIER_FIXUP_2973.y = _RESERVED_IDENTIFIER_FIXUP_1426;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3583;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3581;
    if (_RESERVED_IDENTIFIER_FIXUP_1426 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1435 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1445 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3113 = _RESERVED_IDENTIFIER_FIXUP_2973;
        _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_1445.x;
        _RESERVED_IDENTIFIER_FIXUP_3113.z = _RESERVED_IDENTIFIER_FIXUP_1445.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1455 = _RESERVED_IDENTIFIER_FIXUP_3113.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3117;
        _RESERVED_IDENTIFIER_FIXUP_3117.x = _RESERVED_IDENTIFIER_FIXUP_1455.x;
        _RESERVED_IDENTIFIER_FIXUP_3117.y = _RESERVED_IDENTIFIER_FIXUP_1455.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1462 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1466 = _RESERVED_IDENTIFIER_FIXUP_1462.y;
        _RESERVED_IDENTIFIER_FIXUP_3117.w = _RESERVED_IDENTIFIER_FIXUP_1466;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_1435.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1435.w;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3117.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1466;
        float _RESERVED_IDENTIFIER_FIXUP_1477 = hdLod6(param_14, param_15).x + hdLod6(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3113.w = _RESERVED_IDENTIFIER_FIXUP_1477;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1484 = _RESERVED_IDENTIFIER_FIXUP_3113.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3130;
        _RESERVED_IDENTIFIER_FIXUP_3130.x = _RESERVED_IDENTIFIER_FIXUP_1484.x;
        _RESERVED_IDENTIFIER_FIXUP_3130.y = _RESERVED_IDENTIFIER_FIXUP_1484.y;
        _RESERVED_IDENTIFIER_FIXUP_3130.w = _RESERVED_IDENTIFIER_FIXUP_1466;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3130.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1466;
        float _RESERVED_IDENTIFIER_FIXUP_1506 = _RESERVED_IDENTIFIER_FIXUP_1477 + hdLod6(param_18, param_19).x;
        _RESERVED_IDENTIFIER_FIXUP_3113.w = _RESERVED_IDENTIFIER_FIXUP_1506;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1513 = _RESERVED_IDENTIFIER_FIXUP_3113.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3143;
        _RESERVED_IDENTIFIER_FIXUP_3143.x = _RESERVED_IDENTIFIER_FIXUP_1513.x;
        _RESERVED_IDENTIFIER_FIXUP_3143.y = _RESERVED_IDENTIFIER_FIXUP_1513.y;
        _RESERVED_IDENTIFIER_FIXUP_3143.w = _RESERVED_IDENTIFIER_FIXUP_1466;
        vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_3143.xy;
        float param_21 = _RESERVED_IDENTIFIER_FIXUP_1466;
        float _RESERVED_IDENTIFIER_FIXUP_1535 = _RESERVED_IDENTIFIER_FIXUP_1506 + hdLod6(param_20, param_21).x;
        _RESERVED_IDENTIFIER_FIXUP_3113.w = _RESERVED_IDENTIFIER_FIXUP_1535;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1542 = _RESERVED_IDENTIFIER_FIXUP_3113.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3156;
        _RESERVED_IDENTIFIER_FIXUP_3156.x = _RESERVED_IDENTIFIER_FIXUP_1542.x;
        _RESERVED_IDENTIFIER_FIXUP_3156.y = _RESERVED_IDENTIFIER_FIXUP_1542.y;
        _RESERVED_IDENTIFIER_FIXUP_3156.w = _RESERVED_IDENTIFIER_FIXUP_1466;
        vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3156.xy;
        float param_23 = _RESERVED_IDENTIFIER_FIXUP_1466;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1559 = hdLod6(param_22, param_23);
        float _RESERVED_IDENTIFIER_FIXUP_1564 = _RESERVED_IDENTIFIER_FIXUP_1535 + _RESERVED_IDENTIFIER_FIXUP_1559.x;
        _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_1564;
        _RESERVED_IDENTIFIER_FIXUP_3113.y = _RESERVED_IDENTIFIER_FIXUP_1564 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3583 = _RESERVED_IDENTIFIER_FIXUP_1559;
        _RESERVED_IDENTIFIER_FIXUP_3581 = _RESERVED_IDENTIFIER_FIXUP_3113;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1577 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2978 = _RESERVED_IDENTIFIER_FIXUP_2973;
        _RESERVED_IDENTIFIER_FIXUP_2978.z = _RESERVED_IDENTIFIER_FIXUP_1577;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3584;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3582;
        if (_RESERVED_IDENTIFIER_FIXUP_1577 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1586 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_1586.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1586.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1592 = hdLod7(param_24, param_25);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1596 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3053 = _RESERVED_IDENTIFIER_FIXUP_2978;
            _RESERVED_IDENTIFIER_FIXUP_3053.z = _RESERVED_IDENTIFIER_FIXUP_1596.x;
            _RESERVED_IDENTIFIER_FIXUP_3053.w = _RESERVED_IDENTIFIER_FIXUP_1596.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1606 = _RESERVED_IDENTIFIER_FIXUP_3053.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3057;
            _RESERVED_IDENTIFIER_FIXUP_3057.x = _RESERVED_IDENTIFIER_FIXUP_1606.x;
            _RESERVED_IDENTIFIER_FIXUP_3057.y = _RESERVED_IDENTIFIER_FIXUP_1606.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1613 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1617 = _RESERVED_IDENTIFIER_FIXUP_1613.y;
            _RESERVED_IDENTIFIER_FIXUP_3057.w = _RESERVED_IDENTIFIER_FIXUP_1617;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3057.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1617;
            float _RESERVED_IDENTIFIER_FIXUP_1628 = _RESERVED_IDENTIFIER_FIXUP_1592.x + hdLod7(param_26, param_27).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3068 = _RESERVED_IDENTIFIER_FIXUP_1592;
            _RESERVED_IDENTIFIER_FIXUP_3068.x = _RESERVED_IDENTIFIER_FIXUP_1628;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1635 = _RESERVED_IDENTIFIER_FIXUP_3053.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3070;
            _RESERVED_IDENTIFIER_FIXUP_3070.x = _RESERVED_IDENTIFIER_FIXUP_1635.x;
            _RESERVED_IDENTIFIER_FIXUP_3070.y = _RESERVED_IDENTIFIER_FIXUP_1635.y;
            _RESERVED_IDENTIFIER_FIXUP_3070.w = _RESERVED_IDENTIFIER_FIXUP_1617;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3070.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1617;
            float _RESERVED_IDENTIFIER_FIXUP_1657 = _RESERVED_IDENTIFIER_FIXUP_1628 + hdLod7(param_28, param_29).x;
            _RESERVED_IDENTIFIER_FIXUP_3068.x = _RESERVED_IDENTIFIER_FIXUP_1657;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1664 = _RESERVED_IDENTIFIER_FIXUP_3053.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3083;
            _RESERVED_IDENTIFIER_FIXUP_3083.x = _RESERVED_IDENTIFIER_FIXUP_1664.x;
            _RESERVED_IDENTIFIER_FIXUP_3083.y = _RESERVED_IDENTIFIER_FIXUP_1664.y;
            _RESERVED_IDENTIFIER_FIXUP_3083.w = _RESERVED_IDENTIFIER_FIXUP_1617;
            vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_3083.xy;
            float param_31 = _RESERVED_IDENTIFIER_FIXUP_1617;
            float _RESERVED_IDENTIFIER_FIXUP_1686 = _RESERVED_IDENTIFIER_FIXUP_1657 + hdLod7(param_30, param_31).x;
            _RESERVED_IDENTIFIER_FIXUP_3068.x = _RESERVED_IDENTIFIER_FIXUP_1686;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1693 = _RESERVED_IDENTIFIER_FIXUP_3053.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3096;
            _RESERVED_IDENTIFIER_FIXUP_3096.x = _RESERVED_IDENTIFIER_FIXUP_1693.x;
            _RESERVED_IDENTIFIER_FIXUP_3096.y = _RESERVED_IDENTIFIER_FIXUP_1693.y;
            _RESERVED_IDENTIFIER_FIXUP_3096.w = _RESERVED_IDENTIFIER_FIXUP_1617;
            vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3096.xy;
            float param_33 = _RESERVED_IDENTIFIER_FIXUP_1617;
            float _RESERVED_IDENTIFIER_FIXUP_1715 = _RESERVED_IDENTIFIER_FIXUP_1686 + hdLod7(param_32, param_33).x;
            _RESERVED_IDENTIFIER_FIXUP_3053.z = _RESERVED_IDENTIFIER_FIXUP_1715;
            _RESERVED_IDENTIFIER_FIXUP_3053.y = _RESERVED_IDENTIFIER_FIXUP_1715 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3584 = _RESERVED_IDENTIFIER_FIXUP_3068;
            _RESERVED_IDENTIFIER_FIXUP_3582 = _RESERVED_IDENTIFIER_FIXUP_3053;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2982 = _RESERVED_IDENTIFIER_FIXUP_2978;
            _RESERVED_IDENTIFIER_FIXUP_2982.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2982.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1731 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1735 = _RESERVED_IDENTIFIER_FIXUP_1731.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3606 = vec4(_RESERVED_IDENTIFIER_FIXUP_1731.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1735);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1746 = _RESERVED_IDENTIFIER_FIXUP_3606.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3607 = vec4(_RESERVED_IDENTIFIER_FIXUP_1746 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1735);
            vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_1746;
            float param_35 = _RESERVED_IDENTIFIER_FIXUP_1735;
            vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3607.xy;
            float param_37 = _RESERVED_IDENTIFIER_FIXUP_1735;
            float _RESERVED_IDENTIFIER_FIXUP_1776 = hdLod8(param_34, param_35).x + hdLod8(param_36, param_37).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3009 = _RESERVED_IDENTIFIER_FIXUP_3606;
            _RESERVED_IDENTIFIER_FIXUP_3009.z = _RESERVED_IDENTIFIER_FIXUP_1776;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1783 = _RESERVED_IDENTIFIER_FIXUP_3009.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3011 = _RESERVED_IDENTIFIER_FIXUP_3607;
            _RESERVED_IDENTIFIER_FIXUP_3011.x = _RESERVED_IDENTIFIER_FIXUP_1783.x;
            _RESERVED_IDENTIFIER_FIXUP_3011.y = _RESERVED_IDENTIFIER_FIXUP_1783.y;
            vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3011.xy;
            float param_39 = _RESERVED_IDENTIFIER_FIXUP_1735;
            float _RESERVED_IDENTIFIER_FIXUP_1798 = _RESERVED_IDENTIFIER_FIXUP_1776 + hdLod8(param_38, param_39).x;
            _RESERVED_IDENTIFIER_FIXUP_3009.z = _RESERVED_IDENTIFIER_FIXUP_1798;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1805 = _RESERVED_IDENTIFIER_FIXUP_3009.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3020 = _RESERVED_IDENTIFIER_FIXUP_3011;
            _RESERVED_IDENTIFIER_FIXUP_3020.x = _RESERVED_IDENTIFIER_FIXUP_1805.x;
            _RESERVED_IDENTIFIER_FIXUP_3020.y = _RESERVED_IDENTIFIER_FIXUP_1805.y;
            vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_3020.xy;
            float param_41 = _RESERVED_IDENTIFIER_FIXUP_1735;
            float _RESERVED_IDENTIFIER_FIXUP_1820 = _RESERVED_IDENTIFIER_FIXUP_1798 + hdLod8(param_40, param_41).x;
            _RESERVED_IDENTIFIER_FIXUP_3009.z = _RESERVED_IDENTIFIER_FIXUP_1820;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1827 = _RESERVED_IDENTIFIER_FIXUP_3009.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3029 = _RESERVED_IDENTIFIER_FIXUP_3020;
            _RESERVED_IDENTIFIER_FIXUP_3029.x = _RESERVED_IDENTIFIER_FIXUP_1827.x;
            _RESERVED_IDENTIFIER_FIXUP_3029.y = _RESERVED_IDENTIFIER_FIXUP_1827.y;
            vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_3029.xy;
            float param_43 = _RESERVED_IDENTIFIER_FIXUP_1735;
            float _RESERVED_IDENTIFIER_FIXUP_1842 = _RESERVED_IDENTIFIER_FIXUP_1820 + hdLod8(param_42, param_43).x;
            _RESERVED_IDENTIFIER_FIXUP_3009.x = _RESERVED_IDENTIFIER_FIXUP_1842;
            float _RESERVED_IDENTIFIER_FIXUP_1850 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3009.y = _RESERVED_IDENTIFIER_FIXUP_1850;
            float _RESERVED_IDENTIFIER_FIXUP_1856 = clamp((_RESERVED_IDENTIFIER_FIXUP_1850 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2982.z = _RESERVED_IDENTIFIER_FIXUP_1856;
            float _RESERVED_IDENTIFIER_FIXUP_1861 = (_RESERVED_IDENTIFIER_FIXUP_1842 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2982.w = _RESERVED_IDENTIFIER_FIXUP_1861;
            _RESERVED_IDENTIFIER_FIXUP_2982.y = (_RESERVED_IDENTIFIER_FIXUP_1856 * _RESERVED_IDENTIFIER_FIXUP_1861) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3584 = _RESERVED_IDENTIFIER_FIXUP_3009;
            _RESERVED_IDENTIFIER_FIXUP_3582 = _RESERVED_IDENTIFIER_FIXUP_2982;
        }
        _RESERVED_IDENTIFIER_FIXUP_3583 = _RESERVED_IDENTIFIER_FIXUP_3584;
        _RESERVED_IDENTIFIER_FIXUP_3581 = _RESERVED_IDENTIFIER_FIXUP_3582;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1876 = min(_RESERVED_IDENTIFIER_FIXUP_3581.y, _RESERVED_IDENTIFIER_FIXUP_3581.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3174 = _RESERVED_IDENTIFIER_FIXUP_3583;
    _RESERVED_IDENTIFIER_FIXUP_3174.x = _RESERVED_IDENTIFIER_FIXUP_1876;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3608 = vec4((_RESERVED_IDENTIFIER_FIXUP_1876 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1898 = _RESERVED_IDENTIFIER_FIXUP_3174.xxx * _RESERVED_IDENTIFIER_FIXUP_3608.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3185 = _RESERVED_IDENTIFIER_FIXUP_3608;
    _RESERVED_IDENTIFIER_FIXUP_3185.y = _RESERVED_IDENTIFIER_FIXUP_1898.x;
    _RESERVED_IDENTIFIER_FIXUP_3185.z = _RESERVED_IDENTIFIER_FIXUP_1898.y;
    _RESERVED_IDENTIFIER_FIXUP_3185.w = _RESERVED_IDENTIFIER_FIXUP_1898.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1912 = (_RESERVED_IDENTIFIER_FIXUP_1243.xyz * _RESERVED_IDENTIFIER_FIXUP_3185.xxx) + _RESERVED_IDENTIFIER_FIXUP_3185.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3191 = _RESERVED_IDENTIFIER_FIXUP_1243;
    _RESERVED_IDENTIFIER_FIXUP_3191.x = _RESERVED_IDENTIFIER_FIXUP_1912.x;
    _RESERVED_IDENTIFIER_FIXUP_3191.y = _RESERVED_IDENTIFIER_FIXUP_1912.y;
    _RESERVED_IDENTIFIER_FIXUP_3191.z = _RESERVED_IDENTIFIER_FIXUP_1912.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1925 = _RESERVED_IDENTIFIER_FIXUP_3191.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3197 = _RESERVED_IDENTIFIER_FIXUP_3191;
    _RESERVED_IDENTIFIER_FIXUP_3197.x = _RESERVED_IDENTIFIER_FIXUP_1925.x;
    _RESERVED_IDENTIFIER_FIXUP_3197.y = _RESERVED_IDENTIFIER_FIXUP_1925.y;
    _RESERVED_IDENTIFIER_FIXUP_3197.z = _RESERVED_IDENTIFIER_FIXUP_1925.z;
    vec2 param_44 = texcoord0.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1981 = hdTex0(param_44);
    vec2 param_45 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1985 = hdTex1(param_45);
    vec2 param_46 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1989 = hdTex2(param_46);
    vec2 param_47 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1993 = hdTex3(param_47);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2008 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3217;
    _RESERVED_IDENTIFIER_FIXUP_3217.x = _RESERVED_IDENTIFIER_FIXUP_2008.x;
    _RESERVED_IDENTIFIER_FIXUP_3217.y = _RESERVED_IDENTIFIER_FIXUP_2008.y;
    _RESERVED_IDENTIFIER_FIXUP_3217.z = _RESERVED_IDENTIFIER_FIXUP_2008.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2016 = _RESERVED_IDENTIFIER_FIXUP_1981.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2019 = _RESERVED_IDENTIFIER_FIXUP_2016 * _RESERVED_IDENTIFIER_FIXUP_3217.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3223;
    _RESERVED_IDENTIFIER_FIXUP_3223.x = _RESERVED_IDENTIFIER_FIXUP_2019.x;
    _RESERVED_IDENTIFIER_FIXUP_3223.y = _RESERVED_IDENTIFIER_FIXUP_2019.y;
    _RESERVED_IDENTIFIER_FIXUP_3223.z = _RESERVED_IDENTIFIER_FIXUP_2019.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2034 = mix(_RESERVED_IDENTIFIER_FIXUP_3223.xyz, _RESERVED_IDENTIFIER_FIXUP_2016, _RESERVED_IDENTIFIER_FIXUP_1174);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3229 = _RESERVED_IDENTIFIER_FIXUP_1981;
    _RESERVED_IDENTIFIER_FIXUP_3229.x = _RESERVED_IDENTIFIER_FIXUP_2034.x;
    _RESERVED_IDENTIFIER_FIXUP_3229.y = _RESERVED_IDENTIFIER_FIXUP_2034.y;
    _RESERVED_IDENTIFIER_FIXUP_3229.z = _RESERVED_IDENTIFIER_FIXUP_2034.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2042 = _RESERVED_IDENTIFIER_FIXUP_1985.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2045 = _RESERVED_IDENTIFIER_FIXUP_2042 * _RESERVED_IDENTIFIER_FIXUP_3217.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3235;
    _RESERVED_IDENTIFIER_FIXUP_3235.x = _RESERVED_IDENTIFIER_FIXUP_2045.x;
    _RESERVED_IDENTIFIER_FIXUP_3235.y = _RESERVED_IDENTIFIER_FIXUP_2045.y;
    _RESERVED_IDENTIFIER_FIXUP_3235.z = _RESERVED_IDENTIFIER_FIXUP_2045.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2060 = mix(_RESERVED_IDENTIFIER_FIXUP_3235.xyz, _RESERVED_IDENTIFIER_FIXUP_2042, _RESERVED_IDENTIFIER_FIXUP_1200);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3241 = _RESERVED_IDENTIFIER_FIXUP_1985;
    _RESERVED_IDENTIFIER_FIXUP_3241.x = _RESERVED_IDENTIFIER_FIXUP_2060.x;
    _RESERVED_IDENTIFIER_FIXUP_3241.y = _RESERVED_IDENTIFIER_FIXUP_2060.y;
    _RESERVED_IDENTIFIER_FIXUP_3241.z = _RESERVED_IDENTIFIER_FIXUP_2060.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2068 = _RESERVED_IDENTIFIER_FIXUP_1989.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2071 = _RESERVED_IDENTIFIER_FIXUP_2068 * _RESERVED_IDENTIFIER_FIXUP_3217.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3610 = vec4(_RESERVED_IDENTIFIER_FIXUP_2071.xy, _RESERVED_IDENTIFIER_FIXUP_1144, _RESERVED_IDENTIFIER_FIXUP_2071.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2086 = mix(_RESERVED_IDENTIFIER_FIXUP_3610.xyw, _RESERVED_IDENTIFIER_FIXUP_2068, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3610.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3253 = _RESERVED_IDENTIFIER_FIXUP_1989;
    _RESERVED_IDENTIFIER_FIXUP_3253.x = _RESERVED_IDENTIFIER_FIXUP_2086.x;
    _RESERVED_IDENTIFIER_FIXUP_3253.y = _RESERVED_IDENTIFIER_FIXUP_2086.y;
    _RESERVED_IDENTIFIER_FIXUP_3253.z = _RESERVED_IDENTIFIER_FIXUP_2086.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2102 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3229, _RESERVED_IDENTIFIER_FIXUP_3241, _RESERVED_IDENTIFIER_FIXUP_1993.xxxx), _RESERVED_IDENTIFIER_FIXUP_3253, _RESERVED_IDENTIFIER_FIXUP_1993.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3261 = _RESERVED_IDENTIFIER_FIXUP_3241;
    _RESERVED_IDENTIFIER_FIXUP_3261.x = _RESERVED_IDENTIFIER_FIXUP_1250;
    float _RESERVED_IDENTIFIER_FIXUP_2115 = clamp((_RESERVED_IDENTIFIER_FIXUP_1250 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3261.x = _RESERVED_IDENTIFIER_FIXUP_2115;
    float _RESERVED_IDENTIFIER_FIXUP_2121 = ((-_RESERVED_IDENTIFIER_FIXUP_2115) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3261.y = _RESERVED_IDENTIFIER_FIXUP_2121;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3591;
    if (_RESERVED_IDENTIFIER_FIXUP_2121 != (-_RESERVED_IDENTIFIER_FIXUP_2121))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2133 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2143 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_2145 = _RESERVED_IDENTIFIER_FIXUP_2143.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3274 = _RESERVED_IDENTIFIER_FIXUP_3261;
        _RESERVED_IDENTIFIER_FIXUP_3274.y = _RESERVED_IDENTIFIER_FIXUP_2145;
        _RESERVED_IDENTIFIER_FIXUP_3274.z = _RESERVED_IDENTIFIER_FIXUP_2143.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2153 = _RESERVED_IDENTIFIER_FIXUP_3274.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3278;
        _RESERVED_IDENTIFIER_FIXUP_3278.x = _RESERVED_IDENTIFIER_FIXUP_2153.x;
        _RESERVED_IDENTIFIER_FIXUP_3278.y = _RESERVED_IDENTIFIER_FIXUP_2153.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2160 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2164 = _RESERVED_IDENTIFIER_FIXUP_2160.y;
        _RESERVED_IDENTIFIER_FIXUP_3278.w = _RESERVED_IDENTIFIER_FIXUP_2164;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2133.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2133.w;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3278.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2164;
        float _RESERVED_IDENTIFIER_FIXUP_2175 = hdLod5(param_48, param_49).x + hdLod5(param_50, param_51).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3611 = vec4(_RESERVED_IDENTIFIER_FIXUP_2115, _RESERVED_IDENTIFIER_FIXUP_2145, _RESERVED_IDENTIFIER_FIXUP_2143.y, _RESERVED_IDENTIFIER_FIXUP_2175);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2182 = _RESERVED_IDENTIFIER_FIXUP_3611.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3291;
        _RESERVED_IDENTIFIER_FIXUP_3291.x = _RESERVED_IDENTIFIER_FIXUP_2182.x;
        _RESERVED_IDENTIFIER_FIXUP_3291.y = _RESERVED_IDENTIFIER_FIXUP_2182.y;
        _RESERVED_IDENTIFIER_FIXUP_3291.w = _RESERVED_IDENTIFIER_FIXUP_2164;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3291.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2164;
        float _RESERVED_IDENTIFIER_FIXUP_2204 = _RESERVED_IDENTIFIER_FIXUP_2175 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3611.w = _RESERVED_IDENTIFIER_FIXUP_2204;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2211 = _RESERVED_IDENTIFIER_FIXUP_3611.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3304;
        _RESERVED_IDENTIFIER_FIXUP_3304.x = _RESERVED_IDENTIFIER_FIXUP_2211.x;
        _RESERVED_IDENTIFIER_FIXUP_3304.y = _RESERVED_IDENTIFIER_FIXUP_2211.y;
        _RESERVED_IDENTIFIER_FIXUP_3304.w = _RESERVED_IDENTIFIER_FIXUP_2164;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3304.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2164;
        float _RESERVED_IDENTIFIER_FIXUP_2233 = _RESERVED_IDENTIFIER_FIXUP_2204 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3611.w = _RESERVED_IDENTIFIER_FIXUP_2233;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2240 = _RESERVED_IDENTIFIER_FIXUP_3611.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3317;
        _RESERVED_IDENTIFIER_FIXUP_3317.x = _RESERVED_IDENTIFIER_FIXUP_2240.x;
        _RESERVED_IDENTIFIER_FIXUP_3317.y = _RESERVED_IDENTIFIER_FIXUP_2240.y;
        _RESERVED_IDENTIFIER_FIXUP_3317.w = _RESERVED_IDENTIFIER_FIXUP_2164;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3317.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2164;
        float _RESERVED_IDENTIFIER_FIXUP_2262 = _RESERVED_IDENTIFIER_FIXUP_2233 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3611.y = _RESERVED_IDENTIFIER_FIXUP_2262;
        float _RESERVED_IDENTIFIER_FIXUP_2267 = (_RESERVED_IDENTIFIER_FIXUP_2262 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3611.y = _RESERVED_IDENTIFIER_FIXUP_2267;
        _RESERVED_IDENTIFIER_FIXUP_3611.x = (_RESERVED_IDENTIFIER_FIXUP_2115 * _RESERVED_IDENTIFIER_FIXUP_2267) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3591 = _RESERVED_IDENTIFIER_FIXUP_3611;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3271 = _RESERVED_IDENTIFIER_FIXUP_3261;
        _RESERVED_IDENTIFIER_FIXUP_3271.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3591 = _RESERVED_IDENTIFIER_FIXUP_3271;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3339 = _RESERVED_IDENTIFIER_FIXUP_3591;
    _RESERVED_IDENTIFIER_FIXUP_3339.y = _RESERVED_IDENTIFIER_FIXUP_1426;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3596;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3594;
    if (_RESERVED_IDENTIFIER_FIXUP_1426 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2294 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2304 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3479 = _RESERVED_IDENTIFIER_FIXUP_3339;
        _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_2304.x;
        _RESERVED_IDENTIFIER_FIXUP_3479.z = _RESERVED_IDENTIFIER_FIXUP_2304.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2314 = _RESERVED_IDENTIFIER_FIXUP_3479.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3483;
        _RESERVED_IDENTIFIER_FIXUP_3483.x = _RESERVED_IDENTIFIER_FIXUP_2314.x;
        _RESERVED_IDENTIFIER_FIXUP_3483.y = _RESERVED_IDENTIFIER_FIXUP_2314.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2321 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2325 = _RESERVED_IDENTIFIER_FIXUP_2321.y;
        _RESERVED_IDENTIFIER_FIXUP_3483.w = _RESERVED_IDENTIFIER_FIXUP_2325;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_2294.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2294.w;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3483.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2325;
        float _RESERVED_IDENTIFIER_FIXUP_2336 = hdLod6(param_58, param_59).x + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3479.w = _RESERVED_IDENTIFIER_FIXUP_2336;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2343 = _RESERVED_IDENTIFIER_FIXUP_3479.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3496;
        _RESERVED_IDENTIFIER_FIXUP_3496.x = _RESERVED_IDENTIFIER_FIXUP_2343.x;
        _RESERVED_IDENTIFIER_FIXUP_3496.y = _RESERVED_IDENTIFIER_FIXUP_2343.y;
        _RESERVED_IDENTIFIER_FIXUP_3496.w = _RESERVED_IDENTIFIER_FIXUP_2325;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3496.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2325;
        float _RESERVED_IDENTIFIER_FIXUP_2365 = _RESERVED_IDENTIFIER_FIXUP_2336 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3479.w = _RESERVED_IDENTIFIER_FIXUP_2365;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2372 = _RESERVED_IDENTIFIER_FIXUP_3479.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3509;
        _RESERVED_IDENTIFIER_FIXUP_3509.x = _RESERVED_IDENTIFIER_FIXUP_2372.x;
        _RESERVED_IDENTIFIER_FIXUP_3509.y = _RESERVED_IDENTIFIER_FIXUP_2372.y;
        _RESERVED_IDENTIFIER_FIXUP_3509.w = _RESERVED_IDENTIFIER_FIXUP_2325;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3509.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2325;
        float _RESERVED_IDENTIFIER_FIXUP_2394 = _RESERVED_IDENTIFIER_FIXUP_2365 + hdLod6(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3479.w = _RESERVED_IDENTIFIER_FIXUP_2394;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2401 = _RESERVED_IDENTIFIER_FIXUP_3479.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3522;
        _RESERVED_IDENTIFIER_FIXUP_3522.x = _RESERVED_IDENTIFIER_FIXUP_2401.x;
        _RESERVED_IDENTIFIER_FIXUP_3522.y = _RESERVED_IDENTIFIER_FIXUP_2401.y;
        _RESERVED_IDENTIFIER_FIXUP_3522.w = _RESERVED_IDENTIFIER_FIXUP_2325;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3522.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2325;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2418 = hdLod6(param_66, param_67);
        float _RESERVED_IDENTIFIER_FIXUP_2423 = _RESERVED_IDENTIFIER_FIXUP_2394 + _RESERVED_IDENTIFIER_FIXUP_2418.x;
        _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_2423;
        _RESERVED_IDENTIFIER_FIXUP_3479.y = _RESERVED_IDENTIFIER_FIXUP_2423 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3596 = _RESERVED_IDENTIFIER_FIXUP_2418;
        _RESERVED_IDENTIFIER_FIXUP_3594 = _RESERVED_IDENTIFIER_FIXUP_3479;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2436 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3344 = _RESERVED_IDENTIFIER_FIXUP_3339;
        _RESERVED_IDENTIFIER_FIXUP_3344.z = _RESERVED_IDENTIFIER_FIXUP_2436;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3597;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3595;
        if (_RESERVED_IDENTIFIER_FIXUP_2436 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2445 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_2445.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2445.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2451 = hdLod7(param_68, param_69);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2455 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3419 = _RESERVED_IDENTIFIER_FIXUP_3344;
            _RESERVED_IDENTIFIER_FIXUP_3419.z = _RESERVED_IDENTIFIER_FIXUP_2455.x;
            _RESERVED_IDENTIFIER_FIXUP_3419.w = _RESERVED_IDENTIFIER_FIXUP_2455.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2465 = _RESERVED_IDENTIFIER_FIXUP_3419.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3423;
            _RESERVED_IDENTIFIER_FIXUP_3423.x = _RESERVED_IDENTIFIER_FIXUP_2465.x;
            _RESERVED_IDENTIFIER_FIXUP_3423.y = _RESERVED_IDENTIFIER_FIXUP_2465.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2472 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2476 = _RESERVED_IDENTIFIER_FIXUP_2472.y;
            _RESERVED_IDENTIFIER_FIXUP_3423.w = _RESERVED_IDENTIFIER_FIXUP_2476;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3423.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2476;
            float _RESERVED_IDENTIFIER_FIXUP_2487 = _RESERVED_IDENTIFIER_FIXUP_2451.x + hdLod7(param_70, param_71).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3434 = _RESERVED_IDENTIFIER_FIXUP_2451;
            _RESERVED_IDENTIFIER_FIXUP_3434.x = _RESERVED_IDENTIFIER_FIXUP_2487;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2494 = _RESERVED_IDENTIFIER_FIXUP_3419.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3436;
            _RESERVED_IDENTIFIER_FIXUP_3436.x = _RESERVED_IDENTIFIER_FIXUP_2494.x;
            _RESERVED_IDENTIFIER_FIXUP_3436.y = _RESERVED_IDENTIFIER_FIXUP_2494.y;
            _RESERVED_IDENTIFIER_FIXUP_3436.w = _RESERVED_IDENTIFIER_FIXUP_2476;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3436.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2476;
            float _RESERVED_IDENTIFIER_FIXUP_2516 = _RESERVED_IDENTIFIER_FIXUP_2487 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3434.x = _RESERVED_IDENTIFIER_FIXUP_2516;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2523 = _RESERVED_IDENTIFIER_FIXUP_3419.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3449;
            _RESERVED_IDENTIFIER_FIXUP_3449.x = _RESERVED_IDENTIFIER_FIXUP_2523.x;
            _RESERVED_IDENTIFIER_FIXUP_3449.y = _RESERVED_IDENTIFIER_FIXUP_2523.y;
            _RESERVED_IDENTIFIER_FIXUP_3449.w = _RESERVED_IDENTIFIER_FIXUP_2476;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3449.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2476;
            float _RESERVED_IDENTIFIER_FIXUP_2545 = _RESERVED_IDENTIFIER_FIXUP_2516 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3434.x = _RESERVED_IDENTIFIER_FIXUP_2545;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2552 = _RESERVED_IDENTIFIER_FIXUP_3419.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3462;
            _RESERVED_IDENTIFIER_FIXUP_3462.x = _RESERVED_IDENTIFIER_FIXUP_2552.x;
            _RESERVED_IDENTIFIER_FIXUP_3462.y = _RESERVED_IDENTIFIER_FIXUP_2552.y;
            _RESERVED_IDENTIFIER_FIXUP_3462.w = _RESERVED_IDENTIFIER_FIXUP_2476;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3462.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2476;
            float _RESERVED_IDENTIFIER_FIXUP_2574 = _RESERVED_IDENTIFIER_FIXUP_2545 + hdLod7(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3419.z = _RESERVED_IDENTIFIER_FIXUP_2574;
            _RESERVED_IDENTIFIER_FIXUP_3419.y = _RESERVED_IDENTIFIER_FIXUP_2574 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3597 = _RESERVED_IDENTIFIER_FIXUP_3434;
            _RESERVED_IDENTIFIER_FIXUP_3595 = _RESERVED_IDENTIFIER_FIXUP_3419;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3348 = _RESERVED_IDENTIFIER_FIXUP_3344;
            _RESERVED_IDENTIFIER_FIXUP_3348.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3348.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2590 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2594 = _RESERVED_IDENTIFIER_FIXUP_2590.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3612 = vec4(_RESERVED_IDENTIFIER_FIXUP_2590.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2594);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2605 = _RESERVED_IDENTIFIER_FIXUP_3612.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3613 = vec4(_RESERVED_IDENTIFIER_FIXUP_2605 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2594);
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_2605;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2594;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3613.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2594;
            float _RESERVED_IDENTIFIER_FIXUP_2635 = hdLod8(param_78, param_79).x + hdLod8(param_80, param_81).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3375 = _RESERVED_IDENTIFIER_FIXUP_3612;
            _RESERVED_IDENTIFIER_FIXUP_3375.z = _RESERVED_IDENTIFIER_FIXUP_2635;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2642 = _RESERVED_IDENTIFIER_FIXUP_3375.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3377 = _RESERVED_IDENTIFIER_FIXUP_3613;
            _RESERVED_IDENTIFIER_FIXUP_3377.x = _RESERVED_IDENTIFIER_FIXUP_2642.x;
            _RESERVED_IDENTIFIER_FIXUP_3377.y = _RESERVED_IDENTIFIER_FIXUP_2642.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3377.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2594;
            float _RESERVED_IDENTIFIER_FIXUP_2657 = _RESERVED_IDENTIFIER_FIXUP_2635 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3375.z = _RESERVED_IDENTIFIER_FIXUP_2657;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2664 = _RESERVED_IDENTIFIER_FIXUP_3375.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3386 = _RESERVED_IDENTIFIER_FIXUP_3377;
            _RESERVED_IDENTIFIER_FIXUP_3386.x = _RESERVED_IDENTIFIER_FIXUP_2664.x;
            _RESERVED_IDENTIFIER_FIXUP_3386.y = _RESERVED_IDENTIFIER_FIXUP_2664.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3386.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2594;
            float _RESERVED_IDENTIFIER_FIXUP_2679 = _RESERVED_IDENTIFIER_FIXUP_2657 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3375.z = _RESERVED_IDENTIFIER_FIXUP_2679;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2686 = _RESERVED_IDENTIFIER_FIXUP_3375.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3395 = _RESERVED_IDENTIFIER_FIXUP_3386;
            _RESERVED_IDENTIFIER_FIXUP_3395.x = _RESERVED_IDENTIFIER_FIXUP_2686.x;
            _RESERVED_IDENTIFIER_FIXUP_3395.y = _RESERVED_IDENTIFIER_FIXUP_2686.y;
            vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3395.xy;
            float param_87 = _RESERVED_IDENTIFIER_FIXUP_2594;
            float _RESERVED_IDENTIFIER_FIXUP_2701 = _RESERVED_IDENTIFIER_FIXUP_2679 + hdLod8(param_86, param_87).x;
            _RESERVED_IDENTIFIER_FIXUP_3375.x = _RESERVED_IDENTIFIER_FIXUP_2701;
            float _RESERVED_IDENTIFIER_FIXUP_2709 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3375.y = _RESERVED_IDENTIFIER_FIXUP_2709;
            float _RESERVED_IDENTIFIER_FIXUP_2715 = clamp((_RESERVED_IDENTIFIER_FIXUP_2709 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3348.z = _RESERVED_IDENTIFIER_FIXUP_2715;
            float _RESERVED_IDENTIFIER_FIXUP_2720 = (_RESERVED_IDENTIFIER_FIXUP_2701 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3348.w = _RESERVED_IDENTIFIER_FIXUP_2720;
            _RESERVED_IDENTIFIER_FIXUP_3348.y = (_RESERVED_IDENTIFIER_FIXUP_2715 * _RESERVED_IDENTIFIER_FIXUP_2720) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3597 = _RESERVED_IDENTIFIER_FIXUP_3375;
            _RESERVED_IDENTIFIER_FIXUP_3595 = _RESERVED_IDENTIFIER_FIXUP_3348;
        }
        _RESERVED_IDENTIFIER_FIXUP_3596 = _RESERVED_IDENTIFIER_FIXUP_3597;
        _RESERVED_IDENTIFIER_FIXUP_3594 = _RESERVED_IDENTIFIER_FIXUP_3595;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2735 = min(_RESERVED_IDENTIFIER_FIXUP_3594.y, _RESERVED_IDENTIFIER_FIXUP_3594.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3540 = _RESERVED_IDENTIFIER_FIXUP_3596;
    _RESERVED_IDENTIFIER_FIXUP_3540.x = _RESERVED_IDENTIFIER_FIXUP_2735;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3614 = vec4((_RESERVED_IDENTIFIER_FIXUP_2735 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2102.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2757 = _RESERVED_IDENTIFIER_FIXUP_3540.xxx * _RESERVED_IDENTIFIER_FIXUP_3614.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3551 = _RESERVED_IDENTIFIER_FIXUP_3614;
    _RESERVED_IDENTIFIER_FIXUP_3551.y = _RESERVED_IDENTIFIER_FIXUP_2757.x;
    _RESERVED_IDENTIFIER_FIXUP_3551.z = _RESERVED_IDENTIFIER_FIXUP_2757.y;
    _RESERVED_IDENTIFIER_FIXUP_3551.w = _RESERVED_IDENTIFIER_FIXUP_2757.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2771 = (_RESERVED_IDENTIFIER_FIXUP_2102.xyz * _RESERVED_IDENTIFIER_FIXUP_3551.xxx) + _RESERVED_IDENTIFIER_FIXUP_3551.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3557 = _RESERVED_IDENTIFIER_FIXUP_2102;
    _RESERVED_IDENTIFIER_FIXUP_3557.x = _RESERVED_IDENTIFIER_FIXUP_2771.x;
    _RESERVED_IDENTIFIER_FIXUP_3557.y = _RESERVED_IDENTIFIER_FIXUP_2771.y;
    _RESERVED_IDENTIFIER_FIXUP_3557.z = _RESERVED_IDENTIFIER_FIXUP_2771.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2784 = _RESERVED_IDENTIFIER_FIXUP_3557.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3563 = _RESERVED_IDENTIFIER_FIXUP_3557;
    _RESERVED_IDENTIFIER_FIXUP_3563.x = _RESERVED_IDENTIFIER_FIXUP_2784.x;
    _RESERVED_IDENTIFIER_FIXUP_3563.y = _RESERVED_IDENTIFIER_FIXUP_2784.y;
    _RESERVED_IDENTIFIER_FIXUP_3563.z = _RESERVED_IDENTIFIER_FIXUP_2784.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3563.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_981 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_990;
    if (_RESERVED_IDENTIFIER_FIXUP_981)
    {
        _RESERVED_IDENTIFIER_FIXUP_990 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_990 = _RESERVED_IDENTIFIER_FIXUP_981;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_990)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1027 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3197.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1053 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2837;
    if (_RESERVED_IDENTIFIER_FIXUP_1027 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2837 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1027), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1053);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2837 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1053);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2837;
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
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = texcoord5;
    vec4 v7 = texcoord6;
    vec4 v8 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    vec2 param_1 = v3.xy;
    r1 = hdTex1(param_1);
    vec2 param_2 = v3.wz;
    r2 = hdTex2(param_2);
    vec2 param_3 = v4.xy;
    r3 = hdTex3(param_3);
    vec3 hdB90 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB90.x;
    r4.y = hdB90.y;
    r4.z = hdB90.z;
    vec3 hdB105 = v0.xyz + v0.xyz;
    r5.x = hdB105.x;
    r5.y = hdB105.y;
    r5.z = hdB105.z;
    vec3 hdB116 = r0.xyz * r5.xyz;
    r6.x = hdB116.x;
    r6.y = hdB116.y;
    r6.z = hdB116.z;
    vec4 hdB125 = r0;
    vec3 hdB134 = mix(r6.xyz, hdB125.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB134.x;
    r0.y = hdB134.y;
    r0.z = hdB134.z;
    vec3 hdB145 = r1.xyz * r5.xyz;
    r6.x = hdB145.x;
    r6.y = hdB145.y;
    r6.z = hdB145.z;
    vec4 hdB154 = r1;
    vec3 hdB160 = mix(r6.xyz, hdB154.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB160.x;
    r1.y = hdB160.y;
    r1.z = hdB160.z;
    vec3 hdB171 = r2.xyz * r5.xyz;
    r4.x = hdB171.x;
    r4.y = hdB171.y;
    r4.w = hdB171.z;
    vec4 hdB181 = r2;
    vec3 hdB187 = mix(r4.xyw, hdB181.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB187.x;
    r2.y = hdB187.y;
    r2.z = hdB187.z;
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_4 = r2.xy;
        float param_5 = r2.w;
        r2 = hdLod5(param_4, param_5);
        vec2 hdB253 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB253.x;
        r1.z = hdB253.y;
        vec2 hdB264 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB264.x;
        r3.y = hdB264.y;
        vec2 hdB272 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB272.x;
        r3.w = hdB272.y;
        vec2 param_6 = r3.xy;
        float param_7 = r3.w;
        r3 = hdLod5(param_6, param_7);
        r1.w = r2.x + r3.x;
        vec2 hdB295 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB295.x;
        r2.y = hdB295.y;
        vec2 hdB302 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB302.x;
        r2.w = hdB302.y;
        vec2 param_8 = r2.xy;
        float param_9 = r2.w;
        r2 = hdLod5(param_8, param_9);
        r1.w += r2.x;
        vec2 hdB325 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB325.x;
        r2.y = hdB325.y;
        vec2 hdB332 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB332.x;
        r2.w = hdB332.y;
        vec2 param_10 = r2.xy;
        float param_11 = r2.w;
        r2 = hdLod5(param_10, param_11);
        r1.w += r2.x;
        vec2 hdB355 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB355.x;
        r2.y = hdB355.y;
        vec2 hdB362 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB362.x;
        r2.w = hdB362.y;
        vec2 param_12 = r2.xy;
        float param_13 = r2.w;
        r2 = hdLod5(param_12, param_13);
        r1.y = r1.w + r2.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
    }
    else
    {
        r1.x = 1.0;
    }
    r1.y = max(abs(v6.x), abs(v6.y));
    if (r1.y < 1.0)
    {
        r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_14 = r2.xy;
        float param_15 = r2.w;
        r2 = hdLod6(param_14, param_15);
        vec2 hdB422 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB422.x;
        r1.z = hdB422.y;
        vec2 hdB432 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB432.x;
        r3.y = hdB432.y;
        vec2 hdB439 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB439.x;
        r3.w = hdB439.y;
        vec2 param_16 = r3.xy;
        float param_17 = r3.w;
        r3 = hdLod6(param_16, param_17);
        r1.w = r2.x + r3.x;
        vec2 hdB461 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB461.x;
        r2.y = hdB461.y;
        vec2 hdB468 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB468.x;
        r2.w = hdB468.y;
        vec2 param_18 = r2.xy;
        float param_19 = r2.w;
        r2 = hdLod6(param_18, param_19);
        r1.w += r2.x;
        vec2 hdB490 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB490.x;
        r2.y = hdB490.y;
        vec2 hdB497 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB497.x;
        r2.w = hdB497.y;
        vec2 param_20 = r2.xy;
        float param_21 = r2.w;
        r2 = hdLod6(param_20, param_21);
        r1.w += r2.x;
        vec2 hdB519 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB519.x;
        r2.y = hdB519.y;
        vec2 hdB526 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB526.x;
        r2.w = hdB526.y;
        vec2 param_22 = r2.xy;
        float param_23 = r2.w;
        r2 = hdLod6(param_22, param_23);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_24 = r2.xy;
            float param_25 = r2.w;
            r2 = hdLod7(param_24, param_25);
            vec2 hdB575 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB575.x;
            r1.w = hdB575.y;
            vec2 hdB585 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB585.x;
            r3.y = hdB585.y;
            vec2 hdB592 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB592.x;
            r3.w = hdB592.y;
            vec2 param_26 = r3.xy;
            float param_27 = r3.w;
            r3 = hdLod7(param_26, param_27);
            r2.x += r3.x;
            vec2 hdB614 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB614.x;
            r3.y = hdB614.y;
            vec2 hdB621 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB621.x;
            r3.w = hdB621.y;
            vec2 param_28 = r3.xy;
            float param_29 = r3.w;
            r3 = hdLod7(param_28, param_29);
            r2.x += r3.x;
            vec2 hdB643 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB643.x;
            r3.y = hdB643.y;
            vec2 hdB650 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB650.x;
            r3.w = hdB650.y;
            vec2 param_30 = r3.xy;
            float param_31 = r3.w;
            r3 = hdLod7(param_30, param_31);
            r2.x += r3.x;
            vec2 hdB672 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB672.x;
            r3.y = hdB672.y;
            vec2 hdB679 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB679.x;
            r3.w = hdB679.y;
            vec2 param_32 = r3.xy;
            float param_33 = r3.w;
            r3 = hdLod7(param_32, param_33);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 hdB711 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB711.x;
            r2.w = hdB711.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_34 = r2.xy;
            float param_35 = r2.w;
            r3 = hdLod8(param_34, param_35);
            vec2 hdB736 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB736.x;
            r4.y = hdB736.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_36 = r4.xy;
            float param_37 = r4.w;
            r5 = hdLod8(param_36, param_37);
            r2.z = r3.x + r5.x;
            vec2 hdB764 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB764.x;
            r4.y = hdB764.y;
            vec2 param_38 = r4.xy;
            float param_39 = r4.w;
            r3 = hdLod8(param_38, param_39);
            r2.z += r3.x;
            vec2 hdB786 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB786.x;
            r4.y = hdB786.y;
            vec2 param_40 = r4.xy;
            float param_41 = r4.w;
            r3 = hdLod8(param_40, param_41);
            r2.z += r3.x;
            vec2 hdB808 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB808.x;
            r4.y = hdB808.y;
            vec2 param_42 = r4.xy;
            float param_43 = r4.w;
            r3 = hdLod8(param_42, param_43);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB870 = r0.www * v1.xyz;
    r1.y = hdB870.x;
    r1.z = hdB870.y;
    r1.w = hdB870.z;
    vec4 hdB879 = r1;
    vec3 hdB881 = r2.xxx * hdB879.yzw;
    r1.y = hdB881.x;
    r1.z = hdB881.y;
    r1.w = hdB881.z;
    vec4 hdB888 = r0;
    vec3 hdB895 = (hdB888.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB895.x;
    r0.y = hdB895.y;
    r0.z = hdB895.z;
    vec4 hdB902 = r0;
    vec3 hdB909 = hdB902.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB909.x;
    r0.y = hdB909.y;
    r0.z = hdB909.z;
    vec3 hdB924 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB924.x;
    oC0.y = hdB924.y;
    oC0.z = hdB924.z;
    oC0.w = 1.0;
    bool hdB936 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB944;
    if (hdB936)
    {
        hdB944 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB944 = hdB936;
    }
    if (hdB944)
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
    bool _3445 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3455;
    if (_3445)
    {
        _3455 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 495u) != 0u;
    }
    else
    {
        _3455 = _3445;
    }
    if (_3455)
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
        bool _3480 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3495;
        if (!_3480)
        {
            _3495 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 495u) != 0u;
        }
        else
        {
            _3495 = _3480;
        }
        if (_3495)
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
