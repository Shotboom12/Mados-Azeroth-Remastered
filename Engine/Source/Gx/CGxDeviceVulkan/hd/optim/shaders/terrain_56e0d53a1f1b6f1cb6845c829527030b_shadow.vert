#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
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
    vec4 _465 = _132;
    _465.x = _148.x;
    _465.y = _148.y;
    _465.z = _148.z;
    vec3 _163 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _465.xyz;
    vec4 _471 = _465;
    _471.x = _163.x;
    _471.y = _163.y;
    _471.z = _163.z;
    vec3 _178 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _471.xyz;
    float _180 = _178.x;
    vec4 _477 = _471;
    _477.x = _180;
    _477.y = _178.y;
    _477.z = _178.z;
    float _189 = dot(_110.xyz, _477.xyz);
    vec4 _483 = _110;
    _483.w = _189;
    _483.w = _189 + _189;
    vec3 _205 = (_477.xyz * (-_483.www)) + _483.xyz;
    float _221 = (_110.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _588 = vec4(_205.xy, _221, _205.z);
    float _225 = max(_221, 0.0);
    _588.z = _225;
    float _463;
    if (_225 == 0.0)
    {
        _463 = 0.0;
    }
    else
    {
        _463 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_225)));
    }
    vec4 _589 = vec4(_180, _178.yz, _463);
    _588.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _589.xyz), 0.0, 1.0);
    _589.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _589.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _589.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _268 = (_589.xyz * _588.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _515 = _589;
    _515.x = _268.x;
    _515.y = _268.y;
    _515.z = _268.z;
    vec3 _278 = min(_515.xyz, vec3(1.0));
    vec4 _521 = _515;
    _521.x = _278.x;
    _521.y = _278.y;
    _521.z = _278.z;
    vec3 _302 = _588.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _533 = _521;
    _533.x = _302.x;
    _533.y = _302.y;
    _533.z = _302.z;
    vec3 _318 = (_588.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _533.xyz;
    vec4 _539 = _588;
    _539.x = _318.x;
    _539.y = _318.y;
    _539.z = _318.z;
    vec3 _334 = (_539.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _539.xyz;
    vec4 _545 = vec4(0.0);
    _545.x = _334.x;
    _545.y = _334.y;
    _545.z = _334.z;
    vec2 _349 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _539.x = _349.x;
    _539.y = _349.y;
    _533.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _533.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _371 = (_539.xy * _533.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _559 = vec4(0.0);
    _559.x = _371.x;
    _559.y = _371.y;
    _533.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _533.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _393 = (_539.xy * _533.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _567 = vec4(0.0);
    _567.x = _393.x;
    _567.y = _393.y;
    vec4 _452 = optPush.clipToTarget * ((_110.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _132);
    gl_Position = vec4(_452.x, -_452.y, _452.zw);
    color0 = vec4(_521.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _545;
    texcoord1 = _559;
    texcoord2 = _567;
    fog0 = min(_463, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
