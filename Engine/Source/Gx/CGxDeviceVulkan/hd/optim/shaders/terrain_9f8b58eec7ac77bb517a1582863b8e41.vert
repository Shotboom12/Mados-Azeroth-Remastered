#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
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
    vec2 _156 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _665 = _139;
    _665.x = _156.x;
    _665.y = _156.y;
    vec4 _669 = vec4(0.0);
    _669.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _669.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _180 = (_665.xy * _669.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _673 = vec4(0.0);
    _673.x = _180.x;
    _673.y = _180.y;
    _669.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _669.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _685 = _669;
    _685.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _685.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _693 = _685;
    _693.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _693.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _248 = (_665.xy * _693.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _697 = vec4(0.0);
    _697.x = _248.x;
    _697.y = _248.y;
    float _254 = _117.z;
    float _262 = (_254 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _702 = _665;
    _702.x = _262;
    float _266 = max(_262, 0.0);
    _702.x = _266;
    float _657;
    if (_266 == 0.0)
    {
        _657 = 0.0;
    }
    else
    {
        _657 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_266)));
    }
    _693.x = _657;
    vec3 _286 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _702.x = _286.x;
    _702.y = _286.y;
    _702.z = _286.z;
    vec3 _301 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _702.xyz;
    vec4 _719 = _702;
    _719.x = _301.x;
    _719.y = _301.y;
    _719.z = _301.z;
    vec3 _316 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _719.xyz;
    float _318 = _316.x;
    vec3 _325 = -_117.xyz;
    float _329 = dot(_325, _325);
    vec4 _845 = vec4(_318, _316.yz, _329);
    _845.w = inversesqrt(abs(_329));
    vec3 _346 = (_325 * _845.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _693.x = _346.x;
    _693.y = _346.y;
    _693.z = _346.z;
    vec4 _641 = _693 * inversesqrt(dot(_693.xyz, _693.xyz));
    vec4 _742 = vec4(0.0);
    _742.x = _641.x;
    _742.y = _641.y;
    _742.z = _641.z;
    float _367 = dot(_742.xyz, _845.xyz);
    vec4 _748 = _845;
    _748.w = _367;
    _748.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _748.xyz), 0.0, 1.0);
    _693.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _693.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _693.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _846 = vec4((_693.xyz * _748.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _367);
    vec3 _407 = min(_846.xyz, vec3(1.0));
    vec4 _764 = _846;
    _764.x = _407.x;
    _764.y = _407.y;
    _764.z = _407.z;
    float _429 = max(_367, 0.0);
    float _658;
    if (_429 == 0.0)
    {
        _658 = 0.0;
    }
    else
    {
        _658 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_429)));
    }
    _693.x = _658;
    vec4 _812 = vec4(0.0);
    _812.x = _117.x;
    _812.y = _117.y;
    _812.z = _254;
    vec4 _850 = vec4(_764.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_318, _316.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _555 = abs((_850.xyz * 2.0) - _764.xyz);
    wxlGPlain = max(max(_555.x, _555.y), _555.z);
    gl_Position = vec4(_147.x, -_147.y, _147.zw);
    color0 = _850;
    color1 = vec4(_693.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _673;
    texcoord1 = vec4((_665.xy * _669.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_665.yx * _685.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _697;
    texcoord3 = _812;
    texcoord4 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_657, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
