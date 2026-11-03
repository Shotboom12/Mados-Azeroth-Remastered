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
    vec2 _177 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _630 = _160;
    _630.x = _177.x;
    _630.y = _177.y;
    vec4 _634 = vec4(0.0);
    _634.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _634.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _199 = (_630.yx * _634.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _638 = vec4(0.0);
    _638.x = _199.x;
    _638.y = _199.y;
    _634.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _634.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _650 = _634;
    _650.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _650.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _249 = _138.z;
    float _257 = (_249 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _659 = _630;
    _659.x = _257;
    float _261 = max(_257, 0.0);
    _659.x = _261;
    float _627;
    if (_261 == 0.0)
    {
        _627 = 0.0;
    }
    else
    {
        _627 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_261)));
    }
    vec4 _665 = _650;
    _665.x = _627;
    vec3 _282 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _659.x = _282.x;
    _659.y = _282.y;
    _659.z = _282.z;
    vec3 _297 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _659.xyz;
    vec4 _676 = _659;
    _676.x = _297.x;
    _676.y = _297.y;
    _676.z = _297.z;
    vec3 _321 = -_138.xyz;
    float _325 = dot(_321, _321);
    vec4 _806 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _676.xyz, _325);
    _806.w = inversesqrt(abs(_325));
    vec3 _342 = (_321 * _806.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _665.x = _342.x;
    _665.y = _342.y;
    _665.z = _342.z;
    vec4 _594 = _665 * inversesqrt(dot(_665.xyz, _665.xyz));
    vec4 _699 = vec4(0.0);
    _699.x = _594.x;
    _699.y = _594.y;
    _699.z = _594.z;
    float _363 = dot(_699.xyz, _806.xyz);
    vec4 _705 = _806;
    _705.w = _363;
    _705.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _705.xyz), 0.0, 1.0);
    _665.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _665.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _665.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _807 = vec4((_665.xyz * _705.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _363);
    vec3 _402 = min(_807.xyz, vec3(1.0));
    vec4 _721 = _807;
    _721.x = _402.x;
    _721.y = _402.y;
    _721.z = _402.z;
    float _422 = max(_363, 0.0);
    float _628;
    if (_422 == 0.0)
    {
        _628 = 0.0;
    }
    else
    {
        _628 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_422)));
    }
    _665.x = _628;
    vec4 _769 = vec4(0.0);
    _769.x = _138.x;
    _769.y = _138.y;
    _769.z = _249;
    vec4 _616 = optPush.clipToTarget * ((_138.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _160);
    gl_Position = vec4(_616.x, -_616.y, _616.zw);
    color0 = vec4(_721.xyz * vec3(0.5), 1.0);
    color1 = vec4(_665.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _638;
    texcoord1 = vec4((_630.yx * _634.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_630.xy * _650.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _769;
    texcoord4 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_627, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
