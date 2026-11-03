#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=2)uniform sampler2D s2[4];

vec4 oC0;
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
    vec4 r5 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord3;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xy);
    vec3 _57 = v0.xyz + v0.xyz;
    r1.x = _57.x;
    r1.y = _57.y;
    r1.z = _57.z;
    vec3 _73 = r0.xyz * r1.xyz;
    r2.x = _73.x;
    r2.y = _73.y;
    r2.z = _73.z;
    vec3 _94 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r3.x = _94.x;
    r3.y = _94.y;
    r3.z = _94.z;
    vec4 _103 = r0;
    vec3 _112 = mix(r2.xyz, _103.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = _112.x;
    r0.y = _112.y;
    r0.z = _112.z;
    r2 = OptTex1( v3.xy);
    vec3 _128 = r1.xyz * r2.xyz;
    r4.x = _128.x;
    r4.y = _128.y;
    r4.z = _128.z;
    vec4 _137 = r2;
    vec3 _143 = mix(r4.xyz, _137.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r2.x = _143.x;
    r2.y = _143.y;
    r2.z = _143.z;
    r4 = OptTex3( v5.xy);
    r5 = mix(r0, r2, r4.xxxx);
    r0 = OptTex2( v4.xy);
    vec4 _165 = r1;
    vec3 _169 = _165.xyz * r0.xyz;
    r1.x = _169.x;
    r1.y = _169.y;
    r1.z = _169.z;
    vec4 _178 = r0;
    vec3 _184 = mix(r1.xyz, _178.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r0.x = _184.x;
    r0.y = _184.y;
    r0.z = _184.z;
    r1 = mix(r5, r0, r4.yyyy);
    vec3 _200 = r1.www * v1.xyz;
    r0.x = _200.x;
    r0.y = _200.y;
    r0.z = _200.z;
    vec4 _209 = r0;
    vec3 _211 = r4.www * _209.xyz;
    r0.x = _211.x;
    r0.y = _211.y;
    r0.z = _211.z;
    r0.w = (r4.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _228 = r0;
    vec4 _231 = r0;
    vec3 _233 = (r1.xyz * _228.www) + _231.xyz;
    r0.x = _233.x;
    r0.y = _233.y;
    r0.z = _233.z;
    vec4 _240 = r0;
    vec3 _247 = _240.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _247.x;
    r0.y = _247.y;
    r0.z = _247.z;
    vec3 _262 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _262.x;
    oC0.y = _262.y;
    oC0.z = _262.z;
    oC0.w = 1.0;
    bool _275 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _283;
    if (_275)
    {
        _283 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _283 = _275;
    }
    if (_283)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
