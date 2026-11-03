#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=0)uniform samplerCube s0[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 6) in vec4 texcoord4;
layout(location = 10) in float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
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
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    r0 = OptTex5Lod( r0.xy, r0.w);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 _69 = (v4.xy * vec2(0.5)) + vec2(0.5);
    r2.x = _69.x;
    r2.y = _69.y;
    vec2 _92 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = _92.x;
    r1.y = _92.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 _116 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = _116.x;
    r1.y = _116.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.z = r1.x;
    vec2 _136 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = _136.x;
    r1.y = _136.y;
    vec4 _141 = r2;
    vec2 _147 = _141.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = _147.x;
    r2.y = _147.y;
    r1.z = 0.0;
    r1.w = 0.0;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.w = r1.x;
    r0 += (-v4.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    r1 = OptTex5Lod( r2.xy, r2.w);
    r0.y = r1.x + (-v4.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v4.x), abs(v4.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    r1 = OptTex2( v3.wz);
    r2.x = min(r0.x, r1.w);
    r0.x = clamp(dot(r1.xyz, vec3(1.0)), 0.0, 1.0);
    r0.x = (-r0.x) + 1.0;
    vec2 _265 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r0.y = _265.x;
    r0.z = _265.y;
    vec3 _274 = v0.xyz + v0.xyz;
    r1.y = _274.x;
    r1.z = _274.y;
    r1.w = _274.z;
    r3 = OptTex1( v3.xy);
    vec3 _290 = r1.yzw * r3.xyz;
    r2.y = _290.x;
    r2.z = _290.y;
    r2.w = _290.z;
    vec4 _299 = r3;
    vec3 _307 = mix(r2.yzw, _299.xyz, greaterThanEqual(-r0.zzz, vec3(0.0)));
    r3.x = _307.x;
    r3.y = _307.y;
    r3.z = _307.z;
    r3 = r1.xxxx * r3;
    r4 = OptTex0( v2.xyz);
    vec4 _326 = r1;
    vec3 _330 = _326.yzw * r4.xyz;
    r1.x = _330.x;
    r1.y = _330.y;
    r1.z = _330.z;
    vec4 _339 = r4;
    vec3 _345 = mix(r1.xyz, _339.xyz, greaterThanEqual(-r0.yyy, vec3(0.0)));
    r4.x = _345.x;
    r4.y = _345.y;
    r4.z = _345.z;
    r0 = (r4 * r0.xxxx) + r3;
    vec3 _362 = r0.www * v1.xyz;
    r1.x = _362.x;
    r1.y = _362.y;
    r1.z = _362.z;
    vec4 _371 = r1;
    vec3 _373 = r2.xxx * _371.xyz;
    r1.x = _373.x;
    r1.y = _373.y;
    r1.z = _373.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _387 = r0;
    vec4 _389 = r0;
    vec3 _394 = (_387.xyz * _389.www) + r1.xyz;
    r0.x = _394.x;
    r0.y = _394.y;
    r0.z = _394.z;
    vec4 _401 = r0;
    vec3 _408 = _401.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _408.x;
    r0.y = _408.y;
    r0.z = _408.z;
    vec3 _423 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _423.x;
    oC0.y = _423.y;
    oC0.z = _423.z;
    oC0.w = 1.0;
    bool _435 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _443;
    if (_435)
    {
        _443 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _443 = _435;
    }
    if (_443)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
