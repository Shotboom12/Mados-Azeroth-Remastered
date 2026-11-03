#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _673;





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
    vec4 _115 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec3 _153 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _535;
    _535.x = _153.x;
    _535.y = _153.y;
    _535.z = _153.z;
    vec3 _168 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _535.xyz;
    vec4 _541;
    _541.x = _168.x;
    _541.y = _168.y;
    _541.z = _168.z;
    vec3 _183 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _541.xyz;
    float _185 = _183.x;
    vec4 _547;
    _547.x = _185;
    _547.y = _183.y;
    _547.z = _183.z;
    vec3 _191 = _115.xyz;
    float _194 = dot(_191, _547.xyz);
    vec4 _681 = vec4(_185, _183.yz, _194);
    _681.w = _194 + _194;
    vec3 _210 = (_681.xyz * (-_681.www)) + _191;
    vec4 _559 = vec4(0.0);
    _559.x = _210.x;
    _559.y = _210.y;
    _559.z = _210.z;
    vec4 _565;
    _565.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _681.xyz), 0.0, 1.0);
    vec4 _567;
    _567.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _567.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _567.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _246 = (_567.xyz * _565.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _573;
    _573.x = _246.x;
    _573.y = _246.y;
    _573.z = _246.z;
    vec3 _256 = min(_573.xyz, vec3(1.0));
    vec4 _579;
    _579.x = _256.x;
    _579.y = _256.y;
    _579.z = _256.z;
    vec3 _281 = _559.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _591;
    _591.x = _281.x;
    _591.y = _281.y;
    _591.z = _281.z;
    vec3 _297 = (_559.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _591.xyz;
    vec4 _597;
    _597.x = _297.x;
    _597.y = _297.y;
    _597.z = _297.z;
    vec3 _313 = (_559.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _597.xyz;
    vec4 _603 = vec4(0.0);
    _603.x = _313.x;
    _603.y = _313.y;
    _603.z = _313.z;
    vec2 _328 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _609;
    _609.x = _328.x;
    _609.y = _328.y;
    _559.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _559.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _350 = (_609.xy * _559.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _617 = vec4(0.0);
    _617.x = _350.x;
    _617.y = _350.y;
    float _356 = _115.z;
    float _368 = max((_356 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _533;
    if (_368 == 0.0)
    {
        _533 = 0.0;
    }
    else
    {
        _533 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_368)));
    }
    vec4 _657 = vec4(0.0);
    _657.x = _115.x;
    _657.y = _115.y;
    _657.z = _356;
    vec4 _522 = optPush.clipToTarget * ((_115.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_115.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_115.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_115.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]))));
    gl_Position = vec4(_522.x, -_522.y, _522.zw);
    color0 = vec4(_579.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _603;
    texcoord1 = _617;
    texcoord3 = _657;
    texcoord4 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_533, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
