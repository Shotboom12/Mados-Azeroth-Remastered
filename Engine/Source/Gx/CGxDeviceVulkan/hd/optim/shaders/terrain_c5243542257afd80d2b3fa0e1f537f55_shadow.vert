#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _114 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _136 = (_114.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_114.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_114.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _153 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _483 = _136;
    _483.x = _153.x;
    _483.y = _153.y;
    vec4 _487 = vec4(0.0);
    _487.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _487.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _175 = (_483.xy * _487.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _491 = vec4(0.0);
    _491.x = _175.x;
    _491.y = _175.y;
    _487.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _487.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _197 = (_483.xy * _487.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _499 = vec4(0.0);
    _499.x = _197.x;
    _499.y = _197.y;
    float _203 = _114.z;
    float _211 = (_203 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _483.x = _211;
    float _215 = max(_211, 0.0);
    _483.x = _215;
    float _481;
    if (_215 == 0.0)
    {
        _481 = 0.0;
    }
    else
    {
        _481 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_215)));
    }
    _487.x = _481;
    vec3 _237 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _483.x = _237.x;
    _483.y = _237.y;
    _483.z = _237.z;
    vec3 _252 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _483.xyz;
    vec4 _521 = _483;
    _521.x = _252.x;
    _521.y = _252.y;
    _521.z = _252.z;
    vec3 _267 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _521.xyz;
    vec4 _527 = _521;
    _527.x = _267.x;
    _527.y = _267.y;
    _527.z = _267.z;
    _527.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _527.xyz), 0.0, 1.0);
    _487.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _487.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _487.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _302 = (_487.xyz * _527.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _541 = _527;
    _541.x = _302.x;
    _541.y = _302.y;
    _541.z = _302.z;
    vec3 _312 = min(_541.xyz, vec3(1.0));
    vec4 _547 = _541;
    _547.x = _312.x;
    _547.y = _312.y;
    _547.z = _312.z;
    vec4 _583 = vec4(0.0);
    _583.x = _114.x;
    _583.y = _114.y;
    _583.z = _203;
    vec4 _470 = optPush.clipToTarget * ((_114.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _136);
    gl_Position = vec4(_470.x, -_470.y, _470.zw);
    color0 = vec4(_547.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _491;
    texcoord1 = _499;
    texcoord3 = _583;
    texcoord4 = vec4(dot(_114, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_114, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_114, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_481, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
