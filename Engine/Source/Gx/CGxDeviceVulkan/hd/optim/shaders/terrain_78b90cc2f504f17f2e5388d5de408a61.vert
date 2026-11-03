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
layout(location = 4) out vec4 texcoord2;
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _93 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _115 = (_93.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_93.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_93.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _123 = (_93.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _115;
    vec2 _132 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _537 = _115;
    _537.x = _132.x;
    _537.y = _132.y;
    vec4 _541 = vec4(0.0);
    _541.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _541.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _156 = (_537.xy * _541.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _545 = vec4(0.0);
    _545.x = _156.x;
    _545.y = _156.y;
    _541.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _541.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _557 = _541;
    _557.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _557.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _565 = _557;
    _565.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _565.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _224 = (_537.xy * _565.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _569 = vec4(0.0);
    _569.x = _224.x;
    _569.y = _224.y;
    float _230 = _93.z;
    float _238 = (_230 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _574 = _537;
    _574.x = _238;
    float _242 = max(_238, 0.0);
    _574.x = _242;
    float _532;
    if (_242 == 0.0)
    {
        _532 = 0.0;
    }
    else
    {
        _532 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_242)));
    }
    _565.x = _532;
    vec3 _262 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _574.x = _262.x;
    _574.y = _262.y;
    _574.z = _262.z;
    vec3 _277 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _574.xyz;
    vec4 _591 = _574;
    _591.x = _277.x;
    _591.y = _277.y;
    _591.z = _277.z;
    vec3 _292 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _591.xyz;
    float _294 = _292.x;
    vec4 _597 = _591;
    _597.x = _294;
    _597.y = _292.y;
    _597.z = _292.z;
    _597.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _597.xyz), 0.0, 1.0);
    _565.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _565.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _565.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _329 = (_565.xyz * _597.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _611 = _597;
    _611.x = _329.x;
    _611.y = _329.y;
    _611.z = _329.z;
    vec3 _338 = min(_611.xyz, vec3(1.0));
    vec4 _617 = _611;
    _617.x = _338.x;
    _617.y = _338.y;
    _617.z = _338.z;
    vec4 _653 = vec4(0.0);
    _653.x = _93.x;
    _653.y = _93.y;
    _653.z = _230;
    vec4 _677 = vec4(_617.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_294, _292.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _460 = abs((_677.xyz * 2.0) - _617.xyz);
    wxlGPlain = max(max(_460.x, _460.y), _460.z);
    gl_Position = vec4(_123.x, -_123.y, _123.zw);
    color0 = _677;
    color1 = vec4(0.0);
    texcoord0 = _545;
    texcoord1 = vec4((_537.xy * _541.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_537.yx * _557.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _569;
    texcoord3 = _653;
    texcoord4 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_532, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
