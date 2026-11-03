#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
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
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _131 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _131.x;
        r1.z = _131.y;
        vec2 _153 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _153.x;
        r2.y = _153.y;
        vec2 _161 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _161.x;
        r2.w = _161.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _184 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _184.x;
        r2.y = _184.y;
        vec2 _191 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _191.x;
        r2.w = _191.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _214 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _214.x;
        r2.y = _214.y;
        vec2 _221 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _221.x;
        r2.w = _221.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _244 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _244.x;
        r2.y = _244.y;
        vec2 _251 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _251.x;
        r2.w = _251.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _274 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _274.x;
        r2.y = _274.y;
        vec2 _281 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _281.x;
        r2.w = _281.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _304 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _304.x;
        r2.y = _304.y;
        vec2 _311 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _311.x;
        r2.w = _311.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _334 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _334.x;
        r2.y = _334.y;
        vec2 _341 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _341.x;
        r2.w = _341.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _364 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _364.x;
        r2.y = _364.y;
        vec2 _371 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _371.x;
        r2.w = _371.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v5.x), abs(v5.y));
        if (r1.y < 1.0)
        {
            r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex6Lod( r2.xy, r2.w);
            vec2 _421 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _421.x;
            r1.z = _421.y;
            vec2 _431 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _431.x;
            r3.y = _431.y;
            vec2 _438 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _438.x;
            r3.w = _438.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _460 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _460.x;
            r2.y = _460.y;
            vec2 _467 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _467.x;
            r2.w = _467.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _489 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _489.x;
            r2.y = _489.y;
            vec2 _496 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _496.x;
            r2.w = _496.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _518 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _518.x;
            r2.y = _518.y;
            vec2 _525 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _525.x;
            r2.w = _525.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v6.x), abs(v6.y));
            if (r1.y < 1.0)
            {
                r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r2 = OptTex7Lod( r2.xy, r2.w);
                vec2 _575 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _575.x;
                r1.z = _575.y;
                vec2 _585 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _585.x;
                r3.y = _585.y;
                vec2 _592 = vec2(1.0, 0.0) * v6.zx;
                r3.z = _592.x;
                r3.w = _592.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _614 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _614.x;
                r2.y = _614.y;
                vec2 _621 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _621.x;
                r2.w = _621.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _643 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _643.x;
                r2.y = _643.y;
                vec2 _650 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _650.x;
                r2.w = _650.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _672 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _672.x;
                r2.y = _672.y;
                vec2 _679 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _679.x;
                r2.w = _679.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v4.w;
                r1.z = v5.w;
                vec2 _711 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _711.x;
                r2.w = _711.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _736 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _736.x;
                r4.y = _736.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _764 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _764.x;
                r4.y = _764.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _786 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _786.x;
                r4.y = _786.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _808 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _808.x;
                r4.y = _808.y;
                r2 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r2.x;
                r2.x = max(abs(r1.y), abs(r1.z));
                r1.y = clamp((r2.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.z = (r1.w * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.y * r1.z) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _861 = r0;
    vec3 _865 = _861.xyz * r1.yyy;
    r0.x = _865.x;
    r0.y = _865.y;
    r0.z = _865.z;
    vec4 _872 = r0;
    vec3 _876 = _872.xyz * v0.xyz;
    r0.x = _876.x;
    r0.y = _876.y;
    r0.z = _876.z;
    vec4 _883 = r0;
    vec4 _885 = r0;
    vec3 _887 = _883.xyz + _885.xyz;
    r0.x = _887.x;
    r0.y = _887.y;
    r0.z = _887.z;
    vec3 _898 = r0.www * v1.xyz;
    r1.y = _898.x;
    r1.z = _898.y;
    r1.w = _898.z;
    vec4 _910 = r0;
    vec3 _912 = (r1.yzw * r1.xxx) + _910.xyz;
    r0.x = _912.x;
    r0.y = _912.y;
    r0.z = _912.z;
    vec4 _919 = r0;
    vec3 _926 = _919.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _926.x;
    r0.y = _926.y;
    r0.z = _926.z;
    vec3 _941 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _941.x;
    oC0.y = _941.y;
    oC0.z = _941.z;
    oC0.w = 1.0;
    bool _954 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _962;
    if (_954)
    {
        _962 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _962 = _954;
    }
    if (_962)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
