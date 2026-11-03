#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _672;





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
    vec4 _534;
    _534.x = _153.x;
    _534.y = _153.y;
    _534.z = _153.z;
    vec3 _168 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _534.xyz;
    vec4 _540;
    _540.x = _168.x;
    _540.y = _168.y;
    _540.z = _168.z;
    vec3 _183 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _540.xyz;
    float _185 = _183.x;
    vec4 _546;
    _546.x = _185;
    _546.y = _183.y;
    _546.z = _183.z;
    vec3 _191 = _115.xyz;
    float _194 = dot(_191, _546.xyz);
    vec4 _680 = vec4(_185, _183.yz, _194);
    _680.w = _194 + _194;
    vec3 _210 = (_680.xyz * (-_680.www)) + _191;
    vec4 _558 = vec4(0.0);
    _558.x = _210.x;
    _558.y = _210.y;
    _558.z = _210.z;
    vec4 _564;
    _564.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _680.xyz), 0.0, 1.0);
    vec4 _566;
    _566.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _566.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _566.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _246 = (_566.xyz * _564.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _572;
    _572.x = _246.x;
    _572.y = _246.y;
    _572.z = _246.z;
    vec3 _256 = min(_572.xyz, vec3(1.0));
    vec4 _578;
    _578.x = _256.x;
    _578.y = _256.y;
    _578.z = _256.z;
    vec3 _280 = _558.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _590;
    _590.x = _280.x;
    _590.y = _280.y;
    _590.z = _280.z;
    vec3 _296 = (_558.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _590.xyz;
    vec4 _596;
    _596.x = _296.x;
    _596.y = _296.y;
    _596.z = _296.z;
    vec3 _312 = (_558.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _596.xyz;
    vec4 _602 = vec4(0.0);
    _602.x = _312.x;
    _602.y = _312.y;
    _602.z = _312.z;
    vec2 _327 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _608;
    _608.x = _327.x;
    _608.y = _327.y;
    _558.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _558.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _349 = (_608.xy * _558.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _616 = vec4(0.0);
    _616.x = _349.x;
    _616.y = _349.y;
    float _355 = _115.z;
    float _367 = max((_355 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _532;
    if (_367 == 0.0)
    {
        _532 = 0.0;
    }
    else
    {
        _532 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_367)));
    }
    vec4 _656 = vec4(0.0);
    _656.x = _115.x;
    _656.y = _115.y;
    _656.z = _355;
    vec4 _521 = optPush.clipToTarget * ((_115.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_115.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_115.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_115.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]))));
    gl_Position = vec4(_521.x, -_521.y, _521.zw);
    color0 = vec4(_578.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _602;
    texcoord1 = _616;
    texcoord3 = _656;
    texcoord4 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_532, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
