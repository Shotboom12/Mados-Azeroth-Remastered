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
    vec2 _154 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _530 = _137;
    _530.x = _154.x;
    _530.y = _154.y;
    vec4 _534 = vec4(0.0);
    _534.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _534.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _176 = (_530.xy * _534.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _538 = vec4(0.0);
    _538.x = _176.x;
    _538.y = _176.y;
    _534.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _534.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _550 = _534;
    _550.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _550.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _558 = _550;
    _558.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _558.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _242 = (_530.xy * _558.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _562 = vec4(0.0);
    _562.x = _242.x;
    _562.y = _242.y;
    float _248 = _115.z;
    float _256 = (_248 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _567 = _530;
    _567.x = _256;
    float _260 = max(_256, 0.0);
    _567.x = _260;
    float _528;
    if (_260 == 0.0)
    {
        _528 = 0.0;
    }
    else
    {
        _528 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_260)));
    }
    _558.x = _528;
    vec3 _282 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _567.x = _282.x;
    _567.y = _282.y;
    _567.z = _282.z;
    vec3 _297 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _567.xyz;
    vec4 _584 = _567;
    _584.x = _297.x;
    _584.y = _297.y;
    _584.z = _297.z;
    vec3 _312 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _584.xyz;
    vec4 _590 = _584;
    _590.x = _312.x;
    _590.y = _312.y;
    _590.z = _312.z;
    _590.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _590.xyz), 0.0, 1.0);
    _558.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _558.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _558.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _347 = (_558.xyz * _590.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _604 = _590;
    _604.x = _347.x;
    _604.y = _347.y;
    _604.z = _347.z;
    vec3 _357 = min(_604.xyz, vec3(1.0));
    vec4 _610 = _604;
    _610.x = _357.x;
    _610.y = _357.y;
    _610.z = _357.z;
    vec4 _646 = vec4(0.0);
    _646.x = _115.x;
    _646.y = _115.y;
    _646.z = _248;
    vec4 _517 = optPush.clipToTarget * ((_115.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _137);
    gl_Position = vec4(_517.x, -_517.y, _517.zw);
    color0 = vec4(_610.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _538;
    texcoord1 = vec4((_530.xy * _534.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_530.yx * _550.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _562;
    texcoord3 = _646;
    texcoord4 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_528, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
