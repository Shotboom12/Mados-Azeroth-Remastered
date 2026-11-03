#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

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
float _RESERVED_IDENTIFIER_FIXUP_3668;
vec4 _RESERVED_IDENTIFIER_FIXUP_3669;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _58 = hdOverride >= 0;
    bool _77;
    if (_58)
    {
        _77 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _77 = _58;
    }
    vec4 _78;
    if (_77)
    {
        _78 = vec4(float(hdOverride));
    }
    else
    {
        _78 = value;
    }
    return _78;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _95 = hdOverride >= 0;
    bool _105;
    if (_95)
    {
        _105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _105 = _95;
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
    vec4 _RESERVED_IDENTIFIER_FIXUP_1143 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1147 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1151 = hdTex2(param_1);
    float _RESERVED_IDENTIFIER_FIXUP_1163 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2921 = _RESERVED_IDENTIFIER_FIXUP_1143;
    _RESERVED_IDENTIFIER_FIXUP_2921.x = _RESERVED_IDENTIFIER_FIXUP_1163;
    float _RESERVED_IDENTIFIER_FIXUP_1169 = clamp((_RESERVED_IDENTIFIER_FIXUP_1163 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2921.x = _RESERVED_IDENTIFIER_FIXUP_1169;
    float _RESERVED_IDENTIFIER_FIXUP_1175 = ((-_RESERVED_IDENTIFIER_FIXUP_1169) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2921.x = _RESERVED_IDENTIFIER_FIXUP_1175;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3673;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3670;
    if (_RESERVED_IDENTIFIER_FIXUP_1175 != (-_RESERVED_IDENTIFIER_FIXUP_1175))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1187 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = _RESERVED_IDENTIFIER_FIXUP_1187.xy;
        float param_3 = _RESERVED_IDENTIFIER_FIXUP_1187.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1193 = hdLod5(param_2, param_3);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1197 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3133 = _RESERVED_IDENTIFIER_FIXUP_1193;
        _RESERVED_IDENTIFIER_FIXUP_3133.y = _RESERVED_IDENTIFIER_FIXUP_1197.x;
        _RESERVED_IDENTIFIER_FIXUP_3133.z = _RESERVED_IDENTIFIER_FIXUP_1197.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1207 = _RESERVED_IDENTIFIER_FIXUP_3133.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3137;
        _RESERVED_IDENTIFIER_FIXUP_3137.x = _RESERVED_IDENTIFIER_FIXUP_1207.x;
        _RESERVED_IDENTIFIER_FIXUP_3137.y = _RESERVED_IDENTIFIER_FIXUP_1207.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1214 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1218 = _RESERVED_IDENTIFIER_FIXUP_1214.y;
        _RESERVED_IDENTIFIER_FIXUP_3137.w = _RESERVED_IDENTIFIER_FIXUP_1218;
        vec2 param_4 = _RESERVED_IDENTIFIER_FIXUP_3137.xy;
        float param_5 = _RESERVED_IDENTIFIER_FIXUP_1218;
        float _RESERVED_IDENTIFIER_FIXUP_1229 = _RESERVED_IDENTIFIER_FIXUP_1193.x + hdLod5(param_4, param_5).x;
        _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1229;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1236 = _RESERVED_IDENTIFIER_FIXUP_3133.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3150;
        _RESERVED_IDENTIFIER_FIXUP_3150.x = _RESERVED_IDENTIFIER_FIXUP_1236.x;
        _RESERVED_IDENTIFIER_FIXUP_3150.y = _RESERVED_IDENTIFIER_FIXUP_1236.y;
        _RESERVED_IDENTIFIER_FIXUP_3150.w = _RESERVED_IDENTIFIER_FIXUP_1218;
        vec2 param_6 = _RESERVED_IDENTIFIER_FIXUP_3150.xy;
        float param_7 = _RESERVED_IDENTIFIER_FIXUP_1218;
        float _RESERVED_IDENTIFIER_FIXUP_1258 = _RESERVED_IDENTIFIER_FIXUP_1229 + hdLod5(param_6, param_7).x;
        _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1258;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1265 = _RESERVED_IDENTIFIER_FIXUP_3133.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3163;
        _RESERVED_IDENTIFIER_FIXUP_3163.x = _RESERVED_IDENTIFIER_FIXUP_1265.x;
        _RESERVED_IDENTIFIER_FIXUP_3163.y = _RESERVED_IDENTIFIER_FIXUP_1265.y;
        _RESERVED_IDENTIFIER_FIXUP_3163.w = _RESERVED_IDENTIFIER_FIXUP_1218;
        vec2 param_8 = _RESERVED_IDENTIFIER_FIXUP_3163.xy;
        float param_9 = _RESERVED_IDENTIFIER_FIXUP_1218;
        float _RESERVED_IDENTIFIER_FIXUP_1287 = _RESERVED_IDENTIFIER_FIXUP_1258 + hdLod5(param_8, param_9).x;
        _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1287;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1294 = _RESERVED_IDENTIFIER_FIXUP_3133.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3176;
        _RESERVED_IDENTIFIER_FIXUP_3176.x = _RESERVED_IDENTIFIER_FIXUP_1294.x;
        _RESERVED_IDENTIFIER_FIXUP_3176.y = _RESERVED_IDENTIFIER_FIXUP_1294.y;
        _RESERVED_IDENTIFIER_FIXUP_3176.w = _RESERVED_IDENTIFIER_FIXUP_1218;
        vec2 param_10 = _RESERVED_IDENTIFIER_FIXUP_3176.xy;
        float param_11 = _RESERVED_IDENTIFIER_FIXUP_1218;
        float _RESERVED_IDENTIFIER_FIXUP_1316 = _RESERVED_IDENTIFIER_FIXUP_1287 + hdLod5(param_10, param_11).x;
        _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1316;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1323 = _RESERVED_IDENTIFIER_FIXUP_3133.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3189;
        _RESERVED_IDENTIFIER_FIXUP_3189.x = _RESERVED_IDENTIFIER_FIXUP_1323.x;
        _RESERVED_IDENTIFIER_FIXUP_3189.y = _RESERVED_IDENTIFIER_FIXUP_1323.y;
        _RESERVED_IDENTIFIER_FIXUP_3189.w = _RESERVED_IDENTIFIER_FIXUP_1218;
        vec2 param_12 = _RESERVED_IDENTIFIER_FIXUP_3189.xy;
        float param_13 = _RESERVED_IDENTIFIER_FIXUP_1218;
        float _RESERVED_IDENTIFIER_FIXUP_1345 = _RESERVED_IDENTIFIER_FIXUP_1316 + hdLod5(param_12, param_13).x;
        _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1345;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1352 = _RESERVED_IDENTIFIER_FIXUP_3133.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3202;
        _RESERVED_IDENTIFIER_FIXUP_3202.x = _RESERVED_IDENTIFIER_FIXUP_1352.x;
        _RESERVED_IDENTIFIER_FIXUP_3202.y = _RESERVED_IDENTIFIER_FIXUP_1352.y;
        _RESERVED_IDENTIFIER_FIXUP_3202.w = _RESERVED_IDENTIFIER_FIXUP_1218;
        vec2 param_14 = _RESERVED_IDENTIFIER_FIXUP_3202.xy;
        float param_15 = _RESERVED_IDENTIFIER_FIXUP_1218;
        float _RESERVED_IDENTIFIER_FIXUP_1374 = _RESERVED_IDENTIFIER_FIXUP_1345 + hdLod5(param_14, param_15).x;
        _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1374;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1381 = _RESERVED_IDENTIFIER_FIXUP_3133.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3215;
        _RESERVED_IDENTIFIER_FIXUP_3215.x = _RESERVED_IDENTIFIER_FIXUP_1381.x;
        _RESERVED_IDENTIFIER_FIXUP_3215.y = _RESERVED_IDENTIFIER_FIXUP_1381.y;
        _RESERVED_IDENTIFIER_FIXUP_3215.w = _RESERVED_IDENTIFIER_FIXUP_1218;
        vec2 param_16 = _RESERVED_IDENTIFIER_FIXUP_3215.xy;
        float param_17 = _RESERVED_IDENTIFIER_FIXUP_1218;
        float _RESERVED_IDENTIFIER_FIXUP_1403 = _RESERVED_IDENTIFIER_FIXUP_1374 + hdLod5(param_16, param_17).x;
        _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1403;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1410 = _RESERVED_IDENTIFIER_FIXUP_3133.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3228;
        _RESERVED_IDENTIFIER_FIXUP_3228.x = _RESERVED_IDENTIFIER_FIXUP_1410.x;
        _RESERVED_IDENTIFIER_FIXUP_3228.y = _RESERVED_IDENTIFIER_FIXUP_1410.y;
        _RESERVED_IDENTIFIER_FIXUP_3228.w = _RESERVED_IDENTIFIER_FIXUP_1218;
        vec2 param_18 = _RESERVED_IDENTIFIER_FIXUP_3228.xy;
        float param_19 = _RESERVED_IDENTIFIER_FIXUP_1218;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1427 = hdLod5(param_18, param_19);
        float _RESERVED_IDENTIFIER_FIXUP_1432 = _RESERVED_IDENTIFIER_FIXUP_1403 + _RESERVED_IDENTIFIER_FIXUP_1427.x;
        _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1432;
        _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1432 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3673 = _RESERVED_IDENTIFIER_FIXUP_1427;
        _RESERVED_IDENTIFIER_FIXUP_3670 = _RESERVED_IDENTIFIER_FIXUP_3133;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1445 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_2921.y = _RESERVED_IDENTIFIER_FIXUP_1445;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3674;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3671;
        if (_RESERVED_IDENTIFIER_FIXUP_1445 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1454 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1464 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_1466 = _RESERVED_IDENTIFIER_FIXUP_1464.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3073 = _RESERVED_IDENTIFIER_FIXUP_2921;
            _RESERVED_IDENTIFIER_FIXUP_3073.y = _RESERVED_IDENTIFIER_FIXUP_1466;
            _RESERVED_IDENTIFIER_FIXUP_3073.z = _RESERVED_IDENTIFIER_FIXUP_1464.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1474 = _RESERVED_IDENTIFIER_FIXUP_3073.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3077;
            _RESERVED_IDENTIFIER_FIXUP_3077.x = _RESERVED_IDENTIFIER_FIXUP_1474.x;
            _RESERVED_IDENTIFIER_FIXUP_3077.y = _RESERVED_IDENTIFIER_FIXUP_1474.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1481 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1485 = _RESERVED_IDENTIFIER_FIXUP_1481.y;
            _RESERVED_IDENTIFIER_FIXUP_3077.w = _RESERVED_IDENTIFIER_FIXUP_1485;
            vec2 param_20 = _RESERVED_IDENTIFIER_FIXUP_1454.xy;
            float param_21 = _RESERVED_IDENTIFIER_FIXUP_1454.w;
            vec2 param_22 = _RESERVED_IDENTIFIER_FIXUP_3077.xy;
            float param_23 = _RESERVED_IDENTIFIER_FIXUP_1485;
            float _RESERVED_IDENTIFIER_FIXUP_1496 = hdLod6(param_20, param_21).x + hdLod6(param_22, param_23).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3693 = vec4(_RESERVED_IDENTIFIER_FIXUP_1175, _RESERVED_IDENTIFIER_FIXUP_1466, _RESERVED_IDENTIFIER_FIXUP_1464.y, _RESERVED_IDENTIFIER_FIXUP_1496);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1503 = _RESERVED_IDENTIFIER_FIXUP_3693.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3090;
            _RESERVED_IDENTIFIER_FIXUP_3090.x = _RESERVED_IDENTIFIER_FIXUP_1503.x;
            _RESERVED_IDENTIFIER_FIXUP_3090.y = _RESERVED_IDENTIFIER_FIXUP_1503.y;
            _RESERVED_IDENTIFIER_FIXUP_3090.w = _RESERVED_IDENTIFIER_FIXUP_1485;
            vec2 param_24 = _RESERVED_IDENTIFIER_FIXUP_3090.xy;
            float param_25 = _RESERVED_IDENTIFIER_FIXUP_1485;
            float _RESERVED_IDENTIFIER_FIXUP_1525 = _RESERVED_IDENTIFIER_FIXUP_1496 + hdLod6(param_24, param_25).x;
            _RESERVED_IDENTIFIER_FIXUP_3693.w = _RESERVED_IDENTIFIER_FIXUP_1525;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1532 = _RESERVED_IDENTIFIER_FIXUP_3693.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3103;
            _RESERVED_IDENTIFIER_FIXUP_3103.x = _RESERVED_IDENTIFIER_FIXUP_1532.x;
            _RESERVED_IDENTIFIER_FIXUP_3103.y = _RESERVED_IDENTIFIER_FIXUP_1532.y;
            _RESERVED_IDENTIFIER_FIXUP_3103.w = _RESERVED_IDENTIFIER_FIXUP_1485;
            vec2 param_26 = _RESERVED_IDENTIFIER_FIXUP_3103.xy;
            float param_27 = _RESERVED_IDENTIFIER_FIXUP_1485;
            float _RESERVED_IDENTIFIER_FIXUP_1554 = _RESERVED_IDENTIFIER_FIXUP_1525 + hdLod6(param_26, param_27).x;
            _RESERVED_IDENTIFIER_FIXUP_3693.w = _RESERVED_IDENTIFIER_FIXUP_1554;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1561 = _RESERVED_IDENTIFIER_FIXUP_3693.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3116;
            _RESERVED_IDENTIFIER_FIXUP_3116.x = _RESERVED_IDENTIFIER_FIXUP_1561.x;
            _RESERVED_IDENTIFIER_FIXUP_3116.y = _RESERVED_IDENTIFIER_FIXUP_1561.y;
            _RESERVED_IDENTIFIER_FIXUP_3116.w = _RESERVED_IDENTIFIER_FIXUP_1485;
            vec2 param_28 = _RESERVED_IDENTIFIER_FIXUP_3116.xy;
            float param_29 = _RESERVED_IDENTIFIER_FIXUP_1485;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1578 = hdLod6(param_28, param_29);
            float _RESERVED_IDENTIFIER_FIXUP_1583 = _RESERVED_IDENTIFIER_FIXUP_1554 + _RESERVED_IDENTIFIER_FIXUP_1578.x;
            _RESERVED_IDENTIFIER_FIXUP_3693.y = _RESERVED_IDENTIFIER_FIXUP_1583;
            _RESERVED_IDENTIFIER_FIXUP_3693.x = _RESERVED_IDENTIFIER_FIXUP_1583 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3674 = _RESERVED_IDENTIFIER_FIXUP_1578;
            _RESERVED_IDENTIFIER_FIXUP_3671 = _RESERVED_IDENTIFIER_FIXUP_3693;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_1596 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_2938 = _RESERVED_IDENTIFIER_FIXUP_2921;
            _RESERVED_IDENTIFIER_FIXUP_2938.y = _RESERVED_IDENTIFIER_FIXUP_1596;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3675;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3672;
            if (_RESERVED_IDENTIFIER_FIXUP_1596 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_1605 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1615 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_1617 = _RESERVED_IDENTIFIER_FIXUP_1615.x;
                _RESERVED_IDENTIFIER_FIXUP_2938.y = _RESERVED_IDENTIFIER_FIXUP_1617;
                _RESERVED_IDENTIFIER_FIXUP_2938.z = _RESERVED_IDENTIFIER_FIXUP_1615.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1625 = _RESERVED_IDENTIFIER_FIXUP_2938.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3017;
                _RESERVED_IDENTIFIER_FIXUP_3017.x = _RESERVED_IDENTIFIER_FIXUP_1625.x;
                _RESERVED_IDENTIFIER_FIXUP_3017.y = _RESERVED_IDENTIFIER_FIXUP_1625.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1632 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_1636 = _RESERVED_IDENTIFIER_FIXUP_1632.y;
                _RESERVED_IDENTIFIER_FIXUP_3017.w = _RESERVED_IDENTIFIER_FIXUP_1636;
                vec2 param_30 = _RESERVED_IDENTIFIER_FIXUP_1605.xy;
                float param_31 = _RESERVED_IDENTIFIER_FIXUP_1605.w;
                vec2 param_32 = _RESERVED_IDENTIFIER_FIXUP_3017.xy;
                float param_33 = _RESERVED_IDENTIFIER_FIXUP_1636;
                float _RESERVED_IDENTIFIER_FIXUP_1647 = hdLod7(param_30, param_31).x + hdLod7(param_32, param_33).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3692 = vec4(_RESERVED_IDENTIFIER_FIXUP_1175, _RESERVED_IDENTIFIER_FIXUP_1617, _RESERVED_IDENTIFIER_FIXUP_1615.y, _RESERVED_IDENTIFIER_FIXUP_1647);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1654 = _RESERVED_IDENTIFIER_FIXUP_3692.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3030;
                _RESERVED_IDENTIFIER_FIXUP_3030.x = _RESERVED_IDENTIFIER_FIXUP_1654.x;
                _RESERVED_IDENTIFIER_FIXUP_3030.y = _RESERVED_IDENTIFIER_FIXUP_1654.y;
                _RESERVED_IDENTIFIER_FIXUP_3030.w = _RESERVED_IDENTIFIER_FIXUP_1636;
                vec2 param_34 = _RESERVED_IDENTIFIER_FIXUP_3030.xy;
                float param_35 = _RESERVED_IDENTIFIER_FIXUP_1636;
                float _RESERVED_IDENTIFIER_FIXUP_1676 = _RESERVED_IDENTIFIER_FIXUP_1647 + hdLod7(param_34, param_35).x;
                _RESERVED_IDENTIFIER_FIXUP_3692.w = _RESERVED_IDENTIFIER_FIXUP_1676;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1683 = _RESERVED_IDENTIFIER_FIXUP_3692.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3043;
                _RESERVED_IDENTIFIER_FIXUP_3043.x = _RESERVED_IDENTIFIER_FIXUP_1683.x;
                _RESERVED_IDENTIFIER_FIXUP_3043.y = _RESERVED_IDENTIFIER_FIXUP_1683.y;
                _RESERVED_IDENTIFIER_FIXUP_3043.w = _RESERVED_IDENTIFIER_FIXUP_1636;
                vec2 param_36 = _RESERVED_IDENTIFIER_FIXUP_3043.xy;
                float param_37 = _RESERVED_IDENTIFIER_FIXUP_1636;
                float _RESERVED_IDENTIFIER_FIXUP_1705 = _RESERVED_IDENTIFIER_FIXUP_1676 + hdLod7(param_36, param_37).x;
                _RESERVED_IDENTIFIER_FIXUP_3692.w = _RESERVED_IDENTIFIER_FIXUP_1705;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1712 = _RESERVED_IDENTIFIER_FIXUP_3692.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3056;
                _RESERVED_IDENTIFIER_FIXUP_3056.x = _RESERVED_IDENTIFIER_FIXUP_1712.x;
                _RESERVED_IDENTIFIER_FIXUP_3056.y = _RESERVED_IDENTIFIER_FIXUP_1712.y;
                _RESERVED_IDENTIFIER_FIXUP_3056.w = _RESERVED_IDENTIFIER_FIXUP_1636;
                vec2 param_38 = _RESERVED_IDENTIFIER_FIXUP_3056.xy;
                float param_39 = _RESERVED_IDENTIFIER_FIXUP_1636;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1729 = hdLod7(param_38, param_39);
                float _RESERVED_IDENTIFIER_FIXUP_1734 = _RESERVED_IDENTIFIER_FIXUP_1705 + _RESERVED_IDENTIFIER_FIXUP_1729.x;
                _RESERVED_IDENTIFIER_FIXUP_3692.y = _RESERVED_IDENTIFIER_FIXUP_1734;
                _RESERVED_IDENTIFIER_FIXUP_3692.x = _RESERVED_IDENTIFIER_FIXUP_1734 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3675 = _RESERVED_IDENTIFIER_FIXUP_1729;
                _RESERVED_IDENTIFIER_FIXUP_3672 = _RESERVED_IDENTIFIER_FIXUP_3692;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_1750 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_1754 = _RESERVED_IDENTIFIER_FIXUP_1750.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1765 = vec4(_RESERVED_IDENTIFIER_FIXUP_1750.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1754).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3689 = vec4(_RESERVED_IDENTIFIER_FIXUP_1765 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1754);
                vec2 _RESERVED_IDENTIFIER_FIXUP_1802 = _RESERVED_IDENTIFIER_FIXUP_1765 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2971 = _RESERVED_IDENTIFIER_FIXUP_3689;
                _RESERVED_IDENTIFIER_FIXUP_2971.x = _RESERVED_IDENTIFIER_FIXUP_1802.x;
                _RESERVED_IDENTIFIER_FIXUP_2971.y = _RESERVED_IDENTIFIER_FIXUP_1802.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1824 = _RESERVED_IDENTIFIER_FIXUP_1765 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2980 = _RESERVED_IDENTIFIER_FIXUP_2971;
                _RESERVED_IDENTIFIER_FIXUP_2980.x = _RESERVED_IDENTIFIER_FIXUP_1824.x;
                _RESERVED_IDENTIFIER_FIXUP_2980.y = _RESERVED_IDENTIFIER_FIXUP_1824.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_1846 = _RESERVED_IDENTIFIER_FIXUP_1765 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2989 = _RESERVED_IDENTIFIER_FIXUP_2980;
                _RESERVED_IDENTIFIER_FIXUP_2989.x = _RESERVED_IDENTIFIER_FIXUP_1846.x;
                _RESERVED_IDENTIFIER_FIXUP_2989.y = _RESERVED_IDENTIFIER_FIXUP_1846.y;
                vec2 param_40 = _RESERVED_IDENTIFIER_FIXUP_2989.xy;
                float param_41 = _RESERVED_IDENTIFIER_FIXUP_1754;
                vec4 _RESERVED_IDENTIFIER_FIXUP_1856 = hdLod8(param_40, param_41);
                vec2 param_42 = _RESERVED_IDENTIFIER_FIXUP_1765;
                float param_43 = _RESERVED_IDENTIFIER_FIXUP_1754;
                vec2 param_44 = _RESERVED_IDENTIFIER_FIXUP_3689.xy;
                float param_45 = _RESERVED_IDENTIFIER_FIXUP_1754;
                vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_2971.xy;
                float param_47 = _RESERVED_IDENTIFIER_FIXUP_1754;
                vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_2980.xy;
                float param_49 = _RESERVED_IDENTIFIER_FIXUP_1754;
                float _RESERVED_IDENTIFIER_FIXUP_1861 = (((hdLod8(param_42, param_43).x + hdLod8(param_44, param_45).x) + hdLod8(param_46, param_47).x) + hdLod8(param_48, param_49).x) + _RESERVED_IDENTIFIER_FIXUP_1856.x;
                float _RESERVED_IDENTIFIER_FIXUP_1869 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3000 = _RESERVED_IDENTIFIER_FIXUP_1856;
                _RESERVED_IDENTIFIER_FIXUP_3000.x = _RESERVED_IDENTIFIER_FIXUP_1869;
                float _RESERVED_IDENTIFIER_FIXUP_1875 = clamp((_RESERVED_IDENTIFIER_FIXUP_1869 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_1880 = (_RESERVED_IDENTIFIER_FIXUP_1861 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3675 = _RESERVED_IDENTIFIER_FIXUP_3000;
                _RESERVED_IDENTIFIER_FIXUP_3672 = vec4((_RESERVED_IDENTIFIER_FIXUP_1875 * _RESERVED_IDENTIFIER_FIXUP_1880) + 1.0, _RESERVED_IDENTIFIER_FIXUP_1875, _RESERVED_IDENTIFIER_FIXUP_1880, _RESERVED_IDENTIFIER_FIXUP_1861);
            }
            _RESERVED_IDENTIFIER_FIXUP_3674 = _RESERVED_IDENTIFIER_FIXUP_3675;
            _RESERVED_IDENTIFIER_FIXUP_3671 = _RESERVED_IDENTIFIER_FIXUP_3672;
        }
        _RESERVED_IDENTIFIER_FIXUP_3673 = _RESERVED_IDENTIFIER_FIXUP_3674;
        _RESERVED_IDENTIFIER_FIXUP_3670 = _RESERVED_IDENTIFIER_FIXUP_3671;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3247 = _RESERVED_IDENTIFIER_FIXUP_3670;
    _RESERVED_IDENTIFIER_FIXUP_3247.y = 1.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1908 = mix(_RESERVED_IDENTIFIER_FIXUP_1143, _RESERVED_IDENTIFIER_FIXUP_1147, _RESERVED_IDENTIFIER_FIXUP_1151.xxxx).xyz * _RESERVED_IDENTIFIER_FIXUP_3247.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3249 = _RESERVED_IDENTIFIER_FIXUP_3247;
    _RESERVED_IDENTIFIER_FIXUP_3249.y = _RESERVED_IDENTIFIER_FIXUP_1908.x;
    _RESERVED_IDENTIFIER_FIXUP_3249.z = _RESERVED_IDENTIFIER_FIXUP_1908.y;
    _RESERVED_IDENTIFIER_FIXUP_3249.w = _RESERVED_IDENTIFIER_FIXUP_1908.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1919 = _RESERVED_IDENTIFIER_FIXUP_3249.yzw * vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3668).xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3255 = _RESERVED_IDENTIFIER_FIXUP_3249;
    _RESERVED_IDENTIFIER_FIXUP_3255.y = _RESERVED_IDENTIFIER_FIXUP_1919.x;
    _RESERVED_IDENTIFIER_FIXUP_3255.z = _RESERVED_IDENTIFIER_FIXUP_1919.y;
    _RESERVED_IDENTIFIER_FIXUP_3255.w = _RESERVED_IDENTIFIER_FIXUP_1919.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1930 = _RESERVED_IDENTIFIER_FIXUP_3255.yzw + _RESERVED_IDENTIFIER_FIXUP_3255.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_1932 = _RESERVED_IDENTIFIER_FIXUP_1930.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3261 = _RESERVED_IDENTIFIER_FIXUP_3255;
    _RESERVED_IDENTIFIER_FIXUP_3261.y = _RESERVED_IDENTIFIER_FIXUP_1932;
    _RESERVED_IDENTIFIER_FIXUP_3261.z = _RESERVED_IDENTIFIER_FIXUP_1930.y;
    _RESERVED_IDENTIFIER_FIXUP_3261.w = _RESERVED_IDENTIFIER_FIXUP_1930.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3267 = _RESERVED_IDENTIFIER_FIXUP_3673;
    _RESERVED_IDENTIFIER_FIXUP_3267.x = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3267.y = 0.0;
    _RESERVED_IDENTIFIER_FIXUP_3267.z = 0.0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1955 = (_RESERVED_IDENTIFIER_FIXUP_3267.xyz * _RESERVED_IDENTIFIER_FIXUP_3261.xxx) + _RESERVED_IDENTIFIER_FIXUP_3261.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3694 = vec4(_RESERVED_IDENTIFIER_FIXUP_1955.x, _RESERVED_IDENTIFIER_FIXUP_1932, _RESERVED_IDENTIFIER_FIXUP_1930.yz);
    _RESERVED_IDENTIFIER_FIXUP_3694.y = _RESERVED_IDENTIFIER_FIXUP_1955.y;
    _RESERVED_IDENTIFIER_FIXUP_3694.z = _RESERVED_IDENTIFIER_FIXUP_1955.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1968 = _RESERVED_IDENTIFIER_FIXUP_3694.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3279 = _RESERVED_IDENTIFIER_FIXUP_3694;
    _RESERVED_IDENTIFIER_FIXUP_3279.x = _RESERVED_IDENTIFIER_FIXUP_1968.x;
    _RESERVED_IDENTIFIER_FIXUP_3279.y = _RESERVED_IDENTIFIER_FIXUP_1968.y;
    _RESERVED_IDENTIFIER_FIXUP_3279.z = _RESERVED_IDENTIFIER_FIXUP_1968.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2021 = OptTex0( texcoord0.xyz);
    vec2 param_50 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2025 = hdTex1(param_50);
    vec2 param_51 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2029 = hdTex2(param_51);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2034 = mix(_RESERVED_IDENTIFIER_FIXUP_2021, _RESERVED_IDENTIFIER_FIXUP_2025, _RESERVED_IDENTIFIER_FIXUP_2029.xxxx);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3295 = _RESERVED_IDENTIFIER_FIXUP_2021;
    _RESERVED_IDENTIFIER_FIXUP_3295.x = _RESERVED_IDENTIFIER_FIXUP_1163;
    float _RESERVED_IDENTIFIER_FIXUP_2047 = clamp((_RESERVED_IDENTIFIER_FIXUP_1163 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3295.x = _RESERVED_IDENTIFIER_FIXUP_2047;
    float _RESERVED_IDENTIFIER_FIXUP_2053 = ((-_RESERVED_IDENTIFIER_FIXUP_2047) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3295.x = _RESERVED_IDENTIFIER_FIXUP_2053;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3682;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3679;
    if (_RESERVED_IDENTIFIER_FIXUP_2053 != (-_RESERVED_IDENTIFIER_FIXUP_2053))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2065 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_2065.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2065.w;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2071 = hdLod5(param_52, param_53);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2075 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3507 = _RESERVED_IDENTIFIER_FIXUP_2071;
        _RESERVED_IDENTIFIER_FIXUP_3507.y = _RESERVED_IDENTIFIER_FIXUP_2075.x;
        _RESERVED_IDENTIFIER_FIXUP_3507.z = _RESERVED_IDENTIFIER_FIXUP_2075.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2085 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3511;
        _RESERVED_IDENTIFIER_FIXUP_3511.x = _RESERVED_IDENTIFIER_FIXUP_2085.x;
        _RESERVED_IDENTIFIER_FIXUP_3511.y = _RESERVED_IDENTIFIER_FIXUP_2085.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2092 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2096 = _RESERVED_IDENTIFIER_FIXUP_2092.y;
        _RESERVED_IDENTIFIER_FIXUP_3511.w = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3511.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2096;
        float _RESERVED_IDENTIFIER_FIXUP_2107 = _RESERVED_IDENTIFIER_FIXUP_2071.x + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_2107;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2114 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3524;
        _RESERVED_IDENTIFIER_FIXUP_3524.x = _RESERVED_IDENTIFIER_FIXUP_2114.x;
        _RESERVED_IDENTIFIER_FIXUP_3524.y = _RESERVED_IDENTIFIER_FIXUP_2114.y;
        _RESERVED_IDENTIFIER_FIXUP_3524.w = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_3524.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2096;
        float _RESERVED_IDENTIFIER_FIXUP_2136 = _RESERVED_IDENTIFIER_FIXUP_2107 + hdLod5(param_56, param_57).x;
        _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_2136;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2143 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3537;
        _RESERVED_IDENTIFIER_FIXUP_3537.x = _RESERVED_IDENTIFIER_FIXUP_2143.x;
        _RESERVED_IDENTIFIER_FIXUP_3537.y = _RESERVED_IDENTIFIER_FIXUP_2143.y;
        _RESERVED_IDENTIFIER_FIXUP_3537.w = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3537.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2096;
        float _RESERVED_IDENTIFIER_FIXUP_2165 = _RESERVED_IDENTIFIER_FIXUP_2136 + hdLod5(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_2165;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2172 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3550;
        _RESERVED_IDENTIFIER_FIXUP_3550.x = _RESERVED_IDENTIFIER_FIXUP_2172.x;
        _RESERVED_IDENTIFIER_FIXUP_3550.y = _RESERVED_IDENTIFIER_FIXUP_2172.y;
        _RESERVED_IDENTIFIER_FIXUP_3550.w = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3550.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2096;
        float _RESERVED_IDENTIFIER_FIXUP_2194 = _RESERVED_IDENTIFIER_FIXUP_2165 + hdLod5(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_2194;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2201 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3563;
        _RESERVED_IDENTIFIER_FIXUP_3563.x = _RESERVED_IDENTIFIER_FIXUP_2201.x;
        _RESERVED_IDENTIFIER_FIXUP_3563.y = _RESERVED_IDENTIFIER_FIXUP_2201.y;
        _RESERVED_IDENTIFIER_FIXUP_3563.w = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3563.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2096;
        float _RESERVED_IDENTIFIER_FIXUP_2223 = _RESERVED_IDENTIFIER_FIXUP_2194 + hdLod5(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_2223;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2230 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3576;
        _RESERVED_IDENTIFIER_FIXUP_3576.x = _RESERVED_IDENTIFIER_FIXUP_2230.x;
        _RESERVED_IDENTIFIER_FIXUP_3576.y = _RESERVED_IDENTIFIER_FIXUP_2230.y;
        _RESERVED_IDENTIFIER_FIXUP_3576.w = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3576.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2096;
        float _RESERVED_IDENTIFIER_FIXUP_2252 = _RESERVED_IDENTIFIER_FIXUP_2223 + hdLod5(param_64, param_65).x;
        _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_2252;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2259 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3589;
        _RESERVED_IDENTIFIER_FIXUP_3589.x = _RESERVED_IDENTIFIER_FIXUP_2259.x;
        _RESERVED_IDENTIFIER_FIXUP_3589.y = _RESERVED_IDENTIFIER_FIXUP_2259.y;
        _RESERVED_IDENTIFIER_FIXUP_3589.w = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_3589.xy;
        float param_67 = _RESERVED_IDENTIFIER_FIXUP_2096;
        float _RESERVED_IDENTIFIER_FIXUP_2281 = _RESERVED_IDENTIFIER_FIXUP_2252 + hdLod5(param_66, param_67).x;
        _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_2281;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2288 = _RESERVED_IDENTIFIER_FIXUP_3507.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3602;
        _RESERVED_IDENTIFIER_FIXUP_3602.x = _RESERVED_IDENTIFIER_FIXUP_2288.x;
        _RESERVED_IDENTIFIER_FIXUP_3602.y = _RESERVED_IDENTIFIER_FIXUP_2288.y;
        _RESERVED_IDENTIFIER_FIXUP_3602.w = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3602.xy;
        float param_69 = _RESERVED_IDENTIFIER_FIXUP_2096;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2305 = hdLod5(param_68, param_69);
        float _RESERVED_IDENTIFIER_FIXUP_2310 = _RESERVED_IDENTIFIER_FIXUP_2281 + _RESERVED_IDENTIFIER_FIXUP_2305.x;
        _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_2310;
        _RESERVED_IDENTIFIER_FIXUP_3507.x = _RESERVED_IDENTIFIER_FIXUP_2310 * 0.111111111938953399658203125;
        _RESERVED_IDENTIFIER_FIXUP_3682 = _RESERVED_IDENTIFIER_FIXUP_2305;
        _RESERVED_IDENTIFIER_FIXUP_3679 = _RESERVED_IDENTIFIER_FIXUP_3507;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2323 = max(abs(texcoord5.x), abs(texcoord5.y));
        _RESERVED_IDENTIFIER_FIXUP_3295.y = _RESERVED_IDENTIFIER_FIXUP_2323;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3683;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3680;
        if (_RESERVED_IDENTIFIER_FIXUP_2323 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2332 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2342 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
            float _RESERVED_IDENTIFIER_FIXUP_2344 = _RESERVED_IDENTIFIER_FIXUP_2342.x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3447 = _RESERVED_IDENTIFIER_FIXUP_3295;
            _RESERVED_IDENTIFIER_FIXUP_3447.y = _RESERVED_IDENTIFIER_FIXUP_2344;
            _RESERVED_IDENTIFIER_FIXUP_3447.z = _RESERVED_IDENTIFIER_FIXUP_2342.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2352 = _RESERVED_IDENTIFIER_FIXUP_3447.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3451;
            _RESERVED_IDENTIFIER_FIXUP_3451.x = _RESERVED_IDENTIFIER_FIXUP_2352.x;
            _RESERVED_IDENTIFIER_FIXUP_3451.y = _RESERVED_IDENTIFIER_FIXUP_2352.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2359 = vec2(1.0, 0.0) * texcoord5.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2363 = _RESERVED_IDENTIFIER_FIXUP_2359.y;
            _RESERVED_IDENTIFIER_FIXUP_3451.w = _RESERVED_IDENTIFIER_FIXUP_2363;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_2332.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2332.w;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3451.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2363;
            float _RESERVED_IDENTIFIER_FIXUP_2374 = hdLod6(param_70, param_71).x + hdLod6(param_72, param_73).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3701 = vec4(_RESERVED_IDENTIFIER_FIXUP_2053, _RESERVED_IDENTIFIER_FIXUP_2344, _RESERVED_IDENTIFIER_FIXUP_2342.y, _RESERVED_IDENTIFIER_FIXUP_2374);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2381 = _RESERVED_IDENTIFIER_FIXUP_3701.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3464;
            _RESERVED_IDENTIFIER_FIXUP_3464.x = _RESERVED_IDENTIFIER_FIXUP_2381.x;
            _RESERVED_IDENTIFIER_FIXUP_3464.y = _RESERVED_IDENTIFIER_FIXUP_2381.y;
            _RESERVED_IDENTIFIER_FIXUP_3464.w = _RESERVED_IDENTIFIER_FIXUP_2363;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3464.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2363;
            float _RESERVED_IDENTIFIER_FIXUP_2403 = _RESERVED_IDENTIFIER_FIXUP_2374 + hdLod6(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3701.w = _RESERVED_IDENTIFIER_FIXUP_2403;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2410 = _RESERVED_IDENTIFIER_FIXUP_3701.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3477;
            _RESERVED_IDENTIFIER_FIXUP_3477.x = _RESERVED_IDENTIFIER_FIXUP_2410.x;
            _RESERVED_IDENTIFIER_FIXUP_3477.y = _RESERVED_IDENTIFIER_FIXUP_2410.y;
            _RESERVED_IDENTIFIER_FIXUP_3477.w = _RESERVED_IDENTIFIER_FIXUP_2363;
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_3477.xy;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2363;
            float _RESERVED_IDENTIFIER_FIXUP_2432 = _RESERVED_IDENTIFIER_FIXUP_2403 + hdLod6(param_76, param_77).x;
            _RESERVED_IDENTIFIER_FIXUP_3701.w = _RESERVED_IDENTIFIER_FIXUP_2432;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2439 = _RESERVED_IDENTIFIER_FIXUP_3701.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3490;
            _RESERVED_IDENTIFIER_FIXUP_3490.x = _RESERVED_IDENTIFIER_FIXUP_2439.x;
            _RESERVED_IDENTIFIER_FIXUP_3490.y = _RESERVED_IDENTIFIER_FIXUP_2439.y;
            _RESERVED_IDENTIFIER_FIXUP_3490.w = _RESERVED_IDENTIFIER_FIXUP_2363;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3490.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2363;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2456 = hdLod6(param_78, param_79);
            float _RESERVED_IDENTIFIER_FIXUP_2461 = _RESERVED_IDENTIFIER_FIXUP_2432 + _RESERVED_IDENTIFIER_FIXUP_2456.x;
            _RESERVED_IDENTIFIER_FIXUP_3701.y = _RESERVED_IDENTIFIER_FIXUP_2461;
            _RESERVED_IDENTIFIER_FIXUP_3701.x = _RESERVED_IDENTIFIER_FIXUP_2461 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3683 = _RESERVED_IDENTIFIER_FIXUP_2456;
            _RESERVED_IDENTIFIER_FIXUP_3680 = _RESERVED_IDENTIFIER_FIXUP_3701;
        }
        else
        {
            float _RESERVED_IDENTIFIER_FIXUP_2474 = max(abs(texcoord6.x), abs(texcoord6.y));
            vec4 _RESERVED_IDENTIFIER_FIXUP_3312 = _RESERVED_IDENTIFIER_FIXUP_3295;
            _RESERVED_IDENTIFIER_FIXUP_3312.y = _RESERVED_IDENTIFIER_FIXUP_2474;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3684;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3681;
            if (_RESERVED_IDENTIFIER_FIXUP_2474 < 1.0)
            {
                vec4 _RESERVED_IDENTIFIER_FIXUP_2483 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2493 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
                float _RESERVED_IDENTIFIER_FIXUP_2495 = _RESERVED_IDENTIFIER_FIXUP_2493.x;
                _RESERVED_IDENTIFIER_FIXUP_3312.y = _RESERVED_IDENTIFIER_FIXUP_2495;
                _RESERVED_IDENTIFIER_FIXUP_3312.z = _RESERVED_IDENTIFIER_FIXUP_2493.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2503 = _RESERVED_IDENTIFIER_FIXUP_3312.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3391;
                _RESERVED_IDENTIFIER_FIXUP_3391.x = _RESERVED_IDENTIFIER_FIXUP_2503.x;
                _RESERVED_IDENTIFIER_FIXUP_3391.y = _RESERVED_IDENTIFIER_FIXUP_2503.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2510 = vec2(1.0, 0.0) * texcoord6.zx;
                float _RESERVED_IDENTIFIER_FIXUP_2514 = _RESERVED_IDENTIFIER_FIXUP_2510.y;
                _RESERVED_IDENTIFIER_FIXUP_3391.w = _RESERVED_IDENTIFIER_FIXUP_2514;
                vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_2483.xy;
                float param_81 = _RESERVED_IDENTIFIER_FIXUP_2483.w;
                vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3391.xy;
                float param_83 = _RESERVED_IDENTIFIER_FIXUP_2514;
                float _RESERVED_IDENTIFIER_FIXUP_2525 = hdLod7(param_80, param_81).x + hdLod7(param_82, param_83).x;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3700 = vec4(_RESERVED_IDENTIFIER_FIXUP_2053, _RESERVED_IDENTIFIER_FIXUP_2495, _RESERVED_IDENTIFIER_FIXUP_2493.y, _RESERVED_IDENTIFIER_FIXUP_2525);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2532 = _RESERVED_IDENTIFIER_FIXUP_3700.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3404;
                _RESERVED_IDENTIFIER_FIXUP_3404.x = _RESERVED_IDENTIFIER_FIXUP_2532.x;
                _RESERVED_IDENTIFIER_FIXUP_3404.y = _RESERVED_IDENTIFIER_FIXUP_2532.y;
                _RESERVED_IDENTIFIER_FIXUP_3404.w = _RESERVED_IDENTIFIER_FIXUP_2514;
                vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3404.xy;
                float param_85 = _RESERVED_IDENTIFIER_FIXUP_2514;
                float _RESERVED_IDENTIFIER_FIXUP_2554 = _RESERVED_IDENTIFIER_FIXUP_2525 + hdLod7(param_84, param_85).x;
                _RESERVED_IDENTIFIER_FIXUP_3700.w = _RESERVED_IDENTIFIER_FIXUP_2554;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2561 = _RESERVED_IDENTIFIER_FIXUP_3700.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3417;
                _RESERVED_IDENTIFIER_FIXUP_3417.x = _RESERVED_IDENTIFIER_FIXUP_2561.x;
                _RESERVED_IDENTIFIER_FIXUP_3417.y = _RESERVED_IDENTIFIER_FIXUP_2561.y;
                _RESERVED_IDENTIFIER_FIXUP_3417.w = _RESERVED_IDENTIFIER_FIXUP_2514;
                vec2 param_86 = _RESERVED_IDENTIFIER_FIXUP_3417.xy;
                float param_87 = _RESERVED_IDENTIFIER_FIXUP_2514;
                float _RESERVED_IDENTIFIER_FIXUP_2583 = _RESERVED_IDENTIFIER_FIXUP_2554 + hdLod7(param_86, param_87).x;
                _RESERVED_IDENTIFIER_FIXUP_3700.w = _RESERVED_IDENTIFIER_FIXUP_2583;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2590 = _RESERVED_IDENTIFIER_FIXUP_3700.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3430;
                _RESERVED_IDENTIFIER_FIXUP_3430.x = _RESERVED_IDENTIFIER_FIXUP_2590.x;
                _RESERVED_IDENTIFIER_FIXUP_3430.y = _RESERVED_IDENTIFIER_FIXUP_2590.y;
                _RESERVED_IDENTIFIER_FIXUP_3430.w = _RESERVED_IDENTIFIER_FIXUP_2514;
                vec2 param_88 = _RESERVED_IDENTIFIER_FIXUP_3430.xy;
                float param_89 = _RESERVED_IDENTIFIER_FIXUP_2514;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2607 = hdLod7(param_88, param_89);
                float _RESERVED_IDENTIFIER_FIXUP_2612 = _RESERVED_IDENTIFIER_FIXUP_2583 + _RESERVED_IDENTIFIER_FIXUP_2607.x;
                _RESERVED_IDENTIFIER_FIXUP_3700.y = _RESERVED_IDENTIFIER_FIXUP_2612;
                _RESERVED_IDENTIFIER_FIXUP_3700.x = _RESERVED_IDENTIFIER_FIXUP_2612 * 0.20000000298023223876953125;
                _RESERVED_IDENTIFIER_FIXUP_3684 = _RESERVED_IDENTIFIER_FIXUP_2607;
                _RESERVED_IDENTIFIER_FIXUP_3681 = _RESERVED_IDENTIFIER_FIXUP_3700;
            }
            else
            {
                vec2 _RESERVED_IDENTIFIER_FIXUP_2628 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                float _RESERVED_IDENTIFIER_FIXUP_2632 = _RESERVED_IDENTIFIER_FIXUP_2628.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2643 = vec4(_RESERVED_IDENTIFIER_FIXUP_2628.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2632).xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3697 = vec4(_RESERVED_IDENTIFIER_FIXUP_2643 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2632);
                vec2 _RESERVED_IDENTIFIER_FIXUP_2680 = _RESERVED_IDENTIFIER_FIXUP_2643 + optRegs.rows[optTile*82u+uint(5)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3345 = _RESERVED_IDENTIFIER_FIXUP_3697;
                _RESERVED_IDENTIFIER_FIXUP_3345.x = _RESERVED_IDENTIFIER_FIXUP_2680.x;
                _RESERVED_IDENTIFIER_FIXUP_3345.y = _RESERVED_IDENTIFIER_FIXUP_2680.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2702 = _RESERVED_IDENTIFIER_FIXUP_2643 + optRegs.rows[optTile*82u+uint(7)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3354 = _RESERVED_IDENTIFIER_FIXUP_3345;
                _RESERVED_IDENTIFIER_FIXUP_3354.x = _RESERVED_IDENTIFIER_FIXUP_2702.x;
                _RESERVED_IDENTIFIER_FIXUP_3354.y = _RESERVED_IDENTIFIER_FIXUP_2702.y;
                vec2 _RESERVED_IDENTIFIER_FIXUP_2724 = _RESERVED_IDENTIFIER_FIXUP_2643 + optRegs.rows[optTile*82u+uint(9)].xy;
                vec4 _RESERVED_IDENTIFIER_FIXUP_3363 = _RESERVED_IDENTIFIER_FIXUP_3354;
                _RESERVED_IDENTIFIER_FIXUP_3363.x = _RESERVED_IDENTIFIER_FIXUP_2724.x;
                _RESERVED_IDENTIFIER_FIXUP_3363.y = _RESERVED_IDENTIFIER_FIXUP_2724.y;
                vec2 param_90 = _RESERVED_IDENTIFIER_FIXUP_3363.xy;
                float param_91 = _RESERVED_IDENTIFIER_FIXUP_2632;
                vec4 _RESERVED_IDENTIFIER_FIXUP_2734 = hdLod8(param_90, param_91);
                vec2 param_92 = _RESERVED_IDENTIFIER_FIXUP_2643;
                float param_93 = _RESERVED_IDENTIFIER_FIXUP_2632;
                vec2 param_94 = _RESERVED_IDENTIFIER_FIXUP_3697.xy;
                float param_95 = _RESERVED_IDENTIFIER_FIXUP_2632;
                vec2 param_96 = _RESERVED_IDENTIFIER_FIXUP_3345.xy;
                float param_97 = _RESERVED_IDENTIFIER_FIXUP_2632;
                vec2 param_98 = _RESERVED_IDENTIFIER_FIXUP_3354.xy;
                float param_99 = _RESERVED_IDENTIFIER_FIXUP_2632;
                float _RESERVED_IDENTIFIER_FIXUP_2739 = (((hdLod8(param_92, param_93).x + hdLod8(param_94, param_95).x) + hdLod8(param_96, param_97).x) + hdLod8(param_98, param_99).x) + _RESERVED_IDENTIFIER_FIXUP_2734.x;
                float _RESERVED_IDENTIFIER_FIXUP_2747 = max(abs(texcoord4.w), abs(texcoord5.w));
                vec4 _RESERVED_IDENTIFIER_FIXUP_3374 = _RESERVED_IDENTIFIER_FIXUP_2734;
                _RESERVED_IDENTIFIER_FIXUP_3374.x = _RESERVED_IDENTIFIER_FIXUP_2747;
                float _RESERVED_IDENTIFIER_FIXUP_2753 = clamp((_RESERVED_IDENTIFIER_FIXUP_2747 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                float _RESERVED_IDENTIFIER_FIXUP_2758 = (_RESERVED_IDENTIFIER_FIXUP_2739 * 0.20000000298023223876953125) + (-1.0);
                _RESERVED_IDENTIFIER_FIXUP_3684 = _RESERVED_IDENTIFIER_FIXUP_3374;
                _RESERVED_IDENTIFIER_FIXUP_3681 = vec4((_RESERVED_IDENTIFIER_FIXUP_2753 * _RESERVED_IDENTIFIER_FIXUP_2758) + 1.0, _RESERVED_IDENTIFIER_FIXUP_2753, _RESERVED_IDENTIFIER_FIXUP_2758, _RESERVED_IDENTIFIER_FIXUP_2739);
            }
            _RESERVED_IDENTIFIER_FIXUP_3683 = _RESERVED_IDENTIFIER_FIXUP_3684;
            _RESERVED_IDENTIFIER_FIXUP_3680 = _RESERVED_IDENTIFIER_FIXUP_3681;
        }
        _RESERVED_IDENTIFIER_FIXUP_3682 = _RESERVED_IDENTIFIER_FIXUP_3683;
        _RESERVED_IDENTIFIER_FIXUP_3679 = _RESERVED_IDENTIFIER_FIXUP_3680;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2773 = (_RESERVED_IDENTIFIER_FIXUP_3679.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3619 = _RESERVED_IDENTIFIER_FIXUP_3679;
    _RESERVED_IDENTIFIER_FIXUP_3619.y = _RESERVED_IDENTIFIER_FIXUP_2773;
    _RESERVED_IDENTIFIER_FIXUP_3619.y = _RESERVED_IDENTIFIER_FIXUP_2773;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2786 = _RESERVED_IDENTIFIER_FIXUP_2034.xyz * _RESERVED_IDENTIFIER_FIXUP_3619.yyy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3625 = _RESERVED_IDENTIFIER_FIXUP_3619;
    _RESERVED_IDENTIFIER_FIXUP_3625.y = _RESERVED_IDENTIFIER_FIXUP_2786.x;
    _RESERVED_IDENTIFIER_FIXUP_3625.z = _RESERVED_IDENTIFIER_FIXUP_2786.y;
    _RESERVED_IDENTIFIER_FIXUP_3625.w = _RESERVED_IDENTIFIER_FIXUP_2786.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2797 = _RESERVED_IDENTIFIER_FIXUP_3625.yzw * color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3631 = _RESERVED_IDENTIFIER_FIXUP_3625;
    _RESERVED_IDENTIFIER_FIXUP_3631.y = _RESERVED_IDENTIFIER_FIXUP_2797.x;
    _RESERVED_IDENTIFIER_FIXUP_3631.z = _RESERVED_IDENTIFIER_FIXUP_2797.y;
    _RESERVED_IDENTIFIER_FIXUP_3631.w = _RESERVED_IDENTIFIER_FIXUP_2797.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2808 = _RESERVED_IDENTIFIER_FIXUP_3631.yzw + _RESERVED_IDENTIFIER_FIXUP_3631.yzw;
    float _RESERVED_IDENTIFIER_FIXUP_2810 = _RESERVED_IDENTIFIER_FIXUP_2808.x;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3637 = _RESERVED_IDENTIFIER_FIXUP_3631;
    _RESERVED_IDENTIFIER_FIXUP_3637.y = _RESERVED_IDENTIFIER_FIXUP_2810;
    _RESERVED_IDENTIFIER_FIXUP_3637.z = _RESERVED_IDENTIFIER_FIXUP_2808.y;
    _RESERVED_IDENTIFIER_FIXUP_3637.w = _RESERVED_IDENTIFIER_FIXUP_2808.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2819 = _RESERVED_IDENTIFIER_FIXUP_2034.www * color1.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3643 = _RESERVED_IDENTIFIER_FIXUP_3682;
    _RESERVED_IDENTIFIER_FIXUP_3643.x = _RESERVED_IDENTIFIER_FIXUP_2819.x;
    _RESERVED_IDENTIFIER_FIXUP_3643.y = _RESERVED_IDENTIFIER_FIXUP_2819.y;
    _RESERVED_IDENTIFIER_FIXUP_3643.z = _RESERVED_IDENTIFIER_FIXUP_2819.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2833 = (_RESERVED_IDENTIFIER_FIXUP_3643.xyz * _RESERVED_IDENTIFIER_FIXUP_3637.xxx) + _RESERVED_IDENTIFIER_FIXUP_3637.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3702 = vec4(_RESERVED_IDENTIFIER_FIXUP_2833.x, _RESERVED_IDENTIFIER_FIXUP_2810, _RESERVED_IDENTIFIER_FIXUP_2808.yz);
    _RESERVED_IDENTIFIER_FIXUP_3702.y = _RESERVED_IDENTIFIER_FIXUP_2833.y;
    _RESERVED_IDENTIFIER_FIXUP_3702.z = _RESERVED_IDENTIFIER_FIXUP_2833.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2846 = _RESERVED_IDENTIFIER_FIXUP_3702.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3655 = _RESERVED_IDENTIFIER_FIXUP_3702;
    _RESERVED_IDENTIFIER_FIXUP_3655.x = _RESERVED_IDENTIFIER_FIXUP_2846.x;
    _RESERVED_IDENTIFIER_FIXUP_3655.y = _RESERVED_IDENTIFIER_FIXUP_2846.y;
    _RESERVED_IDENTIFIER_FIXUP_3655.z = _RESERVED_IDENTIFIER_FIXUP_2846.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3655.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_1004 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1013;
    if (_RESERVED_IDENTIFIER_FIXUP_1004)
    {
        _RESERVED_IDENTIFIER_FIXUP_1013 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1013 = _RESERVED_IDENTIFIER_FIXUP_1004;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1013)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1050 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3279.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1077 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2911;
    if (_RESERVED_IDENTIFIER_FIXUP_1050 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2911 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1050), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1077);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2911 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1077);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2911;
    wxlLight = vec4(color0.xyz * 2.0, _RESERVED_IDENTIFIER_FIXUP_2773);
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
    vec4 v5 = texcoord5;
    vec4 v6 = texcoord6;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_2 = r0.xy;
        float param_3 = r0.w;
        r0 = hdLod5(param_2, param_3);
        vec2 hdB129 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = hdB129.x;
        r0.z = hdB129.y;
        vec2 hdB151 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = hdB151.x;
        r1.y = hdB151.y;
        vec2 hdB159 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB159.x;
        r1.w = hdB159.y;
        vec2 param_4 = r1.xy;
        float param_5 = r1.w;
        r1 = hdLod5(param_4, param_5);
        r0.x += r1.x;
        vec2 hdB182 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r1.x = hdB182.x;
        r1.y = hdB182.y;
        vec2 hdB189 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB189.x;
        r1.w = hdB189.y;
        vec2 param_6 = r1.xy;
        float param_7 = r1.w;
        r1 = hdLod5(param_6, param_7);
        r0.x += r1.x;
        vec2 hdB212 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = hdB212.x;
        r1.y = hdB212.y;
        vec2 hdB219 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB219.x;
        r1.w = hdB219.y;
        vec2 param_8 = r1.xy;
        float param_9 = r1.w;
        r1 = hdLod5(param_8, param_9);
        r0.x += r1.x;
        vec2 hdB242 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r1.x = hdB242.x;
        r1.y = hdB242.y;
        vec2 hdB249 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB249.x;
        r1.w = hdB249.y;
        vec2 param_10 = r1.xy;
        float param_11 = r1.w;
        r1 = hdLod5(param_10, param_11);
        r0.x += r1.x;
        vec2 hdB272 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = hdB272.x;
        r1.y = hdB272.y;
        vec2 hdB279 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB279.x;
        r1.w = hdB279.y;
        vec2 param_12 = r1.xy;
        float param_13 = r1.w;
        r1 = hdLod5(param_12, param_13);
        r0.x += r1.x;
        vec2 hdB302 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r1.x = hdB302.x;
        r1.y = hdB302.y;
        vec2 hdB309 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB309.x;
        r1.w = hdB309.y;
        vec2 param_14 = r1.xy;
        float param_15 = r1.w;
        r1 = hdLod5(param_14, param_15);
        r0.x += r1.x;
        vec2 hdB332 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = hdB332.x;
        r1.y = hdB332.y;
        vec2 hdB339 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB339.x;
        r1.w = hdB339.y;
        vec2 param_16 = r1.xy;
        float param_17 = r1.w;
        r1 = hdLod5(param_16, param_17);
        r0.x += r1.x;
        vec2 hdB362 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = hdB362.x;
        r1.y = hdB362.y;
        vec2 hdB369 = vec2(1.0, 0.0) * v4.zx;
        r1.z = hdB369.x;
        r1.w = hdB369.y;
        vec2 param_18 = r1.xy;
        float param_19 = r1.w;
        r1 = hdLod5(param_18, param_19);
        r0.x += r1.x;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v5.x), abs(v5.y));
        if (r0.y < 1.0)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_20 = r1.xy;
            float param_21 = r1.w;
            r1 = hdLod6(param_20, param_21);
            vec2 hdB419 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = hdB419.x;
            r0.z = hdB419.y;
            vec2 hdB429 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = hdB429.x;
            r2.y = hdB429.y;
            vec2 hdB436 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB436.x;
            r2.w = hdB436.y;
            vec2 param_22 = r2.xy;
            float param_23 = r2.w;
            r2 = hdLod6(param_22, param_23);
            r0.w = r1.x + r2.x;
            vec2 hdB458 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r1.x = hdB458.x;
            r1.y = hdB458.y;
            vec2 hdB465 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB465.x;
            r1.w = hdB465.y;
            vec2 param_24 = r1.xy;
            float param_25 = r1.w;
            r1 = hdLod6(param_24, param_25);
            r0.w += r1.x;
            vec2 hdB487 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r1.x = hdB487.x;
            r1.y = hdB487.y;
            vec2 hdB494 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB494.x;
            r1.w = hdB494.y;
            vec2 param_26 = r1.xy;
            float param_27 = r1.w;
            r1 = hdLod6(param_26, param_27);
            r0.w += r1.x;
            vec2 hdB516 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r1.x = hdB516.x;
            r1.y = hdB516.y;
            vec2 hdB523 = vec2(1.0, 0.0) * v5.zx;
            r1.z = hdB523.x;
            r1.w = hdB523.y;
            vec2 param_28 = r1.xy;
            float param_29 = r1.w;
            r1 = hdLod6(param_28, param_29);
            r0.y = r0.w + r1.x;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v6.x), abs(v6.y));
            if (r0.y < 1.0)
            {
                r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                vec2 param_30 = r1.xy;
                float param_31 = r1.w;
                r1 = hdLod7(param_30, param_31);
                vec2 hdB573 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = hdB573.x;
                r0.z = hdB573.y;
                vec2 hdB583 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = hdB583.x;
                r2.y = hdB583.y;
                vec2 hdB590 = vec2(1.0, 0.0) * v6.zx;
                r2.z = hdB590.x;
                r2.w = hdB590.y;
                vec2 param_32 = r2.xy;
                float param_33 = r2.w;
                r2 = hdLod7(param_32, param_33);
                r0.w = r1.x + r2.x;
                vec2 hdB612 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r1.x = hdB612.x;
                r1.y = hdB612.y;
                vec2 hdB619 = vec2(1.0, 0.0) * v6.zx;
                r1.z = hdB619.x;
                r1.w = hdB619.y;
                vec2 param_34 = r1.xy;
                float param_35 = r1.w;
                r1 = hdLod7(param_34, param_35);
                r0.w += r1.x;
                vec2 hdB641 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r1.x = hdB641.x;
                r1.y = hdB641.y;
                vec2 hdB648 = vec2(1.0, 0.0) * v6.zx;
                r1.z = hdB648.x;
                r1.w = hdB648.y;
                vec2 param_36 = r1.xy;
                float param_37 = r1.w;
                r1 = hdLod7(param_36, param_37);
                r0.w += r1.x;
                vec2 hdB670 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r1.x = hdB670.x;
                r1.y = hdB670.y;
                vec2 hdB677 = vec2(1.0, 0.0) * v6.zx;
                r1.z = hdB677.x;
                r1.w = hdB677.y;
                vec2 param_38 = r1.xy;
                float param_39 = r1.w;
                r1 = hdLod7(param_38, param_39);
                r0.y = r0.w + r1.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v4.w;
                r0.z = v5.w;
                vec2 hdB709 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r1.x = hdB709.x;
                r1.w = hdB709.y;
                r1.y = (v5.w * 0.5) + 0.5;
                r1.z = v6.w;
                vec2 param_40 = r1.xy;
                float param_41 = r1.w;
                r2 = hdLod8(param_40, param_41);
                vec2 hdB734 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = hdB734.x;
                r4.y = hdB734.y;
                r4.z = r1.z;
                r4.w = r1.w;
                vec2 param_42 = r4.xy;
                float param_43 = r4.w;
                r5 = hdLod8(param_42, param_43);
                r0.w = r2.x + r5.x;
                vec2 hdB762 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = hdB762.x;
                r4.y = hdB762.y;
                vec2 param_44 = r4.xy;
                float param_45 = r4.w;
                r2 = hdLod8(param_44, param_45);
                r0.w += r2.x;
                vec2 hdB784 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = hdB784.x;
                r4.y = hdB784.y;
                vec2 param_46 = r4.xy;
                float param_47 = r4.w;
                r2 = hdLod8(param_46, param_47);
                r0.w += r2.x;
                vec2 hdB806 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = hdB806.x;
                r4.y = hdB806.y;
                vec2 param_48 = r4.xy;
                float param_49 = r4.w;
                r1 = hdLod8(param_48, param_49);
                r0.w += r1.x;
                r1.x = max(abs(r0.y), abs(r0.z));
                r0.y = clamp((r1.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.z = (r0.w * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.y * r0.z) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 hdB861 = r0;
    vec3 hdB863 = r3.xyz * hdB861.yyy;
    r0.y = hdB863.x;
    r0.z = hdB863.y;
    r0.w = hdB863.z;
    vec4 hdB870 = r0;
    vec3 hdB874 = hdB870.yzw * v0.xyz;
    r0.y = hdB874.x;
    r0.z = hdB874.y;
    r0.w = hdB874.z;
    vec4 hdB881 = r0;
    vec4 hdB883 = r0;
    vec3 hdB885 = hdB881.yzw + hdB883.yzw;
    r0.y = hdB885.x;
    r0.z = hdB885.y;
    r0.w = hdB885.z;
    vec3 hdB896 = r3.www * v1.xyz;
    r1.x = hdB896.x;
    r1.y = hdB896.y;
    r1.z = hdB896.z;
    vec4 hdB905 = r0;
    vec4 hdB908 = r0;
    vec3 hdB910 = (r1.xyz * hdB905.xxx) + hdB908.yzw;
    r0.x = hdB910.x;
    r0.y = hdB910.y;
    r0.z = hdB910.z;
    vec4 hdB917 = r0;
    vec3 hdB924 = hdB917.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB924.x;
    r0.y = hdB924.y;
    r0.z = hdB924.z;
    vec3 hdB939 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB939.x;
    oC0.y = hdB939.y;
    oC0.z = hdB939.z;
    oC0.w = 1.0;
    bool hdB952 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB960;
    if (hdB952)
    {
        hdB960 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB960 = hdB952;
    }
    if (hdB960)
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
    bool _3365 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3375;
    if (_3365)
    {
        _3375 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 486u) != 0u;
    }
    else
    {
        _3375 = _3365;
    }
    if (_3375)
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
        bool _3400 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3415;
        if (!_3400)
        {
            _3415 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 486u) != 0u;
        }
        else
        {
            _3415 = _3400;
        }
        if (_3415)
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
