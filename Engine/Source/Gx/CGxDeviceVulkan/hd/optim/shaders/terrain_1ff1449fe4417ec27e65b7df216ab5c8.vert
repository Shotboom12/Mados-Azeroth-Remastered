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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _89 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _111 = (_89.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_89.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_89.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _119 = (_89.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _111;
    vec3 _126 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _499 = _111;
    _499.x = _126.x;
    _499.y = _126.y;
    _499.z = _126.z;
    vec3 _144 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _499.xyz;
    vec4 _505 = _499;
    _505.x = _144.x;
    _505.y = _144.y;
    _505.z = _144.z;
    vec3 _159 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _505.xyz;
    float _161 = _159.x;
    vec4 _511 = _505;
    _511.x = _161;
    _511.y = _159.y;
    _511.z = _159.z;
    float _170 = dot(_89.xyz, _511.xyz);
    vec4 _517 = _89;
    _517.w = _170;
    _517.w = _170 + _170;
    vec3 _187 = (_511.xyz * (-_517.www)) + _517.xyz;
    float _203 = (_89.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _627 = vec4(_187.xy, _203, _187.z);
    float _207 = max(_203, 0.0);
    _627.z = _207;
    float _494;
    if (_207 == 0.0)
    {
        _494 = 0.0;
    }
    else
    {
        _494 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_207)));
    }
    vec4 _628 = vec4(_161, _159.yz, _494);
    _627.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _628.xyz), 0.0, 1.0);
    _628.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _628.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _628.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _251 = (_628.xyz * _627.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _549 = _628;
    _549.x = _251.x;
    _549.y = _251.y;
    _549.z = _251.z;
    vec3 _260 = min(_549.xyz, vec3(1.0));
    vec4 _555 = _549;
    _555.x = _260.x;
    _555.y = _260.y;
    _555.z = _260.z;
    vec3 _287 = _627.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _567 = _555;
    _567.x = _287.x;
    _567.y = _287.y;
    _567.z = _287.z;
    vec3 _303 = (_627.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _567.xyz;
    vec4 _573 = _627;
    _573.x = _303.x;
    _573.y = _303.y;
    _573.z = _303.z;
    vec3 _319 = (_573.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _573.xyz;
    vec4 _579 = vec4(0.0);
    _579.x = _319.x;
    _579.y = _319.y;
    _579.z = _319.z;
    vec2 _334 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _573.x = _334.x;
    _573.y = _334.y;
    _567.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _567.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _356 = (_573.xy * _567.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _593 = vec4(0.0);
    _593.x = _356.x;
    _593.y = _356.y;
    _567.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _567.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _378 = (_573.xy * _567.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _601 = vec4(0.0);
    _601.x = _378.x;
    _601.y = _378.y;
    _567.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _567.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _400 = (_573.xy * _567.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _609 = vec4(0.0);
    _609.x = _400.x;
    _609.y = _400.y;
    vec4 _629 = vec4(_555.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_161, _159.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _428 = abs((_629.xyz * 2.0) - _555.xyz);
    wxlGPlain = max(max(_428.x, _428.y), _428.z);
    gl_Position = vec4(_119.x, -_119.y, _119.zw);
    color0 = _629;
    color1 = vec4(0.0);
    texcoord0 = _579;
    texcoord1 = _593;
    texcoord2 = _601;
    texcoord3 = _609;
    fog0 = min(_494, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
