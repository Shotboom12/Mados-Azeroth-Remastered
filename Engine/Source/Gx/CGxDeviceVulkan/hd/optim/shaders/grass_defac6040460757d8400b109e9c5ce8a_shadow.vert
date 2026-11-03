#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _506;





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


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
layout(location=0)in vec3 optPosition;layout(location=4)in vec2 optUV;layout(location=5)in vec2 optWind;
layout(location=8)in vec4 optRow0;layout(location=9)in vec4 optRow1;layout(location=10)in vec4 optRow2;
layout(location=11)in vec4 optNormal;layout(location=12)in vec4 optColor;layout(location=13)in vec4 optLight;layout(location=14)in vec4 optInstanceWind;
void OptNativeMain()
{
    vec4 _111 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    float _143 = _111.z;
    float _163 = (_143 * optRegs.rows[optTile*82u+17u+uint(8)].x) + optRegs.rows[optTile*82u+17u+uint(8)].y;
    vec4 _413 = _111;
    _413.w = _163;
    float _167 = max(_163, 0.0);
    _413.w = _167;
    float _407;
    if (_167 == 0.0)
    {
        _407 = 0.0;
    }
    else
    {
        _407 = exp2(optRegs.rows[optTile*82u+17u+uint(8)].z * log2(abs(_167)));
    }
    vec3 _188 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _424;
    _424.x = _188.x;
    _424.y = _188.y;
    _424.z = _188.z;
    vec3 _203 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _424.xyz;
    vec4 _430;
    _430.x = _203.x;
    _430.y = _203.y;
    _430.z = _203.z;
    vec3 _218 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _430.xyz;
    float _220 = _218.x;
    vec4 _436;
    _436.x = _220;
    float _222 = _218.y;
    _436.y = _222;
    float _224 = _218.z;
    _436.z = _224;
    _413.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(10)].xyz, _436.xyz), 0.0, 1.0);
    vec4 _444 = vec4(0.0);
    _444.x = _220;
    _444.y = _222;
    _444.z = _224;
    vec4 _450;
    _450.x = optRegs.rows[optTile*82u+17u+uint(12)].x;
    _450.y = optRegs.rows[optTile*82u+17u+uint(12)].y;
    _450.z = optRegs.rows[optTile*82u+17u+uint(12)].z;
    vec3 _261 = (_450.xyz * _413.www) + optRegs.rows[optTile*82u+17u+uint(11)].xyz;
    vec4 _456;
    _456.x = _261.x;
    _456.y = _261.y;
    _456.z = _261.z;
    vec3 _271 = min(_456.xyz, vec3(1.0));
    vec4 _462;
    _462.x = _271.x;
    _462.y = _271.y;
    _462.z = _271.z;
    vec4 _295 = (_413.xyzx * vec4(1.0, 1.0, 1.0, 0.0)) + vec4(0.0, 0.0, 0.0, 1.0);
    vec4 _474 = vec4(0.0);
    _474.x = _111.x;
    _474.y = _111.y;
    _474.z = _111.z;
    vec4 _480 = vec4(0.0);
    _480.x = dot(_295, optRegs.rows[optTile*82u+17u+uint(23)]);
    _480.y = dot(_295, optRegs.rows[optTile*82u+17u+uint(24)]);
    _480.z = dot(_295, optRegs.rows[optTile*82u+17u+uint(25)]);
    vec4 _494 = vec4(0.0);
    _494.x = v3.x;
    _494.y = v3.y;
    vec4 _396 = optPush.clipToTarget * ((_111.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_111.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_111.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_111.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]))));
    gl_Position = vec4(_396.x, -_396.y, _396.zw);
    color0 = vec4(_462.xyz * v2.xyz, v2.w);
    color1 = vec4(clamp((_143 * optRegs.rows[optTile*82u+17u+uint(9)].x) + optRegs.rows[optTile*82u+17u+uint(9)].y, 0.0, 1.0), 0.0, 0.0, 0.0);
    texcoord0 = _494;
    texcoord1 = _474;
    texcoord2 = _444;
    texcoord3 = _480;
    fog0 = min(_407, 1.0);
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
