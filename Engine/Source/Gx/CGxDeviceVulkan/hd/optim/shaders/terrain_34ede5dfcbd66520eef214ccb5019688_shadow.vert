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
    vec4 _138 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _160 = (_138.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_138.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_138.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _177 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _608 = _160;
    _608.x = _177.x;
    _608.y = _177.y;
    vec4 _612 = vec4(0.0);
    _612.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _612.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _199 = (_608.xy * _612.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _616 = vec4(0.0);
    _616.x = _199.x;
    _616.y = _199.y;
    _612.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _612.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _221 = (_608.xy * _612.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _624 = vec4(0.0);
    _624.x = _221.x;
    _624.y = _221.y;
    float _227 = _138.z;
    float _235 = (_227 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _608.x = _235;
    float _239 = max(_235, 0.0);
    _608.x = _239;
    float _605;
    if (_239 == 0.0)
    {
        _605 = 0.0;
    }
    else
    {
        _605 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_239)));
    }
    _612.x = _605;
    vec3 _260 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _608.x = _260.x;
    _608.y = _260.y;
    _608.z = _260.z;
    vec3 _275 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _608.xyz;
    vec4 _646 = _608;
    _646.x = _275.x;
    _646.y = _275.y;
    _646.z = _275.z;
    vec3 _299 = -_138.xyz;
    float _303 = dot(_299, _299);
    vec4 _775 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _646.xyz, _303);
    _775.w = inversesqrt(abs(_303));
    vec3 _320 = (_299 * _775.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _612.x = _320.x;
    _612.y = _320.y;
    _612.z = _320.z;
    vec4 _572 = _612 * inversesqrt(dot(_612.xyz, _612.xyz));
    vec4 _669 = vec4(0.0);
    _669.x = _572.x;
    _669.y = _572.y;
    _669.z = _572.z;
    float _341 = dot(_669.xyz, _775.xyz);
    vec4 _675 = _775;
    _675.w = _341;
    _675.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _675.xyz), 0.0, 1.0);
    _612.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _612.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _612.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _776 = vec4((_612.xyz * _675.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _341);
    vec3 _380 = min(_776.xyz, vec3(1.0));
    vec4 _691 = _776;
    _691.x = _380.x;
    _691.y = _380.y;
    _691.z = _380.z;
    float _400 = max(_341, 0.0);
    float _606;
    if (_400 == 0.0)
    {
        _606 = 0.0;
    }
    else
    {
        _606 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_400)));
    }
    _612.x = _606;
    vec4 _739 = vec4(0.0);
    _739.x = _138.x;
    _739.y = _138.y;
    _739.z = _227;
    vec4 _594 = optPush.clipToTarget * ((_138.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _160);
    gl_Position = vec4(_594.x, -_594.y, _594.zw);
    color0 = vec4(_691.xyz * vec3(0.5), 1.0);
    color1 = vec4(_612.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _616;
    texcoord1 = _624;
    texcoord3 = _739;
    texcoord4 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_605, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
