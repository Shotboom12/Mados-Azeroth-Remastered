#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
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
    vec4 _658 = _160;
    _658.x = _175.x;
    _658.y = _175.y;
    _658.z = _175.z;
    vec3 _190 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _658.xyz;
    vec4 _664 = _658;
    _664.x = _190.x;
    _664.y = _190.y;
    _664.z = _190.z;
    vec3 _205 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _664.xyz;
    float _207 = _205.x;
    vec4 _670 = _664;
    _670.x = _207;
    _670.y = _205.y;
    _670.z = _205.z;
    vec3 _213 = _138.xyz;
    float _216 = dot(_213, _670.xyz);
    vec4 _847 = vec4(_207, _205.yz, _216);
    _847.w = _216 + _216;
    vec3 _232 = (_847.xyz * (-_847.www)) + _213;
    vec4 _682 = vec4(0.0);
    _682.x = _232.x;
    _682.y = _232.y;
    float _238 = _232.z;
    _682.z = _238;
    vec3 _245 = _682.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _688 = vec4(0.0);
    _688.x = _245.x;
    _688.y = _245.y;
    _688.z = _245.z;
    vec3 _261 = (_682.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _688.xyz;
    vec4 _848 = vec4(_261.xy, _238, _261.z);
    vec3 _277 = (_848.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _848.xyw;
    vec4 _700 = vec4(0.0);
    _700.x = _277.x;
    _700.y = _277.y;
    _700.z = _277.z;
    vec2 _292 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _848.x = _292.x;
    _848.y = _292.y;
    _688.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _688.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _314 = (_848.xy * _688.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _714 = vec4(0.0);
    _714.x = _314.x;
    _714.y = _314.y;
    float _320 = _138.z;
    float _328 = (_320 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _847.w = _328;
    float _332 = max(_328, 0.0);
    _847.w = _332;
    float _655;
    if (_332 == 0.0)
    {
        _655 = 0.0;
    }
    else
    {
        _655 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_332)));
    }
    _848.x = _655;
    vec3 _349 = -_213;
    float _353 = dot(_349, _349);
    _847.w = _353;
    _847.w = inversesqrt(abs(_353));
    vec3 _370 = (_349 * _847.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _848.x = _370.x;
    _848.y = _370.y;
    _848.z = _370.z;
    vec4 _622 = _848 * inversesqrt(dot(_848.xyz, _848.xyz));
    _688.x = _622.x;
    _688.y = _622.y;
    _688.z = _622.z;
    float _391 = dot(_688.xyz, _847.xyz);
    vec4 _747 = _847;
    _747.w = _391;
    _747.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _747.xyz), 0.0, 1.0);
    _848.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _848.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _848.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _849 = vec4((_848.xyz * _747.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _391);
    vec3 _430 = min(_849.xyz, vec3(1.0));
    vec4 _763 = _849;
    _763.x = _430.x;
    _763.y = _430.y;
    _763.z = _430.z;
    float _450 = max(_391, 0.0);
    float _656;
    if (_450 == 0.0)
    {
        _656 = 0.0;
    }
    else
    {
        _656 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_450)));
    }
    _848.x = _656;
    vec4 _811 = vec4(0.0);
    _811.x = _138.x;
    _811.y = _138.y;
    _811.z = _320;
    vec4 _644 = optPush.clipToTarget * ((_138.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _160);
    gl_Position = vec4(_644.x, -_644.y, _644.zw);
    color0 = vec4(_763.xyz * vec3(0.5), 1.0);
    color1 = vec4(_848.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _700;
    texcoord1 = _714;
    texcoord3 = _811;
    texcoord4 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_655, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
