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
    vec2 _131 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _514 = _114;
    _514.x = _131.x;
    _514.y = _131.y;
    vec4 _518 = vec4(0.0);
    _518.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _518.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _155 = (_514.yx * _518.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _522 = vec4(0.0);
    _522.x = _155.x;
    _522.y = _155.y;
    _518.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _518.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _534 = _518;
    _534.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _534.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _207 = _92.z;
    float _215 = (_207 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _543 = _514;
    _543.x = _215;
    float _219 = max(_215, 0.0);
    _543.x = _219;
    float _509;
    if (_219 == 0.0)
    {
        _509 = 0.0;
    }
    else
    {
        _509 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_219)));
    }
    vec4 _549 = _534;
    _549.x = _509;
    vec3 _239 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _543.x = _239.x;
    _543.y = _239.y;
    _543.z = _239.z;
    vec3 _254 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _543.xyz;
    vec4 _560 = _543;
    _560.x = _254.x;
    _560.y = _254.y;
    _560.z = _254.z;
    vec3 _269 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _560.xyz;
    float _271 = _269.x;
    vec4 _566 = _560;
    _566.x = _271;
    _566.y = _269.y;
    _566.z = _269.z;
    _566.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _566.xyz), 0.0, 1.0);
    _549.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _549.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _549.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _306 = (_549.xyz * _566.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _580 = _566;
    _580.x = _306.x;
    _580.y = _306.y;
    _580.z = _306.z;
    vec3 _315 = min(_580.xyz, vec3(1.0));
    vec4 _586 = _580;
    _586.x = _315.x;
    _586.y = _315.y;
    _586.z = _315.z;
    vec4 _622 = vec4(0.0);
    _622.x = _92.x;
    _622.y = _92.y;
    _622.z = _207;
    vec4 _646 = vec4(_586.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_271, _269.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _439 = abs((_646.xyz * 2.0) - _586.xyz);
    wxlGPlain = max(max(_439.x, _439.y), _439.z);
    gl_Position = vec4(_122.x, -_122.y, _122.zw);
    color0 = _646;
    color1 = vec4(0.0);
    texcoord0 = _522;
    texcoord1 = vec4((_514.yx * _518.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_514.xy * _534.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _622;
    texcoord4 = vec4(dot(_92, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_92, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_92, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_92, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_509, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
