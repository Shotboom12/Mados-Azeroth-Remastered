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
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _92 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _114 = (_92.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_92.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_92.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _122 = (_92.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _114;
    vec2 _131 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _492 = _114;
    _492.x = _131.x;
    _492.y = _131.y;
    vec4 _496 = vec4(0.0);
    _496.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _496.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _155 = (_492.xy * _496.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _500 = vec4(0.0);
    _500.x = _155.x;
    _500.y = _155.y;
    _496.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _496.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _177 = (_492.xy * _496.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _508 = vec4(0.0);
    _508.x = _177.x;
    _508.y = _177.y;
    float _184 = _92.z;
    float _192 = (_184 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _492.x = _192;
    float _196 = max(_192, 0.0);
    _492.x = _196;
    float _487;
    if (_196 == 0.0)
    {
        _487 = 0.0;
    }
    else
    {
        _487 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_196)));
    }
    _496.x = _487;
    vec3 _216 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _492.x = _216.x;
    _492.y = _216.y;
    _492.z = _216.z;
    vec3 _231 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _492.xyz;
    vec4 _530 = _492;
    _530.x = _231.x;
    _530.y = _231.y;
    _530.z = _231.z;
    vec3 _246 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _530.xyz;
    float _248 = _246.x;
    vec4 _536 = _530;
    _536.x = _248;
    _536.y = _246.y;
    _536.z = _246.z;
    _536.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _536.xyz), 0.0, 1.0);
    _496.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _496.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _496.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _283 = (_496.xyz * _536.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _550 = _536;
    _550.x = _283.x;
    _550.y = _283.y;
    _550.z = _283.z;
    vec3 _292 = min(_550.xyz, vec3(1.0));
    vec4 _556 = _550;
    _556.x = _292.x;
    _556.y = _292.y;
    _556.z = _292.z;
    vec4 _592 = vec4(0.0);
    _592.x = _92.x;
    _592.y = _92.y;
    _592.z = _184;
    vec4 _615 = vec4(_556.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_248, _246.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _417 = abs((_615.xyz * 2.0) - _556.xyz);
    wxlGPlain = max(max(_417.x, _417.y), _417.z);
    gl_Position = vec4(_122.x, -_122.y, _122.zw);
    color0 = _615;
    color1 = vec4(0.0);
    texcoord0 = _500;
    texcoord1 = _508;
    texcoord3 = _592;
    texcoord4 = vec4(dot(_92, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_92, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_92, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_487, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
