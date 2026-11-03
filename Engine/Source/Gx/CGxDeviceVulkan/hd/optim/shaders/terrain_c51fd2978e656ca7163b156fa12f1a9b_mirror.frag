#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
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
    r0 = OptTex0( v2.xy);
    r1 = OptTex1( v3.xy);
    vec3 _62 = v0.xyz + v0.xyz;
    r2.x = _62.x;
    r2.y = _62.y;
    r2.z = _62.z;
    vec3 _78 = r1.xyz * r2.xyz;
    r3.x = _78.x;
    r3.y = _78.y;
    r3.z = _78.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 _101 = r1;
    vec3 _110 = mix(r3.xyz, _101.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = _110.x;
    r1.y = _110.y;
    r1.z = _110.z;
    r3 = OptTex4( v4.wz);
    r1 *= r3.xxxx;
    r2.w = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r2.w = (-r2.w) + 1.0;
    vec3 _143 = r0.xyz * r2.xyz;
    r5.x = _143.x;
    r5.y = _143.y;
    r5.z = _143.z;
    vec4 _152 = r0;
    vec3 _158 = mix(r5.xyz, _152.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = _158.x;
    r0.y = _158.y;
    r0.z = _158.z;
    r0 = (r0 * r2.wwww) + r1;
    r1 = OptTex2( v3.wz);
    vec3 _180 = r2.xyz * r1.xyz;
    r5.x = _180.x;
    r5.y = _180.y;
    r5.z = _180.z;
    vec4 _189 = r1;
    vec3 _195 = mix(r5.xyz, _189.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r1.x = _195.x;
    r1.y = _195.y;
    r1.z = _195.z;
    r0 = (r1 * r3.yyyy) + r0;
    r1 = OptTex3( v4.xy);
    vec4 _213 = r2;
    vec3 _217 = _213.xyz * r1.xyz;
    r2.x = _217.x;
    r2.y = _217.y;
    r2.z = _217.z;
    vec4 _226 = r1;
    vec3 _232 = mix(r2.xyz, _226.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r1.x = _232.x;
    r1.y = _232.y;
    r1.z = _232.z;
    r0 = (r1 * r3.zzzz) + r0;
    vec3 _249 = r0.www * v1.xyz;
    r1.x = _249.x;
    r1.y = _249.y;
    r1.z = _249.z;
    r2 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    r2 = OptTex5Lod( r2.xy, r2.w);
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 _278 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r3.x = _278.x;
    r3.y = _278.y;
    vec2 _289 = r3.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = _289.x;
    r4.y = _289.y;
    r4 = OptTex5Lod( r4.xy, r4.w);
    r2.y = r4.x;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 _313 = r3.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = _313.x;
    r4.y = _313.y;
    r4 = OptTex5Lod( r4.xy, r4.w);
    r2.z = r4.x;
    vec2 _333 = r3.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = _333.x;
    r4.y = _333.y;
    vec2 _344 = r3.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r5.x = _344.x;
    r5.y = _344.y;
    r4.z = 0.0;
    r4.w = 0.0;
    r4 = OptTex5Lod( r4.xy, r4.w);
    r2.w = r4.x;
    r2 += (-v5.zzzz);
    r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
    r0.w = dot(r2, vec4(1.0));
    r5.z = 0.0;
    r5.w = 0.0;
    r2 = OptTex5Lod( r5.xy, r5.w);
    r1.w = r2.x + (-v5.z);
    r1.w = float(r1.w >= 0.0);
    r0.w += r1.w;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.w = max(abs(v5.x), abs(v5.y));
    r1.w = clamp((r1.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.w * r0.w) + 1.0;
    r1.w = min(r0.w, r3.w);
    vec4 _439 = r1;
    vec4 _441 = r1;
    vec3 _443 = _439.xyz * _441.www;
    r1.x = _443.x;
    r1.y = _443.y;
    r1.z = _443.z;
    r0.w = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _457 = r0;
    vec4 _459 = r0;
    vec3 _464 = (_457.xyz * _459.www) + r1.xyz;
    r0.x = _464.x;
    r0.y = _464.y;
    r0.z = _464.z;
    vec4 _471 = r0;
    vec3 _478 = _471.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _478.x;
    r0.y = _478.y;
    r0.z = _478.z;
    vec3 _493 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _493.x;
    oC0.y = _493.y;
    oC0.z = _493.z;
    oC0.w = 1.0;
    bool _505 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _513;
    if (_505)
    {
        _513 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _513 = _505;
    }
    if (_513)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
