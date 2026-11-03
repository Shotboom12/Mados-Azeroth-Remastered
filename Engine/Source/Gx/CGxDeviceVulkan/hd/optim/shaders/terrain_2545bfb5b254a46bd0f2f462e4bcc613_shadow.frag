#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
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
    vec4 r6 = vec4(0.0);
    vec4 r7 = vec4(0.0);
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord4;
    vec4 v4 = texcoord5;
    vec4 v5 = texcoord6;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    r1.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _78 = r0.xyz * v0.xyz;
    r1.y = _78.x;
    r1.z = _78.y;
    r1.w = _78.z;
    vec4 _88 = r1;
    vec4 _90 = r1;
    vec3 _92 = _88.yzw + _90.yzw;
    r1.y = _92.x;
    r1.z = _92.y;
    r1.w = _92.z;
    vec4 _101 = r0;
    vec3 _110 = mix(r1.yzw, _101.xyz, greaterThanEqual(-r1.xxx, vec3(0.0)));
    r0.x = _110.x;
    r0.y = _110.y;
    r0.z = _110.z;
    r1.x = max(abs(v3.x), abs(v3.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        vec2 _154 = (v3.xy * vec2(0.5)) + vec2(0.5);
        r1.x = _154.x;
        r1.y = _154.y;
        vec2 _166 = r1.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _166.x;
        r2.y = _166.y;
        vec2 _177 = r1.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r3.x = _177.x;
        r3.y = _177.y;
        vec2 _188 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = _188.x;
        r4.y = _188.y;
        vec2 _199 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = _199.x;
        r5.y = _199.y;
        vec2 _210 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = _210.x;
        r6.y = _210.y;
        vec2 _221 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = _221.x;
        r7.y = _221.y;
        vec2 _232 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = _232.x;
        r8.y = _232.y;
        vec4 _237 = r1;
        vec2 _243 = _237.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r1.x = _243.x;
        r1.y = _243.y;
        r9 = (v3.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r9 = OptTex5Lod( r9.xy, r9.w);
        r2.z = 0.0;
        r2.w = 0.0;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r3.z = 0.0;
        r3.w = 0.0;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r4.z = 0.0;
        r4.w = 0.0;
        r4 = OptTex5Lod( r4.xy, r4.w);
        r5.z = 0.0;
        r5.w = 0.0;
        r5 = OptTex5Lod( r5.xy, r5.w);
        r6.z = 0.0;
        r6.w = 0.0;
        r6 = OptTex5Lod( r6.xy, r6.w);
        r7.z = 0.0;
        r7.w = 0.0;
        r7 = OptTex5Lod( r7.xy, r7.w);
        r8.z = 0.0;
        r8.w = 0.0;
        r8 = OptTex5Lod( r8.xy, r8.w);
        r1.z = 0.0;
        r1.w = 0.0;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r9.y = r2.x;
        r9.z = r3.x;
        r9.w = r4.x;
        r2 = r9 + (-v3.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r3 = r5 + (-v3.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r1.x += (-v3.z);
        r1.x = float(r1.x >= 0.0);
        r1.y = dot(r2, vec4(1.0));
        r1.z = dot(r3, vec4(1.0));
        r1.y += r1.z;
        r1.x += r1.y;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v4.x), abs(v4.y));
        if (r1.y < 1.0)
        {
            vec2 _432 = (v4.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _432.x;
            r1.z = _432.y;
            vec2 _442 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r2.x = _442.x;
            r2.y = _442.y;
            vec2 _452 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _452.x;
            r3.y = _452.y;
            vec2 _462 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _462.x;
            r4.y = _462.y;
            vec2 _472 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _472.x;
            r5.y = _472.y;
            r6 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r6 = OptTex6Lod( r6.xy, r6.w);
            r2.z = 0.0;
            r2.w = 0.0;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r3.z = 0.0;
            r3.w = 0.0;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r4.z = 0.0;
            r4.w = 0.0;
            r4 = OptTex6Lod( r4.xy, r4.w);
            r5.z = 0.0;
            r5.w = 0.0;
            r5 = OptTex6Lod( r5.xy, r5.w);
            r6.y = r2.x;
            r6.z = r3.x;
            r6.w = r4.x;
            r2 = r6 + (-v4.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.y = r5.x + (-v4.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.y += r1.z;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v5.x), abs(v5.y));
            if (r1.y < 1.0)
            {
                vec2 _588 = (v5.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _588.x;
                r1.z = _588.y;
                vec2 _598 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r2.x = _598.x;
                r2.y = _598.y;
                vec2 _608 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r3.x = _608.x;
                r3.y = _608.y;
                vec2 _618 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _618.x;
                r4.y = _618.y;
                vec2 _628 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = _628.x;
                r5.y = _628.y;
                r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r6 = OptTex7Lod( r6.xy, r6.w);
                r2.z = 0.0;
                r2.w = 0.0;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r3.z = 0.0;
                r3.w = 0.0;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r4.z = 0.0;
                r4.w = 0.0;
                r4 = OptTex7Lod( r4.xy, r4.w);
                r5.z = 0.0;
                r5.w = 0.0;
                r5 = OptTex7Lod( r5.xy, r5.w);
                r6.y = r2.x;
                r6.z = r3.x;
                r6.w = r4.x;
                r2 = r6 + (-v5.zzzz);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r1.y = r5.x + (-v5.z);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r2, vec4(1.0));
                r1.y += r1.z;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r2.x = v3.w;
                r2.y = v4.w;
                vec2 _736 = (r2.xy * vec2(0.5)) + vec2(0.5);
                r3.x = _736.x;
                r3.y = _736.y;
                vec2 _746 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _746.x;
                r4.y = _746.y;
                vec2 _756 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = _756.x;
                r5.y = _756.y;
                vec2 _766 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = _766.x;
                r6.y = _766.y;
                vec2 _776 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = _776.x;
                r7.y = _776.y;
                r3.z = 0.0;
                r3.w = 0.0;
                r3 = OptTex8Lod( r3.xy, r3.w);
                r4.z = 0.0;
                r4.w = 0.0;
                r4 = OptTex8Lod( r4.xy, r4.w);
                r5.z = 0.0;
                r5.w = 0.0;
                r5 = OptTex8Lod( r5.xy, r5.w);
                r6.z = 0.0;
                r6.w = 0.0;
                r6 = OptTex8Lod( r6.xy, r6.w);
                r7.z = 0.0;
                r7.w = 0.0;
                r7 = OptTex8Lod( r7.xy, r7.w);
                r3.y = r4.x;
                r3.z = r5.x;
                r3.w = r6.x;
                r3 += (-v5.wwww);
                r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
                r1.y = r7.x + (-v5.w);
                r1.y = float(r1.y >= 0.0);
                r1.z = dot(r3, vec4(1.0));
                r1.y += r1.z;
                r1.z = max(abs(r2.x), abs(r2.y));
                r1.z = clamp((r1.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
                r1.x = (r1.z * r1.y) + 1.0;
            }
        }
    }
    r1.y = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _910 = r0.www * v1.xyz;
    r2.x = _910.x;
    r2.y = _910.y;
    r2.z = _910.z;
    vec4 _917 = r1;
    vec3 _921 = _917.xxx * r2.xyz;
    r1.x = _921.x;
    r1.z = _921.y;
    r1.w = _921.z;
    vec4 _928 = r0;
    vec3 _935 = (_928.xyz * r1.yyy) + r1.xzw;
    r0.x = _935.x;
    r0.y = _935.y;
    r0.z = _935.z;
    vec4 _942 = r0;
    vec3 _949 = _942.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _949.x;
    r0.y = _949.y;
    r0.z = _949.z;
    vec3 _964 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _964.x;
    oC0.y = _964.y;
    oC0.z = _964.z;
    oC0.w = 1.0;
    bool _975 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _983;
    if (_975)
    {
        _983 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _983 = _975;
    }
    if (_983)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
