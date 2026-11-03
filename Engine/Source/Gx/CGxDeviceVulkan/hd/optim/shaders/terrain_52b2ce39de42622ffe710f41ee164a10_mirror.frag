#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform sampler2D s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 6) in vec4 texcoord4;
layout(location = 10) in float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    r0 = OptTex5Lod( r0.xy, r0.w);
    vec2 _63 = vec2(1.0, 0.0) * v4.zx;
    r1.z = _63.x;
    r1.w = _63.y;
    vec2 _73 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r0.y = _73.x;
    r0.z = _73.y;
    vec2 _95 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = _95.x;
    r1.y = _95.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.x += r1.x;
    vec2 _115 = vec2(1.0, 0.0) * v4.zx;
    r1.z = _115.x;
    r1.w = _115.y;
    vec2 _126 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = _126.x;
    r1.y = _126.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.x += r1.x;
    vec2 _149 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = _149.x;
    r1.y = _149.y;
    vec2 _160 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = _160.x;
    r2.y = _160.y;
    vec2 _167 = vec2(1.0, 0.0) * v4.zx;
    r1.z = _167.x;
    r1.w = _167.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.x += r1.x;
    vec2 _186 = vec2(1.0, 0.0) * v4.zx;
    r2.z = _186.x;
    r2.w = _186.y;
    r1 = OptTex5Lod( r2.xy, r2.w);
    r0.x += r1.x;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    r1 = OptTex2( v3.wz);
    r2.x = min(r0.x, r1.w);
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    r0.y = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.y = (-r0.y) + 1.0;
    r3 = OptTex1( v3.xy);
    r1 = r1.xxxx * r3;
    r3 = OptTex0( v2.xy);
    r1 = (r3 * r0.yyyy) + r1;
    vec4 _283 = r0;
    vec3 _287 = _283.xxx * r1.xyz;
    r0.x = _287.x;
    r0.y = _287.y;
    r0.z = _287.z;
    vec4 _294 = r1;
    vec3 _298 = _294.www * v1.xyz;
    r1.x = _298.x;
    r1.y = _298.y;
    r1.z = _298.z;
    vec4 _305 = r0;
    vec3 _309 = _305.xyz * v0.xyz;
    r0.x = _309.x;
    r0.y = _309.y;
    r0.z = _309.z;
    vec4 _316 = r0;
    vec4 _318 = r0;
    vec3 _320 = _316.xyz + _318.xyz;
    r0.x = _320.x;
    r0.y = _320.y;
    r0.z = _320.z;
    vec4 _332 = r0;
    vec3 _334 = (r1.xyz * r2.xxx) + _332.xyz;
    r0.x = _334.x;
    r0.y = _334.y;
    r0.z = _334.z;
    vec4 _341 = r0;
    vec3 _348 = _341.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _348.x;
    r0.y = _348.y;
    r0.z = _348.z;
    vec3 _363 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _363.x;
    oC0.y = _363.y;
    oC0.z = _363.z;
    oC0.w = 1.0;
    bool _377 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _385;
    if (_377)
    {
        _385 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _385 = _377;
    }
    if (_385)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
