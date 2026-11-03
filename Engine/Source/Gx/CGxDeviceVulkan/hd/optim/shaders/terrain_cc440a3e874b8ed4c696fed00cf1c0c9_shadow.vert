#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _703;





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
    vec4 _115 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec3 _153 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _557;
    _557.x = _153.x;
    _557.y = _153.y;
    _557.z = _153.z;
    vec3 _168 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _557.xyz;
    vec4 _563;
    _563.x = _168.x;
    _563.y = _168.y;
    _563.z = _168.z;
    vec3 _183 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _563.xyz;
    float _185 = _183.x;
    vec4 _569;
    _569.x = _185;
    _569.y = _183.y;
    _569.z = _183.z;
    vec3 _191 = _115.xyz;
    float _194 = dot(_191, _569.xyz);
    vec4 _711 = vec4(_185, _183.yz, _194);
    _711.w = _194 + _194;
    vec3 _210 = (_711.xyz * (-_711.www)) + _191;
    vec4 _581 = vec4(0.0);
    _581.x = _210.x;
    _581.y = _210.y;
    _581.z = _210.z;
    vec4 _587;
    _587.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _711.xyz), 0.0, 1.0);
    vec4 _589;
    _589.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _589.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _589.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _246 = (_589.xyz * _587.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _595;
    _595.x = _246.x;
    _595.y = _246.y;
    _595.z = _246.z;
    vec3 _256 = min(_595.xyz, vec3(1.0));
    vec4 _601;
    _601.x = _256.x;
    _601.y = _256.y;
    _601.z = _256.z;
    vec3 _281 = _581.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _613;
    _613.x = _281.x;
    _613.y = _281.y;
    _613.z = _281.z;
    vec3 _297 = (_581.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _613.xyz;
    vec4 _619;
    _619.x = _297.x;
    _619.y = _297.y;
    _619.z = _297.z;
    vec3 _313 = (_581.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _619.xyz;
    vec4 _625 = vec4(0.0);
    _625.x = _313.x;
    _625.y = _313.y;
    _625.z = _313.z;
    vec2 _328 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _631;
    _631.x = _328.x;
    _631.y = _328.y;
    _581.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _581.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _643 = _581;
    _643.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _643.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _378 = _115.z;
    float _390 = max((_378 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _555;
    if (_390 == 0.0)
    {
        _555 = 0.0;
    }
    else
    {
        _555 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_390)));
    }
    vec4 _687 = vec4(0.0);
    _687.x = _115.x;
    _687.y = _115.y;
    _687.z = _378;
    vec4 _544 = optPush.clipToTarget * ((_115.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_115.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_115.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_115.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]))));
    gl_Position = vec4(_544.x, -_544.y, _544.zw);
    color0 = vec4(_601.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _625;
    texcoord1 = vec4((_631.yx * _581.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_631.xy * _643.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _687;
    texcoord4 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_555, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
