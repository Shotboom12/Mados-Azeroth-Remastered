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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _90 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _112 = (_90.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_90.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_90.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _120 = (_90.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _112;
    vec3 _127 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _524 = _112;
    _524.x = _127.x;
    _524.y = _127.y;
    _524.z = _127.z;
    vec3 _145 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _524.xyz;
    vec4 _530 = _524;
    _530.x = _145.x;
    _530.y = _145.y;
    _530.z = _145.z;
    vec3 _160 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _530.xyz;
    float _162 = _160.x;
    vec4 _536 = _530;
    _536.x = _162;
    _536.y = _160.y;
    _536.z = _160.z;
    float _171 = dot(_90.xyz, _536.xyz);
    vec4 _542 = _90;
    _542.w = _171;
    _542.w = _171 + _171;
    vec3 _188 = (_536.xyz * (-_542.www)) + _542.xyz;
    float _204 = (_90.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _661 = vec4(_188.xy, _204, _188.z);
    float _208 = max(_204, 0.0);
    _661.z = _208;
    float _519;
    if (_208 == 0.0)
    {
        _519 = 0.0;
    }
    else
    {
        _519 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_208)));
    }
    vec4 _662 = vec4(_162, _160.yz, _519);
    _661.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _662.xyz), 0.0, 1.0);
    _662.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _662.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _662.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _252 = (_662.xyz * _661.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _574 = _662;
    _574.x = _252.x;
    _574.y = _252.y;
    _574.z = _252.z;
    vec3 _261 = min(_574.xyz, vec3(1.0));
    vec4 _580 = _574;
    _580.x = _261.x;
    _580.y = _261.y;
    _580.z = _261.z;
    vec3 _288 = _661.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _592 = _580;
    _592.x = _288.x;
    _592.y = _288.y;
    _592.z = _288.z;
    vec3 _304 = (_661.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _592.xyz;
    vec4 _598 = _661;
    _598.x = _304.x;
    _598.y = _304.y;
    _598.z = _304.z;
    vec3 _320 = (_598.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _598.xyz;
    vec4 _604 = vec4(0.0);
    _604.x = _320.x;
    _604.y = _320.y;
    _604.z = _320.z;
    vec2 _335 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _598.x = _335.x;
    _598.y = _335.y;
    _592.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _592.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _357 = (_598.xy * _592.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _618 = vec4(0.0);
    _618.x = _357.x;
    _618.y = _357.y;
    _592.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _592.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _379 = (_598.xy * _592.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _626 = vec4(0.0);
    _626.x = _379.x;
    _626.y = _379.y;
    _592.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _592.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _401 = (_598.xy * _592.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _634 = vec4(0.0);
    _634.x = _401.x;
    _634.y = _401.y;
    _592.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _592.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _423 = (_598.xy * _592.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _642 = vec4(0.0);
    _642.x = _423.x;
    _642.y = _423.y;
    vec4 _663 = vec4(_580.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_162, _160.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _451 = abs((_663.xyz * 2.0) - _580.xyz);
    wxlGPlain = max(max(_451.x, _451.y), _451.z);
    gl_Position = vec4(_120.x, -_120.y, _120.zw);
    color0 = _663;
    color1 = vec4(0.0);
    texcoord0 = _604;
    texcoord1 = _618;
    texcoord2 = _626;
    texcoord3 = _634;
    texcoord4 = _642;
    fog0 = min(_519, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
