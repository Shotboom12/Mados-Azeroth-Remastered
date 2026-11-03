#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _771;



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
    vec4 _94 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _124 = (_94.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_94.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_94.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_94.yyyy * optRegs.rows[optTile*82u+17u+uint(5)])));
    vec3 _131 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _613;
    _613.x = _131.x;
    _613.y = _131.y;
    _613.z = _131.z;
    vec3 _149 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _613.xyz;
    vec4 _619;
    _619.x = _149.x;
    _619.y = _149.y;
    _619.z = _149.z;
    vec3 _164 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _619.xyz;
    float _166 = _164.x;
    vec4 _625;
    _625.x = _166;
    _625.y = _164.y;
    _625.z = _164.z;
    vec3 _172 = _94.xyz;
    float _175 = dot(_172, _625.xyz);
    vec4 _779 = vec4(_166, _164.yz, _175);
    _779.w = _175 + _175;
    vec3 _192 = (_779.xyz * (-_779.www)) + _172;
    vec4 _637 = vec4(0.0);
    _637.x = _192.x;
    _637.y = _192.y;
    _637.z = _192.z;
    vec4 _643;
    _643.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _779.xyz), 0.0, 1.0);
    vec4 _645;
    _645.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _645.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _645.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _229 = (_645.xyz * _643.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _651;
    _651.x = _229.x;
    _651.y = _229.y;
    _651.z = _229.z;
    vec3 _238 = min(_651.xyz, vec3(1.0));
    vec4 _657;
    _657.x = _238.x;
    _657.y = _238.y;
    _657.z = _238.z;
    vec3 _264 = _637.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _669;
    _669.x = _264.x;
    _669.y = _264.y;
    _669.z = _264.z;
    vec3 _280 = (_637.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _669.xyz;
    vec4 _675;
    _675.x = _280.x;
    _675.y = _280.y;
    _675.z = _280.z;
    vec3 _296 = (_637.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _675.xyz;
    vec4 _681 = vec4(0.0);
    _681.x = _296.x;
    _681.y = _296.y;
    _681.z = _296.z;
    vec2 _311 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _687;
    _687.x = _311.x;
    _687.y = _311.y;
    _637.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _637.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _699 = _637;
    _699.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _699.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _707 = _699;
    _707.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _707.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _715 = _707;
    _715.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _715.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _405 = _94.z;
    float _417 = max((_405 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _605;
    if (_417 == 0.0)
    {
        _605 = 0.0;
    }
    else
    {
        _605 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_417)));
    }
    vec4 _759 = vec4(0.0);
    _759.x = _94.x;
    _759.y = _94.y;
    _759.z = _405;
    vec4 _785 = vec4(_657.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_166, _164.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _533 = abs((_785.xyz * 2.0) - _657.xyz);
    wxlGPlain = max(max(_533.x, _533.y), _533.z);
    gl_Position = vec4(_124.x, -_124.y, _124.zw);
    color0 = _785;
    color1 = vec4(0.0);
    texcoord0 = _681;
    texcoord1 = vec4((_687.yx * _637.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_687.xy * _699.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_687.yx * _707.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_687.xy * _715.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _759;
    texcoord4 = vec4(dot(_94, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_94, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_94, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_605, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
