#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform sampler2D s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 10) in float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
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
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex1( v3.xy);
    oC0.w = dot(r0.xyz, optRegs.rows[optTile*82u+uint(0)].xyz);
    r0.x = (r0.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    r1 = OptTex0( v2.xy);
    vec4 _77 = r0;
    vec3 _81 = _77.xxx * r1.xyz;
    r0.x = _81.x;
    r0.y = _81.y;
    r0.z = _81.z;
    vec4 _90 = r1;
    vec3 _94 = _90.www * v1.xyz;
    r1.x = _94.x;
    r1.y = _94.y;
    r1.z = _94.z;
    vec4 _101 = r0;
    vec3 _105 = _101.xyz * v0.xyz;
    r0.x = _105.x;
    r0.y = _105.y;
    r0.z = _105.z;
    vec4 _112 = r0;
    vec4 _114 = r0;
    vec3 _116 = _112.xyz + _114.xyz;
    r0.x = _116.x;
    r0.y = _116.y;
    r0.z = _116.z;
    vec4 _125 = r0;
    vec4 _128 = r0;
    vec3 _130 = (r1.xyz * _125.www) + _128.xyz;
    r0.x = _130.x;
    r0.y = _130.y;
    r0.z = _130.z;
    vec4 _137 = r0;
    vec3 _144 = _137.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _144.x;
    r0.y = _144.y;
    r0.z = _144.z;
    vec3 _159 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _159.x;
    oC0.y = _159.y;
    oC0.z = _159.z;
    bool _171 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _179;
    if (_171)
    {
        _179 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _179 = _171;
    }
    if (_179)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
