#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=3)uniform sampler2D s3[4];
layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
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
vec4 OptTex1Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s1[0],uv,dx,dy);if(optTile==1u)return textureGrad(s1[1],uv,dx,dy);if(optTile==2u)return textureGrad(s1[2],uv,dx,dy);return textureGrad(s1[3],uv,dx,dy);}
vec4 OptTex1(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex1Grad(uv,dx,dy);}
vec4 OptTex1Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s1[0],uv,lod);if(optTile==1u)return textureLod(s1[1],uv,lod);if(optTile==2u)return textureLod(s1[2],uv,lod);return textureLod(s1[3],uv,lod);}
vec4 OptTex3Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s3[0],uv,dx,dy);if(optTile==1u)return textureGrad(s3[1],uv,dx,dy);if(optTile==2u)return textureGrad(s3[2],uv,dx,dy);return textureGrad(s3[3],uv,dx,dy);}
vec4 OptTex3(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex3Grad(uv,dx,dy);}
vec4 OptTex3Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s3[0],uv,lod);if(optTile==1u)return textureLod(s3[1],uv,lod);if(optTile==2u)return textureLod(s3[2],uv,lod);return textureLod(s3[3],uv,lod);}
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex2Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s2[0],uv,dx,dy);if(optTile==1u)return textureGrad(s2[1],uv,dx,dy);if(optTile==2u)return textureGrad(s2[2],uv,dx,dy);return textureGrad(s2[3],uv,dx,dy);}
vec4 OptTex2(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex2Grad(uv,dx,dy);}
vec4 OptTex2Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s2[0],uv,lod);if(optTile==1u)return textureLod(s2[1],uv,lod);if(optTile==2u)return textureLod(s2[2],uv,lod);return textureLod(s2[3],uv,lod);}
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
    r0 = OptTex1( v3.xy);
    vec3 _57 = v0.xyz + v0.xyz;
    r1.x = _57.x;
    r1.y = _57.y;
    r1.z = _57.z;
    vec3 _73 = r0.xyz * r1.xyz;
    r2.x = _73.x;
    r2.y = _73.y;
    r2.z = _73.z;
    vec3 _94 = abs(optRegs.rows[optTile*82u+uint(1)].xyz);
    r3.x = _94.x;
    r3.y = _94.y;
    r3.z = _94.z;
    vec4 _103 = r0;
    vec3 _112 = mix(r2.xyz, _103.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r0.x = _112.x;
    r0.y = _112.y;
    r0.z = _112.z;
    r2 = OptTex3( v4.xy);
    r0 *= r2.xxxx;
    r4 = OptTex0( v2.xy);
    vec3 _137 = r1.xyz * r4.xyz;
    r5.x = _137.x;
    r5.y = _137.y;
    r5.z = _137.z;
    vec4 _146 = r4;
    vec3 _152 = mix(r5.xyz, _146.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r4.x = _152.x;
    r4.y = _152.y;
    r4.z = _152.z;
    r1.w = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r1.w = (-r1.w) + 1.0;
    r0 = (r4 * r1.wwww) + r0;
    r4 = OptTex2( v3.wz);
    vec4 _183 = r1;
    vec3 _187 = _183.xyz * r4.xyz;
    r1.x = _187.x;
    r1.y = _187.y;
    r1.z = _187.z;
    vec4 _196 = r4;
    vec3 _202 = mix(r1.xyz, _196.xyz, greaterThanEqual(-r3.zzz, vec3(0.0)));
    r4.x = _202.x;
    r4.y = _202.y;
    r4.z = _202.z;
    r0 = (r4 * r2.yyyy) + r0;
    vec3 _219 = r0.www * v1.xyz;
    r1.x = _219.x;
    r1.y = _219.y;
    r1.z = _219.z;
    r3 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
    r3 = OptTex5Lod( r3.xy, r3.w);
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 _248 = (v5.xy * vec2(0.5)) + vec2(0.5);
    r2.x = _248.x;
    r2.y = _248.y;
    vec2 _259 = r2.xy + optRegs.rows[optTile*82u+uint(3)].xy;
    r4.x = _259.x;
    r4.y = _259.y;
    r4 = OptTex5Lod( r4.xy, r4.w);
    r3.y = r4.x;
    r4.z = 0.0;
    r4.w = 0.0;
    vec2 _283 = r2.xy + optRegs.rows[optTile*82u+uint(5)].xy;
    r4.x = _283.x;
    r4.y = _283.y;
    r4 = OptTex5Lod( r4.xy, r4.w);
    r3.z = r4.x;
    vec2 _303 = r2.xy + optRegs.rows[optTile*82u+uint(7)].xy;
    r4.x = _303.x;
    r4.y = _303.y;
    vec2 _314 = r2.xy + optRegs.rows[optTile*82u+uint(9)].xy;
    r5.x = _314.x;
    r5.y = _314.y;
    r4.z = 0.0;
    r4.w = 0.0;
    r4 = OptTex5Lod( r4.xy, r4.w);
    r3.w = r4.x;
    r3 += (-v5.zzzz);
    r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
    r0.w = dot(r3, vec4(1.0));
    r5.z = 0.0;
    r5.w = 0.0;
    r3 = OptTex5Lod( r5.xy, r5.w);
    r1.w = r3.x + (-v5.z);
    r1.w = float(r1.w >= 0.0);
    r0.w += r1.w;
    r0.w = (r0.w * 0.20000000298023223876953125) + (-1.0);
    r1.w = max(abs(v5.x), abs(v5.y));
    r1.w = clamp((r1.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.w = (r1.w * r0.w) + 1.0;
    r1.w = min(r0.w, r2.w);
    vec4 _409 = r1;
    vec4 _411 = r1;
    vec3 _413 = _409.xyz * _411.www;
    r1.x = _413.x;
    r1.y = _413.y;
    r1.z = _413.z;
    r0.w = (r1.w * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec4 _427 = r0;
    vec4 _429 = r0;
    vec3 _434 = (_427.xyz * _429.www) + r1.xyz;
    r0.x = _434.x;
    r0.y = _434.y;
    r0.z = _434.z;
    vec4 _441 = r0;
    vec3 _448 = _441.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _448.x;
    r0.y = _448.y;
    r0.z = _448.z;
    vec3 _463 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _463.x;
    oC0.y = _463.y;
    oC0.z = _463.z;
    oC0.w = 1.0;
    bool _475 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _483;
    if (_475)
    {
        _483 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _483 = _475;
    }
    if (_483)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
