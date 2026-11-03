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
    vec3 _78 = r0.xyz * r2.xyz;
    r3.x = _78.x;
    r3.y = _78.y;
    r3.z = _78.z;
    r4 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec4 _101 = r0;
    vec3 _110 = mix(r3.xyz, _101.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = _110.x;
    r0.y = _110.y;
    r0.z = _110.z;
    vec3 _121 = r1.xyz * r2.xyz;
    r3.x = _121.x;
    r3.y = _121.y;
    r3.z = _121.z;
    vec4 _130 = r1;
    vec3 _136 = mix(r3.xyz, _130.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = _136.x;
    r1.y = _136.y;
    r1.z = _136.z;
    r3 = OptTex4( v4.wz);
    r5 = mix(r0, r1, r3.xxxx);
    r0 = OptTex2( v3.wz);
    vec3 _162 = r2.xyz * r0.xyz;
    r1.x = _162.x;
    r1.y = _162.y;
    r1.z = _162.z;
    vec4 _171 = r0;
    vec3 _177 = mix(r1.xyz, _171.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r0.x = _177.x;
    r0.y = _177.y;
    r0.z = _177.z;
    r1 = mix(r5, r0, r3.yyyy);
    r0 = OptTex3( v4.xy);
    vec4 _194 = r2;
    vec3 _198 = _194.xyz * r0.xyz;
    r2.x = _198.x;
    r2.y = _198.y;
    r2.z = _198.z;
    vec4 _207 = r0;
    vec3 _213 = mix(r2.xyz, _207.xyz, greaterThanEqual(-r4.www, vec3(0.0)));
    r0.x = _213.x;
    r0.y = _213.y;
    r0.z = _213.z;
    r2 = mix(r1, r0, r3.zzzz);
    vec3 _229 = r2.www * v1.xyz;
    r0.x = _229.x;
    r0.y = _229.y;
    r0.z = _229.z;
    r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    r1 = OptTex5Lod( r1.xy, r1.w);
    vec2 _255 = vec2(1.0, 0.0) * v5.zx;
    r4.z = _255.x;
    r4.w = _255.y;
    vec2 _264 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r1.y = _264.x;
    r1.z = _264.y;
    vec2 _275 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = _275.x;
    r4.y = _275.y;
    r4 = OptTex5Lod( r4.xy, r4.w);
    r0.w = r1.x + r4.x;
    vec2 _294 = vec2(1.0, 0.0) * v5.zx;
    r4.z = _294.x;
    r4.w = _294.y;
    vec2 _305 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = _305.x;
    r4.y = _305.y;
    r4 = OptTex5Lod( r4.xy, r4.w);
    r0.w += r4.x;
    vec2 _328 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = _328.x;
    r4.y = _328.y;
    vec4 _333 = r1;
    vec2 _339 = _333.yz + optRegs.rows[optTile*82u+uint(9)].xy;
    r1.x = _339.x;
    r1.y = _339.y;
    vec2 _346 = vec2(1.0, 0.0) * v5.zx;
    r4.z = _346.x;
    r4.w = _346.y;
    r4 = OptTex5Lod( r4.xy, r4.w);
    r0.w += r4.x;
    vec2 _365 = vec2(1.0, 0.0) * v5.zx;
    r1.z = _365.x;
    r1.w = _365.y;
    r1 = OptTex5Lod( r1.xy, r1.w);
    r0.w += r1.x;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.x * r0.w) + 1.0;
    r1.x = min(r0.w, r3.w);
    vec4 _418 = r0;
    vec3 _422 = _418.xyz * r1.xxx;
    r0.x = _422.x;
    r0.y = _422.y;
    r0.z = _422.z;
    r0.w = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _438 = r0;
    vec4 _441 = r0;
    vec3 _443 = (r2.xyz * _438.www) + _441.xyz;
    r0.x = _443.x;
    r0.y = _443.y;
    r0.z = _443.z;
    vec4 _450 = r0;
    vec3 _457 = _450.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _457.x;
    r0.y = _457.y;
    r0.z = _457.z;
    vec3 _472 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _472.x;
    oC0.y = _472.y;
    oC0.z = _472.z;
    oC0.w = 1.0;
    bool _484 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _492;
    if (_484)
    {
        _492 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _492 = _484;
    }
    if (_492)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
