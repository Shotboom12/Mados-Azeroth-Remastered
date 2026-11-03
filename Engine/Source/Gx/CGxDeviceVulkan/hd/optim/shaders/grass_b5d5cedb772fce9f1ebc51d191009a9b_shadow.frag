#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];

vec4 oC0;
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
    r0.w = ((-r0.w) >= 0.0) ? 0.0 : 1.0;
    if (r0.w != (-r0.w))
    {
        if (10.0 < v3.z)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r1 = OptTex4Lod( r1.xy, r1.w);
            vec2 _127 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _127.x;
            r1.z = _127.y;
            vec2 _148 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _148.x;
            r2.y = _148.y;
            vec2 _156 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _156.x;
            r2.w = _156.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r0.w = r1.x + r2.x;
            vec2 _179 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _179.x;
            r2.y = _179.y;
            vec2 _186 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _186.x;
            r2.w = _186.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r0.w += r2.x;
            vec2 _209 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _209.x;
            r2.y = _209.y;
            vec2 _216 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _216.x;
            r2.w = _216.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r0.w += r2.x;
            vec4 _233 = r1;
            vec2 _239 = _233.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = _239.x;
            r1.y = _239.y;
            vec2 _246 = vec2(1.0, 0.0) * v5.zx;
            r1.z = _246.x;
            r1.w = _246.y;
            r1 = OptTex4Lod( r1.xy, r1.w);
            r0.w += r1.x;
            r0.w *= 0.20000000298023223876953125;
        }
        else
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r1 = OptTex4Lod( r1.xy, r1.w);
            vec2 _282 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _282.x;
            r1.z = _282.y;
            vec2 _292 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _292.x;
            r2.y = _292.y;
            vec2 _299 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _299.x;
            r2.w = _299.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _321 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _321.x;
            r2.y = _321.y;
            vec2 _328 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _328.x;
            r2.w = _328.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _350 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _350.x;
            r2.y = _350.y;
            vec2 _357 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _357.x;
            r2.w = _357.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _379 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r2.x = _379.x;
            r2.y = _379.y;
            vec2 _386 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _386.x;
            r2.w = _386.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.x += r2.x;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
    }
    else
    {
        r0.w = 1.0;
    }
    r1.x = dot(v3.xyz, optRegs.rows[optTile*82u+uint(3)].xyz);
    r1.x = clamp(r1.x + optRegs.rows[optTile*82u+uint(3)].w, 0.0, 1.0);
    r2.x = mix(r0.w, 1.0, r1.x);
    r0.w = max(abs(v6.x), abs(v6.y));
    if (r0.w < 1.0)
    {
        r1 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _459 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _459.x;
        r1.z = _459.y;
        vec2 _469 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _469.x;
        r3.y = _469.y;
        vec2 _476 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _476.x;
        r3.w = _476.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r0.w = r1.x + r3.x;
        vec2 _498 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = _498.x;
        r3.y = _498.y;
        vec2 _505 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _505.x;
        r3.w = _505.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r0.w += r3.x;
        vec2 _527 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = _527.x;
        r3.y = _527.y;
        vec2 _534 = vec2(1.0, 0.0) * v6.zx;
        r3.z = _534.x;
        r3.w = _534.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r0.w += r3.x;
        vec4 _551 = r1;
        vec2 _556 = _551.yz + optRegs.rows[optTile*82u+uint(11)].xy;
        r1.x = _556.x;
        r1.y = _556.y;
        vec2 _563 = vec2(1.0, 0.0) * v6.zx;
        r1.z = _563.x;
        r1.w = _563.y;
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
            vec2 _612 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _612.x;
            r1.z = _612.y;
            vec2 _622 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _622.x;
            r3.y = _622.y;
            vec2 _629 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _629.x;
            r3.w = _629.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _651 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _651.x;
            r3.y = _651.y;
            vec2 _658 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _658.x;
            r3.w = _658.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _680 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _680.x;
            r3.y = _680.y;
            vec2 _687 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _687.x;
            r3.w = _687.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _709 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r3.x = _709.x;
            r3.y = _709.y;
            vec2 _716 = vec2(1.0, 0.0) * v7.zx;
            r3.z = _716.x;
            r3.w = _716.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.x += r3.x;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
        else
        {
            vec2 _742 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
            r1.x = _742.x;
            r1.w = _742.y;
            r1.y = (v6.w * 0.5) + 0.5;
            r1.z = v7.w;
            r3 = OptTex7Lod( r1.xy, r1.w);
            vec2 _767 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r4.x = _767.x;
            r4.y = _767.y;
            r4.z = r1.zw.x;
            r4.w = r1.zw.y;
            r5 = OptTex7Lod( r4.xy, r4.w);
            r1.z = r3.x + r5.x;
            vec2 _795 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _795.x;
            r4.y = _795.y;
            r3 = OptTex7Lod( r4.xy, r4.w);
            r1.z += r3.x;
            vec2 _817 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _817.x;
            r4.y = _817.y;
            r3 = OptTex7Lod( r4.xy, r4.w);
            r1.z += r3.x;
            vec2 _839 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r4.x = _839.x;
            r4.y = _839.y;
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
    vec3 _942 = r0.www * v0.xyz;
    r1.x = _942.x;
    r1.y = _942.y;
    r1.z = _942.z;
    vec4 _949 = r0;
    vec3 _959 = (_949.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _959.x;
    r0.y = _959.y;
    r0.z = _959.z;
    vec3 _974 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _974.x;
    oC0.y = _974.y;
    oC0.z = _974.z;
    bool _984 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _992;
    if (_984)
    {
        _992 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _992 = _984;
    }
    if (_992)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
