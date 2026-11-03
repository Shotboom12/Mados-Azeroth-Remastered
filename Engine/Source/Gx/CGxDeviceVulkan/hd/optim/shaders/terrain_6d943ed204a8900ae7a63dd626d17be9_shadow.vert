#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _634;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _133 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _155 = (_133.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_133.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_133.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _172 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _515 = _155;
    _515.x = _172.x;
    _515.y = _172.y;
    vec4 _519;
    _519.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _519.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _194 = (_515.xy * _519.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _523 = vec4(0.0);
    _523.x = _194.x;
    _523.y = _194.y;
    vec4 _527;
    _527.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _527.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _216 = (_515.xy * _527.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _531 = vec4(0.0);
    _531.x = _216.x;
    _531.y = _216.y;
    float _230 = (_133.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _536 = _133;
    _536.w = _230;
    float _234 = max(_230, 0.0);
    _536.w = _234;
    float _512;
    if (_234 == 0.0)
    {
        _512 = 0.0;
    }
    else
    {
        _512 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_234)));
    }
    _515.x = _512;
    vec3 _251 = -_536.xyz;
    float _255 = dot(_251, _251);
    vec4 _547 = _536;
    _547.w = _255;
    float _469 = inversesqrt(abs(_255));
    _547.w = _469;
    vec4 _644 = vec4(((-_547.xyz) * _547.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _469);
    vec3 _474 = _644.xyz;
    vec4 _479 = _644 * inversesqrt(dot(_474, _474));
    _515.x = _479.x;
    _515.y = _479.y;
    _515.z = _479.z;
    vec3 _295 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _644.x = _295.x;
    _644.y = _295.y;
    _644.z = _295.z;
    vec3 _310 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _644.xyz;
    vec4 _570 = _644;
    _570.x = _310.x;
    _570.y = _310.y;
    _570.z = _310.z;
    vec3 _325 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _570.xyz;
    float _327 = _325.x;
    vec4 _576 = _570;
    _576.x = _327;
    _576.y = _325.y;
    _576.z = _325.z;
    float _336 = dot(_515.xyz, _576.xyz);
    vec4 _645 = vec4(_327, _325.yz, _336);
    _645.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _645.xyz), 0.0, 1.0);
    vec4 _586 = _515;
    _586.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _586.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _586.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _365 = (_586.xyz * _645.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _592 = _645;
    _592.x = _365.x;
    _592.y = _365.y;
    _592.z = _365.z;
    vec3 _375 = min(_592.xyz, vec3(1.0));
    vec4 _598 = _592;
    _598.x = _375.x;
    _598.y = _375.y;
    _598.z = _375.z;
    float _395 = max(_336, 0.0);
    float _513;
    if (_395 == 0.0)
    {
        _513 = 0.0;
    }
    else
    {
        _513 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_395)));
    }
    _586.x = _513;
    vec4 _501 = optPush.clipToTarget * ((_133.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _155);
    gl_Position = vec4(_501.x, -_501.y, _501.zw);
    color0 = vec4(_598.xyz * vec3(0.5), 1.0);
    color1 = vec4(_586.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _523;
    texcoord1 = _531;
    fog0 = min(_512, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
