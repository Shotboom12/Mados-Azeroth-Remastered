#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];
layout(set=0,binding=8)uniform sampler2D s8[4];

vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
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
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
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
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = texcoord5;
    vec4 v7 = texcoord6;
    vec4 v8 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    r3 = OptTex3( v4.xy);
    r4 = OptTex4( v4.wz);
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _103 = v0.xyz + v0.xyz;
    r6.x = _103.x;
    r6.y = _103.y;
    r6.z = _103.z;
    vec3 _118 = r0.xyz * r6.xyz;
    r7.x = _118.x;
    r7.y = _118.y;
    r7.z = _118.z;
    vec4 _127 = r0;
    vec3 _136 = mix(r7.xyz, _127.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = _136.x;
    r0.y = _136.y;
    r0.z = _136.z;
    vec3 _147 = r1.xyz * r6.xyz;
    r7.x = _147.x;
    r7.y = _147.y;
    r7.z = _147.z;
    vec4 _156 = r1;
    vec3 _162 = mix(r7.xyz, _156.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = _162.x;
    r1.y = _162.y;
    r1.z = _162.z;
    vec3 _173 = r2.xyz * r6.xyz;
    r7.x = _173.x;
    r7.y = _173.y;
    r7.z = _173.z;
    vec4 _182 = r2;
    vec3 _188 = mix(r7.xyz, _182.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = _188.x;
    r2.y = _188.y;
    r2.z = _188.z;
    vec3 _199 = r3.xyz * r6.xyz;
    r5.x = _199.x;
    r5.y = _199.y;
    r5.z = _199.z;
    vec4 _208 = r3;
    vec3 _214 = mix(r5.xyz, _208.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = _214.x;
    r3.y = _214.y;
    r3.z = _214.z;
    r4.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r4.w = (-r4.w) + 1.0;
    r1 = r4.xxxx * r1;
    r0 = (r0 * r4.wwww) + r1;
    r0 = (r2 * r4.yyyy) + r0;
    r0 = (r3 * r4.zzzz) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _304 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _304.x;
        r1.z = _304.y;
        vec2 _315 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r2.x = _315.x;
        r2.y = _315.y;
        vec2 _323 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _323.x;
        r2.w = _323.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _346 = r1.yz + optRegs.rows[optTile*82u+uint(4)].xy;
        r2.x = _346.x;
        r2.y = _346.y;
        vec2 _353 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _353.x;
        r2.w = _353.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _376 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _376.x;
        r2.y = _376.y;
        vec2 _383 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _383.x;
        r2.w = _383.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _406 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
        r2.x = _406.x;
        r2.y = _406.y;
        vec2 _413 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _413.x;
        r2.w = _413.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _436 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _436.x;
        r2.y = _436.y;
        vec2 _443 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _443.x;
        r2.w = _443.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _466 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
        r2.x = _466.x;
        r2.y = _466.y;
        vec2 _473 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _473.x;
        r2.w = _473.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _496 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _496.x;
        r2.y = _496.y;
        vec2 _503 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _503.x;
        r2.w = _503.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        vec2 _526 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
        r2.x = _526.x;
        r2.y = _526.y;
        vec2 _533 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _533.x;
        r2.w = _533.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.x += r2.x;
        r1.x *= 0.111111111938953399658203125;
    }
    else
    {
        r1.y = max(abs(v6.x), abs(v6.y));
        if (r1.y < 1.0)
        {
            r2 = (v6.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r2 = OptTex6Lod( r2.xy, r2.w);
            vec2 _583 = (v6.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _583.x;
            r1.z = _583.y;
            vec2 _593 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
            r3.x = _593.x;
            r3.y = _593.y;
            vec2 _600 = vec2(1.0, 0.0) * v6.zx;
            r3.z = _600.x;
            r3.w = _600.y;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r1.w = r2.x + r3.x;
            vec2 _622 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _622.x;
            r2.y = _622.y;
            vec2 _629 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _629.x;
            r2.w = _629.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _651 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _651.x;
            r2.y = _651.y;
            vec2 _658 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _658.x;
            r2.w = _658.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.w += r2.x;
            vec2 _680 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _680.x;
            r2.y = _680.y;
            vec2 _687 = vec2(1.0, 0.0) * v6.zx;
            r2.z = _687.x;
            r2.w = _687.y;
            r2 = OptTex6Lod( r2.xy, r2.w);
            r1.y = r1.w + r2.x;
            r1.x = r1.y * 0.20000000298023223876953125;
        }
        else
        {
            r1.y = max(abs(v7.x), abs(v7.y));
            if (r1.y < 1.0)
            {
                r2 = (v7.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
                r2 = OptTex7Lod( r2.xy, r2.w);
                vec2 _737 = (v7.xy * vec2(0.5)) + vec2(0.5);
                r1.y = _737.x;
                r1.z = _737.y;
                vec2 _747 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
                r3.x = _747.x;
                r3.y = _747.y;
                vec2 _754 = vec2(1.0, 0.0) * v7.zx;
                r3.z = _754.x;
                r3.w = _754.y;
                r3 = OptTex7Lod( r3.xy, r3.w);
                r1.w = r2.x + r3.x;
                vec2 _776 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
                r2.x = _776.x;
                r2.y = _776.y;
                vec2 _783 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _783.x;
                r2.w = _783.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _805 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
                r2.x = _805.x;
                r2.y = _805.y;
                vec2 _812 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _812.x;
                r2.w = _812.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.w += r2.x;
                vec2 _834 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
                r2.x = _834.x;
                r2.y = _834.y;
                vec2 _841 = vec2(1.0, 0.0) * v7.zx;
                r2.z = _841.x;
                r2.w = _841.y;
                r2 = OptTex7Lod( r2.xy, r2.w);
                r1.y = r1.w + r2.x;
                r1.x = r1.y * 0.20000000298023223876953125;
            }
            else
            {
                r1.y = v5.w;
                r1.z = v6.w;
                vec2 _873 = (v5.ww * vec2(0.5, 0.0)) + vec2(0.5, 0.0);
                r2.x = _873.x;
                r2.w = _873.y;
                r2.y = (v6.w * 0.5) + 0.5;
                r2.z = v7.w;
                r3 = OptTex8Lod( r2.xy, r2.w);
                vec2 _898 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
                r4.x = _898.x;
                r4.y = _898.y;
                r4.z = r2.zw.x;
                r4.w = r2.zw.y;
                r5 = OptTex8Lod( r4.xy, r4.w);
                r1.w = r3.x + r5.x;
                vec2 _926 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
                r4.x = _926.x;
                r4.y = _926.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _948 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
                r4.x = _948.x;
                r4.y = _948.y;
                r3 = OptTex8Lod( r4.xy, r4.w);
                r1.w += r3.x;
                vec2 _970 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
                r4.x = _970.x;
                r4.y = _970.y;
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
    vec3 _1027 = r0.www * v1.xyz;
    r2.x = _1027.x;
    r2.y = _1027.y;
    r2.z = _1027.z;
    vec4 _1034 = r1;
    vec3 _1038 = _1034.xxx * r2.xyz;
    r1.x = _1038.x;
    r1.z = _1038.y;
    r1.w = _1038.z;
    vec4 _1045 = r0;
    vec3 _1052 = (_1045.xyz * r1.yyy) + r1.xzw;
    r0.x = _1052.x;
    r0.y = _1052.y;
    r0.z = _1052.z;
    vec4 _1059 = r0;
    vec3 _1066 = _1059.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _1066.x;
    r0.y = _1066.y;
    r0.z = _1066.z;
    vec3 _1081 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _1081.x;
    oC0.y = _1081.y;
    oC0.z = _1081.z;
    oC0.w = 1.0;
    bool _1093 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1101;
    if (_1093)
    {
        _1101 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1101 = _1093;
    }
    if (_1101)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
