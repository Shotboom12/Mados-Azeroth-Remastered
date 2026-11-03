#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _584;





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


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
layout(location=0)in vec3 optPosition;layout(location=4)in vec2 optUV;layout(location=5)in vec2 optWind;
layout(location=8)in vec4 optRow0;layout(location=9)in vec4 optRow1;layout(location=10)in vec4 optRow2;
layout(location=11)in vec4 optNormal;layout(location=12)in vec4 optColor;layout(location=13)in vec4 optLight;layout(location=14)in vec4 optInstanceWind;
void OptNativeMain()
{
    vec4 _113 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    float _145 = _113.z;
    float _165 = (_145 * optRegs.rows[optTile*82u+17u+uint(8)].x) + optRegs.rows[optTile*82u+17u+uint(8)].y;
    vec4 _473 = _113;
    _473.w = _165;
    float _169 = max(_165, 0.0);
    _473.w = _169;
    float _467;
    if (_169 == 0.0)
    {
        _467 = 0.0;
    }
    else
    {
        _467 = exp2(optRegs.rows[optTile*82u+17u+uint(8)].z * log2(abs(_169)));
    }
    vec3 _190 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _484;
    _484.x = _190.x;
    _484.y = _190.y;
    _484.z = _190.z;
    vec3 _205 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _484.xyz;
    vec4 _490;
    _490.x = _205.x;
    _490.y = _205.y;
    _490.z = _205.z;
    vec3 _220 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _490.xyz;
    float _222 = _220.x;
    vec4 _496;
    _496.x = _222;
    float _224 = _220.y;
    _496.y = _224;
    float _226 = _220.z;
    _496.z = _226;
    _473.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(10)].xyz, _496.xyz), 0.0, 1.0);
    vec4 _504 = vec4(0.0);
    _504.x = _222;
    _504.y = _224;
    _504.z = _226;
    vec4 _510;
    _510.x = optRegs.rows[optTile*82u+17u+uint(12)].x;
    _510.y = optRegs.rows[optTile*82u+17u+uint(12)].y;
    _510.z = optRegs.rows[optTile*82u+17u+uint(12)].z;
    vec3 _263 = (_510.xyz * _473.www) + optRegs.rows[optTile*82u+17u+uint(11)].xyz;
    vec4 _516;
    _516.x = _263.x;
    _516.y = _263.y;
    _516.z = _263.z;
    vec3 _273 = min(_516.xyz, vec3(1.0));
    vec4 _522;
    _522.x = _273.x;
    _522.y = _273.y;
    _522.z = _273.z;
    vec4 _297 = (_473.xyzx * vec4(1.0, 1.0, 1.0, 0.0)) + vec4(0.0, 0.0, 0.0, 1.0);
    vec4 _534 = vec4(0.0);
    _534.x = _113.x;
    _534.y = _113.y;
    _534.z = _113.z;
    vec4 _572 = vec4(0.0);
    _572.x = v3.x;
    _572.y = v3.y;
    vec4 _456 = optPush.clipToTarget * ((_113.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_113.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_113.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_113.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]))));
    gl_Position = vec4(_456.x, -_456.y, _456.zw);
    color0 = vec4(_522.xyz * v2.xyz, v2.w);
    color1 = vec4(clamp((_145 * optRegs.rows[optTile*82u+17u+uint(9)].x) + optRegs.rows[optTile*82u+17u+uint(9)].y, 0.0, 1.0), 0.0, 0.0, 0.0);
    texcoord0 = _572;
    texcoord1 = _534;
    texcoord2 = _504;
    texcoord3 = vec4(dot(_297, optRegs.rows[optTile*82u+17u+uint(23)]), dot(_297, optRegs.rows[optTile*82u+17u+uint(24)]), dot(_297, optRegs.rows[optTile*82u+17u+uint(25)]), dot(_297, optRegs.rows[optTile*82u+17u+uint(32)]));
    texcoord4 = vec4(dot(_297, optRegs.rows[optTile*82u+17u+uint(26)]), dot(_297, optRegs.rows[optTile*82u+17u+uint(27)]), dot(_297, optRegs.rows[optTile*82u+17u+uint(28)]), dot(_297, optRegs.rows[optTile*82u+17u+uint(33)]));
    texcoord5 = vec4(dot(_297, optRegs.rows[optTile*82u+17u+uint(29)]), dot(_297, optRegs.rows[optTile*82u+17u+uint(30)]), dot(_297, optRegs.rows[optTile*82u+17u+uint(31)]), dot(_297, optRegs.rows[optTile*82u+17u+uint(34)]));
    fog0 = min(_467, 1.0);
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
}
