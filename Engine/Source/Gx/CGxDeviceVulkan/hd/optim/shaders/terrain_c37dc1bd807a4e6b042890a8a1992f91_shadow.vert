#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
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
    vec4 _553 = _137;
    _553.x = _154.x;
    _553.y = _154.y;
    vec4 _557 = vec4(0.0);
    _557.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _557.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _176 = (_553.yx * _557.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _561 = vec4(0.0);
    _561.x = _176.x;
    _561.y = _176.y;
    _557.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _557.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _573 = _557;
    _573.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _573.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _581 = _573;
    _581.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _581.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _589 = _581;
    _589.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _589.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _270 = _115.z;
    float _278 = (_270 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _598 = _553;
    _598.x = _278;
    float _282 = max(_278, 0.0);
    _598.x = _282;
    float _551;
    if (_282 == 0.0)
    {
        _551 = 0.0;
    }
    else
    {
        _551 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_282)));
    }
    vec4 _604 = _589;
    _604.x = _551;
    vec3 _304 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _598.x = _304.x;
    _598.y = _304.y;
    _598.z = _304.z;
    vec3 _319 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _598.xyz;
    vec4 _615 = _598;
    _615.x = _319.x;
    _615.y = _319.y;
    _615.z = _319.z;
    vec3 _334 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _615.xyz;
    vec4 _621 = _615;
    _621.x = _334.x;
    _621.y = _334.y;
    _621.z = _334.z;
    _621.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _621.xyz), 0.0, 1.0);
    _604.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _604.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _604.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _369 = (_604.xyz * _621.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _635 = _621;
    _635.x = _369.x;
    _635.y = _369.y;
    _635.z = _369.z;
    vec3 _379 = min(_635.xyz, vec3(1.0));
    vec4 _641 = _635;
    _641.x = _379.x;
    _641.y = _379.y;
    _641.z = _379.z;
    vec4 _677 = vec4(0.0);
    _677.x = _115.x;
    _677.y = _115.y;
    _677.z = _270;
    vec4 _540 = optPush.clipToTarget * ((_115.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _137);
    gl_Position = vec4(_540.x, -_540.y, _540.zw);
    color0 = vec4(_641.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _561;
    texcoord1 = vec4((_553.yx * _557.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_553.xy * _573.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_553.yx * _581.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_553.xy * _589.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _677;
    texcoord4 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_551, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
