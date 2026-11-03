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
    vec2 _131 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _512 = _114;
    _512.x = _131.x;
    _512.y = _131.y;
    vec4 _516 = vec4(0.0);
    _516.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _516.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _155 = (_512.yx * _516.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _520 = vec4(0.0);
    _520.x = _155.x;
    _520.y = _155.y;
    _516.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _516.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _532 = _516;
    _532.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _532.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _207 = _92.z;
    float _215 = (_207 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _541 = _512;
    _541.x = _215;
    float _219 = max(_215, 0.0);
    _541.x = _219;
    float _507;
    if (_219 == 0.0)
    {
        _507 = 0.0;
    }
    else
    {
        _507 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_219)));
    }
    vec4 _547 = _532;
    _547.x = _507;
    vec3 _239 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _541.x = _239.x;
    _541.y = _239.y;
    _541.z = _239.z;
    vec3 _254 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _541.xyz;
    vec4 _558 = _541;
    _558.x = _254.x;
    _558.y = _254.y;
    _558.z = _254.z;
    vec3 _269 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _558.xyz;
    float _271 = _269.x;
    vec4 _564 = _558;
    _564.x = _271;
    _564.y = _269.y;
    _564.z = _269.z;
    _564.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _564.xyz), 0.0, 1.0);
    _547.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _547.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _547.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _306 = (_547.xyz * _564.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _578 = _564;
    _578.x = _306.x;
    _578.y = _306.y;
    _578.z = _306.z;
    vec3 _315 = min(_578.xyz, vec3(1.0));
    vec4 _584 = _578;
    _584.x = _315.x;
    _584.y = _315.y;
    _584.z = _315.z;
    vec4 _620 = vec4(0.0);
    _620.x = _92.x;
    _620.y = _92.y;
    _620.z = _207;
    vec4 _644 = vec4(_584.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_271, _269.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _437 = abs((_644.xyz * 2.0) - _584.xyz);
    wxlGPlain = max(max(_437.x, _437.y), _437.z);
    gl_Position = vec4(_122.x, -_122.y, _122.zw);
    color0 = _644;
    color1 = vec4(0.0);
    texcoord0 = _520;
    texcoord1 = vec4((_512.yx * _516.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_512.xy * _532.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _620;
    texcoord4 = vec4(dot(_92, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_92, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_92, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_507, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
