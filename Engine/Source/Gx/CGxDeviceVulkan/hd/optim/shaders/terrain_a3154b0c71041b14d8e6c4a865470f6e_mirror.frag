#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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
    r0 = OptTex0( v2.xyz);
    vec3 _55 = v0.xyz + v0.xyz;
    r1.x = _55.x;
    r1.y = _55.y;
    r1.z = _55.z;
    vec3 _71 = r0.xyz * r1.xyz;
    r2.x = _71.x;
    r2.y = _71.y;
    r2.z = _71.z;
    vec3 _92 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r3.x = _92.x;
    r3.y = _92.y;
    r3.z = _92.z;
    vec4 _101 = r0;
    vec3 _110 = mix(r2.xyz, _101.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = _110.x;
    r0.y = _110.y;
    r0.z = _110.z;
    r2 = OptTex1( v3.xy);
    vec3 _130 = r1.xyz * r2.xyz;
    r4.x = _130.x;
    r4.y = _130.y;
    r4.z = _130.z;
    vec4 _139 = r2;
    vec3 _145 = mix(r4.xyz, _139.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r2.x = _145.x;
    r2.y = _145.y;
    r2.z = _145.z;
    r4 = OptTex3( v5.xy);
    r2 *= r4.xxxx;
    r1.w = clamp(dot(r4.xyz, vec3(1.0)), 0.0, 1.0);
    r1.w = (-r1.w) + 1.0;
    r0 = (r0 * r1.wwww) + r2;
    r2 = OptTex2( v4.xy);
    vec4 _185 = r1;
    vec3 _189 = _185.xyz * r2.xyz;
    r1.x = _189.x;
    r1.y = _189.y;
    r1.z = _189.z;
    vec4 _198 = r2;
    vec3 _204 = mix(r1.xyz, _198.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r2.x = _204.x;
    r2.y = _204.y;
    r2.z = _204.z;
    r0 = (r2 * r4.yyyy) + r0;
    vec3 _221 = r0.www * v1.xyz;
    r1.x = _221.x;
    r1.y = _221.y;
    r1.z = _221.z;
    vec4 _230 = r1;
    vec3 _232 = r4.www * _230.xyz;
    r1.x = _232.x;
    r1.y = _232.y;
    r1.z = _232.z;
    r0.w = (r4.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _246 = r0;
    vec4 _248 = r0;
    vec3 _253 = (_246.xyz * _248.www) + r1.xyz;
    r0.x = _253.x;
    r0.y = _253.y;
    r0.z = _253.z;
    vec4 _260 = r0;
    vec3 _267 = _260.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _267.x;
    r0.y = _267.y;
    r0.z = _267.z;
    vec3 _282 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _282.x;
    oC0.y = _282.y;
    oC0.z = _282.z;
    oC0.w = 1.0;
    bool _294 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _302;
    if (_294)
    {
        _302 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _302 = _294;
    }
    if (_302)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
