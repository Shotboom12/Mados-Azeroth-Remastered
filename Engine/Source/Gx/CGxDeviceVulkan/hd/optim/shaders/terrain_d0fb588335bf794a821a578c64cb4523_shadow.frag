#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];

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
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
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
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    vec2 _54 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r0.x = _54.x;
    r0.y = _54.y;
    vec3 _67 = v0.xyz + v0.xyz;
    r1.x = _67.x;
    r1.y = _67.y;
    r1.z = _67.z;
    r2 = OptTex0( v2.xyz);
    vec3 _87 = r1.xyz * r2.xyz;
    r3.x = _87.x;
    r3.y = _87.y;
    r3.z = _87.z;
    vec4 _96 = r2;
    vec3 _105 = mix(r3.xyz, _96.xyz, greaterThanEqual(-r0.xxx, vec3(0.0)));
    r2.x = _105.x;
    r2.y = _105.y;
    r2.z = _105.z;
    r3 = OptTex1( v3.xy);
    vec3 _124 = r1.xyz * r3.xyz;
    r0.x = _124.x;
    r0.z = _124.y;
    r0.w = _124.z;
    vec4 _134 = r3;
    vec3 _140 = mix(r0.xzw, _134.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r3.x = _140.x;
    r3.y = _140.y;
    r3.z = _140.z;
    r0 = OptTex2( v4.xy);
    r1 = r3 * r0.xxxx;
    r0.x = clamp(dot(r0.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    r1 = (r2 * r0.xxxx) + r1;
    vec3 _178 = r1.www * v1.xyz;
    r0.x = _178.x;
    r0.y = _178.y;
    r0.z = _178.z;
    vec4 _185 = r0;
    vec4 _187 = r0;
    vec3 _189 = _185.www * _187.xyz;
    r0.x = _189.x;
    r0.y = _189.y;
    r0.z = _189.z;
    r0.w = (r0.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _205 = r0;
    vec4 _208 = r0;
    vec3 _210 = (r1.xyz * _205.www) + _208.xyz;
    r0.x = _210.x;
    r0.y = _210.y;
    r0.z = _210.z;
    vec4 _217 = r0;
    vec3 _224 = _217.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _224.x;
    r0.y = _224.y;
    r0.z = _224.z;
    vec3 _239 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _239.x;
    oC0.y = _239.y;
    oC0.z = _239.z;
    oC0.w = 1.0;
    bool _251 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _259;
    if (_251)
    {
        _259 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _259 = _251;
    }
    if (_259)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
