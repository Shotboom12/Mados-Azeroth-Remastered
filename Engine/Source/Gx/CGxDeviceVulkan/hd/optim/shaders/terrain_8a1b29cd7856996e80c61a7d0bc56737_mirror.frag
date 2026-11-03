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
    r1.w = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _84 = r0.xyz * v0.xyz;
    r2.x = _84.x;
    r2.y = _84.y;
    r2.z = _84.z;
    vec4 _93 = r2;
    vec4 _95 = r2;
    vec3 _97 = _93.xyz + _95.xyz;
    r2.x = _97.x;
    r2.y = _97.y;
    r2.z = _97.z;
    vec4 _106 = r0;
    vec3 _115 = mix(r2.xyz, _106.xyz, greaterThanEqual(-r1.www, vec3(0.0)));
    r0.x = _115.x;
    r0.y = _115.y;
    r0.z = _115.z;
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
        vec2 _186 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _186.x;
        r1.z = _186.y;
        vec2 _198 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _198.x;
        r2.y = _198.y;
        vec2 _206 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _206.x;
        r2.w = _206.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _229 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _229.x;
        r2.y = _229.y;
        vec2 _236 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _236.x;
        r2.w = _236.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _259 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _259.x;
        r2.y = _259.y;
        vec2 _266 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _266.x;
        r2.w = _266.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _289 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _289.x;
        r2.y = _289.y;
        vec2 _296 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _296.x;
        r2.w = _296.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _319 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _319.x;
        r2.y = _319.y;
        vec2 _326 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _326.x;
        r2.w = _326.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _349 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _349.x;
        r2.y = _349.y;
        vec2 _356 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _356.x;
        r2.w = _356.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _379 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _379.x;
        r2.y = _379.y;
        vec2 _386 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _386.x;
        r2.w = _386.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _409 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _409.x;
        r2.y = _409.y;
        vec2 _416 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _416.x;
        r2.w = _416.y;
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
            vec2 _466 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _466.x;
            r1.z = _466.y;
            vec2 _476 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _476.x;
            r3.y = _476.y;
            vec2 _483 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _483.x;
            r3.w = _483.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _505 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _505.x;
            r2.y = _505.y;
            vec2 _512 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _512.x;
            r2.w = _512.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _534 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _534.x;
            r2.y = _534.y;
            vec2 _541 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _541.x;
            r2.w = _541.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _563 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _563.x;
            r2.y = _563.y;
            vec2 _570 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _570.x;
            r2.w = _570.y;
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
                vec2 _620 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _620.x;
                r1.z = _620.y;
                vec2 _630 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _630.x;
                r3.y = _630.y;
                vec2 _637 = vec2(1.0, 0.0) * v6.zx;
                r3.z = _637.x;
                r3.w = _637.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _659 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _659.x;
                r2.y = _659.y;
                vec2 _666 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _666.x;
                r2.w = _666.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _688 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _688.x;
                r2.y = _688.y;
                vec2 _695 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _695.x;
                r2.w = _695.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _717 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _717.x;
                r2.y = _717.y;
                vec2 _724 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _724.x;
                r2.w = _724.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v4.w;
                r1.z = v5.w;
                vec2 _756 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _756.x;
                r2.w = _756.y;
                r2.y = (v5.w * 0.5) + 0.5;
                r2.z = v6.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _781 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _781.x;
                r4.y = _781.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _809 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _809.x;
                r4.y = _809.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _831 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _831.x;
                r4.y = _831.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _853 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _853.x;
                r4.y = _853.y;
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
    vec3 _910 = r0.www * v1.xyz;
    r2.x = _910.x;
    r2.y = _910.y;
    r2.z = _910.z;
    vec4 _917 = r1;
    vec3 _921 = _917.xxx * r2.xyz;
    r1.x = _921.x;
    r1.z = _921.y;
    r1.w = _921.z;
    vec4 _928 = r0;
    vec3 _935 = (_928.xyz * r1.yyy) + r1.xzw;
    r0.x = _935.x;
    r0.y = _935.y;
    r0.z = _935.z;
    vec4 _942 = r0;
    vec3 _949 = _942.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _949.x;
    r0.y = _949.y;
    r0.z = _949.z;
    vec3 _964 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _964.x;
    oC0.y = _964.y;
    oC0.z = _964.z;
    oC0.w = 1.0;
    bool _975 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _983;
    if (_975)
    {
        _983 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _983 = _975;
    }
    if (_983)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
