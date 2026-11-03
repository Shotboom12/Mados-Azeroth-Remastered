#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
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
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
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
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xy);
    r1 = OptTex1( v3.xy);
    r2.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _75 = r0.xyz * v0.xyz;
    r2.y = _75.x;
    r2.z = _75.y;
    r2.w = _75.z;
    vec4 _85 = r2;
    vec4 _87 = r2;
    vec3 _89 = _85.yzw + _87.yzw;
    r2.y = _89.x;
    r2.z = _89.y;
    r2.w = _89.z;
    vec4 _98 = r0;
    vec3 _107 = mix(r2.yzw, _98.xyz, greaterThanEqual(-r2.xxx, vec3(0.0)));
    r0.x = _107.x;
    r0.y = _107.y;
    r0.z = _107.z;
    r1.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r1.x = (-r1.x) + 1.0;
    r0 *= r1.xxxx;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _178 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _178.x;
        r1.z = _178.y;
        vec2 _190 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _190.x;
        r3.y = _190.y;
        vec2 _198 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _198.x;
        r3.w = _198.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r2.x += r3.x;
        vec2 _221 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _221.x;
        r3.y = _221.y;
        vec2 _228 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _228.x;
        r3.w = _228.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r2.x += r3.x;
        vec2 _251 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = _251.x;
        r3.y = _251.y;
        vec2 _258 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _258.x;
        r3.w = _258.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r2.x += r3.x;
        vec2 _281 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = _281.x;
        r3.y = _281.y;
        vec2 _288 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _288.x;
        r3.w = _288.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.y = r2.x + r3.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r1.w);
    }
    else
    {
        r2.x = r1.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _340 = r0.www * v1.xyz;
    r1.y = _340.x;
    r1.z = _340.y;
    r1.w = _340.z;
    vec4 _349 = r1;
    vec3 _351 = r2.xxx * _349.yzw;
    r1.y = _351.x;
    r1.z = _351.y;
    r1.w = _351.z;
    vec4 _358 = r0;
    vec3 _365 = (_358.xyz * r1.xxx) + r1.yzw;
    r0.x = _365.x;
    r0.y = _365.y;
    r0.z = _365.z;
    vec4 _372 = r0;
    vec3 _379 = _372.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _379.x;
    r0.y = _379.y;
    r0.z = _379.z;
    vec3 _394 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _394.x;
    oC0.y = _394.y;
    oC0.z = _394.z;
    oC0.w = 1.0;
    bool _405 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _413;
    if (_405)
    {
        _413 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _413 = _405;
    }
    if (_413)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
