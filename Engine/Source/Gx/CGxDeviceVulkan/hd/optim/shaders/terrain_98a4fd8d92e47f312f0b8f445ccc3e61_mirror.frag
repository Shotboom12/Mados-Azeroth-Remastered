#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 6) in vec4 texcoord4;
layout(location = 7) in vec4 texcoord5;
layout(location = 8) in vec4 texcoord6;
layout(location = 10) in float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    vec4 r6 = vec4(0.0);
    vec4 r7 = vec4(0.0);
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
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    vec2 _86 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = _86.x;
    r2.z = _86.y;
    vec3 _98 = v0.xyz + v0.xyz;
    r3.x = _98.x;
    r3.y = _98.y;
    r3.z = _98.z;
    vec3 _110 = r0.xyz * r3.xyz;
    r4.x = _110.x;
    r4.y = _110.y;
    r4.z = _110.z;
    vec4 _119 = r0;
    vec3 _128 = mix(r4.xyz, _119.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = _128.x;
    r0.y = _128.y;
    r0.z = _128.z;
    vec4 _137 = r3;
    vec3 _139 = r1.xyz * _137.xyz;
    r3.x = _139.x;
    r3.y = _139.y;
    r3.z = _139.z;
    vec4 _148 = r1;
    vec3 _154 = mix(r3.xyz, _148.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = _154.x;
    r1.y = _154.y;
    r1.z = _154.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 _202 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _202.x;
        r0.z = _202.y;
        vec2 _213 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = _213.x;
        r1.y = _213.y;
        vec2 _224 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _224.x;
        r2.y = _224.y;
        vec2 _235 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = _235.x;
        r4.y = _235.y;
        vec2 _246 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = _246.x;
        r5.y = _246.y;
        r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r6 = OptTex5Lod( r6.xy, r6.w);
        r1.z = 0.0;
        r1.w = 0.0;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r2.z = 0.0;
        r2.w = 0.0;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r4.z = 0.0;
        r4.w = 0.0;
        r4 = OptTex5Lod( r4.xy, r4.w);
        r5.z = 0.0;
        r5.w = 0.0;
        r5 = OptTex5Lod( r5.xy, r5.w);
        r6.y = r1.x;
        r6.z = r2.x;
        r6.w = r4.x;
        r1 = r6 + (-v4.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r0.y = r5.x + (-v4.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r1, vec4(1.0));
        r0.y += r0.z;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
    }
    else
    {
        r0.x = 1.0;
    }
    r0.y = max(abs(v5.x), abs(v5.y));
    if (r0.y < 1.0)
    {
        vec2 _377 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _377.x;
        r0.z = _377.y;
        vec2 _387 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = _387.x;
        r1.y = _387.y;
        vec2 _397 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _397.x;
        r2.y = _397.y;
        vec2 _407 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = _407.x;
        r4.y = _407.y;
        vec2 _417 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = _417.x;
        r5.y = _417.y;
        r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r6 = OptTex6Lod( r6.xy, r6.w);
        r1.z = 0.0;
        r1.w = 0.0;
        r1 = OptTex6Lod( r1.xy, r1.w);
        r2.z = 0.0;
        r2.w = 0.0;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r4.z = 0.0;
        r4.w = 0.0;
        r4 = OptTex6Lod( r4.xy, r4.w);
        r5.z = 0.0;
        r5.w = 0.0;
        r5 = OptTex6Lod( r5.xy, r5.w);
        r6.y = r1.x;
        r6.z = r2.x;
        r6.w = r4.x;
        r1 = r6 + (-v5.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r0.y = r5.x + (-v5.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r1, vec4(1.0));
        r0.y += r0.z;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v6.x), abs(v6.y));
        if (r0.z < 1.0)
        {
            vec2 _532 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.z = _532.x;
            r0.w = _532.y;
            vec2 _542 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r1.x = _542.x;
            r1.y = _542.y;
            vec2 _552 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _552.x;
            r2.y = _552.y;
            vec2 _562 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _562.x;
            r4.y = _562.y;
            vec2 _572 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _572.x;
            r5.y = _572.y;
            r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r6 = OptTex7Lod( r6.xy, r6.w);
            r1.z = 0.0;
            r1.w = 0.0;
            r1 = OptTex7Lod( r1.xy, r1.w);
            r2.z = 0.0;
            r2.w = 0.0;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r4.z = 0.0;
            r4.w = 0.0;
            r4 = OptTex7Lod( r4.xy, r4.w);
            r5.z = 0.0;
            r5.w = 0.0;
            r5 = OptTex7Lod( r5.xy, r5.w);
            r6.y = r1.x;
            r6.z = r2.x;
            r6.w = r4.x;
            r1 = r6 + (-v6.zzzz);
            r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
            r0.z = r5.x + (-v6.z);
            r0.z = float(r0.z >= 0.0);
            r0.w = dot(r1, vec4(1.0));
            r0.z += r0.w;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.x = v4.w;
            r1.y = v5.w;
            vec2 _680 = (r1.xy * vec2(0.5)) + vec2(0.5);
            r2.x = _680.x;
            r2.y = _680.y;
            vec2 _690 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _690.x;
            r4.y = _690.y;
            vec2 _700 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = _700.x;
            r5.y = _700.y;
            vec2 _710 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = _710.x;
            r6.y = _710.y;
            vec2 _720 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = _720.x;
            r7.y = _720.y;
            r2.z = 0.0;
            r2.w = 0.0;
            r2 = OptTex8Lod( r2.xy, r2.w);
            r4.z = 0.0;
            r4.w = 0.0;
            r4 = OptTex8Lod( r4.xy, r4.w);
            r5.z = 0.0;
            r5.w = 0.0;
            r5 = OptTex8Lod( r5.xy, r5.w);
            r6.z = 0.0;
            r6.w = 0.0;
            r6 = OptTex8Lod( r6.xy, r6.w);
            r7.z = 0.0;
            r7.w = 0.0;
            r7 = OptTex8Lod( r7.xy, r7.w);
            r2.y = r4.x;
            r2.z = r5.x;
            r2.w = r6.x;
            r2 += (-v6.wwww);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r0.z = r7.x + (-v6.w);
            r0.z = float(r0.z >= 0.0);
            r0.w = dot(r2, vec4(1.0));
            r0.z += r0.w;
            r0.w = max(abs(r1.x), abs(r1.y));
            r0.w = clamp((r0.w * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.z = (r0.z * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.w * r0.z) + 1.0;
        }
    }
    r1.x = min(r0.y, r0.x);
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _859 = r3.www * v1.xyz;
    r0.y = _859.x;
    r0.z = _859.y;
    r0.w = _859.z;
    vec4 _868 = r0;
    vec3 _870 = r1.xxx * _868.yzw;
    r0.y = _870.x;
    r0.z = _870.y;
    r0.w = _870.z;
    vec4 _879 = r0;
    vec4 _882 = r0;
    vec3 _884 = (r3.xyz * _879.xxx) + _882.yzw;
    r0.x = _884.x;
    r0.y = _884.y;
    r0.z = _884.z;
    vec4 _891 = r0;
    vec3 _898 = _891.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _898.x;
    r0.y = _898.y;
    r0.z = _898.z;
    vec3 _913 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _913.x;
    oC0.y = _913.y;
    oC0.z = _913.z;
    oC0.w = 1.0;
    bool _925 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _933;
    if (_925)
    {
        _933 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _933 = _925;
    }
    if (_933)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
