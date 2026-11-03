#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



vec4 v0;
vec4 v1;
vec4 v2;
vec4 v3;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 4) out vec4 texcoord2;
layout(location = 5) out vec4 texcoord3;
layout(location = 10) out float fog0;
layout(location = 13) out vec4 wxlGBuf;
layout(location = 14) flat out float wxlGClass;
layout(location = 15) out float wxlGPlain;

float dx_pow(float x, float y)
{
    float _RESERVED_IDENTIFIER_FIXUP_26;
    if (x == 0.0)
    {
        _RESERVED_IDENTIFIER_FIXUP_26 = 0.0;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_26 = exp2(y * log2(abs(x)));
    }
    return _RESERVED_IDENTIFIER_FIXUP_26;
}

float dx_rsq(float x)
{
    return inversesqrt(abs(x));
}


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
layout(location=0)in vec3 optPosition;layout(location=4)in vec2 optUV;layout(location=5)in vec2 optWind;
layout(location=8)in vec4 optRow0;layout(location=9)in vec4 optRow1;layout(location=10)in vec4 optRow2;
layout(location=11)in vec4 optNormal;layout(location=12)in vec4 optColor;layout(location=13)in vec4 optLight;layout(location=14)in vec4 optInstanceWind;
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 r2 = vec4(0.0);
    vec4 r3 = vec4(0.0);
    vec4 r4 = vec4(0.0);
    vec4 r5 = vec4(0.0);
    vec4 r6 = vec4(0.0);
    vec4 o0 = vec4(0.0);
    vec4 o1 = vec4(0.0);
    vec4 o2 = vec4(0.0);
    vec4 o3 = vec4(0.0);
    vec4 o4 = vec4(0.0);
    vec4 o5 = vec4(0.0);
    vec4 o6 = vec4(0.0);
    vec4 o7 = vec4(0.0);
    r0 = optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy;
    r0 = (v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + r0;
    r0 = (v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + r0;
    r0 += optRegs.rows[optTile*82u+17u+uint(3)];
    r1 = r0.yyyy * optRegs.rows[optTile*82u+17u+uint(5)];
    r1 = (r0.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + r1;
    r1 = (r0.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + r1;
    o0 = (r0.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + r1;
    o2.x = clamp((r0.z * optRegs.rows[optTile*82u+17u+uint(9)].x) + optRegs.rows[optTile*82u+17u+uint(9)].y, 0.0, 1.0);
    r0.w = (r0.z * optRegs.rows[optTile*82u+17u+uint(8)].x) + optRegs.rows[optTile*82u+17u+uint(8)].y;
    r0.w = max(r0.w, 0.0);
    float param = r0.w;
    float param_1 = optRegs.rows[optTile*82u+17u+uint(8)].z;
    float param_2 = param;
    float param_3 = param_1;
    r1.x = dx_pow(param_2, param_3);
    o7.x = min(r1.x, 1.0);
    r1.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    r1.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    r1.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_185 = r1.xyz * optRegs.rows[optTile*82u+17u+uint(14)].yyy;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_185.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_185.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_185.z;
    r3.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    r3.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    r3.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_207 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_209 = (optRegs.rows[optTile*82u+17u+uint(14)].xxx * r3.xyz) + _RESERVED_IDENTIFIER_FIXUP_207.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_209.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_209.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_209.z;
    r4.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    r4.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    r4.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_231 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_233 = (optRegs.rows[optTile*82u+17u+uint(14)].zzz * r4.xyz) + _RESERVED_IDENTIFIER_FIXUP_231.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_233.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_233.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_233.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_243 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_245 = (-r0.xyz) + _RESERVED_IDENTIFIER_FIXUP_243.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_245.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_245.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_245.z;
    r0.w = dot(r2.xyz, r2.xyz);
    float param_2_1 = r0.w;
    float param_4 = param_2_1;
    r0.w = dx_rsq(param_4);
    r1.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_267 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_271 = _RESERVED_IDENTIFIER_FIXUP_267.xyz * r0.www;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_271.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_271.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_271.z;
    r0.w = (optRegs.rows[optTile*82u+17u+uint(16)].y * r1.w) + optRegs.rows[optTile*82u+17u+uint(16)].x;
    r1.w *= r1.w;
    r0.w = (r1.w * optRegs.rows[optTile*82u+17u+uint(16)].z) + r0.w;
    r0.w = 1.0 / r0.w;
    vec3 _RESERVED_IDENTIFIER_FIXUP_313 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    r5.x = _RESERVED_IDENTIFIER_FIXUP_313.x;
    r5.y = _RESERVED_IDENTIFIER_FIXUP_313.y;
    r5.z = _RESERVED_IDENTIFIER_FIXUP_313.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_326 = r5;
    vec3 _RESERVED_IDENTIFIER_FIXUP_328 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _RESERVED_IDENTIFIER_FIXUP_326.xyz;
    r5.x = _RESERVED_IDENTIFIER_FIXUP_328.x;
    r5.y = _RESERVED_IDENTIFIER_FIXUP_328.y;
    r5.z = _RESERVED_IDENTIFIER_FIXUP_328.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_341 = r5;
    vec3 _RESERVED_IDENTIFIER_FIXUP_343 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _RESERVED_IDENTIFIER_FIXUP_341.xyz;
    r5.x = _RESERVED_IDENTIFIER_FIXUP_343.x;
    r5.y = _RESERVED_IDENTIFIER_FIXUP_343.y;
    r5.z = _RESERVED_IDENTIFIER_FIXUP_343.z;
    r1.w = clamp(dot(r2.xyz, r5.xyz), 0.0, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_363 = r1.www * optRegs.rows[optTile*82u+17u+uint(15)].xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_363.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_363.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_363.z;
    r1.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(10)].xyz, r5.xyz), 0.0, 1.0);
    r6.x = optRegs.rows[optTile*82u+17u+uint(12)].x;
    r6.y = optRegs.rows[optTile*82u+17u+uint(12)].y;
    r6.z = optRegs.rows[optTile*82u+17u+uint(12)].z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_389 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_398 = (_RESERVED_IDENTIFIER_FIXUP_389.xyz * r1.www) + optRegs.rows[optTile*82u+17u+uint(11)].xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_398.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_398.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_398.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_405 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_412 = (_RESERVED_IDENTIFIER_FIXUP_405.xyz * r0.www) + r6.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_412.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_412.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_412.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_425 = r1.xyz * optRegs.rows[optTile*82u+17u+uint(17)].yyy;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_425.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_425.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_425.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_438 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_440 = (optRegs.rows[optTile*82u+17u+uint(17)].xxx * r3.xyz) + _RESERVED_IDENTIFIER_FIXUP_438.xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_440.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_440.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_440.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_453 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_455 = (optRegs.rows[optTile*82u+17u+uint(17)].zzz * r4.xyz) + _RESERVED_IDENTIFIER_FIXUP_453.xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_455.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_455.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_455.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_465 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_467 = (-r0.xyz) + _RESERVED_IDENTIFIER_FIXUP_465.xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_467.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_467.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_467.z;
    r0.w = dot(r6.xyz, r6.xyz);
    float param_3_1 = r0.w;
    float param_5 = param_3_1;
    r0.w = dx_rsq(param_5);
    r1.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_489 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_493 = _RESERVED_IDENTIFIER_FIXUP_489.xyz * r0.www;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_493.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_493.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_493.z;
    r0.w = clamp(dot(r6.xyz, r5.xyz), 0.0, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_513 = r0.www * optRegs.rows[optTile*82u+17u+uint(18)].xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_513.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_513.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_513.z;
    r0.w = (optRegs.rows[optTile*82u+17u+uint(19)].y * r1.w) + optRegs.rows[optTile*82u+17u+uint(19)].x;
    r1.w *= r1.w;
    r0.w = (r1.w * optRegs.rows[optTile*82u+17u+uint(19)].z) + r0.w;
    r0.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_554 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_556 = (r6.xyz * r0.www) + _RESERVED_IDENTIFIER_FIXUP_554.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_556.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_556.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_556.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_563 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_569 = _RESERVED_IDENTIFIER_FIXUP_563.xyz * optRegs.rows[optTile*82u+17u+uint(20)].yyy;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_569.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_569.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_569.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_582 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_584 = (optRegs.rows[optTile*82u+17u+uint(20)].xxx * r3.xyz) + _RESERVED_IDENTIFIER_FIXUP_582.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_584.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_584.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_584.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_597 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_599 = (optRegs.rows[optTile*82u+17u+uint(20)].zzz * r4.xyz) + _RESERVED_IDENTIFIER_FIXUP_597.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_599.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_599.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_599.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_609 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_611 = (-r0.xyz) + _RESERVED_IDENTIFIER_FIXUP_609.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_611.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_611.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_611.z;
    r0.w = dot(r1.xyz, r1.xyz);
    float param_4_1 = r0.w;
    float param_6 = param_4_1;
    r0.w = dx_rsq(param_6);
    r1.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_633 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_637 = _RESERVED_IDENTIFIER_FIXUP_633.xyz * r0.www;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_637.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_637.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_637.z;
    r0.w = clamp(dot(r1.xyz, r5.xyz), 0.0, 1.0);
    o5.x = r5.x;
    o5.y = r5.y;
    o5.z = r5.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_665 = r0.www * optRegs.rows[optTile*82u+17u+uint(21)].xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_665.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_665.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_665.z;
    r0.w = (optRegs.rows[optTile*82u+17u+uint(22)].y * r1.w) + optRegs.rows[optTile*82u+17u+uint(22)].x;
    r1.w *= r1.w;
    r0.w = (r1.w * optRegs.rows[optTile*82u+17u+uint(22)].z) + r0.w;
    r0.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_701 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_708 = (_RESERVED_IDENTIFIER_FIXUP_701.xyz * r0.www) + r2.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_708.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_708.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_708.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_715 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_718 = min(_RESERVED_IDENTIFIER_FIXUP_715.xyz, vec3(1.0));
    r1.x = _RESERVED_IDENTIFIER_FIXUP_718.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_718.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_718.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_730 = r1.xyz * v2.xyz;
    o1.x = _RESERVED_IDENTIFIER_FIXUP_730.x;
    o1.y = _RESERVED_IDENTIFIER_FIXUP_730.y;
    o1.z = _RESERVED_IDENTIFIER_FIXUP_730.z;
    r1 = (r0.xyzx * vec4(1.0, 1.0, 1.0, 0.0)) + vec4(0.0, 0.0, 0.0, 1.0);
    o4.x = r0.x;
    o4.y = r0.y;
    o4.z = r0.z;
    o6.x = dot(r1, optRegs.rows[optTile*82u+17u+uint(23)]);
    o6.y = dot(r1, optRegs.rows[optTile*82u+17u+uint(24)]);
    o6.z = dot(r1, optRegs.rows[optTile*82u+17u+uint(25)]);
    o1.w = v2.w;
    o2.y = 0.0;
    o2.z = 0.0;
    o2.w = 0.0;
    o3.x = v3.x;
    o3.y = v3.y;
    gl_Position = vec4(o0.x, -o0.y, o0.z, o0.w);
    color0 = o1;
    color1 = o2;
    texcoord0 = o3;
    texcoord1 = o4;
    texcoord2 = o5;
    texcoord3 = o6;
    fog0 = o7.x;
    wxlGBuf = vec4(0.0);
    wxlGClass = 0.0;
    wxlGPlain = 1.0;
}


void main(){
optTile=0u;
vec4 optP=vec4(optPosition,1);vec3 optPos=vec3(dot(optRow0,optP),dot(optRow1,optP),dot(optRow2,optP));
v0=vec4(optPos,1);
v1=optNormal;
v2=optColor;
v3=vec4(optUV,0,1);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
