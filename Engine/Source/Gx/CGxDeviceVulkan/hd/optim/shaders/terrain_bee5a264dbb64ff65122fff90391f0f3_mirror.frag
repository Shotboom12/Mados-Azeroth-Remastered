#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
layout(set=0,binding=2)uniform sampler2D s2[4];
layout(set=0,binding=5)uniform sampler2D s5[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
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
    vec4 v4 = texcoord4;
    vec4 v5 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xyz);
    r1 = OptTex1( v3.xy);
    r2 = OptTex2( v3.wz);
    vec2 _80 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r2.y = _80.x;
    r2.z = _80.y;
    vec3 _92 = v0.xyz + v0.xyz;
    r3.x = _92.x;
    r3.y = _92.y;
    r3.z = _92.z;
    vec3 _104 = r0.xyz * r3.xyz;
    r4.x = _104.x;
    r4.y = _104.y;
    r4.z = _104.z;
    vec4 _113 = r0;
    vec3 _122 = mix(r4.xyz, _113.xyz, greaterThanEqual(-r2.yyy, vec3(0.0)));
    r0.x = _122.x;
    r0.y = _122.y;
    r0.z = _122.z;
    vec4 _131 = r3;
    vec3 _133 = r1.xyz * _131.xyz;
    r3.x = _133.x;
    r3.y = _133.y;
    r3.z = _133.z;
    vec4 _142 = r1;
    vec3 _148 = mix(r3.xyz, _142.xyz, greaterThanEqual(-r2.zzz, vec3(0.0)));
    r1.x = _148.x;
    r1.y = _148.y;
    r1.z = _148.z;
    r3 = mix(r0, r1, r2.xxxx);
    r0.x = max(abs(v4.x), abs(v4.y));
    r0.x = clamp((r0.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r0.y = ((-r0.x) >= 0.0) ? 0.0 : 1.0;
    if (r0.y != (-r0.y))
    {
        vec2 _196 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r0.y = _196.x;
        r0.z = _196.y;
        vec2 _207 = r0.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r1.x = _207.x;
        r1.y = _207.y;
        vec2 _218 = r0.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r4.x = _218.x;
        r4.y = _218.y;
        vec2 _229 = r0.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r5.x = _229.x;
        r5.y = _229.y;
        vec2 _240 = r0.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r6.x = _240.x;
        r6.y = _240.y;
        r7 = (v4.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r7 = OptTex5Lod( r7.xy, r7.w);
        r1.z = 0.0;
        r1.w = 0.0;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r4.z = 0.0;
        r4.w = 0.0;
        r4 = OptTex5Lod( r4.xy, r4.w);
        r5.z = 0.0;
        r5.w = 0.0;
        r5 = OptTex5Lod( r5.xy, r5.w);
        r6.z = 0.0;
        r6.w = 0.0;
        r6 = OptTex5Lod( r6.xy, r6.w);
        r7.y = r1.x;
        r7.z = r4.x;
        r7.w = r5.x;
        r1 = r7 + (-v4.zzzz);
        r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
        r0.y = r6.x + (-v4.z);
        r0.y = float(r0.y >= 0.0);
        r0.z = dot(r1, vec4(1.0));
        r0.y += r0.z;
        r0.y = (r0.y * 0.20000000298023223876953125) + (-1.0);
        r0.x = (r0.x * r0.y) + 1.0;
        r1.x = min(r0.x, r2.w);
    }
    else
    {
        r1.x = r2.w;
    }
    r0.x = (r1.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _374 = r3.www * v1.xyz;
    r0.y = _374.x;
    r0.z = _374.y;
    r0.w = _374.z;
    vec4 _383 = r0;
    vec3 _385 = r1.xxx * _383.yzw;
    r0.y = _385.x;
    r0.z = _385.y;
    r0.w = _385.z;
    vec4 _394 = r0;
    vec4 _397 = r0;
    vec3 _399 = (r3.xyz * _394.xxx) + _397.yzw;
    r0.x = _399.x;
    r0.y = _399.y;
    r0.z = _399.z;
    vec4 _406 = r0;
    vec3 _413 = _406.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _413.x;
    r0.y = _413.y;
    r0.z = _413.z;
    vec3 _428 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _428.x;
    oC0.y = _428.y;
    oC0.z = _428.z;
    oC0.w = 1.0;
    bool _440 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _448;
    if (_440)
    {
        _448 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _448 = _440;
    }
    if (_448)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
