#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];

vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
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
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xy);
    r1 = OptTex1( v3.xy);
    r2.x = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _60 = r0;
    vec3 _64 = _60.xyz * r2.xxx;
    r0.x = _64.x;
    r0.y = _64.y;
    r0.z = _64.z;
    vec3 _77 = r0.www * v1.xyz;
    r2.x = _77.x;
    r2.y = _77.y;
    r2.z = _77.z;
    vec4 _84 = r0;
    vec3 _88 = _84.xyz * v0.xyz;
    r0.x = _88.x;
    r0.y = _88.y;
    r0.z = _88.z;
    vec4 _95 = r0;
    vec4 _97 = r0;
    vec3 _99 = _95.xyz + _97.xyz;
    r0.x = _99.x;
    r0.y = _99.y;
    r0.z = _99.z;
    vec4 _111 = r0;
    vec3 _113 = (r2.xyz * r1.www) + _111.xyz;
    r0.x = _113.x;
    r0.y = _113.y;
    r0.z = _113.z;
    r0.w = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.w = (-r0.w) + 1.0;
    vec4 _132 = r0;
    vec4 _134 = r0;
    vec3 _152 = (_132.xyz * _134.www) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _152.x;
    r0.y = _152.y;
    r0.z = _152.z;
    vec3 _167 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _167.x;
    oC0.y = _167.y;
    oC0.z = _167.z;
    oC0.w = 1.0;
    bool _181 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _189;
    if (_181)
    {
        _189 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _189 = _181;
    }
    if (_189)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
