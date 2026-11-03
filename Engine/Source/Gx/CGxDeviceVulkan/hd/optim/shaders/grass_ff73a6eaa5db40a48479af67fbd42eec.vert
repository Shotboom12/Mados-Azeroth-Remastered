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
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
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
    vec4 o8 = vec4(0.0);
    vec4 o9 = vec4(0.0);
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
    o9.x = min(r1.x, 1.0);
    r1.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    r1.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    r1.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_187 = r1.xyz * optRegs.rows[optTile*82u+17u+uint(14)].yyy;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_187.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_187.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_187.z;
    r3.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    r3.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    r3.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_209 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_211 = (optRegs.rows[optTile*82u+17u+uint(14)].xxx * r3.xyz) + _RESERVED_IDENTIFIER_FIXUP_209.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_211.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_211.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_211.z;
    r4.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    r4.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    r4.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_233 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_235 = (optRegs.rows[optTile*82u+17u+uint(14)].zzz * r4.xyz) + _RESERVED_IDENTIFIER_FIXUP_233.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_235.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_235.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_235.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_245 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_247 = (-r0.xyz) + _RESERVED_IDENTIFIER_FIXUP_245.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_247.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_247.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_247.z;
    r0.w = dot(r2.xyz, r2.xyz);
    float param_2_1 = r0.w;
    float param_4 = param_2_1;
    r0.w = dx_rsq(param_4);
    r1.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_269 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_273 = _RESERVED_IDENTIFIER_FIXUP_269.xyz * r0.www;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_273.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_273.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_273.z;
    r0.w = (optRegs.rows[optTile*82u+17u+uint(16)].y * r1.w) + optRegs.rows[optTile*82u+17u+uint(16)].x;
    r1.w *= r1.w;
    r0.w = (r1.w * optRegs.rows[optTile*82u+17u+uint(16)].z) + r0.w;
    r0.w = 1.0 / r0.w;
    vec3 _RESERVED_IDENTIFIER_FIXUP_315 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    r5.x = _RESERVED_IDENTIFIER_FIXUP_315.x;
    r5.y = _RESERVED_IDENTIFIER_FIXUP_315.y;
    r5.z = _RESERVED_IDENTIFIER_FIXUP_315.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_328 = r5;
    vec3 _RESERVED_IDENTIFIER_FIXUP_330 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _RESERVED_IDENTIFIER_FIXUP_328.xyz;
    r5.x = _RESERVED_IDENTIFIER_FIXUP_330.x;
    r5.y = _RESERVED_IDENTIFIER_FIXUP_330.y;
    r5.z = _RESERVED_IDENTIFIER_FIXUP_330.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_343 = r5;
    vec3 _RESERVED_IDENTIFIER_FIXUP_345 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _RESERVED_IDENTIFIER_FIXUP_343.xyz;
    r5.x = _RESERVED_IDENTIFIER_FIXUP_345.x;
    r5.y = _RESERVED_IDENTIFIER_FIXUP_345.y;
    r5.z = _RESERVED_IDENTIFIER_FIXUP_345.z;
    r1.w = clamp(dot(r2.xyz, r5.xyz), 0.0, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_365 = r1.www * optRegs.rows[optTile*82u+17u+uint(15)].xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_365.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_365.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_365.z;
    r1.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(10)].xyz, r5.xyz), 0.0, 1.0);
    r6.x = optRegs.rows[optTile*82u+17u+uint(12)].x;
    r6.y = optRegs.rows[optTile*82u+17u+uint(12)].y;
    r6.z = optRegs.rows[optTile*82u+17u+uint(12)].z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_391 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_400 = (_RESERVED_IDENTIFIER_FIXUP_391.xyz * r1.www) + optRegs.rows[optTile*82u+17u+uint(11)].xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_400.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_400.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_400.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_407 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_414 = (_RESERVED_IDENTIFIER_FIXUP_407.xyz * r0.www) + r6.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_414.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_414.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_414.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_427 = r1.xyz * optRegs.rows[optTile*82u+17u+uint(17)].yyy;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_427.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_427.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_427.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_440 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_442 = (optRegs.rows[optTile*82u+17u+uint(17)].xxx * r3.xyz) + _RESERVED_IDENTIFIER_FIXUP_440.xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_442.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_442.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_442.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_455 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_457 = (optRegs.rows[optTile*82u+17u+uint(17)].zzz * r4.xyz) + _RESERVED_IDENTIFIER_FIXUP_455.xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_457.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_457.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_457.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_467 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_469 = (-r0.xyz) + _RESERVED_IDENTIFIER_FIXUP_467.xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_469.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_469.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_469.z;
    r0.w = dot(r6.xyz, r6.xyz);
    float param_3_1 = r0.w;
    float param_5 = param_3_1;
    r0.w = dx_rsq(param_5);
    r1.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_491 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_495 = _RESERVED_IDENTIFIER_FIXUP_491.xyz * r0.www;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_495.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_495.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_495.z;
    r0.w = clamp(dot(r6.xyz, r5.xyz), 0.0, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_515 = r0.www * optRegs.rows[optTile*82u+17u+uint(18)].xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_515.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_515.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_515.z;
    r0.w = (optRegs.rows[optTile*82u+17u+uint(19)].y * r1.w) + optRegs.rows[optTile*82u+17u+uint(19)].x;
    r1.w *= r1.w;
    r0.w = (r1.w * optRegs.rows[optTile*82u+17u+uint(19)].z) + r0.w;
    r0.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_556 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_558 = (r6.xyz * r0.www) + _RESERVED_IDENTIFIER_FIXUP_556.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_558.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_558.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_558.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_565 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_571 = _RESERVED_IDENTIFIER_FIXUP_565.xyz * optRegs.rows[optTile*82u+17u+uint(20)].yyy;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_571.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_571.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_571.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_584 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_586 = (optRegs.rows[optTile*82u+17u+uint(20)].xxx * r3.xyz) + _RESERVED_IDENTIFIER_FIXUP_584.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_586.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_586.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_586.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_599 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_601 = (optRegs.rows[optTile*82u+17u+uint(20)].zzz * r4.xyz) + _RESERVED_IDENTIFIER_FIXUP_599.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_601.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_601.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_601.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_611 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_613 = (-r0.xyz) + _RESERVED_IDENTIFIER_FIXUP_611.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_613.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_613.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_613.z;
    r0.w = dot(r1.xyz, r1.xyz);
    float param_4_1 = r0.w;
    float param_6 = param_4_1;
    r0.w = dx_rsq(param_6);
    r1.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_635 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_639 = _RESERVED_IDENTIFIER_FIXUP_635.xyz * r0.www;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_639.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_639.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_639.z;
    r0.w = clamp(dot(r1.xyz, r5.xyz), 0.0, 1.0);
    o5.x = r5.x;
    o5.y = r5.y;
    o5.z = r5.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_667 = r0.www * optRegs.rows[optTile*82u+17u+uint(21)].xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_667.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_667.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_667.z;
    r0.w = (optRegs.rows[optTile*82u+17u+uint(22)].y * r1.w) + optRegs.rows[optTile*82u+17u+uint(22)].x;
    r1.w *= r1.w;
    r0.w = (r1.w * optRegs.rows[optTile*82u+17u+uint(22)].z) + r0.w;
    r0.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_703 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_710 = (_RESERVED_IDENTIFIER_FIXUP_703.xyz * r0.www) + r2.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_710.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_710.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_710.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_717 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_720 = min(_RESERVED_IDENTIFIER_FIXUP_717.xyz, vec3(1.0));
    r1.x = _RESERVED_IDENTIFIER_FIXUP_720.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_720.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_720.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_732 = r1.xyz * v2.xyz;
    o1.x = _RESERVED_IDENTIFIER_FIXUP_732.x;
    o1.y = _RESERVED_IDENTIFIER_FIXUP_732.y;
    o1.z = _RESERVED_IDENTIFIER_FIXUP_732.z;
    r1 = (r0.xyzx * vec4(1.0, 1.0, 1.0, 0.0)) + vec4(0.0, 0.0, 0.0, 1.0);
    o4.x = r0.x;
    o4.y = r0.y;
    o4.z = r0.z;
    o6.x = dot(r1, optRegs.rows[optTile*82u+17u+uint(23)]);
    o6.y = dot(r1, optRegs.rows[optTile*82u+17u+uint(24)]);
    o6.z = dot(r1, optRegs.rows[optTile*82u+17u+uint(25)]);
    o7.x = dot(r1, optRegs.rows[optTile*82u+17u+uint(26)]);
    o7.y = dot(r1, optRegs.rows[optTile*82u+17u+uint(27)]);
    o7.z = dot(r1, optRegs.rows[optTile*82u+17u+uint(28)]);
    o8.x = dot(r1, optRegs.rows[optTile*82u+17u+uint(29)]);
    o8.y = dot(r1, optRegs.rows[optTile*82u+17u+uint(30)]);
    o8.z = dot(r1, optRegs.rows[optTile*82u+17u+uint(31)]);
    o6.w = dot(r1, optRegs.rows[optTile*82u+17u+uint(32)]);
    o7.w = dot(r1, optRegs.rows[optTile*82u+17u+uint(33)]);
    o8.w = dot(r1, optRegs.rows[optTile*82u+17u+uint(34)]);
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
    texcoord4 = o7;
    texcoord5 = o8;
    fog0 = o9.x;
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
