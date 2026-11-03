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
    vec4 r6 = vec4(0.0);
    vec4 r7 = vec4(0.0);
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
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
    r0.x = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.x != (-r0.x))
    {
        vec2 _119 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.x = _119.x;
        r0.y = _119.y;
        vec2 _140 = r0.xy + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = _140.x;
        r1.y = _140.y;
        vec2 _151 = r0.xy + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _151.x;
        r2.y = _151.y;
        vec2 _162 = r0.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = _162.x;
        r4.y = _162.y;
        vec2 _173 = r0.xy + optRegs.rows[optTile*82u+uint(6)].xy;
        r5.x = _173.x;
        r5.y = _173.y;
        vec2 _184 = r0.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r6.x = _184.x;
        r6.y = _184.y;
        vec2 _195 = r0.xy + optRegs.rows[optTile*82u+uint(8)].xy;
        r7.x = _195.x;
        r7.y = _195.y;
        vec2 _206 = r0.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r8.x = _206.x;
        r8.y = _206.y;
        vec4 _211 = r0;
        vec2 _217 = _211.xy + optRegs.rows[optTile*82u+uint(10)].xy;
        r0.x = _217.x;
        r0.y = _217.y;
        r9 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r9 = OptTex5Lod( r9.xy, r9.w);
        r1.z = 0.0;
        r1.w = 0.0;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r2.z = 0.0;
        r2.w = 0.0;
        r2 = OptTex5Lod( r2.xy, r2.w);
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
        r0.z = 0.0;
        r0.w = 0.0;
        r0 = OptTex5Lod( r0.xy, r0.w);
        r9.y = r1.x;
        r9.z = r2.x;
        r9.w = r4.x;
        r1 = r9 + (-v4.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r5.y = r6.x;
        r5.z = r7.x;
        r5.w = r8.x;
        r2 = r5 + (-v4.zzzz);
        r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
        r0.x += (-v4.z);
        r0.x = float(r0.x >= 0.0);
        r0.y = dot(r1, vec4(1.0));
        r0.z = dot(r2, vec4(1.0));
        r0.y += r0.z;
        r0.x += r0.y;
        r0.x *= 0.111111111938953399658203125;
    }
    else
    {
        r0.y = max(abs(v5.x), abs(v5.y));
        if (r0.y < 1.0)
        {
            vec2 _405 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r0.y = _405.x;
            r0.z = _405.y;
            vec2 _415 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r1.x = _415.x;
            r1.y = _415.y;
            vec2 _425 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _425.x;
            r2.y = _425.y;
            vec2 _435 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _435.x;
            r4.y = _435.y;
            vec2 _445 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _445.x;
            r5.y = _445.y;
            r6 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r6 = OptTex6Lod( r6.xy, r6.w);
            r1.z = 0.0;
            r1.w = 0.0;
            r1 = OptTex6Lod( r1.xy, r1.w);
            r2.z = 0.0;
            r2.w = 0.0;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r4.z = 0.0;
            r4.w = 0.0;
            r4 = OptTex6Lod( r4.xy, r4.w);
            r5.z = 0.0;
            r5.w = 0.0;
            r5 = OptTex6Lod( r5.xy, r5.w);
            r6.y = r1.x;
            r6.z = r2.x;
            r6.w = r4.x;
            r1 = r6 + (-v5.zzzz);
            r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
            r0.y = r5.x + (-v5.z);
            r0.y = float(r0.y >= 0.0);
            r0.z = dot(r1, vec4(1.0));
            r0.y += r0.z;
            r0.x = r0.y * 0.20000000298023223876953125;
        }
        else
        {
            r0.y = max(abs(v6.x), abs(v6.y));
            if (r0.y < 1.0)
            {
                vec2 _561 = (v6.xy * vec2(0.5)) + vec2(0.5);
                r0.y = _561.x;
                r0.z = _561.y;
                vec2 _571 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r1.x = _571.x;
                r1.y = _571.y;
                vec2 _581 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _581.x;
                r2.y = _581.y;
                vec2 _591 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _591.x;
                r4.y = _591.y;
                vec2 _601 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r5.x = _601.x;
                r5.y = _601.y;
                r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r6 = OptTex7Lod( r6.xy, r6.w);
                r1.z = 0.0;
                r1.w = 0.0;
                r1 = OptTex7Lod( r1.xy, r1.w);
                r2.z = 0.0;
                r2.w = 0.0;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r4.z = 0.0;
                r4.w = 0.0;
                r4 = OptTex7Lod( r4.xy, r4.w);
                r5.z = 0.0;
                r5.w = 0.0;
                r5 = OptTex7Lod( r5.xy, r5.w);
                r6.y = r1.x;
                r6.z = r2.x;
                r6.w = r4.x;
                r1 = r6 + (-v6.zzzz);
                r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
                r0.y = r5.x + (-v6.z);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r1, vec4(1.0));
                r0.y += r0.z;
                r0.x = r0.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.x = v4.w;
                r1.y = v5.w;
                vec2 _709 = (r1.xy * vec2(0.5)) + vec2(0.5);
                r2.x = _709.x;
                r2.y = _709.y;
                vec2 _719 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _719.x;
                r4.y = _719.y;
                vec2 _729 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r5.x = _729.x;
                r5.y = _729.y;
                vec2 _739 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r6.x = _739.x;
                r6.y = _739.y;
                vec2 _749 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r7.x = _749.x;
                r7.y = _749.y;
                r2.z = 0.0;
                r2.w = 0.0;
                r2 = OptTex8Lod( r2.xy, r2.w);
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
                r2.y = r4.x;
                r2.z = r5.x;
                r2.w = r6.x;
                r2 += (-v6.wwww);
                r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
                r0.y = r7.x + (-v6.w);
                r0.y = float(r0.y >= 0.0);
                r0.z = dot(r2, vec4(1.0));
                r0.y += r0.z;
                r0.z = max(abs(r1.x), abs(r1.y));
                r0.z = clamp((r0.z * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
                r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
                r0.x = (r0.z * r0.y) + 1.0;
            }
        }
    }
    r0.y = (r0.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _881 = r0;
    vec3 _883 = r3.xyz * _881.yyy;
    r0.y = _883.x;
    r0.z = _883.y;
    r0.w = _883.z;
    vec4 _890 = r0;
    vec3 _894 = _890.yzw * v0.xyz;
    r0.y = _894.x;
    r0.z = _894.y;
    r0.w = _894.z;
    vec4 _901 = r0;
    vec4 _903 = r0;
    vec3 _905 = _901.yzw + _903.yzw;
    r0.y = _905.x;
    r0.z = _905.y;
    r0.w = _905.z;
    vec3 _916 = r3.www * v1.xyz;
    r1.x = _916.x;
    r1.y = _916.y;
    r1.z = _916.z;
    vec4 _925 = r0;
    vec4 _928 = r0;
    vec3 _930 = (r1.xyz * _925.xxx) + _928.yzw;
    r0.x = _930.x;
    r0.y = _930.y;
    r0.z = _930.z;
    vec4 _937 = r0;
    vec3 _944 = _937.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _944.x;
    r0.y = _944.y;
    r0.z = _944.z;
    vec3 _959 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _959.x;
    oC0.y = _959.y;
    oC0.z = _959.z;
    oC0.w = 1.0;
    bool _972 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _980;
    if (_972)
    {
        _980 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _980 = _972;
    }
    if (_980)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
