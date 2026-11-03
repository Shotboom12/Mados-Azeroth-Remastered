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
    vec2 _153 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _505 = _136;
    _505.x = _153.x;
    _505.y = _153.y;
    vec4 _509 = vec4(0.0);
    _509.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _509.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _175 = (_505.yx * _509.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _513 = vec4(0.0);
    _513.x = _175.x;
    _513.y = _175.y;
    _509.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _509.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _525 = _509;
    _525.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _525.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _225 = _114.z;
    float _233 = (_225 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _534 = _505;
    _534.x = _233;
    float _237 = max(_233, 0.0);
    _534.x = _237;
    float _503;
    if (_237 == 0.0)
    {
        _503 = 0.0;
    }
    else
    {
        _503 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_237)));
    }
    vec4 _540 = _525;
    _540.x = _503;
    vec3 _259 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _534.x = _259.x;
    _534.y = _259.y;
    _534.z = _259.z;
    vec3 _274 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _534.xyz;
    vec4 _551 = _534;
    _551.x = _274.x;
    _551.y = _274.y;
    _551.z = _274.z;
    vec3 _289 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _551.xyz;
    vec4 _557 = _551;
    _557.x = _289.x;
    _557.y = _289.y;
    _557.z = _289.z;
    _557.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _557.xyz), 0.0, 1.0);
    _540.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _540.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _540.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _324 = (_540.xyz * _557.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _571 = _557;
    _571.x = _324.x;
    _571.y = _324.y;
    _571.z = _324.z;
    vec3 _334 = min(_571.xyz, vec3(1.0));
    vec4 _577 = _571;
    _577.x = _334.x;
    _577.y = _334.y;
    _577.z = _334.z;
    vec4 _613 = vec4(0.0);
    _613.x = _114.x;
    _613.y = _114.y;
    _613.z = _225;
    vec4 _492 = optPush.clipToTarget * ((_114.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _136);
    gl_Position = vec4(_492.x, -_492.y, _492.zw);
    color0 = vec4(_577.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _513;
    texcoord1 = vec4((_505.yx * _509.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_505.xy * _525.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _613;
    texcoord4 = vec4(dot(_114, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_114, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_114, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_503, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
