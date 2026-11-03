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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _87 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _109 = (_87.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_87.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_87.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _117 = (_87.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _109;
    vec3 _124 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _447 = _109;
    _447.x = _124.x;
    _447.y = _124.y;
    _447.z = _124.z;
    vec3 _142 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _447.xyz;
    vec4 _453 = _447;
    _453.x = _142.x;
    _453.y = _142.y;
    _453.z = _142.z;
    vec3 _157 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _453.xyz;
    float _159 = _157.x;
    vec4 _459 = _453;
    _459.x = _159;
    _459.y = _157.y;
    _459.z = _157.z;
    float _168 = dot(_87.xyz, _459.xyz);
    vec4 _465 = _87;
    _465.w = _168;
    _465.w = _168 + _168;
    vec3 _185 = (_459.xyz * (-_465.www)) + _465.xyz;
    float _201 = (_87.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _557 = vec4(_185.xy, _201, _185.z);
    float _205 = max(_201, 0.0);
    _557.z = _205;
    float _442;
    if (_205 == 0.0)
    {
        _442 = 0.0;
    }
    else
    {
        _442 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_205)));
    }
    vec4 _558 = vec4(_159, _157.yz, _442);
    _557.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _558.xyz), 0.0, 1.0);
    _558.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _558.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _558.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _249 = (_558.xyz * _557.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _497 = _558;
    _497.x = _249.x;
    _497.y = _249.y;
    _497.z = _249.z;
    vec3 _258 = min(_497.xyz, vec3(1.0));
    vec4 _503 = _497;
    _503.x = _258.x;
    _503.y = _258.y;
    _503.z = _258.z;
    vec3 _284 = _557.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _515 = _503;
    _515.x = _284.x;
    _515.y = _284.y;
    _515.z = _284.z;
    vec3 _300 = (_557.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _515.xyz;
    vec4 _521 = _557;
    _521.x = _300.x;
    _521.y = _300.y;
    _521.z = _300.z;
    vec3 _316 = (_521.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _521.xyz;
    vec4 _527 = vec4(0.0);
    _527.x = _316.x;
    _527.y = _316.y;
    _527.z = _316.z;
    vec2 _331 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _521.x = _331.x;
    _521.y = _331.y;
    _515.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _515.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _353 = (_521.xy * _515.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _541 = vec4(0.0);
    _541.x = _353.x;
    _541.y = _353.y;
    vec4 _559 = vec4(_503.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_159, _157.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _380 = abs((_559.xyz * 2.0) - _503.xyz);
    wxlGPlain = max(max(_380.x, _380.y), _380.z);
    gl_Position = vec4(_117.x, -_117.y, _117.zw);
    color0 = _559;
    color1 = vec4(0.0);
    texcoord0 = _527;
    texcoord1 = _541;
    fog0 = min(_442, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
