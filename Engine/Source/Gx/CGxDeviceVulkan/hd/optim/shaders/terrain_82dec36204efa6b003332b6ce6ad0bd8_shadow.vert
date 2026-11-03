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
    vec4 _114 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _136 = (_114.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_114.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_114.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _153 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _484 = _136;
    _484.x = _153.x;
    _484.y = _153.y;
    vec4 _488 = vec4(0.0);
    _488.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _488.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _175 = (_484.xy * _488.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _492 = vec4(0.0);
    _492.x = _175.x;
    _492.y = _175.y;
    _488.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _488.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _197 = (_484.xy * _488.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _500 = vec4(0.0);
    _500.x = _197.x;
    _500.y = _197.y;
    float _203 = _114.z;
    float _211 = (_203 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _484.x = _211;
    float _215 = max(_211, 0.0);
    _484.x = _215;
    float _482;
    if (_215 == 0.0)
    {
        _482 = 0.0;
    }
    else
    {
        _482 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_215)));
    }
    _488.x = _482;
    vec3 _237 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _484.x = _237.x;
    _484.y = _237.y;
    _484.z = _237.z;
    vec3 _252 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _484.xyz;
    vec4 _522 = _484;
    _522.x = _252.x;
    _522.y = _252.y;
    _522.z = _252.z;
    vec3 _267 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _522.xyz;
    vec4 _528 = _522;
    _528.x = _267.x;
    _528.y = _267.y;
    _528.z = _267.z;
    _528.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _528.xyz), 0.0, 1.0);
    _488.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _488.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _488.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _302 = (_488.xyz * _528.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _542 = _528;
    _542.x = _302.x;
    _542.y = _302.y;
    _542.z = _302.z;
    vec3 _312 = min(_542.xyz, vec3(1.0));
    vec4 _548 = _542;
    _548.x = _312.x;
    _548.y = _312.y;
    _548.z = _312.z;
    vec4 _584 = vec4(0.0);
    _584.x = _114.x;
    _584.y = _114.y;
    _584.z = _203;
    vec4 _471 = optPush.clipToTarget * ((_114.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _136);
    gl_Position = vec4(_471.x, -_471.y, _471.zw);
    color0 = vec4(_548.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _492;
    texcoord1 = _500;
    texcoord3 = _584;
    texcoord4 = vec4(dot(_114, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_114, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_114, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_114, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_482, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
