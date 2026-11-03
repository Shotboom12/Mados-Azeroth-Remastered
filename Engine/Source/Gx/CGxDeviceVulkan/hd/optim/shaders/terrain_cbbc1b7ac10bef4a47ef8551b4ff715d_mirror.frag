#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
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
    vec3 _87 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r4.x = _87.x;
    r4.y = _87.y;
    r4.z = _87.z;
    vec3 _102 = v0.xyz + v0.xyz;
    r5.x = _102.x;
    r5.y = _102.y;
    r5.z = _102.z;
    vec3 _113 = r0.xyz * r5.xyz;
    r6.x = _113.x;
    r6.y = _113.y;
    r6.z = _113.z;
    vec4 _122 = r0;
    vec3 _131 = mix(r6.xyz, _122.xyz, greaterThanEqual(-r4.xxx, vec3(0.0)));
    r0.x = _131.x;
    r0.y = _131.y;
    r0.z = _131.z;
    vec3 _142 = r1.xyz * r5.xyz;
    r6.x = _142.x;
    r6.y = _142.y;
    r6.z = _142.z;
    vec4 _151 = r1;
    vec3 _157 = mix(r6.xyz, _151.xyz, greaterThanEqual(-r4.yyy, vec3(0.0)));
    r1.x = _157.x;
    r1.y = _157.y;
    r1.z = _157.z;
    vec3 _168 = r2.xyz * r5.xyz;
    r4.x = _168.x;
    r4.y = _168.y;
    r4.w = _168.z;
    vec4 _178 = r2;
    vec3 _184 = mix(r4.xyw, _178.xyz, greaterThanEqual(-r4.zzz, vec3(0.0)));
    r2.x = _184.x;
    r2.y = _184.y;
    r2.z = _184.z;
    r3.z = clamp(dot(r3.xyz, vec3(1.0)), 0.0, 1.0);
    r3.z = (-r3.z) + 1.0;
    r1 = r3.xxxx * r1;
    r0 = (r0 * r3.zzzz) + r1;
    r0 = (r2 * r3.yyyy) + r0;
    r1.x = max(abs(v5.x), abs(v5.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _267 = (v5.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _267.x;
        r1.z = _267.y;
        vec2 _278 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = _278.x;
        r4.y = _278.y;
        vec2 _286 = vec2(1.0, 0.0) * v5.zx;
        r4.z = _286.x;
        r4.w = _286.y;
        r4 = OptTex5Lod( r4.xy, r4.w);
        r1.w = r2.x + r4.x;
        vec2 _309 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r2.x = _309.x;
        r2.y = _309.y;
        vec2 _316 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _316.x;
        r2.w = _316.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _339 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r2.x = _339.x;
        r2.y = _339.y;
        vec2 _346 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _346.x;
        r2.w = _346.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.w += r2.x;
        vec2 _369 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r2.x = _369.x;
        r2.y = _369.y;
        vec2 _376 = vec2(1.0, 0.0) * v5.zx;
        r2.z = _376.x;
        r2.w = _376.y;
        r2 = OptTex5Lod( r2.xy, r2.w);
        r1.y = r1.w + r2.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r2.x = min(r1.x, r3.w);
    }
    else
    {
        r2.x = r3.w;
    }
    r1.x = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _428 = r0.www * v1.xyz;
    r1.y = _428.x;
    r1.z = _428.y;
    r1.w = _428.z;
    vec4 _437 = r1;
    vec3 _439 = r2.xxx * _437.yzw;
    r1.y = _439.x;
    r1.z = _439.y;
    r1.w = _439.z;
    vec4 _446 = r0;
    vec3 _453 = (_446.xyz * r1.xxx) + r1.yzw;
    r0.x = _453.x;
    r0.y = _453.y;
    r0.z = _453.z;
    vec4 _460 = r0;
    vec3 _467 = _460.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _467.x;
    r0.y = _467.y;
    r0.z = _467.z;
    vec3 _482 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _482.x;
    oC0.y = _482.y;
    oC0.z = _482.z;
    oC0.w = 1.0;
    bool _494 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _502;
    if (_494)
    {
        _502 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _502 = _494;
    }
    if (_502)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
