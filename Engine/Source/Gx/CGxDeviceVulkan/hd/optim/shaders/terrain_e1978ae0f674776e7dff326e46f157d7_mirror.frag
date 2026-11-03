#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform samplerCube s0[4];
layout(set=0,binding=1)uniform sampler2D s1[4];
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
    r0 = OptTex0( v2.xyz);
    r1 = OptTex1( v3.xy);
    r1.x = abs(optRegs.rows[optTile*82u+uint(1)].x);
    vec3 _78 = r0.xyz * v0.xyz;
    r2.x = _78.x;
    r2.y = _78.y;
    r2.z = _78.z;
    vec4 _87 = r2;
    vec4 _89 = r2;
    vec3 _91 = _87.xyz + _89.xyz;
    r2.x = _91.x;
    r2.y = _91.y;
    r2.z = _91.z;
    vec4 _100 = r0;
    vec3 _109 = mix(r2.xyz, _100.xyz, greaterThanEqual(-r1.xxx, vec3(0.0)));
    r0.x = _109.x;
    r0.y = _109.y;
    r0.z = _109.z;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r2 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r2 = OptTex5Lod( r2.xy, r2.w);
        vec2 _166 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _166.x;
        r1.z = _166.y;
        vec2 _178 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r3.x = _178.x;
        r3.y = _178.y;
        vec2 _186 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _186.x;
        r3.w = _186.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r2.x += r3.x;
        vec2 _209 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _209.x;
        r3.y = _209.y;
        vec2 _216 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _216.x;
        r3.w = _216.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r2.x += r3.x;
        vec2 _239 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = _239.x;
        r3.y = _239.y;
        vec2 _246 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _246.x;
        r3.w = _246.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r2.x += r3.x;
        vec2 _269 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = _269.x;
        r3.y = _269.y;
        vec2 _276 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _276.x;
        r3.w = _276.y;
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
    vec3 _328 = r0.www * v1.xyz;
    r1.y = _328.x;
    r1.z = _328.y;
    r1.w = _328.z;
    vec4 _337 = r1;
    vec3 _339 = r2.xxx * _337.yzw;
    r1.y = _339.x;
    r1.z = _339.y;
    r1.w = _339.z;
    vec4 _346 = r0;
    vec3 _353 = (_346.xyz * r1.xxx) + r1.yzw;
    r0.x = _353.x;
    r0.y = _353.y;
    r0.z = _353.z;
    vec4 _360 = r0;
    vec3 _367 = _360.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _367.x;
    r0.y = _367.y;
    r0.z = _367.z;
    vec3 _382 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _382.x;
    oC0.y = _382.y;
    oC0.z = _382.z;
    oC0.w = 1.0;
    bool _393 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _401;
    if (_393)
    {
        _401 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _401 = _393;
    }
    if (_401)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
