#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

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
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
    vec4 r6 = vec4(0.0);
    vec4 r7 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = color0;
    vec4 v1 = color1;
    vec4 v2 = texcoord0;
    vec4 v3 = texcoord1;
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord4;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    r3 = OptTex3( v4.xy);
    r4 = OptTex4( v4.wz);
    r5 = abs(optRegs.rows[optTile*82u+uint(1)]);
    vec3 _97 = v0.xyz + v0.xyz;
    r6.x = _97.x;
    r6.y = _97.y;
    r6.z = _97.z;
    vec3 _112 = r0.xyz * r6.xyz;
    r7.x = _112.x;
    r7.y = _112.y;
    r7.z = _112.z;
    vec4 _121 = r0;
    vec3 _130 = mix(r7.xyz, _121.xyz, greaterThanEqual(-r5.xxx, vec3(0.0)));
    r0.x = _130.x;
    r0.y = _130.y;
    r0.z = _130.z;
    vec3 _141 = r1.xyz * r6.xyz;
    r7.x = _141.x;
    r7.y = _141.y;
    r7.z = _141.z;
    vec4 _150 = r1;
    vec3 _156 = mix(r7.xyz, _150.xyz, greaterThanEqual(-r5.yyy, vec3(0.0)));
    r1.x = _156.x;
    r1.y = _156.y;
    r1.z = _156.z;
    vec3 _167 = r2.xyz * r6.xyz;
    r7.x = _167.x;
    r7.y = _167.y;
    r7.z = _167.z;
    vec4 _176 = r2;
    vec3 _182 = mix(r7.xyz, _176.xyz, greaterThanEqual(-r5.zzz, vec3(0.0)));
    r2.x = _182.x;
    r2.y = _182.y;
    r2.z = _182.z;
    vec3 _193 = r3.xyz * r6.xyz;
    r5.x = _193.x;
    r5.y = _193.y;
    r5.z = _193.z;
    vec4 _202 = r3;
    vec3 _208 = mix(r5.xyz, _202.xyz, greaterThanEqual(-r5.www, vec3(0.0)));
    r3.x = _208.x;
    r3.y = _208.y;
    r3.z = _208.z;
    r5 = mix(r0, r1, r4.xxxx);
    r0 = mix(r5, r2, r4.yyyy);
    r1 = mix(r0, r3, r4.zzzz);
    r0.x = max(abs(v5.x), abs(v5.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _280 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _280.x;
        r0.z = _280.y;
        vec2 _291 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _291.x;
        r3.y = _291.y;
        vec2 _299 = vec2(1.0, 0.0) * v5.zx;
        r3.z = _299.x;
        r3.w = _299.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r0.w = r2.x + r3.x;
        vec2 _322 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _322.x;
        r2.y = _322.y;
        vec2 _329 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _329.x;
        r2.w = _329.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.w += r2.x;
        vec2 _352 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _352.x;
        r2.y = _352.y;
        vec2 _359 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _359.x;
        r2.w = _359.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.w += r2.x;
        vec2 _382 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _382.x;
        r2.y = _382.y;
        vec2 _389 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _389.x;
        r2.w = _389.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r0.y = r0.w + r2.x;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r2.x = min(r0.x, r4.w);
    }
    else
    {
        r2.x = r4.w;
    }
    r0.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _441 = r1.www * v1.xyz;
    r0.y = _441.x;
    r0.z = _441.y;
    r0.w = _441.z;
    vec4 _450 = r0;
    vec3 _452 = r2.xxx * _450.yzw;
    r0.y = _452.x;
    r0.z = _452.y;
    r0.w = _452.z;
    vec4 _461 = r0;
    vec4 _464 = r0;
    vec3 _466 = (r1.xyz * _461.xxx) + _464.yzw;
    r0.x = _466.x;
    r0.y = _466.y;
    r0.z = _466.z;
    vec4 _473 = r0;
    vec3 _480 = _473.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _480.x;
    r0.y = _480.y;
    r0.z = _480.z;
    vec3 _495 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _495.x;
    oC0.y = _495.y;
    oC0.z = _495.z;
    oC0.w = 1.0;
    bool _507 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _515;
    if (_507)
    {
        _515 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _515 = _507;
    }
    if (_515)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
