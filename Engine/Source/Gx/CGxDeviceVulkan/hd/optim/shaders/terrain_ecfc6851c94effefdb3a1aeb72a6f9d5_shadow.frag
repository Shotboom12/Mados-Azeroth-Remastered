#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

vec4 oC0;
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
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r1 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r1 = OptTex5Lod( r1.xy, r1.w);
        vec2 _122 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _122.x;
        r0.z = _122.y;
        vec2 _144 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = _144.x;
        r4.y = _144.y;
        vec2 _152 = vec2(1.0, 0.0) * v4.zx;
        r4.z = _152.x;
        r4.w = _152.y;
        r4 = OptTex5Lod( r4.xy, r4.w);
        r0.w = r1.x + r4.x;
        vec2 _175 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r1.x = _175.x;
        r1.y = _175.y;
        vec2 _182 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _182.x;
        r1.w = _182.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _205 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r1.x = _205.x;
        r1.y = _205.y;
        vec2 _212 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _212.x;
        r1.w = _212.y;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r0.w += r1.x;
        vec2 _235 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r1.x = _235.x;
        r1.y = _235.y;
        vec2 _242 = vec2(1.0, 0.0) * v4.zx;
        r1.z = _242.x;
        r1.w = _242.y;
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
    vec4 _292 = r0;
    vec3 _294 = r3.xyz * _292.xxx;
    r0.x = _294.x;
    r0.y = _294.y;
    r0.z = _294.z;
    vec4 _301 = r0;
    vec3 _305 = _301.xyz * v0.xyz;
    r0.x = _305.x;
    r0.y = _305.y;
    r0.z = _305.z;
    vec4 _312 = r0;
    vec4 _314 = r0;
    vec3 _316 = _312.xyz + _314.xyz;
    r0.x = _316.x;
    r0.y = _316.y;
    r0.z = _316.z;
    vec3 _327 = r3.www * v1.xyz;
    r1.y = _327.x;
    r1.z = _327.y;
    r1.w = _327.z;
    vec4 _339 = r0;
    vec3 _341 = (r1.yzw * r1.xxx) + _339.xyz;
    r0.x = _341.x;
    r0.y = _341.y;
    r0.z = _341.z;
    vec4 _348 = r0;
    vec3 _355 = _348.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _355.x;
    r0.y = _355.y;
    r0.z = _355.z;
    vec3 _370 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _370.x;
    oC0.y = _370.y;
    oC0.z = _370.z;
    oC0.w = 1.0;
    bool _383 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _391;
    if (_383)
    {
        _391 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _391 = _383;
    }
    if (_391)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
