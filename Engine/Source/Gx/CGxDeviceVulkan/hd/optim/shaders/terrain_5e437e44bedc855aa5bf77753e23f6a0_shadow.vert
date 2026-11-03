#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _702;





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
    vec4 _115 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec3 _153 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _556;
    _556.x = _153.x;
    _556.y = _153.y;
    _556.z = _153.z;
    vec3 _168 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _556.xyz;
    vec4 _562;
    _562.x = _168.x;
    _562.y = _168.y;
    _562.z = _168.z;
    vec3 _183 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _562.xyz;
    float _185 = _183.x;
    vec4 _568;
    _568.x = _185;
    _568.y = _183.y;
    _568.z = _183.z;
    vec3 _191 = _115.xyz;
    float _194 = dot(_191, _568.xyz);
    vec4 _710 = vec4(_185, _183.yz, _194);
    _710.w = _194 + _194;
    vec3 _210 = (_710.xyz * (-_710.www)) + _191;
    vec4 _580 = vec4(0.0);
    _580.x = _210.x;
    _580.y = _210.y;
    _580.z = _210.z;
    vec4 _586;
    _586.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _710.xyz), 0.0, 1.0);
    vec4 _588;
    _588.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _588.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _588.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _246 = (_588.xyz * _586.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _594;
    _594.x = _246.x;
    _594.y = _246.y;
    _594.z = _246.z;
    vec3 _256 = min(_594.xyz, vec3(1.0));
    vec4 _600;
    _600.x = _256.x;
    _600.y = _256.y;
    _600.z = _256.z;
    vec3 _280 = _580.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _612;
    _612.x = _280.x;
    _612.y = _280.y;
    _612.z = _280.z;
    vec3 _296 = (_580.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _612.xyz;
    vec4 _618;
    _618.x = _296.x;
    _618.y = _296.y;
    _618.z = _296.z;
    vec3 _312 = (_580.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _618.xyz;
    vec4 _624 = vec4(0.0);
    _624.x = _312.x;
    _624.y = _312.y;
    _624.z = _312.z;
    vec2 _327 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _630;
    _630.x = _327.x;
    _630.y = _327.y;
    _580.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _580.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _642 = _580;
    _642.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _642.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _377 = _115.z;
    float _389 = max((_377 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _554;
    if (_389 == 0.0)
    {
        _554 = 0.0;
    }
    else
    {
        _554 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_389)));
    }
    vec4 _686 = vec4(0.0);
    _686.x = _115.x;
    _686.y = _115.y;
    _686.z = _377;
    vec4 _543 = optPush.clipToTarget * ((_115.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_115.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_115.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_115.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]))));
    gl_Position = vec4(_543.x, -_543.y, _543.zw);
    color0 = vec4(_600.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _624;
    texcoord1 = vec4((_630.yx * _580.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_630.xy * _642.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _686;
    texcoord4 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_554, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
