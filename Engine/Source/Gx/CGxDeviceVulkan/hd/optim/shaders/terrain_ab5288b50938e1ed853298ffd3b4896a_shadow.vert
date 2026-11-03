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
    vec4 _139 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _161 = (_139.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_139.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_139.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _178 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _677 = _161;
    _677.x = _178.x;
    _677.y = _178.y;
    vec4 _681 = vec4(0.0);
    _681.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _681.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _200 = (_677.yx * _681.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _685 = vec4(0.0);
    _685.x = _200.x;
    _685.y = _200.y;
    _681.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _681.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _697 = _681;
    _697.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _697.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _705 = _697;
    _705.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _705.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _713 = _705;
    _713.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _713.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _294 = _139.z;
    float _302 = (_294 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _722 = _677;
    _722.x = _302;
    float _306 = max(_302, 0.0);
    _722.x = _306;
    float _674;
    if (_306 == 0.0)
    {
        _674 = 0.0;
    }
    else
    {
        _674 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_306)));
    }
    vec4 _728 = _713;
    _728.x = _674;
    vec3 _327 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _722.x = _327.x;
    _722.y = _327.y;
    _722.z = _327.z;
    vec3 _342 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _722.xyz;
    vec4 _739 = _722;
    _739.x = _342.x;
    _739.y = _342.y;
    _739.z = _342.z;
    vec3 _366 = -_139.xyz;
    float _370 = dot(_366, _366);
    vec4 _870 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _739.xyz, _370);
    _870.w = inversesqrt(abs(_370));
    vec3 _387 = (_366 * _870.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _728.x = _387.x;
    _728.y = _387.y;
    _728.z = _387.z;
    vec4 _641 = _728 * inversesqrt(dot(_728.xyz, _728.xyz));
    vec4 _762 = vec4(0.0);
    _762.x = _641.x;
    _762.y = _641.y;
    _762.z = _641.z;
    float _408 = dot(_762.xyz, _870.xyz);
    vec4 _768 = _870;
    _768.w = _408;
    _768.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _768.xyz), 0.0, 1.0);
    _728.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _728.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _728.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _871 = vec4((_728.xyz * _768.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _408);
    vec3 _447 = min(_871.xyz, vec3(1.0));
    vec4 _784 = _871;
    _784.x = _447.x;
    _784.y = _447.y;
    _784.z = _447.z;
    float _467 = max(_408, 0.0);
    float _675;
    if (_467 == 0.0)
    {
        _675 = 0.0;
    }
    else
    {
        _675 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_467)));
    }
    _728.x = _675;
    vec4 _832 = vec4(0.0);
    _832.x = _139.x;
    _832.y = _139.y;
    _832.z = _294;
    vec4 _663 = optPush.clipToTarget * ((_139.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _161);
    gl_Position = vec4(_663.x, -_663.y, _663.zw);
    color0 = vec4(_784.xyz * vec3(0.5), 1.0);
    color1 = vec4(_728.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _685;
    texcoord1 = vec4((_677.yx * _681.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_677.xy * _697.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_677.yx * _705.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_677.xy * _713.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _832;
    texcoord4 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_674, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
