#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];

vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 10) in float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
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
    vec4 v4 = texcoord2;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    r1 = OptTex2( v4.xy);
    r1.y = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.y = (-r1.y) + 1.0;
    r2 = OptTex1( v3.xy);
    r2 = r1.xxxx * r2;
    r0 = (r0 * r1.yyyy) + r2;
    r1.x = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _94 = r0;
    vec3 _98 = _94.xyz * r1.xxx;
    r0.x = _98.x;
    r0.y = _98.y;
    r0.z = _98.z;
    vec3 _110 = r0.www * v1.xyz;
    r1.x = _110.x;
    r1.y = _110.y;
    r1.z = _110.z;
    vec4 _117 = r0;
    vec3 _121 = _117.xyz * v0.xyz;
    r0.x = _121.x;
    r0.y = _121.y;
    r0.z = _121.z;
    vec4 _128 = r0;
    vec4 _130 = r0;
    vec3 _132 = _128.xyz + _130.xyz;
    r0.x = _132.x;
    r0.y = _132.y;
    r0.z = _132.z;
    vec4 _144 = r0;
    vec3 _146 = (r1.xyz * r1.www) + _144.xyz;
    r0.x = _146.x;
    r0.y = _146.y;
    r0.z = _146.z;
    vec4 _153 = r0;
    vec3 _170 = _153.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _170.x;
    r0.y = _170.y;
    r0.z = _170.z;
    vec3 _185 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _185.x;
    oC0.y = _185.y;
    oC0.z = _185.z;
    oC0.w = 1.0;
    bool _199 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _207;
    if (_199)
    {
        _207 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _207 = _199;
    }
    if (_207)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
