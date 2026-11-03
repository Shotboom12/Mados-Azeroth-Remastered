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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _109 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _131 = (_109.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_109.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_109.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    float _149 = (_109.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _392 = _109;
    _392.x = _149;
    float _153 = max(_149, 0.0);
    _392.x = _153;
    float _389;
    if (_153 == 0.0)
    {
        _389 = 0.0;
    }
    else
    {
        _389 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_153)));
    }
    vec4 _398 = _131;
    _398.x = _389;
    vec2 _176 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _392.x = _176.x;
    _392.y = _176.y;
    _398.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _398.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _198 = (_392.xy * _398.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _411 = vec4(0.0);
    _411.x = _198.x;
    _411.y = _198.y;
    _398.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _398.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _220 = (_392.xy * _398.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _419 = vec4(0.0);
    _419.x = _220.x;
    _419.y = _220.y;
    vec3 _232 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _392.x = _232.x;
    _392.y = _232.y;
    _392.z = _232.z;
    vec3 _247 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _392.xyz;
    vec4 _429 = _392;
    _429.x = _247.x;
    _429.y = _247.y;
    _429.z = _247.z;
    vec3 _262 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _429.xyz;
    vec4 _435 = _429;
    _435.x = _262.x;
    _435.y = _262.y;
    _435.z = _262.z;
    _435.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _435.xyz), 0.0, 1.0);
    _398.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _398.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _398.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _297 = (_398.xyz * _435.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _449 = _435;
    _449.x = _297.x;
    _449.y = _297.y;
    _449.z = _297.z;
    vec3 _307 = min(_449.xyz, vec3(1.0));
    vec4 _455 = _449;
    _455.x = _307.x;
    _455.y = _307.y;
    _455.z = _307.z;
    vec4 _378 = optPush.clipToTarget * ((_109.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _131);
    gl_Position = vec4(_378.x, -_378.y, _378.zw);
    color0 = vec4(_455.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _411;
    texcoord1 = _419;
    fog0 = min(_389, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
