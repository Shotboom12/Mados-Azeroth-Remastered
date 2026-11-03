#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=4)uniform sampler2D s4[4];

layout(location = 0) out vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
layout(location = 10) in float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
vec4 OptTex0Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s0[0],uv,dx,dy);if(optTile==1u)return textureGrad(s0[1],uv,dx,dy);if(optTile==2u)return textureGrad(s0[2],uv,dx,dy);return textureGrad(s0[3],uv,dx,dy);}
vec4 OptTex0(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex0Grad(uv,dx,dy);}
vec4 OptTex0Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s0[0],uv,lod);if(optTile==1u)return textureLod(s0[1],uv,lod);if(optTile==2u)return textureLod(s0[2],uv,lod);return textureLod(s0[3],uv,lod);}
vec4 OptTex4Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s4[0],uv,dx,dy);if(optTile==1u)return textureGrad(s4[1],uv,dx,dy);if(optTile==2u)return textureGrad(s4[2],uv,dx,dy);return textureGrad(s4[3],uv,dx,dy);}
vec4 OptTex4(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex4Grad(uv,dx,dy);}
vec4 OptTex4Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s4[0],uv,lod);if(optTile==1u)return textureLod(s4[1],uv,lod);if(optTile==2u)return textureLod(s4[2],uv,lod);return textureLod(s4[3],uv,lod);}
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
    vec4 v4 = texcoord2;
    vec4 v5 = texcoord3;
    vec4 v6 = vec4(fog0, 0.0, 0.0, 0.0);
    r0 = OptTex0( v2.xy);
    oC0.w = r0.w * v1.x;
    r0.w = max(abs(v5.x), abs(v5.y));
    r0.w = clamp((r0.w * (-3.4482758045196533203125)) + 3.413793087005615234375, 0.0, 1.0);
    r1.x = (-r0.w) + 0.00999999977648258209228515625;
    r1.x = (r1.x >= 0.0) ? 0.0 : 1.0;
    if (r1.x != (-r1.x))
    {
        if (10.0 < v3.z)
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r1 = OptTex4Lod( r1.xy, r1.w);
            vec2 _124 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _124.x;
            r1.z = _124.y;
            vec2 _145 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _145.x;
            r2.y = _145.y;
            vec2 _153 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _153.x;
            r2.w = _153.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _176 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r2.x = _176.x;
            r2.y = _176.y;
            vec2 _183 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _183.x;
            r2.w = _183.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _206 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r2.x = _206.x;
            r2.y = _206.y;
            vec2 _213 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _213.x;
            r2.w = _213.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.x += r2.x;
            vec2 _236 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r2.x = _236.x;
            r2.y = _236.y;
            vec2 _243 = vec2(1.0, 0.0) * v5.zx;
            r2.z = _243.x;
            r2.w = _243.y;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r1.x += r2.x;
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r1.x = (r0.w * r1.x) + 1.0;
            r2.x = min(r1.x, v0.w);
        }
        else
        {
            r1 = (v5.xyzx * vec4(0.5, 0.5, 1.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r1 = OptTex4Lod( r1.xy, r1.w);
            vec2 _294 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _294.x;
            r1.z = _294.y;
            vec2 _304 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _304.x;
            r3.y = _304.y;
            vec2 _311 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _311.x;
            r3.w = _311.y;
            r3 = OptTex4Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _334 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
            r3.x = _334.x;
            r3.y = _334.y;
            vec2 _341 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _341.x;
            r3.w = _341.y;
            r3 = OptTex4Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _363 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _363.x;
            r3.y = _363.y;
            vec2 _370 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _370.x;
            r3.w = _370.y;
            r3 = OptTex4Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _393 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
            r3.x = _393.x;
            r3.y = _393.y;
            vec2 _400 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _400.x;
            r3.w = _400.y;
            r3 = OptTex4Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _422 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r3.x = _422.x;
            r3.y = _422.y;
            vec2 _429 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _429.x;
            r3.w = _429.y;
            r3 = OptTex4Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _452 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
            r3.x = _452.x;
            r3.y = _452.y;
            vec2 _459 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _459.x;
            r3.w = _459.y;
            r3 = OptTex4Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _481 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r3.x = _481.x;
            r3.y = _481.y;
            vec2 _488 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _488.x;
            r3.w = _488.y;
            r3 = OptTex4Lod( r3.xy, r3.w);
            r1.x += r3.x;
            vec2 _511 = r1.yz + optRegs.rows[optTile*82u+uint(12)].xy;
            r3.x = _511.x;
            r3.y = _511.y;
            vec2 _518 = vec2(1.0, 0.0) * v5.zx;
            r3.z = _518.x;
            r3.w = _518.y;
            r3 = OptTex4Lod( r3.xy, r3.w);
            r1.x += r3.x;
            r1.x = (r1.x * 0.111111111938953399658203125) + (-1.0);
            r0.w = (r0.w * r1.x) + 1.0;
            r2.x = min(r0.w, v0.w);
        }
    }
    else
    {
        r2.x = v0.w;
    }
    r0.w = dot(v3.xyz, optRegs.rows[optTile*82u+uint(3)].xyz);
    r0.w = clamp(r0.w + optRegs.rows[optTile*82u+uint(3)].w, 0.0, 1.0);
    r1.x = mix(r2.x, 1.0, r0.w);
    r0.w = dot(optRegs.rows[optTile*82u+uint(4)].xyz, v4.xyz);
    r0.w = (-abs(r0.w)) + 1.2000000476837158203125;
    r0.w *= r0.w;
    r0.w = clamp(r0.w * r0.w, 0.0, 1.0);
    r2.x = mix(r1.x, v0.w, r0.w);
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _628 = r0.www * v0.xyz;
    r1.x = _628.x;
    r1.y = _628.y;
    r1.z = _628.z;
    vec4 _635 = r0;
    vec3 _645 = (_635.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _645.x;
    r0.y = _645.y;
    r0.z = _645.z;
    vec3 _660 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _660.x;
    oC0.y = _660.y;
    oC0.z = _660.z;
    bool _670 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _678;
    if (_670)
    {
        _678 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _678 = _670;
    }
    if (_678)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
