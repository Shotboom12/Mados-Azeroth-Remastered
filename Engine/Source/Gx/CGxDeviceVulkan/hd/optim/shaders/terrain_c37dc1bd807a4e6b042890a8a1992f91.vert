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
    vec4 _93 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _115 = (_93.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_93.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_93.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _123 = (_93.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _115;
    vec2 _132 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _561 = _115;
    _561.x = _132.x;
    _561.y = _132.y;
    vec4 _565 = vec4(0.0);
    _565.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _565.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _156 = (_561.yx * _565.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _569 = vec4(0.0);
    _569.x = _156.x;
    _569.y = _156.y;
    _565.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _565.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _581 = _565;
    _581.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _581.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _589 = _581;
    _589.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _589.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _597 = _589;
    _597.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _597.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _252 = _93.z;
    float _260 = (_252 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _606 = _561;
    _606.x = _260;
    float _264 = max(_260, 0.0);
    _606.x = _264;
    float _556;
    if (_264 == 0.0)
    {
        _556 = 0.0;
    }
    else
    {
        _556 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_264)));
    }
    vec4 _612 = _597;
    _612.x = _556;
    vec3 _284 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _606.x = _284.x;
    _606.y = _284.y;
    _606.z = _284.z;
    vec3 _299 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _606.xyz;
    vec4 _623 = _606;
    _623.x = _299.x;
    _623.y = _299.y;
    _623.z = _299.z;
    vec3 _314 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _623.xyz;
    float _316 = _314.x;
    vec4 _629 = _623;
    _629.x = _316;
    _629.y = _314.y;
    _629.z = _314.z;
    _629.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _629.xyz), 0.0, 1.0);
    _612.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _612.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _612.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _351 = (_612.xyz * _629.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _643 = _629;
    _643.x = _351.x;
    _643.y = _351.y;
    _643.z = _351.z;
    vec3 _360 = min(_643.xyz, vec3(1.0));
    vec4 _649 = _643;
    _649.x = _360.x;
    _649.y = _360.y;
    _649.z = _360.z;
    vec4 _685 = vec4(0.0);
    _685.x = _93.x;
    _685.y = _93.y;
    _685.z = _252;
    vec4 _710 = vec4(_649.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_316, _314.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _484 = abs((_710.xyz * 2.0) - _649.xyz);
    wxlGPlain = max(max(_484.x, _484.y), _484.z);
    gl_Position = vec4(_123.x, -_123.y, _123.zw);
    color0 = _710;
    color1 = vec4(0.0);
    texcoord0 = _569;
    texcoord1 = vec4((_561.yx * _565.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_561.xy * _581.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_561.yx * _589.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_561.xy * _597.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _685;
    texcoord4 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_556, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
