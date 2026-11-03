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
    vec4 _506 = _136;
    _506.x = _153.x;
    _506.y = _153.y;
    vec4 _510 = vec4(0.0);
    _510.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _510.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _175 = (_506.yx * _510.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _514 = vec4(0.0);
    _514.x = _175.x;
    _514.y = _175.y;
    _510.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _510.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _526 = _510;
    _526.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _526.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _225 = _114.z;
    float _233 = (_225 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _535 = _506;
    _535.x = _233;
    float _237 = max(_233, 0.0);
    _535.x = _237;
    float _504;
    if (_237 == 0.0)
    {
        _504 = 0.0;
    }
    else
    {
        _504 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_237)));
    }
    vec4 _541 = _526;
    _541.x = _504;
    vec3 _259 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _535.x = _259.x;
    _535.y = _259.y;
    _535.z = _259.z;
    vec3 _274 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _535.xyz;
    vec4 _552 = _535;
    _552.x = _274.x;
    _552.y = _274.y;
    _552.z = _274.z;
    vec3 _289 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _552.xyz;
    vec4 _558 = _552;
    _558.x = _289.x;
    _558.y = _289.y;
    _558.z = _289.z;
    _558.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _558.xyz), 0.0, 1.0);
    _541.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _541.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _541.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _324 = (_541.xyz * _558.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _572 = _558;
    _572.x = _324.x;
    _572.y = _324.y;
    _572.z = _324.z;
    vec3 _334 = min(_572.xyz, vec3(1.0));
    vec4 _578 = _572;
    _578.x = _334.x;
    _578.y = _334.y;
    _578.z = _334.z;
    vec4 _614 = vec4(0.0);
    _614.x = _114.x;
    _614.y = _114.y;
    _614.z = _225;
    vec4 _493 = optPush.clipToTarget * ((_114.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _136);
    gl_Position = vec4(_493.x, -_493.y, _493.zw);
    color0 = vec4(_578.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _514;
    texcoord1 = vec4((_506.yx * _510.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_506.xy * _526.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _614;
    texcoord4 = vec4(dot(_114, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_114, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_114, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_504, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
