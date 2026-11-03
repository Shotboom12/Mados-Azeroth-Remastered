#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
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
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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
    r0 = OptTex0( v2.xy);
    vec3 _60 = v0.xyz + v0.xyz;
    r1.x = _60.x;
    r1.y = _60.y;
    r1.z = _60.z;
    vec3 _76 = r0.xyz * r1.xyz;
    r2.x = _76.x;
    r2.y = _76.y;
    r2.z = _76.z;
    r3 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 _99 = r0;
    vec3 _108 = mix(r2.xyz, _99.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = _108.x;
    r0.y = _108.y;
    r0.z = _108.z;
    r2 = OptTex1( v3.xy);
    vec3 _124 = r1.xyz * r2.xyz;
    r4.x = _124.x;
    r4.y = _124.y;
    r4.z = _124.z;
    vec4 _133 = r2;
    vec3 _139 = mix(r4.xyz, _133.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r2.x = _139.x;
    r2.y = _139.y;
    r2.z = _139.z;
    r4 = OptTex4( v6.xy);
    r2 *= r4.xxxx;
    r1.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r1.w = (-r1.w) + 1.0;
    r0 = (r0 * r1.wwww) + r2;
    r2 = OptTex2( v4.xy);
    vec3 _183 = r1.xyz * r2.xyz;
    r5.x = _183.x;
    r5.y = _183.y;
    r5.z = _183.z;
    vec4 _192 = r2;
    vec3 _198 = mix(r5.xyz, _192.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r2.x = _198.x;
    r2.y = _198.y;
    r2.z = _198.z;
    r0 = (r2 * r4.yyyy) + r0;
    r2 = OptTex3( v5.xy);
    vec4 _216 = r1;
    vec3 _220 = _216.xyz * r2.xyz;
    r1.x = _220.x;
    r1.y = _220.y;
    r1.z = _220.z;
    vec4 _229 = r2;
    vec3 _235 = mix(r1.xyz, _229.xyz, greaterThanEqual(-r3.www, vec3(0.0)));
    r2.x = _235.x;
    r2.y = _235.y;
    r2.z = _235.z;
    r0 = (r2 * r4.zzzz) + r0;
    vec3 _252 = r0.www * v1.xyz;
    r1.x = _252.x;
    r1.y = _252.y;
    r1.z = _252.z;
    vec4 _261 = r1;
    vec3 _263 = r4.www * _261.xyz;
    r1.x = _263.x;
    r1.y = _263.y;
    r1.z = _263.z;
    r0.w = (r4.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _277 = r0;
    vec4 _279 = r0;
    vec3 _284 = (_277.xyz * _279.www) + r1.xyz;
    r0.x = _284.x;
    r0.y = _284.y;
    r0.z = _284.z;
    vec4 _291 = r0;
    vec3 _298 = _291.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _298.x;
    r0.y = _298.y;
    r0.z = _298.z;
    vec3 _313 = (v7.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _313.x;
    oC0.y = _313.y;
    oC0.z = _313.z;
    oC0.w = 1.0;
    bool _325 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _333;
    if (_325)
    {
        _333 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _333 = _325;
    }
    if (_333)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
