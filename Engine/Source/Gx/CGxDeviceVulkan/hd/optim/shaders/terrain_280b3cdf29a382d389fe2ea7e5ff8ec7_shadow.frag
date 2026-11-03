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
    vec2 _80 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r3.x = _80.x;
    r3.y = _80.y;
    vec3 _93 = v0.xyz + v0.xyz;
    r4.x = _93.x;
    r4.y = _93.y;
    r4.z = _93.z;
    vec3 _105 = r0.xyz * r4.xyz;
    r5.x = _105.x;
    r5.y = _105.y;
    r5.z = _105.z;
    vec4 _114 = r0;
    vec3 _123 = mix(r5.xyz, _114.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = _123.x;
    r0.y = _123.y;
    r0.z = _123.z;
    vec3 _134 = r1.xyz * r4.xyz;
    r3.x = _134.x;
    r3.z = _134.y;
    r3.w = _134.z;
    vec4 _144 = r1;
    vec3 _150 = mix(r3.xzw, _144.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = _150.x;
    r1.y = _150.y;
    r1.z = _150.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _227 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _227.x;
        r1.z = _227.y;
        vec2 _238 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _238.x;
        r3.y = _238.y;
        vec2 _246 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _246.x;
        r3.w = _246.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _269 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _269.x;
        r2.y = _269.y;
        vec2 _276 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _276.x;
        r2.w = _276.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _299 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _299.x;
        r2.y = _299.y;
        vec2 _306 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _306.x;
        r2.w = _306.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _329 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _329.x;
        r2.y = _329.y;
        vec2 _336 = vec2(1.0, 0.0) * v4.zx;
        r2.z = _336.x;
        r2.w = _336.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.y = r1.w + r2.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
    }
    else
    {
        r1.x = 1.0;
    }
    r1.y = max(abs(v5.x), abs(v5.y));
    if (r1.y < 1.0)
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex6Lod( r2.xy, r2.w);
        vec2 _396 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _396.x;
        r1.z = _396.y;
        vec2 _406 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _406.x;
        r3.y = _406.y;
        vec2 _413 = vec2(1.0, 0.0) * v5.zx;
        r3.z = _413.x;
        r3.w = _413.y;
        r3 = OptTex6Lod( r3.xy, r3.w);
        r1.w = r2.x + r3.x;
        vec2 _435 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _435.x;
        r2.y = _435.y;
        vec2 _442 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _442.x;
        r2.w = _442.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _464 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _464.x;
        r2.y = _464.y;
        vec2 _471 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _471.x;
        r2.w = _471.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _493 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _493.x;
        r2.y = _493.y;
        vec2 _500 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _500.x;
        r2.w = _500.y;
        r2 = OptTex6Lod( r2.xy, r2.w);
        r1.y = r1.w + r2.x;
        r1.y *= 0.20000000298023223876953125;
    }
    else
    {
        r1.z = max(abs(v6.x), abs(v6.y));
        if (r1.z < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex7Lod( r2.xy, r2.w);
            vec2 _549 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.z = _549.x;
            r1.w = _549.y;
            vec2 _559 = r1.zw + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _559.x;
            r3.y = _559.y;
            vec2 _566 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _566.x;
            r3.w = _566.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _588 = r1.zw + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _588.x;
            r3.y = _588.y;
            vec2 _595 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _595.x;
            r3.w = _595.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _617 = r1.zw + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _617.x;
            r3.y = _617.y;
            vec2 _624 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _624.x;
            r3.w = _624.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r2.x += r3.x;
            vec2 _646 = r1.zw + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _646.x;
            r3.y = _646.y;
            vec2 _653 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _653.x;
            r3.w = _653.y;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r1.z = r2.x + r3.x;
            r1.y = r1.z * 0.20000000298023223876953125;
        }
        else
        {
            r1.z = v4.w;
            r1.w = v5.w;
            vec2 _685 = (v4.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r2.x = _685.x;
            r2.w = _685.y;
            r2.y = (v5.w * 0.5) + 0.5;
            r2.z = v6.w;
            r3 = OptTex8Lod( r2.xy, r2.w);
            vec2 _710 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
            r4.x = _710.x;
            r4.y = _710.y;
            r4.z = r2.zw.x;
            r4.w = r2.zw.y;
            r5 = OptTex8Lod( r4.xy, r4.w);
            r2.z = r3.x + r5.x;
            vec2 _738 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _738.x;
            r4.y = _738.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _760 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _760.x;
            r4.y = _760.y;
            r3 = OptTex8Lod( r4.xy, r4.w);
            r2.z += r3.x;
            vec2 _782 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _782.x;
            r4.y = _782.y;
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
    vec3 _844 = r0.www * v1.xyz;
    r1.y = _844.x;
    r1.z = _844.y;
    r1.w = _844.z;
    vec4 _853 = r1;
    vec3 _855 = r2.xxx * _853.yzw;
    r1.y = _855.x;
    r1.z = _855.y;
    r1.w = _855.z;
    vec4 _862 = r0;
    vec3 _869 = (_862.xyz * r1.xxx) + r1.yzw;
    r0.x = _869.x;
    r0.y = _869.y;
    r0.z = _869.z;
    vec4 _876 = r0;
    vec3 _883 = _876.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _883.x;
    r0.y = _883.y;
    r0.z = _883.z;
    vec3 _898 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _898.x;
    oC0.y = _898.y;
    oC0.z = _898.z;
    oC0.w = 1.0;
    bool _910 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _918;
    if (_910)
    {
        _918 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _918 = _910;
    }
    if (_918)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
