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
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _116 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _138 = (_116.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_116.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_116.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _146 = (_116.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _138;
    vec2 _155 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _642 = _138;
    _642.x = _155.x;
    _642.y = _155.y;
    vec4 _646 = vec4(0.0);
    _646.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _646.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _179 = (_642.yx * _646.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _650 = vec4(0.0);
    _650.x = _179.x;
    _650.y = _179.y;
    _646.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _646.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _662 = _646;
    _662.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _662.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _231 = _116.z;
    float _239 = (_231 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _671 = _642;
    _671.x = _239;
    float _243 = max(_239, 0.0);
    _671.x = _243;
    float _634;
    if (_243 == 0.0)
    {
        _634 = 0.0;
    }
    else
    {
        _634 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_243)));
    }
    vec4 _677 = _662;
    _677.x = _634;
    vec3 _263 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _671.x = _263.x;
    _671.y = _263.y;
    _671.z = _263.z;
    vec3 _278 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _671.xyz;
    vec4 _688 = _671;
    _688.x = _278.x;
    _688.y = _278.y;
    _688.z = _278.z;
    vec3 _293 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _688.xyz;
    float _295 = _293.x;
    vec3 _302 = -_116.xyz;
    float _306 = dot(_302, _302);
    vec4 _814 = vec4(_295, _293.yz, _306);
    _814.w = inversesqrt(abs(_306));
    vec3 _323 = (_302 * _814.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _677.x = _323.x;
    _677.y = _323.y;
    _677.z = _323.z;
    vec4 _618 = _677 * inversesqrt(dot(_677.xyz, _677.xyz));
    vec4 _711 = vec4(0.0);
    _711.x = _618.x;
    _711.y = _618.y;
    _711.z = _618.z;
    float _344 = dot(_711.xyz, _814.xyz);
    vec4 _717 = _814;
    _717.w = _344;
    _717.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _717.xyz), 0.0, 1.0);
    _677.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _677.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _677.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _815 = vec4((_677.xyz * _717.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _344);
    vec3 _384 = min(_815.xyz, vec3(1.0));
    vec4 _733 = _815;
    _733.x = _384.x;
    _733.y = _384.y;
    _733.z = _384.z;
    float _407 = max(_344, 0.0);
    float _635;
    if (_407 == 0.0)
    {
        _635 = 0.0;
    }
    else
    {
        _635 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_407)));
    }
    _677.x = _635;
    vec4 _781 = vec4(0.0);
    _781.x = _116.x;
    _781.y = _116.y;
    _781.z = _231;
    vec4 _819 = vec4(_733.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_295, _293.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _534 = abs((_819.xyz * 2.0) - _733.xyz);
    wxlGPlain = max(max(_534.x, _534.y), _534.z);
    gl_Position = vec4(_146.x, -_146.y, _146.zw);
    color0 = _819;
    color1 = vec4(_677.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _650;
    texcoord1 = vec4((_642.yx * _646.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_642.xy * _662.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _781;
    texcoord4 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_634, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
