#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _635;





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
    vec4 _133 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _155 = (_133.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_133.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_133.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _172 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _516 = _155;
    _516.x = _172.x;
    _516.y = _172.y;
    vec4 _520;
    _520.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _520.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _194 = (_516.xy * _520.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _524 = vec4(0.0);
    _524.x = _194.x;
    _524.y = _194.y;
    vec4 _528;
    _528.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _528.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _216 = (_516.xy * _528.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _532 = vec4(0.0);
    _532.x = _216.x;
    _532.y = _216.y;
    float _230 = (_133.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _537 = _133;
    _537.w = _230;
    float _234 = max(_230, 0.0);
    _537.w = _234;
    float _513;
    if (_234 == 0.0)
    {
        _513 = 0.0;
    }
    else
    {
        _513 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_234)));
    }
    _516.x = _513;
    vec3 _251 = -_537.xyz;
    float _255 = dot(_251, _251);
    vec4 _548 = _537;
    _548.w = _255;
    float _470 = inversesqrt(abs(_255));
    _548.w = _470;
    vec4 _645 = vec4(((-_548.xyz) * _548.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _470);
    vec3 _475 = _645.xyz;
    vec4 _480 = _645 * inversesqrt(dot(_475, _475));
    _516.x = _480.x;
    _516.y = _480.y;
    _516.z = _480.z;
    vec3 _295 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _645.x = _295.x;
    _645.y = _295.y;
    _645.z = _295.z;
    vec3 _310 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _645.xyz;
    vec4 _571 = _645;
    _571.x = _310.x;
    _571.y = _310.y;
    _571.z = _310.z;
    vec3 _325 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _571.xyz;
    float _327 = _325.x;
    vec4 _577 = _571;
    _577.x = _327;
    _577.y = _325.y;
    _577.z = _325.z;
    float _336 = dot(_516.xyz, _577.xyz);
    vec4 _646 = vec4(_327, _325.yz, _336);
    _646.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _646.xyz), 0.0, 1.0);
    vec4 _587 = _516;
    _587.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _587.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _587.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _365 = (_587.xyz * _646.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _593 = _646;
    _593.x = _365.x;
    _593.y = _365.y;
    _593.z = _365.z;
    vec3 _375 = min(_593.xyz, vec3(1.0));
    vec4 _599 = _593;
    _599.x = _375.x;
    _599.y = _375.y;
    _599.z = _375.z;
    float _396 = max(_336, 0.0);
    float _514;
    if (_396 == 0.0)
    {
        _514 = 0.0;
    }
    else
    {
        _514 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_396)));
    }
    _587.x = _514;
    vec4 _502 = optPush.clipToTarget * ((_133.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _155);
    gl_Position = vec4(_502.x, -_502.y, _502.zw);
    color0 = vec4(_599.xyz * v2.xyz, 1.0);
    color1 = vec4(_587.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _524;
    texcoord1 = _532;
    fog0 = min(_513, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
