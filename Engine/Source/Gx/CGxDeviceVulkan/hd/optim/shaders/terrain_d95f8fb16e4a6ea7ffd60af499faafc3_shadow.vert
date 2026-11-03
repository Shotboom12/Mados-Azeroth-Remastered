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
layout(location = 4) out vec4 texcoord2;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _110 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _132 = (_110.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_110.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_110.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _148 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _466 = _132;
    _466.x = _148.x;
    _466.y = _148.y;
    _466.z = _148.z;
    vec3 _163 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _466.xyz;
    vec4 _472 = _466;
    _472.x = _163.x;
    _472.y = _163.y;
    _472.z = _163.z;
    vec3 _178 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _472.xyz;
    float _180 = _178.x;
    vec4 _478 = _472;
    _478.x = _180;
    _478.y = _178.y;
    _478.z = _178.z;
    float _189 = dot(_110.xyz, _478.xyz);
    vec4 _484 = _110;
    _484.w = _189;
    _484.w = _189 + _189;
    vec3 _205 = (_478.xyz * (-_484.www)) + _484.xyz;
    float _221 = (_110.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _589 = vec4(_205.xy, _221, _205.z);
    float _225 = max(_221, 0.0);
    _589.z = _225;
    float _464;
    if (_225 == 0.0)
    {
        _464 = 0.0;
    }
    else
    {
        _464 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_225)));
    }
    vec4 _590 = vec4(_180, _178.yz, _464);
    _589.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _590.xyz), 0.0, 1.0);
    _590.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _590.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _590.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _268 = (_590.xyz * _589.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _516 = _590;
    _516.x = _268.x;
    _516.y = _268.y;
    _516.z = _268.z;
    vec3 _278 = min(_516.xyz, vec3(1.0));
    vec4 _522 = _516;
    _522.x = _278.x;
    _522.y = _278.y;
    _522.z = _278.z;
    vec3 _303 = _589.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _534 = _522;
    _534.x = _303.x;
    _534.y = _303.y;
    _534.z = _303.z;
    vec3 _319 = (_589.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _534.xyz;
    vec4 _540 = _589;
    _540.x = _319.x;
    _540.y = _319.y;
    _540.z = _319.z;
    vec3 _335 = (_540.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _540.xyz;
    vec4 _546 = vec4(0.0);
    _546.x = _335.x;
    _546.y = _335.y;
    _546.z = _335.z;
    vec2 _350 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _540.x = _350.x;
    _540.y = _350.y;
    _534.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _534.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _372 = (_540.xy * _534.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _560 = vec4(0.0);
    _560.x = _372.x;
    _560.y = _372.y;
    _534.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _534.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _394 = (_540.xy * _534.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _568 = vec4(0.0);
    _568.x = _394.x;
    _568.y = _394.y;
    vec4 _453 = optPush.clipToTarget * ((_110.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _132);
    gl_Position = vec4(_453.x, -_453.y, _453.zw);
    color0 = vec4(_522.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _546;
    texcoord1 = _560;
    texcoord2 = _568;
    fog0 = min(_464, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
