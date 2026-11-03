#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
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
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
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
    vec4 v6 = texcoord4;
    vec4 v7 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    r1 = OptTex1( v3.xy);
    vec3 _68 = v0.xyz + v0.xyz;
    r2.x = _68.x;
    r2.y = _68.y;
    r2.z = _68.z;
    vec3 _84 = r0.xyz * r2.xyz;
    r3.x = _84.x;
    r3.y = _84.y;
    r3.z = _84.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 _107 = r0;
    vec3 _116 = mix(r3.xyz, _107.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = _116.x;
    r0.y = _116.y;
    r0.z = _116.z;
    vec3 _127 = r1.xyz * r2.xyz;
    r3.x = _127.x;
    r3.y = _127.y;
    r3.z = _127.z;
    vec4 _136 = r1;
    vec3 _142 = mix(r3.xyz, _136.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = _142.x;
    r1.y = _142.y;
    r1.z = _142.z;
    r3 = OptTex4( v6.xy);
    r5 = mix(r0, r1, r3.xxxx);
    r0 = OptTex2( v4.xy);
    vec3 _168 = r2.xyz * r0.xyz;
    r1.x = _168.x;
    r1.y = _168.y;
    r1.z = _168.z;
    vec4 _177 = r0;
    vec3 _183 = mix(r1.xyz, _177.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = _183.x;
    r0.y = _183.y;
    r0.z = _183.z;
    r1 = mix(r5, r0, r3.yyyy);
    r0 = OptTex3( v5.xy);
    vec4 _200 = r2;
    vec3 _204 = _200.xyz * r0.xyz;
    r2.x = _204.x;
    r2.y = _204.y;
    r2.z = _204.z;
    vec4 _213 = r0;
    vec3 _219 = mix(r2.xyz, _213.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r0.x = _219.x;
    r0.y = _219.y;
    r0.z = _219.z;
    r2 = mix(r1, r0, r3.zzzz);
    vec3 _235 = r2.www * v1.xyz;
    r0.x = _235.x;
    r0.y = _235.y;
    r0.z = _235.z;
    vec4 _244 = r0;
    vec3 _246 = r3.www * _244.xyz;
    r0.x = _246.x;
    r0.y = _246.y;
    r0.z = _246.z;
    r0.w = (r3.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _263 = r0;
    vec4 _266 = r0;
    vec3 _268 = (r2.xyz * _263.www) + _266.xyz;
    r0.x = _268.x;
    r0.y = _268.y;
    r0.z = _268.z;
    vec4 _275 = r0;
    vec3 _282 = _275.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _282.x;
    r0.y = _282.y;
    r0.z = _282.z;
    vec3 _297 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _297.x;
    oC0.y = _297.y;
    oC0.z = _297.z;
    oC0.w = 1.0;
    bool _310 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _318;
    if (_310)
    {
        _318 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _318 = _310;
    }
    if (_318)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
