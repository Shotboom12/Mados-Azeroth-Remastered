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
    vec2 _156 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _667 = _139;
    _667.x = _156.x;
    _667.y = _156.y;
    vec4 _671 = vec4(0.0);
    _671.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _671.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _180 = (_667.xy * _671.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _675 = vec4(0.0);
    _675.x = _180.x;
    _675.y = _180.y;
    _671.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _671.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _687 = _671;
    _687.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _687.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _695 = _687;
    _695.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _695.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _248 = (_667.xy * _695.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _699 = vec4(0.0);
    _699.x = _248.x;
    _699.y = _248.y;
    float _254 = _117.z;
    float _262 = (_254 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _704 = _667;
    _704.x = _262;
    float _266 = max(_262, 0.0);
    _704.x = _266;
    float _659;
    if (_266 == 0.0)
    {
        _659 = 0.0;
    }
    else
    {
        _659 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_266)));
    }
    _695.x = _659;
    vec3 _286 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _704.x = _286.x;
    _704.y = _286.y;
    _704.z = _286.z;
    vec3 _301 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _704.xyz;
    vec4 _721 = _704;
    _721.x = _301.x;
    _721.y = _301.y;
    _721.z = _301.z;
    vec3 _316 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _721.xyz;
    float _318 = _316.x;
    vec3 _325 = -_117.xyz;
    float _329 = dot(_325, _325);
    vec4 _847 = vec4(_318, _316.yz, _329);
    _847.w = inversesqrt(abs(_329));
    vec3 _346 = (_325 * _847.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _695.x = _346.x;
    _695.y = _346.y;
    _695.z = _346.z;
    vec4 _643 = _695 * inversesqrt(dot(_695.xyz, _695.xyz));
    vec4 _744 = vec4(0.0);
    _744.x = _643.x;
    _744.y = _643.y;
    _744.z = _643.z;
    float _367 = dot(_744.xyz, _847.xyz);
    vec4 _750 = _847;
    _750.w = _367;
    _750.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _750.xyz), 0.0, 1.0);
    _695.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _695.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _695.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _848 = vec4((_695.xyz * _750.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _367);
    vec3 _407 = min(_848.xyz, vec3(1.0));
    vec4 _766 = _848;
    _766.x = _407.x;
    _766.y = _407.y;
    _766.z = _407.z;
    float _430 = max(_367, 0.0);
    float _660;
    if (_430 == 0.0)
    {
        _660 = 0.0;
    }
    else
    {
        _660 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_430)));
    }
    _695.x = _660;
    vec4 _814 = vec4(0.0);
    _814.x = _117.x;
    _814.y = _117.y;
    _814.z = _254;
    vec4 _852 = vec4(_766.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_318, _316.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _557 = abs((_852.xyz * 2.0) - _766.xyz);
    wxlGPlain = max(max(_557.x, _557.y), _557.z);
    gl_Position = vec4(_147.x, -_147.y, _147.zw);
    color0 = _852;
    color1 = vec4(_695.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _675;
    texcoord1 = vec4((_667.xy * _671.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_667.yx * _687.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _699;
    texcoord3 = _814;
    texcoord4 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_659, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
