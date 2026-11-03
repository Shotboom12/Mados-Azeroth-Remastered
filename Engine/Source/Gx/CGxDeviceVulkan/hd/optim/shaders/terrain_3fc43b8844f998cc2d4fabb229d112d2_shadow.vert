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
    vec4 _659 = _160;
    _659.x = _175.x;
    _659.y = _175.y;
    _659.z = _175.z;
    vec3 _190 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _659.xyz;
    vec4 _665 = _659;
    _665.x = _190.x;
    _665.y = _190.y;
    _665.z = _190.z;
    vec3 _205 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _665.xyz;
    float _207 = _205.x;
    vec4 _671 = _665;
    _671.x = _207;
    _671.y = _205.y;
    _671.z = _205.z;
    vec3 _213 = _138.xyz;
    float _216 = dot(_213, _671.xyz);
    vec4 _848 = vec4(_207, _205.yz, _216);
    _848.w = _216 + _216;
    vec3 _232 = (_848.xyz * (-_848.www)) + _213;
    vec4 _683 = vec4(0.0);
    _683.x = _232.x;
    _683.y = _232.y;
    float _238 = _232.z;
    _683.z = _238;
    vec3 _245 = _683.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _689 = vec4(0.0);
    _689.x = _245.x;
    _689.y = _245.y;
    _689.z = _245.z;
    vec3 _261 = (_683.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _689.xyz;
    vec4 _849 = vec4(_261.xy, _238, _261.z);
    vec3 _277 = (_849.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _849.xyw;
    vec4 _701 = vec4(0.0);
    _701.x = _277.x;
    _701.y = _277.y;
    _701.z = _277.z;
    vec2 _292 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _849.x = _292.x;
    _849.y = _292.y;
    _689.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _689.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _314 = (_849.xy * _689.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _715 = vec4(0.0);
    _715.x = _314.x;
    _715.y = _314.y;
    float _320 = _138.z;
    float _328 = (_320 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _848.w = _328;
    float _332 = max(_328, 0.0);
    _848.w = _332;
    float _656;
    if (_332 == 0.0)
    {
        _656 = 0.0;
    }
    else
    {
        _656 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_332)));
    }
    _849.x = _656;
    vec3 _349 = -_213;
    float _353 = dot(_349, _349);
    _848.w = _353;
    _848.w = inversesqrt(abs(_353));
    vec3 _370 = (_349 * _848.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _849.x = _370.x;
    _849.y = _370.y;
    _849.z = _370.z;
    vec4 _623 = _849 * inversesqrt(dot(_849.xyz, _849.xyz));
    _689.x = _623.x;
    _689.y = _623.y;
    _689.z = _623.z;
    float _391 = dot(_689.xyz, _848.xyz);
    vec4 _748 = _848;
    _748.w = _391;
    _748.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _748.xyz), 0.0, 1.0);
    _849.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _849.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _849.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _850 = vec4((_849.xyz * _748.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _391);
    vec3 _430 = min(_850.xyz, vec3(1.0));
    vec4 _764 = _850;
    _764.x = _430.x;
    _764.y = _430.y;
    _764.z = _430.z;
    float _451 = max(_391, 0.0);
    float _657;
    if (_451 == 0.0)
    {
        _657 = 0.0;
    }
    else
    {
        _657 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_451)));
    }
    _849.x = _657;
    vec4 _812 = vec4(0.0);
    _812.x = _138.x;
    _812.y = _138.y;
    _812.z = _320;
    vec4 _645 = optPush.clipToTarget * ((_138.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _160);
    gl_Position = vec4(_645.x, -_645.y, _645.zw);
    color0 = vec4(_764.xyz * v2.xyz, 1.0);
    color1 = vec4(_849.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _701;
    texcoord1 = _715;
    texcoord3 = _812;
    texcoord4 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_656, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
