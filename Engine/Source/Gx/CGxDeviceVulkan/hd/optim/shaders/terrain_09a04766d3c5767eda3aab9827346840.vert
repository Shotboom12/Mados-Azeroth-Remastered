#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _741;



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
    vec4 _591;
    _591.x = _131.x;
    _591.y = _131.y;
    _591.z = _131.z;
    vec3 _149 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _591.xyz;
    vec4 _597;
    _597.x = _149.x;
    _597.y = _149.y;
    _597.z = _149.z;
    vec3 _164 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _597.xyz;
    float _166 = _164.x;
    vec4 _603;
    _603.x = _166;
    _603.y = _164.y;
    _603.z = _164.z;
    vec3 _172 = _94.xyz;
    float _175 = dot(_172, _603.xyz);
    vec4 _749 = vec4(_166, _164.yz, _175);
    _749.w = _175 + _175;
    vec3 _192 = (_749.xyz * (-_749.www)) + _172;
    vec4 _615 = vec4(0.0);
    _615.x = _192.x;
    _615.y = _192.y;
    _615.z = _192.z;
    vec4 _621;
    _621.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _749.xyz), 0.0, 1.0);
    vec4 _623;
    _623.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _623.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _623.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _229 = (_623.xyz * _621.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _629;
    _629.x = _229.x;
    _629.y = _229.y;
    _629.z = _229.z;
    vec3 _238 = min(_629.xyz, vec3(1.0));
    vec4 _635;
    _635.x = _238.x;
    _635.y = _238.y;
    _635.z = _238.z;
    vec3 _264 = _615.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _647;
    _647.x = _264.x;
    _647.y = _264.y;
    _647.z = _264.z;
    vec3 _280 = (_615.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _647.xyz;
    vec4 _653;
    _653.x = _280.x;
    _653.y = _280.y;
    _653.z = _280.z;
    vec3 _296 = (_615.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _653.xyz;
    vec4 _659 = vec4(0.0);
    _659.x = _296.x;
    _659.y = _296.y;
    _659.z = _296.z;
    vec2 _311 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _665;
    _665.x = _311.x;
    _665.y = _311.y;
    _615.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _615.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _677 = _615;
    _677.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _677.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _685 = _677;
    _685.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _685.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _377 = (_665.xy * _685.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _689 = vec4(0.0);
    _689.x = _377.x;
    _689.y = _377.y;
    float _383 = _94.z;
    float _395 = max((_383 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _583;
    if (_395 == 0.0)
    {
        _583 = 0.0;
    }
    else
    {
        _583 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_395)));
    }
    vec4 _729 = vec4(0.0);
    _729.x = _94.x;
    _729.y = _94.y;
    _729.z = _383;
    vec4 _754 = vec4(_635.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_166, _164.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _511 = abs((_754.xyz * 2.0) - _635.xyz);
    wxlGPlain = max(max(_511.x, _511.y), _511.z);
    gl_Position = vec4(_124.x, -_124.y, _124.zw);
    color0 = _754;
    color1 = vec4(0.0);
    texcoord0 = _659;
    texcoord1 = vec4((_665.xy * _615.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_665.yx * _677.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _689;
    texcoord3 = _729;
    texcoord4 = vec4(dot(_94, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_94, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_94, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_583, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
