#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 6) in vec4 texcoord4;
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
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    vec4 r6 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xy);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    r3 = OptTex3( v4.xy);
    vec3 _84 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = _84.x;
    r4.y = _84.y;
    r4.z = _84.z;
    vec3 _99 = v0.xyz + v0.xyz;
    r5.x = _99.x;
    r5.y = _99.y;
    r5.z = _99.z;
    vec3 _110 = r0.xyz * r5.xyz;
    r6.x = _110.x;
    r6.y = _110.y;
    r6.z = _110.z;
    vec4 _119 = r0;
    vec3 _128 = mix(r6.xyz, _119.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = _128.x;
    r0.y = _128.y;
    r0.z = _128.z;
    vec3 _139 = r1.xyz * r5.xyz;
    r6.x = _139.x;
    r6.y = _139.y;
    r6.z = _139.z;
    vec4 _148 = r1;
    vec3 _154 = mix(r6.xyz, _148.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = _154.x;
    r1.y = _154.y;
    r1.z = _154.z;
    vec3 _165 = r2.xyz * r5.xyz;
    r4.x = _165.x;
    r4.y = _165.y;
    r4.w = _165.z;
    vec4 _175 = r2;
    vec3 _181 = mix(r4.xyw, _175.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = _181.x;
    r2.y = _181.y;
    r2.z = _181.z;
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 = r3.xxxx * r1;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _264 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _264.x;
        r1.z = _264.y;
        vec2 _275 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = _275.x;
        r4.y = _275.y;
        vec2 _283 = vec2(1.0, 0.0) * v5.zx;
        r4.z = _283.x;
        r4.w = _283.y;
        r4 = OptTex5Lod( r4.xy, r4.w);
        r1.w = r2.x + r4.x;
        vec2 _306 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _306.x;
        r2.y = _306.y;
        vec2 _313 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _313.x;
        r2.w = _313.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _336 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _336.x;
        r2.y = _336.y;
        vec2 _343 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _343.x;
        r2.w = _343.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _366 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _366.x;
        r2.y = _366.y;
        vec2 _373 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _373.x;
        r2.w = _373.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.y = r1.w + r2.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r3.w);
    }
    else
    {
        r2.x = r3.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _425 = r0.www * v1.xyz;
    r1.y = _425.x;
    r1.z = _425.y;
    r1.w = _425.z;
    vec4 _434 = r1;
    vec3 _436 = r2.xxx * _434.yzw;
    r1.y = _436.x;
    r1.z = _436.y;
    r1.w = _436.z;
    vec4 _443 = r0;
    vec3 _450 = (_443.xyz * r1.xxx) + r1.yzw;
    r0.x = _450.x;
    r0.y = _450.y;
    r0.z = _450.z;
    vec4 _457 = r0;
    vec3 _464 = _457.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _464.x;
    r0.y = _464.y;
    r0.z = _464.z;
    vec3 _479 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _479.x;
    oC0.y = _479.y;
    oC0.z = _479.z;
    oC0.w = 1.0;
    bool _491 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _499;
    if (_491)
    {
        _499 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _499 = _491;
    }
    if (_499)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
