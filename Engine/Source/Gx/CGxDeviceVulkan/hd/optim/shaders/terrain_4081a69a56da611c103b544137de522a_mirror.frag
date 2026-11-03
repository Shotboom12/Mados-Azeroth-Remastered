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
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
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
    vec2 _84 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = _84.x;
    r2.z = _84.y;
    vec3 _97 = v0.xyz + v0.xyz;
    r3.x = _97.x;
    r3.y = _97.y;
    r3.z = _97.z;
    vec3 _109 = r0.xyz * r3.xyz;
    r4.x = _109.x;
    r4.y = _109.y;
    r4.z = _109.z;
    vec4 _118 = r0;
    vec3 _127 = mix(r4.xyz, _118.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = _127.x;
    r0.y = _127.y;
    r0.z = _127.z;
    vec4 _136 = r3;
    vec3 _138 = r1.xyz * _136.xyz;
    r3.x = _138.x;
    r3.y = _138.y;
    r3.z = _138.z;
    vec4 _147 = r1;
    vec3 _153 = mix(r3.xyz, _147.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = _153.x;
    r1.y = _153.y;
    r1.z = _153.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        vec2 _201 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.x = _201.x;
        r0.y = _201.y;
        vec2 _212 = r0.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = _212.x;
        r1.y = _212.y;
        vec2 _223 = r0.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _223.x;
        r2.y = _223.y;
        vec2 _234 = r0.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = _234.x;
        r4.y = _234.y;
        vec2 _245 = r0.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = _245.x;
        r5.y = _245.y;
        vec2 _256 = r0.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = _256.x;
        r6.y = _256.y;
        vec2 _267 = r0.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = _267.x;
        r7.y = _267.y;
        vec2 _278 = r0.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = _278.x;
        r8.y = _278.y;
        vec4 _283 = r0;
        vec2 _289 = _283.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r0.x = _289.x;
        r0.y = _289.y;
        r9 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r9 = OptTex5Lod( r9.xy, r9.w);
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
        r6.z = 0.0;
        r6.w = 0.0;
        r6 = OptTex5Lod( r6.xy, r6.w);
        r7.z = 0.0;
        r7.w = 0.0;
        r7 = OptTex5Lod( r7.xy, r7.w);
        r8.z = 0.0;
        r8.w = 0.0;
        r8 = OptTex5Lod( r8.xy, r8.w);
        r0.z = 0.0;
        r0.w = 0.0;
        r0 = OptTex5Lod( r0.xy, r0.w);
        r9.y = r1.x;
        r9.z = r2.x;
        r9.w = r4.x;
        r1 = r9 + (-v4.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r2 = r5 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r0.x += (-v4.z);
        r0.x = float(r0.x >= 0.0);
        r0.y = dot(r1, vec4(1.0));
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.x += r0.y;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v5.x), abs(v5.y));
        if (r0.y < 1.0)
        {
            vec2 _476 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = _476.x;
            r0.z = _476.y;
            vec2 _486 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r1.x = _486.x;
            r1.y = _486.y;
            vec2 _496 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _496.x;
            r2.y = _496.y;
            vec2 _506 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _506.x;
            r4.y = _506.y;
            vec2 _516 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _516.x;
            r5.y = _516.y;
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
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v6.x), abs(v6.y));
            if (r0.y < 1.0)
            {
                vec2 _632 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = _632.x;
                r0.z = _632.y;
                vec2 _642 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r1.x = _642.x;
                r1.y = _642.y;
                vec2 _652 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _652.x;
                r2.y = _652.y;
                vec2 _662 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _662.x;
                r4.y = _662.y;
                vec2 _672 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = _672.x;
                r5.y = _672.y;
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
                r0.y = r5.x + (-v6.z);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r1, vec4(1.0));
                r0.y += r0.z;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.x = v4.w;
                r1.y = v5.w;
                vec2 _780 = (r1.xy * vec2(0.5)) + vec2(0.5);
                r2.x = _780.x;
                r2.y = _780.y;
                vec2 _790 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _790.x;
                r4.y = _790.y;
                vec2 _800 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = _800.x;
                r5.y = _800.y;
                vec2 _810 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = _810.x;
                r6.y = _810.y;
                vec2 _820 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = _820.x;
                r7.y = _820.y;
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
                r0.y = r7.x + (-v6.w);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r2, vec4(1.0));
                r0.y += r0.z;
                r0.z = max(abs(r1.x), abs(r1.y));
                r0.z = clamp((r0.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.z * r0.y) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _954 = r3.www * v1.xyz;
    r1.x = _954.x;
    r1.y = _954.y;
    r1.z = _954.z;
    vec4 _961 = r0;
    vec3 _965 = _961.xxx * r1.xyz;
    r0.x = _965.x;
    r0.z = _965.y;
    r0.w = _965.z;
    vec4 _974 = r0;
    vec4 _977 = r0;
    vec3 _979 = (r3.xyz * _974.yyy) + _977.xzw;
    r0.x = _979.x;
    r0.y = _979.y;
    r0.z = _979.z;
    vec4 _986 = r0;
    vec3 _993 = _986.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _993.x;
    r0.y = _993.y;
    r0.z = _993.z;
    vec3 _1008 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _1008.x;
    oC0.y = _1008.y;
    oC0.z = _1008.z;
    oC0.w = 1.0;
    bool _1020 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1028;
    if (_1020)
    {
        _1028 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1028 = _1020;
    }
    if (_1028)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
