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
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v3.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _107 = (v3.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _107.x;
        r1.z = _107.y;
        vec2 _129 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _129.x;
        r3.y = _129.y;
        vec2 _137 = vec2(1.0, 0.0) * v3.zx;
        r3.z = _137.x;
        r3.w = _137.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _160 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _160.x;
        r2.y = _160.y;
        vec2 _167 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _167.x;
        r2.w = _167.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _190 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _190.x;
        r2.y = _190.y;
        vec2 _197 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _197.x;
        r2.w = _197.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _220 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _220.x;
        r2.y = _220.y;
        vec2 _227 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _227.x;
        r2.w = _227.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.y = r1.w + r2.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
    }
    else
    {
        r1.x = 1.0;
    }
    r1.y = max(abs(v4.x), abs(v4.y));
    if (r1.y < 1.0)
    {
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex6Lod( r2.xy, r2.w);
        vec2 _287 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _287.x;
        r1.z = _287.y;
        vec2 _297 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _297.x;
        r3.y = _297.y;
        vec2 _304 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _304.x;
        r3.w = _304.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _326 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _326.x;
        r2.y = _326.y;
        vec2 _333 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _333.x;
        r2.w = _333.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _355 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _355.x;
        r2.y = _355.y;
        vec2 _362 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _362.x;
        r2.w = _362.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _384 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _384.x;
        r2.y = _384.y;
        vec2 _391 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _391.x;
        r2.w = _391.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v5.x), abs(v5.y));
        if (r1.z < 1.0)
        {
            r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex7Lod( r2.xy, r2.w);
            vec2 _440 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _440.x;
            r1.w = _440.y;
            vec2 _450 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _450.x;
            r3.y = _450.y;
            vec2 _457 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _457.x;
            r3.w = _457.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _479 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _479.x;
            r3.y = _479.y;
            vec2 _486 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _486.x;
            r3.w = _486.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _508 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _508.x;
            r3.y = _508.y;
            vec2 _515 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _515.x;
            r3.w = _515.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _537 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _537.x;
            r3.y = _537.y;
            vec2 _544 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _544.x;
            r3.w = _544.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v3.w;
            r1.w = v4.w;
            vec2 _576 = (v3.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = _576.x;
            r2.w = _576.y;
            r2.y = (v4.w * 0.5) + 0.5;
            r2.z = v5.w;
            r3 = OptTex8Lod( r2.xy, r2.w);
            vec2 _601 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _601.x;
            r4.y = _601.y;
            r4.z = r2.zw.x;
            r4.w = r2.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r2.z = r3.x + r5.x;
            vec2 _629 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _629.x;
            r4.y = _629.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _651 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _651.x;
            r4.y = _651.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _673 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _673.x;
            r4.y = _673.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.x = r2.z + r3.x;
            r2.y = max(abs(r1.z), abs(r1.w));
            r1.z = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.w = (r2.x * 0.20000000298023223876953125) + (-1.0);
            r1.y = (r1.z * r1.w) + 1.0;
        }
    }
    r2.x = min(r1.y, r1.x);
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _732 = r0;
    vec3 _736 = _732.xyz * r1.xxx;
    r0.x = _736.x;
    r0.y = _736.y;
    r0.z = _736.z;
    vec4 _743 = r0;
    vec3 _747 = _743.xyz * v0.xyz;
    r0.x = _747.x;
    r0.y = _747.y;
    r0.z = _747.z;
    vec4 _754 = r0;
    vec4 _756 = r0;
    vec3 _758 = _754.xyz + _756.xyz;
    r0.x = _758.x;
    r0.y = _758.y;
    r0.z = _758.z;
    vec3 _769 = r0.www * v1.xyz;
    r1.x = _769.x;
    r1.y = _769.y;
    r1.z = _769.z;
    vec4 _781 = r0;
    vec3 _783 = (r1.xyz * r2.xxx) + _781.xyz;
    r0.x = _783.x;
    r0.y = _783.y;
    r0.z = _783.z;
    vec4 _790 = r0;
    vec3 _797 = _790.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _797.x;
    r0.y = _797.y;
    r0.z = _797.z;
    vec3 _812 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _812.x;
    oC0.y = _812.y;
    oC0.z = _812.z;
    oC0.w = 1.0;
    bool _825 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _833;
    if (_825)
    {
        _833 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _833 = _825;
    }
    if (_833)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
