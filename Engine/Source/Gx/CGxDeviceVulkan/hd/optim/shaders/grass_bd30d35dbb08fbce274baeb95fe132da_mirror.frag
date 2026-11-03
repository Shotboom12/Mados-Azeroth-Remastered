#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
layout(location = 6) in vec4 texcoord4;
layout(location = 7) in vec4 texcoord5;
layout(location = 10) in float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord3;
    vec4 v6 = texcoord4;
    vec4 v7 = texcoord5;
    vec4 v8 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xy);
    oC0.w = r0.w * v1.x;
    r0.w = max(abs(v5.x), abs(v5.y));
    r0.w = clamp((r0.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = (-r0.w) + 0.00999999977648258209228515625;
    r1.x = (r1.x >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        if (10.0 < v3.z)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r1 = OptTex4Lod( r1.xy, r1.w);
            vec2 _132 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _132.x;
            r1.z = _132.y;
            vec2 _153 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _153.x;
            r2.y = _153.y;
            vec2 _161 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _161.x;
            r2.w = _161.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _184 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _184.x;
            r2.y = _184.y;
            vec2 _191 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _191.x;
            r2.w = _191.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _214 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _214.x;
            r2.y = _214.y;
            vec2 _221 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _221.x;
            r2.w = _221.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _244 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r2.x = _244.x;
            r2.y = _244.y;
            vec2 _251 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _251.x;
            r2.w = _251.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.x += r2.x;
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r1.x = (r0.w * r1.x) + 1.0;
        }
        else
        {
            r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex4Lod( r2.xy, r2.w);
            vec2 _296 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _296.x;
            r1.z = _296.y;
            vec2 _306 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _306.x;
            r3.y = _306.y;
            vec2 _313 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _313.x;
            r3.w = _313.y;
            r3 = OptTex4Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _336 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
            r2.x = _336.x;
            r2.y = _336.y;
            vec2 _343 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _343.x;
            r2.w = _343.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _365 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _365.x;
            r2.y = _365.y;
            vec2 _372 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _372.x;
            r2.w = _372.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _395 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
            r2.x = _395.x;
            r2.y = _395.y;
            vec2 _402 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _402.x;
            r2.w = _402.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _424 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _424.x;
            r2.y = _424.y;
            vec2 _431 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _431.x;
            r2.w = _431.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _454 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
            r2.x = _454.x;
            r2.y = _454.y;
            vec2 _461 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _461.x;
            r2.w = _461.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _483 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r2.x = _483.x;
            r2.y = _483.y;
            vec2 _490 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _490.x;
            r2.w = _490.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _513 = r1.yz + optRegs.rows[optTile*82u+uint(12)].xy;
            r2.x = _513.x;
            r2.y = _513.y;
            vec2 _520 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _520.x;
            r2.w = _520.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.y = r1.w + r2.x;
            r1.y = (r1.y * 0.111111111938953399658203125) + (-1.0);
            r1.x = (r0.w * r1.y) + 1.0;
        }
    }
    else
    {
        r1.x = 1.0;
    }
    r0.w = dot(v3.xyz, optRegs.rows[optTile*82u+uint(3)].xyz);
    r0.w = clamp(r0.w + optRegs.rows[optTile*82u+uint(3)].w, 0.0, 1.0);
    r2.x = mix(r1.x, 1.0, r0.w);
    r0.w = max(abs(v6.x), abs(v6.y));
    if (r0.w < 1.0)
    {
        r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _602 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _602.x;
        r1.z = _602.y;
        vec2 _612 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _612.x;
        r3.y = _612.y;
        vec2 _619 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _619.x;
        r3.w = _619.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r0.w = r1.x + r3.x;
        vec2 _641 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = _641.x;
        r3.y = _641.y;
        vec2 _648 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _648.x;
        r3.w = _648.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r0.w += r3.x;
        vec2 _670 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = _670.x;
        r3.y = _670.y;
        vec2 _677 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _677.x;
        r3.w = _677.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r0.w += r3.x;
        vec4 _694 = r1;
        vec2 _699 = _694.yz + optRegs.rows[optTile*82u+uint(11)].xy;
        r1.x = _699.x;
        r1.y = _699.y;
        vec2 _706 = vec2(1.0, 0.0) * v6.zx;
        r1.z = _706.x;
        r1.w = _706.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        r0.w *= 0.20000000298023223876953125;
    }
    else
    {
        r1.x = max(abs(v7.x), abs(v7.y));
        if (r1.x < 1.0)
        {
            r1 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r1 = OptTex6Lod( r1.xy, r1.w);
            vec2 _755 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _755.x;
            r1.z = _755.y;
            vec2 _765 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _765.x;
            r3.y = _765.y;
            vec2 _772 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _772.x;
            r3.w = _772.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _794 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _794.x;
            r3.y = _794.y;
            vec2 _801 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _801.x;
            r3.w = _801.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _823 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _823.x;
            r3.y = _823.y;
            vec2 _830 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _830.x;
            r3.w = _830.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _852 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r3.x = _852.x;
            r3.y = _852.y;
            vec2 _859 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _859.x;
            r3.w = _859.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.x += r3.x;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
        else
        {
            vec2 _885 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r1.x = _885.x;
            r1.w = _885.y;
            r1.y = (v6.w * 0.5) + 0.5;
            r1.z = v7.w;
            r3 = OptTex7Lod( r1.xy, r1.w);
            vec2 _910 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _910.x;
            r4.y = _910.y;
            r4.z = r1.zw.x;
            r4.w = r1.zw.y;
            r5 = OptTex7Lod( r4.xy, r4.w);
            r1.z = r3.x + r5.x;
            vec2 _938 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _938.x;
            r4.y = _938.y;
            r3 = OptTex7Lod( r4.xy, r4.w);
            r1.z += r3.x;
            vec2 _960 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _960.x;
            r4.y = _960.y;
            r3 = OptTex7Lod( r4.xy, r4.w);
            r1.z += r3.x;
            vec2 _982 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r4.x = _982.x;
            r4.y = _982.y;
            r3 = OptTex7Lod( r4.xy, r4.w);
            r1.x = r1.z + r3.x;
            r1.y = v5.w;
            r1.z = v6.w;
            r2.y = max(abs(r1.y), abs(r1.z));
            r1.y = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r0.w = (r1.y * r1.x) + 1.0;
        }
    }
    r1.x = min(r0.w, r2.x);
    r0.w = dot(optRegs.rows[optTile*82u+uint(4)].xyz, v4.xyz);
    r0.w = (-abs(r0.w)) + 1.2000000476837158203125;
    r0.w *= r0.w;
    r0.w = clamp(r0.w * r0.w, 0.0, 1.0);
    r2.x = mix(r1.x, 1.0, r0.w);
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _1084 = r0.www * v0.xyz;
    r1.x = _1084.x;
    r1.y = _1084.y;
    r1.z = _1084.z;
    vec4 _1091 = r0;
    vec3 _1101 = (_1091.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _1101.x;
    r0.y = _1101.y;
    r0.z = _1101.z;
    vec3 _1116 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _1116.x;
    oC0.y = _1116.y;
    oC0.z = _1116.z;
    bool _1126 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1134;
    if (_1126)
    {
        _1134 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1134 = _1126;
    }
    if (_1134)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
