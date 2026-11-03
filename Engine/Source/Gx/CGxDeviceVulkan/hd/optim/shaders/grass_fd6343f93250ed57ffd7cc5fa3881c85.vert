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
    o4.x = min(r1.x, 1.0);
    r1.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    r1.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    r1.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_182 = r1.xyz * optRegs.rows[optTile*82u+17u+uint(14)].yyy;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_182.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_182.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_182.z;
    r3.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    r3.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    r3.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_204 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_206 = (optRegs.rows[optTile*82u+17u+uint(14)].xxx * r3.xyz) + _RESERVED_IDENTIFIER_FIXUP_204.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_206.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_206.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_206.z;
    r4.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    r4.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    r4.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_228 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_230 = (optRegs.rows[optTile*82u+17u+uint(14)].zzz * r4.xyz) + _RESERVED_IDENTIFIER_FIXUP_228.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_230.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_230.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_230.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_240 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_242 = (-r0.xyz) + _RESERVED_IDENTIFIER_FIXUP_240.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_242.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_242.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_242.z;
    r0.w = dot(r2.xyz, r2.xyz);
    float param_2_1 = r0.w;
    float param_4 = param_2_1;
    r0.w = dx_rsq(param_4);
    r1.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_264 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_268 = _RESERVED_IDENTIFIER_FIXUP_264.xyz * r0.www;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_268.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_268.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_268.z;
    r0.w = (optRegs.rows[optTile*82u+17u+uint(16)].y * r1.w) + optRegs.rows[optTile*82u+17u+uint(16)].x;
    r1.w *= r1.w;
    r0.w = (r1.w * optRegs.rows[optTile*82u+17u+uint(16)].z) + r0.w;
    r0.w = 1.0 / r0.w;
    vec3 _RESERVED_IDENTIFIER_FIXUP_310 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    r5.x = _RESERVED_IDENTIFIER_FIXUP_310.x;
    r5.y = _RESERVED_IDENTIFIER_FIXUP_310.y;
    r5.z = _RESERVED_IDENTIFIER_FIXUP_310.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_323 = r5;
    vec3 _RESERVED_IDENTIFIER_FIXUP_325 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _RESERVED_IDENTIFIER_FIXUP_323.xyz;
    r5.x = _RESERVED_IDENTIFIER_FIXUP_325.x;
    r5.y = _RESERVED_IDENTIFIER_FIXUP_325.y;
    r5.z = _RESERVED_IDENTIFIER_FIXUP_325.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_338 = r5;
    vec3 _RESERVED_IDENTIFIER_FIXUP_340 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _RESERVED_IDENTIFIER_FIXUP_338.xyz;
    r5.x = _RESERVED_IDENTIFIER_FIXUP_340.x;
    r5.y = _RESERVED_IDENTIFIER_FIXUP_340.y;
    r5.z = _RESERVED_IDENTIFIER_FIXUP_340.z;
    r1.w = clamp(dot(r2.xyz, r5.xyz), 0.0, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_360 = r1.www * optRegs.rows[optTile*82u+17u+uint(15)].xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_360.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_360.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_360.z;
    r1.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(10)].xyz, r5.xyz), 0.0, 1.0);
    r6.x = optRegs.rows[optTile*82u+17u+uint(12)].x;
    r6.y = optRegs.rows[optTile*82u+17u+uint(12)].y;
    r6.z = optRegs.rows[optTile*82u+17u+uint(12)].z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_386 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_395 = (_RESERVED_IDENTIFIER_FIXUP_386.xyz * r1.www) + optRegs.rows[optTile*82u+17u+uint(11)].xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_395.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_395.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_395.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_402 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_409 = (_RESERVED_IDENTIFIER_FIXUP_402.xyz * r0.www) + r6.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_409.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_409.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_409.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_422 = r1.xyz * optRegs.rows[optTile*82u+17u+uint(17)].yyy;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_422.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_422.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_422.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_435 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_437 = (optRegs.rows[optTile*82u+17u+uint(17)].xxx * r3.xyz) + _RESERVED_IDENTIFIER_FIXUP_435.xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_437.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_437.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_437.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_450 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_452 = (optRegs.rows[optTile*82u+17u+uint(17)].zzz * r4.xyz) + _RESERVED_IDENTIFIER_FIXUP_450.xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_452.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_452.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_452.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_462 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_464 = (-r0.xyz) + _RESERVED_IDENTIFIER_FIXUP_462.xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_464.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_464.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_464.z;
    r0.w = dot(r6.xyz, r6.xyz);
    float param_3_1 = r0.w;
    float param_5 = param_3_1;
    r0.w = dx_rsq(param_5);
    r1.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_486 = r6;
    vec3 _RESERVED_IDENTIFIER_FIXUP_490 = _RESERVED_IDENTIFIER_FIXUP_486.xyz * r0.www;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_490.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_490.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_490.z;
    r0.w = clamp(dot(r6.xyz, r5.xyz), 0.0, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_510 = r0.www * optRegs.rows[optTile*82u+17u+uint(18)].xyz;
    r6.x = _RESERVED_IDENTIFIER_FIXUP_510.x;
    r6.y = _RESERVED_IDENTIFIER_FIXUP_510.y;
    r6.z = _RESERVED_IDENTIFIER_FIXUP_510.z;
    r0.w = (optRegs.rows[optTile*82u+17u+uint(19)].y * r1.w) + optRegs.rows[optTile*82u+17u+uint(19)].x;
    r1.w *= r1.w;
    r0.w = (r1.w * optRegs.rows[optTile*82u+17u+uint(19)].z) + r0.w;
    r0.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_551 = r2;
    vec3 _RESERVED_IDENTIFIER_FIXUP_553 = (r6.xyz * r0.www) + _RESERVED_IDENTIFIER_FIXUP_551.xyz;
    r2.x = _RESERVED_IDENTIFIER_FIXUP_553.x;
    r2.y = _RESERVED_IDENTIFIER_FIXUP_553.y;
    r2.z = _RESERVED_IDENTIFIER_FIXUP_553.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_560 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_566 = _RESERVED_IDENTIFIER_FIXUP_560.xyz * optRegs.rows[optTile*82u+17u+uint(20)].yyy;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_566.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_566.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_566.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_579 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_581 = (optRegs.rows[optTile*82u+17u+uint(20)].xxx * r3.xyz) + _RESERVED_IDENTIFIER_FIXUP_579.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_581.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_581.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_581.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_594 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_596 = (optRegs.rows[optTile*82u+17u+uint(20)].zzz * r4.xyz) + _RESERVED_IDENTIFIER_FIXUP_594.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_596.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_596.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_596.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_603 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_608 = (-_RESERVED_IDENTIFIER_FIXUP_603.xyz) + r1.xyz;
    r0.x = _RESERVED_IDENTIFIER_FIXUP_608.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_608.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_608.z;
    r0.w = dot(r0.xyz, r0.xyz);
    float param_4_1 = r0.w;
    float param_6 = param_4_1;
    r0.w = dx_rsq(param_6);
    r1.x = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_630 = r0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_632 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_634 = _RESERVED_IDENTIFIER_FIXUP_630.xyz * _RESERVED_IDENTIFIER_FIXUP_632.www;
    r0.x = _RESERVED_IDENTIFIER_FIXUP_634.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_634.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_634.z;
    r0.x = clamp(dot(r0.xyz, r5.xyz), 0.0, 1.0);
    vec4 _RESERVED_IDENTIFIER_FIXUP_648 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_654 = _RESERVED_IDENTIFIER_FIXUP_648.xxx * optRegs.rows[optTile*82u+17u+uint(21)].xyz;
    r0.x = _RESERVED_IDENTIFIER_FIXUP_654.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_654.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_654.z;
    r0.w = (optRegs.rows[optTile*82u+17u+uint(22)].y * r1.x) + optRegs.rows[optTile*82u+17u+uint(22)].x;
    r1.x *= r1.x;
    r0.w = (r1.x * optRegs.rows[optTile*82u+17u+uint(22)].z) + r0.w;
    r0.w = 1.0 / r0.w;
    vec4 _RESERVED_IDENTIFIER_FIXUP_690 = r0;
    vec4 _RESERVED_IDENTIFIER_FIXUP_692 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_697 = (_RESERVED_IDENTIFIER_FIXUP_690.xyz * _RESERVED_IDENTIFIER_FIXUP_692.www) + r2.xyz;
    r0.x = _RESERVED_IDENTIFIER_FIXUP_697.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_697.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_697.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_704 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_707 = min(_RESERVED_IDENTIFIER_FIXUP_704.xyz, vec3(1.0));
    r0.x = _RESERVED_IDENTIFIER_FIXUP_707.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_707.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_707.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_719 = r0.xyz * v2.xyz;
    o1.x = _RESERVED_IDENTIFIER_FIXUP_719.x;
    o1.y = _RESERVED_IDENTIFIER_FIXUP_719.y;
    o1.z = _RESERVED_IDENTIFIER_FIXUP_719.z;
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
    fog0 = o4.x;
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
