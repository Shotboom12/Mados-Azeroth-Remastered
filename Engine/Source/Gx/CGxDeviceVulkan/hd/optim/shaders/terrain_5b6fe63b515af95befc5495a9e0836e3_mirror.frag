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
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _129 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _129.x;
        r0.z = _129.y;
        vec2 _151 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _151.x;
        r2.y = _151.y;
        vec2 _159 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _159.x;
        r2.w = _159.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.w = r1.x + r2.x;
        vec2 _182 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _182.x;
        r1.y = _182.y;
        vec2 _189 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _189.x;
        r1.w = _189.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _212 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _212.x;
        r1.y = _212.y;
        vec2 _219 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _219.x;
        r1.w = _219.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _242 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _242.x;
        r1.y = _242.y;
        vec2 _249 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _249.x;
        r1.w = _249.y;
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
        vec2 _309 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _309.x;
        r0.z = _309.y;
        vec2 _319 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _319.x;
        r2.y = _319.y;
        vec2 _326 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _326.x;
        r2.w = _326.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r0.w = r1.x + r2.x;
        vec2 _348 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _348.x;
        r1.y = _348.y;
        vec2 _355 = vec2(1.0, 0.0) * v5.zx;
        r1.z = _355.x;
        r1.w = _355.y;
        r1 = OptTex6Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _377 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _377.x;
        r1.y = _377.y;
        vec2 _384 = vec2(1.0, 0.0) * v5.zx;
        r1.z = _384.x;
        r1.w = _384.y;
        r1 = OptTex6Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _406 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _406.x;
        r1.y = _406.y;
        vec2 _413 = vec2(1.0, 0.0) * v5.zx;
        r1.z = _413.x;
        r1.w = _413.y;
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
            vec2 _462 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r0.z = _462.x;
            r0.w = _462.y;
            vec2 _472 = r0.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = _472.x;
            r2.y = _472.y;
            vec2 _479 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _479.x;
            r2.w = _479.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _501 = r0.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _501.x;
            r2.y = _501.y;
            vec2 _508 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _508.x;
            r2.w = _508.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _530 = r0.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _530.x;
            r2.y = _530.y;
            vec2 _537 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _537.x;
            r2.w = _537.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _559 = r0.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _559.x;
            r2.y = _559.y;
            vec2 _566 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _566.x;
            r2.w = _566.y;
            r2 = OptTex7Lod( r2.xy, r2.w);
            r0.z = r1.x + r2.x;
            r0.y = r0.z * 0.20000000298023223876953125;
        }
        else
        {
            r0.z = v4.w;
            r0.w = v5.w;
            vec2 _598 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r1.x = _598.x;
            r1.w = _598.y;
            r1.y = (v5.w * 0.5) + 0.5;
            r1.z = v6.w;
            r2 = OptTex8Lod( r1.xy, r1.w);
            vec2 _623 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _623.x;
            r4.y = _623.y;
            r4.z = r1.zw.x;
            r4.w = r1.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r1.z = r2.x + r5.x;
            vec2 _651 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _651.x;
            r4.y = _651.y;
            r2 = OptTex8Lod( r4.xy, r4.w);
            r1.z += r2.x;
            vec2 _673 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _673.x;
            r4.y = _673.y;
            r2 = OptTex8Lod( r4.xy, r4.w);
            r1.z += r2.x;
            vec2 _695 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _695.x;
            r4.y = _695.y;
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
    vec4 _755 = r0;
    vec3 _757 = r3.xyz * _755.xxx;
    r0.x = _757.x;
    r0.y = _757.y;
    r0.z = _757.z;
    vec4 _764 = r0;
    vec3 _768 = _764.xyz * v0.xyz;
    r0.x = _768.x;
    r0.y = _768.y;
    r0.z = _768.z;
    vec4 _775 = r0;
    vec4 _777 = r0;
    vec3 _779 = _775.xyz + _777.xyz;
    r0.x = _779.x;
    r0.y = _779.y;
    r0.z = _779.z;
    vec3 _790 = r3.www * v1.xyz;
    r1.y = _790.x;
    r1.z = _790.y;
    r1.w = _790.z;
    vec4 _802 = r0;
    vec3 _804 = (r1.yzw * r1.xxx) + _802.xyz;
    r0.x = _804.x;
    r0.y = _804.y;
    r0.z = _804.z;
    vec4 _811 = r0;
    vec3 _818 = _811.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _818.x;
    r0.y = _818.y;
    r0.z = _818.z;
    vec3 _833 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _833.x;
    oC0.y = _833.y;
    oC0.z = _833.z;
    oC0.w = 1.0;
    bool _846 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _854;
    if (_846)
    {
        _854 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _854 = _846;
    }
    if (_854)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
