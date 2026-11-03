#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];

layout(location = 0) out vec4 oC0;
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
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = vec4(fog0, 0.0, 0.0, 0.0);
    r0.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    r1 = OptTex0( v2.xy);
    vec3 _65 = r1.xyz * v0.xyz;
    r0.y = _65.x;
    r0.z = _65.y;
    r0.w = _65.z;
    vec4 _75 = r0;
    vec4 _77 = r0;
    vec3 _79 = _75.yzw + _77.yzw;
    r0.y = _79.x;
    r0.z = _79.y;
    r0.w = _79.z;
    vec4 _88 = r1;
    vec3 _97 = mix(r0.yzw, _88.xyz, greaterThanEqual(-r0.xxx, vec3(0.0)));
    r1.x = _97.x;
    r1.y = _97.y;
    r1.z = _97.z;
    r0 = OptTex1( v3.xy);
    r0.x = clamp(dot(r0.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    r1 *= r0.xxxx;
    vec3 _129 = r1.www * v1.xyz;
    r0.x = _129.x;
    r0.y = _129.y;
    r0.z = _129.z;
    vec4 _136 = r0;
    vec4 _138 = r0;
    vec3 _140 = _136.www * _138.xyz;
    r0.x = _140.x;
    r0.y = _140.y;
    r0.z = _140.z;
    r0.w = (r0.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _156 = r0;
    vec4 _159 = r0;
    vec3 _161 = (r1.xyz * _156.www) + _159.xyz;
    r0.x = _161.x;
    r0.y = _161.y;
    r0.z = _161.z;
    vec4 _168 = r0;
    vec3 _176 = _168.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _176.x;
    r0.y = _176.y;
    r0.z = _176.z;
    vec3 _191 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _191.x;
    oC0.y = _191.y;
    oC0.z = _191.z;
    oC0.w = 1.0;
    bool _202 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _210;
    if (_202)
    {
        _210 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _210 = _202;
    }
    if (_210)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
