#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=2)uniform sampler2D s2[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
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
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord3;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xy);
    vec3 _56 = v0.xyz + v0.xyz;
    r1.x = _56.x;
    r1.y = _56.y;
    r1.z = _56.z;
    vec3 _72 = r0.xyz * r1.xyz;
    r2.x = _72.x;
    r2.y = _72.y;
    r2.z = _72.z;
    vec3 _93 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r3.x = _93.x;
    r3.y = _93.y;
    r3.z = _93.z;
    vec4 _102 = r0;
    vec3 _111 = mix(r2.xyz, _102.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = _111.x;
    r0.y = _111.y;
    r0.z = _111.z;
    r2 = OptTex1( v3.xy);
    vec3 _127 = r1.xyz * r2.xyz;
    r4.x = _127.x;
    r4.y = _127.y;
    r4.z = _127.z;
    vec4 _136 = r2;
    vec3 _142 = mix(r4.xyz, _136.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r2.x = _142.x;
    r2.y = _142.y;
    r2.z = _142.z;
    r4 = OptTex3( v5.xy);
    r2 *= r4.xxxx;
    r1.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r1.w = (-r1.w) + 1.0;
    r0 = (r0 * r1.wwww) + r2;
    r2 = OptTex2( v4.xy);
    vec4 _182 = r1;
    vec3 _186 = _182.xyz * r2.xyz;
    r1.x = _186.x;
    r1.y = _186.y;
    r1.z = _186.z;
    vec4 _195 = r2;
    vec3 _201 = mix(r1.xyz, _195.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r2.x = _201.x;
    r2.y = _201.y;
    r2.z = _201.z;
    r0 = (r2 * r4.yyyy) + r0;
    vec3 _218 = r0.www * v1.xyz;
    r1.x = _218.x;
    r1.y = _218.y;
    r1.z = _218.z;
    vec4 _227 = r1;
    vec3 _229 = r4.www * _227.xyz;
    r1.x = _229.x;
    r1.y = _229.y;
    r1.z = _229.z;
    r0.w = (r4.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _243 = r0;
    vec4 _245 = r0;
    vec3 _250 = (_243.xyz * _245.www) + r1.xyz;
    r0.x = _250.x;
    r0.y = _250.y;
    r0.z = _250.z;
    vec4 _257 = r0;
    vec3 _264 = _257.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _264.x;
    r0.y = _264.y;
    r0.z = _264.z;
    vec3 _279 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _279.x;
    oC0.y = _279.y;
    oC0.z = _279.z;
    oC0.w = 1.0;
    bool _291 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _299;
    if (_291)
    {
        _299 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _299 = _291;
    }
    if (_299)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
