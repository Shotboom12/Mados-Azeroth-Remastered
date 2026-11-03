#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=4)uniform sampler2D s4[4];

vec4 oC0;
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
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    vec4 r6 = vec4(0.0);
    vec4 r7 = vec4(0.0);
    vec4 r8 = vec4(0.0);
    vec4 r9 = vec4(0.0);
    vec4 r10 = vec4(0.0);
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
            vec2 _118 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = _118.x;
            r1.y = _118.y;
            vec2 _139 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _139.x;
            r2.y = _139.y;
            vec2 _150 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _150.x;
            r3.y = _150.y;
            vec2 _161 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _161.x;
            r4.y = _161.y;
            vec4 _166 = r1;
            vec2 _172 = _166.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = _172.x;
            r1.y = _172.y;
            r5 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r5 = OptTex4Lod( r5.xy, r5.w);
            r2.z = 0.0;
            r2.w = 0.0;
            r2 = OptTex4Lod( r2.xy, r2.w);
            r3.z = 0.0;
            r3.w = 0.0;
            r3 = OptTex4Lod( r3.xy, r3.w);
            r4.z = 0.0;
            r4.w = 0.0;
            r4 = OptTex4Lod( r4.xy, r4.w);
            r1.z = 0.0;
            r1.w = 0.0;
            r1 = OptTex4Lod( r1.xy, r1.w);
            r5.y = r2.x;
            r5.z = r3.x;
            r5.w = r4.x;
            r2 = r5 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r1.x += (-v5.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r2, vec4(1.0));
            r1.x += r1.y;
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r1.x = (r0.w * r1.x) + 1.0;
            r2.x = min(r1.x, v0.w);
        }
        else
        {
            vec2 _294 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = _294.x;
            r1.y = _294.y;
            vec2 _304 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _304.x;
            r3.y = _304.y;
            vec2 _315 = r1.xy + optRegs.rows[optTile*82u+uint(6)].xy;
            r4.x = _315.x;
            r4.y = _315.y;
            vec2 _325 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r5.x = _325.x;
            r5.y = _325.y;
            vec2 _336 = r1.xy + optRegs.rows[optTile*82u+uint(8)].xy;
            r6.x = _336.x;
            r6.y = _336.y;
            vec2 _346 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r7.x = _346.x;
            r7.y = _346.y;
            vec2 _357 = r1.xy + optRegs.rows[optTile*82u+uint(10)].xy;
            r8.x = _357.x;
            r8.y = _357.y;
            vec2 _367 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r9.x = _367.x;
            r9.y = _367.y;
            vec4 _372 = r1;
            vec2 _378 = _372.xy + optRegs.rows[optTile*82u+uint(12)].xy;
            r1.x = _378.x;
            r1.y = _378.y;
            r10 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r10 = OptTex4Lod( r10.xy, r10.w);
            r3.z = 0.0;
            r3.w = 0.0;
            r3 = OptTex4Lod( r3.xy, r3.w);
            r4.z = 0.0;
            r4.w = 0.0;
            r4 = OptTex4Lod( r4.xy, r4.w);
            r5.z = 0.0;
            r5.w = 0.0;
            r5 = OptTex4Lod( r5.xy, r5.w);
            r6.z = 0.0;
            r6.w = 0.0;
            r6 = OptTex4Lod( r6.xy, r6.w);
            r7.z = 0.0;
            r7.w = 0.0;
            r7 = OptTex4Lod( r7.xy, r7.w);
            r8.z = 0.0;
            r8.w = 0.0;
            r8 = OptTex4Lod( r8.xy, r8.w);
            r9.z = 0.0;
            r9.w = 0.0;
            r9 = OptTex4Lod( r9.xy, r9.w);
            r1.z = 0.0;
            r1.w = 0.0;
            r1 = OptTex4Lod( r1.xy, r1.w);
            r10.y = r3.x;
            r10.z = r4.x;
            r10.w = r5.x;
            r3 = r10 + (-v5.zzzz);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r6.y = r7.x;
            r6.z = r8.x;
            r6.w = r9.x;
            r4 = r6 + (-v5.zzzz);
            r4 = vec4(greaterThanEqual(r4, vec4(0.0)));
            r1.x += (-v5.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r3, vec4(1.0));
            r1.z = dot(r4, vec4(1.0));
            r1.y += r1.z;
            r1.x += r1.y;
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
    vec3 _630 = r0.www * v0.xyz;
    r1.x = _630.x;
    r1.y = _630.y;
    r1.z = _630.z;
    vec4 _637 = r0;
    vec3 _647 = (_637.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _647.x;
    r0.y = _647.y;
    r0.z = _647.z;
    vec3 _662 = (v6.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _662.x;
    oC0.y = _662.y;
    oC0.z = _662.z;
    bool _672 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _680;
    if (_672)
    {
        _680 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _680 = _672;
    }
    if (_680)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
