#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
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
    vec4 _539 = _115;
    _539.x = _132.x;
    _539.y = _132.y;
    vec4 _543 = vec4(0.0);
    _543.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _543.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _156 = (_539.xy * _543.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _547 = vec4(0.0);
    _547.x = _156.x;
    _547.y = _156.y;
    _543.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _543.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _559 = _543;
    _559.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _559.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _567 = _559;
    _567.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _567.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _224 = (_539.xy * _567.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _571 = vec4(0.0);
    _571.x = _224.x;
    _571.y = _224.y;
    float _230 = _93.z;
    float _238 = (_230 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _576 = _539;
    _576.x = _238;
    float _242 = max(_238, 0.0);
    _576.x = _242;
    float _534;
    if (_242 == 0.0)
    {
        _534 = 0.0;
    }
    else
    {
        _534 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_242)));
    }
    _567.x = _534;
    vec3 _262 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _576.x = _262.x;
    _576.y = _262.y;
    _576.z = _262.z;
    vec3 _277 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _576.xyz;
    vec4 _593 = _576;
    _593.x = _277.x;
    _593.y = _277.y;
    _593.z = _277.z;
    vec3 _292 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _593.xyz;
    float _294 = _292.x;
    vec4 _599 = _593;
    _599.x = _294;
    _599.y = _292.y;
    _599.z = _292.z;
    _599.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _599.xyz), 0.0, 1.0);
    _567.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _567.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _567.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _329 = (_567.xyz * _599.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _613 = _599;
    _613.x = _329.x;
    _613.y = _329.y;
    _613.z = _329.z;
    vec3 _338 = min(_613.xyz, vec3(1.0));
    vec4 _619 = _613;
    _619.x = _338.x;
    _619.y = _338.y;
    _619.z = _338.z;
    vec4 _655 = vec4(0.0);
    _655.x = _93.x;
    _655.y = _93.y;
    _655.z = _230;
    vec4 _679 = vec4(_619.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_294, _292.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _462 = abs((_679.xyz * 2.0) - _619.xyz);
    wxlGPlain = max(max(_462.x, _462.y), _462.z);
    gl_Position = vec4(_123.x, -_123.y, _123.zw);
    color0 = _679;
    color1 = vec4(0.0);
    texcoord0 = _547;
    texcoord1 = vec4((_539.xy * _543.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_539.yx * _559.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _571;
    texcoord3 = _655;
    texcoord4 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_534, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
