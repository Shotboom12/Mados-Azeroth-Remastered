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
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_1 = r1.xy;
            float param_2 = r1.w;
            r1 = hdLod4(param_1, param_2);
            vec2 _RESERVED_IDENTIFIER_FIXUP_124 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _RESERVED_IDENTIFIER_FIXUP_124.x;
            r1.z = _RESERVED_IDENTIFIER_FIXUP_124.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_145 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_145.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_145.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_153 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_153.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_153.y;
            vec2 param_3 = r2.xy;
            float param_4 = r2.w;
            r2 = hdLod4(param_3, param_4);
            r1.x += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_176 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_176.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_176.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_183 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_183.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_183.y;
            vec2 param_5 = r2.xy;
            float param_6 = r2.w;
            r2 = hdLod4(param_5, param_6);
            r1.x += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_206 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_206.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_206.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_213 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_213.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_213.y;
            vec2 param_7 = r2.xy;
            float param_8 = r2.w;
            r2 = hdLod4(param_7, param_8);
            r1.x += r2.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_236 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r2.x = _RESERVED_IDENTIFIER_FIXUP_236.x;
            r2.y = _RESERVED_IDENTIFIER_FIXUP_236.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_243 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _RESERVED_IDENTIFIER_FIXUP_243.x;
            r2.w = _RESERVED_IDENTIFIER_FIXUP_243.y;
            vec2 param_9 = r2.xy;
            float param_10 = r2.w;
            r2 = hdLod4(param_9, param_10);
            r1.x += r2.x;
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r1.x = (r0.w * r1.x) + 1.0;
            r2.x = min(r1.x, v0.w);
        }
        else
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_11 = r1.xy;
            float param_12 = r1.w;
            r1 = hdLod4(param_11, param_12);
            vec2 _RESERVED_IDENTIFIER_FIXUP_294 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _RESERVED_IDENTIFIER_FIXUP_294.x;
            r1.z = _RESERVED_IDENTIFIER_FIXUP_294.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_304 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_304.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_304.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_311 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_311.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_311.y;
            vec2 param_13 = r3.xy;
            float param_14 = r3.w;
            r3 = hdLod4(param_13, param_14);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_334 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_334.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_334.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_341 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_341.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_341.y;
            vec2 param_15 = r3.xy;
            float param_16 = r3.w;
            r3 = hdLod4(param_15, param_16);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_363 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_363.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_363.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_370 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_370.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_370.y;
            vec2 param_17 = r3.xy;
            float param_18 = r3.w;
            r3 = hdLod4(param_17, param_18);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_393 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_393.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_393.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_400 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_400.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_400.y;
            vec2 param_19 = r3.xy;
            float param_20 = r3.w;
            r3 = hdLod4(param_19, param_20);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_422 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_422.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_422.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_429 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_429.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_429.y;
            vec2 param_21 = r3.xy;
            float param_22 = r3.w;
            r3 = hdLod4(param_21, param_22);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_452 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_452.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_452.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_459 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_459.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_459.y;
            vec2 param_23 = r3.xy;
            float param_24 = r3.w;
            r3 = hdLod4(param_23, param_24);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_481 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_481.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_481.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_488 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_488.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_488.y;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod4(param_25, param_26);
            r1.x += r3.x;
            vec2 _RESERVED_IDENTIFIER_FIXUP_511 = r1.yz + optRegs.rows[optTile*82u+uint(12)].xy;
            r3.x = _RESERVED_IDENTIFIER_FIXUP_511.x;
            r3.y = _RESERVED_IDENTIFIER_FIXUP_511.y;
            vec2 _RESERVED_IDENTIFIER_FIXUP_518 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _RESERVED_IDENTIFIER_FIXUP_518.x;
            r3.w = _RESERVED_IDENTIFIER_FIXUP_518.y;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod4(param_27, param_28);
            r1.x += r3.x;
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
    vec3 _RESERVED_IDENTIFIER_FIXUP_628 = r0.www * v0.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_628.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_628.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_628.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_635 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_645 = (_RESERVED_IDENTIFIER_FIXUP_635.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _RESERVED_IDENTIFIER_FIXUP_645.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_645.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_645.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_660 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _RESERVED_IDENTIFIER_FIXUP_660.x;
    oC0.y = _RESERVED_IDENTIFIER_FIXUP_660.y;
    oC0.z = _RESERVED_IDENTIFIER_FIXUP_660.z;
    bool _RESERVED_IDENTIFIER_FIXUP_670 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_678;
    if (_RESERVED_IDENTIFIER_FIXUP_670)
    {
        _RESERVED_IDENTIFIER_FIXUP_678 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_678 = _RESERVED_IDENTIFIER_FIXUP_670;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_678)
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
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_1 = r1.xy;
            float param_2 = r1.w;
            r1 = hdLod4(param_1, param_2);
            vec2 hdB124 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB124.x;
            r1.z = hdB124.y;
            vec2 hdB145 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = hdB145.x;
            r2.y = hdB145.y;
            vec2 hdB153 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB153.x;
            r2.w = hdB153.y;
            vec2 param_3 = r2.xy;
            float param_4 = r2.w;
            r2 = hdLod4(param_3, param_4);
            r1.x += r2.x;
            vec2 hdB176 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = hdB176.x;
            r2.y = hdB176.y;
            vec2 hdB183 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB183.x;
            r2.w = hdB183.y;
            vec2 param_5 = r2.xy;
            float param_6 = r2.w;
            r2 = hdLod4(param_5, param_6);
            r1.x += r2.x;
            vec2 hdB206 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = hdB206.x;
            r2.y = hdB206.y;
            vec2 hdB213 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB213.x;
            r2.w = hdB213.y;
            vec2 param_7 = r2.xy;
            float param_8 = r2.w;
            r2 = hdLod4(param_7, param_8);
            r1.x += r2.x;
            vec2 hdB236 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r2.x = hdB236.x;
            r2.y = hdB236.y;
            vec2 hdB243 = vec2(1.0, 0.0) * v5.zx;
            r2.z = hdB243.x;
            r2.w = hdB243.y;
            vec2 param_9 = r2.xy;
            float param_10 = r2.w;
            r2 = hdLod4(param_9, param_10);
            r1.x += r2.x;
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r1.x = (r0.w * r1.x) + 1.0;
            r2.x = min(r1.x, v0.w);
        }
        else
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            vec2 param_11 = r1.xy;
            float param_12 = r1.w;
            r1 = hdLod4(param_11, param_12);
            vec2 hdB294 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = hdB294.x;
            r1.z = hdB294.y;
            vec2 hdB304 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = hdB304.x;
            r3.y = hdB304.y;
            vec2 hdB311 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB311.x;
            r3.w = hdB311.y;
            vec2 param_13 = r3.xy;
            float param_14 = r3.w;
            r3 = hdLod4(param_13, param_14);
            r1.x += r3.x;
            vec2 hdB334 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
            r3.x = hdB334.x;
            r3.y = hdB334.y;
            vec2 hdB341 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB341.x;
            r3.w = hdB341.y;
            vec2 param_15 = r3.xy;
            float param_16 = r3.w;
            r3 = hdLod4(param_15, param_16);
            r1.x += r3.x;
            vec2 hdB363 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = hdB363.x;
            r3.y = hdB363.y;
            vec2 hdB370 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB370.x;
            r3.w = hdB370.y;
            vec2 param_17 = r3.xy;
            float param_18 = r3.w;
            r3 = hdLod4(param_17, param_18);
            r1.x += r3.x;
            vec2 hdB393 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
            r3.x = hdB393.x;
            r3.y = hdB393.y;
            vec2 hdB400 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB400.x;
            r3.w = hdB400.y;
            vec2 param_19 = r3.xy;
            float param_20 = r3.w;
            r3 = hdLod4(param_19, param_20);
            r1.x += r3.x;
            vec2 hdB422 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = hdB422.x;
            r3.y = hdB422.y;
            vec2 hdB429 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB429.x;
            r3.w = hdB429.y;
            vec2 param_21 = r3.xy;
            float param_22 = r3.w;
            r3 = hdLod4(param_21, param_22);
            r1.x += r3.x;
            vec2 hdB452 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
            r3.x = hdB452.x;
            r3.y = hdB452.y;
            vec2 hdB459 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB459.x;
            r3.w = hdB459.y;
            vec2 param_23 = r3.xy;
            float param_24 = r3.w;
            r3 = hdLod4(param_23, param_24);
            r1.x += r3.x;
            vec2 hdB481 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r3.x = hdB481.x;
            r3.y = hdB481.y;
            vec2 hdB488 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB488.x;
            r3.w = hdB488.y;
            vec2 param_25 = r3.xy;
            float param_26 = r3.w;
            r3 = hdLod4(param_25, param_26);
            r1.x += r3.x;
            vec2 hdB511 = r1.yz + optRegs.rows[optTile*82u+uint(12)].xy;
            r3.x = hdB511.x;
            r3.y = hdB511.y;
            vec2 hdB518 = vec2(1.0, 0.0) * v5.zx;
            r3.z = hdB518.x;
            r3.w = hdB518.y;
            vec2 param_27 = r3.xy;
            float param_28 = r3.w;
            r3 = hdLod4(param_27, param_28);
            r1.x += r3.x;
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
    vec3 hdB628 = r0.www * v0.xyz;
    r1.x = hdB628.x;
    r1.y = hdB628.y;
    r1.z = hdB628.z;
    vec4 hdB635 = r0;
    vec3 hdB645 = (hdB635.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = hdB645.x;
    r0.y = hdB645.y;
    r0.z = hdB645.z;
    vec3 hdB660 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = hdB660.x;
    oC0.y = hdB660.y;
    oC0.z = hdB660.z;
    bool hdB670 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB678;
    if (hdB670)
    {
        hdB678 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB678 = hdB670;
    }
    if (hdB678)
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
    bool _1624 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _1634;
    if (_1624)
    {
        _1634 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 17u) != 0u;
    }
    else
    {
        _1634 = _1624;
    }
    if (_1634)
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
        bool _1658 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _1673;
        if (!_1658)
        {
            _1673 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 17u) != 0u;
        }
        else
        {
            _1673 = _1658;
        }
        if (_1673)
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
