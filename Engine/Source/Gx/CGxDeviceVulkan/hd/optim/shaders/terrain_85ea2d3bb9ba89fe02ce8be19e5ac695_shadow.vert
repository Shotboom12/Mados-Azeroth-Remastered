#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
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
    vec4 _138 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _160 = (_138.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_138.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_138.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _175 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _681 = _160;
    _681.x = _175.x;
    _681.y = _175.y;
    _681.z = _175.z;
    vec3 _190 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _681.xyz;
    vec4 _687 = _681;
    _687.x = _190.x;
    _687.y = _190.y;
    _687.z = _190.z;
    vec3 _205 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _687.xyz;
    float _207 = _205.x;
    vec4 _693 = _687;
    _693.x = _207;
    _693.y = _205.y;
    _693.z = _205.z;
    vec3 _213 = _138.xyz;
    float _216 = dot(_213, _693.xyz);
    vec4 _878 = vec4(_207, _205.yz, _216);
    _878.w = _216 + _216;
    vec3 _232 = (_878.xyz * (-_878.www)) + _213;
    vec4 _705 = vec4(0.0);
    _705.x = _232.x;
    _705.y = _232.y;
    float _238 = _232.z;
    _705.z = _238;
    vec3 _245 = _705.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _711 = vec4(0.0);
    _711.x = _245.x;
    _711.y = _245.y;
    _711.z = _245.z;
    vec3 _261 = (_705.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _711.xyz;
    vec4 _879 = vec4(_261.xy, _238, _261.z);
    vec3 _277 = (_879.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _879.xyw;
    vec4 _723 = vec4(0.0);
    _723.x = _277.x;
    _723.y = _277.y;
    _723.z = _277.z;
    vec2 _292 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    _879.x = _292.x;
    _879.y = _292.y;
    _711.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _711.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _741 = _711;
    _741.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _741.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _342 = _138.z;
    float _350 = (_342 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _878.w = _350;
    float _354 = max(_350, 0.0);
    _878.w = _354;
    float _678;
    if (_354 == 0.0)
    {
        _678 = 0.0;
    }
    else
    {
        _678 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_354)));
    }
    vec4 _756 = _879;
    _756.x = _678;
    vec3 _371 = -_213;
    float _375 = dot(_371, _371);
    _878.w = _375;
    _878.w = inversesqrt(abs(_375));
    vec3 _392 = (_371 * _878.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _756.x = _392.x;
    _756.y = _392.y;
    _756.z = _392.z;
    vec4 _645 = _756 * inversesqrt(dot(_756.xyz, _756.xyz));
    vec4 _772 = _741;
    _772.x = _645.x;
    _772.y = _645.y;
    _772.z = _645.z;
    float _413 = dot(_772.xyz, _878.xyz);
    vec4 _778 = _878;
    _778.w = _413;
    _778.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _778.xyz), 0.0, 1.0);
    _756.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _756.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _756.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _881 = vec4((_756.xyz * _778.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _413);
    vec3 _452 = min(_881.xyz, vec3(1.0));
    vec4 _794 = _881;
    _794.x = _452.x;
    _794.y = _452.y;
    _794.z = _452.z;
    float _473 = max(_413, 0.0);
    float _679;
    if (_473 == 0.0)
    {
        _679 = 0.0;
    }
    else
    {
        _679 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_473)));
    }
    _756.x = _679;
    vec4 _842 = vec4(0.0);
    _842.x = _138.x;
    _842.y = _138.y;
    _842.z = _342;
    vec4 _667 = optPush.clipToTarget * ((_138.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _160);
    gl_Position = vec4(_667.x, -_667.y, _667.zw);
    color0 = vec4(_794.xyz * v2.xyz, 1.0);
    color1 = vec4(_756.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _723;
    texcoord1 = vec4((_879.yx * _711.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_879.xy * _741.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _842;
    texcoord4 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_678, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
