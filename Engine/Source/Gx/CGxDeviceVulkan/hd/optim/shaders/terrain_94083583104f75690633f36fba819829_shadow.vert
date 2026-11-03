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
    vec4 _139 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _161 = (_139.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_139.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_139.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _178 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _678 = _161;
    _678.x = _178.x;
    _678.y = _178.y;
    vec4 _682 = vec4(0.0);
    _682.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _682.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _200 = (_678.yx * _682.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _686 = vec4(0.0);
    _686.x = _200.x;
    _686.y = _200.y;
    _682.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _682.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _698 = _682;
    _698.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _698.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _706 = _698;
    _706.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _706.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _714 = _706;
    _714.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _714.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _294 = _139.z;
    float _302 = (_294 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _723 = _678;
    _723.x = _302;
    float _306 = max(_302, 0.0);
    _723.x = _306;
    float _675;
    if (_306 == 0.0)
    {
        _675 = 0.0;
    }
    else
    {
        _675 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_306)));
    }
    vec4 _729 = _714;
    _729.x = _675;
    vec3 _327 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _723.x = _327.x;
    _723.y = _327.y;
    _723.z = _327.z;
    vec3 _342 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _723.xyz;
    vec4 _740 = _723;
    _740.x = _342.x;
    _740.y = _342.y;
    _740.z = _342.z;
    vec3 _366 = -_139.xyz;
    float _370 = dot(_366, _366);
    vec4 _871 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _740.xyz, _370);
    _871.w = inversesqrt(abs(_370));
    vec3 _387 = (_366 * _871.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _729.x = _387.x;
    _729.y = _387.y;
    _729.z = _387.z;
    vec4 _642 = _729 * inversesqrt(dot(_729.xyz, _729.xyz));
    vec4 _763 = vec4(0.0);
    _763.x = _642.x;
    _763.y = _642.y;
    _763.z = _642.z;
    float _408 = dot(_763.xyz, _871.xyz);
    vec4 _769 = _871;
    _769.w = _408;
    _769.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _769.xyz), 0.0, 1.0);
    _729.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _729.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _729.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _872 = vec4((_729.xyz * _769.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _408);
    vec3 _447 = min(_872.xyz, vec3(1.0));
    vec4 _785 = _872;
    _785.x = _447.x;
    _785.y = _447.y;
    _785.z = _447.z;
    float _468 = max(_408, 0.0);
    float _676;
    if (_468 == 0.0)
    {
        _676 = 0.0;
    }
    else
    {
        _676 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_468)));
    }
    _729.x = _676;
    vec4 _833 = vec4(0.0);
    _833.x = _139.x;
    _833.y = _139.y;
    _833.z = _294;
    vec4 _664 = optPush.clipToTarget * ((_139.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _161);
    gl_Position = vec4(_664.x, -_664.y, _664.zw);
    color0 = vec4(_785.xyz * v2.xyz, 1.0);
    color1 = vec4(_729.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _686;
    texcoord1 = vec4((_678.yx * _682.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_678.xy * _698.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_678.yx * _706.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_678.xy * _714.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _833;
    texcoord4 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_675, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
