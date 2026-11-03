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
    r0.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    r1 = OptTex0( v2.xy);
    vec3 _66 = r1.xyz * v0.xyz;
    r0.y = _66.x;
    r0.z = _66.y;
    r0.w = _66.z;
    vec4 _76 = r0;
    vec4 _78 = r0;
    vec3 _80 = _76.yzw + _78.yzw;
    r0.y = _80.x;
    r0.z = _80.y;
    r0.w = _80.z;
    vec4 _87 = r0;
    vec4 _91 = r0;
    vec3 _98 = mix(_87.yzw, r1.xyz, greaterThanEqual(-_91.xxx, vec3(0.0)));
    r0.x = _98.x;
    r0.y = _98.y;
    r0.z = _98.z;
    vec4 _105 = r1;
    vec3 _109 = _105.www * v1.xyz;
    r1.x = _109.x;
    r1.y = _109.y;
    r1.z = _109.z;
    r2 = OptTex1( v3.xy);
    r0.w = (r2.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _128 = r1;
    vec3 _132 = _128.xyz * r2.www;
    r1.x = _132.x;
    r1.y = _132.y;
    r1.z = _132.z;
    vec4 _139 = r0;
    vec4 _141 = r0;
    vec3 _146 = (_139.xyz * _141.www) + r1.xyz;
    r0.x = _146.x;
    r0.y = _146.y;
    r0.z = _146.z;
    vec4 _153 = r0;
    vec3 _161 = _153.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _161.x;
    r0.y = _161.y;
    r0.z = _161.z;
    vec3 _176 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _176.x;
    oC0.y = _176.y;
    oC0.z = _176.z;
    oC0.w = 1.0;
    bool _188 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _196;
    if (_188)
    {
        _196 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _196 = _188;
    }
    if (_196)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
