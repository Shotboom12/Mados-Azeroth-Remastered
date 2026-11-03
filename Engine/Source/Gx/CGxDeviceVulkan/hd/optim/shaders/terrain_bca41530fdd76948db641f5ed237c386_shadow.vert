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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _109 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _131 = (_109.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_109.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_109.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _147 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _441 = _131;
    _441.x = _147.x;
    _441.y = _147.y;
    _441.z = _147.z;
    vec3 _162 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _441.xyz;
    vec4 _447 = _441;
    _447.x = _162.x;
    _447.y = _162.y;
    _447.z = _162.z;
    vec3 _177 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _447.xyz;
    float _179 = _177.x;
    vec4 _453 = _447;
    _453.x = _179;
    _453.y = _177.y;
    _453.z = _177.z;
    float _188 = dot(_109.xyz, _453.xyz);
    vec4 _459 = _109;
    _459.w = _188;
    _459.w = _188 + _188;
    vec3 _204 = (_453.xyz * (-_459.www)) + _459.xyz;
    float _220 = (_109.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _555 = vec4(_204.xy, _220, _204.z);
    float _224 = max(_220, 0.0);
    _555.z = _224;
    float _439;
    if (_224 == 0.0)
    {
        _439 = 0.0;
    }
    else
    {
        _439 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_224)));
    }
    vec4 _556 = vec4(_179, _177.yz, _439);
    _555.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _556.xyz), 0.0, 1.0);
    _556.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _556.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _556.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _267 = (_556.xyz * _555.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _491 = _556;
    _491.x = _267.x;
    _491.y = _267.y;
    _491.z = _267.z;
    vec3 _277 = min(_491.xyz, vec3(1.0));
    vec4 _497 = _491;
    _497.x = _277.x;
    _497.y = _277.y;
    _497.z = _277.z;
    vec3 _302 = _555.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _509 = _497;
    _509.x = _302.x;
    _509.y = _302.y;
    _509.z = _302.z;
    vec3 _318 = (_555.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _509.xyz;
    vec4 _515 = _555;
    _515.x = _318.x;
    _515.y = _318.y;
    _515.z = _318.z;
    vec3 _334 = (_515.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _515.xyz;
    vec4 _521 = vec4(0.0);
    _521.x = _334.x;
    _521.y = _334.y;
    _521.z = _334.z;
    vec2 _349 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _515.x = _349.x;
    _515.y = _349.y;
    _509.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _509.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _371 = (_515.xy * _509.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _535 = vec4(0.0);
    _535.x = _371.x;
    _535.y = _371.y;
    vec4 _428 = optPush.clipToTarget * ((_109.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _131);
    gl_Position = vec4(_428.x, -_428.y, _428.zw);
    color0 = vec4(_497.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _521;
    texcoord1 = _535;
    fog0 = min(_439, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
