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
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v3.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _111 = (v3.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _111.x;
        r1.z = _111.y;
        vec2 _133 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _133.x;
        r2.y = _133.y;
        vec2 _141 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _141.x;
        r2.w = _141.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _164 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _164.x;
        r2.y = _164.y;
        vec2 _171 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _171.x;
        r2.w = _171.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _194 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _194.x;
        r2.y = _194.y;
        vec2 _201 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _201.x;
        r2.w = _201.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _224 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _224.x;
        r2.y = _224.y;
        vec2 _231 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _231.x;
        r2.w = _231.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _254 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _254.x;
        r2.y = _254.y;
        vec2 _261 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _261.x;
        r2.w = _261.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _284 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _284.x;
        r2.y = _284.y;
        vec2 _291 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _291.x;
        r2.w = _291.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _314 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _314.x;
        r2.y = _314.y;
        vec2 _321 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _321.x;
        r2.w = _321.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _344 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _344.x;
        r2.y = _344.y;
        vec2 _351 = vec2(1.0, 0.0) * v3.zx;
        r2.z = _351.x;
        r2.w = _351.y;
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
            vec2 _401 = (v4.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _401.x;
            r1.z = _401.y;
            vec2 _411 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _411.x;
            r3.y = _411.y;
            vec2 _418 = vec2(1.0, 0.0) * v4.zx;
            r3.z = _418.x;
            r3.w = _418.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _440 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _440.x;
            r2.y = _440.y;
            vec2 _447 = vec2(1.0, 0.0) * v4.zx;
            r2.z = _447.x;
            r2.w = _447.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _469 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _469.x;
            r2.y = _469.y;
            vec2 _476 = vec2(1.0, 0.0) * v4.zx;
            r2.z = _476.x;
            r2.w = _476.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _498 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _498.x;
            r2.y = _498.y;
            vec2 _505 = vec2(1.0, 0.0) * v4.zx;
            r2.z = _505.x;
            r2.w = _505.y;
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
                vec2 _555 = (v5.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _555.x;
                r1.z = _555.y;
                vec2 _565 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _565.x;
                r3.y = _565.y;
                vec2 _572 = vec2(1.0, 0.0) * v5.zx;
                r3.z = _572.x;
                r3.w = _572.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _594 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _594.x;
                r2.y = _594.y;
                vec2 _601 = vec2(1.0, 0.0) * v5.zx;
                r2.z = _601.x;
                r2.w = _601.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _623 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _623.x;
                r2.y = _623.y;
                vec2 _630 = vec2(1.0, 0.0) * v5.zx;
                r2.z = _630.x;
                r2.w = _630.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _652 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _652.x;
                r2.y = _652.y;
                vec2 _659 = vec2(1.0, 0.0) * v5.zx;
                r2.z = _659.x;
                r2.w = _659.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v3.w;
                r1.z = v4.w;
                vec2 _691 = (v3.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _691.x;
                r2.w = _691.y;
                r2.y = (v4.w * 0.5) + 0.5;
                r2.z = v5.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _716 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _716.x;
                r4.y = _716.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _744 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _744.x;
                r4.y = _744.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _766 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _766.x;
                r4.y = _766.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _788 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _788.x;
                r4.y = _788.y;
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
    vec4 _841 = r0;
    vec3 _845 = _841.xyz * r1.yyy;
    r0.x = _845.x;
    r0.y = _845.y;
    r0.z = _845.z;
    vec4 _852 = r0;
    vec3 _856 = _852.xyz * v0.xyz;
    r0.x = _856.x;
    r0.y = _856.y;
    r0.z = _856.z;
    vec4 _863 = r0;
    vec4 _865 = r0;
    vec3 _867 = _863.xyz + _865.xyz;
    r0.x = _867.x;
    r0.y = _867.y;
    r0.z = _867.z;
    vec3 _878 = r0.www * v1.xyz;
    r1.y = _878.x;
    r1.z = _878.y;
    r1.w = _878.z;
    vec4 _890 = r0;
    vec3 _892 = (r1.yzw * r1.xxx) + _890.xyz;
    r0.x = _892.x;
    r0.y = _892.y;
    r0.z = _892.z;
    vec4 _899 = r0;
    vec3 _906 = _899.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _906.x;
    r0.y = _906.y;
    r0.z = _906.z;
    vec3 _921 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _921.x;
    oC0.y = _921.y;
    oC0.z = _921.z;
    oC0.w = 1.0;
    bool _934 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _942;
    if (_934)
    {
        _942 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _942 = _934;
    }
    if (_942)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
