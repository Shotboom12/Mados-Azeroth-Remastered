#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform sampler2D s0[4];

vec4 oC0;
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
    r0.x = (r0.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    r1 = OptTex0( v2.xy);
    vec4 _59 = r0;
    vec3 _63 = _59.xxx * r1.xyz;
    r0.x = _63.x;
    r0.y = _63.y;
    r0.z = _63.z;
    vec4 _72 = r1;
    vec3 _76 = _72.www * v1.xyz;
    r1.x = _76.x;
    r1.y = _76.y;
    r1.z = _76.z;
    vec4 _83 = r0;
    vec3 _87 = _83.xyz * v0.xyz;
    r0.x = _87.x;
    r0.y = _87.y;
    r0.z = _87.z;
    vec4 _94 = r0;
    vec4 _96 = r0;
    vec3 _98 = _94.xyz + _96.xyz;
    r0.x = _98.x;
    r0.y = _98.y;
    r0.z = _98.z;
    vec4 _107 = r0;
    vec4 _110 = r0;
    vec3 _112 = (r1.xyz * _107.www) + _110.xyz;
    r0.x = _112.x;
    r0.y = _112.y;
    r0.z = _112.z;
    vec4 _119 = r0;
    vec3 _136 = _119.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _136.x;
    r0.y = _136.y;
    r0.z = _136.z;
    vec3 _151 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _151.x;
    oC0.y = _151.y;
    oC0.z = _151.z;
    oC0.w = 1.0;
    bool _166 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _174;
    if (_166)
    {
        _174 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _174 = _166;
    }
    if (_174)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
