#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 4) out vec4 texcoord2;
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _115 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _137 = (_115.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_115.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_115.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _154 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _552 = _137;
    _552.x = _154.x;
    _552.y = _154.y;
    vec4 _556 = vec4(0.0);
    _556.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _556.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _176 = (_552.yx * _556.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _560 = vec4(0.0);
    _560.x = _176.x;
    _560.y = _176.y;
    _556.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _556.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _572 = _556;
    _572.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _572.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _580 = _572;
    _580.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _580.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _588 = _580;
    _588.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _588.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _270 = _115.z;
    float _278 = (_270 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _597 = _552;
    _597.x = _278;
    float _282 = max(_278, 0.0);
    _597.x = _282;
    float _550;
    if (_282 == 0.0)
    {
        _550 = 0.0;
    }
    else
    {
        _550 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_282)));
    }
    vec4 _603 = _588;
    _603.x = _550;
    vec3 _304 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _597.x = _304.x;
    _597.y = _304.y;
    _597.z = _304.z;
    vec3 _319 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _597.xyz;
    vec4 _614 = _597;
    _614.x = _319.x;
    _614.y = _319.y;
    _614.z = _319.z;
    vec3 _334 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _614.xyz;
    vec4 _620 = _614;
    _620.x = _334.x;
    _620.y = _334.y;
    _620.z = _334.z;
    _620.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _620.xyz), 0.0, 1.0);
    _603.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _603.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _603.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _369 = (_603.xyz * _620.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _634 = _620;
    _634.x = _369.x;
    _634.y = _369.y;
    _634.z = _369.z;
    vec3 _379 = min(_634.xyz, vec3(1.0));
    vec4 _640 = _634;
    _640.x = _379.x;
    _640.y = _379.y;
    _640.z = _379.z;
    vec4 _676 = vec4(0.0);
    _676.x = _115.x;
    _676.y = _115.y;
    _676.z = _270;
    vec4 _539 = optPush.clipToTarget * ((_115.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _137);
    gl_Position = vec4(_539.x, -_539.y, _539.zw);
    color0 = vec4(_640.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _560;
    texcoord1 = vec4((_552.yx * _556.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_552.xy * _572.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_552.yx * _580.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_552.xy * _588.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _676;
    texcoord4 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_550, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
