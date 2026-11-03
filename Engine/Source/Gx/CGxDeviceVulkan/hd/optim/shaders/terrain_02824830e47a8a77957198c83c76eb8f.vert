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
    vec3 _126 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _497 = _111;
    _497.x = _126.x;
    _497.y = _126.y;
    _497.z = _126.z;
    vec3 _144 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _497.xyz;
    vec4 _503 = _497;
    _503.x = _144.x;
    _503.y = _144.y;
    _503.z = _144.z;
    vec3 _159 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _503.xyz;
    float _161 = _159.x;
    vec4 _509 = _503;
    _509.x = _161;
    _509.y = _159.y;
    _509.z = _159.z;
    float _170 = dot(_89.xyz, _509.xyz);
    vec4 _515 = _89;
    _515.w = _170;
    _515.w = _170 + _170;
    vec3 _187 = (_509.xyz * (-_515.www)) + _515.xyz;
    float _203 = (_89.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _625 = vec4(_187.xy, _203, _187.z);
    float _207 = max(_203, 0.0);
    _625.z = _207;
    float _492;
    if (_207 == 0.0)
    {
        _492 = 0.0;
    }
    else
    {
        _492 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_207)));
    }
    vec4 _626 = vec4(_161, _159.yz, _492);
    _625.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _626.xyz), 0.0, 1.0);
    _626.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _626.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _626.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _251 = (_626.xyz * _625.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _547 = _626;
    _547.x = _251.x;
    _547.y = _251.y;
    _547.z = _251.z;
    vec3 _260 = min(_547.xyz, vec3(1.0));
    vec4 _553 = _547;
    _553.x = _260.x;
    _553.y = _260.y;
    _553.z = _260.z;
    vec3 _286 = _625.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _565 = _553;
    _565.x = _286.x;
    _565.y = _286.y;
    _565.z = _286.z;
    vec3 _302 = (_625.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _565.xyz;
    vec4 _571 = _625;
    _571.x = _302.x;
    _571.y = _302.y;
    _571.z = _302.z;
    vec3 _318 = (_571.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _571.xyz;
    vec4 _577 = vec4(0.0);
    _577.x = _318.x;
    _577.y = _318.y;
    _577.z = _318.z;
    vec2 _333 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _571.x = _333.x;
    _571.y = _333.y;
    _565.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _565.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _355 = (_571.xy * _565.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _591 = vec4(0.0);
    _591.x = _355.x;
    _591.y = _355.y;
    _565.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _565.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _377 = (_571.xy * _565.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _599 = vec4(0.0);
    _599.x = _377.x;
    _599.y = _377.y;
    _565.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _565.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _399 = (_571.xy * _565.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _607 = vec4(0.0);
    _607.x = _399.x;
    _607.y = _399.y;
    vec4 _627 = vec4(_553.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_161, _159.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _426 = abs((_627.xyz * 2.0) - _553.xyz);
    wxlGPlain = max(max(_426.x, _426.y), _426.z);
    gl_Position = vec4(_119.x, -_119.y, _119.zw);
    color0 = _627;
    color1 = vec4(0.0);
    texcoord0 = _577;
    texcoord1 = _591;
    texcoord2 = _599;
    texcoord3 = _607;
    fog0 = min(_492, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
