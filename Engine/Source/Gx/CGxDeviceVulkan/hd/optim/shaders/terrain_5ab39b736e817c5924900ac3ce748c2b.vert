#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _773;



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
    vec4 _615;
    _615.x = _131.x;
    _615.y = _131.y;
    _615.z = _131.z;
    vec3 _149 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _615.xyz;
    vec4 _621;
    _621.x = _149.x;
    _621.y = _149.y;
    _621.z = _149.z;
    vec3 _164 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _621.xyz;
    float _166 = _164.x;
    vec4 _627;
    _627.x = _166;
    _627.y = _164.y;
    _627.z = _164.z;
    vec3 _172 = _94.xyz;
    float _175 = dot(_172, _627.xyz);
    vec4 _781 = vec4(_166, _164.yz, _175);
    _781.w = _175 + _175;
    vec3 _192 = (_781.xyz * (-_781.www)) + _172;
    vec4 _639 = vec4(0.0);
    _639.x = _192.x;
    _639.y = _192.y;
    _639.z = _192.z;
    vec4 _645;
    _645.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _781.xyz), 0.0, 1.0);
    vec4 _647;
    _647.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _647.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _647.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _229 = (_647.xyz * _645.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _653;
    _653.x = _229.x;
    _653.y = _229.y;
    _653.z = _229.z;
    vec3 _238 = min(_653.xyz, vec3(1.0));
    vec4 _659;
    _659.x = _238.x;
    _659.y = _238.y;
    _659.z = _238.z;
    vec3 _265 = _639.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _671;
    _671.x = _265.x;
    _671.y = _265.y;
    _671.z = _265.z;
    vec3 _281 = (_639.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _671.xyz;
    vec4 _677;
    _677.x = _281.x;
    _677.y = _281.y;
    _677.z = _281.z;
    vec3 _297 = (_639.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _677.xyz;
    vec4 _683 = vec4(0.0);
    _683.x = _297.x;
    _683.y = _297.y;
    _683.z = _297.z;
    vec2 _312 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _689;
    _689.x = _312.x;
    _689.y = _312.y;
    _639.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _639.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _701 = _639;
    _701.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _701.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _709 = _701;
    _709.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _709.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _717 = _709;
    _717.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _717.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _406 = _94.z;
    float _418 = max((_406 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _607;
    if (_418 == 0.0)
    {
        _607 = 0.0;
    }
    else
    {
        _607 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_418)));
    }
    vec4 _761 = vec4(0.0);
    _761.x = _94.x;
    _761.y = _94.y;
    _761.z = _406;
    vec4 _787 = vec4(_659.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_166, _164.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _535 = abs((_787.xyz * 2.0) - _659.xyz);
    wxlGPlain = max(max(_535.x, _535.y), _535.z);
    gl_Position = vec4(_124.x, -_124.y, _124.zw);
    color0 = _787;
    color1 = vec4(0.0);
    texcoord0 = _683;
    texcoord1 = vec4((_689.yx * _639.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_689.xy * _701.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_689.yx * _709.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_689.xy * _717.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _761;
    texcoord4 = vec4(dot(_94, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_94, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_94, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_94, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_607, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
