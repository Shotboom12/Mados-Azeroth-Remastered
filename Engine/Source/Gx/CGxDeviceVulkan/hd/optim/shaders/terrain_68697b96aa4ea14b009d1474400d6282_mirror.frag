#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
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
    r1.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _75 = r0.xyz * v0.xyz;
    r1.y = _75.x;
    r1.z = _75.y;
    r1.w = _75.z;
    vec4 _85 = r1;
    vec4 _87 = r1;
    vec3 _89 = _85.yzw + _87.yzw;
    r1.y = _89.x;
    r1.z = _89.y;
    r1.w = _89.z;
    vec4 _98 = r0;
    vec3 _107 = mix(r1.yzw, _98.xyz, greaterThanEqual(-r1.xxx, vec3(0.0)));
    r0.x = _107.x;
    r0.y = _107.y;
    r0.z = _107.z;
    r1.x = max(abs(v3.x), abs(v3.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v3.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _163 = (v3.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _163.x;
        r1.z = _163.y;
        vec2 _175 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _175.x;
        r2.y = _175.y;
        vec2 _183 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _183.x;
        r2.w = _183.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _206 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _206.x;
        r2.y = _206.y;
        vec2 _213 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _213.x;
        r2.w = _213.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _236 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _236.x;
        r2.y = _236.y;
        vec2 _243 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _243.x;
        r2.w = _243.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _266 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _266.x;
        r2.y = _266.y;
        vec2 _273 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _273.x;
        r2.w = _273.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _296 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _296.x;
        r2.y = _296.y;
        vec2 _303 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _303.x;
        r2.w = _303.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _326 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _326.x;
        r2.y = _326.y;
        vec2 _333 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _333.x;
        r2.w = _333.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _356 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _356.x;
        r2.y = _356.y;
        vec2 _363 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _363.x;
        r2.w = _363.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _386 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _386.x;
        r2.y = _386.y;
        vec2 _393 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _393.x;
        r2.w = _393.y;
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
            vec2 _443 = (v4.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _443.x;
            r1.z = _443.y;
            vec2 _453 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _453.x;
            r3.y = _453.y;
            vec2 _460 = vec2(1.0, 0.0) * v4.zx;
            r3.z = _460.x;
            r3.w = _460.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _482 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _482.x;
            r2.y = _482.y;
            vec2 _489 = vec2(1.0, 0.0) * v4.zx;
            r2.z = _489.x;
            r2.w = _489.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _511 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _511.x;
            r2.y = _511.y;
            vec2 _518 = vec2(1.0, 0.0) * v4.zx;
            r2.z = _518.x;
            r2.w = _518.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _540 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _540.x;
            r2.y = _540.y;
            vec2 _547 = vec2(1.0, 0.0) * v4.zx;
            r2.z = _547.x;
            r2.w = _547.y;
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
                vec2 _597 = (v5.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _597.x;
                r1.z = _597.y;
                vec2 _607 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _607.x;
                r3.y = _607.y;
                vec2 _614 = vec2(1.0, 0.0) * v5.zx;
                r3.z = _614.x;
                r3.w = _614.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _636 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _636.x;
                r2.y = _636.y;
                vec2 _643 = vec2(1.0, 0.0) * v5.zx;
                r2.z = _643.x;
                r2.w = _643.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _665 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _665.x;
                r2.y = _665.y;
                vec2 _672 = vec2(1.0, 0.0) * v5.zx;
                r2.z = _672.x;
                r2.w = _672.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _694 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _694.x;
                r2.y = _694.y;
                vec2 _701 = vec2(1.0, 0.0) * v5.zx;
                r2.z = _701.x;
                r2.w = _701.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v3.w;
                r1.z = v4.w;
                vec2 _733 = (v3.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _733.x;
                r2.w = _733.y;
                r2.y = (v4.w * 0.5) + 0.5;
                r2.z = v5.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _758 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _758.x;
                r4.y = _758.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _786 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _786.x;
                r4.y = _786.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _808 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _808.x;
                r4.y = _808.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _830 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _830.x;
                r4.y = _830.y;
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
    vec3 _887 = r0.www * v1.xyz;
    r2.x = _887.x;
    r2.y = _887.y;
    r2.z = _887.z;
    vec4 _894 = r1;
    vec3 _898 = _894.xxx * r2.xyz;
    r1.x = _898.x;
    r1.z = _898.y;
    r1.w = _898.z;
    vec4 _905 = r0;
    vec3 _912 = (_905.xyz * r1.yyy) + r1.xzw;
    r0.x = _912.x;
    r0.y = _912.y;
    r0.z = _912.z;
    vec4 _919 = r0;
    vec3 _926 = _919.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _926.x;
    r0.y = _926.y;
    r0.z = _926.z;
    vec3 _941 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _941.x;
    oC0.y = _941.y;
    oC0.z = _941.z;
    oC0.w = 1.0;
    bool _952 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _960;
    if (_952)
    {
        _960 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _960 = _952;
    }
    if (_960)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
