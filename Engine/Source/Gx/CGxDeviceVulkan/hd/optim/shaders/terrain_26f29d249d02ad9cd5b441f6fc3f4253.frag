#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
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
float _RESERVED_IDENTIFIER_FIXUP_3579;
vec4 _RESERVED_IDENTIFIER_FIXUP_3580;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 hdTex1(vec2 uv)
{
    vec4 value = OptTex1( uv);
    bool _61 = hdOverride >= 0;
    bool _80;
    if (_61)
    {
        _80 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 2u) != 0u;
    }
    else
    {
        _80 = _61;
    }
    vec4 _81;
    if (_80)
    {
        _81 = vec4(float(hdOverride));
    }
    else
    {
        _81 = value;
    }
    return _81;
}

vec4 hdTex2(vec2 uv)
{
    vec4 value = OptTex2( uv);
    bool _98 = hdOverride >= 0;
    bool _108;
    if (_98)
    {
        _108 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 4u) != 0u;
    }
    else
    {
        _108 = _98;
    }
    vec4 _109;
    if (_108)
    {
        _109 = vec4(float(hdOverride));
    }
    else
    {
        _109 = value;
    }
    return _109;
}

vec4 hdTex3(vec2 uv)
{
    vec4 value = OptTex3( uv);
    bool _126 = hdOverride >= 0;
    bool _136;
    if (_126)
    {
        _136 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 8u) != 0u;
    }
    else
    {
        _136 = _126;
    }
    vec4 _137;
    if (_136)
    {
        _137 = vec4(float(hdOverride));
    }
    else
    {
        _137 = value;
    }
    return _137;
}

vec4 hdLod5(vec2 uv, float lod)
{
    vec4 value = OptTex5Lod( uv, lod);
    bool _155 = hdOverride >= 0;
    bool _165;
    if (_155)
    {
        _165 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 32u) != 0u;
    }
    else
    {
        _165 = _155;
    }
    vec4 _166;
    if (_165)
    {
        _166 = vec4(float(hdOverride));
    }
    else
    {
        _166 = value;
    }
    return _166;
}

vec4 hdLod6(vec2 uv, float lod)
{
    vec4 value = OptTex6Lod( uv, lod);
    bool _184 = hdOverride >= 0;
    bool _194;
    if (_184)
    {
        _194 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _194 = _184;
    }
    vec4 _195;
    if (_194)
    {
        _195 = vec4(float(hdOverride));
    }
    else
    {
        _195 = value;
    }
    return _195;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _213 = hdOverride >= 0;
    bool _223;
    if (_213)
    {
        _223 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _223 = _213;
    }
    vec4 _224;
    if (_223)
    {
        _224 = vec4(float(hdOverride));
    }
    else
    {
        _224 = value;
    }
    return _224;
}

vec4 hdLod8(vec2 uv, float lod)
{
    vec4 value = OptTex8Lod( uv, lod);
    bool _242 = hdOverride >= 0;
    bool _252;
    if (_242)
    {
        _252 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 256u) != 0u;
    }
    else
    {
        _252 = _242;
    }
    vec4 _253;
    if (_252)
    {
        _253 = vec4(float(hdOverride));
    }
    else
    {
        _253 = value;
    }
    return _253;
}

void HDActual()
{
    vec4 _RESERVED_IDENTIFIER_FIXUP_1125 = OptTex0( texcoord0.xyz);
    vec2 param = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1129 = hdTex1(param);
    vec2 param_1 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1133 = hdTex2(param_1);
    vec2 param_2 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1137 = hdTex3(param_2);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1141 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2848;
    _RESERVED_IDENTIFIER_FIXUP_2848.x = _RESERVED_IDENTIFIER_FIXUP_1141.x;
    _RESERVED_IDENTIFIER_FIXUP_2848.y = _RESERVED_IDENTIFIER_FIXUP_1141.y;
    float _RESERVED_IDENTIFIER_FIXUP_1147 = _RESERVED_IDENTIFIER_FIXUP_1141.z;
    _RESERVED_IDENTIFIER_FIXUP_2848.z = _RESERVED_IDENTIFIER_FIXUP_1147;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1149 = vec4(0.5, 0.5, 0.5, _RESERVED_IDENTIFIER_FIXUP_3579).xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1152 = _RESERVED_IDENTIFIER_FIXUP_1149 + _RESERVED_IDENTIFIER_FIXUP_1149;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2854;
    _RESERVED_IDENTIFIER_FIXUP_2854.x = _RESERVED_IDENTIFIER_FIXUP_1152.x;
    _RESERVED_IDENTIFIER_FIXUP_2854.y = _RESERVED_IDENTIFIER_FIXUP_1152.y;
    _RESERVED_IDENTIFIER_FIXUP_2854.z = _RESERVED_IDENTIFIER_FIXUP_1152.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1160 = _RESERVED_IDENTIFIER_FIXUP_1125.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1163 = _RESERVED_IDENTIFIER_FIXUP_1160 * _RESERVED_IDENTIFIER_FIXUP_2854.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2860;
    _RESERVED_IDENTIFIER_FIXUP_2860.x = _RESERVED_IDENTIFIER_FIXUP_1163.x;
    _RESERVED_IDENTIFIER_FIXUP_2860.y = _RESERVED_IDENTIFIER_FIXUP_1163.y;
    _RESERVED_IDENTIFIER_FIXUP_2860.z = _RESERVED_IDENTIFIER_FIXUP_1163.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1177 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2848.xxx, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1178 = mix(_RESERVED_IDENTIFIER_FIXUP_2860.xyz, _RESERVED_IDENTIFIER_FIXUP_1160, _RESERVED_IDENTIFIER_FIXUP_1177);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2866 = _RESERVED_IDENTIFIER_FIXUP_1125;
    _RESERVED_IDENTIFIER_FIXUP_2866.x = _RESERVED_IDENTIFIER_FIXUP_1178.x;
    _RESERVED_IDENTIFIER_FIXUP_2866.y = _RESERVED_IDENTIFIER_FIXUP_1178.y;
    _RESERVED_IDENTIFIER_FIXUP_2866.z = _RESERVED_IDENTIFIER_FIXUP_1178.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1186 = _RESERVED_IDENTIFIER_FIXUP_1129.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1189 = _RESERVED_IDENTIFIER_FIXUP_1186 * _RESERVED_IDENTIFIER_FIXUP_2854.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2872;
    _RESERVED_IDENTIFIER_FIXUP_2872.x = _RESERVED_IDENTIFIER_FIXUP_1189.x;
    _RESERVED_IDENTIFIER_FIXUP_2872.y = _RESERVED_IDENTIFIER_FIXUP_1189.y;
    _RESERVED_IDENTIFIER_FIXUP_2872.z = _RESERVED_IDENTIFIER_FIXUP_1189.z;
    bvec3 _RESERVED_IDENTIFIER_FIXUP_1203 = greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_2848.yyy, vec3(0.0));
    vec3 _RESERVED_IDENTIFIER_FIXUP_1204 = mix(_RESERVED_IDENTIFIER_FIXUP_2872.xyz, _RESERVED_IDENTIFIER_FIXUP_1186, _RESERVED_IDENTIFIER_FIXUP_1203);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2878 = _RESERVED_IDENTIFIER_FIXUP_1129;
    _RESERVED_IDENTIFIER_FIXUP_2878.x = _RESERVED_IDENTIFIER_FIXUP_1204.x;
    _RESERVED_IDENTIFIER_FIXUP_2878.y = _RESERVED_IDENTIFIER_FIXUP_1204.y;
    _RESERVED_IDENTIFIER_FIXUP_2878.z = _RESERVED_IDENTIFIER_FIXUP_1204.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1212 = _RESERVED_IDENTIFIER_FIXUP_1133.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1215 = _RESERVED_IDENTIFIER_FIXUP_1212 * _RESERVED_IDENTIFIER_FIXUP_2854.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3607 = vec4(_RESERVED_IDENTIFIER_FIXUP_1215.xy, _RESERVED_IDENTIFIER_FIXUP_1147, _RESERVED_IDENTIFIER_FIXUP_1215.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1230 = mix(_RESERVED_IDENTIFIER_FIXUP_3607.xyw, _RESERVED_IDENTIFIER_FIXUP_1212, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3607.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2890 = _RESERVED_IDENTIFIER_FIXUP_1133;
    _RESERVED_IDENTIFIER_FIXUP_2890.x = _RESERVED_IDENTIFIER_FIXUP_1230.x;
    _RESERVED_IDENTIFIER_FIXUP_2890.y = _RESERVED_IDENTIFIER_FIXUP_1230.y;
    _RESERVED_IDENTIFIER_FIXUP_2890.z = _RESERVED_IDENTIFIER_FIXUP_1230.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1246 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_2866, _RESERVED_IDENTIFIER_FIXUP_2878, _RESERVED_IDENTIFIER_FIXUP_1137.xxxx), _RESERVED_IDENTIFIER_FIXUP_2890, _RESERVED_IDENTIFIER_FIXUP_1137.yyyy);
    float _RESERVED_IDENTIFIER_FIXUP_1253 = max(abs(texcoord4.x), abs(texcoord4.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2898 = _RESERVED_IDENTIFIER_FIXUP_2878;
    _RESERVED_IDENTIFIER_FIXUP_2898.x = _RESERVED_IDENTIFIER_FIXUP_1253;
    float _RESERVED_IDENTIFIER_FIXUP_1259 = clamp((_RESERVED_IDENTIFIER_FIXUP_1253 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_2898.x = _RESERVED_IDENTIFIER_FIXUP_1259;
    float _RESERVED_IDENTIFIER_FIXUP_1265 = ((-_RESERVED_IDENTIFIER_FIXUP_1259) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_2898.y = _RESERVED_IDENTIFIER_FIXUP_1265;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3581;
    if (_RESERVED_IDENTIFIER_FIXUP_1265 != (-_RESERVED_IDENTIFIER_FIXUP_1265))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1277 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1287 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_1289 = _RESERVED_IDENTIFIER_FIXUP_1287.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2911 = _RESERVED_IDENTIFIER_FIXUP_2898;
        _RESERVED_IDENTIFIER_FIXUP_2911.y = _RESERVED_IDENTIFIER_FIXUP_1289;
        _RESERVED_IDENTIFIER_FIXUP_2911.z = _RESERVED_IDENTIFIER_FIXUP_1287.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1297 = _RESERVED_IDENTIFIER_FIXUP_2911.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2915;
        _RESERVED_IDENTIFIER_FIXUP_2915.x = _RESERVED_IDENTIFIER_FIXUP_1297.x;
        _RESERVED_IDENTIFIER_FIXUP_2915.y = _RESERVED_IDENTIFIER_FIXUP_1297.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1304 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1308 = _RESERVED_IDENTIFIER_FIXUP_1304.y;
        _RESERVED_IDENTIFIER_FIXUP_2915.w = _RESERVED_IDENTIFIER_FIXUP_1308;
        vec2 param_3 = _RESERVED_IDENTIFIER_FIXUP_1277.xy;
        float param_4 = _RESERVED_IDENTIFIER_FIXUP_1277.w;
        vec2 param_5 = _RESERVED_IDENTIFIER_FIXUP_2915.xy;
        float param_6 = _RESERVED_IDENTIFIER_FIXUP_1308;
        float _RESERVED_IDENTIFIER_FIXUP_1319 = hdLod5(param_3, param_4).x + hdLod5(param_5, param_6).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3608 = vec4(_RESERVED_IDENTIFIER_FIXUP_1259, _RESERVED_IDENTIFIER_FIXUP_1289, _RESERVED_IDENTIFIER_FIXUP_1287.y, _RESERVED_IDENTIFIER_FIXUP_1319);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1326 = _RESERVED_IDENTIFIER_FIXUP_3608.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2928;
        _RESERVED_IDENTIFIER_FIXUP_2928.x = _RESERVED_IDENTIFIER_FIXUP_1326.x;
        _RESERVED_IDENTIFIER_FIXUP_2928.y = _RESERVED_IDENTIFIER_FIXUP_1326.y;
        _RESERVED_IDENTIFIER_FIXUP_2928.w = _RESERVED_IDENTIFIER_FIXUP_1308;
        vec2 param_7 = _RESERVED_IDENTIFIER_FIXUP_2928.xy;
        float param_8 = _RESERVED_IDENTIFIER_FIXUP_1308;
        float _RESERVED_IDENTIFIER_FIXUP_1348 = _RESERVED_IDENTIFIER_FIXUP_1319 + hdLod5(param_7, param_8).x;
        _RESERVED_IDENTIFIER_FIXUP_3608.w = _RESERVED_IDENTIFIER_FIXUP_1348;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1355 = _RESERVED_IDENTIFIER_FIXUP_3608.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2941;
        _RESERVED_IDENTIFIER_FIXUP_2941.x = _RESERVED_IDENTIFIER_FIXUP_1355.x;
        _RESERVED_IDENTIFIER_FIXUP_2941.y = _RESERVED_IDENTIFIER_FIXUP_1355.y;
        _RESERVED_IDENTIFIER_FIXUP_2941.w = _RESERVED_IDENTIFIER_FIXUP_1308;
        vec2 param_9 = _RESERVED_IDENTIFIER_FIXUP_2941.xy;
        float param_10 = _RESERVED_IDENTIFIER_FIXUP_1308;
        float _RESERVED_IDENTIFIER_FIXUP_1377 = _RESERVED_IDENTIFIER_FIXUP_1348 + hdLod5(param_9, param_10).x;
        _RESERVED_IDENTIFIER_FIXUP_3608.w = _RESERVED_IDENTIFIER_FIXUP_1377;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1384 = _RESERVED_IDENTIFIER_FIXUP_3608.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2954;
        _RESERVED_IDENTIFIER_FIXUP_2954.x = _RESERVED_IDENTIFIER_FIXUP_1384.x;
        _RESERVED_IDENTIFIER_FIXUP_2954.y = _RESERVED_IDENTIFIER_FIXUP_1384.y;
        _RESERVED_IDENTIFIER_FIXUP_2954.w = _RESERVED_IDENTIFIER_FIXUP_1308;
        vec2 param_11 = _RESERVED_IDENTIFIER_FIXUP_2954.xy;
        float param_12 = _RESERVED_IDENTIFIER_FIXUP_1308;
        float _RESERVED_IDENTIFIER_FIXUP_1406 = _RESERVED_IDENTIFIER_FIXUP_1377 + hdLod5(param_11, param_12).x;
        _RESERVED_IDENTIFIER_FIXUP_3608.y = _RESERVED_IDENTIFIER_FIXUP_1406;
        float _RESERVED_IDENTIFIER_FIXUP_1411 = (_RESERVED_IDENTIFIER_FIXUP_1406 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3608.y = _RESERVED_IDENTIFIER_FIXUP_1411;
        _RESERVED_IDENTIFIER_FIXUP_3608.x = (_RESERVED_IDENTIFIER_FIXUP_1259 * _RESERVED_IDENTIFIER_FIXUP_1411) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3581 = _RESERVED_IDENTIFIER_FIXUP_3608;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2908 = _RESERVED_IDENTIFIER_FIXUP_2898;
        _RESERVED_IDENTIFIER_FIXUP_2908.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3581 = _RESERVED_IDENTIFIER_FIXUP_2908;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1429 = max(abs(texcoord5.x), abs(texcoord5.y));
    vec4 _RESERVED_IDENTIFIER_FIXUP_2976 = _RESERVED_IDENTIFIER_FIXUP_3581;
    _RESERVED_IDENTIFIER_FIXUP_2976.y = _RESERVED_IDENTIFIER_FIXUP_1429;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3586;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3584;
    if (_RESERVED_IDENTIFIER_FIXUP_1429 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_1438 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_1448 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3116 = _RESERVED_IDENTIFIER_FIXUP_2976;
        _RESERVED_IDENTIFIER_FIXUP_3116.y = _RESERVED_IDENTIFIER_FIXUP_1448.x;
        _RESERVED_IDENTIFIER_FIXUP_3116.z = _RESERVED_IDENTIFIER_FIXUP_1448.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1458 = _RESERVED_IDENTIFIER_FIXUP_3116.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3120;
        _RESERVED_IDENTIFIER_FIXUP_3120.x = _RESERVED_IDENTIFIER_FIXUP_1458.x;
        _RESERVED_IDENTIFIER_FIXUP_3120.y = _RESERVED_IDENTIFIER_FIXUP_1458.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1465 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_1469 = _RESERVED_IDENTIFIER_FIXUP_1465.y;
        _RESERVED_IDENTIFIER_FIXUP_3120.w = _RESERVED_IDENTIFIER_FIXUP_1469;
        vec2 param_13 = _RESERVED_IDENTIFIER_FIXUP_1438.xy;
        float param_14 = _RESERVED_IDENTIFIER_FIXUP_1438.w;
        vec2 param_15 = _RESERVED_IDENTIFIER_FIXUP_3120.xy;
        float param_16 = _RESERVED_IDENTIFIER_FIXUP_1469;
        float _RESERVED_IDENTIFIER_FIXUP_1480 = hdLod6(param_13, param_14).x + hdLod6(param_15, param_16).x;
        _RESERVED_IDENTIFIER_FIXUP_3116.w = _RESERVED_IDENTIFIER_FIXUP_1480;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1487 = _RESERVED_IDENTIFIER_FIXUP_3116.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3133;
        _RESERVED_IDENTIFIER_FIXUP_3133.x = _RESERVED_IDENTIFIER_FIXUP_1487.x;
        _RESERVED_IDENTIFIER_FIXUP_3133.y = _RESERVED_IDENTIFIER_FIXUP_1487.y;
        _RESERVED_IDENTIFIER_FIXUP_3133.w = _RESERVED_IDENTIFIER_FIXUP_1469;
        vec2 param_17 = _RESERVED_IDENTIFIER_FIXUP_3133.xy;
        float param_18 = _RESERVED_IDENTIFIER_FIXUP_1469;
        float _RESERVED_IDENTIFIER_FIXUP_1509 = _RESERVED_IDENTIFIER_FIXUP_1480 + hdLod6(param_17, param_18).x;
        _RESERVED_IDENTIFIER_FIXUP_3116.w = _RESERVED_IDENTIFIER_FIXUP_1509;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1516 = _RESERVED_IDENTIFIER_FIXUP_3116.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3146;
        _RESERVED_IDENTIFIER_FIXUP_3146.x = _RESERVED_IDENTIFIER_FIXUP_1516.x;
        _RESERVED_IDENTIFIER_FIXUP_3146.y = _RESERVED_IDENTIFIER_FIXUP_1516.y;
        _RESERVED_IDENTIFIER_FIXUP_3146.w = _RESERVED_IDENTIFIER_FIXUP_1469;
        vec2 param_19 = _RESERVED_IDENTIFIER_FIXUP_3146.xy;
        float param_20 = _RESERVED_IDENTIFIER_FIXUP_1469;
        float _RESERVED_IDENTIFIER_FIXUP_1538 = _RESERVED_IDENTIFIER_FIXUP_1509 + hdLod6(param_19, param_20).x;
        _RESERVED_IDENTIFIER_FIXUP_3116.w = _RESERVED_IDENTIFIER_FIXUP_1538;
        vec2 _RESERVED_IDENTIFIER_FIXUP_1545 = _RESERVED_IDENTIFIER_FIXUP_3116.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3159;
        _RESERVED_IDENTIFIER_FIXUP_3159.x = _RESERVED_IDENTIFIER_FIXUP_1545.x;
        _RESERVED_IDENTIFIER_FIXUP_3159.y = _RESERVED_IDENTIFIER_FIXUP_1545.y;
        _RESERVED_IDENTIFIER_FIXUP_3159.w = _RESERVED_IDENTIFIER_FIXUP_1469;
        vec2 param_21 = _RESERVED_IDENTIFIER_FIXUP_3159.xy;
        float param_22 = _RESERVED_IDENTIFIER_FIXUP_1469;
        vec4 _RESERVED_IDENTIFIER_FIXUP_1562 = hdLod6(param_21, param_22);
        float _RESERVED_IDENTIFIER_FIXUP_1567 = _RESERVED_IDENTIFIER_FIXUP_1538 + _RESERVED_IDENTIFIER_FIXUP_1562.x;
        _RESERVED_IDENTIFIER_FIXUP_3116.y = _RESERVED_IDENTIFIER_FIXUP_1567;
        _RESERVED_IDENTIFIER_FIXUP_3116.y = _RESERVED_IDENTIFIER_FIXUP_1567 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3586 = _RESERVED_IDENTIFIER_FIXUP_1562;
        _RESERVED_IDENTIFIER_FIXUP_3584 = _RESERVED_IDENTIFIER_FIXUP_3116;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_1580 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_2981 = _RESERVED_IDENTIFIER_FIXUP_2976;
        _RESERVED_IDENTIFIER_FIXUP_2981.z = _RESERVED_IDENTIFIER_FIXUP_1580;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3587;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3585;
        if (_RESERVED_IDENTIFIER_FIXUP_1580 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_1589 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = _RESERVED_IDENTIFIER_FIXUP_1589.xy;
            float param_24 = _RESERVED_IDENTIFIER_FIXUP_1589.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_1595 = hdLod7(param_23, param_24);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1599 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3056 = _RESERVED_IDENTIFIER_FIXUP_2981;
            _RESERVED_IDENTIFIER_FIXUP_3056.z = _RESERVED_IDENTIFIER_FIXUP_1599.x;
            _RESERVED_IDENTIFIER_FIXUP_3056.w = _RESERVED_IDENTIFIER_FIXUP_1599.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1609 = _RESERVED_IDENTIFIER_FIXUP_3056.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3060;
            _RESERVED_IDENTIFIER_FIXUP_3060.x = _RESERVED_IDENTIFIER_FIXUP_1609.x;
            _RESERVED_IDENTIFIER_FIXUP_3060.y = _RESERVED_IDENTIFIER_FIXUP_1609.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1616 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_1620 = _RESERVED_IDENTIFIER_FIXUP_1616.y;
            _RESERVED_IDENTIFIER_FIXUP_3060.w = _RESERVED_IDENTIFIER_FIXUP_1620;
            vec2 param_25 = _RESERVED_IDENTIFIER_FIXUP_3060.xy;
            float param_26 = _RESERVED_IDENTIFIER_FIXUP_1620;
            float _RESERVED_IDENTIFIER_FIXUP_1631 = _RESERVED_IDENTIFIER_FIXUP_1595.x + hdLod7(param_25, param_26).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3071 = _RESERVED_IDENTIFIER_FIXUP_1595;
            _RESERVED_IDENTIFIER_FIXUP_3071.x = _RESERVED_IDENTIFIER_FIXUP_1631;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1638 = _RESERVED_IDENTIFIER_FIXUP_3056.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3073;
            _RESERVED_IDENTIFIER_FIXUP_3073.x = _RESERVED_IDENTIFIER_FIXUP_1638.x;
            _RESERVED_IDENTIFIER_FIXUP_3073.y = _RESERVED_IDENTIFIER_FIXUP_1638.y;
            _RESERVED_IDENTIFIER_FIXUP_3073.w = _RESERVED_IDENTIFIER_FIXUP_1620;
            vec2 param_27 = _RESERVED_IDENTIFIER_FIXUP_3073.xy;
            float param_28 = _RESERVED_IDENTIFIER_FIXUP_1620;
            float _RESERVED_IDENTIFIER_FIXUP_1660 = _RESERVED_IDENTIFIER_FIXUP_1631 + hdLod7(param_27, param_28).x;
            _RESERVED_IDENTIFIER_FIXUP_3071.x = _RESERVED_IDENTIFIER_FIXUP_1660;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1667 = _RESERVED_IDENTIFIER_FIXUP_3056.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3086;
            _RESERVED_IDENTIFIER_FIXUP_3086.x = _RESERVED_IDENTIFIER_FIXUP_1667.x;
            _RESERVED_IDENTIFIER_FIXUP_3086.y = _RESERVED_IDENTIFIER_FIXUP_1667.y;
            _RESERVED_IDENTIFIER_FIXUP_3086.w = _RESERVED_IDENTIFIER_FIXUP_1620;
            vec2 param_29 = _RESERVED_IDENTIFIER_FIXUP_3086.xy;
            float param_30 = _RESERVED_IDENTIFIER_FIXUP_1620;
            float _RESERVED_IDENTIFIER_FIXUP_1689 = _RESERVED_IDENTIFIER_FIXUP_1660 + hdLod7(param_29, param_30).x;
            _RESERVED_IDENTIFIER_FIXUP_3071.x = _RESERVED_IDENTIFIER_FIXUP_1689;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1696 = _RESERVED_IDENTIFIER_FIXUP_3056.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3099;
            _RESERVED_IDENTIFIER_FIXUP_3099.x = _RESERVED_IDENTIFIER_FIXUP_1696.x;
            _RESERVED_IDENTIFIER_FIXUP_3099.y = _RESERVED_IDENTIFIER_FIXUP_1696.y;
            _RESERVED_IDENTIFIER_FIXUP_3099.w = _RESERVED_IDENTIFIER_FIXUP_1620;
            vec2 param_31 = _RESERVED_IDENTIFIER_FIXUP_3099.xy;
            float param_32 = _RESERVED_IDENTIFIER_FIXUP_1620;
            float _RESERVED_IDENTIFIER_FIXUP_1718 = _RESERVED_IDENTIFIER_FIXUP_1689 + hdLod7(param_31, param_32).x;
            _RESERVED_IDENTIFIER_FIXUP_3056.z = _RESERVED_IDENTIFIER_FIXUP_1718;
            _RESERVED_IDENTIFIER_FIXUP_3056.y = _RESERVED_IDENTIFIER_FIXUP_1718 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3587 = _RESERVED_IDENTIFIER_FIXUP_3071;
            _RESERVED_IDENTIFIER_FIXUP_3585 = _RESERVED_IDENTIFIER_FIXUP_3056;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2985 = _RESERVED_IDENTIFIER_FIXUP_2981;
            _RESERVED_IDENTIFIER_FIXUP_2985.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_2985.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1734 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_1738 = _RESERVED_IDENTIFIER_FIXUP_1734.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3609 = vec4(_RESERVED_IDENTIFIER_FIXUP_1734.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1738);
            vec2 _RESERVED_IDENTIFIER_FIXUP_1749 = _RESERVED_IDENTIFIER_FIXUP_3609.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3610 = vec4(_RESERVED_IDENTIFIER_FIXUP_1749 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_1738);
            vec2 param_33 = _RESERVED_IDENTIFIER_FIXUP_1749;
            float param_34 = _RESERVED_IDENTIFIER_FIXUP_1738;
            vec2 param_35 = _RESERVED_IDENTIFIER_FIXUP_3610.xy;
            float param_36 = _RESERVED_IDENTIFIER_FIXUP_1738;
            float _RESERVED_IDENTIFIER_FIXUP_1779 = hdLod8(param_33, param_34).x + hdLod8(param_35, param_36).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3012 = _RESERVED_IDENTIFIER_FIXUP_3609;
            _RESERVED_IDENTIFIER_FIXUP_3012.z = _RESERVED_IDENTIFIER_FIXUP_1779;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1786 = _RESERVED_IDENTIFIER_FIXUP_3012.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3014 = _RESERVED_IDENTIFIER_FIXUP_3610;
            _RESERVED_IDENTIFIER_FIXUP_3014.x = _RESERVED_IDENTIFIER_FIXUP_1786.x;
            _RESERVED_IDENTIFIER_FIXUP_3014.y = _RESERVED_IDENTIFIER_FIXUP_1786.y;
            vec2 param_37 = _RESERVED_IDENTIFIER_FIXUP_3014.xy;
            float param_38 = _RESERVED_IDENTIFIER_FIXUP_1738;
            float _RESERVED_IDENTIFIER_FIXUP_1801 = _RESERVED_IDENTIFIER_FIXUP_1779 + hdLod8(param_37, param_38).x;
            _RESERVED_IDENTIFIER_FIXUP_3012.z = _RESERVED_IDENTIFIER_FIXUP_1801;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1808 = _RESERVED_IDENTIFIER_FIXUP_3012.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3023 = _RESERVED_IDENTIFIER_FIXUP_3014;
            _RESERVED_IDENTIFIER_FIXUP_3023.x = _RESERVED_IDENTIFIER_FIXUP_1808.x;
            _RESERVED_IDENTIFIER_FIXUP_3023.y = _RESERVED_IDENTIFIER_FIXUP_1808.y;
            vec2 param_39 = _RESERVED_IDENTIFIER_FIXUP_3023.xy;
            float param_40 = _RESERVED_IDENTIFIER_FIXUP_1738;
            float _RESERVED_IDENTIFIER_FIXUP_1823 = _RESERVED_IDENTIFIER_FIXUP_1801 + hdLod8(param_39, param_40).x;
            _RESERVED_IDENTIFIER_FIXUP_3012.z = _RESERVED_IDENTIFIER_FIXUP_1823;
            vec2 _RESERVED_IDENTIFIER_FIXUP_1830 = _RESERVED_IDENTIFIER_FIXUP_3012.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3032 = _RESERVED_IDENTIFIER_FIXUP_3023;
            _RESERVED_IDENTIFIER_FIXUP_3032.x = _RESERVED_IDENTIFIER_FIXUP_1830.x;
            _RESERVED_IDENTIFIER_FIXUP_3032.y = _RESERVED_IDENTIFIER_FIXUP_1830.y;
            vec2 param_41 = _RESERVED_IDENTIFIER_FIXUP_3032.xy;
            float param_42 = _RESERVED_IDENTIFIER_FIXUP_1738;
            float _RESERVED_IDENTIFIER_FIXUP_1845 = _RESERVED_IDENTIFIER_FIXUP_1823 + hdLod8(param_41, param_42).x;
            _RESERVED_IDENTIFIER_FIXUP_3012.x = _RESERVED_IDENTIFIER_FIXUP_1845;
            float _RESERVED_IDENTIFIER_FIXUP_1853 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3012.y = _RESERVED_IDENTIFIER_FIXUP_1853;
            float _RESERVED_IDENTIFIER_FIXUP_1859 = clamp((_RESERVED_IDENTIFIER_FIXUP_1853 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_2985.z = _RESERVED_IDENTIFIER_FIXUP_1859;
            float _RESERVED_IDENTIFIER_FIXUP_1864 = (_RESERVED_IDENTIFIER_FIXUP_1845 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_2985.w = _RESERVED_IDENTIFIER_FIXUP_1864;
            _RESERVED_IDENTIFIER_FIXUP_2985.y = (_RESERVED_IDENTIFIER_FIXUP_1859 * _RESERVED_IDENTIFIER_FIXUP_1864) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3587 = _RESERVED_IDENTIFIER_FIXUP_3012;
            _RESERVED_IDENTIFIER_FIXUP_3585 = _RESERVED_IDENTIFIER_FIXUP_2985;
        }
        _RESERVED_IDENTIFIER_FIXUP_3586 = _RESERVED_IDENTIFIER_FIXUP_3587;
        _RESERVED_IDENTIFIER_FIXUP_3584 = _RESERVED_IDENTIFIER_FIXUP_3585;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1879 = min(_RESERVED_IDENTIFIER_FIXUP_3584.y, _RESERVED_IDENTIFIER_FIXUP_3584.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3177 = _RESERVED_IDENTIFIER_FIXUP_3586;
    _RESERVED_IDENTIFIER_FIXUP_3177.x = _RESERVED_IDENTIFIER_FIXUP_1879;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3611 = vec4((_RESERVED_IDENTIFIER_FIXUP_1879 * 0.300000011920928955078125) + 0.699999988079071044921875, 0.0, 0.0, 0.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_1901 = _RESERVED_IDENTIFIER_FIXUP_3177.xxx * _RESERVED_IDENTIFIER_FIXUP_3611.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3188 = _RESERVED_IDENTIFIER_FIXUP_3611;
    _RESERVED_IDENTIFIER_FIXUP_3188.y = _RESERVED_IDENTIFIER_FIXUP_1901.x;
    _RESERVED_IDENTIFIER_FIXUP_3188.z = _RESERVED_IDENTIFIER_FIXUP_1901.y;
    _RESERVED_IDENTIFIER_FIXUP_3188.w = _RESERVED_IDENTIFIER_FIXUP_1901.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1915 = (_RESERVED_IDENTIFIER_FIXUP_1246.xyz * _RESERVED_IDENTIFIER_FIXUP_3188.xxx) + _RESERVED_IDENTIFIER_FIXUP_3188.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3194 = _RESERVED_IDENTIFIER_FIXUP_1246;
    _RESERVED_IDENTIFIER_FIXUP_3194.x = _RESERVED_IDENTIFIER_FIXUP_1915.x;
    _RESERVED_IDENTIFIER_FIXUP_3194.y = _RESERVED_IDENTIFIER_FIXUP_1915.y;
    _RESERVED_IDENTIFIER_FIXUP_3194.z = _RESERVED_IDENTIFIER_FIXUP_1915.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1928 = _RESERVED_IDENTIFIER_FIXUP_3194.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3200 = _RESERVED_IDENTIFIER_FIXUP_3194;
    _RESERVED_IDENTIFIER_FIXUP_3200.x = _RESERVED_IDENTIFIER_FIXUP_1928.x;
    _RESERVED_IDENTIFIER_FIXUP_3200.y = _RESERVED_IDENTIFIER_FIXUP_1928.y;
    _RESERVED_IDENTIFIER_FIXUP_3200.z = _RESERVED_IDENTIFIER_FIXUP_1928.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1984 = OptTex0( texcoord0.xyz);
    vec2 param_43 = texcoord1.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1988 = hdTex1(param_43);
    vec2 param_44 = texcoord1.wz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1992 = hdTex2(param_44);
    vec2 param_45 = texcoord2.xy;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1996 = hdTex3(param_45);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2011 = color0.xyz + color0.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3220;
    _RESERVED_IDENTIFIER_FIXUP_3220.x = _RESERVED_IDENTIFIER_FIXUP_2011.x;
    _RESERVED_IDENTIFIER_FIXUP_3220.y = _RESERVED_IDENTIFIER_FIXUP_2011.y;
    _RESERVED_IDENTIFIER_FIXUP_3220.z = _RESERVED_IDENTIFIER_FIXUP_2011.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2019 = _RESERVED_IDENTIFIER_FIXUP_1984.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2022 = _RESERVED_IDENTIFIER_FIXUP_2019 * _RESERVED_IDENTIFIER_FIXUP_3220.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3226;
    _RESERVED_IDENTIFIER_FIXUP_3226.x = _RESERVED_IDENTIFIER_FIXUP_2022.x;
    _RESERVED_IDENTIFIER_FIXUP_3226.y = _RESERVED_IDENTIFIER_FIXUP_2022.y;
    _RESERVED_IDENTIFIER_FIXUP_3226.z = _RESERVED_IDENTIFIER_FIXUP_2022.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2037 = mix(_RESERVED_IDENTIFIER_FIXUP_3226.xyz, _RESERVED_IDENTIFIER_FIXUP_2019, _RESERVED_IDENTIFIER_FIXUP_1177);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3232 = _RESERVED_IDENTIFIER_FIXUP_1984;
    _RESERVED_IDENTIFIER_FIXUP_3232.x = _RESERVED_IDENTIFIER_FIXUP_2037.x;
    _RESERVED_IDENTIFIER_FIXUP_3232.y = _RESERVED_IDENTIFIER_FIXUP_2037.y;
    _RESERVED_IDENTIFIER_FIXUP_3232.z = _RESERVED_IDENTIFIER_FIXUP_2037.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2045 = _RESERVED_IDENTIFIER_FIXUP_1988.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2048 = _RESERVED_IDENTIFIER_FIXUP_2045 * _RESERVED_IDENTIFIER_FIXUP_3220.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3238;
    _RESERVED_IDENTIFIER_FIXUP_3238.x = _RESERVED_IDENTIFIER_FIXUP_2048.x;
    _RESERVED_IDENTIFIER_FIXUP_3238.y = _RESERVED_IDENTIFIER_FIXUP_2048.y;
    _RESERVED_IDENTIFIER_FIXUP_3238.z = _RESERVED_IDENTIFIER_FIXUP_2048.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2063 = mix(_RESERVED_IDENTIFIER_FIXUP_3238.xyz, _RESERVED_IDENTIFIER_FIXUP_2045, _RESERVED_IDENTIFIER_FIXUP_1203);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3244 = _RESERVED_IDENTIFIER_FIXUP_1988;
    _RESERVED_IDENTIFIER_FIXUP_3244.x = _RESERVED_IDENTIFIER_FIXUP_2063.x;
    _RESERVED_IDENTIFIER_FIXUP_3244.y = _RESERVED_IDENTIFIER_FIXUP_2063.y;
    _RESERVED_IDENTIFIER_FIXUP_3244.z = _RESERVED_IDENTIFIER_FIXUP_2063.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2071 = _RESERVED_IDENTIFIER_FIXUP_1992.xyz;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2074 = _RESERVED_IDENTIFIER_FIXUP_2071 * _RESERVED_IDENTIFIER_FIXUP_3220.xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3613 = vec4(_RESERVED_IDENTIFIER_FIXUP_2074.xy, _RESERVED_IDENTIFIER_FIXUP_1147, _RESERVED_IDENTIFIER_FIXUP_2074.z);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2089 = mix(_RESERVED_IDENTIFIER_FIXUP_3613.xyw, _RESERVED_IDENTIFIER_FIXUP_2071, greaterThanEqual(-_RESERVED_IDENTIFIER_FIXUP_3613.zzz, vec3(0.0)));
    vec4 _RESERVED_IDENTIFIER_FIXUP_3256 = _RESERVED_IDENTIFIER_FIXUP_1992;
    _RESERVED_IDENTIFIER_FIXUP_3256.x = _RESERVED_IDENTIFIER_FIXUP_2089.x;
    _RESERVED_IDENTIFIER_FIXUP_3256.y = _RESERVED_IDENTIFIER_FIXUP_2089.y;
    _RESERVED_IDENTIFIER_FIXUP_3256.z = _RESERVED_IDENTIFIER_FIXUP_2089.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_2105 = mix(mix(_RESERVED_IDENTIFIER_FIXUP_3232, _RESERVED_IDENTIFIER_FIXUP_3244, _RESERVED_IDENTIFIER_FIXUP_1996.xxxx), _RESERVED_IDENTIFIER_FIXUP_3256, _RESERVED_IDENTIFIER_FIXUP_1996.yyyy);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3264 = _RESERVED_IDENTIFIER_FIXUP_3244;
    _RESERVED_IDENTIFIER_FIXUP_3264.x = _RESERVED_IDENTIFIER_FIXUP_1253;
    float _RESERVED_IDENTIFIER_FIXUP_2118 = clamp((_RESERVED_IDENTIFIER_FIXUP_1253 * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    _RESERVED_IDENTIFIER_FIXUP_3264.x = _RESERVED_IDENTIFIER_FIXUP_2118;
    float _RESERVED_IDENTIFIER_FIXUP_2124 = ((-_RESERVED_IDENTIFIER_FIXUP_2118) >= 0.0) ? 0.0 : 1.0;
    _RESERVED_IDENTIFIER_FIXUP_3264.y = _RESERVED_IDENTIFIER_FIXUP_2124;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3594;
    if (_RESERVED_IDENTIFIER_FIXUP_2124 != (-_RESERVED_IDENTIFIER_FIXUP_2124))
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2136 = (texcoord4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2146 = (texcoord4.xy * vec2(0.5)) + vec2(0.5);
        float _RESERVED_IDENTIFIER_FIXUP_2148 = _RESERVED_IDENTIFIER_FIXUP_2146.x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3277 = _RESERVED_IDENTIFIER_FIXUP_3264;
        _RESERVED_IDENTIFIER_FIXUP_3277.y = _RESERVED_IDENTIFIER_FIXUP_2148;
        _RESERVED_IDENTIFIER_FIXUP_3277.z = _RESERVED_IDENTIFIER_FIXUP_2146.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2156 = _RESERVED_IDENTIFIER_FIXUP_3277.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3281;
        _RESERVED_IDENTIFIER_FIXUP_3281.x = _RESERVED_IDENTIFIER_FIXUP_2156.x;
        _RESERVED_IDENTIFIER_FIXUP_3281.y = _RESERVED_IDENTIFIER_FIXUP_2156.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2163 = vec2(1.0, 0.0) * texcoord4.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2167 = _RESERVED_IDENTIFIER_FIXUP_2163.y;
        _RESERVED_IDENTIFIER_FIXUP_3281.w = _RESERVED_IDENTIFIER_FIXUP_2167;
        vec2 param_46 = _RESERVED_IDENTIFIER_FIXUP_2136.xy;
        float param_47 = _RESERVED_IDENTIFIER_FIXUP_2136.w;
        vec2 param_48 = _RESERVED_IDENTIFIER_FIXUP_3281.xy;
        float param_49 = _RESERVED_IDENTIFIER_FIXUP_2167;
        float _RESERVED_IDENTIFIER_FIXUP_2178 = hdLod5(param_46, param_47).x + hdLod5(param_48, param_49).x;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3614 = vec4(_RESERVED_IDENTIFIER_FIXUP_2118, _RESERVED_IDENTIFIER_FIXUP_2148, _RESERVED_IDENTIFIER_FIXUP_2146.y, _RESERVED_IDENTIFIER_FIXUP_2178);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2185 = _RESERVED_IDENTIFIER_FIXUP_3614.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3294;
        _RESERVED_IDENTIFIER_FIXUP_3294.x = _RESERVED_IDENTIFIER_FIXUP_2185.x;
        _RESERVED_IDENTIFIER_FIXUP_3294.y = _RESERVED_IDENTIFIER_FIXUP_2185.y;
        _RESERVED_IDENTIFIER_FIXUP_3294.w = _RESERVED_IDENTIFIER_FIXUP_2167;
        vec2 param_50 = _RESERVED_IDENTIFIER_FIXUP_3294.xy;
        float param_51 = _RESERVED_IDENTIFIER_FIXUP_2167;
        float _RESERVED_IDENTIFIER_FIXUP_2207 = _RESERVED_IDENTIFIER_FIXUP_2178 + hdLod5(param_50, param_51).x;
        _RESERVED_IDENTIFIER_FIXUP_3614.w = _RESERVED_IDENTIFIER_FIXUP_2207;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2214 = _RESERVED_IDENTIFIER_FIXUP_3614.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3307;
        _RESERVED_IDENTIFIER_FIXUP_3307.x = _RESERVED_IDENTIFIER_FIXUP_2214.x;
        _RESERVED_IDENTIFIER_FIXUP_3307.y = _RESERVED_IDENTIFIER_FIXUP_2214.y;
        _RESERVED_IDENTIFIER_FIXUP_3307.w = _RESERVED_IDENTIFIER_FIXUP_2167;
        vec2 param_52 = _RESERVED_IDENTIFIER_FIXUP_3307.xy;
        float param_53 = _RESERVED_IDENTIFIER_FIXUP_2167;
        float _RESERVED_IDENTIFIER_FIXUP_2236 = _RESERVED_IDENTIFIER_FIXUP_2207 + hdLod5(param_52, param_53).x;
        _RESERVED_IDENTIFIER_FIXUP_3614.w = _RESERVED_IDENTIFIER_FIXUP_2236;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2243 = _RESERVED_IDENTIFIER_FIXUP_3614.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3320;
        _RESERVED_IDENTIFIER_FIXUP_3320.x = _RESERVED_IDENTIFIER_FIXUP_2243.x;
        _RESERVED_IDENTIFIER_FIXUP_3320.y = _RESERVED_IDENTIFIER_FIXUP_2243.y;
        _RESERVED_IDENTIFIER_FIXUP_3320.w = _RESERVED_IDENTIFIER_FIXUP_2167;
        vec2 param_54 = _RESERVED_IDENTIFIER_FIXUP_3320.xy;
        float param_55 = _RESERVED_IDENTIFIER_FIXUP_2167;
        float _RESERVED_IDENTIFIER_FIXUP_2265 = _RESERVED_IDENTIFIER_FIXUP_2236 + hdLod5(param_54, param_55).x;
        _RESERVED_IDENTIFIER_FIXUP_3614.y = _RESERVED_IDENTIFIER_FIXUP_2265;
        float _RESERVED_IDENTIFIER_FIXUP_2270 = (_RESERVED_IDENTIFIER_FIXUP_2265 * 0.20000000298023223876953125) + (-1.0);
        _RESERVED_IDENTIFIER_FIXUP_3614.y = _RESERVED_IDENTIFIER_FIXUP_2270;
        _RESERVED_IDENTIFIER_FIXUP_3614.x = (_RESERVED_IDENTIFIER_FIXUP_2118 * _RESERVED_IDENTIFIER_FIXUP_2270) + 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3594 = _RESERVED_IDENTIFIER_FIXUP_3614;
    }
    else
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_3274 = _RESERVED_IDENTIFIER_FIXUP_3264;
        _RESERVED_IDENTIFIER_FIXUP_3274.x = 1.0;
        _RESERVED_IDENTIFIER_FIXUP_3594 = _RESERVED_IDENTIFIER_FIXUP_3274;
    }
    vec4 _RESERVED_IDENTIFIER_FIXUP_3342 = _RESERVED_IDENTIFIER_FIXUP_3594;
    _RESERVED_IDENTIFIER_FIXUP_3342.y = _RESERVED_IDENTIFIER_FIXUP_1429;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3599;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3597;
    if (_RESERVED_IDENTIFIER_FIXUP_1429 < 1.0)
    {
        vec4 _RESERVED_IDENTIFIER_FIXUP_2297 = (texcoord5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 _RESERVED_IDENTIFIER_FIXUP_2307 = (texcoord5.xy * vec2(0.5)) + vec2(0.5);
        vec4 _RESERVED_IDENTIFIER_FIXUP_3482 = _RESERVED_IDENTIFIER_FIXUP_3342;
        _RESERVED_IDENTIFIER_FIXUP_3482.y = _RESERVED_IDENTIFIER_FIXUP_2307.x;
        _RESERVED_IDENTIFIER_FIXUP_3482.z = _RESERVED_IDENTIFIER_FIXUP_2307.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2317 = _RESERVED_IDENTIFIER_FIXUP_3482.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3486;
        _RESERVED_IDENTIFIER_FIXUP_3486.x = _RESERVED_IDENTIFIER_FIXUP_2317.x;
        _RESERVED_IDENTIFIER_FIXUP_3486.y = _RESERVED_IDENTIFIER_FIXUP_2317.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2324 = vec2(1.0, 0.0) * texcoord5.zx;
        float _RESERVED_IDENTIFIER_FIXUP_2328 = _RESERVED_IDENTIFIER_FIXUP_2324.y;
        _RESERVED_IDENTIFIER_FIXUP_3486.w = _RESERVED_IDENTIFIER_FIXUP_2328;
        vec2 param_56 = _RESERVED_IDENTIFIER_FIXUP_2297.xy;
        float param_57 = _RESERVED_IDENTIFIER_FIXUP_2297.w;
        vec2 param_58 = _RESERVED_IDENTIFIER_FIXUP_3486.xy;
        float param_59 = _RESERVED_IDENTIFIER_FIXUP_2328;
        float _RESERVED_IDENTIFIER_FIXUP_2339 = hdLod6(param_56, param_57).x + hdLod6(param_58, param_59).x;
        _RESERVED_IDENTIFIER_FIXUP_3482.w = _RESERVED_IDENTIFIER_FIXUP_2339;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2346 = _RESERVED_IDENTIFIER_FIXUP_3482.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3499;
        _RESERVED_IDENTIFIER_FIXUP_3499.x = _RESERVED_IDENTIFIER_FIXUP_2346.x;
        _RESERVED_IDENTIFIER_FIXUP_3499.y = _RESERVED_IDENTIFIER_FIXUP_2346.y;
        _RESERVED_IDENTIFIER_FIXUP_3499.w = _RESERVED_IDENTIFIER_FIXUP_2328;
        vec2 param_60 = _RESERVED_IDENTIFIER_FIXUP_3499.xy;
        float param_61 = _RESERVED_IDENTIFIER_FIXUP_2328;
        float _RESERVED_IDENTIFIER_FIXUP_2368 = _RESERVED_IDENTIFIER_FIXUP_2339 + hdLod6(param_60, param_61).x;
        _RESERVED_IDENTIFIER_FIXUP_3482.w = _RESERVED_IDENTIFIER_FIXUP_2368;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2375 = _RESERVED_IDENTIFIER_FIXUP_3482.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3512;
        _RESERVED_IDENTIFIER_FIXUP_3512.x = _RESERVED_IDENTIFIER_FIXUP_2375.x;
        _RESERVED_IDENTIFIER_FIXUP_3512.y = _RESERVED_IDENTIFIER_FIXUP_2375.y;
        _RESERVED_IDENTIFIER_FIXUP_3512.w = _RESERVED_IDENTIFIER_FIXUP_2328;
        vec2 param_62 = _RESERVED_IDENTIFIER_FIXUP_3512.xy;
        float param_63 = _RESERVED_IDENTIFIER_FIXUP_2328;
        float _RESERVED_IDENTIFIER_FIXUP_2397 = _RESERVED_IDENTIFIER_FIXUP_2368 + hdLod6(param_62, param_63).x;
        _RESERVED_IDENTIFIER_FIXUP_3482.w = _RESERVED_IDENTIFIER_FIXUP_2397;
        vec2 _RESERVED_IDENTIFIER_FIXUP_2404 = _RESERVED_IDENTIFIER_FIXUP_3482.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3525;
        _RESERVED_IDENTIFIER_FIXUP_3525.x = _RESERVED_IDENTIFIER_FIXUP_2404.x;
        _RESERVED_IDENTIFIER_FIXUP_3525.y = _RESERVED_IDENTIFIER_FIXUP_2404.y;
        _RESERVED_IDENTIFIER_FIXUP_3525.w = _RESERVED_IDENTIFIER_FIXUP_2328;
        vec2 param_64 = _RESERVED_IDENTIFIER_FIXUP_3525.xy;
        float param_65 = _RESERVED_IDENTIFIER_FIXUP_2328;
        vec4 _RESERVED_IDENTIFIER_FIXUP_2421 = hdLod6(param_64, param_65);
        float _RESERVED_IDENTIFIER_FIXUP_2426 = _RESERVED_IDENTIFIER_FIXUP_2397 + _RESERVED_IDENTIFIER_FIXUP_2421.x;
        _RESERVED_IDENTIFIER_FIXUP_3482.y = _RESERVED_IDENTIFIER_FIXUP_2426;
        _RESERVED_IDENTIFIER_FIXUP_3482.y = _RESERVED_IDENTIFIER_FIXUP_2426 * 0.20000000298023223876953125;
        _RESERVED_IDENTIFIER_FIXUP_3599 = _RESERVED_IDENTIFIER_FIXUP_2421;
        _RESERVED_IDENTIFIER_FIXUP_3597 = _RESERVED_IDENTIFIER_FIXUP_3482;
    }
    else
    {
        float _RESERVED_IDENTIFIER_FIXUP_2439 = max(abs(texcoord6.x), abs(texcoord6.y));
        vec4 _RESERVED_IDENTIFIER_FIXUP_3347 = _RESERVED_IDENTIFIER_FIXUP_3342;
        _RESERVED_IDENTIFIER_FIXUP_3347.z = _RESERVED_IDENTIFIER_FIXUP_2439;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3600;
        vec4 _RESERVED_IDENTIFIER_FIXUP_3598;
        if (_RESERVED_IDENTIFIER_FIXUP_2439 < 1.0)
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_2448 = (texcoord6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_66 = _RESERVED_IDENTIFIER_FIXUP_2448.xy;
            float param_67 = _RESERVED_IDENTIFIER_FIXUP_2448.w;
            vec4 _RESERVED_IDENTIFIER_FIXUP_2454 = hdLod7(param_66, param_67);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2458 = (texcoord6.xy * vec2(0.5)) + vec2(0.5);
            vec4 _RESERVED_IDENTIFIER_FIXUP_3422 = _RESERVED_IDENTIFIER_FIXUP_3347;
            _RESERVED_IDENTIFIER_FIXUP_3422.z = _RESERVED_IDENTIFIER_FIXUP_2458.x;
            _RESERVED_IDENTIFIER_FIXUP_3422.w = _RESERVED_IDENTIFIER_FIXUP_2458.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2468 = _RESERVED_IDENTIFIER_FIXUP_3422.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3426;
            _RESERVED_IDENTIFIER_FIXUP_3426.x = _RESERVED_IDENTIFIER_FIXUP_2468.x;
            _RESERVED_IDENTIFIER_FIXUP_3426.y = _RESERVED_IDENTIFIER_FIXUP_2468.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2475 = vec2(1.0, 0.0) * texcoord6.zx;
            float _RESERVED_IDENTIFIER_FIXUP_2479 = _RESERVED_IDENTIFIER_FIXUP_2475.y;
            _RESERVED_IDENTIFIER_FIXUP_3426.w = _RESERVED_IDENTIFIER_FIXUP_2479;
            vec2 param_68 = _RESERVED_IDENTIFIER_FIXUP_3426.xy;
            float param_69 = _RESERVED_IDENTIFIER_FIXUP_2479;
            float _RESERVED_IDENTIFIER_FIXUP_2490 = _RESERVED_IDENTIFIER_FIXUP_2454.x + hdLod7(param_68, param_69).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3437 = _RESERVED_IDENTIFIER_FIXUP_2454;
            _RESERVED_IDENTIFIER_FIXUP_3437.x = _RESERVED_IDENTIFIER_FIXUP_2490;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2497 = _RESERVED_IDENTIFIER_FIXUP_3422.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3439;
            _RESERVED_IDENTIFIER_FIXUP_3439.x = _RESERVED_IDENTIFIER_FIXUP_2497.x;
            _RESERVED_IDENTIFIER_FIXUP_3439.y = _RESERVED_IDENTIFIER_FIXUP_2497.y;
            _RESERVED_IDENTIFIER_FIXUP_3439.w = _RESERVED_IDENTIFIER_FIXUP_2479;
            vec2 param_70 = _RESERVED_IDENTIFIER_FIXUP_3439.xy;
            float param_71 = _RESERVED_IDENTIFIER_FIXUP_2479;
            float _RESERVED_IDENTIFIER_FIXUP_2519 = _RESERVED_IDENTIFIER_FIXUP_2490 + hdLod7(param_70, param_71).x;
            _RESERVED_IDENTIFIER_FIXUP_3437.x = _RESERVED_IDENTIFIER_FIXUP_2519;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2526 = _RESERVED_IDENTIFIER_FIXUP_3422.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3452;
            _RESERVED_IDENTIFIER_FIXUP_3452.x = _RESERVED_IDENTIFIER_FIXUP_2526.x;
            _RESERVED_IDENTIFIER_FIXUP_3452.y = _RESERVED_IDENTIFIER_FIXUP_2526.y;
            _RESERVED_IDENTIFIER_FIXUP_3452.w = _RESERVED_IDENTIFIER_FIXUP_2479;
            vec2 param_72 = _RESERVED_IDENTIFIER_FIXUP_3452.xy;
            float param_73 = _RESERVED_IDENTIFIER_FIXUP_2479;
            float _RESERVED_IDENTIFIER_FIXUP_2548 = _RESERVED_IDENTIFIER_FIXUP_2519 + hdLod7(param_72, param_73).x;
            _RESERVED_IDENTIFIER_FIXUP_3437.x = _RESERVED_IDENTIFIER_FIXUP_2548;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2555 = _RESERVED_IDENTIFIER_FIXUP_3422.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3465;
            _RESERVED_IDENTIFIER_FIXUP_3465.x = _RESERVED_IDENTIFIER_FIXUP_2555.x;
            _RESERVED_IDENTIFIER_FIXUP_3465.y = _RESERVED_IDENTIFIER_FIXUP_2555.y;
            _RESERVED_IDENTIFIER_FIXUP_3465.w = _RESERVED_IDENTIFIER_FIXUP_2479;
            vec2 param_74 = _RESERVED_IDENTIFIER_FIXUP_3465.xy;
            float param_75 = _RESERVED_IDENTIFIER_FIXUP_2479;
            float _RESERVED_IDENTIFIER_FIXUP_2577 = _RESERVED_IDENTIFIER_FIXUP_2548 + hdLod7(param_74, param_75).x;
            _RESERVED_IDENTIFIER_FIXUP_3422.z = _RESERVED_IDENTIFIER_FIXUP_2577;
            _RESERVED_IDENTIFIER_FIXUP_3422.y = _RESERVED_IDENTIFIER_FIXUP_2577 * 0.20000000298023223876953125;
            _RESERVED_IDENTIFIER_FIXUP_3600 = _RESERVED_IDENTIFIER_FIXUP_3437;
            _RESERVED_IDENTIFIER_FIXUP_3598 = _RESERVED_IDENTIFIER_FIXUP_3422;
        }
        else
        {
            vec4 _RESERVED_IDENTIFIER_FIXUP_3351 = _RESERVED_IDENTIFIER_FIXUP_3347;
            _RESERVED_IDENTIFIER_FIXUP_3351.z = texcoord4.w;
            _RESERVED_IDENTIFIER_FIXUP_3351.w = texcoord5.w;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2593 = (texcoord4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            float _RESERVED_IDENTIFIER_FIXUP_2597 = _RESERVED_IDENTIFIER_FIXUP_2593.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3615 = vec4(_RESERVED_IDENTIFIER_FIXUP_2593.x, (texcoord5.w * 0.5) + 0.5, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2597);
            vec2 _RESERVED_IDENTIFIER_FIXUP_2608 = _RESERVED_IDENTIFIER_FIXUP_3615.xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3616 = vec4(_RESERVED_IDENTIFIER_FIXUP_2608 + optRegs.rows[optTile*82u+uint(3)].xy, texcoord6.w, _RESERVED_IDENTIFIER_FIXUP_2597);
            vec2 param_76 = _RESERVED_IDENTIFIER_FIXUP_2608;
            float param_77 = _RESERVED_IDENTIFIER_FIXUP_2597;
            vec2 param_78 = _RESERVED_IDENTIFIER_FIXUP_3616.xy;
            float param_79 = _RESERVED_IDENTIFIER_FIXUP_2597;
            float _RESERVED_IDENTIFIER_FIXUP_2638 = hdLod8(param_76, param_77).x + hdLod8(param_78, param_79).x;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3378 = _RESERVED_IDENTIFIER_FIXUP_3615;
            _RESERVED_IDENTIFIER_FIXUP_3378.z = _RESERVED_IDENTIFIER_FIXUP_2638;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2645 = _RESERVED_IDENTIFIER_FIXUP_3378.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3380 = _RESERVED_IDENTIFIER_FIXUP_3616;
            _RESERVED_IDENTIFIER_FIXUP_3380.x = _RESERVED_IDENTIFIER_FIXUP_2645.x;
            _RESERVED_IDENTIFIER_FIXUP_3380.y = _RESERVED_IDENTIFIER_FIXUP_2645.y;
            vec2 param_80 = _RESERVED_IDENTIFIER_FIXUP_3380.xy;
            float param_81 = _RESERVED_IDENTIFIER_FIXUP_2597;
            float _RESERVED_IDENTIFIER_FIXUP_2660 = _RESERVED_IDENTIFIER_FIXUP_2638 + hdLod8(param_80, param_81).x;
            _RESERVED_IDENTIFIER_FIXUP_3378.z = _RESERVED_IDENTIFIER_FIXUP_2660;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2667 = _RESERVED_IDENTIFIER_FIXUP_3378.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3389 = _RESERVED_IDENTIFIER_FIXUP_3380;
            _RESERVED_IDENTIFIER_FIXUP_3389.x = _RESERVED_IDENTIFIER_FIXUP_2667.x;
            _RESERVED_IDENTIFIER_FIXUP_3389.y = _RESERVED_IDENTIFIER_FIXUP_2667.y;
            vec2 param_82 = _RESERVED_IDENTIFIER_FIXUP_3389.xy;
            float param_83 = _RESERVED_IDENTIFIER_FIXUP_2597;
            float _RESERVED_IDENTIFIER_FIXUP_2682 = _RESERVED_IDENTIFIER_FIXUP_2660 + hdLod8(param_82, param_83).x;
            _RESERVED_IDENTIFIER_FIXUP_3378.z = _RESERVED_IDENTIFIER_FIXUP_2682;
            vec2 _RESERVED_IDENTIFIER_FIXUP_2689 = _RESERVED_IDENTIFIER_FIXUP_3378.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            vec4 _RESERVED_IDENTIFIER_FIXUP_3398 = _RESERVED_IDENTIFIER_FIXUP_3389;
            _RESERVED_IDENTIFIER_FIXUP_3398.x = _RESERVED_IDENTIFIER_FIXUP_2689.x;
            _RESERVED_IDENTIFIER_FIXUP_3398.y = _RESERVED_IDENTIFIER_FIXUP_2689.y;
            vec2 param_84 = _RESERVED_IDENTIFIER_FIXUP_3398.xy;
            float param_85 = _RESERVED_IDENTIFIER_FIXUP_2597;
            float _RESERVED_IDENTIFIER_FIXUP_2704 = _RESERVED_IDENTIFIER_FIXUP_2682 + hdLod8(param_84, param_85).x;
            _RESERVED_IDENTIFIER_FIXUP_3378.x = _RESERVED_IDENTIFIER_FIXUP_2704;
            float _RESERVED_IDENTIFIER_FIXUP_2712 = max(abs(texcoord4.w), abs(texcoord5.w));
            _RESERVED_IDENTIFIER_FIXUP_3378.y = _RESERVED_IDENTIFIER_FIXUP_2712;
            float _RESERVED_IDENTIFIER_FIXUP_2718 = clamp((_RESERVED_IDENTIFIER_FIXUP_2712 * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            _RESERVED_IDENTIFIER_FIXUP_3351.z = _RESERVED_IDENTIFIER_FIXUP_2718;
            float _RESERVED_IDENTIFIER_FIXUP_2723 = (_RESERVED_IDENTIFIER_FIXUP_2704 * 0.20000000298023223876953125) + (-1.0);
            _RESERVED_IDENTIFIER_FIXUP_3351.w = _RESERVED_IDENTIFIER_FIXUP_2723;
            _RESERVED_IDENTIFIER_FIXUP_3351.y = (_RESERVED_IDENTIFIER_FIXUP_2718 * _RESERVED_IDENTIFIER_FIXUP_2723) + 1.0;
            _RESERVED_IDENTIFIER_FIXUP_3600 = _RESERVED_IDENTIFIER_FIXUP_3378;
            _RESERVED_IDENTIFIER_FIXUP_3598 = _RESERVED_IDENTIFIER_FIXUP_3351;
        }
        _RESERVED_IDENTIFIER_FIXUP_3599 = _RESERVED_IDENTIFIER_FIXUP_3600;
        _RESERVED_IDENTIFIER_FIXUP_3597 = _RESERVED_IDENTIFIER_FIXUP_3598;
    }
    float _RESERVED_IDENTIFIER_FIXUP_2738 = min(_RESERVED_IDENTIFIER_FIXUP_3597.y, _RESERVED_IDENTIFIER_FIXUP_3597.x);
    vec4 _RESERVED_IDENTIFIER_FIXUP_3543 = _RESERVED_IDENTIFIER_FIXUP_3599;
    _RESERVED_IDENTIFIER_FIXUP_3543.x = _RESERVED_IDENTIFIER_FIXUP_2738;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3617 = vec4((_RESERVED_IDENTIFIER_FIXUP_2738 * 0.300000011920928955078125) + 0.699999988079071044921875, _RESERVED_IDENTIFIER_FIXUP_2105.www * color1.xyz);
    vec3 _RESERVED_IDENTIFIER_FIXUP_2760 = _RESERVED_IDENTIFIER_FIXUP_3543.xxx * _RESERVED_IDENTIFIER_FIXUP_3617.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3554 = _RESERVED_IDENTIFIER_FIXUP_3617;
    _RESERVED_IDENTIFIER_FIXUP_3554.y = _RESERVED_IDENTIFIER_FIXUP_2760.x;
    _RESERVED_IDENTIFIER_FIXUP_3554.z = _RESERVED_IDENTIFIER_FIXUP_2760.y;
    _RESERVED_IDENTIFIER_FIXUP_3554.w = _RESERVED_IDENTIFIER_FIXUP_2760.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2774 = (_RESERVED_IDENTIFIER_FIXUP_2105.xyz * _RESERVED_IDENTIFIER_FIXUP_3554.xxx) + _RESERVED_IDENTIFIER_FIXUP_3554.yzw;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3560 = _RESERVED_IDENTIFIER_FIXUP_2105;
    _RESERVED_IDENTIFIER_FIXUP_3560.x = _RESERVED_IDENTIFIER_FIXUP_2774.x;
    _RESERVED_IDENTIFIER_FIXUP_3560.y = _RESERVED_IDENTIFIER_FIXUP_2774.y;
    _RESERVED_IDENTIFIER_FIXUP_3560.z = _RESERVED_IDENTIFIER_FIXUP_2774.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_2787 = _RESERVED_IDENTIFIER_FIXUP_3560.xyz - optRegs.rows[optTile*82u+uint(2)].xyz;
    vec4 _RESERVED_IDENTIFIER_FIXUP_3566 = _RESERVED_IDENTIFIER_FIXUP_3560;
    _RESERVED_IDENTIFIER_FIXUP_3566.x = _RESERVED_IDENTIFIER_FIXUP_2787.x;
    _RESERVED_IDENTIFIER_FIXUP_3566.y = _RESERVED_IDENTIFIER_FIXUP_2787.y;
    _RESERVED_IDENTIFIER_FIXUP_3566.z = _RESERVED_IDENTIFIER_FIXUP_2787.z;
    oC0 = vec4((vec4(fog0, 0.0, 0.0, 0.0).xxx * _RESERVED_IDENTIFIER_FIXUP_3566.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0);
    bool _RESERVED_IDENTIFIER_FIXUP_984 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_993;
    if (_RESERVED_IDENTIFIER_FIXUP_984)
    {
        _RESERVED_IDENTIFIER_FIXUP_993 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_993 = _RESERVED_IDENTIFIER_FIXUP_984;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_993)
    {
        hdKilled = true;
        return;
    }
    float _RESERVED_IDENTIFIER_FIXUP_1030 = dot(wxlGBuf.xyz, wxlGBuf.xyz);
    wxlAlbedo = vec4(max(vec4(_RESERVED_IDENTIFIER_FIXUP_3200.xyz + optRegs.rows[optTile*82u+uint(2)].xyz, 1.0).xyz, vec3(0.0)), (((clamp(round(wxlGClass), 0.0, 31.0) + ((optRegs.rows[optTile*82u+uint(14)].y > 0.5) ? 32.0 : 0.0)) + ((optRegs.rows[optTile*82u+uint(14)].x > 0.5) ? 64.0 : 0.0)) + ((wxlGPlain < 0.0040000001899898052215576171875) ? 128.0 : 0.0)) * 0.0039215688593685626983642578125);
    float _RESERVED_IDENTIFIER_FIXUP_1056 = 0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) * 0.0625, 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_2840;
    if (_RESERVED_IDENTIFIER_FIXUP_1030 > 9.9999999392252902907785028219223e-09)
    {
        _RESERVED_IDENTIFIER_FIXUP_2840 = vec4(wxlGBuf.xyz * inversesqrt(_RESERVED_IDENTIFIER_FIXUP_1030), 0.50499999523162841796875 + _RESERVED_IDENTIFIER_FIXUP_1056);
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_2840 = vec4(0.0, 0.0, 0.0, (-0.50499999523162841796875) - _RESERVED_IDENTIFIER_FIXUP_1056);
    }
    wxlNormal = _RESERVED_IDENTIFIER_FIXUP_2840;
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
    r0 = OptTex0( v2.xyz);
    vec2 param = v3.xy;
    r1 = hdTex1(param);
    vec2 param_1 = v3.wz;
    r2 = hdTex2(param_1);
    vec2 param_2 = v4.xy;
    r3 = hdTex3(param_2);
    vec3 hdB93 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = hdB93.x;
    r4.y = hdB93.y;
    r4.z = hdB93.z;
    vec3 hdB108 = v0.xyz + v0.xyz;
    r5.x = hdB108.x;
    r5.y = hdB108.y;
    r5.z = hdB108.z;
    vec3 hdB119 = r0.xyz * r5.xyz;
    r6.x = hdB119.x;
    r6.y = hdB119.y;
    r6.z = hdB119.z;
    vec4 hdB128 = r0;
    vec3 hdB137 = mix(r6.xyz, hdB128.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = hdB137.x;
    r0.y = hdB137.y;
    r0.z = hdB137.z;
    vec3 hdB148 = r1.xyz * r5.xyz;
    r6.x = hdB148.x;
    r6.y = hdB148.y;
    r6.z = hdB148.z;
    vec4 hdB157 = r1;
    vec3 hdB163 = mix(r6.xyz, hdB157.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = hdB163.x;
    r1.y = hdB163.y;
    r1.z = hdB163.z;
    vec3 hdB174 = r2.xyz * r5.xyz;
    r4.x = hdB174.x;
    r4.y = hdB174.y;
    r4.w = hdB174.z;
    vec4 hdB184 = r2;
    vec3 hdB190 = mix(r4.xyw, hdB184.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = hdB190.x;
    r2.y = hdB190.y;
    r2.z = hdB190.z;
    r4 = mix(r0, r1, r3.xxxx);
    r0 = mix(r4, r2, r3.yyyy);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_3 = r2.xy;
        float param_4 = r2.w;
        r2 = hdLod5(param_3, param_4);
        vec2 hdB256 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB256.x;
        r1.z = hdB256.y;
        vec2 hdB267 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB267.x;
        r3.y = hdB267.y;
        vec2 hdB275 = vec2(1.0, 0.0) * v5.zx;
        r3.z = hdB275.x;
        r3.w = hdB275.y;
        vec2 param_5 = r3.xy;
        float param_6 = r3.w;
        r3 = hdLod5(param_5, param_6);
        r1.w = r2.x + r3.x;
        vec2 hdB298 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB298.x;
        r2.y = hdB298.y;
        vec2 hdB305 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB305.x;
        r2.w = hdB305.y;
        vec2 param_7 = r2.xy;
        float param_8 = r2.w;
        r2 = hdLod5(param_7, param_8);
        r1.w += r2.x;
        vec2 hdB328 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB328.x;
        r2.y = hdB328.y;
        vec2 hdB335 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB335.x;
        r2.w = hdB335.y;
        vec2 param_9 = r2.xy;
        float param_10 = r2.w;
        r2 = hdLod5(param_9, param_10);
        r1.w += r2.x;
        vec2 hdB358 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB358.x;
        r2.y = hdB358.y;
        vec2 hdB365 = vec2(1.0, 0.0) * v5.zx;
        r2.z = hdB365.x;
        r2.w = hdB365.y;
        vec2 param_11 = r2.xy;
        float param_12 = r2.w;
        r2 = hdLod5(param_11, param_12);
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
        vec2 param_13 = r2.xy;
        float param_14 = r2.w;
        r2 = hdLod6(param_13, param_14);
        vec2 hdB425 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = hdB425.x;
        r1.z = hdB425.y;
        vec2 hdB435 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = hdB435.x;
        r3.y = hdB435.y;
        vec2 hdB442 = vec2(1.0, 0.0) * v6.zx;
        r3.z = hdB442.x;
        r3.w = hdB442.y;
        vec2 param_15 = r3.xy;
        float param_16 = r3.w;
        r3 = hdLod6(param_15, param_16);
        r1.w = r2.x + r3.x;
        vec2 hdB464 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = hdB464.x;
        r2.y = hdB464.y;
        vec2 hdB471 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB471.x;
        r2.w = hdB471.y;
        vec2 param_17 = r2.xy;
        float param_18 = r2.w;
        r2 = hdLod6(param_17, param_18);
        r1.w += r2.x;
        vec2 hdB493 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = hdB493.x;
        r2.y = hdB493.y;
        vec2 hdB500 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB500.x;
        r2.w = hdB500.y;
        vec2 param_19 = r2.xy;
        float param_20 = r2.w;
        r2 = hdLod6(param_19, param_20);
        r1.w += r2.x;
        vec2 hdB522 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = hdB522.x;
        r2.y = hdB522.y;
        vec2 hdB529 = vec2(1.0, 0.0) * v6.zx;
        r2.z = hdB529.x;
        r2.w = hdB529.y;
        vec2 param_21 = r2.xy;
        float param_22 = r2.w;
        r2 = hdLod6(param_21, param_22);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v7.x), abs(v7.y));
        if (r1.z < 1.0)
        {
            r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_23 = r2.xy;
            float param_24 = r2.w;
            r2 = hdLod7(param_23, param_24);
            vec2 hdB578 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.z = hdB578.x;
            r1.w = hdB578.y;
            vec2 hdB588 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = hdB588.x;
            r3.y = hdB588.y;
            vec2 hdB595 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB595.x;
            r3.w = hdB595.y;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod7(param_25, param_26);
            r2.x += r3.x;
            vec2 hdB617 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB617.x;
            r3.y = hdB617.y;
            vec2 hdB624 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB624.x;
            r3.w = hdB624.y;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod7(param_27, param_28);
            r2.x += r3.x;
            vec2 hdB646 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB646.x;
            r3.y = hdB646.y;
            vec2 hdB653 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB653.x;
            r3.w = hdB653.y;
            vec2 param_29 = r3.xy;
            float param_30 = r3.w;
            r3 = hdLod7(param_29, param_30);
            r2.x += r3.x;
            vec2 hdB675 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB675.x;
            r3.y = hdB675.y;
            vec2 hdB682 = vec2(1.0, 0.0) * v7.zx;
            r3.z = hdB682.x;
            r3.w = hdB682.y;
            vec2 param_31 = r3.xy;
            float param_32 = r3.w;
            r3 = hdLod7(param_31, param_32);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v5.w;
            r1.w = v6.w;
            vec2 hdB714 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = hdB714.x;
            r2.w = hdB714.y;
            r2.y = (v6.w * 0.5) + 0.5;
            r2.z = v7.w;
            vec2 param_33 = r2.xy;
            float param_34 = r2.w;
            r3 = hdLod8(param_33, param_34);
            vec2 hdB739 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = hdB739.x;
            r4.y = hdB739.y;
            r4.z = r2.z;
            r4.w = r2.w;
            vec2 param_35 = r4.xy;
            float param_36 = r4.w;
            r5 = hdLod8(param_35, param_36);
            r2.z = r3.x + r5.x;
            vec2 hdB767 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = hdB767.x;
            r4.y = hdB767.y;
            vec2 param_37 = r4.xy;
            float param_38 = r4.w;
            r3 = hdLod8(param_37, param_38);
            r2.z += r3.x;
            vec2 hdB789 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB789.x;
            r4.y = hdB789.y;
            vec2 param_39 = r4.xy;
            float param_40 = r4.w;
            r3 = hdLod8(param_39, param_40);
            r2.z += r3.x;
            vec2 hdB811 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB811.x;
            r4.y = hdB811.y;
            vec2 param_41 = r4.xy;
            float param_42 = r4.w;
            r3 = hdLod8(param_41, param_42);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB873 = r0.www * v1.xyz;
    r1.y = hdB873.x;
    r1.z = hdB873.y;
    r1.w = hdB873.z;
    vec4 hdB882 = r1;
    vec3 hdB884 = r2.xxx * hdB882.yzw;
    r1.y = hdB884.x;
    r1.z = hdB884.y;
    r1.w = hdB884.z;
    vec4 hdB891 = r0;
    vec3 hdB898 = (hdB891.xyz * r1.xxx) + r1.yzw;
    r0.x = hdB898.x;
    r0.y = hdB898.y;
    r0.z = hdB898.z;
    vec4 hdB905 = r0;
    vec3 hdB912 = hdB905.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB912.x;
    r0.y = hdB912.y;
    r0.z = hdB912.z;
    vec3 hdB927 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB927.x;
    oC0.y = hdB927.y;
    oC0.z = hdB927.z;
    oC0.w = 1.0;
    bool hdB939 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB947;
    if (hdB939)
    {
        hdB947 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB947 = hdB939;
    }
    if (hdB947)
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
    bool _3419 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _3429;
    if (_3419)
    {
        _3429 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 494u) != 0u;
    }
    else
    {
        _3429 = _3419;
    }
    if (_3429)
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
        bool _3454 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _3469;
        if (!_3454)
        {
            _3469 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 494u) != 0u;
        }
        else
        {
            _3469 = _3454;
        }
        if (_3469)
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
