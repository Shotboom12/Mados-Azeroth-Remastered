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
    vec2 _77 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = _77.x;
    r2.z = _77.y;
    vec3 _89 = v0.xyz + v0.xyz;
    r3.x = _89.x;
    r3.y = _89.y;
    r3.z = _89.z;
    vec3 _101 = r0.xyz * r3.xyz;
    r4.x = _101.x;
    r4.y = _101.y;
    r4.z = _101.z;
    vec4 _110 = r0;
    vec3 _119 = mix(r4.xyz, _110.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = _119.x;
    r0.y = _119.y;
    r0.z = _119.z;
    vec4 _128 = r3;
    vec3 _130 = r1.xyz * _128.xyz;
    r3.x = _130.x;
    r3.y = _130.y;
    r3.z = _130.z;
    vec4 _139 = r1;
    vec3 _145 = mix(r3.xyz, _139.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = _145.x;
    r1.y = _145.y;
    r1.z = _145.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _207 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _207.x;
        r0.z = _207.y;
        vec2 _218 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = _218.x;
        r4.y = _218.y;
        vec2 _226 = vec2(1.0, 0.0) * v4.zx;
        r4.z = _226.x;
        r4.w = _226.y;
        r4 = OptTex5Lod( r4.xy, r4.w);
        r0.w = r1.x + r4.x;
        vec2 _249 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _249.x;
        r1.y = _249.y;
        vec2 _256 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _256.x;
        r1.w = _256.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _279 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _279.x;
        r1.y = _279.y;
        vec2 _286 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _286.x;
        r1.w = _286.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _309 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _309.x;
        r1.y = _309.y;
        vec2 _316 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _316.x;
        r1.w = _316.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.y = r0.w + r1.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r1.x = min(r0.x, r2.w);
    }
    else
    {
        r1.x = r2.w;
    }
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _368 = r3.www * v1.xyz;
    r0.y = _368.x;
    r0.z = _368.y;
    r0.w = _368.z;
    vec4 _377 = r0;
    vec3 _379 = r1.xxx * _377.yzw;
    r0.y = _379.x;
    r0.z = _379.y;
    r0.w = _379.z;
    vec4 _388 = r0;
    vec4 _391 = r0;
    vec3 _393 = (r3.xyz * _388.xxx) + _391.yzw;
    r0.x = _393.x;
    r0.y = _393.y;
    r0.z = _393.z;
    vec4 _400 = r0;
    vec3 _407 = _400.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _407.x;
    r0.y = _407.y;
    r0.z = _407.z;
    vec3 _422 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _422.x;
    oC0.y = _422.y;
    oC0.z = _422.z;
    oC0.w = 1.0;
    bool _434 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _442;
    if (_434)
    {
        _442 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _442 = _434;
    }
    if (_442)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
