#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
layout(location = 13) out vec4 wxlGBuf;
layout(location = 14) flat out float wxlGClass;
layout(location = 15) out float wxlGPlain;
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
    vec4 _117 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _139 = (_117.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_117.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_117.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _147 = (_117.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _139;
    vec2 _156 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _689 = _139;
    _689.x = _156.x;
    _689.y = _156.y;
    vec4 _693 = vec4(0.0);
    _693.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _693.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _180 = (_689.yx * _693.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _697 = vec4(0.0);
    _697.x = _180.x;
    _697.y = _180.y;
    _693.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _693.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _709 = _693;
    _709.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _709.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _717 = _709;
    _717.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _717.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _725 = _717;
    _725.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _725.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _276 = _117.z;
    float _284 = (_276 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _734 = _689;
    _734.x = _284;
    float _288 = max(_284, 0.0);
    _734.x = _288;
    float _681;
    if (_288 == 0.0)
    {
        _681 = 0.0;
    }
    else
    {
        _681 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_288)));
    }
    vec4 _740 = _725;
    _740.x = _681;
    vec3 _308 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _734.x = _308.x;
    _734.y = _308.y;
    _734.z = _308.z;
    vec3 _323 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _734.xyz;
    vec4 _751 = _734;
    _751.x = _323.x;
    _751.y = _323.y;
    _751.z = _323.z;
    vec3 _338 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _751.xyz;
    float _340 = _338.x;
    vec3 _347 = -_117.xyz;
    float _351 = dot(_347, _347);
    vec4 _878 = vec4(_340, _338.yz, _351);
    _878.w = inversesqrt(abs(_351));
    vec3 _368 = (_347 * _878.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _740.x = _368.x;
    _740.y = _368.y;
    _740.z = _368.z;
    vec4 _665 = _740 * inversesqrt(dot(_740.xyz, _740.xyz));
    vec4 _774 = vec4(0.0);
    _774.x = _665.x;
    _774.y = _665.y;
    _774.z = _665.z;
    float _389 = dot(_774.xyz, _878.xyz);
    vec4 _780 = _878;
    _780.w = _389;
    _780.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _780.xyz), 0.0, 1.0);
    _740.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _740.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _740.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _879 = vec4((_740.xyz * _780.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _389);
    vec3 _429 = min(_879.xyz, vec3(1.0));
    vec4 _796 = _879;
    _796.x = _429.x;
    _796.y = _429.y;
    _796.z = _429.z;
    float _452 = max(_389, 0.0);
    float _682;
    if (_452 == 0.0)
    {
        _682 = 0.0;
    }
    else
    {
        _682 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_452)));
    }
    _740.x = _682;
    vec4 _844 = vec4(0.0);
    _844.x = _117.x;
    _844.y = _117.y;
    _844.z = _276;
    vec4 _883 = vec4(_796.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_340, _338.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _579 = abs((_883.xyz * 2.0) - _796.xyz);
    wxlGPlain = max(max(_579.x, _579.y), _579.z);
    gl_Position = vec4(_147.x, -_147.y, _147.zw);
    color0 = _883;
    color1 = vec4(_740.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _697;
    texcoord1 = vec4((_689.yx * _693.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_689.xy * _709.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_689.yx * _717.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_689.xy * _725.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _844;
    texcoord4 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_681, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
