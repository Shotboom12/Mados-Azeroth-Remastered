#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _743;



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
    vec4 _94 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _124 = (_94.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_94.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_94.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_94.yyyy * optRegs.rows[optTile*82u+17u+uint(5)])));
    vec3 _131 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _593;
    _593.x = _131.x;
    _593.y = _131.y;
    _593.z = _131.z;
    vec3 _149 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _593.xyz;
    vec4 _599;
    _599.x = _149.x;
    _599.y = _149.y;
    _599.z = _149.z;
    vec3 _164 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _599.xyz;
    float _166 = _164.x;
    vec4 _605;
    _605.x = _166;
    _605.y = _164.y;
    _605.z = _164.z;
    vec3 _172 = _94.xyz;
    float _175 = dot(_172, _605.xyz);
    vec4 _751 = vec4(_166, _164.yz, _175);
    _751.w = _175 + _175;
    vec3 _192 = (_751.xyz * (-_751.www)) + _172;
    vec4 _617 = vec4(0.0);
    _617.x = _192.x;
    _617.y = _192.y;
    _617.z = _192.z;
    vec4 _623;
    _623.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _751.xyz), 0.0, 1.0);
    vec4 _625;
    _625.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _625.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _625.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _229 = (_625.xyz * _623.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _631;
    _631.x = _229.x;
    _631.y = _229.y;
    _631.z = _229.z;
    vec3 _238 = min(_631.xyz, vec3(1.0));
    vec4 _637;
    _637.x = _238.x;
    _637.y = _238.y;
    _637.z = _238.z;
    vec3 _265 = _617.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _649;
    _649.x = _265.x;
    _649.y = _265.y;
    _649.z = _265.z;
    vec3 _281 = (_617.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _649.xyz;
    vec4 _655;
    _655.x = _281.x;
    _655.y = _281.y;
    _655.z = _281.z;
    vec3 _297 = (_617.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _655.xyz;
    vec4 _661 = vec4(0.0);
    _661.x = _297.x;
    _661.y = _297.y;
    _661.z = _297.z;
    vec2 _312 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _667;
    _667.x = _312.x;
    _667.y = _312.y;
    _617.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _617.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _679 = _617;
    _679.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _679.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _687 = _679;
    _687.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _687.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _378 = (_667.xy * _687.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _691 = vec4(0.0);
    _691.x = _378.x;
    _691.y = _378.y;
    float _384 = _94.z;
    float _396 = max((_384 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _585;
    if (_396 == 0.0)
    {
        _585 = 0.0;
    }
    else
    {
        _585 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_396)));
    }
    vec4 _731 = vec4(0.0);
    _731.x = _94.x;
    _731.y = _94.y;
    _731.z = _384;
    vec4 _756 = vec4(_637.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_166, _164.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _513 = abs((_756.xyz * 2.0) - _637.xyz);
    wxlGPlain = max(max(_513.x, _513.y), _513.z);
    gl_Position = vec4(_124.x, -_124.y, _124.zw);
    color0 = _756;
    color1 = vec4(0.0);
    texcoord0 = _661;
    texcoord1 = vec4((_667.xy * _617.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_667.yx * _679.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _691;
    texcoord3 = _731;
    texcoord4 = vec4(dot(_94, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_94, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_94, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_585, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
