#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(set=0,binding=0)uniform sampler2D s0[4];
layout(set=0,binding=4)uniform sampler2D s4[4];
layout(set=0,binding=5)uniform sampler2D s5[4];
layout(set=0,binding=6)uniform sampler2D s6[4];
layout(set=0,binding=7)uniform sampler2D s7[4];

vec4 oC0;
layout(location = 0) in vec4 color0;
layout(location = 1) in vec4 color1;
layout(location = 2) in vec4 texcoord0;
layout(location = 3) in vec4 texcoord1;
layout(location = 4) in vec4 texcoord2;
layout(location = 5) in vec4 texcoord3;
layout(location = 6) in vec4 texcoord4;
layout(location = 7) in vec4 texcoord5;
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
vec4 OptTex5Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s5[0],uv,dx,dy);if(optTile==1u)return textureGrad(s5[1],uv,dx,dy);if(optTile==2u)return textureGrad(s5[2],uv,dx,dy);return textureGrad(s5[3],uv,dx,dy);}
vec4 OptTex5(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex5Grad(uv,dx,dy);}
vec4 OptTex5Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s5[0],uv,lod);if(optTile==1u)return textureLod(s5[1],uv,lod);if(optTile==2u)return textureLod(s5[2],uv,lod);return textureLod(s5[3],uv,lod);}
vec4 OptTex6Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s6[0],uv,dx,dy);if(optTile==1u)return textureGrad(s6[1],uv,dx,dy);if(optTile==2u)return textureGrad(s6[2],uv,dx,dy);return textureGrad(s6[3],uv,dx,dy);}
vec4 OptTex6(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex6Grad(uv,dx,dy);}
vec4 OptTex6(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex6Grad(uv,dx,dy);}
vec4 OptTex6Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s6[0],uv,lod);if(optTile==1u)return textureLod(s6[1],uv,lod);if(optTile==2u)return textureLod(s6[2],uv,lod);return textureLod(s6[3],uv,lod);}
vec4 OptTex7Grad(vec2 uv,vec2 dx,vec2 dy){if(optTile==0u)return textureGrad(s7[0],uv,dx,dy);if(optTile==1u)return textureGrad(s7[1],uv,dx,dy);if(optTile==2u)return textureGrad(s7[2],uv,dx,dy);return textureGrad(s7[3],uv,dx,dy);}
vec4 OptTex7(vec2 uv){vec2 dx=dFdx(uv),dy=dFdy(uv);return OptTex7Grad(uv,dx,dy);}
vec4 OptTex7(vec2 uv,float bias){float k=exp2(bias);vec2 dx=dFdx(uv)*k,dy=dFdy(uv)*k;return OptTex7Grad(uv,dx,dy);}
vec4 OptTex7Lod(vec2 uv,float lod){if(optTile==0u)return textureLod(s7[0],uv,lod);if(optTile==1u)return textureLod(s7[1],uv,lod);if(optTile==2u)return textureLod(s7[2],uv,lod);return textureLod(s7[3],uv,lod);}
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
    vec4 v6 = texcoord4;
    vec4 v7 = texcoord5;
    vec4 v8 = vec4(fog0, 0.0, 0.0, 0.0);
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
            vec2 _124 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.x = _124.x;
            r1.y = _124.y;
            vec2 _145 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _145.x;
            r2.y = _145.y;
            vec2 _156 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r3.x = _156.x;
            r3.y = _156.y;
            vec2 _167 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r4.x = _167.x;
            r4.y = _167.y;
            vec4 _172 = r1;
            vec2 _178 = _172.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = _178.x;
            r1.y = _178.y;
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
        }
        else
        {
            vec2 _294 = (v5.xy * vec2(0.5)) + vec2(0.5);
            r1.y = _294.x;
            r1.z = _294.y;
            vec2 _304 = r1.yz + optRegs.rows[optTile*82u+uint(5)].xy;
            r2.x = _304.x;
            r2.y = _304.y;
            vec2 _315 = r1.yz + optRegs.rows[optTile*82u+uint(6)].xy;
            r3.x = _315.x;
            r3.y = _315.y;
            vec2 _325 = r1.yz + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _325.x;
            r4.y = _325.y;
            vec2 _336 = r1.yz + optRegs.rows[optTile*82u+uint(8)].xy;
            r5.x = _336.x;
            r5.y = _336.y;
            vec2 _346 = r1.yz + optRegs.rows[optTile*82u+uint(9)].xy;
            r6.x = _346.x;
            r6.y = _346.y;
            vec2 _357 = r1.yz + optRegs.rows[optTile*82u+uint(10)].xy;
            r7.x = _357.x;
            r7.y = _357.y;
            vec2 _367 = r1.yz + optRegs.rows[optTile*82u+uint(11)].xy;
            r8.x = _367.x;
            r8.y = _367.y;
            vec2 _378 = r1.yz + optRegs.rows[optTile*82u+uint(12)].xy;
            r9.x = _378.x;
            r9.y = _378.y;
            r10 = (v5.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r10 = OptTex4Lod( r10.xy, r10.w);
            r2.z = 0.0;
            r2.w = 0.0;
            r2 = OptTex4Lod( r2.xy, r2.w);
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
            r10.y = r2.x;
            r10.z = r3.x;
            r10.w = r4.x;
            r2 = r10 + (-v5.zzzz);
            r2 = vec4(greaterThanEqual(r2, vec4(0.0)));
            r5.y = r6.x;
            r5.z = r7.x;
            r5.w = r8.x;
            r3 = r5 + (-v5.zzzz);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.y = r9.x + (-v5.z);
            r1.y = float(r1.y >= 0.0);
            r1.z = dot(r2, vec4(1.0));
            r1.w = dot(r3, vec4(1.0));
            r1.z += r1.w;
            r1.y += r1.z;
            r1.y = (r1.y * 0.111111111938953399658203125) + (-1.0);
            r1.x = (r0.w * r1.y) + 1.0;
        }
    }
    else
    {
        r1.x = 1.0;
    }
    r0.w = dot(v3.xyz, optRegs.rows[optTile*82u+uint(3)].xyz);
    r0.w = clamp(r0.w + optRegs.rows[optTile*82u+uint(3)].w, 0.0, 1.0);
    r2.x = mix(r1.x, 1.0, r0.w);
    r0.w = max(abs(v6.x), abs(v6.y));
    if (r0.w < 1.0)
    {
        vec2 _591 = (v6.xy * vec2(0.5)) + vec2(0.5);
        r1.x = _591.x;
        r1.y = _591.y;
        vec2 _601 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
        r3.x = _601.x;
        r3.y = _601.y;
        vec2 _611 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
        r4.x = _611.x;
        r4.y = _611.y;
        vec2 _621 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
        r5.x = _621.x;
        r5.y = _621.y;
        vec4 _626 = r1;
        vec2 _631 = _626.xy + optRegs.rows[optTile*82u+uint(11)].xy;
        r1.x = _631.x;
        r1.y = _631.y;
        r6 = (v6.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
        r6 = OptTex5Lod( r6.xy, r6.w);
        r3.z = 0.0;
        r3.w = 0.0;
        r3 = OptTex5Lod( r3.xy, r3.w);
        r4.z = 0.0;
        r4.w = 0.0;
        r4 = OptTex5Lod( r4.xy, r4.w);
        r5.z = 0.0;
        r5.w = 0.0;
        r5 = OptTex5Lod( r5.xy, r5.w);
        r1.z = 0.0;
        r1.w = 0.0;
        r1 = OptTex5Lod( r1.xy, r1.w);
        r6.y = r3.x;
        r6.z = r4.x;
        r6.w = r5.x;
        r3 = r6 + (-v6.zzzz);
        r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
        r0.w = r1.x + (-v6.z);
        r0.w = float(r0.w >= 0.0);
        r1.x = dot(r3, vec4(1.0));
        r0.w += r1.x;
        r0.w *= 0.20000000298023223876953125;
    }
    else
    {
        r1.x = max(abs(v7.x), abs(v7.y));
        if (r1.x < 1.0)
        {
            vec2 _746 = (v7.xy * vec2(0.5)) + vec2(0.5);
            r1.x = _746.x;
            r1.y = _746.y;
            vec2 _756 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _756.x;
            r3.y = _756.y;
            vec2 _766 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _766.x;
            r4.y = _766.y;
            vec2 _776 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _776.x;
            r5.y = _776.y;
            vec4 _781 = r1;
            vec2 _786 = _781.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r1.x = _786.x;
            r1.y = _786.y;
            r6 = (v7.xyxx * vec4(0.5, 0.5, 0.0, 0.0)) + vec4(0.5, 0.5, 0.0, 0.0);
            r6 = OptTex6Lod( r6.xy, r6.w);
            r3.z = 0.0;
            r3.w = 0.0;
            r3 = OptTex6Lod( r3.xy, r3.w);
            r4.z = 0.0;
            r4.w = 0.0;
            r4 = OptTex6Lod( r4.xy, r4.w);
            r5.z = 0.0;
            r5.w = 0.0;
            r5 = OptTex6Lod( r5.xy, r5.w);
            r1.z = 0.0;
            r1.w = 0.0;
            r1 = OptTex6Lod( r1.xy, r1.w);
            r6.y = r3.x;
            r6.z = r4.x;
            r6.w = r5.x;
            r3 = r6 + (-v7.zzzz);
            r3 = vec4(greaterThanEqual(r3, vec4(0.0)));
            r1.x += (-v7.z);
            r1.x = float(r1.x >= 0.0);
            r1.y = dot(r3, vec4(1.0));
            r1.x += r1.y;
            r0.w = r1.x * 0.20000000298023223876953125;
        }
        else
        {
            r1.x = (v5.w * 0.5) + 0.5;
            r1.y = (v6.w * 0.5) + 0.5;
            vec2 _900 = r1.xy + optRegs.rows[optTile*82u+uint(5)].xy;
            r3.x = _900.x;
            r3.y = _900.y;
            vec2 _910 = r1.xy + optRegs.rows[optTile*82u+uint(7)].xy;
            r4.x = _910.x;
            r4.y = _910.y;
            vec2 _920 = r1.xy + optRegs.rows[optTile*82u+uint(9)].xy;
            r5.x = _920.x;
            r5.y = _920.y;
            vec2 _930 = r1.xy + optRegs.rows[optTile*82u+uint(11)].xy;
            r6.x = _930.x;
            r6.y = _930.y;
            r1.z = 0.0;
            r1.w = 0.0;
            r1 = OptTex7Lod( r1.xy, r1.w);
            r3.z = 0.0;
            r3.w = 0.0;
            r3 = OptTex7Lod( r3.xy, r3.w);
            r4.z = 0.0;
            r4.w = 0.0;
            r4 = OptTex7Lod( r4.xy, r4.w);
            r5.z = 0.0;
            r5.w = 0.0;
            r5 = OptTex7Lod( r5.xy, r5.w);
            r6.z = 0.0;
            r6.w = 0.0;
            r6 = OptTex7Lod( r6.xy, r6.w);
            r1.y = r3.x;
            r1.z = r4.x;
            r1.w = r5.x;
            r1 += (-v7.wwww);
            r1 = vec4(greaterThanEqual(r1, vec4(0.0)));
            r2.y = r6.x + (-v7.w);
            r2.y = float(r2.y >= 0.0);
            r1.x = dot(r1, vec4(1.0));
            r1.x = r2.y + r1.x;
            r1.y = v5.w;
            r1.z = v6.w;
            r2.y = max(abs(r1.y), abs(r1.z));
            r1.y = clamp((r2.y * (-11.111110687255859375)) + 11.0, 0.0, 1.0);
            r1.x = (r1.x * 0.20000000298023223876953125) + (-1.0);
            r0.w = (r1.y * r1.x) + 1.0;
        }
    }
    r1.x = min(r0.w, r2.x);
    r0.w = dot(optRegs.rows[optTile*82u+uint(4)].xyz, v4.xyz);
    r0.w = (-abs(r0.w)) + 1.2000000476837158203125;
    r0.w *= r0.w;
    r0.w = clamp(r0.w * r0.w, 0.0, 1.0);
    r2.x = mix(r1.x, 1.0, r0.w);
    r0.w = (r2.x * 0.300000011920928955078125) + 0.699999988079071044921875;
    vec3 _1109 = r0.www * v0.xyz;
    r1.x = _1109.x;
    r1.y = _1109.y;
    r1.z = _1109.z;
    vec4 _1116 = r0;
    vec3 _1126 = (_1116.xyz * r1.xyz) + (-optRegs.rows[optTile*82u+uint(2)].xyz);
    r0.x = _1126.x;
    r0.y = _1126.y;
    r0.z = _1126.z;
    vec3 _1141 = (v8.xxx * r0.xyz) + optRegs.rows[optTile*82u+uint(2)].xyz;
    oC0.x = _1141.x;
    oC0.y = _1141.y;
    oC0.z = _1141.z;
    bool _1151 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _1159;
    if (_1151)
    {
        _1159 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _1159 = _1151;
    }
    if (_1159)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
