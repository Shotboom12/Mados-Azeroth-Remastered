#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
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
    r0 = OptTex0( v2.xyz);
    r1.x = max(abs(v3.x), abs(v3.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v3.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _111 = (v3.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _111.x;
        r1.z = _111.y;
        vec2 _133 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _133.x;
        r3.y = _133.y;
        vec2 _141 = vec2(1.0, 0.0) * v3.zx;
        r3.z = _141.x;
        r3.w = _141.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _164 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _164.x;
        r2.y = _164.y;
        vec2 _171 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _171.x;
        r2.w = _171.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _194 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _194.x;
        r2.y = _194.y;
        vec2 _201 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _201.x;
        r2.w = _201.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _224 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _224.x;
        r2.y = _224.y;
        vec2 _231 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _231.x;
        r2.w = _231.y;
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
        vec2 _291 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _291.x;
        r1.z = _291.y;
        vec2 _301 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _301.x;
        r3.y = _301.y;
        vec2 _308 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _308.x;
        r3.w = _308.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _330 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _330.x;
        r2.y = _330.y;
        vec2 _337 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _337.x;
        r2.w = _337.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _359 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _359.x;
        r2.y = _359.y;
        vec2 _366 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _366.x;
        r2.w = _366.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _388 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _388.x;
        r2.y = _388.y;
        vec2 _395 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _395.x;
        r2.w = _395.y;
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
            vec2 _444 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _444.x;
            r1.w = _444.y;
            vec2 _454 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _454.x;
            r3.y = _454.y;
            vec2 _461 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _461.x;
            r3.w = _461.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _483 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _483.x;
            r3.y = _483.y;
            vec2 _490 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _490.x;
            r3.w = _490.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _512 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _512.x;
            r3.y = _512.y;
            vec2 _519 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _519.x;
            r3.w = _519.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _541 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _541.x;
            r3.y = _541.y;
            vec2 _548 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _548.x;
            r3.w = _548.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v3.w;
            r1.w = v4.w;
            vec2 _580 = (v3.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = _580.x;
            r2.w = _580.y;
            r2.y = (v4.w * 0.5) + 0.5;
            r2.z = v5.w;
            r3 = OptTex8Lod( r2.xy, r2.w);
            vec2 _605 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _605.x;
            r4.y = _605.y;
            r4.z = r2.zw.x;
            r4.w = r2.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r2.z = r3.x + r5.x;
            vec2 _633 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _633.x;
            r4.y = _633.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _655 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _655.x;
            r4.y = _655.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _677 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _677.x;
            r4.y = _677.y;
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
    vec4 _735 = r0;
    vec3 _739 = _735.xyz * r1.xxx;
    r0.x = _739.x;
    r0.y = _739.y;
    r0.z = _739.z;
    vec4 _746 = r0;
    vec3 _750 = _746.xyz * v0.xyz;
    r0.x = _750.x;
    r0.y = _750.y;
    r0.z = _750.z;
    vec4 _757 = r0;
    vec4 _759 = r0;
    vec3 _761 = _757.xyz + _759.xyz;
    r0.x = _761.x;
    r0.y = _761.y;
    r0.z = _761.z;
    vec3 _772 = r0.www * v1.xyz;
    r1.x = _772.x;
    r1.y = _772.y;
    r1.z = _772.z;
    vec4 _784 = r0;
    vec3 _786 = (r1.xyz * r2.xxx) + _784.xyz;
    r0.x = _786.x;
    r0.y = _786.y;
    r0.z = _786.z;
    vec4 _793 = r0;
    vec3 _800 = _793.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _800.x;
    r0.y = _800.y;
    r0.z = _800.z;
    vec3 _815 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _815.x;
    oC0.y = _815.y;
    oC0.z = _815.z;
    oC0.w = 1.0;
    bool _828 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _836;
    if (_828)
    {
        _836 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _836 = _828;
    }
    if (_836)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
