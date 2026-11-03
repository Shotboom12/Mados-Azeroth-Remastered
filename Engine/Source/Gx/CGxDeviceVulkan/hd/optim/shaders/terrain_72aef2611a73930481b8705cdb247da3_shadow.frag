#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

vec4 oC0;
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
    r0 = OptTex0( v2.xy);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 _113 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _113.x;
        r0.z = _113.y;
        vec2 _135 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = _135.x;
        r1.y = _135.y;
        vec2 _146 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _146.x;
        r2.y = _146.y;
        vec2 _157 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = _157.x;
        r4.y = _157.y;
        vec2 _168 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = _168.x;
        r5.y = _168.y;
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
        vec2 _299 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _299.x;
        r0.z = _299.y;
        vec2 _309 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = _309.x;
        r1.y = _309.y;
        vec2 _319 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _319.x;
        r2.y = _319.y;
        vec2 _329 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = _329.x;
        r4.y = _329.y;
        vec2 _339 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = _339.x;
        r5.y = _339.y;
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
            vec2 _454 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.z = _454.x;
            r0.w = _454.y;
            vec2 _464 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r1.x = _464.x;
            r1.y = _464.y;
            vec2 _474 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _474.x;
            r2.y = _474.y;
            vec2 _484 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _484.x;
            r4.y = _484.y;
            vec2 _494 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _494.x;
            r5.y = _494.y;
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
            vec2 _602 = (r1.xy * vec2(0.5)) + vec2(0.5);
            r2.x = _602.x;
            r2.y = _602.y;
            vec2 _612 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _612.x;
            r4.y = _612.y;
            vec2 _622 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r5.x = _622.x;
            r5.y = _622.y;
            vec2 _632 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r6.x = _632.x;
            r6.y = _632.y;
            vec2 _642 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = _642.x;
            r7.y = _642.y;
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
    vec4 _780 = r0;
    vec3 _782 = r3.xyz * _780.xxx;
    r0.x = _782.x;
    r0.y = _782.y;
    r0.z = _782.z;
    vec4 _789 = r0;
    vec3 _793 = _789.xyz * v0.xyz;
    r0.x = _793.x;
    r0.y = _793.y;
    r0.z = _793.z;
    vec4 _800 = r0;
    vec4 _802 = r0;
    vec3 _804 = _800.xyz + _802.xyz;
    r0.x = _804.x;
    r0.y = _804.y;
    r0.z = _804.z;
    vec3 _815 = r3.www * v1.xyz;
    r1.y = _815.x;
    r1.z = _815.y;
    r1.w = _815.z;
    vec4 _827 = r0;
    vec3 _829 = (r1.yzw * r1.xxx) + _827.xyz;
    r0.x = _829.x;
    r0.y = _829.y;
    r0.z = _829.z;
    vec4 _836 = r0;
    vec3 _843 = _836.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _843.x;
    r0.y = _843.y;
    r0.z = _843.z;
    vec3 _858 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _858.x;
    oC0.y = _858.y;
    oC0.z = _858.z;
    oC0.w = 1.0;
    bool _871 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _879;
    if (_871)
    {
        _879 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _879 = _871;
    }
    if (_879)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
