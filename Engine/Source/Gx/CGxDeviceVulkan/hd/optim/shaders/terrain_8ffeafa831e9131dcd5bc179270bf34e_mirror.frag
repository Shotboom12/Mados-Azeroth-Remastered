#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 6) in vec4 texcoord4;
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
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 *= r2.xxxx;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r3 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r3 = OptTex5Lod( r3.xy, r3.w);
        vec2 _138 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _138.x;
        r1.z = _138.y;
        vec2 _160 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = _160.x;
        r4.y = _160.y;
        vec2 _168 = vec2(1.0, 0.0) * v4.zx;
        r4.z = _168.x;
        r4.w = _168.y;
        r4 = OptTex5Lod( r4.xy, r4.w);
        r1.w = r3.x + r4.x;
        vec2 _191 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _191.x;
        r3.y = _191.y;
        vec2 _198 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _198.x;
        r3.w = _198.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w += r3.x;
        vec2 _221 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = _221.x;
        r3.y = _221.y;
        vec2 _228 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _228.x;
        r3.w = _228.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w += r3.x;
        vec2 _251 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = _251.x;
        r3.y = _251.y;
        vec2 _258 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _258.x;
        r3.w = _258.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.y = r1.w + r3.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r3.x = min(r1.x, r2.w);
    }
    else
    {
        r3.x = r2.w;
    }
    r1.x = (r3.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _306 = r0;
    vec3 _310 = _306.xyz * r1.xxx;
    r0.x = _310.x;
    r0.y = _310.y;
    r0.z = _310.z;
    vec4 _317 = r0;
    vec3 _321 = _317.xyz * v0.xyz;
    r0.x = _321.x;
    r0.y = _321.y;
    r0.z = _321.z;
    vec4 _328 = r0;
    vec4 _330 = r0;
    vec3 _332 = _328.xyz + _330.xyz;
    r0.x = _332.x;
    r0.y = _332.y;
    r0.z = _332.z;
    vec3 _343 = r0.www * v1.xyz;
    r1.x = _343.x;
    r1.y = _343.y;
    r1.z = _343.z;
    vec4 _355 = r0;
    vec3 _357 = (r1.xyz * r3.xxx) + _355.xyz;
    r0.x = _357.x;
    r0.y = _357.y;
    r0.z = _357.z;
    vec4 _364 = r0;
    vec3 _371 = _364.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _371.x;
    r0.y = _371.y;
    r0.z = _371.z;
    vec3 _386 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _386.x;
    oC0.y = _386.y;
    oC0.z = _386.z;
    oC0.w = 1.0;
    bool _399 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _407;
    if (_399)
    {
        _407 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _407 = _399;
    }
    if (_407)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
