#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
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
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
    vec4 r7 = vec4(0.0);
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
    r4 = OptTex4( v4.wz);
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _94 = v0.xyz + v0.xyz;
    r6.x = _94.x;
    r6.y = _94.y;
    r6.z = _94.z;
    vec3 _109 = r0.xyz * r6.xyz;
    r7.x = _109.x;
    r7.y = _109.y;
    r7.z = _109.z;
    vec4 _118 = r0;
    vec3 _127 = mix(r7.xyz, _118.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = _127.x;
    r0.y = _127.y;
    r0.z = _127.z;
    vec3 _138 = r1.xyz * r6.xyz;
    r7.x = _138.x;
    r7.y = _138.y;
    r7.z = _138.z;
    vec4 _147 = r1;
    vec3 _153 = mix(r7.xyz, _147.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = _153.x;
    r1.y = _153.y;
    r1.z = _153.z;
    vec3 _164 = r2.xyz * r6.xyz;
    r7.x = _164.x;
    r7.y = _164.y;
    r7.z = _164.z;
    vec4 _173 = r2;
    vec3 _179 = mix(r7.xyz, _173.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = _179.x;
    r2.y = _179.y;
    r2.z = _179.z;
    vec3 _190 = r3.xyz * r6.xyz;
    r5.x = _190.x;
    r5.y = _190.y;
    r5.z = _190.z;
    vec4 _199 = r3;
    vec3 _205 = mix(r5.xyz, _199.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = _205.x;
    r3.y = _205.y;
    r3.z = _205.z;
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _277 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _277.x;
        r0.z = _277.y;
        vec2 _288 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _288.x;
        r3.y = _288.y;
        vec2 _296 = vec2(1.0, 0.0) * v5.zx;
        r3.z = _296.x;
        r3.w = _296.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r0.w = r2.x + r3.x;
        vec2 _319 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _319.x;
        r2.y = _319.y;
        vec2 _326 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _326.x;
        r2.w = _326.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.w += r2.x;
        vec2 _349 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _349.x;
        r2.y = _349.y;
        vec2 _356 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _356.x;
        r2.w = _356.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.w += r2.x;
        vec2 _379 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _379.x;
        r2.y = _379.y;
        vec2 _386 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _386.x;
        r2.w = _386.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.y = r0.w + r2.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r2.x = min(r0.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _438 = r1.www * v1.xyz;
    r0.y = _438.x;
    r0.z = _438.y;
    r0.w = _438.z;
    vec4 _447 = r0;
    vec3 _449 = r2.xxx * _447.yzw;
    r0.y = _449.x;
    r0.z = _449.y;
    r0.w = _449.z;
    vec4 _458 = r0;
    vec4 _461 = r0;
    vec3 _463 = (r1.xyz * _458.xxx) + _461.yzw;
    r0.x = _463.x;
    r0.y = _463.y;
    r0.z = _463.z;
    vec4 _470 = r0;
    vec3 _477 = _470.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _477.x;
    r0.y = _477.y;
    r0.z = _477.z;
    vec3 _492 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _492.x;
    oC0.y = _492.y;
    oC0.z = _492.z;
    oC0.w = 1.0;
    bool _504 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _512;
    if (_504)
    {
        _512 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _512 = _504;
    }
    if (_512)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
