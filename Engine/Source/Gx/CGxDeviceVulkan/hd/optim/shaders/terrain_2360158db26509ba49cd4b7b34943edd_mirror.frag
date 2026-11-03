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
    vec2 _78 = abs(optRegs.rows[optTile*82u+uint(1)].xy);
    r3.x = _78.x;
    r3.y = _78.y;
    vec3 _90 = v0.xyz + v0.xyz;
    r4.x = _90.x;
    r4.y = _90.y;
    r4.z = _90.z;
    vec3 _102 = r0.xyz * r4.xyz;
    r5.x = _102.x;
    r5.y = _102.y;
    r5.z = _102.z;
    vec4 _111 = r0;
    vec3 _120 = mix(r5.xyz, _111.xyz, greaterThanEqual(-r3.xxx, vec3(0.0)));
    r0.x = _120.x;
    r0.y = _120.y;
    r0.z = _120.z;
    vec3 _131 = r1.xyz * r4.xyz;
    r3.x = _131.x;
    r3.z = _131.y;
    r3.w = _131.z;
    vec4 _141 = r1;
    vec3 _147 = mix(r3.xzw, _141.xyz, greaterThanEqual(-r3.yyy, vec3(0.0)));
    r1.x = _147.x;
    r1.y = _147.y;
    r1.z = _147.z;
    r2.y = clamp(dot(r2.xyz, vec3(1.0)), 0.0, 1.0);
    r2.y = (-r2.y) + 1.0;
    r1 = r2.xxxx * r1;
    r0 = (r0 * r2.yyyy) + r1;
    r1.x = max(abs(v4.x), abs(v4.y));
    r1.x = clamp((r1.x * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.y = ((-r1.x) >= 0.0) ? 0.0 : 1.0;
    if (r1.y != (-r1.y))
    {
        r3 = (v4.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r3 = OptTex5Lod( r3.xy, r3.w);
        vec2 _224 = (v4.xy * vec2(0.5)) + vec2(0.5);
        r1.y = _224.x;
        r1.z = _224.y;
        vec2 _235 = r1.yz + optRegs.rows[optTile*82u+uint(3)].xy;
        r4.x = _235.x;
        r4.y = _235.y;
        vec2 _243 = vec2(1.0, 0.0) * v4.zx;
        r4.z = _243.x;
        r4.w = _243.y;
        r4 = OptTex5Lod( r4.xy, r4.w);
        r1.w = r3.x + r4.x;
        vec2 _266 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _266.x;
        r3.y = _266.y;
        vec2 _273 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _273.x;
        r3.w = _273.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w += r3.x;
        vec2 _296 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
        r3.x = _296.x;
        r3.y = _296.y;
        vec2 _303 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _303.x;
        r3.w = _303.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.w += r3.x;
        vec2 _326 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
        r3.x = _326.x;
        r3.y = _326.y;
        vec2 _333 = vec2(1.0, 0.0) * v4.zx;
        r3.z = _333.x;
        r3.w = _333.y;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r1.y = r1.w + r3.x;
        r1.y = (r1.y * 0.20000000298023223876953125) + (-1.0);
        r1.x = (r1.x * r1.y) + 1.0;
        r3.x = min(r1.x, r2.w);
    }
    else
    {
        r3.x = r2.w;
    }
    r1.x = (r3.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _385 = r0.www * v1.xyz;
    r1.y = _385.x;
    r1.z = _385.y;
    r1.w = _385.z;
    vec4 _394 = r1;
    vec3 _396 = r3.xxx * _394.yzw;
    r1.y = _396.x;
    r1.z = _396.y;
    r1.w = _396.z;
    vec4 _403 = r0;
    vec3 _410 = (_403.xyz * r1.xxx) + r1.yzw;
    r0.x = _410.x;
    r0.y = _410.y;
    r0.z = _410.z;
    vec4 _417 = r0;
    vec3 _424 = _417.xyz + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _424.x;
    r0.y = _424.y;
    r0.z = _424.z;
    vec3 _439 = (v5.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _439.x;
    oC0.y = _439.y;
    oC0.z = _439.z;
    oC0.w = 1.0;
    bool _451 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _459;
    if (_451)
    {
        _459 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _459 = _451;
    }
    if (_459)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
