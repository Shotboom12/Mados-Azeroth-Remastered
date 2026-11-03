#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];

vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 6) in vec4 texcoord4;
layout(location = 10) in float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
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
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    r0 = OptTex5Lod( r0.xy, r0.w);
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 _73 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = _73.x;
    r2.y = _73.y;
    vec2 _96 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r1.x = _96.x;
    r1.y = _96.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.y = r1.x;
    r1.z = 0.0;
    r1.w = 0.0;
    vec2 _120 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r1.x = _120.x;
    r1.y = _120.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.z = r1.x;
    vec2 _140 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r1.x = _140.x;
    r1.y = _140.y;
    vec4 _145 = r2;
    vec2 _151 = _145.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r2.x = _151.x;
    r2.y = _151.y;
    r1.z = 0.0;
    r1.w = 0.0;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.w = r1.x;
    r0 += (-v5.zzzz);
    r0 = vec4(greaterThanEqual(r0, vec4(0.0)));
    r0.x = dot(r0, vec4(1.0));
    r2.z = 0.0;
    r2.w = 0.0;
    r1 = OptTex5Lod( r2.xy, r2.w);
    r0.y = r1.x + (-v5.z);
    r0.y = float(r0.y >= 0.0);
    r0.x += r0.y;
    r0.x = (r0.x * 0.20000000298023223876953125) + (-1.0);
    r0.y = max(abs(v5.x), abs(v5.y));
    r0.y = clamp((r0.y * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.x = (r0.y * r0.x) + 1.0;
    r1 = OptTex3( v4.xy);
    r2.x = min(r0.x, r1.w);
    r0 = OptTex0( v2.xyz);
    vec3 _266 = v0.xyz + v0.xyz;
    r2.y = _266.x;
    r2.z = _266.y;
    r2.w = _266.z;
    vec3 _277 = r0.xyz * r2.yzw;
    r3.x = _277.x;
    r3.y = _277.y;
    r3.z = _277.z;
    vec3 _288 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = _288.x;
    r4.y = _288.y;
    r4.z = _288.z;
    vec4 _297 = r0;
    vec3 _305 = mix(r3.xyz, _297.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = _305.x;
    r0.y = _305.y;
    r0.z = _305.z;
    r3 = OptTex1( v3.xy);
    vec3 _321 = r2.yzw * r3.xyz;
    r5.x = _321.x;
    r5.y = _321.y;
    r5.z = _321.z;
    vec4 _330 = r3;
    vec3 _336 = mix(r5.xyz, _330.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r3.x = _336.x;
    r3.y = _336.y;
    r3.z = _336.z;
    r5 = mix(r0, r3, r1.xxxx);
    r0 = OptTex2( v3.wz);
    vec3 _357 = r2.yzw * r0.xyz;
    r1.x = _357.x;
    r1.z = _357.y;
    r1.w = _357.z;
    vec4 _366 = r0;
    vec3 _372 = mix(r1.xzw, _366.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = _372.x;
    r0.y = _372.y;
    r0.z = _372.z;
    r3 = mix(r5, r0, r1.yyyy);
    vec3 _388 = r3.www * v1.xyz;
    r0.x = _388.x;
    r0.y = _388.y;
    r0.z = _388.z;
    vec4 _397 = r0;
    vec3 _399 = r2.xxx * _397.xyz;
    r0.x = _399.x;
    r0.y = _399.y;
    r0.z = _399.z;
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _415 = r0;
    vec4 _418 = r0;
    vec3 _420 = (r3.xyz * _415.www) + _418.xyz;
    r0.x = _420.x;
    r0.y = _420.y;
    r0.z = _420.z;
    vec4 _427 = r0;
    vec3 _434 = _427.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _434.x;
    r0.y = _434.y;
    r0.z = _434.z;
    vec3 _449 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _449.x;
    oC0.y = _449.y;
    oC0.z = _449.z;
    oC0.w = 1.0;
    bool _461 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _469;
    if (_461)
    {
        _469 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _469 = _461;
    }
    if (_469)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
