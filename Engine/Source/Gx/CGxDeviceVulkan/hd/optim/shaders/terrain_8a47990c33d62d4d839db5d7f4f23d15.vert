#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _706;



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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _113 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _135 = (_113.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_113.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_113.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _143 = (_113.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _135;
    vec2 _152 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _575 = _135;
    _575.x = _152.x;
    _575.y = _152.y;
    vec4 _579;
    _579.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _579.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _176 = (_575.xy * _579.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _583 = vec4(0.0);
    _583.x = _176.x;
    _583.y = _176.y;
    vec4 _587;
    _587.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _587.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _198 = (_575.xy * _587.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _591 = vec4(0.0);
    _591.x = _198.x;
    _591.y = _198.y;
    vec4 _595;
    _595.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _595.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _220 = (_575.xy * _595.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _599 = vec4(0.0);
    _599.x = _220.x;
    _599.y = _220.y;
    vec4 _603;
    _603.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _603.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _242 = (_575.xy * _603.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _607 = vec4(0.0);
    _607.x = _242.x;
    _607.y = _242.y;
    float _257 = (_113.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _612 = _113;
    _612.w = _257;
    float _262 = max(_257, 0.0);
    _612.w = _262;
    float _567;
    if (_262 == 0.0)
    {
        _567 = 0.0;
    }
    else
    {
        _567 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_262)));
    }
    _575.x = _567;
    vec3 _278 = -_612.xyz;
    float _282 = dot(_278, _278);
    vec4 _623 = _612;
    _623.w = _282;
    float _541 = inversesqrt(abs(_282));
    _623.w = _541;
    vec4 _716 = vec4(((-_623.xyz) * _623.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _541);
    vec3 _546 = _716.xyz;
    vec4 _551 = _716 * inversesqrt(dot(_546, _546));
    _575.x = _551.x;
    _575.y = _551.y;
    _575.z = _551.z;
    vec3 _322 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _716.x = _322.x;
    _716.y = _322.y;
    _716.z = _322.z;
    vec3 _337 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _716.xyz;
    vec4 _646 = _716;
    _646.x = _337.x;
    _646.y = _337.y;
    _646.z = _337.z;
    vec3 _352 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _646.xyz;
    float _354 = _352.x;
    vec4 _652 = _646;
    _652.x = _354;
    _652.y = _352.y;
    _652.z = _352.z;
    float _363 = dot(_575.xyz, _652.xyz);
    vec4 _717 = vec4(_354, _352.yz, _363);
    _717.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _717.xyz), 0.0, 1.0);
    vec4 _662 = _575;
    _662.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _662.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _662.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _394 = (_662.xyz * _717.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _668 = _717;
    _668.x = _394.x;
    _668.y = _394.y;
    _668.z = _394.z;
    vec3 _403 = min(_668.xyz, vec3(1.0));
    vec4 _674 = _668;
    _674.x = _403.x;
    _674.y = _403.y;
    _674.z = _403.z;
    float _425 = max(_363, 0.0);
    float _568;
    if (_425 == 0.0)
    {
        _568 = 0.0;
    }
    else
    {
        _568 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_425)));
    }
    _662.x = _568;
    vec4 _718 = vec4(_674.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_354, _352.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _471 = abs((_718.xyz * 2.0) - _674.xyz);
    wxlGPlain = max(max(_471.x, _471.y), _471.z);
    gl_Position = vec4(_143.x, -_143.y, _143.zw);
    color0 = _718;
    color1 = vec4(_662.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _583;
    texcoord1 = _591;
    texcoord2 = _599;
    texcoord3 = _607;
    fog0 = min(_567, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
