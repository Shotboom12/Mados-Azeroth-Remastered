#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
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
    r0 = OptTex0( v2.xy);
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
        vec2 _135 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _135.x;
        r1.z = _135.y;
        vec2 _157 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = _157.x;
        r4.y = _157.y;
        vec2 _165 = vec2(1.0, 0.0) * v4.zx;
        r4.z = _165.x;
        r4.w = _165.y;
        r4 = OptTex5Lod( r4.xy, r4.w);
        r1.w = r3.x + r4.x;
        vec2 _188 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _188.x;
        r3.y = _188.y;
        vec2 _195 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _195.x;
        r3.w = _195.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w += r3.x;
        vec2 _218 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = _218.x;
        r3.y = _218.y;
        vec2 _225 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _225.x;
        r3.w = _225.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w += r3.x;
        vec2 _248 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = _248.x;
        r3.y = _248.y;
        vec2 _255 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _255.x;
        r3.w = _255.y;
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
    vec4 _303 = r0;
    vec3 _307 = _303.xyz * r1.xxx;
    r0.x = _307.x;
    r0.y = _307.y;
    r0.z = _307.z;
    vec4 _314 = r0;
    vec3 _318 = _314.xyz * v0.xyz;
    r0.x = _318.x;
    r0.y = _318.y;
    r0.z = _318.z;
    vec4 _325 = r0;
    vec4 _327 = r0;
    vec3 _329 = _325.xyz + _327.xyz;
    r0.x = _329.x;
    r0.y = _329.y;
    r0.z = _329.z;
    vec3 _340 = r0.www * v1.xyz;
    r1.x = _340.x;
    r1.y = _340.y;
    r1.z = _340.z;
    vec4 _352 = r0;
    vec3 _354 = (r1.xyz * r3.xxx) + _352.xyz;
    r0.x = _354.x;
    r0.y = _354.y;
    r0.z = _354.z;
    vec4 _361 = r0;
    vec3 _368 = _361.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _368.x;
    r0.y = _368.y;
    r0.z = _368.z;
    vec3 _383 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _383.x;
    oC0.y = _383.y;
    oC0.z = _383.z;
    oC0.w = 1.0;
    bool _396 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _404;
    if (_396)
    {
        _404 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _404 = _396;
    }
    if (_404)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
