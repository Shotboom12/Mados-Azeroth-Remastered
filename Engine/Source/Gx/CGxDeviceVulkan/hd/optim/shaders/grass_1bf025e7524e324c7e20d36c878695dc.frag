#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
layout(location = 6) in vec4 texcoord4;
layout(location = 7) in vec4 texcoord5;
layout(location = 10) in float fog0;
layout(location = 1) out vec4 hdAlbedo;
layout(location = 2) out vec4 hdNormal;
layout(location = 3) out vec4 hdLight;
layout(location = 4) out vec4 hdLow;
layout(location = 5) out vec4 hdHigh;
int hdOverride;
bool hdKilled;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _55 = hdOverride >= 0;
    bool _77;
    if (_55)
    {
        _77 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _77 = _55;
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

vec4 hdLod4(vec2 uv, float lod)
{
    vec4 value = OptTex4Lod( uv, lod);
    bool _96 = hdOverride >= 0;
    bool _105;
    if (_96)
    {
        _105 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
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
    bool _162;
    if (_153)
    {
        _162 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 64u) != 0u;
    }
    else
    {
        _162 = _153;
    }
    vec4 _163;
    if (_162)
    {
        _163 = vec4(float(hdOverride));
    }
    else
    {
        _163 = value;
    }
    return _163;
}

vec4 hdLod7(vec2 uv, float lod)
{
    vec4 value = OptTex7Lod( uv, lod);
    bool _181 = hdOverride >= 0;
    bool _191;
    if (_181)
    {
        _191 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 128u) != 0u;
    }
    else
    {
        _191 = _181;
    }
    vec4 _192;
    if (_191)
    {
        _192 = vec4(float(hdOverride));
    }
    else
    {
        _192 = value;
    }
    return _192;
}

void HDActual()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    vec4 r6 = vec4(0.0);
    vec4 r7 = vec4(0.0);
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
    vec4 r10 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord3;
    vec4 v6 = texcoord4;
    vec4 v7 = texcoord5;
    vec4 v8 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    oC0.w = r0.w * v1.x;
    r0.w = max(abs(v5.x), abs(v5.y));
    r0.w = clamp((r0.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = (-r0.w) + 0.00999999977648258209228515625;
    r1.x = (r1.x >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        if (10.0 < v3.z)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_124 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = _RESERVED_IDENTIFIER_FIXUP_124.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_124.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_145 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_145.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_145.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_156 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_156.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_156.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_167 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_167.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_167.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_172 = r1;
            vec2 _RESERVED_IDENTIFIER_FIXUP_178 = _RESERVED_IDENTIFIER_FIXUP_172.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = _RESERVED_IDENTIFIER_FIXUP_178.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_178.y;
            r5 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_1 = r5.xy;
            float param_2 = r5.w;
            r5 = hdLod4(param_1, param_2);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_3 = r2.xy;
            float param_4 = r2.w;
            r2 = hdLod4(param_3, param_4);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_5 = r3.xy;
            float param_6 = r3.w;
            r3 = hdLod4(param_5, param_6);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_7 = r4.xy;
            float param_8 = r4.w;
            r4 = hdLod4(param_7, param_8);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_9 = r1.xy;
            float param_10 = r1.w;
            r1 = hdLod4(param_9, param_10);
            r5.y = r2.x;
            r5.z = r3.x;
            r5.w = r4.x;
            r2 = r5 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.x += (-v5.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r2, vec4(1.0));
            r1.x += r1.y;
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r1.x = (r0.w * r1.x) + 1.0;
        }
        else
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_294 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _RESERVED_IDENTIFIER_FIXUP_294.x;
            r1.z = _RESERVED_IDENTIFIER_FIXUP_294.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_304 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_304.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_304.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_315 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_315.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_315.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_325 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_325.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_325.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_336 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
            r5.x = _RESERVED_IDENTIFIER_FIXUP_336.x;
            r5.y = _RESERVED_IDENTIFIER_FIXUP_336.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_346 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r6.x = _RESERVED_IDENTIFIER_FIXUP_346.x;
            r6.y = _RESERVED_IDENTIFIER_FIXUP_346.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_357 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
            r7.x = _RESERVED_IDENTIFIER_FIXUP_357.x;
            r7.y = _RESERVED_IDENTIFIER_FIXUP_357.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_367 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r8.x = _RESERVED_IDENTIFIER_FIXUP_367.x;
            r8.y = _RESERVED_IDENTIFIER_FIXUP_367.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_378 = r1.yz + optRegs.rows[optTile*82u+uint(12)].xy;
            r9.x = _RESERVED_IDENTIFIER_FIXUP_378.x;
            r9.y = _RESERVED_IDENTIFIER_FIXUP_378.y;
            r10 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_11 = r10.xy;
            float param_12 = r10.w;
            r10 = hdLod4(param_11, param_12);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_13 = r2.xy;
            float param_14 = r2.w;
            r2 = hdLod4(param_13, param_14);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_15 = r3.xy;
            float param_16 = r3.w;
            r3 = hdLod4(param_15, param_16);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_17 = r4.xy;
            float param_18 = r4.w;
            r4 = hdLod4(param_17, param_18);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_19 = r5.xy;
            float param_20 = r5.w;
            r5 = hdLod4(param_19, param_20);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_21 = r6.xy;
            float param_22 = r6.w;
            r6 = hdLod4(param_21, param_22);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_23 = r7.xy;
            float param_24 = r7.w;
            r7 = hdLod4(param_23, param_24);
            r8.z = 0.0;
            r8.w = 0.0;
            vec2 param_25 = r8.xy;
            float param_26 = r8.w;
            r8 = hdLod4(param_25, param_26);
            r9.z = 0.0;
            r9.w = 0.0;
            vec2 param_27 = r9.xy;
            float param_28 = r9.w;
            r9 = hdLod4(param_27, param_28);
            r10.y = r2.x;
            r10.z = r3.x;
            r10.w = r4.x;
            r2 = r10 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r5.y = r6.x;
            r5.z = r7.x;
            r5.w = r8.x;
            r3 = r5 + (-v5.zzzz);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.y = r9.x + (-v5.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.w = dot(r3, vec4(1.0));
            r1.z += r1.w;
            r1.y += r1.z;
            r1.y = (r1.y * 0.111111111938953399658203125) + (-1.0);
            r1.x = (r0.w * r1.y) + 1.0;
        }
    }
    else
    {
        r1.x = 1.0;
    }
    r0.w = dot(v3.xyz, optRegs.rows[optTile*82u+uint(3)].xyz);
    r0.w = clamp(r0.w + optRegs.rows[optTile*82u+uint(3)].w, 0.0, 1.0);
    r2.x = mix(r1.x, 1.0, r0.w);
    r0.w = max(abs(v6.x), abs(v6.y));
    if (r0.w < 1.0)
    {
        vec2 _RESERVED_IDENTIFIER_FIXUP_591 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.x = _RESERVED_IDENTIFIER_FIXUP_591.x;
        r1.y = _RESERVED_IDENTIFIER_FIXUP_591.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_601 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _RESERVED_IDENTIFIER_FIXUP_601.x;
        r3.y = _RESERVED_IDENTIFIER_FIXUP_601.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_611 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = _RESERVED_IDENTIFIER_FIXUP_611.x;
        r4.y = _RESERVED_IDENTIFIER_FIXUP_611.y;
        vec2 _RESERVED_IDENTIFIER_FIXUP_621 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = _RESERVED_IDENTIFIER_FIXUP_621.x;
        r5.y = _RESERVED_IDENTIFIER_FIXUP_621.y;
        vec4 _RESERVED_IDENTIFIER_FIXUP_626 = r1;
        vec2 _RESERVED_IDENTIFIER_FIXUP_631 = _RESERVED_IDENTIFIER_FIXUP_626.xy + optRegs.rows[optTile*82u+uint(11)].xy;
        r1.x = _RESERVED_IDENTIFIER_FIXUP_631.x;
        r1.y = _RESERVED_IDENTIFIER_FIXUP_631.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_29 = r6.xy;
        float param_30 = r6.w;
        r6 = hdLod5(param_29, param_30);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_31 = r3.xy;
        float param_32 = r3.w;
        r3 = hdLod5(param_31, param_32);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_33 = r4.xy;
        float param_34 = r4.w;
        r4 = hdLod5(param_33, param_34);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_35 = r5.xy;
        float param_36 = r5.w;
        r5 = hdLod5(param_35, param_36);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_37 = r1.xy;
        float param_38 = r1.w;
        r1 = hdLod5(param_37, param_38);
        r6.y = r3.x;
        r6.z = r4.x;
        r6.w = r5.x;
        r3 = r6 + (-v6.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r0.w = r1.x + (-v6.z);
        r0.w = float(r0.w >= 0.0);
        r1.x = dot(r3, vec4(1.0));
        r0.w += r1.x;
        r0.w *= 0.20000000298023223876953125;
    }
    else
    {
        r1.x = max(abs(v7.x), abs(v7.y));
        if (r1.x < 1.0)
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_746 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.x = _RESERVED_IDENTIFIER_FIXUP_746.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_746.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_756 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_756.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_756.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_766 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_766.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_766.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_776 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _RESERVED_IDENTIFIER_FIXUP_776.x;
            r5.y = _RESERVED_IDENTIFIER_FIXUP_776.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_781 = r1;
            vec2 _RESERVED_IDENTIFIER_FIXUP_786 = _RESERVED_IDENTIFIER_FIXUP_781.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = _RESERVED_IDENTIFIER_FIXUP_786.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_786.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_39 = r6.xy;
            float param_40 = r6.w;
            r6 = hdLod6(param_39, param_40);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_41 = r3.xy;
            float param_42 = r3.w;
            r3 = hdLod6(param_41, param_42);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_43 = r4.xy;
            float param_44 = r4.w;
            r4 = hdLod6(param_43, param_44);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_45 = r5.xy;
            float param_46 = r5.w;
            r5 = hdLod6(param_45, param_46);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_47 = r1.xy;
            float param_48 = r1.w;
            r1 = hdLod6(param_47, param_48);
            r6.y = r3.x;
            r6.z = r4.x;
            r6.w = r5.x;
            r3 = r6 + (-v7.zzzz);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.x += (-v7.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r3, vec4(1.0));
            r1.x += r1.y;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
        else
        {
            r1.x = (v5.w * 0.5) + 0.5;
            r1.y = (v6.w * 0.5) + 0.5;
            vec2 _RESERVED_IDENTIFIER_FIXUP_900 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_900.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_900.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_910 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_910.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_910.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_920 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _RESERVED_IDENTIFIER_FIXUP_920.x;
            r5.y = _RESERVED_IDENTIFIER_FIXUP_920.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_930 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r6.x = _RESERVED_IDENTIFIER_FIXUP_930.x;
            r6.y = _RESERVED_IDENTIFIER_FIXUP_930.y;
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_49 = r1.xy;
            float param_50 = r1.w;
            r1 = hdLod7(param_49, param_50);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_51 = r3.xy;
            float param_52 = r3.w;
            r3 = hdLod7(param_51, param_52);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_53 = r4.xy;
            float param_54 = r4.w;
            r4 = hdLod7(param_53, param_54);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_55 = r5.xy;
            float param_56 = r5.w;
            r5 = hdLod7(param_55, param_56);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_57 = r6.xy;
            float param_58 = r6.w;
            r6 = hdLod7(param_57, param_58);
            r1.y = r3.x;
            r1.z = r4.x;
            r1.w = r5.x;
            r1 += (-v7.wwww);
            r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
            r2.y = r6.x + (-v7.w);
            r2.y = float(r2.y >= 0.0);
            r1.x = dot(r1, vec4(1.0));
            r1.x = r2.y + r1.x;
            r1.y = v5.w;
            r1.z = v6.w;
            r2.y = max(abs(r1.y), abs(r1.z));
            r1.y = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r0.w = (r1.y * r1.x) + 1.0;
        }
    }
    r1.x = min(r0.w, r2.x);
    r0.w = dot(optRegs.rows[optTile*82u+uint(4)].xyz, v4.xyz);
    r0.w = (-abs(r0.w)) + 1.2000000476837158203125;
    r0.w *= r0.w;
    r0.w = clamp(r0.w * r0.w, 0.0, 1.0);
    r2.x = mix(r1.x, 1.0, r0.w);
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1109 = r0.www * v0.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_1109.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_1109.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_1109.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_1116 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1126 = (_RESERVED_IDENTIFIER_FIXUP_1116.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _RESERVED_IDENTIFIER_FIXUP_1126.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_1126.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_1126.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_1141 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _RESERVED_IDENTIFIER_FIXUP_1141.x;
    oC0.y = _RESERVED_IDENTIFIER_FIXUP_1141.y;
    oC0.z = _RESERVED_IDENTIFIER_FIXUP_1141.z;
    bool _RESERVED_IDENTIFIER_FIXUP_1151 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_1159;
    if (_RESERVED_IDENTIFIER_FIXUP_1151)
    {
        _RESERVED_IDENTIFIER_FIXUP_1159 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_1159 = _RESERVED_IDENTIFIER_FIXUP_1151;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_1159)
    {
        hdKilled = true;
        return;
    }
    hdAlbedo = vec4(0.0);
    hdNormal = vec4(0.0, 0.0, 0.0, -(0.50499999523162841796875 + (0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) / 16.0, 0.0, 1.0))));
    hdLight = vec4(0.0);
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
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
    vec4 r10 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord3;
    vec4 v6 = texcoord4;
    vec4 v7 = texcoord5;
    vec4 v8 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 param = v2.xy;
    r0 = hdTex0(param);
    oC0.w = r0.w * v1.x;
    r0.w = max(abs(v5.x), abs(v5.y));
    r0.w = clamp((r0.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = (-r0.w) + 0.00999999977648258209228515625;
    r1.x = (r1.x >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        if (10.0 < v3.z)
        {
            vec2 hdB124 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = hdB124.x;
            r1.y = hdB124.y;
            vec2 hdB145 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB145.x;
            r2.y = hdB145.y;
            vec2 hdB156 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB156.x;
            r3.y = hdB156.y;
            vec2 hdB167 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB167.x;
            r4.y = hdB167.y;
            vec4 hdB172 = r1;
            vec2 hdB178 = hdB172.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = hdB178.x;
            r1.y = hdB178.y;
            r5 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_1 = r5.xy;
            float param_2 = r5.w;
            r5 = hdLod4(param_1, param_2);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_3 = r2.xy;
            float param_4 = r2.w;
            r2 = hdLod4(param_3, param_4);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_5 = r3.xy;
            float param_6 = r3.w;
            r3 = hdLod4(param_5, param_6);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_7 = r4.xy;
            float param_8 = r4.w;
            r4 = hdLod4(param_7, param_8);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_9 = r1.xy;
            float param_10 = r1.w;
            r1 = hdLod4(param_9, param_10);
            r5.y = r2.x;
            r5.z = r3.x;
            r5.w = r4.x;
            r2 = r5 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.x += (-v5.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r2, vec4(1.0));
            r1.x += r1.y;
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r1.x = (r0.w * r1.x) + 1.0;
        }
        else
        {
            vec2 hdB294 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB294.x;
            r1.z = hdB294.y;
            vec2 hdB304 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB304.x;
            r2.y = hdB304.y;
            vec2 hdB315 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
            r3.x = hdB315.x;
            r3.y = hdB315.y;
            vec2 hdB325 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB325.x;
            r4.y = hdB325.y;
            vec2 hdB336 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
            r5.x = hdB336.x;
            r5.y = hdB336.y;
            vec2 hdB346 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r6.x = hdB346.x;
            r6.y = hdB346.y;
            vec2 hdB357 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
            r7.x = hdB357.x;
            r7.y = hdB357.y;
            vec2 hdB367 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r8.x = hdB367.x;
            r8.y = hdB367.y;
            vec2 hdB378 = r1.yz + optRegs.rows[optTile*82u+uint(12)].xy;
            r9.x = hdB378.x;
            r9.y = hdB378.y;
            r10 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_11 = r10.xy;
            float param_12 = r10.w;
            r10 = hdLod4(param_11, param_12);
            r2.z = 0.0;
            r2.w = 0.0;
            vec2 param_13 = r2.xy;
            float param_14 = r2.w;
            r2 = hdLod4(param_13, param_14);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_15 = r3.xy;
            float param_16 = r3.w;
            r3 = hdLod4(param_15, param_16);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_17 = r4.xy;
            float param_18 = r4.w;
            r4 = hdLod4(param_17, param_18);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_19 = r5.xy;
            float param_20 = r5.w;
            r5 = hdLod4(param_19, param_20);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_21 = r6.xy;
            float param_22 = r6.w;
            r6 = hdLod4(param_21, param_22);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_23 = r7.xy;
            float param_24 = r7.w;
            r7 = hdLod4(param_23, param_24);
            r8.z = 0.0;
            r8.w = 0.0;
            vec2 param_25 = r8.xy;
            float param_26 = r8.w;
            r8 = hdLod4(param_25, param_26);
            r9.z = 0.0;
            r9.w = 0.0;
            vec2 param_27 = r9.xy;
            float param_28 = r9.w;
            r9 = hdLod4(param_27, param_28);
            r10.y = r2.x;
            r10.z = r3.x;
            r10.w = r4.x;
            r2 = r10 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r5.y = r6.x;
            r5.z = r7.x;
            r5.w = r8.x;
            r3 = r5 + (-v5.zzzz);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.y = r9.x + (-v5.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.w = dot(r3, vec4(1.0));
            r1.z += r1.w;
            r1.y += r1.z;
            r1.y = (r1.y * 0.111111111938953399658203125) + (-1.0);
            r1.x = (r0.w * r1.y) + 1.0;
        }
    }
    else
    {
        r1.x = 1.0;
    }
    r0.w = dot(v3.xyz, optRegs.rows[optTile*82u+uint(3)].xyz);
    r0.w = clamp(r0.w + optRegs.rows[optTile*82u+uint(3)].w, 0.0, 1.0);
    r2.x = mix(r1.x, 1.0, r0.w);
    r0.w = max(abs(v6.x), abs(v6.y));
    if (r0.w < 1.0)
    {
        vec2 hdB591 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.x = hdB591.x;
        r1.y = hdB591.y;
        vec2 hdB601 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = hdB601.x;
        r3.y = hdB601.y;
        vec2 hdB611 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = hdB611.x;
        r4.y = hdB611.y;
        vec2 hdB621 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = hdB621.x;
        r5.y = hdB621.y;
        vec4 hdB626 = r1;
        vec2 hdB631 = hdB626.xy + optRegs.rows[optTile*82u+uint(11)].xy;
        r1.x = hdB631.x;
        r1.y = hdB631.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        vec2 param_29 = r6.xy;
        float param_30 = r6.w;
        r6 = hdLod5(param_29, param_30);
        r3.z = 0.0;
        r3.w = 0.0;
        vec2 param_31 = r3.xy;
        float param_32 = r3.w;
        r3 = hdLod5(param_31, param_32);
        r4.z = 0.0;
        r4.w = 0.0;
        vec2 param_33 = r4.xy;
        float param_34 = r4.w;
        r4 = hdLod5(param_33, param_34);
        r5.z = 0.0;
        r5.w = 0.0;
        vec2 param_35 = r5.xy;
        float param_36 = r5.w;
        r5 = hdLod5(param_35, param_36);
        r1.z = 0.0;
        r1.w = 0.0;
        vec2 param_37 = r1.xy;
        float param_38 = r1.w;
        r1 = hdLod5(param_37, param_38);
        r6.y = r3.x;
        r6.z = r4.x;
        r6.w = r5.x;
        r3 = r6 + (-v6.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r0.w = r1.x + (-v6.z);
        r0.w = float(r0.w >= 0.0);
        r1.x = dot(r3, vec4(1.0));
        r0.w += r1.x;
        r0.w *= 0.20000000298023223876953125;
    }
    else
    {
        r1.x = max(abs(v7.x), abs(v7.y));
        if (r1.x < 1.0)
        {
            vec2 hdB746 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.x = hdB746.x;
            r1.y = hdB746.y;
            vec2 hdB756 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB756.x;
            r3.y = hdB756.y;
            vec2 hdB766 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB766.x;
            r4.y = hdB766.y;
            vec2 hdB776 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB776.x;
            r5.y = hdB776.y;
            vec4 hdB781 = r1;
            vec2 hdB786 = hdB781.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = hdB786.x;
            r1.y = hdB786.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_39 = r6.xy;
            float param_40 = r6.w;
            r6 = hdLod6(param_39, param_40);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_41 = r3.xy;
            float param_42 = r3.w;
            r3 = hdLod6(param_41, param_42);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_43 = r4.xy;
            float param_44 = r4.w;
            r4 = hdLod6(param_43, param_44);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_45 = r5.xy;
            float param_46 = r5.w;
            r5 = hdLod6(param_45, param_46);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_47 = r1.xy;
            float param_48 = r1.w;
            r1 = hdLod6(param_47, param_48);
            r6.y = r3.x;
            r6.z = r4.x;
            r6.w = r5.x;
            r3 = r6 + (-v7.zzzz);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.x += (-v7.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r3, vec4(1.0));
            r1.x += r1.y;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
        else
        {
            r1.x = (v5.w * 0.5) + 0.5;
            r1.y = (v6.w * 0.5) + 0.5;
            vec2 hdB900 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB900.x;
            r3.y = hdB900.y;
            vec2 hdB910 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = hdB910.x;
            r4.y = hdB910.y;
            vec2 hdB920 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = hdB920.x;
            r5.y = hdB920.y;
            vec2 hdB930 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r6.x = hdB930.x;
            r6.y = hdB930.y;
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_49 = r1.xy;
            float param_50 = r1.w;
            r1 = hdLod7(param_49, param_50);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_51 = r3.xy;
            float param_52 = r3.w;
            r3 = hdLod7(param_51, param_52);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_53 = r4.xy;
            float param_54 = r4.w;
            r4 = hdLod7(param_53, param_54);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_55 = r5.xy;
            float param_56 = r5.w;
            r5 = hdLod7(param_55, param_56);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_57 = r6.xy;
            float param_58 = r6.w;
            r6 = hdLod7(param_57, param_58);
            r1.y = r3.x;
            r1.z = r4.x;
            r1.w = r5.x;
            r1 += (-v7.wwww);
            r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
            r2.y = r6.x + (-v7.w);
            r2.y = float(r2.y >= 0.0);
            r1.x = dot(r1, vec4(1.0));
            r1.x = r2.y + r1.x;
            r1.y = v5.w;
            r1.z = v6.w;
            r2.y = max(abs(r1.y), abs(r1.z));
            r1.y = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r0.w = (r1.y * r1.x) + 1.0;
        }
    }
    r1.x = min(r0.w, r2.x);
    r0.w = dot(optRegs.rows[optTile*82u+uint(4)].xyz, v4.xyz);
    r0.w = (-abs(r0.w)) + 1.2000000476837158203125;
    r0.w *= r0.w;
    r0.w = clamp(r0.w * r0.w, 0.0, 1.0);
    r2.x = mix(r1.x, 1.0, r0.w);
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB1109 = r0.www * v0.xyz;
    r1.x = hdB1109.x;
    r1.y = hdB1109.y;
    r1.z = hdB1109.z;
    vec4 hdB1116 = r0;
    vec3 hdB1126 = (hdB1116.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB1126.x;
    r0.y = hdB1126.y;
    r0.z = hdB1126.z;
    vec3 hdB1141 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB1141.x;
    oC0.y = hdB1141.y;
    oC0.z = hdB1141.z;
    bool hdB1151 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB1159;
    if (hdB1151)
    {
        hdB1159 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB1159 = hdB1151;
    }
    if (hdB1159)
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
    vec4 hdSaved1 = hdAlbedo;
    vec4 hdSaved2 = hdNormal;
    vec4 hdSaved3 = hdLight;
    hdLow = vec4(0.0);
    hdHigh = vec4(0.0);
    bool _2626 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _2636;
    if (_2626)
    {
        _2636 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 241u) != 0u;
    }
    else
    {
        _2636 = _2626;
    }
    if (_2636)
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
        bool _2660 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _2675;
        if (!_2660)
        {
            _2675 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 241u) != 0u;
        }
        else
        {
            _2675 = _2660;
        }
        if (_2675)
        {
            tag = -tag;
        }
        vec3 hdStored = clamp(hdSaved0.xyz, vec3(0.0), vec3(1.0));
        hdLow = vec4(clamp(lo, vec3(0.0), vec3(1.0)) - hdStored, tag);
        hdHigh = vec4(clamp(hi, vec3(0.0), vec3(1.0)) - hdStored, tag);
    }
    oC0 = hdSaved0;
    hdAlbedo = hdSaved1;
    hdNormal = hdSaved2;
    hdLight = hdSaved3;
    if (hdDiscardActual)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
