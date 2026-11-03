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
    vec4 _138 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _160 = (_138.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_138.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_138.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _177 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _631 = _160;
    _631.x = _177.x;
    _631.y = _177.y;
    vec4 _635 = vec4(0.0);
    _635.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _635.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _199 = (_631.yx * _635.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _639 = vec4(0.0);
    _639.x = _199.x;
    _639.y = _199.y;
    _635.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _635.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _651 = _635;
    _651.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _651.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _249 = _138.z;
    float _257 = (_249 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _660 = _631;
    _660.x = _257;
    float _261 = max(_257, 0.0);
    _660.x = _261;
    float _628;
    if (_261 == 0.0)
    {
        _628 = 0.0;
    }
    else
    {
        _628 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_261)));
    }
    vec4 _666 = _651;
    _666.x = _628;
    vec3 _282 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _660.x = _282.x;
    _660.y = _282.y;
    _660.z = _282.z;
    vec3 _297 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _660.xyz;
    vec4 _677 = _660;
    _677.x = _297.x;
    _677.y = _297.y;
    _677.z = _297.z;
    vec3 _321 = -_138.xyz;
    float _325 = dot(_321, _321);
    vec4 _807 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _677.xyz, _325);
    _807.w = inversesqrt(abs(_325));
    vec3 _342 = (_321 * _807.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _666.x = _342.x;
    _666.y = _342.y;
    _666.z = _342.z;
    vec4 _595 = _666 * inversesqrt(dot(_666.xyz, _666.xyz));
    vec4 _700 = vec4(0.0);
    _700.x = _595.x;
    _700.y = _595.y;
    _700.z = _595.z;
    float _363 = dot(_700.xyz, _807.xyz);
    vec4 _706 = _807;
    _706.w = _363;
    _706.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _706.xyz), 0.0, 1.0);
    _666.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _666.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _666.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _808 = vec4((_666.xyz * _706.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _363);
    vec3 _402 = min(_808.xyz, vec3(1.0));
    vec4 _722 = _808;
    _722.x = _402.x;
    _722.y = _402.y;
    _722.z = _402.z;
    float _423 = max(_363, 0.0);
    float _629;
    if (_423 == 0.0)
    {
        _629 = 0.0;
    }
    else
    {
        _629 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_423)));
    }
    _666.x = _629;
    vec4 _770 = vec4(0.0);
    _770.x = _138.x;
    _770.y = _138.y;
    _770.z = _249;
    vec4 _617 = optPush.clipToTarget * ((_138.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _160);
    gl_Position = vec4(_617.x, -_617.y, _617.zw);
    color0 = vec4(_722.xyz * v2.xyz, 1.0);
    color1 = vec4(_666.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _639;
    texcoord1 = vec4((_631.yx * _635.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_631.xy * _651.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _770;
    texcoord4 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_628, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
