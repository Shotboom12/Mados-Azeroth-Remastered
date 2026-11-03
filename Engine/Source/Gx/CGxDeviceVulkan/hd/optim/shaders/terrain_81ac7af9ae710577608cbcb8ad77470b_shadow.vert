#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _109 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _131 = (_109.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_109.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_109.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    float _149 = (_109.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _391 = _109;
    _391.x = _149;
    float _153 = max(_149, 0.0);
    _391.x = _153;
    float _388;
    if (_153 == 0.0)
    {
        _388 = 0.0;
    }
    else
    {
        _388 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_153)));
    }
    vec4 _397 = _131;
    _397.x = _388;
    vec2 _176 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _391.x = _176.x;
    _391.y = _176.y;
    _397.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _397.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _198 = (_391.xy * _397.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _410 = vec4(0.0);
    _410.x = _198.x;
    _410.y = _198.y;
    _397.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _397.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _220 = (_391.xy * _397.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _418 = vec4(0.0);
    _418.x = _220.x;
    _418.y = _220.y;
    vec3 _232 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _391.x = _232.x;
    _391.y = _232.y;
    _391.z = _232.z;
    vec3 _247 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _391.xyz;
    vec4 _428 = _391;
    _428.x = _247.x;
    _428.y = _247.y;
    _428.z = _247.z;
    vec3 _262 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _428.xyz;
    vec4 _434 = _428;
    _434.x = _262.x;
    _434.y = _262.y;
    _434.z = _262.z;
    _434.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _434.xyz), 0.0, 1.0);
    _397.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _397.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _397.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _297 = (_397.xyz * _434.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _448 = _434;
    _448.x = _297.x;
    _448.y = _297.y;
    _448.z = _297.z;
    vec3 _307 = min(_448.xyz, vec3(1.0));
    vec4 _454 = _448;
    _454.x = _307.x;
    _454.y = _307.y;
    _454.z = _307.z;
    vec4 _377 = optPush.clipToTarget * ((_109.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _131);
    gl_Position = vec4(_377.x, -_377.y, _377.zw);
    color0 = vec4(_454.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _410;
    texcoord1 = _418;
    fog0 = min(_388, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
