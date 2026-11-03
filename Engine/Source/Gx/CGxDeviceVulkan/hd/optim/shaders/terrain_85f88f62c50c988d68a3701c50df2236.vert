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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _89 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _111 = (_89.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_89.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_89.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _119 = (_89.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _111;
    float _132 = (_89.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _448 = _89;
    _448.x = _132;
    float _136 = max(_132, 0.0);
    _448.x = _136;
    float _442;
    if (_136 == 0.0)
    {
        _442 = 0.0;
    }
    else
    {
        _442 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_136)));
    }
    vec4 _454 = _111;
    _454.x = _442;
    vec2 _158 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _448.x = _158.x;
    _448.y = _158.y;
    _454.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _454.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _180 = (_448.xy * _454.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _467 = vec4(0.0);
    _467.x = _180.x;
    _467.y = _180.y;
    _454.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _454.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _202 = (_448.xy * _454.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _475 = vec4(0.0);
    _475.x = _202.x;
    _475.y = _202.y;
    _454.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _454.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _224 = (_448.xy * _454.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _483 = vec4(0.0);
    _483.x = _224.x;
    _483.y = _224.y;
    _454.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _454.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _246 = (_448.xy * _454.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _491 = vec4(0.0);
    _491.x = _246.x;
    _491.y = _246.y;
    vec3 _257 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _448.x = _257.x;
    _448.y = _257.y;
    _448.z = _257.z;
    vec3 _272 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _448.xyz;
    vec4 _501 = _448;
    _501.x = _272.x;
    _501.y = _272.y;
    _501.z = _272.z;
    vec3 _287 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _501.xyz;
    float _289 = _287.x;
    vec4 _507 = _501;
    _507.x = _289;
    _507.y = _287.y;
    _507.z = _287.z;
    _507.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _507.xyz), 0.0, 1.0);
    _454.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _454.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _454.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _324 = (_454.xyz * _507.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _521 = _507;
    _521.x = _324.x;
    _521.y = _324.y;
    _521.z = _324.z;
    vec3 _333 = min(_521.xyz, vec3(1.0));
    vec4 _527 = _521;
    _527.x = _333.x;
    _527.y = _333.y;
    _527.z = _333.z;
    vec4 _553 = vec4(_527.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_289, _287.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _376 = abs((_553.xyz * 2.0) - _527.xyz);
    wxlGPlain = max(max(_376.x, _376.y), _376.z);
    gl_Position = vec4(_119.x, -_119.y, _119.zw);
    color0 = _553;
    color1 = vec4(0.0);
    texcoord0 = _467;
    texcoord1 = _475;
    texcoord2 = _483;
    texcoord3 = _491;
    fog0 = min(_442, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
