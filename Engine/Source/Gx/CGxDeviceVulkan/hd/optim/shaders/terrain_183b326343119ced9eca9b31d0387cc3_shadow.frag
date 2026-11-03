#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
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
    vec4 v3 = texcoord4;
    vec4 v4 = texcoord5;
    vec4 v5 = texcoord6;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xy);
    r1.x = max(abs(v3.x), abs(v3.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v3.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _107 = (v3.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _107.x;
        r1.z = _107.y;
        vec2 _129 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _129.x;
        r2.y = _129.y;
        vec2 _137 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _137.x;
        r2.w = _137.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _160 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _160.x;
        r2.y = _160.y;
        vec2 _167 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _167.x;
        r2.w = _167.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _190 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _190.x;
        r2.y = _190.y;
        vec2 _197 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _197.x;
        r2.w = _197.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _220 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _220.x;
        r2.y = _220.y;
        vec2 _227 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _227.x;
        r2.w = _227.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _250 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _250.x;
        r2.y = _250.y;
        vec2 _257 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _257.x;
        r2.w = _257.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _280 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _280.x;
        r2.y = _280.y;
        vec2 _287 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _287.x;
        r2.w = _287.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _310 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _310.x;
        r2.y = _310.y;
        vec2 _317 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _317.x;
        r2.w = _317.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _340 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _340.x;
        r2.y = _340.y;
        vec2 _347 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _347.x;
        r2.w = _347.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v4.x), abs(v4.y));
        if (r1.y < 1.0)
        {
            r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex6Lod( r2.xy, r2.w);
            vec2 _397 = (v4.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _397.x;
            r1.z = _397.y;
            vec2 _407 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _407.x;
            r3.y = _407.y;
            vec2 _414 = vec2(1.0, 0.0) * v4.zx;
            r3.z = _414.x;
            r3.w = _414.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _436 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _436.x;
            r2.y = _436.y;
            vec2 _443 = vec2(1.0, 0.0) * v4.zx;
            r2.z = _443.x;
            r2.w = _443.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _465 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _465.x;
            r2.y = _465.y;
            vec2 _472 = vec2(1.0, 0.0) * v4.zx;
            r2.z = _472.x;
            r2.w = _472.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _494 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _494.x;
            r2.y = _494.y;
            vec2 _501 = vec2(1.0, 0.0) * v4.zx;
            r2.z = _501.x;
            r2.w = _501.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v5.x), abs(v5.y));
            if (r1.y < 1.0)
            {
                r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r2 = OptTex7Lod( r2.xy, r2.w);
                vec2 _551 = (v5.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _551.x;
                r1.z = _551.y;
                vec2 _561 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _561.x;
                r3.y = _561.y;
                vec2 _568 = vec2(1.0, 0.0) * v5.zx;
                r3.z = _568.x;
                r3.w = _568.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _590 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _590.x;
                r2.y = _590.y;
                vec2 _597 = vec2(1.0, 0.0) * v5.zx;
                r2.z = _597.x;
                r2.w = _597.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _619 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _619.x;
                r2.y = _619.y;
                vec2 _626 = vec2(1.0, 0.0) * v5.zx;
                r2.z = _626.x;
                r2.w = _626.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _648 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _648.x;
                r2.y = _648.y;
                vec2 _655 = vec2(1.0, 0.0) * v5.zx;
                r2.z = _655.x;
                r2.w = _655.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v3.w;
                r1.z = v4.w;
                vec2 _687 = (v3.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _687.x;
                r2.w = _687.y;
                r2.y = (v4.w * 0.5) + 0.5;
                r2.z = v5.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _712 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _712.x;
                r4.y = _712.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _740 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _740.x;
                r4.y = _740.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _762 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _762.x;
                r4.y = _762.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _784 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _784.x;
                r4.y = _784.y;
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
    vec4 _838 = r0;
    vec3 _842 = _838.xyz * r1.yyy;
    r0.x = _842.x;
    r0.y = _842.y;
    r0.z = _842.z;
    vec4 _849 = r0;
    vec3 _853 = _849.xyz * v0.xyz;
    r0.x = _853.x;
    r0.y = _853.y;
    r0.z = _853.z;
    vec4 _860 = r0;
    vec4 _862 = r0;
    vec3 _864 = _860.xyz + _862.xyz;
    r0.x = _864.x;
    r0.y = _864.y;
    r0.z = _864.z;
    vec3 _875 = r0.www * v1.xyz;
    r1.y = _875.x;
    r1.z = _875.y;
    r1.w = _875.z;
    vec4 _887 = r0;
    vec3 _889 = (r1.yzw * r1.xxx) + _887.xyz;
    r0.x = _889.x;
    r0.y = _889.y;
    r0.z = _889.z;
    vec4 _896 = r0;
    vec3 _903 = _896.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _903.x;
    r0.y = _903.y;
    r0.z = _903.z;
    vec3 _918 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _918.x;
    oC0.y = _918.y;
    oC0.z = _918.z;
    oC0.w = 1.0;
    bool _931 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _939;
    if (_931)
    {
        _939 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _939 = _931;
    }
    if (_939)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
