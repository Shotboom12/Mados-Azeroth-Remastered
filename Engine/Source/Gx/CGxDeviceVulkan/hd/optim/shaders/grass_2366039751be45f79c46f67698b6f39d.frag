#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=4)uniform sampler2D s4[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
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
vec4 hdTex0(vec2 uv)
{
    vec4 value = OptTex0( uv);
    bool _43 = hdOverride >= 0;
    bool _65;
    if (_43)
    {
        _65 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 1u) != 0u;
    }
    else
    {
        _65 = _43;
    }
    vec4 _66;
    if (_65)
    {
        _66 = vec4(float(hdOverride));
    }
    else
    {
        _66 = value;
    }
    return _66;
}

vec4 hdLod4(vec2 uv, float lod)
{
    vec4 value = OptTex4Lod( uv, lod);
    bool _84 = hdOverride >= 0;
    bool _93;
    if (_84)
    {
        _93 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 16u) != 0u;
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
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
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
            vec2 _RESERVED_IDENTIFIER_FIXUP_118 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = _RESERVED_IDENTIFIER_FIXUP_118.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_118.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_139 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_139.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_139.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_150 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_150.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_150.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_161 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_161.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_161.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_166 = r1;
            vec2 _RESERVED_IDENTIFIER_FIXUP_172 = _RESERVED_IDENTIFIER_FIXUP_166.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = _RESERVED_IDENTIFIER_FIXUP_172.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_172.y;
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
            r2.x = min(r1.x, v0.w);
        }
        else
        {
            vec2 _RESERVED_IDENTIFIER_FIXUP_294 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = _RESERVED_IDENTIFIER_FIXUP_294.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_294.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_304 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_304.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_304.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_315 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
            r4.x = _RESERVED_IDENTIFIER_FIXUP_315.x;
            r4.y = _RESERVED_IDENTIFIER_FIXUP_315.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_325 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r5.x = _RESERVED_IDENTIFIER_FIXUP_325.x;
            r5.y = _RESERVED_IDENTIFIER_FIXUP_325.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_336 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
            r6.x = _RESERVED_IDENTIFIER_FIXUP_336.x;
            r6.y = _RESERVED_IDENTIFIER_FIXUP_336.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_346 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = _RESERVED_IDENTIFIER_FIXUP_346.x;
            r7.y = _RESERVED_IDENTIFIER_FIXUP_346.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_357 = r1.xy + optRegs.rows[optTile*82u+uint(10)].xy;
            r8.x = _RESERVED_IDENTIFIER_FIXUP_357.x;
            r8.y = _RESERVED_IDENTIFIER_FIXUP_357.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_367 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r9.x = _RESERVED_IDENTIFIER_FIXUP_367.x;
            r9.y = _RESERVED_IDENTIFIER_FIXUP_367.y;
            vec4 _RESERVED_IDENTIFIER_FIXUP_372 = r1;
            vec2 _RESERVED_IDENTIFIER_FIXUP_378 = _RESERVED_IDENTIFIER_FIXUP_372.xy + optRegs.rows[optTile*82u+uint(12)].xy;
            r1.x = _RESERVED_IDENTIFIER_FIXUP_378.x;
            r1.y = _RESERVED_IDENTIFIER_FIXUP_378.y;
            r10 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_11 = r10.xy;
            float param_12 = r10.w;
            r10 = hdLod4(param_11, param_12);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_13 = r3.xy;
            float param_14 = r3.w;
            r3 = hdLod4(param_13, param_14);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_15 = r4.xy;
            float param_16 = r4.w;
            r4 = hdLod4(param_15, param_16);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_17 = r5.xy;
            float param_18 = r5.w;
            r5 = hdLod4(param_17, param_18);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_19 = r6.xy;
            float param_20 = r6.w;
            r6 = hdLod4(param_19, param_20);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_21 = r7.xy;
            float param_22 = r7.w;
            r7 = hdLod4(param_21, param_22);
            r8.z = 0.0;
            r8.w = 0.0;
            vec2 param_23 = r8.xy;
            float param_24 = r8.w;
            r8 = hdLod4(param_23, param_24);
            r9.z = 0.0;
            r9.w = 0.0;
            vec2 param_25 = r9.xy;
            float param_26 = r9.w;
            r9 = hdLod4(param_25, param_26);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_27 = r1.xy;
            float param_28 = r1.w;
            r1 = hdLod4(param_27, param_28);
            r10.y = r3.x;
            r10.z = r4.x;
            r10.w = r5.x;
            r3 = r10 + (-v5.zzzz);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r6.y = r7.x;
            r6.z = r8.x;
            r6.w = r9.x;
            r4 = r6 + (-v5.zzzz);
            r4 = vec4(greaterThanEqual(r4, vec4(0.0)));
            r1.x += (-v5.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r3, vec4(1.0));
            r1.z = dot(r4, vec4(1.0));
            r1.y += r1.z;
            r1.x += r1.y;
            r1.x = (r1.x * 0.111111111938953399658203125) + (-1.0);
            r0.w = (r0.w * r1.x) + 1.0;
            r2.x = min(r0.w, v0.w);
        }
    }
    else
    {
        r2.x = v0.w;
    }
    r0.w = dot(v3.xyz, optRegs.rows[optTile*82u+uint(3)].xyz);
    r0.w = clamp(r0.w + optRegs.rows[optTile*82u+uint(3)].w, 0.0, 1.0);
    r1.x = mix(r2.x, 1.0, r0.w);
    r0.w = dot(optRegs.rows[optTile*82u+uint(4)].xyz, v4.xyz);
    r0.w = (-abs(r0.w)) + 1.2000000476837158203125;
    r0.w *= r0.w;
    r0.w = clamp(r0.w * r0.w, 0.0, 1.0);
    r2.x = mix(r1.x, v0.w, r0.w);
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _RESERVED_IDENTIFIER_FIXUP_630 = r0.www * v0.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_630.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_630.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_630.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_637 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_647 = (_RESERVED_IDENTIFIER_FIXUP_637.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _RESERVED_IDENTIFIER_FIXUP_647.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_647.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_647.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_662 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _RESERVED_IDENTIFIER_FIXUP_662.x;
    oC0.y = _RESERVED_IDENTIFIER_FIXUP_662.y;
    oC0.z = _RESERVED_IDENTIFIER_FIXUP_662.z;
    bool _RESERVED_IDENTIFIER_FIXUP_672 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_680;
    if (_RESERVED_IDENTIFIER_FIXUP_672)
    {
        _RESERVED_IDENTIFIER_FIXUP_680 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_680 = _RESERVED_IDENTIFIER_FIXUP_672;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_680)
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
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
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
            vec2 hdB118 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = hdB118.x;
            r1.y = hdB118.y;
            vec2 hdB139 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB139.x;
            r2.y = hdB139.y;
            vec2 hdB150 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB150.x;
            r3.y = hdB150.y;
            vec2 hdB161 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = hdB161.x;
            r4.y = hdB161.y;
            vec4 hdB166 = r1;
            vec2 hdB172 = hdB166.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = hdB172.x;
            r1.y = hdB172.y;
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
            r2.x = min(r1.x, v0.w);
        }
        else
        {
            vec2 hdB294 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = hdB294.x;
            r1.y = hdB294.y;
            vec2 hdB304 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB304.x;
            r3.y = hdB304.y;
            vec2 hdB315 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
            r4.x = hdB315.x;
            r4.y = hdB315.y;
            vec2 hdB325 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r5.x = hdB325.x;
            r5.y = hdB325.y;
            vec2 hdB336 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
            r6.x = hdB336.x;
            r6.y = hdB336.y;
            vec2 hdB346 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = hdB346.x;
            r7.y = hdB346.y;
            vec2 hdB357 = r1.xy + optRegs.rows[optTile*82u+uint(10)].xy;
            r8.x = hdB357.x;
            r8.y = hdB357.y;
            vec2 hdB367 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r9.x = hdB367.x;
            r9.y = hdB367.y;
            vec4 hdB372 = r1;
            vec2 hdB378 = hdB372.xy + optRegs.rows[optTile*82u+uint(12)].xy;
            r1.x = hdB378.x;
            r1.y = hdB378.y;
            r10 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_11 = r10.xy;
            float param_12 = r10.w;
            r10 = hdLod4(param_11, param_12);
            r3.z = 0.0;
            r3.w = 0.0;
            vec2 param_13 = r3.xy;
            float param_14 = r3.w;
            r3 = hdLod4(param_13, param_14);
            r4.z = 0.0;
            r4.w = 0.0;
            vec2 param_15 = r4.xy;
            float param_16 = r4.w;
            r4 = hdLod4(param_15, param_16);
            r5.z = 0.0;
            r5.w = 0.0;
            vec2 param_17 = r5.xy;
            float param_18 = r5.w;
            r5 = hdLod4(param_17, param_18);
            r6.z = 0.0;
            r6.w = 0.0;
            vec2 param_19 = r6.xy;
            float param_20 = r6.w;
            r6 = hdLod4(param_19, param_20);
            r7.z = 0.0;
            r7.w = 0.0;
            vec2 param_21 = r7.xy;
            float param_22 = r7.w;
            r7 = hdLod4(param_21, param_22);
            r8.z = 0.0;
            r8.w = 0.0;
            vec2 param_23 = r8.xy;
            float param_24 = r8.w;
            r8 = hdLod4(param_23, param_24);
            r9.z = 0.0;
            r9.w = 0.0;
            vec2 param_25 = r9.xy;
            float param_26 = r9.w;
            r9 = hdLod4(param_25, param_26);
            r1.z = 0.0;
            r1.w = 0.0;
            vec2 param_27 = r1.xy;
            float param_28 = r1.w;
            r1 = hdLod4(param_27, param_28);
            r10.y = r3.x;
            r10.z = r4.x;
            r10.w = r5.x;
            r3 = r10 + (-v5.zzzz);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r6.y = r7.x;
            r6.z = r8.x;
            r6.w = r9.x;
            r4 = r6 + (-v5.zzzz);
            r4 = vec4(greaterThanEqual(r4, vec4(0.0)));
            r1.x += (-v5.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r3, vec4(1.0));
            r1.z = dot(r4, vec4(1.0));
            r1.y += r1.z;
            r1.x += r1.y;
            r1.x = (r1.x * 0.111111111938953399658203125) + (-1.0);
            r0.w = (r0.w * r1.x) + 1.0;
            r2.x = min(r0.w, v0.w);
        }
    }
    else
    {
        r2.x = v0.w;
    }
    r0.w = dot(v3.xyz, optRegs.rows[optTile*82u+uint(3)].xyz);
    r0.w = clamp(r0.w + optRegs.rows[optTile*82u+uint(3)].w, 0.0, 1.0);
    r1.x = mix(r2.x, 1.0, r0.w);
    r0.w = dot(optRegs.rows[optTile*82u+uint(4)].xyz, v4.xyz);
    r0.w = (-abs(r0.w)) + 1.2000000476837158203125;
    r0.w *= r0.w;
    r0.w = clamp(r0.w * r0.w, 0.0, 1.0);
    r2.x = mix(r1.x, v0.w, r0.w);
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 hdB630 = r0.www * v0.xyz;
    r1.x = hdB630.x;
    r1.y = hdB630.y;
    r1.z = hdB630.z;
    vec4 hdB637 = r0;
    vec3 hdB647 = (hdB637.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB647.x;
    r0.y = hdB647.y;
    r0.z = hdB647.z;
    vec3 hdB662 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB662.x;
    oC0.y = hdB662.y;
    oC0.z = hdB662.z;
    bool hdB672 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB680;
    if (hdB672)
    {
        hdB680 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB680 = hdB672;
    }
    if (hdB680)
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
    bool _1514 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1524;
    if (_1514)
    {
        _1524 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 17u) != 0u;
    }
    else
    {
        _1524 = _1514;
    }
    if (_1524)
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
        bool _1548 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1563;
        if (!_1548)
        {
            _1563 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 17u) != 0u;
        }
        else
        {
            _1563 = _1548;
        }
        if (_1563)
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
