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
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _125 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _125.x;
        r0.z = _125.y;
        vec2 _147 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _147.x;
        r2.y = _147.y;
        vec2 _155 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _155.x;
        r2.w = _155.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.w = r1.x + r2.x;
        vec2 _178 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _178.x;
        r1.y = _178.y;
        vec2 _185 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _185.x;
        r1.w = _185.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _208 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _208.x;
        r1.y = _208.y;
        vec2 _215 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _215.x;
        r1.w = _215.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _238 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _238.x;
        r1.y = _238.y;
        vec2 _245 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _245.x;
        r1.w = _245.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.y = r0.w + r1.x;
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
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex6Lod( r1.xy, r1.w);
        vec2 _305 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _305.x;
        r0.z = _305.y;
        vec2 _315 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _315.x;
        r2.y = _315.y;
        vec2 _322 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _322.x;
        r2.w = _322.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r0.w = r1.x + r2.x;
        vec2 _344 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _344.x;
        r1.y = _344.y;
        vec2 _351 = vec2(1.0, 0.0) * v5.zx;
        r1.z = _351.x;
        r1.w = _351.y;
        r1 = OptTex6Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _373 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _373.x;
        r1.y = _373.y;
        vec2 _380 = vec2(1.0, 0.0) * v5.zx;
        r1.z = _380.x;
        r1.w = _380.y;
        r1 = OptTex6Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _402 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _402.x;
        r1.y = _402.y;
        vec2 _409 = vec2(1.0, 0.0) * v5.zx;
        r1.z = _409.x;
        r1.w = _409.y;
        r1 = OptTex6Lod( r1.xy, r1.w);
        r0.y = r0.w + r1.x;
        r0.y *= 0.20000000298023223876953125;
    }
    else
    {
        r0.z = max(abs(v6.x), abs(v6.y));
        if (r0.z < 1.0)
        {
            r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r1 = OptTex7Lod( r1.xy, r1.w);
            vec2 _458 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.z = _458.x;
            r0.w = _458.y;
            vec2 _468 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = _468.x;
            r2.y = _468.y;
            vec2 _475 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _475.x;
            r2.w = _475.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _497 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _497.x;
            r2.y = _497.y;
            vec2 _504 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _504.x;
            r2.w = _504.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _526 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _526.x;
            r2.y = _526.y;
            vec2 _533 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _533.x;
            r2.w = _533.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _555 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _555.x;
            r2.y = _555.y;
            vec2 _562 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _562.x;
            r2.w = _562.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r0.z = r1.x + r2.x;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r0.z = v4.w;
            r0.w = v5.w;
            vec2 _594 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r1.x = _594.x;
            r1.w = _594.y;
            r1.y = (v5.w * 0.5) + 0.5;
            r1.z = v6.w;
            r2 = OptTex8Lod( r1.xy, r1.w);
            vec2 _619 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _619.x;
            r4.y = _619.y;
            r4.z = r1.zw.x;
            r4.w = r1.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r1.z = r2.x + r5.x;
            vec2 _647 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _647.x;
            r4.y = _647.y;
            r2 = OptTex8Lod( r4.xy, r4.w);
            r1.z += r2.x;
            vec2 _669 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _669.x;
            r4.y = _669.y;
            r2 = OptTex8Lod( r4.xy, r4.w);
            r1.z += r2.x;
            vec2 _691 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _691.x;
            r4.y = _691.y;
            r2 = OptTex8Lod( r4.xy, r4.w);
            r1.x = r1.z + r2.x;
            r1.y = max(abs(r0.z), abs(r0.w));
            r0.z = clamp((r1.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r0.w = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r0.y = (r0.z * r0.w) + 1.0;
        }
    }
    r1.x = min(r0.y, r0.x);
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _752 = r0;
    vec3 _754 = r3.xyz * _752.xxx;
    r0.x = _754.x;
    r0.y = _754.y;
    r0.z = _754.z;
    vec4 _761 = r0;
    vec3 _765 = _761.xyz * v0.xyz;
    r0.x = _765.x;
    r0.y = _765.y;
    r0.z = _765.z;
    vec4 _772 = r0;
    vec4 _774 = r0;
    vec3 _776 = _772.xyz + _774.xyz;
    r0.x = _776.x;
    r0.y = _776.y;
    r0.z = _776.z;
    vec3 _787 = r3.www * v1.xyz;
    r1.y = _787.x;
    r1.z = _787.y;
    r1.w = _787.z;
    vec4 _799 = r0;
    vec3 _801 = (r1.yzw * r1.xxx) + _799.xyz;
    r0.x = _801.x;
    r0.y = _801.y;
    r0.z = _801.z;
    vec4 _808 = r0;
    vec3 _815 = _808.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _815.x;
    r0.y = _815.y;
    r0.z = _815.z;
    vec3 _830 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _830.x;
    oC0.y = _830.y;
    oC0.z = _830.z;
    oC0.w = 1.0;
    bool _843 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _851;
    if (_843)
    {
        _851 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _851 = _843;
    }
    if (_851)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
