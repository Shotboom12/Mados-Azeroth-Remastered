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
    vec4 _680 = _160;
    _680.x = _175.x;
    _680.y = _175.y;
    _680.z = _175.z;
    vec3 _190 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _680.xyz;
    vec4 _686 = _680;
    _686.x = _190.x;
    _686.y = _190.y;
    _686.z = _190.z;
    vec3 _205 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _686.xyz;
    float _207 = _205.x;
    vec4 _692 = _686;
    _692.x = _207;
    _692.y = _205.y;
    _692.z = _205.z;
    vec3 _213 = _138.xyz;
    float _216 = dot(_213, _692.xyz);
    vec4 _877 = vec4(_207, _205.yz, _216);
    _877.w = _216 + _216;
    vec3 _232 = (_877.xyz * (-_877.www)) + _213;
    vec4 _704 = vec4(0.0);
    _704.x = _232.x;
    _704.y = _232.y;
    float _238 = _232.z;
    _704.z = _238;
    vec3 _245 = _704.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _710 = vec4(0.0);
    _710.x = _245.x;
    _710.y = _245.y;
    _710.z = _245.z;
    vec3 _261 = (_704.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _710.xyz;
    vec4 _878 = vec4(_261.xy, _238, _261.z);
    vec3 _277 = (_878.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _878.xyw;
    vec4 _722 = vec4(0.0);
    _722.x = _277.x;
    _722.y = _277.y;
    _722.z = _277.z;
    vec2 _292 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    _878.x = _292.x;
    _878.y = _292.y;
    _710.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _710.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _740 = _710;
    _740.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _740.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _342 = _138.z;
    float _350 = (_342 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _877.w = _350;
    float _354 = max(_350, 0.0);
    _877.w = _354;
    float _677;
    if (_354 == 0.0)
    {
        _677 = 0.0;
    }
    else
    {
        _677 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_354)));
    }
    vec4 _755 = _878;
    _755.x = _677;
    vec3 _371 = -_213;
    float _375 = dot(_371, _371);
    _877.w = _375;
    _877.w = inversesqrt(abs(_375));
    vec3 _392 = (_371 * _877.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _755.x = _392.x;
    _755.y = _392.y;
    _755.z = _392.z;
    vec4 _644 = _755 * inversesqrt(dot(_755.xyz, _755.xyz));
    vec4 _771 = _740;
    _771.x = _644.x;
    _771.y = _644.y;
    _771.z = _644.z;
    float _413 = dot(_771.xyz, _877.xyz);
    vec4 _777 = _877;
    _777.w = _413;
    _777.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _777.xyz), 0.0, 1.0);
    _755.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _755.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _755.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _880 = vec4((_755.xyz * _777.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _413);
    vec3 _452 = min(_880.xyz, vec3(1.0));
    vec4 _793 = _880;
    _793.x = _452.x;
    _793.y = _452.y;
    _793.z = _452.z;
    float _472 = max(_413, 0.0);
    float _678;
    if (_472 == 0.0)
    {
        _678 = 0.0;
    }
    else
    {
        _678 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_472)));
    }
    _755.x = _678;
    vec4 _841 = vec4(0.0);
    _841.x = _138.x;
    _841.y = _138.y;
    _841.z = _342;
    vec4 _666 = optPush.clipToTarget * ((_138.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _160);
    gl_Position = vec4(_666.x, -_666.y, _666.zw);
    color0 = vec4(_793.xyz * vec3(0.5), 1.0);
    color1 = vec4(_755.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _722;
    texcoord1 = vec4((_878.yx * _710.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_878.xy * _740.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _841;
    texcoord4 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_677, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
