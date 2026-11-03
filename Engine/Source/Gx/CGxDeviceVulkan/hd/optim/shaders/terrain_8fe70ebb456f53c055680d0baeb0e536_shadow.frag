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
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r0 = OptTex5Lod( r0.xy, r0.w);
        vec2 _125 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _125.x;
        r0.z = _125.y;
        vec2 _147 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = _147.x;
        r1.y = _147.y;
        vec2 _155 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _155.x;
        r1.w = _155.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _178 = r0.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r1.x = _178.x;
        r1.y = _178.y;
        vec2 _185 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _185.x;
        r1.w = _185.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _208 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _208.x;
        r1.y = _208.y;
        vec2 _215 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _215.x;
        r1.w = _215.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _238 = r0.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r1.x = _238.x;
        r1.y = _238.y;
        vec2 _245 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _245.x;
        r1.w = _245.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _268 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _268.x;
        r1.y = _268.y;
        vec2 _275 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _275.x;
        r1.w = _275.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _298 = r0.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r1.x = _298.x;
        r1.y = _298.y;
        vec2 _305 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _305.x;
        r1.w = _305.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _328 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _328.x;
        r1.y = _328.y;
        vec2 _335 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _335.x;
        r1.w = _335.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        vec2 _358 = r0.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = _358.x;
        r1.y = _358.y;
        vec2 _365 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _365.x;
        r1.w = _365.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.x += r1.x;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v5.x), abs(v5.y));
        if (r0.y < 1.0)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r1 = OptTex6Lod( r1.xy, r1.w);
            vec2 _415 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = _415.x;
            r0.z = _415.y;
            vec2 _425 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = _425.x;
            r2.y = _425.y;
            vec2 _432 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _432.x;
            r2.w = _432.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r0.w = r1.x + r2.x;
            vec2 _454 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r1.x = _454.x;
            r1.y = _454.y;
            vec2 _461 = vec2(1.0, 0.0) * v5.zx;
            r1.z = _461.x;
            r1.w = _461.y;
            r1 = OptTex6Lod( r1.xy, r1.w);
            r0.w += r1.x;
            vec2 _483 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r1.x = _483.x;
            r1.y = _483.y;
            vec2 _490 = vec2(1.0, 0.0) * v5.zx;
            r1.z = _490.x;
            r1.w = _490.y;
            r1 = OptTex6Lod( r1.xy, r1.w);
            r0.w += r1.x;
            vec2 _512 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r1.x = _512.x;
            r1.y = _512.y;
            vec2 _519 = vec2(1.0, 0.0) * v5.zx;
            r1.z = _519.x;
            r1.w = _519.y;
            r1 = OptTex6Lod( r1.xy, r1.w);
            r0.y = r0.w + r1.x;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v6.x), abs(v6.y));
            if (r0.y < 1.0)
            {
                r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r1 = OptTex7Lod( r1.xy, r1.w);
                vec2 _569 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = _569.x;
                r0.z = _569.y;
                vec2 _579 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = _579.x;
                r2.y = _579.y;
                vec2 _586 = vec2(1.0, 0.0) * v6.zx;
                r2.z = _586.x;
                r2.w = _586.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r0.w = r1.x + r2.x;
                vec2 _608 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r1.x = _608.x;
                r1.y = _608.y;
                vec2 _615 = vec2(1.0, 0.0) * v6.zx;
                r1.z = _615.x;
                r1.w = _615.y;
                r1 = OptTex7Lod( r1.xy, r1.w);
                r0.w += r1.x;
                vec2 _637 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r1.x = _637.x;
                r1.y = _637.y;
                vec2 _644 = vec2(1.0, 0.0) * v6.zx;
                r1.z = _644.x;
                r1.w = _644.y;
                r1 = OptTex7Lod( r1.xy, r1.w);
                r0.w += r1.x;
                vec2 _666 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r1.x = _666.x;
                r1.y = _666.y;
                vec2 _673 = vec2(1.0, 0.0) * v6.zx;
                r1.z = _673.x;
                r1.w = _673.y;
                r1 = OptTex7Lod( r1.xy, r1.w);
                r0.y = r0.w + r1.x;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r0.y = v4.w;
                r0.z = v5.w;
                vec2 _705 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r1.x = _705.x;
                r1.w = _705.y;
                r1.y = (v5.w * 0.5) + 0.5;
                r1.z = v6.w;
                r2 = OptTex8Lod( r1.xy, r1.w);
                vec2 _730 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _730.x;
                r4.y = _730.y;
                r4.z = r1.zw.x;
                r4.w = r1.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r0.w = r2.x + r5.x;
                vec2 _758 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _758.x;
                r4.y = _758.y;
                r2 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r2.x;
                vec2 _780 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _780.x;
                r4.y = _780.y;
                r2 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r2.x;
                vec2 _802 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _802.x;
                r4.y = _802.y;
                r1 = OptTex8Lod( r4.xy, r4.w);
                r0.w += r1.x;
                r1.x = max(abs(r0.y), abs(r0.z));
                r0.y = clamp((r1.x * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.z = (r0.w * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.y * r0.z) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _858 = r0;
    vec3 _860 = r3.xyz * _858.yyy;
    r0.y = _860.x;
    r0.z = _860.y;
    r0.w = _860.z;
    vec4 _867 = r0;
    vec3 _871 = _867.yzw * v0.xyz;
    r0.y = _871.x;
    r0.z = _871.y;
    r0.w = _871.z;
    vec4 _878 = r0;
    vec4 _880 = r0;
    vec3 _882 = _878.yzw + _880.yzw;
    r0.y = _882.x;
    r0.z = _882.y;
    r0.w = _882.z;
    vec3 _893 = r3.www * v1.xyz;
    r1.x = _893.x;
    r1.y = _893.y;
    r1.z = _893.z;
    vec4 _902 = r0;
    vec4 _905 = r0;
    vec3 _907 = (r1.xyz * _902.xxx) + _905.yzw;
    r0.x = _907.x;
    r0.y = _907.y;
    r0.z = _907.z;
    vec4 _914 = r0;
    vec3 _921 = _914.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _921.x;
    r0.y = _921.y;
    r0.z = _921.z;
    vec3 _936 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _936.x;
    oC0.y = _936.y;
    oC0.z = _936.z;
    oC0.w = 1.0;
    bool _949 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _957;
    if (_949)
    {
        _957 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _957 = _949;
    }
    if (_957)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
