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


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
layout(location=0)in vec3 optPosition;layout(location=4)in vec2 optUV;layout(location=5)in vec2 optWind;
layout(location=8)in vec4 optRow0;layout(location=9)in vec4 optRow1;layout(location=10)in vec4 optRow2;
layout(location=11)in vec4 optNormal;layout(location=12)in vec4 optColor;layout(location=13)in vec4 optLight;layout(location=14)in vec4 optInstanceWind;
void OptNativeMain()
{
    vec4 _108 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _130 = (_108.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_108.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_108.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    float _140 = _108.z;
    float _160 = (_140 * optRegs.rows[optTile*82u+17u+uint(8)].x) + optRegs.rows[optTile*82u+17u+uint(8)].y;
    vec4 _364 = _108;
    _364.x = _160;
    float _164 = max(_160, 0.0);
    _364.x = _164;
    float _358;
    if (_164 == 0.0)
    {
        _358 = 0.0;
    }
    else
    {
        _358 = exp2(optRegs.rows[optTile*82u+17u+uint(8)].z * log2(abs(_164)));
    }
    vec4 _370 = _130;
    _370.x = _358;
    vec3 _185 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _364.x = _185.x;
    _364.y = _185.y;
    _364.z = _185.z;
    vec3 _200 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _364.xyz;
    vec4 _381 = _364;
    _381.x = _200.x;
    _381.y = _200.y;
    _381.z = _200.z;
    vec3 _215 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _381.xyz;
    vec4 _387 = _381;
    _387.x = _215.x;
    _387.y = _215.y;
    _387.z = _215.z;
    _387.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(10)].xyz, _387.xyz), 0.0, 1.0);
    _370.x = optRegs.rows[optTile*82u+17u+uint(12)].x;
    _370.y = optRegs.rows[optTile*82u+17u+uint(12)].y;
    _370.z = optRegs.rows[optTile*82u+17u+uint(12)].z;
    vec3 _250 = (_370.xyz * _387.xxx) + optRegs.rows[optTile*82u+17u+uint(11)].xyz;
    vec4 _401 = _387;
    _401.x = _250.x;
    _401.y = _250.y;
    _401.z = _250.z;
    vec3 _260 = min(_401.xyz, vec3(1.0));
    vec4 _407 = _401;
    _407.x = _260.x;
    _407.y = _260.y;
    _407.z = _260.z;
    vec4 _427 = vec4(0.0);
    _427.x = v3.x;
    _427.y = v3.y;
    vec4 _347 = optPush.clipToTarget * ((_108.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _130);
    gl_Position = vec4(_347.x, -_347.y, _347.zw);
    color0 = vec4(_407.xyz * v2.xyz, v2.w);
    color1 = vec4(clamp((_140 * optRegs.rows[optTile*82u+17u+uint(9)].x) + optRegs.rows[optTile*82u+17u+uint(9)].y, 0.0, 1.0), 0.0, 0.0, 0.0);
    texcoord0 = _427;
    fog0 = min(_358, 1.0);
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
