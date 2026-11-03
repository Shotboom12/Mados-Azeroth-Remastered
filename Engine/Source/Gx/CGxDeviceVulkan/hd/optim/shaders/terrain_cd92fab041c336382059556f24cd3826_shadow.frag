#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

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
vec4 OptTex0Grad(vec3 uv,vec3 dx,vec3 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec3 uv){vec3 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec3 uv,float bias){float k=exp2(bias);vec3 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec3 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
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
    r1 = OptTex0( v2.xyz);
    vec4 _62 = r0;
    vec3 _66 = _62.xxx * r1.xyz;
    r0.x = _66.x;
    r0.y = _66.y;
    r0.z = _66.z;
    vec4 _75 = r1;
    vec3 _79 = _75.www * v1.xyz;
    r1.x = _79.x;
    r1.y = _79.y;
    r1.z = _79.z;
    vec4 _86 = r0;
    vec3 _90 = _86.xyz * v0.xyz;
    r0.x = _90.x;
    r0.y = _90.y;
    r0.z = _90.z;
    vec4 _97 = r0;
    vec4 _99 = r0;
    vec3 _101 = _97.xyz + _99.xyz;
    r0.x = _101.x;
    r0.y = _101.y;
    r0.z = _101.z;
    vec4 _110 = r0;
    vec4 _113 = r0;
    vec3 _115 = (r1.xyz * _110.www) + _113.xyz;
    r0.x = _115.x;
    r0.y = _115.y;
    r0.z = _115.z;
    vec4 _122 = r0;
    vec3 _139 = _122.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _139.x;
    r0.y = _139.y;
    r0.z = _139.z;
    vec3 _154 = (v4.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _154.x;
    oC0.y = _154.y;
    oC0.z = _154.z;
    oC0.w = 1.0;
    bool _169 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _177;
    if (_169)
    {
        _177 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _177 = _169;
    }
    if (_177)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
